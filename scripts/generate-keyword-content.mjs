#!/usr/bin/env node
/** Regenerate keyword-faqs.ts and clusters.ts from keywords.json */
import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const keywords = JSON.parse(await readFile(join(root, 'src/data/keywords.json'), 'utf-8'));

function answerFor(q) {
  const ql = q.toLowerCase();
  if (ql.includes('rendite') || ql.includes('lohnt'))
    return 'Das Renditepotenzial hängt von Projekt, Lage, Nutzung und Marktzyklus ab. Tatari liefert transparente Szenarien — ohne garantierte Renditeversprechen.';
  if (ql.includes('zinsfrei') || ql.includes('raten') || ql.includes('anzahlung'))
    return 'Viele Offplan-Projekte bieten zinsfreie Bauträger-Ratenzahlung nach individueller Prüfung — vorbehaltlich Verfügbarkeit.';
  if (ql.includes('sicher'))
    return 'Sicherheit durch geprüfte Projektinformationen, lokale Due Diligence und deutschsprachige Begleitung — ohne unrealistische Garantien.';
  if (ql.includes('eoi'))
    return 'EOI ist eine vorläufige Interessensbekundung. Konditionen sind projektspezifisch; Tatari erklärt Vertragslogik transparent.';
  return 'Tatari begleitet deutschsprachige Investoren bei Offplan-Immobilien in Ägypten — persönliche Vorqualifizierung, vorbehaltlich Verfügbarkeit.';
}

const seen = new Set();
const faqs = [];
for (const k of keywords) {
  if (!String(k.cluster).includes('18 Long-Tail')) continue;
  let q = k.keyword;
  if (!q.endsWith('?')) q = q.charAt(0).toUpperCase() + q.slice(1) + '?';
  else q = q.charAt(0).toUpperCase() + q.slice(1);
  const key = q.toLowerCase();
  if (seen.has(key)) continue;
  seen.add(key);
  faqs.push({ q, a: answerFor(k.keyword) });
}

const clusterMap = new Map();
for (const k of keywords) {
  if (!clusterMap.has(k.cluster)) clusterMap.set(k.cluster, []);
  clusterMap.get(k.cluster).push(k);
}

const clusters = [...clusterMap.entries()].map(([name, items]) => {
  const slug = name
    .replace(/^\d+\s/, '')
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return {
    id: name.slice(0, 2).trim(),
    name,
    slug,
    count: items.length,
    sampleKeywords: items.slice(0, 6).map((i) => i.keyword),
    topKeyword: items.sort((a, b) => Number(b.score) - Number(a.score))[0]?.keyword || '',
  };
});

await writeFile(
  join(root, 'src/data/keyword-faqs.ts'),
  `/** Generated from keywords.json — run npm run sync:keywords:all */\nexport const keywordFaqs = ${JSON.stringify(faqs, null, 2)} as const;\n`
);
await writeFile(
  join(root, 'src/data/clusters.ts'),
  `/** Generated from keywords.json */\nexport const clusters = ${JSON.stringify(clusters, null, 2)} as const;\n`
);

console.log(`✓ ${faqs.length} FAQ-Einträge, ${clusters.length} Cluster generiert`);
