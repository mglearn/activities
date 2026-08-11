#!/usr/bin/env node
/* ============================================================
   Learning Activities Hub — search index builder.
   ------------------------------------------------------------
   The hub search filters the 13 area cards on the landing page.
   On its own a card only carries its own title, blurb, and a
   hand-written data-kw, so searching for something that plainly
   exists inside an area — "photosynthesis", "Shakespeare",
   "poll tax" — matched nothing and the page said "No areas
   match", which reads as "the hub does not have this".

   This script harvests what each area actually contains and
   writes search-index.js:

     window.HUB_SEARCH = { "<card href>": "<searchable text>" }

   index.html appends the entry for each card to that card's
   search haystack. Nothing else about the search changes: it
   still returns AREAS, which is the right result for a landing
   page — you just now find the area that holds the thing.

   Sources, in order of quality:
     1. ctobs/catalog.js — 205 breakouts. Their `kw` field is the
        catalog's own search blob (title, description, clue text)
        and is where terms like "photosynthesis" actually live.
     2. digitalmathtools/catalog.js — tool names and blurbs.
     3. The pages themselves, for every other area: <title>, meta
        description, headings, short labels, and string literals
        out of inline <script> data — PlotPoint keeps its text
        titles and authors ("William Shakespeare") only there.

   Each area gets phrases plus a word bag. Phrases stay intact so
   a multi-word search ("romeo and juliet") matches; long prose is
   reduced to deduped words, which is what keeps this file to a
   sane size rather than a third of a megabyte.

   Deliberately NOT harvested:
     - gtky/ and sojourn/ live in their own repos and are linked
       root-relative, so they are not on disk here. Those two keep
       hand-written data-kw in index.html.
     - Translated mirrors (es/, vi/, ar/, hi/, ur/, zh/). The hub
       chrome and this search are English.
     - printables/ — print packs whose parent activity page is
       already indexed.
     - Answer keys and correlation tables: teacher scaffolding, and
       indexing them would surface an area by its answers.

   Run after adding or renaming activities:
     node build-search-index.js
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const OUT = path.join(ROOT, "search-index.js");

const SKIP_DIR = new Set([
  "es", "vi", "ar", "hi", "ur", "zh",   // translated mirrors — the hub search is English
  "assets", "_catalog", "node_modules", ".git",
  "printables",                         // print packs; the parent activity is indexed
]);
// Teacher scaffolding and build output, not activities.
const SKIP_FILE = /answer-key|correlation|policy|manifest/i;

/** Words too common to be worth indexing. */
const STOP = new Set(("a an the and or but if of to in on at by for with from as is are was were be " +
  "been being this that these those it its you your they them their we our us i he she his her not " +
  "no yes do does did can will would should could may might must have has had how what when where " +
  "which who whom why all any each more most other some such only own same so than too very just " +
  "about into over under again further then once here there both few nor now use using each").split(" "));

/**
 * Harvest searchable text from every English activity page under `dir`.
 *
 * Three passes, because the suites store their content differently:
 *   - phrases: <title>, meta description, headings and label-ish elements.
 *     Kept intact so multi-word searches ("poll tax") still match.
 *   - script strings: PlotPoint and friends render rooms from inline JS data,
 *     so the text titles and authors only exist as string literals. Without
 *     this pass, searching "Shakespeare" finds nothing.
 *   - words: everything else visible, as a deduped bag for single-word terms.
 */
