/* PlotPoint — The Scarlet Letter (Nathaniel Hawthorne).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts from the 1850 novel;
   standards codes are only those given by the build plan (Common Core) — TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "scarlet",
  storageKey: "plotpoint.scarlet.v1",

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
    "vocab.title": "Words for The Scarlet Letter",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Scarlet Archive",
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
    "ctob.title": "The Case of the Scaffold",
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
    "arcade.title": "Open Shame or Hidden Guilt?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Evidence to weigh",
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
    "extend.title": "The Modern Scaffold",
    "extend.format": "Format",
    "extend.evidence": "The idea from the novel I am building on",
    "extend.transfers": "What transfers to a modern setting",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern-shaming comparison",
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
    "print.item.extend": "Public-shame comparison organizer",
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
      title: "The Scarlet Letter",
      author: "Nathaniel Hawthorne",
      grades: "Grades 9–12",
      genre: "Novel · Dark Romanticism · Historical fiction",
      time: "60–90 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1850)",
      textAccess: "This is a public-domain novel; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1850 and long in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A Puritan-era novel centered on adultery, public shaming, hidden guilt, and revenge. The central sin is treated seriously but not graphically. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/25344",
      audio: "https://librivox.org/the-scarlet-letter-by-nathaniel-hawthorne/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Scarlet Letter — a wooden scaffold in a Puritan marketplace, a wild rose, and an embroidered scarlet letter A."
    },
    hook: "A young woman is led from prison to a public scaffold, an infant in her arms and a scarlet letter A stitched over her heart. She will not name the child's father. The Scarlet Letter follows what open shame does to her — and what hidden guilt does to the man who stays silent.",
    goals: [
      "Analyze how Hawthorne makes the scarlet letter a shifting symbol whose meaning changes across the novel.",
      "Contrast Hester's open penance with Dimmesdale's hidden guilt, and what each does to the person who carries it.",
      "Evaluate the roles of the Puritan community and of Chillingworth's revenge in the characters' fates.",
      "Connect the novel's picture of public shame to a modern situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: a strict Puritan community in 1600s Boston that punishes sin in public.",
        "Discuss: What does public shame do to a person? Is it worse to confess a wrong or to hide it?"
      ],
      during: [
        "Use the Relic Room to examine one object, place, or person at a time.",
        "Track how the meaning of the scarlet letter changes, and watch Dimmesdale's health as his secret grows."
      ],
      after: [
        "Run the breakout, arcade, and analysis to compare open shame with hidden guilt.",
        "Complete the Extend task to compare Hester's scaffold with modern public shaming."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how the meaning of the scarlet letter changes over the novel. Include one detail that shows the change." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the novel's themes (for example, guilt and hypocrisy, or shame and identity). Explain how they reinforce each other in Hester's or Dimmesdale's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the novel's picture of public shame to a modern situation (such as online shaming). Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "Puritan", def: "A member of a strict 1600s Protestant group that stressed hard work, plain living, and harsh punishment of sin.", example: "Townspeople who gather to shame a wrongdoer in public.", nonexample: "A carefree crowd indifferent to rules or religion.", context: "The Puritan community of Boston judges Hester harshly." },
      { term: "scaffold", def: "A raised public platform where offenders were displayed for shame or punishment.", example: "A wooden stage in the marketplace where Hester must stand.", nonexample: "A private room where no one can see.", context: "Hester stands on the scaffold so the whole town can see her shame." },
      { term: "adultery", def: "The act of a married person breaking their marriage vow with someone else — the sin the letter A marks.", example: "The offense for which Hester is publicly punished.", nonexample: "A promise faithfully kept between married partners.", context: "The scarlet A brands Hester for the sin of adultery." },
      { term: "penance", def: "Suffering or an act done to show sorrow for a wrong and to make up for it.", example: "Wearing a badge of shame for years without complaint.", nonexample: "Ignoring a wrong and feeling nothing.", context: "Hester's public penance slowly changes how the town sees her." },
      { term: "hypocrisy", def: "Pretending to have virtues or beliefs one does not actually hold.", example: "A minister preaching against sin while hiding his own.", nonexample: "Living openly by the values you profess.", context: "Dimmesdale's hidden guilt turns his public holiness into hypocrisy." },
      { term: "symbolism", def: "The use of an object, color, or image to stand for a larger idea.", example: "A single scarlet letter standing for sin, shame, and later strength.", nonexample: "A plain label that means only itself.", context: "Hawthorne's symbolism lets the letter A carry many meanings at once." },
      { term: "allegory", def: "A story whose characters and events also stand for larger moral or spiritual ideas.", example: "A tale where a letter, a child, and a scaffold each carry meaning.", nonexample: "A plain report meant only literally.", context: "The novel often reads as an allegory of sin and the conscience." },
      { term: "ignominy", def: "Public shame and disgrace.", example: "Being displayed before a jeering crowd.", nonexample: "Being honored with public praise.", context: "Hester endures years of ignominy for a sin she will not deny." },
      { term: "omniscient narrator", def: "An all-knowing narrator who can see into every character's mind and heart.", example: "A storyteller who reports Dimmesdale's secret guilt directly.", nonexample: "A narrator limited to one character's view.", context: "An omniscient narrator lets us see the guilt Dimmesdale hides." },
      { term: "revenge", def: "Deliberately harming someone in return for a wrong, real or imagined.", example: "A wronged husband secretly tormenting his rival.", nonexample: "Forgiving an injury and letting it go.", context: "Chillingworth gives up his own soul to the pursuit of revenge." },
      { term: "conscience", def: "The inner sense of right and wrong that judges one's own actions.", example: "The guilt that gnaws at a man who hides his sin.", nonexample: "Acting with no thought of right or wrong.", context: "Dimmesdale's conscience tortures him more than any court could." }
    ],

    relic: {
      name: "The Scarlet Archive",
      intro: "Seven instructional reconstructions of the objects, places, and people through which The Scarlet Letter reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "letterA", name: "The Scarlet Letter “A”", image: "images/letterA.webp",
          clues: ["A single letter is finely embroidered in scarlet cloth and gold thread.", "Hester is ordered to wear it over her heart for all to see.", "It marks the sin the town will not let her forget."],
          identify: { q: "What is this object?", choices: ["The scarlet letter A that Hester is made to wear", "A badge of honor from the governor", "Pearl's christening gift", "Chillingworth's medical seal"] },
          purpose: { q: "What is its purpose?", choices: ["To publicly shame Hester and mark her sin", "To reward Hester for good service", "To identify her as a doctor", "To decorate the meeting-house"] },
          significance: { q: "What is its literary significance?", choices: ["It is the novel's central symbol, and its meaning shifts over time", "It proves the town forgives Hester at once", "It has no real meaning in the story", "It ends the novel happily"] },
          reveals: "How a mark of shame can, through Hester's conduct, come to mean strength.",
          conceals: "It hides the letter's full meaning — Hawthorne lets it stand for sin, shame, ability, and more, refusing one fixed reading.",
          ace: "Articulate what the letter A stands for; connect it to the theme of shifting symbols; extend it to how a label placed on a person can change meaning over time."
        },
        {
          id: "scaffold", name: "The Scaffold", image: "images/scaffold.webp",
          clues: ["A raised wooden platform stands in the Boston marketplace.", "Offenders are placed on it to be seen and shamed by the town.", "The story returns to it three times — at the beginning, the middle, and the end."],
          identify: { q: "What is this place?", choices: ["The town scaffold, the platform of public shame", "Hester's cottage by the shore", "The governor's mansion", "The ship that will carry Hester away"] },
          purpose: { q: "What is its purpose?", choices: ["To display offenders for public shame and punishment", "To hold town dances", "To store the harvest", "To welcome visitors"] },
          significance: { q: "What is its literary significance?", choices: ["The three scaffold scenes structure the novel and mark its turning points", "It appears only once and means nothing", "It proves the Puritans were merciful", "It ends the story in the forest"] },
          reveals: "How the same place measures each character — Hester in public, Dimmesdale in secret, and at last in the open.",
          conceals: "It hides, at first, that Dimmesdale belongs on it too — his guilt stays private until the end.",
          ace: "Articulate what the scaffold is for; connect the three scaffold scenes to the plot's structure; extend it to how public spaces enforce shame."
        },
        {
          id: "rosebush", name: "The Wild Rosebush by the Prison Door", image: "images/rosebush.webp",
          clues: ["Beside the grim, dark prison, a wild rosebush blooms.", "The narrator offers one of its blossoms to the reader.", "Its beauty stands out against the gloom of the Puritan jail."],
          identify: { q: "What is this?", choices: ["The wild rosebush growing beside the prison door", "A rose from the governor's garden", "Pearl's favorite toy", "A flower on Dimmesdale's grave"] },
          purpose: { q: "What is its purpose?", choices: ["To offer a note of natural beauty and mercy against the harsh setting", "To mark the way to the scaffold", "To hide the prison from view", "To feed the townspeople"] },
          significance: { q: "What is its literary significance?", choices: ["It symbolizes nature's grace and sympathy set against Puritan severity", "It proves the prison is a happy place", "It has no symbolic meaning", "It ends the novel"] },
          reveals: "Hawthorne's hint that mercy and beauty survive even beside punishment.",
          conceals: "It leaves open whether such grace can really soften the community — the rose grows outside the prison, not within it.",
          ace: "Articulate what the rosebush suggests; connect it to the theme of nature versus Puritan law; extend it to how a small mercy can stand against a harsh system."
        },
        {
          id: "pearl", name: "Pearl, the Living Symbol", image: "images/pearl.webp",
          clues: ["Hester's daughter is wild, bright, and hard to control.", "She is fascinated by the scarlet letter her mother wears.", "She seems less an ordinary child than a living emblem of the sin."],
          identify: { q: "Who is this?", choices: ["Pearl, Hester's daughter and a living symbol of the sin", "A neighbor's well-behaved child", "Chillingworth's apprentice", "A servant in the governor's house"] },
          purpose: { q: "What is her role in the story?", choices: ["To embody the sin and passion behind the letter, and to press for the truth", "To prove Hester is a careless mother", "To spy for the Puritans", "To heal Dimmesdale"] },
          significance: { q: "What is her literary significance?", choices: ["Pearl is a symbol as much as a person, always drawing attention back to the letter", "She has no effect on the story", "She proves the letter means nothing", "She ends the Puritan community"] },
          reveals: "That the consequences of the sin are alive and cannot be hidden away.",
          conceals: "It hides whether Pearl is a real child or chiefly a symbol — Hawthorne keeps her half-magical.",
          ace: "Articulate what Pearl represents; connect her to the letter she keeps pointing to; extend it to how a consequence can refuse to be ignored."
        },
        {
          id: "meteor", name: "The Midnight Scaffold and the Meteor", image: "images/meteor.webp",
          clues: ["At night, Dimmesdale climbs the scaffold in secret with Hester and Pearl.", "A meteor streaks the sky and seems to trace a great letter A.", "Each onlooker reads the strange light to mean what they already believe."],
          identify: { q: "What does this reconstruct?", choices: ["The midnight scaffold scene and the meteor shaped like an A", "Hester's first public shaming", "Dimmesdale's final confession", "The forest meeting"] },
          purpose: { q: "What does the scene do?", choices: ["It shows Dimmesdale's guilt in private and raises the letter into the sky", "It crowns Dimmesdale governor", "It frees Hester from the letter", "It ends Chillingworth's revenge"] },
          significance: { q: "What is its literary significance?", choices: ["The ambiguous sky-sign shows how people read meaning into symbols to fit their own minds", "It proves the meteor is a message from the governor", "It shows Dimmesdale confessing to the whole town", "It has no meaning"] },
          reveals: "That Dimmesdale can face his guilt only in darkness, where no one sees.",
          conceals: "It leaves the meteor's meaning open — a divine sign, a coincidence, or guilt projected onto the sky.",
          ace: "Articulate what happens at the midnight scaffold; connect the meteor to the theme of ambiguous symbols; extend it to how people see what they expect to see."
        },
        {
          id: "herbs", name: "Chillingworth's Medicines", image: "images/herbs.webp",
          clues: ["A learned physician gathers dark herbs and brews strong remedies.", "He attaches himself to the ailing minister as his private doctor.", "Under this care, the minister only grows sicker in body and soul."],
          identify: { q: "What are these?", choices: ["Chillingworth's medicines, used to get close to Dimmesdale", "Hester's needlework supplies", "Pearl's playthings", "The governor's wine"] },
          purpose: { q: "What is their purpose?", choices: ["To let Chillingworth study and secretly torment his patient", "To cure Dimmesdale completely", "To poison the whole town", "To dye the scarlet letter"] },
          significance: { q: "What is their literary significance?", choices: ["The 'healing' is really revenge — Chillingworth feeds on Dimmesdale's guilt", "It proves Chillingworth is a kind healer", "It has no bearing on the plot", "It ends the novel"] },
          reveals: "How revenge disguises itself as care, and how it corrupts the avenger.",
          conceals: "It hides Chillingworth's true identity as Hester's wronged husband, kept secret from the town.",
          ace: "Articulate what Chillingworth is really doing; connect his 'care' to the theme of revenge; extend it to how harm can hide behind a helpful mask."
        },
        {
          id: "mark", name: "The Mark on Dimmesdale's Chest", image: "images/mark.webp",
          clues: ["The minister presses his hand to his heart again and again.", "When he finally confesses on the scaffold, he bares his chest.", "What is revealed there echoes the letter Hester has worn all along."],
          identify: { q: "What is this?", choices: ["The mark on Dimmesdale's chest, revealed at his confession", "A wound from a battlefield", "A birthmark he was born with", "A brand from the governor"] },
          purpose: { q: "What does it show?", choices: ["That Dimmesdale has carried a hidden version of Hester's letter", "That he is perfectly healthy", "That he was crowned minister", "That Chillingworth is freed"] },
          significance: { q: "What is its literary significance?", choices: ["The private mark completes the contrast between open shame and hidden guilt", "It proves Dimmesdale was never guilty", "It has no meaning", "It saves his life"] },
          reveals: "That hidden guilt writes itself on the body — Dimmesdale's secret becomes visible only in death.",
          conceals: "It leaves the mark's cause a mystery — Hawthorne offers several explanations and settles none.",
          ace: "Articulate what the chest mark reveals; connect it to the theme of hidden guilt; extend it to how a secret can take a physical toll on a person."
        }
      ]
    },

    ctob: {
      name: "The Case of the Scaffold",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The novel brings its characters together on the town scaffold at key moments. How many major scaffold scenes are there? Enter the number.",
          evidence: ["The story opens with Hester's public shaming on the scaffold.", "At its midpoint, Dimmesdale stands there in secret at midnight.", "It ends with his public confession on the same scaffold."],
          hints: ["Count the beginning, the middle, and the end.", "It is a small odd number.", "The number is 3."],
          answer: "3"
        },
        {
          type: "word",
          prompt: "What single letter does Hester Prynne wear on her chest as the mark of her sin? (one letter)",
          evidence: ["It is embroidered in scarlet cloth and gold thread.", "It stands for the sin of adultery.", "It is the very first letter of the alphabet."],
          hints: ["It is a single capital letter.", "It stands for 'adulteress.'", "The letter is A."],
          answer: "A"
        },
        {
          type: "word",
          prompt: "What is the name of Hester's daughter, the living emblem of her sin? (one word)",
          evidence: ["She is a wild, bright, elf-like child.", "Her name suggests something precious, bought at great price.", "It begins with 'Pe-.'"],
          hints: ["Her name is a precious gem from the sea.", "It begins with 'Pear…'.", "Her name is Pearl."],
          answer: "Pearl"
        },
        {
          type: "mc",
          prompt: "Roger Chillingworth's true role in the story is that he is —",
          options: [
            "Hester's long-absent husband, who hides his identity to take revenge on her lover.",
            "a kindly doctor with no secret at all.",
            "Dimmesdale's younger brother.",
            "the governor of the colony."
          ],
          hints: ["Think about who he really is beneath the physician's disguise.", "Which option explains his hunger for revenge?"]
        },
        {
          type: "sequence",
          prompt: "Put these events in order, earliest first.",
          items: [
            "Hester stands on the scaffold with baby Pearl and is sentenced to wear the letter.",
            "Chillingworth hides his identity and becomes Dimmesdale's physician.",
            "Hester and Dimmesdale meet in the forest and plan to flee together.",
            "Dimmesdale confesses on the scaffold and dies."
          ],
          hints: ["The public shaming opens the novel.", "The forest meeting comes before the final confession.", "Dimmesdale's death comes last."]
        },
        {
          type: "mc",
          prompt: "Why does the scarlet letter's meaning change over the course of the novel?",
          options: [
            "Hester's years of good works lead many to read the A as 'Able' rather than 'adulteress.'",
            "The town paints a new letter on her dress.",
            "Dimmesdale orders the meaning changed.",
            "The letter simply fades and disappears."
          ],
          hints: ["Think about how Hester spends the years after her shaming.", "Which option is about her actions changing people's minds?"]
        }
      ]
    },

    arcade: {
      name: "Open Shame or Hidden Guilt?",
      instruction: "Hawthorne sets Hester's open, public penance against Dimmesdale's hidden, private guilt. Sort each piece of evidence by which side it belongs to: Hester's open shame (which, endured, slowly heals) or Dimmesdale's hidden guilt (which, concealed, destroys). There is room to argue, but sort by what the evidence most directly shows. Reasoning earns the points.",
      buckets: [
        { id: "open", label: "Hester — open shame (endured, it heals)", short: "Open shame" },
        { id: "hidden", label: "Dimmesdale — hidden guilt (concealed, it destroys)", short: "Hidden guilt" }
      ],
      cards: [
        { text: "Hester wears the scarlet A openly and stands on the scaffold before the whole town.", bucket: "open", why: "She bears her sin in full public view rather than hiding it." },
        { text: "Over years of quiet service to the sick and poor, the A begins to mean 'Able.'", bucket: "open", why: "Her open penance slowly transforms the letter's meaning." },
        { text: "Her honesty leaves Hester sorrowful but strong, clear-eyed, and free of pretense.", bucket: "open", why: "Facing her sin openly makes her more whole, not less." },
        { text: "Even while guarding Dimmesdale's secret, Hester never hides her own guilt.", bucket: "open", why: "She carries her shame in the open even as she protects him." },
        { text: "Dimmesdale hides his guilt and keeps preaching to an adoring congregation.", bucket: "hidden", why: "His concealment turns his holiness into hypocrisy." },
        { text: "He presses his hand to his heart and grows sicker as the secret eats at him.", bucket: "hidden", why: "Hidden guilt attacks him in body and soul." },
        { text: "A mysterious mark appears on his chest, a private echo of Hester's badge.", bucket: "hidden", why: "His guilt writes itself on his body in secret." },
        { text: "Only by confessing publicly on the scaffold does he find release — in death.", bucket: "hidden", why: "Concealment destroys him; open confession comes only at the very end." }
      ],
      followup: "Hawthorne contrasts Hester's open penance with Dimmesdale's hidden guilt. Using specific moments, argue what the novel suggests about concealment versus confession — and how much blame the harsh Puritan community deserves for driving guilt underground."
    },

    analysis: {
      mcq: [
        {
          q: "The scarlet letter A is best understood as —",
          options: [
            "a symbol whose meaning shifts over time, from shame toward strength.",
            "a simple decoration with no meaning.",
            "a brand used for ordinary criminals only.",
            "the initial of the town's name."
          ],
          why: "Through Hester's conduct the A moves from 'adulteress' toward 'Able,' and Hawthorne keeps it open to many meanings."
        },
        {
          q: "The novel's central contrast is between —",
          options: [
            "Hester's open penance and Dimmesdale's hidden guilt.",
            "two characters who both confess at once.",
            "wealth and poverty.",
            "war and peace."
          ],
          why: "Hester's public shame heals her over time, while Dimmesdale's concealed guilt destroys him."
        },
        {
          q: "Roger Chillingworth mainly represents —",
          options: [
            "the corrosive power of revenge, which consumes the avenger.",
            "selfless devotion to healing.",
            "the mercy of the Puritan community.",
            "youthful innocence."
          ],
          why: "His secret revenge on Dimmesdale poisons Chillingworth himself, turning him into a fiend."
        },
        {
          q: "Pearl functions in the story mainly as —",
          options: [
            "a living symbol of her mother's sin and passion, demanding the truth.",
            "a minor character with no importance.",
            "the novel's narrator.",
            "Chillingworth's helper."
          ],
          why: "Pearl is fascinated by the letter and keeps pressing the adults toward honesty; she is symbol as much as child."
        },
        {
          q: "The Puritan community in the novel is portrayed as —",
          options: [
            "rigid and quick to judge, punishing sin publicly and harshly.",
            "carefree and forgiving.",
            "indifferent to right and wrong.",
            "ruled by Hester herself."
          ],
          why: "The townspeople enforce shame through the scaffold and the letter, and are slow to show mercy."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops a theme (sin and guilt, public shame, revenge, or the power of symbols).",
        "Compare Hester and Dimmesdale. Using specific evidence, explain how open shame and hidden guilt lead them to very different fates.",
        "Explain how the meaning of the scarlet letter changes over the novel. What does that change suggest about Hester and about the community?"
      ],
      paragraph: "Write an evidence-based paragraph. Who is the greatest sinner in the novel — Hester, Dimmesdale, or Chillingworth? Make a claim and support it with specific moments.",
      aceReflection: "Articulate how the scarlet letter's meaning changes. Connect two themes (such as guilt and hypocrisy, or shame and identity). Extend the idea of public shame to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "The Modern Scaffold",
      prompt: "The Puritans punished Hester with public shame — the scaffold, the letter, the staring crowd. Choose a modern form of public shaming (for example, being called out online). Write a short comparison: describe how the modern shaming works, then set it beside Hester's scaffold — what is similar, what is different, and whether public shame today can change meaning the way her letter eventually did.",
      format: "A short comparison of a modern public shaming with Hester's scaffold, plus a note on what transfers and where the comparison breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the meaning of the scarlet letter changes in The Scarlet Letter. Do not answer for me. Ask me one question at a time that helps me explain, in my own words, how the letter's meaning shifts. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in The Scarlet Letter. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in The Scarlet Letter because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Scarlet Letter: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to compare the public shaming in The Scarlet Letter to a modern situation, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of who the greatest sinner is in The Scarlet Letter for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of The Scarlet Letter — its shifting central symbol, the contrast between open penance and hidden guilt, and the roles of the Puritan community and Chillingworth's revenge. It never reproduces Hawthorne's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#25344) and LibriVox recording (version 1) are the standard 1850 novel; verify the link and edition before assigning.",
        "The Scarlet Letter is in the public domain. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "The novel opens with a long framing sketch, 'The Custom-House,' that some classes skip; this room focuses on the main narrative. Note that choice for your students.",
        "Details here come from the novel (the scaffold scenes; the scarlet A; Pearl; Chillingworth's disguised revenge; the forest meeting; the midnight meteor; Dimmesdale's confession). Confirm against your edition.",
        "Mature theme: the central sin is adultery, treated seriously but not graphically, alongside public shaming and revenge. Preview for maturity and align with local policy.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (symbolism and theme), and multiple-genre strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.2", "RL.11-12.2", "RL.9-10.4", "RL.11-12.4", "RL.9-10.3"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
