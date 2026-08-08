/* PlotPoint — The Law of Life (Jack London, 1901).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "lawoflife",
  storageKey: "plotpoint.lawoflife.v1",

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
    "vocab.title": "Words for The Law of Life",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Koskoosh's Last Fire",
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
    "ctob.title": "The Last Sticks",
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
    "arcade.title": "Nature's Law or the Will to Live?",
    "arcade.default": "Sort each detail by whether it shows nature's indifferent law or the urge to cling to life.",
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
    "extend.title": "Nature's Indifference",
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
    "print.item.relic": "Last-fire evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Nature-vs-will organizer",
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
      title: "The Law of Life",
      author: "Jack London",
      grades: "Grades 9–12",
      genre: "Naturalism · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1901)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1901 (collected in Children of the Frost, 1902), The Law of Life is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A bleak, thoughtful naturalist story. An old, blind man is left behind by his people to die in the snow — a survival custom of his tribe — and calmly reflects on death as wolves gather. Somber but not graphic. Best for high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/10736",
      audio: "https://librivox.org/children-of-the-frost-by-jack-london/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Law of Life — an old blind man sitting alone by a tiny fire in vast blue-white snow at dusk, a small pile of sticks beside him, faint sled tracks leading away, and the shadowy shapes of wolves at the treeline."
    },
    hook: "Old Koskoosh sits blind in the snow beside a small fire. His people have broken camp and moved on without him — the way of his tribe, which leaves the old and weak behind so the strong can survive. A handful of sticks is all he has left; when the last one burns out, so will he. As he waits, Koskoosh thinks about a hard truth he has watched all his life: nature does not care about any single creature. It cares only that life goes on.",
    goals: [
      "Follow the quiet plot: Koskoosh left behind, his memories, and the closing wolves.",
      "Understand naturalism — a story that shows nature as an indifferent force ruling all life.",
      "Interpret 'the law of life': the individual dies, but the species must continue.",
      "Analyze how the moose memory mirrors Koskoosh's own fate, and his final acceptance."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially naturalism, indifferent, and mortality.",
        "Discuss: Does nature care about any one living thing? What does it seem to 'want,' if anything?"
      ],
      during: [
        "Use Koskoosh's Last Fire to track the fire, the memories, and the wolves.",
        "Notice how calmly Koskoosh reasons about his own death — and why."
      ],
      after: [
        "Run the breakout, arcade, and analysis to trace the law of life.",
        "Complete the Extend task on nature's indifference to the individual."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Koskoosh means by 'the law of life.' Why does he believe nature does not care about him as an individual? Include one detail from the story that helped you." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Koskoosh's memory of the old bull moose to his own situation. Explain how the memory helps him understand and accept what is about to happen to him." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea — that nature is indifferent to the individual — to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "naturalism", def: "A style of writing that shows nature and environment as powerful, indifferent forces shaping human life.", example: "The freezing wilderness deciding Koskoosh's fate.", nonexample: "A fairy tale where wishes always come true.", context: "The Law of Life is a classic work of naturalism." },
      { term: "indifferent", def: "Showing no care or concern one way or the other.", example: "Nature, which Koskoosh says does not care whether he lives or dies.", nonexample: "A loving parent watching over a child.", context: "Koskoosh decides that nature is completely indifferent." },
      { term: "perpetuate", def: "To make something continue on into the future.", example: "Nature's one goal: to keep the species going.", nonexample: "Letting something die out entirely.", context: "Nature works only to perpetuate the species, not the individual." },
      { term: "mortality", def: "The condition of being alive and therefore certain to die.", example: "Koskoosh facing the plain fact of his own death.", nonexample: "Living forever with no end.", context: "The whole story meditates on mortality." },
      { term: "resignation", def: "Calm acceptance of something you cannot change.", example: "Koskoosh dropping his stick and accepting the end.", nonexample: "Fighting furiously against the inevitable.", context: "The story closes on quiet resignation." },
      { term: "ember", def: "A small glowing piece of a dying fire.", example: "The last faint embers Koskoosh cannot see but can feel fading.", nonexample: "A roaring, freshly built bonfire.", context: "As the embers die, so will he." },
      { term: "tribe", def: "A community of people bound by kinship and custom.", example: "Koskoosh's people, who break camp and move on.", nonexample: "A crowd of strangers with no ties.", context: "His tribe follows the old custom of leaving the aged behind." },
      { term: "desolate", def: "Bleak, empty, and lifeless.", example: "The vast, silent field of snow around the fire.", nonexample: "A warm, crowded room full of laughter.", context: "Koskoosh is alone in a desolate white waste." }
    ],

    relic: {
      name: "Koskoosh's Last Fire",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "koskoosh", name: "The Old Man, Koskoosh", image: "images/koskoosh.webp",
          clues: ["Koskoosh is very old, and now blind.", "He can no longer keep up with his people as they travel.", "He sits calmly by the fire, waiting for the end."],
          identify: { q: "Who is Koskoosh?", choices: ["An old, blind man left behind by his tribe to die", "A young hunter", "A visiting stranger", "The tribe's chief in his prime"] },
          purpose: { q: "What is Koskoosh's role in the story?", choices: ["He is the mind through which we watch the law of life unfold", "He leads the tribe onward", "He rescues a lost child", "He has no role"] },
          significance: { q: "Why does the story stay inside Koskoosh's thoughts?", choices: ["His calm reasoning lets us understand death as he does — as natural law", "To hide the ending", "To show he is confused", "To make him seem heroic"] },
          reveals: "A clear, unafraid mind facing its own end.",
          conceals: "How much feeling lies beneath his calm acceptance.",
          ace: "Articulate who Koskoosh is; connect his blindness and age to his fate; extend it to how facing death can bring a strange, clear calm."
        },
        {
          id: "sticks", name: "The Pile of Sticks", image: "images/sticks.webp",
          clues: ["A small pile of dry sticks has been left beside Koskoosh.", "He feeds them to the fire one at a time.", "When the last stick is gone and the fire dies, he will freeze."],
          identify: { q: "What do the sticks beside Koskoosh represent?", choices: ["The exact amount of life he has left", "Food for the journey", "Tools for hunting", "Gifts from the tribe"] },
          purpose: { q: "What is the pile of sticks' role in the story?", choices: ["It turns his remaining life into something he can count, stick by stick", "It keeps wolves away forever", "It signals other hunters", "It has no role"] },
          significance: { q: "Why is measuring life in sticks so powerful?", choices: ["It makes death feel exact, near, and impossible to avoid", "It shows the tribe is generous", "It proves he will be rescued", "It warms the whole forest"] },
          reveals: "A life counted down in a handful of firewood.",
          conceals: "How little time is left in the pile.",
          ace: "Articulate what the sticks measure; connect the shrinking pile to his coming death; extend it to how we sense time running out in small, ordinary things."
        },
        {
          id: "tribe", name: "The Departing Tribe", image: "images/tribe.webp",
          clues: ["Koskoosh's people break camp and move on to better hunting.", "By custom, they leave the old and weak who cannot keep up.", "He hears the last sled and footstep fade into silence."],
          identify: { q: "Why does the tribe leave Koskoosh behind?", choices: ["Custom leaves the aged behind so the tribe can survive and move on", "They are angry with him", "He asked to be left", "They forgot he was there"] },
          purpose: { q: "What is the departing tribe's role in the story?", choices: ["It shows the harsh survival law that governs the whole tale", "It provides a rescue party", "It brings him food", "It has no role"] },
          significance: { q: "What does the custom reveal about this world?", choices: ["Survival of the group can outweigh the life of one person", "The tribe is cruel for no reason", "Old people are useless", "Nature is gentle"] },
          reveals: "A human echo of nature's own law: the group over the one.",
          conceals: "The grief that custom does not allow anyone to show.",
          ace: "Articulate why the tribe leaves him; connect the custom to survival; extend it to hard choices groups make to keep the whole alive."
        },
        {
          id: "lawofnature", name: "The Law of Life", image: "images/lawofnature.webp",
          clues: ["Koskoosh thinks hard about nature's way.", "He decides nature cares nothing for any single creature.", "Its only task, he sees, is to keep the species going — then let the individual die."],
          identify: { q: "What 'law of life' does Koskoosh work out?", choices: ["Nature cares only about the species continuing, not the individual", "The strong should protect the weak forever", "Every person lives as long as they wish", "Nature loves each creature equally"] },
          purpose: { q: "What is this idea's role in the story?", choices: ["It is the theme the whole story exists to reveal", "It is a plan to escape", "It is a prayer for rescue", "It has no role"] },
          significance: { q: "Why does this law comfort Koskoosh rather than terrify him?", choices: ["Seeing his death as natural and universal makes it easier to accept", "It promises he will not die", "It proves the tribe was wrong", "It makes him angry"] },
          reveals: "The cold, clear rule at the center of the story.",
          conceals: "Whether accepting the law removes the pain, or only names it.",
          ace: "Articulate the law of life; connect it to Koskoosh's calm; extend it to how understanding something hard can make it easier to face."
        },
        {
          id: "moose", name: "The Bull Moose", image: "images/moose.webp",
          clues: ["Koskoosh remembers a hunt from long ago.", "An old bull moose was chased and worn down by a wolf pack.", "The moose made stand after stand, but the wolves pulled it down in the end."],
          identify: { q: "What memory does Koskoosh return to?", choices: ["An old bull moose brought down by a wolf pack", "His wedding day", "A great feast", "His first hunt as a boy"] },
          purpose: { q: "What is the moose memory's role in the story?", choices: ["It mirrors Koskoosh's own death: the old and weak pulled down at last", "It shows he was a great hunter", "It has nothing to do with the plot", "It predicts a rescue"] },
          significance: { q: "Why does Koskoosh dwell on this memory now?", choices: ["He sees himself in the moose — the same law claiming him", "He misses hunting", "He hopes wolves will spare him", "He wants to feel young"] },
          reveals: "His own fate reflected in an old memory of the wild.",
          conceals: "Just how soon the same ending will reach him.",
          ace: "Articulate the moose memory; connect it to Koskoosh's situation; extend it to how a memory can suddenly explain the present."
        },
        {
          id: "wolves", name: "The Circling Wolves", image: "images/wolves.webp",
          clues: ["As darkness falls, wolves gather around the dying fire.", "They circle closer, and a cold muzzle brushes Koskoosh's cheek.", "For a moment he beats them back with a burning branch."],
          identify: { q: "What gathers around Koskoosh as night comes?", choices: ["A pack of wolves", "His returning family", "A herd of moose", "A rescue party"] },
          purpose: { q: "What is the wolves' role in the story?", choices: ["They are nature's law arriving in the flesh, just as with the moose", "They guide him home", "They bring him food", "They have no role"] },
          significance: { q: "What does the moment he beats them back reveal?", choices: ["Even accepting death, the body still fights to live", "That he can escape", "That the wolves are tame", "That the tribe will return"] },
          reveals: "The instinct to survive flaring up one last time.",
          conceals: "That the branch, like the sticks, will soon burn out.",
          ace: "Articulate what the wolves are; connect them to the moose memory; extend it to the gap between accepting death in the mind and resisting it in the body."
        },
        {
          id: "ember", name: "The Dying Ember", image: "images/ember.webp",
          clues: ["The fire sinks lower and lower.", "Koskoosh wonders, for a moment, why he should struggle at all.", "At last he lets his head drop and gives himself to the law of life."],
          identify: { q: "How does the story end?", choices: ["The fire dies and Koskoosh accepts his death", "The tribe comes back for him", "He drives off the wolves and survives", "He walks to safety"] },
          purpose: { q: "What is the dying fire's role at the end?", choices: ["It marks the exact moment life gives way to nature's law", "It signals morning", "It frightens the wolves off", "It has no role"] },
          significance: { q: "What does Koskoosh's final acceptance reveal?", choices: ["He meets death as part of the same law that rules all living things", "He dies in terror", "He blames the tribe", "He expects to be saved"] },
          reveals: "The quiet close: one life ending inside the endless law.",
          conceals: "Nothing now — the story lets the ember, and Koskoosh, go out.",
          ace: "Articulate how the story ends; connect the dying ember to the law of life; extend it to why a calm, accepting death can be as powerful as a struggle."
        }
      ]
    },

    ctob: {
      name: "The Last Sticks",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The old, blind man left behind to die is named ______. (one word)",
          evidence: ["He sits alone by the fire in the snow.", "His people have moved on without him.", "His name begins with 'Kos…'."],
          hints: ["It is the old man's name.", "Kos…", "The name is Koskoosh."],
          answer: "Koskoosh"
        },
        {
          type: "mc",
          prompt: "Why is Koskoosh left behind by his tribe?",
          options: [
            "He is old and can no longer keep up; custom leaves the aged behind.",
            "He committed a crime.",
            "He chose to stay and hunt.",
            "The tribe forgot about him."
          ],
          hints: ["It is a survival custom, not a punishment.", "Which option is about age and the group's survival?"]
        },
        {
          type: "word",
          prompt: "When his fire and small pile of ______ burn out, Koskoosh will freeze and die. (one word)",
          evidence: ["He feeds them to the fire one at a time.", "They are dry pieces of wood left beside him.", "The word begins with 'sti…'."],
          hints: ["Small dry pieces of wood for a fire.", "Sti…", "The word is sticks."],
          answer: "sticks"
        },
        {
          type: "mc",
          prompt: "What 'law of life' does Koskoosh conclude?",
          options: [
            "Nature cares nothing for the individual — only that the species continues.",
            "The strong must always protect the weak.",
            "Everyone lives exactly as long as they wish.",
            "Nature loves each creature equally."
          ],
          hints: ["Think about why the old are left behind.", "Which option puts the species above the individual?"]
        },
        {
          type: "sequence",
          prompt: "Put the events in order, earliest first.",
          items: [
            "The tribe breaks camp and moves on, leaving Koskoosh with a fire.",
            "Blind in the snow, he reflects on the law of life.",
            "He remembers an old bull moose pulled down by wolves.",
            "Wolves gather, and Koskoosh drops his stick and accepts death."
          ],
          hints: ["Being left behind comes first.", "The moose memory comes before the wolves reach him.", "His acceptance is the final beat."]
        },
        {
          type: "word",
          prompt: "The story shows nature as ______ to the individual — caring nothing for one creature's life. (one word)",
          evidence: ["Nature works only to keep the species going.", "It is the opposite of caring or concerned.", "The word begins with 'ind…'."],
          hints: ["The opposite of caring.", "Ind…", "The word is indifferent."],
          answer: "indifferent"
        }
      ]
    },

    arcade: {
      name: "Nature's Law or the Will to Live?",
      instruction: "The story sets nature's cold, indifferent law against the living body's urge to survive. Sort each detail: does it show NATURE'S INDIFFERENT LAW, or THE URGE TO CLING TO LIFE? Reasoning earns the points.",
      buckets: [
        { id: "law", label: "Nature's indifferent law", short: "Law" },
        { id: "cling", label: "The urge to cling to life", short: "Cling" }
      ],
      cards: [
        { text: "The old and weak are left behind so the tribe can survive.", bucket: "law", why: "The custom follows nature's rule: the group over the one." },
        { text: "Nature cares only that the species continues, not any one life.", bucket: "law", why: "This is the core of the law of life." },
        { text: "Every creature is born, breeds, and dies in its season.", bucket: "law", why: "The impersonal cycle that rules all living things." },
        { text: "Koskoosh finally drops his stick and accepts his death.", bucket: "law", why: "He yields to the law rather than fight it." },
        { text: "The bull moose makes stand after stand before the wolves win.", bucket: "cling", why: "A living thing struggling hard against its end." },
        { text: "Koskoosh thrusts a burning branch at the circling wolves.", bucket: "cling", why: "His body fights even after his mind has accepted." },
        { text: "For a moment he wonders why he should give up at all.", bucket: "cling", why: "A last flicker of the will to survive." },
        { text: "Warm memories of hunts and life crowd back to him.", bucket: "cling", why: "Life pulling at him even as it slips away." }
      ],
      followup: "Koskoosh accepts the law of life in his mind, yet his body still fights the wolves. What does that gap between accepting and resisting suggest about being alive?"
    },

    analysis: {
      mcq: [
        {
          q: "Koskoosh is left behind by his tribe because —",
          options: [
            "he is old and blind and can no longer keep up, and custom leaves the aged behind.",
            "he broke the tribe's laws.",
            "he volunteered to guard the old camp.",
            "the tribe simply forgot him."
          ],
          why: "The tribe's survival custom, not cruelty or accident, leaves the aged to die."
        },
        {
          q: "The pile of sticks beside Koskoosh mainly measures —",
          options: [
            "how much time, and life, he has left.",
            "how far the tribe has traveled.",
            "how many wolves are near.",
            "how cold the night will be."
          ],
          why: "When the last stick burns out and the fire dies, so does he."
        },
        {
          q: "The 'law of life' Koskoosh reflects on is that —",
          options: [
            "nature cares nothing for the individual, only that the species continues.",
            "the strongest hunter always survives.",
            "good people are rewarded with long life.",
            "nature protects the old and wise."
          ],
          why: "He concludes nature's only concern is the survival of the species, not any one life."
        },
        {
          q: "Koskoosh remembers the old bull moose in order to —",
          options: [
            "see his own death mirrored — the old and weak pulled down at last.",
            "recall how good a hunter he was.",
            "plan a way to fight the wolves.",
            "cheer himself with a happy memory."
          ],
          why: "The moose's end by the wolf pack echoes the law now claiming Koskoosh."
        },
        {
          q: "At the end of the story, Koskoosh —",
          options: [
            "accepts his death as part of nature's law.",
            "is rescued by his returning tribe.",
            "drives off the wolves and survives.",
            "dies raging against the wolves."
          ],
          why: "He drops his stick and yields, meeting death as the law of life."
        }
      ],
      short: [
        "Choose one artifact from Koskoosh's Last Fire. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the memory of the bull moose connects to Koskoosh's own fate.",
        "Koskoosh accepts death calmly, yet still fights the wolves for a moment. What does that reveal about being alive?"
      ],
      paragraph: "Write an evidence-based paragraph. How does London use Koskoosh's situation — the sticks, the tribe's custom, the moose memory, the wolves — to develop the idea that nature is indifferent to the individual? Make a claim and support it with specific details.",
      aceReflection: "Articulate what the story suggests about nature and mortality in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Nature's Indifference",
      prompt: "London's story argues that nature does not care about any single life — only that life continues. Choose another story, film, or real situation where nature, fate, or a system seems indifferent to the individual. Explain the connection with evidence: how the indifference showed itself, how a person responded, and what it revealed.",
      format: "A short evidence-based comparison connecting the story's view of nature to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Koskoosh means by 'the law of life' in Jack London's story. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Law of Life. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Law of Life because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Law of Life: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of nature's indifference to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Law of Life for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Jack London's The Law of Life as a study of literary naturalism, theme, and the idea that nature is indifferent to the individual. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1901, collected in Children of the Frost, 1902) is public domain. The linked Project Gutenberg edition and the linked LibriVox recording are the full Children of the Frost collection, which contains The Law of Life — confirm the specific story before assigning.",
        "Content: a somber naturalist story. An old, blind man is left behind by his tribe to die in the snow (a survival custom) and reflects calmly on death as wolves gather. Thoughtful and bleak but not graphic. Best for high school; preview and follow local policy, and be ready to discuss the depiction of a culture's survival custom with care.",
        "Details here were checked against the story (old, blind Koskoosh; his tribe breaking camp and leaving the aged behind by custom; the small fire and pile of sticks that measure his remaining life; his meditation on the 'law of life' — that nature perpetuates the species, not the individual; his memory of an old bull moose pulled down by a wolf pack; the wolves gathering as the fire dies; his brief resistance with a burning branch; and his final acceptance). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 9–12 ELAR TEKS (19 TAC Ch. 110) strands on theme, author's purpose, literary movements (naturalism), and analysis of how setting shapes meaning. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.11-12.1", "RL.11-12.2", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
