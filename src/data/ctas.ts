import { links } from './links';

/** Primary conversion CTAs — claim-safe, German-first */
export const ctas = {
  consultation: {
    label: 'Kostenlose Investment-Beratung sichern',
    href: '#kontakt',
  },
  westWindAvailability: {
    label: 'West Wind Verfügbarkeit anfragen',
    href: '/projekte/west-wind#kontakt',
  },
  euroCalc: {
    label: 'Euro-Kalkulation erhalten',
    href: '#rechner',
  },
  floorPlans: {
    label: 'Grundrisse & Preise erhalten',
    href: '#kontakt',
  },
  whatsapp: {
    label: 'WhatsApp-Beratung starten',
    href: links.whatsapp,
    external: true,
  },
  paymentPlan: {
    label: 'Ratenplan prüfen lassen',
    href: '#kontakt',
  },
  guide: {
    label: 'Offplan Investment Guide herunterladen',
    href: '#kontakt',
  },
  prequalify: {
    label: 'Persönliche Vorqualifizierung starten',
    href: '#kontakt',
  },
  expose: {
    label: 'Projekt-Exposé anfordern',
    href: '#kontakt',
  },
  siteVisit: {
    label: 'Investmentreise / Besichtigung planen',
    href: '#kontakt',
  },
} as const;
