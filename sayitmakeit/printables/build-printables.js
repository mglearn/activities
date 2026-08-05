#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const packs = {
  'monster-match': {
    title: 'Monster Match', activity: 21, grades: 'K–8', accent: '#8b2f70',
    materials: 'Two identical sets of monster pieces; Describer-only challenge cards.',
    directions: ['Give each partner one complete piece set and place a barrier between them.', 'The Describer chooses one challenge card and builds the monster without showing it.', 'The Describer explains number, size, shape, pattern, and position. The Builder recreates it.', 'Remove the barrier, compare models, and revise one unclear direction. Switch roles.'],
    accommodations: 'Preteach body-part and position words; permit pointing to a vocabulary strip; reduce the piece set; provide extra response time. Pieces differ by shape, pattern, and label—not color alone.',
    reference: '<h2>Teacher reference</h2><p>There is no single answer: a successful pair produces matching arrangements. Check body-part count, relative size, pattern, orientation, and position.</p>',
    challenges: ['Three eyes; striped round body; two horns; four short legs.', 'One large eye; spotted oval body; two arms; three feet.', 'Two unequal eyes; zigzag body; one horn; two long legs.', 'Four small eyes; plain square body; two ears; one tail.'],
    pieces: ['round body|○|plain','oval body|⬭|stripe','square body|□|dots','zigzag body|◇|zigzag','large eye|◉|plain','small eye|⊙|plain','horn|△|stripe','ear|◒|dots','long arm|━|plain','short arm|—|plain','long leg|┃|stripe','short leg|╵|dots','foot|▰|plain','tail|⌁|zigzag']
  },
  'life-cycle-sequence': {
    title: 'Life-Cycle Sequence', activity: 80, grades: 'K–8', accent: '#0a6b52',
    materials: 'Two identical card sets for butterfly, frog, and bean-plant life cycles.',
    directions: ['Choose one organism and give each partner its complete card set.', 'Behind a barrier, the Describer arranges the stages in a cycle or line.', 'The Describer explains the order and observable changes; the Builder sequences matching cards.', 'Compare, justify the sequence with evidence, then switch organisms or roles.'],
    accommodations: 'Read labels aloud; begin with three stages; use the numbered answer key after the first attempt. Every stage has a distinct silhouette, word label, and pattern cue.',
    reference: '<h2>Answer key</h2><div class="key"><b>Butterfly:</b> 1 Egg → 2 Caterpillar (larva) → 3 Chrysalis (pupa) → 4 Adult butterfly → eggs.<br><b>Frog:</b> 1 Eggs → 2 Tadpole → 3 Tadpole with legs → 4 Froglet → 5 Adult frog → eggs.<br><b>Bean plant:</b> 1 Seed → 2 Germination → 3 Seedling → 4 Mature flowering plant → 5 Pod with seeds → seed.</div><p class="note">Cycles repeat. “Larva” and “pupa” are the scientific terms; familiar terms appear in parentheses.</p>',
    groups: {
      'Butterfly': ['Egg|●|dots','Caterpillar (larva)|⌇⌇⌇|stripe','Chrysalis (pupa)|⬯|cross','Adult butterfly|ƸӜƷ|plain'],
      'Frog': ['Eggs|◉ ◉|dots','Tadpole|●～|stripe','Tadpole with legs|●≋|cross','Froglet|♧|zigzag','Adult frog|♣|plain'],
      'Bean plant': ['Seed|◒|dots','Germination|◒╯|stripe','Seedling|♧|cross','Mature flowering plant|⚘|zigzag','Pod with seeds|◖•••◗|plain']
    }
  },
  'create-a-habitat': {
    title: 'Create a Habitat', activity: 35, grades: '3–8', accent: '#0a6b52',
    materials: 'Two identical sets of habitat pieces and four reusable habitat mats.',
    directions: ['Select the same habitat mat for both partners and divide the matching piece sets.', 'The Describer secretly creates a habitat that includes an organism’s food, water, shelter, and space.', 'Using relative-position and ecosystem vocabulary, the Describer guides the Builder.', 'Compare scenes. Partners identify one way the arrangement meets an organism’s needs and one scientifically unsuitable piece.'],
    accommodations: 'Use one habitat and six pieces at first; offer the word bank; allow yes/no questions. Habitat mats and pieces use names, silhouettes, and patterns, not color alone.',
    reference: '<h2>Teacher reference</h2><div class="key"><b>Desert:</b> cactus, desert grass, lizard, roadrunner; scarce water; rock/burrow shelter.<br><b>Forest:</b> oak, fern, deer, squirrel; stream; tree/log shelter.<br><b>Pond:</b> cattail, algae, frog, fish; pond water; reeds/mud shelter.<br><b>Grassland:</b> grasses, wildflower, bison, prairie dog; water hole; burrow/tall-grass shelter.</div><p class="note">Organisms need food, water, shelter, and adequate space. Some pieces may fit more than one habitat; accept evidence-based reasoning.</p>',
    mats: ['Desert|dunes • dry wash • rocks','Forest|canopy • understory • stream','Pond|open water • shore • mud','Grassland|open prairie • water hole • burrows'],
    pieces: ['cactus|plant|dots','desert grass|plant|stripe','lizard|animal|cross','roadrunner|animal|zigzag','oak|plant|dots','fern|plant|stripe','deer|animal|cross','squirrel|animal|zigzag','cattail|plant|dots','algae|plant|stripe','frog|animal|cross','fish|animal|zigzag','prairie grass|plant|dots','wildflower|plant|stripe','bison|animal|cross','prairie dog|animal|zigzag','water|need|waves','food|need|grid','rock / log|shelter|cross','burrow / reeds|shelter|dots']
  },
  'solar-system-placement': {
    title: 'Solar-System Placement', activity: 38, grades: '3–8', accent: '#244f91',
    materials: 'Two solar-system mats; two identical object sets; Describer-only challenge cards.',
    directions: ['Give each partner a mat and one identical object set; place a barrier between them.', 'The Describer chooses a challenge card and arranges the named objects.', 'The Describer uses left/right, nearer/farther, between, clockwise, and orbit vocabulary to guide the Builder.', 'Compare placements. Use the reference guide to separate model scale from actual astronomical distance.'],
    accommodations: 'Use only the Sun and four inner planets; allow the direction strip; place tactile dots on alternate orbit lines. Objects vary by size, ring, pattern, and printed name.',
    reference: '<h2>Science reference</h2><p><b>Order from the Sun:</b> Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Earth’s Moon orbits Earth. The asteroid belt lies mainly between Mars and Jupiter. Comets travel on elongated paths around the Sun.</p><p class="note">This classroom placement model is not to scale. Planet sizes and orbit spacing are intentionally enlarged for handling. A spacecraft card does not imply a fixed natural orbit.</p>',
    challenges: ['Place all eight planets in order from the Sun.', 'Place Earth and its Moon; put Mars farther from the Sun and a spacecraft between Earth and Mars.', 'Place the asteroid belt between Mars and Jupiter; add a comet on an elongated path.', 'Place the four outer planets; identify the two ice giants and the planet with the most visible ring system.'],
    pieces: ['Sun|sun|rays','Mercury|planet|dots','Venus|planet|stripe','Earth|planet|grid','Moon|moon|plain','Mars|planet|cross','Jupiter|giant|bands','Saturn|ringed|rings','Uranus|ice giant|vertical','Neptune|ice giant|waves','spacecraft|object|grid','comet|object|tail','asteroid|object|dots','direction arrow|tool|arrow']
  },
  'molecule-model-match': {
    title: 'Molecule Model Match', activity: 78, grades: '6–8', accent: '#0a6b52',
    materials: 'Two identical atom-and-bond sets; Describer-only molecule challenge cards.',
    directions: ['Give each partner one identical atom-and-bond set and place a barrier between them.', 'The Describer chooses a challenge card and builds its structural model.', 'The Describer states atom symbols, quantities, bond types, and connectivity; the Builder recreates it.', 'Compare with the answer key. Count atoms and bonds, then discuss what the model shows and what it simplifies.'],
    accommodations: 'Begin with water or carbon dioxide; use the atom key; allow the Builder to repeat directions. Atom pieces use element symbols, names, border styles, and patterns, not color alone.',
    reference: '<h2>Science accuracy &amp; answer key</h2><div class="key"><b>Water, H₂O:</b> H–O–H; two single O–H bonds; bent molecule.<br><b>Carbon dioxide, CO₂:</b> O=C=O; two double C=O bonds; linear molecule.<br><b>Methane, CH₄:</b> four single C–H bonds around carbon; 3-D shape is tetrahedral.<br><b>Oxygen, O₂:</b> O=O; one double bond.<br><b>Nitrogen, N₂:</b> N≡N; one triple bond.<br><b>Ammonia, NH₃:</b> three single N–H bonds; 3-D shape is trigonal pyramidal.</div><p class="note"><b>Model limits:</b> Pieces represent connectivity and simplified geometry, not atom scale, electron distribution, bond length, or motion. Teacher science-content review completed against standard molecular formulas and VSEPR descriptions; classroom instructors should match challenge choice to their curriculum.</p>',
    challenges: ['Water|H₂O|bent|H–O–H','Carbon dioxide|CO₂|linear|O=C=O','Methane|CH₄|tetrahedral|four C–H single bonds','Oxygen|O₂|linear|O=O','Nitrogen|N₂|linear|N≡N','Ammonia|NH₃|trigonal pyramidal|three N–H single bonds'],
    atoms: ['Hydrogen|H|dots','Oxygen|O|stripe','Carbon|C|grid','Nitrogen|N|cross'], bonds: ['single bond|—','double bond|=','triple bond|≡']
  }
};

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const pattern = p => `<span class="symbol ${esc(p)}">`;
const piece = (x) => { const [label,symbol,pat] = x.split('|'); return `<div class="piece">${pattern(pat)}${esc(symbol)}</span><b>${esc(label)}</b></div>`; };
const page = (title, body, cls='') => `<section class="page ${cls}"><header><span>Say It, Make It · Activity ${current.activity}</span><b>${esc(title)}</b></header>${body}<footer>${esc(current.title)} · Print at 100% · CC BY 4.0</footer></section>`;
let current;

