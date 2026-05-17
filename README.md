# Tatari Investments – Astro Landing Page

A 1:1 Astro rebuild of [i-tatari.com](https://www.i-tatari.com) — premium real estate investments in Dubai & Egypt.

## Stack

- [Astro](https://astro.build) 5
- Vanilla CSS (dark theme, gold accents)
- TypeScript for client interactivity (ROI calculator, FAQ accordion, mobile nav)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages/index.astro` — main landing page
- `src/components/` — section components (Hero, Properties, FAQ, etc.)
- `src/data/site.ts` — content data
- `src/styles/global.css` — design system matching the original site
- `src/scripts/main.ts` — client-side behavior

## Notes

- Images use the same URLs as [i-tatari.com](https://www.i-tatari.com) (see `src/data/images.ts`).
- Contact form is front-end only; wire to your backend or form service (e.g. Formspree) as needed.
