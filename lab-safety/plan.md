# Lab Safety Certification — Project Plan

**Deploy target:** `https://mglearn.github.io/activities/lab-safety/`
**Audience:** Texas science students, grades 6–12
**Alignment:** 2021-adopted science TEKS (implemented 2024–25)
**Author:** Miguel Guhlin · Content CC BY-NC 4.0 · Code MIT

---

## 1. What this is

A series of self-contained, privacy-first web pages that teach science lab safety through
short interactive exercises. Students work through modules, pass a mastery check on each,
and unlock a printable certification badge — all client-side, with no accounts, no server,
and no data collection.

Two tracks:

- **Lab Safety Ranger** — 5 modules, grades 6–8
- **Lab Safety Specialist** — 4 higher-rigor modules, grades 9–12

---

## 2. Standards backbone (verified)

The safety expectation lives in **Strand 1, Scientific and Engineering Practices**. The same
student expectation repeats at every grade and course:

> "use appropriate safety equipment and practices during laboratory, classroom, and field
> investigations as outlined in Texas Education Agency-approved safety standards."

| Grade / Course | TEKS code |
|---|---|
| Grade 6 | S.6.1.C |
| Grade 7 | S.7.1.C |
| Grade 8 | S.8.1.C |
| Biology | BIO.1.C |
| Chemistry | CHEM.1.C |
| Physics | PHY.1.C |
| IPC | IPC.1.C |

**The statutes and rules behind "TEA-approved safety standards":**

| Authority | Requirement |
|---|---|
| TEC §38.005 | Teachers and students must wear industrial-quality eye protection (Z87+) in appropriate situations per district policy. |
| TEA *Texas Safety Standards K–12* | Charles A. Dana Center guide (TEA-funded) — the referenced "approved safety standards." Covers PPE, emergency equipment, chemical safety, facilities, training. |
| 19 TAC Ch. 112 | The science TEKS; includes the 40% hands-on investigation requirement. |
| 19 TAC Ch. 61 | Facility/space standards for science classrooms and labs. |
| 19 TAC Ch. 247 | Educators' Code of Ethics — duty to comply with safety laws and policies. |

> **District-confirmation flag:** Confirm every code against your district-adopted TEKS version
> before formal documentation. The 2021-adopted science TEKS took effect 2024–25; older district
> documents may still reference prior codes, and SBOE review cycles can change specifics. ELPS
> sub-letters and CCSS-RST codes should be verified against your local framework.

---

## 3. File architecture

```
/activities/lab-safety/
  index.html                     ← hub + certificate engine        [BUILT]
  teks-correlations.html         ← standards page                  [BUILT]
  ms-01-rules-of-the-room.html   ← MS interactive template         [BUILT]
  ms-02-suit-up.html             ← PPE + TEC §38.005                [clone]
  ms-03-know-your-exits.html     ← emergency equipment             [clone]
  ms-04-read-the-signs.html      ← hazard symbols                  [clone]
  ms-05-spot-the-hazard.html     ← scene analysis (capstone)       [clone]
  hs-01-sds-decoded.html         ← Safety Data Sheets              [clone + rigor]
  hs-02-ghs-pictograms.html      ← GHS classification              [clone + rigor]
  hs-03-compatibility.html       ← storage / incompatibility       [clone + rigor]
  hs-04-procedure-critique.html  ← risk assessment (capstone)      [clone + rigor]
  privacy.html                   ← from edtech-compliance-policy skill
```

The hub's module list is a single JS object (`MODULES`); adding a page means flipping one
`live:false` to `true` and dropping the file in the folder.

---

## 4. Module sequence and rigor

Same engine across both tracks; the cognitive demand rises.

### Track A — Lab Safety Ranger (6–8) · *identify / describe / demonstrate*

| # | Module | Primary TEKS | Students learn to… |
|---|---|---|---|
| MS 1 | Rules of the Room | S.6–8.1.C | Follow conduct rules before/during/after a lab; report hazards. |
| MS 2 | Suit Up | S.6–8.1.C · TEC §38.005 | Choose and wear goggles, aprons, gloves correctly. |
| MS 3 | Know Your Exits | S.6–8.1.C | Locate and describe eyewash, shower, fire blanket, extinguisher. |
| MS 4 | Read the Signs | S.6–8.1.C | Interpret hazard symbols and warning labels. |
| MS 5 | Spot the Hazard | S.6–8.1.C · .1.B | Analyze a scene, find errors, justify why each is dangerous. |

### Track B — Lab Safety Specialist (9–12) · *analyze / evaluate / justify*

