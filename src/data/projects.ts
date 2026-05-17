/** Investment projects for /projekte overview */
export type ProjectFilter =
  | 'clinics'
  | 'offices'
  | 'retail'
  | 'residential'
  | 'commercial'
  | 'offplan'
  | 'ready-soon'
  | 'small-entry'
  | 'long-payment'
  | 'egypt'
  | 'sheikh-zayed'
  | 'new-cairo'
  | 'north-coast'
  | 'new-capital';

export interface ProjectCard {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  priceFrom: string;
  tag: string;
  description: string;
  filters: ProjectFilter[];
  href: string;
  imageKey: 'westwind' | 'cairo' | 'coast' | 'capital' | 'placeholder';
  featured?: boolean;
}

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'clinics', label: 'Clinics' },
  { id: 'offices', label: 'Offices' },
  { id: 'retail', label: 'Retail' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'offplan', label: 'Offplan' },
  { id: 'ready-soon', label: 'Ready soon' },
  { id: 'small-entry', label: 'Small entry' },
  { id: 'long-payment', label: 'Long payment plan' },
  { id: 'egypt', label: 'Egypt' },
  { id: 'sheikh-zayed', label: 'Sheikh Zayed' },
  { id: 'new-cairo', label: 'New Cairo' },
  { id: 'north-coast', label: 'North Coast' },
  { id: 'new-capital', label: 'New Capital' },
];

export const projects: ProjectCard[] = [
  {
    id: 'west-wind',
    slug: 'west-wind',
    title: 'West Wind',
    location: 'Sheikh Zayed, Greater Cairo',
    type: 'Mixed-Use · Offplan',
    priceFrom: 'auf Anfrage',
    tag: 'Flagship',
    description:
      'Clinics, Offices, Retail & Pharmacy. Direkt vom Bauträger Pins & Corners. Zinsfreie Raten nach Prüfung.',
    filters: [
      'clinics',
      'offices',
      'retail',
      'commercial',
      'offplan',
      'small-entry',
      'long-payment',
      'egypt',
      'sheikh-zayed',
    ],
    href: '/projekte/west-wind',
    imageKey: 'westwind',
    featured: true,
  },
  {
    id: 'new-capital-tower',
    slug: 'new-capital-tower',
    title: 'New Capital Commercial',
    location: 'New Administrative Capital',
    type: 'Commercial · Offplan',
    priceFrom: 'ab 32.000 €',
    tag: 'Demnächst',
    description: 'Gewerbe- und Büroflächen in Ägyptens neuer Verwaltungshauptstadt — Platzhalter, Details folgen.',
    filters: ['offices', 'commercial', 'offplan', 'new-capital', 'egypt'],
    href: '/#kontakt',
    imageKey: 'capital',
  },
  {
    id: 'sheikh-zayed-residence',
    slug: 'sheikh-zayed-residence',
    title: 'Sheikh Zayed Residence',
    location: 'Sheikh Zayed',
    type: 'Residential · Offplan',
    priceFrom: 'ab 35.000 €',
    tag: 'Platzhalter',
    description: 'Wohnkonzept in etablierter Premium-Lage — Verfügbarkeit auf Anfrage.',
    filters: ['residential', 'offplan', 'sheikh-zayed', 'egypt', 'small-entry'],
    href: '/#kontakt',
    imageKey: 'cairo',
  },
  {
    id: 'north-coast-resort',
    slug: 'north-coast-resort',
    title: 'North Coast Resort Units',
    location: 'North Coast',
    type: 'Residential · Offplan',
    priceFrom: 'ab 28.000 €',
    tag: 'Platzhalter',
    description: 'Urlaubs- und Investment-Immobilien an der Mittelmeerküste — Projekt in Vorbereitung.',
    filters: ['residential', 'offplan', 'north-coast', 'egypt'],
    href: '/#kontakt',
    imageKey: 'coast',
  },
  {
    id: 'new-cairo-clinic',
    slug: 'new-cairo-clinic',
    title: 'New Cairo Medical Suite',
    location: 'New Cairo',
    type: 'Clinic · Offplan',
    priceFrom: 'auf Anfrage',
    tag: 'Platzhalter',
    description: 'Medical Units für Fachärzte und Kliniken — Details nach Projektfreigabe.',
    filters: ['clinics', 'offplan', 'new-cairo', 'egypt', 'commercial'],
    href: '/kliniken-kaufen-aegypten',
    imageKey: 'placeholder',
  },
  {
    id: 'alamein-beach',
    slug: 'alamein-beach',
    title: 'New Alamein Beach Studio',
    location: 'New Alamein',
    type: 'Residential · Offplan',
    priceFrom: 'ab 28.000 €',
    tag: 'Platzhalter',
    description: 'Küstennahe Units mit Tourismus-Narrativ — vorbehaltlich Verfügbarkeit.',
    filters: ['residential', 'offplan', 'north-coast', 'egypt', 'small-entry'],
    href: '/#kontakt',
    imageKey: 'coast',
  },
];
