/* PlotPoint — The Minister's Black Veil (Nathaniel Hawthorne, 1836). PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (Hooper's words and
   the sermon are described, not quoted, with only brief public-domain phrases).
   The story is studied as literature — symbol, parable, irony, ambiguity.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "blackveil",
  storageKey: "plotpoint.blackveil.v1",

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
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Minister's Black Veil",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Behind the Black Veil",
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
    "ctob.title": "The Face Behind the Crape",
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
    "arcade.title": "What the Veil Hides or What It Reveals?",
    "arcade.default": "Sort each detail by what the veil does in the story.",
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
    "extend.title": "The Veil We All Wear",
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
    "print.item.relic": "Black veil evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Veil-we-all-wear organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/The_Minister%27s_Black_Veil",
      title: "The Minister's Black Veil",
      author: "Nathaniel Hawthorne",
      grades: "English III",
      genre: "Short story · Dark Romanticism · Parable",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1836)",
      textAccess: "A short public-domain story; use your class's copy or any public-domain text.",
      copyright: "Written in 1836, The Minister's Black Veil is in the public domain. This room studies it as literature, paraphrasing and using only brief public-domain quotations rather than reproducing the full text.",
      contentNote: "Appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school), with implementation no earlier than 2030–2031. Studied as literature — symbol, parable, irony, and ambiguity. Confirm against local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Minister's Black Veil — a Puritan minister at a pulpit, his face hidden behind a simple black crape veil that shows only his mouth and chin."
    },
    hook: "One Sunday, the respected Reverend Mr. Hooper climbs to his pulpit wearing a simple black veil that hides his whole face but his mouth and chin. He never explains it. He never takes it off — not for his fiancée, not for his own deathbed. And as the town grows afraid of the man behind the crape, the veil begins to ask a harder question: what is everyone else hiding?",
    goals: [
      "Understand the plot of Hawthorne's parable and how the town, Elizabeth, and Hooper each respond to the veil.",
      "Analyze the black veil as a central symbol of secret sin and the barrier between people.",
      "Trace Hawthorne's use of irony and ambiguity — a veil that hides yet reveals, with a cause never explained.",
      "Interpret the story's view of hidden guilt, isolation, and the 'veil' every person wears."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a symbol and a parable.",
        "Discuss: What do people hide from one another, and why? What would happen if a secret were made visible?"
      ],
      during: [
        "Use the Relic Room to slow down and read each moment the veil appears — first Sunday, sermon, plea, deathbed.",
        "Track how others react to the veil, since Hawthorne builds Hooper's character through their fear."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the symbol, the irony, and the parable's meaning.",
        "Complete the Extend task to carry the 'we all wear a veil' idea into another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what the black veil comes to stand for by the end of the story. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the veil that hides Hooper's face to the 'black veil' he says he sees on every face. Explain how the same symbol both isolates him and reveals a truth about everyone." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea of secret sin, or the 'we all wear a veil' claim, to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "symbol", def: "An object or image that stands for a larger idea or meaning.", example: "The black veil standing for secret sin.", nonexample: "A word used only for its plain, literal meaning.", context: "The veil is the story's central symbol." },
      { term: "parable", def: "A short story that teaches a moral or spiritual lesson.", example: "A tale whose events point to a truth about people.", nonexample: "A news report of facts with no moral point.", context: "Hawthorne even subtitles the story 'A Parable.'" },
      { term: "allegory", def: "A story whose characters and events stand for hidden meanings.", example: "The veil representing the barriers between all people.", nonexample: "A story that means only what it literally says.", context: "The veil gives the story an allegorical layer." },
      { term: "irony", def: "A contrast between what seems true and what is actually true.", example: "A veil meant to hide that ends up revealing a truth.", nonexample: "A statement that means exactly what it says.", context: "The story turns on irony — the veil hides yet reveals." },
      { term: "ambiguity", def: "Openness to more than one meaning; a deliberate lack of a single answer.", example: "Hooper never explaining what, if anything, he hides.", nonexample: "A fact stated so clearly it has one meaning.", context: "Hawthorne leaves the veil's cause in ambiguity." },
      { term: "theme", def: "The central idea or insight about life a work explores.", example: "Secret sin and the hidden barriers between people.", nonexample: "The mere subject or setting of a story.", context: "The story's theme is hidden guilt and isolation." },
      { term: "characterization", def: "The methods a writer uses to reveal a character.", example: "Showing Hooper through the townsfolk's fear of him.", nonexample: "Naming a character without revealing anything about them.", context: "Hawthorne uses others' reactions for characterization." },
      { term: "crape", def: "A thin, dull black cloth traditionally worn as a sign of mourning.", example: "The dark fabric Hooper folds over his face.", nonexample: "A bright, cheerful silk ribbon.", context: "Hooper's veil is a simple piece of black crape." },
      { term: "congregation", def: "The group of people gathered to worship at a church.", example: "The Milford townsfolk seated before Hooper's pulpit.", nonexample: "A single person praying alone at home.", context: "The veil unsettles Hooper's whole congregation." }
    ],

    relic: {
      name: "Behind the Black Veil",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "veil", name: "The Black Veil Itself", image: "images/veil.webp",
          clues: ["It is a simple piece of black crape, the cloth of mourning.", "Folded double, it hides all of Hooper's face except his mouth and chin.", "He puts it on one Sunday and never takes it off again for life."],
          identify: { q: "What is the black veil?", choices: ["A piece of black crape that hides Hooper's face except mouth and chin", "A mask worn only at a festival", "A bandage over an injury", "A crown of office"] },
          purpose: { q: "What is the veil's role in the story?", choices: ["It is the central symbol the whole story revolves around", "It is a passing costume he removes at home", "It is a gift from Elizabeth", "It has no importance"] },
          significance: { q: "What does the veil most stand for?", choices: ["Secret sin — and the barrier every person keeps from others", "Only a fashion of the time", "Hooper's poor eyesight", "A sign of wealth"] },
          reveals: "The single image the entire parable is built around.",
          conceals: "What — if anything — Hooper is actually hiding is never told.",
          ace: "Articulate what the veil is made of; connect it to secret sin; extend it to why one small object can carry a whole story's meaning."
        },
        {
          id: "congregation", name: "The Sunday Congregation's Alarm", image: "images/congregation.webp",
          clues: ["Hooper first wears the veil on an ordinary Sunday morning.", "The congregation is startled and disturbed by it.", "Some feel he has become a stranger; the whole service takes on a chill."],
          identify: { q: "What happens when Hooper first appears in the veil?", choices: ["His congregation is startled and unsettled", "They cheer for the new fashion", "No one notices any change", "They demand he leave the church"] },
          purpose: { q: "What is this first appearance's role in the story?", choices: ["It launches the town's fear and shows the veil's power over people", "It ends the story", "It is a dream Hooper has", "It is a private moment no one sees"] },
          significance: { q: "What does the congregation's alarm reveal?", choices: ["A hidden face makes even a familiar man feel like a stranger", "That the townsfolk dislike sermons", "That the church is nearly empty", "That the veil is beautiful"] },
          reveals: "How quickly a barrier turns a trusted person into someone feared.",
          conceals: "That the fear may say more about the watchers than about Hooper.",
          ace: "Articulate the congregation's reaction; connect it to Hawthorne's use of others' fear; extend it to how appearances shape how we judge people."
        },
        {
          id: "sermon", name: "The Sermon on Secret Sin", image: "images/sermon.webp",
          clues: ["With the veil on, Hooper preaches about secret sin.", "The sermon feels unusually powerful and frightening.", "Listeners feel he has somehow seen the sins they hide from everyone."],
          identify: { q: "What is Hooper's sermon that day about?", choices: ["Secret sin — the wrongs people hide from one another", "The weather and the harvest", "The history of the town", "A cheerful holiday"] },
          purpose: { q: "What is the sermon's role in the story?", choices: ["It links the veil directly to the theme of hidden guilt", "It explains why he wears the veil", "It is about a different minister", "It has nothing to do with the veil"] },
          significance: { q: "Why does the veil make the sermon so powerful?", choices: ["It makes listeners feel their own hidden sins are exposed", "It makes his voice louder", "It proves he is a poor speaker", "It puts the crowd to sleep"] },
          reveals: "The veil turning a sermon on secret sin into something deeply personal.",
          conceals: "Whether Hooper preaches from his own guilt or only about others'.",
          ace: "Articulate the sermon's subject; connect the veil to its power; extend it to why a symbol can make an idea feel true."
        },
        {
          id: "elizabeth", name: "Elizabeth's Plea and Departure", image: "images/elizabeth.webp",
          clues: ["Elizabeth, Hooper's fiancée, is calm and loving.", "She asks him to lift the veil just once, for her.", "When he gently refuses and hints at its meaning, she is frightened and leaves him."],
          identify: { q: "Who is Elizabeth, and what does she ask?", choices: ["His fiancée, who asks him to lift the veil just once", "A stranger who mocks the veil", "His sister, who made the veil", "A child afraid of him"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It shows the veil costing Hooper love and companionship", "It reveals what he is hiding", "It removes the veil for good", "It has no effect on him"] },
          significance: { q: "What does Elizabeth's departure reveal?", choices: ["The veil isolates Hooper even from those who love him", "That she never cared for him", "That the veil was a joke", "That Hooper is glad she left"] },
          reveals: "The human cost of the barrier — love broken by a veil that will not lift.",
          conceals: "What Hooper whispers to her about the veil's deeper meaning.",
          ace: "Articulate Elizabeth's request; connect the refusal to isolation; extend it to how a hidden self can push away the people closest to us."
        },
        {
          id: "minister", name: "The Feared, Effective Minister", image: "images/minister.webp",
          clues: ["Over the years the veil makes Hooper feared but strangely powerful.", "Dying and guilty sinners send for him, and no other minister.", "He seems to share and understand their hidden guilt."],
          identify: { q: "How do the veil years change Hooper's ministry?", choices: ["He becomes feared yet unusually effective with the guilty", "He is forced to stop preaching", "He becomes cheerful and popular", "He leaves the town entirely"] },
          purpose: { q: "What is this stretch of years' role in the story?", choices: ["It shows the veil deepening both his isolation and his spiritual power", "It ends the parable", "It explains the veil's origin", "It undoes all the fear"] },
          significance: { q: "Why do dying sinners call for the veiled minister?", choices: ["He seems to share their hidden guilt and understand it", "He is the only minister in the region", "He promises to remove the veil", "He tells them cheerful stories"] },
          reveals: "How the very thing that isolates Hooper also lets him reach the guilty.",
          conceals: "Whether his power comes from wisdom or from his own hidden sin.",
          ace: "Articulate how the veil changes his ministry; connect fear to spiritual power; extend it to how suffering or difference can deepen empathy."
        },
        {
          id: "deathbed", name: "The Deathbed Refusal", image: "images/deathbed.webp",
          clues: ["Old and dying, Hooper still wears the veil.", "Those at his bedside try to lift it from his face.", "He rouses himself with sudden strength and refuses to let them remove it."],
          identify: { q: "What happens at Hooper's deathbed?", choices: ["He refuses to let anyone lift the veil, even at the end", "He finally takes the veil off willingly", "He explains the whole mystery", "He gives the veil to Elizabeth"] },
          purpose: { q: "What is the deathbed scene's role in the story?", choices: ["It brings the veil's meaning to its climax and final statement", "It begins the story", "It is a false alarm; he recovers", "It removes all mystery"] },
          significance: { q: "What does his refusal to lift it, even dying, reveal?", choices: ["The veil's meaning matters to him more than any comfort or explanation", "That he forgot it was there", "That he was never serious about it", "That he feared the room"] },
          reveals: "Hooper's commitment to the veil's truth, carried to his last breath.",
          conceals: "The face beneath — kept hidden even in death.",
          ace: "Articulate the deathbed refusal; connect it to the veil's meaning; extend it to why some truths a person will guard to the very end."
        },
        {
          id: "everyface", name: "\"On Every Face a Black Veil\"", image: "images/everyface.webp",
          clues: ["As he dies, Hooper finally speaks about the veil's meaning.", "He cries that he sees a black veil on every face around him.", "He means that everyone hides secret sins from one another."],
          identify: { q: "What does Hooper declare as he dies?", choices: ["He sees a black veil on every face — all people hide secret sin", "He confesses a specific crime", "He says the veil meant nothing", "He names who wronged him"] },
          purpose: { q: "What is this final claim's role in the story?", choices: ["It reveals the parable's meaning: everyone wears a veil", "It solves the mystery of his own sin", "It ends the fear of him", "It is a joke"] },
          significance: { q: "What truth does his last cry reveal?", choices: ["The barrier of hidden guilt is universal, not his alone", "That only he ever had secrets", "That the veil was only cloth", "That the town was innocent"] },
          reveals: "The parable's point — the veil belongs to everyone, seen or not.",
          conceals: "Whether the listeners will accept a truth about themselves.",
          ace: "Articulate Hooper's final claim; connect his veil to everyone's; extend it to whether the 'veil we all wear' is honest, necessary, or both."
        }
      ]
    },

    ctob: {
      name: "The Face Behind the Crape",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The single object at the center of the story — and its master symbol — is the black ______. (one word)",
          evidence: ["It is a piece of black crape folded over Hooper's face.", "It hides everything but his mouth and chin.", "The word names the cloth barrier and begins with 'v…'."],
          hints: ["The cloth that hides his face.", "V…", "The word is veil."],
          answer: "veil"
        },
        {
          type: "mc",
          prompt: "What is Hooper's sermon about on the day he first wears the veil?",
          options: [
            "Secret sin — the wrongs people hide from one another.",
            "The joys of the harvest season.",
            "The history of the town of Milford.",
            "The importance of fine clothing."
          ],
          hints: ["It makes listeners feel their own hidden guilt.", "Which option is about wrongs people keep hidden?"]
        },
        {
          type: "mc",
          prompt: "How does Elizabeth respond when Hooper will not lift the veil for her?",
          options: [
            "Frightened, she breaks off their engagement and leaves him.",
            "She laughs and forgets about it.",
            "She tears the veil off herself.",
            "She agrees to wear a veil too."
          ],
          hints: ["She loves him but is disturbed by the veil.", "Which option ends their engagement?"]
        },
        {
          type: "digit",
          prompt: "Counting the whole story, how many different colors is Hooper's veil? (It is described with a single color — black.) Enter the number.",
          evidence: ["The veil is always called a 'black' veil.", "It is a piece of black crape, and no other color is ever named.", "Count the number of distinct colors: just the one."],
          hints: ["The veil is only ever one color.", "How many colors are named for it — only black.", "The number is 1."],
          answer: "1"
        },
        {
          type: "sequence",
          prompt: "Put the veil's story in order, earliest first.",
          items: [
            "Hooper appears one Sunday in the black veil and preaches on secret sin.",
            "Elizabeth asks him to lift it once, then leaves him when he refuses.",
            "For years the veiled minister is feared yet sought by dying sinners.",
            "On his deathbed he refuses to lift it and says all faces wear a black veil."
          ],
          hints: ["It begins on the first Sunday in church.", "Elizabeth's plea comes before the long years of ministry.", "The deathbed cry is the final scene."]
        },
        {
          type: "mc",
          prompt: "What does Hooper mean when he says, as he dies, that he sees a black veil on every face?",
          options: [
            "Everyone hides secret sins and inner guilt from one another.",
            "Everyone in the room is literally wearing crape.",
            "No one in the town has ever sinned.",
            "The veil was only a piece of cloth with no meaning."
          ],
          hints: ["He is stating the parable's moral about all people.", "Which option is about hidden sin in everyone?"]
        }
      ]
    },

    arcade: {
      name: "What the Veil Hides or What It Reveals?",
      instruction: "Hawthorne's veil works two ways at once. Sort each detail: does it show WHAT THE VEIL HIDES (secrecy, sin, the face kept from others), or WHAT THE VEIL REVEALS (a truth about everyone)? Reasoning earns the points.",
      buckets: [
        { id: "hides", label: "What the veil hides", short: "Hides" },
        { id: "reveals", label: "What the veil reveals", short: "Reveals" }
      ],
      cards: [
        { text: "Hooper's face, covered except for his mouth and chin.", bucket: "hides", why: "The crape literally conceals his features." },
        { text: "Whatever secret sin or guilt he may carry.", bucket: "hides", why: "The story never tells what, if anything, he hides." },
        { text: "The reason he first put the veil on.", bucket: "hides", why: "Its cause is left ambiguous and unexplained." },
        { text: "The face he keeps from Elizabeth even in love.", bucket: "hides", why: "He refuses to lift it, hiding himself from her." },
        { text: "That every person hides secret sins from others.", bucket: "reveals", why: "His deathbed cry states this universal truth." },
        { text: "The barrier that already stands between all people.", bucket: "reveals", why: "The veil makes visible a wall everyone quietly keeps." },
        { text: "The hidden guilt of the dying sinners who seek him.", bucket: "reveals", why: "The veil draws out and exposes others' concealed guilt." },
        { text: "How quickly fear turns a trusted man into a stranger.", bucket: "reveals", why: "The town's reaction exposes how appearance shapes judgment." }
      ],
      followup: "The same veil that hides Hooper's face reveals a truth about everyone. That double action is irony. Which detail feels most powerful because it does both at once, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "The black veil in the story functions mainly as —",
          options: [
            "a symbol of secret sin and the barrier between people.",
            "a disguise for a crime he plans to commit.",
            "a fashion Hooper wears to impress the town.",
            "a medical covering for an injured face."
          ],
          why: "Hawthorne builds the whole parable around the veil as a symbol of hidden guilt."
        },
        {
          q: "The congregation reacts to Hooper's veil by —",
          options: [
            "growing frightened and treating him as a stranger.",
            "ignoring it completely.",
            "praising him for a bold new style.",
            "demanding a written explanation at once."
          ],
          why: "Their fear shows how a hidden face turns a familiar man into someone to avoid."
        },
        {
          q: "Elizabeth breaks off the engagement because —",
          options: [
            "Hooper will not lift the veil even once for her, and it frightens her.",
            "she has fallen in love with another man.",
            "she is leaving the town of Milford.",
            "Hooper asks her to leave."
          ],
          why: "The veil costs Hooper love, isolating him from even those closest to him."
        },
        {
          q: "On his deathbed, Hooper declares that —",
          options: [
            "he sees a black veil on every face — all people hide secret sin.",
            "he regrets ever wearing the veil.",
            "he committed a specific crime he now confesses.",
            "the veil never meant anything at all."
          ],
          why: "His final cry states the parable's meaning: the veil belongs to everyone."
        },
        {
          q: "Hawthorne keeps the story powerful mainly through —",
          options: [
            "a single haunting symbol and the ambiguity of its cause.",
            "fast action and a chase scene.",
            "graphic violence and gore.",
            "a supernatural monster."
          ],
          why: "The story's force comes from the veil's symbolism and the meaning left open."
        }
      ],
      short: [
        "Choose one artifact from Behind the Black Veil. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the veil works ironically — hiding Hooper's face yet revealing a truth about everyone. Use two details.",
        "Hawthorne never tells us what, if anything, Hooper is hiding. Why might he leave this ambiguous, and how does the ambiguity strengthen the parable?"
      ],
      paragraph: "Write an evidence-based paragraph. What does the black veil come to symbolize by the end of the story? Make a claim and support it with specific details about the sermon, Elizabeth's departure, and Hooper's deathbed words.",
      aceReflection: "Articulate what the story suggests about secret sin in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Veil We All Wear",
      prompt: "Hooper's dying claim is that everyone wears a 'black veil' — everyone hides secret sins and inner selves from others. Choose another story, film, or real situation about hidden selves or secret guilt. Explain the connection with evidence: what is hidden, why, and what it costs the person to keep it veiled.",
      format: "A short evidence-based comparison connecting the story's 'we all wear a veil' idea to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what the black veil symbolizes in The Minister's Black Veil. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Minister's Black Veil. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Minister's Black Veil because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Minister's Black Veil: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's 'we all wear a veil' idea to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Minister's Black Veil for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Hawthorne's The Minister's Black Veil as literature — a study of the veil as a central symbol, the parable/allegory form, irony, and ambiguity, with the theme of secret sin and the barriers between people. The story is public domain; it is studied as literature, paraphrased with only brief public-domain quotations rather than reproduced in full. Relic artifacts are labeled instructional reconstructions, and every response stays on the student's device.",
      reviewNotes: [
        "This work appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school), with implementation no earlier than the 2030–2031 school year. Confirm the requirement and timeline against your district's plan.",
        "The story (1836) is public domain. This room paraphrases and uses only brief public-domain quotations; use your class's copy or any public-domain edition, and confirm the edition before assigning.",
        "Teach as literature: focus on the black veil as symbol, the subtitle 'A Parable' and allegorical reading, dramatic and situational irony (a veil that hides yet reveals), and deliberate ambiguity about Hooper's hidden sin.",
        "Details here were checked against the story (the Reverend Mr. Hooper of Milford; the black crape veil hiding all but mouth and chin; the first Sunday and the sermon on secret sin; the congregation's alarm; Elizabeth's plea and departure; the years as a feared but sought-after minister; the deathbed refusal; the dying cry that every face wears a black veil). Hooper's words and the sermon are paraphrased, not quoted at length.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on theme, symbolism, author's craft, and analysis of literary elements in a short story. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "W.11-12.9", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
