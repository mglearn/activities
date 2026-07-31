#!/usr/bin/env node
/* Merge per-language body files (data/tr-<lang>.json) + lever translations
 * (data/tr-levers.json) into data/translations.json, keyed num -> lang -> fields.
 * Run:  node build-translations.js   (then RENDER=1 node build.js) */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const D = (f) => path.join(ROOT, 'data', f);
const rd = (f) => JSON.parse(fs.readFileSync(D(f), 'utf8'));

const LANGS = ['es', 'vi', 'ar', 'hi', 'ur', 'zh'];
const acts = rd('activities.json');
const levers = rd('tr-levers.json');
const body = {};
LANGS.forEach((l) => { body[l] = rd(`tr-${l}.json`); });

const strandKey = { engineering: 'eng', math: 'math', science: 'sci', technology: 'tech', arts: 'arts', facilitation: 'def' };

const out = {};
acts.forEach((a) => {
  const sk = strandKey[a.strand] || 'def';
  out[a.num] = {};
  LANGS.forEach((l) => {
    const b = (body[l] || {})[a.num] || {};
    const rec = {};
    if (b.a_summary) rec.a_summary = b.a_summary;
    if (b.a_materials) rec.a_materials = b.a_materials;
    if (b.a_example) rec.a_example = b.a_example;
    const h = (levers['h_' + sk] || {})[l];
    const e = (levers['e_' + sk] || {})[l];
    if (h) rec.a_harder = h;
    if (e) rec.a_easier = e;
    out[a.num][l] = rec;
  });
});

fs.writeFileSync(D('translations.json'), JSON.stringify(out, null, 1));
// tidy the throwaway source
try { fs.unlinkSync(D('_src.json')); } catch (e) {}
const n = Object.keys(out).length;
console.log(`Merged translations.json for ${n} activities × ${LANGS.length} languages.`);
