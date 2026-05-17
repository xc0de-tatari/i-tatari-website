import type { PillarPageConfig } from './pillar-pages/types';

const relatedIntl = [
  { href: '/immobilien-kaufen-aegypten', label: 'Immobilien Ägypten' },
  { href: '/immobilien-dubai', label: 'Immobilien Dubai' },
  { href: '/immobilien-saudi-arabien', label: 'Immobilien Saudi-Arabien' },
  { href: '/offplan-immobilien-aegypten', label: 'Offplan erklärt' },
  { href: '/warum-tatari-investment', label: 'Warum Tatari' },
];

export const marketCards = [
  {
    flag: '🇪🇬',
    name: 'Ägypten',
    headline: 'Offplan & Commercial — West Wind Sheikh Zayed',
    desc: 'Zinsfreie Bauträger-Raten nach Prüfung, Mixed-Use, Kliniken & Offices. Unser Kernmarkt mit stärkster Projekt-Tiefe.',
    href: '/immobilien-kaufen-aegypten',
    cta: 'Ägypten entdecken',
    featured: true,
  },
  {
    flag: '🇦🇪',
    name: 'Dubai',
    headline: 'Luxus-Offplan & Ready Properties in den VAE',
    desc: 'Vermittlung ausgewählter Projekte mit Entwicklern wie Emaar & Damac — deutschsprachige Begleitung, vorbehaltlich Verfügbarkeit.',
    href: '/immobilien-dubai',
    cta: 'Dubai ansehen',
    featured: false,
  },
  {
    flag: '🇸🇦',
    name: 'Saudi-Arabien',
    headline: 'Riyadh, Jeddah & Vision-2030-Projekte',
    desc: 'Immobilien in Saudi-Arabien für internationale Investoren — strukturierte Beratung, Due Diligence, ohne Renditeversprechen.',
    href: '/immobilien-saudi-arabien',
    cta: 'Saudi-Arabien ansehen',
    featured: false,
  },
] as const;

