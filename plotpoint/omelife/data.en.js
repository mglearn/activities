/* PlotPoint — "O Me! O Life!" by Walt Whitman (from Leaves of Grass, 1867).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem (from Leaves of Grass, 1867) is public domain in the United
   States, so this room may reference brief public-domain phrases directly. "O Me! O Life!"
   is studied here as LITERATURE — free verse, apostrophe, the catalog, and the
   question-and-answer structure — in a neutral, academic frame consistent with the Texas
   required literary-works list (19 TAC §110.30, Grade 8). The room paraphrases longer
   stretches, quotes only brief public-domain phrases where a close reading needs them, and
   reproduces no copyrighted edition. Standards are good-faith alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "omelife",
  storageKey: "plotpoint.omelife.v1",

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

    "nav.enter": "Enter the Poem", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Poem",
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
    "enter.readListen": "Read — free",
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "The King James Version is in the public domain. Use your class's edition or any KJV text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for O Me! O Life!",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Poem's Turning Points",
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
    "ctob.title": "From Doubt to Answer",
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
    "arcade.title": "Doubt or Answer?",
    "arcade.default": "Sort each line by the movement of the poem it belongs to.",
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
    "print.item.relic": "Turning-points evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Contribute-a-verse organizer",
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
      title: "O Me! O Life!",
      author: "Walt Whitman",
      grades: "Grade 8",
      genre: "Poetry · Free verse",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1867)",
      textAccess: "A short public-domain poem from Leaves of Grass; use your class's copy or any public-domain text.",
      copyright: "The poem (from Leaves of Grass, 1867) is public domain, so this room may reference brief public-domain phrases directly. The room studies it as literature — its free verse, apostrophe, catalog, and question-and-answer structure — quoting only brief public-domain phrases and paraphrasing longer stretches, and reproduces no copyrighted edition.",
      contentNote: "On the Texas required literary-works list adopted 2026 under 19 TAC §110.30 (Grade 8); implementation no earlier than 2030–2031. Studied as literature — free verse, catalog, apostrophe, and the question-and-answer turn. Note that the poem voices discouragement and self-reproach before its affirming answer — preview for tone and follow local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'O Me! O Life!' — a lone figure at the edge of a vast crowded city at dusk, a single spotlight opening on an empty stage, suggesting a question that turns toward an answer."
    },
    hook: "The poem opens almost like a groan — 'O Me! O Life!' — and then piles up everything that can make a person doubt whether life means anything: faithless crowds, foolish cities, years that feel empty, a struggle that never ends. It sounds like it could sink under its own discouragement. Then it stops, sets one short answer apart, and turns everything around: you are here, life exists, and 'you may contribute a verse.' Read it as a poem, and watch a long question meet a single, steadying answer.",
    goals: [
      "Understand 'O Me! O Life!' as a free-verse poem built in two movements: a long troubled question and a short affirming answer.",
      "Analyze how the catalog of doubts and the apostrophe 'O Me! O Life!' create the poem's discouraged tone.",
      "Trace the poem's question-and-answer structure and the turn at the set-apart 'Answer.'",
      "Interpret the extended metaphor of life as a 'powerful play' to which each person 'may contribute a verse,' and the theme of finding purpose amid despair."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of free verse, apostrophe, and the catalog.",
        "Discuss: what makes a person doubt whether their life matters — and what might answer that doubt?"
      ],
      during: [
        "Use the Turning Points room to slow down and read the poem's question line by line.",
        "Track the movement: from piled-up doubts, through the central question, to the set-apart answer."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the question-and-answer structure and the play metaphor.",
        "Complete the Extend task to carry the 'contribute a verse' idea to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the answer the poem gives to its own troubled question. Include one image or phrase from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the poem's long question to its short answer. Explain how setting the piled-up doubts against a single line of affirmation shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's question-then-answer structure, or its 'contribute a verse' metaphor, to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "free verse", def: "Poetry with no fixed meter or rhyme scheme, following the rhythm of natural speech.", example: "The uneven, unrhymed lines of 'O Me! O Life!'", nonexample: "A poem in strict rhyming couplets with a regular beat.", context: "Whitman wrote in free verse, so the lines run long and unrhymed." },
      { term: "apostrophe", def: "A direct address to something absent, abstract, or unable to answer — often marked by 'O.'", example: "Crying out 'O Me! O Life!' to life itself.", nonexample: "A calm sentence describing the weather.", context: "The poem's opening apostrophe calls out to life in frustration." },
      { term: "catalog", def: "A poetic list of piled-up images, people, or things, one after another.", example: "Faithless crowds, foolish cities, and empty years listed in a row.", nonexample: "A single image described alone.", context: "The catalog of doubts stacks the speaker's troubles line by line." },
      { term: "extended metaphor", def: "A single comparison developed across several lines of a poem.", example: "Life imagined as a 'powerful play' each person adds a line to.", nonexample: "A comparison used once and dropped.", context: "The play metaphor is extended into the idea of contributing a verse." },
      { term: "structure", def: "The way a poem is organized — here, a long question set against a short answer.", example: "The troubled question, then the set-apart 'Answer.'", nonexample: "A poem with no shape or plan.", context: "The poem's structure divides it into question and answer." },
      { term: "turn", def: "The point where a poem shifts direction, feeling, or thought.", example: "The move from despair to affirmation at the 'Answer.'", nonexample: "A poem that stays in one mood from start to finish.", context: "The turn arrives when the poem stops questioning and answers." },
      { term: "tone", def: "The attitude or feeling a poem expresses through its words.", example: "The discouraged, weary tone of the opening lines.", nonexample: "A word with a clear dictionary meaning but no feeling.", context: "The tone shifts from discouragement to quiet resolve." },
      { term: "theme", def: "The central idea or message a poem explores.", example: "Finding purpose and meaning even amid doubt.", nonexample: "The plot of a story with no larger idea.", context: "The theme is that simply being here, and adding your part, matters." },
      { term: "reproach", def: "To express disapproval or blame — here, the speaker blaming himself.", example: "The speaker reproaching himself among the foolish.", nonexample: "Praising oneself with pride.", context: "The self-reproach deepens the poem's discouraged mood." }
    ],

    relic: {
      name: "The Poem's Turning Points",
      intro: "Seven instructional reconstructions of the poem's key moments — teaching recreations, not artwork from any edition. Investigate what each moment is, its role in the poem, and what it reveals about the movement from doubt to answer.",
      artifacts: [
        {
          id: "cry", name: "The Cry — 'O Me! O Life!'", image: "images/cry.webp",
          clues: ["The poem opens by calling out directly to life itself.", "The repeated 'O' marks a burst of feeling, not a calm statement.", "This exclamation frames the whole troubled question that follows."],
          identify: { q: "What does the opening 'O Me! O Life!' do?", choices: ["It cries out directly to life, addressing it as if it could hear — an apostrophe", "It quietly describes a landscape", "It introduces two characters by name", "It states a fact about history"] },
          purpose: { q: "What is this cry's role in the poem?", choices: ["It frames the whole poem as a burst of feeling and opens the troubled question", "It ends the poem on a calm note", "It lists the shepherd's tools", "It has no connection to the rest"] },
          significance: { q: "Why open with an exclamation instead of a plain statement?", choices: ["The raw feeling pulls the reader straight into the speaker's distress", "It makes the poem sound cheerful", "It hides what the poem is about", "It signals the poem is a rhyming song"] },
          reveals: "The apostrophe that frames the poem and sets its urgent, troubled tone.",
          conceals: "How much the single word 'O' does to color everything that follows.",
          ace: "Articulate what the opening cry expresses; connect it to the tone that follows; extend it to why a poem might begin with feeling before explanation."
        },
        {
          id: "catalog", name: "The Catalog of Doubts", image: "images/catalog.webp",
          clues: ["The poem piles up image after image of what troubles the speaker.", "Among them are the 'faithless' crowds and cities 'fill'd with the foolish.'", "The list keeps stacking, without pause, building weight."],
          identify: { q: "What does this piled-up list of troubles form?", choices: ["A catalog — a run of images stacked one after another", "A single balanced comparison", "A rhymed refrain", "A calm description of nature"] },
          purpose: { q: "What does the catalog do to the poem's feeling?", choices: ["Its stacking weight builds a mood of mounting discouragement", "It lightens the mood with jokes", "It resolves the poem's question", "It changes the subject to a feast"] },
          significance: { q: "Why list the doubts instead of naming just one?", choices: ["The pile-up shows the doubts as endless and overwhelming", "One doubt would be more frightening", "The list is only decoration", "The doubts cancel each other out"] },
          reveals: "The catalog technique piling up the speaker's doubts into a single crushing weight.",
          conceals: "How the sheer length of the list prepares the reader for the short answer to come.",
          ace: "Articulate what the catalog lists; connect its length to the tone it builds; extend it to a time a list of troubles felt heavier than one alone."
        },
        {
          id: "reproach", name: "Self-Reproach", image: "images/reproach.webp",
          clues: ["The speaker does not only blame the crowds — he turns the question on himself.", "He names himself 'ever reproaching myself' among the doubts.", "The trouble is not just outside; it is inside too."],
          identify: { q: "What does this moment show the speaker doing?", choices: ["Blaming and reproaching himself, not only the world around him", "Praising his own accomplishments", "Naming his shepherd", "Describing a joyful feast"] },
          purpose: { q: "What does turning the blame inward add to the poem?", choices: ["It shows the doubt is personal, not only about others", "It makes the speaker sound proud", "It ends the catalog early", "It introduces the answer"] },
          significance: { q: "Why include self-reproach among the outer troubles?", choices: ["It deepens the discouragement by making the speaker part of the problem", "It proves the speaker is content", "It has no effect on the mood", "It changes the poem to prose"] },
          reveals: "That the poem's doubt reaches inward — the speaker reproaches himself, not only the crowds.",
          conceals: "How this inward turn makes the coming affirmation feel more hard-won.",
          ace: "Articulate what self-reproach means here; connect it to the outer doubts; extend it to why blaming oneself can deepen discouragement."
        },
        {
          id: "question", name: "'What Good Amid These?'", image: "images/question.webp",
          clues: ["After the long catalog, the speaker asks a single central question.", "He asks what good there is amid all these troubles — 'What good amid these, O me, O life?'", "This question gathers the whole first movement to a point."],
          identify: { q: "What does the central question ask?", choices: ["What good there is amid all these troubles", "Where the shepherd is leading the flock", "How many years have passed", "What time the play begins"] },
          purpose: { q: "What role does this question play in the poem's structure?", choices: ["It gathers the piled-up doubts into one question that the answer will respond to", "It closes the poem for good", "It begins a new catalog", "It repeats the opening cry word for word"] },
          significance: { q: "Why place one clear question after the long list?", choices: ["It focuses all the doubt into a single point the answer can address", "It changes the subject entirely", "It makes the doubts disappear", "It rhymes with the answer"] },
          reveals: "The central question that concentrates the whole troubled first movement.",
          conceals: "How the question sets up the structural turn that answers it.",
          ace: "Articulate the central question; connect it to the catalog before it; extend it to how a question can organize a whole piece of writing."
        },
        {
          id: "answer", name: "The Set-Apart 'Answer'", image: "images/answer.webp",
          clues: ["The poem marks a short reply with the single word 'Answer.'", "It is set apart from the long question that came before.", "This is the poem's turn — from doubt toward affirmation."],
          identify: { q: "What does the set-apart 'Answer' mark?", choices: ["The poem's turn from the troubled question to a short affirmation", "A second, longer catalog of doubts", "The middle of the question", "A change to rhyming couplets"] },
          purpose: { q: "Why set the answer apart from the question?", choices: ["The break signals a clear shift in feeling and direction — the turn", "It hides the answer from the reader", "It makes the two parts identical", "It has no purpose"] },
          significance: { q: "What does the poem's two-part shape reveal?", choices: ["Meaning is reached by moving through the doubt to an answer, not around it", "The doubt was never real", "The answer repeats the question", "The poem has no structure"] },
          reveals: "The structural turn — the single word 'Answer' dividing the poem into its two movements.",
          conceals: "How the shortness of the answer, against the long question, gives it weight.",
          ace: "Articulate what the turn changes; connect the short answer to the long question; extend it to why a small reply can outweigh a large problem."
        },
        {
          id: "play", name: "'The Powerful Play Goes On'", image: "images/play.webp",
          clues: ["The answer imagines life as a 'powerful play' that keeps going.", "Life and identity are pictured as an ongoing drama.", "The play does not stop for any one person's doubt."],
          identify: { q: "What comparison does 'the powerful play' make?", choices: ["It pictures life as an ongoing drama or performance", "It describes a real theater building", "It names a game the sheep play", "It lists the speaker's enemies"] },
          purpose: { q: "What does the play metaphor do in the answer?", choices: ["It reframes life as a vast, continuing story larger than any one doubt", "It ends the poem in despair", "It repeats the catalog", "It describes the weather"] },
          significance: { q: "Why say the play 'goes on'?", choices: ["Life continues regardless of doubt, and there is still a part to take in it", "The play has already ended", "The speaker refuses to join", "It means the poem stops here"] },
          reveals: "The extended metaphor of life as a 'powerful play' that continues beyond any single doubt.",
          conceals: "How casting life as a play prepares the reader to imagine adding a line to it.",
          ace: "Articulate the play metaphor; connect 'goes on' to the poem's hope; extend it to another way life has been compared to a story or stage."
        },
        {
          id: "verse", name: "'You May Contribute a Verse'", image: "images/verse.webp",
          clues: ["The answer ends by saying you may add your own line to the play.", "The abstract idea of purpose becomes a concrete image: a verse.", "This is the poem's affirming resolution and its theme."],
          identify: { q: "What does 'you may contribute a verse' offer?", choices: ["The chance to add your own line to the ongoing play of life", "A ticket to a real theater", "A verse the shepherd will sing", "A list of the speaker's doubts"] },
          purpose: { q: "How does this line answer the poem's question?", choices: ["It says purpose comes from being here and adding your own part", "It repeats the troubles from the catalog", "It refuses to answer", "It ends the play"] },
          significance: { q: "Why picture purpose as 'a verse'?", choices: ["A single line makes the huge idea of meaning small enough to grasp", "It means the poem is about writing only", "It cancels the powerful play", "It has no connection to the answer"] },
          reveals: "The affirming resolution — that identity and purpose come from contributing your own verse.",
          conceals: "How a single concrete image carries the poem's whole answer to despair.",
          ace: "Articulate what contributing a verse means; connect it to the play metaphor; extend it to what your own 'verse' might be."
        }
      ]
    },

    ctob: {
      name: "From Doubt to Answer",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The affirming answer imagines life as a powerful ______ that goes on. (one word)",
          evidence: ["The answer compares life to an ongoing performance.", "It is something staged, with actors and parts to take.", "The word begins with 'pl…'."],
          hints: ["Actors perform it on a stage.", "Pl…", "The word is play."],
          answer: "play"
        },
        {
          type: "mc",
          prompt: "The faithless crowds and foolish cities piled up at the start are mainly images of —",
          options: [
            "doubt and discouragement.",
            "celebration and welcome.",
            "wealth and success.",
            "calm and rest."
          ],
          hints: ["Think about how these images make the reader feel.", "Which option matches a mood of mounting trouble?"]
        },
        {
          type: "mc",
          prompt: "The single word 'Answer,' set apart from the long question, functions in the poem to —",
          options: [
            "mark the turn from doubt to affirmation.",
            "begin a second, longer catalog of doubts.",
            "repeat the opening cry word for word.",
            "list the speaker's enemies."
          ],
          hints: ["It divides the poem into its two movements.", "It comes right before the poem's hopeful lines."]
        },
        {
          type: "digit",
          prompt: "The poem is built in this many movements — a long troubled question and a short set-apart answer. Enter the number.",
          evidence: ["One part is the long, piled-up question of doubt.", "The other part is the short reply marked 'Answer.'", "Count the two parts."],
          hints: ["A question, then an answer.", "Count the question and the answer.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the poem's movements in the order they appear, earliest first.",
          items: [
            "The opening cry, 'O Me! O Life!'",
            "The catalog of doubts — faithless crowds and foolish cities.",
            "The central question, 'What good amid these?'",
            "The set-apart answer: the play goes on, and you may contribute a verse."
          ],
          hints: ["The poem begins with an exclamation.", "The catalog comes before the single question.", "The answer closes the poem."]
        },
        {
          type: "mc",
          prompt: "The answer says that identity and purpose come from —",
          options: [
            "being here and contributing your own verse to the play.",
            "escaping the play entirely.",
            "removing all doubt from the world.",
            "winning against the crowds."
          ],
          hints: ["The poem points to what you 'may contribute.'", "The answer affirms simply being present and adding your part."]
        }
      ]
    },

    arcade: {
      name: "Doubt or Answer?",
      instruction: "'O Me! O Life!' sets a long question of doubt against a short answer of purpose. Sort each line by the movement of the poem it belongs to: is it part of the TROUBLED QUESTION (doubt), or part of the AFFIRMING ANSWER (purpose)? Reasoning earns the points.",
      buckets: [
        { id: "question", label: "The troubled question (doubt)", short: "Question" },
        { id: "answer", label: "The affirming answer (purpose)", short: "Answer" }
      ],
      cards: [
        { text: "The endless 'trains of the faithless.'", bucket: "question", why: "Part of the catalog of doubts that opens the poem." },
        { text: "Cities 'fill'd with the foolish.'", bucket: "question", why: "Another piled-up image of discouragement in the question." },
        { text: "The speaker 'ever reproaching' himself.", bucket: "question", why: "The doubt turned inward, deep in the troubled first movement." },
        { text: "'What good amid these, O me, O life?'", bucket: "question", why: "The central question that gathers the doubts to a point." },
        { text: "'That you are here — that life exists.'", bucket: "answer", why: "The affirmation that being present is itself the answer." },
        { text: "'The powerful play goes on.'", bucket: "answer", why: "The metaphor of life as an ongoing drama, part of the answer." },
        { text: "'You may contribute a verse.'", bucket: "answer", why: "The resolution — adding your own line gives purpose." },
        { text: "The single word 'Answer' set apart.", bucket: "answer", why: "It marks the turn and opens the affirming movement." }
      ],
      followup: "The poem answers a long, piled-up question with just a few short lines. What does giving so much space to the doubt, and so little to the answer, suggest about how the poem wants us to feel that answer?"
    },

    analysis: {
      mcq: [
        {
          q: "'O Me! O Life!' is best described as a poem written in —",
          options: [
            "free verse, without fixed meter or rhyme.",
            "strict rhyming couplets.",
            "a fourteen-line sonnet form.",
            "regular four-beat ballad stanzas."
          ],
          why: "Whitman's long, unrhymed lines follow natural speech rather than a fixed pattern."
        },
        {
          q: "The faithless crowds, foolish cities, and empty years piled up at the start form —",
          options: [
            "a catalog that builds the poem's discouraged tone.",
            "a balanced pair of parallel lines.",
            "a rhyming refrain repeated at the end.",
            "a calm description of a peaceful field."
          ],
          why: "The stacked images are a catalog, and their weight creates the mood of doubt."
        },
        {
          q: "The set-apart word 'Answer' works in the poem to —",
          options: [
            "mark the turn from the troubled question to the affirmation.",
            "introduce a second, longer list of doubts.",
            "name a character in the poem.",
            "repeat the opening cry."
          ],
          why: "It divides the poem into its two movements and signals the shift in feeling."
        },
        {
          q: "The phrase 'the powerful play goes on' is best understood as —",
          options: [
            "an extended metaphor picturing life as an ongoing drama.",
            "a literal description of a stage performance.",
            "a simile comparing life to a river.",
            "a rhyme that ends the poem."
          ],
          why: "Life is imagined as a continuing play, a comparison the next line extends into 'a verse.'"
        },
        {
          q: "The poem's answer says purpose comes from —",
          options: [
            "being here and contributing your own verse to the play.",
            "escaping the crowds forever.",
            "winning fame and riches.",
            "avoiding every doubt."
          ],
          why: "The affirmation is that simply existing, and adding your own line, is the answer to the question."
        }
      ],
      short: [
        "Choose one moment from the Turning Points room. Explain what it shows and what it reveals about the poem's movement from doubt to answer.",
        "The poem sets a long catalog of doubts against a short answer. Explain what this imbalance suggests about how the poem wants us to feel its affirmation.",
        "Explain the extended metaphor of life as a 'powerful play' to which you 'may contribute a verse.' How does this image answer the poem's question?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 'O Me! O Life!' use its question-and-answer structure to move from despair to purpose? Make a claim and support it with specific images or phrases from the poem.",
      aceReflection: "Articulate the poem's answer to its own question in your own words. Connect the long question to the short answer that follows it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "'O Me! O Life!' carries a whole idea — that your life has purpose — through one repeated image: a 'powerful play' you may add a 'verse' to. Choose another poem, song, story, or speech that moves from a problem to an answer, or that carries a big idea through one image. Explain the connection with evidence: what is the structure or single image, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's question-then-answer structure (or its 'contribute a verse' metaphor) to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'O Me! O Life!' answers its own troubled question with the idea that I may contribute a verse to life's powerful play. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'O Me! O Life!' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think the poem's long question connects to its short answer because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about 'O Me! O Life!': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect 'O Me! O Life!'s question-then-answer structure to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'O Me! O Life!' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Walt Whitman's 'O Me! O Life!' (from Leaves of Grass, 1867) as a short free-verse poem — a study of apostrophe, the catalog, question-and-answer structure, and the extended metaphor of life as a 'powerful play.' The poem is public domain, so brief public-domain phrases may be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "'O Me! O Life!' appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 8); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem (from Leaves of Grass, 1867) is public domain in the United States — so it may be used directly. This room still paraphrases longer stretches and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's free verse, apostrophe, catalog, and question-and-answer structure academically and neutrally, and follow your district's policy and community expectations.",
        "Details here were checked against the poem (the opening apostrophe 'O Me! O Life!'; the catalog of doubts — the recurring 'trains of the faithless,' cities 'fill'd with the foolish,' the speaker 'ever reproaching' himself, the 'empty and useless years,' the 'struggle ever renew'd'; the central question 'What good amid these, O me, O life?'; the set-apart 'Answer' — that you are here, that life and identity exist, 'the powerful play goes on, and you may contribute a verse'). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 8 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially free verse, apostrophe, and extended metaphor. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.4", "RL.8.5", "W.8.1", "SL.8.1", "L.8.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
