# PlotPoint — Image Assets Needed, Part 4: the six new CLT-canon rooms

This file lists **every image** for the six CLT-canon rooms built after `image3.md` /
`image_assets2.md`: **Confessions, Letters from a Stoic (Seneca), Narrative of the Life of
Frederick Douglass, The Federalist Papers, On Friendship (Cicero), and Utopia**.

Each room needs **1 hero** + **7 relic artifacts** = **8 images**, so **48 total**.
Earlier docs listed these rooms only as *planned* (relic-room name, no per-artifact
prompts) because the rooms did not exist yet. They now exist, so the concrete prompts and
exact filenames below supersede the C1–C7 stubs in `image_assets2.md`.

Every image is **optional**: each page renders a soft labeled "Image placeholder" box at
the given path until a real file is dropped in, so rooms already work without these.

---

## Specs

**Hero images** — one per room, path `<room>/images/hero.webp`
- **Square, 1024 × 1024.** Displayed as a rounded square (~300 px) in the upper-right of
  the "Enter the Story" tab. Keep the subject roughly centered; corners may be lightly
  cropped on small screens.

**Relic artifacts** — seven per room, paths listed under each room
- **4:5 portrait, 1024 × 1280.** Displayed inside a card in the Relic Room.
- **Still-life style:** a single clearly-lit subject on a simple period-appropriate
  surface/background, soft museum lighting, shallow depth of field. It is an
  **instructional reconstruction, not an illustration** — generic and evocative, never a
  copy of a real artwork, cover, or film still.

**Format: WebP** for all. If your generator outputs PNG, drop it beside the target as
`<name>.png`, then convert and clean up:
```bash
cd activities/plotpoint
python3 - <<'PY'
import glob, os
from PIL import Image
for f in glob.glob('*/images/*.png'):
    Image.open(f).convert('RGB').save(f[:-4] + '.webp', 'WEBP', quality=84, method=6)
    os.remove(f)
PY
```

**Rules (all images):** no text, letters, logos, or watermarks; no real book cover, film
still, or identifiable real person's face; period- and place-appropriate; soft,
atmospheric lighting; muted, tasteful color. Where a historical person is implied
(Augustine, Seneca, Douglass, Cicero, More, the Founders), show them **anonymously** —
from behind, in shadow, hands only, or as objects on a table — never a recognizable face.

After finalizing a room's pictures, optionally update its `data.en.js` `meta.heroAlt` and
each `content.relic.artifacts[].* ` so alt text matches the real image (sensible defaults
are already set).

---

## 1. Confessions — Augustine · Relic Room: "The Garden of Memory"
Accent: warm dusk. Setting: late-Roman North Africa / Milan, 4th century.

**`confessions/images/hero.webp`** (square)
> Photorealistic, square. A quiet walled garden at dusk, a stone bench with an open book
> resting on it, a fig or pear tree behind, warm amber light fading to blue. No people.
> Contemplative, still, muted greens and gold.

**Relic artifacts** (4:5 still lifes):
1. `confessions/images/pears.webp` — A small cluster of unripe green pears on a dark
   wooden table at night, a few fallen on the ground; faint moonlight; a sense of youthful
   mischief and unease. No people.
2. `confessions/images/heart.webp` — A simple clay oil lamp glowing beside a rolled scroll
   on stone, symbolizing a restless, searching heart; warm flame, deep shadow.
3. `confessions/images/book.webp` — An open codex (early bound book) lying on a garden
   bench with dappled light falling across the pages, a fig tree's shadow overhead. No
   text legible.
4. `confessions/images/lamp.webp` — A single small terracotta lamp burning low on a window
   ledge at night, a mother's quiet vigil implied; soft halo of light, dark room beyond.
5. `confessions/images/memory.webp` — A vast dim vaulted stone hall receding into shadow,
   like an imagined "palace of memory," a few niches holding indistinct objects; awe and
   depth. No people.
6. `confessions/images/time.webp` — A shallow water clock or a thin trickle of sand
   between two vessels on a stone surface, light catching the falling grains; the puzzle of
   passing time.
7. `confessions/images/garden.webp` — A tranquil enclosed garden path at golden hour,
   low stone wall, a single tree, one empty bench; the setting of a turning point. No
   people.

---

## 2. Letters from a Stoic — Seneca · Relic Room: "The Letter Desk"
Accent: lamp-lit Roman study, 1st century CE.

