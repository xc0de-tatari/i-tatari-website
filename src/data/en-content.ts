/** English page content — paired with German routes via src/i18n/index.ts */
export interface EnPageContent {
  slug: string;
  path: string;
  seo: { title: string; description: string };
  hero: {
    label: string;
    headline: string;
    subheadline: string;
  };
  sections: Array<{
    title: string;
    description?: string;
    items: string[];
  }>;
  cta: string;
}

export const enHome = {
  seo: {
    title: 'Tatari Investment | Egypt, Dubai & Saudi Arabia Real Estate',
    description:
      'Offplan real estate in Egypt, Dubai and Saudi Arabia. English advisory, direct developer access, West Wind Sheikh Zayed — subject to availability.',
  },
  hero: {
    label: 'Premium real estate · MENA',
    headline: 'Invest in Egypt, Dubai & Saudi Arabia — with structured advisory',
    subheadline:
      'Offplan and commercial units, direct developer payment plans after review, on-ground due diligence. No guaranteed returns.',
  },
  markets: [
    {
      flag: '🇪🇬',
      name: 'Egypt',
      desc: 'Offplan & West Wind in Sheikh Zayed — our core market with deepest project access.',
      href: '/en/buy-property-egypt',
      cta: 'Explore Egypt',
    },
    {
      flag: '🇦🇪',
      name: 'Dubai',
      desc: 'Luxury offplan & ready properties in the UAE — curated developers, subject to availability.',
      href: '/en/real-estate-dubai',
      cta: 'Explore Dubai',
    },
    {
      flag: '🇸🇦',
      name: 'Saudi Arabia',
      desc: 'Riyadh, Jeddah & Vision 2030 projects — structured entry for international investors.',
      href: '/en/real-estate-saudi-arabia',
      cta: 'Explore KSA',
    },
  ],
};

export const enPages: Record<string, EnPageContent> = {
  'buy-property-egypt': {
    slug: 'buy-property-egypt',
    path: '/en/buy-property-egypt',
    seo: {
      title: 'Buy Property in Egypt | Offplan | Tatari Investment',
      description:
        'Buy offplan property in Egypt with English advisory: direct developer plans, due diligence, West Wind Sheikh Zayed — subject to availability.',
    },
    hero: {
      label: 'Egypt · Offplan',
      headline: 'Buy real estate in Egypt — offplan & direct from developer',
      subheadline:
        'Structured entry for international buyers: payment milestones, contract review, on-ground support in Sheikh Zayed and key growth corridors.',
    },
    sections: [
      {
        title: 'Why Egypt for property investors',
        items: [
          'Urban growth corridors and new administrative cities',
          'Offplan pricing phases with developer-direct instalments',
          'Commercial units: clinics, offices, retail in mixed-use hubs',
          'Euro-friendly calculations with transparent disclaimers',
        ],
      },
      {
        title: 'How Tatari supports you',
        items: [
          'English advisory from first call to reservation',
          'Developer credentials and contract logic reviewed',
          'West Wind flagship project in Sheikh Zayed City',
          'No guaranteed yield promises — risk disclosed upfront',
        ],
      },
    ],
    cta: 'Request consultation',
  },
  'offplan-property-egypt': {
    slug: 'offplan-property-egypt',
    path: '/en/offplan-property-egypt',
    seo: {
      title: 'Offplan Property Egypt | Direct Developer | Tatari',
      description:
        'Offplan real estate in Egypt explained: payment plans, milestones, risks and how Tatari supports international buyers.',
    },
    hero: {
      label: 'Offplan explained',
      headline: 'Offplan property in Egypt — early entry, structured payments',
      subheadline:
        'Buy during construction with staged developer payments instead of immediate full financing — terms vary by project.',
    },
    sections: [
      {
        title: 'What offplan means',
        items: [
          'Purchase before completion at project-specific pricing',
          'Instalments tied to construction milestones',
          'Interest-free developer plans possible after review — not guaranteed',
          'Availability and plans change — always confirm in writing',
        ],
      },
    ],
    cta: 'Discuss offplan options',
  },
  'real-estate-dubai': {
    slug: 'real-estate-dubai',
    path: '/en/real-estate-dubai',
    seo: {
      title: 'Dubai Real Estate | Offplan UAE | Tatari Investment',
      description:
        'Dubai offplan and ready properties for international investors. Curated developers, English advisory — subject to availability.',
    },
    hero: {
      label: 'UAE · Dubai',
      headline: 'Dubai real estate — offplan & premium projects',
      subheadline:
        'Established global market with strong infrastructure. Tatari structures entry with clear risk disclosure.',
    },
    sections: [
      {
        title: 'What we broker',
        items: [
          'Offplan apartments & villas with selected developers',
          'Ready and secondary market where available',
          'English support from briefing to reservation',
          'Golden Visa thresholds may apply — verify individually',
        ],
      },
    ],
    cta: 'Dubai consultation',
  },
  'real-estate-saudi-arabia': {
    slug: 'real-estate-saudi-arabia',
    path: '/en/real-estate-saudi-arabia',
    seo: {
      title: 'Saudi Arabia Real Estate | Riyadh & Jeddah | Tatari',
      description:
        'Real estate in Saudi Arabia for international investors: Vision 2030 projects, structured advisory in English.',
    },
    hero: {
      label: 'KSA',
      headline: 'Saudi Arabia real estate — Riyadh, Jeddah & giga-projects',
      subheadline:
        'Long-term growth market with regulatory evolution. Tatari offers structured orientation — no return guarantees.',
    },
    sections: [
      {
        title: 'Focus areas',
        items: [
          'Residential and mixed-use in Riyadh & Jeddah',
          'Vision 2030 corridor opportunities',
          'Foreign ownership rules — project-specific',
          'Due diligence before any reservation',
        ],
      },
    ],
    cta: 'Saudi Arabia briefing',
  },
  'installment-property-egypt': {
    slug: 'installment-property-egypt',
    path: '/en/installment-property-egypt',
    seo: {
      title: 'Property Installments Egypt | Developer Plans | Tatari',
      description:
        'Buy property in Egypt on instalments: interest-free developer plans after individual review — subject to availability.',
    },
    hero: {
      label: 'Payment plans',
      headline: 'Property instalments in Egypt — developer-direct plans',
      subheadline:
        'Many developers offer staged payments during construction. Terms, deposit and duration are project-specific.',
    },
    sections: [
      {
        title: 'Typical structure',
        items: [
          'Deposit often 5–10% — varies by project',
          'Milestone payments until handover',
          'Reviewed individually before commitment',
          'Not a guarantee of approval or terms',
        ],
      },
    ],
    cta: 'Review payment plan',
  },
  'why-tatari': {
    slug: 'why-tatari',
    path: '/en/why-tatari',
    seo: {
      title: 'Why Tatari Investment | Egypt Real Estate Advisory',
      description:
        'Why international investors work with Tatari: English advisory, on-ground due diligence, direct developer access in Egypt and MENA.',
    },
    hero: {
      label: 'About Tatari',
      headline: 'Why Tatari Investment',
      subheadline:
        'We bridge international capital with vetted offplan projects in Egypt — with transparency and local execution.',
    },
    sections: [
      {
        title: 'Our approach',
        items: [
          'English-first communication',
          'On-ground team in Sheikh Zayed, Egypt',
          'Direct developer relationships',
          'Clear disclaimers — no guaranteed returns',
        ],
      },
    ],
    cta: 'Meet the team',
  },
};
