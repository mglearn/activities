# Say It, Make It — Printable Materials Expansion Roadmap

## Goal

Give every activity that depends on custom cards, mats, diagrams, maps, grids, tokens,
or models a classroom-ready downloadable resource. Teachers should not encounter a
materials list that names an activity-specific item without either:

1. a linked printable pack, or
2. a clear note that the item is a common classroom/manipulative supply and is not
   included.

This roadmap extends the completed packs for Activities **21, 35, 38, 78, and 80**.
Activity **77, Circuit Description Challenge**, is the first priority.

## Definition of Complete

An activity is complete when:

- Its required custom content exists as editable HTML.
- A classroom-ready US Letter PDF is generated.
- Every PDF page is also exported as a 300-DPI PNG.
- Two identical student sets are included when the activity uses a barrier or matching
  roles.
- Describer-only cards are visibly separated from Builder materials.
- A teacher guide, answer/reference key, storage label, and accessibility notes are
  included when applicable.
- Pieces remain distinguishable by shape, pattern, icon, or text in grayscale.
- The activity page links directly to its PDF.
- Local link, PDF-signature, page-count, print-layout, spelling, and content checks pass.
- The deployed activity page and PDF both return HTTP 200.

## Scope Rules

### Generate a pack

Generate materials when the activity names content that a teacher must design, select,
label, sequence, or reproduce, including:

- challenge, role, vocabulary, event, organism, symbol, or picture cards;
- background, coordinate, compass, cell, map, or scene mats;
- diagrams, blueprints, graphs, timelines, and model/reference cards;
- matching sets whose educational content is not supplied by common manipulatives.

### Supply a template or optional companion

Provide a lightweight template when teachers supply the curriculum content, such as a
blank concept map, graph, coordinate plane, sentence strip, or card grid. Include sample
content only when it can be accurate, neutral, and broadly reusable.

### Do not generate ordinary supplies

Do not attempt to manufacture cups, blocks, LEGO bricks, magnetic tiles, index cards,
straws, clay, craft sticks, geoboards, rubber bands, counters, fraction manipulatives,
percussion instruments, or safe electrical components. The activity page should mark
these as **teacher-supplied**. A printable alternative may still be offered when it makes
the activity substantially easier to run.

## Production Architecture

Extend `printables/build-printables.js` rather than creating unrelated one-off files.
Move reusable elements into shared data/render helpers as the collection grows:

- directions and accessibility page;
- Set A / Set B piece sheets;
- Describer-only challenge cards;
- reusable blank cards and write-in templates;
- grid, coordinate, compass, map, scene, and organizer mats;
- storage-envelope labels;
- teacher reference and answer-key pages;
- shared `pack.css` print styles.

Add a machine-readable manifest at `printables/manifest.json` with:

- activity number, slug, title, and production status;
- resource type and included components;
- source/accuracy-review notes;
- generated HTML, PDF, and PNG paths;
- page count and last validation date.

The activity-page renderer should read this manifest to display download buttons. It
must not contain a hard-coded list of activity numbers.

## Phase 1 — Safety and Science Essentials

**Status: ✅ complete locally (2026-08-04).** Packs for Activities 77, 79, 81, 82,
83, and 84 have editable HTML, PDF, 300-DPI PNG pages, duplicate student sets,
challenge cards, work mats, reference keys, accessibility guidance, and manifest-driven
activity-page links. Deployment remains a separate release step.

Build these first because missing materials currently block or weaken the activity and
because subject accuracy matters.

### 77. Circuit Description Challenge — first build

Create:

- teacher directions and electrical-safety note;
- two identical circuit-symbol sets;
- cells/batteries, lamps, switches, motors, buzzers, resistors, and connecting-wire cards;
- junction and non-junction crossing cards;
- open- and closed-circuit challenge cards;
- series- and parallel-circuit challenge cards appropriate to the stated grade range;
- Builder diagram mat;
- conventional-symbol reference and answer key;
- explicit statement that printed cards simulate circuits and do not conduct electricity.

Science gate:

- Review symbols against a current authoritative school-science reference.
- Do not mix US and IEC symbol conventions without labeling the variation.
- Never direct students to use wall/mains electricity.
- If physical components are used, specify low-voltage classroom kits and teacher
  supervision.

### Remaining science batch

