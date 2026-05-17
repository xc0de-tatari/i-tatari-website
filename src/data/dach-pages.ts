import type { PillarPageConfig } from './pillar-pages/types';

const baseSections = (country: string, currency: string) => [
  {
    title: `Deutschsprachige Beratung für ${country}`,
    description: `Beratung, Vorprüfung und Euro${currency === 'CHF' ? '/CHF' : ''}-Kalkulation auf Deutsch — remote und mit optionalem Site Visit in Ägypten.`,
    items: [
      'Kostenlose Erstberatung',
      'Transparente Projektunterlagen',
      'WhatsApp, E-Mail und Video-Call',
    ],
  },
  {
    title: 'Internationale Diversifikation',
    description:
      'Kapital außerhalb des Heimatmarktes in einen Sachwert strukturieren — mit klarem Risikoprofil, ohne Renditegarantie.',
    items: [
      `Sachwert in ${currency} kalkulierbar`,
      'Offplan direkt vom Bauträger',
      'Ägypten als Wachstumsmarkt im Nahen Osten',
    ],
  },
  {
    title: 'Remote-Kaufprozess',
    items: [
      'Dokumentenprüfung aus der Ferne',
      'Ratenplan-Prüfung nach individuellem Profil',
      'Optional: Besichtigungsreise mit Tatari',
    ],
  },
];

export const dachPages: Record<string, PillarPageConfig & { countryName: string }> = {
  'immobilien-aegypten-deutschland': {
    slug: 'immobilien-aegypten-deutschland',
    countryName: 'Deutschland',
    schemaType: 'webpage',
    seo: {
      title: 'Immobilien Ägypten für Deutsche | Offplan & Raten | Tatari Investment',
      description:
        'Offplan-Immobilien in Ägypten für Investoren aus Deutschland: zinsfreie Bauträger-Raten nach Prüfung, Euro-Kalkulation, deutschsprachige Beratung.',
      keywords: ['Immobilien Ägypten Deutschland', 'Auslandsimmobilie Ägypten', 'Offplan Deutsche'],
    },
    hero: {
      label: 'Deutschland',
      headline: 'Immobilien in Ägypten — für Investoren aus Deutschland',
      subheadline:
        'Von Deutschland aus investieren. Vor Ort begleitet. Sachwert statt Stillstand — vorbehaltlich Verfügbarkeit.',
    },
    sections: [
      ...baseSections('Deutschland', 'EUR'),
      {
        title: 'Stadtseiten für deutsche Metropolen',
        links: [
          { href: '/immobilien-aegypten/berlin', label: 'Berlin' },
          { href: '/immobilien-aegypten/muenchen', label: 'München' },
          { href: '/immobilien-aegypten/frankfurt-am-main', label: 'Frankfurt' },
          { href: '/immobilien-aegypten/hamburg', label: 'Hamburg' },
        ],
      },
    ],
    relatedLinks: [
      { href: '/immobilien-kaufen-aegypten', label: 'Ägypten Hub' },
      { href: '/immobilien-auf-raten-aegypten', label: 'Auf Raten' },
    ],
  },
  'immobilien-aegypten-oesterreich': {
    slug: 'immobilien-aegypten-oesterreich',
    countryName: 'Österreich',
    schemaType: 'webpage',
    seo: {
      title: 'Immobilien Ägypten für Österreicher | Tatari Investment',
      description: 'Offplan in Ägypten für österreichische Investoren — deutsche Beratung, Euro-Kalkulation, Bauträger-Raten.',
      keywords: ['Immobilien Ägypten Österreich', 'Offplan Österreich'],
    },
    hero: {
      label: 'Österreich',
      headline: 'Ägypten-Immobilien für Investoren aus Österreich',
      subheadline: 'Diversifikation in EUR, deutschsprachige Begleitung, strukturierter Offplan-Einstieg.',
    },
    sections: baseSections('Österreich', 'EUR'),
    relatedLinks: [{ href: '/immobilien-aegypten-dach', label: 'DACH Übersicht' }],
  },
  'immobilien-aegypten-schweiz': {
    slug: 'immobilien-aegypten-schweiz',
    countryName: 'Schweiz',
    schemaType: 'webpage',
    seo: {
      title: 'Immobilien Ägypten für Schweizer | CHF & EUR | Tatari',
      description: 'Offplan-Investment in Ägypten für Schweizer Anleger — CHF/EUR-Kalkulation, deutsche Beratung.',
      keywords: ['Immobilien Ägypten Schweiz', 'CHF Investment Ägypten'],
    },
    hero: {
      label: 'Schweiz',
      headline: 'Immobilien in Ägypten — für Schweizer Investoren',
      subheadline: 'CHF- und EUR-Sicht auf Bauträger-Raten und Sachwertaufbau — ohne Garantien.',
    },
    sections: [
      ...baseSections('der Schweiz', 'CHF'),
      {
        title: 'CHF & Wechselkurs',
        description: 'Wir rechnen transparent in EUR/CHF und erläutern EGP-Meilensteine — Richtwerte mit Disclaimer.',
      },
    ],
    relatedLinks: [{ href: '/immobilien-aegypten-dach', label: 'DACH Übersicht' }],
  },
  'immobilien-aegypten-dach': {
    slug: 'immobilien-aegypten-dach',
    countryName: 'DACH',
    schemaType: 'webpage',
    seo: {
      title: 'Immobilien Ägypten DACH | DE · AT · CH | Tatari Investment',
      description: 'Offplan-Immobilien in Ägypten für den DACH-Raum: Deutschland, Österreich, Schweiz — eine Beratung, ein Prozess.',
      keywords: ['Immobilien Ägypten DACH', 'Offplan DACH'],
    },
    hero: {
      label: 'DACH',
      headline: 'DACH-Investoren in Ägypten — ein Markt, drei Länder, eine Sprache',
      subheadline: 'Deutschsprachige Beratung für Deutschland, Österreich und die Schweiz.',
    },
    sections: [
      {
        title: 'Länderübersicht',
        links: [
          { href: '/immobilien-aegypten-deutschland', label: 'Deutschland' },
          { href: '/immobilien-aegypten-oesterreich', label: 'Österreich' },
          { href: '/immobilien-aegypten-schweiz', label: 'Schweiz' },
        ],
      },
      ...baseSections('dem DACH-Raum', 'EUR'),
    ],
    relatedLinks: [{ href: '/immobilien-kaufen-aegypten', label: 'Ägypten Hub' }],
  },
};
