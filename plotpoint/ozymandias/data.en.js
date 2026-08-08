/* PlotPoint — "Ozymandias" by Percy Bysshe Shelley (1818).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: "Ozymandias" (1818) is public domain in the United States, so this
   room may reference the sonnet directly. It is studied here as LITERATURE — sonnet
   form, dramatic framing, irony, symbolism, and imagery — in a neutral, academic frame
   consistent with the Texas required literary-works list (19 TAC §110.70, English I /
   high school). The room paraphrases, quotes only brief public-domain phrases where a
   close reading needs them, and reproduces no copyrighted edition. Standards are
   good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "ozymandias",
  storageKey: "plotpoint.ozymandias.v1",

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
    "enter.readListenNote": "The King James Version is in the public domain. Use your class's edition or any KJV text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Ozymandias",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Desert of Ozymandias",
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
    "ctob.title": "The Ruined Colossus",
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
    "arcade.title": "Power or Ruin?",
    "arcade.default": "Sort each detail by what it signals in the poem.",
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
    "extend.title": "One Image, One Idea",
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
    "print.item.relic": "Desert of Ozymandias evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Irony & impermanence organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/Ozymandias",
      title: "Ozymandias",
      author: "Percy Bysshe Shelley",
      grades: "English I",
      genre: "Poetry · Sonnet",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1818)",
      textAccess: "A short public-domain sonnet; use your class's copy or any public-domain text.",
      copyright: "\"Ozymandias\" (1818) is in the public domain in the United States, so this room may reference the sonnet directly. It is studied here as literature — its sonnet form, dramatic framing, irony, symbolism, and imagery. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "\"Ozymandias\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English I / high school); implementation is scheduled no earlier than the 2030–2031 school year. It is presented as literature — sonnet form, irony, and imagery — in a neutral, academic way. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"Ozymandias\" — two vast, broken stone legs and a shattered stone face half-sunk in an empty desert, with level sands stretching to the horizon."
    },
    hook: "Fourteen lines. A traveler comes back from an ancient land with a story: out in the desert stand two enormous broken legs of stone, and nearby a shattered stone face lies half-buried in the sand, still wearing a sneer. On the pedestal a proud inscription commands the mighty to look on these works and despair — but there is nothing left to see. Read it as a sonnet, and watch how one ruined statue turns a king's boast against itself.",
    goals: [
      "Understand \"Ozymandias\" as a fourteen-line sonnet framed as a traveler's report about a ruined statue in a desert.",
      "Analyze the poem's irony — how the boastful inscription clashes with the empty ruin that surrounds it.",
      "Trace how imagery and symbolism (the shattered face, the sneer, the level sands) carry the theme of hubris and the impermanence of power.",
      "Interpret how the poem's dramatic framing and its idea that art and time outlast even the mightiest ruler shape its meaning."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a sonnet and dramatic framing.",
        "Discuss: how can a poem make a point about power by describing a broken statue instead of stating it directly?"
      ],
      during: [
        "Use the Desert of Ozymandias to slow down and read the poem image by image.",
        "Track the frame: from the traveler's tale, to the ruined statue and its sneer, to the boastful inscription, to the empty sands."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the sonnet's irony and structure.",
        "Complete the Extend task to compare the poem's ironic technique or theme to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main point \"Ozymandias\" makes about power. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the poem — for example the boastful inscription and the empty sands around it. Explain how placing the boast against the ruin creates irony." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's idea — that power and pride do not last — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "sonnet", def: "A fourteen-line poem, usually in a fixed rhyme scheme and meter.", example: "\"Ozymandias,\" with its fourteen lines.", nonexample: "A single rhyming couplet.", context: "\"Ozymandias\" is a sonnet, so it has fourteen lines." },
      { term: "irony", def: "A contrast between what is expected or said and what actually is.", example: "A boast to 'despair' beside an empty ruin.", nonexample: "A statement that means exactly what it says.", context: "The poem's central effect is irony." },
      { term: "symbolism", def: "Using an object or image to stand for a larger idea.", example: "The wrecked statue standing for fallen power.", nonexample: "Describing a statue with no deeper meaning.", context: "The ruin works as symbolism for the fall of tyranny." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "\"Two vast and trunkless legs of stone\" in the sand.", nonexample: "An abstract word like 'grand' with no picture.", context: "The poem's imagery makes the ruin vivid." },
      { term: "dramatic framing", def: "Telling a story through a narrator who reports another person's account — a story within a story.", example: "The poet reporting a traveler's tale of the statue.", nonexample: "The poet describing the scene in person, firsthand.", context: "The dramatic framing sets the poet's voice around the traveler's." },
      { term: "tone", def: "The attitude a poem takes toward its subject.", example: "The cool, ironic tone toward the fallen king's boast.", nonexample: "A poem with no discernible attitude.", context: "The poem's tone treats the king's pride with quiet irony." },
      { term: "theme", def: "The central idea or message a work explores.", example: "That power and pride do not outlast time.", nonexample: "The number of lines in the poem.", context: "The theme is hubris and the impermanence of power." },
      { term: "hubris", def: "Excessive pride or arrogance, especially before a fall.", example: "A king ordering the mighty to despair at his works.", nonexample: "Quiet, humble confidence.", context: "The inscription is a monument to the king's hubris." },
      { term: "colossal", def: "Extremely large; of enormous size.", example: "The colossal ruined statue in the desert.", nonexample: "A small, ordinary pebble.", context: "The 'colossal wreck' shows how huge the statue once was." }
    ],

    relic: {
      name: "The Desert of Ozymandias",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "traveler", name: "The Traveler's Tale", image: "images/traveler.webp",
          clues: ["The poem does not describe the statue directly — a traveler reports it.", "The speaker met 'a traveller from an antique land' who told the story.", "So the whole poem is a story within a story."],
          identify: { q: "How does the poem present the scene?", choices: ["Through a traveler who reports what he saw to the speaker", "The speaker sees the statue in person", "A king narrates his own reign", "A sculptor describes his work"] },
          purpose: { q: "What is this dramatic framing's role in the poem?", choices: ["It sets the story at a distance, told and retold, like the king's fading fame", "It hides who the poet is", "It has no effect on meaning", "It proves the story is false"] },
          significance: { q: "Why matter that the tale is secondhand?", choices: ["The layered telling mirrors how the king survives only as a distant story", "It makes the poem longer", "It names the traveler", "It sets the exact date"] },
          reveals: "The dramatic frame — a story within a story.",
          conceals: "How the distance of the telling echoes the king's faded fame.",
          ace: "Articulate the frame; connect the secondhand telling to the king's lost fame; extend it to why a story passed along can change how we judge it."
        },
        {
          id: "legs", name: "The Trunkless Legs of Stone", image: "images/legs.webp",
          clues: ["In the desert stand 'two vast and trunkless legs of stone.'", "The statue was once colossal; now only the legs remain standing.", "The body between them is gone."],
          identify: { q: "What does this image show?", choices: ["Two huge broken legs of a statue standing alone in the sand", "A statue that is perfectly intact", "A living king walking", "A stone wall"] },
          purpose: { q: "What does the ruined statue signal?", choices: ["That a once-mighty monument has broken and decayed", "That the king is still powerful", "That the desert is fertile", "That the sculptor failed"] },
          significance: { q: "Why open on the legs rather than the whole statue?", choices: ["Beginning with the ruin puts the fall of power front and center", "To hide the king's face", "Because legs are decorative", "By accident"] },
          reveals: "The scale of the monument set against its ruin.",
          conceals: "How the missing 'trunk' makes the collapse feel total.",
          ace: "Articulate the legs image; connect its size to its ruin; extend it to how a broken monument can say more than a whole one."
        },
        {
          id: "face", name: "The Shattered Face", image: "images/face.webp",
          clues: ["Near the legs, a shattered stone face lies half-sunk in the sand.", "It wears a 'frown, / And wrinkled lip, and sneer of cold command.'", "The expression is one of arrogant, cold authority."],
          identify: { q: "What does the shattered face show?", choices: ["A broken stone face with a frown and a sneer of cold command", "A smiling, gentle face", "A blank, featureless face", "A modern portrait"] },
          purpose: { q: "What does the sneer tell us about the king?", choices: ["He ruled with cold, arrogant command", "He was humble and kind", "He was a peaceful farmer", "He was unknown and mild"] },
          significance: { q: "Why does the sneer still 'survive' on the stone?", choices: ["Art preserved the tyrant's arrogance long after his power ended", "The king is still alive", "The sneer means nothing", "The stone is new"] },
          reveals: "The tyrant's arrogance, frozen in stone.",
          conceals: "How an expression can outlast the person who wore it.",
          ace: "Articulate the sneer; connect it to the king's character; extend it to how art can record a feeling for centuries."
        },
        {
          id: "sculptor", name: "The Sculptor's Hand That Mocked", image: "images/sculptor.webp",
          clues: ["The poem says the sculptor 'well those passions read.'", "The 'hand that mocked' means the hand that imitated or captured the king's look.", "The sculptor's skill outlasts both the king and the statue's ruin."],
          identify: { q: "Whose skill does this image credit?", choices: ["The sculptor who carved and captured the king's expression", "The king who built cities", "The traveler who told the tale", "The poet's own hand"] },
          purpose: { q: "What does 'the hand that mocked them' mean here?", choices: ["The hand that imitated the king's passions in stone", "A hand that laughed at the king to his face", "A broken hand", "The king's own hand"] },
          significance: { q: "What idea does the sculptor's survival raise?", choices: ["Art can outlast the powerful people it depicts", "Sculptors are more powerful than kings in life", "The statue was never finished", "The king carved himself"] },
          reveals: "The artist's craft outlasting the ruler it recorded.",
          conceals: "How 'mocked' can mean both imitate and ridicule.",
          ace: "Articulate what the sculptor did; connect it to what survives on the stone; extend it to whether art or power lasts longer."
        },
        {
          id: "inscription", name: "The Inscription — 'King of Kings'", image: "images/inscription.webp",
          clues: ["On the pedestal appear the words 'My name is Ozymandias, King of Kings.'", "The next line commands: 'Look on my Works, ye Mighty, and despair!'", "It is a boast of unmatched, unrivaled power."],
          identify: { q: "What is carved on the pedestal?", choices: ["A boast: 'My name is Ozymandias, King of Kings... look on my Works... and despair!'", "A prayer for mercy", "A warning about the desert", "The sculptor's signature"] },
          purpose: { q: "What is the inscription meant to make readers feel?", choices: ["Awe and despair at the king's unmatched power", "Sympathy for the poor", "Amusement at a joke", "Curiosity about the weather"] },
          significance: { q: "Who was the boast originally aimed at?", choices: ["The 'Mighty' — other powerful rulers, told to despair at his greater works", "Ordinary travelers", "The sculptor", "No one in particular"] },
          reveals: "The king's boast of supreme, unrivaled power.",
          conceals: "How the word 'despair' will turn against the king himself.",
          ace: "Articulate the boast; connect it to the king's pride; extend it to how a claim can be undone by its surroundings."
        },
        {
          id: "irony", name: "The Irony of the Empty Ruin", image: "images/irony.webp",
          clues: ["The inscription boasts of mighty 'Works' that should cause despair.", "But around the ruin, nothing of those works remains.", "The command 'despair!' now points at the king's own vanished power."],
          identify: { q: "What contrast creates the poem's irony?", choices: ["A boast about mighty works set against an empty, ruined desert", "A happy king in a rich palace", "A crowd admiring the statue", "A newly built monument"] },
          purpose: { q: "How does the ruin change the meaning of 'despair'?", choices: ["The word now mocks the king — his power, not the reader's, has vanished", "It makes the boast come true", "It has no new meaning", "It praises the king"] },
          significance: { q: "What does this irony suggest about power?", choices: ["Even the mightiest power does not last against time", "Power lasts forever", "Only kings matter", "Deserts protect monuments"] },
          reveals: "The gap between the king's boast and the empty reality.",
          conceals: "How the poem lets the ruin, not the poet, deliver the judgment.",
          ace: "Articulate the contrast; connect the boast to the ruin; extend it to another boast that time proved empty."
        },
        {
          id: "sands", name: "The Lone and Level Sands", image: "images/sands.webp",
          clues: ["Beyond the wreck, 'boundless and bare, / The lone and level sands stretch far away.'", "Nothing else of the king's empire remains.", "The desert closes the poem on emptiness."],
          identify: { q: "What closes the poem?", choices: ["Empty, level sands stretching far away around the ruin", "A crowded city", "A green garden", "A rebuilt statue"] },
          purpose: { q: "What feeling do the level sands create?", choices: ["Emptiness and the erasing power of time", "Excitement and celebration", "Fear of an enemy", "Comfort and rest"] },
          significance: { q: "What do the sands symbolize?", choices: ["Time and oblivion, which erase even the greatest works", "The king's living kingdom", "A treasure buried nearby", "The traveler's home"] },
          reveals: "Time and oblivion pictured as an endless desert.",
          conceals: "How the final emptiness answers the king's boast without a word.",
          ace: "Articulate the sands image; connect the emptiness to the boast; extend it to how a setting can carry a poem's final idea."
        }
      ]
    },

    ctob: {
      name: "The Ruined Colossus",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole poem describes a ruined ______ standing in the desert. (one word)",
          evidence: ["It was once colossal, carved from stone.", "Only two legs and a shattered face remain of it.", "The word begins with 'stat…'."],
          hints: ["A carved stone figure of a person.", "Stat…", "The word is statue."],
          answer: "statue"
        },
        {
          type: "mc",
          prompt: "The shattered face with its 'sneer of cold command' mainly shows the king as —",
          options: [
            "arrogant and harshly powerful.",
            "gentle and humble.",
            "frightened and weak.",
            "cheerful and generous."
          ],
          hints: ["A frown, a wrinkled lip, and a sneer.", "'Cold command' is not a kind expression."]
        },
        {
          type: "mc",
          prompt: "The inscription 'Look on my Works, ye Mighty, and despair!' was meant to —",
          options: [
            "make other powerful rulers feel small before the king's greatness.",
            "warn travelers to leave the desert.",
            "thank the sculptor for the statue.",
            "describe the weather in the desert."
          ],
          hints: ["It addresses the 'Mighty.'", "It is a boast of unmatched power over other rulers."]
        },
        {
          type: "digit",
          prompt: "How many lines does this sonnet have? Enter the number.",
          evidence: ["A sonnet is a fixed poetic form with a set number of lines.", "It is neither ten nor twenty.", "Count them: it is the classic sonnet length."],
          hints: ["Every sonnet has the same number of lines.", "It is more than twelve and fewer than sixteen.", "The number is 14."],
          answer: "14"
        },
        {
          type: "sequence",
          prompt: "Put the poem's images in the order they appear, earliest first.",
          items: [
            "A traveler tells of two vast, trunkless legs of stone.",
            "Nearby, a shattered face with a sneer of cold command.",
            "On the pedestal, the boast 'King of Kings... despair!'",
            "Around it, the lone and level sands stretch far away."
          ],
          hints: ["The traveler and the legs come first.", "The inscription is read after the face is described.", "The empty sands close the poem."]
        },
        {
          type: "mc",
          prompt: "The poem's central irony comes from the contrast between —",
          options: [
            "the boastful inscription and the empty, ruined desert around it.",
            "the traveler and the speaker.",
            "the sculptor and the poet.",
            "the sand and the stone."
          ],
          hints: ["The boast promises mighty works that cause despair.", "Look at what actually remains around the statue."]
        }
      ]
    },

    arcade: {
      name: "Power or Ruin?",
      instruction: "\"Ozymandias\" sets the signs of a king's former power right next to the signs of ruin and oblivion. Sort each detail by what it signals in the poem: is it a sign of the king's FORMER POWER, or a sign of RUIN & OBLIVION? Reasoning earns the points.",
      buckets: [
        { id: "power", label: "Signs of the king's former power", short: "Power" },
        { id: "ruin", label: "Signs of ruin and oblivion", short: "Ruin" }
      ],
      cards: [
        { text: "The colossal size of the original statue.", bucket: "power", why: "The 'vast' scale shows how mighty the monument once was." },
        { text: "The 'sneer of cold command' on the carved face.", bucket: "power", why: "It records the king's arrogant authority over others." },
        { text: "The title 'King of Kings' on the pedestal.", bucket: "power", why: "It boasts of rule above all other kings." },
        { text: "The command 'Look on my Works, ye Mighty.'", bucket: "power", why: "It claims works so great that even the powerful should despair." },
        { text: "Two vast and trunkless legs of stone.", bucket: "ruin", why: "The statue is broken; the body between the legs is gone." },
        { text: "The shattered visage half-sunk in the sand.", bucket: "ruin", why: "The face lies in pieces, buried in the desert." },
        { text: "The 'colossal wreck' with nothing else beside it.", bucket: "ruin", why: "Only wreckage remains where an empire once stood." },
        { text: "The lone and level sands stretching far away.", bucket: "ruin", why: "Empty desert has erased every trace of the king's works." }
      ],
      followup: "The poem sets the boast of unmatched power right beside an empty ruin — 'King of Kings' above a shattered wreck in bare sand. How does that placement turn the inscription into irony?"
    },

    analysis: {
      mcq: [
        {
          q: "\"Ozymandias\" is best described as —",
          options: [
            "a fourteen-line sonnet framed as a traveler's report.",
            "a long epic told by the king himself.",
            "a short rhyming nursery rhyme.",
            "a personal letter in prose."
          ],
          why: "The poem is a sonnet, and its scene reaches us through a traveler who tells the speaker what he saw."
        },
        {
          q: "The 'frown, / And wrinkled lip, and sneer of cold command' on the statue's face reveal that the king was —",
          options: [
            "arrogant and harshly commanding.",
            "gentle and forgiving.",
            "timid and uncertain.",
            "playful and carefree."
          ],
          why: "The frown, lip, and sneer picture cold, arrogant authority."
        },
        {
          q: "The inscription 'Look on my Works, ye Mighty, and despair!' becomes ironic because —",
          options: [
            "nothing of the king's mighty works remains — only an empty ruin.",
            "the works are still standing in perfect condition.",
            "the king apologizes in the next line.",
            "the traveler cannot read the words."
          ],
          why: "The boast promises overwhelming works, but the surrounding desert is bare — the meaning turns against the king."
        },
        {
          q: "The 'lone and level sands' that 'stretch far away' mainly symbolize —",
          options: [
            "time and oblivion erasing even the greatest power.",
            "the king's thriving, living empire.",
            "a hidden treasure to be found.",
            "a peaceful place to rest."
          ],
          why: "The empty desert stands for time, which has swept away every trace of the king's works."
        },
        {
          q: "Because the poem develops a single theme through the ruined statue, its main idea is best stated as —",
          options: [
            "power and pride do not outlast time.",
            "deserts are dangerous places.",
            "sculptors are paid too little.",
            "kings should build bigger statues."
          ],
          why: "The wrecked monument and the empty sands together carry the theme of hubris and the impermanence of power."
        }
      ],
      short: [
        "Choose one image from the Desert of Ozymandias. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem places the king's boast right next to the empty ruin. Explain what this pairing suggests about power and about the poem's use of irony.",
        "Explain the poem's dramatic framing — the speaker reporting a traveler's tale. How does telling the story secondhand affect the way we read the king's fame?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"Ozymandias\" use irony and the image of a ruined statue to make a point about power? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about power and pride in your own words. Connect two images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"Ozymandias\" carries a whole idea — that power and pride do not last — through a single image: a ruined statue whose boast is undone by the empty desert. Choose another poem, song, story, or speech that uses the same theme or the same ironic technique (a proud claim undercut by reality). Explain the connection with evidence: what is the boast or image, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's ironic technique or its hubris-and-impermanence theme to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"Ozymandias\" uses a ruined statue to make a point about power and pride. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"Ozymandias.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in \"Ozymandias\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"Ozymandias\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect \"Ozymandias\"'s ironic technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"Ozymandias\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Percy Bysshe Shelley's \"Ozymandias\" (1818) as a sonnet — a study of sonnet form, dramatic framing, irony, symbolism, and imagery. The poem is public domain, so it can be referenced directly and this room reproduces no copyrighted edition. \"Ozymandias\" is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"Ozymandias\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English I / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1818 and is in the public domain in the United States — so the text may be used directly and this room reproduces no copyrighted edition. It still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's sonnet form, dramatic framing, irony, symbolism, and imagery academically and neutrally, and follow your district's policy and community expectations.",
        "Details here were checked against the poem's text (the traveler 'from an antique land'; 'two vast and trunkless legs of stone'; the shattered visage with its 'frown, / And wrinkled lip, and sneer of cold command'; the sculptor who 'well those passions read' and 'the hand that mocked them'; the pedestal reading 'My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!'; the 'colossal wreck'; and 'the lone and level sands stretch far away'). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, irony, symbolism, imagery, and theme — especially the sonnet form and dramatic framing. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
