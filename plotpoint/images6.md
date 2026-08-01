# PlotPoint — Image Assets Needed, Part 6: the last 8 rooms without images

As of this file, **23 of 31 live rooms have full images**. This doc covers the **8 that
still need them**: **Kindred** (built before the image docs existed) and the **7
public-domain short stories**. Each room needs **1 hero + 7 relic artifacts = 8 images**,
so **64 total**.

Every image is **optional** — each page renders a labeled "Image placeholder" box at the
given path until a real file is dropped in, so all 8 rooms already work without these.

---

## Specs (unchanged from earlier image docs)

**Hero** — `<room>/images/hero.webp` — **square, 1024 × 1024**, subject centered.
**Relic artifacts** — paths below — **4:5 portrait, 1024 × 1280**, single clearly-lit
subject, soft museum lighting, shallow depth of field.
**Format: WebP.** PNG → convert:
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
**Rules (all images):** no text, letters, logos, or watermarks; period- and
place-appropriate; soft, atmospheric lighting; muted, tasteful color.

### ⚠️ Copyright note — Kindred only
*Kindred* is **still under copyright**. Its images must be **original, generic
instructional reconstructions** — evocative of the *ideas*, never copies of the book's
cover, official artwork, or a film still, and **no identifiable real person's face**
(show Dana, Rufus, etc. from behind, in shadow, or as objects). The seven short stories
are **public domain** and may be illustrated freely (still text- and watermark-free).

---

## 1. Kindred — Octavia E. Butler (companion) · Relic: "The Family Archive"
Setting: 1976 California ↔ antebellum Maryland plantation. **No recognizable faces.**

**`kindred/images/hero.webp`** (square)
> Photorealistic, square. A modern doorway/threshold opening onto an antebellum plantation
> landscape at dusk — one foot in 1976, one in the past. No people, no text.

**Relic artifacts** (4:5):
1. `kindred/images/boxes.webp` — Half-unpacked moving boxes and stacked books in a bright
   1970s California living room; an ordinary present about to be interrupted. No people.
2. `kindred/images/river.webp` — A muddy riverbank at the edge of a plantation, reeds and
   still brown water, a child's small shoe near the shallows; danger implied. No faces.
3. `kindred/images/pass.webp` — A worn, hand-written travel pass on rough paper, a wax
   stamp and a stub of pencil on weathered wood; controlled movement. No legible text.
4. `kindred/images/whip.webp` — A coiled leather whip hanging on a rough plank wall of a
   plantation outbuilding, hard light; the era's violence, implied not shown. No people.
5. `kindred/images/knife.webp` — A closed folding switchblade resting on a dark cloth, one
   glint of light on the steel; a means of last-resort defense. No people.
6. `kindred/images/arm.webp` — An empty left coat sleeve pinned at the shoulder on a chair
   by a modern doorframe; permanent loss, suggested with restraint. No face.
7. `kindred/images/records.webp` — Old ledgers, a yellowed archival document, and a
   magnifying glass on a library table; researching the documented past. No legible text.

---

## 2. The Lady, or the Tiger? — Frank R. Stockton (PD) · Relic: "The King's Arena"

**`ladytiger/images/hero.webp`** (square)
> Photorealistic, square. Two tall identical arched wooden doors side by side in a curved
> stone arena wall, bright sky above, empty sand below. Tense, symmetrical. No people, no text.

**Relic artifacts** (4:5):
1. `ladytiger/images/king.webp` — An ornate but barbaric throne on a stone dais, a fur
   cloak and a crude iron crown resting on it; power half-civilized. No face.
2. `ladytiger/images/two-doors.webp` — The two identical arena doors, close up, weathered
   wood and iron studs; an impossible, blind choice. No people.
3. `ladytiger/images/tiger.webp` — A fierce tiger's eyes glowing in the darkness behind a
   barely-open arena door; menace, not gore.
4. `ladytiger/images/lady.webp` — A richly dressed bridal figure half-glimpsed behind the
   other door, soft light and flowers; seen from behind, no face.
5. `ladytiger/images/princess.webp` — A royal circlet and a folded silk gown on a balcony
   rail overlooking the arena; a divided heart. No face.
6. `ladytiger/images/lover.webp` — A young courtier's plain cloak and a single glove on the
   arena sand, one door ahead; the accused, anonymous. No face.
7. `ladytiger/images/signal.webp` — A jeweled hand making the faintest gesture toward the
   right, from a shadowed balcony; the fateful signal. Hand only, no face.

---

## 3. The Ransom of Red Chief — O. Henry (PD) · Relic: "The Kidnappers' Hideout"
Comic tone welcome.

**`ransom/images/hero.webp`** (square)
> Photorealistic, square. A rope, a crumpled ransom note, and a toy tomahawk on the dirt
> outside a hillside cave at dusk; comic menace. No people, no legible text.

