import { slugifyGerman } from '../lib/slug';

export interface GccPage {
  slug: string;
  region: string;
  headline: string;
  subheadline: string;
  seo: { title: string; description: string; keywords: string[] };
  localAngle: string;
}

const gccRegions = [
  { name: 'Middle East', slug: 'real-estate-investment-egypt-middle-east' },
  { name: 'Saudi Arabia', slug: 'egypt-property-investment-saudi-arabia' },
  { name: 'UAE', slug: 'egypt-property-investment-uae' },
  { name: 'Qatar', slug: 'egypt-property-investment-qatar' },
  { name: 'Kuwait', slug: 'egypt-property-investment-kuwait' },
  { name: 'Bahrain', slug: 'egypt-property-investment-bahrain' },
  { name: 'Oman', slug: 'egypt-property-investment-oman' },
  { name: 'Dubai', slug: 'egypt-property-investment-dubai' },
  { name: 'Abu Dhabi', slug: 'egypt-property-investment-abu-dhabi' },
  { name: 'Riyadh', slug: 'egypt-property-investment-riyadh' },
  { name: 'Jeddah', slug: 'egypt-property-investment-jeddah' },
  { name: 'Doha', slug: 'egypt-property-investment-doha' },
  { name: 'Kuwait City', slug: 'egypt-property-investment-kuwait-city' },
];

const angles = [
  (r: string) =>
    `Investors from ${r} often compare Egypt to earlier GCC offplan cycles — Tatari offers structured entry with on-ground due diligence.`,
  (r: string) =>
    `${r} capital seeking regional diversification finds Egypt's urban growth and developer-direct offplan models compelling — with clear risk disclosure.`,
  (r: string) =>
    `From ${r}, West Wind in Sheikh Zayed is a flagship mixed-use project: clinics, offices, retail — subject to availability.`,
];

export const gccPages: GccPage[] = gccRegions.map((r, i) => ({
  slug: r.slug,
  region: r.name,
  headline: `Egypt Real Estate Investment for ${r.name} Investors`,
  subheadline:
    'Offplan opportunities, direct developer access, commercial & residential units — supported by Tatari on the ground in Egypt.',
  seo: {
    title: `Egypt Property Investment ${r.name} | Offplan | Tatari Investment`,
    description: `Invest in vetted offplan real estate in Egypt from ${r.name}. Direct developer plans, commercial units, Tatari due diligence & WhatsApp advisory.`,
    keywords: [
      `Egypt property investment ${r.name}`,
      'Egypt offplan',
      'Egypt commercial real estate',
    ],
  },
  localAngle: angles[i % angles.length](r.name),
}));

export function getGccPage(slug: string) {
  return gccPages.find((p) => p.slug === slug);
}
