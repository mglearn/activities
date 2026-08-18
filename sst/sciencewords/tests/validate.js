#!/usr/bin/env node
/* ============================================================
   validate.js — the check that runs before anything ships.

   Four passes:
     1. Data      unique ids, live references, valid enums,
                  no empty meanings or definitions
     2. Coverage  every activity has both print editions and a
                  teacher key, and no key is orphaned
     3. Links     every local href and src on every HTML page
                  resolves to a file that exists
     4. HTML      duplicate ids, images without alt, one h1 per
                  page, and no answer text leaking into a
                  student handout

   Usage:  node tests/validate.js  [--report]
   Exit code is non-zero if any check fails, so it can gate a
   commit or a build.
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const problems = [];
const notes = [];
const stats = {};
const fail = (where, msg) => problems.push(where + ': ' + msg);

const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const json = (rel) => JSON.parse(read(rel));

const morphemesFile = json('data/morphemes.json');
const termsFile = json('data/science-terms.json');
const activitiesFile = json('data/activities.json');
const keysFile = json('data/teacher-keys.json');
const standardsFile = json('data/standards.json');

const morphemes = morphemesFile.morphemes;
const terms = termsFile.terms;
const activities = activitiesFile.activities;

const VALID = {
  gradeBand: ['3-5', '6-8', '9-12'],
  scienceArea: ['matter-energy', 'force-motion-energy', 'earth-space', 'organisms-environments',
    'biology', 'chemistry', 'physics', 'earth-environmental'],
  sst: ['boy', 'moy', 'eoy'],
  ace: ['articulate', 'connect', 'extend'],
  activityType: ['break', 'build', 'decode', 'sort', 'detective', 'mystery', 'stimulus', 'equation', 'partner', 'exit'],
  morphemeType: ['prefix', 'root', 'combining-form', 'suffix'],
  partRole: ['prefix', 'root', 'combining-form', 'suffix', 'word'],
  format: ['color', 'bw']
};

/* ------------------------------------------------ 1. data integrity */

const morphemeIds = new Set();
morphemes.forEach((m) => {
  const at = 'morpheme ' + m.id;
  if (morphemeIds.has(m.id)) fail(at, 'duplicate id');
  morphemeIds.add(m.id);
  if (!m.display) fail(at, 'missing display');
  if (!m.meaning || !m.meaning.trim()) fail(at, 'empty meaning');
  if (!m.studentNote || !m.studentNote.trim()) fail(at, 'empty studentNote');
  if (VALID.morphemeType.indexOf(m.type) === -1) fail(at, 'invalid type "' + m.type + '"');
  if (!m.gradeBands || !m.gradeBands.length) fail(at, 'no gradeBands');
  (m.gradeBands || []).forEach((b) => {
    if (VALID.gradeBand.indexOf(b) === -1) fail(at, 'invalid gradeBand "' + b + '"');
  });
  (m.scienceAreas || []).forEach((a) => {
    if (VALID.scienceArea.indexOf(a) === -1) fail(at, 'invalid scienceArea "' + a + '"');
  });
  if (!m.examples || !m.examples.length) fail(at, 'no example words');
});

const termIds = new Set();
terms.forEach((t) => {
  const at = 'term ' + t.id;
  if (termIds.has(t.id)) fail(at, 'duplicate id');
  termIds.add(t.id);
  if (!t.term) fail(at, 'missing term');
  if (!t.studentDefinition || !t.studentDefinition.trim()) fail(at, 'empty studentDefinition');
  if (!t.scienceExplanation || !t.scienceExplanation.trim()) fail(at, 'empty scienceExplanation');
  if (!t.wordPartClue || !t.wordPartClue.trim()) fail(at, 'empty wordPartClue');
  if (t.wordPartClue && t.studentDefinition && t.wordPartClue.trim() === t.studentDefinition.trim()) {
    fail(at, 'wordPartClue and studentDefinition are identical — the clue and the science meaning must stay distinct');
  }
  if (!t.contextExample || !t.contextExample.trim()) fail(at, 'empty contextExample');
  if (!t.parts || !t.parts.length) fail(at, 'no parts');
  (t.parts || []).forEach((p) => {
    if (VALID.partRole.indexOf(p.role) === -1) fail(at, 'invalid part role "' + p.role + '"');
    if (p.morpheme) {
      if (!morphemeIds.has(p.morpheme)) fail(at, 'references unknown morpheme "' + p.morpheme + '"');
    } else if (!p.text) {
      fail(at, 'part has neither a morpheme reference nor literal text');
    } else if (!p.meaning) {
      fail(at, 'literal part "' + p.text + '" has no meaning');
    }
  });
  (t.gradeBands || []).forEach((b) => {
    if (VALID.gradeBand.indexOf(b) === -1) fail(at, 'invalid gradeBand "' + b + '"');
  });
  (t.sstLevels || []).forEach((s) => {
    if (VALID.sst.indexOf(s) === -1) fail(at, 'invalid sstLevel "' + s + '"');
  });
});

