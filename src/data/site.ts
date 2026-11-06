export const EMAIL = 'viktoriia.seliver@gmail.com';
export const TELEGRAM = 'https://t.me/viktoriia_seliver';
export const LINKEDIN = 'https://linkedin.com/in/viktoriiaseliver';
// CV: put the PDF in public/ and set the path, e.g. '/viktoriia-seliverstova-cv.pdf'.
// While it is empty, every "Download CV" button stays hidden.
export const CV_URL = '/Viktoriia-Seliverstova-Product-Designer.pdf';
export const HAS_CV = CV_URL !== '';
export const WALKTHROUGH = `mailto:${EMAIL}?subject=20-minute%20walkthrough`;

export const STATUS = 'Available now · Remote across Europe';
export const LOCATION = 'Remote across Europe';

// Keep the site out of search results while the link still works for anyone you send it to.
// This drives the `noindex` meta tag and the sitemap hints. The matching HTTP header lives
// in public/_headers and is NOT generated from here — flip both, or neither.
// Note: robots.txt deliberately keeps crawling ALLOWED. Blocking crawl there would stop
// crawlers from ever reading `noindex`, and the URL could still be listed, bare and
// description-less, from external links. Guarded by scripts/no-index.cjs.
export const HIDE_FROM_SEARCH = true;
