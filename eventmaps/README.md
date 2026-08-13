# History Event Maps

TEKS-aligned visual **history-thinking organizers** for grades 3–5, 6–8, and
9–12 social studies classrooms. Part of the [mglearn Learning Activities Hub](https://mglearn.github.io/activities).

**Investigate an event. Examine the evidence. Build the story. Fill in the gaps.**

Students examine two or three credible sources, complete what they can on a
visual Event Map, compare their thinking, then revise the map as the teacher
projects the *same* organizer and adds historical context.

## Instructional model

**Scan → Map → Compare → Expand → Revise → Conclude**

1. **Scan** two–three short sources · 2. **Map** what the evidence shows ·
3. **Compare** with a partner · 4. **Expand** — teacher adds context ·
5. **Revise** the map · 6. **Conclude** with one synthesis question.

## Grade bands

Grades 3–5 · Grades 6–8 · Grades 9–12.

## The nine map families

Grades 3–5: **History Trail**, **Cause Ripples**, **People · Place · Change**.
Grades 6–8: **Turning Point**, **Voices Around the Event**, **Conflict & Consequence Chain**.
Grades 9–12: **Historical Evidence Dossier**, **Systems Shockwave**, **Continuity & Change Ledger**.

The map type is chosen by the *historical thinking the event demands*, not by
grade level alone.

## Current status

All **nine map families** are built (color + true grayscale). The library has
**18 activities — six per grade band, two per map family** — each with printable
PDFs and seven-language support. The first activity in each family:

| Family | Pilot | Grade · Course |
|--------|-------|----------------|
| Voices Around the Event | Boston Tea Party | 6–8 · US History |
| History Trail | Lewis & Clark Expedition | 3–5 · US History |
| Cause Ripples | Transcontinental Railroad | 3–5 · US History |
| People · Place · Change | The Great Migration | 3–5 · US History |
| Turning Point | Battle of Gonzales | 6–8 · Texas History |
| Conflict & Consequence | Road to the Civil War | 6–8 · US History |
| Evidence Dossier | What Caused the Cold War? | 9–12 · US History |
| Systems Shockwave | The Great Depression | 9–12 · US History |
| Continuity & Change | The Civil Rights Movement | 9–12 · US History |

All nine pilots are localized in **seven languages** (English, Spanish, Vietnamese,
Arabic, Simplified Chinese, Urdu, Hindi; RTL for Arabic and Urdu). Boston Tea Party
was hand-authored; the other eight were translated via the pipeline in `scripts/`
(`extract-i18n.mjs` → `data/translations/*.json` → `build-translations.mjs` →
`assets/i18n-activities-tr.js`) and are **machine-assisted, pending fluent-speaker
review**. Also included: an **About / Privacy / Accessibility** page (`about.html`)
and 36 printable PDFs served as direct downloads. See `IMPLEMENTATION_PLAN.md`.

## Running locally

Open `index.html` in a browser (no server required — data is bundled as JS so
`file://` works), or serve the folder:

```bash
python3 -m http.server 8000    # then visit http://localhost:8000/
```

## Repository layout

```
eventmaps/
  index.html                     Hub: filters + featured activity + map gallery
  activities/boston-tea-party.html   Pilot activity (student/teacher, 7 languages)
  templates/voices-around-event.svg  Blank vector organizer (print reference)
  assets/
    i18n.js                      Shared 7-language engine (verbatim from lab-safety)
    i18n-common.js               Shared UI strings (routine, field labels, chrome)
    i18n-hub.js                  Hub dictionary
    i18n-voices-btp.js           Boston Tea Party dictionary (student-facing: 7 langs)
    eventmaps.css                Design tokens + organizer + color/grayscale + print
    maps.js                      Organizer renderer + helpers
    data.js                      GENERATED bundle (window.EM_DATA)
  data/
    schema/activity.schema.json  Activity record schema
    standards/teks-grade8-us.json   Verified TEKS (source of truth)
    activities/boston-tea-party.json   Activity record (source of truth)
    maps.json                    The nine map families
  scripts/
    build-data.mjs               JSON -> assets/data.js
    validate.mjs                 schema + TEKS + i18n coverage + locale parity
    build-pdfs.mjs               4 PDFs via headless Chrome
  downloads/                     Generated PDFs
```

## Adding an activity

1. Create `data/activities/<slug>.json` (validate against `data/schema/activity.schema.json`).
2. Add its dictionary `assets/i18n-<slug>.js` (student-facing keys in all 7 languages).
3. Copy `activities/boston-tea-party.html` as a template; point it at the new record.
4. `node scripts/build-data.mjs && node scripts/validate.mjs`.
5. `node scripts/build-pdfs.mjs <slug>`.

## Adding / updating a translation

- **UI / chrome / field labels:** edit the shared dictionaries
  `assets/i18n-common.js`, `i18n-fields.js`, `i18n-hub.js`, `i18n-generic.js`
  (one flat `key → string` object per language: `en es vi ar zh ur hi`).
- **Activity content** (challenge, sources, organizer text, etc.): edit
  `data/translations/<id>.json` — an array of `{en, es, vi, ar, zh, ur, hi}`
  keyed by the English source string — then run `node scripts/build-translations.mjs`
  to regenerate `assets/i18n-activities-tr.js`. Use `node scripts/extract-i18n.mjs <dir>`
  to dump a fresh list of an activity's translatable strings.

Arabic and Urdu render right-to-left automatically. `build-translations.mjs`
reports coverage (which strings still fall back to English). Mark a language
`human` in the activity's `translationStatus` once a fluent speaker has reviewed it.

## Updating TEKS

TEKS codes and wording live in `data/standards/*.json` with a `source`,
`verifiedDate`, and `status`. **Never fabricate a TEKS code.** Confirm against the
current [19 TAC Chapter 113](https://tea.texas.gov/about-tea/laws-and-rules/texas-administrative-code/19-tac-chapter-113)
and your district's adopted standards. The site shows a visible note asking
districts to confirm local codes.

## Generating PDFs

```bash
node scripts/build-pdfs.mjs [activityId] [lang]
```

Produces four US-Letter landscape variants (`student`/`teacher` × `color`/`grayscale`)
following the naming in `plan.md` §19. The grayscale version is not a desaturated
colour image — it uses distinct line weights, border styles, glyphs, and icons so
information survives black-and-white printing.

## Privacy

**Collects nothing.** No logins, no accounts, no names, no analytics, no student
data. The only thing stored locally is a UI language preference (`tcea.breakouts.lang`),
shared with other mglearn activities. Clearing it resets to your browser language.

## Accessibility

Targets WCAG 2.1 AA: semantic headings, keyboard navigation, visible focus,
adequate contrast, no colour-only meaning (grayscale mode proves it), proper
`lang`/`dir` attributes with RTL support, labelled SVG, and print that stays
usable when enlarged.

## Licensing

Content and code licensing to be confirmed by mglearn before public release.
