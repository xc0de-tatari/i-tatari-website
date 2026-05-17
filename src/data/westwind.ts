import { ctas } from './ctas';

/** West Wind — Pins & Corners · Sheikh Zayed (brochure facts) */
export const westWind = {
  name: 'West Wind',
  developer: 'Pins & Corners',
  location: 'El Bostan Street, Sheikh Zayed City, Greater Cairo',
  tagline: 'Life in Flow',
  headline: 'West Wind — Offplan Mixed-Use an der El Bostan Street, Sheikh Zayed',
  subheadline:
    'Clinics ab 24 m² · Admin Offices ab 79 m² · Retail ab 37 m². Direkt vom Bauträger. Zinsfreie Bauträger-Raten nach Ratenplan-Prüfung — vorbehaltlich Verfügbarkeit.',
  description:
    'West Wind von Pins & Corners ist ein Premium Mixed-Use-Offplan-Projekt in Sheikh Zayed: Medical Units, Administrative Offices, Retail & Dining — mit direkten Kellerzugängen, Parking, EV Charging, Concierge, Pool, Water Feature und Gym. Nur ca. 1 Minute zur Mehwar Road, in der Nähe von Rofayda Hospital und Park Street.',
  address: {
    street: 'El Bostan Street',
    area: 'Sheikh Zayed City',
    city: 'Greater Cairo / Giza',
  },
  microLocation: [
    'El Bostan Street — Sheikh Zayed',
    'Ca. 1 Minute zur Mehwar Road',
    'Nähe Rofayda Hospital',
    'Park Street & 26th July Corridor',
    'Mall of Arabia · Capital Business Park · Arkana Plaza',
  ],
  unitSpecs: [
    {
      type: 'Clinic / Medical Units',
      icon: '🏥',
      sizeFrom: '24 m²',
      desc: 'Medical & Clinic-Flächen — Nähe Rofayda Hospital, Nachfrage im Großraum Kairo',
    },
    {
      type: 'Administrative Offices',
      icon: '🏢',
      sizeFrom: '79 m²',
      desc: 'Büro- und Verwaltungsflächen für KMU, Kanzleien und Professionals',
    },
    {
      type: 'Retail & Dining',
      icon: '🛍️',
      sizeFrom: '37 m²',
      desc: 'Einzelhandel, Gastronomie und tägliche Frequenz im Mixed-Use-Fluss',
    },
    {
      type: 'Pharmacy Opportunity',
      icon: '💊',
      sizeFrom: 'projektabhängig',
      desc: 'Apotheken- und Service-Flächen — exklusive Opportunities nach Verfügbarkeit',
    },
  ],
  amenities: [
    { icon: '🅿️', title: 'Parking', desc: 'Dedizierte Parkflächen für Investoren und Nutzer' },
    { icon: '⚡', title: 'EV Charging', desc: 'Elektromobilität im Projekt integriert' },
    { icon: '🛎️', title: 'Concierge', desc: 'Premium-Service und Empfang' },
    { icon: '🏊', title: 'Pool & Water Feature', desc: 'Lifestyle- und Experience-Elemente' },
    { icon: '💪', title: 'Gym', desc: 'Fitness im durchgängigen Konzept' },
    { icon: '🚪', title: 'Direct Basement Entrances', desc: 'Direkte Kellerzugänge — funktionale Premium-Logik' },
  ],
  concept: [
    'Mixed-Use: Workspaces, Retail, Dining, Clinic & Medical Facilities',
    '„Life in Flow“ — nahtlose Übergänge zwischen Nutzungen',
    'Offplan direkt von Pins & Corners (Developer Direct)',
    'Starke Mikrolage: Sheikh Zayed, El Bostan, Rofayda Hospital',
  ],
  investmentAngles: [
    'Offplan-Einstieg mit direktem Bauträger-Vertrag',
    'Zinsfreie Bauträger-Ratenzahlung nach persönlicher Vorprüfung — nicht zugesichert',
    'Euro-Kalkulation aller Meilensteine',
    'Commercial Units mit kleineren Einstiegsflächen (ab 24 m²)',
    'Mögliches Renditepotenzial — keine Garantie auf Rendite oder Miete',
  ],
  disclaimers: [
    'Alle Angaben vorbehaltlich Verfügbarkeit und Bauträgerbestätigung.',
    'Keine garantierte Rendite, Wertsteigerung oder Mieteinnahmen.',
    'Ratenplan-Prüfung und Vorqualifizierung — keine Finanzierungszusage.',
    'Flächenangaben und Preise projektspezifisch — auf Anfrage.',
  ],
  ctas: [
    ctas.westWindAvailability,
    ctas.floorPlans,
    ctas.euroCalc,
    ctas.expose,
    ctas.whatsapp,
  ],
  seo: {
    title: 'West Wind Sheikh Zayed | El Bostan Street | Clinics & Offices Offplan | Tatari',
    description:
      'West Wind Offplan: Clinics ab 24 m², Offices ab 79 m², Retail ab 37 m². El Bostan Street, Sheikh Zayed — nahe Rofayda Hospital. Mixed-Use, Parking, EV, Pool, Gym. Verfügbarkeit anfragen.',
    keywords: [
      'West Wind Investment',
      'West Wind Sheikh Zayed',
      'West Wind El Bostan Street',
      'Offplan Sheikh Zayed',
      'Medical Unit Egypt',
      'Clinic Investment Egypt',
      'Mixed Use Investment Egypt',
    ],
  },
  relatedLinks: [
    { href: '/kliniken-kaufen-aegypten', label: 'Kliniken kaufen Ägypten' },
    { href: '/bueros-kaufen-aegypten', label: 'Büros kaufen Ägypten' },
    { href: '/retail-pharmacy-investment-aegypten', label: 'Retail & Pharmacy' },
    { href: '/immobilien-auf-raten-aegypten', label: 'Immobilien auf Raten' },
    { href: '/immobilien-kaufen-aegypten', label: 'Ägypten Investment Hub' },
  ],
} as const;
