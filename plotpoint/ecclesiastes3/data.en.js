/* PlotPoint — Ecclesiastes 3, "A Time for Everything" (King James Version, 1611).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The KJV is public domain in the United States, so this room may
   reference the state-specified version directly. Ecclesiastes 3 is studied here as
   LITERATURE — antithesis, parallelism, merism, and the catalog poem — in a neutral,
   academic, non-devotional frame consistent with the Texas required literary-works
   list (19 TAC §110.30, Grade 8). The room paraphrases, quotes only brief public-domain
   phrases where a close reading needs them, and reproduces no copyrighted edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "ecclesiastes3",
  storageKey: "plotpoint.ecclesiastes3.v1",

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
    "vocab.title": "Words for Ecclesiastes 3",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Catalog of Seasons",
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
    "ctob.title": "A Time for Everything",
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
    "arcade.title": "Gaining or Losing?",
    "arcade.default": "Sort each image by the side of the catalog it belongs to.",
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
    "print.item.relic": "Catalog of Seasons evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Catalog-of-opposites organizer",
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
      title: "Ecclesiastes 3 — A Time for Everything",
      author: "King James Version",
      grades: "Grade 8",
      genre: "Sacred poetry · Wisdom literature · King James Version",
      time: "45–75 minutes",
      spoiler: "None — the whole chapter is discussed",
      rights: "Public domain (King James Version, 1611)",
      textAccess: "Ecclesiastes 3 is one short chapter. The King James Version is public domain — use your class's Bible or any KJV edition.",
      copyright: "The King James Version (1611) is in the public domain in the United States, so this room may reference the state-specified version directly. Ecclesiastes 3 is studied here as literature — its antithesis, parallelism, catalog structure, and reflection on time. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as literature — antithesis, parallelism, merism, and the catalog poem — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.30, Grade 8). Because the specified version (KJV) is public domain, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Ecclesiastes 3 — a wide seasonal landscape moving from a young sprout to a bare winter field, with paired images of planting and harvest suggesting the cycle of time."
    },
    hook: "One of the most quoted poems in the English language opens this chapter: \"To every thing there is a season.\" What follows is a catalog of fourteen paired opposites — a time to be born and a time to die, a time to weep and a time to laugh, a time of war and a time of peace. Read it as a poem, and watch how a simple list of contrasts builds a single, sweeping idea about time — and then turns to ask what any of it means.",
    goals: [
      "Understand Ecclesiastes 3 as a catalog poem built on antithesis — fourteen pairs of opposites — followed by a reflection on time.",
      "Analyze how paired opposites and the 'season/time' refrain create rhythm, balance, and a sense of completeness.",
      "Recognize merism — naming two extremes (birth and death) to mean the whole of something (all of life).",
      "Interpret the shift from the list of opposites to the philosophical reflection on toil, time, and the limits of human understanding."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of antithesis — pairing opposites for effect.",
        "Discuss: how can a simple list of opposite actions add up to a single big idea about life?"
      ],
      during: [
        "Use the Catalog of Seasons to slow down and read the paired opposites one at a time.",
        "Track the turn: from the catalog of times to the reflection on toil, beauty, and human limits."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the pairs and the poem's structure.",
        "Complete the Extend task to compare this catalog-of-opposites technique to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main idea of Ecclesiastes 3's catalog poem. Include one pair of opposites that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the catalog of opposites to the reflection that follows it. Explain how listing so many paired times prepares the reader for the question about what profit a worker has in his toil." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — carrying a big idea through a catalog of paired opposites — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "antithesis", def: "A deliberate pairing of opposite ideas or images for contrast and balance.", example: "'A time to be born, and a time to die.'", nonexample: "Two words that mean the same thing.", context: "The whole catalog is built on antithesis — opposite paired with opposite." },
      { term: "parallelism", def: "Repeating a grammatical pattern in balanced lines that echo each other.", example: "'A time to plant... a time to pluck up.'", nonexample: "A sentence with no repeated pattern.", context: "Each 'a time to ___' line follows the same parallel shape." },
      { term: "merism", def: "Naming two opposite extremes to stand for everything between them — the whole.", example: "'Born' and 'die' together standing for all of life.", nonexample: "Listing only one part of something.", context: "The opening pair is a merism: birth and death mean the whole of a life." },
      { term: "catalog poem", def: "A poem built as a list of items, actions, or images, often repeating a pattern.", example: "The list of fourteen paired 'times' in this chapter.", nonexample: "A single sentence with no list.", context: "Ecclesiastes 3 opens with a catalog poem — a list of times." },
      { term: "refrain", def: "A word or phrase repeated throughout a poem to build rhythm and unity.", example: "The repeated 'a time to' across every line.", nonexample: "A phrase used exactly once and never again.", context: "'A time to' works as a refrain, tying the whole catalog together." },
      { term: "theme", def: "The central idea or insight a text explores.", example: "That everything has its proper season.", nonexample: "The color of a book's cover.", context: "One theme is that every human activity has its own time." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Planting, harvest, weeping, and dancing we can picture.", nonexample: "An abstract word like 'stuff' with no picture.", context: "The catalog's imagery makes abstract 'time' concrete through actions." },
      { term: "season", def: "A fixed or fitting time for something to happen.", example: "'To every thing there is a season.'", nonexample: "A moment with no right or wrong time.", context: "The poem opens by naming a 'season' for every purpose." },
      { term: "toil", def: "Hard, wearying work or labor.", example: "The worker's long effort under the sun.", nonexample: "Effortless rest.", context: "After the catalog, the poem asks what profit a worker has in his toil." }
    ],

    relic: {
      name: "The Catalog of Seasons",
      intro: "Seven instructional reconstructions of the images in the chapter — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "refrain", name: "The Season Refrain", image: "images/refrain.webp",
          clues: ["The chapter opens: 'To every thing there is a season.'", "The next words add 'a time to every purpose under the heaven.'", "This line sets up the whole catalog that follows."],
          identify: { q: "What does the opening line announce?", choices: ["That every activity has its own proper time or season", "That time does not matter at all", "That only one season exists", "That the poem is about farming alone"] },
          purpose: { q: "What is this refrain's role in the poem?", choices: ["It is the frame that every paired 'time' hangs on", "It appears once and is forgotten", "It ends the poem", "It contradicts the catalog"] },
          significance: { q: "Why open with 'to every thing there is a season'?", choices: ["It states the theme — everything has its fitting time — before proving it with a list", "It hides the poem's subject", "It warns the reader to stop", "It names a single event"] },
          reveals: "The controlling idea that frames the whole catalog.",
          conceals: "How the repeated 'a time to' will echo this line again and again.",
          ace: "Articulate the season refrain; connect it to one pair that follows; extend it to why a poem might state its theme first."
        },
        {
          id: "bornDie", name: "A Time to Be Born / A Time to Die", image: "images/bornDie.webp",
          clues: ["The first pair in the catalog names birth and death.", "These are the two outer edges of any human life.", "Naming both extremes is a way of meaning everything in between."],
          identify: { q: "What does the opening pair name?", choices: ["Being born and dying — the two ends of a life", "Two kinds of weather", "Two farming tools", "Two cities"] },
          purpose: { q: "Why begin the catalog with birth and death?", choices: ["They are the widest possible pair, framing all of life at once", "They are the least important pair", "They have nothing to do with time", "They repeat the same idea"] },
          significance: { q: "What literary device pairs two extremes to mean the whole?", choices: ["Merism — birth and death together stand for all of life", "Rhyme", "A pun", "A footnote"] },
          reveals: "How two opposites can stand for everything between them.",
          conceals: "That the pair is a merism, not just a contrast.",
          ace: "Articulate the born/die pair; connect it to the idea of a whole life; extend it to another 'A and Z' way of meaning everything."
        },
        {
          id: "labor", name: "The Labor Pairs", image: "images/labor.webp",
          clues: ["The catalog includes 'a time to plant, and a time to pluck up.'", "It also pairs breaking down with building up.", "These are opposite actions of work and effort."],
          identify: { q: "What do the labor pairs describe?", choices: ["Opposite kinds of work — planting and uprooting, building and tearing down", "Only planting, never harvest", "A single unbroken task", "Rest with no work at all"] },
          purpose: { q: "What do these paired actions add to the catalog?", choices: ["They show even labor has its opposite season, extending the pattern to daily work", "They cancel the refrain", "They end the list early", "They describe only farming and nothing more"] },
          significance: { q: "How do these pairs fit the poem's structure?", choices: ["Each is another antithesis, keeping the balanced opposite-with-opposite pattern", "They break the pattern", "They rhyme with the title", "They are unrelated to the refrain"] },
          reveals: "That the opposite-pairing extends to ordinary work.",
          conceals: "How relentlessly the poem keeps its balanced antithetical shape.",
          ace: "Articulate one labor pair; connect it to the antithesis pattern; extend it to a task in your life that has its own right time."
        },
        {
          id: "emotion", name: "The Emotion Pairs", image: "images/emotion.webp",
          clues: ["The catalog turns to feelings: 'a time to weep, and a time to laugh.'", "It pairs mourning with dancing.", "These opposites cover the range of human emotion."],
          identify: { q: "What do the emotion pairs describe?", choices: ["Opposite feelings — weeping and laughing, mourning and dancing", "Two kinds of tools", "Two seasons of weather", "A single steady mood"] },
          purpose: { q: "Why include weeping and laughing side by side?", choices: ["To show that sorrow and joy each have their own time", "To say only joy matters", "To end the list", "To describe farm work"] },
          significance: { q: "What does pairing these emotions suggest about life?", choices: ["That a full life holds both sorrow and joy, each in its season", "That feelings never change", "That laughter is forbidden", "That mourning lasts forever"] },
          reveals: "That the catalog reaches into feeling, not just action.",
          conceals: "How the pairs together sketch a whole emotional life.",
          ace: "Articulate one emotion pair; connect it to the theme of seasons; extend it to a time joy and sorrow sat close together for you."
        },
        {
          id: "warPeace", name: "A Time of War / A Time of Peace", image: "images/warPeace.webp",
          clues: ["The catalog closes with 'a time of war, and a time of peace.'", "It is the final and largest-scale pair.", "War and peace move from personal life to whole nations."],
          identify: { q: "What does the closing pair name?", choices: ["War and peace — the final opposite in the catalog", "Two kinds of music", "Planting and harvest", "Birth and death again"] },
          purpose: { q: "Why end the catalog on war and peace?", choices: ["It widens the scope from personal life to whole peoples, closing the list on its largest pair", "It shrinks the poem to one person", "It repeats the opening line", "It has no purpose"] },
          significance: { q: "What does closing on this pair suggest?", choices: ["That the pattern of 'a time for everything' reaches even the largest human events", "That only small things have their seasons", "That war has no season", "That the catalog was about weather"] },
          reveals: "How the catalog scales up from a single life to nations.",
          conceals: "That the poem saves its widest pair for the end.",
          ace: "Articulate the war/peace pair; connect it to the poem's growing scope; extend it to why a list might build to its biggest example."
        },
        {
          id: "beautiful", name: "Every Thing Beautiful in Its Time", image: "images/beautiful.webp",
          clues: ["After the catalog, the poem reflects: God 'hath made every thing beautiful in his time.'", "The tone shifts from list to meditation.", "The line ties the catalog's many 'times' to a larger sense of order."],
          identify: { q: "What does this reflection state?", choices: ["That every thing is beautiful in its own time", "That nothing is ever beautiful", "That time does not exist", "That only war is beautiful"] },
          purpose: { q: "How does this line change the poem?", choices: ["It shifts from the catalog of times to reflection on their meaning", "It repeats the list word for word", "It starts a new catalog", "It ends the chapter abruptly"] },
          significance: { q: "How does 'beautiful in its time' relate to the catalog?", choices: ["It reframes the many opposite times as parts of a fitting, ordered whole", "It says the catalog was a mistake", "It denies that anything has a season", "It is unrelated to the list"] },
          reveals: "The poem's turn from listing times to reflecting on them.",
          conceals: "How the reflection reinterprets the whole catalog at once.",
          ace: "Articulate the 'beautiful in its time' line; connect it back to the catalog; extend it to how a closing thought can recast a list."
        },
        {
          id: "limits", name: "The Limits of Human Understanding", image: "images/limits.webp",
          clues: ["The reflection says the world, or eternity, is set in human hearts.", "Yet people 'cannot find out the work that God maketh from the beginning to the end.'", "The poem admits a limit to what humans can grasp about time."],
          identify: { q: "What does this part of the reflection admit?", choices: ["That people cannot fully grasp the whole work of God from beginning to end", "That people understand everything perfectly", "That there is nothing left to know", "That time can be measured exactly"] },
          purpose: { q: "Why include this admission after the catalog?", choices: ["It adds humility — the pattern of times is real, yet its full meaning stays beyond reach", "It cancels the catalog", "It ends the poem on a joke", "It lists more opposites"] },
          significance: { q: "What does naming this limit reveal about the poem's view of time?", choices: ["That humans sense a larger order in time but cannot see all of it", "That time is meaningless", "That people know the future fully", "That the catalog was false"] },
          reveals: "The poem's honesty about the limits of human knowledge.",
          conceals: "How wonder and limitation are held together in the same reflection.",
          ace: "Articulate what the reflection admits; connect it to the catalog of times; extend it to something you sense but cannot fully explain."
        }
      ]
    },

    ctob: {
      name: "A Time for Everything",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "'To every thing there is a ______' — the word that opens the poem and means a fitting time. (one word)",
          evidence: ["It is the very first noun in the chapter.", "It means the proper or fitting time for something.", "The word begins with 'sea…'."],
          hints: ["Spring, summer, autumn, winter are each one of these.", "Sea…", "The word is season."],
          answer: "season"
        },
        {
          type: "mc",
          prompt: "The pairs like 'a time to be born, and a time to die' are built mainly on —",
          options: [
            "antithesis — opposite paired with opposite.",
            "rhyme at the end of each line.",
            "a single repeated image of a shepherd.",
            "a story told in strict time order."
          ],
          hints: ["Look at how each pair sets one thing against its opposite.", "Which option names the pairing of opposites?"]
        },
        {
          type: "mc",
          prompt: "Naming two extremes — 'born' and 'die' — to stand for all of life is an example of —",
          options: [
            "merism.",
            "a simile.",
            "a rhyme scheme.",
            "onomatopoeia."
          ],
          hints: ["It is the device where two opposite ends mean the whole.", "Birth and death together stand for everything in a life."]
        },
        {
          type: "digit",
          prompt: "This poem is the third chapter of the Book of Ecclesiastes. Enter the chapter number.",
          evidence: ["It follows the second chapter and comes before the fourth.", "It is the chapter that opens 'To every thing there is a season.'", "Count: chapter one, chapter two, then this one."],
          hints: ["It is the chapter after chapter two.", "One, two, then this.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put these parts of the chapter in the order they appear, earliest first.",
          items: [
            "The refrain: 'to every thing there is a season.'",
            "The catalog of paired opposites, ending with war and peace.",
            "The reflection: God has made every thing beautiful in its time.",
            "The admission that people cannot find out God's work from beginning to end."
          ],
          hints: ["The poem opens with the season refrain.", "The catalog of pairs comes before the reflection.", "The admission about human limits comes near the end of the reflection."]
        },
        {
          type: "mc",
          prompt: "After the catalog of times, the chapter changes what it does. It shifts from —",
          options: [
            "listing paired opposites to reflecting on their meaning.",
            "reflection to a brand-new catalog of opposites.",
            "poetry to a numbered set of laws.",
            "past tense to future tense only."
          ],
          hints: ["Notice where the list stops and the questions about toil and meaning begin.", "The tone turns from cataloging to meditating."]
        }
      ]
    },

    arcade: {
      name: "Gaining or Losing?",
      instruction: "The catalog of Ecclesiastes 3 balances opposites: some name gain, building up, or holding on, while others name loss, tearing down, or letting go. Sort each image by which side of the pair it belongs to: is it GAIN & BUILDING UP, or LOSS & TEARING DOWN? Reasoning earns the points.",
      buckets: [
        { id: "gain", label: "Gain & building up", short: "Gain" },
        { id: "loss", label: "Loss & tearing down", short: "Loss" }
      ],
      cards: [
        { text: "A time to plant.", bucket: "gain", why: "Planting starts new growth — an image of gain." },
        { text: "A time to build up.", bucket: "gain", why: "Building up creates and adds, not tears down." },
        { text: "A time to gather stones together.", bucket: "gain", why: "Gathering collects and keeps — a movement toward having." },
        { text: "A time to get, and a time to keep.", bucket: "gain", why: "Getting and keeping are both about holding on." },
        { text: "A time to pluck up that which is planted.", bucket: "loss", why: "Plucking up uproots what was there — an image of loss." },
        { text: "A time to break down.", bucket: "loss", why: "Breaking down tears apart what stood." },
        { text: "A time to cast away stones.", bucket: "loss", why: "Casting away scatters and lets go." },
        { text: "A time to lose, and a time to cast away.", bucket: "loss", why: "Losing and casting away are both about letting go." }
      ],
      followup: "The poem never says gain is good and loss is bad — it gives each its own 'time.' What does placing gain and loss as equal partners suggest about how the poem views the ups and downs of life?"
    },

    analysis: {
      mcq: [
        {
          q: "The opening line, 'To every thing there is a season,' mainly states that —",
          options: [
            "every human activity has its own fitting time.",
            "only farming matters in life.",
            "time does not exist.",
            "nothing ever changes."
          ],
          why: "The line frames the whole catalog by announcing that everything has its proper season."
        },
        {
          q: "Pairs such as 'a time to weep, and a time to laugh' are built on —",
          options: [
            "antithesis — setting one thing against its opposite.",
            "rhyme at the end of each line.",
            "a single sustained metaphor.",
            "a strict chronological story."
          ],
          why: "Each pair joins a thing with its direct opposite, the definition of antithesis."
        },
        {
          q: "Naming 'a time to be born, and a time to die' to suggest the whole of life is an example of —",
          options: [
            "merism — two extremes standing for everything between them.",
            "a simile comparing life to a race.",
            "onomatopoeia.",
            "a rhyme scheme."
          ],
          why: "Merism names two opposite extremes to mean the entire range, here all of a life."
        },
        {
          q: "After the catalog, the poem shifts to ask what profit a worker has in his toil. This shift moves the chapter from —",
          options: [
            "listing times to reflecting on their meaning.",
            "reflection to a new list of opposites.",
            "poetry to a set of laws.",
            "joy to a happy feast."
          ],
          why: "The catalog gives way to reflection on toil, time, and human limits."
        },
        {
          q: "Because it is built as a repeating list of paired 'times,' Ecclesiastes 3's opening is a clear example of —",
          options: [
            "a catalog poem.",
            "a sonnet.",
            "a limerick.",
            "a single simile."
          ],
          why: "A catalog poem is structured as a list, exactly the shape of the fourteen paired times."
        }
      ],
      short: [
        "Choose one pair from the Catalog of Seasons. Explain what the two opposites are and what pairing them reveals about the poem's meaning.",
        "The poem gives gain and loss — building up and tearing down — each its own 'time.' Explain what treating these as equal partners suggests about how the poem views life.",
        "Explain the shift from the catalog of times to the reflection ('what profit hath he that worketh...'). How does moving from a list to a question change the feeling of the chapter?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Ecclesiastes 3 use a catalog of paired opposites to express a big idea about time? Make a claim and support it with specific pairs from the poem.",
      aceReflection: "Articulate what the catalog suggests about time in your own words. Connect two pairs that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "Ecclesiastes 3 carries a big idea — that everything has its time — through a catalog of paired opposites. Choose another poem, song, story, or speech that uses a list or repeated pattern to build one idea (for example, a song that lists times, places, or opposites). Explain the connection with evidence: what is the repeated pattern, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's catalog-of-opposites technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Ecclesiastes 3 uses a catalog of paired opposites to express the idea that everything has its time. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Ecclesiastes 3. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [pair one] connects to [pair two] in Ecclesiastes 3 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about Ecclesiastes 3: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Ecclesiastes 3's catalog-of-opposites technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Ecclesiastes 3 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Ecclesiastes 3 (King James Version) as a catalog poem — a study of antithesis, parallelism, merism, the 'season/time' refrain, and the turn from list to reflection. The KJV is public domain, so the state-specified version can be referenced directly and this room reproduces no copyrighted edition. Ecclesiastes 3 is presented as literature in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "Ecclesiastes 3 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 8); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The specified version is the King James Version, which is public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's imagery, structure, and rhetoric academically and neutrally, without devotional instruction, and follow your district's policy and community expectations for religious texts studied as literary works.",
        "Details here were checked against the KJV text (the opening refrain 'to every thing there is a season, and a time to every purpose under the heaven'; the fourteen paired times from 'a time to be born, and a time to die' through 'a time of war, and a time of peace'; the reflection 'what profit hath he that worketh...'; 'he hath made every thing beautiful in his time'; the world/eternity set in human hearts; that people 'cannot find out the work that God maketh from the beginning to the end'; and that there is nothing better than to rejoice and enjoy the good of one's labor). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 8 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, and theme — especially antithesis, parallelism, and the catalog/list structure. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.4", "RL.8.5", "W.8.1", "SL.8.1", "L.8.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
