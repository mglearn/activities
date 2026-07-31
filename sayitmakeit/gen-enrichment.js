#!/usr/bin/env node
/* Generate data/enrichment.json from strand-based defaults + per-activity overrides.
 * Merged by build.js. Standards are named at the STRAND level (with a verify caveat)
 * plus confident NGSS Science & Engineering Practices; exact TEKS codes are only
 * asserted where clearly correct. Run:  node gen-enrichment.js  (then RENDER=1 node build.js) */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const acts = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'activities.json'), 'utf8'));

/* SEP-8 (communicating information) genuinely applies to every activity here. */
const SEP8 = 'NGSS SEP-8: Obtaining, Evaluating & Communicating Information';

const STRAND_DEFAULTS = {
  engineering: {
    grades: 'K–5',
    teks: ['2021 Science TEKS · Strand 1: Scientific & Engineering Practices — engineering design & communicating information (confirm grade code)'],
    ngss: [SEP8, 'SEP-6: Constructing Explanations & Designing Solutions (ETS1)'],
    harder: 'Go one-way — ban questions — and add a 30-word limit; require measured lengths and units.',
    easier: 'Allow yes/no questions, agree on a shared base piece, and let the Builder peek once before the barrier goes up.',
  },
  math: {
    grades: '2–8',
    teks: ['Math TEKS · geometry, spatial reasoning & precise mathematical communication (confirm grade code)'],
    ngss: [SEP8, 'SEP-2: Developing & Using Models'],
    harder: 'Require coordinates, units, and exact quantities; describe in one uninterrupted turn with no questions.',
    easier: 'Allow yes/no questions and provide a labeled grid or number line as a shared reference.',
  },
  science: {
    grades: '3–8',
    teks: ['2021 Science TEKS · Strand 1: Scientific & Engineering Practices — communicating information & using models (confirm grade code)'],
    ngss: [SEP8, 'SEP-2: Developing & Using Models'],
    harder: 'Use only precise science vocabulary; one-way delivery, no questions allowed.',
    easier: 'Allow a labeled diagram and yes/no clarifying questions.',
  },
  technology: {
    grades: '2–8',
    teks: ['Technology Applications / CS TEKS · algorithms & precise instructions; Science SEPs where applicable (confirm grade code)'],
    ngss: [SEP8, 'SEP-5: Using Mathematics & Computational Thinking'],
    harder: 'Give the entire algorithm up front as numbered steps; no live questions or corrections.',
    easier: 'Allow the Builder to confirm and act on one instruction at a time.',
  },
  arts: {
    grades: 'K–8',
    teks: ['Fine Arts / ELAR TEKS · describing, creating & precise descriptive language (confirm grade code)'],
    ngss: [SEP8],
    harder: 'Describe using only shape, position, and color words — no gestures, no questions.',
    easier: 'Allow yes/no questions and agree on a shared starting shape or anchor point.',
  },
  facilitation: {
    grades: 'K–8',
    teks: ['ELPS · speaking & listening; applies across any content activity (confirm grade code)'],
    ngss: [SEP8],
    harder: '',
    easier: '',
  },
};

/* Per-activity overrides: STEAM reframes for the 16 former non-STEM activities
 * (strand moves + rewritten summaries), plus confident NGSS performance expectations
 * for the science set. Everything else inherits its strand defaults. */