| Activity | Pack contents |
|---|---|
| 79. Food-Chain Builder | organism cards, energy arrows, habitat challenge cards, reference chains/webs |
| 81. Rock-Layer Reconstruction | sediment layers, fossils, intrusion/fault pieces, challenge cross-sections, answer key |
| 82. Weather-Map Match | blank regional maps, fronts, pressure, precipitation and temperature symbols, reference key |
| 83. Cell Model Arrangement | plant/animal cell mats, organelle pieces, challenge cards, function reference |
| 84. Experimental-Setup Build | generic safe-equipment picture cards, setup mat, safety cards, sample arrangements |

Quality gate: science-content review, grayscale test, two complete sets, and explicit
model-limit/safety notes.

## Phase 2 — Foundational Mats and Direction Systems

**Status: ✅ complete locally (2026-08-04).** All 13 packs have editable HTML,
US Letter PDF, 300-DPI PNG pages, duplicate student sets, reusable mats, challenge
cards, reference keys, accessibility guidance, and manifest-driven activity-page links.
Production deployment is tracked separately.

These reusable components unlock several activities at once.

| Activity | Pack contents |
|---|---|
| 5. Cup Coordinate Build | reusable coordinate/position mats and orientation key |
| 24. Pixel-Art Dictation | blank grids in three sizes, sample designs, coordinate key |
| 40. Community Map Builder | blank street maps, building cards, sample map challenges |
| 51. Route on a Map | paired maps, route cards, landmark symbols |
| 52. Treasure-Map Directions | grid maps, obstacles, landmarks, hidden-destination cards |
| 53. Coordinate-Plane Journey | four-quadrant and first-quadrant mats, path challenges, answer key |
| 54. School Navigation Challenge | neutral school maps, room/landmark cards, route challenges |
| 55. Cardinal-Direction Builder | compass mats, center/landmark cards, direction reference |
| 56. Landform Map Match | blank maps, landform symbols, reference guide |
| 57. Grid Robot Programmer | grid mats, robot tokens, obstacles, command and challenge cards |
| 73. Array Builder | grid mats, printable counters, array challenge cards |
| 75. Transformation Challenge | coordinate grids, shape cards, translation/rotation/reflection challenges |
| 76. Data-Display Replication | blank graph templates, sample data displays, answer keys |

Quality gate: coordinate conventions, direction accuracy, sufficient writing/cutting
space, and exact Set A/Set B parity.

## Phase 3 — Visual Communication and Scene Builders

| Activity | Pack contents |
|---|---|
| 17. Back-to-Back Drawing | graduated line-drawing cards and blank response sheets |
| 18. One-Way Versus Two-Way Drawing | matched-complexity drawing pairs and comparison sheet |
| 19. Shape-Only Drawing | geometric challenge drawings and vocabulary strip |
| 20. Mystery Robot | robot model cards, shape bank, Builder drawing sheet |
| 22. Describe the Flag | fictional flag cards, blank flag templates, color/pattern key |
| 23. Hidden Emoji Design | face/symbol cards, feature vocabulary, blank face mats |
| 25. Symmetry Drawing | half-design sheets, completed Describer cards, line-of-symmetry key |
| 26. Logo Without the Name | original noncommercial symbols and drawing sheets |
| 27. Diagram Dictation | neutral sample diagrams plus blank labeled/unlabeled templates |
| 28. Drawing from Written Directions | graded direction cards, response sheets, comparison rubric |
| 30. Miniature Classroom Scene | room mats, furniture/people pieces, challenge cards |
| 31. Playground Designer | playground mats, feature pieces, accessibility challenge cards |
| 32. Eco-Friendly Schoolyard | schoolyard mats, environmental feature cards, reference guide |
| 33. Dress the Character | neutral character mats, clothing pieces, challenge cards |
| 34. Build a Face | face mats, facial-feature pieces, expression/reference cards |
| 36. Historical Scene Builder | generic period scene mats and clearly contextualized object cards |
| 37. Story Scene Match | reusable setting mats, character/object blanks, sample public-domain scene set |
| 39. Food-Plate Arrangement | plate mats, food cards, neutral category reference |

Quality gate: all artwork must be original or appropriately licensed, inclusive, free of
commercial logos, recognizable in grayscale, and suitable across the stated grade range.

## Phase 4 — Language, Literacy, and Thinking Tools

| Activity | Pack contents |
|---|---|
| 44. Number-Sequence Build | number cards, pattern cards, teacher-created sequence blanks |
| 48. Mystery Sorting Rule | word/image/shape/number card sets and rule cards |
| 59. Vocabulary Object Match | editable blank cards and a neutral sample set |
| 60. Forbidden-Word Description | editable vocabulary cards with prohibited-clue fields and sample set |
| 61. Character Description Match | original character-card sets with controlled similarities |
| 62. Which Picture Am I Describing? | original related-image sets with tiered difficulty |
| 63. Sentence-Building Barrier | reusable word/phrase/punctuation cards and blank cards |
| 64. Story-Sequence Match | original event-card sequences and editable blank sequence |
| 65. Comic-Strip Reconstruction | original wordless panel sets and answer sequences |
| 66. Main-Idea Organizer | idea/detail cards, organizer mats, editable content set |
| 67. Word-Web Replication | concept-map templates, connector labels, sample web |

