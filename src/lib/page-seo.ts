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
  '/immobilienfinanzierung-aegypten-deutsche': 'Immobilienfinanzierung Ägypten',
  '/direkt-vom-bautraeger-aegypten': 'Immobilien direkt vom Bauträger',
  '/rendite-immobilien-aegypten': 'Renditepotenzial Immobilien Ägypten',
  '/kliniken-kaufen-aegypten': 'Klinik kaufen Ägypten',
  '/bueros-kaufen-aegypten': 'Büro kaufen Ägypten',
  '/retail-pharmacy-investment-aegypten': 'Retail Investment Ägypten',
  '/warum-tatari-investment': 'Tatari Investment',
  '/projekte/west-wind': 'West Wind Offplan Sheikh Zayed',
  '/immobilien-dubai': 'Immobilien Dubai kaufen',
  '/immobilien-saudi-arabien': 'Immobilien Saudi-Arabien',
};

/** Natural meta descriptions — one focus phrase, no keyword stuffing */
const pathDescriptions: Record<string, string> = {
  '/':
    'Offplan-Immobilien in Ägypten mit deutschsprachiger Beratung: Bauträger-Raten nach Prüfung, West Wind in Sheikh Zayed, Euro-Kalkulation. Tatari Investment.',
  '/immobilien-kaufen-aegypten':
    'Immobilien in Ägypten kaufen: Offplan, direkt vom Bauträger, strukturierte Raten und Due Diligence — begleitet auf Deutsch.',
  '/projekte/west-wind':
    'West Wind Offplan an der El Bostan Street: Clinics, Offices, Retail in Sheikh Zayed. Verfügbarkeit und Grundrisse bei Tatari anfragen.',
  '/immobilien-auf-raten-aegypten':
    'Immobilien auf Raten in Ägypten: zinsfreie Bauträger-Ratenzahlung nach persönlicher Prüfung — vorbehaltlich Verfügbarkeit.',
  '/immobilien-dubai':
    'Immobilien in Dubai: Offplan und Ready, Top-Entwickler, deutschsprachige Vermittlung für Investoren aus DACH.',
  '/immobilien-saudi-arabien':
    'Immobilien in Saudi-Arabien: Riyadh und ausgewählte Vision-2030-Projekte — strukturierte Beratung auf Deutsch.',
  '/offplan-immobilien-aegypten':
    'Offplan in Ägypten erklärt: Bauträger-Raten, Due Diligence und deutschsprachige Begleitung — Tatari Investment.',
  '/immobilienfinanzierung-aegypten-deutsche':
    'Finanzierung für deutsche Käufer in Ägypten: Bauträger-Raten, Eigenkapital und Ablauf — ohne Zinsversprechen.',
  '/haus-wohnung-auf-raten-aegypten-deutsche':
    'Haus oder Wohnung in Ägypten auf Raten: strukturierter Einstieg für Investoren aus Deutschland.',
  '/urlaub-und-investment-aegypten':
    'Urlaub und Investment verbinden: Ferienimmobilie oder Rendite in Ägypten mit Tatari Beratung.',
  '/direkt-vom-bautraeger-aegypten':
    'Direkt vom Bauträger kaufen in Ägypten: Offplan ohne unnötige Zwischenhändler — vorbehaltlich Verfügbarkeit.',
  '/warum-tatari-investment':
    'Warum Tatari: deutschsprachige Due Diligence, Bauträger-Zugang und Begleitung in Ägypten, Dubai und Saudi-Arabien.',
  '/rendite-immobilien-aegypten':
    'Renditepotenzial Immobilien Ägypten: realistische Erwartungen, keine garantierten Renditen — Tatari erklärt.',
  '/kliniken-kaufen-aegypten':
    'Medical Units & Kliniken in Ägypten: Commercial Investment z. B. West Wind Sheikh Zayed.',
  '/bueros-kaufen-aegypten':
    'Büros und Admin Units in Ägypten kaufen: Gewerbe-Offplan mit strukturierter Beratung auf Deutsch.',
  '/retail-pharmacy-investment-aegypten':
    'Retail & Pharmacy Investment in Ägypten: Einheiten in Premium-Projekten — Verfügbarkeit prüfen.',
  '/projekte':
    'Alle Tatari Projekte: West Wind, Offplan Ägypten, Dubai und Saudi-Arabien — Übersicht und Anfrage.',
  '/wissen':
    'Ratgeber Immobilien Ägypten: Offplan, Raten, Steuern und Prozess — Wissen für deutsche Investoren.',
  '/investieren':
    'Investment-Themen: 20 SEO-Cluster zu Offplan, Raten, Rendite und Märkten — Tatari Investment.',
  '/immobilien-aegypten':
    'Immobilien nach Stadt: 78 deutsche Ausgangsstädte — lokale Beratung für Käufer in Ägypten.',
};

/** City landing pages — unique descriptions per slug */
export function getCityPageDescription(cityName: string, state?: string): string {
  const region = state ? ` (${state})` : '';
  return `Von ${cityName}${region} in Offplan-Immobilien in Ägypten investieren: Beratung auf Deutsch, Bauträger-Raten nach Prüfung — Tatari.`.slice(
    0,
    158
  );
}

export function getCityPageTitle(cityName: string, state?: string): string {
  const region = state ? ` (${state})` : '';
  return `Immobilien Ägypten von ${cityName}${region} | Offplan & Raten | Tatari`.slice(0, 60);
}

function scoreOf(k: KeywordEntry) {
  return Number(k.score) || 0;
}

export function getKeywordsForPath(path: string, limit = 12): KeywordEntry[] {
  const slugs = keywords.filter((k) => {
    const target = keywordMappings.find((m) => m.keyword === k.keyword)?.pageTarget;
    return target === path;
  });
  if (slugs.length >= 3) {
    return [...slugs].sort((a, b) => scoreOf(b) - scoreOf(a)).slice(0, limit);
  }
  const segment = path.split('/').filter(Boolean).pop() ?? '';
  return keywords
    .filter(
      (k) =>
        k.keyword.toLowerCase().includes(segment.replace(/-/g, ' ')) ||
        k.cluster.toLowerCase().includes(segment)
    )
    .sort((a, b) => scoreOf(b) - scoreOf(a))
    .slice(0, limit);
}

export function getPageSeoBundle(path: string, overrides?: Partial<PageSeoBundle>): PageSeoBundle {
  const list = getKeywordsForPath(path, 8);
  const primary = overrides?.primaryKeyword ?? pathPrimary[path] ?? list[0]?.keyword ?? 'Offplan Ägypten';

  const metaTitle =
    overrides?.metaTitle ?? `${primary} | Tatari Investment`.slice(0, 60);

  const metaDescription =
    overrides?.metaDescription ??
    pathDescriptions[path] ??
    `${primary}: deutschsprachige Beratung für Offplan in Ägypten — direkt vom Bauträger, vorbehaltlich Verfügbarkeit.`.slice(
      0,
      158
    );

  return {
    primaryKeyword: primary,
    metaTitle,
    metaDescription,
    h2Suggestions: list.slice(0, 3).map((k) => k.keyword),
    faqKeywords: list
      .filter((k) => k.keyword.includes('?'))
      .slice(0, 2)
      .map((k) => k.keyword),
    metaKeywords: overrides?.metaKeywords ?? [primary].slice(0, 8),
    ...overrides,
  };
}
