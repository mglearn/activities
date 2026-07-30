# Say It, Make It — Project Plan

**Deploy target:** `https://mglearn.github.io/activities/sayitmakeit/`
**Part of:** the Learning Activities Hub (`/activities/`)
**Audience:** Texas K–12 teachers; STEM-forward, cross-curricular usable
**Alignment:** 2021-adopted Science TEKS (implemented 2024–25), Math TEKS, and NGSS where a clean mapping exists
**Author:** Miguel Guhlin · Content CC BY 4.0 · Code MIT

---

## 1. What this is

An interactive, self-contained web area featuring **106 barrier / blind-build / communication
activities** — the "describer-and-builder behind a screen" family of tasks. A student describes a
hidden model, drawing, arrangement, pattern, route, or setup using words only; a partner recreates
it; the two are compared and the class reflects on what made the communication work.

Every activity gets its **own guided page** (setup, roles, materials, steps, the communication
constraint, reflection prompts, and standards alignment). The area is browsable and searchable from
a landing hub, works in **seven languages**, and every page is **print-friendly** (Save-as-PDF from
the browser) — **no baked PDF files** are committed (that is what makes `gtky` 397 MB; we avoid it).

Privacy-first, client-side only: no accounts, no server, no data collection.

---

## 2. STEM focus & standards approach

The source set spans many subjects. Per direction, the area is organized **STEM-forward**: the
STEM strands lead and carry standards alignment; the cross-curricular activities are kept as a
clearly-secondary section (they are still excellent language/communication practice).

### Category → strand map

| Source category (from `activities.md`) | Activities | Hub strand | Primary standards lens |
|---|---|---|---|
| Building and Construction | 1–16 | **Engineering & Construction** | Engineering design (NGSS ETS1); geometry/spatial (Math TEKS) |
| Drawing and Visual Communication | 17–28 | **Geometry & Representation** | Math TEKS geometry; 2-D/3-D & perspective |
| Arrangement and Scene | 29–40 | **Spatial & Systems** | Positional/spatial reasoning; some science systems (habitat, solar system, food plate) |
| Patterns, Sequences, Classification | 41–50 | **Patterns & Data** | Algebraic reasoning, classification, data (Math + Science practices) |
| Map and Direction | 51–58 | **Maps & Coordinates** | Coordinate plane (Math TEKS); mapping/directions (science & social studies) |
| Mathematics | 69–76 | **Mathematics** | Math TEKS (geometry, fractions, arrays, transformations, data) |
| Science | 77–84 | **Science** | 2021 Science TEKS + NGSS (circuits, molecules, food chains, life cycles, rock layers, weather, cells, experimental setup) |
| Language and Literacy | 59–68 | Cross-curricular (secondary) | ELAR TEKS (vocabulary, sequence, main idea) |
| Social Studies | 85–90 | Cross-curricular (secondary) | Social Studies TEKS (timelines, government, trade routes, settlement) |
| Team Communication Variations | 91–106 | **Facilitation modes** (applied to any activity) | SEL / speaking-listening; not standalone content |

### Alignment method (per activity, on its page)

- Each STEM activity page carries a **Standards** block: applicable **TEKS** code(s) and, where a
  clean fit exists, the **NGSS** performance expectation or Science & Engineering Practice (esp.
  **SEP: "Obtaining, Evaluating, and Communicating Information"** and **Constructing Explanations /
  Designing Solutions**, which this whole activity family exercises directly).
- Codes are **grade-banded** and stored as data (see §4) so they render on the page and feed a future
  TEKS-correlations page (mirrors `lab-safety/teks-correlations.html`).
- **District-confirmation flag** (same caveat lab-safety uses): the 2021 Science TEKS took effect
  2024–25; verify each code against the district-adopted version before formal documentation. NGSS
  is a national reference, not Texas-adopted — presented as a "connects to" aid, not a claim of
  adoption.

> Open scope question flagged for the user in the plan review: should the two cross-curricular
> strands (Language, Social Studies) be **kept as a secondary section** (current plan) or **dropped**
> for a pure-STEM area? Default = keep, clearly secondary.

---

## 3. What "interactive" means here

These are physical, offline classroom activities, so "interactive" = a great **digital teacher
companion**, not an in-browser game:

- **Filterable, searchable catalog** on the landing page — filter by strand, subject, grade band,
  and materials; live text search; result count.
- **Guided page per activity** with: role cards (Describer/Builder/Messenger/Observer…), materials,
  numbered setup, the communication constraint for that activity, a "make it harder / easier" lever,
  reflection prompts, and the Standards block.
- **Helper tools** shared across pages (small, client-side): a **round timer**, a **role assigner**,
  a **question-token counter**, and a **"surprise me" random-activity** button.
