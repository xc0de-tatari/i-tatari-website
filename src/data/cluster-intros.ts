/** Claim-safe intro copy per keyword cluster (from Excel) */
export interface ClusterIntro {
  headline: string;
  subheadline: string;
  intro: string;
  highlights: string[];
}

const intros: Record<string, ClusterIntro> = {
  'aegypten-wachstum-makro': {
    headline: 'Ägypten als Wachstumsmarkt für Immobilieninvestoren',
    subheadline: 'Makro, Nachfrage und strukturierter Einstieg — ohne Renditeversprechen',
    intro:
      'Ägypten zählt zu den dynamischsten Immobilienmärkten im Nahen Osten. Tatari begleitet deutschsprachige Investoren mit lokaler Due Diligence, transparenten Projektinformationen und Fokus auf Offplan-Projekte direkt vom Bauträger.',
    highlights: [
      'Wachstumsmarkt mit steigender urbaner Nachfrage',
      'Offplan-Einstieg mit planbaren Bauträger-Raten nach Prüfung',
      'Deutschsprachige Beratung für DACH & Europa',
    ],
  },
  'offplan-early-entry': {
    headline: 'Offplan-Immobilien in Ägypten — früh einsteigen, strukturiert planen',
    subheadline: 'Direkt vom Bauträger, vorbehaltlich Verfügbarkeit',
    intro:
      'Offplan bedeutet: Kauf in der Bauphase mit gestaffelten Zahlungen statt Sofortfinanzierung. Tatari erklärt Vertragslogik, Meilensteine und Risiken — damit Sie informiert entscheiden, nicht unter Zeitdruck.',
    highlights: [
      'Früher Marktzugang bei ausgewählten Projekten',
      'Zinsfreie Bauträger-Raten nach individueller Prüfung',
      'Transparente Projektunterlagen vor Vertragsunterzeichnung',
    ],
  },
  'mittelstand-einstieg': {
    headline: 'Immobilieninvestment für den Mittelstand',
    subheadline: 'Sachwertaufbau mit planbaren Raten — kein Luxus-Only-Markt',
    intro:
      'Sie müssen kein institutioneller Investor sein, um in ausgewählte Offplan-Projekte einzusteigen. Tatari strukturiert den Einstieg so, dass Kapital schrittweise in einen Sachwert fließt — vorbehaltlich Verfügbarkeit und Bonitätsprüfung.',
    highlights: [
      'Einstieg mit überschaubaren Anzahlungen nach Projekt',
      'Raten statt klassischer Bankfinanzierung (projektabhängig)',
      'Persönliche Vorqualifizierung vor Projektbindung',
    ],
  },
  'zinsfreie-raten-zahlungsplaene': {
    headline: 'Zinsfreie Bauträger-Raten & Zahlungspläne',
    subheadline: 'Planbare Offplan-Zahlung — ohne garantierte Konditionen',
    intro:
      'Viele Bauträger in Ägypten bieten zinsfreie Ratenzahlung während der Bauphase. Konditionen, Anzahlung und Laufzeit sind projektspezifisch. Tatari prüft Zahlungspläne mit Ihnen und erklärt, was vertraglich fixiert ist.',
    highlights: [
      'Typisch 5–10 % Anzahlung — projektabhängig',
      'Meilenstein-Raten bis zur Übergabe',
      'Keine pauschalen Rendite- oder Zinsversprechen',
    ],
  },
  'direkt-vom-bautraeger': {
    headline: 'Direkt vom Bauträger kaufen — ohne unnötige Ebenen',
    subheadline: 'Developer Direct mit geprüfter Projekttransparenz',
    intro:
      'Direktkauf beim Bauträger kann Preis- und Prozesstransparenz schaffen — wenn Due Diligence stimmt. Tatari vermittelt geprüfte Projektkontakte und begleitet Vertrag, Zahlungsplan und Übergabe.',
    highlights: [
      'Direkte Bauträgerkontakte bei ausgewählten Projekten',
      'Klare Vertrags- und Zahlungsübersicht',
      'Deutschsprachige Begleitung vor Ort und remote',
    ],
  },
  'rendite-roi-potenzial': {
    headline: 'Renditepotenzial & ROI bei Immobilien in Ägypten',
    subheadline: 'Szenarien statt Garantien — claim-safe beraten',
    intro:
      'Rendite hängt von Lage, Nutzung, Mieterprofil und Marktzyklus ab. Tatari liefert realistische Szenariokalkulationen für Miete und Wertentwicklung — ohne garantierte Renditeversprechen.',
    highlights: [
      'Transparente Annahmen in der Erstberatung',
      'Fokus auf Commercial & Mixed-Use mit Nachfrage',
      'Vergleich mehrerer Projekte nach Ihrem Profil',
    ],
  },
  'commercial-real-estate': {
    headline: 'Gewerbeimmobilien & Commercial Units in Ägypten',
    subheadline: 'Büro, Retail, Medical — strukturiert investieren',
    intro:
      'Gewerbeimmobilien in wachsenden Stadtteilen wie Sheikh Zayed bieten Nutzungsvielfalt. Tatari fokussiert auf Mixed-Use- und Commercial-Projekte mit klarer Einheitentypologie — vorbehaltlich Verfügbarkeit.',
    highlights: [
      'Commercial Units in Premium-Lagen',
      'Mietpotenzial abhängig von Nutzung und Lage',
      'West Wind als Referenz-Mixed-Use-Projekt',
    ],
  },
  'clinics-medical-units': {
    headline: 'Kliniken & Medical Units — Healthcare-Investment',
    subheadline: 'Medizinisches Umfeld mit Nachfragepotenzial',
    intro:
      'Medical Units in gut angebundenen Lagen sprechen ein spezifisches Mieterprofil an. Tatari erläutert Flächen, Genehmigungslogik und Nachfrage im Umfeld — ohne Heilversprechen für Rendite.',
    highlights: [
      'Clinic-Flächen in Mixed-Use-Entwicklungen',
      'Nähe zu bestehender Infrastruktur prüfen',
      'Langfristige Nutzung und Vermietung planen',
    ],
  },
  'offices-admin-units': {
    headline: 'Büros & Administrative Offices in Ägypten',
    subheadline: 'Office Units für professionelle Nutzung',
    intro:
      'Büroflächen in West-Kairo profitieren von urbanem Wachstum und Gewerbenachfrage. Tatari zeigt verfügbare Office- und Admin-Typen in ausgewählten Projekten — inklusive Flächenlogik und Zahlungsplan.',
    highlights: [
      'Admin Offices in Sheikh Zayed & Umgebung',
      'Flexible Größen je nach Projektphase',
      'Due Diligence zu Lage und Erreichbarkeit',
    ],
  },
  'retail-pharmacy-dining': {
    headline: 'Retail, Pharmacy & Dining Units',
    subheadline: 'Ladenflächen mit Laufkundschaftspotenzial',
    intro:
      'Retail- und Pharmacy-Units in aktiven Quartieren können attraktive Nutzungsprofile bieten. Tatari ordnet Standort, Konzept und Zahlungsstruktur ein — ohne Garantie auf Auslastung.',
    highlights: [
      'Shop- und Retail-Flächen in Mixed-Use-Projekten',
      'Pharmacy Opportunities projektspezifisch',
      'Dining-Units mit Lage- und Konzeptprüfung',
    ],
  },
  'location-local-seo': {
    headline: 'Sheikh Zayed & West-Kairo — Standort-Investment',
    subheadline: 'Lokale SEO-Themen mit echter Lagekompetenz',
    intro:
      'Sheikh Zayed gehört zu den gefragtesten Adressen für Gewerbe- und Mixed-Use-Investments westlich Kairos. Tatari kennt Mikrolagen, Erreichbarkeit und Projektumfeld — für fundierte Standortentscheidungen.',
    highlights: [
      'Sheikh Zayed, El Bostan Street & West Cairo',
      'Infrastruktur und Erreichbarkeit im Fokus',
      'Projektvergleich vor Ort oder per Video-Beratung',
    ],
  },
  'west-wind-project-keywords': {
    headline: 'West Wind — Mixed-Use in Sheikh Zayed',
    subheadline: 'Pins & Corners · Life in Flow · direkt vom Bauträger',
    intro:
      'West Wind vereint Clinics, Offices, Retail und Lifestyle in einem durchdachten Mixed-Use-Konzept. Alle Details, Einheiten und Verfügbarkeit finden Sie auf der dedizierten Projektseite.',
    highlights: [
      'Flagship-Projekt von Tatari Investment',
      'Commercial & Medical Units verfügbar — vorbehaltlich Verfügbarkeit',
      'Zinsfreie Raten nach Prüfung möglich',
    ],
  },
  'trust-tatari-due-diligence': {
    headline: 'Tatari Investment — Vertrauen & Due Diligence',
    subheadline: 'Geprüfte Projekte, deutschsprachige Begleitung',
    intro:
      'Tatari steht für strukturierte Offplan-Beratung in Ägypten: Projektprüfung, transparente Kommunikation und Begleitung bis zur Übergabe. Keine leeren Versprechen — sondern nachvollziehbare Informationen.',
    highlights: [
      'Lokale Präsenz und direkte Bauträgerkontakte',
      'Deutschsprachiges Team für DACH-Investoren',
      'Klare Erwartungen vor Vertragsabschluss',
    ],
  },
  'euro-diversifikation-sachwert': {
    headline: 'Mit Euro investieren & Sachwert diversifizieren',
    subheadline: 'Kapital außerhalb der Eurozone strukturieren',
    intro:
      'Immobilien in Ägypten können eine Ergänzung zur heimischen Kapitalanlage sein — Währung, Recht und Steuern erfordern Planung. Tatari erklärt Euro-Kalkulation, Zahlungswege und Rahmenbedingungen in der Erstberatung.',
    highlights: [
      'Euro-Kalkulation auf Anfrage',
      'Sachwert statt rein finanziellem Papier',
      'Diversifikation mit klarem Risikoprofil',
    ],
  },
  'mieteinnahmen-nachfrage': {
    headline: 'Mieteinnahmen & Nachfrage bei Gewerbeimmobilien',
    subheadline: 'Mietpotenzial — abhängig von Nutzung und Markt',
    intro:
      'Mieteinnahmen sind kein Automatismus, sondern das Ergebnis von Lage, Mieterprofil und Management. Tatari diskutiert realistische Miet-Szenarien für Commercial Units — ohne garantierte Cashflows.',
    highlights: [
      'Nachfrageanalyse je Einheitentyp',
      'Vermietungspotenzial als Szenario, nicht Garantie',
      'Langfristige Haltestrategie besprechen',
    ],
  },
  'premium-amenities-experience': {
    headline: 'Premium Mixed-Use & Experience-Immobilien',
    subheadline: 'Architektur, Amenities und Markenwelt',
    intro:
      'Premium-Projekte differenzieren sich über Architektur, Nutzungsmix und Erlebnis. Tatari arbeitet mit Entwicklungen, die neben Fläche auch Markenwert und Lagequalität liefern — wie West Wind „Life in Flow“.',
    highlights: [
      'High-End-Gewerbe in ausgewählten Lagen',
      'Mixed-Use mit Pool, Retail und Medical',
      'Erlebnisorientierte Projektpositionierung',
    ],
  },
  'timing-scarcity-wave': {
    headline: 'Timing & Marktfenster — früh positionieren',
    subheadline: 'Chance verstehen, ohne künstlichen Druck',
    intro:
      'Frühe Offplan-Phasen können Vorteile bei Preis und Auswahl bieten — sind aber nicht risikofrei. Tatari hilft, Timing, Projektphase und persönliche Ziele abzugleichen — ohne Countdown-Drucktaktik.',
    highlights: [
      'Projektstart und Phasen verständlich erklärt',
      'Verfügbarkeit vorbehaltlich Reservierung',
      'Informierte Entscheidung statt Hype',
    ],
  },
  'long-tail-seo-fragen': {
    headline: 'Häufige Fragen zu Immobilien in Ägypten',
    subheadline: 'Long-Tail-Antworten für Ihre Recherche',
    intro:
      'Von „Lohnt sich Ägypten?“ bis „Wie kaufe ich Offplan?“ — hier bündeln wir die häufigsten Suchfragen. Ausführliche Antworten finden Sie auch im FAQ auf der Startseite.',
    highlights: [
      '50+ typische Investoren-Fragen abgedeckt',
      'Claim-safe Antworten ohne Garantien',
      'Direkt zur persönlichen Beratung',
    ],
  },
  'cta-conversion-keywords': {
    headline: 'Beratung, Exposé & Verfügbarkeit anfragen',
    subheadline: 'Der nächste Schritt — kostenlos und unverbindlich',
    intro:
      'Sie haben recherchiert — jetzt der konkrete Schritt: Verfügbarkeit, Grundrisse, Euro-Kalkulation oder Erstgespräch. Tatari antwortet deutschsprachig per Formular, Telefon oder WhatsApp.',
    highlights: [
      'Kostenlose Erstberatung',
      'West Wind Verfügbarkeit & Grundrisse',
      'WhatsApp für schnelle Rückfragen',
    ],
  },
  'saatchi-style-power-phrases': {
    headline: 'Investment-Philosophie — Wachstum früh verstehen',
    subheadline: 'Positionierung mit Substanz, nicht mit leeren Versprechen',
    intro:
      'Hinter jeder starken Formulierung steht eine klare Idee: Sachwert aufbauen, Märkte früh verstehen, strukturiert handeln. Tatari übersetzt das in konkrete Projektgespräche — ohne Marketing-Übertreibung.',
    highlights: [
      '„Kleine Rate, großer Sachwert“ — projektabhängig geprüft',
      'Früh informiert statt spät zu teuer kaufen',
      'Vom Zuschauer zum strukturierten Investor',
    ],
  },
};

export function getClusterIntro(slug: string): ClusterIntro {
  return (
    intros[slug] ?? {
      headline: 'Offplan-Investment in Ägypten',
      subheadline: 'Tatari Investment — deutschsprachige Beratung',
      intro:
        'Tatari begleitet Investoren bei ausgewählten Offplan- und Commercial-Projekten in Ägypten — transparent, claim-safe und vorbehaltlich Verfügbarkeit.',
      highlights: [
        'Direkt vom Bauträger nach Prüfung',
        'Zinsfreie Raten projektspezifisch',
        'Persönliche Beratung für DACH & Europa',
      ],
    }
  );
}

export function getClusterHref(slug: string): string {
  if (slug === 'west-wind-project-keywords') return '/projekte/west-wind';
  if (slug === 'long-tail-seo-fragen') return '/#faq';
  return `/investieren/${slug}`;
}
