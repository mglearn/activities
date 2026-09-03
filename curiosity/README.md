# TCEA Curiosity Challenge

A repeatable series that pairs a **timely topic** with **five short, varied, classroom-ready
challenges** teachers can use immediately — no digital breakouts, no logins, no data collected.
Published at **https://mglearn.github.io/activities/curiosity/**.

> Curiosity gets the click. Classroom usefulness earns the return visit.

## The five-challenge pattern

Every pack moves students through five different kinds of thinking
(**Notice → Classify → Infer → Explain → Transfer**). Any one challenge also works standalone
in a few minutes.

| # | Challenge | Engine type | Thinking move |
|---|-----------|-------------|---------------|
| 1 | Guess It  | `four-clues` | Identify from four progressively easier clues (4→1 pts) |
| 2 | Sort It   | `sort`       | Classify cards into categories (keyboard + click, no drag) |
| 3 | Spot It   | `spot` / `order` | Notice & wonder on an image, or order a sequence |
| 4 | Explain It| `explain`    | Make a claim from a small evidence set |
| 5 | Extend It | `extend`     | Create, design, or apply in a new context |

## October packs (built)

| Pack | Folder | Grades | Source of record |
|------|--------|--------|------------------|
| World Space Week | `space-week/` | 3–12 | NASA, ESA, JPL, JHUAPL |
| Nobel Prize | `nobel-prize/` | 6–12 | NobelPrize.org |
| Día de los Muertos | `dia-de-los-muertos/` | 3–12 | UNESCO, Smithsonian, National Museum of Mexican Art |

The full editorial plan for the wider series (eight topics) is in [`plan.md`](plan.md).

## How a pack is put together

The engine is **shared**; each pack is just **data + a thin landing page**.

```
curiosity/
├── index.html            ← series hub (lists the packs)
├── privacy.html          ← shared privacy page (all packs link ../privacy.html)
├── accessibility.html    ← shared accessibility page
├── plan.md · images.md · README.md
├── assets/
│   ├── css/curiosity.css ← one stylesheet for the hub + every pack
│   └── js/engine.js      ← renders all 5 activity types from window.CURIOSITY_PACK
└── <topic-slug>/
    ├── index.html        ← loads data/activities.js then ../assets/js/engine.js
    ├── teacher.html      ← teacher guide + answer keys
    ├── data/
    │   ├── activities.js ← the content (window.CURIOSITY_PACK = {…})
    │   └── sources.md    ← every factual source, tied to activities
    ├── print/
    │   ├── student.html  ← printable, ink-light, no answers
    │   └── teacher-key.html
    ├── assets/images/    ← topic images (see ../images.md for prompts)
    └── README.md
```

### Data is stored as JS, not JSON

`data/activities.js` assigns `window.CURIOSITY_PACK = { … }`. That avoids `fetch()`, so the packs
run from `file://` and from GitHub Pages identically, with no server. The object shape is the
reusable content model from the plan (title, slug, gradeBands, activities[]). See any pack's
`activities.js` for the per-type fields (`four-clues`, `sort`, `order`, `spot`, `explain`, `extend`).

### To add a new topic

1. Copy an existing `<topic-slug>/` folder.
2. Replace `data/activities.js` with the new topic's content and `data/sources.md` with its sources.
3. Update the landing `index.html` title/description and the `body{--accent:…}` color.
4. Regenerate teacher + print pages from the data.
5. Add a card to `curiosity/index.html`, add image prompts to `images.md`.
6. From `activities/`, run `node build-search-index.js` so hub search can find it.

## Privacy & accessibility

Fully client-side: no accounts, no student names, no responses sent anywhere. Every control is
keyboard-operable, sorting never requires drag-and-drop, images carry text descriptions, color is
never the only signal, reduced motion is honored, and every pack has a printable paper fallback.
See [`privacy.html`](privacy.html) and [`accessibility.html`](accessibility.html).

## Accuracy

Facts are tied to official and institutional sources in each pack's `data/sources.md`. Content is
built with AI assistance and is **human-reviewed** — see the source notes for the few items flagged
for a final human check before high-stakes use.

Content CC BY-NC 4.0 · Code MIT.
