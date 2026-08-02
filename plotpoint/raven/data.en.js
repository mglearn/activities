/* PlotPoint — "The Raven" by Edgar Allan Poe (1845).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: "The Raven" (1845) is in the public domain in the United States,
   so this room may reference the poem directly. It is studied here as LITERATURE —
   its refrain, meter, sound devices, symbolism, and psychological arc — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC §110.70,
   English II / high school). The room paraphrases, quotes only brief public-domain phrases
   (such as the refrain) where a close reading needs them, and reproduces no copyrighted
   edition. Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "raven",
  storageKey: "plotpoint.raven.v1",

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
    "vocab.title": "Words for The Raven",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Midnight Chamber",
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
    "ctob.title": "The Nevermore Case",
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
    "arcade.title": "Atmosphere or Grief?",
    "arcade.default": "Sort each detail by the work it does in the poem.",
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
    "print.item.relic": "Midnight Chamber evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Refrain-and-symbol organizer",
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
      title: "The Raven",
      author: "Edgar Allan Poe",
      grades: "English II",
      genre: "Poetry · Narrative · Gothic",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1845)",
      textAccess: "A public-domain narrative poem; use your class's copy or any public-domain text.",
      copyright: "\"The Raven\" (1845) is in the public domain in the United States, so this room may reference the poem directly. It is studied here as literature — its refrain, meter, sound devices, and symbolism — quoting brief public-domain phrases (such as the one-word refrain) where a close reading needs them and paraphrasing elsewhere. The room reproduces no copyrighted edition.",
      contentNote: "On the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. The poem centers on grief and mourning a death (the lost beloved, Lenore). It is studied here as literature — refrain, meter, sound devices, and symbolism — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'The Raven' — a dim midnight study lined with old books, a lamp-lit window with a curtain stirring, and a dark raven perched on a pale sculpted bust above a chamber door."
    },
    hook: "Midnight. A grieving reader tries to lose himself in old books, hoping to forget the woman he loved and lost — Lenore. A tapping at the window. He opens it, and a stately black raven strides in and perches on a pale bust above his door. Half amused, he asks the bird its name. It answers a single word: \"Nevermore.\" Read it as a poem, and watch that one word slowly change — from a curious novelty into the sound of his own grief closing in.",
    goals: [
      "Understand \"The Raven\" as a narrative poem that tells a story while building a single dark mood.",
      "Analyze how the refrain \"Nevermore\" shifts in meaning as the narrator reads his own despair into it.",
      "Examine Poe's sound devices — internal rhyme, alliteration, and insistent meter — and how they create the poem's musicality and dread.",
      "Interpret the poem's symbolism (the raven, the bust of Pallas, Lenore) and trace the narrator's arc from curiosity to torment."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a refrain — a line or word repeated for effect.",
        "Discuss: how can the same word mean something new each time a poem repeats it?"
      ],
      during: [
        "Use the Midnight Chamber to slow down and read the poem image by image.",
        "Track the arc: from grieving reader, to the raven's arrival, to questions that grow more desperate, to the final shadow."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the refrain, the symbols, and the poem's structure.",
        "Complete the Extend task to transfer the refrain technique or the grief-into-despair arc to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how the meaning of the refrain \"Nevermore\" changes across the poem. Include one moment from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two elements of the poem — for example the raven and the bust of Pallas it perches on. Explain how their pairing shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — a repeated refrain that gathers new meaning, or an arc from curiosity to despair — to another text, song, or situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "refrain", def: "A word, line, or phrase repeated at regular points in a poem or song.", example: "The word \"Nevermore\" returning at the end of stanza after stanza.", nonexample: "A line said only once and never repeated.", context: "The poem's refrain is the raven's single reply." },
      { term: "internal rhyme", def: "Rhyme that occurs within a single line rather than only at line-ends.", example: "\"Once upon a midnight dreary, while I pondered, weak and weary.\"", nonexample: "Two words that rhyme only at the ends of separate lines.", context: "Poe packs internal rhyme inside the poem's long lines." },
      { term: "alliteration", def: "The repetition of the same beginning consonant sound in nearby words.", example: "\"Doubting, dreaming dreams…\" — the repeated 'd' sound.", nonexample: "Words that share no beginning sound at all.", context: "Alliteration adds to the poem's hushed, chanting music." },
      { term: "symbolism", def: "Using an object, figure, or image to stand for a larger idea.", example: "The raven standing for grief and endless remembrance.", nonexample: "A word that means only its plain, literal thing.", context: "The poem's symbolism turns a bird into a figure of loss." },
      { term: "meter", def: "The regular pattern of stressed and unstressed syllables that gives a poem its beat.", example: "The steady, drumming rhythm of each long line in the poem.", nonexample: "Everyday speech with no set rhythm.", context: "The poem's insistent meter drives its haunting sound." },
      { term: "tone", def: "The attitude or mood a poem's language creates.", example: "The dark, sorrowful, dread-filled tone of the midnight chamber.", nonexample: "A cheerful, carefree feeling.", context: "The poem's tone deepens from curious to despairing." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "The theme of grief and the torment of remembering a loss.", nonexample: "A single plot event with no larger meaning.", context: "The poem's theme is loss that refuses to release the mourner." },
      { term: "bust", def: "A sculpture of a person's head and shoulders; here, a bust of Pallas (the goddess Athena).", example: "The pale bust of Pallas above the chamber door.", nonexample: "A full-length statue of a whole body.", context: "The raven perches on the bust of Pallas, goddess of wisdom." },
      { term: "quoth", def: "An old-fashioned word meaning \"said\" (used before the speaker, as in \"quoth the Raven\").", example: "\"Quoth the Raven\" — meaning \"said the Raven.\"", nonexample: "A modern word like \"texted.\"", context: "The poem uses \"quoth\" to introduce the raven's reply." }
    ],

    relic: {
      name: "The Midnight Chamber",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "study", name: "The Midnight Study", image: "images/study.webp",
          clues: ["The poem opens on a bleak midnight as a tired reader pores over old books.", "He reads to distract himself and forget a sorrow.", "The setting is dim, quiet, and lonely — before anything strange happens."],
          identify: { q: "What scene opens the poem?", choices: ["A grieving reader alone at midnight, poring over old books", "A crowded feast at noon", "A ship in a storm at sea", "A battlefield at dawn"] },
          purpose: { q: "What is this opening setting's role in the poem?", choices: ["It establishes the lonely, dread-filled mood before the raven arrives", "It provides comic relief", "It describes the raven's home", "It has no connection to the rest"] },
          significance: { q: "Why open with a man reading to forget?", choices: ["It shows a mind already burdened by grief and trying to escape it", "It shows the narrator is a scholar by profession", "It shows the narrator is asleep and dreaming happily", "It shows the narrator is a stranger to the house"] },
          reveals: "A grieving mind, already unsettled, set in a lonely midnight world.",
          conceals: "How much the mood is built before the bird ever appears.",
          ace: "Articulate what the opening scene shows; connect it to the narrator's state of mind; extend it to how a setting can prepare a reader for what comes."
        },
        {
          id: "lenore", name: "Lenore, the Lost Beloved", image: "images/lenore.webp",
          clues: ["The narrator is mourning a woman he loved and lost, whom he calls Lenore.", "He reads at midnight partly to forget his sorrow for her.", "Her name returns as the poem's other haunting sound, beside the refrain."],
          identify: { q: "Who is Lenore in the poem?", choices: ["The beloved woman the narrator has lost and is mourning", "The narrator's living sister", "A servant in the house", "The name of the raven"] },
          purpose: { q: "What is Lenore's role in the poem?", choices: ["She is the loss that drives the narrator's grief and his desperate questions", "She is a character who speaks to the raven", "She arrives at the end to comfort him", "She is a minor detail with no effect"] },
          significance: { q: "Why does the narrator keep returning to her name?", choices: ["His grief for her is the wound the raven's answers keep reopening", "He is trying to remember where he last saw her", "He hopes she is hiding nearby", "He has forgotten who she is"] },
          reveals: "The loss at the center of the poem — the death that grief cannot release.",
          conceals: "How the poem's dread grows from private mourning, not the bird alone.",
          ace: "Articulate who Lenore is; connect her loss to the narrator's questions; extend it to how grief can shape everything a person sees or hears."
        },
        {
          id: "window", name: "The Raven at the Window", image: "images/window.webp",
          clues: ["A tapping draws the narrator to the window; he opens the shutter.", "A stately raven strides in, unafraid, as if it belongs.", "Its arrival turns the poem from restless waiting to a strange visitation."],
          identify: { q: "How does the raven enter the poem?", choices: ["It flies in through the opened window and strides in with stately calm", "It is a pet the narrator already owns", "It appears in a painting on the wall", "It is described only in a dream"] },
          purpose: { q: "What does the raven's arrival do to the poem?", choices: ["It shifts the poem from lonely waiting into an eerie encounter", "It ends the poem's mystery immediately", "It brings good news and relief", "It changes the setting to daytime"] },
          significance: { q: "Why does the bird enter so boldly, 'as if it belonged'?", choices: ["Its unnerving composure makes it feel like fate rather than a mere stray bird", "It shows the bird is tame and friendly", "It shows the narrator invited it in", "It shows the bird is lost and frightened"] },
          reveals: "The mysterious visitor whose calm entrance unsettles the reader.",
          conceals: "How the poem prepares the bird to become a symbol, not just an animal.",
          ace: "Articulate how the raven enters; connect its calm to the mood it creates; extend it to how an ordinary thing can be made to feel like an omen."
        },
        {
          id: "pallas", name: "The Bust of Pallas", image: "images/pallas.webp",
          clues: ["The raven does not perch just anywhere — it lands on a pale bust of Pallas.", "Pallas is Athena, the goddess of wisdom.", "The bird sits above the chamber door, looking down on the narrator."],
          identify: { q: "Where does the raven perch?", choices: ["On a pale bust of Pallas — the goddess of wisdom — above the door", "On the narrator's writing desk", "On the windowsill outside", "On the back of a chair"] },
          purpose: { q: "Why does the bust of Pallas matter symbolically?", choices: ["Grief (the raven) settles on top of wisdom, as if overshadowing reason", "It shows the narrator collects Greek art", "It marks the raven as a scholar", "It has no meaning beyond decoration"] },
          significance: { q: "What does placing the bird above the door and above wisdom suggest?", choices: ["The narrator's reason is now dominated by his sorrow", "The narrator has become wiser than before", "The raven is protecting the house", "The goddess has come to life"] },
          reveals: "A symbol built into staging — grief perched on reason itself.",
          conceals: "How a single prop turns the scene into an argument about the mind.",
          ace: "Articulate what the bust of Pallas stands for; connect it to the raven perched above it; extend it to how a setting detail can carry an idea."
        },
        {
          id: "nevermore", name: "The Refrain \"Nevermore\"", image: "images/nevermore.webp",
          clues: ["Asked its name, the raven answers a single word: \"Nevermore.\"", "It gives the same one-word reply to every later question.", "The word is the poem's refrain — repeated, and changing in weight each time."],
          identify: { q: "What is the raven's one-word reply?", choices: ["\"Nevermore\"", "\"Forevermore\"", "\"Lenore\"", "\"Farewell\""] },
          purpose: { q: "What is the role of this repeated word in the poem?", choices: ["It is the refrain whose meaning deepens as the narrator reads despair into it", "It is a magic spell that changes the setting", "It is the narrator's own name", "It is a greeting the bird repeats politely"] },
          significance: { q: "Why does the same word grow more painful each time?", choices: ["The narrator asks questions designed so that 'Nevermore' becomes a verdict on his hopes", "The bird learns to say new words", "The word changes spelling as the poem goes", "The narrator stops hearing it"] },
          reveals: "How repetition can make one unchanging word gather crushing new meaning.",
          conceals: "That the torment comes from the narrator's own questions, not the bird.",
          ace: "Articulate what \"Nevermore\" means at first; connect it to a later use where it hurts more; extend it to how a repeated word can shift in meaning."
        },
        {
          id: "questions", name: "The Desperate Questions", image: "images/questions.webp",
          clues: ["The narrator's questions grow more personal and more anguished.", "He asks whether there is relief — 'balm in Gilead' — and whether he will hold Lenore again.", "To every question, the raven answers only \"Nevermore.\""],
          identify: { q: "What do the narrator's later questions ask about?", choices: ["Whether he will find relief from grief and ever be reunited with Lenore", "The weather and the time of night", "Where the raven came from", "How to care for a pet bird"] },
          purpose: { q: "Why does the narrator keep asking, though he dreads the answer?", choices: ["His grief drives him to demand answers he already fears will be 'Nevermore'", "He is testing whether the bird is polite", "He wants the bird to leave", "He is bored and making conversation"] },
          significance: { q: "What does this pattern of question-and-'Nevermore' reveal?", choices: ["The narrator is torturing himself, shaping questions so the answer wounds him", "The bird is cruel and plotting against him", "The questions have simple, comforting answers", "The narrator is calm and detached"] },
          reveals: "A mind pressing on its own wound, using the bird as an instrument of despair.",
          conceals: "How the psychological arc moves from curiosity toward torment.",
          ace: "Articulate what the desperate questions ask; connect them to the refrain that answers them; extend it to how a person can seek out pain they already expect."
        },
        {
          id: "shadow", name: "The Final Shadow", image: "images/shadow.webp",
          clues: ["At the end, the raven is still perched on the bust — it never leaves.", "Its shadow falls over the narrator on the floor.", "His soul, the poem says, shall be lifted from that shadow \"nevermore.\""],
          identify: { q: "How does the poem end?", choices: ["The raven remains perched, its shadow over the narrator, his soul trapped 'nevermore'", "The raven flies away and the sun rises", "The narrator finds peace and sleeps", "Lenore returns to the chamber"] },
          purpose: { q: "What does the raven's refusal to leave signify?", choices: ["Grief that will not release the narrator — a permanent, inescapable state", "A temporary visit that soon ends", "The narrator's victory over sorrow", "A hopeful new beginning"] },
          significance: { q: "What does the final 'nevermore' mean here?", choices: ["The narrator's despair is now settled and lasting, with no lifting in sight", "The narrator will soon recover fully", "The bird promises to return often", "The grief was never real"] },
          reveals: "Despair pictured as a shadow that will not lift, closing the poem on loss.",
          conceals: "How the last refrain turns a one-word reply into the narrator's fate.",
          ace: "Articulate the final image; connect the unmoving raven to the narrator's despair; extend it to how an ending's last image can fix a poem's meaning."
        }
      ]
    },

    ctob: {
      name: "The Nevermore Case",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The raven's single, unchanging reply — the poem's refrain — is one word: ______.",
          evidence: ["Asked its name, the bird speaks just one word.", "It gives the same answer to every question after that.", "The word means 'never again' and appears verbatim as \"Nevermore.\""],
          hints: ["It means 'never again.'", "Never…", "The word is Nevermore."],
          answer: "nevermore"
        },
        {
          type: "word",
          prompt: "The narrator mourns a lost beloved. Her name, which haunts the poem, is ______. (one word)",
          evidence: ["He reads at midnight partly to forget his sorrow for her.", "Her name returns as another haunting sound in the poem.", "The name begins with 'Len…'."],
          hints: ["A woman's name the narrator has lost.", "Len…", "The name is Lenore."],
          answer: "lenore"
        },
        {
          type: "mc",
          prompt: "The raven perches on a bust of Pallas (Athena). What does that placement most suggest?",
          options: [
            "Grief settling on top of — and overshadowing — reason and wisdom.",
            "The narrator's love of collecting Greek sculpture.",
            "That the raven is a trained, scholarly bird.",
            "That the goddess protects the chamber from harm."
          ],
          hints: ["Pallas is the goddess of wisdom.", "Think about what it means for grief to sit above reason."]
        },
        {
          type: "digit",
          prompt: "How many stanzas are in the poem? Enter the number.",
          evidence: ["The poem is divided into equal six-line stanzas.", "Count the stanzas from the opening midnight to the final shadow.", "It is a well-known count for this poem: three sixes, or 6 times 3."],
          hints: ["The total is between fifteen and twenty.", "Six times three.", "The number is 18."],
          answer: "18"
        },
        {
          type: "sequence",
          prompt: "Put the poem's events in the order they happen, earliest first.",
          items: [
            "A grieving reader sits alone at midnight over old books.",
            "A raven flies in and perches on the bust of Pallas.",
            "The narrator's questions grow desperate, each answered 'Nevermore.'",
            "The raven remains, its shadow over the narrator's soul."
          ],
          hints: ["The poem begins before the bird arrives.", "The desperate questions come after the raven has settled in.", "The unmoving raven and its shadow close the poem."]
        },
        {
          type: "mc",
          prompt: "Across the poem, the narrator's feeling toward the raven's 'Nevermore' mainly shifts from —",
          options: [
            "mild curiosity and amusement to torment and despair.",
            "fear at first to calm relief by the end.",
            "anger to friendly affection.",
            "indifference all the way through, with no change."
          ],
          hints: ["At first the one-word reply strikes him as a strange novelty.", "By the end, each 'Nevermore' lands as a verdict on his hopes."]
        }
      ]
    },

    arcade: {
      name: "Atmosphere or Grief?",
      instruction: "\"The Raven\" builds an eerie mood and traces one man's grief at the same time. Sort each detail by the main work it does in the poem: does it mostly build the EERIE ATMOSPHERE, or does it mostly show the NARRATOR'S GRIEF & DESPAIR? Reasoning earns the points.",
      buckets: [
        { id: "atmosphere", label: "Eerie atmosphere", short: "Atmosphere" },
        { id: "grief", label: "Grief & despair", short: "Grief" }
      ],
      cards: [
        { text: "A bleak midnight and a tapping at the chamber window.", bucket: "atmosphere", why: "Darkness and a mysterious sound set the eerie stage." },
        { text: "The stirring, whispering purple curtain.", bucket: "atmosphere", why: "Small, uncanny movements deepen the dread of the room." },
        { text: "Insistent meter and internal rhyme that chant like a spell.", bucket: "atmosphere", why: "The poem's sound itself creates a hypnotic, haunted mood." },
        { text: "A black raven perched, unmoving, on the pale bust.", bucket: "atmosphere", why: "The stark, still image is built to unsettle the reader." },
        { text: "Reading old books at midnight to forget a lost love.", bucket: "grief", why: "The narrator is trying — and failing — to escape his sorrow." },
        { text: "Returning again and again to the name Lenore.", bucket: "grief", why: "The repeated name marks the wound at the poem's center." },
        { text: "Asking whether he will ever hold Lenore again.", bucket: "grief", why: "A desperate question born entirely of his mourning." },
        { text: "His soul trapped in the raven's shadow, lifted 'nevermore.'", bucket: "grief", why: "The ending fixes his despair as permanent and inescapable." }
      ],
      followup: "The poem's sound — its chanting meter and its one repeated word — and its grief work together. How do the eerie atmosphere and the narrator's mourning feed each other to create the poem's overall effect?"
    },

    analysis: {
      mcq: [
        {
          q: "The refrain \"Nevermore\" is powerful mainly because —",
          options: [
            "the same word gathers new, more painful meaning as the narrator's questions change.",
            "the raven says a different word each time it speaks.",
            "it appears only once, at the very end.",
            "it is a cheerful, comforting reply."
          ],
          why: "The word never changes, but the narrator's questions make it mean more each time — the heart of a refrain."
        },
        {
          q: "The raven perching on the bust of Pallas is best read as a symbol of —",
          options: [
            "grief overshadowing reason and wisdom.",
            "the arrival of good fortune.",
            "the narrator's skill as a sculptor.",
            "a friendly household pet."
          ],
          why: "Pallas is the goddess of wisdom; the bird of grief settles above her, dominating reason."
        },
        {
          q: "\"Once upon a midnight dreary, while I pondered, weak and weary\" is an example of —",
          options: [
            "internal rhyme, which rhymes within a single line.",
            "a simile comparing two things.",
            "plain prose with no sound pattern.",
            "a rhyme only at the ends of two lines."
          ],
          why: "\"Dreary\" and \"weary\" rhyme inside the line, a hallmark of Poe's sound design."
        },
        {
          q: "Across the poem, the narrator's state of mind moves from —",
          options: [
            "curiosity and faint amusement toward torment and despair.",
            "terror toward calm acceptance.",
            "boredom toward cheerful excitement.",
            "anger toward warm friendship with the bird."
          ],
          why: "The one-word reply begins as a novelty and ends as a verdict on all his hopes."
        },
        {
          q: "Because it tells a story from beginning to end while sustaining one dark mood, \"The Raven\" is best called a —",
          options: [
            "narrative poem.",
            "personal letter.",
            "short news report.",
            "instruction manual."
          ],
          why: "The poem relates a sequence of events — arrival, questions, ending — making it a narrative poem."
        }
      ],
      short: [
        "Choose one image from the Midnight Chamber. Explain what it shows and what it reveals about the poem's meaning.",
        "Trace the refrain \"Nevermore\" through the poem. Explain how the same word can mean something different — and more painful — by the end.",
        "Explain what the bust of Pallas adds to the poem. Why does it matter that the raven perches specifically on the goddess of wisdom?"
      ],
      paragraph: "Write an evidence-based paragraph. How do Poe's sound devices (refrain, internal rhyme, alliteration, and meter) work together to create the mood of \"The Raven\"? Make a claim and support it with specific details from the poem.",
      aceReflection: "Articulate in your own words how the narrator's feeling changes across the poem. Connect two details — for example the raven and the bust of Pallas — that develop the poem's meaning. Extend the poem's technique to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"The Raven\" carries its meaning through a single repeated word — a refrain, \"Nevermore\" — and through an arc that moves from curiosity to despair. Choose another poem, song, story, speech, or real situation that does the same thing: a repeated line or image that gathers new meaning, or a slide from curiosity into torment. Explain the connection with evidence: what is the repeated element or the arc, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's refrain technique or its curiosity-to-despair arc to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the refrain \"Nevermore\" in \"The Raven\" changes meaning as the poem goes on. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"The Raven.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [element one] connects to [element two] in \"The Raven\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"The Raven\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect \"The Raven\"'s refrain technique (or its curiosity-to-despair arc) to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"The Raven\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Edgar Allan Poe's \"The Raven\" (1845) as a narrative Gothic poem — a study of refrain, meter, sound devices, symbolism, tone, and psychological arc. The poem is public domain, so it may be referenced directly and this room reproduces no copyrighted edition. \"The Raven\" is presented as literature in a neutral, academic frame; note that it centers on grief and mourning a death (the lost Lenore). Every student response stays on the device.",
      reviewNotes: [
        "\"The Raven\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem (1845) is in the public domain in the United States, so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases (such as the refrain).",
        "Teach as literature — the refrain \"Nevermore\" and its shifting meaning, the trochaic meter and musicality, sound devices (internal rhyme, alliteration), and symbolism (the raven, the bust of Pallas, Lenore). Note that the poem's theme is grief and mourning a death; preview and follow your district's policy and community expectations.",
        "Details here were checked against the poem's content anchors (the bleak-midnight opening and the grieving reader; the lost Lenore; the tapping and the raven entering through the window; the raven perched on the bust of Pallas above the door; the one-word refrain \"Nevermore\"; the desperate questions, including relief — 'balm in Gilead' — and reunion with Lenore; the trochaic meter and heavy internal rhyme and alliteration; the final unmoving raven and the shadow in which the soul lies, lifted 'nevermore'). The poem is eighteen six-line stanzas. Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English II ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, sound devices, tone, and theme — especially refrain, meter, internal rhyme, alliteration, and symbolism. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
