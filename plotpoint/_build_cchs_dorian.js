#!/usr/bin/env node
/* Builds the CCHS summer-reading PlotPoint room for The Picture of Dorian Gray.
   The room uses PlotPoint's established ten-section engine. English is authored
   here; the six locale packs intentionally use the engine's documented English
   fallback until fluent-educator translations are reviewed. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const out = path.join(root, 'doriangray');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'frankenstein', 'data.en.js'), 'utf8'), ctx);
const ui = JSON.parse(JSON.stringify(ctx.window.__ROOM__.ui));
ui['vocab.title'] = 'Words for The Picture of Dorian Gray';
ui['relic.title'] = 'The Locked Portrait Gallery';
ui['ctob.title'] = 'The Case of the Unaging Face';
ui['arcade.title'] = 'Public Image or Hidden Cost?';

const artifacts = [
  ['portrait','The Changing Portrait','A full-length portrait Basil Hallward paints of Dorian Gray.','It records the age and moral damage that Dorian’s unchanged face conceals.','The divided self: public beauty versus private consequence.'],
  ['studio','Basil’s Studio','The flower-filled London studio where Basil completes the portrait and Lord Henry first influences Dorian.','It is the origin point of both the artwork and Dorian’s wish to remain young.','Art can reveal a truth that conversation and appearance hide.'],
  ['theater','The Theater Program','A reminder of Sibyl Vane’s performances and Dorian’s infatuation with her acting.','When love makes performance feel false to Sibyl, Dorian values the lost illusion more than the person.','Aesthetic worship can erase another person’s humanity.'],
  ['yellowbook','The Yellow Book','A decadent French novel Lord Henry gives Dorian after Sibyl’s death.','Dorian treats it as a script for sensation, collecting experiences while avoiding responsibility.','Influence matters, but influence does not remove personal choice.'],
  ['schoolroom','The Locked Schoolroom','The upstairs room where Dorian hides the portrait from every visitor.','Its secrecy lets him separate his spotless reputation from the evidence of his conduct.','Concealment protects an image while deepening isolation and fear.'],
  ['letter','Basil’s Unfinished Letter','Basil plans to leave for Paris but first confronts Dorian about destructive rumors.','The confrontation leads Dorian to show Basil the portrait and then murder him.','The demand to face evidence becomes dangerous when reputation matters more than repentance.'],
  ['knife','The Knife Before the Portrait','The weapon Dorian turns against the portrait near the novel’s end.','He tries to destroy the record of conscience instead of accepting responsibility.','Destroying evidence cannot undo the self that created it.']
].map(([id,name,fact,role,meaning]) => ({
  id,name,image:`images/${id}.webp`,clues:[fact,role,meaning],
  identify:{q:'Which description best identifies this artifact?',choices:[fact,'An unrelated object with no role in Dorian’s choices','A public award Dorian receives for charity','A document that proves Lord Henry committed Dorian’s actions']},
  purpose:{q:'What role does it play in the novel?',choices:[role,'It resolves every conflict immediately','It proves appearance always reveals character','It removes Dorian’s responsibility for his choices']},
  significance:{q:'What larger idea does it help develop?',choices:[meaning,'Beauty guarantees moral goodness','Art has no connection to life','Consequences disappear when no one sees them']},
  reveals:meaning, conceals:'What the object cannot settle without careful attention to Dorian’s choices and their effects on other people.',
  ace:`Articulate what ${name.toLowerCase()} shows; connect it to Dorian’s divided identity; extend the idea to a modern conflict between image and accountability.`
}));

const content = {
  meta:{title:'The Picture of Dorian Gray',author:'Oscar Wilde',grades:'Grades 11–12',genre:'Gothic philosophical novel',time:'60–90 minutes',spoiler:'Full spoilers',rights:'Public domain',
    textAccess:'The 1890 and 1891 forms are public domain. The linked Project Gutenberg edition is the revised 1891 novel; teachers should confirm that it matches the assigned edition.',
    copyright:'Oscar Wilde’s novel is public domain in the United States. Modern introductions, annotations, and adaptations may still be copyrighted.',
    contentNote:'The novel includes murder, suicide, drug use, blackmail, exploitation, anti-Semitic stereotypes, and coded sexuality. Preview the assigned edition and follow local policy.',
    gutenberg:'https://www.gutenberg.org/ebooks/174',audio:'https://librivox.org/the-picture-of-dorian-gray-by-oscar-wilde/',
    hero:'images/hero.webp',heroAlt:'An original instructional illustration: a handsome Victorian gentleman before a veiled portrait in a shadowed London room, with the painted face beginning to age.'},
  hook:'Dorian Gray sees Basil Hallward’s portrait of him and wishes that the painted image—not his own face—would bear the marks of age and experience. The wish appears to come true. Guided by Lord Henry’s glittering philosophy of sensation, Dorian protects a flawless public image while the hidden portrait records cruelty, corruption, fear, and guilt. Wilde’s Gothic novel asks whether beauty can be separated from ethics, whether influence excuses choice, and whether art reveals or conceals the self.',
  goals:['Trace how the portrait externalizes Dorian’s conscience and changes after decisive choices.','Analyze the contrast among Basil’s moral concern, Lord Henry’s epigrams, and Dorian’s actions.','Explain how dramatic irony separates Dorian’s reputation from what the reader knows.','Evaluate the novel’s competing claims about beauty, influence, responsibility, and reform.'],
  stages:{before:['Preview aestheticism, Gothic doubling, and the difference between the 1890 and 1891 editions.','Discuss whether a public image can become a substitute for character.'],during:['Track every change in the portrait alongside the choice that precedes it.','Distinguish Lord Henry’s provocative claims from the consequences produced by Dorian’s actions.'],after:['Use the relic room and case locks to reconstruct the chain of responsibility.','Complete the analysis and transfer task using evidence from the assigned edition.']},
  ace:{articulate:{goal:'Explain one idea in your own words.',prompt:'Explain how the portrait functions as more than a supernatural object.'},connect:{goal:'Show how ideas fit together.',prompt:'Connect one of Lord Henry’s claims to a later choice Dorian makes and its consequence.'},extend:{goal:'Apply the learning.',prompt:'Apply the novel’s public-image/private-self conflict to a modern context, noting where the comparison breaks down.'}},
  vocab:[
    ['aestheticism','a movement emphasizing beauty and artistic experience','judging an object chiefly by its beauty','treating beauty as irrelevant'],['epigram','a brief, polished statement with a surprising turn','one of Lord Henry’s memorable reversals','a long plot summary'],['hedonism','the view that pleasure is a central good','Dorian’s pursuit of sensation','accepting hardship for a moral duty'],['decadence','luxurious self-indulgence associated with decline','Dorian’s increasingly secret life','disciplined simplicity'],['double','a character or image that reflects a divided self','the portrait as Dorian’s moral double','an unrelated background figure'],['dramatic irony','a gap between what the audience knows and what characters know','society praises Dorian while readers know his secret','every character sharing the same facts'],['influence','the power to shape another person’s ideas or behavior','Lord Henry shaping Dorian’s outlook','physical force that removes all choice'],['conscience','the inward sense that judges right and wrong','the portrait making guilt visible','public applause alone'],['reputation','the judgment others hold about a person','Dorian’s preserved social image','the full truth of private conduct']
  ].map(([term,def,example,nonexample])=>({term,def,example,nonexample,context:`In the novel, ${term} helps explain the gap between appearance, choice, and consequence.`})),
  relic:{name:'The Locked Portrait Gallery',intro:'Seven original instructional reconstructions of objects and places from the novel. They are teaching images, not illustrations from any edition.',artifacts},
  ctob:{name:'The Case of the Unaging Face',intro:'Open six evidence locks by reconstructing the novel’s causal chain.',locks:[
    {type:'word',prompt:'Who paints Dorian’s portrait? (surname)',evidence:['He is an artist.','He admires Dorian and worries about Lord Henry’s influence.'],hints:['His first name is Basil.','The surname begins Hall…','The answer is Hallward.'],answer:'hallward'},
    {type:'mc',prompt:'Why does the portrait become central to Dorian’s conflict?',options:['It visibly bears the age and damage his own face escapes.','It makes Basil famous and ends the story happily.','It proves Lord Henry controls the supernatural event.','It is displayed publicly throughout the novel.'],hints:['Compare the painted face with Dorian’s public appearance.']},
    {type:'sequence',prompt:'Order these turning points from earliest to latest.',items:['Dorian wishes the portrait would age instead of him.','Dorian rejects Sibyl after her failed performance.','Dorian shows Basil the changed portrait and kills him.','Dorian stabs the portrait and dies.'],hints:['The wish begins the bargain.','Sibyl comes before Basil’s final visit.','The attempted destruction ends the sequence.']},
    {type:'word',prompt:'What single word names the social image Dorian protects while hiding the portrait?',evidence:['Other people continue to see youth and charm.','Rumors circulate, but his appearance shields him.'],hints:['It means what others think of someone.','It begins rep…','The answer is reputation.'],answer:'reputation'},
    {type:'mc',prompt:'What does Basil’s confrontation demand from Dorian?',options:['That he face the moral meaning of the rumors and his influence on others.','That he sell the portrait for money.','That he travel with Lord Henry.','That he deny art has any value.'],hints:['Basil is concerned about character, not price.']},
    {type:'mc',prompt:'Why does Dorian’s final attack on the portrait fail as reform?',options:['He attacks the evidence of conscience rather than honestly accepting responsibility.','The knife is too weak to cut canvas.','Lord Henry secretly replaces the portrait.','The portrait has never changed.'],hints:['Distinguish erasing evidence from repairing harm.']}
  ]},
  arcade:{name:'Public Image or Hidden Cost?',instruction:'Sort each statement by whether it belongs to Dorian’s admired public image or to the hidden consequences recorded by the portrait.',buckets:[{id:'image',label:'Public image',short:'Image'},{id:'cost',label:'Hidden cost',short:'Cost'}],cards:[
    ['Dorian’s face remains youthful while years pass.','image','Society reads beauty as evidence of innocence.'],['Guests continue to find Dorian charming.','image','His social performance protects his standing.'],['The portrait is locked away from visitors.','cost','The concealed canvas records what reputation omits.'],['Sibyl dies after Dorian’s cruel rejection.','cost','Aesthetic disappointment has a human consequence.'],['Basil is murdered after seeing the portrait.','cost','Dorian answers moral confrontation with violence.'],['Rumors fail to overcome the evidence of Dorian’s appearance.','image','The novel dramatizes the persuasive power of surfaces.'],['Alan Campbell is coerced into destroying evidence.','cost','Dorian extends his secrecy through blackmail and exploitation.'],['Dorian’s attempted reform does not restore those he harmed.','cost','A single self-flattering act cannot erase a pattern of choices.']
  ].map(([text,bucket,why])=>({text,bucket,why})),followup:'Why does Wilde let society see one Dorian while the reader and portrait see another?'},
  analysis:{mcq:[
    ['The portrait most strongly functions as —','an external record of conscience and consequence.','proof that beauty and goodness are identical.','a neutral decoration with no structural role.','evidence that Basil controls Dorian.'],
    ['Lord Henry’s role is best understood as —','a powerful influence whose ideas tempt Dorian, without eliminating Dorian’s agency.','the direct performer of every crime.','a reliable moral guide endorsed by every consequence.','a narrator who knows about the portrait.'],
    ['Sibyl’s failed performance matters because —','Dorian values the aesthetic illusion she created more than her full humanity.','it proves she never loved acting.','it causes Basil to destroy the portrait.','it exposes Dorian’s secret to London.'],
    ['The locked room chiefly develops the theme of —','secrecy dividing public reputation from private responsibility.','education improving Dorian’s judgment.','friendship repairing every harm.','wealth guaranteeing safety.'],
    ['The ending most clearly rejects the belief that —','a person can destroy the evidence of wrongdoing without confronting the self responsible for it.','art can affect a viewer.','choices produce consequences.','reputation can mislead.']
  ].map(([q,...options])=>({q,options,why:options[0]})),short:['Compare Basil’s and Lord Henry’s ideas about what art should do. Which view does the plot complicate most?','Choose one change in the portrait and explain the decision that causes it and the theme it develops.'],paragraph:'How does Wilde use the gap between Dorian’s face and portrait to develop a claim about beauty and moral responsibility? Use a precise sequence of evidence.',aceReflection:'Which interpretation changed as you connected Dorian’s choices to their consequences?'},
  extend:{name:'The Curated Self',prompt:'Compare Dorian’s protected public image with a modern form of self-curation. Explain what transfers, what changes, and where the comparison breaks down.',format:'An evidence-based comparison that keeps the novel’s supernatural mechanism distinct from modern technology.'},
  genaiPrompts:[{title:'Articulate',text:'Ask me questions that help me explain the portrait as a symbol without writing my answer.'},{title:'Connect',text:'Challenge my connection between one of Lord Henry’s claims and a later consequence.'},{title:'Evidence',text:'Check whether my evidence from The Picture of Dorian Gray supports my claim; do not rewrite it.'},{title:'Counterreading',text:'Offer one plausible counterreading of Dorian’s responsibility and ask me to respond with evidence.'},{title:'Context',text:'Help me distinguish aestheticism as a historical movement from Dorian’s individual choices.'},{title:'Critique',text:'Identify unsupported assumptions in my analysis and respond only with questions.'}],
  teacher:{overview:'A public-domain, full-spoiler companion focused on Gothic doubling, aestheticism, dramatic irony, influence, agency, and responsibility.',reviewNotes:['Confirm whether the course uses the 1890 magazine text or Wilde’s revised 1891 book edition.','Preview mature content, stereotypes, coded sexuality, murder, suicide, drug use, and blackmail.','Verify all standards and translations locally before high-stakes use.']},
  standards:{teks:'Aligned to English IV strands for response, multiple genres, author’s craft, composition, and inquiry. Confirm exact expectations. (Needs review)',elps:'Supports listening, speaking, reading, and writing through visuals, structured talk, vocabulary, and evidence frames. (Needs review)',ccss:'RL.11-12.1–6; W.11-12.1, 4, 9; SL.11-12.1. (Needs review)',udl:'Multiple means of engagement, representation, and action/expression through visual artifacts, audio access, sorting, writing, and print.'}
};

fs.mkdirSync(path.join(out, 'images'), {recursive:true});
fs.mkdirSync(path.join(out, 'lang'), {recursive:true});
fs.writeFileSync(path.join(out, 'data.en.js'), `/* PlotPoint — The Picture of Dorian Gray. Generated by _build_cchs_dorian.js. */\nwindow.__ROOM__ = ${JSON.stringify({id:'doriangray',storageKey:'plotpoint.doriangray.v1',ui,content},null,2)};\n`);

let index = fs.readFileSync(path.join(root, 'frankenstein', 'index.html'), 'utf8')
  .replaceAll('Frankenstein; or, The Modern Prometheus', 'The Picture of Dorian Gray')
  .replaceAll('Frankenstein', 'The Picture of Dorian Gray')
  .replaceAll('frankenstein', 'doriangray')
  .replace('Mary Shelley', 'Oscar Wilde')
  .replace(/<meta name="description" content="[^"]+">/, '<meta name="description" content="A PlotPoint learning room for Oscar Wilde’s The Picture of Dorian Gray (grades 11–12): vocabulary, a portrait gallery, an evidence breakout, an image-versus-cost arcade game, analysis, and a transfer task. Public domain, with free text and audiobook links.">')
  .replace('--accent:#35594f;--accent-rgb:53,89,79', '--accent:#6b3048;--accent-rgb:107,48,72');
fs.writeFileSync(path.join(out, 'index.html'), index);

let policy = fs.readFileSync(path.join(root, 'frankenstein', 'policy.html'), 'utf8')
  .replaceAll('Frankenstein; or, The Modern Prometheus', 'The Picture of Dorian Gray')
  .replaceAll('Frankenstein', 'The Picture of Dorian Gray')
  .replaceAll('frankenstein', 'doriangray')
  .replaceAll('Mary Shelley', 'Oscar Wilde')
  .replaceAll('1818', '1891')
  .replace(/<p>This room does <b>not<\/b> reproduce Shelley's novel[\s\S]*?<\/p>/, '<p>This room does <b>not</b> reproduce Wilde’s novel and invents no quotations. <i>The Picture of Dorian Gray</i> is in the public domain in the United States. The linked Project Gutenberg text is the revised 1891 book edition; Wilde’s shorter 1890 magazine version differs, so verify the assigned edition before teaching. The linked LibriVox recording is freely available. Modern introductions, annotations, translations, and adaptations may remain copyrighted. The original activity content is licensed <b>CC BY-NC 4.0</b>. Relic-room images are original instructional reconstructions. Standards are aligned to, not reproduced from, and require local review.</p>');
fs.writeFileSync(path.join(out, 'policy.html'), policy);

for (const code of ['es','vi','ar','hi','ur','zh']) {
  fs.writeFileSync(path.join(out,'lang',`${code}.js`), `/* ${code}: English-content fallback pending fluent-educator review. */\nwindow.__ROOM_LANGS__ = window.__ROOM_LANGS__ || {};\nwindow.__ROOM_LANGS__.${code} = { ui: {}, content: {} };\n`);
}
console.log(`Built ${out}`);
