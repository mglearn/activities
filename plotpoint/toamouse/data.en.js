/* PlotPoint — Robert Burns, "To a Mouse, on Turning Her Up in Her Nest with the Plough" (1785/1786). PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem (1785–86) is in the public domain, so this room may
   reference the text directly. "To a Mouse" is studied here as LITERATURE —
   apostrophe, Scots dialect as voice, and the structural turn from a small event to a
   universal reflection on the human condition — in a neutral, academic frame consistent
   with the Texas required literary-works list (19 TAC §110.70, English III / high school).
   The room paraphrases, quotes only brief public-domain phrases where a close reading
   needs them, and glosses the Scots dialect in plain English. Standards are good-faith
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every choices/options
   array; the engine shuffles. */
window.__ROOM__ = {
  id: "toamouse",
  storageKey: "plotpoint.toamouse.v1",

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
    "vocab.title": "Words for To a Mouse",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Plowed Field",
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
    "ctob.title": "The Turned-Up Nest",
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
    "arcade.title": "The Mouse or the Human Condition?",
    "arcade.default": "Sort each detail by whether it belongs to the small event or the universal reflection.",
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
    "print.item.relic": "Plowed Field evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Small-event-to-universal-truth organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/To_a_Mouse",
      title: "To a Mouse",
      author: "Robert Burns",
      grades: "English III",
      genre: "Poetry · Lyric · Scots dialect",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1786)",
      textAccess: "A short public-domain poem in Scots dialect; use your class's copy or any public-domain text.",
      copyright: "Robert Burns wrote 'To a Mouse' in 1785 and published it in 1786; it is in the public domain, so this room may reference the text directly. It is studied here as literature — its apostrophe, dialect as voice, and the turn from a small event to a universal reflection. The room quotes only brief public-domain phrases where a close reading needs them, and paraphrases and glosses the Scots dialect in plain English.",
      contentNote: "'To a Mouse' appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. The poem is written in Scots DIALECT — offer a glossary so students can read the dialect words in plain English. It is presented as literature — apostrophe, dialect, and the structural turn to the human condition — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'To a Mouse' — a plowed autumn field at dusk, a horse-drawn plough halted mid-furrow, and a tiny nest of grass torn open in the freshly turned earth, a small mouse frozen at its edge."
    },
    hook: "One accident, on one ordinary day: a plowman's blade rips open a mouse's tiny nest in the field. Robert Burns stops the plough, looks down at the frightened little animal, and speaks to it — apologizing. Then, in a few short stanzas, that small ruined nest opens into one of the most famous lines in the language: 'The best-laid schemes o' mice an' men / Gang aft agley.' Read it as a poem, and watch how a plowing accident becomes a truth about everyone.",
    goals: [
      "Understand 'To a Mouse' as a lyric poem in Scots dialect in which a plowman apostrophizes — speaks directly to — a mouse whose nest he has destroyed.",
      "Analyze how the poem's Scots dialect creates a plain, tender, authentic voice, and read the dialect words in plain English.",
      "Trace the structural turn from a small, specific event (the ruined nest) to a universal reflection on the human condition (plans go awry; foresight brings fear).",
      "Interpret the famous aphorism 'the best-laid schemes o' mice an' men gang aft agley' and why the speaker finally calls the mouse 'blest, compared wi' me.'"
    ],
    stages: {
      before: [
        "Preview the vocabulary — the literary terms and a few Scots-dialect glosses (for example, 'agley' means awry).",
        "Discuss: how can a very small event — an accident with an animal — lead a writer to a big idea about all people?"
      ],
      during: [
        "Use the Plowed Field to slow down and read the poem image by image, glossing the Scots words as you go.",
        "Track the turn: from the frightened mouse and its ruined home to the aphorism about best-laid plans and the speaker's own fear."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the apostrophe, the dialect, and the small-event-to-universal-truth structure.",
        "Complete the Extend task to carry the 'best-laid plans go awry' theme, or the turn, to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Burns turns a plowing accident into a truth about all people. Include one image or line from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the mouse's ruined nest to the poem's famous line about 'the best-laid schemes o' mice an' men.' Explain how the small event sets up the universal reflection." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's move — carrying from a small, specific event to a universal truth — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "apostrophe", def: "A figure of speech in which a speaker directly addresses someone (or something) absent, or that cannot answer — here, a mouse.", example: "The plowman speaking straight to the mouse: 'Wee, sleekit, cow'rin, tim'rous beastie.'", nonexample: "Describing the mouse to a reader without ever addressing it.", context: "The whole poem is an apostrophe: the speaker talks to the mouse." },
      { term: "dialect", def: "A form of a language particular to a region or group, with its own words, spellings, and sounds — here, Scots.", example: "Burns writing 'sleekit,' 'beastie,' and 'gang aft agley' instead of standard English.", nonexample: "Formal, standard textbook English with no regional flavor.", context: "The poem is written in Scots dialect, which gives it a plain, honest voice." },
      { term: "aphorism", def: "A short, memorable statement of a general truth.", example: "'The best-laid schemes o' mice an' men / Gang aft agley' — plans often go wrong.", nonexample: "A long, detailed description of one specific afternoon.", context: "The poem's most famous lines are an aphorism about plans going awry." },
      { term: "tone", def: "The speaker's attitude toward the subject, felt through word choice.", example: "The tender, apologetic tone as the speaker comforts the frightened mouse.", nonexample: "A neutral list of facts with no feeling.", context: "The tone moves from tender and apologetic to melancholy." },
      { term: "theme", def: "A central idea or insight about life that a work explores.", example: "The theme that even the best plans can go wrong, for mice and for people.", nonexample: "The simple plot summary: a plough broke a nest.", context: "A key theme is that human foresight is both a gift and a curse." },
      { term: "turn (volta)", def: "The point where a poem pivots — shifting subject, feeling, or scope.", example: "The turn from the specific ruined nest to a general truth about all people.", nonexample: "A poem that stays on one idea and never shifts.", context: "The poem's turn moves from the mouse to the whole human condition." },
      { term: "speaker", def: "The voice that speaks in a poem — not always the same as the author.", example: "The plowman who stops his work and talks to the mouse.", nonexample: "The printer who set the poem in type.", context: "The speaker is a plowman who has just destroyed the mouse's nest." },
      { term: "agley (Scots)", def: "A Scots dialect word meaning 'awry' or 'off course' — wrong, not as planned.", example: "'Gang aft agley' means 'often go awry.'", nonexample: "'Exactly as intended,' the opposite meaning.", context: "The best-laid schemes 'gang aft agley' — they often go wrong." },
      { term: "thole (Scots)", def: "A Scots dialect word meaning 'to endure' or 'to bear' something hard.", example: "The homeless mouse must 'thole' — endure — the winter's cold sleet.", nonexample: "To easily escape or avoid a hardship.", context: "Left without a home, the mouse must thole the winter's sleety cold." }
    ],

    relic: {
      name: "The Plowed Field",
      intro: "Seven instructional reconstructions of the images and moments in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "plough", name: "The Plough and the Broken Nest", image: "images/plough.webp",
          clues: ["The poem's whole situation begins with a plough turning up a mouse's nest.", "The full title says the nest was turned up 'with the Plough.'", "This accident is what makes the speaker stop and start talking to the mouse."],
          identify: { q: "What event starts the poem?", choices: ["A plough accidentally tears open a mouse's nest in a field", "A hunter deliberately traps the mouse", "A storm floods the whole field", "A cat chases the mouse away"] },
          purpose: { q: "What is this event's role in the poem?", choices: ["It is the small, specific occasion that sets the whole reflection in motion", "It is only a background detail", "It ends the poem", "It has nothing to do with the mouse"] },
          significance: { q: "Why does the speaker feel responsible?", choices: ["He caused the ruin himself — it was human work, not the mouse's fault", "The mouse attacked him first", "A neighbor plowed the field", "The nest was already empty"] },
          reveals: "The small, ordinary accident that opens the poem.",
          conceals: "How much reflection Burns builds from one plowing mishap.",
          ace: "Articulate the event; connect it to the speaker's guilt; extend it to how a small accident can prompt a big thought."
        },
        {
          id: "beastie", name: "The Wee, Cow'rin, Tim'rous Beastie", image: "images/beastie.webp",
          clues: ["The speaker's first words address the mouse directly: 'Wee, sleekit, cow'rin, tim'rous beastie.'", "'Cow'rin' and 'tim'rous' mean cowering and timid — the mouse is terrified.", "This direct address to the mouse is an example of apostrophe."],
          identify: { q: "How does the speaker treat the mouse in these opening lines?", choices: ["He speaks directly to it, calling it a small, frightened creature", "He mocks it as an enemy", "He ignores it completely", "He describes it only to a friend"] },
          purpose: { q: "What literary device is the speaker using here?", choices: ["Apostrophe — directly addressing the mouse", "A rhyme scheme", "A flashback", "A stage direction"] },
          significance: { q: "What does the tender address reveal about the tone?", choices: ["The tone is gentle and sympathetic, not cruel", "The tone is angry and threatening", "The tone is bored and flat", "The tone is triumphant"] },
          reveals: "The apostrophe that shapes the whole poem — the speaker talking to the mouse.",
          conceals: "How the Scots words carry the speaker's tenderness.",
          ace: "Articulate the apostrophe; connect it to the gentle tone; extend it to why speaking 'to' something changes the feeling."
        },
        {
          id: "union", name: "Nature's Social Union Broken", image: "images/union.webp",
          clues: ["The speaker is sorry that humankind's 'dominion / Has broken Nature's social union.'", "He feels that people have damaged the bond between humans and other creatures.", "This is the speaker's guilt over human power over nature."],
          identify: { q: "What does the speaker regret in this part of the poem?", choices: ["That human 'dominion' has broken the natural bond between people and creatures", "That the mouse stole his grain", "That the field was too small", "That the plough was broken"] },
          purpose: { q: "What role does this reflection play?", choices: ["It widens the poem from one mouse to how humans treat nature", "It changes the poem to a different animal", "It is a joke", "It ends the poem"] },
          significance: { q: "What attitude does this show toward the mouse?", choices: ["Empathy across species — the speaker sees the mouse as a fellow creature", "Contempt for a pest", "Fear of the mouse", "Indifference"] },
          reveals: "The speaker's guilt over human dominion and his empathy for the mouse.",
          conceals: "How the poem quietly criticizes human power over nature.",
          ace: "Articulate the 'social union' idea; connect it to empathy; extend it to another moment of care across a divide."
        },
        {
          id: "home", name: "The Ruined Winter Home", image: "images/home.webp",
          clues: ["The mouse built its little house to survive the coming winter.", "The cruel plough has cut through it, leaving the mouse homeless.", "Now the mouse must 'thole the winter's sleety dribble' — endure the cold with no shelter."],
          identify: { q: "What has the plough done to the mouse's home?", choices: ["Destroyed the nest the mouse built against the coming winter, leaving it homeless", "Made the nest larger and warmer", "Moved the nest to safety", "Filled the nest with food"] },
          purpose: { q: "Why does the timing — just before winter — matter?", choices: ["It makes the loss worse: no time and little to rebuild before the cold", "It means the mouse can easily start over", "It means winter is already ending", "It has no effect"] },
          significance: { q: "What does the Scots word 'thole' mean here?", choices: ["To endure or bear the winter's cold and sleet with no shelter", "To celebrate the winter", "To escape the winter entirely", "To sleep through the winter comfortably"] },
          reveals: "The mouse's ruined home and the hardship of facing winter unsheltered.",
          conceals: "How carefully the mouse planned — and how little that planning could protect it.",
          ace: "Articulate the ruined-home image; connect it to the coming winter; extend it to a time careful plans still failed."
        },
        {
          id: "schemes", name: "The Best-Laid Schemes o' Mice an' Men", image: "images/schemes.webp",
          clues: ["Here the poem turns from the mouse to a truth about everyone.", "'The best-laid schemes o' mice an' men / Gang aft agley' — plans often go wrong.", "The result is 'nought but grief an' pain, / For promis'd joy.'"],
          identify: { q: "What famous idea does this part of the poem state?", choices: ["That the best-laid plans of mice and men often go awry", "That planning always succeeds", "That mice cannot plan at all", "That winter never comes"] },
          purpose: { q: "What kind of statement is 'the best-laid schemes... gang aft agley'?", choices: ["An aphorism — a short, memorable statement of a general truth", "A stage direction", "A definition of a Scots word", "A rhyme scheme"] },
          significance: { q: "Why is this the poem's turn (volta)?", choices: ["It shifts from the specific mouse to a universal truth about all people", "It introduces a new character", "It returns to the plough", "It repeats the opening line"] },
          reveals: "The structural turn from a small event to a universal truth.",
          conceals: "How one ruined nest becomes a statement about the whole human condition.",
          ace: "Articulate the aphorism in your own words; connect it to the ruined nest; extend it to your own experience of a plan going awry."
        },
        {
          id: "blest", name: "The Mouse Blest, Compared wi' Me", image: "images/blest.webp",
          clues: ["The speaker decides the mouse is actually more fortunate: 'blest, compared wi' me!'", "The mouse is touched only by the PRESENT moment.", "It does not brood over the past or dread the future the way a person does."],
          identify: { q: "What surprising claim does the speaker make about the mouse?", choices: ["That the mouse is more fortunate — 'blest' — compared with the speaker", "That the mouse is doomed and the speaker is safe", "That the mouse and speaker are exactly the same", "That the mouse caused all the trouble"] },
          purpose: { q: "Why does the speaker say the mouse is better off?", choices: ["The mouse lives only in the present, untroubled by past or future", "The mouse is wealthier", "The mouse has a warmer home", "The mouse can fly away"] },
          significance: { q: "What does this reveal about being human?", choices: ["Human memory and foresight can be a burden the mouse never carries", "Humans have no worries at all", "Animals feel far more pain than people", "The past does not matter to anyone"] },
          reveals: "The reversal: the mouse is 'blest' because it lives only in the present.",
          conceals: "How the poem sets the animal's now against the human's past and future.",
          ace: "Articulate why the mouse is called 'blest'; connect it to living in the present; extend it to whether foresight is a gift or a burden."
        },
        {
          id: "fear", name: "Backward Grief and Forward Fear", image: "images/fear.webp",
          clues: ["The speaker looks back on 'prospects drear' — a dreary past.", "He looks forward into the unknown future, where he can only 'guess an' fear.'", "This is the burden of human foresight — the very thing the mouse is spared."],
          identify: { q: "What weighs on the speaker at the end of the poem?", choices: ["A grim look back at the past and fear of an unknown future", "Joy at a rich harvest", "Pride in his plowing", "Nothing at all"] },
          purpose: { q: "How does this ending complete the poem's turn?", choices: ["It shows the human cost of foresight — memory and dread the mouse escapes", "It returns to describing the nest", "It introduces a new mouse", "It cancels the aphorism"] },
          significance: { q: "What is the poem's final tone?", choices: ["Melancholy — thoughtful and sad, having moved beyond the day's small accident", "Cheerful and triumphant", "Angry and bitter", "Cold and factual"] },
          reveals: "The burden of human foresight — grief behind, fear ahead.",
          conceals: "How the poem ends on the speaker himself, not the mouse.",
          ace: "Articulate the speaker's backward grief and forward fear; connect it to why the mouse is 'blest'; extend it to whether knowing the future would help or hurt."
        }
      ]
    },

    ctob: {
      name: "The Turned-Up Nest",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "When a speaker directly addresses someone or something absent — here, the mouse — the device is called ______. (one word)",
          evidence: ["The poem opens by talking straight to the mouse.", "'Wee, sleekit, cow'rin, tim'rous beastie' is spoken to the mouse itself.", "The word begins with 'apostro…'."],
          hints: ["It names speaking directly to something that cannot answer.", "Apostro…", "The word is apostrophe."],
          answer: "apostrophe"
        },
        {
          type: "mc",
          prompt: "The famous line 'The best-laid schemes o' mice an' men / Gang aft agley' means that —",
          options: [
            "even the most careful plans often go wrong.",
            "mice make better plans than people.",
            "planning always guarantees success.",
            "no one should ever make a plan."
          ],
          hints: ["'Gang aft agley' means 'often go awry.'", "The line is about both mice and men — everyone."]
        },
        {
          type: "mc",
          prompt: "At the end, the speaker calls the mouse 'blest, compared wi' me' because —",
          options: [
            "the mouse lives only in the present, free of past grief and future fear.",
            "the mouse has a warmer, larger home than the speaker.",
            "the mouse is wealthier than the speaker.",
            "the mouse caused the accident and feels no guilt."
          ],
          hints: ["Think about what the speaker regrets looking backward and dreads looking forward.", "The mouse is touched only by the present moment."]
        },
        {
          type: "digit",
          prompt: "How many stanzas make up 'To a Mouse'? Enter the number.",
          evidence: ["The poem is written in the six-line 'Standard Habbie' stanza Burns often used.", "Count each six-line group as one stanza.", "There are more than seven and fewer than nine."],
          hints: ["Each stanza has six lines; the poem has 48 lines in all.", "Divide 48 lines by 6 lines per stanza.", "The number is 8."],
          answer: "8"
        },
        {
          type: "sequence",
          prompt: "Put the poem's moments in the order they appear, earliest first.",
          items: [
            "The plough turns up the mouse's nest and the frightened mouse cowers.",
            "The speaker apologizes and mourns the ruined winter home.",
            "The turn: 'the best-laid schemes o' mice an' men / gang aft agley.'",
            "The speaker calls the mouse 'blest,' then faces his own backward grief and forward fear."
          ],
          hints: ["The poem begins with the accident and the frightened mouse.", "The famous aphorism comes after the ruined home.", "The poem ends on the speaker's own past and future."]
        },
        {
          type: "mc",
          prompt: "The poem is written in Scots dialect. This choice mainly —",
          options: [
            "gives the speaker a plain, honest, authentic voice.",
            "makes the poem harder on purpose to exclude readers.",
            "proves the speaker is uneducated and foolish.",
            "has no effect on the poem's feeling."
          ],
          hints: ["Think about how a regional, everyday voice sounds compared to formal English.", "The dialect fits a plowman speaking tenderly to a mouse."]
        }
      ]
    },

    arcade: {
      name: "The Mouse or the Human Condition?",
      instruction: "Burns turns a small plowing accident into a truth about everyone. Sort each detail by where it belongs: is it part of the SMALL, SPECIFIC EVENT (the mouse and its nest), or part of the UNIVERSAL REFLECTION (people and the human condition)? Reasoning earns the points.",
      buckets: [
        { id: "mouse", label: "About the mouse (the small, specific event)", short: "The mouse" },
        { id: "human", label: "About people (the universal reflection)", short: "The human condition" }
      ],
      cards: [
        { text: "The plough tears open the little nest in the field.", bucket: "mouse", why: "This is the specific accident that starts the poem." },
        { text: "The mouse cowers, frightened, as the speaker addresses it.", bucket: "mouse", why: "The 'tim'rous beastie' is the small, particular creature." },
        { text: "The nest was built to survive the coming winter.", bucket: "mouse", why: "The mouse's own careful preparation — a specific detail." },
        { text: "The mouse must 'thole the winter's sleety dribble.'", bucket: "mouse", why: "The mouse's particular hardship, left homeless before winter." },
        { text: "'The best-laid schemes o' mice an' men gang aft agley.'", bucket: "human", why: "The turn to a general truth about mice AND men." },
        { text: "Plans leave 'nought but grief an' pain, for promis'd joy.'", bucket: "human", why: "A universal statement about disappointment, not just the mouse." },
        { text: "Looking backward on 'prospects drear.'", bucket: "human", why: "Human memory of a dreary past — the mouse is spared this." },
        { text: "Looking forward and being able only to 'guess an' fear.'", bucket: "human", why: "Human dread of the unknown future — the burden of foresight." }
      ],
      followup: "Burns starts with one ruined nest and ends with a truth about everyone. How does he move from the small, specific event to the universal reflection — and why might a tiny accident be a good way to reach a big idea?"
    },

    analysis: {
      mcq: [
        {
          q: "The speaker of 'To a Mouse' is best described as —",
          options: [
            "a plowman who has accidentally destroyed the mouse's nest.",
            "the mouse itself, telling its own story.",
            "a king addressing his court.",
            "a scientist studying mice in a lab."
          ],
          why: "The full title and the poem make clear a plowman has turned up the nest with his plough and now speaks to the mouse."
        },
        {
          q: "By speaking directly to the mouse ('Wee, sleekit, cow'rin, tim'rous beastie'), the poem uses —",
          options: [
            "apostrophe.",
            "a rhyme scheme.",
            "a flashback.",
            "a stage direction."
          ],
          why: "Addressing a creature that cannot answer is the definition of apostrophe."
        },
        {
          q: "'The best-laid schemes o' mice an' men / Gang aft agley' expresses the idea that —",
          options: [
            "even careful plans often go wrong.",
            "mice plan better than people.",
            "planning always leads to success.",
            "only the mouse ever makes plans."
          ],
          why: "'Gang aft agley' means 'often go awry'; the line applies to both mice and men."
        },
        {
          q: "The turn (volta) of the poem occurs when Burns shifts from —",
          options: [
            "the specific ruined nest to a universal truth about all people.",
            "the future to the distant past only.",
            "poetry to plain prose.",
            "one mouse to a whole flock of sheep."
          ],
          why: "The poem pivots from the small, particular event to a general reflection on the human condition."
        },
        {
          q: "The speaker calls the mouse 'blest, compared wi' me' because the mouse —",
          options: [
            "lives only in the present, free of past grief and future fear.",
            "owns a warmer home than the speaker.",
            "will not have to face the winter.",
            "planned more carefully than any person could."
          ],
          why: "The mouse is touched only by the present, while the speaker carries backward grief and forward fear."
        }
      ],
      short: [
        "Choose one moment from the Plowed Field. Explain what it shows and what it reveals about the poem's meaning.",
        "Explain how Burns turns a small event — a plough breaking a mouse's nest — into a universal truth about people. Use specific details from the poem.",
        "The speaker says the mouse is 'blest, compared wi' me.' Explain what he means and what it suggests about human memory and foresight."
      ],
      paragraph: "Write an evidence-based paragraph. How does 'To a Mouse' use apostrophe and its Scots dialect to move from a small, specific event to a reflection on the whole human condition? Make a claim and support it with specific images and lines from the poem.",
      aceReflection: "Articulate in your own words what the poem suggests about plans and the human condition. Connect the ruined nest to the aphorism about 'the best-laid schemes.' Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "'To a Mouse' turns one small event — a plough breaking a mouse's nest — into a universal truth: the best-laid plans of mice and men often go awry. Choose another poem, song, story, film, or real situation that does the same thing: a small, specific event that opens into a big idea. Explain the connection with evidence: what is the small event, what universal truth does it reach, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's small-event-to-universal-truth turn (or its 'best-laid plans go awry' theme) to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'To a Mouse' turns a small plowing accident into a truth about all people. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'To a Mouse.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it. If it is a Scots dialect word, also give its plain-English meaning." },
      { title: "Connect prompt", text: "I think the ruined nest connects to the line about 'the best-laid schemes o' mice an' men' in 'To a Mouse' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about 'To a Mouse': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the small-event-to-universal-truth turn in 'To a Mouse' to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'To a Mouse' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Robert Burns's 'To a Mouse' (1785/1786) as a lyric poem in Scots dialect — a study of apostrophe, dialect as voice, the structural turn from a small event to a universal reflection, and the famous aphorism about best-laid plans. The poem is public domain, so the text can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. A Scots-dialect glossary is offered so students can read the dialect in plain English. Every student response stays on the device.",
      reviewNotes: [
        "'To a Mouse' appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was written in 1785 and published in 1786 and is in the public domain — so the text may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's apostrophe, Scots dialect, and its turn from a small event to the human condition academically and neutrally. Because the poem is written in Scots DIALECT, provide a dialect gloss (for example, 'agley' = awry, 'thole' = endure, 'sleekit' = sleek/sly, 'wee' = little) so all students can read it in plain English.",
        "Details here were checked against the poem's content anchors: the plough turning up the nest (per the full title); the opening apostrophe 'Wee, sleekit, cow'rin, tim'rous beastie'; the regret that human 'dominion / Has broken Nature's social union'; the ruined home and the mouse left to 'thole the winter's sleety dribble'; the aphorism 'The best-laid schemes o' mice an' men / Gang aft agley' leaving 'nought but grief an' pain, / For promis'd joy'; and the close in which the mouse is 'blest, compared wi' me' because the speaker faces 'prospects drear' behind and can only 'guess an' fear' ahead. Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, dialect and voice, and theme — especially apostrophe, the poetic turn (volta), and the aphorism. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, a Scots-dialect gloss, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, a Scots-dialect gloss, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
