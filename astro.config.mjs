import { defineConfig } from 'astro/config';

// Where the site lives: vseliver.com on Cloudflare Pages, served from the domain root.
// SITE_URL / BASE_PATH can override this for a preview build elsewhere.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://vseliver.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore'
});
