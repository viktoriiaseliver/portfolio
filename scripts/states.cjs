// Interaction + motion checks: node scripts/states.cjs [baseUrl]
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:4321/';
const fs = require('fs');
const probe = new Function('return (' + fs.readFileSync(__dirname + '/audit.cjs', 'utf8').match(/function probe\(\) \{[\s\S]*?\n\}/)[0] + ')()');
const out = [];
let fails = 0;
// Every assertion counts itself. The printed line used to be the only trace of a
// failed state: a `false` went out with the rest of the report and the script
// still exited 0, so anything reading rc called a broken page clean.
const say = (line, ok) => { out.push(line); if (!ok) fails++; };
const check = async (p, name) => { const r = await p.evaluate(probe); const bad = [...r.contrast, ...r.targets, ...r.small]; say(`${name}: ${bad.length ? bad.join(' ; ') : 'ok'}${r.overflow ? ' overflow+' + r.overflow : ''}`, !bad.length && r.overflow <= 0); };
(async () => {
  const b = await chromium.launch();
  // Phone states
  let p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto(BASE); await p.click('[data-nav-toggle]'); await check(p, 'phone menu open');
  await p.keyboard.press('Escape'); const menuHidden = await p.$eval('#nav-sheet', (e) => e.hidden); say('menu closes on Esc: ' + menuHidden, menuHidden === true);
  await p.goto(BASE + 'works'); await p.click('[data-sheet-open]'); await p.waitForTimeout(450); await check(p, 'phone filter sheet');
  const locked = await p.evaluate(() => document.body.style.overflow); say('body scroll locked: ' + locked, locked === 'hidden');
  const focusInSheet = await p.evaluate(() => !!document.activeElement.closest('[data-sheet]')); say('focus inside sheet: ' + focusInSheet, focusInSheet === true);
  await p.keyboard.press('Escape');
  const sheetHidden = await p.$eval('[data-sheet]', (e) => e.hidden), focusBackPill = await p.evaluate(() => !!document.activeElement.closest('[data-fpill]'));
  say(`sheet closes on Esc: ${sheetHidden}, focus back on pill: ${focusBackPill}`, sheetHidden === true && focusBackPill === true);
  await p.click('[data-sheet-open]'); await p.click('.sheet [data-view-pick="cards"]'); await p.click('.sheet-show'); await check(p, 'phone cards view');
  await p.close();
  // Desktop states
  p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + 'works'); await p.click('[data-dd-btn]'); await check(p, 'industry dropdown');
  await p.keyboard.press('Escape');
  const ddHidden = await p.$eval('[data-dd-list]', (e) => e.hidden), focusBackBtn = await p.evaluate(() => document.activeElement.hasAttribute('data-dd-btn'));
  say(`dropdown closes on Esc: ${ddHidden}, focus back: ${focusBackBtn}`, ddHidden === true && focusBackBtn === true);
  await p.click('.fbar [data-view-pick="index"]'); await check(p, 'index view');
  await p.click('.fbar [data-view-pick="cards"]'); await check(p, 'cards view');
  await p.goto(BASE + 'work/construction-crm'); await p.click('[data-depth-pick="short"] >> nth=0'); await check(p, 'case short');
  await p.close();
  // Reduced motion: nothing animates, nothing auto-advances
  p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  for (const path of ['', 'about', 'work/construction-crm', 'products/gamut']) {
    await p.goto(BASE + path); await p.waitForTimeout(200);
    const before = await p.evaluate(() => document.body.innerText);
    await p.waitForTimeout(3000);
    const anim = await p.evaluate(() => document.getAnimations().filter((a) => a.playState === 'running').length);
    const same = before === (await p.evaluate(() => document.body.innerText));
    say(`reduced motion /${path}: running animations ${anim}, content static ${same}`, anim === 0 && same === true);
  }
  await p.close();
  // Normal motion: loops run
  p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + 'about'); await p.waitForTimeout(300);
  const a1 = await p.textContent('[data-ds-btn]'); await p.waitForTimeout(2000); const a2 = await p.textContent('[data-ds-btn]');
  say(`about DS demo cycles: ${a1 !== a2} (${a1} → ${a2})`, a1 !== a2);
  await p.goto(BASE + 'work/construction-crm'); await p.evaluate(() => document.getElementById('problem').scrollIntoView({ block: 'center' })); await p.waitForTimeout(3000);
  const diaToggled = await p.$eval('[data-dia]', (e) => e.classList.contains('after')); say('case diagram auto-toggles: ' + diaToggled, diaToggled === true);
  console.log(out.join('\n')); await b.close();
  console.log(fails ? `\nFAIL: ${fails} state(s)` : '\nclean');
  process.exitCode = fails ? 1 : 0;
})();
