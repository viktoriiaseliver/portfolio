// Accessibility & layout audit: node scripts/audit.cjs [baseUrl]
// Checks every page at 320/390/768/1100/1440: horizontal overflow, text < 12px,
// WCAG contrast of every text node against its real background, tap targets < 44px.
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:4321/portfolio/';
const PAGES = ['', 'works', 'about', 'work/construction-crm', 'products/gamut', 'ai', '404', 'system'];
const WIDTHS = [320, 390, 639, 640, 768, 1099, 1100, 1440];

function probe() {
  const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]; };
  const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const mix = (a, b, t) => [0, 1, 2].map((i) => a[i] * t + b[i] * (1 - t));
  const bgOf = (el) => {
    const layers = [];
    for (let e = el; e; e = e.parentElement) {
      const s = getComputedStyle(e);
      if (s.backgroundImage !== 'none' && !s.backgroundImage.startsWith('linear-gradient')) return { img: true };
      let c = parse(s.backgroundColor);
      if (s.backgroundImage.startsWith('linear-gradient')) { const g = s.backgroundImage.match(/rgba?\([^)]+\)/); if (g) c = parse(g[0]); }
      if (c && c[3] > 0) { layers.push(c); if (c[3] >= 1) break; }
    }
    let out = [255, 255, 255];
    for (let i = layers.length - 1; i >= 0; i--) out = mix(layers[i], out, layers[i][3]);
    return { c: out };
  };
  const visible = (e) => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && !e.closest('[hidden],[aria-hidden="true"]'); };
  const res = { small: [], contrast: [], targets: [] };
  document.querySelectorAll('body *').forEach((el) => {
    if (!visible(el)) return;
    const text = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join(' ').trim();
    const s = getComputedStyle(el);
    if (text && !el.closest('[aria-disabled="true"],:disabled')) {
      const fs = parseFloat(s.fontSize);
      if (fs < 12) res.small.push(text.slice(0, 30) + ' ' + fs);
      const bg = bgOf(el);
      if (!bg.img) {
        let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity;
        const fg = parse(s.color); const fgc = mix(fg, bg.c, fg[3] * op);
        const L1 = lum(fgc), L2 = lum(bg.c), ratio = (Math.max(L1, L2) + .05) / (Math.min(L1, L2) + .05);
        const large = fs >= 24 || (fs >= 18.66 && +s.fontWeight >= 700);
        if (ratio < (large ? 3 : 4.5)) res.contrast.push(`${text.slice(0, 28)} | ${ratio.toFixed(2)} | .${[...el.classList].filter(c => !c.startsWith('astro')).join('.')}`);
      }
    }
    if (el.matches('a, button, input, [role=tab]') && !el.closest('p')) {
      const r = el.getBoundingClientRect();
      // Real hit area: probe just outside the box (covers ::after hit-area extensions).
      const hits = (x, y) => { const h = document.elementFromPoint(x, y); return h && (h === el || el.contains(h)); };
      const cx = r.left + r.width / 2, ext = (44 - r.height) / 2 - .5;
      const inView = r.top - ext >= 0 && r.bottom + ext <= innerHeight;
      const effective = r.height >= 44 || (inView ? hits(cx, r.top - ext) && hits(cx, r.bottom + ext) : !!el.closest('.seg'));
      if (!effective) res.targets.push(`${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 24)} ${Math.round(r.width)}x${Math.round(r.height)} .${[...el.classList].filter(c => !c.startsWith('astro')).join('.')}`);
    }
  });
  res.overflow = document.documentElement.scrollWidth - innerWidth;
  return res;
}

(async () => {
  const b = await chromium.launch();
  const agg = { small: new Set(), contrast: new Set(), targets: new Set(), overflow: [] , errors: [] };
  for (const w of WIDTHS) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    p.on('pageerror', (e) => agg.errors.push(e.message));
    for (const path of PAGES) {
      await p.goto(BASE + path); await p.waitForTimeout(300);
      const r = await p.evaluate(probe);
      if (r.overflow > 0) agg.overflow.push(`${w} /${path} +${r.overflow}`);
      r.small.forEach((x) => agg.small.add(x));
      r.contrast.forEach((x) => agg.contrast.add(`/${path} ${x}`));
      r.targets.forEach((x) => agg.targets.add(`/${path} ${x}`));
    }
    await p.close();
  }
  for (const k of ['overflow', 'errors', 'small', 'contrast', 'targets']) { const v = [...agg[k]]; console.log(`\n## ${k} (${v.length})`); v.slice(0, 80).forEach((x) => console.log('  ' + x)); }
  await b.close();
})();
