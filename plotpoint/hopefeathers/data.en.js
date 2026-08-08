/* PlotPoint — Emily Dickinson, "'Hope' is the thing with feathers" (c.1861, published 1891).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem was published in 1891 and is in the public domain in the
   United States, so this room may reference it directly. It is studied here as
   LITERATURE — extended metaphor, slant rhyme, dashes, and common meter — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC §110.70,
   English IV / high school). The room paraphrases, quotes only brief public-domain
   phrases where a close reading needs them, and reproduces no copyrighted edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "hopefeathers",
  storageKey: "plotpoint.hopefeathers.v1",

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
    "enter.readListenNote": "This poem was published in 1891 and is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for \"Hope\" Is the Thing with Feathers",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Bird in the Soul",
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
    "ctob.title": "The Song in the Storm",
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
    "arcade.title": "The Vehicle or the Meaning?",
    "arcade.default": "Sort each detail: is it part of the literal bird, or what the bird means about hope?",
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
    "extend.title": "One Bird, One Idea",
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
    "print.item.relic": "Bird in the Soul evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Extended-metaphor organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/Hope_is_the_thing_with_feathers",
      title: "\"Hope\" Is the Thing with Feathers",
      author: "Emily Dickinson",
      grades: "English IV",
      genre: "Poetry · Lyric",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1891)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "The poem was first published in 1891 and is in the public domain in the United States, so this room may reference it directly. It is studied here as literature — its extended metaphor, slant rhyme, dashes, and common meter. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "The poem appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. It is presented as literature — extended metaphor, slant rhyme, dashes, and common meter — in a neutral, academic way. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the poem — a small bird perched and singing on a bare branch as a gray storm gathers behind it, a warm light around the bird."
    },
    hook: "Three short stanzas. One picture, held from beginning to end: hope is a small bird that lives inside you and never stops singing. Emily Dickinson takes something you cannot see or touch — hope — and turns it into a creature with feathers that perches in the soul, sings loudest in the storm, and asks for nothing in return. Read it as a poem, and watch how every line keeps developing the same single comparison.",
    goals: [
      "Understand the poem as a short lyric built on one extended metaphor: hope is a small, singing bird.",
      "Analyze its imagery of storm, gale, chill land, and strange sea, and the feelings each image creates.",
      "Trace how the bird sings 'sweetest in the Gale' and 'never stops at all,' showing hope as resilient and constant.",
      "Interpret how concrete images carry the abstract idea of hope — and why this poem has shaped how English readers talk about it."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an extended metaphor.",
        "Discuss: how can a writer describe an abstract feeling — like hope — using only concrete pictures?"
      ],
      during: [
        "Use the Bird in the Soul to slow down and read the poem image by image.",
        "Track the metaphor: from the bird perching and singing, through the gale, to the chillest land and strangest sea."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the metaphor and the poem's structure.",
        "Complete the Extend task to compare this single-image technique to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main comparison the poem is built on. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two images from the poem — for example the singing bird and the gale. Explain how placing hope's song against the storm shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — carrying a whole idea through one repeated image — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "extended metaphor", def: "A single comparison developed across many lines or a whole poem.", example: "Hope figured as a bird through every stanza of the poem.", nonexample: "A comparison used once and then dropped.", context: "The poem is one long extended metaphor: hope is a bird." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling hope 'the thing with feathers.'", nonexample: "Saying hope is 'like' a bird (that is a simile).", context: "The poem's central metaphor turns hope into a bird." },
      { term: "personification", def: "Giving human or living qualities to something that is not alive or not human.", example: "Hope that sings, perches, and asks for a crumb.", nonexample: "Plainly stating that hope is a feeling.", context: "The poem personifies hope as a living, singing bird." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "The gale, the storm, the chill land, and the strange sea we can almost feel.", nonexample: "An abstract word like 'sad' with no picture.", context: "The poem's imagery makes hope feel concrete." },
      { term: "slant rhyme", def: "A near or imperfect rhyme in which the sounds are close but not exact.", example: "Pairing 'soul' with 'all,' which almost rhyme.", nonexample: "A perfect rhyme like 'cat' and 'hat.'", context: "Dickinson often uses slant rhyme instead of full rhyme." },
      { term: "common meter", def: "A hymn-like pattern of alternating eight- and six-syllable lines.", example: "Lines that could be sung to a familiar hymn tune.", nonexample: "Free verse with no set line length.", context: "The poem's common meter gives it a song-like rhythm." },
      { term: "tone", def: "The attitude or feeling a writer's word choices create.", example: "A tone of quiet confidence and comfort.", nonexample: "The plot or events of a poem.", context: "The poem's tone is hopeful even when it names storms." },
      { term: "abash", def: "To embarrass, unsettle, or make ashamed.", example: "A fierce storm that could 'abash' — silence — the little bird.", nonexample: "To cheer or encourage someone.", context: "It would take a very sore storm to abash the bird." },
      { term: "extremity", def: "The most desperate or extreme point of need or hardship.", example: "Hearing hope's song even in 'Extremity.'", nonexample: "A calm, easy, ordinary moment.", context: "Even in extremity, the bird asks nothing of the speaker." }
    ],

    relic: {
      name: "The Bird in the Soul",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "feathers", name: "The Thing with Feathers", image: "images/feathers.webp",
          clues: ["The poem's very first move is to call hope 'the thing with feathers.'", "Everything after this line develops that one comparison.", "Hope is figured not as a feeling but as a small bird."],
          identify: { q: "What comparison opens the poem?", choices: ["Hope is described as a small bird — 'the thing with feathers'", "Hope is described as a burning fire", "Hope is described as a mountain", "Hope is described as a locked door"] },
          purpose: { q: "What is the bird image's role in the poem?", choices: ["It is the central metaphor that every later image builds on", "It appears once and is dropped", "It describes a real pet bird", "It has no connection to the rest"] },
          significance: { q: "Why picture hope as a small bird, of all things?", choices: ["A small bird is alive, singing, and resilient — the exact qualities the poem gives hope", "A bird is dangerous and frightening", "A bird is wealthy and powerful", "A bird is cold and distant"] },
          reveals: "The single controlling metaphor of the whole poem.",
          conceals: "How much of the poem's meaning is carried by this one image.",
          ace: "Articulate the bird metaphor; connect it to one thing a bird does; extend it to why a familiar image can explain a hard idea."
        },
        {
          id: "perch", name: "Perches in the Soul", image: "images/perch.webp",
          clues: ["The bird 'perches in the soul.'", "The image places hope inside the person, not outside.", "It comes in the poem's opening lines."],
          identify: { q: "Where does the bird live in the poem?", choices: ["It perches inside the soul", "It flies far away over the sea", "It nests in a distant tree", "It lives in a cage"] },
          purpose: { q: "What does placing the bird 'in the soul' suggest?", choices: ["Hope lives within a person, always close at hand", "Hope belongs only to other people", "Hope is a thing you must go find outside", "Hope disappears at night"] },
          significance: { q: "How does 'perches' shape the picture?", choices: ["The bird settles in and stays — hope is at rest inside you", "The bird is trapped and cannot move", "The bird is about to fly away for good", "The bird is asleep and silent"] },
          reveals: "That hope lives inside the person, close and settled.",
          conceals: "How quietly 'perches' signals that hope stays.",
          ace: "Articulate the perching image; connect it to where hope lives; extend it to how a setting can carry an emotion."
        },
        {
          id: "tune", name: "The Tune That Never Stops", image: "images/tune.webp",
          clues: ["The bird 'sings the tune without the words.'", "That tune 'never stops — at all.'", "The song has no words, yet it goes on and on."],
          identify: { q: "What does the bird do in this image?", choices: ["It sings a wordless tune that never stops", "It shouts a warning and falls silent", "It counts the storms", "It sleeps through the poem"] },
          purpose: { q: "What does the endless song suggest about hope?", choices: ["Hope is constant — it keeps going no matter what", "Hope comes only once and then ends", "Hope is loud and annoying", "Hope needs words to exist"] },
          significance: { q: "Why is the tune 'without the words'?", choices: ["Hope works below language — a feeling that needs no explanation", "The bird has forgotten the words", "The words were cut for space", "It is a mistake in the poem"] },
          reveals: "Hope pictured as a constant, wordless song.",
          conceals: "How 'never stops — at all' quietly insists hope is unbroken.",
          ace: "Articulate the wordless-tune image; connect it to the idea of constancy; extend it to a feeling you cannot put into words."
        },
        {
          id: "gale", name: "Sweetest in the Gale", image: "images/gale.webp",
          clues: ["The song is heard 'sweetest — in the Gale.'", "The gale is a strong storm wind.", "Hope sings its best exactly when the storm is worst."],
          identify: { q: "When is the bird's song sweetest?", choices: ["In the Gale — the storm", "On a calm, sunny day", "Only at night", "When no one listens"] },
          purpose: { q: "Why is the song sweetest in the storm?", choices: ["Hope is strongest and most needed in hard times", "The storm makes the bird sing off-key", "The storm silences the bird", "The bird only sings for fun"] },
          significance: { q: "What does this reversal reveal about hope?", choices: ["Hope grows more powerful in adversity, not less", "Hope fades the moment trouble comes", "Hope only exists in good weather", "Hope is unrelated to hardship"] },
          reveals: "That hope is strongest precisely in the storm.",
          conceals: "How the poem flips our expectation that trouble weakens hope.",
          ace: "Articulate the gale image; connect the storm to the bird's song; extend it to why comfort can mean more in a hard moment."
        },
        {
          id: "storm", name: "The Storm That Could Abash It", image: "images/storm.webp",
          clues: ["It would take a very 'sore' and fierce storm to 'abash' the bird.", "To abash is to embarrass or silence.", "The little bird 'kept so many warm.'"],
          identify: { q: "What could 'abash' the little bird?", choices: ["Only a very sore, fierce storm — and even that would be hard", "A single raindrop", "A gentle breeze", "The morning sun"] },
          purpose: { q: "What does 'kept so many warm' show?", choices: ["The bird has comforted many people through hard times", "The bird keeps only itself warm", "The bird is cold and unhelpful", "The bird warms no one"] },
          significance: { q: "Why stress how hard it would be to silence the bird?", choices: ["To show hope's endurance — it is very hard to defeat", "To warn that hope is fragile", "To suggest hope gives up easily", "To end the poem in despair"] },
          reveals: "Hope's endurance and its comfort to many.",
          conceals: "How 'abash' measures hope's strength by what it would take to break it.",
          ace: "Articulate what 'abash' means here; connect it to hope's endurance; extend it to a time hope held on through hardship."
        },
        {
          id: "chilland", name: "The Chillest Land and Strangest Sea", image: "images/chilland.webp",
          clues: ["The speaker has heard the bird 'in the chillest land.'", "And 'on the strangest Sea.'", "These are the bleakest, most far-off places imaginable."],
          identify: { q: "Where has the speaker heard the bird?", choices: ["In the chillest land and on the strangest sea", "Only in her own garden", "In a warm, familiar house", "In a crowded city"] },
          purpose: { q: "Why name such cold and strange places?", choices: ["To show hope reaches even the bleakest, hardest places", "To describe a real voyage the poet took", "To change the subject", "To warn against travel"] },
          significance: { q: "What does hope's presence there reveal?", choices: ["Hope is everywhere — even where things seem most hopeless", "Hope is limited to safe places", "Hope disappears in the cold", "Hope belongs only to sailors"] },
          reveals: "That hope is present even in the bleakest, most distant places.",
          conceals: "How 'chillest' and 'strangest' stretch the metaphor to its edges.",
          ace: "Articulate the chill-land image; connect it to hope's reach; extend it to a bleak place where hope still appeared."
        },
        {
          id: "crumb", name: "It Asked a Crumb — of Me", image: "images/crumb.webp",
          clues: ["Even in 'Extremity' — the most desperate need — the bird sang.", "Yet 'it asked a crumb — of me.'", "A crumb is the smallest possible thing; the bird gives far more than it takes."],
          identify: { q: "How does the poem end?", choices: ["Even in extremity, the bird never asked a crumb of the speaker", "The bird demands a great feast", "The bird flies away and abandons her", "The bird stops singing"] },
          purpose: { q: "What does the tiny 'crumb' reveal about hope?", choices: ["Hope gives freely and asks almost nothing in return", "Hope is greedy and costly", "Hope must be bought", "Hope takes more than it gives"] },
          significance: { q: "How does this ending complete the metaphor?", choices: ["Hope sustains us in our worst moments and asks nothing back", "It contradicts everything before it", "It abandons the bird image", "It ends the poem on despair"] },
          reveals: "That hope gives without asking anything in return.",
          conceals: "How the smallness of a 'crumb' measures how little hope costs us.",
          ace: "Articulate the crumb image; connect it to hope's generosity; extend it to how the ending changes the poem's feeling."
        }
      ]
    },

    ctob: {
      name: "The Song in the Storm",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole poem is built on comparing hope to a small ______. (one word)",
          evidence: ["The very first line calls hope 'the thing with feathers.'", "This creature perches, sings, and has feathers.", "The word begins with 'bir…'."],
          hints: ["A small creature with feathers that sings.", "Bir…", "The word is bird."],
          answer: "bird"
        },
        {
          type: "mc",
          prompt: "The bird sings its tune 'sweetest' —",
          options: [
            "in the Gale — the storm.",
            "on a calm and sunny day.",
            "only when it is fed.",
            "when no danger is near."
          ],
          hints: ["Think about where hope is most needed.", "The line names a storm wind."]
        },
        {
          type: "mc",
          prompt: "The word 'abash' in the poem means to —",
          options: [
            "embarrass or silence the little bird.",
            "feed and shelter the bird.",
            "teach the bird a new song.",
            "count the storms."
          ],
          hints: ["It would take a 'sore' storm to do this.", "It is the opposite of encouraging the bird."]
        },
        {
          type: "digit",
          prompt: "How many stanzas does the poem have? Enter the number.",
          evidence: ["The poem is made of short, equal groups of lines.", "Each group is a quatrain — four lines.", "Two plus one."],
          hints: ["Count the separate groups of lines.", "It has more than two and fewer than four.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the poem's images in the order they appear, earliest first.",
          items: [
            "Hope perches in the soul and sings a wordless tune.",
            "The song is sweetest in the Gale.",
            "The bird is heard in the chillest land and strangest sea.",
            "Even in Extremity, it never asked a crumb of the speaker."
          ],
          hints: ["The poem opens by placing the bird in the soul.", "The gale comes before the far-off cold places.", "The crumb closes the poem."]
        },
        {
          type: "mc",
          prompt: "Across all three stanzas, the poem develops a single comparison. This makes it a clear example of —",
          options: [
            "an extended metaphor.",
            "a simile.",
            "a pun.",
            "free verse with no comparison."
          ],
          hints: ["One image — the bird — is carried from the first line to the last.", "The comparison is stated directly, not with 'like' or 'as.'"]
        }
      ]
    },

    arcade: {
      name: "The Vehicle or the Meaning?",
      instruction: "The poem builds one extended metaphor: hope is a bird. Some details describe the literal bird (the vehicle); others tell us what the bird means about hope (the meaning). Sort each card into the right column. Reasoning earns the points.",
      buckets: [
        { id: "vehicle", label: "The literal bird (the vehicle)", short: "The bird" },
        { id: "meaning", label: "What it means about hope (the meaning)", short: "The meaning" }
      ],
      cards: [
        { text: "It has feathers and perches on a branch.", bucket: "vehicle", why: "A literal, physical bird detail — the vehicle of the metaphor." },
        { text: "It sings a tune, a real birdsong.", bucket: "vehicle", why: "Singing is something an actual bird does — part of the picture." },
        { text: "A gale could ruffle and threaten a small bird.", bucket: "vehicle", why: "The storm is described as a literal danger to a physical bird." },
        { text: "A bird might be offered a crumb of bread.", bucket: "vehicle", why: "A crumb is a concrete thing you would give a real bird." },
        { text: "Hope lives inside a person and stays close.", bucket: "meaning", why: "This is what 'perches in the soul' means about hope." },
        { text: "Hope keeps going and never gives up.", bucket: "meaning", why: "The tune that 'never stops' points to hope's constancy." },
        { text: "Hope is strongest in the hardest times.", bucket: "meaning", why: "Singing 'sweetest in the Gale' means hope grows in adversity." },
        { text: "Hope gives comfort but asks nothing in return.", bucket: "meaning", why: "Asking only a crumb — or none — shows hope's generosity." }
      ],
      followup: "The poem keeps one foot in the literal bird and one in the meaning about hope. Choose one card and explain how the bird detail (the vehicle) carries the idea about hope (the meaning). Why does the concrete picture make the abstract idea easier to feel?"
    },

    analysis: {
      mcq: [
        {
          q: "The central metaphor of the poem compares hope to —",
          options: [
            "a small bird — 'the thing with feathers.'",
            "a mighty king on a throne.",
            "a burning candle in a window.",
            "a locked and silent room."
          ],
          why: "The poem opens by naming hope 'the thing with feathers' and builds every image from there."
        },
        {
          q: "The bird sings 'sweetest — in the Gale.' This mainly suggests that hope —",
          options: [
            "is strongest and most needed in hard times.",
            "disappears the moment trouble arrives.",
            "exists only on calm, easy days.",
            "has nothing to do with hardship."
          ],
          why: "Placing the sweetest song inside the storm shows hope growing in adversity."
        },
        {
          q: "The phrase 'the tune without the words — / And never stops — at all' emphasizes that hope is —",
          options: [
            "constant and beyond ordinary language.",
            "loud and easily silenced.",
            "brief and quickly forgotten.",
            "dependent on being explained in words."
          ],
          why: "A wordless tune that never stops pictures hope as constant and felt below language."
        },
        {
          q: "In the last stanza, the fact that the bird 'never asked a crumb — of me,' even in Extremity, shows that hope —",
          options: [
            "gives freely and asks almost nothing in return.",
            "is costly and demanding.",
            "abandons us in our worst moments.",
            "must be earned before it helps."
          ],
          why: "A crumb is the smallest possible thing; the bird gives comfort and takes nearly nothing."
        },
        {
          q: "Because one comparison is developed from the first line to the last, the poem is a clear example of —",
          options: [
            "an extended metaphor.",
            "a simile.",
            "a pun.",
            "a rhyme scheme."
          ],
          why: "The bird comparison is sustained across the whole poem, the definition of an extended metaphor."
        }
      ],
      short: [
        "Choose one image from the Bird in the Soul. Explain what it shows and what it reveals about the poem's meaning.",
        "The bird sings 'sweetest — in the Gale.' Explain what this pairing of song and storm suggests about the kind of hope the poem describes.",
        "The bird 'never asked a crumb' even in Extremity. Explain how this ending shapes the way the poem defines hope."
      ],
      paragraph: "Write an evidence-based paragraph. How does the poem use one extended metaphor — hope as a bird — to express an abstract idea? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about hope in your own words. Connect two images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Bird, One Idea",
      prompt: "The poem carries a whole idea — hope — through a single repeated image: a small, singing bird. Choose another poem, song, story, or speech that does the same thing (one image or metaphor carrying a big idea). Explain the connection with evidence: what is the single image, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's single-image technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how this Emily Dickinson poem uses the image of a bird to express hope. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying this poem. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in this poem because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about this poem: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect this poem's single-image technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of this poem for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Emily Dickinson's \"'Hope' is the thing with feathers\" as a short lyric — a study of extended metaphor, slant rhyme, dashes, common meter, imagery, and structure. The poem was published in 1891 and is public domain, so it can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "The poem appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1891 and is in the public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's extended metaphor (hope as a resilient singing bird), slant (near) rhyme, hallmark dashes, hymn-like common meter, imagery, and structure academically and neutrally, and follow your district's policy and community expectations.",
        "Details here were checked against the poem's text (hope as 'the thing with feathers' that 'perches in the soul'; the wordless tune that 'never stops — at all'; the song 'sweetest — in the Gale'; the 'sore' storm that could 'abash' the little bird that 'kept so many warm'; the bird heard 'in the chillest land — / And on the strangest Sea'; and that even 'in Extremity, / It asked a crumb — of me'). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English IV ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially metaphor, extended metaphor, and sound devices such as slant rhyme and meter. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
