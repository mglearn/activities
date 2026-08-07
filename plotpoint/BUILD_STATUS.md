# PlotPoint — Build Status

**PlotPoint · Read. Reason. Play.** — a privacy-first, multilingual, accessible,
static literature learning hub for grades 6–12. Built per `plan.md`, in phases.

Last updated: 2026-08-02

Deployment note: PlotPoint lives in the **`activities/`** repo and ships at
`/activities/plotpoint/`. (The reference links in `plan.md` point at the old
`/tcea/…` paths, which now redirect to `/activities/…`.)

---

## Phase gates

| Phase | Scope | Status |
|---|---|---|
| 0 | Inspect repo; reuse PST / Relic Rooms / CTOB patterns | ✅ Done |
| 1 | Shared system: hub + language engine + one working title room | ✅ Done |
| 2 | Seven-language support wired end to end | ✅ Done (see review flags) |
| 3 | Texas 2026 short-form rooms | ✅ Done — poems, scripture, short stories, speeches/documents |
| 4 | Classics reading room + separate `/classics/` page | ✅ Done |
| 5 | Copyrighted paraphrase-only companions | ✅ 6 live (Kindred + 5) |
| 6 | Guide pages + hub nav (Correlations · Classics · ACE) | ✅ Done |

### Current catalog — 79 rooms, all seven languages

The catalog contains **79 live-status room cards** in `titles.js` (the source of truth for
live status). **71** are committed and deployed. **7 new PD short-story rooms** — The Yellow
Wallpaper, To Build a Fire, After Twenty Years, The Open Window, The Interlopers, The
Necklace, and The Story of an Hour — were built 2026-08-06 (English + 6 language packs each,
all validated: `node -c`, 183/183 UI-key parity, 7 artifacts, 6 locks, word-lock solvability,
index-0 answer key). They are **awaiting image assets, commit, deployment, and production
HTTP verification** — image prompts are in `SHORT_STORIES_IMAGES.md`.

**Read & Listen sources (web-verified 2026-08-07).** Each room's `meta.gutenberg`/`meta.audio`
was confirmed live (HTTP 200) and confirmed to contain the target story. `audio` is set only
on the English `data.en.js`; the engine falls back per-field to English, so all six language
packs inherit it.

| Room | 📖 Text | 🎧 Audio |
|---|---|---|
| yellowwallpaper | Gutenberg #1952 | *Not available* — no standalone LibriVox recording |
| tobuildafire | Gutenberg #2429 (*Lost Face*) | LibriVox *Lost Face (and Other Stories)* |
| aftertwenty | Gutenberg #2776 (*The Four Million*) | LibriVox *The Four Million* |
| openwindow | Gutenberg #269 (*Beasts and Super-Beasts*) | LibriVox *Beasts and Super-Beasts* |
| interlopers | Gutenberg #1477 (*The Toys of Peace*) | LibriVox *The Toys of Peace* |
| necklace | Gutenberg #3090 (*Complete Original Short Stories of Maupassant* — "necklace" confirmed in text) | LibriVox *Complete Original Short Stories of Maupassant* |
| storyhour | **Wikisource** (`The_Story_of_an_Hour`) — the story is **not on Project Gutenberg**; the earlier #160 link was wrong and is fixed. Read label + teacher note + policy.html corrected in all 7 files. | *Not available* — no standalone LibriVox recording |

The two "*Not available*" audio cases exist only inside multi-volume LibriVox "Short Story
Collection" omnibuses that could not be pinned to a verified single volume; per house rule
they show a clear unavailable state rather than a guessed link.

**First Texas long work — Frankenstein (2026-08-07).** `frankenstein` (Mary Shelley, PD) is the
first of the 14 §B5 long works, built one-per-day. Modeled on the `dracula` PD-novel template;
English + 6 language packs, all validated (183/183 UI parity, 7 artifacts, 6 locks, word-lock
solvability, index-0 answers). Verified sources: Gutenberg **#84** (1831 text) + LibriVox **1831
edition** recording. New arcade mechanic: *"Born a Monster, or Made One?"* (nature-vs-nurture
evidence sort). Image prompts in `LONG_WORKS_IMAGES.md`. Awaiting image assets + commit/deploy.

