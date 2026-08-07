/* PlotPoint — The Tragedy of Hamlet, Prince of Denmark (William Shakespeare).
   English source data.  Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   lines of the play; details limited to widely established facts from the c.1600
   tragedy; standards codes are only those given by the build plan (Common Core) —
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "hamlet",
  storageKey: "plotpoint.hamlet.v1",

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
    "vocab.title": "Words for Hamlet",
    "vocab.intro": "{n} terms that unlock the play. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Elsinore Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object, person, or moment?",
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
    "ctob.title": "The Case of the Ghost",
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
    "arcade.title": "Real Madness or an Act?",
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
    "extend.title": "A Modern Soliloquy",
    "extend.format": "Format",
    "extend.evidence": "The technique from the play I am building on",
    "extend.transfers": "What transfers to my modern soliloquy",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern soliloquy",
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
    "print.item.extend": "Soliloquy organizer",
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
      title: "The Tragedy of Hamlet, Prince of Denmark",
      author: "William Shakespeare",
      grades: "Grades 9–12",
      genre: "Tragedy · Drama · Revenge tragedy",
      time: "60–90 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (c. 1600)",
      textAccess: "This is a public-domain play; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "Written around 1600 and long in the public domain. This room paraphrases and reproduces no passages of the play.",
      contentNote: "A revenge tragedy with mature content: murder, madness, a drowning that is likely a suicide, and many deaths in the final scene. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1122",
      audio: "https://librivox.org/hamlet-by-william-shakespeare/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Hamlet — a cold castle battlement at night, a ghostly armored figure, and a single skull on stone."
    },
    hook: "A prince meets his father's ghost, who says he was murdered by the man now wearing his crown and sharing his wife. The ghost demands revenge — but how can Hamlet be sure, and how can he act? The Tragedy of Hamlet turns on a son who cannot stop thinking long enough to strike.",
    goals: [
      "Analyze how Shakespeare builds a revenge tragedy around a hero who delays, using soliloquies to reveal his inner conflict.",
      "Interpret the play's central questions — whether Hamlet's madness is real or feigned, and why he hesitates to act.",
      "Evaluate how foils (Laertes, Fortinbras) and the play-within-a-play sharpen the themes of revenge, action, and certainty.",
      "Connect the soliloquy — thinking aloud through a hard choice — to a new situation, and weigh what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: the royal castle of Elsinore in Denmark, where the old king has just died.",
        "Discuss: If you were sure someone had done a terrible wrong, what would it take for you to act? When is delay wise, and when is it a failure?"
      ],
      during: [
        "Use the Relic Room to examine one object, person, or moment at a time, act by act.",
        "Track Hamlet's soliloquies and ask each time: is he mad, pretending, or simply thinking too much?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh Hamlet's delay and his madness.",
        "Complete the Extend task to write your own soliloquy for a hard modern choice."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Hamlet delays taking revenge on Claudius. Include one detail from the play that shows his hesitation." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the play's themes (for example, revenge and doubt, or appearance and reality). Explain how they reinforce each other in Hamlet's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of a soliloquy — thinking aloud through a hard choice — to a modern situation. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "revenge tragedy", def: "A kind of drama in which a wronged character seeks vengeance, usually ending in many deaths.", example: "A prince set on avenging his murdered father.", nonexample: "A cheerful comedy that ends in a wedding.", context: "Hamlet is the most famous revenge tragedy in English." },
      { term: "soliloquy", def: "A speech in which a character, alone on stage, reveals private thoughts to the audience.", example: "Hamlet weighing life against death while alone.", nonexample: "Two characters trading lines in a quarrel.", context: "In a soliloquy, Hamlet turns over the question of whether to live or die." },
      { term: "foil", def: "A character whose qualities contrast with another's and highlight them.", example: "A man who avenges his father at once, unlike the hesitating hero.", nonexample: "A twin who behaves in exactly the same way.", context: "Laertes acts as a foil whose swift revenge exposes Hamlet's delay." },
      { term: "dramatic irony", def: "When the audience knows something that a character on stage does not.", example: "We know Claudius is guilty while he plays the grieving king.", nonexample: "A twist that surprises the audience as much as the characters.", context: "The court is thick with dramatic irony, since we share Hamlet's secret knowledge." },
      { term: "antic disposition", def: "A pretended madness that Hamlet puts on as a disguise.", example: "Acting wild and confused to throw off the king's spies.", nonexample: "Behaving calmly and plainly at all times.", context: "Hamlet warns his friends he will adopt an antic disposition to hide his purpose." },
      { term: "usurp", def: "To seize power, a throne, or a right that belongs to someone else.", example: "Taking a dead king's crown that should pass to his son.", nonexample: "Inheriting a title by lawful right.", context: "Hamlet believes Claudius did usurp both the throne and his mother." },
      { term: "regicide", def: "The killing of a king.", example: "Claudius murdering his royal brother to take the crown.", nonexample: "A king dying peacefully of old age.", context: "The play's hidden crime is a regicide — the murder of a king." },
      { term: "melancholy", def: "Deep, lasting sadness and gloom.", example: "A grieving prince dressed in black, sick of the world.", nonexample: "A cheerful, carefree mood.", context: "Hamlet's melancholy colors his view of life, death, and everyone at court." },
      { term: "mortality", def: "The condition of being subject to death.", example: "Holding a skull and thinking about how all people die.", nonexample: "The belief that one will live forever.", context: "In the graveyard, Hamlet faces mortality with Yorick's skull in his hand." },
      { term: "play-within-a-play", def: "A shorter play performed inside the main play, often to reveal a hidden truth.", example: "A staged murder that mirrors the real crime to catch the guilty.", nonexample: "A single story with no performance inside it.", context: "Hamlet uses a play-within-a-play to test whether Claudius is guilty." },
      { term: "tragic flaw", def: "A weakness in the hero that helps bring about their downfall.", example: "A brilliant prince whose hesitation costs many lives.", nonexample: "A hero with no weakness at all.", context: "Many readers see Hamlet's hesitation as the tragic flaw that dooms him." }
    ],

    relic: {
      name: "The Elsinore Archive",
      intro: "Seven instructional reconstructions of the objects, people, and moments through which The Tragedy of Hamlet reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "ghost", name: "The Ghost on the Battlements", image: "images/ghost.webp",
          clues: ["On the cold castle walls at night, the guards see a figure in armor.", "It is the spirit of Hamlet's dead father, the old king.", "It tells Hamlet he was murdered and demands revenge."],
          identify: { q: "What is this?", choices: ["The ghost of Hamlet's murdered father, the old king", "Claudius in disguise", "A Norwegian soldier", "The player-king from the mousetrap"] },
          purpose: { q: "What is its purpose?", choices: ["To reveal the murder and set Hamlet on the path of revenge", "To crown Claudius", "To warn of a foreign invasion", "To entertain the court"] },
          significance: { q: "What is its literary significance?", choices: ["It launches the revenge plot and raises the question of whether to trust it", "It proves Claudius is innocent", "It ends the play", "It has no effect on Hamlet"] },
          reveals: "The hidden crime — that the old king was murdered by his own brother.",
          conceals: "It hides whether the ghost can be trusted; Hamlet cannot be sure it is honest, which fuels his delay.",
          ace: "Articulate what the ghost reveals; connect it to the theme of certainty and doubt; extend it to how we decide whether to trust a source before acting."
        },
        {
          id: "mousetrap", name: "The Mousetrap Play", image: "images/mousetrap.webp",
          clues: ["A troupe of traveling actors arrives at Elsinore.", "Hamlet has them stage a murder that mirrors his father's.", "He watches Claudius closely as the scene is played."],
          identify: { q: "What is this?", choices: ["The play-within-a-play Hamlet stages to test Claudius", "A royal wedding celebration", "Ophelia's funeral", "The final fencing match"] },
          purpose: { q: "What is its purpose?", choices: ["To catch Claudius's guilty reaction and confirm the ghost's story", "To entertain the queen", "To teach the actors their craft", "To crown Fortinbras"] },
          significance: { q: "What is its literary significance?", choices: ["It is Hamlet's clever test — the proof he needs before he will act", "It proves Claudius is innocent", "It has no effect on the plot", "It ends the revenge plot at once"] },
          reveals: "Claudius's guilt, when he rises in alarm and stops the play.",
          conceals: "It hides Hamlet's next move; even with his proof, he still hesitates to strike.",
          ace: "Articulate what the mousetrap is for; connect it to the theme of appearance versus reality; extend it to how we test a claim before we trust it."
        },
        {
          id: "arras", name: "The Arras and the Death of Polonius", image: "images/arras.webp",
          clues: ["A heavy tapestry hangs against the wall of the queen's room.", "The king's counselor hides behind it to spy on Hamlet.", "Hamlet stabs through the cloth, killing the wrong man."],
          identify: { q: "What is this?", choices: ["The arras behind which Polonius hides and is killed", "The ghost's armor", "Ophelia's wedding veil", "The players' stage curtain"] },
          purpose: { q: "What is its purpose?", choices: ["To let Polonius spy — and to stage his accidental death", "To decorate the throne room", "To hide Claudius from the ghost", "To signal the play's start"] },
          significance: { q: "What is its literary significance?", choices: ["Hamlet's rash killing of the wrong man turns the tragedy toward more death", "It proves Hamlet is a careful planner", "It shows Polonius was the murderer", "It ends the spying at court"] },
          reveals: "How Hamlet's long delay gives way to a sudden, misdirected act of violence.",
          conceals: "It hides, from Hamlet in that instant, who is really behind the curtain — he strikes before he knows.",
          ace: "Articulate what happens at the arras; connect the killing to the theme of rash action; extend it to how acting without knowing can harm the wrong person."
        },
        {
          id: "ophelia", name: "Ophelia's Flowers and Drowning", image: "images/ophelia.webp",
          clues: ["After her father's death and Hamlet's cruelty, a young woman loses her mind.", "She wanders the court handing out flowers with strange meanings.", "She later drowns in a stream, in grief and madness."],
          identify: { q: "What does this reconstruct?", choices: ["Ophelia's madness, her flowers, and her drowning", "Gertrude's coronation", "The ghost's return", "Laertes's voyage to France"] },
          purpose: { q: "What does it show?", choices: ["The human cost of the court's cruelty and Hamlet's revenge", "A joyful wedding", "The crowning of a new king", "A test of Claudius"] },
          significance: { q: "What is its literary significance?", choices: ["Ophelia's fate shows how the spreading corruption destroys the innocent", "It proves Ophelia caused the tragedy", "It has no bearing on the themes", "It ends the revenge plot happily"] },
          reveals: "That real madness and real death fall on the innocent, not only the guilty.",
          conceals: "It leaves her drowning ambiguous — accident or suicide — a question the play does not fully settle.",
          ace: "Articulate what happens to Ophelia; connect her fate to the theme of spreading corruption; extend it to how conflict harms bystanders, not only its targets."
        },
        {
          id: "skull", name: "Yorick's Skull in the Graveyard", image: "images/skull.webp",
          clues: ["In a graveyard, Hamlet picks up a skull the gravedigger has unearthed.", "It once belonged to Yorick, a jester Hamlet knew as a child.", "Holding it, Hamlet reflects that all people come to the same dust."],
          identify: { q: "What is this?", choices: ["Yorick's skull, held by Hamlet in the graveyard", "The old king's crown", "Claudius's poisoned cup", "Polonius's staff"] },
          purpose: { q: "What does it prompt?", choices: ["It makes Hamlet — and the audience — confront mortality", "It proves Yorick was murdered", "It crowns Hamlet king", "It ends the play happily"] },
          significance: { q: "What is its literary significance?", choices: ["The skull is the play's great emblem of mortality: death levels everyone", "It proves the dead can return to life", "It has no meaning", "It saves Ophelia"] },
          reveals: "Hamlet's clear-eyed acceptance that death comes for all, jester and king alike.",
          conceals: "It hides how little comfort this brings him; understanding death does not free him from it.",
          ace: "Articulate what the skull makes Hamlet realize; connect it to the theme of mortality; extend it to how facing death can change what a person values."
        },
        {
          id: "letters", name: "The Letters to England", image: "images/letters.webp",
          clues: ["Claudius sends Hamlet to England with two former friends.", "They carry sealed orders for Hamlet's execution.", "Hamlet secretly rewrites the letters, sending the friends to their deaths instead."],
          identify: { q: "What are these?", choices: ["Claudius's sealed orders for Hamlet's execution, which Hamlet rewrites", "Love letters from Hamlet to Ophelia", "The ghost's written message", "Fortinbras's treaty"] },
          purpose: { q: "What is their purpose?", choices: ["To have Hamlet quietly killed abroad", "To make peace with Norway", "To arrange Hamlet's wedding", "To crown Laertes"] },
          significance: { q: "What is their literary significance?", choices: ["The switched letters show Hamlet can act decisively — when cornered, not when planning", "They prove Claudius is harmless", "They end the revenge plot", "They have no effect"] },
          reveals: "That Hamlet is capable of swift, ruthless action; his problem is not ability but hesitation over the main deed.",
          conceals: "It hides how far Claudius will go, and how completely he has turned Hamlet's friends against him.",
          ace: "Articulate what Hamlet does with the letters; connect it to the theme of action versus delay; extend it to how people act fast under threat yet freeze over big choices."
        },
        {
          id: "foils", name: "The Poisoned Foil and Cup", image: "images/foils.webp",
          clues: ["Claudius and Laertes plan a fencing match to kill Hamlet.", "One blade is left sharp and dipped in poison; a cup of wine is poisoned too.", "In the duel, the plot rebounds on nearly everyone."],
          identify: { q: "What are these?", choices: ["The poisoned foil and cup prepared for the final duel", "The ghost's sword", "Yorick's skull", "The players' props"] },
          purpose: { q: "What is their purpose?", choices: ["To kill Hamlet during a rigged fencing match", "To celebrate a royal wedding", "To honor Polonius", "To crown Fortinbras"] },
          significance: { q: "What is their literary significance?", choices: ["The rigged duel brings the tragedy to its deadly climax, killing Hamlet, Laertes, Gertrude, and Claudius", "It proves the duel was fair", "It has no effect on the ending", "It saves the royal family"] },
          reveals: "How Claudius's plotting finally destroys almost everyone, himself included.",
          conceals: "It hides, at first, the second trap — the poisoned wine that kills the queen by mistake.",
          ace: "Articulate what the poisoned duel does; connect it to the theme of revenge turning back on the avenger; extend it to how a plot can catch the plotter."
        }
      ]
    },

    ctob: {
      name: "The Case of the Ghost",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no line-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "Claudius sends two of Hamlet's former friends — Rosencrantz and Guildenstern — to spy on him. How many of these friends are there? Enter the number.",
          evidence: ["Claudius summons Hamlet's old schoolfellows to court.", "They are named Rosencrantz and Guildenstern.", "They always appear together, as a pair."],
          hints: ["Count Rosencrantz and Guildenstern.", "They come as a pair.", "The number is 2."],
          answer: "2"
        },
        {
          type: "word",
          prompt: "In which country is Hamlet a prince, the kingdom whose royal castle is Elsinore? (one word)",
          evidence: ["The play is set at the castle of Elsinore.", "A guard says something is rotten in the state of this country.", "Its name begins with 'Den-.'"],
          hints: ["It is a Scandinavian kingdom.", "It begins with 'Den…'.", "The country is Denmark."],
          answer: "Denmark"
        },
        {
          type: "word",
          prompt: "Who is Hamlet's uncle, the man who murdered the old king and took the throne? (one word)",
          evidence: ["He married Hamlet's mother, Gertrude, soon after the king's death.", "The ghost says he poured poison in the sleeping king's ear.", "His name begins with 'Clau-.'"],
          hints: ["He is the new king of Denmark.", "It begins with 'Claud…'.", "He is Claudius."],
          answer: "Claudius"
        },
        {
          type: "mc",
          prompt: "Hamlet stages a play before the court mainly to —",
          options: [
            "catch Claudius's guilty reaction and confirm the ghost's accusation.",
            "entertain his mother the queen.",
            "celebrate the royal wedding.",
            "teach the visiting actors their craft."
          ],
          hints: ["Think about what Hamlet still needs before he will act.", "Which option is about testing Claudius's guilt?"]
        },
        {
          type: "sequence",
          prompt: "Put these events in order, earliest first.",
          items: [
            "The Ghost tells Hamlet that Claudius murdered his father.",
            "Hamlet stages the play to test Claudius's guilt.",
            "Hamlet kills Polonius through the arras by mistake.",
            "Hamlet, Laertes, Gertrude, and Claudius die in the final duel."
          ],
          hints: ["The ghost's revelation comes first.", "The staged play comes before Polonius's death.", "The deadly duel comes last."]
        },
        {
          type: "mc",
          prompt: "Why does Hamlet delay taking revenge on Claudius?",
          options: [
            "He hesitates over doubt, conscience, and the difficulty of acting on the ghost's word alone.",
            "He forgets all about his father.",
            "He forgives Claudius and wants peace.",
            "He is afraid of no one and simply loses interest."
          ],
          hints: ["Think about how much Hamlet thinks before he acts.", "Which option is about doubt and conscience?"]
        }
      ]
    },

    arcade: {
      name: "Real Madness or an Act?",
      instruction: "One of the play's oldest debates: is Hamlet truly mad, or is he only performing a 'madness' to disguise his purpose? Sort each piece of evidence by the reading it best supports — an act (a feigned madness) or genuine breakdown. There is room to argue; sort by what the evidence most directly shows. Reasoning earns the points.",
      buckets: [
        { id: "act", label: "An act (a feigned 'antic disposition')", short: "An act" },
        { id: "real", label: "Genuine (a real breakdown)", short: "Genuine" }
      ],
      cards: [
        { text: "Hamlet announces in advance that he plans to put on a pretended madness.", bucket: "act", why: "Planning the madness ahead of time makes it look like a deliberate disguise." },
        { text: "His 'mad' talk is sharp and witty, full of clever jabs aimed at his enemies.", bucket: "act", why: "The controlled cleverness suggests a mind in command, not one lost." },
        { text: "With Horatio and the players, Hamlet speaks and reasons perfectly clearly.", bucket: "act", why: "Dropping the madness among trusted friends implies he can switch it on and off." },
        { text: "He tells his mother he is not truly mad, only pretending.", bucket: "act", why: "He says outright that the madness is a performance." },
        { text: "His grief and disgust after his father's death and mother's hasty remarriage overwhelm him.", bucket: "real", why: "Real, crushing grief could tip into a genuine breakdown." },
        { text: "He is wildly cruel to Ophelia, far beyond anything his plan requires.", bucket: "real", why: "The excess and pain suggest feelings he cannot fully control." },
        { text: "He leaps into Ophelia's grave, raving, in a burst of real passion.", bucket: "real", why: "The uncontrolled outburst looks like genuine anguish, not strategy." },
        { text: "His soliloquies show a mind tormented, even contemplating suicide.", bucket: "real", why: "The private despair, seen when no one is watching, reads as real." }
      ],
      followup: "Hamlet's madness may be a disguise, a real collapse, or both at once. Using specific moments, argue where his pretense ends and real anguish begins — and whether Shakespeare wants us to be sure."
    },

    analysis: {
      mcq: [
        {
          q: "Hamlet is best described as a —",
          options: [
            "revenge tragedy whose hero delays and agonizes over acting.",
            "cheerful comedy that ends in marriage.",
            "history play about a real English king.",
            "short lyric poem."
          ],
          why: "Hamlet is driven to avenge his father yet hesitates, agonizing in soliloquy after soliloquy."
        },
        {
          q: "Laertes and Fortinbras function mainly as —",
          options: [
            "foils who take swift revenge, highlighting Hamlet's delay.",
            "comic servants.",
            "the play's narrators.",
            "characters with no purpose."
          ],
          why: "Both act quickly to avenge or reclaim what is theirs, throwing Hamlet's hesitation into relief."
        },
        {
          q: "The play-within-a-play mainly serves to —",
          options: [
            "test and expose Claudius's guilt.",
            "entertain the audience only.",
            "crown Fortinbras.",
            "end the revenge plot."
          ],
          why: "Hamlet uses the staged murder to watch Claudius and confirm the ghost's accusation."
        },
        {
          q: "Hamlet's soliloquies mainly reveal —",
          options: [
            "his inner conflict over action, death, and uncertainty.",
            "his skill at swordfighting.",
            "the fine points of Danish law.",
            "his love of music."
          ],
          why: "Alone on stage, Hamlet works through doubt, despair, and the problem of how and whether to act."
        },
        {
          q: "A central theme of the play is —",
          options: [
            "the corrupting spread of revenge and the difficulty of acting with certainty.",
            "the joys of court life.",
            "the beauty of the Danish countryside.",
            "the value of great wealth."
          ],
          why: "Revenge poisons the whole court, and Hamlet's need for certainty makes decisive action agonizingly hard."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops a theme (revenge, appearance versus reality, madness, or mortality).",
        "Is Hamlet's madness real, an act, or both? Using specific evidence, defend your reading and answer the strongest point on the other side.",
        "Explain how one foil (Laertes or Fortinbras) sharpens our view of Hamlet. What does the contrast reveal about him?"
      ],
      paragraph: "Write an evidence-based paragraph. Is Hamlet's delay a tragic flaw or a sign of wisdom? Make a claim and support it with specific moments.",
      aceReflection: "Articulate why Hamlet delays. Connect two themes (such as revenge and doubt, or appearance and reality). Extend the idea of thinking aloud through a hard choice to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "A Modern Soliloquy",
      prompt: "In his soliloquies, Hamlet stops the action to think aloud — weighing action against inaction, life against death — so the audience hears his mind at work. Choose a modern character facing a hard, private decision. Write a short soliloquy in which they think aloud through the choice, showing both sides pulling at them, the way Hamlet does. Then note what the soliloquy reveals that ordinary dialogue could not.",
      format: "A short soliloquy for a modern character facing a hard choice, plus a note on what thinking aloud reveals that dialogue could not."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Hamlet delays taking revenge in Hamlet. Do not answer for me. Ask me one question at a time that helps me explain his hesitation in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Hamlet. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in Hamlet because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the play." },
      { title: "Evidence prompt", text: "Here is my claim about Hamlet: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to compare Hamlet's soliloquies to a modern character thinking aloud, [example]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether Hamlet's madness is real or feigned for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Hamlet — its revenge-tragedy structure, its soliloquies and inner conflict, the question of real versus feigned madness, and its foils and play-within-a-play. It never reproduces Shakespeare's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#1122) and LibriVox recording (version 1) are the standard play; act and scene numbering is consistent across most editions, but verify the edition you assign.",
        "Hamlet survives in several early versions (the Second Quarto and the First Folio differ). This room follows the widely taught composite story; confirm your edition's text and line numbering.",
        "The play is in the public domain. Some annotated or scholarly editions (and their notes) carry their own copyright — verify your edition.",
        "Details here come from the play (the ghost; the antic disposition; the mousetrap; the death of Polonius; Ophelia's madness and drowning; Yorick's skull; the switched letters; the poisoned duel). Confirm against your edition.",
        "Mature content: murder, madness, a drowning that is likely a suicide, and multiple deaths in the final scene. Preview for maturity and align with local policy.",
        "This room teaches the soliloquies through paraphrase and analysis; it does not reproduce Shakespeare's lines. Pair it with the actual text for close reading of the language itself.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (dramatic structure, soliloquy, foil), and multiple-genre strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.3", "RL.11-12.3", "RL.9-10.5", "RL.11-12.5", "RL.9-10.4"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
