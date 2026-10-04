import type { APIRoute } from 'astro';

/*
  Generated alongside sitemap.xml.ts and for the same reason: the sitemap
  line has to name the domain the site is actually served from, so it is
  built from `site` rather than written out by hand.
*/
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site)}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
