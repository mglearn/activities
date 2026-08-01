/* PlotPoint — "Do Not Be Anxious," Matthew 6:25–34 (part of the Sermon on the Mount).
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The Texas-specified translation is the English Standard Version (ESV),
   which is COPYRIGHTED. The underlying passage is ancient and public domain, but this room
   reproduces NO scripture text — it paraphrases throughout and quotes no wording from the
   ESV or any other edition. The passage is studied here as LITERATURE and RHETORIC —
   analogy, rhetorical questions, argument from lesser-to-greater, hyperbole, and aphorism —
   in a neutral, academic, non-devotional frame consistent with the Texas required
   literary-works list (19 TAC §110.30, Grade 6). Facts were checked against a public-domain
   translation (the World English Bible); none of its wording is reproduced. Standards are
   good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every choices/options
   array; the engine shuffles. */
window.__ROOM__ = {
  id: "anxious",
  storageKey: "plotpoint.anxious.v1",

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

    "nav.enter": "Enter the Text", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Text",
    "enter.by": "from the {a}",
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
    "enter.readListen": "Read — free",
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "Use your class's specified edition. This room reproduces no scripture text and paraphrases throughout.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on their class's specified edition.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Matthew 6:25–34",
    "vocab.intro": "{n} terms that unlock the passage. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Field and the Sky",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the passage",
    "relic.q.significance": "What it reveals about the passage's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Case Against Worry",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the passage closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Illustration or Direct Counsel?",
    "arcade.default": "Sort each line by how it works in the passage.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Lines to sort",
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
    "extend.title": "One Technique, New Ground",
    "extend.format": "Format",
    "extend.evidence": "The technique from the passage I am building on",
    "extend.transfers": "What transfers to another text or situation",
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
    "print.item.relic": "Field and Sky evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Persuasive-technique organizer",
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
    "path.complete": "Complete Study", "path.complete.time": "45–75 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, close-reading breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "Do Not Be Anxious — Matthew 6:25–34",
      author: "English Standard Version (specified)",
      grades: "Grade 6",
      genre: "Sacred text · Gospel · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole passage is discussed",
      rights: "Underlying passage public domain; specified version (ESV) copyrighted",
      textAccess: "This passage is ten short verses near the close of the Sermon on the Mount. Use your class's specified edition; this room reproduces no scripture text and paraphrases throughout.",
      copyright: "The passage itself is ancient and in the public domain, but the state-named translation — the English Standard Version (ESV) — is copyrighted. This room reproduces NO scripture text and quotes no wording from the ESV or any other edition; it paraphrases only, and studies the passage as literature and rhetoric.",
      contentNote: "Presented as literature and rhetoric — analogy, rhetorical questions, argument from lesser-to-greater, hyperbole, and aphorism — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.30, Grade 6). Because the state names a copyrighted translation (ESV), a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Matthew 6:25–34 — birds crossing an open sky above a field of wildflowers at dawn, with unworked grass bending in a light wind."
    },
    hook: "A speaker on a hillside makes a simple, daring argument: stop worrying. But instead of just saying it, the passage points at the sky and the grass. Look at the birds — they store nothing, yet they are fed. Look at the wildflowers — they never work a day, yet they outshine a king in his finest robes. Through questions, comparisons, and one bold exaggeration, ten short verses build a case against anxiety out of ordinary things anyone can see.",
    goals: [
      "Understand Matthew 6:25–34 as a short persuasive passage that argues against anxiety using illustrations from the natural world.",
      "Analyze its two nature illustrations — the birds of the air and the wildflowers of the field — and the feeling each creates.",
      "Trace the passage's rhetorical moves: rhetorical questions, the argument from lesser-to-greater, and the hyperbole of a king outshone by a flower.",
      "Interpret how concrete images and a closing aphorism carry the abstract counsel to worry less — and why this passage has shaped everyday language."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of persuading with an illustration drawn from nature.",
        "Discuss: how can a speaker argue for a hard idea — like 'do not worry' — using pictures instead of commands?"
      ],
      during: [
        "Use the Field and the Sky to slow down and read the passage illustration by illustration.",
        "Track the argument: from the birds that are fed, to the flowers that outshine a king, to the counsel to take one day at a time."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the illustrations and the passage's rhetoric.",
        "Complete the Extend task to carry the persuade-by-illustration technique into another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main argument the passage makes about anxiety. Include one illustration from nature that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the two nature illustrations — the birds and the wildflowers. Explain how using two examples, one from the sky and one from the field, strengthens the passage's argument." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the passage's technique — arguing from a small, ordinary example up to a bigger claim — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "anxiety", def: "A feeling of worry or unease, especially about the future or about needs that may not be met.", example: "Worrying about tomorrow's food and clothing.", nonexample: "Feeling completely calm and untroubled.", context: "The whole passage is a case against this feeling." },
      { term: "analogy", def: "A comparison that explains or argues for one thing by pointing to another that is similar.", example: "Reasoning about people's needs by looking at how birds are fed.", nonexample: "A list of facts with no comparison between them.", context: "The passage argues by analogy, from nature to human life." },
      { term: "illustration", def: "A specific example used to make a general idea clear or convincing.", example: "The birds and the wildflowers used to argue against worry.", nonexample: "An abstract claim given with no example at all.", context: "Each illustration turns a big idea into something you can picture." },
      { term: "rhetorical question", def: "A question asked to make a point rather than to get an answer.", example: "Asking whether life is not worth more than food.", nonexample: "A real question you expect someone to answer aloud.", context: "The passage builds its case with a chain of rhetorical questions." },
      { term: "hyperbole", def: "Deliberate exaggeration used for emphasis, not meant to be taken literally.", example: "A wildflower said to outshine a famous king in all his splendor.", nonexample: "A plain, exact measurement with no exaggeration.", context: "The passage uses hyperbole to make the flowers' glory vivid." },
      { term: "aphorism", def: "A short, memorable saying that states a general truth or piece of advice.", example: "Take one day at a time; today has enough of its own concerns.", nonexample: "A long, winding paragraph with no clear point.", context: "The passage closes on an aphorism about tomorrow." },
      { term: "parallelism", def: "Repeating a similar grammatical structure across lines or phrases for rhythm and emphasis.", example: "Do not worry about what you will eat / do not worry about what you will wear.", nonexample: "Two sentences with completely unrelated shapes.", context: "The paired warnings about food and clothing use parallelism." },
      { term: "theme", def: "The central idea or message a text develops.", example: "The passage's theme that worry is needless because needs are provided for.", nonexample: "A single unimportant detail with no larger meaning.", context: "Every illustration circles back to the passage's theme." },
      { term: "provision", def: "The act of supplying or caring for what is needed.", example: "Birds fed though they store nothing — a picture of provision.", nonexample: "Being left entirely without food or care.", context: "The passage points to provision in nature as its main evidence." }
    ],

    relic: {
      name: "The Field and the Sky",
      intro: "Seven instructional reconstructions of the images and moves in the passage — teaching recreations, not artwork from any edition, and no scripture text. Investigate what each image is, its role in the passage, and what it reveals.",
      artifacts: [
        {
          id: "counsel", name: "The Central Counsel — Do Not Be Anxious", image: "images/counsel.webp",
          clues: ["The passage opens by telling listeners not to worry about their lives.", "Two specific worries are named: what to eat or drink, and what to wear.", "The reason given is that life is worth more than food and the body more than clothing."],
          identify: { q: "What is the passage's central counsel?", choices: ["Do not be anxious about your life — about food, drink, or clothing", "Store up as much food and clothing as possible", "Work harder than everyone around you", "Avoid all birds and flowers"] },
          purpose: { q: "What role does this counsel play in the passage?", choices: ["It is the main claim that every illustration afterward supports", "It is a small aside unrelated to the rest", "It describes the speaker's daily chores", "It ends the passage"] },
          significance: { q: "Why open by saying life is more than food and the body more than clothes?", choices: ["It reframes worry as focusing on the smaller thing while missing the larger", "It says food and clothing do not matter at all", "It commands listeners to stop eating", "It changes the subject entirely"] },
          reveals: "The main claim the whole passage sets out to persuade you of.",
          conceals: "How much of the passage is evidence gathered to support this one counsel.",
          ace: "Articulate the central counsel; connect it to one worry it names; extend it to why a speaker might open with the claim before the proof."
        },
        {
          id: "birds", name: "The Birds of the Air", image: "images/birds.webp",
          clues: ["The first illustration points to the birds overhead.", "The birds do not plant, harvest, or store food in barns.", "Yet they are fed — and the passage says people are worth more than birds."],
          identify: { q: "What does the birds illustration show?", choices: ["Birds that neither plant nor store food, yet are still fed", "Birds building large barns to store grain", "Birds farming a field of wheat", "Birds that go hungry and starve"] },
          purpose: { q: "What is this illustration's role in the argument?", choices: ["It offers proof from nature that needs can be met without anxious hoarding", "It teaches listeners how to raise birds", "It warns against animals", "It has no link to worry"] },
          significance: { q: "What does 'you are worth more than they' add?", choices: ["It reasons from the smaller case up to the greater — an argument from lesser to greater", "It says birds and people are exactly equal", "It says people should act like birds", "It ends the illustration abruptly"] },
          reveals: "The first nature illustration and the lesser-to-greater move it sets up.",
          conceals: "How an ordinary sight becomes a piece of evidence.",
          ace: "Articulate the birds illustration; connect it to the claim about anxiety; extend it to how a small example can argue for a large idea."
        },
        {
          id: "lilies", name: "The Lilies of the Field", image: "images/lilies.webp",
          clues: ["The second illustration points to the wildflowers growing in the field.", "The flowers neither labor nor spin thread to make clothing.", "Yet they grow gloriously — the passage's picture of being 'clothed' without work."],
          identify: { q: "What does the wildflowers illustration show?", choices: ["Field flowers that neither work nor spin thread, yet grow beautifully", "Flowers being sewn into clothing by workers", "A field left bare and empty", "Flowers that must labor to survive"] },
          purpose: { q: "Why add a second illustration after the birds?", choices: ["It answers the second worry — clothing — the way the birds answered food", "It repeats the birds with no new point", "It changes the topic to farming", "It contradicts the birds"] },
          significance: { q: "How do the two illustrations work together?", choices: ["Birds for food, flowers for clothing — one for each worry the passage named", "They cancel each other out", "Only one of them matters", "They are unrelated pictures"] },
          reveals: "The second nature illustration, paired to the passage's two named worries.",
          conceals: "How carefully the two illustrations are matched to food and clothing.",
          ace: "Articulate the wildflowers illustration; connect it to the birds; extend it to why two examples persuade more than one."
        },
        {
          id: "solomon", name: "Solomon's Splendor", image: "images/solomon.webp",
          clues: ["The passage names a famously wealthy king known for royal splendor.", "It claims a simple wildflower is more beautifully arrayed than he ever was.", "The exaggeration makes the flowers' glory unforgettable."],
          identify: { q: "What comparison does this image make?", choices: ["A wildflower outshines even a famous king in all his royal splendor", "A king plants a field of flowers", "A flower is crowned as a king", "A king destroys a field"] },
          purpose: { q: "What kind of rhetorical move is this?", choices: ["Hyperbole — deliberate exaggeration for emphasis", "A precise, literal measurement", "A rhetorical question", "A simple definition"] },
          significance: { q: "Why exaggerate the flowers' glory this way?", choices: ["To make the argument vivid: if a short-lived flower is clothed so well, how much more will people be", "To praise the king above all", "To say flowers are worthless", "To end the comparison quickly"] },
          reveals: "The passage's central hyperbole and the lesser-to-greater reasoning behind it.",
          conceals: "How exaggeration can strengthen a serious argument.",
          ace: "Articulate the Solomon comparison; connect the exaggeration to the point about clothing; extend it to how hyperbole can make a claim stick."
        },
        {
          id: "questions", name: "The Rhetorical Questions", image: "images/questions.webp",
          clues: ["Instead of only giving commands, the passage keeps asking questions.", "One asks whether life is not worth more than food.", "The questions expect no spoken answer — they make the point themselves."],
          identify: { q: "What does this image highlight about the passage's style?", choices: ["It relies on a chain of rhetorical questions, not just commands", "It is written as a numbered list of rules", "It is a single unbroken sentence", "It asks questions it expects listeners to answer aloud"] },
          purpose: { q: "How do the rhetorical questions work on a listener?", choices: ["They invite listeners to reach the intended conclusion themselves", "They demand real answers before moving on", "They confuse the argument", "They change the subject"] },
          significance: { q: "Why persuade with questions instead of plain commands?", choices: ["A question can feel more convincing because the listener supplies the answer", "Questions are easier to write than statements", "Commands are forbidden in the passage", "Questions hide the passage's meaning"] },
          reveals: "How the passage persuades through questions rather than orders alone.",
          conceals: "The way a question can guide a listener toward a fixed conclusion.",
          ace: "Articulate what a rhetorical question does; connect one to the passage's claim; extend it to a speech or ad that persuades by asking."
        },
        {
          id: "worry", name: "The Uselessness of Worry", image: "images/worry.webp",
          clues: ["The passage asks whether worrying can add anything to a person's life.", "The implied answer is that it cannot.", "This turns from illustration to a direct point about what worry achieves."],
          identify: { q: "What claim does this image capture?", choices: ["Worrying cannot add even a single hour to a person's life", "Worrying makes a person live longer", "Worrying is the only way to stay safe", "Worrying feeds the birds"] },
          purpose: { q: "What does this point add to the argument?", choices: ["It shows worry is not only needless but useless — it accomplishes nothing", "It praises careful worry", "It changes the topic to farming", "It repeats the birds illustration"] },
          significance: { q: "Why include a claim about what worry cannot do?", choices: ["It removes any practical reason to worry, strengthening the counsel", "It admits worry is helpful after all", "It ends the passage on the flowers", "It contradicts the earlier illustrations"] },
          reveals: "A direct claim about what anxiety actually accomplishes: nothing.",
          conceals: "How the passage shifts from picture to plain reasoning.",
          ace: "Articulate the claim about worry; connect it to the illustrations; extend it to a time worrying changed nothing about an outcome."
        },
        {
          id: "oneday", name: "One Day at a Time", image: "images/oneday.webp",
          clues: ["The passage closes by advising listeners to seek what matters most first.", "It counsels taking each day as it comes, not worrying about tomorrow.", "The reason: tomorrow will look after itself, and each day has enough concerns of its own."],
          identify: { q: "What does the closing counsel advise?", choices: ["Seek what matters most first, and take each day at a time without worrying about tomorrow", "Plan every detail of the distant future", "Worry twice as much about tomorrow", "Never think about the day at all"] },
          purpose: { q: "What kind of statement closes the passage?", choices: ["An aphorism — a short, memorable saying that states advice", "A long descriptive story", "A rhetorical question", "A list of names"] },
          significance: { q: "Why end on 'each day has enough of its own'?", choices: ["A compact, memorable line makes the whole argument easy to carry away", "It introduces a brand-new topic", "It cancels the earlier illustrations", "It has no connection to worry"] },
          reveals: "The closing aphorism that condenses the whole argument.",
          conceals: "How a memorable last line can outlast every illustration before it.",
          ace: "Articulate the closing aphorism; connect it to the passage's main counsel; extend it to how a memorable saying can carry a big idea."
        }
      ]
    },

    ctob: {
      name: "The Case Against Worry",
      intro: "Six locks. Every answer is inferable from the passage and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The first nature illustration points to the ______ of the air, which are fed though they store nothing. (one word)",
          evidence: ["They fly overhead and neither plant nor harvest.", "They store no food in barns, yet they are fed.", "The word begins with 'bir…'."],
          hints: ["Creatures that fly in the sky.", "Bir…", "The word is birds."],
          answer: "birds"
        },
        {
          type: "mc",
          prompt: "The birds and the wildflowers are used mainly as —",
          options: [
            "illustrations from nature that argue against anxiety.",
            "instructions for farming and raising animals.",
            "warnings about dangerous wildlife.",
            "a list of foods to eat."
          ],
          hints: ["Think about what the passage is trying to persuade you of.", "Which option matches 'do not worry' rather than 'how to farm'?"]
        },
        {
          type: "mc",
          prompt: "Saying a simple wildflower outshines a famous king in his splendor is an example of —",
          options: [
            "hyperbole — deliberate exaggeration for emphasis.",
            "a rhetorical question.",
            "a precise, literal fact.",
            "a definition of a term."
          ],
          hints: ["The claim is not meant to be measured literally.", "It exaggerates the flowers' glory to make a point."]
        },
        {
          type: "digit",
          prompt: "This passage comes from which chapter of the Gospel of Matthew? Enter the number.",
          evidence: ["Its reference is written as Matthew 6:25–34.", "The number before the colon names the chapter.", "It is the same chapter number that appears in 'Matthew 6'."],
          hints: ["Look at the reference 'Matthew 6:25–34' — the chapter is the number before the colon.", "It is 'chapter 6.'", "The number is 6."],
          answer: "6"
        },
        {
          type: "sequence",
          prompt: "Put the passage's moves in the order they appear, earliest first.",
          items: [
            "The counsel: do not be anxious about food, drink, or clothing.",
            "The birds of the air, who are fed though they store nothing.",
            "The wildflowers, more gloriously clothed than a king.",
            "The closing counsel: take each day at a time, and do not worry about tomorrow."
          ],
          hints: ["The passage first states the claim, then gives proof.", "The birds (food) come before the flowers (clothing).", "The counsel about tomorrow closes the passage."]
        },
        {
          type: "mc",
          prompt: "The passage argues that if birds are fed and flowers are clothed, then people — who are worth more — will be cared for too. This kind of reasoning is —",
          options: [
            "an argument from the lesser to the greater.",
            "a definition followed by an example.",
            "a rhyme used for rhythm.",
            "a simple restatement of the same idea."
          ],
          hints: ["It moves from a small case (birds, flowers) up to a bigger claim (people).", "The phrase 'how much more' signals this move."]
        }
      ]
    },

    arcade: {
      name: "Illustration or Direct Counsel?",
      instruction: "The passage mixes two kinds of lines: pictures drawn from nature (illustrations) and statements that directly tell listeners what to do or think (direct counsel). Sort each line by how it works in the passage: is it an ILLUSTRATION FROM NATURE, or DIRECT TEACHING / COUNSEL? Reasoning earns the points.",
      buckets: [
        { id: "illustration", label: "Illustration from nature", short: "Illustration" },
        { id: "counsel", label: "Direct teaching / counsel", short: "Counsel" }
      ],
      cards: [
        { text: "The birds overhead do not plant or store food, yet they are fed.", bucket: "illustration", why: "A picture drawn from nature — the birds — used as evidence." },
        { text: "The wildflowers do not labor or spin, yet they grow gloriously arrayed.", bucket: "illustration", why: "A second nature picture — the flowers — used as evidence." },
        { text: "A simple field flower is dressed more finely than a king in his splendor.", bucket: "illustration", why: "The Solomon comparison is part of the flower illustration." },
        { text: "The grass of the field is here today and gone tomorrow, yet it is clothed.", bucket: "illustration", why: "Still an image drawn from nature, the short-lived grass." },
        { text: "Do not be anxious about what you will eat, drink, or wear.", bucket: "counsel", why: "A direct instruction to the listener, not a nature image." },
        { text: "Worrying cannot add a single hour to your life.", bucket: "counsel", why: "A direct claim about what worry does, stated plainly." },
        { text: "Seek what matters most first.", bucket: "counsel", why: "A direct piece of advice, not an illustration." },
        { text: "Do not worry about tomorrow; each day has enough of its own concerns.", bucket: "counsel", why: "The closing aphorism — direct counsel, not a nature image." }
      ],
      followup: "The passage alternates between showing (birds, flowers) and telling (do not worry, seek first). Why might a speaker weave illustrations and direct counsel together instead of using only one or the other?"
    },

    analysis: {
      mcq: [
        {
          q: "The central counsel of Matthew 6:25–34 is —",
          options: [
            "do not be anxious about your life — about food, drink, or clothing.",
            "store up as much food and clothing as you can.",
            "work harder than everyone around you.",
            "avoid the birds and the flowers."
          ],
          why: "The passage opens with this counsel and gathers every illustration to support it."
        },
        {
          q: "The birds of the air and the wildflowers of the field are used mainly to —",
          options: [
            "argue against anxiety with illustrations from nature.",
            "teach listeners how to farm and raise animals.",
            "warn about dangerous wildlife.",
            "list foods that are good to eat."
          ],
          why: "Both are nature illustrations offered as evidence that needs are met without anxious hoarding."
        },
        {
          q: "Saying a wildflower is arrayed more gloriously than a famous king is an example of —",
          options: [
            "hyperbole — deliberate exaggeration for emphasis.",
            "a precise, literal comparison.",
            "a rhetorical question.",
            "a definition of a term."
          ],
          why: "The exaggeration makes the flowers' glory vivid; it is not meant to be measured literally."
        },
        {
          q: "The reasoning 'if God clothes the short-lived grass, how much more will he clothe you' is —",
          options: [
            "an argument from the lesser to the greater.",
            "a rhyme used only for rhythm.",
            "a restatement of the same idea in other words.",
            "a plain factual report."
          ],
          why: "It moves from a small case (grass) up to a greater claim (people), the lesser-to-greater move."
        },
        {
          q: "The passage closes with the counsel to take one day at a time. This closing line is best described as —",
          options: [
            "an aphorism — a short, memorable saying that states advice.",
            "a rhetorical question.",
            "an extended illustration.",
            "a list of rules."
          ],
          why: "A compact, memorable saying condenses the whole argument at the end."
        }
      ],
      short: [
        "Choose one image from the Field and the Sky. Explain what it shows and what it reveals about the passage's argument against anxiety.",
        "The passage gives two nature illustrations — the birds and the wildflowers. Explain how using one for food and one for clothing strengthens the argument.",
        "Explain the reasoning behind 'how much more will he clothe you.' How does arguing from a small example (grass, birds) to a bigger claim (people) work to persuade a listener?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Matthew 6:25–34 use illustrations from nature and rhetorical questions to argue for an abstract idea like 'do not worry'? Make a claim and support it with specific images or moves from the passage.",
      aceReflection: "Articulate what the passage argues about anxiety in your own words. Connect two of its moves — for example an illustration and a rhetorical question. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Technique, New Ground",
      prompt: "This passage argues for a hard idea — worry less — by pointing at ordinary things (birds, flowers) and reasoning from the small case up to a bigger claim. Choose another speech, ad, essay, poem, or story that persuades the same way: with an illustration from everyday life or an argument from lesser-to-greater. Explain the connection with evidence: what is the illustration or move, what larger idea does it support, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the passage's persuade-by-illustration (or lesser-to-greater) technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Matthew 6:25–34 uses illustrations from nature, like birds and flowers, to argue against worry. Do not answer for me. Ask me one question at a time that helps me explain the argument in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Matthew 6:25–34. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [move one] connects to [move two] in Matthew 6:25–34 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the passage." },
      { title: "Evidence prompt", text: "Here is my claim about Matthew 6:25–34: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect this passage's persuade-by-illustration technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Matthew 6:25–34 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Matthew 6:25–34 — a short passage near the close of the Sermon on the Mount — as persuasive literature. It studies analogy, illustration, rhetorical questions, the argument from lesser-to-greater, hyperbole, and aphorism. The Texas-specified translation is the English Standard Version (ESV), which is copyrighted; this room reproduces NO scripture text, quotes no wording from the ESV or any edition, and paraphrases throughout. The passage is presented as literature and rhetoric in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "Matthew 6:25–34 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The specified version is the English Standard Version (ESV), which is copyrighted. To meet the requirement that classroom text be identical to the specified version, a district must supply that specified ESV edition; a public-domain translation may be used for supplemental activities but is not textually identical.",
        "Reproduces no copyrighted text; paraphrases throughout; teach as literature and rhetoric, neutral and academic; follow district policy for religious texts studied as literary works.",
        "Details here were checked against a public-domain translation (the World English Bible), with no wording reproduced: the counsel not to worry about food, drink, or clothing; life worth more than food and the body more than clothing; the birds of the air that neither sow nor reap nor store, yet are fed; people worth more than birds; worry adding nothing to one's life; the wildflowers that neither toil nor spin; the claim that they outshine even Solomon in his splendor; the short-lived grass of the field clothed by God; the 'how much more' lesser-to-greater reasoning; seeking what matters most first; and the closing counsel to take each day at a time, since tomorrow will care for itself.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 6 ELAR TEKS (19 TAC Ch. 110) strands on rhetorical and persuasive techniques, figurative language, and author's purpose — especially analogy, hyperbole, rhetorical questions, and theme. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.6.2", "RL.6.4", "RI.6.8", "W.6.1", "SL.6.1", "L.6.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
