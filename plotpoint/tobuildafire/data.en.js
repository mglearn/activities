/* PlotPoint — To Build a Fire (Jack London, 1908).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "tobuildafire",
  storageKey: "plotpoint.tobuildafire.v1",

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
    "vocab.title": "Words for To Build a Fire",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Yukon Trail",
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
    "ctob.title": "The Cold Snap",
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
    "arcade.title": "Instinct or Intellect?",
    "arcade.default": "Sort each detail by whether it shows the dog's instinct or the man's intellect.",
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
    "extend.title": "Instinct, Intellect, and Nature's Indifference",
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
    "print.item.relic": "Yukon Trail evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Instinct-and-intellect organizer",
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
      title: "To Build a Fire",
      author: "Jack London",
      grades: "Grades 8–10",
      genre: "Naturalism · Adventure · Short story",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1908)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1908, To Build a Fire is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A survival story in which an unnamed man freezes to death in the wilderness. There is real survival peril but no graphic content. Suitable for late middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2429",
      audio: "https://librivox.org/lost-face-and-other-stories-by-jack-london/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking To Build a Fire — a lone traveler bundled against brutal cold on a frozen Yukon trail, a wolf-dog beside him, a small struggling campfire in deep snow."
    },
    hook: "The temperature is around seventy-five below zero, and a confident newcomer sets out alone across the frozen Yukon toward a warm camp. An old-timer warned him never to travel alone in such cold. A wolf-dog trots with him — not out of love, but instinct. One wet foot, one failed fire, and the vast, indifferent cold will decide who reaches the camp.",
    goals: [
      "Understand the plot of London's survival tale and the man's fatal choices.",
      "Analyze naturalism — the vision of nature as vast, cold, and indifferent to human life.",
      "Contrast the man's intellect and overconfidence with the dog's life-saving instinct.",
      "Interpret the story's irony: the man's reason fails while the animal's instinct endures."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of literary naturalism.",
        "Discuss: When does confidence become dangerous? What does nature 'owe' a person?"
      ],
      during: [
        "Use the Yukon Trail relic room to slow down and read each choice, step by step.",
        "Track every warning the man ignores and every instinct the dog obeys."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the man's misjudgments and the story's irony.",
        "Complete the Extend task to weigh instinct against intellect."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the man's confidence leads to his death. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the dog's instinct to the man's intellect. Explain how the gap between them develops the story's view of survival." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of nature and overconfidence to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "naturalism", def: "A style showing nature or fate as a powerful, indifferent force that shapes human lives.", example: "The freezing cold that destroys the man without malice.", nonexample: "A tale where nature rewards a hero for being good.", context: "The story is a classic example of literary naturalism." },
      { term: "indifferent", def: "Showing no care or concern one way or the other.", example: "The vast cold that neither hates nor helps the man.", nonexample: "A force that deliberately protects or punishes.", context: "Nature in the story is utterly indifferent to the man." },
      { term: "instinct", def: "A natural, unlearned drive that guides behavior.", example: "The dog knowing, without thought, that it is too cold to travel.", nonexample: "A skill learned slowly from a book.", context: "The dog survives by instinct, not reason." },
      { term: "hubris", def: "Excessive pride or overconfidence that leads to a downfall.", example: "The man believing he can beat the cold alone.", nonexample: "Carefully respecting a clear warning.", context: "The man's hubris blinds him to the danger." },
      { term: "irony", def: "A gap between what is expected and what actually happens.", example: "The man's reason failing while the dog's instinct saves it.", nonexample: "Events turning out exactly as planned.", context: "The story turns on the irony of intellect losing to instinct." },
      { term: "chechaquo", def: "A Klondike term for a newcomer with no experience of the far North.", example: "A traveler on his first winter in the Yukon.", nonexample: "A seasoned old-timer who has survived many winters.", context: "The man is a chechaquo who underestimates the cold." },
      { term: "frostbite", def: "Injury to the body caused by freezing, often to fingers, toes, or nose.", example: "The man's fingers going numb and useless.", nonexample: "A mild chill that a coat fixes.", context: "Frostbite steals the man's ability to use his hands." },
      { term: "conflagration", def: "A large, destructive fire — here, the life-saving blaze the man needs.", example: "The roaring fire that would dry his frozen feet.", nonexample: "A single unlit match in the snow.", context: "He needs a real conflagration, not a flicker, to survive." },
      { term: "premonition", def: "A feeling that something, often bad, is about to happen.", example: "The dog's uneasy sense that death is near.", nonexample: "Certain knowledge of a safe outcome.", context: "The animal has a premonition of the man's fate." }
    ],

    relic: {
      name: "The Yukon Trail",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "thermometer", name: "Seventy-Five Below", image: "images/thermometer.webp",
          clues: ["The day is far colder than the man realizes at first.", "The temperature is roughly seventy-five degrees below zero.", "The cold is a danger the man treats as a mere inconvenience."],
          identify: { q: "What does this artifact represent?", choices: ["The extreme cold, around seventy-five below zero", "A pleasant winter afternoon", "A summer heat wave", "A gentle rain"] },
          purpose: { q: "What is the extreme cold's role in the story?", choices: ["It is the deadly, indifferent force driving the whole plot", "It is a minor background detail", "It helps the man travel faster", "It is imagined, not real"] },
          significance: { q: "What does the man's attitude to the cold reveal?", choices: ["He registers the number but not its deadly meaning", "He fears the cold too much to move", "He fully respects the danger", "He enjoys the cold"] },
          reveals: "The story's central force: cold so extreme it is beyond ordinary understanding.",
          conceals: "How little the man grasps what the number truly means for his survival.",
          ace: "Articulate what the temperature is; connect it to naturalism; extend it to how a fact can be known but not truly understood."
        },
        {
          id: "oldtimer", name: "The Old-Timer's Warning", image: "images/oldtimer.webp",
          clues: ["An experienced old-timer once warned the man about the far North.", "The warning was never to travel alone in such extreme cold.", "The man dismisses the advice as overly cautious."],
          identify: { q: "What is the old-timer's warning?", choices: ["Never travel alone in the Klondike below fifty below", "Always travel at night", "Never build a fire", "Bring extra food"] },
          purpose: { q: "What is the warning's role in the story?", choices: ["It is the wise advice the man's pride leads him to ignore", "It is a joke with no meaning", "It tells the man to hurry", "It has no effect on the plot"] },
          significance: { q: "What does ignoring the warning reveal?", choices: ["The man trusts his own judgment over hard-won experience", "The old-timer was wrong", "The man is simply unlucky", "The cold is harmless"] },
          reveals: "The gap between inherited wisdom and the newcomer's overconfidence.",
          conceals: "How exactly right the old-timer will turn out to be.",
          ace: "Articulate the warning; connect it to hubris; extend it to a time experience should outweigh confidence."
        },
        {
          id: "dog", name: "The Wolf-Dog", image: "images/dog.webp",
          clues: ["A large husky, part wolf, travels with the man.", "It follows out of instinct, not loyalty or affection.", "Its instinct tells it the day is too cold for travel."],
          identify: { q: "What is the animal traveling with the man?", choices: ["A wolf-dog that follows by instinct", "A tame pet devoted to the man", "A wild wolf hunting him", "A sled team of many dogs"] },
          purpose: { q: "What is the dog's role in the story?", choices: ["It embodies instinct, a survival sense the man lacks", "It leads the man to the camp", "It carries his supplies", "It is only decoration"] },
          significance: { q: "What does the dog reveal about survival?", choices: ["Instinct reads the danger the man's intellect dismisses", "Loyalty saves the man", "Animals feel nothing", "The dog is smarter in every way"] },
          reveals: "Instinct as a survival tool the man's reason cannot replace.",
          conceals: "That the dog feels no bond and will simply move on when the man dies.",
          ace: "Articulate what the dog is; connect its instinct to the man's intellect; extend it to when instinct outperforms reasoning."
        },
        {
          id: "ice", name: "The Hidden Spring", image: "images/ice.webp",
          clues: ["Beneath the snow, hidden springs keep water from fully freezing.", "The man breaks through thin ice and soaks his feet and legs.", "In such cold, wet feet are a deadly emergency."],
          identify: { q: "What happens at the hidden spring?", choices: ["The man breaks through thin ice and gets his feet wet", "The man finds fresh drinking water", "The man crosses safely", "The dog falls in"] },
          purpose: { q: "What is this accident's role in the story?", choices: ["It forces the man to build a life-saving fire at once", "It gives the man a drink", "It slows the dog down", "It ends the cold"] },
          significance: { q: "Why is a wet foot so dangerous here?", choices: ["In extreme cold, wet limbs freeze fast and can be fatal", "It makes the man merely uncomfortable", "It helps him cool off", "It has no real effect"] },
          reveals: "How a single accident becomes a matter of life and death in this climate.",
          conceals: "How narrow the man's margin for error has become.",
          ace: "Articulate the accident; connect it to the story's stakes; extend it to how small mistakes multiply in a hostile setting."
        },
        {
          id: "spruce", name: "The Fire Under the Spruce", image: "images/spruce.webp",
          clues: ["The man builds his crucial fire beneath a snow-laden spruce tree.", "Pulling twigs from the branches jars loose the snow above.", "The falling snow smothers and puts out his fire."],
          identify: { q: "What goes wrong with the fire under the spruce?", choices: ["Snow falls from the branches and smothers the fire", "The wood is too wet to catch", "The wind blows it out", "The man forgets to light it"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It is the man's fatal mistake — his best chance, lost", "It is a minor delay", "It warms the dog", "It saves the man's feet"] },
          significance: { q: "What does the buried fire reveal?", choices: ["A small misjudgment can undo a person in an indifferent world", "Nature is punishing him for a crime", "The man had no chance from the start", "The spruce was cursed"] },
          reveals: "The single misstep that seals the man's fate.",
          conceals: "That the man cannot recover from losing this one fire.",
          ace: "Articulate what happens; connect the lost fire to naturalism; extend it to how one error can outweigh much effort."
        },
        {
          id: "matches", name: "The Frozen Matches", image: "images/matches.webp",
          clues: ["After the fire dies, the man tries to light another with matches.", "His fingers are so numb he can barely feel or move them.", "He burns his hands trying to hold the flame and still fails."],
          identify: { q: "Why can't the man light a new fire?", choices: ["His fingers are too numb to strike and hold the matches", "He has run out of matches entirely", "The matches are wet from the spring", "He forgot where he put them"] },
          purpose: { q: "What is the failed matches moment's role?", choices: ["It shows his body failing him just when he needs it most", "It proves matches never work in cold", "It saves his hands", "It has no bearing on the plot"] },
          significance: { q: "What does his numb, burning failure reveal?", choices: ["Intellect is helpless when the body can no longer obey it", "He is simply careless", "The cold is on his side", "He never truly tried"] },
          reveals: "The moment the man's reason can no longer command his freezing body.",
          conceals: "How close panic now is to overtaking him.",
          ace: "Articulate why he fails; connect body and mind; extend it to how a plan means nothing without the means to carry it out."
        },
        {
          id: "camp", name: "The Distant Camp", image: "images/camp.webp",
          clues: ["The man is traveling toward a camp where his companions and food wait.", "He never reaches it; he accepts death and freezes on the trail.", "The dog, sensing death, finally trots on toward the camp alone."],
          identify: { q: "What is the distant camp in the story?", choices: ["The warm destination with fire, food, and companions", "A place the man is fleeing", "The old-timer's home", "An abandoned ruin"] },
          purpose: { q: "What is the camp's role in the ending?", choices: ["It is the survival the man dies just short of reaching", "It is where the story begins", "It is a hidden trap", "It is only a dream"] },
          significance: { q: "What does the dog going on alone reveal?", choices: ["Instinct endures and moves toward life after the man's reason fails", "The dog mourns the man deeply", "The camp does not exist", "The man was rescued"] },
          reveals: "The story's final irony — instinct survives and walks toward warmth as the man does not.",
          conceals: "Any comfort or meaning; nature simply continues, indifferent.",
          ace: "Articulate what the camp represents; connect the dog's departure to the story's theme; extend it to what the ending says about nature's indifference."
        }
      ]
    },

    ctob: {
      name: "The Cold Snap",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "Roughly how many degrees below zero is it on the man's journey? Enter the number.",
          evidence: ["The story stresses a cold far beyond ordinary winter.", "It is described as about seventy-five degrees below zero.", "Seventy plus five: the number is 75."],
          hints: ["Seventy-something below zero.", "Seventy plus five.", "The number is 75."],
          answer: "75"
        },
        {
          type: "word",
          prompt: "The animal that travels with the man is a wolf-______. (one word)",
          evidence: ["It is a large husky, part wild.", "It follows by instinct, not affection.", "It is a wolf-dog — the missing word is dog."],
          hints: ["A husky, part wolf.", "Not a cat — a…", "The word is dog."],
          answer: "dog"
        },
        {
          type: "mc",
          prompt: "Why does the man's crucial fire go out?",
          options: [
            "Snow falls from the spruce branches above and smothers it.",
            "A gust of wind blows it out.",
            "He runs out of wood.",
            "The dog knocks it over."
          ],
          hints: ["Think about where he builds it.", "What is heavy on the branches overhead?"]
        },
        {
          type: "mc",
          prompt: "What warning from the old-timer does the man ignore?",
          options: [
            "Never travel alone in the Klondike in such extreme cold.",
            "Never build a fire near a tree.",
            "Always carry two dogs.",
            "Never drink the spring water."
          ],
          hints: ["The warning is about traveling.", "Which option is about not going alone?"]
        },
        {
          type: "word",
          prompt: "The literary style showing nature as a vast, uncaring force is called ______. (one word)",
          evidence: ["The cold neither hates nor helps the man.", "Nature simply acts, without mercy or malice.", "The style is naturalism — the word is naturalism."],
          hints: ["Nature as an indifferent force.", "It starts with 'natural…'", "The word is naturalism."],
          answer: "naturalism"
        },
        {
          type: "sequence",
          prompt: "Put the man's ordeal in order, earliest first.",
          items: [
            "The man sets out alone in extreme cold, ignoring the old-timer's warning.",
            "He breaks through thin ice and soaks his feet at a hidden spring.",
            "He builds a fire under a spruce, and falling snow smothers it.",
            "His numb fingers fail at the matches, and he finally freezes on the trail."
          ],
          hints: ["It begins before any accident, with the choice to travel alone.", "The wet feet come before the fire he must build to dry them.", "Freezing on the trail is the final event."]
        }
      ]
    },

    arcade: {
      name: "Instinct or Intellect?",
      instruction: "London contrasts the dog's instinct with the man's intellect. Sort each detail: does it show the DOG'S INSTINCT (its wordless survival sense), or the MAN'S INTELLECT (his conscious reasoning and choices)? Reasoning earns the points.",
      buckets: [
        { id: "instinct", label: "The dog's instinct", short: "Instinct" },
        { id: "intellect", label: "The man's intellect", short: "Intellect" }
      ],
      cards: [
        { text: "Sensing, without thought, that it is too cold to travel.", bucket: "instinct", why: "The dog's body knows the danger with no reasoning at all." },
        { text: "Wanting to burrow into the snow and wait out the cold.", bucket: "instinct", why: "A wordless survival drive pulls the dog toward shelter." },
        { text: "Feeling uneasy, a premonition, as the man weakens.", bucket: "instinct", why: "The animal senses approaching death by instinct." },
        { text: "Trotting on toward the camp and food after the man dies.", bucket: "instinct", why: "Instinct moves the dog toward life and warmth." },
        { text: "Reading the thermometer as just a number, not a death sentence.", bucket: "intellect", why: "The man reasons about the cold but misjudges its meaning." },
        { text: "Deciding the old-timer's warning is overly cautious.", bucket: "intellect", why: "A conscious, prideful judgment overrides good advice." },
        { text: "Planning to build a fire to dry his soaked feet.", bucket: "intellect", why: "The man reasons out a survival plan step by step." },
        { text: "Choosing to build that fire beneath a snow-laden spruce.", bucket: "intellect", why: "A deliberate choice by the man — and a fatal misjudgment." }
      ],
      followup: "The dog's instinct outlasts the man's intellect. What does that reversal suggest about survival and about human confidence? Support your answer with evidence."
    },

    analysis: {
      mcq: [
        {
          q: "The man's central flaw in the story is —",
          options: [
            "overconfidence that blinds him to the cold's true danger.",
            "cowardice that keeps him from moving.",
            "cruelty toward the dog.",
            "laziness that makes him stop early."
          ],
          why: "His hubris — trusting his own judgment over the old-timer's warning — drives his downfall."
        },
        {
          q: "Nature in the story is best described as —",
          options: [
            "vast and indifferent, neither helping nor hating the man.",
            "a kind protector of the worthy.",
            "an evil force hunting the man.",
            "a gentle background with no power."
          ],
          why: "The naturalist vision shows nature as an impersonal force indifferent to human life."
        },
        {
          q: "The man's fire fails because —",
          options: [
            "snow from the spruce branches falls and smothers it.",
            "he has no matches left.",
            "the dog puts it out.",
            "there is no wood anywhere."
          ],
          why: "Building under the snow-laden spruce is the fatal misjudgment that dooms him."
        },
        {
          q: "The dog contrasts with the man mainly because it —",
          options: [
            "survives by instinct rather than conscious reasoning.",
            "loves the man and tries to save him.",
            "is smarter than the man in every way.",
            "shares the man's overconfidence."
          ],
          why: "The dog's instinct reads dangers the man's intellect dismisses."
        },
        {
          q: "The story's ending is ironic mainly because —",
          options: [
            "the animal's instinct outlasts the man's reason.",
            "the man is rescued at the last moment.",
            "the cold suddenly breaks.",
            "the dog dies with the man."
          ],
          why: "The man's intellect fails while the dog's instinct carries it on toward life."
        }
      ],
      short: [
        "Choose one artifact from the Yukon Trail. Explain what it is and what it reveals about the story's meaning.",
        "Explain two ways the man's overconfidence leads to his death, using evidence from the story.",
        "The dog trots on toward the camp after the man dies. What does this ending reveal about the story's view of nature and survival?"
      ],
      paragraph: "Write an evidence-based paragraph. How does London use the man and the dog to develop the theme of instinct versus intellect? Make a claim and support it with specific details about their choices and their fates.",
      aceReflection: "Articulate what the story suggests about nature and human confidence in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Instinct, Intellect, and Nature's Indifference",
      prompt: "The man reasons carefully yet dies, while the dog, guided by instinct, survives. Choose another story, film, or real situation where confidence meets an indifferent or overpowering force. Explain the connection with evidence: what was the danger, how did the person or animal respond, and what did that response cost or save?",
      format: "A short evidence-based comparison connecting the story's view of instinct, intellect, and indifferent nature to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the man's confidence leads to his death in To Build a Fire. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in To Build a Fire. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in To Build a Fire because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about To Build a Fire: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of instinct and indifferent nature to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of To Build a Fire for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Jack London's To Build a Fire as a study of literary naturalism, the contrast between instinct and intellect, and the irony of an indifferent nature. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The well-known story (1908) is public domain. The linked Project Gutenberg edition should be confirmed as the 1908 version before assigning; an earlier, shorter 1902 version also exists and differs in ending.",
        "Content: a survival tale in which an unnamed man freezes to death. Real peril but no graphic content. Suitable for late middle and high school; preview and follow local policy.",
        "Details here were checked against the well-known 1908 version (an unnamed newcomer, or chechaquo, traveling alone toward a camp; roughly seventy-five below zero; the old-timer's warning against traveling alone below fifty below; a wolf-dog following by instinct; breaking through thin ice over a hidden spring; a fire built under a spruce that is smothered by falling snow; numb fingers failing at the matches; the man freezing while the dog trots on toward the camp). All phrasing is paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–10 ELAR TEKS (19 TAC Ch. 110) strands on theme, author's purpose, conflict (person vs. nature), irony, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.2", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
