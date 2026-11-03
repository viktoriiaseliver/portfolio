// sitemap.xml: every public page; drafts, /system, /cv and 404 are left out.
import type { APIRoute } from 'astro';
import type { Case } from '../cases/types';
import { published as aiPublished } from '../data/ai';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cases = Object.entries(import.meta.glob<{ default: Case }>('../cases/*.ts', { eager: true }))
    .filter(([p]) => !p.endsWith('/types.ts'))
    .map(([, m]) => m.default)
    .filter((c) => !c.draft)
    .map((c) => `/work/${c.slug}`);
  const paths = ['/', '/works', '/about', '/products/gamut', ...(aiPublished ? ['/ai'] : []), ...cases];
  const urls = paths.map((p) => `  <url><loc>${new URL(base + p, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
};
