# Classics Reading Room — Expansion Plan (CLT Author Bank)

**Status:** PLANNING ONLY. No rooms in this list have been built. Do the
current backlog first; then work top-to-bottom here.

## What this is

The CLT exam draws ~2/3 of its passages from an **Author Bank** of ~160
authors — not a fixed text list, so there is no single set of "texts" to
fully cover. PlotPoint currently has a room by ~27 of those ~160 authors.
This plan closes the highest-value gaps.

## Inclusion rule (strict)

An author is on this list **only if** the target work has **both**:

1. Public-domain full text on **Project Gutenberg**, and
2. Audio on **LibriVox** (or a Project Gutenberg audiobook).

If either is missing, the author is **not** listed. Every entry below was
web-verified to have both (Aug 2026). Per-room source URLs still get
re-verified at build time, as with every existing room.

## Ordering

Sorted **quickest-to-build first** — shortest / most self-contained source
text at the top. Work down the list. Grouped only for readability; the
number is the build order.

---

### Tier 1 — Quickest (short, self-contained single work)

| # | Author | Work | Type | Text (Gutenberg) | Audio (LibriVox) |
|---|--------|------|------|------------------|------------------|
| 1 | Herman Melville | Bartleby, the Scrivener | short story (RL) | #11231 | ✓ |
| 2 | Karl Marx & F. Engels | The Communist Manifesto | argument (RI) | #61 | ✓ |
| 3 | Ida B. Wells | Southern Horrors | pamphlet (RI) | #14975 | ✓ |
| 4 | Sophocles | Antigone | drama (RL) | ✓ (Jebb tr.) | ✓ |
| 5 | Oscar Wilde | The Importance of Being Earnest | comedy/drama (RL) | #844 | ✓ |
| 6 | René Descartes | Discourse on the Method | philosophy (RI) | #59 | ✓ |
| 7 | Voltaire | Candide | novella (RL) | #19942 | ✓ |
| 8 | Niccolò Machiavelli | The Prince (excerpt) | argument (RI) | #1232 | ✓ |

### Tier 1b — Mark Twain (all short stories; text + audio both verified)

Twain is already a covered CLT author in spirit, but has no PlotPoint room.
These are his short, self-contained stories — among the quickest to build.
Ordered shortest first.

| # | Work | Type | Text (Gutenberg) | Audio (LibriVox) |
|---|------|------|------------------|------------------|
| T1 | The War Prayer | prose poem / satire (RL) | #68604 (*Europe and Elsewhere*) | ✓ (in collection) |
| T2 | The Celebrated Jumping Frog of Calaveras County | tall tale (RL) | ✓ (*Sketches New and Old*) | ✓ (*The Jumping Frog*) |
| T3 | Extracts from Adam's Diary / Eve's Diary | humorous sketch (RL) | ✓ | ✓ |
| T4 | A Dog's Tale | short story (RL) | ✓ (*The $30,000 Bequest*) | ✓ (collection) |
| T5 | The £1,000,000 Bank-Note | short story (RL) | #61522 | ✓ |
| T6 | The $30,000 Bequest | short story (RL) | ✓ | ✓ |
| T7 | The Man That Corrupted Hadleyburg | long short story / novella (RL) | ✓ | ✓ |

*Twain's novels (Tom Sawyer, Huckleberry Finn, The Prince and the Pauper,
A Connecticut Yankee, Pudd'nhead Wilson) all have text + audio too, but are
long — excerpt-scope, lower priority than the stories above.*

### Tier 2 — Medium (novella / single treatise, excerpt scope)

| # | Author | Work | Type | Text (Gutenberg) | Audio (LibriVox) |
|---|--------|------|------|------------------|------------------|
| 9 | John Stuart Mill | On Liberty | argument (RI) | #34901 | ✓ |
| 10 | Fyodor Dostoevsky | Notes from Underground | novella (RL) | #600 | ✓ |
| 11 | W. E. B. Du Bois | The Souls of Black Folk (one essay) | essay (RI) | #408 | ✓ |
| 12 | Jean-Jacques Rousseau | The Social Contract (excerpt) | argument (RI) | #46333 | ✓ |
| 13 | John Locke | Second Treatise of Government (excerpt) | argument (RI) | #7370 | ✓ |
| 14 | Mary Wollstonecraft | A Vindication of the Rights of Woman (excerpt) | argument (RI) | #3420 | ✓ |
| 15 | Desiderius Erasmus | The Praise of Folly (excerpt) | satire (RI) | #9371 | ✓ |
| 16 | Thomas à Kempis | The Imitation of Christ (excerpt) | devotional (RI) | #1653 | ✓ |
| 17 | Friedrich Nietzsche | Beyond Good and Evil (excerpt) | philosophy (RI) | #4363 | ✓ |

### Tier 3 — Long (epic / large work — single-book or single-article excerpt)

| # | Author | Work | Type | Text (Gutenberg) | Audio (LibriVox) |
|---|--------|------|------|------------------|------------------|
| 18 | Homer | The Odyssey (one book) | epic (RL) | #1727 (Butler) | ✓ |
| 19 | Virgil | The Aeneid (one book) | epic (RL) | #228 (Dryden) | ✓ |
| 20 | Thomas Hobbes | Leviathan (excerpt) | argument (RI) | #3207 | ✓ |
| 21 | Thomas Aquinas | Summa Theologica (one article) | philosophy (RI) | #17611 (LV group 523) | ✓ |

---

## Notable CLT authors deliberately EXCLUDED

- **Still in copyright** (no PD full text) — would only fit the paraphrase-only
  "companion" pattern, not a full-text room: C. S. Lewis, J. R. R. Tolkien,
  George Orwell, Ernest Hemingway, John Steinbeck, Albert Camus, James Baldwin,
  Toni Morrison, Aleksandr Solzhenitsyn, Elie Wiesel, Flannery O'Connor,
  Jorge Luis Borges, Hannah Arendt.
- **Audio not yet confirmed** on LibriVox in this pass (revisit — may qualify
  later): Anna Julia Cooper (*A Voice from the South*), Francis Bacon (*Essays*),
  Olaudah Equiano (*Interesting Narrative*), *Beowulf*. Held off the list until
  both text **and** audio are verified, per the strict rule above.

## Notes for the builder

- Same 10-section, seven-language engine and PD/paraphrase discipline as the
  §B5 long-works rooms. Index-0 = correct answer; final hint contains the
  answer verbatim; proper-noun/number answers stay Latin/Western.
- RL codes for the narrative/drama entries; RI codes for argument/nonfiction.
- Add `classic: true` to each `titles.js` entry so it surfaces in the
  Classics Reading Room, plus `text: true, audio: true`.
- For long works (Tier 3, Machiavelli, Wollstonecraft, etc.) scope the room to
  a single named book/chapter/article so the paraphrase load stays reasonable.