**`seneca/images/hero.webp`** (square)
> Photorealistic, square. A Roman writing desk by lamplight: a sealed wax-stamped letter,
> a reed pen and inkwell, and an hourglass, on dark wood. Warm oil-lamp glow, deep shadow.
> No people.

**Relic artifacts** (4:5 still lifes):
1. `seneca/images/letter.webp` — A single papyrus letter, partly rolled, sealed with red
   wax, resting on a wooden desk beside a reed pen; intimate, personal.
2. `seneca/images/hourglass.webp` — An hourglass on a stone surface with warm light through
   the falling sand, a reminder of time slipping away; dark background.
3. `seneca/images/ledger.webp` — An open wax writing tablet with a stylus beside a low
   evening lamp, as if for a nightly self-review; quiet, reflective.
4. `seneca/images/bread.webp` — A plain, humble meal on a rough wooden table: a piece of
   coarse bread, a few olives, water in a simple cup; deliberate simplicity.
5. `seneca/images/anchor.webp` — A heavy iron ship's anchor resting on a stone quay with a
   calm sea beyond; steadiness against life's storms.
6. `seneca/images/rings.webp` — Two plain metal rings side by side on dark cloth, catching
   soft light; a symbol of true friendship.
7. `seneca/images/cloak.webp` — A traveler's woolen cloak and a walking staff by a doorway,
   dust on the hem; the restless wanderer who cannot outrun himself.

---

## 3. Narrative of the Life of Frederick Douglass · Relic Room: "The Path to Literacy"
Accent: 19th-century American, morning light. Show no recognizable face.

**`douglass/images/hero.webp`** (square)
> Photorealistic, square. An open child's spelling primer and a broken iron chain lying
> together on weathered wood in cool morning light; hope emerging from bondage. No people,
> no legible text.

**Relic artifacts** (4:5 still lifes):
1. `douglass/images/primer.webp` — A worn 1830s spelling book open on a table, a slate and
   chalk beside it, soft window light; the first lessons in reading. No legible text.
2. `douglass/images/orator.webp` — A small, well-thumbed leather-bound book of speeches
   standing on a plank shelf, warm light on its spine; the power of words. No legible title.
3. `douglass/images/shipyard.webp` — A Baltimore shipyard at dawn: timber, caulking tools,
   and the hull of a wooden ship under construction; skilled labor. Figures only distant
   and indistinct.
4. `douglass/images/covey.webp` — A stark barn interior with a shaft of hard light, a
   coiled rope and a wooden post; a place of conflict and a turning point. No people.
5. `douglass/images/road.webp` — A dirt road heading north at first light, a signpost
   silhouette, open country ahead; the journey toward freedom. No recognizable person.
6. `douglass/images/narrative.webp` — A quill, an inkwell, and a stack of handwritten
   pages on a plain desk in daylight; a life set down on paper. No legible text.
7. `douglass/images/chain.webp` — A heavy iron shackle and chain, one link broken open,
   on weathered wood in bright light; bondage giving way to freedom.

---

## 4. The Federalist Papers — Publius · Relic Room: "The Printer's Table"
Accent: 1787–88, candle-lit newspaper print shop. Show no recognizable faces.

**`federalist/images/hero.webp`** (square)
> Photorealistic, square. A colonial print shop table by candlelight: a wooden hand
> printing press, a quill and inkwell, and a rolled parchment tied with ribbon. Warm
> candle glow, ink-stained wood. No people, no legible text.

**Relic artifacts** (4:5 still lifes):
1. `federalist/images/publius.webp` — A single sheet on a desk signed with one flowing
   quilled signature (illegible), a pen laid across it; one voice, one name. Candlelight.
2. `federalist/images/newspaper.webp` — A folded 18th-century broadsheet newspaper on a
   wooden table with a pair of spectacles resting on it; public debate. No legible text.
3. `federalist/images/faction.webp` — Several small groups of chess-like figures or coins
   clustered apart on a board, some crowding one corner; the danger of faction. Abstract,
   no faces.
4. `federalist/images/branches.webp` — Three separate brass weights or three columns of
   equal height on a stone surface; the three branches of government.
5. `federalist/images/checks.webp` — A balance scale with counterweights on both pans held
   in equilibrium, on dark wood; ambition checking ambition.
6. `federalist/images/federalism.webp` — An old map of the early United States with faint
   dividing lines between states and a whole, a compass resting on it; power divided
   between nation and states. No legible text.
7. `federalist/images/constitution.webp` — A single rolled parchment tied with a ribbon,
   a quill beside it, warm light; the document being defended. No legible text.

---