**Second Texas long work — Pride and Prejudice (2026-08-07).** `pride` (Jane Austen, PD) is the
second §B5 long work. Full seven-language build: `data.en.js` + all six `lang/*.js` packs
(es, vi, ar, hi, ur, zh) + `index.html` + `policy.html` + `titles.js` card + image prompts.
Validated: `node -c` on all 7 JS files; **183/183 UI-key parity** across every pack; 11 vocab
(all contexts contain their term); 7 relic artifacts (4 choices each); 6 locks (word/digit answers
preserved and present in each pack's final hint); balanced 4/4 arcade with bucket/card order
preserved; 5 MCQ + 3 short + paragraph + ACE; index-0 answers; meta URLs + ccss preserved verbatim
in every pack. Verified sources: Gutenberg **#1342** + LibriVox **version 1** (complete recording).
Arcade mechanic: *"First Impressions: Accurate or Misleading?"*. Image prompts in
`LONG_WORKS_IMAGES.md`. Translations are machine-assisted (flag for educator review). Awaiting
image assets, commit/deploy, and production HTTP verification.

**Third Texas long work — The Great Gatsby (2026-08-07).** `gatsby` (F. Scott Fitzgerald, U.S. PD
since 2021) is the third §B5 long work. Full seven-language build: `data.en.js` + all six
`lang/*.js` packs + `index.html` + `policy.html` + `titles.js` card + image prompts. Validated:
`node -c` on all 7 JS files; **183/183 UI-key parity** across every pack; 11 vocab (contexts contain
their term); 7 relic artifacts (The West Egg Archive); 6 locks (answers "2"/Carraway/Gatz preserved
and present in each pack's final hint); balanced 4/4 arcade *"Whose Fault Was It? Illusion vs.
Carelessness"* with bucket/card order preserved; 5 MCQ + 3 short + paragraph + ACE; index-0 answers;
meta URLs + ccss verbatim in every pack. Verified sources: Gutenberg **#64317** + LibriVox
**version 1** (complete recording). Symbolism focus (green light, valley of ashes, Eckleburg's eyes)
+ peripheral-narrator lens + American-Dream critique. Mature-content and Tom-Buchanan-racism notes
in the Teacher Guide. Awaiting image assets, commit/deploy, and production HTTP verification.
Remaining long works: **11 of 14** (see `TEXAS_2026_PLAN.md` §B5).

**Engine fix (2026-08-07).** `assets/room-engine.js` `shuffle()` was a fixed permutation
(`(i*7+3)%(i+1)`), so the index-0-correct answer always landed in the same visual slot every load.
Replaced with a `Math.random()` Fisher–Yates (browser-safe), plus a guard so a sequence lock never
starts already solved. Affects every room's answer-position randomization; answer checking is
value/index-based, so keys are unchanged.

Major completed groups:

- Original literature, philosophy/classics, and copyrighted companion collection
- Seven public-domain short-story expansion rooms, plus five Texas 2026 short stories
- Nine scripture/literary Bible rooms, including all four Texas 2026 passages
- All 17 Texas 2026 poem rooms
- All eight Texas 2026 speech/document rooms

The eight newest rooms are **The Gettysburg Address**, **General Order No. 108**,
**Letter to the Hebrew Congregation at Newport**, **The Man in the Arena**,
**We Choose to Go to the Moon**, **First Inaugural Address**, **The Lyceum Address**,
and **The Four Freedoms**. Each has English source content, six machine-assisted language
packs, a policy page, and a live-status hub card.

Every public-domain room now receives a free-resource panel. Verified direct links are
used only where recorded in room metadata. If Project Gutenberg text, LibriVox audio, or
Project Gutenberg Open Audiobook narration has not been verified for that room, the
corresponding source is labeled **Not available** instead of linking to a generic search.

### Earlier baseline (24 rooms)

**Public-domain literature (5):**
1. **The Metamorphosis** — Kafka · flagship
2. **The Canterbury Tales** — Chaucer
3. **Dracula** — Stoker
4. **Selected Myths (Bulfinch)** — Bulfinch
5. **Aesop's Fables (Selections)** — Aesop

**Philosophy and foundational classics (12), public domain:**
6. **The Apology** — Plato — arcade: Argument or Appeal? (logos vs. pathos)
7. **The Allegory of the Cave** — Plato — arcade: appearance vs. reality
8. **Meditations** — Marcus Aurelius — arcade: In Your Control?
9. **The Enchiridion** — Epictetus — arcade: Fact or Judgment?
10. **Nicomachean Ethics (Selections)** — Aristotle — arcade: The Golden Mean
11. **The Consolation of Philosophy** — Boethius — arcade: Fortune's Wheel
12. **Confessions (Selections)** — Augustine — relic: The Garden of Memory
13. **Letters from a Stoic (Selections)** — Seneca — relic: The Letter Desk
14. **On Friendship (Laelius de Amicitia)** — Cicero — arcade: True Friend or Flatterer?
15. **The Federalist Papers (Selections)** — Publius — arcade: Safeguard or Danger?
16. **Utopia** — Thomas More — arcade: Utopia or Europe?
17. **Narrative of the Life of Frederick Douglass** — Douglass — arcade: Chains and Keys

**One more public-domain literature room (1):**
18. **The Tell-Tale Heart** — Edgar Allan Poe — arcade: Sanity or Madness? (unreliable narrator)

**Copyrighted companions — paraphrase-only, disclaimered (6):** independent educational
companions; each reproduces **no** text, carries a per-work CC BY 4.0 disclaimer, and has
no source links. Facts verified against a lawful copy, then deleted.
19. **Kindred** — Octavia Butler
20. **In the Time of the Butterflies** — Julia Alvarez
21. **Brave New World** — Aldous Huxley
22. **The Diary of a Young Girl** — Anne Frank
23. **Separate Is Never Equal** — Duncan Tonatiuh
24. **Between the World and Me** — Ta-Nehisi Coates

Every **public-domain** room carries the free **Read & Listen** panel (Project
Gutenberg text + LibriVox audiobook) in Enter the Story. The classics collection (15 rooms
flagged `classic:true`, all live) also has its own **`/classics/` reading room** organized
by grade band.

### Guide pages + hub navigation
- **`/correlations/`** — TEKS / ELPS / UDL 3.0 / CCSS alignment, activity-by-activity, with
  a live rooms-by-grade-band table. **`/ace/`** — generic ACE Framework explainer (usable
  with any text; SOLO map, reusable prompts, Gen AI guardrails). **`/classics/`** — Classics Reading Room.
- Hub top-right **Guides dropdown** (left of the language switcher) links all three. The old
  The old reading-room banner above the search was removed; the Teaching-Companion CTA now links to `/ace/`
  (previously a dead alert popup). All three guide pages accept an optional `images/hero.webp`.

### Not built (no source text / declined)
The `giver, orient, mango, martian, maus, justmercy` planned cards were **removed** (no
source text). The mature/explicit titles (Forever, MaddAddam, The Handmaid's Tale, A
Clockwork Orange, ACOMAF, Breathless, Last Night at the Telegraph Club) were **declined**
for a grades 6–12 product. Any future copyrighted build must follow the companion pattern
(paraphrase only, disclaimer, never commit the source). Short-story backlog + copyright
triage is captured in **`SHORT_STORIES_PLAN.md`**.

**Hub totals:** 71 title cards · **all 71 live-status** (0 "coming soon") · 15 classics rooms ·
6 copyrighted companions · faceted search · Guides dropdown · cards hidden until the user
searches/filters (keeps the front page calm).

---

## What shipped

### Hub (`/activities/plotpoint/`)
- `index.html` — hero, tagline, ACE callout, live tallies, and a searchable grid with
  **compact dropdown-checkbox facets** (grade band, genre, activity, reading stage, time,
  text rights). Cards stay hidden behind a browse prompt until a search or filter is
  applied. The Classics guide link opens the `/classics/` page.
- `titles.js` (`window.PLOTPOINT_TITLES`) — single source of truth for all **71** titles
  (metadata + facets + `classic` flag + live/planned status). Flip `status:"live"` + set
  `href` when a room ships.
- `plotpoint-i18n.js` — hub chrome dictionary, **7 languages** (including `val.*`, `classics.*`,
  `browse.*` keys).
- `classics/index.html` — Classics Reading Room: lists every `classic && live` title grouped by grade.

### Shared room framework (`assets/`)
- `plotpoint.css` — all 10 sections, nav rail, interactive components, the optional Enter
  hero image + disclaimer callout, browse prompt, RTL, and print styles.
- `room-engine.js` — data-driven engine: renders the 10 sections from `window.__ROOM__`,
  tracks progress in `localStorage`, prints a packet, drives the language switcher, and
  falls back per-field to English when a translation pack omits a field. Title content
  lives only in each room's `data.en.js` + `lang/*.js`.

### Every title room (10 sections)
1. Enter the Story (goals, stages, ACE, optional hero image, Read & Listen for
   public-domain texts, per-work disclaimer for copyrighted companions) · 2. Vocabulary
   (study / matching / context) · 3. Relic Room (7 artifacts: identify/purpose/
   significance + reveal + ACE) · 4. Crack the Case (6 locks: digit, word, choice,
   sequence) · 5. Arcade (accessible sort game, per-card buttons, no timers) · 6. Analyze
   the Text (5 MCQ + short + paragraph + ACE) · 7. Extend the Idea (transfer task) ·
   8. Gen AI Thinking Partner (teacher toggle, 6 copyable prompts, 11-field receipt,
   non-AI alternative) · 9. Print Materials · 10. Teacher Guide (pathways, standards
   table, answer keys, review items).
- Each room: `data.en.js` (English source) + `lang/{es,vi,ar,hi,ur,zh}.js` + `index.html`
  + `policy.html` (privacy & compliance + accessibility VPAT-lite).

---

## Requirements coverage
- **No accounts / analytics / ads / data collection** — nothing is transmitted; only
  progress, typed answers, Gen AI toggle, and language live in `localStorage`.
- **Static** — pure HTML/CSS/JS; loads only Google Fonts; works offline after load.
- **Seven languages** (`en, es, vi, ar, hi, ur, zh`) with a persistent switcher, `?lang=`
  share links, `localStorage` persistence, `lang`/`dir` attributes, and **RTL** for Arabic
  & Urdu. Book/author names kept in published form.
- **ACE Framework + SOLO + optional accountable Gen AI** — throughout.
- **Accessibility (WCAG 2.1 AA target / UDL 3.0)** — keyboard-operable, visible focus,
  text+color feedback (never color alone), no timers, no lives system, arcade offers
  per-card buttons (never drag-only), reduced-motion support, responsive, print stylesheet.
- **No invented quotations / plot details / standards codes** — content paraphrases widely
  established facts only; famous lines are paraphrased, not quoted; unverifiable items
  carry **"Needs review"**; copyrighted companions reproduce no text.

## Validation performed (per room)
- `node -c` syntax check on every JS file (hub + engine + data + 6 lang packs).
- Structural parity: each language pack has all room UI keys (≈183 in the newer rooms),
  identical content structure, preserved array lengths, unchanged index-0-correct answers,
  digit-lock answers unchanged, and **word-lock answers present in their final hint**.
- Headless (jsdom) render test: all 10 sections render with 0 errors in every language;
  7-language picker; a digit-lock solve works; Arabic/Urdu flip to RTL; 0 runtime errors.
- Post-deploy HTTP poll: room, `data.en.js`, `policy.html`, and each `lang/*.js` return 200
  on GitHub Pages before the room is considered shipped.

---

## Needs review (do not treat as final)
- **Translations** (`es, vi, ar, hi, ur, zh`) are machine-assisted and must be reviewed by
  a fluent educator before classroom use. English is the source of truth. (A few
  word-lock answers in some languages were kept in English but always match their final
  hint, so every lock is solvable.)
- **Standards codes** — Common Core codes are asserted as good-faith alignment; **TEKS
  ELAR** and **ELPS** alignments are flagged "Needs review"; confirm against your adoption.
- **Edition / copyright** — public-domain *works* are safe, but some modern translations
  and annotated editions carry their own copyright. Verify the edition you assign.
- **Images** — image generation through `images11.md` is in progress. See **`images12.md`**
  for the eight speech/document rooms. Pages render labeled placeholders until assets are
  dropped into each room's `images/` directory; no room-data changes are needed.

---

## Next steps
1. **Build the 14 Texas 2026 long works** (novels/plays/nonfiction) in §B5 of
   `TEXAS_2026_PLAN.md`, one at a time, selection-scoped where noted. This is the whole
   remaining Texas build now that every short-form batch is live. See §D4 there (and the
   long-work engine-adaptation notes) for how to scope a novel to the standard 10 sections.
2. Optionally add **Federalist No. 78** as its own short document room — see
   `TEXAS_2026_PLAN.md` §H (recorded decision: standalone room, not a `federalist` graft).
3. Work the **§B short-story expansion queue** in `SHORT_STORIES_PLAN.md` (Yellow Wallpaper,
   To Build a Fire, After Twenty Years, The Open Window, The Interlopers, The Necklace, The
   Story of an Hour) — all PD, all fit the engine directly.
4. Finish outstanding image passes; visually verify filenames and crops per room.
5. Have fluent educators review machine-assisted translations; English remains authoritative.
6. Add the existing syntax/parity/lock/resource checks to CI when a build step is introduced.
