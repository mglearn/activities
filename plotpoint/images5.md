# PlotPoint — Image Assets Needed, Part 5: the copyrighted companions + Poe

Images for the six rooms added in this batch: **In the Time of the Butterflies,
Brave New World, The Diary of a Young Girl (Anne Frank), Separate Is Never Equal,
Between the World and Me** (all independent, copyright-safe companions), and **The
Tell-Tale Heart** (public domain). Each room needs **1 hero + 7 relic artifacts = 8
images**, so **48 total**.

Every image is **optional**: each page renders a labeled "Image placeholder" box at the
path below until a real file is dropped in, so all six rooms already work without these.

---

## Specs (same as images4.md)

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

### ⚠️ Copyright rule for the five companion rooms
Butterflies, Brave New World, Anne Frank, Separate Is Never Equal, and Between the World
and Me are **still under copyright**. These images must be **original, generic
instructional reconstructions** — evocative of the *ideas*, never copies of the books'
covers, official artwork, film stills, or (for *Separate Is Never Equal*) Duncan
Tonatiuh's distinctive Mixtec-codex illustration style. **Do not depict identifiable real
people's faces** (the Mirabal sisters, Anne Frank, Sylvia Mendez, Prince Jones, Ta-Nehisi
Coates). Show them anonymously — from behind, in shadow, as silhouettes, or as objects on
a table. No text, letters, logos, or watermarks. Poe (public domain) may be illustrated
freely, but still keep it text- and watermark-free.

---

## 1. In the Time of the Butterflies — companion · Relic: "The Hidden Resistance Cache"
Setting: Dominican Republic under the Trujillo dictatorship, 1930s–1960. Accent warm ochre.

**`butterflies/images/hero.webp`** (square)
> Photorealistic, square. Four butterflies rising over a winding Caribbean mountain road at
> dusk, palm silhouettes, warm ochre and violet sky. Evocative and hopeful. No people, no text.

**Relic artifacts** (4:5):
1. `butterflies/images/four-sisters.webp` — Four empty wooden chairs around a 1950s family
   table on a veranda, four shawls draped over them; a family evoked without faces. Warm light.
2. `butterflies/images/code-name.webp` — A single blue morpho butterfly resting on a folded
   slip of paper on dark wood; a secret "code name" suggested. Soft dramatic light.
3. `butterflies/images/jefe-portrait.webp` — An ornate empty gilded picture frame hung high
   on a plain wall, a faint generic silhouette inside; the required dictator's portrait,
   anonymous. Cold light.
4. `butterflies/images/law-license.webp` — A rolled diploma tied with ribbon on a desk, an
   official-looking wax seal, set beside a locked drawer; ambition blocked. No legible text.
5. `butterflies/images/diary.webp` — A young woman's small journal, open to blank pages, a
   pressed flower and a pen beside it, on a bedspread; a private voice. No legible text.
6. `butterflies/images/prison.webp` — A narrow barred window casting striped shadow on a
   rough stone cell wall; imprisonment. Bleak, high-contrast. No people.
7. `butterflies/images/road.webp` — A lonely mountain road at dusk with four butterflies
   overhead and an overturned basket of flowers at the roadside; tragedy and remembrance.
   No people, no gore.

---

## 2. Brave New World — companion · Relic: "The World State Systems Lab"
Setting: a cold, sleek future. Accent teal.

**`bnw/images/hero.webp`** (square)
> Photorealistic, square. Rows of identical pale glass bottles on a conveyor belt beneath a
> cold, futuristic ceiling of even light; sterile, orderly, unsettling. Teal and white. No people.

**Relic artifacts** (4:5):
1. `bnw/images/bottle.webp` — A single glossy lab bottle/vessel on a conveyor, faint identical
   rows blurred behind it; mass-produced life. Clinical light.
2. `bnw/images/caste-badge.webp` — Five plain colored uniform badges laid in a descending row
   on white (from bold to muted); a fixed caste ladder. No letters legible.
3. `bnw/images/speaker.webp` — A small retro-futuristic under-pillow speaker glowing beside an
   empty child's cot in a dim dormitory; sleep-teaching. Eerie calm.
