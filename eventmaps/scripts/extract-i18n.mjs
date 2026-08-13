/* extract-i18n.mjs — collect the translatable student-facing strings from each
   activity record (everything a student reads except field labels, which come
   from the localized EM_FIELDS vocabulary). Writes one ordered, de-duplicated
   JSON list per activity to the given output dir, for a translation pass.
   Teacher guidance (teacherText) and enums/urls/codes are intentionally skipped.
   Run: node scripts/extract-i18n.mjs <outDir> */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = process.argv[2];
if (!outDir) { console.error('usage: node scripts/extract-i18n.mjs <outDir>'); process.exit(1); }

// Field-label keys live in EM_FIELDS and are already localized — never translate them.
const fieldsJs = readFileSync(join(root, 'assets', 'i18n-fields.js'), 'utf8');
const sb = {}; new Function('window', fieldsJs).call(null, sb);
const LABEL_KEYS = new Set(Object.keys(sb.EM_FIELDS.en));

const isContent = (s) => typeof s === 'string' && s.trim() && !LABEL_KEYS.has(s);

function collect(activity) {
  const out = [];
  const push = (s) => { if (isContent(s) && !out.includes(s)) out.push(s); };
  push(activity.title); push(activity.summary); push(activity.challenge);
  if (activity.event) { push(activity.event.title); push(activity.event.place); }
  (activity.comparePromptKeys || []).forEach(push);
  push(activity.conclusionKey);
  if (activity.ace) { push(activity.ace.articulateKey); push(activity.ace.connectKey); push(activity.ace.extendKey); }
  (activity.sources || []).forEach(s => { push(s.titleKey); push(s.descKey); (s.questionKeys || []).forEach(push); });
  // Walk mapData, skipping label-key slots.
  (function walk(v, keyName) {
    if (typeof v === 'string') { if (keyName !== 'labelKey') push(v); }
    else if (Array.isArray(v)) v.forEach(x => walk(x, keyName));
    else if (v && typeof v === 'object') for (const [k, val] of Object.entries(v)) walk(val, k);
  })(activity.mapData, null);
  return out;
}

const actDir = join(root, 'data', 'activities');
let total = 0;
for (const f of readdirSync(actDir).filter(f => f.endsWith('.json'))) {
  const a = JSON.parse(readFileSync(join(actDir, f), 'utf8'));
  if (a.id === 'boston-tea-party') continue;   // already fully localized
  const strings = collect(a);
  writeFileSync(join(outDir, a.id + '.strings.json'), JSON.stringify({ id: a.id, strings }, null, 2));
  console.log(`${a.id}: ${strings.length} strings`);
  total += strings.length;
}
console.log(`total: ${total} strings across 8 pilots`);
