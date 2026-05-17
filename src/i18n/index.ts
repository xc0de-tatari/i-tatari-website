import { articles } from '../data/articles';
import { gccPages } from '../data/gcc-pages';

export type Locale = 'de' | 'en';

export const locales: Locale[] = ['de', 'en'];

export const localeLabels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

/** Paired routes for hreflang + language switcher */
const routePairs: Array<{ de: string; en: string }> = [
  { de: '/', en: '/en/' },
  { de: '/immobilien-kaufen-aegypten', en: '/en/buy-property-egypt' },
  { de: '/offplan-immobilien-aegypten', en: '/en/offplan-property-egypt' },
  { de: '/immobilien-dubai', en: '/en/real-estate-dubai' },
  { de: '/immobilien-saudi-arabien', en: '/en/real-estate-saudi-arabia' },
  { de: '/projekte/west-wind', en: '/en/projects/west-wind' },
  { de: '/projekte', en: '/en/projects' },
  { de: '/wissen', en: '/en/insights' },
  { de: '/investieren', en: '/en/invest' },
  { de: '/immobilien-auf-raten-aegypten', en: '/en/installment-property-egypt' },
  { de: '/warum-tatari-investment', en: '/en/why-tatari' },
];

const pairByDe = new Map(routePairs.map((p) => [normalize(p.de), p.en]));
const pairByEn = new Map(routePairs.map((p) => [normalize(p.en), p.de]));

const englishArticleSlugs = new Set(
  articles.filter((a) => a.lang === 'en').map((a) => a.slug)
);

const gccSlugs = new Set(gccPages.map((p) => `/${p.slug}`));

function normalize(path: string): string {
  if (!path || path === '/') return '/';
  const p = path.split('?')[0].replace(/\/$/, '') || '/';
  return p;
}

/** Detect locale from URL path */
export function getLocale(pathname: string): Locale {
  const path = normalize(pathname);
  if (path === '/en' || path.startsWith('/en/')) return 'en';
  if (gccSlugs.has(path)) return 'en';
  const wissen = path.match(/^\/wissen\/([^/]+)$/);
  if (wissen && englishArticleSlugs.has(wissen[1])) return 'en';
  return 'de';
}

/** Alternate URL for language switcher (falls back to locale home) */
export function getAlternatePath(pathname: string, target: Locale): string {
  const path = normalize(pathname);
  const current = getLocale(pathname);

  if (current === target) return path;

  if (target === 'en') {
    const en = pairByDe.get(path);
    if (en) return en;
    if (path.startsWith('/wissen/') && englishArticleSlugs.has(path.split('/').pop()!)) {
      return path;
    }
    return '/en/';
  }

  const de = pairByEn.get(path);
  if (de) return de;
  if (gccSlugs.has(path)) return '/immobilien-kaufen-aegypten';
  if (path.startsWith('/wissen/')) {
    const slug = path.split('/').pop()!;
    if (englishArticleSlugs.has(slug)) return '/immobilien-kaufen-aegypten';
  }
  return '/';
}

export function getHreflangAlternates(pathname: string): Array<{ lang: string; href: string }> {
  const path = normalize(pathname);
  const site = 'https://www.i-tatari.com';
  const de = getAlternatePath(path, 'de');
  const en = getAlternatePath(path, 'en');
  return [
    { lang: 'de', href: `${site}${de === '/' ? '' : de}` },
    { lang: 'en', href: `${site}${en === '/' ? '' : en}` },
    { lang: 'x-default', href: `${site}${de === '/' ? '' : de}` },
  ];
}
