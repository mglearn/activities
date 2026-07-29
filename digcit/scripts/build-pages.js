/* build-pages.js — assemble _site/ for the PUBLIC site.
   digcit is fully OPEN: every activity (both the featured -free lessons and the
   full per-grade lessons) is published and playable. This build copies the whole
   suite, dropping only build sources (src/, i18n/) that aren't needed at runtime.
   Run: node scripts/build-pages.js   (output: _site/)
*/
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_site');

function copyTree(relDir, skip) {
  const abs = path.join(ROOT, relDir);
  for (const name of fs.readdirSync(abs)) {
    const rel = path.join(relDir, name);
    const st = fs.statSync(path.join(ROOT, rel));
    if (skip(rel, st.isDirectory())) continue;
    if (st.isDirectory()) { fs.mkdirSync(path.join(OUT, rel), { recursive: true }); copyTree(rel, skip); }
    else { fs.mkdirSync(path.join(OUT, path.dirname(rel)), { recursive: true }); fs.copyFileSync(path.join(ROOT, rel), path.join(OUT, rel)); }
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// top-level public pages
for (const f of ['index.html', 'library.html', 'correlation.html', 'guide.html', 'scope.html', 'lessons.html', 'udl.html', 'elps.html', 'answer-key.html']) {
  fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
}
fs.mkdirSync(path.join(OUT, 'assets'));
copyTree('assets', () => false);

// Arcade (free/public engagement games) — copy the whole dir if present.
if (fs.existsSync(path.join(ROOT, 'arcade'))) { fs.mkdirSync(path.join(OUT, 'arcade'), { recursive: true }); copyTree('arcade', () => false); }

// All three bands: publish everything (both -free and full lessons); drop only
// build sources (src/, i18n/) that aren't needed to run the static pages.
for (const band of ['gradek2', 'grade35', 'grade68']) {
  copyTree(band, (rel, isDir) => isDir && /(^|\/)(src|i18n)$/.test(rel));
}

fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

const count = (d) => fs.readdirSync(d, { recursive: true }).filter(f => fs.statSync(path.join(d, f)).isFile()).length;
console.log('Built _site/ (' + count(OUT) + ' files). All 18 activities published — fully open.');
