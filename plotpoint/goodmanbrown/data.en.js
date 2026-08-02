/* PlotPoint — Young Goodman Brown (Nathaniel Hawthorne, 1835).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain and is studied here AS LITERATURE.
   This room reproduces no full passages; it paraphrases and uses only brief
   public-domain phrases (e.g., Faith's pink ribbons, the cry "My Faith is gone!").
   Standards are good-faith Common Core alignment; TEKS/ELPS flagged "Needs
   review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "goodmanbrown",
  storageKey: "plotpoint.goodmanbrown.v1",

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
    "vocab.title": "Words for Young Goodman Brown",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Forest Path at Night",
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
    "ctob.title": "Dream or Reality?",
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
    "arcade.title": "Signs of Faith or Signs of Sin?",
    "arcade.default": "Sort each detail by what it points toward in the story.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Details to sort",
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
    "extend.title": "When Suspicion Poisons a Life",
    "extend.format": "Format",
    "extend.evidence": "The idea from the story I am building on",
    "extend.transfers": "What transfers to another story or situation",
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
    "print.item.relic": "Forest-path evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Suspicion-and-faith organizer",
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
      title: "Young Goodman Brown",
      author: "Nathaniel Hawthorne",
      grades: "English III",
      genre: "Short story · Dark Romanticism · Allegory",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1835)",
      textAccess: "A short public-domain story; use your class's copy or any public-domain text.",
      copyright: "Written in 1835, Young Goodman Brown is in the public domain. It is studied here as literature — through analysis, paraphrase, and only brief public-domain quotations. This room reproduces no full passages and invents no quotations.",
      contentNote: "Young Goodman Brown appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school); districts must implement no earlier than the 2030–2031 school year. The allegory includes dark themes — a witches' gathering in the forest and a man's loss of faith. It is chilling but not graphic, and is studied here as literature. Preview and align with local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Young Goodman Brown — a dark colonial-era forest path at night, bare twisting trees, a distant firelit clearing, and a fluttering pink ribbon."
    },
    hook: "At sunset in Puritan Salem, young Goodman Brown kisses his wife — aptly named Faith — goodbye and steps into the dark forest to keep one mysterious errand. There he meets a strange traveler with a serpent-shaped staff, and one by one he sees the holiest people in town walking the same shadowed path. By dawn he cannot be sure whether the night was real or a dream — but he is never the same again.",
    goals: [
      "Understand the plot of Hawthorne's allegory and Brown's night journey into the forest.",
      "Analyze the allegory in which Faith is both Brown's wife and his religious faith.",
      "Trace Hawthorne's symbolism, foreshadowing, and the deliberate ambiguity of dream versus reality.",
      "Interpret the story's warning about the corrosive danger of suspecting hidden evil in everyone."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of allegory — when characters and places stand for larger ideas.",
        "Discuss: What might happen to a person who begins to suspect that everyone around them is secretly wicked?"
      ],
      during: [
        "Use The Forest Path at Night to slow down and read Brown's journey, step by step.",
        "Track every symbol — the pink ribbons, the serpent staff, the fire — and each double meaning of the name 'Faith.'"
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the allegory and its ambiguity.",
        "Complete the Extend task to weigh how suspicion can poison a whole life."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how the name 'Faith' works as an allegory in the story. Include one detail from the text that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the falling pink ribbon to Brown's cry 'My Faith is gone!' Explain how that moment links his wife to his religious faith and turns the story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's warning about suspicion to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "allegory", def: "A story whose characters and events stand for larger ideas or truths.", example: "Faith the wife standing for religious faith itself.", nonexample: "A story meant only as literal entertainment.", context: "Young Goodman Brown is a religious and moral allegory." },
      { term: "symbolism", def: "Using an object, person, or image to represent a deeper meaning.", example: "The pink ribbons standing for innocence and faith.", nonexample: "A detail included only for decoration.", context: "Hawthorne fills the forest with symbolism." },
      { term: "ambiguity", def: "Deliberate uncertainty that allows more than one reading.", example: "Whether the witches' meeting was real or only a dream.", nonexample: "A fact the story states plainly and clearly.", context: "The story's central ambiguity is never resolved." },
      { term: "dark romanticism", def: "A 19th-century movement exploring sin, guilt, and evil in the human soul.", example: "Hawthorne's grim view of hidden Puritan sin.", nonexample: "A cheerful tale with no shadow in it.", context: "The story is a landmark of American dark romanticism." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "Faith begging Brown to stay 'this one night.'", nonexample: "A detail with no link to later events.", context: "Hawthorne's foreshadowing warns of trouble ahead." },
      { term: "theme", def: "The central idea or message a work explores.", example: "The danger of suspecting evil in everyone.", nonexample: "The simple subject or setting of a story.", context: "The story's theme concerns lost faith and suspicion." },
      { term: "irony", def: "A gap between appearance and reality, or expectation and outcome.", example: "The 'holy' townspeople secretly walking to a witches' meeting.", nonexample: "Events unfolding exactly as everyone expects.", context: "The forest scenes are heavy with irony." },
      { term: "catechism", def: "A set of religious questions and answers used to teach the faith.", example: "Goody Cloyse, who taught Brown his catechism as a boy.", nonexample: "A game with no religious purpose.", context: "The woman who taught his catechism appears on the dark path." },
      { term: "Sabbath", def: "A holy day of worship and rest; here twisted into an unholy gathering.", example: "The firelit witches' Sabbath deep in the forest.", nonexample: "An ordinary weekday of labor.", context: "The forest gathering is a mockery of a true Sabbath." }
    ],

    relic: {
      name: "The Forest Path at Night",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "ribbons", name: "Faith and the Pink Ribbons", image: "images/ribbons.webp",
          clues: ["Brown's wife is named Faith, and she wears pink ribbons in her cap.", "As he leaves at sunset, she begs him to stay home this one night.", "Her name and her ribbons stand for innocence and religious faith."],
          identify: { q: "Who is Faith, and what does she wear?", choices: ["Brown's wife, who wears pink ribbons in her cap", "A witch who lives in the forest", "The old traveler's daughter", "The minister's servant"] },
          purpose: { q: "What is Faith's role at the start of the story?", choices: ["She is the good, innocent home Brown leaves behind for his errand", "She leads Brown into the forest", "She is a stranger he meets on the road", "She has no importance to the plot"] },
          significance: { q: "Why is the name 'Faith' the story's central allegory?", choices: ["Faith is both his wife and his religious faith — leaving her means risking both", "It is only a common Puritan name", "It shows the family is wealthy", "It hides that she is evil"] },
          reveals: "The double meaning at the heart of the allegory — wife and faith are one.",
          conceals: "How fully Brown will one day come to distrust her.",
          ace: "Articulate who Faith is; connect the pink ribbons to innocence; extend it to how a single name can carry a whole allegory."
        },
        {
          id: "errand", name: "The Errand into the Forest at Night", image: "images/errand.webp",
          clues: ["At sunset Brown steps from the village into a dark, narrow forest path.", "He has a mysterious errand he feels he must keep this one night.", "The gloomy forest closes behind him as he leaves Faith and Salem."],
          identify: { q: "What does Brown set out to do?", choices: ["Keep a mysterious nighttime errand in the dark forest", "Travel to another town to work", "Search for a lost child", "Visit the minister's house"] },
          purpose: { q: "What is the forest journey's role in the story?", choices: ["It is a test — a walk away from faith toward temptation", "It is an ordinary evening stroll", "It is a hunting trip", "It has no meaning"] },
          significance: { q: "What does the dark forest represent?", choices: ["A moral wilderness of temptation and hidden sin", "A safe and peaceful place", "The town's marketplace", "A dream with no danger"] },
          reveals: "The journey as an allegory for a soul's dangerous test.",
          conceals: "Whether Brown ever truly had to go at all.",
          ace: "Articulate what the errand is; connect the forest to temptation; extend it to how a 'journey' can stand for a moral choice."
        },
        {
          id: "traveler", name: "The Traveler with the Serpent Staff", image: "images/traveler.webp",
          clues: ["Deep in the woods Brown meets an older man who strangely resembles him.", "The stranger carries a black staff carved to look like a writhing serpent.", "He seems to know everyone and urges Brown to walk on with him."],
          identify: { q: "Who is the traveler Brown meets in the forest?", choices: ["A devil-figure with a serpent-shaped staff who resembles Brown", "Brown's own father, still living", "A lost hunter", "The town's new minister"] },
          purpose: { q: "What is the traveler's role?", choices: ["He tempts Brown to go deeper and reveals others' hidden sins", "He guides Brown safely home", "He sells Brown supplies", "He warns Brown to turn back"] },
          significance: { q: "What does the serpent staff signify?", choices: ["It marks the traveler as a devil, echoing the serpent of temptation", "It is only a walking stick", "It shows he is a shepherd", "It means he is a doctor"] },
          reveals: "The tempter who walks beside Brown, urging him toward despair.",
          conceals: "Whether the traveler is real or a projection of Brown's own doubt.",
          ace: "Articulate who the traveler is; connect the serpent staff to temptation; extend it to how a companion can embody a person's inner doubt."
        },
        {
          id: "townspeople", name: "The Respected Townspeople on the Path", image: "images/townspeople.webp",
          clues: ["On the dark path Brown recognizes people he believed holy.", "Goody Cloyse, who taught him catechism, and the minister and deacon appear.", "All seem to be traveling to the same secret meeting in the woods."],
          identify: { q: "Whom does Brown see on the forest path?", choices: ["Respected townspeople he thought were holy — his catechism teacher, the minister, the deacon", "Total strangers from another country", "Only wild animals", "His own children"] },
          purpose: { q: "What is their role in the story?", choices: ["Their presence shatters Brown's belief that his neighbors are truly good", "They come to rescue him", "They are lost travelers", "They have no effect on Brown"] },
          significance: { q: "What does seeing them reveal about the story's theme?", choices: ["It exposes hidden sin and hypocrisy beneath a holy surface", "It proves the town is perfectly good", "It shows the forest is empty", "It means Brown is dreaming happily"] },
          reveals: "The story's dark suspicion that even the pious may hide secret sin.",
          conceals: "Whether these visions are truth or only the devil's illusion.",
          ace: "Articulate whom Brown sees; connect their appearance to hypocrisy; extend it to how discovering hidden faults can shake a person's whole worldview."
        },
        {
          id: "faithgone", name: "\"My Faith Is Gone!\"", image: "images/faithgone.webp",
          clues: ["Brown clings to Faith as his last hope of goodness.", "A pink ribbon flutters down from the sky and he hears her voice.", "He cries out 'My Faith is gone!' and rushes on in despair."],
          identify: { q: "What does Brown see and hear at this turning point?", choices: ["A pink ribbon falling and Faith's own voice in the dark air", "A letter from the minister", "A vision of his childhood home", "The sun rising early"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It is the turning point where Brown surrenders to despair", "It is when Brown decides to go home", "It is the story's happy ending", "It is unimportant"] },
          significance: { q: "Why is the cry 'My Faith is gone!' a double meaning?", choices: ["He means both his wife and his religious faith are lost at once", "He is only tired and hungry", "He is describing the weather", "He has lost a physical object he can find again"] },
          reveals: "The exact instant the allegory snaps shut — losing Faith is losing faith.",
          conceals: "Whether Faith herself has truly fallen, or only seems to.",
          ace: "Articulate what Brown sees; connect the falling ribbon to his despair; extend it to how one loss of trust can feel like losing everything."
        },
        {
          id: "sabbath", name: "The Witches' Sabbath in the Firelit Forest", image: "images/sabbath.webp",
          clues: ["Deep in the woods Brown reaches a clearing lit by roaring fire.", "The whole village — saints and sinners alike — is gathered there.", "Faith stands beside him, about to be welcomed into a life of sin."],
          identify: { q: "What does Brown find at the heart of the forest?", choices: ["A firelit gathering where the whole village is welcomed into sin", "A quiet chapel service", "An empty, silent field", "A market fair"] },
          purpose: { q: "What is the gathering's role in the story?", choices: ["It is the climax where Brown believes all goodness is a lie", "It is a friendly town celebration", "It is where Brown is rescued", "It has no importance"] },
          significance: { q: "What does the firelit Sabbath reveal about the story's theme?", choices: ["That the sight of universal sin can destroy a person's faith in everyone", "That the town is entirely innocent", "That the forest is safe", "That Brown has won"] },
          reveals: "The nightmare vision of shared human guilt that breaks Brown.",
          conceals: "Whether the gathering is real or a dream conjured to ruin him.",
          ace: "Articulate what the gathering is; connect it to the theme of hidden sin; extend it to what happens to trust when we imagine everyone is guilty."
        },
        {
          id: "changed", name: "The Changed, Bitter Man", image: "images/changed.webp",
          clues: ["At dawn Brown finds himself alone in the quiet forest.", "He returns to Salem unable to trust anyone's goodness.", "He grows gloomy and suspicious and dies a bitter, broken man."],
          identify: { q: "How does Brown change after that night?", choices: ["He becomes gloomy, distrustful, and unable to believe anyone is truly good", "He becomes joyful and generous", "He forgets the whole night entirely", "He leaves Salem forever"] },
          purpose: { q: "What is this ending's role in the story?", choices: ["It shows the lasting cost of losing faith and suspecting everyone", "It rewards Brown for his journey", "It reunites him happily with Faith", "It explains the witches' plan"] },
          significance: { q: "What does Brown's ruined life reveal about the story's warning?", choices: ["That suspecting evil in everyone can poison a whole life, whether or not the vision was real", "That the forest gave him wisdom", "That revenge is satisfying", "That faith cannot be lost"] },
          reveals: "The story's final warning — corrosive suspicion outlasts the night itself.",
          conceals: "Whether one dark night, real or dreamed, should ruin a life at all.",
          ace: "Articulate how Brown changes; connect his bitterness to lost faith; extend it to why chronic suspicion is more destructive than any single wrong."
        }
      ]
    },

    ctob: {
      name: "Dream or Reality?",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The name of Brown's wife — who stands for both a person and his religious faith — is ______. (one word)",
          evidence: ["She wears pink ribbons and begs him to stay this one night.", "When he thinks he loses her, he cries that his ______ is gone.", "Her name means trust and belief, and begins with 'Fai…'."],
          hints: ["She is his wife AND his religious faith.", "Fai…", "Her name is Faith."],
          answer: "Faith"
        },
        {
          type: "mc",
          prompt: "What object does the strange traveler carry in the forest?",
          options: [
            "A black staff shaped like a writhing serpent.",
            "A golden lantern.",
            "A wooden shepherd's crook.",
            "A silver sword."
          ],
          hints: ["It marks him as a devil-figure.", "Which option echoes the serpent of temptation?"]
        },
        {
          type: "mc",
          prompt: "By the story's end, how has Goodman Brown changed?",
          options: [
            "He becomes gloomy and distrustful of everyone's goodness.",
            "He becomes cheerful and generous.",
            "He forgets the night completely.",
            "He becomes the town's beloved leader."
          ],
          hints: ["Think about how he treats Faith and his neighbors afterward.", "Which option describes a bitter, suspicious man?"]
        },
        {
          type: "digit",
          prompt: "Faith is a single allegorical figure who stands for BOTH Brown's wife and his religious faith. How many people does the name 'Faith' name in the story? Enter the number.",
          evidence: ["There is one woman named Faith, and she is his wife.", "The same one name also stands for his religious faith.", "One person carries both meanings — count the people named Faith."],
          hints: ["Only one character bears the name.", "The wife and the faith are the same single figure.", "The number is 1."],
          answer: "1"
        },
        {
          type: "sequence",
          prompt: "Put the night's events in order, earliest first.",
          items: [
            "Brown leaves Faith at sunset and enters the dark forest.",
            "He meets the traveler with the serpent staff and walks deeper.",
            "He sees a pink ribbon fall and cries 'My Faith is gone!'",
            "At dawn he returns to Salem a changed, bitter man."
          ],
          hints: ["It begins with him leaving home at sunset.", "He must meet the traveler before the ribbon falls.", "His bitter change comes last, after the night ends."]
        },
        {
          type: "word",
          prompt: "The story never settles whether the night was real or only a ______. (one word)",
          evidence: ["Brown wakes alone in the quiet forest at dawn.", "Hawthorne deliberately leaves the truth uncertain.", "The word means the images that fill a sleeping mind, and begins with 'dr…'."],
          hints: ["It is what may happen while you sleep.", "Dr…", "The word is dream."],
          answer: "dream"
        }
      ]
    },

    arcade: {
      name: "Signs of Faith or Signs of Sin?",
      instruction: "Hawthorne weaves the story from images of innocence and images of temptation. Sort each detail: does it point toward FAITH AND GOODNESS, or toward SIN AND TEMPTATION? Reasoning earns the points.",
      buckets: [
        { id: "faith", label: "Signs of faith and goodness", short: "Faith" },
        { id: "sin", label: "Signs of sin and temptation", short: "Sin" }
      ],
      cards: [
        { text: "Faith's pink ribbons in her cap.", bucket: "faith", why: "The ribbons stand for innocence and faith." },
        { text: "Faith begging Brown to stay home this one night.", bucket: "faith", why: "Her plea is the pull toward safety and goodness." },
        { text: "Brown's memory of the catechism he was taught.", bucket: "faith", why: "The catechism represents his early religious grounding." },
        { text: "Brown crying out for Faith to look to heaven.", bucket: "faith", why: "In the crisis he still reaches toward good." },
        { text: "The black staff shaped like a serpent.", bucket: "sin", why: "The serpent staff marks the devil-figure." },
        { text: "The firelit gathering deep in the forest.", bucket: "sin", why: "The witches' Sabbath is the scene of temptation." },
        { text: "The traveler urging Brown to walk deeper into the woods.", bucket: "sin", why: "His urging pulls Brown toward despair." },
        { text: "The pink ribbon fluttering down from the dark sky.", bucket: "sin", why: "The falling ribbon signals faith being lost to sin." }
      ],
      followup: "Some details, like the falling pink ribbon, begin as signs of faith and become signs of sin. Choose one such detail and explain how Hawthorne turns its meaning."
    },

    analysis: {
      mcq: [
        {
          q: "In the allegory, the name 'Faith' stands for —",
          options: [
            "both Brown's wife and his religious faith.",
            "only a common Puritan first name.",
            "the name of the forest.",
            "the devil-figure Brown meets."
          ],
          why: "Hawthorne makes wife and faith one, so losing her is losing faith."
        },
        {
          q: "The dark forest in the story mainly represents —",
          options: [
            "a moral wilderness of temptation and hidden sin.",
            "a safe and cheerful playground.",
            "the town marketplace.",
            "a foreign country far away."
          ],
          why: "The journey into the woods is an allegory for a soul's test."
        },
        {
          q: "Brown is most shaken when he sees on the path —",
          options: [
            "respected, holy townspeople going to the same dark meeting.",
            "wild animals he does not recognize.",
            "an empty, silent road.",
            "his own children playing."
          ],
          why: "The apparent hypocrisy of the pious destroys his trust."
        },
        {
          q: "By deliberately leaving the night as possibly a dream, Hawthorne creates —",
          options: [
            "ambiguity that makes the story's meaning richer.",
            "a clear, factual account with no doubt.",
            "a simple comedy.",
            "a detailed map of Salem."
          ],
          why: "The unresolved dream-or-reality question is central to the story."
        },
        {
          q: "The story's main warning is about —",
          options: [
            "how suspecting hidden evil in everyone can poison a life.",
            "the dangers of traveling at night.",
            "the importance of collecting wealth.",
            "how to win an argument."
          ],
          why: "Brown's ruin comes from his corrosive distrust, not from the vision alone."
        }
      ],
      short: [
        "Choose one artifact from The Forest Path at Night. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the name 'Faith' works as an allegory, using two moments from the story.",
        "Hawthorne never says whether the night was real or a dream. Why might he leave it ambiguous — and how does that ambiguity change the story's meaning?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Hawthorne use symbolism to develop the theme of lost faith? Make a claim and support it with specific details — the pink ribbons, the serpent staff, and the forest fire.",
      aceReflection: "Articulate what the story suggests about suspicion in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "When Suspicion Poisons a Life",
      prompt: "Goodman Brown lets one dark night — real or dreamed — convince him that everyone hides secret evil, and it ruins the rest of his life. Choose another story, film, or real situation in which suspicion or lost trust corrodes a person or a community. Explain the connection with evidence: what triggered the suspicion, how it spread, and what it finally cost.",
      format: "A short evidence-based comparison connecting the story's warning about suspicion to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the name 'Faith' works as an allegory in Young Goodman Brown. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Young Goodman Brown. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in Young Goodman Brown because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Young Goodman Brown: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's warning about suspicion to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Young Goodman Brown for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Hawthorne's Young Goodman Brown as a study of allegory, symbolism, ambiguity, and the theme of lost faith and corrosive suspicion. The story is public domain and is studied here as literature — through analysis, paraphrase, and only brief public-domain quotations. The room reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Young Goodman Brown appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school); districts must implement no earlier than the 2030–2031 school year. Confirm the requirement and timeline against your district's plan.",
        "The story (1835) is public domain. It is taught here as literature — as allegory, symbolism, and deliberate ambiguity — using paraphrase and only brief public-domain phrases; no full passages are reproduced.",
        "Note the dark subject matter: a witches' gathering in the forest and a man's loss of religious faith. Chilling but not graphic. Preview and follow local policy for maturity level and community expectations.",
        "Fact-check the story anchors used here (Puritan Salem setting; the wife named Faith and her pink ribbons; the nighttime forest errand; the traveler with the serpent-shaped staff; the respected townspeople — Goody Cloyse, the minister, the deacon — on the path; the cry 'My Faith is gone!'; the firelit witches' Sabbath; the ambiguous dream-or-reality ending; Brown's bitter, distrustful later life). Brief quoted phrases are public-domain; longer lines are paraphrased.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English III ELAR TEKS (19 TAC Ch. 110) strands on allegory, symbolism, ambiguity, theme, and author's craft. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.11-12.1", "RL.11-12.2", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