const activityIds = new Set();
activities.forEach((a) => {
  const at = 'activity ' + a.id;
  if (activityIds.has(a.id)) fail(at, 'duplicate id');
  activityIds.add(a.id);
  if (!a.title) fail(at, 'missing title');
  if (!a.description || !a.description.trim()) fail(at, 'empty description');
  if (VALID.gradeBand.indexOf(a.gradeBand) === -1) fail(at, 'invalid gradeBand "' + a.gradeBand + '"');
  if (VALID.scienceArea.indexOf(a.scienceArea) === -1) fail(at, 'invalid scienceArea "' + a.scienceArea + '"');
  if (VALID.activityType.indexOf(a.activityType) === -1) fail(at, 'invalid activityType "' + a.activityType + '"');
  if (VALID.sst.indexOf(a.sstCheckpoint) === -1) fail(at, 'invalid sstCheckpoint "' + a.sstCheckpoint + '"');
  if (VALID.ace.indexOf(a.ace) === -1) fail(at, 'invalid ace "' + a.ace + '"');
  if (!a.estimatedMinutes || a.estimatedMinutes < 1) fail(at, 'missing estimatedMinutes');
  (a.formats || []).forEach((f) => {
    if (VALID.format.indexOf(f) === -1) fail(at, 'invalid format "' + f + '"');
  });
  if ((a.formats || []).indexOf('color') === -1 || (a.formats || []).indexOf('bw') === -1) {
    fail(at, 'must declare both color and bw formats');
  }
  (a.morphemes || []).forEach((id) => {
    if (!morphemeIds.has(id)) fail(at, 'references unknown morpheme "' + id + '"');
  });
  (a.terms || []).forEach((id) => {
    if (!termIds.has(id)) fail(at, 'references unknown term "' + id + '"');
  });
  if (!a.blocks || !a.blocks.length) fail(at, 'has no content blocks');
});

/* Every morpheme should be reachable from at least one activity,
   or it is dead weight in the bank. */
const usedMorphemes = new Set();
activities.forEach((a) => (a.morphemes || []).forEach((id) => usedMorphemes.add(id)));
terms.forEach((t) => (t.parts || []).forEach((p) => { if (p.morpheme) usedMorphemes.add(p.morpheme); }));
morphemes.forEach((m) => {
  if (!usedMorphemes.has(m.id)) notes.push('morpheme ' + m.id + ' is not used by any activity or term yet');
});

/* Standards: no code may appear without a source and a date. */
['teks', 'ngss'].forEach((kind) => {
  const group = standardsFile[kind];
  (group.entries || []).forEach((entry) => {
    if (!entry.source || !entry.verifiedDate) {
      fail('standards.' + kind, 'entry "' + (entry.code || '?') + '" has no source or no verifiedDate');
    }
  });
  if ((group.entries || []).length && !group.verifiedDate) {
    fail('standards.' + kind, 'entries listed but the set has no verifiedDate');
  }
});

/* ------------------------------------------------ 2. coverage */

activities.forEach((a) => {
  const at = 'activity ' + a.id;
  if (!keysFile.keys[a.id]) fail(at, 'has no teacher key');
  else if (!keysFile.keys[a.id].answers || !keysFile.keys[a.id].answers.length) fail(at, 'teacher key has no answers');
  ['color', 'bw'].forEach((mode) => {
    const rel = 'print/' + mode + '/grades-' + a.gradeBand + '/' + a.id + '.html';
    if (!fs.existsSync(path.join(ROOT, rel))) fail(at, 'missing generated handout ' + rel + ' (run node build-print.js)');
  });
  const keyRel = 'teacher-keys/' + a.id + '-key.html';
  if (!fs.existsSync(path.join(ROOT, keyRel))) fail(at, 'missing generated key ' + keyRel + ' (run node build-print.js)');
});
Object.keys(keysFile.keys).forEach((id) => {
  if (!activityIds.has(id)) fail('teacher-keys.json', 'key "' + id + '" has no matching activity');
});