- **Print** button on every page → clean one/two-page handout via `@media print`.

---

## 4. File architecture

```
/activities/sayitmakeit/
  activities.md                 ← SOURCE content (106 activities)            [have]
  plan.md                       ← this file                                   [BUILT]
  data/activities.json          ← parsed, structured, + strand/subject/grade/standards  [next]
  build.js                      ← Node: data + template → index + 106 pages   [next]
  templates/
    activity.html               ← one guided-activity template
    index.html                  ← landing/catalog template
  index.html                    ← GENERATED landing (catalog + tools)         [gen]
  a/<slug>.html                 ← GENERATED guided page per activity (106)     [gen]
  teks-correlations.html        ← standards summary (like lab-safety)          [later]
  assets/
    app.css                     ← shared styles (hub tokens) + @media print
    app.js                      ← catalog filter/search + helper tools
    i18n-*.js                   ← seven-language dictionaries (chrome first)
    hero.png                    ← Canva                                        [phase-img]
    cat-*.png                   ← 11 category illustrations (Canva)            [phase-img]
```

Build is data-driven (mirrors the hub's `build-catalog.js` convention) — never hand-edit generated
pages; edit `data/activities.json` + templates and re-run `node build.js`.

### Data model (per activity)

```json
{
  "num": 77, "slug": "circuit-description-challenge",
  "title": "Circuit Description Challenge",
  "strand": "science", "subjects": ["science"],
  "grades": "3-8",
  "materials": "Battery, bulb, wires, switch (two matching sets).",
  "summary": "One student describes a working circuit; the partner rebuilds it behind a screen.",
  "steps": [ "…" ],
  "constraint": "Words only; no pointing.",
  "skills": ["circuit vocabulary","sequence","precision"],
  "teks": ["S.5.7.A"], "ngss": ["4-PS3-2 (SEP: communicating information)"],
  "harder": "…", "easier": "…"
}
```

`data/activities.json` is generated from `activities.md` by a parser (fields: `Materials:`,
body paragraph = `summary`/`steps`, `Skills:`/`Purpose:`), then enriched with strand/subject/grade
and hand-verified standards.

---

## 5. Internationalization

- Uses the **shared engine** `../ctobs/assets/i18n.js` (same as `relic-rooms/`, `pst/`), loaded
  relative. Language `<select>` rendered by `data-i18n-picker`; language persists via the engine's
  localStorage key. Seven languages: en, es, vi, ar (RTL), hi, ur (RTL), zh.
- **Phase 1 (now):** translate the **UI chrome** (nav, filters, section labels, role names, reflection
  prompts, buttons, print) — a bounded ~80-key dictionary — so the switcher fully works.
- **Phase 2 (later):** translate the 106 activity bodies in batches. Structured so translated strings
  slot into the same `data/activities.json` under a `i18n` sub-object; English renders until a
  translation exists (graceful fallback).

---

## 6. Images (phased, via Canva)

- **Phase-img 1 (first):** one **hero** + **11 category illustrations**, in the hub's illustrated
  style (match `activities_hero.png` / `lab-safety/assets/hero.png`). Category art heads each strand
  section and each activity card uses its category image + an icon.
- **Phase-img 2 (later):** optional per-activity art (106) in batches.

---

## 7. Build phases (each = a discrete commit/deploy)

1. **plan.md** — this file. ✔
2. **Data backbone** — `data/activities.json` (parsed + strand/subject/grade), parser in `build.js`.
3. **Landing + catalog** — `index.html` (filter/search/tools) + `assets/app.css`/`app.js`, language
   switcher, print styles. Wire English chrome i18n.
4. **Guided pages** — `templates/activity.html` + generate all 106 `a/<slug>.html`. Print-friendly.
5. **Standards pass** — verify/fill TEKS + NGSS in the data; render Standards blocks; add
   `teks-correlations.html`.
6. **Images** — Canva hero + 11 category illustrations; wire into cards/sections.
7. **Hub integration** — add the Say It, Make It **card** to `/activities/index.html` with
   `data-count="106"` (hub total → 417) and keywords.
8. **Full i18n** — translate activity bodies in language batches.

Per standing direction, commit + push each finished phase so the live site gains discrete,
finished units.

---

## 8. Conventions inherited from the hub

- Design tokens (`--navy #054c8c`, `--gold #fbd239`, `--paper #f4f8fc`, …), Fredoka + Nunito fonts,
  `.card` / `.topbar` / hero patterns — copied from `lab-safety`.
- Footer: `CC BY 4.0 (content) · MIT (code) · Miguel Guhlin`.
- `data-i18n` attributes for all user-facing chrome; dictionaries in `assets/i18n-*.js`.
- No PDFs committed; print via browser. No logins; no analytics.
