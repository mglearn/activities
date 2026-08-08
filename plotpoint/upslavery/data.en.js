/* PlotPoint — Up from Slavery (Booker T. Washington).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts from the 1901
   autobiography; standards codes are only those given by the build plan (Common
   Core) — TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every choices/options
   array; the engine shuffles. */
window.__ROOM__ = {
  id: "upslavery",
  storageKey: "plotpoint.upslavery.v1",

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
    "vocab.title": "Words for Up from Slavery",
    "vocab.intro": "{n} terms that unlock the book. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Tuskegee Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object, place, or person?",
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
    "ctob.title": "The Case of the Long Road to School",
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
    "arcade.title": "A Help on the Way Up, or an Obstacle Overcome?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Moments to weigh",
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
    "extend.title": "Cast Down Your Bucket",
    "extend.format": "Format",
    "extend.evidence": "The idea from Washington I am building on",
    "extend.transfers": "What transfers to a modern setting",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My plan and my response to the debate",
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
    "print.item.extend": "Self-help-and-debate organizer",
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
      title: "Up from Slavery",
      author: "Booker T. Washington",
      grades: "Grades 9–12",
      genre: "Nonfiction · Autobiography · American history",
      time: "60–90 minutes",
      spoiler: "No plot to spoil",
      rights: "Public domain (1901)",
      textAccess: "This is a public-domain book; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1901 and long in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "An autobiography that recounts slavery, poverty, and the struggle for education, and raises debated questions about race, rights, and self-help. Suitable for grades 9–12; teach the historical debate critically. Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2376",
      audio: "https://librivox.org/up-from-slavery-from-booker-t-washington/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Up from Slavery — a worn spelling book, a broom, a hand-molded brick, and a small schoolhouse at dawn."
    },
    hook: "Born into slavery and freed as a child, Booker T. Washington hungered for one thing above all: an education. He worked in mines, swept his way into a school, and built a college brick by brick. Up from Slavery is his account of that rise — and of a debated idea about how a whole people might rise with him.",
    goals: [
      "Analyze how Washington narrates his rise from slavery through education, labor, and self-reliance.",
      "Interpret his argument for industrial education, thrift, and the 'dignity of labor,' including the 'cast down your bucket' image.",
      "Evaluate the central debate his approach raises: self-help and patience versus an immediate demand for full civil and political rights.",
      "Connect Washington's ideas to a modern situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: the American South from slavery through the decades after the Civil War.",
        "Discuss: What helps a person, or a whole community, rise after great injustice? Is it enough to work hard, or must you also demand your rights?"
      ],
      during: [
        "Use the Relic Room to examine one object, place, or person at a time.",
        "Track what helps Washington rise and what he must overcome, and notice how he frames education and labor."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh Washington's rise and the debate his ideas raise.",
        "Complete the Extend task to apply his 'cast down your bucket' idea and respond to his critics."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Washington rose 'up from slavery.' Include one detail from the book that shows a habit or value he credits." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Washington's values (for example, education and self-reliance, or labor and dignity). Explain how they reinforce each other in his story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Washington's idea of 'casting down your bucket where you are' to a modern goal or community. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "emancipation", def: "The act of setting people free, especially freeing enslaved people.", example: "Enslaved people being declared free at the end of the Civil War.", nonexample: "Keeping people in bondage against their will.", context: "At emancipation, Washington and the other enslaved people were finally set free." },
      { term: "autobiography", def: "A book in which a person tells the story of their own life.", example: "Washington writing the story of his own rise.", nonexample: "A book about someone else written by another author.", context: "Washington's autobiography traces his rise from slavery." },
      { term: "industrial education", def: "Schooling that teaches practical trades and useful skills, not only books.", example: "Learning bricklaying, farming, or carpentry at school.", nonexample: "Studying only abstract theory with no practical training.", context: "Washington championed industrial education — training in useful trades." },
      { term: "self-reliance", def: "Depending on one's own effort and resources.", example: "Working and saving to build your own future.", nonexample: "Waiting for others to provide everything.", context: "He preached self-reliance: lift yourself through your own effort." },
      { term: "dignity of labor", def: "The idea that honest work of any kind is worthy of respect.", example: "Taking pride in building a wall or plowing a field.", nonexample: "Looking down on people who work with their hands.", context: "Building the school by hand taught students the dignity of labor." },
      { term: "perseverance", def: "Steady persistence through hardship and setbacks.", example: "Pushing on toward school despite poverty.", nonexample: "Giving up at the first difficulty.", context: "His perseverance carried him from the coal mines to a college of his own." },
      { term: "thrift", def: "Careful, wise use of money and resources.", example: "Saving small sums to invest in something lasting.", nonexample: "Spending everything the moment you earn it.", context: "Washington urged thrift — saving and spending wisely." },
      { term: "uplift", def: "The effort to raise a community's condition, education, and standing.", example: "Founding schools to help a whole people advance.", nonexample: "Ignoring the needs of one's community.", context: "His life's work was the uplift of his people through education." },
      { term: "accommodation", def: "Adjusting to existing conditions rather than openly demanding change.", example: "Focusing on economic progress while postponing protest.", nonexample: "Immediately and openly demanding full equal rights.", context: "Critics called Washington's patient approach a kind of accommodation." },
      { term: "mentor", def: "An experienced guide who advises and supports another.", example: "A school leader who shapes a young student's path.", nonexample: "A stranger who offers no guidance at all.", context: "General Armstrong became Washington's mentor at Hampton." },
      { term: "oratory", def: "The skill of powerful, persuasive public speaking.", example: "Moving a huge crowd with a carefully built speech.", nonexample: "Mumbling a few words no one can follow.", context: "Washington's powerful oratory made him famous after his Atlanta speech." }
    ],

    relic: {
      name: "The Tuskegee Archive",
      intro: "Seven instructional reconstructions of the objects, places, and people through which Up from Slavery reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "plantation", name: "The Virginia Plantation", image: "images/plantation.webp",
          clues: ["Washington is born into slavery on a plantation in Virginia.", "As a small child he has no schooling and little of his own.", "Freedom comes to him only with the end of the Civil War."],
          identify: { q: "What does this reconstruct?", choices: ["The Virginia plantation where Washington was born into slavery", "Washington's college campus", "A grand city mansion", "A Northern factory"] },
          purpose: { q: "Why does Washington begin here?", choices: ["To show the depth of the poverty and bondage he started from", "To prove he was born wealthy", "To describe a happy childhood home", "To advertise a plantation"] },
          significance: { q: "What is its significance?", choices: ["The lowest starting point makes the whole 'up from slavery' rise meaningful", "It proves slavery was harmless", "It has no meaning", "It ends the book"] },
          reveals: "The bondage and poverty that make Washington's later climb so striking.",
          conceals: "It compresses the cruelty of slavery; Washington often writes calmly, understating the horror for his own reasons.",
          ace: "Articulate where Washington's story begins; connect his start to the book's title; extend it to why a starting point matters in a life story."
        },
        {
          id: "book", name: "The First Spelling Book", image: "images/book.webp",
          clues: ["As a boy, Washington is desperate to learn to read.", "He gets hold of a worn spelling book and studies the letters.", "Learning to read becomes the first step of his long climb."],
          identify: { q: "What is this?", choices: ["The spelling book from which Washington taught himself to read", "A college diploma", "A plantation record", "A newspaper"] },
          purpose: { q: "What does it represent?", choices: ["Washington's burning hunger for education", "A gift he ignored", "A book he could not use", "A trophy for wealth"] },
          significance: { q: "What is its significance?", choices: ["Reading is the first rung on Washington's ladder up from slavery", "It proves reading is useless", "It has no meaning", "It ends the book"] },
          reveals: "How central the simple act of learning to read is to Washington's whole story.",
          conceals: "It hides how rare and hard-won such learning was for the formerly enslaved.",
          ace: "Articulate why the spelling book matters; connect it to the theme of education; extend it to how access to learning shapes a life."
        },
        {
          id: "mines", name: "The Salt Furnaces and Coal Mines", image: "images/mines.webp",
          clues: ["As a boy, Washington works long, hard hours in salt furnaces and coal mines.", "The labor is exhausting and dangerous.", "Even so, he keeps trying to snatch time and means to study."],
          identify: { q: "What does this reconstruct?", choices: ["The salt furnaces and coal mines where the boy Washington labored", "A schoolroom", "A church picnic", "A college laboratory"] },
          purpose: { q: "What do these jobs show?", choices: ["The grinding poverty and labor Washington had to overcome to learn", "That Washington avoided work", "That mining made him rich", "That school was easy to reach"] },
          significance: { q: "What is its significance?", choices: ["The hard labor is an obstacle that makes his pursuit of school heroic", "It proves education is pointless", "It has no meaning", "It ends the book"] },
          reveals: "The obstacles of poverty and exhausting work that Washington pushes through to reach an education.",
          conceals: "It downplays how many others, just as able, never got Washington's chance to escape such labor.",
          ace: "Articulate what the mines meant for Washington; connect the labor to perseverance; extend it to how circumstances can block or test a dream."
        },
        {
          id: "broom", name: "The Broom and the Sweeping Test", image: "images/broom.webp",
          clues: ["Washington arrives at Hampton Institute travel-worn and poor.", "To be admitted, he is told to clean a room.", "He sweeps and dusts it so thoroughly that it becomes his entrance exam."],
          identify: { q: "What does this reconstruct?", choices: ["Washington's 'entrance exam' — sweeping a room spotlessly at Hampton", "A written Latin test", "A payment of tuition", "A family recommendation"] },
          purpose: { q: "What does the sweeping test show?", choices: ["That thoroughness and honest work could open a door for Washington", "That the school was cruel", "That Washington cheated", "That he was already rich"] },
          significance: { q: "What is its significance?", choices: ["The broom test embodies Washington's belief in the dignity and value of careful work", "It proves cleaning is worthless", "It has no meaning", "It ends the book"] },
          reveals: "Washington's conviction that honest, thorough labor earns respect and opportunity.",
          conceals: "It turns a system that demanded so much of him into a tidy lesson; not every door opened so fairly.",
          ace: "Articulate the sweeping test; connect it to the dignity of labor; extend it to how effort and reliability can open doors today."
        },
        {
          id: "armstrong", name: "General Armstrong and Hampton Institute", image: "images/armstrong.webp",
          clues: ["Hampton Institute trains Black students in academics and useful trades.", "Its leader, General Armstrong, guides and inspires Washington.", "Washington works as a janitor to pay his way through."],
          identify: { q: "Who and what is this?", choices: ["General Armstrong and Hampton Institute, where Washington studied", "A plantation owner and his farm", "A factory boss and his mill", "A senator and his office"] },
          purpose: { q: "What did Hampton give Washington?", choices: ["An education, a model for a school, and a guiding mentor", "A large inheritance", "A political office", "A life of ease"] },
          significance: { q: "What is its significance?", choices: ["Hampton and Armstrong shape Washington's whole philosophy of education", "They prove mentors do not matter", "It has no meaning", "It ends the book"] },
          reveals: "How a school and a mentor turned Washington's hunger to learn into a life's mission.",
          conceals: "It presents Hampton's approach approvingly; its emphasis on trades was later debated by other Black leaders.",
          ace: "Articulate what Hampton and Armstrong gave Washington; connect mentorship to his rise; extend it to how a guide can shape a person's path."
        },
        {
          id: "bricks", name: "The Tuskegee Bricks", image: "images/bricks.webp",
          clues: ["Washington founds Tuskegee Institute in Alabama with almost nothing.", "The students themselves make the bricks and build the school.", "Failed batches teach them to try again until the bricks hold."],
          identify: { q: "What do these bricks represent?", choices: ["The bricks Tuskegee's students made to build their own school", "Bricks bought from a distant city", "A pile of rubble", "Decorations for a mansion"] },
          purpose: { q: "Why did students make the bricks themselves?", choices: ["To learn a trade and the dignity of labor while building the school", "Because bricks were free", "To avoid studying", "To sell for profit"] },
          significance: { q: "What is its significance?", choices: ["Building the school by hand embodies Washington's 'learning by doing' and dignity of labor", "It proves manual work is shameful", "It has no meaning", "It ends the book"] },
          reveals: "Washington's core method: students learn useful skills and self-respect by building something real.",
          conceals: "It idealizes the labor; the same emphasis on trades over higher learning was exactly what critics questioned.",
          ace: "Articulate why the students made the bricks; connect the work to dignity of labor and learning by doing; extend it to how making something teaches us."
        },
        {
          id: "bucket", name: "Cast Down Your Bucket", image: "images/bucket.webp",
          clues: ["In a famous speech, Washington tells of a ship's crew dying of thirst.", "A passing ship signals them to 'cast down your bucket where you are.'", "They draw up fresh water — they were near a river's mouth all along."],
          identify: { q: "What is this image?", choices: ["Washington's 'cast down your bucket where you are' metaphor", "A shipwreck story with no meaning", "A recipe for water", "A sailor's map"] },
          purpose: { q: "What does the metaphor urge?", choices: ["To make the most of the opportunities in your present situation", "To abandon all effort", "To flee your community", "To wait for rescue and do nothing"] },
          significance: { q: "What is its significance?", choices: ["The image captures Washington's message of self-help where you are — and the debate it sparked", "It proves speeches are pointless", "It has no meaning", "It ends the book"] },
          reveals: "Washington's counsel to build from present opportunities rather than wait or move on.",
          conceals: "It downplays the injustice of the 'place' people were told to stay in; critics argued rights should not wait.",
          ace: "Articulate the bucket metaphor; connect it to self-reliance; extend it to a modern situation where you must decide whether to build where you are or demand change."
        }
      ]
    },

    ctob: {
      name: "The Case of the Long Road to School",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The young Washington traveled a great distance, largely on foot and by begging rides, to reach Hampton Institute. About how many miles was the journey? Enter the number.",
          evidence: ["He set out with very little money for a school far away.", "He walked, rode, and worked his way across the miles.", "The distance was roughly five hundred miles."],
          hints: ["It was hundreds of miles, not tens.", "It is five times one hundred.", "The number is 500."],
          answer: "500"
        },
        {
          type: "word",
          prompt: "What Alabama school did Washington found and build up from almost nothing? (one word)",
          evidence: ["He started it in a shabby building with few resources.", "Its students made bricks and built its halls themselves.", "The school's name begins with 'Tus-.'"],
          hints: ["It is a famous historically Black college in Alabama.", "It begins with 'Tus…'.", "The school is Tuskegee."],
          answer: "Tuskegee"
        },
        {
          type: "word",
          prompt: "At which Virginia institute did Washington earn his own education, working as a janitor to pay his way? (one word)",
          evidence: ["He was admitted after a test of sweeping a room.", "Its leader, General Armstrong, became his mentor.", "The institute's name begins with 'Hamp-.'"],
          hints: ["It trained Black students in academics and trades.", "It begins with 'Hamp…'.", "The institute is Hampton."],
          answer: "Hampton"
        },
        {
          type: "mc",
          prompt: "Washington earned admission to Hampton mainly by —",
          options: [
            "sweeping and cleaning a room so thoroughly that it became his entrance test.",
            "paying a large admission fee.",
            "passing a written examination in Latin.",
            "a wealthy relative's recommendation."
          ],
          hints: ["Think about the broom and the spotless room.", "Which option is about thorough, honest work?"]
        },
        {
          type: "sequence",
          prompt: "Put these events of Washington's life in order, earliest first.",
          items: [
            "Washington is born into slavery on a Virginia plantation.",
            "After emancipation, he works in salt furnaces and coal mines while longing to learn.",
            "He travels to Hampton Institute and works his way through school.",
            "He founds and builds Tuskegee Institute in Alabama."
          ],
          hints: ["Slavery comes first.", "The mines come before Hampton.", "Founding Tuskegee comes last."]
        },
        {
          type: "mc",
          prompt: "Washington's core message about rising 'up from slavery' is that —",
          options: [
            "education, useful skills, and hard work can lift a people through self-reliance.",
            "only luck and birth decide a person's fate.",
            "wealth comes with no effort at all.",
            "education is a waste of time."
          ],
          hints: ["Think about the habits and values Washington keeps praising.", "Which option is about education, skill, and self-reliance?"]
        }
      ]
    },

    arcade: {
      name: "A Help on the Way Up, or an Obstacle Overcome?",
      instruction: "Washington's story is a climb from slavery to leadership. Sort each moment by its role in that climb: a help that lifted him on his way up, or an obstacle he had to overcome. There is room to argue, but sort by what the book most directly shows. Thoughtful sorting earns the points.",
      buckets: [
        { id: "help", label: "A help on his way up", short: "A help" },
        { id: "obstacle", label: "An obstacle he overcame", short: "Obstacle" }
      ],
      cards: [
        { text: "Learning the alphabet and teaching himself to read from a worn spelling book.", bucket: "help", why: "Reading is the first rung on Washington's ladder up." },
        { text: "The Hampton Institute and General Armstrong's mentorship.", bucket: "help", why: "The school and mentor shape his education and his mission." },
        { text: "Sweeping a room spotlessly to earn his place at Hampton.", bucket: "help", why: "Thorough work opens the door to his schooling." },
        { text: "Founding Tuskegee to train others in useful skills.", bucket: "help", why: "Building his own school lets him lift others up too." },
        { text: "Being born into slavery on a Virginia plantation.", bucket: "obstacle", why: "Bondage is the deepest obstacle he must rise above." },
        { text: "Grinding poverty and dangerous labor in the salt furnaces and coal mines.", bucket: "obstacle", why: "Exhausting work stands between the boy and his schooling." },
        { text: "Having almost no school and few books as a child.", bucket: "obstacle", why: "The lack of any real schooling is a barrier he must overcome." },
        { text: "Facing prejudice and hostility as he built Tuskegee.", bucket: "obstacle", why: "Hostility is an obstacle to founding and growing the school." }
      ],
      followup: "Washington turns obstacles into an argument about how to rise. Using specific moments, discuss which helps mattered most — and whether his focus on self-help and patience fully answered the injustices he faced."
    },

    analysis: {
      mcq: [
        {
          q: "Up from Slavery is —",
          options: [
            "Booker T. Washington's autobiography, telling his rise from slavery.",
            "a novel about invented characters.",
            "a collection of poems.",
            "a play for the stage."
          ],
          why: "Washington narrates his own true life story, from slavery to national leadership."
        },
        {
          q: "Washington especially promoted —",
          options: [
            "industrial education and economic self-reliance for Black Americans.",
            "abandoning all schooling.",
            "moving everyone to the North.",
            "inherited wealth as the only path."
          ],
          why: "He argued that useful trades, thrift, and self-reliance were a path to advancement."
        },
        {
          q: "The 'cast down your bucket where you are' image urges people to —",
          options: [
            "make the most of the opportunities in their present situation.",
            "give up and do nothing.",
            "leave their community at once.",
            "wait passively for rescue."
          ],
          why: "The parable tells the thirsty crew that fresh water — opportunity — is closer than they think."
        },
        {
          q: "A central debate about Washington's approach is whether it —",
          options: [
            "gained ground through self-help but delayed the push for full civil and political rights.",
            "proved that education is useless.",
            "rejected all forms of hard work.",
            "opposed the founding of any schools."
          ],
          why: "Critics such as W. E. B. Du Bois argued Washington's patience conceded too much on rights."
        },
        {
          q: "For Washington, labor and skilled work are presented as —",
          options: [
            "sources of dignity and a path to respect and independence.",
            "shameful tasks to be avoided.",
            "unimportant to real success.",
            "proof that education has failed."
          ],
          why: "He insists that honest, skilled work earns both self-respect and the respect of others."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops one of Washington's ideas (education, self-reliance, dignity of labor, or uplift).",
        "Explain Washington's 'cast down your bucket' message. Using specific reasoning, decide when this advice is wise and when it might not be enough.",
        "A central debate about Washington is whether his focus on self-help and patience was wise for his time, or conceded too much on civil rights. Take a position and support it with specific reasoning."
      ],
      paragraph: "Write an evidence-based paragraph. Was Washington's strategy of self-help and patience the right approach for his era, or did his critics have the stronger case? Make a claim and support it with specific reasoning.",
      aceReflection: "Articulate Washington's central message about rising up from slavery. Connect two of his values (such as education and self-reliance). Extend the 'cast down your bucket' idea to a modern situation, and name where the comparison — and the strategy — breaks down."
    },

    extend: {
      name: "Cast Down Your Bucket",
      prompt: "Washington urged people to 'cast down your bucket where you are' — to build up from present skills and opportunities. His critics answered that people should also demand their full rights, not just work and wait. Choose a modern goal (personal or for a community). Write a short plan for building up 'where you are,' then respond honestly to the critics' view: where does patient self-help make sense, and where must you also push for change?",
      format: "A short 'build where you are' plan, plus a response to the critics' view — where self-help is enough and where demanding change matters."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Booker T. Washington rose 'up from slavery' in his autobiography. Do not answer for me. Ask me one question at a time that helps me explain his rise in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Up from Slavery. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [value one] connects to [value two] in Up from Slavery because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Up from Slavery: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Washington's 'cast down your bucket' idea to a modern situation, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the debate over Washington's self-help strategy for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Up from Slavery — Washington's rise from slavery through education and labor, his philosophy of self-reliance and industrial education, and the historical debate his approach raised. It never reproduces Washington's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#2376) and LibriVox recording are the standard autobiography; verify the link and edition before assigning.",
        "Up from Slavery is in the public domain. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "Teach the central debate honestly: Washington's emphasis on self-help, trades, and patience was influentially challenged by W. E. B. Du Bois and others, who argued for higher education and an immediate demand for civil and political rights. This room raises that debate but does not settle it.",
        "Details here come from the book (birth into slavery; labor in the salt furnaces and coal mines; the long journey and the sweeping test at Hampton; General Armstrong; founding Tuskegee; the 'cast down your bucket' speech). Confirm against your edition.",
        "The subject matter includes slavery, poverty, and racial injustice. Preview for maturity and align with local policy, and pair with additional voices and historical context.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-purpose and argument, and multiple-genre (informational/autobiography) strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.3", "RI.9-10.6", "RI.11-12.6", "RI.9-10.8"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