4. `bnw/images/soma.webp` — A neat dish of identical pale tablets and a glass of water on a
   sleek surface; the happiness drug. Soft seductive light.
5. `bnw/images/ford.webp` — A large stylized "T" symbol on a wall where a religious cross
   might be, an assembly-line gear motif below; industry as religion. No text.
6. `bnw/images/feely.webp` — An immersive cinema seat with sensory hand-grips and a blank
   glowing screen; endless entertainment. Warm distracting glow.
7. `bnw/images/shakespeare.webp` — A worn, old leather-bound book of plays resting alone on a
   cold steel table, warm light on it against the sterile room; forbidden art. No legible title.

---

## 3. The Diary of a Young Girl — companion · Relic: "The Secret Annex"
Setting: 1940s Amsterdam hidden annex. Accent dusty mauve. **No recognizable faces.**

**`annefrank/images/hero.webp`** (square)
> Photorealistic, square. A small plain desk beneath an attic window with a closed diary on
> it, a swinging bookcase ajar in the background; quiet, hushed light. No people, no text.

**Relic artifacts** (4:5):
1. `annefrank/images/diary.webp` — A small cloth-covered diary, closed, with a simple clasp,
   on a bedspread by soft window light; a private world. No legible text.
2. `annefrank/images/bookcase.webp` — A wooden bookcase swung slightly open to reveal a dark
   doorway behind it; the hidden entrance. Dim, secretive.
3. `annefrank/images/wall-pictures.webp` — A cramped wall pasted with small vintage magazine
   clippings and postcards beside a narrow bed; an ordinary teen's room. No legible text/faces.
4. `annefrank/images/helpers.webp` — A basket of bread, milk, and a folded newspaper set just
   inside a doorway at the top of steep stairs; the helpers' quiet courage. No people.
5. `annefrank/images/peter.webp` — A small attic corner with two stools by a dusty window and
   soft afternoon light; a place two young people might talk. No people.
6. `annefrank/images/radio.webp` — A 1940s wooden valve radio glowing softly in a dim room,
   an ear leaning near it implied by an empty chair; news from the war. No people.
7. `annefrank/images/empty-annex.webp` — The same small desk and window, now empty and still,
   an open diary left behind in a shaft of light; absence and remembrance. No people.

---

## 4. Separate Is Never Equal — companion · Relic: "The Schoolhouse Files"
Setting: 1940s California. Accent civic blue. **No recognizable faces; NOT Tonatiuh's art style.**

**`separate/images/hero.webp`** (square)
> Photorealistic, square. Two schoolhouses side by side in a 1940s California town: one grand
> with a green lawn, one plain and run-down beside a bare dirt yard; unequal by design.
> Warm daylight. No people, no text. Do NOT imitate any picture-book illustration style.

**Relic artifacts** (4:5):
1. `separate/images/two-schools.webp` — Split composition: a neat brick school on one side, a
   plain clapboard school on the other; visible inequality. No people.
2. `separate/images/enrollment-day.webp` — A school's front steps and open door with a small
   registration desk; some empty children's shoes lined up outside, turned away. No faces.
3. `separate/images/mexican-school.webp` — A weathered one-room schoolhouse beside a wire fence
   and a distant cow pasture; poor conditions. Overcast.
4. `separate/images/organizing.webp` — A modest kitchen table with coffee cups, a petition
   sheet, and several empty chairs pulled close; neighbors organizing. No faces, no legible text.
5. `separate/images/courtroom.webp` — An empty 1940s courtroom: witness stand, judge's bench,
   and wooden gallery benches in a shaft of light; the case. No people.
6. `separate/images/ruling.webp` — A judge's gavel resting on a folded document beside a small
   American and California flag on a desk; the verdict. No legible text.
7. `separate/images/bridge-to-brown.webp` — A simple footbridge or path leading from a small
   schoolhouse toward a larger one on the horizon; one case leading to the next. Symbolic, no people.

---

## 5. Between the World and Me — companion · Relic: "The Letter to His Son"
Setting: contemporary/urban, reflective. Accent slate-violet. **No recognizable faces.**