const OVERRIDES = {
  // ---- Language & Literacy (#59–68) → Arts, reframed to STEAM vocabulary/diagrams ----
  59: { summary: 'The Describer names a hidden STEAM object — a geometric solid, a lab tool, a labeled specimen — using precise vocabulary until the Builder selects the matching one from a shared set.' },
  60: { summary: 'The Describer must convey a STEAM term (like “parallel,” “circuit,” or “symmetry”) without saying the word itself, using only defining attributes, so the Builder identifies or builds it.' },
  61: { summary: 'The Describer details a labeled figure from a diagram — a scientist at work, parts of a machine — so the Builder matches or reconstructs the correct one.' },
  62: { summary: 'From a set of similar scientific diagrams or graphs, the Describer specifies one precisely enough that the Builder can pick exactly the one being described.' },
  63: { summary: 'Partners build a matching procedure sentence step by step — the ordered instructions of a science or engineering process — where word order changes the outcome.' },
  64: { summary: 'The Describer conveys the correct order of a science process or engineering build; the Builder sequences the steps to match.' },
  65: { summary: 'The Describer reconstructs a labeled process diagram — the stages of a life cycle or a build — panel by panel from words alone.' },
  66: { summary: 'The Describer organizes a claim and its supporting evidence (science argumentation) so the Builder recreates the same main-idea-and-support structure.' },
  67: { summary: 'The Describer rebuilds a concept map of a STEAM topic — central idea and linked terms — so the Builder’s web matches node for node.' },
  68: { summary: 'The Describer dictates a clear lab or engineering procedure; the Builder writes it as numbered, repeatable steps, then they check it against the original.' },

  // ---- Social Studies (#85–90) → reframed + re-stranded toward STEAM ----
  85: { strand: 'math', grades: '2–8', summary: 'The Describer conveys an ordered timeline of a scientific or technological process — the history of an invention, or geologic events — and the Builder places the events in exact sequence and spacing.' },
  86: { strand: 'science', grades: '3–8', summary: 'The Describer explains a system’s structure — the levels of an ecosystem, or the subsystems of a machine — so the Builder reconstructs the same hierarchy of parts.' },
  87: { strand: 'math', grades: '3–8', summary: 'The Describer communicates a route or network across a coordinate map — an energy-flow or supply path — using directions and coordinates for the Builder to trace exactly.' },
  88: { strand: 'engineering', grades: '3–8', summary: 'The Describer conveys a site plan under constraints — space, resources, and rules — so the Builder lays out the same engineered design.' },
  89: { strand: 'science', grades: '3–8', summary: 'The Describer arranges labeled specimens or evidence by measurable attributes; the Builder classifies and orders them to match.' },
  90: { strand: 'science', grades: '3–8', summary: 'The Describer lays out a cause-and-effect chain in a system — inputs, changes, and outputs — so the Builder reconstructs the same linked sequence.' },

  // ---- Science set: confident NGSS performance expectations (kept with SEP-8) ----
  35: { ngss: [SEP8, 'K-ESS3-1 / 3-LS4-3/4: organisms & habitats'] },                 // Create a Habitat
  38: { ngss: [SEP8, '5-ESS1-2 / MS-ESS1-2/3: the solar system'] },                    // Solar-System Placement
  77: { ngss: [SEP8, '4-PS3-2 / 4-PS3-4: energy transfer in circuits'] },              // Circuit (Technology)
  78: { ngss: [SEP8, 'MS-PS1-1: models of molecules & atomic composition'] },          // Molecule Model Match
  79: { ngss: [SEP8, '5-LS2-1 / MS-LS2-3: matter & energy in ecosystems (food chains)'] }, // Food-Chain Builder
  80: { ngss: [SEP8, '3-LS1-1: life cycles'] },                                         // Life-Cycle Sequence
  81: { ngss: [SEP8, 'MS-ESS1-4 / MS-ESS2-3: rock strata & Earth’s history'] },         // Rock-Layer Reconstruction
  82: { ngss: [SEP8, '3-ESS2-1 / MS-ESS2-5: weather patterns & maps'] },                // Weather-Map Match
  83: { ngss: [SEP8, 'MS-LS1-1/2: cells & their parts'] },                              // Cell Model Arrangement
  84: { ngss: [SEP8, 'SEP-3: Planning & Carrying Out Investigations'] },                // Experimental-Setup Build
};

const out = {};
acts.forEach((a) => {
  const strand = (OVERRIDES[a.num] && OVERRIDES[a.num].strand) || a.strand;
  const d = STRAND_DEFAULTS[strand] || STRAND_DEFAULTS.facilitation;
  const o = OVERRIDES[a.num] || {};
  out[a.num] = {
    strand,
    grades: o.grades || d.grades,
    teks: o.teks || d.teks,
    ngss: o.ngss || d.ngss,
    harder: o.harder !== undefined ? o.harder : d.harder,
    easier: o.easier !== undefined ? o.easier : d.easier,
  };
  if (o.summary) out[a.num].summary = o.summary;
  if (o.materials) out[a.num].materials = o.materials;
});

fs.mkdirSync(path.join(ROOT, 'data'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'data', 'enrichment.json'), JSON.stringify(out, null, 2));
console.log(`Wrote data/enrichment.json for ${Object.keys(out).length} activities (16 reframed, 10 science NGSS PEs).`);
