/* validate.mjs — dependency-free validators for History Event Maps.
   Checks: (1) activity records have required fields and valid enums;
   (2) every referenced TEKS code exists in its standards file;
   (3) every i18n key an activity references exists in the en dictionary;
   (4) locale parity — which languages are missing which student-facing keys.
   Exit code is non-zero if any ERROR is found (warnings don't fail the build).
   Run: node scripts/validate.mjs */
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
let errors = 0, warnings = 0;
const err = (m) => { errors++; console.error('  ERROR  ' + m); };
const warn = (m) => { warnings++; console.warn('  warn   ' + m); };
const ok = (m) => console.log('  ok     ' + m);

/* Load a `window.X = {...}` dictionary file by evaluating it in a sandbox. */
function loadWindowFile(relPath) {
  const code = readFileSync(join(root, relPath), 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox);
  return sandbox.window;
}

console.log('\n== History Event Maps — validation ==\n');

// --- Load dictionaries ---
const common = loadWindowFile('assets/i18n-common.js').EM_COMMON;
const hub = loadWindowFile('assets/i18n-hub.js').EM_HUB;
const btp = loadWindowFile('assets/i18n-voices-btp.js').EM_ACT_BTP;
const LANGS = ['en', 'es', 'vi', 'ar', 'zh', 'ur', 'hi'];

// --- 1 & 2 & 3: activity records ---
const ENUM = {
  gradeBands: ['3-5', '6-8', '9-12'],
  mapType: ['history-trail','cause-ripples','people-place-change','turning-point','voices-around-event','conflict-consequence','evidence-dossier','systems-shockwave','continuity-change']
};
const stdCache = {};
function standards(file) {
  if (!stdCache[file]) stdCache[file] = readJson(join(root, 'data', file));
  return stdCache[file];
}

const actDir = join(root, 'data', 'activities');
for (const f of readdirSync(actDir).filter(f => f.endsWith('.json'))) {
  const a = readJson(join(actDir, f));
  console.log('Activity: ' + f);
  for (const req of ['id','title','gradeBands','courses','mapType','era','estimatedMinutes','challenge','sources','teks'])
    if (a[req] === undefined) err(`${f}: missing required field "${req}"`);
  if (!ENUM.mapType.includes(a.mapType)) err(`${f}: invalid mapType "${a.mapType}"`);
  (a.gradeBands||[]).forEach(b => { if (!ENUM.gradeBands.includes(b)) err(`${f}: invalid gradeBand "${b}"`); });
  if ((a.sources||[]).length < 2 || (a.sources||[]).length > 3) err(`${f}: sources must be 2–3 (found ${(a.sources||[]).length})`);

  // TEKS existence
  const std = standards(a.teks.standardsFile.startsWith('standards/') ? a.teks.standardsFile : 'standards/' + a.teks.standardsFile);
  [...a.teks.content, ...a.teks.skills].forEach(code => {
    if (!std.standards[code]) err(`${f}: TEKS code ${code} not found in ${a.teks.standardsFile}`);
  });
  if (std.status && std.status.startsWith('verified')) ok(`${f}: TEKS reference ${std.section} (${std.status})`);

  // i18n key coverage against the activity dictionary's en set
  const dict = a.id === 'boston-tea-party' ? btp : null;
  if (dict) {
    const en = Object.assign({}, common.en, dict.en);
    const need = [];
    need.push(a.challenge, a.conclusionKey);
    (a.sources||[]).forEach(s => { need.push(s.titleKey, s.descKey, ...(s.questionKeys||[])); });
    (a.stakeholders||[]).forEach(s => { need.push(s.nameKey); if (s.teacher) need.push(...Object.values(s.teacher)); });
    (a.comparePromptKeys||[]).forEach(k => need.push(k));
    if (a.ace) need.push(a.ace.articulateKey, a.ace.connectKey, a.ace.extendKey);
    if (a.teacher) need.push(...Object.values(a.teacher));
    const missing = need.filter(k => k && en[k] === undefined);
    if (missing.length) err(`${f}: ${missing.length} i18n keys missing from en dictionary: ${missing.slice(0,8).join(', ')}${missing.length>8?'…':''}`);
    else ok(`${f}: all ${need.filter(Boolean).length} referenced i18n keys present in en`);
  }
}

// --- 4: locale parity for the student-facing dictionaries ---
function parity(name, dict, studentOnly) {
  console.log('\nLocale parity: ' + name);
  const enKeys = Object.keys(dict.en);
  // Teacher-only keys intentionally fall back to en; skip them in the parity gate.
  const teacherPrefixes = ['t_', 'sh_patriots_', 'sh_british_', 'sh_merchants_', 'sh_colonists_'];
  const studentKeys = studentOnly
    ? enKeys.filter(k => !teacherPrefixes.some(p => k.startsWith(p)))
    : enKeys;
  for (const lang of LANGS) {
    if (lang === 'en') continue;
    if (!dict[lang]) { err(`${name}: language "${lang}" missing entirely`); continue; }
    const missing = studentKeys.filter(k => dict[lang][k] === undefined);
    if (missing.length) warn(`${name}[${lang}]: ${missing.length} student-facing keys fall back to en: ${missing.slice(0,6).join(', ')}${missing.length>6?'…':''}`);
    else ok(`${name}[${lang}]: complete (${studentKeys.length} student-facing keys)`);
  }
}
parity('EM_COMMON', common, false);
parity('EM_HUB', hub, false);
parity('EM_ACT_BTP', btp, true);

console.log(`\n== ${errors} error(s), ${warnings} warning(s) ==\n`);
process.exit(errors ? 1 : 0);
