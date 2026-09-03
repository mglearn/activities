# World Space Week — TCEA Curiosity Challenge

**World Space Week: Five Classroom Curiosity Challenges** is one pack in the TCEA
Curiosity Challenge series. It offers five short, fact-checked space activities that
spark curiosity in grades 3–12. Each challenge runs standalone in a few minutes, or
you can run all five as a ~25–40 minute set. Everything runs in the browser — no
logins, no accounts, and no student data collected.

Accent color: `#1b3a8f` · Grade bands: 3–5, 6–8, 9–12.

## The five challenges

1. **Mystery Mission** *(guess-it / four-clues)* — name a real space mission from four
   clues that get easier as they go, from Apollo 11 to the James Webb Space Telescope.
2. **Space or Not?** *(sort-it)* — sort 14 items into four categories and bust the
   myths about which everyday products NASA actually invented.
3. **Scale It** *(scale-it / order)* — order seven space objects from smallest to
   largest by diameter (Ceres → the Sun).
4. **Image Detective** *(image-detective / notice-wonder)* — study a caption-free image
   of the Pillars of Creation, then Notice, Wonder, and Infer before the reveal.
5. **Mission Patch Studio** *(mission-patch / extend)* — design and justify a mission
   patch for an original science mission.

## File map

```
space-week/
├── index.html              Student-facing landing page (loads the interactive engine)
├── teacher.html            Teacher guide + answer keys + differentiation
├── README.md               This file
├── data/
│   ├── activities.js        The pack content model (window.CURIOSITY_PACK)
│   └── sources.md           Full source list for every fact
└── print/
    ├── student.html         Printable, ink-light student worksheet (no answers)
    └── teacher-key.html     Printable compact answer key
```

Shared assets (CSS, JS engine) live one level up in `../assets/`.

## How facts are sourced

All factual content — mission dates, NASA-spinoff origins, myth corrections, and object
diameters — was verified against primary references from NASA, ESA, JPL, and JHUAPL.
See [`data/sources.md`](data/sources.md) for the specific page behind each answer. One
item (the Fisher "Space Pen") is flagged there for a final independent check before
being used as a graded item.

## Images

The Image Detective challenge uses `assets/images/space-week-spot.png`. Until that image
exists, the activity falls back to the text description, so the pack is fully usable
without it. Generation prompts, exact save paths, and alt text for this pack's images
live in [`../images.md`](../images.md).

## Privacy & accessibility

No accounts, no tracking, and no student data are collected — everything runs locally in
the browser. The pages are keyboard-friendly, high-contrast, and screen-reader labeled.
See [`../privacy.html`](../privacy.html) and [`../accessibility.html`](../accessibility.html).

---

© 2026 TCEA · CC BY-NC 4.0 (content) · MIT (code) · Facts sourced from NASA & ESA.
