export interface PillarSection {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  items?: string[];
  cards?: { title: string; desc: string; icon?: string }[];
  links?: { href: string; label: string }[];
}

export interface PillarPageConfig {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    label?: string;
    headline: string;
    subheadline: string;
  };
  sections: PillarSection[];
  faqs?: { q: string; a: string }[];
  relatedLinks?: { href: string; label: string }[];
  schemaType: 'article' | 'webpage' | 'city' | 'listing';
  citySchema?: { city: string; region: string };
}
