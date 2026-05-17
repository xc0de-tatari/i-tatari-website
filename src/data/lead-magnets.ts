export interface LeadMagnet {
  id: string;
  slug: string;
  title: string;
  description: string;
  bullets: string[];
}

export const leadMagnets: LeadMagnet[] = [
  {
    id: 'offplan-guide-2026',
    slug: 'offplan-guide-2026',
    title: 'Ägypten Offplan Investment Guide 2026',
    description: 'PDF-Guide: Offplan, Raten, Risiken, Checkliste — per E-Mail nach Anfrage.',
    bullets: ['Offplan erklärt', 'Bauträger-Raten', 'Due Diligence', 'Checkliste DE'],
  },
  {
    id: 'west-wind-euro',
    slug: 'west-wind-euro-kalkulation',
    title: 'West Wind Euro-Kalkulation',
    description: 'Individuelle Meilenstein-Kalkulation in EUR — auf Anfrage.',
    bullets: ['Projektspezifisch', 'Richtwerte EGP/EUR', 'Mit Disclaimer'],
  },
  {
    id: 'ratenplan-rechner',
    slug: 'ratenplan-rechner',
    title: 'Ratenplan-Rechner',
    description: 'Online-Rechner für Anzahlung, Laufzeit und monatliche Rate.',
    bullets: ['Konfigurierbar', '62 EGP/EUR default', 'Nicht verbindlich'],
  },
  {
    id: 'checkliste-deutsch',
    slug: 'checkliste-immobilie-aegypten',
    title: 'Checkliste: Immobilie in Ägypten als Deutscher',
    description: 'Dokumente, Schritte, Vorprüfung — kompakt zum Download.',
    bullets: ['Unterlagen', 'Prozess', 'FAQ'],
  },
  {
    id: 'besichtigungsreise',
    slug: 'besichtigungsreise',
    title: 'Besichtigungsreise planen',
    description: 'Inspection Trip nach Ägypten mit Tatari — Termin anfragen.',
    bullets: ['Sheikh Zayed', 'Projektbesichtigung', 'Follow-up'],
  },
  {
    id: 'top-10-fehler',
    slug: 'top-10-fehler-ausland',
    title: 'Top 10 Fehler beim Immobilienkauf im Ausland',
    description: 'Kurz-Guide zu typischen Fehlern — und wie Tatari sie vermeidet.',
    bullets: ['Risiken', 'Due Diligence', 'Claim-safe'],
  },
];
