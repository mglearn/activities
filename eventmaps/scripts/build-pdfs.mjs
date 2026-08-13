/* build-pdfs.mjs — generate the four printable PDF variants for an activity
   using headless Google Chrome (no npm dependencies). The browser page IS
   the print template: ?view=student|teacher and ?ink=color|gray drive the
   layout, and @page/print CSS handle US-Letter landscape.

   Filenames follow plan §19:  <id>_<map>_<lang>_<view>_<ink>.pdf
   Run: node scripts/build-pdfs.mjs [activityId] [lang]
   Requires Google Chrome / Chromium on PATH (tries common names). */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const lang = process.argv[3] || 'en';

// Short map-type slug for the filename (plan §19).
const MAP_SLUG = {
  'voices-around-event': 'voices', 'history-trail': 'trail', 'cause-ripples': 'ripples',
  'people-place-change': 'people-place-change', 'turning-point': 'turning',
  'conflict-consequence': 'conflict', 'evidence-dossier': 'dossier',
  'systems-shockwave': 'shockwave', 'continuity-change': 'continuity'
};

const CHROME_CANDIDATES = ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome'];
function findChrome() {
  for (const c of CHROME_CANDIDATES) {
    try { execFileSync('bash', ['-lc', `command -v ${c}`], { stdio: 'ignore' }); return c; } catch (_) {}
  }
  throw new Error('No Chrome/Chromium found. Install Google Chrome or set one on PATH.');
}

// The activity page URL: BTP has a bespoke page; all others use the generic page.
function pageUrl(id, view, ink) {
  const q = `view=${view}&ink=${ink}&lang=${lang}`;
  if (id === 'boston-tea-party')
    return `file://${join(root, 'activities', 'boston-tea-party.html')}?${q}`;
  return `file://${join(root, 'activities', 'activity.html')}?id=${id}&${q}`;
}

const chrome = findChrome();
const outDir = join(root, 'downloads');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// Which activities to build: an explicit id, or all from the data bundle.
const dataJs = readFileSync(join(root, 'assets', 'data.js'), 'utf8');
const sandbox = {}; new Function('window', dataJs).call(null, sandbox);
const all = Object.keys(sandbox.EM_DATA.activities);
const only = process.argv[2];
const ids = only ? [only] : all;

const variants = [
  { view: 'student', ink: 'color' }, { view: 'student', ink: 'gray' },
  { view: 'teacher', ink: 'color' }, { view: 'teacher', ink: 'gray' }
];

console.log(`build-pdfs: ${ids.length} activity(ies), lang=${lang}, via ${chrome}\n`);
for (const id of ids) {
  const mapType = sandbox.EM_DATA.activities[id].mapType;
  const slug = MAP_SLUG[mapType] || mapType;
  for (const v of variants) {
    const out = join(outDir, `${id}_${slug}_${lang}_${v.view}_${v.ink}.pdf`);
    const args = ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
      '--run-all-compositor-stages-before-draw', '--virtual-time-budget=4000',
      `--print-to-pdf=${out}`, pageUrl(id, v.view, v.ink)];
    try {
      execFileSync(chrome, args, { stdio: ['ignore', 'ignore', 'ignore'] });
      console.log('  wrote ' + out.replace(root + '/', ''));
    } catch (e) {
      console.error('  FAILED ' + id + ' ' + v.view + '/' + v.ink + ': ' + e.message);
    }
  }
}
console.log('\nbuild-pdfs: done. Review the PDFs in downloads/.');
