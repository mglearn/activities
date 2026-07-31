# PlotPoint — Aesop's Fables: Images Needed

The **Aesop's Fables** room (`aesop/`) is the only live room still missing images.
It needs **8 files**: one hero + seven relic artifacts. Drop them into
`aesop/images/`. Everything else in PlotPoint is already covered.

**Format & sizes**
- **Hero:** `aesop/images/hero.webp` — **square, 1024 × 1024**.
- **Artifacts:** `aesop/images/<id>.webp` — **1024 × 1280 (4:5 portrait)**.
- **WebP.** If your generator outputs PNG, drop the `.png`, then convert (rooms
  reference `.webp`):
  ```bash
  cd activities/plotpoint
  python3 - <<'PY'
  import glob, os
  from PIL import Image
  for f in glob.glob('aesop/images/*.png'):
      Image.open(f).convert('RGB').save(f[:-4] + '.webp', 'WEBP', quality=84, method=6)
      os.remove(f)
  PY
  ```

**Style & rules**
- Warm, friendly, storybook-realistic (grades 6–9) — photorealistic but gentle.
- Soft natural light, uncluttered backgrounds, subject roughly centered.
- Real animals/objects are fine; **no text, no logos, no watermarks**, no copyrighted
  illustrations, no book covers.

---

## Hero — `aesop/images/hero.webp` (square)
> Warm, friendly photorealistic still-life evoking Aesop's Fables: an old open
> storybook on a wooden table surrounded by small figurines of a fox, a tortoise, a
> crow, and an ant; soft golden light; inviting and gentle. No text.

## Relic artifacts — "The Fable Cabinet" (each 1024 × 1280)

**1. `aesop/images/grapes.webp`** — *The Fox and the Grapes*
> Photorealistic: a lush bunch of ripe purple grapes hanging high on a sunlit vine,
> just out of reach; below, a red fox looks up longingly, mid-jump. Warm afternoon light.

**2. `aesop/images/tortoise.webp`** — *The Tortoise and the Hare*
> Photorealistic: a determined tortoise plodding steadily along a dirt path; in the
> soft-focus background, a hare dozes under a tree. Warm, storybook-real light.

**3. `aesop/images/ant.webp`** — *The Ant and the Grasshopper*
> Photorealistic close-up: a hardworking ant carrying a large golden grain of wheat
> toward its nest; a grasshopper rests idly on a blade of grass nearby. Late-summer light.

**4. `aesop/images/fleece.webp`** — *The Wolf in Sheep's Clothing*
> Photorealistic: a wolf partly draped in a white sheep's fleece, half-disguised among a
> flock of sheep in a green meadow; a subtle glint of menace in its eyes.

**5. `aesop/images/pitcher.webp`** — *The Crow and the Pitcher*
> Photorealistic: a clever black crow dropping a pebble into a tall clay pitcher with a
> little water at the bottom; a few pebbles scattered at its base. Soft daylight.

**6. `aesop/images/mouse.webp`** — *The Lion and the Mouse*
> Photorealistic: a tiny mouse gnawing through the thick ropes of a hunter's net that has
> trapped a great lion; the lion watches, calm and grateful. Dappled forest light.

**7. `aesop/images/horn.webp`** — *The Boy Who Cried Wolf*
> Photorealistic: a young shepherd boy on a green hillside blowing a horn beside his flock;
> a dark forest edge behind, with a faint wolf shape half-hidden among the trees. Late-afternoon light.

---

*Related docs:* room heroes for every title → [`image3.md`](image3.md); relic artifacts
for the other rooms + proposed CLT titles → [`image_assets2.md`](image_assets2.md);
the original Metamorphosis set → [`image-assets-needed.md`](image-assets-needed.md).
