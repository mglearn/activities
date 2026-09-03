# Nobel Prize — TCEA Curiosity Challenge

**Nobel Prize Classroom Challenges: Five Ways to Explore Big Ideas.** A pack of five
standalone classroom activities that put the *ideas, discoveries, and impact* behind the
Nobel Prizes ahead of the biographies. Ideas before names: students weigh evidence, classify
contributions, and articulate why work matters. Grade bands 6-8 and 9-12; accent `#b8860b`.

## The five challenges

1. **Who Am I?** — Four-clue guessing game across 9 laureates. Name the laureate as early as
   you can (Clue 1 = the problem, Clue 4 = the giveaway).
2. **Which Field?** — Sort 14 contribution cards into the six Nobel categories (Physics,
   Chemistry, Physiology or Medicine, Literature, Peace, Economic Sciences), including
   deliberately borderline cases.
3. **Explain It Like I'm Twelve** — Rewrite one of four prize-winning ideas so a 12-year-old
   understands it, without making it wrong.
4. **Before and After** — Read the penicillin evidence table and separate what it *directly
   supports* from what is only *associated*.
5. **The Award Committee** — Nominate your own "Curiosity Prize" using a six-part rubric,
   including one honest limitation or counterpoint.

## File map

- `index.html` — interactive landing page (loads `data/activities.js` + shared engine).
- `teacher.html` — teacher guide with answer keys, teaching notes, and standards.
- `print/student.html` — printable, ink-light student pack (no answers).
- `print/teacher-key.html` — printable answer key.
- `data/activities.js` — the pack content (`window.CURIOSITY_PACK`); single source of truth.
- `data/sources.md` — full source list and accuracy notes.
- `assets/images/` — optional images (text fallbacks shown until present).

## Sourcing

All laureates, years, and categories are verified against NobelPrize.org, the source of
record, and the pack includes the 2023-2025 laureates. See
[`data/sources.md`](data/sources.md) for the full list and accuracy notes. Keep all prose
accurate to the data — do not invent facts.

## Adding images

Images are optional; every activity works from its text description until an image exists.
To add one, follow the prompts and exact save paths in
[`../images.md`](../images.md).

## Privacy & accessibility

Runs entirely in the browser: no accounts, no logins, no tracking, and no student data
collected. Keyboard-friendly with text descriptions for visuals and print options. See
[`../privacy.html`](../privacy.html) and [`../accessibility.html`](../accessibility.html).
