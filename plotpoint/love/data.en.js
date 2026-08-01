/* PlotPoint — 1 Corinthians 13, "The Love Chapter" (studied as literature and rhetoric).
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The passage (1 Corinthians 13) is ancient and public domain, but the
   Texas-specified translation is the English Standard Version (ESV), which is COPYRIGHTED.
   This room reproduces NO scripture text from any edition and paraphrases throughout. It
   studies the chapter as LITERATURE and RHETORIC — its extended definition, personification,
   metaphor, and closing triad — in a neutral, academic, non-devotional frame consistent with
   the Texas required literary-works list (19 TAC §110.70, English IV / high school). Facts were
   checked against a public-domain translation, but no wording is quoted from any edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "love",
  storageKey: "plotpoint.love.v1",

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
    "enter.readListenNote": "The King James Version is in the public domain. Use your class's edition or any KJV text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for 1 Corinthians 13",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Anatomy of Love",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the poem",
    "relic.q.significance": "What it reveals about the poem's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Definition Unlocked",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the poem closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Love Is / Love Is Not",
    "arcade.default": "Sort each trait by whether the passage affirms it or denies it of love.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Images to sort",
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
    "extend.title": "One Image, One Idea",
    "extend.format": "Format",
    "extend.evidence": "The image from the poem I am building on",
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
    "print.item.relic": "Anatomy of Love evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Extended-definition organizer",
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
      title: "The Definition of Love — 1 Corinthians 13",
      author: "English Standard Version (specified)",
      grades: "English IV",
      genre: "Sacred text · Epistle · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole passage is discussed",
      rights: "Underlying passage public domain; specified version (ESV) copyrighted",
      textAccess: "1 Corinthians 13 is a short chapter of about thirteen verses. Read it in your class's assigned edition. The underlying passage is ancient and public domain, but the state-specified translation (ESV) is copyrighted and must be supplied by the district.",
      copyright: "The passage itself — 1 Corinthians 13, part of an ancient letter — is very old and in the public domain. The state-specified translation, however, is the English Standard Version (ESV), which is copyrighted. To respect that copyright, this room reproduces NO scripture text and quotes NO wording from the ESV or any other edition; it paraphrases everything in its own words and studies the chapter as literature and rhetoric — its extended definition, personification, metaphor, and closing triad.",
      contentNote: "Presented as literature and rhetoric — extended definition, personification, and structure — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list adopted 2026 under 19 TAC §110.70 (English IV / high school). Because the state names a copyrighted translation (ESV), a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 1 Corinthians 13 — an open scroll on a warm wooden table beside a clouded glass mirror giving back a blurred reflection, with three small stones set in a row to suggest the closing triad of faith, hope, and love."
    },
    hook: "Take an abstract word almost everyone claims to understand — love — and try to define it. This short chapter of an ancient letter does exactly that. It first argues that without love the most impressive gifts are worthless; then it builds a definition trait by trait, saying what love is and, just as often, what love is not; and it closes by ranking love above all else. Read it as literature, and watch a whole definition assembled by affirmation, negation, and one striking image of a blurry reflection.",
    goals: [
      "Understand 1 Corinthians 13 as an extended definition of an abstract idea — love — built through rhetoric rather than a single scene.",
      "Analyze how the passage defines love by affirmation ('love is…') and by negation ('love is not…'), and how contrast sharpens meaning.",
      "Trace the chapter's three movements: love as the thing that gives gifts their worth, love's qualities, and love's permanence.",
      "Interpret the passage's figurative language — personification of love, the dim-reflection metaphor, the childhood-to-adulthood analogy, and the closing triad."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an extended definition built by contrast.",
        "Discuss: how would you define an abstract idea like love — by listing what it is, what it is not, or both?"
      ],
      during: [
        "Use the Anatomy of Love to slow down and read the definition trait by trait.",
        "Track the three movements: gifts are empty without love, love's qualities, and love's permanence."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the definition and the passage's structure.",
        "Complete the Extend task to transfer the define-by-affirmation-and-negation technique to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how this chapter defines love. Include one trait it affirms and one it denies that helped you understand the definition." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the passage — for example, the opening claim that gifts are worthless without love and the closing claim that love outlasts them. Explain how the two ideas reinforce each other." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the passage's technique — defining an abstract idea by saying both what it is and what it is not — to another text or a real situation. Explain what transfers, what changes, and where the technique stops working." }
    },

    vocab: [
      { term: "rhetoric", def: "The art of using language to persuade, define, or move an audience.", example: "Building a case through repetition and contrast.", nonexample: "A random list with no purpose or arrangement.", context: "The chapter's power comes from its careful rhetoric, not a story." },
      { term: "extended definition", def: "Explaining an abstract term at length by describing its qualities, examples, and opposites rather than in a single sentence.", example: "Defining love across many lines by what it is and is not.", nonexample: "A one-line dictionary entry.", context: "The passage is an extended definition of love." },
      { term: "personification", def: "Giving a nonhuman thing — an idea, force, or object — human qualities or actions.", example: "Saying love 'is patient' and 'does not boast,' as if love were a person.", nonexample: "Describing a person's actual patience.", context: "The chapter uses personification, treating love as someone who acts." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Comparing partial understanding to a blurred reflection in a mirror.", nonexample: "Saying something is 'like' another thing (that is a simile).", context: "The dim-reflection image is the passage's central metaphor." },
      { term: "analogy", def: "A comparison that explains one thing by lining it up with a more familiar one.", example: "Comparing growing in understanding to growing from a child into an adult.", nonexample: "Two ideas placed together with no relationship shown.", context: "The passage uses the child-to-adult analogy to explain partial versus mature understanding." },
      { term: "antithesis", def: "A rhetorical contrast that sets opposite ideas side by side for emphasis.", example: "'Love is patient' set against 'love is not envious.'", nonexample: "Two sentences that simply repeat the same idea.", context: "The definition works largely through antithesis — is versus is not." },
      { term: "triad", def: "A grouping of three related items, often used for emphasis or balance at a climax.", example: "Faith, hope, and love named together at the end.", nonexample: "A pair or a long unbalanced list.", context: "The closing triad names three things that remain and ranks love highest." },
      { term: "theme", def: "The central idea or insight a text develops about its subject.", example: "The claim that love gives everything else its worth and outlasts it.", nonexample: "A single plot event with no larger meaning.", context: "The theme is what makes love supreme among human gifts and virtues." },
      { term: "forbearance", def: "Patient self-restraint — the willingness to bear with others without anger or complaint.", example: "Staying calm and kind under provocation.", nonexample: "Snapping back at the first annoyance.", context: "The passage opens its definition with patience and forbearance." }
    ],

    relic: {
      name: "The Anatomy of Love",
      intro: "Seven instructional reconstructions of the moves in this chapter — teaching recreations, not artwork or text from any edition. Investigate what each part is, its role in the definition, and what it reveals.",
      artifacts: [
        {
          id: "opening", name: "The Opening Argument", image: "images/opening.webp",
          clues: ["The chapter begins not with a definition but with a warning.", "It lists impressive gifts — eloquent speech, prophecy, deep knowledge, mountain-moving faith, even extreme self-sacrifice.", "Each one, it argues, adds up to nothing if love is missing."],
          identify: { q: "How does the chapter open?", choices: ["By arguing that even the greatest gifts are worthless without love", "By defining love in a single sentence", "By telling a story about two friends", "By listing rules to memorize"] },
          purpose: { q: "What is this opening's role in the passage?", choices: ["It establishes love's supreme value before defining it", "It ends the argument", "It describes the writer's daily life", "It has no link to what follows"] },
          significance: { q: "Why start with what love outranks rather than what love is?", choices: ["Showing love's necessity first makes the coming definition feel urgent and important", "The writer forgot the definition", "It is only decoration", "It contradicts the rest"] },
          reveals: "That the whole chapter treats love as the thing that gives every other gift its worth.",
          conceals: "How the argument builds by piling up gifts only to cancel each one.",
          ace: "Articulate the opening claim; connect it to one impressive gift it names; extend it to why a writer might argue for a thing's value before defining it."
        },
        {
          id: "affirmations", name: "Love Is Patient and Kind", image: "images/affirmations.webp",
          clues: ["After the opening, the chapter starts to define love directly.", "Its first moves are positive: love is patient; love is kind.", "These affirmations describe love as if it were a person who acts."],
          identify: { q: "What does this part of the definition do?", choices: ["States positive qualities of love, beginning with patience and kindness", "Lists things love destroys", "Describes a battle", "Names the writer's enemies"] },
          purpose: { q: "What technique gives these lines their force?", choices: ["Personification — love is treated as a person who is patient and acts kindly", "Rhyme at the end of each line", "A numbered checklist", "A single long metaphor about the sea"] },
          significance: { q: "Why open the definition with affirmations?", choices: ["Naming what love is gives the reader a positive anchor before the contrasts", "To confuse the reader", "To end the passage quickly", "To change the subject"] },
          reveals: "That love is defined partly by the good it actively does.",
          conceals: "How treating love as a person shapes the reader's sense of it.",
          ace: "Articulate the affirmations; connect patience to kindness; extend it to how personifying an idea makes it feel real."
        },
        {
          id: "negations", name: "What Love Is Not", image: "images/negations.webp",
          clues: ["The definition turns from what love is to a run of what love is not.", "It denies envy, boasting, arrogance, rudeness, and self-seeking.", "The steady 'not' after 'not' builds a rhythm of contrast."],
          identify: { q: "What does this catalog do?", choices: ["Defines love by denying qualities it does not have — envy, boasting, pride, rudeness, self-seeking", "Praises those same qualities", "Lists the writer's possessions", "Describes a landscape"] },
          purpose: { q: "Why define love so heavily by negation?", choices: ["Ruling out its opposites sharpens the definition through antithesis", "The writer ran out of positive words", "To pad the chapter's length", "To hide the meaning"] },
          significance: { q: "What does the run of 'not' add?", choices: ["A rhythmic contrast that makes love's true shape stand out against its opposites", "A joke", "A change of speaker", "A list of names"] },
          reveals: "That a definition can be built as much by exclusion as by affirmation.",
          conceals: "How much of everyday self-interest the negations quietly rule out.",
          ace: "Articulate the negations; connect them to the earlier affirmations; extend it to a time defining something by what it is not made the meaning clearer."
        },
        {
          id: "record", name: "Keeping No Record of Wrongs", image: "images/record.webp",
          clues: ["Among the negations, one trait is especially memorable.", "It says love keeps no running tally of the wrongs done to it.", "The idea is of refusing to store up grievances."],
          identify: { q: "What defining trait does this image capture?", choices: ["That love keeps no record of wrongs suffered", "That love writes down every insult", "That love demands repayment", "That love forgets who its friends are"] },
          purpose: { q: "Why single out this trait for close attention?", choices: ["It vividly pictures forgiveness as refusing to keep a ledger of hurts", "It is the least important line", "It describes accounting", "It is unrelated to love"] },
          significance: { q: "What does 'no record' suggest about love's memory?", choices: ["Love chooses not to store grievances, letting go instead of tallying", "Love has a perfect memory for offenses", "Love forgets everything, good and bad", "Love keeps score to stay fair"] },
          reveals: "A concrete, memorable picture of forgiveness inside an abstract definition.",
          conceals: "How a bookkeeping image sharpens an idea as slippery as forgiveness.",
          ace: "Articulate the no-record trait; connect it to the idea of forgiveness; extend it to why a concrete image can define an abstract virtue."
        },
        {
          id: "child", name: "The Childhood-to-Adulthood Analogy", image: "images/child.webp",
          clues: ["In the final movement, the chapter compares present understanding to a stage of growth.", "It likens partial understanding to how a child thinks and speaks.", "Growing up, it says, means leaving childish ways behind for mature ones."],
          identify: { q: "What comparison does this analogy make?", choices: ["Present, partial understanding is like a child's, which gives way to an adult's", "Childhood is better than adulthood", "Adults understand nothing", "Growing up changes nothing"] },
          purpose: { q: "What does the analogy help explain?", choices: ["That current understanding is incomplete and will mature over time", "That children write the best poetry", "That the passage is about parenting", "That love ends in childhood"] },
          significance: { q: "Why use growing up to picture understanding?", choices: ["It is a familiar, universal experience that makes 'partial versus mature' easy to grasp", "It has nothing to do with the theme", "It contradicts the opening", "It ends the letter"] },
          reveals: "That the chapter frames human understanding as incomplete but growing.",
          conceals: "How an everyday experience carries a claim about the limits of knowledge.",
          ace: "Articulate the child-to-adult analogy; connect it to the idea of partial understanding; extend it to a time you outgrew an earlier way of seeing something."
        },
        {
          id: "mirror", name: "The Dim Reflection", image: "images/mirror.webp",
          clues: ["The chapter's central metaphor pictures a mirror.", "Ancient mirrors gave back a blurred, imperfect image.", "The passage contrasts seeing dimly now with seeing clearly later."],
          identify: { q: "What does the mirror image show?", choices: ["Present understanding as a dim, blurred reflection compared with clear sight later", "A perfectly clear modern mirror", "A window onto a field", "A painting of a face"] },
          purpose: { q: "What does this metaphor express?", choices: ["That we grasp things only partially now but will understand fully in time", "That mirrors are dangerous", "That the writer is vain", "That reflections are meaningless"] },
          significance: { q: "Why choose a blurred reflection, of all images?", choices: ["A dim mirror captures the gap between partial knowledge now and full understanding later", "Mirrors are expensive", "It is only decoration", "It cancels the analogy before it"] },
          reveals: "A striking metaphor for the limits of present understanding.",
          conceals: "How the mirror pairs with the child-to-adult analogy to make the same point twice.",
          ace: "Articulate the dim-reflection metaphor; connect it to the child-to-adult analogy; extend it to how one image can carry an idea a plain statement cannot."
        },
        {
          id: "triad", name: "Faith, Hope, and Love — the Greatest Is Love", image: "images/triad.webp",
          clues: ["The chapter closes by naming three things that remain.", "They are faith, hope, and love.", "Of the three, it declares love the greatest."],
          identify: { q: "How does the chapter end?", choices: ["By naming three lasting things — faith, hope, and love — and ranking love highest", "By listing every gift again", "With a warning", "With a question left open"] },
          purpose: { q: "What does the closing triad accomplish?", choices: ["It gathers the argument into a memorable three and gives love the final, highest place", "It changes the subject", "It repeats the opening word for word", "It has no clear point"] },
          significance: { q: "Why end on a group of three with love ranked first?", choices: ["A balanced triad makes the climax memorable and settles love as supreme", "Three is a random number", "The writer could not choose", "It undercuts the definition"] },
          reveals: "That the whole definition drives toward one ranking: love above all.",
          conceals: "How a set of three creates a satisfying, quotable close.",
          ace: "Articulate the closing triad; connect it to the opening claim about love's worth; extend it to why writers often end on a memorable group of three."
        }
      ]
    },

    ctob: {
      name: "The Definition Unlocked",
      intro: "Six locks. Every answer is inferable from the passage and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole chapter is an extended definition of a single abstract idea. What is it? (one word)",
          evidence: ["Every trait in the chapter describes this one thing.", "The opening says gifts are worthless without it.", "The word begins with 'lo…'."],
          hints: ["The chapter is often called the 'love chapter.'", "Lo…", "The word is love."],
          answer: "love"
        },
        {
          type: "mc",
          prompt: "The chapter's opening argument mainly claims that —",
          options: [
            "impressive gifts are worthless without love.",
            "love is easy to define in one sentence.",
            "knowledge matters more than love.",
            "self-sacrifice always earns a reward."
          ],
          hints: ["The opening lists gifts, then cancels each one.", "Which option matches 'nothing without love'?"]
        },
        {
          type: "mc",
          prompt: "The dim-reflection image (an ancient mirror) works in the passage to —",
          options: [
            "picture how partial our present understanding is compared to later.",
            "warn against the dangers of vanity.",
            "describe the writer's own appearance.",
            "close the chapter with a feast."
          ],
          hints: ["Ancient mirrors gave back a blurred image.", "It is paired with the child-to-adult analogy about partial versus mature understanding."]
        },
        {
          type: "digit",
          prompt: "This passage is the ______th chapter of First Corinthians. Enter the number.",
          evidence: ["It is commonly cited as First Corinthians, this chapter.", "It sits between chapter 12 and chapter 14.", "Twelve plus one."],
          hints: ["It follows chapter 12 and comes before chapter 14.", "Twelve plus one.", "The number is 13."],
          answer: "13"
        },
        {
          type: "sequence",
          prompt: "Put the chapter's three movements in the order they appear, earliest first.",
          items: [
            "Without love, even the greatest gifts are worthless.",
            "A definition of love by what it is and is not.",
            "Love's permanence — it outlasts prophecy, tongues, and knowledge.",
            "The closing triad: faith, hope, and love, with love the greatest."
          ],
          hints: ["The chapter opens by weighing love against other gifts.", "The trait-by-trait definition comes before the claims about permanence.", "The triad closes the chapter."]
        },
        {
          type: "mc",
          prompt: "The chapter defines love using two opposite moves. They are —",
          options: [
            "affirmation ('love is…') and negation ('love is not…').",
            "rhyme and meter only.",
            "past tense and future tense only.",
            "questions and answers only."
          ],
          hints: ["Notice how 'love is patient' sits near 'love is not envious.'", "This pairing of opposite claims is called antithesis."]
        }
      ]
    },

    arcade: {
      name: "Love Is / Love Is Not",
      instruction: "This chapter defines love by saying both what it is and what it is not. Sort each paraphrased trait by how the passage uses it: does the definition AFFIRM this of love, or DENY it of love? Reasoning earns the points.",
      buckets: [
        { id: "affirm", label: "What love IS (affirmations)", short: "Love IS" },
        { id: "deny", label: "What love is NOT (negations)", short: "Love is NOT" }
      ],
      cards: [
        { text: "Patient and slow to anger.", bucket: "affirm", why: "The definition opens by affirming patience." },
        { text: "Kind toward others.", bucket: "affirm", why: "Kindness is one of the first affirmed qualities." },
        { text: "Glad about the truth.", bucket: "affirm", why: "Love is said to rejoice in the truth, an affirmation." },
        { text: "Willing to bear, trust, hope, and endure through hardship.", bucket: "affirm", why: "The definition affirms that love endures all things." },
        { text: "Envious of what others have.", bucket: "deny", why: "The passage denies envy of love." },
        { text: "Boastful and full of pride.", bucket: "deny", why: "Love is said not to boast or be arrogant — a negation." },
        { text: "Rude and self-seeking.", bucket: "deny", why: "The catalog of negations rules out rudeness and insisting on its own way." },
        { text: "Quick to keep a record of wrongs.", bucket: "deny", why: "Love is defined as keeping no record of wrongs — a negation." }
      ],
      followup: "The chapter defines love as much by what it rules out as by what it affirms. What does defining an idea by contrast — is versus is not — let a writer do that a list of positives alone cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "1 Corinthians 13 is best described as —",
          options: [
            "an extended definition of love built through rhetoric.",
            "a narrative about two travelers.",
            "a set of laws to be memorized.",
            "a personal letter about the writer's travel plans."
          ],
          why: "The chapter defines an abstract idea at length through affirmation, negation, and imagery rather than telling a story."
        },
        {
          q: "The opening argument claims that impressive gifts — eloquence, prophecy, knowledge, faith — are —",
          options: [
            "worthless without love.",
            "more important than love.",
            "impossible to possess.",
            "the true subject of the chapter."
          ],
          why: "Each gift is named and then cancelled: without love it amounts to nothing."
        },
        {
          q: "Saying love 'is patient,' 'does not boast,' and 'keeps no record of wrongs' is an example of —",
          options: [
            "personification — treating love as a person who acts.",
            "a rhyme scheme.",
            "a flashback.",
            "onomatopoeia."
          ],
          why: "Abstract love is given human actions and dispositions, the mark of personification."
        },
        {
          q: "The dim-reflection metaphor and the child-to-adult analogy both make the point that present understanding is —",
          options: [
            "partial now but will become complete later.",
            "already perfect and finished.",
            "impossible to improve.",
            "unimportant to the chapter."
          ],
          why: "Both images contrast an incomplete present with a fuller future understanding."
        },
        {
          q: "The chapter closes by naming faith, hope, and love and ranking love highest. This grouping of three is a —",
          options: [
            "triad.",
            "simile.",
            "pun.",
            "stanza break."
          ],
          why: "A balanced set of three at the climax is a triad, and it settles love as the greatest."
        }
      ],
      short: [
        "Choose one part from the Anatomy of Love. Explain what it shows and what it reveals about how the chapter defines love.",
        "The chapter defines love by both affirmation ('love is…') and negation ('love is not…'). Explain what defining by contrast lets the writer accomplish.",
        "Explain the dim-reflection metaphor and the child-to-adult analogy. How do these two images make the same point about understanding?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 1 Corinthians 13 build an extended definition of an abstract idea like love? Make a claim and support it with specific moves from the passage, paraphrasing rather than quoting.",
      aceReflection: "Articulate how the chapter defines love in your own words. Connect two of its techniques — for example affirmation and negation. Extend it to another text or situation, and name where the technique becomes hard to apply."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "1 Corinthians 13 defines an abstract idea — love — by saying both what it is and what it is not, and it ends by ranking love the greatest of three. Choose another poem, song, story, speech, or essay that defines an abstract idea (freedom, courage, friendship) by contrast, or that ranks one value above others. Explain the connection with evidence: what abstract idea is being defined, how contrast or ranking is used, and where the technique starts to break down.",
      format: "A short evidence-based comparison connecting the passage's define-by-affirmation-and-negation (or 'greatest of these' ranking) technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 1 Corinthians 13 defines love by saying both what it is and what it is not. Do not answer for me. Ask me one question at a time that helps me explain the definition in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 1 Corinthians 13. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] in 1 Corinthians 13 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the passage, in my own words." },
      { title: "Evidence prompt", text: "Here is my claim about 1 Corinthians 13: [claim]. Here is the evidence I selected, paraphrased in my own words: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect 1 Corinthians 13's define-by-contrast technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 1 Corinthians 13 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of 1 Corinthians 13 as an extended definition of an abstract idea — a study of rhetoric, personification, metaphor, analogy, and structure. The underlying passage is ancient and public domain, but the state-specified translation is the ESV, which is copyrighted; this room reproduces NO scripture text and paraphrases throughout, studying the chapter as literature and rhetoric in a neutral, academic, non-devotional frame consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "1 Corinthians 13 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The state names a copyrighted translation, the English Standard Version (ESV). To meet the requirement that classroom text be identical to the specified version, a district must supply that specified ESV edition; a public-domain translation may be used for supplemental activities but is not textually identical to the ESV.",
        "This room reproduces no copyrighted text and paraphrases throughout; teach as literature/rhetoric, neutrally and academically, and follow district policy for religious texts studied as literary works.",
        "Content anchors were fact-checked against a public-domain translation (the opening claim that gifts are worthless without love; the affirmations that love is patient and kind; the negations of envy, boasting, arrogance, rudeness, self-seeking, irritability, and resentment; love keeps no record of wrongs; love rejoices in the truth, not in wrongdoing; love bears, believes, hopes, and endures; love's permanence against prophecy, tongues, and knowledge; the child-to-adult analogy; the dim-reflection mirror metaphor; the closing triad of faith, hope, and love, with love the greatest). No wording is quoted from any edition; all content is paraphrased.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English IV ELAR TEKS (19 TAC Ch. 110) strands on rhetoric, figurative language, structure, and theme — especially extended definition, personification, metaphor, and analogy. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
