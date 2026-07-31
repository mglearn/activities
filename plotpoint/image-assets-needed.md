# PlotPoint — Image Assets Needed

This file lists every image the built pages reference, with a ready-to-use
**photorealistic generation prompt**, target dimensions, and the exact file path.

**Rules for all images**
- No text, logos, watermarks, or signatures baked into the image (UI supplies all text).
- Never reproduce a copyrighted book cover, film still, or a specific published illustration. Relic artifacts are **instructional reconstructions** — generic, period-appropriate objects, not artwork copied from any edition.
- Neutral, uncluttered backgrounds; soft, even "museum" or editorial lighting.
- Save as optimized PNG (or WebP) at the size given. Every image is **optional**: the pages render a labeled placeholder if a file is missing, so the activity works without them — but photos make it far stronger.
- Accessible `alt` text is already provided in the code; the suggested alt below is for reference.

Legend: 🟢 = referenced by a live page today · ⚪ = template for future title rooms.

---

## 1. Hub hero 🟢

| Field | Value |
|---|---|
| **Path** | `activities/plotpoint/assets/plotpoint_hero.png` |
| **Also used as** | Open Graph share image (`og:image`) |
| **Size** | 1600 × 720 px (≈ 20:9), safe margin on the **left third** (dark gradient overlays the left where the title sits) |
| **Alt (reference)** | "PlotPoint — a literature learning arcade for grades 6–12." |

**Photorealistic prompt**
> Photorealistic editorial still-life, wide cinematic 20:9 banner. A warm wooden library table shot from a slightly high angle. On the right two-thirds: an open hardcover book with blank cream pages, beside it a brass magnifying glass, a small vintage brass key, three worn wooden game tokens, and a folded paper map — arranged like clues in an investigation. Soft golden window light from the right, gentle shadows, shallow depth of field. Rich but calm color palette of deep indigo-navy shadows and warm amber highlights. The left third is darker and less detailed to leave room for a title overlay. Mature, literary, inviting mood — suitable for middle and high school. No text, no lettering, no logos, no faces.

---

## 2. The Metamorphosis — Relic Room "Gregor's Room" 🟢

Seven artifacts. **Style spec for all seven** (append to each prompt):
> Photorealistic museum still-life of a single object, centered, on a soft neutral gray-taupe seamless background. Even, soft studio lighting, subtle shadow beneath. Period-appropriate to a modest lower-middle-class Central European apartment around 1912. Slightly aged, real, tactile — an instructional reconstruction, not an illustration. Square-ish framing. No text, no labels, no people, no book cover.

| # | Path | Object | Suggested alt |
|---|---|---|---|
| 1 | `metamorphosis/images/door.png` | Interior bedroom door | "A closed interior bedroom door with an old lock." |
| 2 | `metamorphosis/images/picture.png` | Framed magazine cut-out | "A small handmade wooden picture frame on a wall." |
| 3 | `metamorphosis/images/apple.png` | A single apple | "A single red apple resting on a wooden floor." |
| 4 | `metamorphosis/images/samplecase.png` | Traveling salesman's sample case | "A worn leather travel sample case." |
| 5 | `metamorphosis/images/food.png` | Tray of food | "A tray holding both fresh food and spoiled scraps." |
| 6 | `metamorphosis/images/violin.png` | A violin | "A violin resting on a chair." |
| 7 | `metamorphosis/images/clock.png` | Wind-up alarm clock | "An old wind-up alarm clock." |

- **Size for all seven:** 1024 × 1280 px (4:5 portrait; the frame crops to fill).

**Per-object prompts** (add the style spec above to each):

1. **door.png** — "A plain, slightly worn wooden interior bedroom door, painted a faded off-white, closed, with an old brass mortise lock and a simple handle. Seen straight-on from inside a dim room, a thin line of warm light leaking under it."
2. **picture.png** — "A small handmade wooden picture frame hung on a papered wall; inside, an indistinct sepia magazine cut-out of a well-dressed figure, deliberately blurred and generic so no specific artwork is legible. Slightly crooked, lovingly kept."
3. **apple.png** — "A single ripe red apple resting on a scuffed hardwood floor, one small bruise on its skin, soft shadow, a faint sense of having been thrown and come to rest."
4. **samplecase.png** — "A worn brown leather traveling salesman's sample case with brass buckles and a sturdy handle, closed, scuffed from years of trains and travel, standing upright."
5. **food.png** — "A shallow enamel tray on a wooden floor holding a small pile of fresh bread and milk on one side and wilted, spoiled vegetable scraps on the other — a quiet contrast of fresh and rotting."
6. **violin.png** — "A modest, softly aged wooden violin with its bow, resting on the seat of a plain wooden chair, warm light catching the varnish."
7. **clock.png** — "A small early-1900s wind-up twin-bell alarm clock in tarnished nickel, sitting on a bedside table, hands and face plain and generic, softly lit."

---

## 3. Template for future title rooms ⚪

Each new title room (`activities/plotpoint/<id>/`) needs the same two kinds of image. Reuse the specs above, swapping the subject to fit the book's Relic Room. Copyright reminder: **never** depict a real book cover, movie still, or a named real person — use generic, period- and place-appropriate objects labeled as instructional reconstructions.

**A. Optional room hero** — `<id>/images/hero.png`, 1600 × 720 px
> Photorealistic editorial still-life evoking the book's world through generic objects and setting (no cover art, no faces of real people), warm cinematic light, darker left third for title overlay, no text.

**B. Relic artifacts (5–7)** — `<id>/images/<artifact-id>.png`, 1024 × 1280 px, using the museum still-life style spec from §2.

Per-title artifact subject cues (all as generic instructional reconstructions):
- **Selected Myths (Bulfinch)** — a laurel wreath, a clay amphora, a bronze coin, a lyre, a torch, a winged sandal, a hero's helmet.
- **Murder on the Orient Express** — a punched train ticket, a pocket watch, a leather valise, a handwritten note fragment, a passenger manifest page, a compartment key.
- **The Martian Chronicles** — a cracked colonist's helmet, a dusty radio transmitter, an abandoned ration tin, a faded photograph, a rover part, a survey map.
- **Dracula** — a ship's logbook, a nautical chart, a wax-sealed letter, a newspaper fragment, a doctor's notebook, a brass compass.
- **The Canterbury Tales** — a pilgrim's staff, a leather satchel, a pewter badge, a wooden bowl, a rolled parchment, a set of traveling spurs.
- **The House on Mango Street** — a hand-drawn neighborhood map, a pair of worn shoes, a house key, a window with a potted plant, a bicycle, a family photo (generic).
- **Kindred / In the Time of the Butterflies / Just Mercy / Maus I / Brave New World / The Giver** — build artifact lists from each room's Relic Room concept in `plan.md`, keeping every object generic and non-copyrighted. **Maus I and Just Mercy: content and copyright review required before generating any historically sensitive imagery.**

---

## Generation & optimization notes
- Suggested tools: any photorealistic image model. Generate at the stated size (or larger, then downscale).
- After export, run through an optimizer (e.g. `oxipng`, `squoosh`) to keep pages fast and fully offline-capable.
- Keep each room's images inside that room's `images/` folder so rooms stay self-contained.
- Re-check the `alt` text in the room's `data.en.js` (`artifacts[].alt`) matches the final image.
