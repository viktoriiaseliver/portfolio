// Social preview images (1200×630) in the site style: node scripts/og.cjs → public/og/*.png
// Copy comes from the site; re-run after changing headlines or covers.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const os = require('os');
const root = path.resolve(__dirname, '..');
const f = (p) => 'file://' + path.join(root, 'node_modules/@fontsource', p);
const css = `
@font-face{font-family:IS;font-weight:400;src:url(${f('instrument-sans/files/instrument-sans-latin-400-normal.woff2')})}
@font-face{font-family:IS;font-weight:500;src:url(${f('instrument-sans/files/instrument-sans-latin-500-normal.woff2')})}
@font-face{font-family:SER;font-style:italic;src:url(${f('instrument-serif/files/instrument-serif-latin-400-italic.woff2')})}
@font-face{font-family:AR;font-weight:700;src:url(${f('arimo/files/arimo-latin-700-normal.woff2')})}
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;font-family:IS;-webkit-font-smoothing:antialiased}
.p{width:1200px;height:630px;padding:56px;display:flex;flex-direction:column;justify-content:space-between;color:#fff;background:rgb(24,29,40)}
.cob{background:rgb(15,20,154)}.row{display:flex;justify-content:space-between;align-items:center}
.chip{padding:12px 22px;border-radius:120px;background:rgb(15,20,154);font-size:24px;font-weight:500}
.chip.d{background:rgba(255,255,255,.1)}.st{display:flex;gap:14px;align-items:center;font-size:24px;color:rgb(215,221,236)}
.dot{width:12px;height:12px;border-radius:50%;background:rgb(120,220,150)}
h1{font-weight:500;letter-spacing:-.05em;line-height:.92}.s{font-family:SER;font-style:italic;font-weight:400;letter-spacing:-.03em;color:rgb(215,221,236)}
.name{font-size:26px;font-weight:500}.mist{color:rgb(215,221,236)}.num{font-family:AR;font-weight:700;letter-spacing:-.05em}
.split{display:grid;grid-template-columns:1fr 1fr;padding:0;gap:0}.split>div{padding:56px;display:flex;flex-direction:column;justify-content:space-between}
.cover{background-size:cover;background-position:center}`;
const name = '<span class="name">Viktoriia Seliverstova</span>';
const cards = {
  'site.png': `<div class="p"><div class="row"><span class="chip">Senior Product Designer</span><span class="st"><i class="dot"></i>Available now · Remote across Europe</span></div>
    <h1 style="font-size:76px">I turn complicated workflows into software <span class="s">people pick up with little or no training.</span></h1>${name}</div>`,
  'works.png': `<div class="p cob"><div class="row">${name}<span class="st">Product work 25 · My products 5 · Graphic &amp; illustration 14</span></div>
    <div class="row" style="align-items:flex-end"><h1 style="font-size:260px;line-height:.78">Work</h1><span class="num" style="font-size:150px;line-height:.8">44</span></div></div>`,
  'about.png': `<div class="p"><div class="row"><span class="chip d"><span class="st" style="color:#fff"><i class="dot"></i>Available for new roles</span></span>${name}</div>
    <h1 style="font-size:150px;line-height:.86">Hi, I'm <span class="s">Viktoriia.</span></h1><span class="st">I'm a senior product designer.</span></div>`,
  'gamut.png': `<div class="p"><div class="row"><span class="chip d" style="font-size:20px;letter-spacing:.04em">IN APP STORE REVIEW</span>${name}</div>
    <h1 style="font-size:240px;line-height:.78;letter-spacing:-.07em">Gamut.</h1><span class="s" style="font-size:52px">Plan your palette, not just your posts.</span></div>`,
  'construction-crm.png': `<div class="p split"><div><span class="chip" style="align-self:flex-start">Operations &amp; government</span>
    <h1 style="font-size:104px;line-height:.88">Construction <span class="s">CRM.</span></h1><div class="row"><span class="num" style="font-size:72px">−8 min</span><span class="st">per order</span></div></div>
    <div class="cover" style="background-image:url(file://${path.join(root, 'public/assets/work/05.jpg')})"></div></div>`
};
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [file, body] of Object.entries(cards)) {
    // A file:// page may load the local fonts and covers; an in-memory page may not.
    const tmp = path.join(os.tmpdir(), 'og-card.html');
    fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`);
    await p.goto('file://' + tmp, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(root, 'public/og', file) });
    console.log('og/' + file);
  }
  await b.close();
})();
