/* PlotPoint — "We Wear the Mask" by Paul Laurence Dunbar (1895).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem (1895) is public domain in the United States, so this
   room may reference the text directly. "We Wear the Mask" is studied here as
   LITERATURE — its central metaphor, refrain, and disciplined form — in a neutral,
   academic frame consistent with the Texas required literary-works list
   (19 TAC §110.70, English III / high school). The room paraphrases, quotes only
   brief public-domain phrases where a close reading needs them, and reproduces no
   copyrighted edition. Standards are good-faith alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "wemask",
  storageKey: "plotpoint.wemask.v1",

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
    "vocab.title": "Words for We Wear the Mask",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Behind the Mask",
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
    "ctob.title": "Reading Behind the Smile",
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
    "arcade.title": "Shown or Hidden?",
    "arcade.default": "Sort each detail by whether the world sees it or the mask hides it.",
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
    "print.item.relic": "Behind the Mask evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Central-metaphor organizer",
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
      title: "We Wear the Mask",
      author: "Paul Laurence Dunbar",
      grades: "English III",
      genre: "Poetry · Lyric",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1895)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "Paul Laurence Dunbar's \"We Wear the Mask\" (1895) is in the public domain in the United States, so this room may reference the text directly. It is studied here as literature — its central metaphor, refrain, and disciplined form. The room paraphrases, quoting only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. The poem addresses the pain of racial oppression and the concealment of suffering behind a forced, cheerful front. Presented as literature — central metaphor, refrain, and form — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"We Wear the Mask\" — a smiling theatrical mask held up in front of a shadowed face, the smile bright on the surface and sorrow suggested behind it."
    },
    hook: "One object carries the whole poem: a mask. In just fifteen tightly rhymed lines, Paul Laurence Dunbar describes a smiling face worn over torn and bleeding hearts — a grin that lies to the world while the true self suffers underneath. Read it as a poem, and watch how a single image, repeated as a refrain, holds an enormous weight of hidden feeling inside a small, disciplined form.",
    goals: [
      "Understand \"We Wear the Mask\" as a short lyric built on one controlling symbol: the mask that hides true feeling.",
      "Analyze the contrast between the smiling public surface and the torn, bleeding hearts concealed beneath it.",
      "Trace how the refrain \"We wear the mask\" and the collective \"we\" shape the poem's meaning and tone.",
      "Interpret how a strict, graceful form (a rondeau) holds intense, restrained anguish — and why the poem hides its pain in beauty."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a controlling symbol and a refrain.",
        "Discuss: why might someone hide real feelings behind a smile? What is gained, and what is lost?"
      ],
      during: [
        "Use the Behind the Mask room to slow down and read the poem image by image.",
        "Track the contrast: the grinning surface shown to the world versus the torn, bleeding hearts hidden beneath."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the central metaphor and the poem's form.",
        "Complete the Extend task to carry the mask metaphor to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what the mask stands for in the poem. Include one detail from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the poem — for example the grinning mask and the torn, bleeding hearts. Explain how placing the smiling surface against the hidden pain shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's central idea — a hidden self behind a shown face — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "symbol", def: "An object or image that stands for a larger idea beyond itself.", example: "The mask standing for concealment and a hidden self.", nonexample: "A word used only for its plain, literal meaning.", context: "The mask is the poem's central symbol." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling a false, smiling front 'the mask.'", nonexample: "Saying something is 'like' another thing (that is a simile).", context: "The poem's controlling metaphor is a mask worn over the true self." },
      { term: "refrain", def: "A line or phrase repeated at key points in a poem.", example: "'We wear the mask,' returning to close the poem.", nonexample: "A line that appears only once and is never echoed.", context: "The refrain 'We wear the mask' repeats and encloses the poem." },
      { term: "rondeau", def: "A short, strict poetic form with a repeated opening phrase and a tight rhyme scheme.", example: "A fifteen-line poem whose first words return as a refrain.", nonexample: "Free verse with no set pattern or repetition.", context: "Dunbar contains intense feeling inside the disciplined rondeau form." },
      { term: "irony", def: "A contrast between how things appear and how they really are.", example: "A grin that 'lies' — a smile that hides suffering.", nonexample: "A statement that means exactly and only what it says.", context: "The poem's irony lies in a cheerful face over hidden pain." },
      { term: "tone", def: "The attitude or feeling a poem expresses toward its subject.", example: "Restrained anguish beneath a calm, controlled surface.", nonexample: "A random list of facts with no attitude at all.", context: "The tone is one of quiet, dignified, restrained anguish." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "Hidden suffering, dignity, and the cost of concealment.", nonexample: "The mere subject matter, like 'a mask,' with no idea attached.", context: "A key theme is the pain and cost of hiding true feeling." },
      { term: "speaker", def: "The voice that speaks the poem — here a collective 'we,' not a single 'I.'", example: "The shared 'we' who all wear the same mask.", nonexample: "The poet's name printed on the page.", context: "The speaker is a collective 'we,' voicing a shared experience." },
      { term: "myriad", def: "Countless; a very great number.", example: "Speaking with 'myriad subtleties' — countless small evasions.", nonexample: "A single, simple, direct statement.", context: "The poem says the mouth speaks with 'myriad subtleties.'" }
    ],

    relic: {
      name: "Behind the Mask",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "mask", name: "The Mask That Grins and Lies", image: "images/mask.webp",
          clues: ["The poem's title and first line name this object: 'We wear the mask that grins and lies.'", "It hides the wearer's true face from the world.", "Everything else in the poem develops this one image."],
          identify: { q: "What is the poem's central image?", choices: ["A mask worn over the face to hide true feeling", "A crown worn by a king", "A shield carried into battle", "A book of songs"] },
          purpose: { q: "What is the mask's role in the poem?", choices: ["It is the central symbol every other image builds on", "It appears once and is dropped", "It describes the poet's job", "It has no connection to the rest"] },
          significance: { q: "Why choose a mask, of all objects?", choices: ["A mask shows one face while hiding another — a divided public and private self", "A mask is beautiful and expensive", "A mask is worn only for fun", "A mask is a stranger's face"] },
          reveals: "The single controlling symbol of the whole poem: concealment.",
          conceals: "How much of the poem's meaning is carried by this one object.",
          ace: "Articulate what the mask stands for; connect it to the idea of hiding; extend it to why a familiar object can explain a hard idea."
        },
        {
          id: "grin", name: "The Grinning, Smiling Face", image: "images/grin.webp",
          clues: ["The mask 'grins and lies.'", "This is the surface the world is meant to see.", "The smile is described as false — it hides, it does not express."],
          identify: { q: "What does the grinning face show?", choices: ["A false, smiling surface shown to the world", "Real, honest joy", "A frown of open grief", "A face turned away in silence"] },
          purpose: { q: "What is this smiling surface for?", choices: ["To present a cheerful front while the truth stays hidden", "To share the speaker's real feelings", "To warn of danger", "To decorate the poem"] },
          significance: { q: "Why is it important that the grin 'lies'?", choices: ["The smile is a deception — appearance and reality do not match, which is irony", "The smile is simply happy", "The smile means nothing at all", "The smile ends the poem"] },
          reveals: "The public surface: a smile put on for others.",
          conceals: "How a smile can be an act of concealment rather than joy.",
          ace: "Articulate what the grin shows; connect it to the word 'lies'; extend it to how appearances can hide reality."
        },
        {
          id: "hearts", name: "The Torn and Bleeding Hearts", image: "images/hearts.webp",
          clues: ["Beneath the mask hide 'our cheeks and shade our eyes' — and torn, bleeding hearts.", "This is the pain the smile is hiding.", "The contrast with the grin is the poem's core."],
          identify: { q: "What does this image show?", choices: ["The hidden pain — torn and bleeding hearts beneath the mask", "A second, happier mask", "A crowd of cheering people", "An empty stage"] },
          purpose: { q: "What is this image's role?", choices: ["To reveal the suffering the smiling mask conceals", "To describe the shepherd's tools", "To end the poem on a feast", "To praise the mask"] },
          significance: { q: "What does the contrast with the grin create?", choices: ["A sharp gap between the shown surface and the hidden truth", "A picture of pure happiness", "A description of the weather", "A list of the poet's friends"] },
          reveals: "The suffering hidden directly beneath the smile.",
          conceals: "How the poem holds joy and pain in the very same face.",
          ace: "Articulate what the hearts image shows; connect it to the grinning mask; extend it to a time a surface hid a deeper feeling."
        },
        {
          id: "we", name: "The Collective 'We'", image: "images/we.webp",
          clues: ["The poem never says 'I' — it says 'we wear the mask.'", "The suffering is shared, not one person's alone.", "The 'we' turns a private feeling into a communal one."],
          identify: { q: "Who speaks the poem?", choices: ["A collective 'we' — a shared voice, not a single 'I'", "One named narrator", "The poet's teacher", "A silent observer"] },
          purpose: { q: "Why speak as 'we' rather than 'I'?", choices: ["To show the experience is shared by many, not one person alone", "To hide the poet's identity for fun", "To make the poem longer", "To confuse the reader"] },
          significance: { q: "What does the collective voice add?", choices: ["It makes the hidden suffering a communal, shared reality", "It makes the poem about a single bad day", "It removes all feeling", "It ends the poem"] },
          reveals: "That the mask is worn by a community, not one lonely speaker.",
          conceals: "How much weight the small word 'we' carries in the poem.",
          ace: "Articulate what 'we' signals; connect it to the idea of shared pain; extend it to why a shared voice can be stronger than 'I.'"
        },
        {
          id: "world", name: "The World That Sees Only the Smile", image: "images/world.webp",
          clues: ["The poem lets 'the world dream otherwise.'", "The world is content to see only the smiling surface.", "It does not look for the pain the mask hides."],
          identify: { q: "What does 'the world' do in the poem?", choices: ["It sees only the smile and never the suffering behind it", "It removes everyone's masks", "It comforts the speakers", "It disappears from the poem"] },
          purpose: { q: "What is the world's role?", choices: ["It is the audience the mask is worn for — content with the surface", "It is the poem's hero", "It is one of the shepherd's tools", "It has no role"] },
          significance: { q: "What does letting the world 'dream otherwise' suggest?", choices: ["A willful blindness — the world prefers not to see the hidden pain", "The world already knows everything", "The world is asleep and gone", "The world fixes the problem"] },
          reveals: "The audience: a world satisfied by the mask's smile.",
          conceals: "How the mask exists because the world will not look past it.",
          ace: "Articulate what the world sees; connect it to the mask's purpose; extend it to why an audience can shape what is hidden."
        },
        {
          id: "cry", name: "The Cry to Christ from 'Tortured Souls'", image: "images/cry.webp",
          clues: ["Behind the mask, the speakers cry out — 'We smile, but... we sing.'", "The cry rises from 'tortured souls' in private anguish.", "This is the truest voice in the poem, kept hidden from the world."],
          identify: { q: "What does this image reveal?", choices: ["A hidden cry of anguish from tortured souls behind the mask", "A public celebration", "A calm, easy prayer", "A cheerful song for the crowd"] },
          purpose: { q: "Why place this cry behind the mask?", choices: ["To contrast private anguish with the public, smiling face", "To end the poem on joy", "To name a shepherd's tool", "To describe the weather"] },
          significance: { q: "What does the hidden cry show about the mask?", choices: ["The deepest feeling is exactly what the mask keeps hidden", "The mask expresses everything openly", "There is no real pain", "The cry is only pretend"] },
          reveals: "The private anguish that the public mask never shows.",
          conceals: "How far the true self is kept from the watching world.",
          ace: "Articulate what the cry reveals; connect private pain to the public smile; extend it to why the deepest feelings are often the most hidden."
        },
        {
          id: "refrain", name: "The Refrain 'We Wear the Mask'", image: "images/refrain.webp",
          clues: ["The phrase 'We wear the mask' opens the poem and returns to close it.", "It is repeated as a refrain, framing everything between.", "The repetition gives the poem its enclosed, circling shape."],
          identify: { q: "What is 'We wear the mask' in the poem?", choices: ["A refrain — a repeated line that frames the poem", "A single line used only once", "The poem's title only", "A stage direction"] },
          purpose: { q: "What does repeating the refrain do?", choices: ["It encloses the poem and drives its meaning home", "It fills empty space", "It changes the subject", "It ends the metaphor"] },
          significance: { q: "What does the returning refrain suggest?", choices: ["The mask is worn again and again — an inescapable, ongoing act", "The mask is taken off for good", "The poem has no real theme", "The pain is over"] },
          reveals: "The repeated, enclosing statement at the poem's heart.",
          conceals: "How repetition makes the concealment feel endless and unchosen.",
          ace: "Articulate what the refrain says; connect its repetition to the poem's shape; extend it to how a repeated line can carry a whole theme."
        }
      ]
    },

    ctob: {
      name: "Reading Behind the Smile",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole poem is built on one controlling symbol — a ______ worn over the true face. (one word)",
          evidence: ["The title and first line name this object.", "It 'grins and lies,' hiding the wearer's real feelings.", "The word begins with 'ma…'."],
          hints: ["Something worn over the face to hide it.", "Ma…", "The word is mask."],
          answer: "mask"
        },
        {
          type: "mc",
          prompt: "The 'torn and bleeding hearts' beneath the smile are mainly an image of —",
          options: [
            "hidden suffering the mask conceals.",
            "open, public celebration.",
            "wealth and success.",
            "calm, easy contentment."
          ],
          hints: ["Think about what the smile is hiding.", "Which option matches pain kept out of sight?"]
        },
        {
          type: "mc",
          prompt: "The poem speaks as 'we' rather than 'I' in order to —",
          options: [
            "show the experience is shared by many, not one person alone.",
            "hide the poet's real name for fun.",
            "make the poem sound cheerful.",
            "describe a single bad afternoon."
          ],
          hints: ["Notice the poem never once says 'I.'", "A shared voice makes the pain communal."]
        },
        {
          type: "digit",
          prompt: "How many stanzas make up this poem? Enter the number.",
          evidence: ["The poem is divided into three sections on the page.", "Count each block of lines separated by a space.", "Two plus one."],
          hints: ["Count the blocks of lines separated by blank space.", "Two plus one.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the poem's ideas in the order they appear, earliest first.",
          items: [
            "We wear the mask that grins and lies.",
            "The world is content to see only the smiling face.",
            "Beneath the mask, tortured souls cry out.",
            "Still we let the world dream on — we wear the mask."
          ],
          hints: ["The poem opens by naming the mask.", "The hidden cry comes after the world's easy view.", "The refrain returns to close the poem."]
        },
        {
          type: "mc",
          prompt: "Dunbar contains this intense feeling inside a strict, graceful form (a rondeau). The effect is to —",
          options: [
            "hold powerful anguish under tight, dignified control.",
            "make the poem sound careless and loose.",
            "remove all emotion from the poem.",
            "turn the poem into plain prose."
          ],
          hints: ["Notice how the pain is held inside a small, patterned form.", "The discipline of the form mirrors the discipline of wearing the mask."]
        }
      ]
    },

    arcade: {
      name: "Shown or Hidden?",
      instruction: "\"We Wear the Mask\" sets a smiling surface against the pain it hides. Sort each detail: is it part of THE MASK (what the world is shown), or is it BEHIND THE MASK (what is hidden)? Reasoning earns the points.",
      buckets: [
        { id: "shown", label: "The mask (what the world is shown)", short: "Shown" },
        { id: "hidden", label: "Behind the mask (what is hidden)", short: "Hidden" }
      ],
      cards: [
        { text: "A grin that greets the world.", bucket: "shown", why: "The grinning mask is exactly the surface others are meant to see." },
        { text: "A mouth speaking with 'myriad subtleties.'", bucket: "shown", why: "Careful, polished speech is part of the presented, controlled surface." },
        { text: "Cheeks and eyes covered so feeling cannot be read.", bucket: "shown", why: "The mask hides the cheeks and shades the eyes — a managed outward face." },
        { text: "Letting the world 'dream otherwise.'", bucket: "shown", why: "The speakers keep up the surface so the world sees only the pleasant version." },
        { text: "Torn and bleeding hearts.", bucket: "hidden", why: "This is the wound the smile is hiding — never shown to the world." },
        { text: "A cry that rises to Christ from tortured souls.", bucket: "hidden", why: "The private anguish is voiced only behind the mask, not in public." },
        { text: "The true feelings the smile is meant to cover.", bucket: "hidden", why: "The genuine self is precisely what the mask conceals." },
        { text: "The 'tears and sighs' held back beneath the face.", bucket: "hidden", why: "The grief is kept underneath, out of the world's sight." }
      ],
      followup: "Dunbar hides this pain inside a strict, pretty form — a smiling mask of a poem. Why might a writer contain such deep suffering in something so controlled and graceful? What does that choice reveal about the mask itself?"
    },

    analysis: {
      mcq: [
        {
          q: "The central symbol of \"We Wear the Mask\" is —",
          options: [
            "a mask that hides true feeling behind a false smile.",
            "a crown worn by a king.",
            "a shepherd guiding a flock.",
            "a distant, silent star."
          ],
          why: "The title and first line name the mask, and every image builds from it."
        },
        {
          q: "The 'torn and bleeding hearts' beneath the mask mainly suggest —",
          options: [
            "hidden suffering concealed by the smile.",
            "open joy and celebration.",
            "wealth and comfort.",
            "boredom and calm."
          ],
          why: "The image reveals the pain the grinning surface is hiding."
        },
        {
          q: "The poem's use of 'we' rather than 'I' works to —",
          options: [
            "make the hidden suffering a shared, communal experience.",
            "conceal the poet's real name.",
            "describe a single bad day.",
            "make the tone cheerful."
          ],
          why: "The collective voice turns private pain into a shared reality."
        },
        {
          q: "That the mask 'grins and lies' is an example of —",
          options: [
            "irony, where the smiling appearance contradicts the hidden reality.",
            "a rhyme scheme.",
            "a pun on a name.",
            "a simple factual report."
          ],
          why: "A grin that lies sets appearance against reality — the definition of irony."
        },
        {
          q: "Because the phrase 'We wear the mask' opens the poem and returns to close it, it functions as —",
          options: [
            "a refrain that frames and encloses the poem.",
            "a simile.",
            "a stage direction.",
            "a title with no other role."
          ],
          why: "A repeated line that returns at key points is a refrain."
        }
      ],
      short: [
        "Choose one image from Behind the Mask. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem places a smiling surface against hidden pain (for example, a grinning mask over torn and bleeding hearts). Explain what this contrast suggests about the concealment the poem describes.",
        "Explain the effect of the collective 'we.' How does speaking as a group rather than a single 'I' change the feeling of the poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"We Wear the Mask\" use one central symbol to express an abstract idea like hidden suffering or the cost of concealment? Make a claim and support it with specific details from the poem.",
      aceReflection: "Articulate what the poem suggests about hidden suffering in your own words. Connect two details that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"We Wear the Mask\" carries a whole idea — a hidden self behind a shown face — through a single controlling symbol: the mask. Choose another poem, song, story, speech, or real situation that does the same thing (one image or metaphor carrying a big idea, or a divided public and private self). Explain the connection with evidence: what is the single image, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's mask metaphor — or its hidden-self theme — to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"We Wear the Mask\" uses the image of a mask to express hidden suffering. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"We Wear the Mask.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in \"We Wear the Mask\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"We Wear the Mask\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the mask metaphor in \"We Wear the Mask\" to another text or situation: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"We Wear the Mask\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Paul Laurence Dunbar's \"We Wear the Mask\" (1895) as a short lyric — a study of a controlling symbol, refrain, irony, and disciplined form (the rondeau). The poem is public domain, so the text can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, with attention to the historical experience of Black Americans that it voices. Every student response stays on the device.",
      reviewNotes: [
        "\"We Wear the Mask\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem (1895) is in the public domain in the United States, so it may be used and quoted directly. This room still paraphrases and quotes only brief public-domain phrases where a close reading needs them.",
        "Teach as literature: focus on the central metaphor of the mask, the refrain 'We wear the mask,' and the disciplined rondeau form. Note the historical context of the Black American experience the poem voices — concealing pain and dignity behind an expected cheerful front — while keeping the study academic and neutral, and follow your district's policy and community expectations.",
        "Details here were checked against the poem's content anchors: the opening 'mask that grins and lies'; hidden cheeks and shaded eyes; the debt paid to human guile; torn and bleeding hearts; the mouth's 'myriad subtleties'; the world content to 'dream otherwise'; the cry to Christ from 'tortured souls'; the clay beneath the feet and the long mile; and the closing refrain 'We wear the mask.' Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, symbol and metaphor, tone, and theme — especially the controlling symbol and refrain. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
