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

**Fourth Texas long work — The Tragedy of Julius Caesar (2026-08-07).** `caesar` (Shakespeare, PD)
is the fourth §B5 long work and the first **play** in the long-work batch. Full seven-language build:
`data.en.js` + all six `lang/*.js` packs + `index.html` + `policy.html` + `titles.js` card + image
prompts. Per §D4, kept all 10 sections but re-cast toward **rhetoric**: the arcade is *"Reason or
Emotion? Brutus vs. Antony"* (sort funeral-speech moves by logos/ethos vs. pathos); relic is The
Roman Archive (Soothsayer's warning, forged letters, omens, the Capitol daggers, the will, the
bloody mantle, Caesar's ghost). Validated: `node -c` on all 7 JS files; **183/183 UI-key parity**;
11 vocab (contexts contain their term); 6 locks (answers "15"/Brutus/Cassius preserved and present
in each pack's final hint); balanced 4/4 arcade with bucket/card order preserved; 5 MCQ + 3 short +
paragraph + ACE; index-0 answers; meta URLs + ccss verbatim. Verified sources: Gutenberg **#1120** +
LibriVox **version 1** (complete dramatic reading). Paraphrase-only (reproduces no lines of the
play). Added a `val.drama` genre label to `plotpoint-i18n.js` in all 7 languages (also benefits the
existing `job` room). Mature-content note (assassination, battlefield violence, suicides) in the
Teacher Guide. Awaiting image assets, commit/deploy, and production HTTP verification.

**Fifth Texas long work — The Scarlet Letter (2026-08-07).** `scarlet` (Nathaniel Hawthorne, PD) is
the fifth §B5 long work. Full seven-language build: `data.en.js` + all six `lang/*.js` packs +
`index.html` + `policy.html` + `titles.js` card + image prompts. The Scarlet Archive relic room
(the shifting "A", the three scaffold scenes, the wild rosebush, Pearl, the midnight meteor,
Chillingworth's medicines, the chest mark); arcade *"Open Shame or Hidden Guilt?"* (Hester's public
penance vs. Dimmesdale's concealment). Validated: `node -c` on all 7 JS files; **183/183 UI-key
parity**; 11 vocab (contexts contain their term); 6 locks (answers "3"/"A"/Pearl preserved and
present in each pack's final hint — note the single-letter word-lock "A"); balanced 4/4 arcade with
bucket/card order preserved; 5 MCQ + 3 short + paragraph + ACE; index-0 answers; meta URLs + ccss
verbatim. Verified sources: Gutenberg **#25344** + LibriVox **version 1** (complete recording).
Extend task compares Hester's scaffold to modern online public-shaming. Paraphrase-only. Mature-theme
note (adultery, non-graphic; public shaming; revenge) in the Teacher Guide. Awaiting image assets,
commit/deploy, and production HTTP verification.

**Sixth Texas long work — Hamlet (2026-08-07).** `hamlet` (Shakespeare, PD) is the sixth §B5 long
work and the second play. Full seven-language build: `data.en.js` + all six `lang/*.js` packs +
`index.html` + `policy.html` + `titles.js` card + image prompts. The Elsinore Archive relic room
(the ghost, the mousetrap play, the arras/Polonius, Ophelia's flowers and drowning, Yorick's skull,
the England letters, the poisoned foil and cup); arcade *"Real Madness or an Act?"* (feigned antic
disposition vs. genuine breakdown); extend task is a modern soliloquy. Validated: `node -c` on all 7
JS files; **183/183 UI-key parity**; 11 vocab (contexts contain their term); 6 locks (answers
"2"/Denmark/Claudius preserved and present in each pack's final hint); balanced 4/4 arcade with
bucket/card order preserved; 5 MCQ + 3 short + paragraph + ACE; index-0 answers; meta URLs + ccss
verbatim. Verified sources: Gutenberg **#1122** + LibriVox **version 1** (complete). Paraphrase-only
(reproduces no lines of the play). Mature-content note (murder, madness, a likely-suicide drowning,
many deaths) in the Teacher Guide. Awaiting image assets, commit/deploy, and production HTTP
verification.

**Seventh Texas long work — Great Expectations (2026-08-07).** `greatex` (Charles Dickens, PD),
Eng I. Full seven-language build. The Expectations Archive relic room (marsh convict/file, Satis
House, Estella, the anonymous fortune, Joe's forge, benefactor revealed, Pip's humbling); arcade
*"True Worth or Mere Gentility?"*; bildungsroman focus on class, ambition, gratitude. Validated:
`node -c` on all 7 JS; **183/183 UI-key parity**; 11 vocab (contexts contain their term — es
`reclusa` and zh term-order fixed post-generation); 6 locks (answers "3"/Havisham/Magwitch in each
pack's final hint); balanced 4/4 arcade; 5 MCQ + 3 short + paragraph + ACE; meta URLs + ccss
verbatim. Verified sources: Gutenberg **#1400** + LibriVox **version 1**. Paraphrase-only.
Awaiting image assets, commit/deploy, HTTP verification.

**Eighth Texas long work — Walden (2026-08-07).** `walden` (Henry David Thoreau, PD), Eng IV; the
first **nonfiction** long work and the first §B5 room using RI (informational) CCSS codes.
Excerpt-scoped to Walden's core chapters (Economy; Where I Lived; Solitude; Conclusion) — noted in
`meta` and Teacher Guide. Full seven-language build. The Walden Pond Archive relic room (cabin,
bean-field, pond, borrowed axe, cost ledger, railroad, journal/"different drummer"); arcade
*"Necessity or Luxury?"* built from the Economy argument; extend task = design a personal
simple-living experiment. Validated: `node -c` on all 7 JS; **183/183 UI-key parity**; 11 vocab
(contexts contain their term); 6 locks (answers "2"/Walden/Concord in each pack's final hint);
balanced 4/4 arcade; 5 MCQ + 3 short + paragraph + ACE; meta URLs + ccss (RI.*) verbatim. Verified
sources: Gutenberg **#205** (also contains 'Civil Disobedience' — noted) + LibriVox. Nonfiction, so
`spoiler:"none"`. Paraphrase-only. Awaiting image assets, commit/deploy, HTTP verification.

**Ninth Texas long work — The Autobiography of Benjamin Franklin (2026-08-07).** `franklin`
(Benjamin Franklin, PD), Eng IV; nonfiction (RI codes), **scoped to Part One** (Boston boyhood
through founding the Philadelphia print shop) — noted in `meta`/Teacher Guide (the 13-virtues chart
is Part Two, flagged out-of-scope). Full seven-language build. The Printer's Archive relic room
(three rolls, printing press, Silence Dogood letters, self-taught books, the Junto, frugality
ledger, letter-to-his-son frame); arcade *"Road to Success, or Path to Ruin?"*; extend = a
Franklin-style self-improvement plan. Validated: `node -c` all 7 JS; **183/183 UI parity**; 11 vocab
(contexts contain term); 6 locks (answers "17"/Philadelphia/Dogood in each pack's final hint);
balanced 4/4 arcade; meta URLs + RI ccss verbatim. Sources: Gutenberg **#148** + LibriVox.
Paraphrase-only. Awaiting image assets, commit/deploy, HTTP verification.
**Tenth Texas long work — Democracy in America, Vol. 1 (2026-08-07).** `tocqueville` (Alexis de
Tocqueville, PD; **Henry Reeve translation** — noted in `meta`/policy/Teacher Guide), Eng III;
nonfiction political philosophy (RI codes), excerpt-scoped to Volume 1's core themes. Full
seven-language build. The American Notebook Archive relic room (equality of conditions, the New
England township, voluntary associations, the jury, tyranny of the majority, the free press, the
three-races chapter); arcade *"Strength of Democracy, or Danger?"*; extend = a Tocqueville-style
observation of modern democracy. **Word-lock nuance:** lock 3's answer is the common English word
"conditions" (not a proper noun), so translators kept it in Latin across prompt/evidence/hints so it
stays typable in every language. Validated: `node -c` all 7 JS; **183/183 UI parity**; 11 vocab
(contexts contain term); 6 locks (answers "3"/Tocqueville/conditions in each pack's final hint);
balanced 4/4 arcade; meta URLs + RI ccss verbatim. Sources: Gutenberg **#815** (Reeve tr., Vol. 1) +
LibriVox Vol. I. Includes the three-races chapter (slavery / Native removal) — Teacher Guide flags
teaching it critically. Paraphrase-only. Awaiting image assets, commit/deploy, HTTP verification.
**Eleventh Texas long work — Up from Slavery (2026-08-07).** `upslavery` (Booker T. Washington, PD),
Eng IV; nonfiction autobiography (RI codes). Full seven-language build. The Tuskegee Archive relic
room (Virginia plantation, first spelling book, salt-furnace/coal-mine labor, the broom/sweeping
test, General Armstrong and Hampton, the Tuskegee bricks, "cast down your bucket"); arcade *"A Help
on the Way Up, or an Obstacle Overcome?"*; extend engages the Washington–Du Bois debate. Validated:
`node -c` all 7 JS; **183/183 UI parity**; 11 vocab (contexts contain term); 6 locks (answers
"500"/Tuskegee/Hampton in each pack's final hint); balanced 4/4 arcade; meta URLs + RI ccss verbatim.
Sources: Gutenberg **#2376** + LibriVox. Teacher Guide flags teaching the self-help-vs-civil-rights
debate critically. Paraphrase-only. (Built across two sessions: `es` first, other five regenerated
after a session-limit interruption.) Awaiting image assets, commit/deploy, HTTP verification.

**Deployment (2026-08-07).** Pushed commits `cb12de4..54123a1` to `origin/main` (GitHub Pages): the
ten seven-language long-work rooms built this run **plus generated artwork** for 14 rooms (7 long
works: Frankenstein, Pride and Prejudice, Gatsby, Julius Caesar, Scarlet Letter, Hamlet, Great
Expectations; 7 PD short stories). Walden, Franklin, and Tocqueville render labeled placeholders
until their art is generated. Up from Slavery deploys with this commit.

**Twelfth Texas long work — The Death of Ivan Ilyich (2026-08-07).** `ivanilyich` (Leo Tolstoy, PD),
Eng IV; novella (RL codes). Full seven-language build. The Golovin Archive relic room (opening
funeral, career ladder, the curtain-hanging fall, the cold doctors, Gerasim, the "all men are
mortal" syllogism, the final light); arcade *"Authentic or Artificial?"*; extend is a reflective
"life worth living" piece. **Source note:** no standalone English text on Project Gutenberg, so the
read-link points to **Wikisource** (Maude translation) — `ui.enter.read` overridden to "(Wikisource)"
and `meta.gutenberg` holds the Wikisource URL; audio is LibriVox (Garnett translation). The two are
different PD translations — flagged in the Teacher Guide. Validated: `node -c` all 7 JS; **183/183 UI
parity**; 11 vocab (contexts contain term); 6 locks (answers "12"/Golovin/Gerasim in each pack's
final hint — both word answers are proper nouns, no cross-language typing issue); balanced 4/4
arcade; meta URLs + RL ccss verbatim. Paraphrase-only. Awaiting image assets, commit/deploy, HTTP
verification.
**Thirteenth Texas long work — The Divine Comedy (2026-08-07).** `dante` (Dante Alighieri, PD;
**Longfellow translation**), Eng IV; epic poem (RL codes). Whole-poem overview room. The Pilgrim's
Archive relic room (the dark wood, the Gate of Hell, Virgil, contrapasso, the mountain of Purgatory,
Beatrice, the vision of God); arcade *"Descent into Hell, or Ascent toward God?"*; extend =
design-a-modern-contrapasso. Validated: `node -c` all 7 JS; **183/183 UI parity**; 11 vocab
(contexts contain term, incl. loanwords contrapasso/terza rima); 6 locks (answers "3"/Virgil/Beatrice
in each pack's final hint — proper-noun answers, no cross-language typing issue); balanced 4/4
arcade; meta URLs + RL ccss verbatim. Sources: Gutenberg **#1004** (Longfellow, complete) + LibriVox.
Paraphrase-only; medieval religious epic taught in literary/cultural context. Awaiting image assets,
commit/deploy, HTTP verification.
**Fourteenth Texas long work — Hamlet and His Problems (2026-08-07).** `hamletproblems` (T. S.
Eliot, U.S. PD since 1919), Eng IV; **literary criticism** (RI codes), grades 11–12; pairs with the
`hamlet` room. Full seven-language build. The Critic's Desk relic room (the essay itself, the
objective correlative, the "artistic failure" claim, emotion-in-excess, "the Mona Lisa of
literature," the older sources, impersonal art); arcade *"Eliot's Argument, or a Challenge to It?"*
(sort Eliot's claims vs. reasonable counterarguments); extend = apply the objective correlative to a
chosen work. **Source note:** read-link is the **Wikisource** essay page (also on Gutenberg #57795 in
The Sacred Wood); `ui.enter.read` = "(Wikisource)". **No audio** — no verified single-work LibriVox
recording, so `meta.audio` is omitted and the engine shows an honest "not available" state.
Validated: `node -c` all 7 JS; **183/183 UI parity**; 11 vocab (contexts contain term); 6 locks
(answers "1919"/correlative/Shakespeare in each pack's final hint — "correlative" kept in English as a
term of art so it stays typable); balanced 4/4 arcade; meta URL + RI ccss verbatim. Presents Eliot's
thesis as an argument to evaluate, not a settled verdict. Paraphrase-only.

### §B5 long works: COMPLETE — 14 of 14 built and deployed (2026-08-07)

All fourteen Texas 2026 §B5 long works are now live, seven-language, and pushed to production
(GitHub Pages). Frankenstein (pre-existing) + the thirteen built this run: Pride and Prejudice, The
Great Gatsby, Julius Caesar, The Scarlet Letter, Hamlet, Great Expectations, Walden, The
Autobiography of Benjamin Franklin (Part One), Democracy in America (Vol. 1), Up from Slavery, The
Death of Ivan Ilyich, The Divine Comedy, and Hamlet and His Problems. Engine `shuffle()` fixed to
true Fisher–Yates; `val.drama` label added in all seven languages. **Outstanding:** image assets for
Walden, Franklin, Democracy in America, Up from Slavery, Ivan Ilyich, The Divine Comedy, and Hamlet
and His Problems (image prompts are in `LONG_WORKS_IMAGES.md`; rooms render labeled placeholders
until assets land); fluent-educator review of the machine-assisted translations.

**Federalist No. 78 (2026-08-08).** The §H item is **built** as its own document room `federalist78`
(Hamilton, PD; grades 11–12), cross-linked to the `federalist` room. Full seven-language build. The
Judiciary Archive relic room (the Federalist Papers, "least dangerous branch," judicial review, life
tenure, the Constitution as supreme law, courts as guardians of rights, Marbury v. Madison); arcade
*"Hamilton's Argument, or an Anti-Federalist Worry?"*; extend = argue whether courts should be able
to overturn a law. Validated: `node -c` all 7 JS; 183/183 UI parity; 6 locks (answers
"85"/Hamilton/Publius in each pack's final hint); balanced 4/4 arcade; RI ccss verbatim. Text/audio
via the complete Federalist Papers (Gutenberg #1404 + LibriVox). Image prompts in
`LONG_WORKS_IMAGES.md`; awaiting art. **This closes the last open §B/§H content item.**

**Hub table upgrade (2026-08-08).** The "View all as a table" view is now fully sortable (click a
header: 1st ascending, 2nd descending; keyboard + `aria-sort`), with new **Author**, **Text**, and
**Audio** columns. Per-room text/audio availability is derived from each room's `data.en.js` meta
(gutenberg = text; audio/aiAudio = audio) and stored as `text`/`audio` flags on every `titles.js`
entry. The three new headers are localized in all seven languages (`collection.th.*` in
`plotpoint-i18n.js`).

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
