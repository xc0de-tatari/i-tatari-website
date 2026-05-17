import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  /** Never show Astro dev toolbar — not for site visitors (dev only by default). */
  devToolbar: { enabled: false },
  site: 'https://www.i-tatari.com',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } },
      filter: (page) => !page.includes('/danke') && !page.includes('/ar'),
    }),
  ],
});
