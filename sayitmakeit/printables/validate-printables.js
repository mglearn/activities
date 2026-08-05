#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const ROOT = __dirname;
const SITE = path.dirname(ROOT);
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
let failures = 0;
const fail = (message) => { console.error(`FAIL: ${message}`); failures++; };
const run = (cmd, args) => cp.execFileSync(cmd, args, { encoding: 'utf8' });

for (const pack of manifest.packs) {
  const base = path.join(ROOT, pack.slug);
  const htmlPath = path.join(SITE, pack.html);
  const pdfPath = path.join(SITE, pack.pdf);
  const pngDir = path.join(SITE, pack.pngDirectory);
  const activityPath = path.join(SITE, 'a', `${pack.slug}.html`);
  for (const required of [htmlPath, pdfPath, pngDir, activityPath]) {
    if (!fs.existsSync(required)) fail(`${pack.slug}: missing ${path.relative(SITE, required)}`);
  }
  if (failures && !fs.existsSync(htmlPath)) continue;
  const html = fs.readFileSync(htmlPath, 'utf8');
  const htmlPages = (html.match(/<section class="page /g) || []).length;
  if (htmlPages !== pack.pageCount) fail(`${pack.slug}: manifest says ${pack.pageCount} pages; HTML has ${htmlPages}`);
  if (!html.includes('Set A') || !html.includes('Set B')) fail(`${pack.slug}: missing Set A or Set B`);
  if (!html.includes('Accessibility and accommodations')) fail(`${pack.slug}: missing accessibility guidance`);
  if (!html.includes('Teacher directions') || !html.includes('reference')) fail(`${pack.slug}: missing directions/reference`);
  if (fs.existsSync(pdfPath)) {
    if (fs.readFileSync(pdfPath).subarray(0, 4).toString() !== '%PDF') fail(`${pack.slug}: invalid PDF signature`);
    const info = run('pdfinfo', [pdfPath]);
    const pages = Number((info.match(/^Pages:\s+(\d+)/m) || [])[1]);
    if (pages !== pack.pageCount) fail(`${pack.slug}: PDF has ${pages} pages; expected ${pack.pageCount}`);
    if (!/^Page size:\s+612 x 792 pts \(letter\)/m.test(info)) fail(`${pack.slug}: first PDF page is not US Letter`);
  }
  if (fs.existsSync(pngDir)) {
    const pngs = fs.readdirSync(pngDir).filter((f) => f.endsWith('.png')).sort();
    if (pngs.length !== pack.pageCount) fail(`${pack.slug}: ${pngs.length} PNGs; expected ${pack.pageCount}`);
    for (const png of pngs) {
      const dims = run('identify', ['-format', '%wx%h', path.join(pngDir, png)]).trim();
      if (!['2550x3300', '3300x2550'].includes(dims)) fail(`${pack.slug}/${png}: unexpected dimensions ${dims}`);
    }
  }
  if (fs.existsSync(activityPath)) {
    const activity = fs.readFileSync(activityPath, 'utf8');
    if (!activity.includes(`../${pack.pdf}`)) fail(`${pack.slug}: activity page lacks manifest PDF link`);
  }
  if (!fs.existsSync(base)) fail(`${pack.slug}: missing pack directory`);
}

if (failures) {
  console.error(`${failures} printable validation failure(s).`);
  process.exit(1);
}
console.log(`Validated ${manifest.packs.length} packs and ${manifest.packs.reduce((n,p)=>n+p.pageCount,0)} PDF/PNG pages.`);
