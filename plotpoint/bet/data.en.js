/* PlotPoint — The Bet (Anton Chekhov, 1889).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. Standards are
   good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "bet",
  storageKey: "plotpoint.bet.v1",

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

    "nav.enter": "Enter the Story", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Story",
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
    "enter.readListen": "Read & Listen — free",
    "enter.readListenTitle": "Get the full text and audio",
    "enter.readListenNote": "This story is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Bet",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Garden Lodge",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the story",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Final Night",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. The case is solved — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "The Lawyer's Wisdom or the Banker's Greed?",
    "arcade.default": "Sort each statement by whose view it reflects.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
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
    "extend.title": "What Is a Life Worth?",
    "extend.format": "Format",
    "extend.evidence": "The idea from the story I am building on",
    "extend.transfers": "What transfers to a modern situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My evidence-based argument",
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
    "print.item.relic": "Garden Lodge evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Worth-of-a-life organizer",
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
    "path.complete": "Complete Case", "path.complete.time": "45–75 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "The Bet",
      author: "Anton Chekhov",
      grades: "Grades 8–11",
      genre: "Short story · Philosophical fiction · Classic",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1889)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1889, The Bet is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A philosophical story about a wager, long solitary confinement, and the value of life and money. It debates capital punishment and includes a moment when one man considers murder. No graphic content. Suitable for late middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/55283",
      audio: "https://librivox.org/the-bet-by-anton-chekhov/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Bet — a small garden lodge at night, a candle in the window, and stacks of books beside a sealed letter."
    },
    hook: "At a party, a rich banker and a young lawyer argue: which is crueler, the death penalty or life in prison? The argument becomes a wager — two million rubles if the lawyer can survive fifteen years locked away, utterly alone. He accepts. But over those long years, what he reads changes him so completely that, on the final night, both men face a choice neither expected.",
    goals: [
      "Understand the story's frame: a party argument that becomes a fifteen-year bet.",
      "Analyze how the lawyer is transformed by years of solitary reading.",
      "Trace the contrast between the lawyer's growing wisdom and the banker's growing greed.",
      "Interpret Chekhov's questions about the value of life, freedom, money, and knowledge."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the debate over capital punishment versus life imprisonment.",
        "Discuss: Is any life, however hard, better than death? What would fifteen years alone do to a person?"
      ],
      during: [
        "Use the Garden Lodge to slow down and read the terms, the years, and the ending closely.",
        "Track how the lawyer's reading changes what he values."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh the story's ideas.",
        "Complete the Extend task to argue what a life is really worth."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the lawyer gives up the two million rubles. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the lawyer's years of reading to the choice he makes at the end. Explain how one leads to the other." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's question — is life worth more than money? — to a modern situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "wager", def: "A bet — an agreement in which each side risks something on an outcome.", example: "Two million rubles staked on fifteen years of confinement.", nonexample: "A gift given with no conditions.", context: "The whole story turns on a reckless wager." },
      { term: "solitary confinement", def: "Being kept completely alone, cut off from other people.", example: "The lawyer living for years with no human contact.", nonexample: "Living freely among family and friends.", context: "The lawyer agrees to fifteen years of solitary confinement." },
      { term: "capital punishment", def: "Punishing a crime with death.", example: "The debate that starts the bet.", nonexample: "A fine or community service.", context: "The men argue over capital punishment versus life in prison." },
      { term: "avarice", def: "Extreme greed for wealth.", example: "The banker plotting murder to keep his money.", nonexample: "Sharing freely without attachment to riches.", context: "The banker's avarice grows as the years pass." },
      { term: "renounce", def: "To formally give up a right or possession.", example: "The lawyer giving up the prize on purpose.", nonexample: "Clinging to something at any cost.", context: "The lawyer decides to renounce the two million." },
      { term: "vanity", def: "Emptiness; the quality of being worthless or fleeting.", example: "Riches the lawyer comes to see as hollow.", nonexample: "A lasting, meaningful good.", context: "The lawyer calls worldly things mere vanity." },
      { term: "transformation", def: "A deep and lasting change in a person.", example: "The lawyer's mind and values reshaped by books.", nonexample: "A person who never changes at all.", context: "Fifteen years of reading work a transformation in the lawyer." },
      { term: "contempt", def: "A feeling that something is worthless or beneath respect.", example: "The lawyer's scorn for money and comfort.", nonexample: "Deep admiration and respect.", context: "The lawyer ends in contempt for the very prize he sought." },
      { term: "principle", def: "A basic belief that guides how a person acts.", example: "Choosing to lose the bet to prove a point.", nonexample: "Acting only for personal gain.", context: "The lawyer's final act is one of principle." }
    ],

    relic: {
      name: "The Garden Lodge",
      intro: "Seven instructional reconstructions of moments and objects from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "wager", name: "The Party Argument", image: "images/wager.webp",
          clues: ["The story begins at a party years earlier.", "The guests argue about the death penalty and life imprisonment.", "The young lawyer claims that any life is better than death."],
          identify: { q: "What do the guests argue about?", choices: ["Whether capital punishment or life imprisonment is worse", "Who is the richest", "The best wine", "Politics abroad"] },
          purpose: { q: "What is the argument's role in the story?", choices: ["It sparks the bet that drives the whole plot", "It ends the story", "It is a minor detail", "It is a dream"] },
          significance: { q: "What does the lawyer's claim reveal?", choices: ["He believes life, however hard, is always worth more than death", "He wants to die", "He fears prison", "He cares only for money"] },
          reveals: "The moral question at the heart of the story.",
          conceals: "How completely the lawyer's view will change.",
          ace: "Articulate the debate; connect it to the bet it causes; extend it to your own view on whether any life is better than death."
        },
        {
          id: "two-million", name: "The Two Million", image: "images/two-million.webp",
          clues: ["The banker is sure the lawyer cannot last.", "He stakes an enormous sum on the bet.", "The prize is two million rubles."],
          identify: { q: "What does the banker stake on the bet?", choices: ["Two million rubles", "His house", "A single ruble", "His freedom"] },
          purpose: { q: "What is the money's role in the story?", choices: ["It is the prize that tempts the lawyer and later torments the banker", "It buys the lodge", "It pays the guests", "It has no importance"] },
          significance: { q: "What does the huge stake set up?", choices: ["A test of how much a person will trade freedom, time, and life for money", "That the banker is generous", "That money is unimportant", "That the lawyer is poor"] },
          reveals: "The tempting prize that starts as a symbol of victory.",
          conceals: "That the money will come to mean the opposite of what both men expect.",
          ace: "Articulate the size of the stake; connect the prize to each man's choices; extend it to what people will trade for wealth."
        },
        {
          id: "lodge", name: "The Lodge", image: "images/lodge.webp",
          clues: ["The lawyer must live completely alone to win.", "He is shut up in a small lodge in the banker's garden.", "He may have books, music, and wine — but no human company."],
          identify: { q: "Where does the lawyer spend the bet?", choices: ["Alone in a lodge in the banker's garden", "In a public prison", "In a foreign country", "At sea"] },
          purpose: { q: "What is the lodge's role in the story?", choices: ["It is the sealed world where the lawyer's transformation happens", "It is where the party is held", "It is a bank vault", "It is unimportant"] },
          significance: { q: "Why does it matter that he is truly alone?", choices: ["Cut off from people, he turns entirely to books and thought", "Because he has visitors", "Because he can leave anytime freely", "Because he is comfortable"] },
          reveals: "The strange freedom-in-confinement that reshapes the lawyer.",
          conceals: "How the isolation will change what he wants from life.",
          ace: "Articulate what the lodge is; connect isolation to inner change; extend it to how solitude can transform a person."
        },
        {
          id: "books", name: "The Books", image: "images/books.webp",
          clues: ["Alone for years, the lawyer reads more and more.", "He studies languages, philosophy, history, and the gospels.", "Through books, he travels the whole world in his mind."],
          identify: { q: "How does the lawyer spend most of his confinement?", choices: ["Reading great numbers of books", "Sleeping all day", "Digging an escape tunnel", "Writing letters home"] },
          purpose: { q: "What is the books' role in the story?", choices: ["They are the means of the lawyer's deep transformation", "They are firewood", "They are worthless to him", "They help him escape"] },
          significance: { q: "What do the books do to the lawyer?", choices: ["They reshape his mind and change what he values", "They leave him unchanged", "They make him greedy", "They bore him"] },
          reveals: "The transforming power of knowledge over fifteen years.",
          conceals: "The startling conclusion the lawyer will reach.",
          ace: "Articulate what the lawyer reads; connect reading to his transformation; extend it to how books can change a person's values."
        },
        {
          id: "fifteen-years", name: "The Fifteen Years", image: "images/fifteen-years.webp",
          clues: ["The bet is not for months but for many years.", "The lawyer agrees to fifteen years of solitude.", "Time passes; both men grow old, and the world outside changes."],
          identify: { q: "How long is the lawyer's confinement?", choices: ["Fifteen years", "Fifteen days", "Fifty years", "One year"] },
          purpose: { q: "What is the long span's role in the story?", choices: ["Only years of solitude could work so deep a change", "It makes the plot shorter", "It is a mistake", "It has no effect"] },
          significance: { q: "What does the passage of time reveal?", choices: ["Both men are changed — the lawyer in wisdom, the banker in fortune", "That nothing changes", "That the bet is easy", "That time does not matter"] },
          reveals: "How the years quietly transform both men in opposite directions.",
          conceals: "The reversal waiting at the end of the term.",
          ace: "Articulate the length of the bet; connect time to change; extend it to how long stretches of time can reshape a life."
        },
        {
          id: "bankers-plan", name: "The Banker's Plan", image: "images/bankers-plan.webp",
          clues: ["Over the years, the banker loses much of his fortune.", "On the final night, he cannot afford to pay the two million.", "Desperate, he creeps toward the lodge, planning to kill the lawyer."],
          identify: { q: "What does the ruined banker plan on the final night?", choices: ["To murder the lawyer so he need not pay", "To free the lawyer early", "To double the prize", "To flee the country"] },
          purpose: { q: "What is this plan's role in the story?", choices: ["It shows how greed and fear can drive a man to consider murder", "It rewards the banker", "It is a joke", "It ends the bet fairly"] },
          significance: { q: "What does the banker's plan reveal about him?", choices: ["His values have shrunk to money and self-interest", "He is generous", "He is wise", "He has changed for the better"] },
          reveals: "The banker's moral decline — the opposite of the lawyer's.",
          conceals: "That he will find something in the lodge that stops him.",
          ace: "Articulate the banker's plan; connect greed to his decline; extend it to how fear of loss can corrupt a person."
        },
        {
          id: "letter", name: "The Letter", image: "images/letter.webp",
          clues: ["In the lodge, the banker finds the lawyer asleep and a letter waiting.", "The lawyer writes that his years of reading have taught him to scorn money and worldly life.", "To prove it, he will leave hours before the term ends, losing the bet on purpose."],
          identify: { q: "What does the lawyer's letter say?", choices: ["He despises money and will give up the prize by leaving early", "He demands double the money", "He begs to stay longer", "He confesses a crime"] },
          purpose: { q: "What is the letter's role in the story?", choices: ["It delivers the story's twist and its central idea", "It starts the bet", "It is unimportant", "It frees the banker of guilt forever"] },
          significance: { q: "What does the lawyer's choice reveal?", choices: ["He now values wisdom and freedom over any amount of money", "He never cared about winning", "He wants revenge", "He has lost his mind"] },
          reveals: "Chekhov's point: knowledge can teach a person to despise what once seemed priceless.",
          conceals: "Whether the banker will truly learn from it.",
          ace: "Articulate what the letter says; connect the lawyer's reading to his renunciation; extend it to whether giving up a fortune can be an act of wisdom or of pride."
        }
      ]
    },

    ctob: {
      name: "The Final Night",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "mc",
          prompt: "What argument at the party sparks the bet?",
          options: [
            "Whether capital punishment or life imprisonment is the worse punishment.",
            "Who is the better card player.",
            "Which country is richest.",
            "Whether books are worth reading."
          ],
          hints: ["It is a debate about punishment and the value of life.", "Which option names the death-penalty debate?"]
        },
        {
          type: "digit",
          prompt: "How many years of solitary confinement does the lawyer agree to endure? Enter the number.",
          evidence: ["The banker first suggests a shorter term.", "The bold young lawyer raises it much higher.", "He agrees to fifteen years."],
          hints: ["More than ten.", "Three times five.", "It is 15 years."],
          answer: "15"
        },
        {
          type: "digit",
          prompt: "How many million rubles is the prize? Enter the number.",
          evidence: ["The banker is wealthy and sure he will win.", "He stakes an enormous sum on the bet.", "It is two million."],
          hints: ["A very large, round sum.", "One more than one.", "It is 2 million."],
          answer: "2"
        },
        {
          type: "mc",
          prompt: "How does the lawyer spend most of his years in the lodge?",
          options: [
            "Reading vast numbers of books and transforming his mind.",
            "Sleeping and doing nothing.",
            "Secretly meeting visitors.",
            "Planning his revenge."
          ],
          hints: ["Think about what fills the lodge and changes him.", "Which option is about reading?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of the story in order, earliest first.",
          items: [
            "At a party, the banker and lawyer argue and make the bet.",
            "The lawyer is locked in the lodge and reads for years.",
            "The ruined banker, unable to pay, plots to kill the lawyer.",
            "The lawyer's letter renounces the money, and he leaves before the deadline."
          ],
          hints: ["It begins with the argument and the bet.", "The years of reading come before the final night.", "The lawyer's renunciation is the ending."]
        },
        {
          type: "word",
          prompt: "After fifteen years of reading, the lawyer comes to ______ money and worldly things. (one word)",
          evidence: ["His letter calls riches and pleasures mere vanity.", "He gives up the prize on purpose to prove his point.", "The word means to scorn or look down on, and begins with 'des…'."],
          hints: ["The opposite of to treasure.", "Des…", "The word is despise."],
          answer: "despise"
        }
      ]
    },

    arcade: {
      name: "The Lawyer's Wisdom or the Banker's Greed?",
      instruction: "By the end, the lawyer and the banker have moved in opposite directions. Sort each statement: does it reflect THE LAWYER'S hard-won wisdom, or THE BANKER'S greed and worldliness? Reasoning earns the points.",
      buckets: [
        { id: "lawyer", label: "The lawyer's wisdom", short: "Lawyer" },
        { id: "banker", label: "The banker's greed", short: "Banker" }
      ],
      cards: [
        { text: "Books and knowledge are worth more than gold.", bucket: "lawyer", why: "The lawyer's years of reading taught him this." },
        { text: "Worldly riches are empty and fleeting.", bucket: "lawyer", why: "His letter calls wealth mere vanity." },
        { text: "He gives up two million to prove what he believes.", bucket: "lawyer", why: "He renounces the prize on principle." },
        { text: "Freedom of the mind matters more than comfort.", bucket: "lawyer", why: "In confinement he found a deeper freedom." },
        { text: "The two million must be kept at any cost.", bucket: "banker", why: "The banker's every choice is ruled by the money." },
        { text: "Murder seems better than paying the debt.", bucket: "banker", why: "His greed drives him to plot the lawyer's death." },
        { text: "A person's worth is measured in money.", bucket: "banker", why: "He sees the world only in terms of wealth." },
        { text: "Ruin and loss are the things most to be feared.", bucket: "banker", why: "Fear of losing his fortune governs him." }
      ],
      followup: "The lawyer says he has learned to despise money — yet he spent fifteen years to win it, and gives it up only at the very end. Is his final choice pure wisdom, or is it also its own kind of pride? Defend your view."
    },

    analysis: {
      mcq: [
        {
          q: "The bet grows out of an argument about —",
          options: [
            "whether capital punishment or life imprisonment is the more humane punishment.",
            "who owns the finer house.",
            "the best way to invest money.",
            "which guest is the wittiest."
          ],
          why: "The party debate over the death penalty leads directly to the wager."
        },
        {
          q: "The terms of the bet are that the lawyer will —",
          options: [
            "endure fifteen years of solitary confinement to win two million rubles.",
            "travel the world for a year.",
            "give up reading for a decade.",
            "run the banker's business."
          ],
          why: "The lawyer stakes fifteen years of his freedom against the banker's two million."
        },
        {
          q: "During his years in the lodge, the lawyer —",
          options: [
            "reads enormously and is deeply transformed.",
            "gives up and asks to leave.",
            "grows rich through investments.",
            "forgets how to read."
          ],
          why: "Books reshape his mind and his values over the fifteen years."
        },
        {
          q: "On the final night, the banker —",
          options: [
            "plots to murder the lawyer because he can no longer afford to pay.",
            "happily prepares to hand over the money.",
            "sets the lawyer free early as a gift.",
            "flees abroad with the prize."
          ],
          why: "Ruined by his own losses, the banker's greed drives him to consider murder."
        },
        {
          q: "The lawyer's letter reveals that he —",
          options: [
            "now despises money and worldly life, and leaves before the deadline to lose on purpose.",
            "demands the money at once.",
            "wishes to stay another fifteen years.",
            "regrets ever taking the bet."
          ],
          why: "His transformation leads him to renounce the prize as worthless."
        }
      ],
      short: [
        "Choose one artifact from the Garden Lodge. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the lawyer and the banker change in opposite directions over the fifteen years. Use specific details.",
        "The lawyer gives up two million rubles. Do you think his choice is wise, foolish, or proud? Explain with evidence."
      ],
      paragraph: "Write an evidence-based paragraph. What is Chekhov saying about the value of money, life, and knowledge in The Bet? Make a claim and support it with specific details about the lawyer's transformation and the banker's decline.",
      aceReflection: "Articulate the story's central question about what a life is worth. Connect the lawyer's reading to his final choice. Extend the question to a modern situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "What Is a Life Worth?",
      prompt: "The Bet weighs money against life, freedom, and knowledge. Choose a modern situation that raises the same question — for example, a choice between wealth and time, a debate over how society values a life, or a person who gives up money for a principle. Build an evidence-based argument connecting it to the story: what does each side value, and what does the comparison reveal?",
      format: "A short evidence-based argument connecting the story's question about the worth of a life to a modern situation, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the lawyer gives up the two million rubles in The Bet. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Bet. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think the lawyer's reading connects to his final choice in The Bet because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Bet: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's question about the worth of a life to a modern situation: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Bet for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Chekhov's The Bet as a philosophical story about the value of life, freedom, money, and knowledge: the party debate over capital punishment, the fifteen-year wager, the lawyer's transformation through reading, the banker's moral decline, and the renunciation at the end. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1889) is public domain. The linked Project Gutenberg edition is a collection titled 'The Bet, and other stories'; the linked LibriVox recording is of the story — confirm before assigning.",
        "Content: a debate about capital punishment and a moment when the banker considers murder; philosophical and mature in theme but not graphic. Suitable for late middle and high school; preview and follow local policy.",
        "Details here were checked against the story (the banker and the young lawyer; the party argument over capital punishment versus life imprisonment; the wager of two million rubles for fifteen years of solitary confinement in a garden lodge; the lawyer's vast reading and transformation; the ruined banker's plan to murder the lawyer on the final night; the lawyer's letter renouncing the money and his leaving before the term ends to lose on purpose). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–11 ELAR TEKS (19 TAC Ch. 110) strands on theme, character development, author's purpose, and analysis of a philosophical text, with cross-curricular ties to ethics and debate. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.2", "W.8.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
