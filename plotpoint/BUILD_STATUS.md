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
| 3 | Remaining title rooms | 🔄 In progress — **24 rooms live** |
| 4 | CLT-canon reading room + separate `/clt/` page | ✅ Done |
| 5 | Copyrighted paraphrase-only companions | ✅ 6 live (Kindred + 5) |
| 6 | Guide pages + hub nav (Correlations · CLT · ACE) | ✅ Done |

### Live rooms (24) — all seven languages, deployed, headless-validated

**Public-domain literature (5):**
1. **The Metamorphosis** — Kafka · flagship
2. **The Canterbury Tales** — Chaucer
3. **Dracula** — Stoker
4. **Selected Myths (Bulfinch)** — Bulfinch
5. **Aesop's Fables (Selections)** — Aesop

**Philosophy & foundational texts — the CLT canon (12), public domain:**
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
Gutenberg text + LibriVox audiobook) in Enter the Story. The CLT canon (15 rooms
flagged `clt:true`, all live) also has its own **`/clt/` reading room** organized by
grade band, linking out to cltexam.com.

### Guide pages + hub navigation
- **`/correlations/`** — TEKS / ELPS / UDL 3.0 / CCSS alignment, activity-by-activity, with
  a live rooms-by-grade-band table. **`/ace/`** — generic ACE Framework explainer (usable
  with any text; SOLO map, reusable prompts, Gen AI guardrails). **`/clt/`** — CLT Reading Room.
- Hub top-right **Guides dropdown** (left of the language switcher) links all three. The old
  CLT banner box above the search was removed; the Teaching-Companion CTA now links to `/ace/`
  (previously a dead alert popup). All three guide pages accept an optional `images/hero.webp`.

### Not built (no source text / declined)
The `giver, orient, mango, martian, maus, justmercy` planned cards were **removed** (no
source text). The mature/explicit titles (Forever, MaddAddam, The Handmaid's Tale, A
Clockwork Orange, ACOMAF, Breathless, Last Night at the Telegraph Club) were **declined**
for a grades 6–12 product. Any future copyrighted build must follow the companion pattern
(paraphrase only, disclaimer, never commit the source). Short-story backlog + copyright
triage is captured in **`SHORT_STORIES_PLAN.md`**.

**Hub totals:** 24 title cards · **all 24 live** (0 "coming soon") · 15 CLT-canon rooms ·
6 copyrighted companions · faceted search · Guides dropdown · cards hidden until the user
searches/filters (keeps the front page calm).

---

## What shipped

### Hub (`/activities/plotpoint/`)
- `index.html` — hero, tagline, ACE callout, live tallies, and a searchable grid with
  **compact dropdown-checkbox facets** (grade band, genre, activity, reading stage, time,
  text rights). Cards stay hidden behind a browse prompt until a search or filter is
  applied. CLT banner links to the `/clt/` page.
- `titles.js` (`window.PLOTPOINT_TITLES`) — single source of truth for all **26** titles
  (metadata + facets + `clt` flag + live/planned status). Flip `status:"live"` + set
  `href` when a room ships.
- `plotpoint-i18n.js` — hub chrome dictionary, **7 languages** (incl. `val.*`, `clt.*`,
  `browse.*` keys).
- `clt/index.html` — CLT Reading Room: lists every `clt && live` title grouped by grade,
  links to the Classic Learning Test (cltexam.com).

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
- **Images** — see **`images4.md`** for the six newest rooms (48 hero + relic prompts) and
  `image-assets-needed.md`, `image_assets2.md`, `image3.md`, `Aesop.md` for earlier rooms.
  Pages render labeled placeholders until images are dropped in; no code changes needed.

---

## Next steps
1. Generate the outstanding images from `images4.md` (Confessions, Seneca, Douglass,
   Federalist, Cicero, Utopia — none have images yet) and the earlier image docs.
2. Have a fluent educator review the machine-assisted translations per language.
3. If any on-hold copyrighted titles are built, follow the **Kindred** pattern: paraphrase
   only, per-work disclaimer, no text reproduction, never commit the source texts.
4. Add a `?lang=` completeness + word-lock/hint consistency check to CI if a build step is
   introduced (the checks are already scripted ad hoc during each room build).