function commonPages(p) {
  const directions = `<h1>${esc(p.title)}</h1><p class="subtitle">Classroom-ready printable pack · Grades ${p.grades}</p><div class="info"><b>Pack contents</b><br>${esc(p.materials)} Two student sets are included.</div><h2>Teacher directions</h2><ol>${p.directions.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><h2>Before class</h2><ul><li>Print at 100% on US Letter paper. Use cardstock or laminate for reuse.</li><li>Cut on the thick solid borders. Keep Set A and Set B separate.</li><li>Give challenge/model cards only to the Describer.</li><li>Use a folder, book, or tabletop barrier so partners cannot see each other’s work.</li></ul><h2>Accessibility and accommodations</h2><p>${esc(p.accommodations)}</p>`;
  const labels = `<h1>Storage-envelope labels</h1><div class="labels">${['Set A — Describer','Set B — Builder','Challenge / model cards','Teacher reference'].map(x=>`<div><b>${esc(p.title)}</b><br>${x}<br><small>Count pieces before storing.</small></div>`).join('')}</div><h2>Student language supports</h2><div class="wordbank"><b>Position:</b> above · below · beside · between · near · far · left · right · clockwise<br><b>Clarify:</b> “Please repeat…” · “Is ___ beside ___?” · “What should I place next?”<br><b>Compare:</b> same · different · rotate · move · replace · sequence</div>`;
  return page('Teacher directions', directions) + page('Storage and language supports', labels);
}
function setPage(p, label, pieces, title='Movable pieces') { return page(`${title} — Set ${label}`, `<h1>${esc(title)} <span class="set">Set ${label}</span></h1><p>Cut on the solid borders. This set is identical to the partner set.</p><div class="pieces">${pieces.map(piece).join('')}</div>`, 'cutpage'); }
function challengePage(p) { return page('Describer-only challenge cards', `<h1>Describer-only challenge cards</h1><p class="warning">Keep these cards hidden from the Builder.</p><div class="challenges">${p.challenges.map((x,i)=>{const parts=x.split('|');return `<article><b>Challenge ${i+1}${parts[0]&&!x.includes('|')?'':`: ${esc(parts[0])}`}</b>${parts.length>1?`<strong>${esc(parts[1])}</strong><p>${parts.slice(2).map(esc).join(' · ')}</p>`:`<p>${esc(x)}</p>`}</article>`}).join('')}</div>`); }
function render(p) {
  current=p; let body=commonPages(p);
  if (p.pieces) { body += setPage(p,'A',p.pieces)+setPage(p,'B',p.pieces); }
  if (p.groups) for (const [name,items] of Object.entries(p.groups)) body += setPage(p,'A',items,`${name} life cycle`)+setPage(p,'B',items,`${name} life cycle`);
  if (p.mats) body += page('Habitat mats 1–2', `<h1>Habitat mats</h1><div class="mats">${p.mats.slice(0,2).map(x=>{const [n,c]=x.split('|');return `<div class="mat ${n.toLowerCase()}"><b>${n}</b><span>${c}</span><div class="zones">near · middle · far</div></div>`}).join('')}</div>`, 'landscape') + page('Habitat mats 3–4', `<h1>Habitat mats</h1><div class="mats">${p.mats.slice(2).map(x=>{const [n,c]=x.split('|');return `<div class="mat ${n.toLowerCase()}"><b>${n}</b><span>${c}</span><div class="zones">near · middle · far</div></div>`}).join('')}</div>`, 'landscape');
  if (p.title==='Solar-System Placement') body += page('Solar-system placement mats', `<h1>Solar-system placement mat</h1><p>Print this page twice—one for each partner.</p><div class="orbits"><b>SUN</b>${[1,2,3,4,5,6,7,8].map(n=>`<i style="--n:${n}">${n}</i>`).join('')}</div><div class="direction">← nearer to Sun &nbsp; | &nbsp; farther from Sun →</div>`, 'landscape');
  if (p.atoms) { const atoms=[]; for(const a of p.atoms) for(let i=0;i<6;i++) atoms.push(a); body+=setPage(p,'A',atoms,'Atom pieces')+setPage(p,'B',atoms,'Atom pieces'); const bonds=[]; for(const b of p.bonds) for(let i=0;i<8;i++) bonds.push(b+'|plain'); body+=setPage(p,'A',bonds,'Bond pieces')+setPage(p,'B',bonds,'Bond pieces'); }
  if (p.challenges) body += challengePage(p);
  body += page('Answer key / teacher reference', `<h1>${esc(p.title)} reference</h1>${p.reference}<h2>Quality check after a round</h2><ul><li>Can each student identify pieces by shape or label without relying on color?</li><li>Do both models match in pieces, order, orientation, and relative position?</li><li>Which direction was most precise? Which should be revised?</li></ul>`);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(p.title)} Complete Printable Pack</title><link rel="stylesheet" href="../pack.css"></head><body style="--accent:${p.accent}">${body}</body></html>`;
}

for (const [slug,p] of Object.entries(packs)) {
  const dir=path.join(ROOT,slug); fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,`${slug}-complete-pack.html`),render(p));
}
console.log(`Generated ${Object.keys(packs).length} printable packs.`);
