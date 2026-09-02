/*
  The site deploys to a GitHub Pages project URL, so every page lives under a
  path prefix (/obtheta-website). Astro applies that prefix to routes and to
  assets it processes itself, but not to paths written by hand in markup — so
  those go through withBase().

  If the chapter's own domain is ever pointed at the site, dropping `base` from
  astro.config.mjs is the only change needed: BASE_URL becomes "/" and every
  call below turns back into the plain path it started as.
*/
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site-root path ("/rush/") with the deploy base. */
export const withBase = (path: string) => `${BASE}${path}`;

/** Strip the deploy base off a live pathname, for comparing against routes. */
export const stripBase = (pathname: string) =>
  (BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname) || '/';
