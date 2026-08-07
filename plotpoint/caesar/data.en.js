/* PlotPoint — The Tragedy of Julius Caesar (William Shakespeare).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   lines of the play; details limited to widely established facts from the c.1599
   tragedy; standards codes are only those given by the build plan (Common Core) —
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "caesar",
  storageKey: "plotpoint.caesar.v1",

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
    "enter.readListenNote": "This play is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Julius Caesar",
    "vocab.intro": "{n} terms that unlock the play. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Roman Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object, document, or moment?",
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
    "ctob.title": "The Case of the Ides",
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
    "arcade.title": "Reason or Emotion? Brutus vs. Antony",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Rhetorical moves to weigh",
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
    "extend.title": "Two Speeches, Two Appeals",
    "extend.format": "Format",
    "extend.evidence": "The rhetorical technique from the play I am building on",
    "extend.transfers": "What transfers to my modern speeches",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My two contrasting speeches",
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
    "print.item.extend": "Rhetoric organizer",
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
      title: "The Tragedy of Julius Caesar",
      author: "William Shakespeare",
      grades: "Grades 9–12",
      genre: "Tragedy · Drama · Roman history play",
      time: "60–90 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (c. 1599)",
      textAccess: "This is a public-domain play; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "Written around 1599 and long in the public domain. This room paraphrases and reproduces no passages of the play.",
      contentNote: "A political tragedy with mature content: a graphic assassination, battlefield violence, and several suicides. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1120",
      audio: "https://librivox.org/julius-caesar-by-william-shakespeare/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Julius Caesar — Roman columns, a fallen laurel wreath, and a bloodstained senatorial toga."
    },
    hook: "A great general returns to Rome, loved by the crowd and feared by the powerful. His closest friend must choose: is Caesar a hero — or a tyrant in the making? The Tragedy of Julius Caesar turns on a single knife-stroke, and on the two speeches that decide what it meant.",
    goals: [
      "Analyze how Shakespeare stages a political tragedy in which honorable motives lead to catastrophe, following Brutus's fatal choice.",
      "Compare the two funeral orations and how Brutus's appeal to reason and Antony's appeal to emotion move a crowd.",
      "Evaluate the play's central conflict — the fear of tyranny against the killing of a friend — and the role of omens, persuasion, and fate.",
      "Connect the rhetorical techniques of the funeral speeches to a new situation, and weigh what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: Rome in 44 BC, a republic uneasy about one man's growing power.",
        "Discuss: When, if ever, is it right to remove a leader by force? How can a single speech change what a crowd believes?"
      ],
      during: [
        "Use the Relic Room to examine one object, document, or moment at a time, act by act.",
        "Track the omens Caesar ignores, and notice how each funeral speech is built to persuade."
      ],
      after: [
        "Run the breakout, arcade, and analysis to compare the two orations and weigh Brutus's choice.",
        "Complete the Extend task to build your own pair of reason-based and emotion-based speeches."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Brutus joins the conspiracy against Caesar. Include one detail from the play that shows his reasoning." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the play's themes (for example, honor and betrayal, or rhetoric and power). Explain how they reinforce each other in Brutus's or Antony's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the play's lesson about persuasion — reason versus emotion — to a modern speech or debate. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "tragedy", def: "A serious drama in which a basically good but flawed central figure moves toward downfall.", example: "A noble hero whose fatal choice leads to his ruin.", nonexample: "A lighthearted comedy that ends in a happy wedding.", context: "The play is a tragedy: a noble man falls through a fatal mistake." },
      { term: "soliloquy", def: "A speech in which a character, alone on stage, reveals private thoughts to the audience.", example: "Brutus pacing his garden at night, thinking aloud about killing Caesar.", nonexample: "Two characters trading lines in an argument.", context: "In a soliloquy, Brutus talks himself into believing the murder is necessary." },
      { term: "dramatic irony", def: "When the audience knows something that a character on stage does not.", example: "We know Caesar's friends plan to kill him as he greets them warmly.", nonexample: "A twist that surprises the audience as much as the characters.", context: "The play's dramatic irony grows as Caesar ignores warnings the audience takes seriously." },
      { term: "rhetoric", def: "The art of using language to persuade an audience.", example: "A funeral speech carefully built to sway a crowd.", nonexample: "A plain grocery list with no aim to persuade.", context: "The two funeral orations are a masterclass in rhetoric." },
      { term: "ethos", def: "A speaker's appeal to their own credibility and good character.", example: "Brutus reminding the crowd of his honor so they will trust him.", nonexample: "An argument that ignores who is speaking.", context: "Brutus leans on ethos, asking Rome to believe him because he is honorable." },
      { term: "pathos", def: "An appeal to the audience's emotions.", example: "Antony weeping over Caesar's body to move the crowd.", nonexample: "A dry list of facts with no feeling.", context: "Antony's speech is built on pathos, stirring grief and anger." },
      { term: "logos", def: "An appeal to logic, reason, and evidence.", example: "Brutus arguing step by step that Caesar's ambition endangered Rome.", nonexample: "A plea that relies only on tears.", context: "Brutus relies on logos, laying out reasons for the assassination." },
      { term: "conspirator", def: "A person who secretly plots with others to do something harmful or unlawful.", example: "One of the senators who helps plan Caesar's death.", nonexample: "A loyal friend who warns Caesar of the danger.", context: "Cassius gathers each conspirator to join the plot against Caesar." },
      { term: "tyranny", def: "Cruel and absolute rule by a single person who holds unchecked power.", example: "A ruler who crushes the senate and governs alone.", nonexample: "A government whose power is shared and limited.", context: "Brutus fears Caesar's crown would turn Rome into a tyranny." },
      { term: "omen", def: "A sign believed to foretell good or, more often, coming disaster.", example: "A storm and a statue running blood before the murder.", nonexample: "An ordinary, meaningless coincidence.", context: "Caesar dismisses every omen that warns him away from the Senate." },
      { term: "the ides of March", def: "March 15 in the Roman calendar — the day the Soothsayer warns Caesar about.", example: "The date on which Caesar is assassinated.", nonexample: "A random day with no importance in the play.", context: "The Soothsayer's warning about the ides of March comes true." }
    ],

    relic: {
      name: "The Roman Archive",
      intro: "Seven instructional reconstructions of the objects, documents, and moments through which The Tragedy of Julius Caesar reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "soothsayer", name: "The Soothsayer's Warning", image: "images/soothsayer.webp",
          clues: ["In a crowd, a stranger calls out to Caesar to take care.", "He warns him about a specific day in the middle of March.", "Caesar hears the warning but brushes it aside."],
          identify: { q: "What is this moment?", choices: ["The Soothsayer warning Caesar to beware the ides of March", "Antony crowning Caesar king", "Brutus reading a forged letter", "Cassius planning the battle at Philippi"] },
          purpose: { q: "What is its purpose?", choices: ["To plant an early warning that Caesar chooses to ignore", "To crown Caesar emperor", "To end the conspiracy", "To declare war on Rome"] },
          significance: { q: "What is its literary significance?", choices: ["It sets up the dramatic irony and foreboding that run through the play", "It proves Caesar is perfectly safe", "It shows the Soothsayer is a liar", "It ends the tragedy happily"] },
          reveals: "How fate and warning hang over Caesar from the very start.",
          conceals: "It hides who is behind the danger — the warning names a day, not the friends who will strike.",
          ace: "Articulate what the Soothsayer warns; connect it to the theme of fate versus free will; extend it to how people ignore warnings they half-believe."
        },
        {
          id: "letters", name: "Cassius's Forged Letters", image: "images/letters.webp",
          clues: ["To win Brutus over, one conspirator writes letters in different handwritings.", "They are made to look as if many citizens fear Caesar's rise.", "The letters are tossed where Brutus is sure to find them."],
          identify: { q: "What are these documents?", choices: ["The forged letters Cassius uses to persuade Brutus", "Caesar's will", "A love letter from Portia", "Antony's speech notes"] },
          purpose: { q: "What is their purpose?", choices: ["To trick Brutus into believing Rome demands Caesar's death", "To warn Caesar of the plot", "To crown Brutus king", "To end the conspiracy"] },
          significance: { q: "What is their literary significance?", choices: ["They show the conspiracy runs on manipulation, not principle alone", "They prove Brutus cannot read", "They show Cassius is perfectly honest", "They have no effect on Brutus"] },
          reveals: "That Brutus's 'honorable' choice is nudged along by a deliberate lie.",
          conceals: "It hides Cassius's mixed motives — envy of Caesar as much as love of the republic.",
          ace: "Articulate how Cassius sways Brutus; connect the forgery to the theme of manipulation; extend it to how a cause can be built on a lie."
        },
        {
          id: "omens", name: "Calpurnia's Dream and the Night of Omens", image: "images/omens.webp",
          clues: ["The night before the murder, Rome is torn by storms and strange sights.", "Caesar's wife dreams of his statue running with blood and begs him to stay home.", "A conspirator twists the dream into a flattering meaning to lure Caesar out."],
          identify: { q: "What does this reconstruct?", choices: ["Calpurnia's warning dream and the omens before the assassination", "Brutus's soliloquy in his garden", "Antony's funeral speech", "The battle at Philippi"] },
          purpose: { q: "What is its purpose?", choices: ["To warn Caesar — and to show him ignoring the warning", "To celebrate Caesar's latest victory", "To crown Caesar king", "To end the play"] },
          significance: { q: "What is its literary significance?", choices: ["The ignored omens deepen the dramatic irony and Caesar's tragic blindness", "They prove dreams are always literally true", "They show Calpurnia is foolish", "They save Caesar's life"] },
          reveals: "How pride and flattery lead Caesar to override a warning he half-believes.",
          conceals: "It leaves open whether the omens are truly supernatural or the characters' own fears — the play does not settle it.",
          ace: "Articulate what Calpurnia's dream warns; connect the omens to dramatic irony; extend it to how flattery can push us past our own better judgment."
        },
        {
          id: "daggers", name: "The Assassination in the Capitol", image: "images/daggers.webp",
          clues: ["The conspirators crowd around Caesar with a petition as cover.", "One by one they draw hidden daggers and strike.", "Caesar's shock is greatest when he sees his friend Brutus among them."],
          identify: { q: "What does this reconstruct?", choices: ["The assassination of Caesar by the conspirators in the Capitol", "Caesar's coronation", "The reading of Caesar's will", "Brutus's death at Philippi"] },
          purpose: { q: "What is its purpose in the plot?", choices: ["To carry out the plot and remove Caesar by force", "To make Caesar emperor", "To celebrate a Roman festival", "To end the civil war"] },
          significance: { q: "What is its literary significance?", choices: ["The murder is the play's turning point, unleashing the chaos that follows", "It proves the republic is now safe and peaceful", "It shows the conspirators were never serious", "It ends the tragedy happily"] },
          reveals: "That Brutus's part in the killing makes it a personal betrayal, not only a political act.",
          conceals: "It hides how quickly the murder will backfire — the conspirators expect relief, not ruin.",
          ace: "Articulate what happens in the Capitol; connect Brutus's role to the theme of betrayal; extend it to how a 'justified' act can still be a betrayal."
        },
        {
          id: "will", name: "Caesar's Will", image: "images/will.webp",
          clues: ["After the murder, Antony holds up a document and teases the crowd with it.", "He says it leaves money and public parks to the citizens of Rome.", "He withholds it, then reveals it, to turn the crowd's grief into rage."],
          identify: { q: "What is this document?", choices: ["Caesar's will, which Antony reads to the crowd", "Cassius's forged letters", "The Soothsayer's written warning", "Brutus's battle orders"] },
          purpose: { q: "What is its purpose in Antony's speech?", choices: ["To prove Caesar's generosity and inflame the crowd against the conspirators", "To name Brutus as Caesar's heir", "To declare Caesar a tyrant", "To end the funeral quietly"] },
          significance: { q: "What is its literary significance?", choices: ["The will is Antony's rhetorical weapon, converting mourning into a riot", "It proves Caesar hated the common people", "It shows Antony is plain and honest", "It calms the whole city"] },
          reveals: "How Antony uses a document and the crowd's self-interest to bind them to Caesar's memory.",
          conceals: "It hides Antony's own ambition — he stirs the mob for power, not only for love of Caesar.",
          ace: "Articulate how Antony uses the will; connect it to the theme of rhetoric and power; extend it to how a promise of reward can move a crowd."
        },
        {
          id: "mantle", name: "Caesar's Bloody Mantle", image: "images/mantle.webp",
          clues: ["Antony lifts Caesar's torn, blood-stained cloak before the crowd.", "He points to each rip in the cloth as the wound of a particular conspirator.", "The gruesome display does what argument alone could not."],
          identify: { q: "What is this object?", choices: ["Caesar's bloody mantle, used by Antony as a prop", "Brutus's senatorial toga", "A battle flag from Philippi", "The Soothsayer's robe"] },
          purpose: { q: "What is its purpose?", choices: ["To make the crowd see and feel Caesar's murder", "To keep the crowd calm and orderly", "To prove Caesar was a tyrant", "To crown Antony king"] },
          significance: { q: "What is its literary significance?", choices: ["The mantle is a masterstroke of pathos, turning grief into fury with an image, not an argument", "It shows Antony has no real feelings", "It proves the conspirators were merciful", "It ends the riot at once"] },
          reveals: "How a single vivid object can outweigh a careful, reasoned speech.",
          conceals: "It hides that Antony is staging the scene — the raw emotion is carefully engineered.",
          ace: "Articulate how the mantle works on the crowd; connect it to pathos; extend it to how images can persuade more powerfully than words."
        },
        {
          id: "ghost", name: "Caesar's Ghost at Philippi", image: "images/ghost.webp",
          clues: ["Camped before the final battle, Brutus is visited in the night.", "The spirit of the murdered Caesar appears to him.", "It tells Brutus they will meet again at Philippi."],
          identify: { q: "What does this reconstruct?", choices: ["Caesar's ghost appearing to Brutus before Philippi", "Cassius forging his letters", "Antony's funeral speech", "The Soothsayer's first warning"] },
          purpose: { q: "What is its purpose?", choices: ["To foreshadow Brutus's coming defeat and death", "To forgive Brutus", "To crown Brutus king", "To end the war peacefully"] },
          significance: { q: "What is its literary significance?", choices: ["The ghost shows Caesar's power reaching beyond death to doom his killers", "It proves Brutus will win the battle", "It shows Caesar has forgiven everyone", "It has no effect on the ending"] },
          reveals: "That the consequences of the murder pursue Brutus to the very end.",
          conceals: "It leaves ambiguous whether the ghost is real or Brutus's own guilt made visible.",
          ace: "Articulate what the ghost tells Brutus; connect it to the theme of consequences; extend it to how guilt can haunt a person after a fateful choice."
        }
      ]
    },

    ctob: {
      name: "The Case of the Ides",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no line-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The Soothsayer warns Caesar to beware 'the ides of March.' On which day of March do the ides fall? Enter the number.",
          evidence: ["The Soothsayer's warning names the ides of March.", "In the Roman calendar, the ides of March is the fifteenth day of the month.", "Caesar is assassinated on that very day."],
          hints: ["The ides of March is one exact date.", "It is the middle of the month — the fifteenth.", "The number is 15."],
          answer: "15"
        },
        {
          type: "word",
          prompt: "Who is Caesar's honorable friend, drawn into the plot, whose betrayal wounds Caesar most? (one word — his common name)",
          evidence: ["He is respected across Rome as an honorable man.", "The conspirators need his good name to make the murder look just.", "Caesar's final shock is aimed at seeing him among the killers."],
          hints: ["He struggles alone in his garden over whether to act.", "His name begins with 'Bru…'.", "He is Brutus."],
          answer: "Brutus"
        },
        {
          type: "word",
          prompt: "Who first persuades Brutus to join the conspiracy, partly by using forged letters? (one word)",
          evidence: ["He has a 'lean and hungry look' and envies Caesar's power.", "He plants forged letters to sway Brutus.", "His name begins with 'Cass…'."],
          hints: ["He is the chief organizer of the plot.", "It begins with 'Cass…'.", "He is Cassius."],
          answer: "Cassius"
        },
        {
          type: "mc",
          prompt: "Antony's funeral speech turns the crowd mainly because he —",
          options: [
            "stirs their emotions with Caesar's wounds, his will, and biting irony.",
            "bores them with a long list of Roman laws.",
            "threatens to arrest anyone who disagrees.",
            "reads them a dull financial report."
          ],
          hints: ["Think about the bloody mantle and the will.", "Which option is about emotion, not logic or threats?"]
        },
        {
          type: "sequence",
          prompt: "Put these events in order, earliest first.",
          items: [
            "Cassius persuades Brutus to join the conspiracy.",
            "The conspirators assassinate Caesar in the Capitol.",
            "Antony turns the Roman crowd against the conspirators with his funeral speech.",
            "Brutus and Cassius are defeated at Philippi."
          ],
          hints: ["The plotting comes first.", "The funeral speech comes right after the murder.", "The battle at Philippi comes last."]
        },
        {
          type: "mc",
          prompt: "Why does Brutus agree to help kill his friend Caesar?",
          options: [
            "He fears Caesar's growing power will make him a tyrant and destroy the Roman republic.",
            "He envies Caesar's wealth and wants it for himself.",
            "Caesar had publicly insulted him.",
            "He wants to become emperor of Rome himself."
          ],
          hints: ["Think about what Brutus values more than his own feelings.", "Which option is about protecting the republic?"]
        }
      ]
    },

    arcade: {
      name: "Reason or Emotion? Brutus vs. Antony",
      instruction: "The two funeral speeches take opposite paths: Brutus reasons with the crowd, and Antony works on their feelings. Sort each rhetorical move by the appeal it relies on most — reason (Brutus) or emotion (Antony). There is room to argue, but sort by the appeal the move most directly uses. Reasoning earns the points.",
      buckets: [
        { id: "reason", label: "Brutus — appeal to reason (logos / ethos)", short: "Reason" },
        { id: "emotion", label: "Antony — appeal to emotion (pathos)", short: "Emotion" }
      ],
      cards: [
        { text: "Brutus explains he acted not because he loved Caesar less, but because he loved Rome more.", bucket: "reason", why: "He justifies the killing with a principle, appealing to the crowd's judgment." },
        { text: "Brutus speaks in plain, orderly prose, laying out his case point by point.", bucket: "reason", why: "The measured, logical style is an appeal to reason." },
        { text: "Brutus asks the citizens to weigh his honor and judge him by their good sense.", bucket: "reason", why: "He appeals to his own credibility and their reasoning — ethos and logos." },
        { text: "Brutus argues that Caesar's ambition would have enslaved the Roman people.", bucket: "reason", why: "He offers a reasoned cause-and-effect argument." },
        { text: "Antony keeps calling the conspirators honorable until the word drips with sarcasm.", bucket: "emotion", why: "The bitter irony works on the crowd's feelings, not their logic." },
        { text: "Antony lifts Caesar's bloody cloak and points out each stab wound.", bucket: "emotion", why: "The gory image is pure pathos — it makes the crowd feel the murder." },
        { text: "Antony reveals Caesar's will, promising money and parks to every citizen.", bucket: "emotion", why: "He stirs gratitude and self-interest to bind the crowd to Caesar." },
        { text: "Antony pauses to weep, saying his heart is in the coffin with Caesar.", bucket: "emotion", why: "The display of grief is designed to move the crowd emotionally." }
      ],
      followup: "Antony's emotional appeal beats Brutus's reasoned one, and the crowd riots. Using specific moments, argue why emotion wins here — and whether a reasoned appeal could ever have held this crowd."
    },

    analysis: {
      mcq: [
        {
          q: "Although the play is named for Caesar, its tragic arc most closely follows —",
          options: [
            "Brutus, whose honorable but mistaken choice leads to his ruin.",
            "Antony, who gains everything and suffers nothing.",
            "Octavius, Caesar's young heir.",
            "the Soothsayer."
          ],
          why: "Caesar dies at the midpoint; the tragedy traces Brutus's fall from honor to defeat and death."
        },
        {
          q: "The two funeral orations mainly contrast —",
          options: [
            "Brutus's appeal to reason with Antony's appeal to emotion.",
            "two speeches that both rely only on logic.",
            "a speech and a silent pantomime.",
            "two identical arguments."
          ],
          why: "Brutus reasons; Antony feels — and the emotional appeal wins the crowd."
        },
        {
          q: "The omens and Calpurnia's dream mainly work to —",
          options: [
            "build dramatic irony and dread as Caesar ignores the warnings.",
            "provide comic relief.",
            "explain Roman farming methods.",
            "prove the gods are protecting Caesar."
          ],
          why: "The audience sees the danger Caesar dismisses, sharpening the irony and foreboding."
        },
        {
          q: "Cassius's forged letters reveal that the conspiracy —",
          options: [
            "runs on manipulation, not principle alone.",
            "is entirely honest and open.",
            "was Caesar's own idea.",
            "never actually happens."
          ],
          why: "Cassius must trick Brutus, exposing mixed and impure motives behind the 'noble' cause."
        },
        {
          q: "Antony's repeated praise of the conspirators as honorable men is an example of —",
          options: [
            "verbal irony that slowly turns the crowd against them.",
            "sincere, straightforward compliment.",
            "a stage direction.",
            "a soliloquy."
          ],
          why: "Antony means the opposite of what he says, and the irony erodes the crowd's trust in the conspirators."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops a theme (honor, tyranny, persuasion, or fate).",
        "Compare the two funeral speeches. Using specific evidence, explain how Brutus's appeal to reason and Antony's appeal to emotion each try to move the crowd — and why Antony wins.",
        "Explain how the omens and warnings shape our view of Caesar. What does his response to them reveal about his character?"
      ],
      paragraph: "Write an evidence-based paragraph. Was Brutus right to join the conspiracy? Decide whether the play presents his choice as noble, mistaken, or both, and support your claim with specific moments.",
      aceReflection: "Articulate why Antony's speech defeats Brutus's. Connect two themes (such as rhetoric and power, or honor and betrayal). Extend the reason-versus-emotion contrast to a modern speech or debate, and name where the comparison breaks down."
    },

    extend: {
      name: "Two Speeches, Two Appeals",
      prompt: "Shakespeare sets Brutus's reasoned speech against Antony's emotional one, and lets the crowd decide. Choose a modern issue people argue about. Write two short speeches arguing the same side of that issue: one built on reason and evidence (like Brutus), one built on emotion and vivid images (like Antony). Then explain which would sway a crowd, and what that says about persuasion.",
      format: "Two short contrasting speeches (one reason-based, one emotion-based) on the same issue, plus a note on which would win a crowd and why."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Brutus decides to join the plot against Caesar. Do not answer for me. Ask me one question at a time that helps me explain his reasoning in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Julius Caesar. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in Julius Caesar because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the play." },
      { title: "Evidence prompt", text: "Here is my claim about Julius Caesar: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to compare the reason-based and emotion-based appeals in the funeral speeches to a modern speech, [example]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether Brutus was right to kill Caesar for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of The Tragedy of Julius Caesar — its political conflict, its use of omens and dramatic irony, and above all the contrasting rhetoric of the two funeral orations. It never reproduces Shakespeare's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#1120) and LibriVox recording (version 1) are the standard play; act and scene numbering is consistent across most editions, but verify the edition you assign.",
        "The play is in the public domain. Some annotated or scholarly editions (and their notes) carry their own copyright — verify your edition.",
        "Details here come from the play (the Soothsayer's warning; Cassius's forged letters; Calpurnia's dream and the omens; the assassination in the Capitol; the will and the bloody mantle in Antony's speech; Caesar's ghost; the defeat at Philippi). Confirm against your edition.",
        "Mature content: a graphic on-stage assassination, battlefield violence, and several suicides (including Cassius, Titinius, and Brutus). Preview for maturity and align with local policy.",
        "This room teaches the funeral speeches through paraphrase and analysis; it does not reproduce Shakespeare's lines. Pair it with the actual text for close reading of the language itself.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (dramatic structure and rhetoric), and multiple-genre strands, including the analysis of persuasive speech. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.3", "RL.9-10.4", "RL.9-10.5", "RL.11-12.5", "SL.9-10.3"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
