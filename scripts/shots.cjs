// Full-page screenshots of every page at given widths: node scripts/shots.cjs outDir [baseUrl]
const { chromium } = require('playwright');
const OUT = process.argv[2], BASE = process.argv[3] || 'http://localhost:4321/portfolio/';
const PAGES = ['', 'work', 'about', 'work/construction-crm', 'work/multi-asset-trading'];
(async () => {
  const b = await chromium.launch();
  for (const w of [1440, 768, 390]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
    for (const path of PAGES) {
      await p.goto(BASE + path); await p.waitForTimeout(300);
      await p.screenshot({ path: `${OUT}/${(path || 'home').replace('/', '-')}-${w}.png`, fullPage: true });
    }
    await p.close();
  }
  await b.close();
})();
