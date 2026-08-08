/* PlotPoint — The Autobiography of Benjamin Franklin, Part One.  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts from Part One (boyhood
   in Boston through establishing his Philadelphia printing business); standards codes
   are only those given by the build plan (Common Core) — TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "franklin",
  storageKey: "plotpoint.franklin.v1",

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
    "vocab.title": "Words for Franklin's Autobiography",
    "vocab.intro": "{n} terms that unlock the book. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Printer's Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object, person, or idea?",
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
    "ctob.title": "The Case of the Runaway Printer",
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
    "arcade.title": "Road to Success, or Path to Ruin?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Habits to weigh",
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
    "extend.title": "Your Own Self-Improvement Project",
    "extend.format": "Format",
    "extend.evidence": "The idea from Franklin I am building on",
    "extend.transfers": "What transfers to a modern plan",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My self-improvement plan",
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
    "print.item.extend": "Self-improvement organizer",
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
      title: "The Autobiography of Benjamin Franklin",
      author: "Benjamin Franklin",
      grades: "Grades 9–12",
      genre: "Nonfiction · Autobiography · Enlightenment",
      time: "60–90 minutes",
      spoiler: "No plot to spoil",
      rights: "Public domain (written 1771; first published 1791)",
      textAccess: "This is a public-domain book; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "Written beginning in 1771 and long in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A colonial-era autobiography suitable for grades 9–12. This room focuses on Part One (Franklin's boyhood in Boston through founding his Philadelphia printing business), not the whole work. Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/148",
      audio: "https://librivox.org/the-autobiography-of-benjamin-franklin-by-benjamin-franklin/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Franklin's Autobiography — a colonial printing press, three bread rolls, an inkpot and quill, and a candle."
    },
    hook: "A boy with almost no schooling teaches himself to write, runs away from his brother's print shop, and walks into a strange city with a few coins and three rolls of bread. Benjamin Franklin's Autobiography (Part One) is the story of how industry, thrift, and relentless self-improvement turned that runaway into a self-made success.",
    goals: [
      "Analyze how Franklin tells his own rise (Part One) as a model of the self-made man built on industry, frugality, and self-education.",
      "Interpret the Autobiography as an Enlightenment text that prizes reason, useful knowledge, and practical virtue.",
      "Evaluate the habits Franklin credits for his success and the ones he warns against.",
      "Connect Franklin's method of deliberate self-improvement to a modern situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: colonial Boston and Philadelphia in the early 1700s, where Franklin learned the printing trade.",
        "Discuss: Can a person truly 'make themselves' through hard work and self-improvement? What helps, and what gets in the way?"
      ],
      during: [
        "Use the Relic Room to examine one object, person, or idea at a time. This room focuses on Part One.",
        "Track the habits Franklin says built his success, and how he presents himself as a model to imitate."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh Franklin's road to success against the habits he warns against.",
        "Complete the Extend task to design your own Franklin-style self-improvement plan."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Franklin says he rose from a poor runaway to a successful printer. Include one detail from Part One that shows a habit he credits." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Franklin's values (for example, industry and frugality, or self-education and reputation). Explain how they reinforce each other in his story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Franklin's method of deliberate self-improvement to a modern goal. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "autobiography", def: "A book in which a person tells the story of their own life.", example: "Franklin writing the tale of his own rise.", nonexample: "A biography written about someone else by another author.", context: "Franklin's autobiography tells the story of his own life." },
      { term: "industry", def: "Steady, hard, diligent work.", example: "Working late and being seen hard at your craft.", nonexample: "Idling and putting off every task.", context: "Franklin credits his rise to industry — steady, hard work." },
      { term: "frugality", def: "Being careful with money and avoiding waste.", example: "Spending little so you can save and invest.", nonexample: "Wasting money to look impressive.", context: "He preaches frugality: spend little and waste nothing." },
      { term: "apprentice", def: "A young person bound to learn a trade from a master.", example: "A boy set to learn printing in his brother's shop.", nonexample: "An owner who employs many trained workers.", context: "As a boy, Franklin worked as an apprentice in his brother's print shop." },
      { term: "pseudonym", def: "A false name a writer uses instead of their own.", example: "Signing essays 'Silence Dogood' rather than 'Franklin.'", nonexample: "Publishing under your own legal name.", context: "Young Franklin wrote under the pseudonym 'Silence Dogood.'" },
      { term: "self-education", def: "Teaching oneself, mainly through reading and practice, without formal schooling.", example: "Learning to write well by studying good essays alone.", nonexample: "Relying only on a teacher and never reading on your own.", context: "Franklin's self-education came from reading every book he could find." },
      { term: "virtue", def: "A good habit or quality of character, practiced on purpose.", example: "Building honesty into a daily habit.", nonexample: "Doing right only by accident, now and then.", context: "Franklin treats each virtue as a habit that can be practiced." },
      { term: "temperance", def: "Moderation and self-control, especially in food and drink.", example: "Eating and drinking in measured amounts.", nonexample: "Overindulging without any restraint.", context: "He praises temperance — moderation in food and drink." },
      { term: "reputation", def: "The general opinion others hold of a person's character.", example: "Being known as reliable and honest in business.", nonexample: "Being distrusted for breaking your word.", context: "Franklin carefully guarded his reputation for honesty and reliability." },
      { term: "perseverance", def: "Steady persistence in a course of action despite difficulty.", example: "Pushing on through early debts and setbacks.", nonexample: "Quitting at the first obstacle.", context: "His perseverance carried him through early failures and debts." },
      { term: "Enlightenment", def: "An 18th-century movement that prized reason, science, and human improvement.", example: "Trusting reason and useful knowledge to better society.", nonexample: "Accepting every claim on authority alone.", context: "Franklin is a leading figure of the Enlightenment, an age that prized reason." }
    ],

    relic: {
      name: "The Printer's Archive",
      intro: "Seven instructional reconstructions of the objects, people, and ideas through which Franklin's Autobiography (Part One) reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "rolls", name: "The Three Puffy Rolls", image: "images/rolls.webp",
          clues: ["A hungry runaway arrives in a new city with almost nothing.", "He buys three big rolls and walks the street eating one, a roll under each arm.", "It is one of the most famous humble beginnings in American writing."],
          identify: { q: "What does this reconstruct?", choices: ["Franklin's humble arrival in Philadelphia, eating a roll", "Franklin's grand mansion", "A royal banquet in London", "Franklin's printing press"] },
          purpose: { q: "Why does Franklin include this scene?", choices: ["To show how low he started, before his rise", "To prove he was born wealthy", "To describe a fancy dinner party", "To advertise a bakery"] },
          significance: { q: "What is its significance?", choices: ["The image marks the humble bottom of a classic self-made rise", "It proves Franklin never struggled", "It has no meaning", "It ends the book"] },
          reveals: "How little Franklin began with — the contrast that makes his later success striking.",
          conceals: "It downplays the luck and help he also received; the 'self-made' story is partly shaped for effect.",
          ace: "Articulate the rolls scene; connect it to the self-made-man theme; extend it to how a humble start can frame a success story."
        },
        {
          id: "press", name: "The Printing Press", image: "images/press.webp",
          clues: ["Franklin learned the printing trade as a boy and mastered it young.", "The press was his ladder from poverty to independence.", "Through it he printed newspapers, pamphlets, and his own writing."],
          identify: { q: "What is this?", choices: ["The printing press, Franklin's trade and path to independence", "A farmer's plow", "A ship's wheel", "A blacksmith's anvil"] },
          purpose: { q: "What did the press give Franklin?", choices: ["A skilled trade that made him independent and influential", "A way to avoid work", "A title of nobility", "A large inheritance"] },
          significance: { q: "What is its significance?", choices: ["Mastery of a useful trade drives Franklin's rise and his spread of ideas", "It proves trades are worthless", "It has no meaning", "It ends Part One"] },
          reveals: "That Franklin's success rests on a real, learned skill — not on rank or inheritance.",
          conceals: "It hides how hard the labor was, smoothing the daily grind into a tidy success story.",
          ace: "Articulate what the press meant to Franklin; connect the trade to self-reliance; extend it to how a skill can open doors today."
        },
        {
          id: "dogood", name: "The Silence Dogood Letters", image: "images/dogood.webp",
          clues: ["A teenage apprentice wants to write for his brother's newspaper.", "Knowing his brother would refuse, he slips letters under the door in secret.", "He signs them with a made-up name: 'Silence Dogood.'"],
          identify: { q: "What are these?", choices: ["The anonymous 'Silence Dogood' letters young Franklin wrote", "Franklin's business contracts", "Letters from the king", "Franklin's will"] },
          purpose: { q: "Why did Franklin write them in secret?", choices: ["To get his writing published when his brother would not allow it", "To commit a crime", "To insult the town", "To advertise the print shop"] },
          significance: { q: "What is their significance?", choices: ["They show Franklin's early cleverness and his self-taught skill as a writer", "They prove Franklin could not write", "They have no meaning", "They end the book"] },
          reveals: "Franklin's wit, ambition, and self-taught craft — visible before he was even grown.",
          conceals: "It hides the tension with his brother James, whose harsh treatment helped push Franklin to run away.",
          ace: "Articulate what the Dogood letters show; connect them to self-education; extend it to how young people find ways to be heard."
        },
        {
          id: "books", name: "The Books He Taught Himself From", image: "images/books.webp",
          clues: ["With little formal schooling, Franklin educated himself by reading.", "He borrowed, bought, and traded for every book he could get.", "He studied good writing closely to teach himself to write well."],
          identify: { q: "What do these represent?", choices: ["The books through which Franklin taught himself", "A library he never used", "A stack of blank paper", "Schoolbooks assigned by a teacher"] },
          purpose: { q: "What was their purpose for Franklin?", choices: ["To give him, by self-study, the education he lacked in school", "To decorate his shop", "To sell for quick money", "To prove he was rich"] },
          significance: { q: "What is their significance?", choices: ["Self-education by reading is central to Franklin's rise and his Enlightenment ideals", "They prove reading is useless", "They have no meaning", "They end Part One"] },
          reveals: "That Franklin's mind was largely self-made — schooled by books, not classrooms.",
          conceals: "It leaves out how unusual his drive was; not every reader turns reading into such a rise.",
          ace: "Articulate how Franklin used books; connect self-education to the Enlightenment; extend it to how anyone can learn beyond the classroom."
        },
        {
          id: "junto", name: "The Junto", image: "images/junto.webp",
          clues: ["Franklin forms a small club of tradesmen and thinkers.", "They meet to debate ideas and improve themselves and their town.", "The group shares books and plans useful projects together."],
          identify: { q: "What is the Junto?", choices: ["Franklin's club for mutual improvement and useful projects", "A gambling house", "A royal court", "A military unit"] },
          purpose: { q: "What was its purpose?", choices: ["To help members improve their minds and serve their community", "To make members lazy", "To seize power", "To avoid all work"] },
          significance: { q: "What is its significance?", choices: ["The Junto shows Franklin's belief in self-improvement joined to civic good", "It proves clubs are pointless", "It has no meaning", "It ends the book"] },
          reveals: "Franklin's conviction that people better themselves best together, in service of the common good.",
          conceals: "It simplifies the mix of ambition and idealism behind Franklin's civic projects.",
          ace: "Articulate what the Junto did; connect self-improvement to civic good; extend it to how a group can help people grow."
        },
        {
          id: "ledger", name: "Frugality and the Account Book", image: "images/ledger.webp",
          clues: ["Franklin watches every penny in his early years.", "He avoids drink and waste while his fellow workers spend freely.", "Careful saving lets him invest in his own business."],
          identify: { q: "What does this represent?", choices: ["Franklin's careful, frugal management of money", "A record of his gambling debts", "A king's treasury", "A shopping list of luxuries"] },
          purpose: { q: "What did frugality do for Franklin?", choices: ["It let him save, stay free of debt, and build his own shop", "It made him miserly and friendless", "It kept him poor forever", "It had no effect"] },
          significance: { q: "What is its significance?", choices: ["Frugality is one of the core habits Franklin credits for his rise", "It proves saving is pointless", "It has no meaning", "It ends Part One"] },
          reveals: "That Franklin turned thrift into freedom — money not wasted became money to invest.",
          conceals: "It hides how frugality, pushed hard, can shade into the very self-interest Franklin also warns about.",
          ace: "Articulate how Franklin managed money; connect frugality to independence; extend it to how spending habits shape a life."
        },
        {
          id: "letter", name: "The Letter to His Son", image: "images/letter.webp",
          clues: ["Franklin begins the Autobiography as a letter to his son.", "He says he writes to pass on the story of his life and its lessons.", "The frame turns his memoir into fatherly advice."],
          identify: { q: "How does Franklin frame the Autobiography?", choices: ["As a letter to his son, sharing his life and its lessons", "As a novel about strangers", "As a business report", "As a scientific paper"] },
          purpose: { q: "Why does this frame matter?", choices: ["It turns Franklin's life story into practical advice for a reader to imitate", "It hides who wrote the book", "It proves the book is fiction", "It ends the story"] },
          significance: { q: "What is its significance?", choices: ["The 'advice to a son' frame shapes the whole book as a guide to self-improvement", "It proves Franklin had no son", "It has no meaning", "It ends Part One"] },
          reveals: "That Franklin means his story to be useful — a model others can copy, not just a record.",
          conceals: "It softens how carefully Franklin curates his image; the 'honest advice' is also self-presentation.",
          ace: "Articulate why Franklin frames the book as a letter; connect the frame to its purpose; extend it to how the intended reader shapes any story."
        }
      ]
    },

    ctob: {
      name: "The Case of the Runaway Printer",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "At about what age did the young Franklin run away from his brother's shop to seek his fortune? Enter the number.",
          evidence: ["He was apprenticed to his older brother as a boy.", "Unhappy under his brother's harsh treatment, he fled.", "He was a youth of about seventeen when he ran."],
          hints: ["He was a teenager, not a small child.", "He was three years past fourteen.", "The number is 17."],
          answer: "17"
        },
        {
          type: "word",
          prompt: "To which city did the young Franklin run away and build his fortune as a printer? (one word)",
          evidence: ["He arrived there hungry, buying rolls of bread.", "He set up as a printer and rose to success.", "The city's name begins with 'Phila-.'"],
          hints: ["It is a major city in Pennsylvania.", "It begins with 'Phila…'.", "The city is Philadelphia."],
          answer: "Philadelphia"
        },
        {
          type: "word",
          prompt: "Young Franklin secretly published letters signed 'Silence ____.' What was that made-up surname? (one word)",
          evidence: ["He slipped anonymous letters under his brother's door.", "He signed them with the pen name Silence ____.", "The surname begins with 'Do-.'"],
          hints: ["The pen name suggests doing good.", "It begins with 'Do…'.", "The surname is Dogood."],
          answer: "Dogood"
        },
        {
          type: "mc",
          prompt: "Franklin frames his Autobiography mainly as —",
          options: [
            "a letter to his son, recounting his rise and the lessons he learned.",
            "a novel about invented characters.",
            "a business contract.",
            "a scientific report on electricity."
          ],
          hints: ["Think about who Franklin says he is writing for.", "Which option is about advice to his son?"]
        },
        {
          type: "sequence",
          prompt: "Put these events of Part One in order, earliest first.",
          items: [
            "Young Franklin is apprenticed to his brother James, a Boston printer.",
            "He secretly writes letters as 'Silence Dogood' for the newspaper.",
            "He runs away and arrives hungry in Philadelphia.",
            "Through industry and frugality, he builds his own printing business."
          ],
          hints: ["The apprenticeship comes first.", "The Dogood letters come before he runs away.", "Building his own business comes last."]
        },
        {
          type: "mc",
          prompt: "The main lesson Franklin draws from his own rise is that —",
          options: [
            "hard work, thrift, and self-education can lift a person from humble beginnings.",
            "luck and noble birth decide everything.",
            "wealth requires no effort at all.",
            "education is a waste of time."
          ],
          hints: ["Think about the habits Franklin keeps praising.", "Which option is about industry, thrift, and learning?"]
        }
      ]
    },

    arcade: {
      name: "Road to Success, or Path to Ruin?",
      instruction: "Throughout Part One, Franklin praises some habits as the road to success and warns against others as the path to ruin. Sort each habit by how Franklin presents it: part of his road to success, or a habit he warns against. There is room to argue, but sort by his reasoning. Thoughtful sorting earns the points.",
      buckets: [
        { id: "success", label: "Franklin's road to success", short: "Success" },
        { id: "ruin", label: "A habit he warns against", short: "Ruin" }
      ],
      cards: [
        { text: "Working hard and being seen diligently at your craft.", bucket: "success", why: "Franklin makes industry the foundation of his rise." },
        { text: "Reading every book you can to educate yourself.", bucket: "success", why: "Self-education is one of the habits Franklin credits most." },
        { text: "Spending little and saving to invest in your work.", bucket: "success", why: "Frugality freed Franklin to build his own business." },
        { text: "Keeping your word and earning a name for reliability.", bucket: "success", why: "A solid reputation was central to Franklin's success." },
        { text: "Spending wages on drink like the other workers.", bucket: "ruin", why: "Franklin points to drink and waste as habits that hold people back." },
        { text: "Idling and putting off the work in front of you.", bucket: "ruin", why: "Idleness is the enemy of the industry Franklin preaches." },
        { text: "Picking pointless quarrels and making enemies.", bucket: "ruin", why: "Franklin learns to avoid needless conflict that harms one's name." },
        { text: "Living beyond your means to appear impressive.", bucket: "ruin", why: "Extravagance is exactly the waste Franklin's frugality resists." }
      ],
      followup: "Franklin turns his own life into a how-to guide for success. Using specific habits, argue how much of his rise came from these habits — and how much from luck, help, and timing he mentions less."
    },

    analysis: {
      mcq: [
        {
          q: "The Autobiography of Benjamin Franklin is —",
          options: [
            "a nonfiction account of Franklin's own life, addressed partly to his son.",
            "a novel with invented characters and a plot.",
            "a collection of poems.",
            "a play for the stage."
          ],
          why: "Franklin tells his own true story, framed as advice to his son."
        },
        {
          q: "Franklin presents himself throughout as a model of —",
          options: [
            "the self-made man who rises through industry and self-improvement.",
            "a nobleman who inherits his wealth.",
            "a soldier who wins fame in battle.",
            "an idler who succeeds by luck alone."
          ],
          why: "Part One is the classic story of rising from humble beginnings through effort."
        },
        {
          q: "The 'Silence Dogood' letters mainly show young Franklin's —",
          options: [
            "cleverness and his self-taught skill as a writer.",
            "wealth and noble birth.",
            "lack of any interest in writing.",
            "career as a soldier."
          ],
          why: "Sneaking witty letters into the paper reveals talent Franklin built himself."
        },
        {
          q: "Franklin repeatedly credits his success to —",
          options: [
            "diligence, frugality, and constant self-education.",
            "gambling and taking big risks.",
            "avoiding all work.",
            "his family's fortune."
          ],
          why: "Industry, thrift, and reading are the habits he returns to again and again."
        },
        {
          q: "As an Enlightenment figure, Franklin especially values —",
          options: [
            "reason, practical improvement, and useful knowledge.",
            "blind obedience to authority.",
            "superstition over evidence.",
            "idleness and luxury."
          ],
          why: "Franklin trusts reason and prizes knowledge that improves life and society."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops one of Franklin's ideas (self-making, industry, frugality, or self-education).",
        "Explain how Franklin uses his own life story as a guide for others. What does he want his reader to imitate?",
        "Franklin credits certain habits for his rise. Using specific reasoning, decide whether those habits are enough to explain success, or whether luck and help also matter."
      ],
      paragraph: "Write an evidence-based paragraph. Is Franklin's 'self-made man' ideal fair and realistic today? Make a claim and support it with specific reasoning from Part One.",
      aceReflection: "Articulate Franklin's main message about how to rise in life. Connect two of his values (such as industry and frugality). Extend his self-improvement method to a modern goal, and name where the comparison breaks down."
    },

    extend: {
      name: "Your Own Self-Improvement Project",
      prompt: "Franklin turned self-improvement into a deliberate project — choosing habits to build and tracking his progress. Choose one habit or skill you want to build (for example, focus, fitness, kindness, or a study routine). Design a short Franklin-style plan: name the habit, set a simple daily practice, decide how you will track it, and predict the obstacles. Then compare your plan to Franklin's approach — including where his colonial world and yours differ.",
      format: "A short self-improvement plan (habit, daily practice, tracking, obstacles), plus a note comparing it to Franklin's method and where the comparison breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Franklin says he rose from a poor runaway to a successful printer in his Autobiography. Do not answer for me. Ask me one question at a time that helps me explain his rise in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Franklin's Autobiography. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [value one] connects to [value two] in Franklin's Autobiography because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Franklin's Autobiography: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Franklin's method of deliberate self-improvement to a modern goal, [goal]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether Franklin's self-made ideal is realistic today for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of The Autobiography of Benjamin Franklin, Part One — its self-made-man narrative, its Enlightenment values, and the habits Franklin credits for his rise. It never reproduces Franklin's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#148) and LibriVox recording are the standard Autobiography; verify the link and edition before assigning.",
        "This room is scoped to Part One (boyhood in Boston through founding the Philadelphia printing business). Franklin's famous chart of thirteen virtues appears in Part Two; if your class studies it, note that it is beyond this room's scope.",
        "The Autobiography is in the public domain. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "Details here come from Part One (the runaway to Philadelphia; the three rolls; the Silence Dogood letters; self-education by reading; the Junto; frugality; the letter-to-his-son frame). Confirm against your edition.",
        "Encourage students to read Franklin critically: his 'self-made' story is also carefully shaped self-presentation, and it downplays the help, luck, and privilege he also received.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-purpose and craft, and multiple-genre (informational/autobiography) strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.3", "RI.9-10.4", "RI.9-10.6", "RI.11-12.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
