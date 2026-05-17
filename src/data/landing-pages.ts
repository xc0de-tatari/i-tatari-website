export interface LpConfig {
  slug: string;
  headline: string;
  subheadline: string;
  seo: { title: string; description: string };
  benefits: string[];
  stats?: { value: string; label: string }[];
  whatsappTemplate?: 'westWind' | 'installments' | 'germany' | 'euroCalc';
}

const benefits = [
  'Direkt vom Bauträger — nach Prüfung',
  'Zinsfreie Raten projektspezifisch möglich',
  'Deutschsprachige Beratung & Euro-Kalkulation',
  'West Wind & Commercial Units — vorbehaltlich Verfügbarkeit',
  'Keine garantierte Rendite — transparente Szenarien',
];

export const landingPages: LpConfig[] = [
  {
    slug: 'west-wind',
    headline: 'West Wind Sheikh Zayed — Mixed-Use Offplan',
    subheadline: 'Clinics, Offices, Retail. Verfügbarkeit & Ratenplan anfragen.',
    seo: { title: 'West Wind LP | Tatari Investment', description: 'West Wind Offplan — LP' },
    benefits,
    whatsappTemplate: 'westWind',
    stats: [{ value: 'Sheikh Zayed', label: 'Lage' }, { value: 'Mixed-Use', label: 'Konzept' }],
  },
  {
    slug: 'immobilien-auf-raten',
    headline: 'Immobilien auf Raten in Ägypten',
    subheadline: 'Kein klassischer Bankkredit. Planbare Bauträger-Raten.',
    seo: { title: 'Raten LP | Tatari', description: 'Immobilien auf Raten Ägypten' },
    benefits,
    whatsappTemplate: 'installments',
  },
  {
    slug: 'aegypten-offplan',
    headline: 'Ägypten Offplan — früh positionieren',
    subheadline: 'Offplan ist der frühe Hebel. Investiere, bevor die breite Masse hinschaut.',
    seo: { title: 'Offplan LP | Tatari', description: 'Offplan Ägypten LP' },
    benefits,
  },
  {
    slug: 'deutsche-investoren',
    headline: 'Für deutsche Investoren',
    subheadline: 'Von Deutschland aus investieren. Vor Ort begleitet.',
    seo: { title: 'Deutsche Investoren LP', description: 'LP Deutsche' },
    benefits,
    whatsappTemplate: 'germany',
  },
  {
    slug: 'urlaub-investment',
    headline: 'Urlaub & Investment Ägypten',
    subheadline: 'Besichtigungsreise planen — Lifestyle und Sachwert verbinden.',
    seo: { title: 'Urlaub Investment LP', description: 'Urlaub LP' },
    benefits,
  },
  {
    slug: 'kliniken-investment',
    headline: 'Kliniken & Medical Units',
    subheadline: 'Medical Real Estate in Sheikh Zayed — West Wind.',
    seo: { title: 'Kliniken LP', description: 'Medical LP' },
    benefits,
  },
  {
    slug: 'kleine-rate-grosser-sachwert',
    headline: 'Kleine Rate. Großer Sachwert.',
    subheadline: 'Monatliche Raten statt voller Sofortzahlung — nach Vorprüfung.',
    seo: { title: 'Kleine Rate LP', description: 'Raten LP' },
    benefits,
    whatsappTemplate: 'installments',
  },
  {
    slug: 'egypt-growth-wave',
    headline: 'Die Ägypten-Welle',
    subheadline: 'Ägypten schreibt gerade sein nächstes Wachstumskapitel.',
    seo: { title: 'Growth Wave LP', description: 'Ägypten Welle' },
    benefits,
  },
  {
    slug: 'direkt-vom-bautraeger',
    headline: 'Direkt vom Bauträger',
    subheadline: 'Zugang ist der Unterschied. Transparente Preise & Pläne.',
    seo: { title: 'Bauträger LP', description: 'Developer direct' },
    benefits,
  },
  {
    slug: 'euro-kalkulation',
    headline: 'Euro-Kalkulation für Offplan',
    subheadline: 'Alle Meilensteine in EUR nachvollziehbar — Richtwerte mit Disclaimer.',
    seo: { title: 'Euro Kalkulation LP', description: 'Euro LP' },
    benefits,
    whatsappTemplate: 'euroCalc',
  },
];

export function getLandingPage(slug: string) {
  return landingPages.find((p) => p.slug === slug);
}