| # | Module | Primary TEKS | Students learn to… |
|---|---|---|---|
| HS 1 | SDS Decoded | CHEM/IPC.1.C | Locate hazards, first aid, storage, disposal on a Safety Data Sheet. |
| HS 2 | GHS Pictograms | CHEM/BIO.1.C | Classify substances by the nine GHS pictograms; match handling rules. |
| HS 3 | Compatibility & Storage | CHEM/IPC.1.C | Judge chemical incompatibilities; assign safe storage groups. |
| HS 4 | Procedure Critique | All .1.C | Run a risk assessment on a procedure and correct every flaw. |

---

## 5. Interaction engine

Each module is a step sequence. The template supports five item types (reusing the
lock-engine vocabulary):

- **sort** — tap to classify items (Do / Don't)
- **seq** — order steps first-to-last
- **mc** — single correct choice
- **multi** — check-all-that-apply
- **word** — typed short answer

Every item gives immediate **"prove-it" feedback** explaining *why*. Mastery gate: **≥80%**
to pass a module. Steps are defined in a `STEPS` array — swap the content, keep the engine.

---

## 6. Certification & badge

- Passing a module writes `labsafety_<id>=done` (+ score) to `localStorage`.
- The hub tallies each track, fills a progress bar, and **unlocks a printable certificate
  only when a full track is complete.**
- Two certificates: **Lab Safety Ranger** (all 5 MS) and **Lab Safety Specialist** (all 4 HS).
- Student types their name locally; certificate prints or saves to PDF. Nothing is uploaded.

---

## 7. Access, language, privacy

**UDL (CAST — three principles)**
- Representation: text, icon, color, and video for each idea.
- Action & Expression: sort, sequence, select, and type — not one fixed format.
- Engagement: short goals, instant feedback, a visible badge to earn.

**ELPS (19 TAC §74.4) — all four domains**
- Full EN/ES language switch (choice persists across pages).
- Bilingual safety word bank in each module.
- Sentence stems for spoken and written responses.
- Visuals paired with every key term.

**Privacy (edtech-compliance-policy pattern)**
- No accounts, no servers, no tracking.
- Progress and name live only in the browser (`localStorage`); clearing browser data resets.
- FERPA/COPPA-aware; ships with a `privacy.html` policy page.

> **Deployment note:** cross-page progress and language memory use `localStorage`, which works
> fully on GitHub Pages. Some preview sandboxes isolate storage per file; each page still works
> standalone.

---

## 8. Images to generate

Prompts follow the house rule: clean, classroom-ready, legible, no distorted lettering.
The built MS-1 uses icons + video (no image needed). Placeholders go in each clone below.

1. **Ranger shield badge** — flat vector, forest green + cream, shield with goggles icon, clean text "LAB SAFETY RANGER".
2. **Ranger vs Specialist badges** — 2 variants, gold accent for HS.
3. **MS-02 PPE set** — labeled flat illustration: splash goggles, lab apron, nitrile gloves.
4. **MS-03 emergency equipment** — labeled set: eyewash station, safety shower, fire blanket, ABC extinguisher.
5. **MS-04 hazard labels** — clean icon examples: flammable, corrosive, toxic (no brand marks).
6. **MS-05 spot-the-hazard scene** — cartoon lab with ~8 embedded safety errors, bright and legible.
7. **HS-02 GHS pictograms** — the nine official GHS pictograms in a grid, red diamond borders.
8. **HS-01 SDS layout** — simplified one-page SDS mockup showing the 16 section headers.

---

## 9. Supplemental videos (verified; preview before class — availability can change)

| Module | Title | Link |
|---|---|---|
| MS-01 (embedded) | Flinn Scientific — *Cringe Worthy Lab Safety* | youtube.com/watch?v=V-fNpaOX0-g |
| MS-03 | *Safety Equipment / Lab Safety Video Part 2* | youtube.com/watch?v=IiHEYtnKfF0 |
| MS-04 / HS-02 | *Laboratory Safety Symbols* | youtube.com/watch?v=qXHrXE4cJME |

---

## 10. Build order (remaining)

1. Clone **MS-02 → MS-05** from `ms-01-rules-of-the-room.html` (swap `STEPS` content + images).
2. Build **HS-01 → HS-04** with higher-rigor item types.
3. Generate the eight images; drop into module placeholders.
4. Build **privacy.html** from the `edtech-compliance-policy` skill.
5. Flip each module's `live:false → true` in the hub's `MODULES` object as it ships.
6. Validate every file: HTML nesting check, JS `node --check`, cross-folder link resolution.

---

## 11. Validation gate (run before packaging)

- HTML nesting balanced (Python parser).
- JS syntax clean (`node --check` on each extracted script block).
- Every internal link resolves to an existing file.
- Each module reaches a pass state and writes its `localStorage` flag.
- Hub reads flags, fills progress bars, and gates certificates correctly.
