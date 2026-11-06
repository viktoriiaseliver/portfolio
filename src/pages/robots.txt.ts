import type { APIRoute } from 'astro';
import { HIDE_FROM_SEARCH } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  // While hidden, crawling stays ALLOWED on purpose: a crawler that is blocked here never
  // reads the `noindex` meta tag or the X-Robots-Tag header, and the URL can still be listed
  // from external links. What goes away is the invitation — no sitemap is advertised.
  const sitemap = HIDE_FROM_SEARCH ? '' : `\nSitemap: ${new URL(base + '/sitemap.xml', site).href}\n`;
  return new Response(`User-agent: *\nAllow: /\nDisallow: ${base}/system\n${sitemap}`);
};
