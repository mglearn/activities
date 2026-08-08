/* PlotPoint — Walden; or, Life in the Woods (Henry David Thoreau).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts from the 1854 book,
   scoped to its core chapters (Economy; Where I Lived; Solitude; Conclusion);
   standards codes are only those given by the build plan (Common Core) — TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "walden",
  storageKey: "plotpoint.walden.v1",

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
    "enter.readListenNote": "This book is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Walden",
    "vocab.intro": "{n} terms that unlock the book. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Walden Pond Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object, place, or idea?",
    "relic.q.purpose": "Explain its likely purpose",
    "relic.q.significance": "Its literary significance",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Case of the Cabin",
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
    "arcade.title": "Necessity or Luxury?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Items to weigh",
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
    "extend.title": "Your Own Walden",
    "extend.format": "Format",
    "extend.evidence": "The idea from Walden I am building on",
    "extend.transfers": "What transfers to a modern setting",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My own experiment in simple living",
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
    "print.item.relic": "Relic Room evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Simple-living organizer",
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
      title: "Walden; or, Life in the Woods",
      author: "Henry David Thoreau",
      grades: "Grades 9–12",
      genre: "Nonfiction · Transcendentalism · Reflective memoir",
      time: "60–90 minutes",
      spoiler: "No plot to spoil",
      rights: "Public domain (1854)",
      textAccess: "This is a public-domain book; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1854 and long in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A work of reflective nonfiction suitable for grades 9–12. This room focuses on Walden's core chapters (Economy; Where I Lived, and What I Lived For; Solitude; Conclusion), not the whole book. Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/205",
      audio: "https://librivox.org/walden-by-henry-david-thoreau",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Walden — a small wooden cabin among pines beside a still, clear pond, an axe in a stump, and rows of beans."
    },
    hook: "For two years, Henry David Thoreau left the town behind to live alone in a one-room cabin he built by a pond. He wanted to strip life down to its essentials and find out what truly matters. Walden is his report — a challenge to live deliberately, simply, and awake.",
    goals: [
      "Analyze how Thoreau argues, through his life at Walden Pond, for simplicity, self-reliance, and deliberate living.",
      "Interpret Walden as a work of Transcendentalism, finding spiritual meaning in nature and the individual conscience.",
      "Evaluate Thoreau's distinction between the true necessities of life and the luxuries that complicate it.",
      "Connect his call to live deliberately to a modern situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: a small cabin by Walden Pond, near Concord, Massachusetts, in the 1840s.",
        "Discuss: What do you truly need to live well? What could you give up without losing anything that matters?"
      ],
      during: [
        "Use the Relic Room to examine one object, place, or idea at a time. This room focuses on Walden's core chapters.",
        "Track Thoreau's distinction between necessities and luxuries, and how nature teaches him."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh simplicity against modern wants.",
        "Complete the Extend task to design your own small experiment in simple, deliberate living."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Thoreau means by living 'deliberately.' Include one detail from Walden that shows what he values." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Walden's ideas (for example, simplicity and self-reliance, or solitude and nature). Explain how they reinforce each other." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Thoreau's call to simplify and live deliberately to a modern situation (such as technology or consumer culture). Explain what transfers, what changes today, and where it stops working." }
    },

    vocab: [
      { term: "transcendentalism", def: "A 19th-century American movement holding that deeper truth is found through nature, intuition, and the individual conscience.", example: "Seeing a pond or a forest as a source of spiritual insight.", nonexample: "Believing truth comes only from authority and tradition.", context: "Thoreau's book grows out of transcendentalism, finding the divine in nature." },
      { term: "self-reliance", def: "Depending on one's own powers and judgment rather than on others.", example: "Building your own shelter and growing your own food.", nonexample: "Relying entirely on others to provide everything.", context: "Walden preaches self-reliance — doing and thinking for yourself." },
      { term: "simplicity", def: "The state of being plain and uncomplicated, free of excess.", example: "Owning few things and keeping life uncluttered.", nonexample: "Filling life with possessions and constant busyness.", context: "Thoreau urges simplicity: reduce your needs to the essentials." },
      { term: "solitude", def: "The state of being alone, often by choice and for reflection.", example: "Living quietly by a pond with very few visitors.", nonexample: "Being constantly surrounded by crowds and noise.", context: "Thoreau finds that solitude at the pond sharpens his thinking." },
      { term: "deliberate", def: "Done on purpose, with careful thought and intention.", example: "Choosing exactly how to spend each day, on purpose.", nonexample: "Drifting through life without ever thinking about it.", context: "Thoreau went to the woods to live a deliberate, examined life." },
      { term: "materialism", def: "Placing great value on money and possessions.", example: "Measuring success by how much one owns.", nonexample: "Valuing time, thought, and nature over things.", context: "Walden is a protest against the materialism of modern life." },
      { term: "economy", def: "In Thoreau's sense, managing life by reducing wants to the true necessities.", example: "Spending little because you need little.", nonexample: "Constantly buying more than you need.", context: "In his chapter on economy, Thoreau asks how little a person really needs." },
      { term: "nonconformity", def: "Refusing to follow the crowd or accepted customs.", example: "Living differently from your neighbors on purpose.", nonexample: "Doing something only because everyone else does.", context: "Thoreau's nonconformity is a model for thinking for oneself." },
      { term: "necessity", def: "Something truly required for life, as opposed to a luxury.", example: "Food, shelter, clothing, and warmth.", nonexample: "Fashionable clothes or a large house.", context: "Thoreau treats food and shelter as a real necessity and calls the rest luxury." },
      { term: "superfluous", def: "More than is needed; unnecessary.", example: "Extra possessions that add work but not life.", nonexample: "The few tools a person truly uses.", context: "To Thoreau, most of what people own is superfluous." },
      { term: "individualism", def: "The belief in the worth and independence of the single person.", example: "Following your own conscience over the crowd's opinion.", nonexample: "Surrendering your judgment to the majority.", context: "Walden is a landmark of American individualism." }
    ],

    relic: {
      name: "The Walden Pond Archive",
      intro: "Seven instructional reconstructions of the objects, places, and ideas through which Walden reaches us — teaching recreations, not illustrations from any edition. This room focuses on Walden's core chapters. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "cabin", name: "The One-Room Cabin", image: "images/cabin.webp",
          clues: ["Thoreau built a small, plain house by the pond with his own hands.", "It cost him only a small sum — around twenty-eight dollars.", "It held little more than a bed, a table, and a few chairs."],
          identify: { q: "What is this?", choices: ["Thoreau's small, self-built cabin at Walden Pond", "A grand mansion in Concord", "A hotel by the railroad", "The town meeting hall"] },
          purpose: { q: "What is its purpose?", choices: ["To give simple, cheap shelter so Thoreau could live deliberately", "To show off his wealth", "To house many guests", "To store farm machinery"] },
          significance: { q: "What is its significance?", choices: ["The tiny, cheap cabin embodies Thoreau's argument that we need far less than we think", "It proves comfort requires great wealth", "It has no meaning in the book", "It ends his experiment"] },
          reveals: "How little a person truly needs for shelter — a direct challenge to lives cluttered with possessions.",
          conceals: "It downplays how near town he really was; his solitude was chosen, not total.",
          ace: "Articulate what the cabin cost and held; connect it to the theme of simplicity; extend it to how much 'stuff' a good life really requires."
        },
        {
          id: "beanfield", name: "The Bean-Field", image: "images/beanfield.webp",
          clues: ["Thoreau planted and hoed long rows of beans near his cabin.", "The work fed him and earned a little money.", "He treats the labor as a lesson, not just a chore."],
          identify: { q: "What is this?", choices: ["The bean-field Thoreau hoed to support himself", "A neighbor's wheat farm", "The town's public garden", "A flower bed at a friend's house"] },
          purpose: { q: "What is its purpose?", choices: ["To let Thoreau feed himself and practice self-reliance", "To grow rich selling beans", "To decorate the pond", "To hide from visitors"] },
          significance: { q: "What is its significance?", choices: ["The bean-field shows self-reliance and the dignity of plain, honest work", "It proves farming is pointless", "It has no meaning", "It ends the book"] },
          reveals: "That meaningful work can be plain and small, tying a person to the earth and the seasons.",
          conceals: "It hides how modest the yield was; the point is the lesson, not the harvest.",
          ace: "Articulate what the bean-field gave Thoreau; connect the work to self-reliance; extend it to how simple labor can teach us something."
        },
        {
          id: "pond", name: "Walden Pond", image: "images/pond.webp",
          clues: ["A deep, remarkably clear pond gives the book its name.", "Thoreau studies its colors, depth, and moods through the seasons.", "He treats it almost as a mirror of the soul."],
          identify: { q: "What is this?", choices: ["Walden Pond, the deep clear pond by Thoreau's cabin", "The Atlantic Ocean", "A muddy town reservoir", "A river running through Boston"] },
          purpose: { q: "What is its purpose in the book?", choices: ["To be Thoreau's daily companion and a subject of close study", "To power a mill", "To sell fish for profit", "To flood the fields"] },
          significance: { q: "What is its significance?", choices: ["The pure, deep pond becomes a symbol of clarity, depth, and the inner life", "It proves nature is worthless", "It has no meaning", "It ends the book"] },
          reveals: "How closely Thoreau reads nature, finding meaning and calm in a single pond.",
          conceals: "It leaves the pond's 'meaning' open — reader and writer supply it; the water is just water, and yet more.",
          ace: "Articulate how Thoreau describes the pond; connect it to the theme of nature and the inner life; extend it to how a place in nature can steady a person."
        },
        {
          id: "axe", name: "The Borrowed Axe", image: "images/axe.webp",
          clues: ["To build his cabin, Thoreau borrowed an axe.", "He returned it sharper than he received it.", "The small detail shows his care — and his honesty about needing others."],
          identify: { q: "What is this?", choices: ["The axe Thoreau borrowed to build his cabin", "A weapon for hunting bears", "A tool he bought new in town", "A gift from the governor"] },
          purpose: { q: "What is its purpose?", choices: ["To cut timber for the cabin — with a tool he did not own", "To chop down the whole forest", "To sell for profit", "To decorate the wall"] },
          significance: { q: "What is its significance?", choices: ["Returning it sharpened shows Thoreau's honesty — and that self-reliance still leans on others", "It proves Thoreau owned everything he used", "It has no meaning", "It ends the experiment"] },
          reveals: "Thoreau's care and integrity, and a quiet admission that no one is wholly independent.",
          conceals: "It softens the fact that his 'self-reliance' rested on a community he could borrow from.",
          ace: "Articulate the story of the axe; connect it to self-reliance; extend it to how even independent people depend on others."
        },
        {
          id: "ledger", name: "Thoreau's Cost Ledger", image: "images/ledger.webp",
          clues: ["Thoreau lists exactly what his food, house, and clothing cost.", "He tallies pennies to prove how little life requires.", "The accounting opens his chapter called 'Economy.'"],
          identify: { q: "What is this?", choices: ["Thoreau's careful list of what living actually cost him", "A bank's loan record", "A store's advertisement", "The town's tax rolls"] },
          purpose: { q: "What is its purpose?", choices: ["To prove, in hard numbers, how cheaply one can live", "To show off his riches", "To apply for a loan", "To pay the railroad"] },
          significance: { q: "What is its significance?", choices: ["The ledger turns 'simplicity' into evidence — a budget for a freer life", "It proves life must be expensive", "It has no meaning", "It ends the book"] },
          reveals: "That Thoreau backs his philosophy with arithmetic — freedom measured in dollars not spent.",
          conceals: "It leaves out costs he did not count, like the land he used but did not buy.",
          ace: "Articulate what the ledger proves; connect the numbers to the theme of economy; extend it to how tracking costs can free or trap us."
        },
        {
          id: "railroad", name: "The Railroad by the Pond", image: "images/railroad.webp",
          clues: ["A railroad line runs near Walden Pond.", "Thoreau hears its whistle and watches the trains rush by.", "He uses it to question the speed and busyness of modern life."],
          identify: { q: "What is this?", choices: ["The railroad passing near Walden Pond", "A canal Thoreau dug", "A highway for cars", "The town's church bell"] },
          purpose: { q: "What does it represent?", choices: ["The rush and commerce of the modern world Thoreau steps back from", "A daily commute Thoreau enjoyed", "The power source for his cabin", "A plan to drain the pond"] },
          significance: { q: "What is its significance?", choices: ["The railroad symbolizes industrial haste — the restlessness Thoreau resists", "It proves Thoreau loved machines", "It has no meaning", "It ends the seasons"] },
          reveals: "Thoreau's worry that people are driven by their tools and their speed rather than mastering them.",
          conceals: "It hides that he still benefited from the very commerce he criticized.",
          ace: "Articulate what the railroad meant to Thoreau; connect it to his critique of busyness; extend it to how modern speed shapes our lives."
        },
        {
          id: "journal", name: "Thoreau's Journal and the Conclusion", image: "images/journal.webp",
          clues: ["Thoreau kept detailed journals that fed his book.", "In the Conclusion he urges readers to follow their own path.", "He offers the image of marching to a 'different drummer.'"],
          identify: { q: "What is this?", choices: ["Thoreau's journals and his closing call to individual conscience", "A stranger's diary", "The town newspaper", "A railroad timetable"] },
          purpose: { q: "What is its purpose?", choices: ["To record his observations and urge readers to live by their own convictions", "To advertise the cabin", "To keep farm accounts", "To map the pond"] },
          significance: { q: "What is its significance?", choices: ["The 'different drummer' image is Walden's lasting call to nonconformity", "It proves everyone should think alike", "It has no meaning", "It ends nature"] },
          reveals: "Thoreau's final message — trust your own step, even if it differs from the crowd's.",
          conceals: "It leaves 'how' to live deliberately up to each reader; Walden gives a direction, not a rulebook.",
          ace: "Articulate the 'different drummer' idea; connect it to the theme of individualism; extend it to a choice where you might follow your own path."
        }
      ]
    },

    ctob: {
      name: "The Case of the Cabin",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "About how many years, rounded to the nearest whole number, did Thoreau live at Walden Pond? Enter the number.",
          evidence: ["He moved into his cabin in the summer of 1845.", "He left in the fall of 1847.", "His stay lasted about two years and two months."],
          hints: ["It is a little more than two years.", "Rounded to a whole number, it is two.", "The number is 2."],
          answer: "2"
        },
        {
          type: "word",
          prompt: "By what pond, near Concord, did Thoreau build his cabin and live? (one word — the pond's name)",
          evidence: ["The book takes its title from this pond.", "It is a deep, unusually clear pond near the village.", "Its name begins with 'Wal-.'"],
          hints: ["The book is named after it.", "It begins with 'Wald…'.", "The pond is Walden."],
          answer: "Walden"
        },
        {
          type: "word",
          prompt: "Near which small Massachusetts town was Thoreau's cabin? (one word)",
          evidence: ["He could walk from the pond into the village.", "It is the same Massachusetts town Thoreau came from.", "Its name begins with 'Con-.'"],
          hints: ["It is a famous town in Massachusetts.", "It begins with 'Conc…'.", "The town is Concord."],
          answer: "Concord"
        },
        {
          type: "mc",
          prompt: "Thoreau's main purpose in going to Walden was to —",
          options: [
            "live simply and deliberately, facing only the essential facts of life.",
            "get rich by farming beans.",
            "hide from the law.",
            "become a famous celebrity."
          ],
          hints: ["Think about what he wanted to learn from life.", "Which option is about simple, deliberate living?"]
        },
        {
          type: "sequence",
          prompt: "Put these moments of Thoreau's Walden year in order, earliest first.",
          items: [
            "Thoreau builds a small cabin by the pond and moves in.",
            "He plants and hoes a bean-field to support himself.",
            "Through winter he studies the frozen pond and lives in solitude.",
            "Spring returns, and he draws his lessons before leaving Walden."
          ],
          hints: ["Building the cabin comes first.", "The bean-field is a summer task, before winter.", "Spring and the departure come last."]
        },
        {
          type: "mc",
          prompt: "When Thoreau writes that most people 'lead lives of quiet desperation,' he means that they —",
          options: [
            "are trapped in unfulfilling routines and unexamined wants.",
            "are loud and openly angry all the time.",
            "have already found perfect happiness.",
            "live alone in the woods like him."
          ],
          hints: ["Think about people going through the motions without joy.", "Which option is about being trapped in routine?"]
        }
      ]
    },

    arcade: {
      name: "Necessity or Luxury?",
      instruction: "In 'Economy,' Thoreau argues that we need only a few true necessities, and that most of what we chase is luxury. Sort each item by how Thoreau would classify it: a true necessity of life, or a luxury we could shed. There is room to argue, but sort by his reasoning. Thoughtful sorting earns the points.",
      buckets: [
        { id: "necessity", label: "A true necessity (Thoreau)", short: "Necessity" },
        { id: "luxury", label: "A luxury we could shed", short: "Luxury" }
      ],
      cards: [
        { text: "Simple food, enough to keep a person warm and alive.", bucket: "necessity", why: "Thoreau counts basic nourishment among life's few real necessities." },
        { text: "Basic shelter from the weather, like his one-room cabin.", bucket: "necessity", why: "Shelter is one of the essentials he says life actually requires." },
        { text: "Plain clothing for warmth and protection.", bucket: "necessity", why: "Simple clothing is a necessity; fashion is not." },
        { text: "Fuel and a fire to stay warm through winter.", bucket: "necessity", why: "Warmth is a true necessity in a cold climate." },
        { text: "Fashionable clothes that change with every new style.", bucket: "luxury", why: "Thoreau mocks chasing fashion as a needless luxury." },
        { text: "A large house filled with furniture and ornaments.", bucket: "luxury", why: "He sees big houses and heaps of furniture as burdens, not needs." },
        { text: "Rich, elaborate meals meant to impress.", bucket: "luxury", why: "Luxurious dining is exactly the excess he warns against." },
        { text: "Money and possessions far beyond one's real needs.", bucket: "luxury", why: "Piling up wealth past necessity is the luxury that enslaves people." }
      ],
      followup: "Thoreau draws a sharp line between necessity and luxury. Using specific reasoning, argue where you would draw that line today — and whether some of his 'luxuries' have become modern necessities."
    },

    analysis: {
      mcq: [
        {
          q: "Walden is best described as —",
          options: [
            "a work of reflective nonfiction about simple, deliberate living in nature.",
            "a novel with invented characters and a plot.",
            "a stage play.",
            "a short adventure story."
          ],
          why: "Walden is Thoreau's own account and argument, not a fictional story."
        },
        {
          q: "Thoreau is associated with Transcendentalism, which values —",
          options: [
            "individual conscience, self-reliance, and spiritual truth found in nature.",
            "obeying authority without question.",
            "gaining wealth above all else.",
            "following the crowd's opinions."
          ],
          why: "Transcendentalism trusts the individual and finds deeper meaning in nature."
        },
        {
          q: "The 'Economy' chapter mainly argues that —",
          options: [
            "people should reduce their wants to the few true necessities of life.",
            "everyone should try to become as rich as possible.",
            "farming beans is the only honest work.",
            "cities are better than the woods."
          ],
          why: "Thoreau's careful accounting shows how little a person really needs."
        },
        {
          q: "Walden Pond itself works in the book mainly as —",
          options: [
            "a symbol of purity, depth, and the inner life.",
            "a source of great wealth.",
            "a danger Thoreau fears.",
            "a busy commercial harbor."
          ],
          why: "The deep, clear pond mirrors the clarity and depth Thoreau seeks within."
        },
        {
          q: "In the Conclusion, Thoreau's 'different drummer' image urges readers to —",
          options: [
            "follow their own convictions even if they differ from the crowd.",
            "always march in step with everyone else.",
            "give up and stop trying.",
            "buy more and work harder."
          ],
          why: "Hearing a 'different drummer' means trusting your own path over conformity."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops one of Walden's ideas (simplicity, self-reliance, solitude, or the value of nature).",
        "Explain Thoreau's distinction between necessities and luxuries. Using specific reasoning, decide whether you agree with where he draws the line.",
        "Explain what Thoreau means by living 'deliberately.' What would it look like to live that way today?"
      ],
      paragraph: "Write an evidence-based paragraph. Is Thoreau's call to simplify and live deliberately still realistic in the modern world? Make a claim and support it with specific reasoning from the book.",
      aceReflection: "Articulate Thoreau's main message about how to live. Connect two of his ideas (such as simplicity and self-reliance). Extend his call to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "Your Own Walden",
      prompt: "Thoreau tested his ideas by actually living them — stripping life down to essentials at the pond and reporting what he learned. Design your own small, realistic experiment in simpler, more deliberate living (for example, a week off social media, a month of buying nothing extra, or daily time outdoors). Describe the experiment, predict what you might learn, and compare it to Thoreau's — including where your modern life makes his ideas harder to follow.",
      format: "A short plan for a simple-living experiment, plus a note on what you expect to learn and where the comparison to Thoreau breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Thoreau means by living 'deliberately' in Walden. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Walden. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in Walden because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Walden: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Thoreau's call to simplify to a modern situation, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether Thoreau's simple living is realistic today for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Walden — its argument for simplicity, self-reliance, and deliberate living, and its roots in Transcendentalism. It focuses on the book's core chapters, never reproduces Thoreau's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#205, 'Walden, and On the Duty of Civil Disobedience') and LibriVox recording are the standard book; note that the Gutenberg edition also contains 'Civil Disobedience.' Verify the link and edition before assigning.",
        "This room is scoped to Walden's core chapters (Economy; Where I Lived, and What I Lived For; Solitude; Conclusion), not the entire book. Adjust for the excerpt your class reads.",
        "Walden is in the public domain. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "Details here come from the book (the self-built cabin; the bean-field; Walden Pond; the borrowed axe; the 'Economy' accounting; the nearby railroad; the 'different drummer' conclusion). Confirm against your edition.",
        "Thoreau's 'solitude' was partial — he lived near Concord and had visitors, and used land he did not own. Teachers may wish to discuss this honestly alongside his ideals.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-purpose and craft, and multiple-genre (informational/argumentative) strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.4", "RI.11-12.4", "RI.9-10.5", "RI.9-10.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
