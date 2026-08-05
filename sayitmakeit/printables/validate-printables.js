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
  const setSections = [...html.matchAll(/<section class="page [^"]*">[\s\S]*?<\/section>/g)].map(m=>[m[0],(m[0].match(/<span class="set">Set ([AB])<\/span>/)||[])[1]]).filter(x=>x[1]);
  for (let i = 0; i + 1 < setSections.length; i += 2) {
    const norm = s => s.replace(/Set [AB]/g,'Set X').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    if (setSections[i][1] !== 'A' || setSections[i+1][1] !== 'B' || norm(setSections[i][0]) !== norm(setSections[i+1][0])) fail(`${pack.slug}: Set A / Set B content mismatch`);
  }
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
    for(const png of pngs){const file=path.join(pngDir,png),buf=fs.readFileSync(file);const size=`${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}`;if(!['2550x3300','3300x2550'].includes(size))fail(`${pack.slug}/${png}: unexpected dimensions ${size}`);}
  }
  if (fs.existsSync(activityPath)) {
    const activity = fs.readFileSync(activityPath, 'utf8');
    if (!activity.includes(`../${pack.pdf}`)) fail(`${pack.slug}: activity page lacks manifest PDF link`);
  }
  if (!fs.existsSync(base)) fail(`${pack.slug}: missing pack directory`);
}

const coverage=manifest.coverage||[];
if(coverage.length!==106) fail(`coverage: expected 106 activities; found ${coverage.length}`);
const allowed=new Set(['complete','teacher-supplied','not-needed','planned','in-review']);
const ids=new Set();
for(const item of coverage){if(ids.has(item.activity))fail(`coverage: duplicate activity ${item.activity}`);ids.add(item.activity);if(!allowed.has(item.status))fail(`coverage: invalid status ${item.status}`);if(!item.note)fail(`coverage: activity ${item.activity} lacks decision note`);if(item.status==='complete'&&!manifest.packs.some(p=>p.activity===item.activity))fail(`coverage: activity ${item.activity} complete without pack`);}
if(coverage.some(x=>['planned','in-review'].includes(x.status)))fail('coverage: unfinished planned/in-review activities remain');
if(!fs.existsSync(path.join(SITE,'printable-coverage.html')))fail('coverage: missing printable-coverage.html');

if (failures) {
  console.error(`${failures} printable validation failure(s).`);
  process.exit(1);
}
console.log(`Validated ${manifest.packs.length} packs and ${manifest.packs.reduce((n,p)=>n+p.pageCount,0)} PDF/PNG pages.`);
