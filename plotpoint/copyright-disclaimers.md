# PlotPoint — Copyright Disclaimers for Copyrighted-Work Rooms

Every room built for a **copyrighted** work must show an independent-companion
disclaimer. The room engine renders it automatically when `content.meta.disclaimer`
is set (a bordered callout under the header in **Enter the Story**). Public-domain
rooms do **not** set this field.

**Template** (fill the bracketed parts):
> This activity is an independent educational companion to **[TITLE]** by **[AUTHOR]**.
> Students need lawful access to the [work-type]. The activity does not reproduce or
> replace the [work-type]. It is not affiliated with or endorsed by the author or
> publisher. Original activity content is licensed under CC BY-NC 4.0. [TITLE], its
> characters, and any quoted passages remain the property of their respective copyright
> owner and are excluded from this license.

Set it in the room's `data.en.js` like:
```js
meta: {
  …,
  disclaimer: "This activity is an independent educational companion to …"
}
```

---

## Ready-to-use, per-work

### The Giver — Lois Lowry
> This activity is an independent educational companion to The Giver by Lois Lowry. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. The Giver, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### Murder on the Orient Express — Agatha Christie
> This activity is an independent educational companion to Murder on the Orient Express by Agatha Christie. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. Murder on the Orient Express, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### The House on Mango Street — Sandra Cisneros
> This activity is an independent educational companion to The House on Mango Street by Sandra Cisneros. Students need lawful access to the book. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. The House on Mango Street, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### The Martian Chronicles — Ray Bradbury
> This activity is an independent educational companion to The Martian Chronicles by Ray Bradbury. Students need lawful access to the book. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. The Martian Chronicles, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### Maus I — Art Spiegelman
> This activity is an independent educational companion to Maus I: A Survivor's Tale by Art Spiegelman. Students need lawful access to the graphic novel. The activity does not reproduce or replace the book, and it does not copy any of its artwork or panels. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Maus, its characters, artwork, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### In the Time of the Butterflies — Julia Alvarez
> This activity is an independent educational companion to In the Time of the Butterflies by Julia Alvarez. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. In the Time of the Butterflies, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### Kindred — Octavia E. Butler
> This activity is an independent educational companion to Kindred by Octavia E. Butler. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. Kindred, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### Brave New World — Aldous Huxley
> This activity is an independent educational companion to Brave New World by Aldous Huxley. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. Brave New World, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

### Just Mercy — Bryan Stevenson
> This activity is an independent educational companion to Just Mercy by Bryan Stevenson. Students need lawful access to the book. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. Just Mercy, its subjects, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.

---

## Also required for copyrighted rooms
Beyond the disclaimer, copyrighted-work rooms should:
- Set `meta.rights` to `"Copyrighted"` and add a **strengthened content-review note** in
  `meta.contentNote` (preview edition, maturity, and verify all details against the text).
- **Omit** the free `meta.gutenberg` / `meta.audio` links (those are for public-domain texts).
- Reproduce **no** text and invent **no** quotations; keep every task transformative
  (analysis, evidence-reasoning about theme/character/structure) and mark uncertain plot
  details "Needs review" so a teacher verifies them against the book.