**Relic artifacts** (4:5):
1. `ransom/images/note.webp` — A crumpled, badly-written ransom note weighted by a rock on
   a plank; a confident scheme. No legible text.
2. `ransom/images/warpaint.webp` — A cardboard feather headdress, war paint, and a toy
   knife arranged like a boy's "chief" costume; wild fun. No people.
3. `ransom/images/bruises.webp` — A battered adult's hat, a sling, and an ice pack on a
   chair; a grown man worn out by a child. No face.
4. `ransom/images/cave.webp` — A small campfire and bedrolls inside a rocky hillside cave
   at night; the kidnappers' hideout. No people.
5. `ransom/images/wont-leave.webp` — A boy's muddy boots planted firmly by the cave mouth,
   refusing to budge; the hostage who won't go home. Boots only.
6. `ransom/images/reply.webp` — A neatly-written letter on good paper beside the crumpled
   ransom note; the father's cool counter-offer. No legible text.
7. `ransom/images/payment.webp` — A small stack of banknotes changing hands over a fence
   rail at dawn; the kidnappers paying to be rid of the boy. Hands only.

---

## 4. The Gift of the Magi — O. Henry (PD) · Relic: "Della and Jim's Flat"

**`magi/images/hero.webp`** (square)
> Photorealistic, square. A pocket watch and a set of hair combs on a small table beside a
> few coins, warm lamplight, a modest 1900s flat at Christmas. Tender. No people, no text.

**Relic artifacts** (4:5):
1. `magi/images/money.webp` — A small pile of coins and a few worn banknotes counted on a
   humble table; $1.87 and not enough. No legible text.
2. `magi/images/hair.webp` — Long, beautiful brown hair falling loose past a chair back,
   a hairbrush nearby; a woman's treasure. No face.
3. `magi/images/watch.webp` — An old gold pocket watch on a worn leather strap resting on
   dark wood; an heirloom. Warm light.
4. `magi/images/sold-hair.webp` — A barber's shears and a coiled length of cut hair on a
   counter, a few coins beside them; a sacrifice made. No face.
5. `magi/images/chain.webp` — An elegant platinum watch chain coiled in an open gift box on
   tissue paper; a perfect gift. No people.
6. `magi/images/combs.webp` — A set of tortoiseshell hair combs in a velvet box, catching
   soft light; long admired, now useless. No people.
7. `magi/images/two-gifts.webp` — The watch chain and the combs side by side on a table,
   both unused; irony and love. No people.

---

## 5. The Monkey's Paw — W. W. Jacobs (PD) · Relic: "The Whites' Parlour"
Gothic horror, restrained.

**`monkeyspaw/images/hero.webp`** (square)
> Photorealistic, square. A dried, curled monkey's paw talisman on a mantel beside a dying
> fire in a dim Victorian parlour. Ominous, muted. No people, no text.

**Relic artifacts** (4:5):
1. `monkeyspaw/images/paw.webp` — The shriveled mummified paw on dark cloth, one lamp's
   glow; the cursed talisman.
2. `monkeyspaw/images/morris.webp` — A soldier's worn overcoat, a kit bag, and a pith
   helmet by a door; a visitor home from India. No face.
3. `monkeyspaw/images/spell.webp` — The paw held over an open flame, smoke curling; the
   fakir's curse. Hands only, no face.
4. `monkeyspaw/images/first-wish.webp` — A small stack of banknotes on the parlour table
   beside the paw; a modest, fateful wish. No legible text.
5. `monkeyspaw/images/news.webp` — A stranger's silhouette at a frosted front door at dusk,
   hat in hand; dreaded news arriving. No face.
6. `monkeyspaw/images/second-wish.webp` — The paw gripped tight on the mantel as a heavy
   knocker sounds on a dark door beyond; terror rising. No people.
7. `monkeyspaw/images/third-wish.webp` — An empty lamplit street through an open door,
   quiet and still; the last wish, and relief mixed with loss. No people.

---

## 6. The Cask of Amontillado — Edgar Allan Poe (PD) · Relic: "Montresor's Catacombs"
Torch-lit gothic.

**`cask/images/hero.webp`** (square)
> Photorealistic, square. A torch-lit stone catacomb lined with bones, a dusty wine bottle,
> and a mason's trowel on the ground. Damp, claustrophobic. No people, no text.

**Relic artifacts** (4:5):
1. `cask/images/carnival.webp` — A jester's cap with bells and a carnival mask on cobbles at
   night, confetti and a wine flask; festive misdirection. No people.
2. `cask/images/amontillado.webp` — A single dusty, cobwebbed wine bottle held up to
   torchlight in a cellar; the fatal bait. Hands only.
