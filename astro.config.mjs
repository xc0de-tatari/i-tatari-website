import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.i-tatari.com',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE' } },
      filter: (page) => !page.includes('/danke'),
    }),
  ],
});
