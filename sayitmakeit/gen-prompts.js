#!/usr/bin/env node
/* Generate image-prompts.md from data/activities.json.
 * One prompt per activity (+ hero + strand banners), with a shared style guide,
 * exact target filenames, dimensions, and alt text. Run:  node gen-prompts.js */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const acts = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'activities.json'), 'utf8'));

const STRAND = {
  science:      { label: 'Science',            accent: '#0a6b52' },
  technology:   { label: 'Technology',         accent: '#2563a8' },
  engineering:  { label: 'Engineering',        accent: '#b45309' },
  arts:         { label: 'Arts & Design',      accent: '#b83280' },
  math:         { label: 'Mathematics',        accent: '#3f2a78' },
  facilitation: { label: 'Facilitation Modes', accent: '#516079' },
};
const ORDER = ['science', 'technology', 'engineering', 'arts', 'math', 'facilitation'];

const STYLE = [
  'friendly flat vector illustration for a K–8 classroom; clean rounded shapes, bold simple forms, consistent line weight and flat lighting across the whole set',
  'palette built on navy #054c8c and gold #fbd239 plus the strand accent noted per image; soft off-white background (#f4f8fc) with one subtle rounded panel',
  'two diverse, inclusive kid characters drawn simply (rounded bodies, simple dot eyes, no specific ethnicity markers)',
  'a low central divider / barrier screen between the two children — one describes, the other builds',
  'NO text, letters, numbers, speech text, watermarks, or logos rendered anywhere in the image',
  '1200 × 600 px, 2:1 landscape banner; uncluttered composition with clear focal objects; safe margins so nothing important touches the edges',
];

function promptFor(a) {
  const s = STRAND[a.strand];
  const focal = (a.materials || '').replace(/\s+/g, ' ').trim();
  const scene = (a.summary || '').replace(/\s+/g, ' ').trim();
  return [
    `Flat vector classroom illustration. Strand: ${s.label}; strand accent ${s.accent}.`,
    `Scene: the child on the left (the Describer) looks at the finished object and speaks; the child on the right (the Builder) recreates it behind a low barrier screen.`,
    scene ? `What is being described: ${scene}` : '',
    focal ? `Focal objects to show clearly: ${focal}` : `Focal objects: simple shapes and building pieces.`,
    `Keep it warm, clear, and legible at small sizes. No text or numbers in the image.`,
  ].filter(Boolean).join(' ');
}

let out = '';
out += `# Say It, Make It — image prompts\n\n`;
out += `Prompts to generate one illustration per activity (plus a hero and six strand banners).\n`;
out += `Drop the finished PNGs at the exact paths below and they appear automatically on the\n`;
out += `cards and guided pages (the site references them and hides the slot until the file exists).\n\n`;
out += `## Shared style (apply to EVERY image)\n\n`;
STYLE.forEach((s) => { out += `- ${s}\n`; });
out += `\n> Tip: keep the same generator/seed settings across the batch so the 106 scenes look like one set.\n\n`;

out += `---\n\n## Hero + strand banners\n\n`;
out += `### Hero — landing banner\n`;
out += `- **file:** \`assets/hero.png\` (1600×800, 2:1)\n`;
out += `- **alt:** Children on both sides of a barrier describing and building models together — the Say It, Make It banner.\n`;
out += `- **prompt:** ${STYLE.join('. ')}. A lively wide banner showing several pairs of children at barriers building different things — cups, blocks, a coordinate grid, a simple circuit, a map — conveying a whole STEAM activity library. Navy-to-magenta wash, gold accents. No text.\n\n`;
ORDER.forEach((k) => {
  const s = STRAND[k];
  out += `### Strand banner — ${s.label}\n`;
  out += `- **file:** \`assets/strand-${k}.png\` (1200×400, 3:1)\n`;
  out += `- **accent:** ${s.accent}\n`;
  out += `- **prompt:** ${STYLE.slice(0,4).join('. ')}. A slim header banner themed to ${s.label} with objects from that strand; strand accent ${s.accent}. No text.\n\n`;
});

out += `---\n\n## Activities (106)\n`;
ORDER.forEach((k) => {
  const items = acts.filter((a) => a.strand === k).sort((x, y) => x.num - y.num);
  if (!items.length) return;
  out += `\n### ${STRAND[k].label} — ${items.length}\n\n`;
  items.forEach((a) => {
    out += `#### ${a.num} · ${a.title}\n`;
    out += `- **file:** \`assets/act/${a.slug}.png\` (1200×600)\n`;
    out += `- **accent:** ${STRAND[a.strand].accent}\n`;
    out += `- **alt:** Two students at a barrier: one describes ${a.title.toLowerCase()} while the other builds it.\n`;
    out += `- **prompt:** ${promptFor(a)}\n\n`;
  });
});

fs.writeFileSync(path.join(ROOT, 'image-prompts.md'), out);
console.log(`Wrote image-prompts.md (${acts.length} activities + hero + ${ORDER.length} strand banners).`);
