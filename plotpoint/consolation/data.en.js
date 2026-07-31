/* PlotPoint — The Consolation of Philosophy (Boethius).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   features of Boethius's Consolation. Standards are real, applicable Common Core
   codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "consolation",
  storageKey: "plotpoint.consolation.v1",

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
    "vocab.title": "Words for The Consolation of Philosophy",
    "vocab.intro": "{n} terms that unlock the dialogue. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Prisoner's Cell",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the dialogue",
    "relic.q.significance": "The idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to Philosophy's argument, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Wheel of Fortune",
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
    "arcade.title": "Fortune's Wheel",
    "arcade.default": "Sort each good by whether Fortune can take it away.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Goods to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Philosophical Analysis",
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
    "extend.title": "A Modern Consolation",
    "extend.format": "Format",
    "extend.evidence": "The idea from Philosophy I am building on",
    "extend.transfers": "What transfers to my situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the consolation stops working",
    "extend.response": "My reasoned consolation",
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
    "print.item.relic": "Dialogue evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Consolation organizer",
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
      title: "The Consolation of Philosophy",
      author: "Boethius",
      grades: "Grades 11–12",
      genre: "Philosophy · Consolation",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Latin original and classic translations are public domain",
      textAccess: "Students need a public-domain translation of the Consolation (for example, H. R. James's). This room does not reproduce the text.",
      copyright: "The Latin original and older translations (such as H. R. James's) are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "The work is set in prison as its author awaits execution and reflects calmly on suffering, injustice, and death. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/14328",
      audio: "https://librivox.org/the-consolation-of-philosophy-by-boethius/"
    },
    hook: "Condemned and awaiting execution, Boethius is visited in prison by Lady Philosophy. Through their dialogue he asks how anyone can be at peace when fortune turns, the innocent suffer, and everything we own can be taken away.",
    goals: [
      "Understand the setting: a condemned prisoner consoled by a personified Philosophy.",
      "Explain the image of Fortune's wheel and why Philosophy says Fortune's gifts cannot bring lasting happiness.",
      "Analyze the claim that true happiness lies in the highest good, not in wealth, power, or fame.",
      "Transfer Boethius's reasoned consolation to a modern situation of loss or hardship."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a 'consolation.'",
        "Discuss: When something is taken from us, was it ever really 'ours' to keep?"
      ],
      during: [
        "Use the Relic Room to examine one image or idea at a time.",
        "For each of Fortune's gifts, ask: could this be taken away? Then is it true happiness?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to write your own reasoned consolation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Philosophy means by the wheel of Fortune. Include one detail from the dialogue that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Philosophy's arguments (for example, Fortune's fickleness and the true highest good). Explain how together they console Boethius." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Philosophy's reasoning to a modern experience of loss. Explain what transfers, what changes, and where the consolation stops working." }
    },

    vocab: [
      { term: "consolation", def: "Comfort or encouragement given to someone in grief or hardship.", example: "Reasoned comfort offered to a prisoner facing death.", nonexample: "Mocking someone who is suffering.", context: "The whole book offers a consolation through philosophy." },
      { term: "fortune", def: "The workings of chance — good or bad luck, and the changeable things it brings.", example: "Sudden wealth one year and ruin the next.", nonexample: "A truth that never changes.", context: "Philosophy warns Boethius not to trust Fortune." },
      { term: "fickle", def: "Constantly changing; not to be relied on.", example: "Fortune raising someone up, then casting them down.", nonexample: "Something steady and dependable.", context: "Philosophy says Fortune is fickle by her very nature." },
      { term: "adversity", def: "Serious difficulty or misfortune.", example: "Imprisonment and the loss of everything.", nonexample: "A stretch of easy good luck.", context: "Boethius meets great adversity, yet seeks peace of mind." },
      { term: "providence", def: "The idea that a higher order or divine plan guides all things.", example: "A belief that events unfold within a larger order.", nonexample: "Pure random chance with no order at all.", context: "Philosophy distinguishes providence from mere fortune." },
      { term: "free will", def: "The power to make genuine choices of one's own.", example: "Choosing to act rightly even under pressure.", nonexample: "Being forced with no choice at all.", context: "The dialogue asks how free will fits with a higher foreknowledge." },
      { term: "virtue", def: "Moral excellence and goodness of character.", example: "Staying honest and just even in prison.", nonexample: "Abandoning your principles for gain.", context: "Philosophy says the good keep their true worth through virtue." },
      { term: "conscience", def: "The inner sense of right and wrong.", example: "A clear conscience that no one can take from you.", nonexample: "Ignoring whether an act is right.", context: "A good conscience is a good that Fortune cannot seize." },
      { term: "personification", def: "Presenting an idea or thing as a person.", example: "Philosophy appearing as a wise woman who speaks.", nonexample: "Describing an idea in plain, literal terms.", context: "Lady Philosophy is a personification of philosophy itself." },
      { term: "eternal", def: "Outside of time; without beginning or end.", example: "A timeless present that holds all moments at once.", nonexample: "A brief moment that quickly passes.", context: "Philosophy describes the divine view as eternal, seeing all at once." }
    ],

    relic: {
      name: "The Prisoner's Cell",
      intro: "Seven instructional reconstructions of images from Boethius's dialogue — teaching recreations, not copyrighted illustrations. Investigate what each is, its role in the dialogue, and the idea it stands for.",
      artifacts: [
        {
          id: "cell", name: "The Prison Cell", image: "images/cell.png",
          clues: ["Boethius wrote this work while imprisoned.", "He had fallen from high office and was condemned to death.", "The entire dialogue takes place as he awaits his execution."],
          identify: { q: "What is this place?", choices: ["The prison cell where Boethius writes while awaiting execution", "A royal palace", "A university lecture hall", "A marketplace"] },
          purpose: { q: "What is its role in the work?", choices: ["It is the desperate setting that makes his search for consolation urgent", "A comfortable retreat for study", "A courtroom for his trial", "A temple for worship"] },
          significance: { q: "What idea does it show?", choices: ["Philosophy is tested most when everything else has been taken away", "That prisons are pleasant", "That Boethius was guilty", "That philosophy is only for the free"] },
          reveals: "That the whole consolation is written under a sentence of death.",
          conceals: "The full injustice of his case, which the calm dialogue does not dwell on.",
          ace: "Articulate why the setting matters; connect the prison to the urgency of his questions; extend it to seeking meaning during a personal hardship."
        },
        {
          id: "philosophy", name: "Lady Philosophy", image: "images/philosophy.png",
          clues: ["A dignified woman appears to the grieving prisoner.", "She is not a real person but a personification of philosophy itself.", "She gently reasons with him and leads him out of despair."],
          identify: { q: "Who is this figure?", choices: ["Lady Philosophy, a personification of philosophy who consoles Boethius", "The emperor's messenger", "Boethius's wife", "A prison guard"] },
          purpose: { q: "What is her role in the dialogue?", choices: ["To lead Boethius by reason from despair toward understanding", "To announce his release", "To accuse him of crimes", "To bring him food"] },
          significance: { q: "What does she stand for?", choices: ["Reason itself, offering comfort not by pity but by argument", "Blind luck", "Political power", "Physical strength"] },
          reveals: "That Boethius seeks comfort in reasoned argument, not just sympathy.",
          conceals: "Whether reason alone can fully answer the fear of death — the dialogue tests this.",
          ace: "Articulate who Lady Philosophy is; connect personification to the book's method; extend it to a time reason helped you through a hard feeling."
        },
        {
          id: "wheel", name: "The Wheel of Fortune", image: "images/wheel.png",
          clues: ["Fortune is pictured turning a great wheel.", "As it turns, some are raised up and others cast down.", "Philosophy says this rising and falling is simply Fortune's nature."],
          identify: { q: "What is this?", choices: ["The wheel of Fortune, which raises people up and casts them down", "A water wheel for a mill", "A ship's steering wheel", "A potter's wheel"] },
          purpose: { q: "What is its role in the argument?", choices: ["To show that Fortune's gifts are always changing and never secure", "To grind grain", "To power a machine", "To decorate the cell"] },
          significance: { q: "What idea does it stand for?", choices: ["Whatever Fortune gives, she can take away — so it cannot be true happiness", "That luck is always good", "That the wheel never turns", "That we control Fortune"] },
          reveals: "Philosophy's claim that trusting Fortune's gifts sets us up to be crushed.",
          conceals: "How hard it is to stop caring about the things Fortune can give and take.",
          ace: "Articulate the wheel's meaning; connect it to why Fortune's gifts are unreliable; extend it to something people chase today that Fortune could remove."
        },
        {
          id: "falsegoods", name: "The Crown and Coins", image: "images/falsegoods.png",
          clues: ["Philosophy examines the things people usually chase: wealth, power, honor, fame, pleasure.", "She argues each one is incomplete and can be lost.", "None of them, by itself, makes a person truly happy."],
          identify: { q: "What do these represent?", choices: ["The 'false goods' — wealth, power, and fame that cannot bring true happiness", "The true highest good", "Tools for escape", "Gifts from Philosophy"] },
          purpose: { q: "What is their role in the argument?", choices: ["To be examined and shown to be partial, insecure goods", "To reward Boethius", "To bribe the guards", "To prove Fortune is kind"] },
          significance: { q: "What idea do they stand for?", choices: ["Worldly goods are partial and unreliable, not real happiness", "Wealth is the highest good", "Fame lasts forever", "Power cannot be lost"] },
          reveals: "That the things most people pursue cannot, on their own, satisfy.",
          conceals: "Why these goods still feel so compelling even after the argument.",
          ace: "Articulate why these are 'false goods'; connect their insecurity to Fortune's wheel; extend it to a 'false good' people pursue now."
        },
        {
          id: "good", name: "The Highest Good", image: "images/good.png",
          clues: ["Philosophy argues that all the partial goods point toward one complete good.", "This highest good is perfect and cannot be lost.", "In it, true happiness is finally found."],
          identify: { q: "What does this radiant good represent?", choices: ["The highest good, in which true and lasting happiness is found", "A pile of gold", "A crown of office", "A moment of pleasure"] },
          purpose: { q: "What is its role in the argument?", choices: ["To be the true goal that the false goods only imitate", "To reward Fortune", "To decorate the cell", "To measure time"] },
          significance: { q: "What idea does it stand for?", choices: ["Real happiness lies in a complete, unchanging good, not in Fortune's gifts", "Happiness is impossible", "Wealth is the highest good", "Nothing is worth seeking"] },
          reveals: "Philosophy's positive claim: there is a true good beyond Fortune's reach.",
          conceals: "How a person actually reaches or holds onto that good in a hard life.",
          ace: "Articulate what the highest good is; connect it to why it cannot be lost; extend it to what you would call a good that fortune cannot take."
        },
        {
          id: "eternity", name: "The Eternal Circle", image: "images/eternity.png",
          clues: ["The dialogue asks how humans can be free if a higher mind foreknows everything.", "Philosophy answers that the divine view is eternal — outside of time.", "From that view, all moments are seen at once, in a single present."],
          identify: { q: "What does this timeless circle represent?", choices: ["The eternal, timeless view from which all moments are seen at once", "A clock that ticks in prison", "A ring of keys", "A wheel for grinding"] },
          purpose: { q: "What problem does it help solve?", choices: ["How free will can coexist with a higher foreknowledge", "How to escape the cell", "How to measure the hours", "How to bribe a judge"] },
          significance: { q: "What idea does it stand for?", choices: ["Seeing all time at once is not the same as forcing what happens, so free will remains", "That the future is fixed and choice is fake", "That time does not exist", "That knowledge is impossible"] },
          reveals: "Philosophy's subtle answer to the puzzle of freedom and foreknowledge.",
          conceals: "Whether the answer fully satisfies — it is one of the book's most debated ideas.",
          ace: "Articulate the 'eternal present' idea; connect it to preserving free will; extend it to a modern question about prediction and choice."
        },
        {
          id: "verse", name: "The Poem in the Margin", image: "images/verse.png",
          clues: ["The Consolation alternates between prose arguments and short poems.", "After a difficult argument, a poem lets the ideas settle.", "The mix of reason and verse is part of how the book comforts."],
          identify: { q: "What does this poem represent?", choices: ["The verses woven between the prose arguments throughout the work", "A prisoner's escape plan", "A legal document", "A letter home"] },
          purpose: { q: "What is its role in the work?", choices: ["To pause, reflect, and let each argument sink in through beauty as well as logic", "To hide a secret code", "To record the trial", "To pass the time only"] },
          significance: { q: "What does the form show?", choices: ["Consolation works through both reasoned argument and the beauty of verse", "That poetry is useless", "That the book has no structure", "That reason alone is enough"] },
          reveals: "That Boethius consoles the mind with argument and the heart with poetry.",
          conceals: "How carefully the poems are placed to match each stage of the argument.",
          ace: "Articulate why the book mixes prose and verse; connect form to consolation; extend it to how a song or poem has comforted you alongside plain reasons."
        }
      ]
    },

    ctob: {
      name: "The Wheel of Fortune",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Where is Boethius as he receives this consolation? (one word)",
          evidence: ["Boethius has fallen from power and been condemned.", "He writes while confined, awaiting execution.", "The word begins with 'pri…'."],
          hints: ["He is not free.", "Pri…", "He is in prison."],
          answer: "prison"
        },
        {
          type: "mc",
          prompt: "Who visits and consoles Boethius in the dialogue?",
          options: [
            "Lady Philosophy, a personification of philosophy.",
            "The emperor of Rome.",
            "A prison guard.",
            "His accuser at the trial."
          ],
          hints: ["She is not a literal person but an idea in human form.", "Which option names philosophy itself?"]
        },
        {
          type: "word",
          prompt: "Fortune is pictured turning a great ______ that raises people up and casts them down. (one word)",
          evidence: ["Fortune's rising-and-falling is shown by a familiar image.", "It is round and turns.", "The word begins with 'whe…'."],
          hints: ["It is round and it turns.", "Whe…", "It is a wheel."],
          answer: "wheel"
        },
        {
          type: "mc",
          prompt: "Philosophy argues that true happiness is found in —",
          options: [
            "the highest good, not in wealth, power, or fame, which Fortune can take away.",
            "gaining as much money as possible.",
            "winning fame that will last forever.",
            "holding on to political power at any cost."
          ],
          hints: ["Think about which goods Fortune cannot seize.", "Which option is about the highest good?"]
        },
        {
          type: "sequence",
          prompt: "Put the arc of the consolation in order, earliest first.",
          items: [
            "Boethius laments his downfall and the injustice he has suffered.",
            "Philosophy reminds him that Fortune is fickle by nature.",
            "She argues that wealth, power, and fame are not true happiness.",
            "She directs him toward the highest good, which cannot be lost."
          ],
          hints: ["He begins in grief.", "Fortune's fickleness is shown before the false goods are examined.", "The highest good comes last."]
        },
        {
          type: "digit",
          prompt: "Into how many books is the Consolation of Philosophy traditionally divided? Enter the number.",
          evidence: ["The work is organized into a set number of books.", "Each book advances the dialogue a stage further.", "It is traditionally divided into five."],
          hints: ["More than four.", "The number of fingers on one hand.", "It is 5 books."],
          answer: "5"
        }
      ]
    },

    arcade: {
      name: "Fortune's Wheel",
      instruction: "Lady Philosophy argues that Fortune's gifts can always be taken away, while some goods are beyond Fortune's reach. Sort each good: is it a GIFT OF FORTUNE (something that can be lost) or a LASTING GOOD (not in Fortune's power)? Reasoning earns the points.",
      buckets: [
        { id: "fortune", label: "Gift of Fortune (can be lost)", short: "Fortune" },
        { id: "lasting", label: "Lasting good (beyond Fortune)", short: "Lasting" }
      ],
      cards: [
        { text: "Great wealth and property", bucket: "fortune", why: "Riches can be seized or lost — a classic gift of Fortune." },
        { text: "High office and political power", bucket: "fortune", why: "Power depends on circumstances and can be stripped away." },
        { text: "Fame and public reputation", bucket: "fortune", why: "Reputation rests on others' opinions and can vanish." },
        { text: "Bodily pleasure and luxury", bucket: "fortune", why: "Pleasures are fleeting and depend on conditions Fortune controls." },
        { text: "Wisdom and understanding", bucket: "lasting", why: "What you truly understand is not in Fortune's power to remove." },
        { text: "Good character and virtue", bucket: "lasting", why: "Virtue belongs to you; Fortune cannot make you unjust against your will." },
        { text: "A clear conscience", bucket: "lasting", why: "A conscience at peace cannot be confiscated by circumstance." },
        { text: "Seeking the highest good", bucket: "lasting", why: "The pursuit of the true good is not subject to Fortune's wheel." }
      ],
      followup: "Which card was hardest to place? Are any 'lasting goods' partly vulnerable too? Where do you think Boethius draws the line?"
    },

    analysis: {
      mcq: [
        {
          q: "The Consolation is set —",
          options: [
            "in prison, as its condemned author is consoled by Lady Philosophy.",
            "at a royal feast celebrating a victory.",
            "in a peaceful garden with no troubles.",
            "on a long sea voyage."
          ],
          why: "Boethius writes as a condemned prisoner, and the dialogue unfolds as Philosophy consoles him."
        },
        {
          q: "The image of Fortune's wheel is meant to show that —",
          options: [
            "whatever Fortune gives she can take away, so her gifts are never secure.",
            "luck is always on the side of the good.",
            "the future is completely fixed.",
            "wealth, once gained, can never be lost."
          ],
          why: "The turning wheel dramatizes the constant rise and fall of Fortune's gifts."
        },
        {
          q: "Philosophy argues that true happiness is found in —",
          options: [
            "the highest good, which cannot be lost, rather than in wealth, power, or fame.",
            "gathering as much wealth as possible.",
            "winning lasting fame.",
            "clinging to political power."
          ],
          why: "The false goods are shown to be partial and insecure; only the highest good brings lasting happiness."
        },
        {
          q: "About the wicked who seem to prosper, Philosophy argues that —",
          options: [
            "they are actually powerless to reach the true good and are punished by their own wickedness.",
            "they have found real and lasting happiness.",
            "they should be envied.",
            "their success proves Fortune is just."
          ],
          why: "Philosophy claims that turning away from the good is itself a kind of loss and punishment."
        },
        {
          q: "On free will and divine foreknowledge, Philosophy suggests that —",
          options: [
            "a timeless view seeing all moments at once does not force our choices, so free will remains.",
            "foreknowledge proves that no one is ever free.",
            "the future does not exist at all.",
            "human beings cannot make any real choices."
          ],
          why: "Because the divine view is eternal (outside time), seeing an event is not the same as compelling it."
        }
      ],
      short: [
        "Choose one artifact from the Prisoner's Cell. Explain what it is and the idea from Philosophy it stands for.",
        "Explain the image of Fortune's wheel. Why does Philosophy say we should not trust Fortune's gifts?",
        "Philosophy consoles Boethius with reasons rather than pity. Do you find reasoned consolation convincing in the face of real suffering? Explain."
      ],
      paragraph: "Write an evidence-based paragraph. Is Philosophy right that the goods Fortune can take away cannot bring true happiness? Make a claim and support it with specific ideas from the Consolation.",
      aceReflection: "Articulate the difference between Fortune's gifts and lasting goods. Connect two of Philosophy's arguments that develop it. Extend the idea to a modern loss, and name where the consolation becomes hard to accept."
    },

    extend: {
      name: "A Modern Consolation",
      prompt: "Boethius is consoled by reasoning about Fortune, false goods, and the highest good. Choose a modern experience of loss or disappointment (losing a title, a possession, a competition, or public standing). Write a short 'consolation' in Philosophy's style: name what Fortune took, ask whether it was ever truly secure, and point toward a good that cannot be lost.",
      format: "A short reasoned consolation (a few paragraphs or a dialogue), plus a note on which of Philosophy's ideas you used and where the consolation feels hardest to accept."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning about the wheel of Fortune in Boethius's Consolation of Philosophy. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Consolation of Philosophy. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in the Consolation because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Consolation of Philosophy: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to write a modern consolation, in Philosophy's style, about this loss: [loss]. Ask me questions to test whether what was lost was ever secure, and what good might remain. Do not write it for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Consolation of Philosophy for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces Boethius's Consolation through its setting, the wheel of Fortune, the critique of false goods, the highest good, and the puzzle of free will and foreknowledge. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation. The Latin original and older translations (e.g., H. R. James) are public domain; some recent translations remain under copyright.",
        "Details here reflect widely established features (Boethius wrote in prison awaiting execution; the dialogue with a personified Lady Philosophy; the wheel of Fortune; the critique of wealth, power, and fame; the highest good; the eternal-present answer to free will and foreknowledge; the alternation of prose and verse; five books). Confirm specifics against your edition.",
        "The free-will and foreknowledge argument (Book V) is subtle and much debated; treat the room's summary as an entry point, not the final word.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III–IV / advanced ELAR TEKS (19 TAC Ch. 110) strands on central ideas of complex text, structure (including mixed prose and verse), and argument. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.5", "RI.11-12.6", "RL.11-12.4", "RL.11-12.5", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