Quality gate: reading level review, no copyrighted characters or passages, unambiguous
answer keys, and editable blanks for local curriculum vocabulary.

## Phase 5 — Social Studies and Systems

| Activity | Pack contents |
|---|---|
| 85. Timeline Reconstruction | neutral/public-domain event sets, timeline mats, date-hidden challenge cards |
| 86. Government-Structure Match | branch/role/responsibility cards, relationship mat, jurisdiction note |
| 87. Trade-Route Map | historically scoped maps, commodity cards, source/reference notes |
| 88. Settlement Planner | landscape mats, resources/buildings, constraint challenges |
| 89. Artifact Arrangement | public-domain/original artifact cards, metadata and classification keys |
| 90. Cause-and-Effect Chain | event cards, arrow/link cards, evidence-based answer guides |

Quality gate: historical-source review, dates and terminology checked, no false universal
claims, and clear identification of the specific place/time/government being modeled.

## Phase 6 — Optional Convenience Packs

These activities can already run with common supplies, but lightweight printables would
reduce teacher preparation:

- 4. Question-Limited Cup Challenge — question tokens and role cards
- 8. Architect–Messenger–Builder — role and rule cards
- 10. Blueprint to Building — sample orthographic blueprints
- 45. Fraction-Tile Arrangement — printable fraction strips
- 46. Base-Ten Model Match — place-value mats only
- 47. Sort It the Same — blank sorting-rule and category cards
- 49. Musical Instrument Sequence — instrument cards as an alternative to instruments
- 50. Rhythm Replication — rhythm cards
- 58. Human Robot Course — command cards and printable floor-grid markers
- 68. Oral-to-Written Procedure — procedure recording and handoff sheets
- 72. Equation Tile Match — printable number and operation tiles
- 74. Equivalent-Fraction Model — printable fraction strips/circles

These do not take precedence over activities that currently require absent custom
content.

## Per-Pack Workflow

1. Review the activity page, grade range, standards note, and required components.
2. Write an exact inventory of mats, cards, pieces, challenges, and references.
3. Identify factual, safety, cultural, copyright, and accessibility review needs.
4. Add structured pack data and reusable rendering support.
5. Generate editable HTML.
6. Export a US Letter PDF at 100% scale.
7. Export every page as a 300-DPI PNG.
8. Verify Set A and Set B have identical piece counts and content.
9. Verify Describer-only information does not appear in Builder materials.
10. Check spelling, labels, page breaks, cutting margins, contrast, and grayscale use.
11. Perform subject-area review and record the source/review status in the manifest.
12. Add the activity-page download link through the manifest-driven renderer.
13. Run local structural and link checks.
14. Commit and deploy one coherent batch.
15. Verify live activity pages and PDFs by HTTP status and file signature.

## Automation and Validation Backlog

- Add `npm` or shell commands for build, PDF export, PNG export, and validation.
- Fail validation when a manifest entry points to a missing file.
- Fail validation when an activity marked `complete` lacks HTML, PDF, or PNG pages.
- Compare normalized Set A and Set B contents automatically.
- Check that PDFs are US Letter and that PNGs are 300 DPI dimensions
  (2550×3300 portrait or 3300×2550 landscape).
- Check every generated activity page for its PDF link.
- Produce a coverage report with statuses: `teacher-supplied`, `planned`, `in-review`,
  `complete`, or `not-needed`.
- Add the build and coverage checks to CI after the local pipeline is stable.

## Recommended Release Order

1. **Release 4:** Activity 77 Circuit Description Challenge.
2. **Release 5:** Activities 79, 81, 82, 83, and 84 science packs.
3. **Release 6:** coordinate, map, direction, graph, and robot mats from Phase 2.
4. **Release 7:** visual communication and scene builders from Phase 3.
5. **Release 8:** language/literacy materials from Phase 4.
6. **Release 9:** social-studies materials from Phase 5.
7. **Release 10:** optional convenience packs from Phase 6.

Do not mark the expansion complete until every activity page’s materials statement is
covered by a linked pack, explicitly labeled teacher-supplied materials, or a documented
`not-needed` decision.
