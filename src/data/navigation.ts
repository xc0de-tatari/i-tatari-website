/** German-first site navigation & internal linking for SEO */
export const pillarPages = [
  { href: '/immobilien-kaufen-aegypten', label: 'Immobilien in Ägypten kaufen' },
  { href: '/offplan-immobilien-aegypten', label: 'Offplan Immobilien Ägypten' },
  { href: '/immobilien-auf-raten-aegypten', label: 'Immobilien auf Raten' },
  { href: '/immobilienfinanzierung-aegypten-deutsche', label: 'Finanzierung für Deutsche' },
  { href: '/haus-wohnung-auf-raten-aegypten-deutsche', label: 'Haus & Wohnung auf Raten' },
  { href: '/urlaub-und-investment-aegypten', label: 'Urlaub & Investment' },
  { href: '/direkt-vom-bautraeger-aegypten', label: 'Direkt vom Bauträger' },
  { href: '/warum-tatari-investment', label: 'Warum Tatari' },
  { href: '/rendite-immobilien-aegypten', label: 'Rendite & Potenzial' },
  { href: '/kliniken-kaufen-aegypten', label: 'Kliniken kaufen' },
  { href: '/bueros-kaufen-aegypten', label: 'Büros kaufen' },
  { href: '/retail-pharmacy-investment-aegypten', label: 'Retail & Pharmacy' },
] as const;

export const productPages = [
  { href: '/projekte', label: 'Alle Projekte' },
  { href: '/projekte/west-wind', label: 'West Wind' },
  { href: '/investieren', label: 'Investment-Themen' },
] as const;

export const footerInvestLinks = [
  ...pillarPages.slice(0, 6),
] as const;

export const footerCommercialLinks = [
  ...pillarPages.slice(6),
  { href: '/kliniken-kaufen-aegypten', label: 'Medical Units' },
] as const;