function harvestArea(dir) {
  const phrases = [];
  const words = new Set();
  const base = path.join(ROOT, dir);
  let pages = 0;
  if (!fs.existsSync(base)) return { phrases, words, pages };

  const keepPhrase = (raw, max = 140) => {
    const t = decode(String(raw).replace(/\s+/g, " ")).trim();
    if (!t || t.length > max || t.includes("{{")) return;
    if (/[<>{}]|:\/\//.test(t)) return;              // markup, code, URLs
    if (!/[a-zA-Z]{2}/.test(t)) return;              // needs real letters
    phrases.push(t);
  };

  (function walk(cur) {
    for (const entry of fs.readdirSync(cur, { withFileTypes: true })) {
      const full = path.join(cur, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIR.has(entry.name)) walk(full);
        continue;
      }
      if (!entry.name.endsWith(".html") || SKIP_FILE.test(entry.name)) continue;
      const rel = path.relative(base, full);
      // The area's own landing page says nothing the card does not already say.
      if (rel === "index.html" || rel === "about.html") continue;

      pages++;
      const src = fs.readFileSync(full, "utf8");
      const scripts = (src.match(/<script[\s\S]*?<\/script>/gi) || []).join("\n");
      const markup = src.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, "");

      const title = markup.match(/<title>([\s\S]*?)<\/title>/i);
      if (title) keepPhrase(title[1]);
      const desc = markup.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
      if (desc) keepPhrase(desc[1]);
      // Headings and short labels. Anything longer is prose — it goes to the
      // word bag instead, which costs a fraction of the bytes.
      for (const m of markup.matchAll(/<(?:h[1-6]|figcaption|summary)[^>]*>([\s\S]{0,240}?)<\//gi)) {
        keepPhrase(m[1].replace(/<[^>]+>/g, " "));
      }
      // Short labels: only title-shaped ones (initial capital, multi-word).
      // Everything else here is prose whose words the bag already covers.
      for (const m of markup.matchAll(/<(?:li|a|strong|b|em|option)[^>]*>([\s\S]{0,90}?)<\//gi)) {
        const t = m[1].replace(/<[^>]+>/g, " ").trim();
        if (/^[A-Z][^.!?]{2,45}$/.test(t) && t.includes(" ")) keepPhrase(t, 48);
      }
      // String literals from inline scripts — where JS-rendered suites keep
      // their activity titles and authors ("Romeo and Juliet", "William
      // Shakespeare"). Restricted to title-shaped strings: an initial capital
      // and short. Prose and the i18n blobs are left to the word bag, which is
      // what kept this file from ballooning past a third of a megabyte.
      for (const m of scripts.matchAll(/"([^"\\\n]{3,60})"|'([^'\\\n]{3,60})'/g)) {
        const lit = (m[1] ?? m[2]).trim();
        if (/^[A-Z][^;=]*$/.test(lit)) keepPhrase(lit, 60);
        for (const w of lit.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || []) {
          if (!STOP.has(w)) words.add(w);
        }
      }
      // Remaining visible prose, as words.
      const text = decode(markup.replace(/<[^>]+>/g, " "));
      for (const w of text.toLowerCase().match(/[a-z][a-z'-]{2,}/g) || []) {
        if (!STOP.has(w)) words.add(w);
      }
    }
  })(base);

  return { phrases, words, pages };
}

function decode(s) {
  return s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–");
}

/** Load a `window.X = …` catalog file. Handles both a plain JSON literal
 *  (ctobs/catalog.js) and an IIFE that returns one (digitalmathtools). */
function loadCatalog(rel, globalName) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8").trim();

  const stripped = raw
    .replace(new RegExp(`^[\\s\\S]*?window\\.${globalName}\\s*=\\s*`), "")
    .replace(/;\s*$/, "");
  try {
    return JSON.parse(stripped);
  } catch {
    /* Not a plain literal — fall through and run it. */
  }

  // These are our own build outputs, so running them is safe. The sandbox has
  // no require/process/fs, so a catalog cannot reach outside itself.
  try {
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    new vm.Script(raw, { filename: rel }).runInContext(sandbox, { timeout: 5000 });
    return sandbox.window[globalName] ?? null;
  } catch (err) {
    console.warn(`  ! could not load ${rel} (${err.message}) — falling back to page titles`);
    return null;
  }
}

// ── Gather per-area text ────────────────────────────────────
// Keyed by the href on the card in index.html.
const areas = {};
const add = (key, ...parts) => {
  (areas[key] ||= []).push(...parts.filter(Boolean));
};

// 1. CTOB family. `science` and `bible` have their own cards as well as
//    living inside the CTOB library, so their text is filed under both —
//    a search for "photosynthesis" should surface either route in.
const catalogWords = {};
const ctob = loadCatalog("ctobs/catalog.js", "CATALOG");
if (ctob?.breakouts) {
  // Each breakout also carries `kw`, the catalog's own search blob (title,
  // description, and clue text). It is where terms like "photosynthesis" live,
  // so fold it in — as words rather than phrases, since the blobs are long.
  const soak = (key, kw) => {
    const bag = (catalogWords[key] ||= new Set());
    for (const w of String(kw).toLowerCase().match(/[a-z][a-z'-]{2,}/g) || []) {
      if (!STOP.has(w)) bag.add(w);
    }
  };
  for (const b of ctob.breakouts) {
    const text = [b.title, b.desc, b.band].filter(Boolean).join(" ");
    add("ctobs/", text);
    soak("ctobs/", b.kw);
    if (b.suite === "science") { add("science/", text); soak("science/", b.kw); }
    if (b.suite === "bible") { add("ctobs/bible/", text); soak("ctobs/bible/", b.kw); }
  }
  for (const s of ctob.suites || []) add("ctobs/", s.name, s.desc);
  console.log(`  ctobs/            ${ctob.breakouts.length} breakouts (+kw)`);
}

// 2. Digital Math Tools catalog (window.MATHTOOLS).
const math = loadCatalog("digitalmathtools/catalog.js", "MATHTOOLS");
if (math) {
  const walk = (v) => {
    if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") {
      for (const [k, val] of Object.entries(v)) {
        if (typeof val === "string" && /name|title|desc|label|blurb/i.test(k)) {
          add("digitalmathtools/", val);
        } else walk(val);
      }
    }
  };
  walk(math);
  console.log(`  digitalmathtools/ from catalog.js`);
}

// 3. Everything else, harvested from the pages themselves.
const wordBags = {};
for (const dir of [
  "plotpoint", "sayitmakeit", "pst", "relic-rooms",
  "digcit", "genailit", "lab-safety", "digitalmathtools",
]) {
  const { phrases, words, pages } = harvestArea(dir);
  add(`${dir}/`, ...phrases);
  wordBags[`${dir}/`] = words;
  console.log(`  ${(dir + "/").padEnd(18)}${String(pages).padStart(4)} pages, ${phrases.length} phrases, ${words.size} words`);
}
// The CTOB suites keep their text in catalog.js rather than in the pages, but
// science and bible also have their own cards, so give them a body pass too.
for (const dir of ["ctobs"]) {
  const { words } = harvestArea(dir);
  wordBags["ctobs/"] = words;
  console.log(`  ${(dir + "/").padEnd(18)}     body words ${words.size}`);
}

// ── Normalize and write ─────────────────────────────────────
const index = {};
for (const key of new Set([...Object.keys(areas), ...Object.keys(wordBags)])) {
  const seen = new Set();
  const kept = [];
  for (const part of areas[key] || []) {
    // Drop the repeated suite suffix ("— PlotPoint") that adds no signal.
    const clean = part.replace(/\s*[—·|]\s*(PlotPoint|Say It, Make It|TCEA Activities|Lab Safety (Ranger|Specialist)|Problem-Solving Teaching|Digital Citizenship Breakouts|Gen AI Literacy Breakouts)\s*$/gi, "").trim();
    const k = clean.toLowerCase();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    kept.push(clean);
  }
  const phraseBlob = kept.join(" · ").toLowerCase();
  // Only carry words the phrases do not already cover, to keep the file small.
  const bag = new Set([...(wordBags[key] || []), ...(catalogWords[key] || [])]);
  const extra = [...bag].filter((w) => !phraseBlob.includes(w));
  index[key] = (phraseBlob + (extra.length ? " · " + extra.join(" ") : "")).trim();
}

const banner = `/* GENERATED by build-search-index.js — do not edit by hand.
   Per-area searchable text harvested from the activities each area contains,
   so the hub search can find an area by what is inside it. Regenerate with:
     node build-search-index.js
   Generated ${new Date().toISOString()} */\n`;

fs.writeFileSync(OUT, `${banner}window.HUB_SEARCH = ${JSON.stringify(index, null, 1)};\n`, "utf8");

const bytes = fs.statSync(OUT).size;
console.log(`\nwrote search-index.js — ${Object.keys(index).length} areas, ${(bytes / 1024).toFixed(1)} KB`);
