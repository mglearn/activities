# PlotPoint — Build Status

**PlotPoint · Read. Reason. Play.** — a privacy-first, multilingual, accessible,
static literature learning hub for grades 6–12. Built per `plan.md`, in phases.

Last updated: 2026-07-31

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
| 3 | Remaining title rooms | 🔄 In progress — **10 rooms live** |

### Live rooms (10) — all seven languages, deployed, headless-validated
**Public-domain literature (4):**
1. **The Metamorphosis** — Kafka · flagship
2. **The Canterbury Tales** — Chaucer
3. **Dracula** — Stoker
4. **Selected Myths (Bulfinch)** — Bulfinch

**Philosophy sub-collection (6)** — added at the user's request, CLT-aligned,
public domain:
5. **The Apology** — Plato (the trial of Socrates) — arcade: Argument or Appeal? (logos vs. pathos)
6. **The Allegory of the Cave** — Plato (Republic, Book VII) — arcade: appearance vs. reality
7. **Meditations** — Marcus Aurelius (Stoicism) — arcade: In Your Control?
8. **The Enchiridion** — Epictetus (Stoicism) — arcade: Fact or Judgment?
9. **Nicomachean Ethics (Selections)** — Aristotle — arcade: The Golden Mean
10. **The Consolation of Philosophy** — Boethius — arcade: Fortune's Wheel

Every live room carries the free **Read & Listen** panel (Project Gutenberg text
+ LibriVox audiobook) in Enter the Story. The seeded philosophy set is complete.

### Direction change
The 9 copyrighted literature titles from `plan.md` (The Giver, Orient Express,
Mango Street, Martian Chronicles, Maus I, Butterflies, Kindred, Brave New World,
Just Mercy) are **on hold** — the user redirected toward public-domain philosophy
suitable for schools (the CLT canon). They remain in `titles.js` as "coming
soon"; if built later they must paraphrase only (no reproduced text) and carry a
content/copyright-review note.

### Philosophy — candidate future additions (not yet carded)
All public domain, from the CLT canon: Augustine's *Confessions*, Cicero
*On Duties / On Friendship*, Seneca's *Letters*, Aesop's *Fables*, Frederick
Douglass's *Narrative*, the *Federalist Papers*, Thomas More's *Utopia*.

**Hub totals:** 19 title cards · **10 live** · a "Philosophy" genre filter.

---

## What shipped

### Hub (`/activities/plotpoint/`)
- `index.html` — hero, tagline, ACE callout, live tallies, searchable + faceted
  book grid (grade band, genre, activity, reading stage, time, text rights),
  "Think first, then Gen AI" reminder. Reuses the shared `BreakoutI18n` engine.
- `titles.js` — single source of truth for all **13** titles (metadata + facets +
  live/planned status). Flip `status:"live"` + set `href` when a room ships.
- `plotpoint-i18n.js` — hub chrome dictionary, **7 languages** (70 keys each).

### Shared room framework (`assets/`)
- `plotpoint.css` — all 10 sections, nav rail, interactive components, RTL, print.
- `room-engine.js` — data-driven engine: renders the 10 sections, tracks progress
  in `localStorage`, prints a packet, and drives the language switcher. Reused by
  every future title room — title content lives only in `data.en.js` + `lang/*.js`.

### Flagship title room — The Metamorphosis (`metamorphosis/`)
Public-domain source (1915 German original) chosen to avoid copyright risk.
All 10 required sections are live and interactive:
1. Enter the Story · 2. Vocabulary (study / matching / context, 10 terms) ·
3. Relic Room "Gregor's Room" (7 artifacts, identify/purpose/significance +
reveal + ACE) · 4. Crack the Case "The Locked Door" (6 locks: digit, sequence,
choice, word) · 5. Arcade "Routine Breakdown" (accessible sort game, duty vs.
self) · 6. Analyze the Text (5 MCQ + 3 short + paragraph + ACE) · 7. Extend the
Idea (transfer task) · 8. Gen AI Thinking Partner (teacher toggle, 6 copyable
prompts, 11-field receipt, non-AI alternative) · 9. Print Materials · 10. Teacher
Guide (pathways, standards table, answer keys, review items).
- `data.en.js` (English source) + `lang/{es,vi,ar,hi,ur,zh}.js` (full ui+content).
- `policy.html` — privacy & compliance + accessibility (VPAT-lite).

---

## Requirements coverage
- **No accounts / analytics / ads / data collection** — nothing is transmitted;
  only progress, typed answers, Gen AI toggle, and language live in `localStorage`.
- **Static** — pure HTML/CSS/JS; loads only Google Fonts; works offline after load.
- **Seven languages** (`en, es, vi, ar, hi, ur, zh`) with a persistent switcher,
  `?lang=` share links, `localStorage` persistence, `lang`/`dir` attributes, and
  **RTL** for Arabic & Urdu. Book titles/author names kept in published form.
- **ACE Framework + SOLO + optional accountable Gen AI** — throughout.
- **Accessibility (WCAG 2.1 AA target / UDL 3.0)** — keyboard-operable, visible
  focus, text+color feedback (never color alone), no timers, no lives system, the
  arcade offers per-card buttons (never drag-only), reduced-motion support,
  responsive to phones, print stylesheet.
- **No invented quotations / plot details / standards codes** — content paraphrases
  widely established facts only; unverifiable items carry **"Needs review"**.

## Validation performed
- `node -c` syntax check on every JS file (hub + engine + data + 6 lang packs).
- Structural parity check: each language pack has all 177 room UI keys, identical
  content structure, preserved array lengths, and unchanged index-0-correct answers
  and digit-lock answers.
- Headless (jsdom) render test of the room: all 10 sections render with 0 errors;
  7-language picker; digit-lock solve works; language switch to Arabic flips to RTL;
  render verified in Arabic and Chinese with 0 runtime errors.
- Headless render test of the hub: 13 cards, 6 filter groups, faceted filtering and
  text search work; language switch applies.

---

## Needs review (do not treat as final)
- **Translations** (`es, vi, ar, hi, ur, zh`) are machine-assisted and must be
  reviewed by a fluent educator before classroom use. English is the source of truth.
- **Standards codes** — only the Common Core codes given in `plan.md` are asserted.
  **TEKS ELAR** and **ELPS** alignments are described but flagged "Needs review";
  confirm exact student-expectation codes against your current adoption year.
- **Edition / copyright** — the 1915 German *Die Verwandlung* is public domain; some
  English translations are still under copyright. Verify your class edition.
- **The creature** in the novella is deliberately unspecified ("monstrous vermin");
  the room avoids naming a single "correct" insect — keep it that way.
- **Images** — none generated yet; see `image-assets-needed.md` for photorealistic
  prompts. Pages render labeled placeholders until images are added.

---

## Next steps (Phase 3)
1. Generate the hub hero + Metamorphosis relic images from `image-assets-needed.md`.
2. Build the next title room by copying `metamorphosis/` and replacing `data.en.js`
   (+ translations). Recommended next public-domain titles: **Dracula**,
   **The Canterbury Tales**, **Selected Myths (Bulfinch)**.
3. When a room ships, set its `status:"live"` and `href` in `titles.js`.
4. Add a `?lang=` completeness test to CI if/when a build step is introduced.
