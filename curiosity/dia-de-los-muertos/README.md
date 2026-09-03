# Día de los Muertos — Curiosity Challenge Pack

**Día de los Muertos: Five Classroom Activities for Culture, Symbols, and Story.** A set of five short, respectful, source-checked activities that explore Día de los Muertos as a **living tradition of remembrance** — for grades 3–12. Slug: `dia-de-los-muertos` · Accent: `#a8327d`.

## The five challenges

1. **Symbol Detective** — sort 12 ofrenda objects by the main role each plays (guides spirits / nourishes / remembers a person / represents the cycle).
2. **Map the Tradition** — a notice-and-wonder map task comparing regional practices (Michoacán/Pátzcuaro, Oaxaca, Mexico City/Mixquic, U.S. diaspora). No single right answer.
3. **Fact or Misconception?** — sort 13 statements as Supported, Misconception, or Depends on community or family. The myth-busting core of the pack.
4. **Pattern & Design Hunt** — a notice-and-wonder look at a papel picado banner for design principles (repetition, symmetry, focal point, color, symbol).
5. **Memory Story** — an open creation task: a short remembrance for a subject of the student's choice.

## File map

- `index.html` — the interactive activities page (loads the shared engine + data).
- `teacher.html` — teacher guide: purpose, cultural framing, at-a-glance table, answer keys, teaching moves, differentiation, connection prompts, sources, standards.
- `print/student.html` — printable, ink-light student pack (no answers).
- `print/teacher-key.html` — printable answer key and teaching notes.
- `data/activities.js` — the pack content (`window.CURIOSITY_PACK`); source of truth for all activities.
- `data/sources.md` — full source list.
- `assets/images/` — pack images (map, papel picado); optional.
- Shared styles: `../assets/css/curiosity.css` · shared engine: `../assets/js/engine.js`.

## Sourcing

All content is verified against museum, university, and cultural-institution references — UNESCO, the Smithsonian, the National Museum of Mexican Art, and others. See [`data/sources.md`](data/sources.md) for the specific pages behind each answer. Do not invent facts; keep content accurate to the data.

## Cultural guardrails

These must stay visible in the teacher guide and notes:

- **Living tradition, not "Mexican Halloween."** It is an act of welcome and remembrance, not a spooky costume theme or a version of trick-or-treating.
- **Show regional and family variation.** No two altars are identical; families add or omit items for personal, regional, and religious reasons. Avoid any "all Mexicans do X" generalization. The genuine "Depends on community or family" category exists to honor this variation rather than flatten it.
- **Never require personal grief.** In the Memory Story, fictional and historical subjects are always welcome; students are never required to disclose a personal loss.

## Adding images

Image guidance and prompts live in [`../images.md`](../images.md). Follow the guardrails there: avoid text/lettering, avoid depicting real people, and never copy sacred or personal imagery. The map and papel picado activities also ship a written description so they work fully on paper if no image is present.

## Privacy & accessibility

No accounts, no logins, no student data collected — everything runs in the browser. See [`../privacy.html`](../privacy.html) and [`../accessibility.html`](../accessibility.html). Pages are keyboard-friendly, high-contrast, and screen-reader labeled.