3. `cask/images/luchesi.webp` — Two wine goblets, one turned away, on a barrel; the invoked
   rival. No people.
4. `cask/images/coat-of-arms.webp` — A carved stone crest of a golden foot crushing a
   serpent, torch-lit on a vault wall; a motto of revenge. No legible text.
5. `cask/images/niter.webp` — White crystalline niter glistening on damp black catacomb
   stone in torchlight; the deep, deadly vaults. No people.
6. `cask/images/trowel.webp` — A mason's trowel revealed from beneath a dark cloak; grim
   foreshadowing. Hand only.
7. `cask/images/wall.webp` — A half-built brick wall sealing a shadowed niche in the rock,
   trowel and mortar beside it; a man walled in, unseen. No visible person.

---

## 7. An Occurrence at Owl Creek Bridge — Ambrose Bierce (PD) · Relic: "The Bridge and the Vision"
Civil War, dawn light, dreamlike Part III.

**`owlcreek/images/hero.webp`** (square)
> Photorealistic, square. A wooden railroad bridge over a slow creek at dawn, a single rope
> hanging from a crossbeam, mist on the water. Foreboding, quiet. No people, no text.

**Relic artifacts** (4:5):
1. `owlcreek/images/bridge.webp` — The railroad bridge and a dangling noose against a pale
   dawn sky; the execution scene. No visible person.
2. `owlcreek/images/farquhar.webp` — A planter's fine coat and boots seen from behind at the
   bridge's edge, hands bound; the condemned man, anonymous. No face.
3. `owlcreek/images/scout.webp` — A gray Confederate uniform coat with a Union blue collar
   just visible beneath it, on a peg; the disguised Federal scout. No face.
4. `owlcreek/images/watch.webp` — An old pocket watch, hugely close up, its ticking almost
   audible; distorted time. No people.
5. `owlcreek/images/rope.webp` — A frayed rope snapping above dark water, splash below;
   the imagined escape begins. No visible person.
6. `owlcreek/images/journey.webp` — A wild, over-vivid forest path in strange golden light,
   too perfect to be real; the dreamlike flight home. No people.
7. `owlcreek/images/twist.webp` — A quiet home gate and garden at dawn dissolving into the
   dark bridge and rope; the vision collapsing into truth. No visible person.

---

## 8. The Bet — Anton Chekhov (PD) · Relic: "The Garden Lodge"

**`bet/images/hero.webp`** (square)
> Photorealistic, square. A small garden lodge at night, a single candle in the window, and
> stacks of books beside a sealed letter. Contemplative, cold blue. No people, no text.

**Relic artifacts** (4:5):
1. `bet/images/wager.webp` — Two crystal glasses and a scattered card game on a fine
   drawing-room table; a heated party argument. No people.
2. `bet/images/two-million.webp` — Neat bundles of banknotes locked in an open strongbox,
   cold light; the enormous stake. No legible text.
3. `bet/images/lodge.webp` — A small stone garden lodge with one lit window, seen across a
   dark garden; a self-chosen prison. No people.
4. `bet/images/books.webp` — Towering, chaotic stacks of books filling a lamplit room; a
   mind fed only by reading. No people.
5. `bet/images/fifteen-years.webp` — A window showing the same garden across four seasons in
   quadrants, a guttering candle; long years passing. No people.
6. `bet/images/bankers-plan.webp` — A shadowed figure's hand on a door latch of the lodge at
   night; a desperate, dark intention. Hand/shadow only, no face.
7. `bet/images/letter.webp` — A handwritten letter left open on a table beside a sleeping
   candle; a renunciation of everything worldly. No legible text.

---

## Checklist (64 images)

| Room | Hero | Artifacts |
|------|------|-----------|
| Kindred | `kindred/images/hero.webp` | boxes, river, pass, whip, knife, arm, records |
| Lady/Tiger | `ladytiger/images/hero.webp` | king, two-doors, tiger, lady, princess, lover, signal |
| Ransom | `ransom/images/hero.webp` | note, warpaint, bruises, cave, wont-leave, reply, payment |
| Gift of the Magi | `magi/images/hero.webp` | money, hair, watch, sold-hair, chain, combs, two-gifts |
| The Monkey's Paw | `monkeyspaw/images/hero.webp` | paw, morris, spell, first-wish, news, second-wish, third-wish |
| Cask of Amontillado | `cask/images/hero.webp` | carnival, amontillado, luchesi, coat-of-arms, niter, trowel, wall |
| Owl Creek Bridge | `owlcreek/images/hero.webp` | bridge, farquhar, scout, watch, rope, journey, twist |
| The Bet | `bet/images/hero.webp` | wager, two-million, lodge, books, fifteen-years, bankers-plan, letter |

Once these land, **all 31 live rooms will have full images.**
