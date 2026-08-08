/* PlotPoint — "The Charge of the Light Brigade" by Alfred, Lord Tennyson (1854).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem (1854) is in the public domain in the United States, so this
   room may reference it directly. It is studied here as LITERATURE — meter, refrain,
   anaphora, imagery, personification, and tone — in a neutral, academic frame consistent
   with the Texas required literary-works list (19 TAC §110.70, English II / high school).
   The room paraphrases, quotes only brief public-domain phrases where a close reading needs
   them, and reproduces no copyrighted edition. Standards are good-faith alignment; TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "lightbrigade",
  storageKey: "plotpoint.lightbrigade.v1",

  ui: {
    "skip": "Skip to the activity",
    "brand.tag": "Read · Reason · Play",
    "reset": "Reset",
    "reset.confirm": "Reset this room and clear saved progress on this device?",
    "footer.tagline": "No logins · no accounts · no data collected · runs entirely in your browser.",
    "footer.privacy": "Privacy & compliance",
    "footer.back": "All PlotPoint rooms",
    "review.flag": "Needs review",
    "progress.chip": "{n}/{total} activities done",

    "nav.enter": "Enter the Poem", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Poem",
    "enter.by": "by {a}",
    "enter.spoiler": "Spoiler level",
    "enter.access": "Text access",
    "enter.copyright": "Copyright",
    "enter.contentReview": "Content-review note",
    "enter.contentDefault": "Districts should review edition, maturity level, local policy, instructional purpose, student needs, and community expectations.",
    "enter.goals": "Learning goals",
    "enter.stages": "When to use this room",
    "enter.stage.before": "Before reading",
    "enter.stage.during": "During reading",
    "enter.stage.after": "After reading",
    "enter.aceEyebrow": "Thinking routine",
    "enter.ace": "The ACE Framework",
    "enter.aceIntro": "Every task in this room asks you to Articulate, Connect, and Extend your thinking.",
    "enter.readListen": "Read — free",
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "The poem (1854) is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Charge of the Light Brigade",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Valley of Death",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the poem",
    "relic.q.significance": "What it reveals about the poem's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Into the Valley",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the poem closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Danger or Honor?",
    "arcade.default": "Sort each image by the feeling it creates in the poem.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Images to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary Analysis",
    "analysis.intro": "Five evidence questions, then written responses. Every question rewards the best-supported reading.",
    "analysis.mc": "Question {n}",
    "analysis.check": "Check my answers",
    "analysis.answerAll": "Answer all five questions first.",
    "analysis.score": "{c} of {total} best-supported answers.",
    "analysis.written": "Written responses",
    "analysis.writtenIntro": "These stay on your device. Print them from the Print Materials tab.",
    "analysis.short": "Short response {n}",
    "analysis.paragraph": "Evidence paragraph",
    "analysis.aceReflection": "ACE reflection",
    "analysis.localNote": "Your writing is never sent anywhere — it stays in this browser.",

    "extend.eyebrow": "Extend the Idea",
    "extend.title": "One Charge, One Idea",
    "extend.format": "Format",
    "extend.evidence": "The image from the poem I am building on",
    "extend.transfers": "What transfers to another text or situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My evidence-based comparison",
    "extend.localNote": "Your response stays on this device. You own it.",

    "genai.eyebrow": "Gen AI Thinking Partner",
    "genai.title": "Optional Gen AI Support",
    "genai.rule": "Think first. Use Gen AI after effort, not before it. Never let Gen AI replace your reasoning.",
    "genai.enable": "Teacher: enable Gen AI supports on this device",
    "genai.enableNote": "Off by default. This setting is stored only in this browser and is never transmitted.",
    "genai.warning": "Never paste names, private information, or another person's writing. Use only district-approved tools.",
    "genai.prompts": "Copyable prompts",
    "genai.copy": "Copy", "genai.copied": "Copied ✓",
    "genai.receipt": "Gen AI Thinking Receipt",
    "genai.receiptIntro": "If you use Gen AI, complete this receipt so your reasoning stays yours. It stays on this device.",
    "genai.before": "Before Gen AI", "genai.during": "Gen AI interaction", "genai.after": "After Gen AI",
    "r.first": "1. My first explanation", "r.evidence": "2. My initial evidence", "r.question": "3. My unanswered question",
    "r.asked": "4. What I asked", "r.suggested": "5. What the tool suggested",
    "r.accepted": "6. What I accepted", "r.changed": "7. What I changed", "r.rejected": "8. What I rejected",
    "r.why": "9. Why I made those choices", "r.textEvidence": "10. My evidence from the text", "r.final": "11. My final ACE response",
    "genai.altTitle": "Non-AI alternative",
    "genai.alt": "Prefer no AI? Trade receipts with a partner and interview each other with the same questions, or use the printed thinking sheet.",

    "print.eyebrow": "Print Student Materials",
    "print.title": "Printable Packet",
    "print.intro": "Print a no-login paper packet for this room. Use your browser's print dialog to save as PDF.",
    "print.item.vocab": "Vocabulary reference",
    "print.item.relic": "Valley of Death evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Single-image transfer organizer",
    "print.item.ace": "ACE organizer",
    "print.item.receipt": "Gen AI thinking receipt",
    "print.button": "Print / Save as PDF",
    "print.answer": "Answer:",

    "teacher.eyebrow": "Teacher Guide",
    "teacher.title": "For the Educator",
    "teacher.pathways": "Assignment pathways",
    "teacher.standards": "Standards & supports",
    "teacher.standardsNote": "This room is aligned to — not reproduced from — the standards below. Confirm codes against your current adoption.",
    "teacher.framework": "Framework", "teacher.codes": "Alignment",
    "teacher.answerKeys": "Answer keys (educator reference)",
    "teacher.answerNote": "These are provided for teachers. Assign the student tabs before revealing keys.",
    "teacher.reviewItems": "Items to verify before teaching",
    "path.quick": "Quick Play", "path.quick.time": "15–25 minutes",
    "path.quick.body": "Vocabulary preview, arcade game, five-question check, one Articulate response.",
    "path.invest": "Investigation", "path.invest.time": "30–45 minutes",
    "path.invest.body": "Relic Room, evidence organizer, one Connect response, optional discussion.",
    "path.complete": "Complete Study", "path.complete.time": "45–75 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, close-reading breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      gutenberg: "https://en.wikisource.org/wiki/The_Charge_of_the_Light_Brigade",
      title: "The Charge of the Light Brigade",
      author: "Alfred, Lord Tennyson",
      grades: "English II",
      genre: "Poetry · Narrative · War",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1854)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "The poem (1854) is in the public domain, so this room may reference it directly. \"The Charge of the Light Brigade\" is studied here as literature — its meter, refrain, anaphora, imagery, and tone. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "\"The Charge of the Light Brigade\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. The poem depicts soldiers riding to their deaths in war; it is presented here as literature — meter, refrain, imagery, personification, and tone — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Charge of the Light Brigade — a line of British cavalry galloping down a smoke-filled valley toward distant cannon, sabres raised, under a heavy grey sky."
    },
    hook: "Half a league, half a league, half a league onward. Feel the rhythm gallop like hooves. About six hundred British cavalry ride straight at rows of enemy cannon — because someone gave the wrong order. They do not stop. They do not question. \"Theirs but to do and die.\" Read it as a poem, and watch how the beat itself carries the soldiers into the valley of Death, and how Tennyson turns a military blunder into a call to honor the men who obeyed.",
    goals: [
      "Understand \"The Charge of the Light Brigade\" as a narrative poem commemorating a real, doomed cavalry charge in the Crimean War.",
      "Analyze how the driving, galloping meter, the refrain of \"the six hundred,\" and repeated words re-create the motion and momentum of the charge.",
      "Trace the anaphora of danger (\"Cannon to right of them...\") and the personification of Death and Hell, and the feelings each creates.",
      "Interpret how the poem honors courage, obedience, and sacrifice even after a leader's blunder — and why it has shaped how we speak of duty and heroism."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the literary terms meter, refrain, and anaphora.",
        "Discuss: how can the sound and rhythm of a poem, not just its words, make you feel motion, speed, or danger?"
      ],
      during: [
        "Use the Valley of Death relic room to slow down and read the poem image by image.",
        "Track the charge: the galloping start, the fatal order, the ring of cannon, the ride in and the ride back with far fewer men."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the poem's structure, sound, and imagery.",
        "Complete the Extend task to carry the honor-the-sacrifice theme, or the galloping-meter technique, to another text or event."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what \"The Charge of the Light Brigade\" is about and how it wants you to feel about the soldiers. Include one image or line from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two features of the poem — for example the galloping meter and the refrain \"the six hundred.\" Explain how the poem's sound and its repetition work together to shape its meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — using rhythm and repetition to honor a group's sacrifice — to another text or a real event. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "meter", def: "The regular pattern of stressed and unstressed beats in a line of poetry.", example: "The pounding, galloping beat of \"Half a league, half a league.\"", nonexample: "A line with no rhythm at all, like ordinary conversation.", context: "The poem's driving meter imitates the sound of galloping horses." },
      { term: "refrain", def: "A line or phrase repeated at intervals throughout a poem.", example: "\"The six hundred\" returning at the end of stanza after stanza.", nonexample: "A phrase used only once and never repeated.", context: "The refrain \"the six hundred\" keeps the doomed soldiers before us." },
      { term: "anaphora", def: "The repetition of the same word or phrase at the start of successive lines.", example: "\"Cannon to right of them, / Cannon to left of them, / Cannon in front of them.\"", nonexample: "Every line beginning with a different word.", context: "Anaphora piles up the cannon on every side of the riders." },
      { term: "personification", def: "Giving human qualities, actions, or form to something not human.", example: "Death with a mouth and Hell with jaws that swallow the riders.", nonexample: "Describing death plainly as the end of life.", context: "The poem personifies Death and Hell as monsters the soldiers ride into." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Flashing sabres bare and shot and shell thundering on every side.", nonexample: "An abstract word like 'bad' with no picture.", context: "The poem's battle imagery lets us see and hear the charge." },
      { term: "tone", def: "The writer's attitude toward the subject, felt through word choice and sound.", example: "The proud, mournful voice that says \"Honour the Light Brigade.\"", nonexample: "A flat report of facts with no feeling.", context: "The poem's heroic, elegiac tone honors the men even after a blunder." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "Courage, obedience, and honor in the face of a fatal command.", nonexample: "A single small detail with no larger meaning.", context: "The poem's theme is honoring sacrifice, even one caused by error." },
      { term: "league", def: "An old unit of distance, roughly three miles.", example: "\"Half a league, half a league, half a league onward.\"", nonexample: "A group of sports teams.", context: "\"Half a league\" measures the distance of the charge in the poem's first line." },
      { term: "sabre", def: "A cavalry sword with a curved blade.", example: "\"Flashed all their sabres bare\" as the riders reach the guns.", nonexample: "A rifle fired from far away.", context: "The riders draw their sabres to fight the gunners at close range." }
    ],

    relic: {
      name: "The Valley of Death",
      intro: "Seven instructional reconstructions of the moments and images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "gallop", name: "Half a League Onward", image: "images/gallop.webp",
          clues: ["The poem opens \"Half a league, half a league, / Half a league onward.\"", "The repeated, pounding beat sounds like horses galloping.", "The riders move \"into the valley of Death.\""],
          identify: { q: "What does the opening line establish?", choices: ["A driving, galloping rhythm that pulls the reader forward with the charge", "A slow, still, quiet mood", "A humorous, playful tone", "A conversation between two soldiers"] },
          purpose: { q: "What is the role of this galloping meter?", choices: ["It re-creates the motion and momentum of the charging horses in sound", "It slows the poem down to a stop", "It has no effect on how the poem feels", "It describes a peaceful ride home"] },
          significance: { q: "Why start with rhythm before naming the danger?", choices: ["The beat makes the reader feel the charge before understanding where it leads", "To hide that anything is wrong", "To make the poem shorter", "Because the meter is only decoration"] },
          reveals: "How sound itself — the meter — carries the reader into the charge.",
          conceals: "That the same galloping beat is driving the men straight toward death.",
          ace: "Articulate what the opening rhythm does; connect it to the motion of horses; extend it to how sound can carry meaning in a poem or song."
        },
        {
          id: "blunder", name: "Some One Had Blundered", image: "images/blunder.webp",
          clues: ["The poem admits \"Some one had blundered.\"", "The charge happens because of a mistaken order.", "The riders are told to charge, and they obey."],
          identify: { q: "What does \"Some one had blundered\" reveal?", choices: ["The order that sent them was a mistake — a military blunder", "The soldiers made no mistakes ever", "The enemy had surrendered", "The charge was called off"] },
          purpose: { q: "Why does the poem name the blunder openly?", choices: ["It honors the soldiers without hiding that their leaders erred", "To blame the soldiers themselves", "To make the charge sound easy", "To end the poem"] },
          significance: { q: "How does the blunder shape the poem's meaning?", choices: ["The men are heroic precisely because they obeyed a doomed, mistaken order", "It proves the charge was a success", "It removes all danger", "It makes the soldiers cowards"] },
          reveals: "That the whole tragedy springs from a leader's error, not the soldiers' failure.",
          conceals: "How the poem can honor sacrifice and criticize the command at the same time.",
          ace: "Articulate what the blunder is; connect it to the soldiers' obedience; extend it to whether we can honor people who follow a bad order."
        },
        {
          id: "reason", name: "Theirs Not to Reason Why", image: "images/reason.webp",
          clues: ["The poem says \"Theirs not to reason why, / Theirs but to do and die.\"", "The soldiers do not question the fatal order.", "This comes right after \"Some one had blundered.\""],
          identify: { q: "What do these lines say about the soldiers?", choices: ["They do not question the order — their duty is to obey, even to death", "They argue with their commander", "They refuse to charge", "They plan an escape"] },
          purpose: { q: "What idea do these lines highlight?", choices: ["Obedience and duty carried all the way to death", "The soldiers' fear of the enemy", "The beauty of the valley", "The commander's wisdom"] },
          significance: { q: "Why place this obedience right after the blunder?", choices: ["To make their loyalty tragic — they obey knowing, or not asking, the cost", "To show the order was correct", "To lighten the mood", "To end the charge"] },
          reveals: "The poem's core tension: duty and obedience even unto death.",
          conceals: "Whether the poem admires this obedience, mourns it, or both at once.",
          ace: "Articulate what \"do and die\" means; connect it to the blunder before it; extend it to a time obeying and questioning pulled in opposite directions."
        },
        {
          id: "cannon", name: "Cannon to Right, to Left, in Front", image: "images/cannon.webp",
          clues: ["\"Cannon to right of them, / Cannon to left of them, / Cannon in front of them.\"", "The same phrase repeats at the start of each line — anaphora.", "The guns \"Volley'd and thunder'd.\""],
          identify: { q: "What does this repeated image show?", choices: ["The riders are surrounded by enemy cannon on every side", "A single cannon far away", "An empty, silent battlefield", "The soldiers' own guns"] },
          purpose: { q: "What does the anaphora of \"Cannon to... of them\" achieve?", choices: ["Piling the same phrase on every side traps the reader in the danger with them", "It makes the danger seem small", "It slows the poem to a rest", "It changes the subject"] },
          significance: { q: "How do sound words like \"volley'd and thunder'd\" work here?", choices: ["The imagery lets us hear the guns, heightening the terror of the charge", "They describe a calm evening", "They name the soldiers", "They end the poem"] },
          reveals: "How repetition and sound surround the reader with the same danger the riders faced.",
          conceals: "That the anaphora returns almost unchanged on the ride back — with a grim difference.",
          ace: "Articulate what the repeated \"Cannon\" lines show; connect the anaphora to the feeling of being surrounded; extend it to how repetition can build pressure in any writing."
        },
        {
          id: "death", name: "The Jaws of Death, the Mouth of Hell", image: "images/death.webp",
          clues: ["The riders go \"into the jaws of Death, / Into the mouth of Hell.\"", "Death and Hell are given mouths and jaws — personification.", "This marks the deepest point of the charge."],
          identify: { q: "What are \"the jaws of Death\" and \"the mouth of Hell\"?", choices: ["Personified images that turn death into a monster swallowing the riders", "Real places on a map", "The names of two soldiers", "Two of the shepherd's tools"] },
          purpose: { q: "Why personify Death and Hell as having mouths and jaws?", choices: ["It makes the danger vivid and monstrous — the riders charge into something alive and devouring", "To make death sound gentle", "To add a joke", "To describe the weather"] },
          significance: { q: "What does this image add at the heart of the charge?", choices: ["It marks the most extreme danger — riding willingly into deadly ruin", "It shows the charge was safe", "It ends the war", "It praises the enemy"] },
          reveals: "How personification turns the battlefield into a living, devouring danger.",
          conceals: "That the men ride into this 'mouth' knowingly, which deepens their sacrifice.",
          ace: "Articulate the Death-and-Hell image; connect the personification to the poem's danger; extend it to another work that makes danger feel like a living thing."
        },
        {
          id: "rideback", name: "Back — but Not the Six Hundred", image: "images/rideback.webp",
          clues: ["The riders break the enemy line with flashing sabres, then turn back.", "On the return the poem repeats the cannon lines — but now the men fall.", "It says they rode back, \"but not the six hundred.\""],
          identify: { q: "What does \"not the six hundred\" tell us?", choices: ["Far fewer riders came back than the six hundred who charged in", "All six hundred returned safely", "Six hundred more soldiers arrived", "No one charged at all"] },
          purpose: { q: "Why repeat the cannon lines on the ride back?", choices: ["The danger is the same, but now we feel the losses mounting", "To show the battle was easy", "To restart the poem", "To describe a parade"] },
          significance: { q: "What does the changed refrain reveal?", choices: ["The terrible cost of the charge — the count of survivors has dropped", "That the soldiers won without losses", "That the poem is a comedy", "That the order was correct"] },
          reveals: "The human cost, carried by a small change in the repeated \"six hundred.\"",
          conceals: "How much grief the poem packs into shifting a single refrain.",
          ace: "Articulate what \"not the six hundred\" means; connect it to the earlier refrain; extend it to how a small change in repeated words can carry heavy meaning."
        },
        {
          id: "honour", name: "Honour the Light Brigade", image: "images/honour.webp",
          clues: ["The last stanza turns to the reader: \"Honour the charge they made!\"", "It ends \"Honour the Light Brigade, / Noble six hundred!\"", "The tone becomes a direct call to remember and honor."],
          identify: { q: "What does the final stanza do?", choices: ["It calls on the reader to honor and remember the soldiers", "It blames the soldiers for the loss", "It describes a new charge", "It changes to a love poem"] },
          purpose: { q: "How does the ending shift the poem's purpose?", choices: ["From telling the story to commanding us to honor the men forever", "From honor to mockery", "From war to peace unrelated to the charge", "It repeats the opening exactly"] },
          significance: { q: "What does \"Noble six hundred\" achieve as a closing?", choices: ["It fixes the soldiers' glory in memory, insisting it can never fade", "It forgets the soldiers", "It praises the commander instead", "It cancels the earlier stanzas"] },
          reveals: "The poem's final move: turning a tragic blunder into lasting honor.",
          conceals: "How the elegiac tone both mourns the loss and celebrates the sacrifice.",
          ace: "Articulate what the ending asks of the reader; connect it to the blunder earlier in the poem; extend it to how we choose to remember people who died for a cause."
        }
      ]
    },

    ctob: {
      name: "Into the Valley",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The soldiers ride \"into the valley of ______.\" (one word)",
          evidence: ["The word names what waits at the end of the charge.", "It is paired later with \"the jaws of\" the same word.", "The word begins with 'De…'."],
          hints: ["What the doomed charge rides toward.", "De…", "The word is Death."],
          answer: "Death"
        },
        {
          type: "mc",
          prompt: "The repeated lines \"Cannon to right of them, / Cannon to left of them, / Cannon in front of them\" are an example of —",
          options: [
            "anaphora that surrounds the riders with danger.",
            "a simile comparing cannon to horses.",
            "a rhyme scheme with no repetition.",
            "quiet, restful imagery."
          ],
          hints: ["Notice the same word starting each line.", "The device piles the same danger on every side."]
        },
        {
          type: "mc",
          prompt: "The line \"Some one had blundered\" tells the reader that —",
          options: [
            "the charge was ordered by mistake — a leader's error.",
            "the soldiers refused to fight.",
            "the enemy had already fled.",
            "the charge was a great victory with no cost."
          ],
          hints: ["A 'blunder' is a serious mistake.", "The soldiers still obey the mistaken order."]
        },
        {
          type: "digit",
          prompt: "How many soldiers does the poem call the Light Brigade? Enter the number.",
          evidence: ["The poem repeats the phrase \"the six hundred\" again and again.", "The last stanza calls them the \"Noble six hundred.\"", "Six times one hundred."],
          hints: ["The refrain names the count directly: 'the six ______.'", "Six times one hundred.", "The number is 600."],
          answer: "600"
        },
        {
          type: "sequence",
          prompt: "Put the events of the charge in the order the poem tells them, earliest first.",
          items: [
            "The galloping order sends them half a league into the valley.",
            "\"Some one had blundered,\" yet they charge without questioning.",
            "Cannon surround them and they ride into the jaws of Death.",
            "The survivors ride back — but not the six hundred — and we are told to honor them."
          ],
          hints: ["The poem opens with the galloping ride forward.", "The blunder is named before the cannon close in.", "The ride back and the call to honor come last."]
        },
        {
          type: "mc",
          prompt: "The final stanza (\"Honour the charge they made!\") changes the poem's purpose to —",
          options: [
            "commanding the reader to honor and remember the soldiers.",
            "blaming the soldiers for the blunder.",
            "describing a peaceful morning after the battle.",
            "starting a brand-new, unrelated story."
          ],
          hints: ["Notice the repeated command word 'Honour.'", "The poem turns from telling the story to addressing the reader."]
        }
      ]
    },

    arcade: {
      name: "Danger or Honor?",
      instruction: "The poem rides straight into deadly danger, yet insists the reader honor the men who charged. Sort each image or phrase by the feeling it creates: is it an image of DANGER & DEATH, or of COURAGE & HONOR? Reasoning earns the points.",
      buckets: [
        { id: "danger", label: "Danger & death", short: "Danger" },
        { id: "honor", label: "Courage & honor", short: "Honor" }
      ],
      cards: [
        { text: "Riding \"into the valley of Death.\"", bucket: "danger", why: "The valley of Death names the deadly end waiting for the charge." },
        { text: "\"Cannon to right of them, cannon to left of them.\"", bucket: "danger", why: "The riders are surrounded by enemy guns on every side." },
        { text: "\"Into the jaws of Death, into the mouth of Hell.\"", bucket: "danger", why: "Death and Hell are personified as monsters swallowing the men." },
        { text: "Riding back \"but not the six hundred.\"", bucket: "danger", why: "Far fewer return — the image carries the terrible losses." },
        { text: "\"Theirs but to do and die\" — obeying without flinching.", bucket: "honor", why: "Their unquestioning duty is presented as brave loyalty." },
        { text: "\"Flashed all their sabres bare\" as they reach the guns.", bucket: "honor", why: "The riders fight boldly hand-to-hand, breaking the enemy line." },
        { text: "\"Honour the charge they made!\"", bucket: "honor", why: "The poem directly commands the reader to honor their courage." },
        { text: "\"Noble six hundred!\" closing the poem.", bucket: "honor", why: "The final phrase fixes the soldiers' glory in lasting memory." }
      ],
      followup: "The poem sets deadly danger and lasting honor side by side — a doomed charge into the mouth of Hell, ending with a command to honor the men. What does that pairing suggest about how the poem wants us to remember them?"
    },

    analysis: {
      mcq: [
        {
          q: "\"The Charge of the Light Brigade\" is best described as —",
          options: [
            "a narrative poem retelling a real, doomed cavalry charge.",
            "a quiet nature poem about a garden.",
            "a comic poem making fun of soldiers.",
            "a personal love poem."
          ],
          why: "The poem tells the story of an actual charge in the Crimean War and honors the soldiers."
        },
        {
          q: "The pounding meter of \"Half a league, half a league, / Half a league onward\" mainly works to —",
          options: [
            "imitate the sound and motion of galloping horses.",
            "slow the poem to a peaceful rest.",
            "make the poem sound like ordinary speech.",
            "confuse the reader about the setting."
          ],
          why: "The driving, repetitive beat re-creates the rhythm of the charging cavalry."
        },
        {
          q: "The lines \"Cannon to right of them, / Cannon to left of them, / Cannon in front of them\" use anaphora to —",
          options: [
            "surround the riders — and the reader — with danger on every side.",
            "compare the cannon to gentle rain.",
            "praise the beauty of the valley.",
            "list the soldiers' names."
          ],
          why: "Repeating the same phrase on every side traps the reader in the same danger the riders faced."
        },
        {
          q: "\"Theirs not to reason why, / Theirs but to do and die\" shows that the poem's soldiers —",
          options: [
            "obey the order without questioning it, even to death.",
            "argue with their commander before charging.",
            "refuse to take part in the charge.",
            "turn back to safety at once."
          ],
          why: "The lines present unquestioning obedience and duty carried all the way to death."
        },
        {
          q: "By ending with \"Honour the charge they made! ... Noble six hundred!\", the poem's tone becomes —",
          options: [
            "elegiac and heroic — mourning the loss while insisting on lasting honor.",
            "playful and joking.",
            "cold and indifferent.",
            "angry only at the soldiers."
          ],
          why: "The closing directly commands the reader to honor the men, blending grief with celebration of their sacrifice."
        }
      ],
      short: [
        "Choose one image from the Valley of Death relic room. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem admits \"Some one had blundered,\" yet still calls the soldiers \"noble.\" Explain how the poem can criticize the order and honor the men at the same time.",
        "Explain how the refrain \"the six hundred\" changes to \"not the six hundred\" by the end. How does that small change carry the poem's meaning?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"The Charge of the Light Brigade\" use sound — meter, refrain, and repetition — to make the reader feel the charge and honor the soldiers? Make a claim and support it with specific lines or images from the poem.",
      aceReflection: "Articulate what the poem suggests about honor and sacrifice in your own words. Connect two features of the poem that develop it (for example the galloping meter and the refrain). Extend it to another text or event, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Charge, One Idea",
      prompt: "\"The Charge of the Light Brigade\" carries a whole idea — honoring courage and sacrifice — through sound and repetition, driven by a galloping meter and the refrain \"the six hundred.\" Choose another poem, song, story, speech, or real event that honors a group's sacrifice or uses rhythm and repetition to move its audience. Explain the connection with evidence: what technique or idea transfers, what changes, and where the comparison starts to break down.",
      format: "A short evidence-based comparison connecting the poem's honor-the-sacrifice theme (or its galloping-meter technique) to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"The Charge of the Light Brigade\" uses rhythm and repetition to honor soldiers who charged on a mistaken order. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"The Charge of the Light Brigade.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [feature one] connects to [feature two] in \"The Charge of the Light Brigade\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"The Charge of the Light Brigade\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect this poem's honor-the-sacrifice theme (or its galloping-meter technique) to another text or event: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"The Charge of the Light Brigade\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Alfred, Lord Tennyson's \"The Charge of the Light Brigade\" (1854) as a narrative war poem — a study of meter, refrain, anaphora, personification, imagery, and tone. The poem is public domain, so it may be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. The poem depicts soldiers riding to their deaths; preview for your students. Every student response stays on the device.",
      reviewNotes: [
        "\"The Charge of the Light Brigade\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem (1854) is in the public domain in the United States, so it satisfies the identical-text requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's meter, refrain, anaphora, imagery, personification, and tone academically and neutrally, focusing on craft rather than glorifying war.",
        "The poem depicts real soldiers riding to their deaths in war and names a leader's blunder; preview it and follow your district's policy and community expectations for mature content.",
        "Details here were checked against the poem's text (the galloping opening \"Half a league\"; \"into the valley of Death\"; \"Some one had blundered\"; \"Theirs not to reason why, / Theirs but to do and die\"; the anaphora \"Cannon to right of them...\"; \"into the jaws of Death, / Into the mouth of Hell\"; \"Flashed all their sabres bare\"; the ride back \"but not the six hundred\"; and the closing \"Honour the Light Brigade, / Noble six hundred!\"). Longer passages are paraphrased, not reproduced. Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English II ELAR TEKS (19 TAC Ch. 110) strands on figurative language, sound devices, poetic structure, imagery, tone, and theme — especially meter, refrain, anaphora, and personification. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
