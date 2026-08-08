/* PlotPoint — The Divine Comedy (Dante Alighieri; Longfellow translation).
   English source data.  Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts about the poem
   (overview of Inferno, Purgatorio, Paradiso); standards codes are only those given
   by the build plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "dante",
  storageKey: "plotpoint.dante.v1",

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
    "enter.readListenNote": "This poem is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Divine Comedy",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Pilgrim's Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this place, figure, or idea?",
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
    "ctob.title": "The Case of the Three Realms",
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
    "arcade.title": "Descent into Hell, or Ascent toward God?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Images to weigh",
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
    "extend.title": "Design a Contrapasso",
    "extend.format": "Format",
    "extend.evidence": "The idea from Dante I am building on",
    "extend.transfers": "What transfers to a modern setting",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern contrapasso",
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
    "print.item.extend": "Contrapasso organizer",
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
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      grades: "Grades 9–12",
      genre: "Epic poem · Allegory · Medieval",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (c. 1320; PD English translation)",
      textAccess: "This is a public-domain poem; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "Composed in Italian in the early 1300s; the linked English text (Project Gutenberg) is the public-domain Longfellow translation. This room paraphrases and reproduces no full passages.",
      contentNote: "A medieval Christian religious epic depicting Hell, Purgatory, and Heaven, with vivid images of sin and punishment. Studied here as a literary and cultural landmark. Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1004",
      audio: "https://librivox.org/the-divine-comedy-by-dante-alighieri/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Divine Comedy — a dark wood below, a terraced mountain rising, and rings of light above."
    },
    hook: "Midway through his life, a poet finds himself lost in a dark wood — and is led on an impossible journey: down through the circles of Hell, up the mountain of Purgatory, and out among the stars of Heaven. Dante's Divine Comedy maps the whole afterlife, and turns it into a picture of the soul's road home.",
    goals: [
      "Analyze how Dante structures the Divine Comedy as a three-part journey through Hell, Purgatory, and Heaven.",
      "Interpret the poem as an allegory of the soul's path from sin through repentance toward salvation.",
      "Evaluate key devices — contrapasso, the guides Virgil and Beatrice, and the poem's symbolic geography.",
      "Connect Dante's idea of contrapasso (a punishment shaped to fit the wrong) to a new situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the big picture: a poet's imagined journey through Hell, Purgatory, and Heaven.",
        "Discuss: If a punishment were designed to 'fit' a wrong perfectly, what would that look like? What makes a journey feel like a journey of the soul?"
      ],
      during: [
        "Use the Relic Room to examine one place, figure, or idea at a time. This room gives an overview of the whole poem.",
        "Track the three realms and the two guides, and how the imagery shifts from darkness toward light."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the journey and the idea of contrapasso.",
        "Complete the Extend task to design your own contrapasso for a modern wrong."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what 'contrapasso' means, using one example of how a punishment in Hell fits the sin it punishes." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two features of the poem (for example, the three realms and the two guides, or allegory and contrapasso). Explain how they work together." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Dante's idea of contrapasso — a consequence shaped to fit a wrong — to a modern situation. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "epic", def: "A long narrative poem about a grand journey or heroic subject.", example: "A poem tracing a journey through the whole afterlife.", nonexample: "A short lyric about a single passing mood.", context: "The Divine Comedy is a vast epic poem of the afterlife." },
      { term: "allegory", def: "A story whose characters and events also stand for larger moral or spiritual ideas.", example: "A journey that stands for the soul's path to God.", nonexample: "A plain report meant only literally.", context: "Read as an allegory, the journey stands for the soul's path toward God." },
      { term: "terza rima", def: "Dante's interlocking three-line rhyme scheme (aba, bcb, cdc…).", example: "Verses whose middle line rhymes with the next stanza's outer lines.", nonexample: "Prose with no rhyme or meter at all.", context: "Dante wrote in terza rima, a chain of interlocking three-line rhymes." },
      { term: "canticle", def: "One of the three main parts of the poem: Inferno, Purgatorio, or Paradiso.", example: "The first canticle, Inferno, describes Hell.", nonexample: "A single short stanza on its own.", context: "Each canticle — Inferno, Purgatorio, Paradiso — has thirty-three cantos." },
      { term: "canto", def: "A numbered section, like a chapter, within a canticle.", example: "Reading the third canto of the Inferno.", nonexample: "An entire canticle at once.", context: "Each canto is a short chapter of the poem." },
      { term: "contrapasso", def: "The principle that a soul's punishment mirrors the nature of its sin.", example: "The wrathful, who raged in life, tearing at one another forever.", nonexample: "Every sinner receiving the exact same penalty.", context: "By contrapasso, each punishment in Hell is shaped to fit the sin." },
      { term: "pilgrim", def: "The traveling Dante within the poem, journeying toward God.", example: "The pilgrim following Virgil down into Hell.", nonexample: "A settled person who never leaves home.", context: "Dante the pilgrim travels through all three realms of the afterlife." },
      { term: "purgatory", def: "In the poem, a mountain where souls are cleansed of sin before reaching Heaven.", example: "Souls climbing terraces to purify themselves.", nonexample: "A place of eternal, hopeless punishment.", context: "On the mountain of purgatory, souls purify themselves and climb toward Heaven." },
      { term: "repentance", def: "Sincere sorrow for wrongdoing and a turning away from it.", example: "A soul grieving its sin and choosing to change.", nonexample: "Feeling proud of a wrong and repeating it.", context: "Purgatory is a place of repentance and cleansing." },
      { term: "salvation", def: "Being saved and brought, at last, into union with the divine.", example: "The soul's final arrival in the light of Heaven.", nonexample: "Remaining lost, cut off from all hope.", context: "The whole poem drives toward the soul's salvation." },
      { term: "medieval", def: "Belonging to the Middle Ages, roughly the 5th to 15th centuries.", example: "A worldview built on medieval Christian thought.", nonexample: "A modern, scientific view of the cosmos.", context: "Dante's medieval worldview shapes the poem's heaven and hell." }
    ],

    relic: {
      name: "The Pilgrim's Archive",
      intro: "Seven instructional reconstructions of the places, figures, and ideas through which The Divine Comedy reaches us — teaching recreations, not illustrations from any edition. This room gives an overview of the whole poem. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "wood", name: "The Dark Wood", image: "images/wood.webp",
          clues: ["The poem opens midway through the poet's life.", "He finds himself lost in a shadowy, tangled wood.", "Frightened and unable to climb toward the light, he needs a guide."],
          identify: { q: "What is this?", choices: ["The dark wood where the lost pilgrim begins his journey", "The garden of Heaven", "A battlefield in Italy", "Dante's childhood home"] },
          purpose: { q: "What does the dark wood represent?", choices: ["A soul lost in sin and confusion at the start of the journey", "A pleasant place to rest", "A real forest with no meaning", "The end of the poem"] },
          significance: { q: "What is its significance?", choices: ["The opening image sets up the whole poem as a journey out of lostness toward God", "It proves the poem is only a travel diary", "It has no meaning", "It ends the story"] },
          reveals: "That the journey begins in spiritual crisis — being lost is the reason for everything that follows.",
          conceals: "It hides what the wood 'really' is; Dante leaves it open to be read as sin, despair, or a midlife crisis of the soul.",
          ace: "Articulate what the dark wood pictures; connect it to the theme of allegory; extend it to how a moment of being 'lost' can begin a change."
        },
        {
          id: "gate", name: "The Gate of Hell", image: "images/gate.webp",
          clues: ["An inscription is carved over the entrance to Hell.", "It warns those who pass to give up all hope.", "Beyond it lie the descending circles of the damned."],
          identify: { q: "What is this?", choices: ["The inscribed Gate of Hell at the entrance to the Inferno", "The gate of a city in Italy", "The door of a church", "The entrance to Heaven"] },
          purpose: { q: "What does the inscription do?", choices: ["It marks Hell as a place beyond hope, where nothing can be changed", "It welcomes visitors warmly", "It advertises a marketplace", "It promises a quick return"] },
          significance: { q: "What is its significance?", choices: ["Hopelessness is the defining condition of Dante's Hell", "It proves Hell is a cheerful place", "It has no meaning", "It ends the poem"] },
          reveals: "That what makes Hell Hell, for Dante, is the total absence of hope and change.",
          conceals: "It hides the variety within; each circle below has its own sin and its own fitting punishment.",
          ace: "Articulate what the gate's warning means; connect hopelessness to the idea of Hell; extend it to why hope matters for change."
        },
        {
          id: "virgil", name: "Virgil, the Guide", image: "images/virgil.webp",
          clues: ["A great poet of ancient Rome appears to lead the pilgrim.", "He guides Dante down through Hell and up the mountain of Purgatory.", "He stands, in the allegory, for human reason."],
          identify: { q: "Who is this guide?", choices: ["Virgil, the Roman poet who leads Dante through Hell and Purgatory", "Beatrice", "Dante's father", "An angel from Heaven"] },
          purpose: { q: "What does Virgil represent?", choices: ["Human reason, which can lead the soul far but not all the way to God", "Blind luck", "Wealth and power", "Idle amusement"] },
          significance: { q: "What is his significance?", choices: ["Virgil shows how far reason alone can guide a soul — up to, but not into, Heaven", "He proves reason can reach God on its own", "He has no importance", "He ends the poem"] },
          reveals: "That reason (Virgil) can lead through Hell and Purgatory but cannot, by itself, enter Heaven.",
          conceals: "It leaves poignant that Virgil, a virtuous pagan, cannot follow the pilgrim into Paradise.",
          ace: "Articulate what Virgil guides Dante through; connect him to the theme of reason; extend it to what reason can and cannot do for us."
        },
        {
          id: "contrapasso", name: "Contrapasso", image: "images/contrapasso.webp",
          clues: ["In Hell, the punishment always matches the sin.", "Those swept by uncontrolled passion are blown about by an endless storm.", "The word for this poetic justice is contrapasso."],
          identify: { q: "What is contrapasso?", choices: ["The principle that a punishment is shaped to fit its sin", "A city in Purgatory", "One of Dante's guides", "A kind of prayer"] },
          purpose: { q: "What does contrapasso do in the poem?", choices: ["It makes each punishment a vivid symbol of the sin itself", "It gives every sinner the same fate", "It frees sinners quickly", "It has no pattern at all"] },
          significance: { q: "What is its significance?", choices: ["Contrapasso turns Hell into a gallery of sins made visible through their punishments", "It proves the punishments are random", "It has no meaning", "It ends the poem"] },
          reveals: "Dante's idea that a sin, seen truly, already contains the shape of its own punishment.",
          conceals: "It can make the punishments feel like clever puzzles; the moral weight behind them is easy to overlook.",
          ace: "Articulate how contrapasso works; connect it to the theme of justice; extend it to whether a fitting consequence is the same as a fair one."
        },
        {
          id: "mountain", name: "The Mountain of Purgatory", image: "images/mountain.webp",
          clues: ["Beyond Hell rises a great mountain in the southern sea.", "Its terraces correspond to sins the souls are cleansing.", "Unlike the damned, these souls climb in hope toward Heaven."],
          identify: { q: "What is this?", choices: ["The terraced mountain of Purgatory", "A circle of Hell", "A sphere of Heaven", "A city in Italy"] },
          purpose: { q: "What happens on the mountain?", choices: ["Souls purify themselves of sin and climb toward Heaven", "Souls are punished forever", "Souls are sent back to Hell", "Nothing changes"] },
          significance: { q: "What is its significance?", choices: ["Purgatory adds hope and change — the middle stage between Hell and Heaven", "It proves change is impossible", "It has no meaning", "It ends the poem"] },
          reveals: "That between damnation and glory Dante places a realm of hope, effort, and gradual change.",
          conceals: "It compresses a slow, painful process into a hopeful climb; the labor of purification is easy to romanticize.",
          ace: "Articulate what Purgatory is for; connect it to the theme of repentance; extend it to how change often happens step by step."
        },
        {
          id: "beatrice", name: "Beatrice", image: "images/beatrice.webp",
          clues: ["At the summit of Purgatory, a new guide meets the pilgrim.", "She is the woman Dante idealized and loved.", "She leads him upward through the spheres of Heaven."],
          identify: { q: "Who is this guide?", choices: ["Beatrice, who leads Dante through Heaven", "Virgil", "An angel with no name", "Dante's sister"] },
          purpose: { q: "What does Beatrice represent?", choices: ["Divine grace and revelation, which reason alone cannot supply", "Human reason", "Earthly wealth", "Political power"] },
          significance: { q: "What is her significance?", choices: ["Beatrice takes the pilgrim where reason cannot go — into Heaven, toward God", "She proves guides are unnecessary", "She has no importance", "She ends the poem in Hell"] },
          reveals: "That the last stage of the journey needs grace (Beatrice), not just reason (Virgil).",
          conceals: "It idealizes Beatrice into a symbol; the real woman behind the figure nearly disappears.",
          ace: "Articulate what changes when Beatrice becomes the guide; connect her to the theme of grace; extend it to what carries us beyond what reason can reach."
        },
        {
          id: "vision", name: "The Vision of God", image: "images/vision.webp",
          clues: ["At the poem's end the pilgrim rises through the spheres of Heaven.", "He is granted a final, overwhelming vision of the divine.", "The poem closes with the Love that moves the sun and the other stars."],
          identify: { q: "What does this reconstruct?", choices: ["The final vision of God that ends the poem", "The gate of Hell", "The dark wood", "A battle"] },
          purpose: { q: "What does the ending achieve?", choices: ["It completes the soul's journey from lostness to union with the divine", "It sends the pilgrim back to Hell", "It leaves the journey unfinished", "It has no purpose"] },
          significance: { q: "What is its significance?", choices: ["The vision of divine love is the goal the whole journey has been climbing toward", "It proves the journey was pointless", "It has no meaning", "It restarts the poem"] },
          reveals: "That the entire descent-and-ascent aims at one thing: the soul's arrival in the light of divine love.",
          conceals: "It admits its own limits — Dante says the vision is beyond what words can hold, and only gestures at it.",
          ace: "Articulate what the pilgrim reaches at the end; connect it to the theme of salvation; extend it to how a long journey can aim at a single goal."
        }
      ]
    },

    ctob: {
      name: "The Case of the Three Realms",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no line-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The Divine Comedy is divided into three main parts, or canticles. How many parts are there? Enter the number.",
          evidence: ["The first part is the Inferno (Hell).", "The second is the Purgatorio (Purgatory), and the third the Paradiso (Heaven).", "Together they form the whole poem."],
          hints: ["Count Inferno, Purgatorio, and Paradiso.", "It is a small odd number.", "The number is 3."],
          answer: "3"
        },
        {
          type: "word",
          prompt: "Which ancient Roman poet guides Dante through Hell and Purgatory? (one word)",
          evidence: ["He was a famous poet of ancient Rome.", "In the allegory he stands for human reason.", "His name begins with 'Vir-.'"],
          hints: ["He wrote the Aeneid.", "It begins with 'Virg…'.", "The guide is Virgil."],
          answer: "Virgil"
        },
        {
          type: "word",
          prompt: "Who takes over as Dante's guide through Heaven, representing divine grace? (one word)",
          evidence: ["She is the woman Dante idealized and loved.", "She meets him at the summit of Purgatory.", "Her name begins with 'Bea-.'"],
          hints: ["She leads him through the spheres of Heaven.", "It begins with 'Beat…'.", "The guide is Beatrice."],
          answer: "Beatrice"
        },
        {
          type: "mc",
          prompt: "In Dante's Hell, 'contrapasso' means that —",
          options: [
            "each punishment is shaped to fit the sin it punishes.",
            "all sinners suffer exactly the same penalty.",
            "sinners are quickly forgiven and released.",
            "there is no punishment at all."
          ],
          hints: ["Think about how the penalty mirrors the wrong.", "Which option is about a punishment that fits the sin?"]
        },
        {
          type: "sequence",
          prompt: "Put the stages of the pilgrim's journey in order, earliest first.",
          items: [
            "Lost in a dark wood, Dante meets the poet Virgil.",
            "Virgil leads Dante down through the circles of Hell.",
            "They climb the mountain of Purgatory, where souls are purified.",
            "Beatrice guides Dante through Heaven to a vision of God."
          ],
          hints: ["The dark wood comes first.", "Hell comes before the climb up Purgatory.", "Heaven and the vision of God come last."]
        },
        {
          type: "mc",
          prompt: "The Divine Comedy is best understood as an allegory of —",
          options: [
            "the soul's journey from sin toward God.",
            "a real travel diary of Italy.",
            "a comedy meant only to amuse.",
            "a history of the Roman army."
          ],
          hints: ["Think about what the whole journey stands for.", "Which option is about the soul's path?"]
        }
      ]
    },

    arcade: {
      name: "Descent into Hell, or Ascent toward God?",
      instruction: "The poem moves first down through Hell, then up through Purgatory and Heaven. Sort each image by where it belongs: the Inferno (punishment for sin) or the ascent through Purgatorio and Paradiso (the way toward God). There is room to argue, but sort by what the poem most directly shows. Thoughtful sorting earns the points.",
      buckets: [
        { id: "inferno", label: "Inferno — punishment for sin", short: "Inferno" },
        { id: "toward", label: "Purgatorio & Paradiso — the way to God", short: "Toward God" }
      ],
      cards: [
        { text: "A gate whose inscription tells all who enter to abandon hope.", bucket: "inferno", why: "The hopeless gate marks the entrance to Hell." },
        { text: "Nine descending circles, each assigned to a different sin.", bucket: "inferno", why: "The circles of the damned belong to the Inferno." },
        { text: "Punishments carefully shaped to fit each sin (contrapasso).", bucket: "inferno", why: "Contrapasso is the logic of Dante's Hell." },
        { text: "Satan frozen at the cold, dead center of the earth.", bucket: "inferno", why: "The lowest point of Hell is the bottom of the descent." },
        { text: "A mountain with terraces where souls purify themselves.", bucket: "toward", why: "Purgatory is the first stage of the upward, hopeful journey." },
        { text: "Souls climbing in hope toward the earthly paradise.", bucket: "toward", why: "Hope and ascent belong to Purgatory, not Hell." },
        { text: "Beatrice guiding the pilgrim through the spheres of Heaven.", bucket: "toward", why: "The rise through Heaven is guided by grace." },
        { text: "A final vision of the divine love that moves the stars.", bucket: "toward", why: "The vision of God is the summit of the ascent." }
      ],
      followup: "The poem descends before it climbs. Using specific images, explain how the movement from Hell up to Heaven pictures the soul's journey — and why Dante makes us go down before we can go up."
    },

    analysis: {
      mcq: [
        {
          q: "The Divine Comedy is —",
          options: [
            "an epic poem describing a journey through Hell, Purgatory, and Heaven.",
            "a short comic play.",
            "a history textbook of Italy.",
            "a single brief lyric poem."
          ],
          why: "It is a long narrative poem tracing the pilgrim's journey through the three realms of the afterlife."
        },
        {
          q: "Virgil and Beatrice represent, roughly, —",
          options: [
            "human reason and divine grace.",
            "wealth and poverty.",
            "war and peace.",
            "youth and old age."
          ],
          why: "Virgil (reason) guides through Hell and Purgatory; Beatrice (grace) guides through Heaven."
        },
        {
          q: "Contrapasso is Dante's principle that —",
          options: [
            "a sinner's punishment mirrors the nature of the sin.",
            "all sins receive identical punishment.",
            "punishment is chosen at random.",
            "there is no punishment in Hell."
          ],
          why: "Each punishment in Hell is designed to reflect the sin it answers."
        },
        {
          q: "The poem's three-part structure moves from —",
          options: [
            "the depths of Hell upward toward the vision of God.",
            "Heaven down into Hell and no further.",
            "a single unchanging place.",
            "one battle to the next."
          ],
          why: "Inferno descends; Purgatorio and Paradiso ascend toward the final vision."
        },
        {
          q: "As an allegory, the pilgrim's journey stands for —",
          options: [
            "every soul's path from sin through repentance to salvation.",
            "a real vacation Dante took.",
            "the rules of Italian grammar.",
            "the history of the papacy only."
          ],
          why: "The literal journey pictures the universal spiritual journey of the soul."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops one of the poem's ideas (the journey, contrapasso, the two guides, or salvation).",
        "Explain the idea of contrapasso. Using a specific example, show how a punishment in Hell is designed to fit its sin — and say whether you find that just.",
        "Explain how the two guides, Virgil and Beatrice, divide the journey. What does the change of guide suggest about reason and grace?"
      ],
      paragraph: "Write an evidence-based paragraph. Why does Dante structure the poem as a descent into Hell before an ascent toward Heaven? Make a claim about what the structure means and support it with specific details.",
      aceReflection: "Articulate what the whole journey stands for as an allegory. Connect two features of the poem (such as the three realms and the two guides). Extend the idea of contrapasso to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "Design a Contrapasso",
      prompt: "In Dante's Hell, each punishment is a mirror of its sin — the flatterers wallow in filth, the fortune-tellers have their heads twisted backward. Choose a modern wrong (a habit, an injustice, a kind of dishonesty). Design a Dante-style contrapasso for it: a symbolic 'punishment' whose shape reveals the wrong itself. Then explain the logic of your design, and reflect on whether a fitting consequence is the same as a just one.",
      format: "A modern contrapasso (a symbolic punishment that mirrors a chosen wrong), plus an explanation of its logic and a note on fitting versus fair."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what 'contrapasso' means in Dante's Inferno. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words, using an example. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in The Divine Comedy. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in The Divine Comedy because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Divine Comedy: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to design a modern contrapasso for [a wrong]. Give me two ways to make the punishment mirror the wrong and one reason each design might fail as an image. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of what Dante's journey means as an allegory for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room gives an overview of The Divine Comedy — its three-part structure (Inferno, Purgatorio, Paradiso), the guides Virgil and Beatrice, the idea of contrapasso, and its reading as an allegory of the soul's journey. It never reproduces Dante's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#1004) is the public-domain Henry Wadsworth Longfellow translation; the linked LibriVox recording is the complete poem. Other public-domain translations exist (for example, Cary); verify the link and translation before assigning.",
        "This room is an overview of the whole poem. If your class reads only the Inferno (the most commonly taught canticle), adjust the emphasis; the room's structure, guides, and contrapasso all apply.",
        "The underlying poem and the linked Longfellow translation are public domain; some modern translations carry their own copyright — verify the edition you assign.",
        "The poem is a medieval Christian religious work depicting Hell, Purgatory, and Heaven, and names real historical and political figures among the punished. Teach it within its historical and literary context, and preview for maturity and local policy.",
        "Details here reflect the widely established structure of the poem; confirm specific cantos and figures against your translation.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (structure, figurative language), and multiple-genre (poetry) strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "RL.11-12.5", "RL.9-10.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
