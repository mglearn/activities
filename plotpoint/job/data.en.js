/* PlotPoint — The Book of Job, "Selections" (New International Reader's Version, NIrV — COPYRIGHTED).
   The underlying book is ancient and public domain; the state-specified NIrV translation is copyrighted.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The Book of Job is public domain, but the state names a COPYRIGHTED
   translation (the NIrV). This room therefore reproduces and quotes NO scripture from any
   edition — every reference is PARAPHRASED, and no NIrV (or other) wording is presented as
   the assigned text. Job is studied here as LITERATURE — frame narrative, dramatic irony,
   theodicy, dialogue, and the rhetorical questions of the whirlwind speeches — in a neutral,
   academic, non-devotional frame consistent with the Texas required literary-works list
   (19 TAC §110.70, English II / high school). Facts were checked against a public-domain
   translation and paraphrased; nothing is quoted. Standards are good-faith alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "job",
  storageKey: "plotpoint.job.v1",

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

    "nav.enter": "Enter the Text", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Text",
    "enter.by": "from the {a}",
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
    "enter.readListenNote": "The Book of Job is public domain, but the specified NIrV translation is copyrighted. Use the specified classroom edition your district supplies; a public-domain translation may be used for supplemental activities but is not textually identical.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the district-supplied edition.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Book of Job",
    "vocab.intro": "{n} terms that unlock the text. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Voices from the Whirlwind",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the text",
    "relic.q.significance": "What it reveals about the text's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Case of the Suffering Man",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the text closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Whose View Is It?",
    "arcade.default": "Sort each claim by whose view it represents in the debate.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Claims to sort",
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
    "extend.title": "One Frame, One Question",
    "extend.format": "Format",
    "extend.evidence": "The feature from the text I am building on",
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
    "print.item.relic": "Voices from the Whirlwind evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Frame-and-theodicy organizer",
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
      title: "The Book of Job — Selections",
      author: "New International Reader's Version (specified)",
      grades: "English II",
      genre: "Sacred text · Wisdom literature · Frame narrative",
      time: "45–75 minutes / multiple periods",
      spoiler: "Full spoilers",
      rights: "Underlying book public domain; specified version (NIrV) copyrighted",
      textAccess: "This room studies selections from the Book of Job: chapters 1–7, 11, 14, 19, 28, and 38–42. The book itself is public domain, but the state-specified translation — the New International Reader's Version (NIrV) — is copyrighted. Use the specified classroom edition your district supplies.",
      copyright: "The Book of Job is ancient and in the public domain. The state, however, names a copyrighted translation — the New International Reader's Version (NIrV). This room reproduces and quotes NO scripture text from any edition; every reference is paraphrased, and the book is studied as literature — its frame narrative, dramatic irony, dialogue, theodicy, and the rhetorical questions of the whirlwind speeches.",
      contentNote: "Presented as literature — frame narrative, dramatic irony, the debate structure, theodicy, and imagery — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school). Because the state names a copyrighted translation (NIrV), a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical. Note maturity: the book depicts intense suffering, the loss of children, and illness — preview for grade level. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the Book of Job — a lone figure seated among the ruins of his fortunes as a great storm gathers on the horizon, a whirlwind of cloud and light rising over the wilderness."
    },
    hook: "A blameless man loses everything in a single day — his herds, his servants, his children — and then his health. His friends come to comfort him and end up arguing that he must have done something to deserve it. But you, the reader, were shown the truth in the opening scene: none of this is punishment. That gap between what you know and what the characters believe is the engine of the whole book. These selections — chapters 1–7, 11, 14, 19, 28, and 38–42 — frame a raw human question in ancient poetry: why do the innocent suffer, and can any answer satisfy?",
    goals: [
      "Understand the Book of Job as a frame narrative — a prose prologue and epilogue wrapped around a long poetic debate.",
      "Analyze how the heavenly-wager prologue creates dramatic irony that shapes the reader's experience of the whole book.",
      "Trace the debate over theodicy: the friends' retribution theory versus Job's insistence that his suffering is undeserved.",
      "Interpret the whirlwind speeches — their rhetorical questions and nature imagery — and what the ending suggests about the limits of human understanding."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of frame narrative, dramatic irony, and theodicy.",
        "Discuss: if you already knew why someone was suffering but they did not, how would that change the way you read their story?"
      ],
      during: [
        "Use Voices from the Whirlwind to slow down and read the text section by section.",
        "Track the structure: prose prologue, poetic lament, the friends' debate, the wisdom poem, the whirlwind speeches, and the prose epilogue."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the frame, the debate, and the theodicy question.",
        "Complete the Extend task to carry the frame-narrative technique or the theodicy question to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what dramatic irony is in the Book of Job — what the reader knows that Job and his friends do not — and how it shapes the way you read the debate." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the prose prologue to the poetic debate. Explain how the heavenly-wager scene sets up the friends' argument that Job must have sinned, and why that placement matters." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the book's frame-narrative technique — prose wrapped around a long poetic core — or its theodicy question to another text, film, or real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "frame narrative", def: "A story structure in which one kind of narration surrounds another — here, a prose prologue and epilogue wrapped around a poetic center.", example: "Job's prose opening and closing enclosing the long poetic debate.", nonexample: "A single continuous story told in one style throughout.", context: "The Book of Job is a frame narrative: prose frames the poetry." },
      { term: "dramatic irony", def: "When the audience knows something important that the characters do not.", example: "Readers know Job's suffering is a test, but Job and his friends never learn why.", nonexample: "Characters and audience learning a secret at the exact same moment.", context: "Dramatic irony shapes how we read every speech in the debate." },
      { term: "theodicy", def: "The problem of why a just God allows the innocent to suffer; an attempt to reconcile suffering with divine justice.", example: "The book's central question: why does a blameless man suffer?", nonexample: "A simple debate about which crops to plant.", context: "Job wrestles with theodicy without settling it neatly." },
      { term: "dialogue", def: "A structured exchange of speeches between characters, used here as a debate.", example: "Job answering each friend in turn, round after round.", nonexample: "A single speaker talking with no reply.", context: "The book's core is a dialogue between Job and his friends." },
      { term: "rhetorical question", def: "A question asked for effect, not to get an answer — often to make a point or overwhelm.", example: "The voice from the storm asking where Job was when the earth was made.", nonexample: "A question expecting a factual reply, like asking the time.", context: "The whirlwind speeches pile up rhetorical questions Job cannot answer." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Storm clouds, wild animals, and the sea in the whirlwind speeches.", nonexample: "An abstract word like 'important' with no picture.", context: "Nature imagery fills the voice from the whirlwind." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "Undeserved suffering and the limits of human understanding.", nonexample: "A minor detail that appears only once.", context: "The book's theme is why the righteous suffer." },
      { term: "blameless", def: "Free of fault or guilt; upright in conduct.", example: "Job introduced as an upright, blameless man.", nonexample: "Someone deliberately doing wrong.", context: "The text calls Job blameless before his troubles begin." },
      { term: "lament", def: "A passionate expression of grief or sorrow.", example: "Job cursing the day he was born in his opening poem.", nonexample: "A cheerful celebration song.", context: "Job breaks his silence with a lament over his birth." }
    ],

    relic: {
      name: "Voices from the Whirlwind",
      intro: "Seven instructional reconstructions of key moments in the selections — teaching recreations, not artwork or text from any edition. Investigate what each shows, its role in the book, and what it reveals. Every reference is paraphrased; no scripture is reproduced.",
      artifacts: [
        {
          id: "frame", name: "The Frame — Prose Around Poetry", image: "images/frame.webp",
          clues: ["The book opens and closes in prose — plain storytelling.", "Between them stretches a long section of poetry: laments and debate.", "The prose sets up the situation; the poetry explores its meaning."],
          identify: { q: "How is the Book of Job structured?", choices: ["A prose prologue and epilogue frame a long poetic center", "It is poetry from beginning to end", "It is a single prose story with no poetry", "It is a collection of unrelated proverbs"] },
          purpose: { q: "What is the role of this frame structure?", choices: ["The prose gives the facts; the poetry wrestles with their meaning", "The prose and poetry tell two unrelated stories", "The frame exists only for decoration", "The frame hides the ending"] },
          significance: { q: "Why does the frame matter to the reader?", choices: ["Knowing the prose set-up changes how we hear every poetic speech", "The frame makes the poetry easier to skip", "The frame replaces the debate", "The frame has no effect on meaning"] },
          reveals: "The book's basic architecture: prose narrative around a poetic core.",
          conceals: "How much the plain opening controls our reading of the poetry that follows.",
          ace: "Articulate the frame structure; connect the prose set-up to the poetry; extend it to another text that wraps one kind of storytelling around another."
        },
        {
          id: "wager", name: "The Heavenly Wager", image: "images/wager.webp",
          clues: ["In a heavenly scene, an accusing figure challenges the reason for Job's faithfulness.", "The accuser claims Job is only loyal because he is protected and prosperous.", "The reader watches this scene; Job never does."],
          identify: { q: "What happens in the opening heavenly scene?", choices: ["An accusing figure challenges whether Job would stay faithful without his blessings", "Job is crowned as a king", "Job is put on trial for a crime", "Job wins a contest of strength"] },
          purpose: { q: "What does this scene set up for the reader?", choices: ["Dramatic irony — the reader knows the reason for the test, but Job never will", "A romance between two characters", "A comic misunderstanding", "The end of the story"] },
          significance: { q: "Why does the reader's private knowledge matter?", choices: ["It makes the friends' 'you must have sinned' arguments ring hollow to us", "It proves the friends are correct", "It has no bearing on the debate", "It ends the suffering immediately"] },
          reveals: "The source of the book's dramatic irony.",
          conceals: "How a scene Job never sees governs our judgment of every later speech.",
          ace: "Articulate the wager scene; connect it to dramatic irony; extend it to a story where you knew a truth a character did not."
        },
        {
          id: "losses", name: "Job's Losses and His Refusal to Curse", image: "images/losses.webp",
          clues: ["In a single day, messengers report the loss of livestock, servants, and all of Job's children.", "Job is then struck with painful sores; his wife urges him to give up.", "He grieves deeply yet refuses to curse God."],
          identify: { q: "What happens to Job in the prologue?", choices: ["He loses his wealth and children in one day, then his health, yet refuses to curse God", "He grows richer and more powerful", "He leaves home on a voyage", "He is rewarded for a good deed"] },
          purpose: { q: "Why show the losses all at once and so early?", choices: ["To make the depth of undeserved suffering vivid before the debate begins", "To end the story quickly", "To introduce a villain who is punished", "To describe a festival"] },
          significance: { q: "What does his refusal to curse establish?", choices: ["That his integrity, not guilt, is what the rest of the book tests", "That he is secretly guilty", "That he no longer cares", "That the suffering was minor"] },
          reveals: "The scale of Job's undeserved suffering and his initial integrity.",
          conceals: "How his early endurance sharpens the later, angrier questions of the poetry.",
          ace: "Articulate what Job loses; connect his refusal to curse to the theme of integrity; extend it to how a character's early choice shapes a whole story."
        },
        {
          id: "friends", name: "The Three Friends and the Retribution Argument", image: "images/friends.webp",
          clues: ["Three friends come to comfort Job and sit in silence with him for seven days.", "Then they argue a theory: suffering is punishment for sin.", "By that logic, they insist, Job must have done wrong."],
          identify: { q: "What do the three friends come to do, and what do they end up arguing?", choices: ["They come to comfort Job, then argue that his suffering must be punishment for sin", "They come to celebrate with Job", "They come to rob Job", "They come to teach Job a trade"] },
          purpose: { q: "What theory drives the friends' speeches?", choices: ["Retribution — the belief that suffering is always deserved punishment", "That suffering is random and meaningless", "That Job is a king in disguise", "That the losses never happened"] },
          significance: { q: "Why does the reader resist the friends' logic?", choices: ["The prologue already told us the suffering is a test, not punishment", "The friends never speak", "The friends admit they are lying", "Job agrees with them completely"] },
          reveals: "The retribution theory that the debate puts on trial.",
          conceals: "How the friends' 'comfort' becomes accusation.",
          ace: "Articulate the retribution argument; connect it to the friends' role; extend it to a time someone assumed suffering must be deserved."
        },
        {
          id: "vindicator", name: "Job's Cry for a Vindicator and His Lament on Mortality", image: "images/vindicator.webp",
          clues: ["Job reflects that a person's days are few and full of trouble.", "Unlike a felled tree that can sprout again, he says, a person who dies does not return.", "Yet at his lowest, he voices a startling flash of hope: that a defender will one day stand up for him."],
          identify: { q: "What does Job reflect on in these meditations (chs 14, 19)?", choices: ["Human frailty and mortality — and a sudden hope for a defender who will vindicate him", "The joys of his lost wealth", "A plan to travel the world", "Advice on farming"] },
          purpose: { q: "How does the tree comparison work?", choices: ["A cut tree can sprout again, but Job says a dead person does not — sharpening his grief", "It proves people live forever", "It describes a garden he owns", "It has nothing to do with mortality"] },
          significance: { q: "Why is the hope for a vindicator so striking?", choices: ["It flashes out at Job's lowest point, against his despair", "It ends the book", "It proves the friends right", "It removes all his suffering at once"] },
          reveals: "Job's meditation on death and his fragile hope for someone to defend him.",
          conceals: "How hope and despair sit side by side in the same speeches.",
          ace: "Articulate Job's view of mortality; connect it to his cry for a vindicator; extend it to how hope can surface in a moment of despair."
        },
        {
          id: "wisdom", name: "The Poem on Wisdom", image: "images/wisdom.webp",
          clues: ["An interlude (ch 28) asks where wisdom can be found.", "It pictures wisdom as precious and hidden — not reached by mining or bought with treasure.", "Its conclusion points to reverence for God as where true wisdom lies."],
          identify: { q: "What question does the wisdom poem raise?", choices: ["Where can wisdom be found, and what is it worth?", "Which friend is oldest?", "How much livestock Job owned", "Where the next feast will be held"] },
          purpose: { q: "How does the poem picture wisdom?", choices: ["As precious and hidden — unreachable by mining or purchase", "As cheap and easy to find", "As a physical treasure in a cave", "As useless"] },
          significance: { q: "What does this interlude add to the book?", choices: ["It pauses the debate to reframe the whole search as a search for wisdom", "It settles the debate with a verdict", "It repeats the prologue", "It has no connection to the theme"] },
          reveals: "Wisdom imagined as rare, hidden, and beyond human reach.",
          conceals: "How this quiet interlude reframes the loud debate around it.",
          ace: "Articulate the wisdom poem's question; connect it to the debate; extend it to something valuable that cannot simply be bought."
        },
        {
          id: "whirlwind", name: "The Voice from the Whirlwind", image: "images/whirlwind.webp",
          clues: ["God finally answers Job out of a storm — but with questions, not explanations.", "The questions sweep across creation: the earth's foundations, the sea, the constellations, the wild animals, and great creatures.", "Overwhelmed, Job humbles himself; in the epilogue his fortunes are restored twofold."],
          identify: { q: "How does God answer Job from the whirlwind?", choices: ["With a torrent of rhetorical questions about creation that Job cannot answer", "With a written contract", "With a list of Job's sins", "With silence and nothing more"] },
          purpose: { q: "Why answer with questions instead of explanations?", choices: ["The scale and mystery of creation dwarf Job's demand for a simple reason", "To confess a mistake", "To hand Job a map", "To end the poetry and start a song"] },
          significance: { q: "What does the ending suggest?", choices: ["The limits of human understanding — and, in the epilogue, restoration for Job", "That the friends were right all along", "That Job created the world", "That the suffering was imaginary"] },
          reveals: "The whirlwind's rhetorical questions and the theme of creation's mystery.",
          conceals: "How an answer made of questions can still resolve the book.",
          ace: "Articulate what the voice from the whirlwind does; connect its questions to the theme of human limits; extend it to a question that put a problem in a new light for you."
        }
      ]
    },

    ctob: {
      name: "The Case of the Suffering Man",
      intro: "Six locks. Every answer is inferable from the selections and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The problem of why a just God lets the innocent suffer is called ______. (one word)",
          evidence: ["It is the central question the whole book wrestles with.", "It asks how undeserved suffering fits with divine justice.", "The word begins with 'theo…'."],
          hints: ["A term for the problem of the righteous suffering.", "Theo…", "The word is theodicy."],
          answer: "theodicy"
        },
        {
          type: "mc",
          prompt: "The prose prologue and epilogue around the long poetic center make the Book of Job an example of —",
          options: [
            "a frame narrative.",
            "a simple lyric poem.",
            "a news report.",
            "a single continuous prose novel."
          ],
          hints: ["Think about how one kind of storytelling surrounds another.", "Which option describes prose wrapped around poetry?"]
        },
        {
          type: "mc",
          prompt: "The heavenly-wager scene in the prologue mainly creates —",
          options: [
            "dramatic irony, because the reader learns the reason for the test but Job never does.",
            "a happy ending before the story begins.",
            "a description of the friends' homes.",
            "a list of Job's crimes."
          ],
          hints: ["Think about what the reader knows that Job does not.", "This gap shapes how we hear the friends' arguments."]
        },
        {
          type: "digit",
          prompt: "How many friends come to comfort Job and then argue with him? Enter the number.",
          evidence: ["They are named Eliphaz, Bildad, and Zophar.", "They sit in silence with Job for seven days before speaking.", "Count the friends: one, two, three."],
          hints: ["Their names are Eliphaz, Bildad, and Zophar — count them.", "One, two, three.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the parts of the book in the order they appear, earliest first.",
          items: [
            "The prose prologue: the heavenly wager and Job's losses.",
            "The friends' debate over whether Job's suffering is deserved.",
            "The wisdom poem asking where wisdom can be found.",
            "The voice from the whirlwind and the restoration of Job."
          ],
          hints: ["The book opens in prose with the wager and the losses.", "The debate comes before the quiet wisdom interlude.", "The whirlwind speeches and restoration close the book."]
        },
        {
          type: "mc",
          prompt: "When God finally answers Job from the whirlwind, the answer takes the form of —",
          options: [
            "rhetorical questions about creation that Job cannot answer.",
            "a detailed explanation of exactly why Job suffered.",
            "an apology for the friends' behavior.",
            "a quiet song of celebration."
          ],
          hints: ["The voice asks about the earth's foundations, the sea, and the constellations.", "The point is the scale and mystery of creation, not a simple reason."]
        }
      ]
    },

    arcade: {
      name: "Whose View Is It?",
      instruction: "The heart of the Book of Job is a debate about suffering. Sort each paraphrased claim by whose view it represents: is it THE FRIENDS' VIEW (suffering is deserved punishment), or JOB'S VIEW (his suffering is undeserved)? Reasoning earns the points.",
      buckets: [
        { id: "friends", label: "The friends' view (suffering = punishment)", short: "Friends" },
        { id: "job", label: "Job's view (his suffering is undeserved)", short: "Job" }
      ],
      cards: [
        { text: "If Job is suffering, he must have sinned to bring it on himself.", bucket: "friends", why: "The friends' retribution theory: suffering is deserved punishment." },
        { text: "God rewards the righteous and punishes the wicked, so trouble proves guilt.", bucket: "friends", why: "This is the core of the friends' retribution argument." },
        { text: "Job should admit his hidden wrongdoing and repent to end his pain.", bucket: "friends", why: "The friends urge confession because they assume Job is guilty." },
        { text: "The innocent never come to such ruin, so Job's ruin exposes his fault.", bucket: "friends", why: "The friends reason backward from suffering to guilt." },
        { text: "My suffering is undeserved, and I have done nothing to earn it.", bucket: "job", why: "Job insists on his innocence throughout the debate." },
        { text: "I demand a chance to state my case and be answered.", bucket: "job", why: "Job wants a hearing, not the friends' verdict." },
        { text: "Even now, I hope a defender will stand up and vindicate me.", bucket: "job", why: "At his lowest, Job voices hope for a vindicator." },
        { text: "The wicked sometimes prosper, so suffering cannot simply mean guilt.", bucket: "job", why: "Job challenges the friends by pointing to unpunished wrongdoers." }
      ],
      followup: "The friends and Job argue from opposite assumptions, and the book never lets the friends' neat theory win. What does that unresolved debate suggest about the theodicy question — whether suffering can always be explained?"
    },

    analysis: {
      mcq: [
        {
          q: "The Book of Job is best described structurally as —",
          options: [
            "a frame narrative: prose prologue and epilogue around a poetic debate.",
            "a single continuous poem with no prose.",
            "a short news report of an event.",
            "a collection of unrelated proverbs."
          ],
          why: "The plain-prose opening and closing enclose the long poetic center, the definition of a frame narrative."
        },
        {
          q: "The heavenly-wager scene in the prologue matters most because it —",
          options: [
            "creates dramatic irony, since the reader knows the reason for Job's test but Job never does.",
            "proves the friends are right that Job sinned.",
            "ends the story before the debate.",
            "describes the geography of Job's homeland."
          ],
          why: "The reader's private knowledge of the test shapes every later speech in the debate."
        },
        {
          q: "The three friends' central argument is that —",
          options: [
            "suffering is punishment for sin, so Job must have done wrong.",
            "suffering is completely random and meaningless.",
            "Job is a hidden king who deserves a reward.",
            "the losses Job described never actually happened."
          ],
          why: "The friends argue the retribution theory: they reason backward from suffering to guilt."
        },
        {
          q: "When God answers Job out of the whirlwind, the response consists mainly of —",
          options: [
            "rhetorical questions about creation that Job cannot answer.",
            "a step-by-step explanation of why Job suffered.",
            "a list of the friends' good qualities.",
            "a cheerful feast to close the book."
          ],
          why: "The speeches pile up unanswerable questions about creation, stressing the limits of human understanding."
        },
        {
          q: "Because it asks how a blameless man can suffer and whether that suffering can be explained, the book is centrally concerned with —",
          options: [
            "theodicy.",
            "romance.",
            "a rhyme scheme.",
            "a travel itinerary."
          ],
          why: "Theodicy — the problem of undeserved suffering and divine justice — is the book's driving question."
        }
      ],
      short: [
        "Choose one moment from Voices from the Whirlwind. Explain what it shows and what it reveals about the book's meaning.",
        "The prologue gives the reader knowledge that Job and his friends never have. Explain how this dramatic irony changes the way you hear the friends' arguments.",
        "The voice from the whirlwind answers Job with questions rather than explanations. Explain what this choice suggests about the limits of human understanding."
      ],
      paragraph: "Write an evidence-based paragraph. How does the Book of Job use its frame narrative — prose wrapped around a poetic debate — to explore the theodicy question? Make a claim and support it with specific moments from the selections (paraphrased, not quoted).",
      aceReflection: "Articulate in your own words what the book suggests about undeserved suffering. Connect two parts of the book that develop that idea. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Frame, One Question",
      prompt: "The Book of Job wraps a plain prose story around a long poetic debate, and uses that structure to press one hard question: why do the innocent suffer? Choose another text, film, or real situation that either uses a frame structure (one kind of storytelling around another) or wrestles with the same theodicy question. Explain the connection with evidence: what is the frame or the question, how does it work in your example, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the book's frame-narrative technique or its theodicy question to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the Book of Job uses a frame narrative and dramatic irony to explore why the innocent suffer. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying the Book of Job. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] in the Book of Job because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Book of Job: [claim]. Here is the evidence I selected, paraphrased in my own words: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the Book of Job's frame structure or its theodicy question to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the Book of Job for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of selections from the Book of Job (chapters 1–7, 11, 14, 19, 28, and 38–42) as literature — a study of frame narrative, dramatic irony, the debate structure, theodicy, and the rhetorical questions of the whirlwind speeches. The book itself is public domain, but the state names a copyrighted translation (the NIrV); this room reproduces and quotes NO scripture from any edition and paraphrases throughout. Job is presented in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "The Book of Job appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. This room studies the selection scope of chapters 1–7, 11, 14, 19, 28, and 38–42. Confirm placement and scope against your district's current adoption year.",
        "The specified version is the New International Reader's Version (NIrV), which is copyrighted. Because the state names a copyrighted translation, a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical.",
        "Reproduces no copyrighted text; paraphrases throughout; teach as literature, neutral and academic; note mature themes of suffering and loss; follow district policy for religious texts studied as literary works.",
        "Content anchors were fact-checked against a public-domain translation and paraphrased, not reproduced: the prose prologue with the heavenly wager and the accusing figure; Job's loss of livestock, servants, and all his children in one day, then his painful sores; his wife's urging and his refusal to curse God; Job's opening lament cursing the day of his birth; the three friends (Eliphaz, Bildad, Zophar) sitting seven days in silence, then arguing the retribution theory; Job's meditation on human frailty and mortality (the felled tree that can sprout again versus a person who does not) and his flash of hope for a vindicator; the wisdom poem asking where wisdom is found; the whirlwind speeches of rhetorical questions about creation (the earth's foundations, the sea, the constellations, the wild animals, Behemoth and Leviathan); Job's humbling and the epilogue's rebuke of the friends and twofold restoration.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English II ELAR TEKS (19 TAC Ch. 110) strands on author's purpose and craft, literary elements, and analysis — especially structure (frame narrative), point of view and irony, figurative language, and theme. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
