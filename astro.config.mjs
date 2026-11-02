import { defineConfig } from 'astro/config';

// Where the site lives. Now: GitHub Pages project URL. For seliver.design see README → Custom domain:
// set SITE_URL=https://seliver.design and BASE_PATH=/ (in .github/workflows/deploy.yml) and add public/CNAME.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://viktoriiaseliver.github.io',
  base: process.env.BASE_PATH ?? '/portfolio',
  trailingSlash: 'ignore'
});