export const internationalPillarPages: Record<string, PillarPageConfig> = {
  'immobilien-dubai': {
    slug: 'immobilien-dubai',
    schemaType: 'webpage',
    seo: {
      title: 'Immobilien Dubai kaufen | Offplan VAE | Tatari Investment',
      description:
        'Immobilien in Dubai: Offplan & Ready, Top-Entwickler, deutschsprachige Beratung für Investoren aus DACH. Vermittlung vorbehaltlich Verfügbarkeit.',
      keywords: ['Immobilien Dubai', 'Offplan Dubai', 'Immobilien VAE', 'Dubai Investment'],
    },
    hero: {
      label: 'VAE · Dubai',
      headline: 'Immobilien in Dubai — Offplan & Premium-Projekte vermitteln',
      subheadline:
        'Tatari begleitet deutschsprachige Investoren bei ausgewählten Dubai-Projekten: Due Diligence, Vertragslogik, Euro-Kalkulation — keine Garantien.',
    },
    sections: [
      {
        title: 'Warum Dubai für Investoren relevant bleibt',
        description:
          'Dubai gilt als etablierter internationaler Immobilienmarkt mit starker Infrastruktur und globaler Käufernachfrage. Tatari vermittelt strukturiert — mit klarem Risikoprofil.',
        items: [
          'Etablierter Luxus- und Offplan-Markt',
          'Internationale Käufer und Expat-Nachfrage',
          'Mögliche steuerliche Vorteile — individuell prüfen',
          'Golden Visa bei Investitionsschwelle möglich*',
        ],
      },
      {
        title: 'Was wir vermitteln',
        items: [
          'Offplan-Apartments & Villen bei ausgewählten Entwicklern',
          'Ready-to-move & Secondary Market nach Verfügbarkeit',
          'Zusammenarbeit mit etablierten Developern (z. B. Emaar, Damac)',
          'Deutschsprachige Begleitung von Erstgespräch bis Reservierung',
        ],
      },
      {
        title: 'Ablauf mit Tatari',
        items: [
          'Kostenlose Erstberatung & Zielklärung',
          'Projektvorschläge nach Budget und Profil',
          'Due Diligence & transparente Kostenaufstellung',
          'Vertrag mit Entwickler — vorbehaltlich Freigabe',
        ],
        links: [{ href: '/immobilien-kaufen-aegypten', label: 'Ägypten als Ergänzung →' }],
      },
    ],
    faqs: [
      {
        q: 'Kann ich als Deutscher in Dubai Immobilien kaufen?',
        a: 'Ja, unter den jeweils geltenden VAE-Regeln und Projektbedingungen. Tatari erläutert Ablauf, Kosten und Risiken transparent — ohne Zusagen.',
      },
      {
        q: 'Gibt es Ratenzahlung in Dubai?',
        a: 'Viele Offplan-Projekte bieten Entwickler-Zahlungspläne — konkret projektspezifisch nach Prüfung, nicht pauschal zugesichert.',
      },
      {
        q: 'Ist Rendite in Dubai garantiert?',
        a: 'Nein. Wir kommunizieren Szenarien und Marktdaten — keine garantierte Rendite oder Mieteinnahmen.',
      },
    ],
    relatedLinks: relatedIntl,
  },

  'immobilien-saudi-arabien': {
    slug: 'immobilien-saudi-arabien',
    schemaType: 'webpage',
    seo: {
      title: 'Immobilien Saudi-Arabien | Riyadh & Vision 2030 | Tatari',
      description:
        'Immobilien in Saudi-Arabien: Riyadh, Jeddah, ausgewählte Offplan-Projekte. Deutschsprachige Vermittlung für internationale Investoren — Tatari Investment.',
      keywords: [
        'Immobilien Saudi-Arabien',
        'Immobilien Riyadh',
        'Saudi Arabia real estate',
        'Offplan Saudi',
      ],
    },
    hero: {
      label: 'KSA · Saudi-Arabien',
      headline: 'Immobilien in Saudi-Arabien — strukturiert vermittelt',
      subheadline:
        'Vision 2030 treibt Urbanisierung und Neubauprojekte. Tatari begleitet Investoren mit Projektprüfung und deutscher Beratung — vorbehaltlich Verfügbarkeit.',
    },
    sections: [
      {
        title: 'Saudi-Arabien als Wachstumsmarkt',
        description:
          'Mit Vision 2030 investiert das Königreich massiv in Städte, Tourismus und Wohnraum. Für internationale Anleger entstehen neue Projekte — mit eigenem Risikoprofil.',
        items: [
          'Riyadh & Jeddah als Kernmärkte',
          'Neubauprojekte und Masterplans',
          'Steigende internationale Aufmerksamkeit',
          'Regulatorischer Rahmen — individuell prüfen',
        ],
      },
      {
        title: 'Unsere Vermittlung',
        items: [
          'Ausgewählte Offplan- und Wohnprojekte',
          'Due Diligence & Projektunterlagen auf Deutsch',
          'Begleitung bei Reservierung und Vertragslogik',
          'Portfolio-Ergänzung zu Ägypten & Dubai möglich',
        ],
      },
      {
        title: 'Für wen geeignet?',
        items: [
          'Investoren mit längerem Anlagehorizont',
          'Diversifikation im GCC-Raum',
          'Sachwertorientierte Profile',
          'Bereitschaft zur regulatorischen Prüfung',
        ],
        links: [{ href: '/immobilien-dubai', label: 'Dubai vergleichen →' }],
      },
    ],
    faqs: [
      {
        q: 'Dürfen Ausländer in Saudi-Arabien Immobilien kaufen?',
        a: 'Rahmenbedingungen haben sich geöffnet, sind aber projekt- und zonenabhängig. Tatari prüft, was für Ihr Profil aktuell möglich ist.',
      },
      {
        q: 'Welche Städte sind relevant?',
        a: 'Schwerpunkte sind typischerweise Riyadh und Jeddah sowie ausgewählte Neubauprojekte — abhängig von Verfügbarkeit.',
      },
      {
        q: 'Gibt es garantierte Renditen?',
        a: 'Nein. Wir liefern Marktinformationen und Szenarien — keine Rendite- oder Wertsteigerungsgarantie.',
      },
    ],
    relatedLinks: relatedIntl,
  },
};
