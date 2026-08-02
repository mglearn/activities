/* PlotPoint — "Thanatopsis" by William Cullen Bryant (1817).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: "Thanatopsis" (1817) is public domain in the United States, so this
   room may reference the text directly. The poem is studied here as LITERATURE — blank
   verse, personification, imagery, and structure — in a neutral, academic frame consistent
   with the Texas required literary-works list (19 TAC §110.70, English I / high school).
   The room paraphrases, quotes only brief public-domain phrases where a close reading needs
   them, and reproduces no copyrighted edition. Standards are good-faith alignment; TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "thanatopsis",
  storageKey: "plotpoint.thanatopsis.v1",

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
    "enter.readListenNote": "\"Thanatopsis\" (1817) is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Thanatopsis",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Great Sepulchre",
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
    "ctob.title": "The Innumerable Caravan",
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
    "arcade.title": "Fear or Comfort?",
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
    "print.item.relic": "Great Sepulchre evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Meditation-on-death organizer",
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
      title: "Thanatopsis",
      author: "William Cullen Bryant",
      grades: "English I",
      genre: "Poetry · Blank verse · Meditation",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1817)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "\"Thanatopsis\" (1817) is in the public domain in the United States, so this room may reference the text directly. The poem is studied here as literature — its blank verse, personification, imagery, and structure. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "\"Thanatopsis\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English I / high school); implementation is scheduled no earlier than the 2030–2031 school year. The poem meditates calmly on death as a natural, universal part of existence. It is presented here as literature — blank verse, personification, imagery, and structure — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Thanatopsis — a wide open landscape at dusk with rolling hills, a distant river winding to the sea, and quiet ancient stones, suggesting the earth as a vast, calm resting place."
    },
    hook: "How do you write about death without dread? Bryant's answer is to walk you outdoors and let Nature speak. In unrhymed, steady lines, \"Thanatopsis\" — the word means \"a meditation on death\" — turns the grave into something enormous and shared: the whole earth becomes one tomb, and every person who ever lived lies down in it together. Read it slowly, and watch a frightening idea become, by the last lines, something almost like sleep.",
    goals: [
      "Understand \"Thanatopsis\" as a blank-verse meditation that offers consolation about death by turning to Nature.",
      "Analyze how personification, imagery, and the image of the earth as one vast tomb shape the poem's calm, elegiac tone.",
      "Trace the poem's movement from a shudder at death, through Nature's teaching, to the serene closing image of lying down to pleasant dreams.",
      "Interpret how the poem argues that death is universal and natural — not to be feared — and why blank verse suits that steady, thinking voice."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of blank verse (unrhymed iambic pentameter).",
        "Discuss: what images do people usually attach to death, and how might a writer make that idea feel calm instead of frightening?"
      ],
      during: [
        "Use the Great Sepulchre to slow down and read the poem image by image.",
        "Track the journey: from the dark shudder at death, to Nature's lesson, to the company of the dead, to the closing 'pleasant dreams.'"
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the poem's images and its consoling argument.",
        "Complete the Extend task to compare this console-through-nature technique to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the consolation \"Thanatopsis\" offers about death. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two images from the poem — for example the shudder at 'breathless darkness' and the closing 'pleasant dreams.' Explain how moving from fear to calm shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — using Nature or a universal truth to console — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "blank verse", def: "Poetry written in unrhymed iambic pentameter — a steady ten-beat line with no end rhyme.", example: "The measured, unrhymed lines of \"Thanatopsis.\"", nonexample: "A rhyming nursery rhyme.", context: "Bryant writes the whole meditation in blank verse." },
      { term: "personification", def: "Giving human qualities or actions to something not human.", example: "Nature speaking 'a various language' as a teacher.", nonexample: "Describing a rock as simply a rock.", context: "The poem personifies Nature as a comforting voice that teaches." },
      { term: "apostrophe", def: "Directly addressing a person, idea, or absent listener as 'thee' or 'thou.'", example: "The poem speaking directly to 'thee' about how to face death.", nonexample: "A neutral report that names no listener.", context: "The poem uses apostrophe, addressing the reader as 'thee.'" },
      { term: "simile", def: "A comparison of two unlike things using 'like' or 'as.'", example: "Lying down 'like one who wraps the drapery of his couch about him.'", nonexample: "Calling one thing another with no 'like' or 'as' (a metaphor).", context: "The closing simile compares death to lying down to pleasant dreams." },
      { term: "elegy", def: "A poem of serious reflection, often on death or loss.", example: "A calm poem meditating on the fact that all people die.", nonexample: "A cheerful birthday song.", context: "\"Thanatopsis\" has an elegiac, meditative quality." },
      { term: "tone", def: "The writer's attitude toward the subject, felt through word choice and images.", example: "The poem's calm, consoling attitude toward death.", nonexample: "A blank list of facts with no attitude.", context: "The tone shifts from a shudder to serene trust." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "That death is universal, natural, and not to be feared.", nonexample: "The plot summary of what happens.", context: "The poem's theme is facing death with calm trust." },
      { term: "sepulchre", def: "A tomb or burial place.", example: "The whole earth pictured as one vast sepulchre for humankind.", nonexample: "A brand-new, empty house.", context: "The poem calls the earth the great sepulchre of all who have lived." },
      { term: "pall", def: "A cloth spread over a coffin; more broadly, a dark, gloomy covering.", example: "The pall and shroud named among death's dark images.", nonexample: "A bright party banner.", context: "The pall is one of the frightening images the poem answers." }
    ],

    relic: {
      name: "The Great Sepulchre",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "voice", name: "Nature's Soothing Voice", image: "images/voice.webp",
          clues: ["The poem opens by saying Nature speaks to the one who loves her.", "When dark thoughts come, the advice is to 'go forth' and 'list to Nature's teachings.'", "Nature is treated as a gentle teacher with a healing, soothing voice."],
          identify: { q: "How does the poem present Nature at the start?", choices: ["As a comforting teacher who speaks a soothing voice to those who love her", "As a cruel enemy of humankind", "As a silent, empty void", "As a machine with no feeling"] },
          purpose: { q: "What is this image's role in the poem?", choices: ["It sets up the source of the whole consolation — Nature will do the teaching", "It ends the poem", "It describes the poet's daily job", "It has no link to the rest"] },
          significance: { q: "Why open with Nature's voice rather than a lecture?", choices: ["Personifying Nature as a teacher makes the comfort feel gentle and trustworthy", "To frighten the reader immediately", "To change the subject away from death", "To show Nature dislikes people"] },
          reveals: "The personified source of the poem's comfort.",
          conceals: "How much of the argument the poem hands over to 'Nature's teachings.'",
          ace: "Articulate how Nature is personified; connect it to the poem's calm tone; extend it to why a trusted 'voice' can make a hard idea easier to hear."
        },
        {
          id: "shudder", name: "The Shudder at Death", image: "images/shudder.webp",
          clues: ["The poem names dark thoughts: 'the last bitter hour,' the pall, the shroud.", "These images bring a 'shudder' and a chill of 'breathless darkness.'", "The poem raises this fear on purpose, to answer it."],
          identify: { q: "What does this image collect?", choices: ["The dark, frightening thoughts of death — the pall, the shroud, breathless darkness", "A joyful feast", "A calm green meadow", "A child's game"] },
          purpose: { q: "Why does the poem name these fears at all?", choices: ["To acknowledge the fear honestly before offering comfort against it", "To leave the reader afraid and stop there", "To decorate the poem", "By accident"] },
          significance: { q: "What does starting with the shudder let the poem do?", choices: ["It gives the consolation something real to answer, so the comfort feels earned", "It proves death cannot be faced", "It replaces Nature's voice", "It ends the meditation"] },
          reveals: "The real fear the poem sets out to console.",
          conceals: "How the poem's calm is a response, not a denial, of dread.",
          ace: "Articulate the images of dread; connect them to the comfort that follows; extend it to why naming a fear can be the first step to easing it."
        },
        {
          id: "earth", name: "Returning to the Earth", image: "images/earth.webp",
          clues: ["Nature's lesson says the body will return to the ground.", "It will mix with the elements — even 'to be a brother to the insensible rock.'", "This is presented as natural, not as punishment."],
          identify: { q: "What does Nature teach about the body?", choices: ["It returns to the earth and mixes with the elements of nature", "It vanishes with no trace or place", "It is carried off to a distant planet", "It stays forever unchanged"] },
          purpose: { q: "What feeling does this image aim to create?", choices: ["Acceptance — death as a natural return, part of the physical world", "Terror at being erased", "Anger at nature", "Pride in the body"] },
          significance: { q: "Why call the dead 'a brother to the insensible rock'?", choices: ["It folds the individual into the whole of nature, making death feel shared and natural", "It insults the dead", "It says the body becomes a jewel", "It means the body escapes the earth"] },
          reveals: "Death pictured as a natural return to the physical world.",
          conceals: "How the poem uses nature to make dissolution feel like belonging.",
          ace: "Articulate what returns to the earth; connect it to the poem's calm; extend it to how framing something as 'natural' changes how we feel about it."
        },
        {
          id: "sepulchre", name: "The Great Universal Tomb", image: "images/sepulchre.webp",
          clues: ["The poem widens the view: the whole earth becomes one vast tomb.", "Hills, valleys, rivers, and the sea are called the ornaments of this great sepulchre.", "Death is not a private cell but the shared resting place of all humankind."],
          identify: { q: "What image does the poem build here?", choices: ["The entire earth as one vast tomb, or sepulchre, of humankind", "A single small graveyard on a hill", "A palace for the living", "An empty desert with no meaning"] },
          purpose: { q: "How does this scale change the feeling of death?", choices: ["Making the whole earth the tomb makes death vast and shared, not lonely", "It makes death seem cramped and private", "It removes death from the poem", "It celebrates one person only"] },
          significance: { q: "Why call the hills and sea 'ornaments' of the sepulchre?", choices: ["The beauty of the world decorates the shared grave — beauty and death are woven together", "The world is ugly and dead", "Nature is separate from death", "It is only decoration with no meaning"] },
          reveals: "The poem's central image — the earth itself as one great tomb.",
          conceals: "How the beauty of the living world and the fact of death share one picture.",
          ace: "Articulate the earth-as-tomb image; connect it to the feeling of being 'not alone'; extend it to how scale can change an emotion."
        },
        {
          id: "company", name: "The Company of the Dead", image: "images/company.webp",
          clues: ["Nature says you will not lie down alone.", "You join all who have lived: the patriarchs, kings, the wise, the good, the beautiful of past ages.", "The countless dead far outnumber the living."],
          identify: { q: "Who does the poem say you join in death?", choices: ["All who have ever lived — patriarchs, kings, the wise, the good of past ages", "No one at all", "Only your own family", "Only people still living"] },
          purpose: { q: "Why insist you will not be alone?", choices: ["To turn a lonely fear into the comfort of vast company", "To make death seem crowded and unpleasant", "To brag about famous people", "To change the poem's subject"] },
          significance: { q: "What does it mean that the living are a 'handful' beside the dead?", choices: ["Death is the common, universal experience of nearly all who have existed", "The living matter more than the dead", "Only a few people ever die", "The dead are unimportant"] },
          reveals: "Death reframed as joining an immense, shared company.",
          conceals: "How belonging to the many quietly answers the fear of being alone.",
          ace: "Articulate the company of the dead; connect it to the universal-tomb image; extend it to how 'you are not alone in this' can be a form of comfort."
        },
        {
          id: "caravan", name: "The Innumerable Caravan", image: "images/caravan.webp",
          clues: ["The poem's close says all the living will follow in time.", "Everyone joins 'the innumerable caravan' moving to 'the pale realms of shade.'", "The advice is: so live that when your summons comes, you are ready."],
          identify: { q: "What is 'the innumerable caravan'?", choices: ["The endless procession of all people moving toward death in time", "A caravan of merchants selling goods", "A single traveler on a road", "An army marching to war"] },
          purpose: { q: "Why picture death as a caravan everyone joins?", choices: ["It makes death a shared journey, not a solitary punishment", "It makes death seem like a market", "It shows only some people die", "It has no purpose in the poem"] },
          significance: { q: "What does 'so live…' urge the reader to do?", choices: ["Live so that you can meet death with calm, unfaltering trust", "Avoid ever thinking about death", "Fear the journey and resist it", "Ignore the poem's teaching"] },
          reveals: "Death as a shared journey the reader is invited to meet well.",
          conceals: "How the poem turns from picturing death to advising how to live.",
          ace: "Articulate the caravan image; connect it to the 'so live' advice; extend it to how imagining a shared journey can change how you face a hard thing."
        },
        {
          id: "dreams", name: "Lying Down to Pleasant Dreams", image: "images/dreams.webp",
          clues: ["The final image contrasts two ways to die.", "Not like a 'quarry-slave' scourged to his dungeon, but 'sustained and soothed by an unfaltering trust.'", "You approach the grave 'like one who wraps the drapery of his couch about him, and lies down to pleasant dreams.'"],
          identify: { q: "What is the poem's closing simile?", choices: ["Death as lying down to pleasant dreams, like wrapping oneself in bedcovers", "Death as a violent battle", "Death as a locked prison forever", "Death as an endless storm"] },
          purpose: { q: "How does this ending shift the poem's feeling?", choices: ["From the opening shudder to serenity — death made as gentle as falling asleep", "From calm to sudden terror", "From nature to war", "From comfort back to dread"] },
          significance: { q: "What does the contrast with the 'quarry-slave' add?", choices: ["It sets fearful, forced death against death met with calm, unfaltering trust", "It says everyone dies in chains", "It removes the idea of choice", "It has no meaning"] },
          reveals: "The serene close that answers the poem's opening fear.",
          conceals: "How a single simile turns the grave into rest.",
          ace: "Articulate the pleasant-dreams simile; connect it to the opening shudder; extend it to how an ending can reframe everything before it."
        }
      ]
    },

    ctob: {
      name: "The Innumerable Caravan",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The poem opens by giving human qualities to ______, who speaks a soothing voice and teaches the reader. (one word)",
          evidence: ["The very first lines name this comforting figure.", "It is not a person but is treated like a gentle teacher.", "The word begins with 'Nat…'."],
          hints: ["The world of hills, rivers, sky, and seasons, personified.", "Nat…", "The word is Nature."],
          answer: "Nature"
        },
        {
          type: "mc",
          prompt: "The shudder at 'the last bitter hour,' the pall, and 'breathless darkness' brings mainly images of —",
          options: [
            "fear and dread about death.",
            "a joyful celebration.",
            "trade and wealth.",
            "peaceful sleep."
          ],
          hints: ["Think about the feeling these images create.", "The poem raises them so it can answer them with comfort."]
        },
        {
          type: "mc",
          prompt: "When the poem calls the whole earth one vast tomb, or sepulchre, its purpose is to —",
          options: [
            "show that death is universal and shared by all who have lived.",
            "describe a single small graveyard.",
            "praise the wealth of kings.",
            "warn against traveling."
          ],
          hints: ["Notice that hills, rivers, and the sea become 'ornaments' of this tomb.", "The scale is the whole earth, not one plot of ground."]
        },
        {
          type: "digit",
          prompt: "\"Thanatopsis\" is commonly printed in how many verse-paragraphs (the poem's main sections)? Enter the number.",
          evidence: ["Section one raises the shudder at death and sends the reader to Nature.", "Section two is Nature's long teaching — the return to earth, the great tomb, the company of the dead.", "Section three is the closing 'So live…' with the pleasant-dreams simile. Count the sections."],
          hints: ["Count: the opening frame, Nature's speech, and the closing exhortation.", "It is more than two and fewer than four.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the poem's movements in the order they appear, earliest first.",
          items: [
            "A shudder at dark thoughts of death, and the turn to Nature's teaching.",
            "The body returning to the earth, mixing with the elements.",
            "The whole earth pictured as one vast tomb, shared with all who have lived.",
            "The closing 'So live…' and the image of lying down to pleasant dreams."
          ],
          hints: ["The poem begins by raising the fear it will answer.", "The great universal tomb comes after the body's return to the earth.", "The 'pleasant dreams' simile closes the poem."]
        },
        {
          type: "mc",
          prompt: "In its closing image, the poem contrasts two ways to face death. It urges the reader to go —",
          options: [
            "not like a scourged slave, but soothed by unfaltering trust, as if lying down to pleasant dreams.",
            "fighting death like a soldier in battle to the very end.",
            "weeping in fear with no comfort at all.",
            "in silence, refusing to think about it."
          ],
          hints: ["The poem sets a 'quarry-slave' dragged to his dungeon against a calm sleeper.", "The final simile compares death to wrapping bedcovers around oneself."]
        }
      ]
    },

    arcade: {
      name: "Fear or Comfort?",
      instruction: "\"Thanatopsis\" first raises dark thoughts of death, then answers them with the consolation of Nature. Sort each image by the feeling it creates in the poem: is it an image of FEAR about death, or of COMFORT and consolation? Reasoning earns the points.",
      buckets: [
        { id: "comfort", label: "Comfort & consolation", short: "Comfort" },
        { id: "fear", label: "Fear about death", short: "Fear" }
      ],
      cards: [
        { text: "Nature speaking a soothing voice to the one who loves her.", bucket: "comfort", why: "Nature is personified as a gentle, healing teacher." },
        { text: "Joining all who have lived — patriarchs, kings, the wise, and the good.", bucket: "comfort", why: "You are not alone; death is shared with vast company." },
        { text: "The whole earth pictured as one great tomb for humankind.", bucket: "comfort", why: "Death is made universal and shared, not lonely." },
        { text: "Lying down to death 'like one who wraps the drapery of his couch about him.'", bucket: "comfort", why: "The closing simile turns the grave into peaceful sleep." },
        { text: "'The last bitter hour,' the pall, and the shroud.", bucket: "fear", why: "These are the dark images of death the poem sets out to answer." },
        { text: "The chill of 'breathless darkness' that brings a shudder.", bucket: "fear", why: "It names the physical dread the consolation must overcome." },
        { text: "Death imagined as a 'quarry-slave' scourged to his dungeon.", bucket: "fear", why: "This is the fearful, forced way to die the poem warns against." },
        { text: "Moving to 'the pale realms of shade.'", bucket: "fear", why: "The shadowy, unknown destination carries the dread the poem confronts." }
      ],
      followup: "The poem raises real fear — the pall, the shroud, 'breathless darkness' — before offering its comfort. What does it suggest about consolation that Bryant names the dread first instead of ignoring it?"
    },

    analysis: {
      mcq: [
        {
          q: "The consolation \"Thanatopsis\" offers comes chiefly from —",
          options: [
            "Nature, personified as a teacher whose lesson is that death is natural and shared.",
            "a wealthy king who promises rewards.",
            "a battle that must be won to escape death.",
            "the promise that the reader will never die."
          ],
          why: "The poem sends the reader to 'Nature's teachings,' which frame death as a natural, universal return."
        },
        {
          q: "The image of the whole earth as one vast tomb mainly works to —",
          options: [
            "show that death is universal and shared by all who have ever lived.",
            "describe a single small graveyard on a hill.",
            "praise the riches of ancient kings.",
            "warn readers away from travel."
          ],
          why: "Hills, valleys, rivers, and the sea become 'ornaments' of humankind's great sepulchre — death made vast and shared."
        },
        {
          q: "The dark opening images — the pall, the shroud, 'breathless darkness' — function to —",
          options: [
            "name the fear honestly so the poem's comfort can answer it.",
            "close the poem on a note of despair.",
            "describe a joyful feast.",
            "list the tools of a shepherd."
          ],
          why: "The poem raises the shudder at death on purpose, then offers consolation against it."
        },
        {
          q: "The closing image — going to the grave 'like one who wraps the drapery of his couch about him, and lies down to pleasant dreams' — is an example of —",
          options: [
            "a simile that reframes death as peaceful sleep.",
            "a rhyme scheme that ends the poem.",
            "a pun on the word 'couch.'",
            "a stage direction."
          ],
          why: "The comparison using 'like' turns death into calm sleep, the poem's final consolation."
        },
        {
          q: "\"Thanatopsis\" is written in blank verse, which means its lines are —",
          options: [
            "unrhymed and in a steady iambic pentameter.",
            "rhymed couplets with a bouncing beat.",
            "free verse with no meter at all.",
            "short rhyming lines like a nursery rhyme."
          ],
          why: "Blank verse — unrhymed iambic pentameter — gives the poem its measured, thinking voice."
        }
      ],
      short: [
        "Choose one image from the Great Sepulchre. Explain what it shows and what it reveals about the poem's consolation.",
        "The poem names dark fears about death before offering comfort. Explain what this ordering suggests about the kind of consolation \"Thanatopsis\" gives.",
        "Explain the closing contrast between the 'quarry-slave' and the calm sleeper. How does the final simile change the feeling of the whole poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"Thanatopsis\" use Nature and the image of the earth as one vast tomb to console the reader about death? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about facing death in your own words. Connect two images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "A Meditation on Death",
      prompt: "\"Thanatopsis\" consoles the reader about a hard, universal truth — death — by turning to Nature and to the fact that everyone shares the same fate. Choose another poem, song, story, or speech that consoles or reframes a difficult idea through nature or a shared, universal truth. Explain the connection with evidence: what is the difficult idea, how does the text console or reframe it, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's console-through-nature technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"Thanatopsis\" uses Nature and the image of the earth as one vast tomb to console the reader about death. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"Thanatopsis.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in \"Thanatopsis\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"Thanatopsis\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect \"Thanatopsis\"'s console-through-nature technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"Thanatopsis\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of \"Thanatopsis\" (William Cullen Bryant, 1817) as a blank-verse meditation on death — a study of personification, imagery, the earth-as-tomb figure, tone, and the poem's consoling structure. The poem is public domain, so the text may be referenced directly and this room reproduces no copyrighted edition. \"Thanatopsis\" is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"Thanatopsis\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English I / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem (published 1817) is in the public domain in the United States, so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's blank verse, personification, imagery, and structure of consolation academically and neutrally. The poem meditates calmly on death as natural and universal; preview it and follow your district's policy and community expectations.",
        "Details here were checked against the poem's anchors (Nature speaking a soothing voice; the shudder at 'the last bitter hour,' the pall, the shroud, 'breathless darkness'; the body returning to the earth, a 'brother to the insensible rock'; the earth as one great sepulchre with hills, rivers, and sea as its 'ornaments'; the company of the patriarchs, kings, wise, and good; 'the innumerable caravan' moving to 'the pale realms of shade'; the closing 'So live…' and the 'pleasant dreams' simile). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS (English I) and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, tone, and theme — especially personification, blank verse, and simile. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
