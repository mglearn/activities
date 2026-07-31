/* PlotPoint — Confessions, Selections (Augustine of Hippo).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; famous ideas (the restless heart,
   "take up and read," the puzzle of time) are paraphrased, not quoted from any
   one translation. Details are widely established. Standards are real, applicable
   Common Core codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs
   review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "confessions",
  storageKey: "plotpoint.confessions.v1",

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
    "enter.readListenNote": "This work is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Confessions",
    "vocab.intro": "{n} terms that unlock the work. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Garden of Memory",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the Confessions",
    "relic.q.significance": "The idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Take Up and Read",
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
    "arcade.title": "Ordered Loves",
    "arcade.default": "Sort each thing by whether it can finally satisfy the restless heart.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary & Philosophical Analysis",
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
    "extend.title": "Examine Your Restlessness",
    "extend.format": "Format",
    "extend.evidence": "The idea from Augustine I am building on",
    "extend.transfers": "What transfers to life today",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My reflection",
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
    "print.item.relic": "Confessions evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Reflection organizer",
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
    "path.complete": "Complete Case", "path.complete.time": "60–90 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "Confessions (Selections)",
      author: "Augustine",
      grades: "Grades 11–12",
      genre: "Philosophy · Spiritual autobiography",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Latin original and classic translations are public domain",
      textAccess: "Students need a public-domain translation of selections from the Confessions (for example, Pusey's). This room does not reproduce the text.",
      copyright: "The Latin original and older translations (such as Pusey's) are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "The Confessions is a foundational work of Western literature and philosophy that is also deeply religious (Christian). Teach it as literature and philosophy — its ideas, structure, and craft — not as devotion, and follow local policy on religious texts.",
      gutenberg: "https://www.gutenberg.org/ebooks/3296",
      audio: "https://librivox.org/the-confessions-by-saint-augustine-of-hippo/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Augustine's Confessions — a quiet garden with an open book at dusk."
    },
    hook: "Sixteen centuries ago, a restless young man chased success, pleasure, and answers — and found none of them enough. Augustine's Confessions turns his own life into one long question: what is the human heart really searching for?",
    goals: [
      "Understand the Confessions as an early spiritual autobiography written as a prayer to God.",
      "Trace Augustine's search through ambition, pleasure, and ideas toward his conversion.",
      "Analyze his central claim that the human heart is restless until it finds its true rest.",
      "Reflect on and transfer Augustine's questions about desire, memory, and time to life today."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a spiritual autobiography.",
        "Discuss: What do people chase for happiness — and why is it often not enough?"
      ],
      during: [
        "Use the Garden of Memory to examine one moment or idea at a time.",
        "Track what Augustine wants at each stage, and whether it satisfies him."
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull the ideas together.",
        "Complete the Extend task to examine restlessness in your own life."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Augustine means by the 'restless heart.' Include one detail from the Confessions that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments from the Confessions (for example, the stolen pears and the garden conversion). Explain how together they show Augustine's view of desire." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply one of Augustine's questions — about desire, memory, or time — to life today. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "confession", def: "In this work, both an admission of one's faults and an outpouring of praise to God.", example: "Admitting a wrong while giving thanks.", nonexample: "A boast about one's successes.", context: "The title 'Confessions' carries both meanings at once." },
      { term: "conversion", def: "A deep turning point that changes a person's beliefs and way of life.", example: "Turning from one way of living to another.", nonexample: "Staying exactly the same.", context: "The Confessions builds toward Augustine's conversion." },
      { term: "grace", def: "In Christian thought, undeserved help or favor given by God.", example: "Receiving help one did not earn.", nonexample: "A prize won by effort alone.", context: "Augustine credits grace, not his own strength, for his change." },
      { term: "restlessness", def: "A lack of peace; a searching that cannot settle or feel satisfied.", example: "Chasing one thing after another and still feeling empty.", nonexample: "Deep, settled contentment.", context: "Restlessness is the engine of Augustine's whole search." },
      { term: "providence", def: "The belief that a higher purpose guides the events of a life.", example: "Seeing a hidden order behind one's path.", nonexample: "Believing everything is pure random chance.", context: "Looking back, Augustine reads his life as guided by providence." },
      { term: "memory", def: "The mind's vast power to store and recall experience, which Augustine explores at length.", example: "The 'storehouse' of everything you have known.", nonexample: "A single passing thought.", context: "Augustine calls memory a vast palace within the mind." },
      { term: "eternity", def: "Existence outside of time, without beginning or end.", example: "A timeless 'now' that does not pass.", nonexample: "A single hour that ticks away.", context: "Augustine contrasts God's eternity with our passing time." },
      { term: "temporal", def: "Belonging to time; passing and changeable.", example: "Fame or pleasure that fades.", nonexample: "Something timeless and unchanging.", context: "Temporal goods, Augustine says, cannot finally satisfy." },
      { term: "will", def: "The power to choose; Augustine examines how a divided will pulls us two ways.", example: "Wanting to change yet hesitating to.", nonexample: "A single desire with no inner conflict.", context: "Augustine describes his will torn between old habits and new hope." },
      { term: "humility", def: "A modest, honest view of oneself, free of pride.", example: "Admitting your faults truthfully.", nonexample: "Boasting to seem better than others.", context: "The Confessions models humility by exposing the author's own faults." }
    ],

    relic: {
      name: "The Garden of Memory",
      intro: "Seven instructional reconstructions of moments and images from Augustine's Confessions — teaching recreations, not copyrighted illustrations. Investigate what each is, its role in the work, and the idea it stands for.",
      artifacts: [
        {
          id: "pears", name: "The Stolen Pears", image: "images/pears.webp",
          clues: ["As a youth, Augustine and his friends steal fruit from a neighbor's pear tree.", "They are not hungry, and the pears are not even very good.", "He steals simply for the thrill of doing what is forbidden."],
          identify: { q: "What is this?", choices: ["The pears Augustine steals as a youth", "A gift from his mother", "Fruit from a monastery garden", "A meal for the poor"] },
          purpose: { q: "Why does Augustine dwell on this small theft?", choices: ["To examine why people sometimes do wrong for its own sake, not for gain", "To boast about his cleverness", "To describe farming", "To explain a recipe"] },
          significance: { q: "What idea does it explore?", choices: ["The strange pull of wrongdoing even when there is nothing to gain from it", "That pears are dangerous", "That theft always brings riches", "That youth is carefree and simple"] },
          reveals: "Augustine's honest search into the roots of his own wrongdoing.",
          conceals: "Whether he ever fully understands why he did it — the question stays open.",
          ace: "Articulate why the pear theft troubles Augustine; connect it to doing wrong 'for its own sake'; extend it to a small wrong someone might do just for the thrill."
        },
        {
          id: "heart", name: "The Restless Heart", image: "images/heart.webp",
          clues: ["Near the very start, Augustine names the theme of the whole book.", "He says the human heart cannot find peace in passing things.", "It stays restless, he writes, until it rests in God."],
          identify: { q: "What does this restless heart represent?", choices: ["Augustine's central idea: the heart is restless until it finds its true rest", "A medical condition", "A love letter", "A compass for travel"] },
          purpose: { q: "What is its role in the work?", choices: ["To set up the question that drives the entire autobiography", "To describe the weather", "To list his possessions", "To end the story"] },
          significance: { q: "What does it claim about human desire?", choices: ["That no passing, earthly thing can finally satisfy the deepest human longing", "That people are easily satisfied", "That desire does not matter", "That rest is impossible"] },
          reveals: "The lens through which Augustine reads his whole life.",
          conceals: "Whether every reader will agree about what the heart truly seeks.",
          ace: "Articulate the restless-heart idea; connect it to Augustine's search; extend it to something people chase today that leaves them restless."
        },
        {
          id: "book", name: "The Opened Book", image: "images/book.webp",
          clues: ["At the height of his crisis, Augustine sits weeping in a garden.", "He hears a child's voice chanting, again and again, 'take up and read.'", "He opens a book of Scripture and reads the passage his eyes fall on."],
          identify: { q: "What is this book?", choices: ["The Scripture Augustine opens and reads in the garden", "His own diary", "A book of Roman law", "A collection of poems"] },
          purpose: { q: "What is its role in the work?", choices: ["Reading it becomes the turning point of his conversion", "It teaches him to farm", "It records his debts", "It maps his travels"] },
          significance: { q: "What does the 'take up and read' moment mark?", choices: ["The decisive turn from his old life to a new one", "A lesson in reading speed", "The start of his career", "A childhood memory"] },
          reveals: "How a single moment can gather a long search into a decision.",
          conceals: "The years of struggle that made him ready for that moment.",
          ace: "Articulate what happens in the garden; connect the reading to his conversion; extend it to a moment that crystallized a big decision for someone."
        },
        {
          id: "lamp", name: "The Mother's Lamp", image: "images/lamp.webp",
          clues: ["Augustine's mother, Monica, is a devout woman who worries for her son.", "For years she hopes and prays that he will change his life.", "Her steady faith shadows his whole story."],
          identify: { q: "Whose faith does this lamp represent?", choices: ["Monica's — Augustine's devoted mother", "A stranger's", "The emperor's", "A teacher's"] },
          purpose: { q: "What is her role in the Confessions?", choices: ["Her patient hope and faith accompany Augustine's long search", "She teaches him rhetoric", "She funds his travels", "She writes the book"] },
          significance: { q: "What does she stand for?", choices: ["Steadfast love and faith that endure through another's wandering", "Worldly ambition", "Cold indifference", "Quick, easy answers"] },
          reveals: "That Augustine's story is shaped by the love of others, not only his own effort.",
          conceals: "How much of his change he owes to her, which he leaves for the reader to weigh.",
          ace: "Articulate Monica's role; connect steadfast love to Augustine's journey; extend it to someone whose faith in a person helped them change."
        },
        {
          id: "memory", name: "The Palace of Memory", image: "images/memory.webp",
          clues: ["In a later book, Augustine turns to explore the mind itself.", "He marvels at memory as a vast inner space.", "In it are stored images, ideas, feelings, and even the memory of forgetting."],
          identify: { q: "What does this vast hall represent?", choices: ["Augustine's image of memory as a great palace within the mind", "A real royal palace", "A library in Rome", "A prison"] },
          purpose: { q: "Why does Augustine explore memory?", choices: ["To ask how the mind holds the past — and how we search within ourselves", "To design a building", "To list his belongings", "To record a battle"] },
          significance: { q: "What does the exploration show?", choices: ["That the search for truth turns inward, into the mysteries of the mind", "That memory is small and simple", "That the past does not matter", "That thinking is useless"] },
          reveals: "Augustine's turn from the outer world to the inner life of the mind.",
          conceals: "How memory can hold so much — a wonder he admits he cannot fully explain.",
          ace: "Articulate the 'palace of memory' image; connect memory to self-examination; extend it to how remembering shapes who you are."
        },
        {
          id: "time", name: "The Puzzle of Time", image: "images/time.webp",
          clues: ["Late in the work, Augustine asks a deceptively simple question: what is time?", "He notices he seems to know — until he tries to explain it.", "The past is gone, the future is not yet, and the present will not hold still."],
          identify: { q: "What puzzle is this?", choices: ["Augustine's famous inquiry into the nature of time", "A sundial's design", "A train schedule", "A calendar of feasts"] },
          purpose: { q: "Why does he raise it?", choices: ["To probe how fleeting, passing time differs from God's changeless eternity", "To be late for nothing", "To measure crops", "To sell clocks"] },
          significance: { q: "What does the puzzle reveal?", choices: ["That time slips through our grasp, which sharpens the contrast with the eternal", "That time is easy to define", "That the past can be relived", "That time does not exist at all"] },
          reveals: "Augustine's philosophical depth — turning a common word into a hard question.",
          conceals: "A full answer; he admits the mystery outruns his explanation.",
          ace: "Articulate why time puzzles Augustine; connect passing time to the idea of eternity; extend it to how you experience past, present, and future."
        },
        {
          id: "garden", name: "The Garden", image: "images/garden.webp",
          clues: ["A quiet garden is the setting of Augustine's crisis and turning point.", "There he wrestles with a will divided between his old life and a new one.", "It is a place of both anguish and, finally, peace."],
          identify: { q: "What is this place?", choices: ["The garden where Augustine's conversion takes place", "A public marketplace", "A battlefield", "A royal court"] },
          purpose: { q: "What is its role in the work?", choices: ["It is the setting where his long inner struggle finally resolves", "It is where he studies law", "It is where he is born", "It is where he dies"] },
          significance: { q: "What does the garden stand for?", choices: ["The inward place where a divided will is finally healed and decides", "A pleasant vacation spot", "A symbol of wealth", "A meaningless backdrop"] },
          reveals: "That Augustine's decisive struggle is inward, not against the outer world.",
          conceals: "Exactly how the will finally turns — a change he calls a gift, not just an effort.",
          ace: "Articulate what happens in the garden; connect the setting to his 'divided will'; extend it to a decision that required an inner, not outer, struggle."
        }
      ]
    },

    ctob: {
      name: "Take Up and Read",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The Confessions is written as one long prayer addressed directly to ______. (one word)",
          evidence: ["Augustine does not simply tell his story to readers.", "He speaks throughout to the God he is seeking.", "The word begins with 'G'."],
          hints: ["He addresses the whole book to the divine.", "Three letters.", "The word is God."],
          answer: "God"
        },
        {
          type: "mc",
          prompt: "Why does the young Augustine say he and his friends stole the pears?",
          options: [
            "Not out of hunger, but for the thrill of doing something forbidden.",
            "Because they were starving.",
            "To sell them for money.",
            "Because their parents told them to."
          ],
          hints: ["Note that he says the pears were not even good.", "Which option is about the thrill of wrongdoing itself?"]
        },
        {
          type: "word",
          prompt: "What is the first name of Augustine's devout mother, who hoped and prayed for his conversion? (one name)",
          evidence: ["She is a steady figure of faith throughout the book.", "For years she prays that her son will change.", "Her name begins with 'Mon…'."],
          hints: ["A devout Christian mother.", "Mon…", "Her name is Monica."],
          answer: "Monica"
        },
        {
          type: "mc",
          prompt: "In the garden, hearing a child's voice say 'take up and read,' Augustine opens a book and —",
          options: [
            "reaches the turning point of his conversion.",
            "learns a new language.",
            "decides to become a soldier.",
            "falls asleep."
          ],
          hints: ["Think about what the whole book has been building toward.", "Which option is about his conversion?"]
        },
        {
          type: "sequence",
          prompt: "Put the stages of Augustine's search in order, earliest first.",
          items: [
            "As a young man, Augustine chases success, pleasure, and worldly ambition.",
            "He searches restlessly through different philosophies and ideas.",
            "In a garden, his long crisis resolves and he converts.",
            "He devotes the rest of his life to God and to writing."
          ],
          hints: ["It begins with worldly ambition.", "The searching comes before the garden.", "His devoted life comes last."]
        },
        {
          type: "digit",
          prompt: "Into how many books is the Confessions divided? Enter the number.",
          evidence: ["The work is organized into a set number of books.", "The first nine tell his life; the last few turn to memory, time, and Scripture.", "The traditional total is thirteen."],
          hints: ["More than ten.", "Ten plus three.", "It is 13 books."],
          answer: "13"
        }
      ]
    },

    arcade: {
      name: "Ordered Loves",
      instruction: "Augustine says the heart stays restless until it rests in the highest good, and that lesser, passing goods can never finally satisfy it. Sort each thing: is it a PASSING, EARTHLY GOOD (good but unable to give lasting rest) or WHAT THE RESTLESS HEART TRULY SEEKS (a lasting, higher good)? Reasoning earns the points.",
      buckets: [
        { id: "earthly", label: "Passing, earthly good", short: "Passing" },
        { id: "lasting", label: "What the heart truly seeks", short: "Lasting" }
      ],
      cards: [
        { text: "A brilliant career and public fame", bucket: "earthly", why: "Worldly success is a passing good that Augustine found could not satisfy." },
        { text: "Applause for being a great speaker", bucket: "earthly", why: "Praise from others is fleeting — an earthly good, not lasting rest." },
        { text: "Physical pleasure and comfort", bucket: "earthly", why: "Pleasures pass and leave the heart restless, in Augustine's account." },
        { text: "Wealth and high status", bucket: "earthly", why: "Possessions and rank are temporal goods that cannot finally fulfill." },
        { text: "Truth itself", bucket: "lasting", why: "Augustine's search is ultimately for truth, not passing things." },
        { text: "Lasting peace of the soul", bucket: "lasting", why: "The 'rest' the restless heart seeks is a lasting inner peace." },
        { text: "Rest in the highest good", bucket: "lasting", why: "For Augustine, only the highest good gives the heart true rest." },
        { text: "A rightly-ordered love", bucket: "lasting", why: "Loving things in the right order is Augustine's picture of a settled heart." }
      ],
      followup: "Augustine doesn't say earthly goods are bad — only that they can't give lasting rest. What does it mean to enjoy passing goods without expecting them to fully satisfy?"
    },

    analysis: {
      mcq: [
        {
          q: "The Confessions is unusual as an autobiography because it is written —",
          options: [
            "as a long prayer addressed directly to God.",
            "as a series of letters to a friend.",
            "as a courtroom transcript.",
            "as a collection of poems with no story."
          ],
          why: "Augustine addresses the whole work to God, blending his life story with prayer and reflection."
        },
        {
          q: "Augustine's reflection on stealing the pears explores —",
          options: [
            "why people are sometimes drawn to do wrong for its own sake, with nothing to gain.",
            "how to grow better fruit.",
            "the importance of sharing food.",
            "the history of his hometown."
          ],
          why: "Because he was not hungry and the pears were poor, the episode probes the puzzle of wrongdoing itself."
        },
        {
          q: "The 'restless heart' idea claims that —",
          options: [
            "no passing, earthly thing can finally satisfy the deepest human longing.",
            "people are easily and permanently satisfied.",
            "desire is unimportant.",
            "rest can never be found at all."
          ],
          why: "Augustine frames his whole search around a longing that earthly goods cannot fulfill."
        },
        {
          q: "The garden scene ('take up and read') is important because it —",
          options: [
            "marks the decisive turning point of Augustine's conversion.",
            "teaches him to read faster.",
            "begins his career in law.",
            "is only a minor childhood memory."
          ],
          why: "The long inner struggle resolves there, turning Augustine from his old life to a new one."
        },
        {
          q: "In the later books, Augustine's questions about memory and time show that he —",
          options: [
            "turns his search inward, treating the mind and time as deep philosophical mysteries.",
            "loses interest in ideas.",
            "only cares about telling exciting events.",
            "believes there is nothing left to wonder about."
          ],
          why: "The Confessions moves from life story to searching reflection on the mind, memory, and time."
        }
      ],
      short: [
        "Choose one artifact from the Garden of Memory. Explain what it is and the idea from Augustine it stands for.",
        "Explain the 'restless heart' in your own words. Do you find the idea convincing? Use one example.",
        "The Confessions is honest about the author's own faults. Why might a writer choose to expose their failings, and what does it add to the work?"
      ],
      paragraph: "Write an evidence-based paragraph. Augustine argues that passing, earthly goods cannot give the heart lasting rest. Do you agree, disagree, or partly agree? Make a claim and support it with specific ideas from the Confessions and one example from life.",
      aceReflection: "Articulate Augustine's idea of the restless heart. Connect it to two moments in his search. Extend it to your own life or the present day, and name where the idea becomes hard to apply."
    },

    extend: {
      name: "Examine Your Restlessness",
      prompt: "Augustine turns his own life into a searching question: what is the heart really looking for? Choose something people today chase for happiness — success, popularity, wealth, entertainment, achievement. Reflect, in Augustine's honest and searching spirit, on whether it can give lasting rest, and what a deeper 'rest' might look like.",
      format: "A short reflective piece (a few paragraphs) that names what people chase, weighs whether it truly satisfies, and considers what lasting rest might mean. Reason honestly; there is no single required answer."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning Augustine's idea of the restless heart in the Confessions. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Augustine's Confessions. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in the Confessions because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Confessions: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Augustine's idea of restlessness to this modern pursuit: [pursuit]. Ask me questions to test whether it can give lasting rest. Do not decide the answer for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Confessions for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces Augustine's Confessions as literature and philosophy: its form (autobiography as prayer), the restless-heart theme, the pear theft, the garden conversion, and the searching reflections on memory and time. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation and choose selections appropriate for your students; the full Confessions is long. The Latin original and older translations (e.g., Pusey) are public domain; some recent translations remain under copyright.",
        "The Confessions is a foundational literary/philosophical text that is also devotional and Christian. In a public setting, teach it academically — its ideas, form, and influence — and follow local policy on religious texts.",
        "Famous phrases here (the restless heart; 'take up and read'; the puzzle of time) are paraphrased, not quoted from any one translation; quote your class edition if you attribute exact wording. Details (the pear theft; Monica; the garden; thirteen books) are widely established — confirm against your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III–IV / advanced ELAR TEKS (19 TAC Ch. 110) strands on central ideas of complex text, author's craft and purpose, and reflective response. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.3", "RI.11-12.5", "RI.11-12.6", "W.11-12.3", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
