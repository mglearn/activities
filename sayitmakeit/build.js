#!/usr/bin/env node
/* Say It, Make It — static build.
 * Parses activities.md, assigns STEAM strands, merges data/enrichment.json,
 * and generates index.html (catalog) + a/<slug>.html (one guided page each).
 * Data-driven: never hand-edit generated files — edit the .md / enrichment / templates and re-run.
 *   node build.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

/* ---------- STEAM strands ---------- */
const STRANDS = {
  science:      { letter: 'S', label: 'Science',            icon: '🔬', accent: '#0a6b52' },
  technology:   { letter: 'T', label: 'Technology',         icon: '🤖', accent: '#2563a8' },
  engineering:  { letter: 'E', label: 'Engineering',        icon: '🏗️', accent: '#b45309' },
  arts:         { letter: 'A', label: 'Arts & Design',      icon: '🎨', accent: '#b83280' },
  math:         { letter: 'M', label: 'Mathematics',        icon: '📐', accent: '#3f2a78' },
  facilitation: { letter: '★', label: 'Facilitation Modes', icon: '🔁', accent: '#516079' },
};
const STRAND_ORDER = ['science', 'technology', 'engineering', 'arts', 'math', 'facilitation'];

/* Source category (## header text, lowercased first word groups) -> default strand */
const CATEGORY_STRAND = {
  'building and construction activities': 'engineering',
  'drawing and visual communication activities': 'arts',
  'arrangement and scene activities': 'arts',
  'patterns, sequences, and classification activities': 'math',
  'map and direction activities': 'math',
  'language and literacy activities': 'arts',
  'mathematics activities': 'math',
  'science activities': 'science',
  'social studies activities': 'arts',
  'team communication variations': 'facilitation',
};

/* Per-activity strand overrides (surfacing Technology + science systems) */
const STRAND_OVERRIDE = {
  35: 'science',      // Create a Habitat
  38: 'science',      // Solar-System Placement
  57: 'technology',   // Grid Robot Programmer
  58: 'technology',   // Human Robot Course
  77: 'technology',   // Circuit Description Challenge
};

/* ---------- helpers ---------- */
const slugify = (s) => s.toLowerCase()
  .replace(/[’'"]/g, '').replace(/&/g, ' and ')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- parse activities.md ---------- */
function parseActivities(md) {
  const lines = md.split('\n');
  const acts = [];
  let category = null, cur = null, buf = [];
  const flush = () => {
    if (!cur) return;
    // classify buffered non-field paragraphs as summary/body
    const body = [];
    let materials = '', example = '', skills = '', purpose = '';
    buf.join('\n').split(/\n\s*\n/).forEach((para) => {
      const p = para.trim();
      if (!p) return;
      if (/^Materials:/i.test(p)) materials = p.replace(/^Materials:\s*/i, '').trim();
      else if (/^Example:/i.test(p)) example = p.replace(/^Example:\s*/i, '').trim();
      else if (/^Skills:/i.test(p)) skills = p.replace(/^Skills:\s*/i, '').trim();
      else if (/^Purpose:/i.test(p)) purpose = p.replace(/^Purpose:\s*/i, '').trim();
      else body.push(p.replace(/\n/g, ' '));
    });
    cur.materials = materials;
    cur.example = example;
    cur.summary = body.join(' ');
    cur.skills = skills ? skills.split(/,\s*/).map((s) => s.trim()).filter(Boolean) : [];
    cur.purpose = purpose;
    acts.push(cur);
    cur = null; buf = [];
  };
  for (const raw of lines) {
    const line = raw.replace(/\r$/, '');
    const h1 = line.match(/^#\s+(.*)$/);
    const h2 = line.match(/^##\s+(\d+)\.\s+(.*)$/);
    if (h1) { flush(); category = h1[1].trim(); continue; }
    if (h2) {
      flush();
      const num = parseInt(h2[1], 10);
      const title = h2[2].trim();
      const cat = (category || '').toLowerCase();
      const strand = STRAND_OVERRIDE[num] || CATEGORY_STRAND[cat] || 'facilitation';
      cur = { num, title, slug: slugify(title), category, strand };
      continue;
    }
    if (cur) buf.push(line);
  }
  flush();
  return acts;
}

/* ---------- load + merge enrichment ---------- */
function loadEnrichment() {
  const f = path.join(ROOT, 'data', 'enrichment.json');
  if (!fs.existsSync(f)) return {};
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); }
  catch (e) { console.warn('enrichment.json parse error:', e.message); return {}; }
}

function build() {
  const md = fs.readFileSync(path.join(ROOT, 'activities.md'), 'utf8');
  const acts = parseActivities(md);
  const enrich = loadEnrichment();
  acts.forEach((a) => {
    const e = enrich[a.num] || {};
    if (e.strand) a.strand = e.strand;
    a.grades = e.grades || 'K–8';
    a.subjects = e.subjects || [STRANDS[a.strand].label];
    a.teks = e.teks || [];
    a.ngss = e.ngss || [];
    a.harder = e.harder || '';
    a.easier = e.easier || '';
    if (e.summary) a.summary = e.summary;   // STEAM reframe override
    if (e.materials) a.materials = e.materials;
  });
  // write the merged data snapshot for inspection / future TEKS page
  fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'data', 'activities.json'), JSON.stringify(acts, null, 2));

  // reporting
  const byStrand = {};
  acts.forEach((a) => { byStrand[a.strand] = (byStrand[a.strand] || 0) + 1; });
  console.log(`Parsed ${acts.length} activities.`);
  STRAND_ORDER.forEach((s) => byStrand[s] && console.log(`  ${STRANDS[s].letter} ${STRANDS[s].label}: ${byStrand[s]}`));

  // page generation happens in render.js (Phase 3) — keep parse/data here
  if (process.env.RENDER) require('./render.js')({ acts, STRANDS, STRAND_ORDER, esc, ROOT });
}

build();
