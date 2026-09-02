import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

/*
  Generated rather than kept as a file in public/, so the URLs always match
  wherever the site is actually deployed — the previous static copy still
  listed a domain the site was not served from.
*/
const routes = ['/', '/rush/', '/brothers/', '/about/', '/faq/'];

export const GET: APIRoute = ({ site }) => {
  const urls = routes
    .map((r) => `  <url><loc>${new URL(withBase(r), site)}</loc></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
