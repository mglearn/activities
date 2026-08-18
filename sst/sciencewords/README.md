# Break It, Build It

## Purpose

Science morphology as a sense-making strategy. Students use Greek and Latin
prefixes, roots, and suffixes to predict the meaning of an unfamiliar science
term, then test that prediction against a diagram, a passage, or data — and
revise it when the science disagrees.

The resource is built around one claim, repeated everywhere:

> Word parts give students clues. They do not always provide a complete
> scientific definition. Context and science knowledge still matter.

Several activities are written so the first prediction is close but wrong.
A thermometer measures temperature, not heat. *Microwave* does not mean a small
oven. Revision is the intended behaviour, not a failure.

## Audience

Texas science teachers in grades 3–12, plus anyone teaching science reading.
It is also usable for intervention, stations, bellringers, small-group work,
and multilingual learner support.

## Features

- Browsable, filterable activity library with URL-shareable filter state
- Word Parts Explorer with search across meanings, examples, and cautions
- Every activity printable in **colour** and in a **black-and-white edition**
  designed for a grayscale copier, not merely stripped of ink
- A separate teacher key for every activity, with answers *and* a "why"
- Teacher guide, standards page, privacy page, accessibility page
- Data-driven: one JSON edit updates the card, both handouts, and the key
- Static, vanilla HTML/CSS/JS. No framework, no build step for visitors, no CDN

## Grade Bands

| Band | Status | Contents |
|------|--------|----------|
| Grades 3–5 | **Complete** | 30 word parts, 35 science terms, 12 activities, BOY/MOY/EOY examples, colour + B&W, 12 teacher keys |
| Grades 6–8 | Planned | The cumulative bank plus CYTO, CHLOR, LITH, TROPH, ENDO/EXO, ISO, LYSIS and the middle-school terms built on them |
| Grades 9–12 | Planned | A core high-school bank plus Biology, Chemistry, Physics, and Earth/Environmental collections |

Grades 3–5 was built first and completely on purpose: it is the template the
other two bands are copied from, so it had to be validated before being
duplicated.

## SST / ACE / SOLO Connection

- **SST.** Beginning in 2027–2028 the Student Success Tool replaces STAAR with
  beginning-, middle-, and end-of-year assessments. Activities are tagged
  `boy` / `moy` / `eoy`, and the cognitive demand actually changes across the
  three — the same sheet is never relabelled.
- **ACE.** Articulate / Connect / Extend appears as a short box on most
  activities, never forced onto every page.
- **SOLO.** A four-point shorthand (One clue → Several clues → Connected
  meaning → Transfer) appears on teacher keys only. Students are never labelled
  with a level.

This BOY/MOY/EOY progression is a **local instructional approach** for SST
readiness. It is not a TEA requirement, and nothing here is SST-approved,
official SST practice, or a reproduction of an SST item. Every stimulus was
written for this resource.

## Standards Approach

`data/standards.json` ships with empty `entries` arrays. That is deliberate.

No exact TEKS or NGSS code appears anywhere on the site until it has been
checked against the primary source, with the source URL and the verification
date recorded in the data file. The validator enforces this: an entry with no
`source` or no `verifiedDate` fails the build.

Learning word parts is not itself a science TEKS, and morphology is not an
NGSS Performance Expectation. The site says so on the standards page.

## Directory Structure

```
sciencewords/
├── index.html               home
├── activities.html          filterable library
├── word-parts.html          morpheme explorer
├── teacher-guide.html
├── standards.html
├── privacy.html
├── accessibility.html
├── build-print.js           data -> printable handouts + teacher keys
├── css/
│   ├── styles.css           site
│   └── print.css            handouts (colour and B&W in one sheet)
├── js/
│   ├── data-loader.js       fetch + lookup helpers + labels
│   ├── filters.js           filter state, URL sync, matching
│   ├── app.js               page controllers
│   └── print.js             the Print button on a handout
├── data/
│   ├── morphemes.json
│   ├── science-terms.json
│   ├── activities.json
│   ├── teacher-keys.json
│   └── standards.json
├── print/
│   ├── color/grades-3-5/    generated — do not hand-edit
│   └── bw/grades-3-5/       generated — do not hand-edit
├── teacher-keys/            generated — do not hand-edit
└── tests/
    └── validate.js
```

Everything under `print/` and `teacher-keys/` is generated. Edit the JSON and
re-run `node build-print.js`.

## Running Locally

No build step and no dependencies for a visitor, but the pages `fetch()` the
JSON data, so open them over HTTP rather than as `file://`:

```bash
cd sciencewords
python3 -m http.server 8000
# then open http://localhost:8000/
```

Regenerate and check after any data edit:

```bash
node build-print.js
node tests/validate.js
```

## Hosting

Static. Works from GitHub Pages, Cloudflare Pages, any basic static host, or a
local folder. There is no database, no authentication server, and no
server-side rendering.

One dependency on the surrounding site: pages include
`/activities/licensing-footer.js`, the Learning Activities Hub's shared
licensing footer. It is an absolute same-origin path, so it resolves in
production and is simply absent on a standalone dev server.

## Adding a Morpheme

1. Add an entry to `data/morphemes.json`. Required: `id`, `display`, `type`
   (`prefix` | `root` | `combining-form` | `suffix`), `meaning`, `origin`,
   `gradeBands`, `scienceAreas`, `examples`, `studentNote`.