/* ------------------------------------------------ 3 & 4. html */

function walk(dir, out) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') return;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  });
  return out;
}

const pages = walk(ROOT, []);
stats.pages = pages.length;

const attrRe = /(?:href|src)\s*=\s*"([^"]*)"/gi;
const idRe = /\sid\s*=\s*"([^"]*)"/gi;
const imgRe = /<img\b[^>]*>/gi;
const h1Re = /<h1\b/gi;

let linkCount = 0;

pages.forEach((file) => {
  const rel = path.relative(ROOT, file);
  const html = fs.readFileSync(file, 'utf8');

  /* links */
  let m;
  attrRe.lastIndex = 0;
  while ((m = attrRe.exec(html)) !== null) {
    const href = m[1];
    if (!href || /^(https?:|mailto:|tel:|data:|#)/i.test(href)) continue;
    linkCount += 1;
    let target;
    if (href.startsWith('/activities/')) {
      /* Root-relative into the wider hub — resolved against the repo, which
         is two levels above this site. */
      target = path.resolve(ROOT, '../../..', href.replace(/^\//, ''));
    } else {
      target = path.resolve(path.dirname(file), href.split('#')[0].split('?')[0]);
    }
    if (!fs.existsSync(target)) fail(rel, 'broken link "' + href + '"');
  }

  /* duplicate ids */
  const seen = new Set();
  idRe.lastIndex = 0;
  while ((m = idRe.exec(html)) !== null) {
    if (seen.has(m[1])) fail(rel, 'duplicate id "' + m[1] + '"');
    seen.add(m[1]);
  }

  /* images need alt */
  const imgs = html.match(imgRe) || [];
  imgs.forEach((tag) => {
    if (!/\salt\s*=/.test(tag)) fail(rel, 'img without alt attribute');
  });

  /* exactly one h1 per page — except the multi-ticket sheets, which
     repeat the same ticket heading by design */
  const h1s = (html.match(h1Re) || []).length;
  const isTicketSheet = /class="tickets /.test(html);
  if (h1s === 0) fail(rel, 'no h1');
  else if (h1s > 1 && !isTicketSheet) fail(rel, h1s + ' h1 elements (expected 1)');
});

stats.links = linkCount;

/* No answer may leak into a student handout. Every distinctive answer
   phrase from the key is checked against both printed editions. */
const STOPWORDS = new Set(['accept', 'any', 'answer', 'the', 'and', 'that', 'with', 'from', 'this', 'students', 'student']);
activities.forEach((a) => {
  const key = keysFile.keys[a.id];
  if (!key) return;
  const phrases = key.answers
    .map((ans) => ans.answer)
    .filter((text) => text && text.length > 40)
    .map((text) => text.split(/[.;]/)[0].trim())
    .filter((text) => text.split(/\s+/).length > 5 && !STOPWORDS.has(text.split(/\s+/)[0].toLowerCase()));
  ['color', 'bw'].forEach((mode) => {
    const rel = 'print/' + mode + '/grades-' + a.gradeBand + '/' + a.id + '.html';
    const full = path.join(ROOT, rel);
    if (!fs.existsSync(full)) return;
    const html = fs.readFileSync(full, 'utf8');
    phrases.forEach((phrase) => {
      if (html.indexOf(phrase) !== -1) fail(rel, 'answer text appears in the student handout: "' + phrase.slice(0, 60) + '…"');
    });
  });
});

/* ------------------------------------------------ report */

stats.morphemes = morphemes.length;
stats.terms = terms.length;
stats.activities = activities.length;
stats.keys = Object.keys(keysFile.keys).length;
stats.handouts = activities.length * 2;

console.log('Break It, Build It — validation');
console.log('  ' + stats.morphemes + ' word parts · ' + stats.terms + ' science terms · ' +
  stats.activities + ' activities · ' + stats.keys + ' teacher keys');
console.log('  ' + stats.pages + ' HTML pages · ' + stats.links + ' local links checked');

if (notes.length) {
  console.log('\nNotes (not failures):');
  notes.forEach((n) => console.log('  · ' + n));
}

if (problems.length) {
  console.error('\n' + problems.length + ' problem' + (problems.length === 1 ? '' : 's') + ':');
  problems.forEach((p) => console.error('  ✗ ' + p));
  process.exitCode = 1;
} else {
  console.log('\nAll checks passed.');
}
