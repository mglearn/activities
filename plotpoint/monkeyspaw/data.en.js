/* PlotPoint — The Monkey's Paw (W. W. Jacobs, 1902).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. Standards are
   good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "monkeyspaw",
  storageKey: "plotpoint.monkeyspaw.v1",

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
    "vocab.title": "Words for The Monkey's Paw",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Whites' Parlour",
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
    "ctob.title": "Three Wishes",
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
    "arcade.title": "Wish or Consequence?",
    "arcade.default": "Sort each thing by whether it was wished for or was the consequence.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
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
    "extend.title": "Be Careful What You Wish For",
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
    "print.item.relic": "Parlour evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Wish-and-consequence organizer",
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
      title: "The Monkey's Paw",
      author: "W. W. Jacobs",
      grades: "Grades 7–10",
      genre: "Gothic · Horror · Short story",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1902)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1902, The Monkey's Paw is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A classic horror story. It involves the sudden death of the family's son in an accident, deep grief, and an implied return of the dead. Frightening mood, but no graphic detail. Suitable for middle and early high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/28731",
      audio: "https://librivox.org/the-monkeys-paw-by-ww-jacobs/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Monkey's Paw — a dried, curled talisman resting on a mantel beside a dying fire in a dim parlour."
    },
    hook: "On a stormy night, a soldier home from India brings the White family a strange gift: a shriveled monkey's paw said to grant three wishes. But it was cursed by a holy man to prove that those who defy fate will suffer for it. When Mr. White wishes for a small sum of money, the wish comes true — in the most terrible way imaginable.",
    goals: [
      "Understand the plot of Jacobs's classic horror story and the paw's curse.",
      "Analyze how the author builds suspense and dread through foreshadowing.",
      "Trace how each wish is granted in a horrifying, unexpected way.",
      "Interpret the story's warning about fate, desire, and the cost of interfering with destiny."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of foreshadowing in horror.",
        "Discuss: If you could have three wishes, what could go wrong? Is there a cost to getting what we want?"
      ],
      during: [
        "Use the Whites' Parlour to slow down and read the warnings and the wishes closely.",
        "Track every hint (foreshadowing) that something terrible is coming."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map each wish and its consequence.",
        "Complete the Extend task to connect the story's warning to another tale."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the fakir put a spell on the monkey's paw. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the first wish to its consequence. Explain how the way the wish 'comes true' creates the story's horror." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the warning 'be careful what you wish for' to another story, film, or real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "talisman", def: "An object believed to have magical powers.", example: "A charm said to grant wishes.", nonexample: "An ordinary rock with no meaning.", context: "The monkey's paw is a cursed talisman." },
      { term: "fakir", def: "A holy man or wandering ascetic, especially in South Asia.", example: "The holy man who enchanted the paw.", nonexample: "A traveling merchant selling goods.", context: "A fakir put a spell on the paw to teach a lesson about fate." },
      { term: "fate", def: "The idea that events are decided in advance by a power beyond human control.", example: "A destiny that punishes those who defy it.", nonexample: "A completely free, open future.", context: "The paw's curse is meant to prove that fate rules people's lives." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "A warning to burn the paw before disaster strikes.", nonexample: "A detail with no link to later events.", context: "Jacobs fills the story with foreshadowing." },
      { term: "dread", def: "A heavy feeling of fear about something to come.", example: "The family's growing unease after the first wish.", nonexample: "Calm confidence that all is well.", context: "The story's power comes from mounting dread." },
      { term: "consequence", def: "A result that follows from an action.", example: "The money that arrives as payment for a death.", nonexample: "An action with no result at all.", context: "Every wish brings a terrible consequence." },
      { term: "premonition", def: "A feeling that something bad is about to happen.", example: "A chill of warning before the knock at the door.", nonexample: "A cheerful surprise no one expected.", context: "The story trades on the reader's premonition of horror." },
      { term: "superstition", def: "A belief in magic, luck, or the supernatural.", example: "Trusting a charm to change one's fortune.", nonexample: "Relying only on tested facts.", context: "The paw plays on superstition and warns against it." },
      { term: "suspense", def: "The tense uncertainty of not knowing what will happen next.", example: "Waiting to see what is knocking at the door.", nonexample: "Knowing the outcome from the start.", context: "Jacobs is a master of building suspense." }
    ],

    relic: {
      name: "The Whites' Parlour",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "paw", name: "The Monkey's Paw", image: "images/paw.webp",
          clues: ["A soldier brings a strange object to the White family.", "It is a small, dried, mummified monkey's paw.", "It is said to grant three wishes — but at a price."],
          identify: { q: "What is the monkey's paw?", choices: ["A dried talisman said to grant three wishes", "A real, living animal", "A piece of jewelry", "A child's toy"] },
          purpose: { q: "What is the paw's role in the story?", choices: ["It is the cursed object that drives every event", "It decorates the parlour", "It tells the time", "It has no purpose"] },
          significance: { q: "What does the paw represent?", choices: ["The dangerous wish to bend fate to our desires", "Good luck with no downside", "A harmless souvenir", "The family's wealth"] },
          reveals: "The tempting, dangerous promise at the center of the story.",
          conceals: "The true cost of every wish it grants.",
          ace: "Articulate what the paw is; connect the object to the theme of tempting fate; extend it to why a promise of easy power can be dangerous."
        },
        {
          id: "morris", name: "Sergeant-Major Morris", image: "images/morris.webp",
          clues: ["A guest visits the Whites on a stormy night.", "He is a soldier home after twenty-one years in India.", "He brings the paw — and warns them to leave it alone."],
          identify: { q: "Who brings the paw to the Whites?", choices: ["Sergeant-Major Morris, home from India", "A traveling salesman", "The Whites' son Herbert", "A stranger at the door"] },
          purpose: { q: "What is Morris's role in the story?", choices: ["He delivers the paw and its dire warning", "He grants the wishes himself", "He is the villain", "He never speaks"] },
          significance: { q: "What does Morris's warning reveal?", choices: ["Even someone who has used the paw fears it — a clear warning ignored", "That the paw is harmless", "That Morris is lying", "That the family should wish freely"] },
          reveals: "That the danger is announced clearly before the Whites ignore it.",
          conceals: "What exactly happened to Morris when he used the paw.",
          ace: "Articulate who Morris is; connect his warning to foreshadowing; extend it to why people ignore clear warnings."
        },
        {
          id: "spell", name: "The Fakir's Spell", image: "images/spell.webp",
          clues: ["Long ago, a holy man enchanted the paw.", "He gave it the power to grant three separate men three wishes each.", "His purpose was to prove that those who defy fate will regret it."],
          identify: { q: "Why did the fakir enchant the paw?", choices: ["To show that meddling with fate brings sorrow", "To reward good people with riches", "To play a harmless trick", "To cure the sick"] },
          purpose: { q: "What is the spell's role in the story?", choices: ["It sets the rule — wishes come true, but with a cruel twist", "It protects the family", "It is a blessing", "It does nothing"] },
          significance: { q: "What does the spell reveal about the story's view of fate?", choices: ["Fate cannot be safely bent to human desire", "Wishes always end well", "Fate can be controlled", "Holy men grant blessings"] },
          reveals: "The story's core idea: interfering with fate carries a price.",
          conceals: "Exactly how each wish's price will be paid.",
          ace: "Articulate the fakir's purpose; connect the spell to the theme of fate; extend it to whether people should try to control their destiny."
        },
        {
          id: "first-wish", name: "The First Wish — Two Hundred Pounds", image: "images/first-wish.webp",
          clues: ["The family decides to test the paw.", "At his son's suggestion, Mr. White wishes for money.", "He asks for two hundred pounds to pay off the house."],
          identify: { q: "What does Mr. White wish for first?", choices: ["Two hundred pounds to clear the mortgage", "Eternal life", "A new house", "Fame"] },
          purpose: { q: "What is the first wish's role?", choices: ["It is the modest wish that unleashes the horror", "It saves the family", "It ends the story happily", "It is a joke"] },
          significance: { q: "Why is such a small, sensible wish important?", choices: ["Even a modest, reasonable wish carries a terrible price", "Because the family is greedy", "Because money is evil", "Because the wish fails"] },
          reveals: "That the danger does not depend on greed — even a small wish is deadly.",
          conceals: "The horrifying way the money will actually arrive.",
          ace: "Articulate the first wish; connect a modest wish to a monstrous cost; extend it to how even small desires can have unintended results."
        },
        {
          id: "news", name: "The Knock at the Door", image: "images/news.webp",
          clues: ["The next day, a stranger comes to the Whites' home.", "He is from Maw and Meggins, the company where Herbert worked.", "He brings news that Herbert has been killed in the machinery — and compensation of two hundred pounds."],
          identify: { q: "What news does the visitor bring?", choices: ["That Herbert has died at work, with two hundred pounds' compensation", "That the family has won a prize", "That Herbert is getting married", "That the wish was a mistake"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It reveals the horrifying way the first wish 'came true'", "It is a happy surprise", "It ends the curse", "It is unimportant"] },
          significance: { q: "Why is the amount — two hundred pounds — so chilling?", choices: ["It is exactly what was wished for, but paid for with their son's life", "It is far too little", "It has nothing to do with the wish", "It is a coincidence only"] },
          reveals: "The paw's cruel logic: the wish is granted, at an unbearable cost.",
          conceals: "The even greater horror the grieving parents will invite.",
          ace: "Articulate what the visitor reports; connect the money to the first wish; extend it to how getting what we ask for can be a curse."
        },
        {
          id: "second-wish", name: "The Second Wish", image: "images/second-wish.webp",
          clues: ["Days later, the grieving mother thinks of the paw again.", "She forces her husband to wish their son alive once more.", "Soon after, a slow, heavy knocking begins at the door."],
          identify: { q: "What is the second wish?", choices: ["To bring their dead son Herbert back to life", "To undo the first wish", "For more money", "For the soldier to return"] },
          purpose: { q: "What is the second wish's role?", choices: ["It raises the horror — something is now knocking to come in", "It comforts the family", "It ends the story", "It is never made"] },
          significance: { q: "Why is the knocking so terrifying?", choices: ["What returns may be their son's mangled body, not the son they knew", "It is only the wind", "It is a friendly visitor", "It is the soldier"] },
          reveals: "That trying to undo a loss with the paw invites a worse horror.",
          conceals: "What, exactly, waits on the other side of the door.",
          ace: "Articulate the second wish; connect grief to a dangerous choice; extend it to why we should think before trying to undo the past."
        },
        {
          id: "third-wish", name: "The Third Wish", image: "images/third-wish.webp",
          clues: ["The knocking grows louder as the mother rushes to open the door.", "In terror, the father snatches up the paw.", "He makes a final, desperate wish — and the knocking stops; the road outside is empty."],
          identify: { q: "What is the father's third and final wish?", choices: ["To make whatever is at the door go away", "To bring back the money", "To wish for peace", "To wish the paw away"] },
          purpose: { q: "What is the third wish's role?", choices: ["It ends the horror by undoing the second wish", "It grants the family riches", "It restores Herbert for good", "It has no effect"] },
          significance: { q: "What does the empty road at the end reveal?", choices: ["The father chose to let his son rest rather than face the horror", "That the family lived happily after", "That the wishes never worked", "That Herbert came home safely"] },
          reveals: "The tragic resolution: the last wish sends the horror away, but Herbert is gone.",
          conceals: "What the mother would have seen if she had opened the door.",
          ace: "Articulate the third wish; connect it to the father's terror; extend it to how a story can end in loss rather than rescue."
        }
      ]
    },

    ctob: {
      name: "Three Wishes",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many wishes does the monkey's paw grant to each person? Enter the number.",
          evidence: ["The fakir set a fixed limit on the paw's power.", "It is the classic number of wishes in old tales.", "Mr. White makes exactly this many."],
          hints: ["The classic number of wishes.", "One more than two.", "It grants 3 wishes."],
          answer: "3"
        },
        {
          type: "word",
          prompt: "The cursed talisman at the center of the story is a dried monkey's ______. (one word)",
          evidence: ["A soldier brings it back from India.", "It is a small, mummified animal's foot.", "The word is the story's title object and begins with 'pa…'."],
          hints: ["An animal's foot or hand.", "Pa…", "The word is paw."],
          answer: "paw"
        },
        {
          type: "mc",
          prompt: "Who brings the monkey's paw to the White family?",
          options: [
            "Sergeant-Major Morris, home after years in India.",
            "A stranger who breaks in.",
            "The Whites' son, Herbert.",
            "A shopkeeper in town."
          ],
          hints: ["He is a soldier and an old friend of the family.", "Which option is Sergeant-Major Morris?"]
        },
        {
          type: "digit",
          prompt: "How many pounds does Mr. White wish for with his first wish? Enter the number.",
          evidence: ["He wishes for just enough to clear the house's mortgage.", "His son suggests the modest amount.", "It is two hundred."],
          hints: ["A modest sum to pay off the house.", "Two times one hundred.", "The amount is 200 pounds."],
          answer: "200"
        },
        {
          type: "sequence",
          prompt: "Put the events of the story in order, earliest first.",
          items: [
            "Mr. White wishes for two hundred pounds.",
            "Herbert dies at work, and the company sends exactly two hundred pounds.",
            "The grieving mother makes her husband wish Herbert alive, and a knocking begins.",
            "The father uses the last wish to send the horror away, and the road is left empty."
          ],
          hints: ["It begins with the wish for money.", "The son's death and the money come before the second wish.", "The third wish and the empty road end the story."]
        },
        {
          type: "word",
          prompt: "The story's famous warning is: be careful what you ______ for. (one word)",
          evidence: ["Every wish comes true in a horrible way.", "The paw punishes those who try to bend fate.", "The missing word means to desire something, and begins with 'wi…'."],
          hints: ["What you do when you ask the paw for something.", "Wi…", "The word is wish."],
          answer: "wish"
        }
      ]
    },

    arcade: {
      name: "Wish or Consequence?",
      instruction: "The paw grants each wish — but twists it into horror. Sort each thing: was it something the Whites WISHED FOR (their hope), or the terrible CONSEQUENCE the paw delivered instead? Reasoning earns the points.",
      buckets: [
        { id: "wish", label: "What the Whites wished for", short: "Wish" },
        { id: "consequence", label: "The consequence that came", short: "Consequence" }
      ],
      cards: [
        { text: "Two hundred pounds to pay off the house.", bucket: "wish", why: "Mr. White's modest first wish." },
        { text: "Their dead son Herbert brought back to life.", bucket: "wish", why: "The grieving mother's desperate second wish." },
        { text: "Whatever is at the door to go away.", bucket: "wish", why: "The father's terrified third wish." },
        { text: "A comfortable, happy home like before.", bucket: "wish", why: "The peaceful life the family hoped to keep." },
        { text: "The money arrives as payment for Herbert's death.", bucket: "consequence", why: "The wish is granted — at the cost of their son." },
        { text: "A slow, heavy knocking of the dead at the door.", bucket: "consequence", why: "The second wish brings a horror, not a homecoming." },
        { text: "The road is left empty and silent.", bucket: "consequence", why: "The last wish removes the horror — and Herbert is gone for good." },
        { text: "Grief and terror replace their peace.", bucket: "consequence", why: "Every wish leaves the family worse than before." }
      ],
      followup: "The paw grants wishes but twists each one into horror. What is Jacobs warning readers about fate, grief, and desire? Why does he never show what is at the door?"
    },

    analysis: {
      mcq: [
        {
          q: "The fakir put a spell on the monkey's paw in order to —",
          options: [
            "show that those who try to change their fate will suffer for it.",
            "reward kind people with riches.",
            "cure the sick and injured.",
            "protect travelers in India."
          ],
          why: "The paw's curse exists to prove that meddling with fate brings sorrow."
        },
        {
          q: "Mr. White's first wish is for —",
          options: [
            "two hundred pounds to clear the mortgage.",
            "eternal life.",
            "a grand mansion.",
            "revenge on an enemy."
          ],
          why: "At Herbert's suggestion, he wishes for a modest sum to pay off the house."
        },
        {
          q: "The first wish comes true when —",
          options: [
            "the money arrives as compensation for Herbert's death at work.",
            "Mr. White finds a bag of coins.",
            "the family wins a lottery.",
            "a relative leaves them an inheritance."
          ],
          why: "The paw grants the exact sum — but as payment for their son's life."
        },
        {
          q: "Mrs. White's wish to bring Herbert back leads to —",
          options: [
            "a dreadful knocking at the door, implying his mangled return.",
            "Herbert walking home unharmed.",
            "more money arriving.",
            "the soldier returning."
          ],
          why: "The second wish invites a horror rather than a happy reunion."
        },
        {
          q: "The story's central theme is that —",
          options: [
            "one should be careful what one wishes for, and not interfere with fate.",
            "wishes always make life better.",
            "money solves every problem.",
            "family should never be trusted."
          ],
          why: "Every wish backfires, warning against trying to bend fate to our desires."
        }
      ],
      short: [
        "Choose one artifact from the Whites' Parlour. Explain what it is and what it reveals about the story's meaning.",
        "Jacobs fills the story with foreshadowing. Choose two hints of the coming horror and explain how they build dread.",
        "The father makes the final wish before the mother can open the door. Why? What does his choice show about the story's view of fate and grief?"
      ],
      paragraph: "Write an evidence-based paragraph. How does W. W. Jacobs build suspense and horror in The Monkey's Paw? Make a claim and support it with specific details — the warnings, the wishes, and the way each is granted.",
      aceReflection: "Articulate the story's warning in your own words. Connect two wishes and their consequences that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Be Careful What You Wish For",
      prompt: "The Monkey's Paw warns that getting exactly what we wish for can be a curse. Choose another story, film, myth, or real situation where a wish, a shortcut, or a 'deal' backfires. Explain the connection with evidence: what was desired, how it was granted, and why the outcome turned out to be a warning.",
      format: "A short evidence-based comparison connecting the story's warning to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the fakir cursed the monkey's paw in The Monkey's Paw. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Monkey's Paw. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [wish] connects to [consequence] in The Monkey's Paw because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Monkey's Paw: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's warning to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Monkey's Paw for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of W. W. Jacobs's The Monkey's Paw as a classic of suspense and horror: the cursed talisman, the theme of fate versus desire, and the author's masterful foreshadowing. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1902) is public domain. The linked Project Gutenberg edition and LibriVox recording are public domain — confirm the edition before assigning.",
        "Content: a horror story involving the sudden accidental death of the family's son, deep grief, and the implied return of the dead. Frightening mood; no graphic detail. Suitable for middle and early high school; preview and follow local policy.",
        "Details here were checked against the story (the White family and their son Herbert; Sergeant-Major Morris, home after twenty-one years in India, who brings the paw; the fakir's spell granting three men three wishes each to prove fate should not be defied; Mr. White's first wish for two hundred pounds; Herbert's death at Maw and Meggins and the two-hundred-pound compensation; the mother's second wish and the knocking; the father's third wish and the empty road). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 7–10 ELAR TEKS (19 TAC Ch. 110) strands on plot, theme, author's purpose, and literary devices — especially suspense and foreshadowing. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.3", "RL.8.1", "RL.8.2", "W.7.1", "SL.7.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
