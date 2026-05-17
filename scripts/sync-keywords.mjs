#!/usr/bin/env node
/**
 * Sync keywords from Tatari_Investment_1000_Monster_Keywords.xlsx
 * Default source: ~/Downloads/Tatari_Investment_1000_Monster_Keywords.xlsx
 */
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const defaultSource = join(
  homedir(),
  'Downloads',
  'Tatari_Investment_1000_Monster_Keywords.xlsx'
);

const source = process.argv[2] || defaultSource;
const outJson = join(root, 'src/data/keywords.json');
const outXlsx = join(root, 'data/Tatari_Investment_1000_Monster_Keywords.xlsx');

async function main() {
  const XLSX = require('xlsx');
  const wb = XLSX.readFile(source);
  const keywords = [];

  for (const sheetName of ['1000 Keywords', 'Top 100 Money Keywords']) {
    if (!wb.Sheets[sheetName]) continue;
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1 });
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row?.[2]) continue;
      keywords.push({
        id: row[0],
        cluster: row[1],
        keyword: String(row[2]).trim(),
        intent: row[3] || '',
        placement: row[4] || '',
        priority: row[5] || '',
        score: row[6] || 0,
        note: row[7] || '',
        sheet: sheetName,
      });
    }
  }

  const seen = new Set();
  const unique = keywords.filter((k) => {
    const key = k.keyword.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  await mkdir(dirname(outJson), { recursive: true });
  await mkdir(dirname(outXlsx), { recursive: true });
  await writeFile(outJson, JSON.stringify(unique, null, 2), 'utf-8');
  await copyFile(source, outXlsx);

  console.log(`✓ ${unique.length} Keywords → ${outJson}`);
  console.log(`✓ Excel-Kopie → ${outXlsx}`);
  console.log(`  Quelle: ${source}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
