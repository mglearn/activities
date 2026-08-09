# PlotPoint — Roadmap & Build Reference

Single source for **what's left to build** plus the **reference a builder needs**.
Consolidates the former CLASSICS_EXPANSION_PLAN, CREATION_STORIES_PLAN,
SHORT_STORIES_PLAN, TEXAS_2026_PLAN, and BUILD_STATUS docs. For the full design
spec (ACE, the 10-section room, arcade patterns), see **`plan.md`**. For the
copyrighted-work disclaimer, see **`copyright-disclaimers.md`**. Poster prompts
for the collection are in **`posters2_images.md`**.

## Current state (2026-08)

- **101 live rooms**, all in seven languages (en + es/vi/ar/hi/ur/zh).
- **Texas 2026 §B lists — COMPLETE:** all poems (17), speeches/documents (8),
  short stories (5), scripture (4), and long works (14) built & live, plus
  `federalist78`. (SBOE-adopted June 2026 via HB 1605; implementation **no earlier
  than 2030–31**, so these are optional enrichment now, not a 2026–27 requirement.)
- **PD short-story batches — done:** ladytiger, ransom, magi, monkeyspaw, cask,
  owlcreek, bet, poe, plus yellowwallpaper, tobuildafire, aftertwenty, openwindow,
  interlopers, necklace, storyhour, and the 2026-08 batch (storyteller, boardedwindow,
  silkstockings, lotteryticket, masque, lawoflife, lastleaf, huckfinn) — all fully illustrated.
- Guide pages live: Correlations, Classics Reading Room, ACE, Analysis Posters; hub
  table has a Poster column and cards have poster chips (10 rooms mapped so far).

---

## Build reference (read before building)

### Copyright rule of thumb (US)
- **Published 1930 or earlier → public domain** (95 years; 1930 + 95 → PD on Jan 1, 2026).
  ⚠️ **The cutoff moves forward one year each Jan 1** (year − 96) — re-derive it, don't trust "1930."
  Safe as full rooms: Poe, O. Henry, Maupassant, Chopin, Stockton, London, Saki, Bierce,
  W. W. Jacobs, Gilman, etc.
- **1931 or later → treat as copyrighted** unless proven otherwise (e.g., Brave New World 1932,
  PD in 2028). When unsure, use the **companion mode** (no reproduced text; see `copyright-disclaimers.md`).
- Curated PD sources: classicshorts.com, americanliterature.com, libraryofshortstories.com,
  Project Gutenberg, LibriVox — always confirm the individual work's date/author before building.

### Translation copyright — build on a PD translation
An ancient/PD work does **not** make every English *translation* PD. Build the room on a
**public-domain translation** (all below are on Gutenberg), paraphrase in house style, link only
the PD text. A district's named modern translation is a local licensing matter — note it in `meta`.

| Work · Course | ✅ Build on this PD translation | ⛔ Avoid (copyrighted) |
|---|---|---|
| **Antigone** — Sophocles · Eng I | Jebb (1888–1900) / Storr (Loeb 1912); also Plumptre (1865) | Fitts & Fitzgerald (1939), Wyckoff (1954), Fagles (1982), Heaney, Carson |
| **Prometheus** — Goethe · Eng II | E. A. Bowring (1853) | Hamburger, Luke, other modern tr. |
| **The Necklace** — Maupassant · Eng II | Jonathan Sturges (1890s) — Texas's named edition. **Built:** `necklace` | modern anthology re-translations |
| **The Death of Ivan Ilyich** — Tolstoy · Eng IV | R. Nisbet Bain (1890s); early Maude printings (pre-1930) | Pevear & Volokhonsky, Edmonds |
| **The Divine Comedy** — Dante · Eng IV | Cary (1814), Longfellow (1867), or Norton (prose, 1891–92) | Ciardi, Mandelbaum, Hollander, Pinsky, Musa, Esolen, James |
| **Democracy in America** — Tocqueville · Eng III | Henry Reeve (1835–40) rev. Francis Bowen (1862) | Lawrence/Mayer, Mansfield & Winthrop, Goldhammer |
| *Scripture:* Psalm 23 · Beatitudes · Ecclesiastes 3 (**KJV**), Lamentations 3 (**JPS 1917**) | the named translations are PD; frame as literature | modern Bibles (NIV, ESV, NRSV…) |