2. Add a `cautions` entry if the classroom shorthand breaks down anywhere
   students will actually meet it — see MICRO and *microwave*.
3. Run `node tests/validate.js`. An unused morpheme is reported as a note, not
   a failure, but do not add roots just to lengthen the list.

Before adding anything, it must pass the content check: is the meaning accurate
enough for classroom use, is it useful in science, does it appear across
several useful terms, is the grade-band placement reasonable, are the examples
real words?

## Adding a Science Term

Add to `data/science-terms.json`. The two fields that matter most:

- `wordPartClue` — what the parts literally suggest
- `studentDefinition` / `scienceExplanation` — what the term actually means

The validator fails if those two are identical, because keeping them apart is
the whole pedagogical point. A part may reference a morpheme
(`{"morpheme": "hydro", "role": "combining-form"}`) or be a literal chunk with
its own meaning (`{"text": "system", "role": "word", "meaning": "parts working together"}`).
Do not force an everyday English word into the morpheme bank to make a term
decompose neatly.

## Adding an Activity

1. Add an entry to `data/activities.json` with the taxonomy fields and a
   `blocks` array. Supported block types:
   `instructions`, `note`, `wordparts`, `bigword`, `breaktable`, `table`,
   `detectivetable`, `datatable`, `lines`, `cards`, `sortcolumns`,
   `checkboxes`, `oddoneout`, `equation`, `mysterycards`, `mcq`, `stimulus`,
   `ace`. Set `layout` to `quarter-page` or `half-page` for exit tickets.
2. Add a matching entry to `data/teacher-keys.json`. The validator fails if an
   activity has no key.
3. `node build-print.js && node tests/validate.js`

Every activity should be able to answer: what is the student thinking about,
what evidence must they use, and is there more cognitive work here than copying
a definition?

## Adding a Standard

Only after verifying it:

```json
{
  "id": "", "gradeOrCourse": "", "strand": "", "code": "",
  "summary": "", "source": "https://…", "verifiedDate": "YYYY-MM-DD"
}
```

into `standards.json` → `teks.entries` or `ngss.entries`, and set the group's
`verifiedDate`. The validator rejects an entry missing `source` or
`verifiedDate`.

## Print System

`build-print.js` renders each activity twice from the same blocks. The colour
edition uses hue for prefix / root / suffix; the B&W edition (`body.bw`) drops
hue and carries the same distinction three other ways:

| Part | Shape | Border | Label |
|------|-------|--------|-------|
| Prefix | rounded left edge | dotted | PREFIX |
| Root | rectangle | solid | ROOT |
| Suffix | rounded right edge | double | SUFFIX |

Sheets are US Letter portrait, 0.5in margins, 12.5pt body text, writing rules
about a third of an inch tall. Print at 100% — not "fit to page". Exit tickets
print two or four to a page with dashed cut lines. `@media print` removes the
toolbar and the page chrome.

Diagrams are original inline SVG with `<title>` and `<desc>`, drawn as
outlines so they survive grayscale.

PDFs are not generated. The printable HTML is the deliverable; browser
"Print → Save as PDF" produces a clean file if one is needed. No placeholder
PDF files exist anywhere in the project.

## Accessibility

Target is WCAG 2.1 AA. See `accessibility.html` for the current commitments and
the honest list of what has not been tested. Highlights: semantic HTML, skip
link, real fieldsets and labels for the filters, visible focus, no meaning
carried by colour alone, `aria-live` result counts, reduced-motion support, and
no horizontal scrolling at common widths.

## Privacy

No accounts, no logins, no student names, no stored responses, no cookies, no
`localStorage`, no analytics, no third-party requests. Filter state goes into
the URL; student work never does. See `privacy.html`.

## Validation

```bash
node tests/validate.js
```

Four passes: data integrity (unique ids, live references, valid enums, no empty
meanings), coverage (every activity has both editions and a key, no orphaned
keys), links (every local `href` and `src` on every page resolves), and HTML
(duplicate ids, missing `alt`, `h1` count, and a check that no teacher-key
answer text has leaked into a student handout).

Exit code is non-zero on any failure, so it can gate a commit.

## Known Limitations

- **Teacher keys are not secure.** They live in a separate folder and are never
  embedded in a student handout, but this is static hosting: anyone with the
  address can open a key. Real protection would need authentication, which this
  project does not have and does not pretend to have.
- Grades 6–8 and 9–12 are not built yet. The activity library filters will
  return nothing for those bands, which the empty state says plainly rather
  than hiding the filters.
- No TEKS or NGSS codes are listed yet — see Standards Approach.
- Screen-reader testing has been keyboard and semantic review, not a full pass
  through JAWS, NVDA, and VoiceOver.
- English only so far.

## Future Translation Support

All student-facing content already lives in JSON rather than in markup, which
is the prerequisite. The sibling activities in this area (`../acesst/`) use the
shared seven-language engine at `/activities/ctobs/assets/i18n.js` with
per-language files under `_i18n/`; the same pattern applies here — add
`_i18n/<lang>.json` holding the UI strings plus per-activity content, and read
the active language when rendering. Spanish is the highest-value first
edition, partly because many of these roots surface directly as Spanish
cognates (*hidrosfera*, *termómetro*, *fotosíntesis*), which is itself worth
teaching.

## Licensing

Content licensed CC BY-NC 4.0 · Code licensed MIT · Miguel Guhlin.
This matches the surrounding Learning Activities Hub; see
`/activities/licensing.html`, which is the authoritative page.
