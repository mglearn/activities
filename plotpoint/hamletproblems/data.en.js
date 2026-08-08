/* PlotPoint — Hamlet and His Problems (T. S. Eliot, 1919).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts about Eliot's essay;
   standards codes are only those given by the build plan (Common Core) — TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles.

   A short work of literary criticism that pairs with the PlotPoint Hamlet room.
   Full text via Wikisource (public domain in the U.S.); no verified single-work
   LibriVox recording, so audio shows a clear unavailable state. */
window.__ROOM__ = {
  id: "hamletproblems",
  storageKey: "plotpoint.hamletproblems.v1",

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

    "enter.eyebrow": "Enter the Argument",
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
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "This essay is in the public domain in the United States. These free, external resources open in a new tab — verify the link and your country's copyright status before assigning.",
    "enter.read": "Read the full essay (Wikisource)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Hamlet and His Problems",
    "vocab.intro": "{n} terms that unlock the essay. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Critic's Desk",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this idea or move in the argument?",
    "relic.q.purpose": "Explain its likely purpose",
    "relic.q.significance": "Its critical significance",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this idea shows, connect it to Eliot's argument, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Case of the Failed Masterpiece",
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
    "arcade.title": "Eliot's Argument, or a Challenge to It?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Claims to weigh",
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
    "extend.title": "Test the Objective Correlative",
    "extend.format": "Format",
    "extend.evidence": "The critical idea from Eliot I am using",
    "extend.transfers": "What transfers to the work I chose",
    "extend.changes": "What changes in a modern work",
    "extend.breaks": "Where the tool stops working",
    "extend.response": "My critical argument",
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
    "print.item.extend": "Objective-correlative organizer",
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
      title: "Hamlet and His Problems",
      author: "T. S. Eliot",
      grades: "Grades 11–12",
      genre: "Nonfiction · Literary criticism · Modernism",
      time: "45–75 minutes",
      spoiler: "No plot to spoil",
      rights: "Public domain (1919; U.S.)",
      textAccess: "This is a public-domain essay (in the U.S.); students may use the free link below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1919 and collected in The Sacred Wood (1920); in the public domain in the United States. This room paraphrases and reproduces no full passages. Verify public-domain status in your country before assigning.",
      contentNote: "A short, advanced work of literary criticism that argues a provocative thesis about Shakespeare's Hamlet. Best paired with the PlotPoint Hamlet room. Suitable for advanced or upper-level classes; preview and align with local policy.",
      gutenberg: "https://en.wikisource.org/wiki/The_Sacred_Wood/Hamlet_and_His_Problems",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Hamlet and His Problems — a scholar's desk with an open book, a pen mid-argument, a skull paperweight, and a framed question mark."
    },
    hook: "Most readers call Hamlet a masterpiece. In 1919 the poet-critic T. S. Eliot dared to call it 'an artistic failure' — and coined a phrase, the 'objective correlative,' that changed how we judge literature. This short, bold essay is your chance to read an argument closely and decide whether the critic is right. (It pairs with the PlotPoint Hamlet room.)",
    goals: [
      "Analyze how Eliot builds an argument in literary criticism, moving from claim to reasons to conclusion.",
      "Interpret his key concept, the 'objective correlative,' and how he uses it to judge the play Hamlet.",
      "Evaluate Eliot's controversial claim that Hamlet is 'an artistic failure,' weighing it against strong counterarguments.",
      "Connect the tool of the objective correlative to a new work, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of literary criticism: an argument that evaluates a work of literature. This essay pairs well with the PlotPoint Hamlet room.",
        "Discuss: Can a famous 'masterpiece' actually be flawed? How would you argue that a beloved work fails?"
      ],
      during: [
        "Use the Relic Room to examine one idea or move in Eliot's argument at a time.",
        "Track Eliot's claim, his reasons, and the key concept of the objective correlative — and note where you might push back."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map Eliot's argument and test it.",
        "Complete the Extend task to apply the objective correlative to a work you choose."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Eliot means by the 'objective correlative.' Include one example of your own showing how a feeling could be matched (or not matched) by objects and events." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Eliot's concept of the objective correlative to his claim that Hamlet fails. Explain how the idea leads to the judgment." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the objective correlative to a modern work (a film, song, or story). Explain what transfers, what changes today, and where the tool stops working." }
    },

    vocab: [
      { term: "literary criticism", def: "The study, analysis, and evaluation of works of literature.", example: "An essay arguing whether a play succeeds as art.", nonexample: "A play or story itself, with no analysis.", context: "'Hamlet and His Problems' is a work of literary criticism." },
      { term: "objective correlative", def: "Eliot's term for a set of objects, a situation, or events that serve as the formula for a particular emotion.", example: "A storm and a locked door standing in for a character's dread.", nonexample: "Simply stating 'he felt afraid' with nothing to evoke it.", context: "Eliot's key idea in the essay is the objective correlative." },
      { term: "thesis", def: "The central claim an argument sets out to prove.", example: "The claim that a famous play is actually a failure.", nonexample: "A random remark with no point to prove.", context: "Eliot's bold thesis is that the play Hamlet is a failure." },
      { term: "counterargument", def: "A reason or position that opposes an argument's claim.", example: "Answering Eliot by saying Hamlet's excess of feeling is a strength.", nonexample: "Simply repeating the original claim.", context: "A strong counterargument defends Hamlet's excess of feeling as lifelike." },
      { term: "aesthetic", def: "Concerned with beauty, art, and questions of artistic quality.", example: "Judging whether a work is well made as art.", nonexample: "Judging a work only by how much money it earned.", context: "Eliot makes an aesthetic judgment about the play's success as art." },
      { term: "impersonality", def: "Eliot's ideal that good art disciplines emotion into a fitting form rather than merely expressing the artist's self.", example: "An artist finding the right form for a feeling instead of just venting it.", nonexample: "Pouring raw personal emotion onto the page unshaped.", context: "Eliot prized impersonality — art that is more than self-expression." },
      { term: "intractable", def: "Hard to manage, shape, or work with.", example: "Old story material that resists being reshaped into a unified play.", nonexample: "Material that bends easily to an artist's design.", context: "Eliot calls the older play's material intractable, hard to reshape." },
      { term: "subjective", def: "Based on personal feelings and opinions rather than the work itself.", example: "Reading a character mainly through your own emotions.", nonexample: "Grounding a claim in evidence from the text.", context: "Eliot distrusts purely subjective, feeling-based readings of the play." },
      { term: "New Criticism", def: "A 20th-century approach that focuses on close reading of the work itself, apart from the author's life or the reader's feelings.", example: "Analyzing a poem's words and form rather than the poet's biography.", nonexample: "Explaining a poem only by the poet's personal history.", context: "This essay helped inspire New Criticism, which studies the work itself." },
      { term: "modernism", def: "An early-20th-century movement that broke with tradition and experimented with new forms.", example: "A poet reshaping how verse and criticism are written.", nonexample: "Strictly imitating older, traditional models.", context: "As a voice of modernism, Eliot reshaped how we read poetry and criticism." },
      { term: "evaluate", def: "To judge the worth or quality of something, giving reasons.", example: "Deciding, with evidence, whether a play succeeds as art.", nonexample: "Only summarizing a work without judging it.", context: "The essay asks readers to evaluate a play's success as art." }
    ],

    relic: {
      name: "The Critic's Desk",
      intro: "Seven instructional reconstructions of the ideas and moves through which Eliot's essay makes its case — teaching recreations, not illustrations from any edition. Investigate what each shows, and what it cannot.",
      artifacts: [
        {
          id: "essay", name: "The Essay and Its Boldness", image: "images/essay.webp",
          clues: ["In 1919, T. S. Eliot publishes a short critical essay on Hamlet.", "It later appears in his book The Sacred Wood.", "It is famous less for praising the play than for challenging it."],
          identify: { q: "What is this?", choices: ["T. S. Eliot's 1919 essay 'Hamlet and His Problems'", "A new edition of the play Hamlet", "A biography of Shakespeare", "A review of one stage performance"] },
          purpose: { q: "What is the essay's purpose?", choices: ["To argue a bold critical judgment about the play Hamlet", "To retell the plot of Hamlet", "To advertise a theater", "To teach acting technique"] },
          significance: { q: "What is its significance?", choices: ["It is a landmark of modern literary criticism, read for its argument and its key concept", "It proves Hamlet has no problems at all", "It has no importance", "It is a work of fiction"] },
          reveals: "That criticism itself can be a bold, arguable work — not just neutral description.",
          conceals: "It can seem to settle the question; in fact it opens a debate critics still argue.",
          ace: "Articulate what kind of text this is; connect it to the idea of an argument; extend it to why a critic might challenge a beloved work."
        },
        {
          id: "correlative", name: "The Objective Correlative", image: "images/correlative.webp",
          clues: ["Eliot coins a term for how art expresses emotion.", "He says the artist must find a set of objects, a situation, a chain of events — a formula for the emotion.", "He calls this the objective correlative."],
          identify: { q: "What is this idea?", choices: ["The 'objective correlative,' Eliot's formula for expressing emotion in art", "A stage prop", "A rule of grammar", "A character in Hamlet"] },
          purpose: { q: "What does the concept do?", choices: ["It names how a work makes a reader feel an emotion — through external objects and events, not bare statement", "It describes a costume", "It scores a play's rhymes", "It counts the acts"] },
          significance: { q: "What is its significance?", choices: ["The objective correlative becomes one of the most influential ideas in modern criticism", "It proves emotion cannot be shown in art", "It has no importance", "It ends the essay"] },
          reveals: "Eliot's belief that emotion in art must be earned through concrete objects and situations.",
          conceals: "It sounds precise but is hard to pin down; critics still argue over what would 'count' as an adequate correlative.",
          ace: "Articulate the objective correlative in your own words; connect it to how art creates feeling; extend it to a work whose emotion is (or is not) well matched."
        },
        {
          id: "failure", name: "The “Artistic Failure” Claim", image: "images/failure.webp",
          clues: ["Eliot makes a shocking claim about a beloved play.", "He calls Hamlet 'most certainly an artistic failure.'", "The judgment startled readers who revere the play."],
          identify: { q: "What is this claim?", choices: ["Eliot's claim that the play Hamlet is an artistic failure", "Praise of Hamlet as flawless", "A claim that Shakespeare did not exist", "A review of a bad performance"] },
          purpose: { q: "Why state it so boldly?", choices: ["To announce, provocatively, the essay's central critical judgment", "To flatter the audience", "To summarize the plot", "To end all debate"] },
          significance: { q: "What is its significance?", choices: ["The bold claim forces readers to justify or reject a work they take for granted", "It proves the play is perfect", "It has no importance", "It is only a joke"] },
          reveals: "Eliot's willingness to challenge received opinion with a clear, arguable thesis.",
          conceals: "It can overshadow his reasons; many remember the claim but not the argument behind it.",
          ace: "Articulate Eliot's claim; connect a bold thesis to the job of an argument; extend it to whether a shocking claim helps or hurts persuasion."
        },
        {
          id: "excess", name: "Emotion in Excess of the Facts", image: "images/excess.webp",
          clues: ["Eliot argues Hamlet's feelings are stronger than the play can justify.", "His disgust, especially toward his mother, seems to exceed its cause.", "For Eliot, this mismatch is the play's central flaw."],
          identify: { q: "What is this argument?", choices: ["Eliot's claim that Hamlet's emotion exceeds anything the play provides to justify it", "Praise of Hamlet's calm restraint", "A plot summary", "A costume note"] },
          purpose: { q: "What does this reason do?", choices: ["It gives the reason behind the 'failure' verdict — emotion without an adequate object", "It celebrates strong feelings", "It describes the set", "It ends the essay"] },
          significance: { q: "What is its significance?", choices: ["It applies the objective correlative directly: the emotion lacks a fitting external cause", "It proves Hamlet feels nothing", "It has no importance", "It restarts the play"] },
          reveals: "How Eliot turns his abstract concept into a specific charge against the play.",
          conceals: "It assumes emotion must be fully 'justified'; some readers prize exactly the excess Eliot faults.",
          ace: "Articulate the 'excess of emotion' charge; connect it to the objective correlative; extend it to whether unexplained feeling is a flaw or a strength."
        },
        {
          id: "monalisa", name: "The “Mona Lisa of Literature”", image: "images/monalisa.webp",
          clues: ["Eliot mocks critics who treat Hamlet as an endless mystery.", "He calls the play 'the Mona Lisa of literature.'", "He means critics keep projecting their own feelings onto it."],
          identify: { q: "What is this phrase?", choices: ["Eliot's phrase mocking critics who over-identify with Hamlet", "A painting analyzed in the essay", "A character named Mona", "A museum in Italy"] },
          purpose: { q: "What is Eliot criticizing?", choices: ["Readings driven by the critic's own emotions rather than the work itself", "The beauty of the painting", "A single scene of the play", "The play's ending"] },
          significance: { q: "What is its significance?", choices: ["It captures Eliot's push to study the work itself, not the reader's fascination", "It proves Hamlet is a painting", "It has no importance", "It is a stage direction"] },
          reveals: "Eliot's suspicion of subjective, self-centered criticism.",
          conceals: "It is a witty jab that can feel dismissive of readers' genuine responses to the play.",
          ace: "Articulate what the 'Mona Lisa' jab means; connect it to the theme of subjective versus objective reading; extend it to how much a reader's feelings should count."
        },
        {
          id: "sources", name: "The Older Play and Its Sources", image: "images/sources.webp",
          clues: ["Eliot points to earlier versions of the Hamlet story.", "Shakespeare reworked an older revenge play he inherited.", "Eliot argues the old material was hard to reshape into a unified whole."],
          identify: { q: "What does this concern?", choices: ["The older Hamlet play and sources Shakespeare reworked", "Eliot's own diary", "A modern sequel to Hamlet", "A painting"] },
          purpose: { q: "How does Eliot use the sources?", choices: ["To explain the play's flaws as partly caused by intractable inherited material", "To prove Shakespeare copied nothing", "To describe costumes", "To end the essay"] },
          significance: { q: "What is its significance?", choices: ["It shifts criticism toward how the work is built from its materials — a hallmark of Eliot's method", "It proves sources never matter", "It has no importance", "It restarts the play"] },
          reveals: "Eliot's interest in how a work is constructed from its materials, not just what it 'means.'",
          conceals: "The source history is uncertain; the older 'Ur-Hamlet' does not survive, so the argument leans on reconstruction.",
          ace: "Articulate Eliot's point about the sources; connect construction to judgment; extend it to how a work's raw materials can limit what it becomes."
        },
        {
          id: "impersonal", name: "Impersonal Art", image: "images/impersonal.webp",
          clues: ["Eliot distrusts art read as pure self-expression.", "He wants the artist to find the right form for an emotion, not simply vent it.", "This 'impersonal' ideal runs through his criticism."],
          identify: { q: "What is this ideal?", choices: ["Eliot's ideal of impersonal art — form over raw self-expression", "A demand that art be only about the artist", "A rule banning all emotion", "A stage prop"] },
          purpose: { q: "What does the ideal argue?", choices: ["That good art disciplines emotion into a fitting form", "That art should simply vent feelings directly", "That art must avoid all feeling", "That criticism is pointless"] },
          significance: { q: "What is its significance?", choices: ["Impersonality links this essay to Eliot's larger, influential theory of art", "It proves art is only personal", "It has no importance", "It restarts the play"] },
          reveals: "That behind the Hamlet verdict lies a whole theory of how emotion should work in art.",
          conceals: "The ideal of 'impersonality' is itself debated; not everyone agrees great art must be impersonal.",
          ace: "Articulate what 'impersonal art' means; connect it to the objective correlative; extend it to whether great art must discipline emotion."
        }
      ]
    },

    ctob: {
      name: "The Case of the Failed Masterpiece",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no line-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year did T. S. Eliot first publish 'Hamlet and His Problems'? Enter the year.",
          evidence: ["He wrote it just after the First World War.", "It was published in 1919 and collected in The Sacred Wood the next year.", "The year is one nineteen nineteen."],
          hints: ["It is the year after 1918.", "It is 1920 minus one.", "The year is 1919."],
          answer: "1919"
        },
        {
          type: "word",
          prompt: "Eliot coins the phrase 'objective ______' for the external formula that expresses an emotion in art. What is the missing word? (one word — keep it in English)",
          evidence: ["He means a set of objects and events that stand for a feeling.", "His famous phrase is 'objective ______.'", "The word begins with 'corr-.'"],
          hints: ["It is the technical term this whole essay is known for.", "It begins with 'corr…'.", "The word is correlative."],
          answer: "correlative"
        },
        {
          type: "word",
          prompt: "Whose play is Eliot criticizing in this essay? (one word — the playwright's surname)",
          evidence: ["The play in question is Hamlet.", "Its author is the most famous of English playwrights.", "The surname begins with 'Shak-.'"],
          hints: ["He also wrote Macbeth and King Lear.", "It begins with 'Shak…'.", "The playwright is Shakespeare."],
          answer: "Shakespeare"
        },
        {
          type: "mc",
          prompt: "Eliot's famous, controversial claim about the play Hamlet is that it is —",
          options: [
            "an artistic failure.",
            "Shakespeare's greatest triumph.",
            "a perfect, flawless tragedy.",
            "not really written by Shakespeare."
          ],
          hints: ["Think about the essay's most shocking line.", "Which option challenges the play's reputation?"]
        },
        {
          type: "sequence",
          prompt: "Put the moves of Eliot's argument in order, as the essay builds its case.",
          items: [
            "Eliot rejects reading Hamlet mainly through the critic's own feelings.",
            "He argues that art must express emotion through an 'objective correlative.'",
            "He claims Hamlet's emotion exceeds anything the play provides to justify it.",
            "He concludes that the play is, therefore, an artistic failure."
          ],
          hints: ["He first clears away the subjective approach.", "The concept comes before he applies it to Hamlet.", "The 'failure' verdict is the conclusion."]
        },
        {
          type: "mc",
          prompt: "By 'objective correlative,' Eliot means —",
          options: [
            "a set of objects or events that serves as the formula for a particular emotion.",
            "a purely private feeling with no outward form.",
            "a rule of English grammar.",
            "a stage direction in the play."
          ],
          hints: ["Think about how a work makes you feel something through images and events.", "Which option is about an external 'formula' for an emotion?"]
        }
      ]
    },

    arcade: {
      name: "Eliot's Argument, or a Challenge to It?",
      instruction: "Eliot's essay is famous and famously debatable. Sort each statement by whether it states part of Eliot's own argument, or a reasonable challenge to it. There is room to argue, but sort by whose side the statement is on. Thoughtful sorting earns the points.",
      buckets: [
        { id: "eliot", label: "Part of Eliot's argument", short: "Eliot" },
        { id: "challenge", label: "A challenge to Eliot", short: "Challenge" }
      ],
      cards: [
        { text: "The play Hamlet is 'most certainly an artistic failure.'", bucket: "eliot", why: "This is Eliot's own central, provocative claim." },
        { text: "Art should express emotion through an 'objective correlative.'", bucket: "eliot", why: "This is the key principle Eliot argues for." },
        { text: "Hamlet's feelings exceed anything the play gives to justify them.", bucket: "eliot", why: "This is Eliot's reason for the 'failure' verdict." },
        { text: "Shakespeare could not fully master the intractable older revenge material.", bucket: "eliot", why: "Eliot blames some flaws on the inherited sources." },
        { text: "Hamlet's very excess of feeling is what makes him so lifelike and moving.", bucket: "challenge", why: "A common answer to Eliot: the 'flaw' may be the play's power." },
        { text: "A great play need not fit one neat formula for expressing emotion.", bucket: "challenge", why: "This questions whether the objective correlative should be the test." },
        { text: "Ambiguity and inexpressible feeling can be strengths, not defects.", bucket: "challenge", why: "It reverses Eliot's assumption that emotion must be fully justified." },
        { text: "Readers' deep identification with Hamlet suggests the play succeeds.", bucket: "challenge", why: "It defends exactly the response Eliot mocks as subjective." }
      ],
      followup: "Eliot makes a bold case, and strong answers push back. Using specific points, decide whether Eliot's objective correlative is a fair test for Hamlet — and whether a 'flaw' can also be a source of a work's power."
    },

    analysis: {
      mcq: [
        {
          q: "'Hamlet and His Problems' is a work of —",
          options: [
            "literary criticism — an argument about a play, not a play or story itself.",
            "fiction with invented characters.",
            "poetry in rhyming stanzas.",
            "a stage script to be performed."
          ],
          why: "Eliot analyzes and evaluates the play; the essay is criticism, not literature-as-story."
        },
        {
          q: "Eliot's central concept, the 'objective correlative,' claims that art expresses emotion by —",
          options: [
            "finding external objects or situations that stand for that emotion.",
            "simply naming the feeling directly.",
            "hiding all emotion from the reader.",
            "following strict rules of grammar."
          ],
          why: "The 'formula' for an emotion is a set of objects, a situation, or a chain of events."
        },
        {
          q: "Eliot judges the play Hamlet a failure because —",
          options: [
            "Hamlet's emotion is in excess of anything the play offers to justify it.",
            "the play is too short.",
            "it has no famous lines.",
            "Shakespeare wrote it too quickly."
          ],
          why: "For Eliot, the feeling lacks an adequate objective correlative in the play."
        },
        {
          q: "Calling Hamlet 'the Mona Lisa of literature,' Eliot criticizes —",
          options: [
            "critics who project their own feelings onto the mysterious character.",
            "the beauty of a famous painting.",
            "the length of the play.",
            "the actors who perform it."
          ],
          why: "He faults subjective readings that treat the play as a mirror for the critic."
        },
        {
          q: "This essay is a landmark of a critical approach that —",
          options: [
            "focuses on the work itself rather than the author's biography or the reader's feelings.",
            "cares only about the author's private life.",
            "judges books by their sales.",
            "avoids all analysis."
          ],
          why: "Its close, work-centered method looks ahead to New Criticism and Eliot's impersonal ideal."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it advances Eliot's argument (the objective correlative, the 'failure' claim, the sources, or impersonal art).",
        "Explain the 'objective correlative' in your own words, and test it: name a work whose emotion is well matched by objects and events, and one where it may not be.",
        "State one strong challenge to Eliot's claim that Hamlet fails. Using specific reasoning, explain why the 'flaw' he names might actually be a strength."
      ],
      paragraph: "Write an evidence-based paragraph. Do you agree that Hamlet is 'an artistic failure'? Evaluate Eliot's argument — his concept, his reasons, and his conclusion — and defend your own judgment with specific reasoning.",
      aceReflection: "Articulate Eliot's central concept and claim. Connect the objective correlative to his verdict on Hamlet. Extend the tool to a modern work you choose, and name where it stops working."
    },

    extend: {
      name: "Test the Objective Correlative",
      prompt: "Eliot argues that a work makes us feel an emotion by giving us an 'objective correlative' — objects, a situation, a chain of events that becomes the formula for that feeling. Choose a work you know well (a film, song, story, or scene). Write a short critical argument: does it find an adequate objective correlative for its central emotion, or is the feeling 'in excess' of what the work provides? Use specific details, and then judge whether Eliot's tool helped you see the work more clearly or missed something important.",
      format: "A short critical argument applying the objective correlative to a chosen work, plus a note on whether Eliot's tool clarified or missed something."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what T. S. Eliot means by the 'objective correlative' in his essay on Hamlet. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words, using an example. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Eliot's 'Hamlet and His Problems.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in Eliot's essay because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Eliot's essay: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Eliot's 'objective correlative' to [a work I choose]. Give me two ways the tool might reveal something and one reason it might mislead me. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my argument about whether Hamlet is 'an artistic failure' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of T. S. Eliot's 'Hamlet and His Problems' — its argument, its key concept of the objective correlative, and its provocative claim that Hamlet is an artistic failure. It teaches students to read and evaluate a critical argument, and pairs naturally with the PlotPoint Hamlet room. It never reproduces Eliot's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked full text is on Wikisource (the essay within The Sacred Wood); the essay is also on Project Gutenberg as part of The Sacred Wood (#57795). Verify the link before assigning.",
        "The essay is public domain in the United States (first published 1919). Copyright status can differ by country — verify public-domain status in your location before assigning.",
        "No verified single-work LibriVox recording of this essay was found, so the room shows a clear 'audio not available' state rather than a guessed link. A recording of the whole Sacred Wood may exist; verify before linking.",
        "This is advanced literary criticism. Pair it with the PlotPoint Hamlet room and with the play itself, and scaffold the argument (claim, reasons, key concept, counterarguments) for students.",
        "Details here reflect the essay's widely discussed argument (the objective correlative; the 'artistic failure' claim; 'the Mona Lisa of literature'; the older sources; impersonal art). Confirm phrasing against the text; the room paraphrases and does not quote.",
        "Teach the essay as an argument to be evaluated, not a settled verdict; encourage students to build and defend counterarguments. Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-purpose and argument, and multiple-genre (literary criticism / argumentative) strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.5", "RI.9-10.6", "RI.9-10.8", "RI.11-12.8"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
