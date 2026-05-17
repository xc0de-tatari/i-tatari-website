import { keywords, type KeywordEntry } from '../data/keywords';
import { keywordMappings } from '../data/keyword-mapping';

export interface PageSeoBundle {
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h2Suggestions: string[];
  faqKeywords: string[];
  metaKeywords: string[];
}

const pathPrimary: Record<string, string> = {
  '/': 'Offplan Immobilien Ägypten',
  '/immobilien-kaufen-aegypten': 'Immobilien in Ägypten kaufen',
  '/offplan-immobilien-aegypten': 'Offplan Immobilien Ägypten',
  '/immobilien-auf-raten-aegypten': 'Immobilien auf Raten Ägypten',
  '/immobilienfinanzierung-aegypten-deutsche': 'Immobilienfinanzierung Ägypten Deutsche',
  '/direkt-vom-bautraeger-aegypten': 'Immobilien direkt vom Bauträger Ägypten',
  '/rendite-immobilien-aegypten': 'Immobilien Renditepotenzial Ägypten',
  '/kliniken-kaufen-aegypten': 'Klinik kaufen Ägypten',
  '/bueros-kaufen-aegypten': 'Büro kaufen Ägypten',
  '/retail-pharmacy-investment-aegypten': 'Retail Investment Ägypten',
  '/warum-tatari-investment': 'Tatari Investment Ägypten',
  '/projekte/west-wind': 'West Wind Investment Sheikh Zayed',
};

function scoreOf(k: KeywordEntry) {
  return Number(k.score) || 0;
}

export function getKeywordsForPath(path: string, limit = 25): KeywordEntry[] {
  const slugs = keywords.filter((k) => {
    const target = keywordMappings.find((m) => m.keyword === k.keyword)?.pageTarget;
    return target === path;
  });
  if (slugs.length >= 5) {
    return [...slugs].sort((a, b) => scoreOf(b) - scoreOf(a)).slice(0, limit);
  }
  // fallback: pattern match on path segment
  const segment = path.split('/').filter(Boolean).pop() ?? '';
  return keywords
    .filter((k) => k.keyword.toLowerCase().includes(segment.replace(/-/g, ' ')) || k.cluster.toLowerCase().includes(segment))
    .sort((a, b) => scoreOf(b) - scoreOf(a))
    .slice(0, limit);
}

export function getPageSeoBundle(path: string, overrides?: Partial<PageSeoBundle>): PageSeoBundle {
  const list = getKeywordsForPath(path, 20);
  const primary = overrides?.primaryKeyword ?? pathPrimary[path] ?? list[0]?.keyword ?? 'Offplan Ägypten';
  const secondary = list.slice(1, 8).map((k) => k.keyword);

  const metaTitle =
    overrides?.metaTitle ??
    `${primary} | Zinsfreie Bauträger-Raten | Tatari Investment`.slice(0, 60);

  const metaDescription =
    overrides?.metaDescription ??
    `${primary}: direkt vom Bauträger, deutschsprachige Beratung, Euro-Kalkulation. ${secondary.slice(0, 2).join(' · ')} — vorbehaltlich Verfügbarkeit.`.slice(
      0,
      158
    );

  return {
    primaryKeyword: primary,
    metaTitle,
    metaDescription,
    h2Suggestions: secondary.slice(0, 5),
    faqKeywords: list.filter((k) => k.keyword.includes('?') || k.intent?.includes('Info')).slice(0, 4).map((k) => k.keyword),
    metaKeywords: [primary, ...secondary].slice(0, 20),
    ...overrides,
  };
}
