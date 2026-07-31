# PlotPoint — Image Assets Needed, Part 3: "Enter the Story" hero images

Each title room now shows an optional **hero image in the upper-right of the "Enter
the Story" tab**. Until a file is dropped in, the room shows a soft "Image placeholder"
box pointing at the path below. This file lists the hero image needed for every **live**
room, with a photorealistic prompt.

**Spec (all hero images)**
- **Path:** `<room>/images/hero.webp` (e.g. `metamorphosis/images/hero.webp`).
- **Shape/size:** **square, 1024 × 1024** (displayed as a rounded square, ~300 px wide).
  Keep the subject roughly centered — the corners may be lightly cropped on small screens.
- **Format: WebP.** If your generator outputs PNG, drop it as `hero.png`, then convert:
  ```bash
  cd activities/plotpoint
  python3 - <<'PY'
  import glob, os
  from PIL import Image
  for f in glob.glob('*/images/hero.png'):
      Image.open(f).convert('RGB').save(f[:-4] + '.webp', 'WEBP', quality=84, method=6)
      os.remove(f)
  PY
  ```
- **Rules:** no text, logos, or watermarks; no real book cover, film still, or identifiable
  real person's face; generic, period- and place-appropriate; soft, atmospheric lighting.
- Optional but recommended: update each room's `data.en.js` `meta.heroAlt` to match the
  final picture (it's already set to a sensible default).

---

## Literature rooms 🟢

**1. `metamorphosis/images/hero.webp`**
> Photorealistic, square. A dim, cramped early-1900s bedroom at cold dawn: a single
> narrow bed, a heavy locked wooden door, thin grey light through a tall window. Unsettling
> stillness, muted browns and blue-greys. No people, and do not depict an insect.

**2. `canterbury/images/hero.webp`**
> Photorealistic, square. A group of medieval pilgrims on horseback on a muddy spring road
> winding toward a distant cathedral town; cloaks, satchels, and staffs; soft golden morning
> light; seen from behind so faces are not detailed. Warm earthy tones.

**3. `dracula/images/hero.webp`**
> Photorealistic, square. A storm-tossed three-masted sailing ship approaching a rugged
> coastline at dusk, the silhouette of a ruined castle on a far crag; moody indigo sky, sea
> spray, a faint lantern glow. No people. Gothic, ominous.

**4. `myths/images/hero.webp`**
> Photorealistic museum still-life, square. Classical Greek artifacts arranged on pale
> marble in warm gallery light: a hero's bronze helmet, a green laurel wreath, a small lyre,
> and a pair of winged sandals. No text, no people.

## Philosophy rooms 🟢

**5. `apology/images/hero.webp`**
> Photorealistic, square. A sunlit ancient Athenian agora with weathered marble columns and
> a raised speaker's stone, warm midday light; a gathered crowd suggested only as soft,
> faceless silhouettes in the background. Dignified, classical.

**6. `cave/images/hero.webp`**
> Photorealistic, cinematic low light, square. The interior of a dark cave: a low fire on a
> stone ledge throws long shadows across a rough wall, and a small bright opening glows high
> in the distance. No people.

**7. `meditations/images/hero.webp`**
> Photorealistic, square. A Roman military campaign tent interior at night: an oil lamp on a
> folding camp table, a wax writing tablet and a stylus, a folded deep-red cloak on a stool.
> Austere, cold, quiet. No people.

**8. `enchiridion/images/hero.webp`**
> Photorealistic still-life, square. A humble wooden table in warm low light: a small open
> handbook, a plain clay oil lamp softly burning, a broken iron shackle, and a two-handled
> clay jar. Spare and calm. No text.

**9. `ethics/images/hero.webp`**
> Photorealistic still-life, square. A craftsman's workbench in warm light: a level two-pan
> balance scale, a few hand tools, and a thriving green potted plant in full leaf. A quiet
> sense of balance and growth. No text.

**10. `consolation/images/hero.webp`**
> Photorealistic, square. A bare late-Roman stone prison cell, a small barred window casting
> a shaft of pale light onto the floor, and a large wooden wheel leaning against the wall.
> Somber, candlelit. No identifiable people.

---

## As new rooms ship
Every future room's `data.en.js` already includes `meta.hero: "images/hero.webp"`, so it
will show the placeholder until you add the file. Add a matching prompt here (or in a Part 4)
using the same spec. Proposed CLT titles and their relic artifacts are in
[`image_assets2.md`](image_assets2.md).
