// Interaction + motion checks: node scripts/states.cjs [baseUrl]
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:4321/portfolio/';
const fs = require('fs');
const probe = new Function('return (' + fs.readFileSync(__dirname + '/audit.cjs', 'utf8').match(/function probe\(\) \{[\s\S]*?\n\}/)[0] + ')()');
const out = [];
const check = async (p, name) => { const r = await p.evaluate(probe); const bad = [...r.contrast, ...r.targets, ...r.small]; out.push(`${name}: ${bad.length ? bad.join(' ; ') : 'ok'}${r.overflow ? ' overflow+' + r.overflow : ''}`); };
(async () => {
  const b = await chromium.launch();
  // Phone states
  let p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto(BASE); await p.click('[data-nav-toggle]'); await check(p, 'phone menu open');
  await p.keyboard.press('Escape'); out.push('menu closes on Esc: ' + await p.$eval('#nav-sheet', (e) => e.hidden));
  await p.goto(BASE + 'work'); await p.click('[data-sheet-open]'); await p.waitForTimeout(450); await check(p, 'phone filter sheet');
  out.push('body scroll locked: ' + (await p.evaluate(() => document.body.style.overflow)));
  out.push('focus inside sheet: ' + (await p.evaluate(() => !!document.activeElement.closest('[data-sheet]'))));
  await p.keyboard.press('Escape'); out.push('sheet closes on Esc: ' + (await p.$eval('[data-sheet]', (e) => e.hidden)) + ', focus back on pill: ' + (await p.evaluate(() => !!document.activeElement.closest('[data-fpill]'))));
  await p.click('[data-sheet-open]'); await p.click('.sheet [data-view-pick="cards"]'); await p.click('.sheet-show'); await check(p, 'phone cards view');
  await p.close();
  // Desktop states
  p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + 'work'); await p.click('[data-dd-btn]'); await check(p, 'industry dropdown');
  await p.keyboard.press('Escape'); out.push('dropdown closes on Esc: ' + (await p.$eval('[data-dd-list]', (e) => e.hidden)) + ', focus back: ' + (await p.evaluate(() => document.activeElement.hasAttribute('data-dd-btn'))));
  await p.click('.fbar [data-view-pick="index"]'); await check(p, 'index view');
  await p.click('.fbar [data-view-pick="cards"]'); await check(p, 'cards view');
  await p.goto(BASE + 'work/construction-crm'); await p.click('[data-depth-pick="short"] >> nth=0'); await check(p, 'case short');
  await p.close();
  // Reduced motion: nothing animates, nothing auto-advances
  p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  for (const path of ['', 'about', 'work/construction-crm', 'work/multi-asset-trading']) {
    await p.goto(BASE + path); await p.waitForTimeout(200);
    const before = await p.evaluate(() => document.body.innerText);
    await p.waitForTimeout(3000);
    const anim = await p.evaluate(() => document.getAnimations().filter((a) => a.playState === 'running').length);
    const same = before === (await p.evaluate(() => document.body.innerText));
    out.push(`reduced motion /${path}: running animations ${anim}, content static ${same}`);
  }
  await p.close();
  // Normal motion: loops run
  p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + 'about'); await p.waitForTimeout(300);
  const a1 = await p.textContent('[data-ds-btn]'); await p.waitForTimeout(2000); const a2 = await p.textContent('[data-ds-btn]');
  out.push(`about DS demo cycles: ${a1 !== a2} (${a1} → ${a2})`);
  await p.goto(BASE + 'work/construction-crm'); await p.evaluate(() => document.getElementById('problem').scrollIntoView({ block: 'center' })); await p.waitForTimeout(3000);
  out.push('case diagram auto-toggles: ' + (await p.$eval('[data-dia]', (e) => e.classList.contains('after'))));
  console.log(out.join('\n')); await b.close();
})();
