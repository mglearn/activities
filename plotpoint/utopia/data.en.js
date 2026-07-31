/* PlotPoint — Thomas More, Utopia (1516).
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations. More's famous image of sheep that
   "devour men" (his critique of enclosure) is paraphrased as an idea, not
   quoted. Details are widely established (a 1516 satire; frame narrative with
   the traveler Raphael Hythloday; the name's pun on Greek "no place"/"good
   place"; common property, no money, six-hour workday, contempt for gold,
   religious tolerance). Standards are real, applicable Common Core codes
   flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer
   is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "utopia",
  storageKey: "plotpoint.utopia.v1",

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
    "enter.readListenNote": "This work is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Utopia",
    "vocab.intro": "{n} terms that unlock the book. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Traveler's Chest",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the book",
    "relic.q.significance": "The idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Island of No Place",
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
    "arcade.title": "Utopia or Europe?",
    "arcade.default": "Sort each thing by where it belongs.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Close Reading & Satire",
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
    "extend.title": "Design Your Own 'No Place'",
    "extend.format": "Format",
    "extend.evidence": "The idea from Utopia I am building on",
    "extend.transfers": "What transfers to a modern society",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the design stops working",
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
    "print.item.relic": "Traveler's Chest evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Design-a-society organizer",
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
      title: "Utopia",
      author: "Thomas More",
      grades: "Grades 9–12",
      genre: "Satire · Political philosophy · Fiction",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "1516 work is public domain",
      textAccess: "Students need a public-domain edition of More's Utopia (for example, the classic English translation). This room does not reproduce the text.",
      copyright: "The 1516 work and its classic English translations are public domain; individual modern translations may carry their own copyright. Verify your edition.",
      contentNote: "A Renaissance satire on society, wealth, and justice, with a frame story and an imagined island. Best read in selections with guidance. Align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2130",
      audio: "https://librivox.org/utopia-by-thomas-more/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Thomas More's Utopia — an island on an old map, a traveler's chest, and a golden chamber pot."
    },
    hook: "A traveler returns from a voyage and describes an island where no one owns private property, no one hoards gold, and everyone works just six hours a day. Its name means 'no place' — so is Thomas More describing a perfect society, mocking his own Europe, or daring you to tell the difference?",
    goals: [
      "Understand Utopia as a 1516 work of fiction and social satire, told through a frame story.",
      "Explain the pun in the island's name ('no place' / 'good place') and why it matters.",
      "Analyze how More uses the imagined island to criticize the Europe of his own day — its wealth, poverty, and justice.",
      "Transfer More's method by designing and defending one feature of an imagined society."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a satire that imagines an ideal place.",
        "Discuss: If you could redesign society from scratch, what one rule would you change first?"
      ],
      during: [
        "Use the Traveler's Chest to examine one idea at a time.",
        "For each Utopian custom, ask: what European problem is More answering?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to design and defend one feature of your own society."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the Utopians treat gold with contempt. Include one detail from the book that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect a custom of Utopia (for example, common property or the six-hour workday) to a problem More criticizes in Europe. Explain how the island answers the problem." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Design one feature of your own imagined society, in the spirit of More. Explain what problem it solves, what transfers to the real world, and where the design breaks down." }
    },

    vocab: [
      { term: "utopia", def: "An imagined place or society that seems ideal or perfect; from Greek roots meaning 'no place.'", example: "An island where everything runs perfectly.", nonexample: "A real, ordinary town with real problems.", context: "More coined the word as the name of his imaginary island." },
      { term: "satire", def: "A work that uses humor, irony, or exaggeration to criticize people or society.", example: "Mocking greed by inventing people who use gold for chamber pots.", nonexample: "A plain, literal news report.", context: "Utopia is a satire on the Europe of More's day." },
      { term: "frame narrative", def: "A story that contains another story told by a character inside it.", example: "More meets a traveler who then describes Utopia.", nonexample: "A story with only one narrator and no story-within.", context: "The traveler's account of Utopia sits inside More's frame story." },
      { term: "commonwealth", def: "A community or state organized for the common good of all its people.", example: "A society run for everyone's benefit.", nonexample: "A land run only for the ruler's profit.", context: "More asks what the best form of a commonwealth would be." },
      { term: "enclosure", def: "Fencing off land once shared in common, often for private profit.", example: "Turning shared farmland into private pasture for sheep.", nonexample: "Keeping land open for the whole village to farm.", context: "In Book I, More attacks enclosure for driving farmers into poverty." },
      { term: "tolerance", def: "Allowing beliefs or practices different from one's own.", example: "Different faiths worshiping freely side by side.", nonexample: "Punishing everyone who believes differently.", context: "The Utopians practice a broad religious tolerance." },
      { term: "communal", def: "Shared by all members of a community rather than owned privately.", example: "Storehouses everyone draws from by need.", nonexample: "Goods locked away as one person's private property.", context: "Utopian life is communal: no private property and no money." },
      { term: "idleness", def: "Laziness; avoiding useful work.", example: "Living off others' labor while doing nothing.", nonexample: "Sharing the daily work of the community.", context: "Utopia is designed to leave little room for idleness." },
      { term: "pun", def: "A play on words that uses two meanings or similar sounds.", example: "'Utopia' sounding like both 'no place' and 'good place.'", nonexample: "A word used with only one plain meaning.", context: "The island's name is a deliberate pun." }
    ],

    relic: {
      name: "The Traveler's Chest",
      intro: "Seven instructional reconstructions of ideas and objects from More's book — teaching recreations, not artwork from any edition. Investigate what each is, its role in the book, and the idea it stands for.",
      artifacts: [
        {
          id: "the-name", name: "The Name 'Utopia'", image: "images/the-name.webp",
          clues: ["More invented the island's name from Greek roots.", "It can mean 'no place' — a place that does not exist.", "It also sounds like a phrase meaning 'good place.'"],
          identify: { q: "What is special about the name 'Utopia'?", choices: ["It is a pun meaning both 'no place' and 'good place'", "It is the author's real name", "It is a Roman city", "It means 'ocean'"] },
          purpose: { q: "Why give the island such a name?", choices: ["To hint that the perfect place may be imaginary — and to invite the reader to think", "To hide the plot", "To honor a king", "To name a real country"] },
          significance: { q: "What does the pun signal about the book?", choices: ["It may be as much a critique and a puzzle as a blueprint", "That the island is real", "That names do not matter", "That More disliked wordplay"] },
          reveals: "That More builds irony into the very title of his book.",
          conceals: "Whether More truly endorses Utopia or is testing the reader.",
          ace: "Articulate the pun in the name; connect it to the idea of satire; extend it to why an author might hide a serious point inside a joke."
        },
        {
          id: "travelers-account", name: "The Traveler's Account", image: "images/travelers-account.webp",
          clues: ["Most of the book is one long description.", "It is told by a traveler named Raphael Hythloday.", "He claims to have visited the island and reports its customs."],
          identify: { q: "Who describes the island of Utopia?", choices: ["Raphael Hythloday, a traveler in the frame story", "Thomas More's brother", "The king of England", "A Utopian citizen visiting Europe"] },
          purpose: { q: "Why tell the story through a traveler?", choices: ["A frame narrator lets More present bold ideas at a distance from himself", "To make the book shorter", "To record a real voyage", "To avoid describing Utopia"] },
          significance: { q: "What does the frame narrator allow?", choices: ["More can raise daring criticisms while keeping some distance and irony", "That the ideas are certainly More's own beliefs", "That the account must be literally true", "That the narrator is unimportant"] },
          reveals: "That the book's boldest claims come from a character, not directly from More.",
          conceals: "How much of Hythloday's enthusiasm More actually shares.",
          ace: "Articulate who Hythloday is; connect the frame narrator to the freedom to criticize; extend it to why writers use a character to voice risky ideas."
        },
        {
          id: "devouring-sheep", name: "The Devouring Sheep", image: "images/devouring-sheep.webp",
          clues: ["In Book I, More criticizes a change in the English countryside.", "Landlords fence off shared fields to raise sheep for wool.", "He paints the sheep, in effect, as devouring the farmers they displace."],
          identify: { q: "What problem does the 'devouring sheep' image attack?", choices: ["Enclosure — fencing common land for sheep, which displaces farmers", "A disease among animals", "Too little wool", "A foreign invasion"] },
          purpose: { q: "Why use such a shocking image?", choices: ["To dramatize how a hunger for profit pushes poor farmers off the land", "To praise the wool trade", "To describe a real monster", "To teach farming"] },
          significance: { q: "What larger point does it make?", choices: ["Economic greed can create the very poverty and crime society then punishes", "That sheep are dangerous animals", "That farmers are lazy", "That wool is worthless"] },
          reveals: "More's argument that harsh punishment ignores the causes of poverty.",
          conceals: "The complexity of the economic changes he compresses into one image.",
          ace: "Articulate what enclosure was; connect greed to poverty in More's argument; extend it to a modern case where profit creates a problem society then punishes."
        },
        {
          id: "golden-chamber-pot", name: "The Golden Chamber Pot", image: "images/golden-chamber-pot.webp",
          clues: ["In Utopia, gold and silver are not treasured.", "They are used for lowly things — chamber pots and chains for wrongdoers.", "Jewels are given to children as toys."],
          identify: { q: "How do the Utopians treat gold and silver?", choices: ["With contempt — using them for chamber pots and chains", "As sacred objects", "As their only money", "As forbidden and never seen"] },
          purpose: { q: "Why make gold into a chamber pot?", choices: ["To strip gold of its allure so it cannot corrupt people with greed", "To insult foreign kings", "To hide their wealth", "Because they have no other metal"] },
          significance: { q: "What does this custom satirize?", choices: ["Europe's worship of wealth, which More sees as irrational", "The color gold", "The need for toilets", "The value of hard work"] },
          reveals: "That value is a matter of custom, and greed a habit that can be unlearned.",
          conceals: "How a real society could actually enforce such contempt for wealth.",
          ace: "Articulate how Utopia treats gold; connect the custom to a European problem; extend it to how what we treat as valuable shapes our behavior."
        },
        {
          id: "common-storehouse", name: "The Common Storehouse", image: "images/common-storehouse.webp",
          clues: ["In Utopia there is no private property.", "Goods are kept in common storehouses.", "People take what they need; there is no money."],
          identify: { q: "What does the common storehouse represent?", choices: ["Shared property — no private ownership and no money", "A private bank", "A royal treasury", "A marketplace for trade"] },
          purpose: { q: "Why abolish private property?", choices: ["More has Hythloday argue it removes greed, envy, and poverty at the root", "To make people poorer", "To help the rich", "To end farming"] },
          significance: { q: "What debate does this custom open?", choices: ["Whether common ownership frees a society or removes the drive to work", "Whether storehouses should be larger", "Whether money is pretty", "Whether trade is fun"] },
          reveals: "The book's central experiment: a society without private property.",
          conceals: "More the character's own doubts about whether it could truly work.",
          ace: "Articulate how Utopian property works; connect it to the problems of greed and poverty; extend it to one strength and one weakness of common ownership."
        },
        {
          id: "shared-field", name: "The Shared Field", image: "images/shared-field.webp",
          clues: ["Everyone in Utopia works, including at farming.", "The working day is short — about six hours.", "Idleness is discouraged, and useful labor is shared by all."],
          identify: { q: "What does the shared field represent?", choices: ["Universal, shared labor and a short six-hour workday", "A battlefield", "A private estate", "A place only slaves work"] },
          purpose: { q: "Why have everyone work only six hours?", choices: ["When no one is idle, short hours can supply everyone's needs", "To keep people poor", "To punish farmers", "To leave the fields empty"] },
          significance: { q: "What point does shared labor make?", choices: ["Much idleness in Europe exists because some live off others' work", "That work is meaningless", "That farming is shameful", "That leisure is forbidden"] },
          reveals: "More's claim that ending idleness could lighten everyone's burden.",
          conceals: "How to keep people willing to work without pay or private reward.",
          ace: "Articulate how Utopian work is arranged; connect shared labor to the critique of idle nobles; extend it to whether a short shared workday could function today."
        },
        {
          id: "many-altars", name: "The Many Altars", image: "images/many-altars.webp",
          clues: ["Utopians hold different religious beliefs.", "They worship without forcing their views on others.", "Their society allows a broad tolerance of faiths."],
          identify: { q: "What does the presence of many altars show?", choices: ["Religious tolerance among different beliefs", "One forced state religion", "That Utopians have no beliefs", "A single temple only"] },
          purpose: { q: "Why include religious tolerance?", choices: ["To contrast Utopia with the religious conflict of More's Europe", "To mock all religion", "To describe a war", "To ban worship"] },
          significance: { q: "What ideal does this custom raise?", choices: ["That people of different faiths might live together in peace", "That belief does not matter", "That tolerance is impossible", "That only one faith is allowed"] },
          reveals: "More imagining a civic peace across religious difference.",
          conceals: "The limits More places on tolerance, which are easy to overlook.",
          ace: "Articulate what Utopian tolerance looks like; connect it to European conflict; extend it to why shared civic life may require tolerating difference."
        }
      ]
    },

    ctob: {
      name: "The Island of No Place",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no memorized page numbers. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The name 'Utopia' comes from Greek and can mean 'no ______.' (one word)",
          evidence: ["More built the name from Greek roots.", "It hints that the perfect island may not really exist anywhere.", "The missing word means a location or spot, and begins with 'pl…'."],
          hints: ["It means a location or spot.", "Pl…", "The word is place."],
          answer: "place"
        },
        {
          type: "mc",
          prompt: "Who wrote Utopia, publishing it in 1516?",
          options: [
            "Thomas More.",
            "Raphael Hythloday.",
            "Geoffrey Chaucer.",
            "Julius Caesar."
          ],
          hints: ["The author is a real historical person, not the traveler in the story.", "Which name is the real English author?"]
        },
        {
          type: "digit",
          prompt: "About how many hours a day does everyone in Utopia work? Enter the number.",
          evidence: ["Because no one is idle, the working day is short.", "The book gives a strikingly small number of hours.", "It is six."],
          hints: ["Fewer than eight.", "Half of twelve.", "The answer is 6 hours."],
          answer: "6"
        },
        {
          type: "mc",
          prompt: "How do the Utopians regard gold and silver?",
          options: [
            "With contempt — they make chamber pots and prisoners' chains from them.",
            "As sacred objects of worship.",
            "As their most treasured money.",
            "As metals they have never seen."
          ],
          hints: ["Think about the golden chamber pot.", "Which option shows they despise it?"]
        },
        {
          type: "sequence",
          prompt: "Put More's Book I argument about crime and poverty in order, cause first.",
          items: [
            "Landlords enclose common fields to raise sheep for wool.",
            "Farmers are driven off the land they once worked.",
            "With no work, many fall into poverty.",
            "Poverty pushes some to steal — and then they are harshly punished."
          ],
          hints: ["It starts with enclosure of the fields.", "Losing the land comes before the poverty it causes.", "Harsh punishment of theft is the end of the chain, not the beginning."]
        },
        {
          type: "word",
          prompt: "A defining feature of Utopia is that there is no private ______ — everything is shared. (one word)",
          evidence: ["Goods are kept in common storehouses.", "There is no money, and no one owns things privately.", "The missing word means something one owns, and begins with 'prop…'."],
          hints: ["It means something a person owns.", "Prop…", "The word is property."],
          answer: "property"
        }
      ]
    },

    arcade: {
      name: "Utopia or Europe?",
      instruction: "More holds up his imagined island as a mirror to his own society. Sort each thing: does it describe MORE's UTOPIA (as the traveler describes it), or the EUROPE More criticizes? Reasoning earns the points.",
      buckets: [
        { id: "utopia", label: "More's Utopia", short: "Utopia" },
        { id: "europe", label: "The Europe More criticizes", short: "Europe" }
      ],
      cards: [
        { text: "No private property; goods are shared", bucket: "utopia", why: "Utopia abolishes private ownership and money." },
        { text: "Gold is used for chamber pots and chains", bucket: "utopia", why: "The Utopians strip gold of its allure on purpose." },
        { text: "Everyone works a short, shared day", bucket: "utopia", why: "With no idleness, a six-hour day supplies everyone's needs." },
        { text: "Different faiths are broadly tolerated", bucket: "utopia", why: "Utopia allows a wide religious tolerance." },
        { text: "Common fields fenced off to raise sheep", bucket: "europe", why: "Enclosure for wool is the abuse More attacks in Book I." },
        { text: "Thieves hanged while the causes of theft are ignored", bucket: "europe", why: "More mocks harsh punishment that never addresses poverty." },
        { text: "Idle nobles living off other people's labor", bucket: "europe", why: "More criticizes those who consume without working." },
        { text: "Great hoards of gold prized as treasure", bucket: "europe", why: "Europe's worship of wealth is exactly what Utopia satirizes." }
      ],
      followup: "More never quite says whether Utopia is a dream to build or a joke at Europe's expense. Which features would actually improve a society, and which could not work? Defend your answer with evidence."
    },

    analysis: {
      mcq: [
        {
          q: "Utopia is best described as —",
          options: [
            "a work of fiction and social satire, told through a frame story.",
            "a true travel diary.",
            "a book of laws for England.",
            "a collection of prayers."
          ],
          why: "More invents an island and a traveler to satirize the society of his own day."
        },
        {
          q: "The name 'Utopia' is a pun that means —",
          options: [
            "'no place' — while also sounding like 'good place.'",
            "'great empire.'",
            "'golden island.'",
            "'new world.'"
          ],
          why: "More coined the name from Greek roots so it hints the ideal place may not exist."
        },
        {
          q: "In Utopia, property and money work like this:",
          options: [
            "there is no private property and no money; goods are shared.",
            "everyone competes to own as much as possible.",
            "only nobles may own land.",
            "gold coins are the basis of all trade."
          ],
          why: "Utopia is built on common ownership; Hythloday argues this removes greed and poverty."
        },
        {
          q: "The Utopians make chamber pots and prisoners' chains out of gold in order to —",
          options: [
            "strip gold of its allure so it cannot corrupt people with greed.",
            "show off how rich they are.",
            "trade it with other nations.",
            "worship it as sacred."
          ],
          why: "By degrading gold, the Utopians satirize Europe's irrational worship of wealth."
        },
        {
          q: "In Book I, More's image of sheep that 'devour men' criticizes —",
          options: [
            "enclosure: fencing common land for sheep, which drives farmers into poverty.",
            "a disease killing English sheep.",
            "a shortage of wool for clothing.",
            "farmers who refuse to work."
          ],
          why: "More argues that greed-driven enclosure creates the poverty and crime society then punishes."
        }
      ],
      short: [
        "Choose one artifact from the Traveler's Chest. Explain what it is and the idea from the book it stands for.",
        "Explain the pun in the name 'Utopia' and why it changes how you read the book.",
        "Choose one Utopian custom. Explain the European problem More is answering with it, and whether you find his answer convincing."
      ],
      paragraph: "Write an evidence-based paragraph. Is Utopia meant as a blueprint for a better society, a satire of More's Europe, or both at once? Make a claim and support it with specific features of the island and details from Book I.",
      aceReflection: "Articulate one way Utopia mirrors and criticizes More's Europe. Connect it to the book's satire and its frame narrator. Extend it to a feature of your own society you would put under the same kind of mirror."
    },

    extend: {
      name: "Design Your Own 'No Place'",
      prompt: "More invents an island to hold up a mirror to his own society. Design one feature of your own imagined society — a rule about work, property, wealth, justice, or belief. Explain the real-world problem it answers, in the spirit of More; then, like More the character, name honestly where your design would break down.",
      format: "A short evidence-based proposal for one feature of an imagined society, modeled on More's method, with a clear-eyed note on its limits."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the Utopians treat gold with contempt in More's Utopia. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Utopia. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think this Utopian custom connects to this European problem More criticizes because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the book." },
      { title: "Evidence prompt", text: "Here is my claim about Utopia: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to design one feature of an imagined society, in the spirit of More. Ask me questions about what problem it solves and where it would break down. Do not design it for me." },
      { title: "Critique prompt", text: "Review my interpretation of Utopia for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of More's Utopia as satire and political philosophy: the pun in the title, the frame narrator, the critique of enclosure and harsh justice in Book I, and the island's customs in Book II (common property, no money, contempt for gold, shared six-hour labor, and religious tolerance). It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The 1516 work and its classic English translations (e.g., the Ralph Robinson translation in the linked Gutenberg edition) are public domain; individual modern translations may carry their own copyright. Confirm the edition you assign.",
        "Utopia is a Renaissance satire whose irony is easy to miss; scaffold the frame story and the possibility that More is critiquing as much as endorsing. Decide which selections fit your course.",
        "Details here reflect widely established facts: a 1516 satire framed by a conversation with the traveler Raphael Hythloday; the name's pun on Greek 'no place' / 'good place'; Book I's attack on enclosure ('sheep devour men') and on hanging thieves; Book II's common property, absence of money, contempt for gold, roughly six-hour workday, and religious tolerance. More's lines are paraphrased, not quoted. Confirm specifics against your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I–IV ELAR TEKS (19 TAC Ch. 110) strands on author's purpose, satire and irony, and analysis of a foundational world text, with cross-curricular ties to world history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.11-12.1", "RL.11-12.6", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
