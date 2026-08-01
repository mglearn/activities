/* PlotPoint — The Beatitudes, Matthew 5:1–12 (King James Version, 1611).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The KJV is public domain in the United States, so this room may
   reference the state-specified version directly. The Beatitudes are studied here as
   LITERATURE — imagery, parallelism, paradox, and poetic structure — in a neutral,
   academic, non-devotional frame consistent with the Texas required literary-works
   list (19 TAC §110.30, Grade 7). The room paraphrases, quotes only brief public-domain
   phrases where a close reading needs them, and reproduces no copyrighted edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "beatitudes",
  storageKey: "plotpoint.beatitudes.v1",

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
    "enter.readListenNote": "The King James Version is in the public domain. Use your class's edition or any KJV text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Beatitudes",
    "vocab.intro": "{n} terms that unlock the passage. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Mountainside Sermon",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the passage",
    "relic.q.significance": "What it reveals about the passage's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Eight Blessings",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the passage closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Condition or Promise?",
    "arcade.default": "Sort each detail by its role in the beatitude form.",
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
    "extend.evidence": "The image from the passage I am building on",
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
    "print.item.relic": "Mountainside Sermon evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Beatitude-form organizer",
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
      title: "The Beatitudes — Matthew 5:1–12",
      author: "King James Version",
      grades: "Grade 7",
      genre: "Sacred text · Gospel · King James Version",
      time: "45–75 minutes",
      spoiler: "None — the whole passage is discussed",
      rights: "Public domain (King James Version, 1611)",
      textAccess: "The Beatitudes are twelve short verses (Matthew 5:1–12). The King James Version is public domain — use your class's Bible or any KJV edition.",
      copyright: "The King James Version (1611) is in the public domain in the United States, so this room may reference the state-specified version directly. The Beatitudes are studied here as literature — their parallelism, imagery, and structure. The room paraphrases, quotes only brief public-domain phrases (such as \"Blessed are the meek\") where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as literature — parallelism, imagery, paradox, and poetic structure — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.30, Grade 7). Because the specified version (KJV) is public domain, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the Beatitudes — a teacher seated on a grassy mountainside above a gathered crowd at dawn, addressing listeners along the gentle slope beneath an open sky."
    },
    hook: "Twelve short verses that open the most famous sermon in the world. A teacher climbs a mountainside, sits down, and begins each line the same way: \"Blessed are…\" — then names, again and again, the people the world usually overlooks. The poor. The mourning. The meek. The persecuted. Read it as literature, and watch a single repeated phrase turn ordinary expectations upside down, one blessing at a time.",
    goals: [
      "Understand the Beatitudes as a series of eight blessings built on a repeated form: a condition paired with a promised reward.",
      "Analyze the passage's use of anaphora — the repeated \"Blessed are…\" opening — and Hebrew-style parallelism.",
      "Trace the paradox at the heart of the passage: the humble, mourning, and persecuted are declared \"blessed,\" reversing worldly expectation.",
      "Interpret how the cumulative structure builds toward a climactic, expanded blessing on the persecuted — and why this passage has shaped English literature and everyday language."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of anaphora — a repeated opening phrase.",
        "Discuss: what does it usually mean to be \"blessed\" or fortunate — and who do we normally think of?"
      ],
      during: [
        "Use the Mountainside Sermon to slow down and read the passage blessing by blessing.",
        "Track the pattern: each line names a group, then names the reward it is promised."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the beatitude form and the passage's structure.",
        "Complete the Extend task to transfer the beatitude form or its reversal technique to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what a \"beatitude\" is and how the passage is built. Include one blessing from the passage that helped you understand the form." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two blessings — for example the meek inheriting the earth and the persecuted receiving the kingdom of heaven. Explain how pairing an unexpected group with a great reward shapes the passage's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the passage's technique — a repeated form that reverses expectation — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "beatitude", def: "A short declaration of blessing; a compact poetic form pairing a group with a promised reward.", example: "\"Blessed are the meek: for they shall inherit the earth.\"", nonexample: "A weather forecast.", context: "Each beatitude names who is blessed and what they are promised." },
      { term: "anaphora", def: "The deliberate repetition of the same word or phrase at the start of successive lines.", example: "Every blessing beginning with \"Blessed are…\"", nonexample: "A paragraph where every sentence starts differently.", context: "The passage's anaphora — \"Blessed are…\" — links the blessings together." },
      { term: "parallelism", def: "A poetic device of paired, balanced lines in which the parts echo or complete each other.", example: "A condition (\"the merciful\") paired with a promise (\"they shall obtain mercy\").", nonexample: "A single line with no matching partner.", context: "Hebrew-style parallelism gives each beatitude its two-part shape." },
      { term: "paradox", def: "A statement that seems to contradict common sense yet reveals a deeper truth.", example: "Calling the mourning and the persecuted \"blessed.\"", nonexample: "A plainly obvious statement everyone agrees with.", context: "The passage's paradox reverses who we expect to be called fortunate." },
      { term: "blessing", def: "As a literary form here, a spoken declaration that a person or group is favored or fortunate.", example: "\"Blessed are the peacemakers.\"", nonexample: "A curse or a warning.", context: "The passage is a chain of blessings, each in the same form." },
      { term: "rhetoric", def: "The art of using language deliberately to persuade or move an audience.", example: "Repeating one phrase to build rhythm and force.", nonexample: "Speaking with no design or effect intended.", context: "The passage's rhetoric relies on repetition and reversal." },
      { term: "theme", def: "A central idea or message a text explores.", example: "The reversal of worldly expectation about who is fortunate.", nonexample: "A single unimportant detail.", context: "One theme of the passage is that the overlooked are declared blessed." },
      { term: "meek", def: "Gentle, humble, and patient rather than proud or forceful.", example: "A quiet person who does not push to the front.", nonexample: "A boastful, domineering ruler.", context: "The passage promises that the meek shall inherit the earth." },
      { term: "righteousness", def: "The quality of being morally right or just.", example: "Hungering and thirsting to do what is right.", nonexample: "Deliberate wrongdoing.", context: "Those who hunger and thirst after righteousness are promised they shall be filled." }
    ],

    relic: {
      name: "The Mountainside Sermon",
      intro: "Seven instructional reconstructions of the images and moves in the passage — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the passage, and what it reveals.",
      artifacts: [
        {
          id: "mountainside", name: "The Mountainside and the Crowd", image: "images/mountainside.webp",
          clues: ["The passage opens by setting a scene: a teacher sees the crowds and goes up a mountainside.", "He sits down, and his disciples come to him.", "Only then does the teaching — the blessings — begin."],
          identify: { q: "What does this opening image establish?", choices: ["A setting: a teacher on a mountainside, seated, about to address a crowd", "A battlefield before a fight", "A courtroom trial", "A marketplace of traders"] },
          purpose: { q: "What is the role of this scene-setting?", choices: ["It frames the blessings as a public sermon, giving them a speaker and an audience", "It has no connection to the blessings", "It is the climax of the passage", "It lists the speaker's possessions"] },
          significance: { q: "Why note that the teacher sits down before speaking?", choices: ["Sitting was the traditional posture of a teacher — it signals formal instruction is beginning", "It shows he is tired", "It shows the crowd has left", "It ends the passage"] },
          reveals: "The passage is a framed sermon, not a loose collection of sayings.",
          conceals: "How the calm setting prepares for the surprising blessings to come.",
          ace: "Articulate what the mountainside scene sets up; connect it to why a speech needs a setting; extend it to how a frame shapes how we hear what follows."
        },
        {
          id: "formula", name: "The \"Blessed are…\" Formula", image: "images/formula.webp",
          clues: ["Nearly every line of the passage begins with the same two words.", "The repeated opening links the blessings into one chain.", "This repetition of an opening phrase is called anaphora."],
          identify: { q: "What repeated feature opens each blessing?", choices: ["The phrase \"Blessed are…\", an example of anaphora", "A different question each time", "A number counting the verses", "The speaker's name"] },
          purpose: { q: "What does repeating the opening phrase do?", choices: ["It builds rhythm and links the separate blessings into one unified passage", "It confuses the listener", "It hides the meaning", "It has no effect"] },
          significance: { q: "How does anaphora shape the passage as literature?", choices: ["The steady repetition makes the passage memorable and gives it a chant-like force", "It makes the passage harder to remember", "It removes all structure", "It signals the passage is prose, not poetry"] },
          reveals: "The single formula that gives the passage its shape and rhythm.",
          conceals: "How much of the passage's power comes from repetition alone.",
          ace: "Articulate the \"Blessed are…\" pattern; connect it to the term anaphora; extend it to another text that repeats an opening phrase."
        },
        {
          id: "poor", name: "The Poor in Spirit", image: "images/poor.webp",
          clues: ["The very first blessing names \"the poor in spirit.\"", "Their promised reward is \"the kingdom of heaven.\"", "The passage begins not with the powerful but with the humble."],
          identify: { q: "Who receives the first blessing?", choices: ["The poor in spirit — the humble", "The rich and powerful", "The famous", "The strongest warriors"] },
          purpose: { q: "Why open the series with this group?", choices: ["It sets the pattern immediately: the humble, not the mighty, are called blessed", "It describes the speaker's wealth", "It warns the crowd away", "It has no bearing on the rest"] },
          significance: { q: "What does starting here reveal about the passage?", choices: ["From the first line the passage reverses who is normally counted fortunate", "The passage praises pride", "The passage is about money only", "The order of blessings is random"] },
          reveals: "The reversal begins in the very first blessing.",
          conceals: "How \"poor in spirit\" points to humility rather than only material poverty.",
          ace: "Articulate what \"poor in spirit\" suggests; connect it to the reward of the kingdom of heaven; extend it to why a text might honor humility first."
        },
        {
          id: "meek", name: "Those Who Mourn / the Meek", image: "images/meek.webp",
          clues: ["Two neighboring blessings name those who mourn and the meek.", "Those who mourn are promised comfort; the meek are promised the earth.", "Both groups are unexpected recipients of such rewards."],
          identify: { q: "What do these two blessings promise?", choices: ["Comfort for those who mourn, and the earth for the meek", "Wealth for the powerful, and fame for the loud", "Silence for the crowd, and rest for the speaker", "Nothing at all"] },
          purpose: { q: "What role do these blessings play in the series?", choices: ["They deepen the reversal — sorrow and gentleness are met with great reward", "They change the subject away from blessing", "They end the passage", "They describe the setting"] },
          significance: { q: "What is surprising about the meek inheriting the earth?", choices: ["Worldly power usually goes to the forceful, so promising the earth to the gentle overturns expectation", "The meek already rule the earth", "Inheriting the earth is a small reward", "The line is unrelated to the others"] },
          reveals: "The paradox at work: sorrow and gentleness paired with comfort and inheritance.",
          conceals: "How each promise is tailored to the condition it answers.",
          ace: "Articulate the two conditions and their rewards; connect them to the idea of reversal; extend it to a modern situation where the gentle are underestimated."
        },
        {
          id: "hunger", name: "Hunger and Thirst for Righteousness", image: "images/hunger.webp",
          clues: ["One blessing names those who \"hunger and thirst after righteousness.\"", "Hunger and thirst are bodily images used for a moral longing.", "The promise is that \"they shall be filled.\""],
          identify: { q: "What does this blessing describe?", choices: ["A deep longing for righteousness, pictured as hunger and thirst", "An actual meal being served", "A drought in the land", "A merchant selling grain"] },
          purpose: { q: "Why use hunger and thirst as the image?", choices: ["Bodily craving makes an abstract longing for justice feel urgent and concrete", "To describe the crowd's picnic", "To warn of famine", "To count the days of fasting"] },
          significance: { q: "What does \"they shall be filled\" complete?", choices: ["The image: those who crave righteousness are promised satisfaction", "A recipe", "The end of the sermon", "A list of the speaker's foods"] },
          reveals: "Abstract longing carried by a concrete, physical image.",
          conceals: "How imagery lets the passage make a moral idea feel like a bodily need.",
          ace: "Articulate the hunger-and-thirst image; connect it to the abstract idea of longing for justice; extend it to how imagery makes an idea feel physical."
        },
        {
          id: "relational", name: "The Merciful, Pure in Heart, and Peacemakers", image: "images/relational.webp",
          clues: ["Three blessings in a row name the merciful, the pure in heart, and the peacemakers.", "The merciful obtain mercy; the pure in heart shall see God; the peacemakers shall be called children of God.", "These blessings focus on how one treats others."],
          identify: { q: "What do these three blessings share?", choices: ["They name relational qualities — mercy, purity of heart, and peacemaking", "They all name kinds of wealth", "They all describe the weather", "They all name enemies"] },
          purpose: { q: "How do their promises fit their conditions?", choices: ["Each reward mirrors its condition — the merciful obtain mercy, peacemakers are called children of God", "The promises are chosen at random", "The promises contradict the conditions", "There are no promises here"] },
          significance: { q: "What does this mirrored pairing show about the form?", choices: ["The beatitude form deliberately matches condition to reward through parallelism", "The form has no pattern", "The rewards are all identical", "The conditions are unimportant"] },
          reveals: "How tightly each promise is matched to its condition.",
          conceals: "The parallelism that links every condition to a fitting reward.",
          ace: "Articulate one condition-and-reward pair; connect it to how the promise mirrors the condition; extend it to why a matched pairing feels satisfying."
        },
        {
          id: "persecuted", name: "The Persecuted", image: "images/persecuted.webp",
          clues: ["The eighth blessing names those \"persecuted for righteousness' sake.\"", "Then an expanded, ninth blessing addresses those reviled for their faith.", "It closes with \"rejoice, and be exceeding glad, for great is your reward.\""],
          identify: { q: "Who receives the climactic blessing?", choices: ["Those persecuted for righteousness' sake", "The wealthy landowners", "The victorious army", "The silent crowd"] },
          purpose: { q: "Why place this blessing last and expand it?", choices: ["It is the climax — the hardest condition met with the greatest call to rejoice", "It is an afterthought with no weight", "It repeats the first blessing exactly", "It sets the opening scene"] },
          significance: { q: "What does ending on the persecuted reveal about the passage?", choices: ["The reversal reaches its peak: those who suffer for what is right are told their reward is great", "The passage gives up on the reversal at the end", "Persecution is treated as a small matter", "The ending abandons the beatitude form"] },
          reveals: "The cumulative build to a climactic, expanded blessing.",
          conceals: "How the final blessing widens from a single line into direct address.",
          ace: "Articulate the climactic blessing; connect the hardest condition to the greatest reward; extend it to why a series often saves its strongest point for last."
        }
      ]
    },

    ctob: {
      name: "The Eight Blessings",
      intro: "Six locks. Every answer is inferable from the passage and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Nearly every line of the passage begins with the same word: \"______ are the poor in spirit…\" (one word)",
          evidence: ["The repeated opening word declares a group fortunate or favored.", "It is the very first word of each blessing.", "The word begins with 'bless…'."],
          hints: ["It means 'fortunate' or 'favored.'", "Bless…", "The word is blessed."],
          answer: "blessed"
        },
        {
          type: "mc",
          prompt: "The repeated \"Blessed are…\" opening of each line is an example of —",
          options: [
            "anaphora — the repetition of an opening phrase.",
            "rhyme at the end of each line.",
            "a simile using 'like' or 'as.'",
            "plain prose with no pattern."
          ],
          hints: ["Think about what is repeated and where it sits in the line.", "The device is named for repeating a beginning phrase."]
        },
        {
          type: "mc",
          prompt: "Declaring the mourning, the meek, and the persecuted \"blessed\" mainly works in the passage to —",
          options: [
            "reverse the usual expectation of who is fortunate.",
            "list the speaker's personal possessions.",
            "describe the weather on the mountainside.",
            "warn the crowd to leave."
          ],
          hints: ["The world does not usually call these groups fortunate.", "Think about the theme of paradox and reversal."]
        },
        {
          type: "digit",
          prompt: "How many core blessings does this passage traditionally contain? It is often called \"The ______ Beatitudes.\" Enter the number.",
          evidence: ["Count the blessings from the poor in spirit through the persecuted for righteousness' sake.", "The passage is traditionally titled with this number of blessings.", "It is the number after seven and before nine."],
          hints: ["Count each \"Blessed are…\" from the poor in spirit to the persecuted.", "Seven plus one.", "The number is 8."],
          answer: "8"
        },
        {
          type: "sequence",
          prompt: "Put these blessings in the order they appear in the passage, earliest first.",
          items: [
            "Blessed are the poor in spirit.",
            "Blessed are the meek.",
            "Blessed are the merciful.",
            "Blessed are they which are persecuted for righteousness' sake."
          ],
          hints: ["The passage opens with the poor in spirit.", "The meek come early, before the merciful.", "The persecuted come last, at the climax."]
        },
        {
          type: "mc",
          prompt: "Each blessing pairs a group with a promised reward. This two-part, balanced structure is best described as —",
          options: [
            "parallelism — a condition matched to a fitting promise.",
            "a rhyme scheme.",
            "a pun on a single word.",
            "a random list with no pattern."
          ],
          hints: ["Each line has two matching halves: who is blessed, and what they receive.", "The merciful obtain mercy; the reward mirrors the condition."]
        }
      ]
    },

    arcade: {
      name: "Condition or Promise?",
      instruction: "Every beatitude pairs a condition (the group being blessed) with a promise (the reward they receive). Sort each detail by its role in the form: is it the CONDITION — who is blessed, or the PROMISE — the reward? Reasoning earns the points.",
      buckets: [
        { id: "condition", label: "The condition (who is blessed)", short: "Condition" },
        { id: "promise", label: "The promise (the reward)", short: "Promise" }
      ],
      cards: [
        { text: "The poor in spirit.", bucket: "condition", why: "This names a group being blessed — the condition half of the first beatitude." },
        { text: "Those who mourn.", bucket: "condition", why: "A group being blessed, not a reward — a condition." },
        { text: "The meek.", bucket: "condition", why: "The gentle and humble are named as the blessed group — a condition." },
        { text: "The peacemakers.", bucket: "condition", why: "This names who is blessed, so it is the condition." },
        { text: "They shall inherit the earth.", bucket: "promise", why: "This is the reward promised to the meek — a promise." },
        { text: "They shall be comforted.", bucket: "promise", why: "The reward given to those who mourn — a promise." },
        { text: "They shall obtain mercy.", bucket: "promise", why: "The reward promised to the merciful — a promise." },
        { text: "Theirs is the kingdom of heaven.", bucket: "promise", why: "The reward promised to the poor in spirit and the persecuted — a promise." }
      ],
      followup: "The passage matches each condition to a fitting promise — the merciful obtain mercy, the peacemakers are called children of God. What does that careful pairing suggest about how the beatitude form is built?"
    },

    analysis: {
      mcq: [
        {
          q: "The repeated \"Blessed are…\" that opens each line of the passage is an example of —",
          options: [
            "anaphora.",
            "a simile.",
            "a rhyme scheme.",
            "a metaphor."
          ],
          why: "Anaphora is the repetition of the same opening phrase across successive lines, which is exactly what the passage does."
        },
        {
          q: "Declaring the mourning, the meek, and the persecuted \"blessed\" mainly creates —",
          options: [
            "a paradox that reverses worldly expectation about who is fortunate.",
            "a factual weather report.",
            "a list of the speaker's belongings.",
            "a rhyming refrain."
          ],
          why: "The world seldom calls these groups fortunate, so declaring them blessed reverses expectation — a paradox."
        },
        {
          q: "Each beatitude pairs a group with a matching reward (for example, the merciful obtain mercy). This two-part, balanced shape is —",
          options: [
            "parallelism.",
            "onomatopoeia.",
            "a pun.",
            "free verse with no structure."
          ],
          why: "Parallelism pairs balanced lines so that condition and promise echo and complete each other."
        },
        {
          q: "The passage builds toward a final, expanded blessing on —",
          options: [
            "those persecuted for righteousness' sake.",
            "the wealthy and powerful.",
            "the poor in spirit again.",
            "the crowd that gathered."
          ],
          why: "The series climaxes on the persecuted, expanded into direct address: \"rejoice, and be exceeding glad.\""
        },
        {
          q: "\"Hunger and thirst after righteousness\" uses bodily images to express —",
          options: [
            "a deep longing for what is morally right.",
            "an actual need for food and water.",
            "a warning about famine.",
            "a description of a feast."
          ],
          why: "Physical craving becomes an image for an intense moral longing, which the promise \"they shall be filled\" completes."
        }
      ],
      short: [
        "Choose one blessing from the Mountainside Sermon. Explain its condition and its promise, and what the pairing reveals about the passage's meaning.",
        "The passage calls the mourning, the meek, and the persecuted \"blessed.\" Explain what this reversal of expectation suggests about the theme of the passage.",
        "Explain how the repeated \"Blessed are…\" opening (anaphora) shapes the rhythm and feeling of the passage as you read it."
      ],
      paragraph: "Write an evidence-based paragraph. How do the Beatitudes use a repeated form — a condition paired with a promise — to reverse ordinary expectations about who is fortunate? Make a claim and support it with specific blessings from the passage.",
      aceReflection: "Articulate what the passage suggests about who is \"blessed\" in your own words. Connect two blessings that develop that idea. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "The Beatitudes carry a big idea — a reversal of who counts as fortunate — through one repeated form: \"Blessed are… for they shall…\" Choose another poem, song, speech, or story that uses a repeated form or reverses expectation in a similar way. Explain the connection with evidence: what is the repeated form or reversal, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the passage's repeated-form or reversal technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the Beatitudes use a repeated form (\"Blessed are… for they shall…\") to reverse expectations about who is fortunate. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying the Beatitudes. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [blessing one] connects to [blessing two] in the Beatitudes because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the passage." },
      { title: "Evidence prompt", text: "Here is my claim about the Beatitudes: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the Beatitudes' repeated-form or reversal technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the Beatitudes for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of the Beatitudes, Matthew 5:1–12 (King James Version), as the opening of the Sermon on the Mount — a study of anaphora, parallelism, paradox, and cumulative structure. The KJV is public domain, so the state-specified version can be referenced directly and this room reproduces no copyrighted edition. The passage is presented as literature in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "The Beatitudes appear on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The specified version is the King James Version, which is public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature — present imagery, structure, and rhetoric academically and neutrally, without devotional instruction, and follow district policy for religious texts studied as literary works.",
        "Details here were checked against the KJV text (the mountainside setting and the seated teacher; the anaphoric \"Blessed are…\" opening; the eight core blessings — poor in spirit/kingdom of heaven; those who mourn/comforted; the meek/inherit the earth; hunger and thirst after righteousness/filled; the merciful/obtain mercy; the pure in heart/see God; the peacemakers/called children of God; the persecuted for righteousness' sake/kingdom of heaven; and the expanded ninth blessing on those reviled and persecuted, closing with \"rejoice, and be exceeding glad, for great is your reward\"). Longer stretches are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 7 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially parallelism, anaphora, and paradox. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.4", "RL.7.5", "W.7.1", "SL.7.1", "L.7.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
