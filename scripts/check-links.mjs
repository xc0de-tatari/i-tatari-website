#!/usr/bin/env node
/** Validate internal hrefs in src/**/*.astro against known static routes */
import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = join(root, 'src/pages');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (e.name.endsWith('.astro')) files.push(p);
  }
  return files;
}

function pathFromPage(file) {
  const rel = file.replace(pagesDir, '').replace(/\\/g, '/');
  if (rel.endsWith('/index.astro')) return rel.replace('/index.astro', '') || '/';
  if (rel === '/index.astro') return '/';
  return rel.replace('.astro', '');
}

async function main() {
  const pageFiles = await walk(pagesDir);
  const routes = new Set(['/']);
  for (const f of pageFiles) {
    const p = pathFromPage(f);
    routes.add(p || '/');
    if (p.includes('[')) {
      // dynamic — skip exact match
    }
  }

  const astroFiles = [];
  async function walkSrc(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory() && e.name !== 'node_modules') await walkSrc(p);
      else if (e.name.endsWith('.astro')) astroFiles.push(p);
    }
  }
  await walkSrc(join(root, 'src'));

  const hrefRe = /href=["']([^"'#?]+)["']/g;
  const broken = [];
  const anchors = new Set(['#kontakt', '#vorteile', '#standorte', '#objekte', '#rechner', '#faq', '#lp-form', '#main-content']);

  for (const file of astroFiles) {
    const content = await readFile(file, 'utf-8');
    let m;
    while ((m = hrefRe.exec(content))) {
      let href = m[1];
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('wa.me'))
        continue;
      if (href.startsWith('#')) {
        if (!anchors.has(href.split('?')[0])) {
          // hash-only on same page — ok
        }
        continue;
      }
      if (href.startsWith('/#')) continue;
      const pathOnly = href.split('?')[0].replace(/\/$/, '') || '/';
      if (pathOnly.includes('[')) continue;
      if (!routes.has(pathOnly) && !pathOnly.startsWith('/immobilien-aegypten/') && !pathOnly.startsWith('/wissen/') && !pathOnly.startsWith('/investieren/') && !pathOnly.startsWith('/lp/') && !pathOnly.startsWith('/ratgeber/')) {
        broken.push({ file: file.replace(root, ''), href: pathOnly });
      }
    }
  }

  if (broken.length) {
    console.error('Potentially broken internal links (static check):');
    for (const b of broken.slice(0, 30)) console.error(`  ${b.href} in ${b.file}`);
    process.exit(1);
  }
  console.log(`✓ Link check passed (${routes.size} static routes, ${astroFiles.length} components)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