**`between/images/hero.webp`** (square)
> Photorealistic, square. A handwritten letter on a desk in the foreground, a city skyline and
> a university gate softened at dusk behind it; intimate and urban. No faces, no legible text.

**Relic artifacts** (4:5):
1. `between/images/letter.webp` — A handwritten letter and a pen on a wooden desk under a warm
   lamp, addressed to "you" (no legible words); a father's voice. No faces.
2. `between/images/body.webp` — A pair of running shoes and a hoodie on a chair by a window at
   dawn; the ordinary, vulnerable body, suggested by objects. No faces.
3. `between/images/dream.webp` — A too-perfect pastel suburban street with identical houses and
   green lawns under a flawless sky; the comforting "Dream." Slightly unreal. No people.
4. `between/images/baltimore.webp` — A row-house city block and a school building at golden
   hour, empty stoops and a chain-link fence; the streets and the schools. No faces.
5. `between/images/mecca.webp` — A historic university gate and quad at dusk with warm lit
   windows; a place of awakening. No recognizable faces.
6. `between/images/prince-jones.webp` — A single lit candle beside a folded graduation program
   on dark cloth; remembrance of a friend lost. Solemn, no faces, no gore.
7. `between/images/no-easy-hope.webp` — A father's and child's silhouettes at a window looking
   out at a complex city skyline at dusk, seen from behind; honesty over comfort. No faces.

---

## 6. The Tell-Tale Heart — Edgar Allan Poe · Relic: "The Scene of the Crime" (PUBLIC DOMAIN)
Setting: dim 19th-century house, gothic. Accent dark wine. Illustrate freely (still no text).

**`poe/images/hero.webp`** (square)
> Photorealistic, square. A single thin ray of lantern light crossing a pitch-dark room toward
> old wooden floorboards; dread and stillness. Deep shadow, one sliver of warm light. No people.

**Relic artifacts** (4:5):
1. `poe/images/lantern.webp` — An old shuttered tin lantern emitting one narrow beam in a dark
   room; patient stalking. High contrast.
2. `poe/images/eye.webp` — A single pale, clouded eye suggested abstractly through a crack in a
   dark door, ringed by shadow; the "vulture eye." Unsettling, not gory.
3. `poe/images/seven-nights.webp` — A dark doorway opened a sliver seven nights running, a small
   calendar or seven scratch-marks on the frame; obsessive waiting. Moody.
4. `poe/images/bed.webp` — A heavy old wooden bed in a dark room, one corner lit; the fatal
   night. Ominous, no body, no gore.
5. `poe/images/floorboards.webp` — Three old wooden planks lifted slightly from a dark floor, a
   pry bar beside them; the hidden secret. Dim, tense.
6. `poe/images/police.webp` — Three empty chairs around a small table in a lamplit parlor, three
   officers' caps resting on it; the calm interrogation. No faces.
7. `poe/images/heart.webp` — Faint concentric sound-rings rising from between dark floorboards
   toward a lantern; the imagined beating heart. Abstract, eerie. No gore.

---

## Checklist (48 images)

| Room | Hero | Artifacts |
|------|------|-----------|
| Butterflies | `butterflies/images/hero.webp` | four-sisters, code-name, jefe-portrait, law-license, diary, prison, road |
| Brave New World | `bnw/images/hero.webp` | bottle, caste-badge, speaker, soma, ford, feely, shakespeare |
| Anne Frank | `annefrank/images/hero.webp` | diary, bookcase, wall-pictures, helpers, peter, radio, empty-annex |
| Separate Is Never Equal | `separate/images/hero.webp` | two-schools, enrollment-day, mexican-school, organizing, courtroom, ruling, bridge-to-brown |
| Between the World and Me | `between/images/hero.webp` | letter, body, dream, baltimore, mecca, prince-jones, no-easy-hope |
| The Tell-Tale Heart | `poe/images/hero.webp` | lantern, eye, seven-nights, bed, floorboards, police, heart |

All six rooms are **live and fully functional without these images** — each missing file
simply shows a labeled placeholder. Drop images in as WebP (or PNG + convert) at the exact
paths above; no code changes are needed.
