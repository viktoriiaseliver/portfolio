// Guards that the two halves of "keep this site out of search" agree: node scripts/no-index.cjs
//
// They live apart and cannot be generated from one another. HIDE_FROM_SEARCH in src/data/site.ts
// drives the meta tag and the sitemap hints through Astro; the X-Robots-Tag header lives in
// public/_headers, which Cloudflare Pages reads as a static file. Flip one and forget the other
// and nothing breaks loudly: the site simply becomes half-indexable, and the half that leaks is
// the CV PDF, which carries no meta tag at all.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const sitePath = path.join(root, 'src/data/site.ts');
const headersPath = path.join(root, 'public/_headers');

const site = fs.readFileSync(sitePath, 'utf8');
const flagMatch = site.match(/^export const HIDE_FROM_SEARCH\s*=\s*(true|false)\s*;/m);
if (!flagMatch) {
  console.error('FAIL  HIDE_FROM_SEARCH not found in src/data/site.ts');
  console.error('      The guard reads a literal `true` or `false`. If the flag became computed,');
  console.error('      this check stopped measuring anything and must be rewritten, not deleted.');
  process.exit(1);
}
const hidden = flagMatch[1] === 'true';

const headersExists = fs.existsSync(headersPath);
const headers = headersExists ? fs.readFileSync(headersPath, 'utf8') : '';
// Only count a directive that is actually live: not inside a comment line.
const headerNoindex = headers
  .split('\n')
  .filter((l) => !l.trim().startsWith('#'))
  .some((l) => /^\s*X-Robots-Tag:.*\bnoindex\b/i.test(l));

const report = (ok, msg) => console.log(`${ok ? 'ok  ' : 'FAIL'}  ${msg}`);

if (hidden === headerNoindex) {
  report(true, hidden
    ? 'hidden from search: HIDE_FROM_SEARCH=true and X-Robots-Tag: noindex both present'
    : 'findable: HIDE_FROM_SEARCH=false and no noindex header');
  process.exit(0);
}

report(false, 'the two halves disagree — the site is half-indexable');
console.error(`      src/data/site.ts : HIDE_FROM_SEARCH = ${hidden}`);
console.error(`      public/_headers  : X-Robots-Tag noindex = ${headerNoindex}${headersExists ? '' : ' (file missing)'}`);
console.error(hidden
  ? '      Pages carry noindex, but the PDF and other non-HTML files do not. Add the header.'
  : '      The header still hides everything, including from people you send the link to in search. Remove it.');
process.exit(1);
