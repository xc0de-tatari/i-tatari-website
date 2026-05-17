import type { Locale } from './index';

export const ui = {
  de: {
    nav: [
      { href: '/#maerkte', label: 'Märkte' },
      { href: '/immobilien-kaufen-aegypten', label: 'Ägypten' },
      { href: '/immobilien-dubai', label: 'Dubai' },
      { href: '/immobilien-saudi-arabien', label: 'Saudi-Arabien' },
      { href: '/projekte/west-wind', label: 'West Wind' },
      { href: '/#kontakt', label: 'Kontakt' },
    ],
    cta: 'Kostenlose Beratung',
    menuOpen: 'Menü öffnen',
    skipLink: 'Zum Inhalt springen',
    switchTo: 'English',
    switchAria: 'Sprache auf Englisch umstellen',
    currentLang: 'DE',
  },
  en: {
    nav: [
      { href: '/en/#markets', label: 'Markets' },
      { href: '/en/buy-property-egypt', label: 'Egypt' },
      { href: '/en/real-estate-dubai', label: 'Dubai' },
      { href: '/en/real-estate-saudi-arabia', label: 'Saudi Arabia' },
      { href: '/en/projects/west-wind', label: 'West Wind' },
      { href: '/en/#contact', label: 'Contact' },
    ],
    cta: 'Free consultation',
    menuOpen: 'Open menu',
    skipLink: 'Skip to content',
    switchTo: 'Deutsch',
    switchAria: 'Switch language to German',
    currentLang: 'EN',
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export function getUi(locale: Locale) {
  return ui[locale];
}
