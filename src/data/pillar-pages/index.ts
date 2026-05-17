import type { PillarPageConfig } from './types';

const disclaimer =
  'Alle Konditionen vorbehaltlich Verfügbarkeit, Bonitäts- und Projektprüfung. Keine Garantie auf Rendite, Zinsfreiheit oder Finanzierungszusage.';

const relatedCore = [
  { href: '/immobilien-kaufen-aegypten', label: 'Immobilien in Ägypten kaufen' },
  { href: '/offplan-immobilien-aegypten', label: 'Offplan erklärt' },
  { href: '/immobilien-auf-raten-aegypten', label: 'Immobilien auf Raten' },
  { href: '/warum-tatari-investment', label: 'Warum Tatari' },
  { href: '/projekte/west-wind', label: 'West Wind Projekt' },
];

export const pillarPages: Record<string, PillarPageConfig> = {
  'immobilien-kaufen-aegypten': {
    slug: 'immobilien-kaufen-aegypten',
    schemaType: 'city',
    citySchema: { city: 'Ägypten', region: 'North Africa' },
    seo: {
      title: 'Immobilien in Ägypten kaufen | Offplan & zinsfreie Raten | Tatari Investment',
      description:
        'Immobilien in Ägypten kaufen: Offplan investieren, zinsfreie Bauträger-Raten nach Prüfung, deutschsprachige Beratung für Investoren aus Deutschland, Österreich und der Schweiz.',
      keywords: [
        'Immobilien in Ägypten kaufen',
        'Immobilien Ägypten investieren',
        'Offplan Ägypten',
        'Auslandsimmobilien Ägypten',
      ],
    },
    hero: {
      label: 'SEO-Pillar · Ägypten',
      headline: 'Immobilien in Ägypten kaufen — Offplan investieren mit zinsfreien Raten',
      subheadline:
        'Strukturierter Einstieg in einen Wachstumsmarkt: direkt vom Bauträger, persönliche Vorqualifizierung, lokale Due Diligence — vorbehaltlich Verfügbarkeit.',
    },
    sections: [
      {
        label: 'Warum Ägypten',
        title: 'Warum Ägypten für Immobilieninvestoren interessant sein kann',
        description:
          'Urbanisierung, Bevölkerungswachstum und Infrastrukturprojekte prägen den Markt. Tatari fokussiert auf Offplan- und Commercial-Projekte mit nachvollziehbarer Projektlogik.',
        items: [
          'Wachstumsmarkt mit steigender urbaner Nachfrage',
          'Offplan-Einstieg mit planbaren Bauträger-Raten nach Prüfung',
          'Ergänzung zur Kapitalanlage in DACH — Sachwert-Diversifikation',
        ],
      },
      {
        label: 'Warum jetzt',
        title: 'Marktfenster — früh informiert statt spät zu teuer kaufen',
        items: [
          'Frühe Projektphasen können Preis- und Auswahlvorteile bieten',
          'Commercial & Mixed-Use in etablierten Lagen wie Sheikh Zayed',
          'Deutschsprachige Begleitung von der Erstberatung bis zur Übergabe',
        ],
      },
      {
        label: 'Offplan',
        title: 'Offplan erklärt — Kauf in der Bauphase',
        description:
          'Statt Sofortzahlung: gestaffelte Bauträger-Raten bis zur Fertigstellung. Details auf unserer Offplan-Seite.',
        links: [{ href: '/offplan-immobilien-aegypten', label: 'Offplan Immobilien Ägypten →' }],
      },
      {
        label: 'Aus Deutschland',
        title: 'Kauf aus Deutschland, Österreich oder der Schweiz',
        items: [
          'Remote-Beratung, Dokumentenprüfung und Euro-Kalkulation',
          'Optional: Besichtigungsreise mit Tatari vor Ort',
          'Kein Versprechen auf Bankfinanzierung in Deutschland — Fokus Bauträger-Modelle',
        ],
      },
      {
        label: 'Ratenzahlung',
        title: 'Ratenzahlung & zinsfreie Bauträger-Modelle',
        links: [{ href: '/immobilien-auf-raten-aegypten', label: 'Immobilien auf Raten →' }],
      },
      {
        label: 'Standorte',
        title: 'Beste Lagen für Investoren',
        cards: [
          { icon: '📍', title: 'Sheikh Zayed', desc: 'Premium-West-Kairo, Commercial & Mixed-Use — z. B. West Wind' },
          { icon: '🏛️', title: 'New Administrative Capital', desc: 'Mega-Stadtprojekt mit langfristiger Infrastruktur' },
          { icon: '🏖️', title: 'North Coast & Alamein', desc: 'Tourismus und Resort-Immobilien' },
          { icon: '🌆', title: 'New Cairo', desc: 'Etablierte Wohn- und Gewerbelagen' },
        ],
      },
      {
        label: 'Due Diligence',
        title: 'Rechtliches & Due Diligence',
        description: disclaimer,
        links: [{ href: '/warum-tatari-investment', label: 'Tatari Due Diligence →' }],
      },
    ],
    faqs: [
      {
        q: 'Kann man als Deutscher Immobilien in Ägypten kaufen?',
        a: 'Ja, mit strukturierter Beratung, Vertragsprüfung und klarer Zahlungslogik. Tatari begleitet den Prozess — vorbehaltlich Verfügbarkeit.',
      },
      {
        q: 'Sind zinsfreie Raten garantiert?',
        a: 'Nein. Zinsfreie Bauträger-Raten sind projektspezifisch und nach individueller Prüfung möglich — nicht garantiert.',
      },
    ],
    relatedLinks: relatedCore,
  },

  'offplan-immobilien-aegypten': {
    slug: 'offplan-immobilien-aegypten',
    schemaType: 'article',
    seo: {
      title: 'Offplan Immobilien Ägypten | Früh einsteigen wie Dubai — claim-safe | Tatari',
      description:
        'Was ist Offplan? Warum Frühpreise zählen, Bauphasen, Bauträger-Raten, Risiken und wie Tatari sie begleitet — Offplan Immobilien in Ägypten erklärt.',
      keywords: ['Offplan Immobilien Ägypten', 'Offplan kaufen Ägypten', 'Offplan Investment Ägypten'],
    },
    hero: {
      label: 'Offplan',
      headline: 'Offplan Immobilien in Ägypten — frühe Preise, strukturierte Raten',
      subheadline:
        'Viele vergleichen frühe Offplan-Märkte mit Dubai. Ägypten hat eine eigene Wachstumsstory — Tatari erklärt Chancen und Risiken ohne Hype.',
    },
    sections: [
      {
        title: 'Was ist Offplan?',
        description:
          'Offplan bedeutet Kauf einer Immobilie während der Bauphase — vor Fertigstellung. Zahlungen folgen typischerweise einem Bauträger-Zeitplan.',
        items: [
          'Kaufvertrag mit Bauträger, nicht mit Zwischenhändler',
          'Gestaffelte Zahlungen bis Übergabe',
          'Preisniveau oft unter fertiggestellten Vergleichsobjekten — marktabhängig',
        ],
      },
      {
        title: 'Warum Frühpreise relevant sein können',
        items: [
          'Frühe Phasen können niedrigere Quadratmeterpreise bieten',
          'Größere Auswahl bei Einheitentypen',
          'Kein Versprechen auf Wertsteigerung — nur Potenzial',
        ],
      },
      {
        title: 'Bauphasen & Zeitplan',
        items: [
          'Anzahlung bei Vertragsunterzeichnung',
          'Meilenstein-Raten während der Bauarbeiten',
          'Schlusszahlung bei Übergabe — projektspezifisch',
        ],
      },
      {
        title: 'Risiken & wie Tatari sie adressiert',
        cards: [
          { icon: '🔍', title: 'Projektprüfung', desc: 'Bauträger, Lage, Vertragslogik und Zahlungsplan' },
          { icon: '📋', title: 'Transparenz', desc: 'Klare Unterlagen auf Deutsch' },
          { icon: '🤝', title: 'Begleitung', desc: 'Vor Ort und remote bis Übergabe' },
        ],
      },
      {
        title: 'Direkt vom Bauträger',
        links: [{ href: '/direkt-vom-bautraeger-aegypten', label: 'Direkt vom Bauträger →' }],
      },
    ],
    faqs: [
      {
        q: 'Ist Offplan in Ägypten wie Dubai?',
        a: 'Es gibt Parallelen beim Früheinstieg, aber Recht, Markt und Projekte unterscheiden sich. Tatari erklärt beides ohne Gleichsetzung.',
      },
    ],
    relatedLinks: relatedCore,
  },

  'immobilien-auf-raten-aegypten': {
    slug: 'immobilien-auf-raten-aegypten',
    schemaType: 'article',
    seo: {
      title: 'Immobilien auf Raten Ägypten | Zinsfrei vom Bauträger | Tatari Investment',
      description:
        'Immobilien auf Raten in Ägypten: zinsfreie Bauträger-Raten nach Prüfung, kleine Anzahlung, monatliche Beispiele — vorbehaltlich Verfügbarkeit.',
      keywords: ['Immobilien auf Raten Ägypten', 'zinsfreie Raten Immobilien', 'Ratenzahlung Bauträger'],
    },
    hero: {
      label: 'Ratenzahlung',
      headline: 'Immobilien auf Raten in Ägypten — zinsfrei vom Bauträger nach Prüfung',
      subheadline:
        'Planbare Raten statt Sofortzahlung. Keine garantierte Genehmigung — persönliche Vorqualifizierung und Ratenplan-Prüfung.',
    },
    sections: [
      {
        title: 'Zinsfreie Raten vom Bauträger',
        description:
          'Viele Offplan-Projekte bieten zinsfreie Ratenzahlung während der Bauphase — Konditionen sind projektspezifisch.',
        items: [
          'Typisch 5–10 % Anzahlung — nach Projekt und Prüfung',
          'Monatliche oder meilensteinbasierte Raten',
          'Keine pauschale Zusage — Ratenplan-Prüfung erforderlich',
        ],
      },
      {
        title: 'Beispielhafte Ratenlogik (illustrativ)',
        description:
          'Konkrete Beträge erhalten Sie in der persönlichen Euro-Kalkulation — abhängig von Projekt und Einheit.',
        items: [
          'Kleinere Anzahlung → längere Ratenphase bis Übergabe',
          'Größere Anzahlung → kürzere Restlaufzeit',
          'West Wind: individuelle Kalkulation auf Anfrage',
        ],
        links: [{ href: '/projekte/west-wind', label: 'West Wind Beispiel →' }],
      },
      {
        title: 'Wer qualifiziert sich?',
        description: 'Vorprüfung statt Garantie — Tatari prüft Profil, Budget und Projektpassung.',
        items: [
          'Nachweis der Zahlungsfähigkeit',
          'Klares Investment- oder Nutzungsziel',
          'Bereitschaft zur Vertrags- und Dokumentenprüfung',
        ],
      },
      {
        title: 'Ablauf',
        items: [
          'Kostenlose Erstberatung',
          'Projektauswahl & Ratenplan-Prüfung',
          'Vertrag mit Bauträger nach Freigabe',
          'Begleitung bis Übergabe',
        ],
        links: [{ href: '/immobilienfinanzierung-aegypten-deutsche', label: 'Finanzierung für Deutsche →' }],
      },
    ],
    faqs: [
      {
        q: 'Ist die Ratenzahlung garantiert genehmigt?',
        a: 'Nein. Es erfolgt eine Vorprüfung und Ratenplan-Prüfung — Ergebnis projektabhängig, vorbehaltlich Verfügbarkeit.',
      },
    ],
    relatedLinks: relatedCore,
  },

  'immobilienfinanzierung-aegypten-deutsche': {
    slug: 'immobilienfinanzierung-aegypten-deutsche',
    schemaType: 'article',
    seo: {
      title: 'Immobilienfinanzierung Ägypten für Deutsche | Bauträger-Raten | Tatari',
      description:
        'Finanzierung für deutsche Investoren: Bauträger-Raten, Vorprüfung, Euro-Kalkulation, Dokumente — ohne Bankversprechen, nach Prüfung.',
      keywords: [
        'Immobilienfinanzierung Ägypten Deutsche',
        'Finanzierung Auslandsimmobilie',
        'Bauträger Finanzierung Ägypten',
      ],
    },
    hero: {
      label: 'Finanzierung',
      headline: 'Immobilienfinanzierung in Ägypten — für Investoren aus Deutschland',
      subheadline:
        'Bauträger-Finanzierungsmodell, Vorprüfung, Euro-Kalkulation und Dokumentenbegleitung — keine Bankgarantie, sofern nicht separat verifiziert.',
    },
    sections: [
      {
        title: 'Bauträger-Ratenzahlung statt deutscher Bank',
        description:
          'Der Fokus liegt auf direkten Bauträger-Zahlungsplänen — nicht auf klassischer deutsche Hypothek für Ägypten.',
        items: [
          'Developer Installment Plans nach Prüfung',
          'Direkte Zahlungspläne ohne Zwischenhändler',
          'Kein Versprechen auf deutsche Bankfinanzierung',
        ],
      },
      {
        title: 'Vorprüfung & Ratenplan-Prüfung',
        items: [
          'Persönliche Vorqualifizierung',
          'Budget- und Zahlungsfähigkeits-Check',
          'Projektpassung vor Vertragsbindung',
        ],
      },
      {
        title: 'Dokumente & Prozess für Residents in DE/AT/CH',
        items: [
          'Ausweis- und Adressnachweis',
          'Zahlungsnachweis / Einkommensunterlagen',
          'Vertragsunterlagen in begleiteter Prüfung',
          'Euro-Kalkulation aller Meilensteine',
        ],
      },
    ],
    faqs: [
      {
        q: 'Finanziert eine deutsche Bank die Immobilie in Ägypten?',
        a: 'Das ist Einzelfall und nicht unser Standardversprechen. Tatari fokussiert auf Bauträger-Modelle — Bankoptionen nur nach separater Verifizierung.',
      },
    ],
    relatedLinks: relatedCore,
  },

  'haus-wohnung-auf-raten-aegypten-deutsche': {
    slug: 'haus-wohnung-auf-raten-aegypten-deutsche',
    schemaType: 'article',
    seo: {
      title: 'Haus oder Wohnung auf Raten Ägypten | Für Deutsche | Tatari Investment',
      description:
        'Ein Zuhause in Ägypten mit planbaren Raten: Zweitwohnsitz, Ferienhaus, Familie — Investment und Lifestyle für deutschsprachige Käufer.',
      keywords: ['Haus auf Raten Ägypten', 'Wohnung kaufen Ägypten Raten', 'Zweitwohnsitz Ägypten'],
    },
    hero: {
      label: 'Residential',
      headline: 'Ein Zuhause in Ägypten kaufen — mit planbaren Raten statt voller Sofortzahlung',
      subheadline:
        'Zweitwohnsitz, Ferienhaus oder Familienprojekt — strukturiert mit Bauträger-Raten nach Prüfung, vorbehaltlich Verfügbarkeit.',
    },
    sections: [
      {
        title: 'Zweitwohnsitz & Ferienhaus',
        items: [
          'Sonne, Nähe zu Familie und Lebensqualität',
          'Sachwert mit Nutzungswert kombinieren',
          'Keine Garantie auf Wertsteigerung',
        ],
      },
      {
        title: 'Investment + Lifestyle',
        description: 'Viele Käufer verbinden Eigennutzung mit langfristigem Vermögensaufbau.',
        links: [{ href: '/urlaub-und-investment-aegypten', label: 'Urlaub & Investment →' }],
      },
      {
        title: 'Diaspora & internationale Familien',
        items: [
          'Deutschsprachige Beratung für Familien im Ausland',
          'Besichtigungsreise optional planbar',
          'Dokumenten- und Zahlungsbegleitung',
        ],
      },
      {
        title: 'Ratenzahlung',
        links: [{ href: '/immobilien-auf-raten-aegypten', label: 'Ratenmodelle →' }],
      },
    ],
    relatedLinks: relatedCore,
  },

  'urlaub-und-investment-aegypten': {
    slug: 'urlaub-und-investment-aegypten',
    schemaType: 'article',
    seo: {
      title: 'Urlaub & Investment Ägypten | Besichtigungsreise | Tatari Investment',
      description:
        'Urlaub, Familie, Sonne — und ein Investment mit Wachstumspotenzial. Inspection Trip und Investmentreise mit Tatari begleiten.',
      keywords: ['Urlaub Investment Ägypten', 'Besichtigungsreise Immobilien Ägypten', 'Inspection Trip'],
    },
    hero: {
      label: 'Lifestyle',
      headline: 'Urlaub, Familie, Sonne — und ein Investment, das mitwachsen kann',
      subheadline:
        'Von der ersten Beratung bis zur Besichtigungsreise: Tatari verbindet Erlebnis mit strukturierter Projektprüfung.',
    },
    sections: [
      {
        title: 'Reise + Immobilien-Entdeckung',
        items: [
          'Projekte vor Ort erleben',
          'Lage, Nachbarschaft und Infrastruktur prüfen',
          'Kein Verkaufsdruck — informierte Entscheidung',
        ],
      },
      {
        title: 'Inspection Trip & Investmentreise',
        items: [
          'Terminplanung mit Tatari vor Ort',
          'Sheikh Zayed, New Cairo oder Küstenregionen',
          'Follow-up mit Euro-Kalkulation und Verfügbarkeit',
        ],
      },
      {
        title: 'Begleitung von erstem Call bis Site Visit',
        cards: [
          { icon: '📞', title: 'Erstgespräch', desc: 'Ziele, Budget, Vorprüfung' },
          { icon: '✈️', title: 'Reise', desc: 'Besichtigung ausgewählter Projekte' },
          { icon: '📋', title: 'Nachbereitung', desc: 'Vertrag & Ratenplan nach Entscheidung' },
        ],
      },
    ],
    relatedLinks: relatedCore,
  },

  'direkt-vom-bautraeger-aegypten': {
    slug: 'direkt-vom-bautraeger-aegypten',
    schemaType: 'article',
    seo: {
      title: 'Direkt vom Bauträger Ägypten kaufen | Transparent & ohne Aufschlag | Tatari',
      description:
        'Immobilien direkt vom Bauträger: keine aufgeblähte Weiterveräußerung, offizielle Zahlungspläne, lokaler Support und Dokumenten-Checkliste.',
      keywords: ['direkt vom Bauträger Ägypten', 'Developer Direct Ägypten', 'ohne Zwischenhändler'],
    },
    hero: {
      label: 'Developer Direct',
      headline: 'Direkt vom Bauträger in Ägypten — transparent, geprüft, begleitet',
      subheadline: 'Offizielle Preise und Zahlungspläne mit Tatari Due Diligence — nicht jeder „Direktkauf“ ist automatisch sicher.',
    },
    sections: [
      {
        title: 'Vorteile des Direktkaufs',
        items: [
          'Keine unnötige Weiterverkaufs-Ebene',
          'Offizielle Bauträger-Zahlungspläne',
          'Direkte Verfügbarkeitsprüfung',
        ],
      },
      {
        title: 'Transparenz & Preisprüfung',
        items: [
          'Tatari prüft Projektunterlagen und Konditionen',
          'Euro-Kalkulation aller Meilensteine',
          'Klare Kommunikation auf Deutsch',
        ],
      },
      {
        title: 'Dokumenten-Checkliste',
        items: [
          'Kaufvertrag und Zahlungsplan',
          'Bauträger-Lizenz und Projektgenehmigungen',
          'Grundrisse, Flächenangaben, Übergabe-Termine',
          'Reservierungs- und EOI-Unterlagen (falls relevant)',
        ],
      },
    ],
    relatedLinks: relatedCore,
  },

  'warum-tatari-investment': {
    slug: 'warum-tatari-investment',
    schemaType: 'article',
    seo: {
      title: 'Warum Tatari Investment | Due Diligence & deutsche Beratung Ägypten',
      description:
        'Wer wir sind: lokale Präsenz, Projekt-Screening, Bauträger-Checks, Preis- und Verfügbarkeitsprüfung, deutschsprachige Beratung.',
      keywords: ['Tatari Investment', 'Tatari Investment Ägypten', 'geprüfte Immobilienprojekte'],
    },
    hero: {
      label: 'Vertrauen',
      headline: 'Warum Tatari Investment — Ihr Partner für Offplan in Ägypten',
      subheadline:
        'Lokale Präsenz, geprüfte Projekte, deutsche Beratung — ohne Renditeversprechen und ohne leere Marketing-Garantien.',
    },
    sections: [
      {
        title: 'Wer wir sind',
        description:
          'Tatari Investment begleitet deutschsprachige und internationale Investoren bei ausgewählten Offplan- und Commercial-Projekten in Ägypten.',
      },
      {
        title: 'Projekt-Screening & Bauträger-Checks',
        items: [
          'Prüfung von Bauträger und Projektunterlagen',
          'Preis- und Konditionsvergleich',
          'Verfügbarkeitsprüfung vor Reservierung',
        ],
      },
      {
        title: 'On-Ground Support',
        items: [
          'Team in Sheikh Zayed / Greater Cairo',
          'Besichtigungen und Übergabe-Begleitung',
          'After-Sales-Kommunikation nach Vertrag',
        ],
      },
      {
        title: 'Deutschsprachige Beratung',
        items: [
          'Erstgespräch, Vorqualifizierung, Euro-Kalkulation',
          'WhatsApp, Telefon, Video-Call',
          'Investoren aus DE, AT, CH und Europa',
        ],
      },
    ],
    relatedLinks: relatedCore,
  },

  'rendite-immobilien-aegypten': {
    slug: 'rendite-immobilien-aegypten',
    schemaType: 'article',
    seo: {
      title: 'Rendite Immobilien Ägypten | ROI-Potenzial — ohne Garantien | Tatari',
      description:
        'Renditepotenzial in Ägypten: Wertsteigerung, Miete, Commercial-Nachfrage, Währung — realistische Szenarien statt Garantien.',
      keywords: ['Rendite Immobilien Ägypten', 'Renditepotenzial Ägypten', 'ROI Immobilien Ägypten'],
    },
    hero: {
      label: 'Rendite',
      headline: 'Renditepotenzial bei Immobilien in Ägypten — Szenarien statt Versprechen',
      subheadline: disclaimer,
    },
    sections: [
      {
        title: 'Treiber für mögliches Renditepotenzial',
        items: [
          'Frühe Offplan-Preise — marktabhängig',
          'Commercial-Nachfrage in wachsenden Stadtteilen',
          'Medical & Retail-Synergien in Mixed-Use',
          'Währungs- und Diversifikationseffekt — mit Risiko',
        ],
      },
      {
        title: 'Mieteinnahmen & Nachfrage',
        description: 'Mietpotenzial ist kein Automatismus — abhängig von Mieter, Lage und Management.',
        links: [{ href: '/investieren/mieteinnahmen-nachfrage', label: 'Mieteinnahmen-Thema →' }],
      },
      {
        title: 'Risikofaktoren',
        items: [
          'Bauphase, Verzögerungen, Marktzyklus',
          'Wechselkurs EUR/EGP',
          'Vermietung und Auslastung nicht garantiert',
        ],
      },
    ],
    faqs: [
      {
        q: 'Garantiert Tatari eine Rendite?',
        a: 'Nein. Wir liefern Szenarien und transparente Annahmen — keine garantierte Rendite oder Mieteinnahmen.',
      },
    ],
    relatedLinks: relatedCore,
  },

  'kliniken-kaufen-aegypten': {
    slug: 'kliniken-kaufen-aegypten',
    schemaType: 'listing',
    seo: {
      title: 'Kliniken & Medical Units kaufen Ägypten | Tatari Investment',
      description:
        'Medical Real Estate in Ägypten: Klinik- und Praxisflächen, Nachfrage, West Wind Nähe Rofayda Hospital — vorbehaltlich Verfügbarkeit.',
      keywords: ['Klinik kaufen Ägypten', 'Medical Unit Ägypten', 'Klinikinvestment'],
    },
    hero: {
      label: 'Medical',
      headline: 'Kliniken & Medical Units in Ägypten — Healthcare-Investment',
      subheadline:
        'Medizinische Flächen in Mixed-Use-Projekten mit Nachfragepotenzial — keine Garantie auf Auslastung oder Rendite.',
    },
    sections: [
      {
        title: 'Medical Real Estate',
        description:
          'Ärztliche und therapeutische Nutzer suchen professionelle Flächen in gut erreichbaren Lagen.',
        items: [
          'Kleinere bis mittlere Unit-Größen',
          'Zielgruppen: Ärzte, Kliniken, Fachpraxen',
          'Langfristige Nutzung planen',
        ],
      },
      {
        title: 'West Wind & Rofayda Hospital',
        description:
          'West Wind in Sheikh Zayed liegt in der Nähe etablierter medizinischer Infrastruktur — ein Referenzprojekt für Medical Units.',
        links: [{ href: '/projekte/west-wind', label: 'West Wind Medical Units →' }],
      },
    ],
    relatedLinks: [
      { href: '/bueros-kaufen-aegypten', label: 'Büros' },
      { href: '/retail-pharmacy-investment-aegypten', label: 'Retail & Pharmacy' },
      ...relatedCore.slice(0, 3),
    ],
  },

  'bueros-kaufen-aegypten': {
    slug: 'bueros-kaufen-aegypten',
    schemaType: 'listing',
    seo: {
      title: 'Büros kaufen Ägypten | Office Units Sheikh Zayed | Tatari Investment',
      description:
        'Büro- und Admin-Flächen in Ägypten: Nachfrage, flexible Layouts, West Wind Offices ab ca. 79 m² — Verfügbarkeit anfragen.',
      keywords: ['Büro kaufen Ägypten', 'Office Unit Sheikh Zayed', 'Bürofläche Ägypten'],
    },
    hero: {
      label: 'Offices',
      headline: 'Büros & Administrative Offices in Ägypten investieren',
      subheadline:
        'Professionelle Arbeitsflächen in Commercial Hubs — West Wind bietet Office Units ab ca. 79 m², vorbehaltlich Verfügbarkeit.',
    },
    sections: [
      {
        title: 'Büronachfrage in West-Kairo',
        items: [
          'KMU, Kanzleien, Agenturen und Dienstleister',
          'Gute Erreichbarkeit zur Mehwar Road',
          'Flexible Flächengrößen je Phase',
        ],
      },
      {
        title: 'West Wind Offices',
        links: [{ href: '/projekte/west-wind', label: 'West Wind Büroflächen →' }],
      },
    ],
    relatedLinks: [
      { href: '/kliniken-kaufen-aegypten', label: 'Kliniken' },
      { href: '/retail-pharmacy-investment-aegypten', label: 'Retail' },
      ...relatedCore.slice(0, 3),
    ],
  },

  'retail-pharmacy-investment-aegypten': {
    slug: 'retail-pharmacy-investment-aegypten',
    schemaType: 'listing',
    seo: {
      title: 'Retail & Pharmacy Investment Ägypten | Shop-Flächen | Tatari',
      description:
        'Retail, Apotheke und Dining Units in Ägypten: Laufkundschaft, Medical-Synergie, exklusive Pharmacy Opportunities — nach Verfügbarkeit.',
      keywords: ['Retail Investment Ägypten', 'Apotheke Investment Ägypten', 'Shop kaufen Ägypten'],
    },
    hero: {
      label: 'Retail',
      headline: 'Retail, Pharmacy & Dining — Gewerbe mit Laufkundschaftspotenzial',
      subheadline:
        'Shop- und Apothekenflächen in Mixed-Use-Projekten wie West Wind — Synergie mit Medical und Offices.',
    },
    sections: [
      {
        title: 'Retail-Nachfrage',
        items: [
          'Tägliche Frequenz in etablierten Quartieren',
          'Einbindung in Mixed-Use-Konzepte',
          'Keine Garantie auf Umsatz oder Miete',
        ],
      },
      {
        title: 'Pharmacy Opportunity',
        description:
          'Exklusive Apotheken-Flächen sind projektspezifisch limitiert — Verfügbarkeit direkt anfragen.',
        links: [{ href: '/projekte/west-wind', label: 'West Wind Retail →' }],
      },
      {
        title: 'Medical + Retail Synergie',
        links: [{ href: '/kliniken-kaufen-aegypten', label: 'Medical Units →' }],
      },
    ],
    relatedLinks: relatedCore,
  },
};

export function getPillarPage(slug: string): PillarPageConfig | undefined {
  return pillarPages[slug];
}