If a translated work isn't in this table, apply the same rule (pre-1930 / Gutenberg PD translation).

### Standards & standing review
- **TEKS:** English I–IV at 19 TAC Ch. 110, Subch. C — §110.36 (I), §110.37 (II), §110.38 (III),
  §110.39 (IV), adopted 2017. **ELPS:** 19 TAC §74.4. Rooms cite standards as "aligned to, not
  reproduced from," marked *Needs review* for local confirmation.
- **Standing local steps (not build gates):** (1) each district confirms exact course adoption +
  TEKS/ELPS against its own scope-and-sequence and the specific translation/edition; (2) the
  machine-assisted translations (6 non-English packs per room) need **fluent-educator review**
  before high-stakes use. Structural parity is machine-verified at build; linguistic sign-off is human.

### Room-build recipe
Copy an existing room (e.g., `cask/`) → replace `data.en.js` (10 sections; facts verified
against the PD text; **no reproduced passages**) → structural/render test → **6 translation
packs** (es/vi/ar/hi/ur/zh; reference a sibling room's `lang/*`) → parity check → add a
`titles.js` card (`genre`, grade tag; `classic: true` for Classics-room works; `text/audio` flags)
→ commit → deploy → poll 200 → add hero + 7 relic image prompts. Conventions: **index-0 = correct
answer**; word/digit locks' final hint contains the answer verbatim; proper-noun/number answers
stay Latin/Western; arcade `card.bucket` values must equal the bucket **ids** (do not translate them).

---

## Queue A — Classics / CLT Author-Bank expansion

CLT draws ~2/3 of passages from an ~160-author **Author Bank** (not a fixed text list);
PlotPoint covers ~27. Every entry below is web-verified (Aug 2026) to have **both** PD Gutenberg
text **and** LibriVox/PG audio. **Quickest-to-build first.** Add `classic: true` so they surface
in the Classics Reading Room.

**Tier 1 — quickest (short, self-contained):**

| # | Author | Work | Type | Text | Audio |
|---|--------|------|------|------|-------|
| 1 | Herman Melville | Bartleby, the Scrivener | short story (RL) | #11231 | ✓ |
| 2 | Marx & Engels | The Communist Manifesto | argument (RI) | #61 | ✓ |
| 3 | Ida B. Wells | Southern Horrors | pamphlet (RI) | #14975 | ✓ |
| 4 | Sophocles | Antigone | drama (RL) | Jebb tr. | ✓ |
| 5 | Oscar Wilde | The Importance of Being Earnest | comedy (RL) | #844 | ✓ |
| 6 | Descartes | Discourse on the Method | philosophy (RI) | #59 | ✓ |
| 7 | Voltaire | Candide | novella (RL) | #19942 | ✓ |
| 8 | Machiavelli | The Prince (excerpt) | argument (RI) | #1232 | ✓ |

**Tier 1b — Mark Twain (short stories, quickest first):** T1 The War Prayer (#68604) · T2 The
Celebrated Jumping Frog · T3 Extracts from Adam's/Eve's Diary · T4 A Dog's Tale · T5 The £1,000,000
Bank-Note (#61522) · T6 The $30,000 Bequest · T7 The Man That Corrupted Hadleyburg. **Novels
(excerpt-scope, lower priority):** T8 Adventures of Huckleberry Finn (#76 — **built** as `huckfinn`),
T9 A Connecticut Yankee (#86); also Tom Sawyer, The Prince and the Pauper, Pudd'nhead Wilson.

**Tier 2 — medium (excerpt scope):** Mill *On Liberty* (#34901) · Dostoevsky *Notes from Underground*
(#600) · Du Bois *Souls of Black Folk* one essay (#408) · Rousseau *Social Contract* (#46333) · Locke
*Second Treatise* (#7370) · Wollstonecraft *Vindication of the Rights of Woman* (#3420) · Erasmus
*Praise of Folly* (#9371) · à Kempis *Imitation of Christ* (#1653) · Nietzsche *Beyond Good and Evil* (#4363).

**Tier 3 — long (single book/article excerpt):** Homer *Odyssey* (#1727) · Virgil *Aeneid* (#228) ·
Hobbes *Leviathan* (#3207) · Aquinas *Summa Theologica* one article (#17611).

**Excluded — still in copyright** (companion-mode only, no full-text room): C. S. Lewis, Tolkien,
Orwell, Hemingway, Steinbeck, Camus, Baldwin, Morrison, Solzhenitsyn, Wiesel, O'Connor, Borges, Arendt.
**Audio unconfirmed (revisit):** Anna Julia Cooper, Francis Bacon *Essays*, Equiano, *Beowulf*.

---

## Queue B — More public-domain short stories

The named PD short-story backlog is **all built**. Remaining named items are six **copyrighted**
middle-school companions (Thank You M'am; The Medicine Bag; The Scholarship Jacket; The Treasure of
Lemon Brown; Stop the Sun; Born Worker) — **on hold**: PD-only direction unless the user supplies
lawful copies for fact-checking (kept only in `copyrighted_texts_do_not_upload/`, never committed).

**Next PD candidates (unbuilt, smallest-first):** Frank Stockton *The Griffin and the Minor Canon* ·
Hawthorne *Dr. Heidegger's Experiment* · Maupassant *The Piece of String* · Kate Chopin *The Storm* /
*Désirée's Baby* · Sarah Orne Jewett · Stephen Crane *The Bride Comes to Yellow Sky* · Bret Harte
*The Outcasts of Poker Flat* · Twain shorts (see Queue A). Verify PD + Gutenberg + LibriVox before building.

---

## Queue C — Creation Stories (comparative cosmogony enrichment)

Comparative **world-mythology** cluster — how cultures explain origins **as literature** (narrative,
archetype, symbol, structure, cultural context), never "which is true." Extends `myths`, `eden`, and
the scripture rooms. Not a Texas required item.

**Guardrails (read first):** (1) neutral literary/comparative frame (reuse the scripture pattern:
"studied as literature" `meta` note, non-devotional, content-review flag); (2) frame as *comparative
world mythology* to avoid the evolution/creationism optics; (3) **Indigenous/oral sacred traditions —
HOLD** unless community-vetted sources exist (colonial ethnography is not authoritative); (4)
translation copyright — build on pre-1930/Gutenberg PD translations.

| Room idea | Culture | PD source | Status |
|---|---|---|---|
| Genesis 1 — "In the Beginning" | Hebrew | KJV | ⭐ pilot — pairs with `eden` |
| Enuma Elish | Babylonian | L. W. King (1902) | ⭐ pilot |
| Völuspá / Prose Edda | Norse | Bellows (1923) / Brodeur (1916) | ⭐ pilot |
| Rig Veda 10.129 (Nasadiya Sukta) | Vedic/Hindu | Griffith (1896) | ⭐ pilot (9–12) |
| Hesiod's Theogony | Greek | Evelyn-White (1914) | candidate |
| Pangu & Nüwa | Chinese | Werner (1922) | candidate |
| Ovid, Metamorphoses I | Roman | Golding (1567) | candidate |
| Prometheus & Pandora | Greek | Hesiod, Works and Days | candidate — cross-links `prometheus`, `frankenstein` |
| Popol Vuh | Maya | older PD tr. only | ⚠ build-with-care (cultural review) |
| Egyptian (Atum / primeval mound) | Egyptian | Budge (early 1900s) | ⚠ build-with-care (dated scholarship) |
| Indigenous N. American / Aboriginal | various | — | ⛔ hold |

**Signature capstone — "How the World Began: A Comparative Cosmogony"** with a genuinely new
arcade: sort creation motifs by archetype — chaos→order · cosmic egg · world-from-a-body · divine
word/ex nihilo · the unknowable origin · emergence/earth-diver. *Extend*: "identify the archetype,
then write your own origin story using it." Add a `creation`/`mythology` facet.

**Sequencing:** pilot 4 + capstone → candidates (Theogony, Pangu, Ovid, Prometheus) → build-with-care
(Popol Vuh, Egyptian) → hold (Indigenous). **Open questions for the user:** standalone rooms vs. a
cluster+facet vs. capstone-first; confirm the neutral framing for districts; Popol Vuh/Egyptian now
or hold; grade banding (most myths 6–9; Nasadiya + capstone 9–12).
