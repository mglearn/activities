# History Event Maps — Implementation Plan

Derived from `plan.md`. This tracks the build in small, Git-friendly milestones.
Per `plan.md` §41–42, the first pass builds **architecture → one template → one
complete pilot → validation**, then **STOPS** before mass-producing activities.

## Architecture decisions (and why)

- **Reuse the mglearn/activities design system, do not reinvent it.** Tokens
  (`--navy #054c8c`, `--gold #fbd239`, Fredoka/Nunito, radial-gradient wash) and
  UI primitives are copied from `lab-safety/`. The i18n engine
  (`assets/i18n.js`) is copied **verbatim** and uses the shared localStorage key
  `tcea.breakouts.lang`, so a student's language choice carries across every
  mglearn activity.
- **One HTML file per activity with runtime i18n** (the lab-safety model) — no
  per-language HTML mirrors.
- **JSON is the source of truth; a build step emits a `file://`-safe JS bundle.**
  `data/**/*.json` → `scripts/build-data.mjs` → `assets/data.js`
  (`window.EM_DATA`). This keeps the site openable locally (no fetch/CORS) while
  matching the existing `catalog.js` convention. TEKS live in
  `data/standards/*.json`, never baked into artwork.
- **Organizers are live HTML/SVG, not raster.** Labels are real text nodes bound
  with `data-i18n`, so they reflow for 7 languages and switch colour⇄grayscale
  without re-rasterizing. A standalone vector `templates/voices-around-event.svg`
  is also provided for reference/vector printing (plan §16/§36).
- **Grayscale carries meaning without colour.** Stakeholders are distinguished by
  border style (solid/dashed/dotted/double) + corner glyph (S1–S4) + icon, not by
  desaturated fills (plan §18).
- **PDFs are generated from the browser page.** `?view=student|teacher` and
  `?ink=color|gray` drive the layout; `@page`/print CSS give US-Letter landscape;
  `scripts/build-pdfs.mjs` drives headless Chrome `--print-to-pdf`. No heavy
  backgrounds (toner-friendly); colour is carried by borders and text.
- **Privacy by default:** no logins, accounts, analytics, or student data. Only a
  language preference is stored locally.

## Status ✅ — all nine templates + nine pilots

| Deliverable | State |
|-------------|-------|
| Inspect existing repo (design/i18n/tooling) | ✅ reused lab-safety + ctobs patterns |
| Site shell + 7-language system | ✅ `index.html`, `assets/*` |
| Activity JSON schema | ✅ `data/schema/activity.schema.json` |
| Base CSS/JS + locale architecture | ✅ `assets/eventmaps.css`, `i18n-*.js` |
| **All nine organizer templates** (color + grayscale) | ✅ renderers in `assets/maps.js` + `templates/voices-around-event.svg` |
| **Nine pilot activities** (one per family) | ✅ see table below |
| Browser + PDFs | ✅ 9 × 4 = 36 PDFs in `downloads/` (`node scripts/build-pdfs.mjs`) |
| Root-hub discoverability + search index | ✅ card in `/activities/index.html`; `build-search-index.js` includes eventmaps |
| Validate | ✅ `node scripts/validate.mjs` → 0 errors |

### The nine pilots

| Map family | Pilot | Grade · Course | Standards file |
|------------|-------|----------------|----------------|
| Voices Around the Event | Boston Tea Party | 6–8 · US History | teks-grade8-us |
| History Trail | Lewis & Clark Expedition | 3–5 · US History | teks-grade5-us |
| Cause Ripples | Transcontinental Railroad | 3–5 · US History | teks-grade5-us |
| People · Place · Change | The Great Migration | 3–5 · US History | teks-grade5-us |
| Turning Point | Battle of Gonzales | 6–8 · Texas History | teks-grade7-tx |
| Conflict & Consequence | Road to the Civil War | 6–8 · US History | teks-grade8-us |
| Evidence Dossier | What Caused the Cold War? | 9–12 · US History | teks-us-since-1877 |
| Systems Shockwave | The Great Depression | 9–12 · US History | teks-us-since-1877 |
| Continuity & Change | The Civil Rights Movement | 9–12 · US History | teks-us-since-1877 |

Boston Tea Party has a bespoke page (`activities/boston-tea-party.html`); the other
eight render through one data-driven page (`activities/activity.html?id=<slug>`) that
dispatches to the right organizer via `EM.renderMap`.

**Verified:** every organizer renders in colour and true grayscale (border-style +
glyph + icon, not desaturation); student PDFs contain **no** teacher answers
(leak-checked), teacher PDFs do; PDFs are US-Letter landscape; all facts and TEKS
codes are research-verified with authoritative sources and transition caveats
(no fabrication).

## Known gaps / next steps

1. **Fluent-speaker translation review (Phase 5).** Boston Tea Party is fully
   localized in 7 languages (the reference). The other eight pilots ship with
   verified **English content** inside a 7-language framework: chrome, the
   six-step routine, and every organizer field label are localized in all 7
   languages, while each pilot's event-specific prose falls back to English until
   reviewed. `translationStatus` marks es/vi/ar/zh/ur/hi as `mt-pending-review`.
2. **TEKS confirmation.** All codes are transcribed verbatim from the versions in
   effect through 2025–26, each with a district-confirmation note. The June 2026
   K–8 adoption will renumber grades 3–8; confirm the version for your school year.
3. **Expansion (Phase 6).** Grow from one pilot per family toward the 36-activity
   target using the same schema and generic page — no per-activity page code.

## Commands

```bash
node scripts/build-data.mjs     # JSON -> assets/data.js
node scripts/validate.mjs       # schema + TEKS + i18n coverage + locale parity
node scripts/build-pdfs.mjs     # 4 PDFs for the pilot via headless Chrome
python3 -m http.server          # or open index.html directly (file:// works)
```