## 5. On Friendship (Laelius de Amicitia) — Cicero · Relic Room: "Laelius's Study"
Accent: 1st-century-BCE Roman study, lamplight. Show no recognizable faces.

**`cicero/images/hero.webp`** (square)
> Photorealistic, square. A Roman study by lamplight: two hands clasped in a handshake
> over a low table, a partly-unrolled scroll, and an empty wooden chair behind. Warm,
> elegiac light; a sense of friendship and loss. No visible faces.

**Relic artifacts** (4:5 still lifes):
1. `cicero/images/dialogue.webp` — Three empty chairs drawn close together around a small
   table with a scroll, as if mid-conversation; a dialogue. Warm lamplight, no people.
2. `cicero/images/empty-chair.webp` — A single empty Roman chair beside a table with an
   extinguished lamp, soft shaft of light; the grief of a lost friend. No people.
3. `cicero/images/definition.webp` — An open scroll on a desk with a wax seal and a reed
   pen, light falling across the blank surface; a careful definition. No legible text.
4. `cicero/images/virtue-root.webp` — A sturdy old olive tree with deep visible roots in
   stony soil, warm daylight; virtue as the root of friendship.
5. `cicero/images/flatterer-mask.webp` — A theatrical Roman comedy mask with a fixed smile
   resting face-up on dark cloth, uneasy light; the flatterer's false friendliness.
6. `cicero/images/old-wine.webp` — A dusty aged amphora and a simple cup on a stone shelf
   in a cellar, warm low light; friendship valued like old wine.
7. `cicero/images/the-limit.webp` — A carved stone boundary marker at the edge of a field
   at dusk; a line even friendship must not cross. No people.

---

## 6. Utopia — Thomas More · Relic Room: "The Traveler's Chest"
Accent: Renaissance / voyage-of-discovery, 1516. Satirical touches welcome.

**`utopia/images/hero.webp`** (square)
> Photorealistic, square. A Renaissance traveler's table: an old hand-drawn map showing a
> crescent-shaped island, a battered wooden sea chest, and — incongruously — a gleaming
> golden chamber pot. Warm candlelight, a wink of satire. No people, no legible text.

**Relic artifacts** (4:5 still lifes):
1. `utopia/images/the-name.webp` — An old map fragment showing a single unnamed island
   ringed by sea, a compass rose and calipers beside it; a place that may be "no place."
   No legible text.
2. `utopia/images/travelers-account.webp` — A weathered leather sea chest, open, holding
   rolled charts and a ship's log, on planks; a traveler's report. No legible text.
3. `utopia/images/devouring-sheep.webp` — A lone sheep standing in a freshly fenced,
   empty field with a distant abandoned cottage; enclosure driving out farmers. Overcast,
   unsettling calm.
4. `utopia/images/golden-chamber-pot.webp` — A gleaming golden chamber pot sitting
   absurdly on plain straw in a humble room; gold stripped of its allure. Satirical still
   life.
5. `utopia/images/common-storehouse.webp` — A communal storehouse interior: open shelves
   and baskets of grain, bread, and produce, no locks, no coins; shared abundance. No
   people.
6. `utopia/images/shared-field.webp` — A tidy communal field at midday with tools left in
   the earth — hoes, baskets — and no overseer; shared labor and a short workday. Figures
   only distant and indistinct.
7. `utopia/images/many-altars.webp` — Several small simple altars of different plain
   designs side by side in one calm hall, soft light on each; peaceful religious
   tolerance. No people, no religious text or recognizable symbols.

---

## Checklist (48 images)

| Room | Hero | Artifacts |
|------|------|-----------|
| Confessions | `confessions/images/hero.webp` | pears, heart, book, lamp, memory, time, garden |
| Seneca | `seneca/images/hero.webp` | letter, hourglass, ledger, bread, anchor, rings, cloak |
| Douglass | `douglass/images/hero.webp` | primer, orator, shipyard, covey, road, narrative, chain |
| Federalist | `federalist/images/hero.webp` | publius, newspaper, faction, branches, checks, federalism, constitution |
| Cicero | `cicero/images/hero.webp` | dialogue, empty-chair, definition, virtue-root, flatterer-mask, old-wine, the-limit |
| Utopia | `utopia/images/hero.webp` | the-name, travelers-account, devouring-sheep, golden-chamber-pot, common-storehouse, shared-field, many-altars |

All six rooms are **live and fully functional without these images** — each missing file
simply shows a labeled placeholder. Drop images in as WebP (or PNG + convert) at the exact
paths above; no code changes are needed.
