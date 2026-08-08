/* PlotPoint — "Mother to Son" by Langston Hughes (1922).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: "Mother to Son" (1922) is in the public domain in the United
   States, so this room may reference the poem directly. It is studied here as
   LITERATURE — extended metaphor, dramatic monologue, vernacular dialect as
   craft, and imagery — in a neutral, academic frame consistent with the Texas
   required literary-works list (19 TAC §110.30, Grade 7). The room paraphrases,
   quotes only brief public-domain phrases where a close reading needs them, and
   reproduces no copyrighted edition. Standards are good-faith alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "mothertoson",
  storageKey: "plotpoint.mothertoson.v1",

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
    "enter.readListenNote": "\"Mother to Son\" is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Mother to Son",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Broken Stair",
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
    "ctob.title": "Keep Climbing",
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
    "arcade.title": "Hardship or Perseverance?",
    "arcade.default": "Sort each image by what it shows on the mother's stair.",
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
    "print.item.relic": "Broken Stair evidence sheet",
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
      gutenberg: "https://en.wikisource.org/wiki/Mother_to_Son",
      title: "Mother to Son",
      author: "Langston Hughes",
      grades: "Grade 7",
      genre: "Poetry · Dramatic monologue",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1922)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "\"Mother to Son\" (1922) is in the public domain in the United States, so this room may reference the poem directly. It is studied here as literature — its extended metaphor, dramatic monologue, dialect voice, and imagery. The room paraphrases longer stretches, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "On the Texas required literary-works list adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Studied here as literature — extended metaphor, dramatic monologue, dialect as craft, and imagery — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"Mother to Son\" — a worn wooden staircase climbing through shadow toward a lighted landing, its bare treads scattered with tacks and splinters and a torn-up board, a hand resting on the rail as if pausing before climbing on."
    },
    hook: "A mother speaks to her son in one unbroken voice. She never lectures — she hands him a picture. \"Life for me ain't been no crystal stair,\" she says, and then she shows him her real stair: tacks, splinters, boards torn up, bare places with no carpet. And still she climbs — reaching landings, turning corners, going on in the dark. Read it as a poem, and watch one broken staircase carry a whole life of struggle and stubborn hope.",
    goals: [
      "Understand \"Mother to Son\" as a dramatic monologue built on one extended metaphor: life as a hard, broken staircase.",
      "Analyze the poem's concrete imagery of hardship — tacks, splinters, torn-up boards, bare floor — and the feelings each image creates.",
      "Examine the mother's vernacular dialect as a deliberate craft choice that shapes voice, character, and authenticity.",
      "Interpret how the extended metaphor carries the abstract theme of perseverance, and how the mother's direct charge to her son gives the poem its purpose."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an extended metaphor carried through a whole poem.",
        "Discuss: how can a writer describe a whole life — its struggles and its hope — using only one repeated image?"
      ],
      during: [
        "Use the Broken Stair to slow down and read the poem image by image.",
        "Track the journey: from the 'crystal stair' she did NOT have, through the tacks and splinters, to her charge to keep climbing."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the metaphor, the dialect voice, and the poem's structure.",
        "Complete the Extend task to compare this single-image technique to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main comparison \"Mother to Son\" is built on. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two images from the poem — for example the 'crystal stair' she never had and the tacks and splinters of her real stair. Explain how placing them side by side shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — carrying a whole idea through one repeated image — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "dramatic monologue", def: "A poem spoken by a single character to a listener, revealing the speaker's voice and situation.", example: "A mother speaking directly to her son through the whole poem.", nonexample: "A poem with no speaker, just a scene described from outside.", context: "The whole poem is a dramatic monologue — one mother, one voice, one listener." },
      { term: "extended metaphor", def: "A single comparison developed across many lines or a whole poem.", example: "Life pictured as a broken staircase from the first line to the last.", nonexample: "A comparison used once and dropped.", context: "\"Mother to Son\" is one long extended metaphor: life is a stair." },
      { term: "vernacular", def: "The everyday, informal speech of a community, used in writing to capture a real voice.", example: "\"Life for me ain't been no crystal stair.\"", nonexample: "Formal, textbook English with no regional flavor.", context: "The mother's vernacular gives the poem an authentic, spoken voice." },
      { term: "dialect", def: "A particular form of a language shaped by region or community, marked by its own sounds and grammar.", example: "'Climbin'' and 'ain't' as the mother actually speaks.", nonexample: "Standardized spelling that erases how a person really talks.", context: "Hughes writes the mother's dialect on purpose, as a craft choice." },
      { term: "free verse", def: "Poetry without a fixed rhyme scheme or regular meter.", example: "Lines of uneven length that follow natural speech.", nonexample: "A sonnet with strict rhyme and meter.", context: "The poem is free verse, so it flows like real speaking." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Tacks, splinters, and boards torn up we can almost feel.", nonexample: "An abstract word like 'hard' with no picture.", context: "The poem's imagery makes hardship concrete and physical." },
      { term: "tone", def: "The attitude a speaker takes toward the subject or listener.", example: "The mother's tone is honest, tired, but encouraging.", nonexample: "A tone with no attitude at all.", context: "The poem's tone mixes struggle with steady hope." },
      { term: "theme", def: "The central idea or message a text develops.", example: "Perseverance — keep climbing even when it's hard.", nonexample: "A single event with no larger meaning.", context: "The poem's theme is perseverance passed from mother to son." },
      { term: "landing", def: "A level platform where a staircase pauses or turns between flights.", example: "Reaching a landin' before climbing the next flight.", nonexample: "A step in the middle of a straight climb.", context: "The mother reaches landings, showing progress despite the hard stair." }
    ],

    relic: {
      name: "The Broken Stair",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "crystalstair", name: "The Crystal Stair", image: "images/crystalstair.webp",
          clues: ["The poem's most famous line: 'Life for me ain't been no crystal stair.'", "A crystal stair would be smooth, gleaming, and easy to climb.", "The mother names it only to say it is NOT what her life has been."],
          identify: { q: "What does the 'crystal stair' stand for?", choices: ["An easy, smooth, privileged life the mother did NOT have", "A staircase in the mother's own house", "A gift the son gives his mother", "A real crystal sculpture"] },
          purpose: { q: "Why open the poem by naming the crystal stair?", choices: ["It sets up the whole extended metaphor by contrast — her real stair is nothing like it", "It describes where the family lives", "It ends the poem", "It has no role in the poem"] },
          significance: { q: "What does naming what she did NOT have reveal?", choices: ["Her hardship is defined against an easier life some others enjoy", "She is wealthy and comfortable", "She has never climbed any stairs", "The stair is only decoration"] },
          reveals: "The controlling metaphor of the whole poem, introduced by contrast.",
          conceals: "How much meaning rests on the one word 'crystal' — ease she never had.",
          ace: "Articulate what the crystal stair means; connect it to the mother's real stair; extend it to why naming what you lack can reveal what you've faced."
        },
        {
          id: "tackssplinters", name: "The Tacks and Splinters", image: "images/tackssplinters.webp",
          clues: ["On her real stair there have been 'tacks' and 'splinters.'", "These are small, sharp things that hurt with every step.", "The image makes hardship physical, not abstract."],
          identify: { q: "What do the tacks and splinters show?", choices: ["Small, sharp hardships that make every step painful", "Tools the mother uses for building", "Decorations on a fine staircase", "Toys left on the stairs"] },
          purpose: { q: "What feeling does this image create?", choices: ["Pain, difficulty, and the sting of constant hardship", "Comfort and rest", "Joy and celebration", "Boredom"] },
          significance: { q: "Why choose tacks and splinters instead of just saying 'it was hard'?", choices: ["Concrete images let the reader feel the hardship, not just hear about it", "Tacks and splinters are pleasant", "They show the stair is new", "They have no meaning"] },
          reveals: "Hardship pictured through small, sharp, concrete objects.",
          conceals: "How much the sensory imagery does that an abstract word could not.",
          ace: "Articulate the tacks-and-splinters image; connect it to the theme of hardship; extend it to how a concrete detail can carry a big feeling."
        },
        {
          id: "tornboards", name: "The Boards Torn Up and Bare Floor", image: "images/tornboards.webp",
          clues: ["Her stair has 'boards torn up' and places 'with no carpet on the floor.'", "These are gaps and bare spots — the stair is unfinished and worn.", "The bare floor means there was never comfort or covering."],
          identify: { q: "What do the torn-up boards and bare floor show?", choices: ["A broken, unfinished, comfortless stair — hardship with no cushioning", "A newly built luxury staircase", "A carpeted hallway", "A garden path"] },
          purpose: { q: "What does 'no carpet on the floor' add to the picture?", choices: ["It shows there was never softness or ease — only the bare, hard climb", "It shows the family is very rich", "It shows the stairs are clean", "It is only decoration"] },
          significance: { q: "How does this image build on the tacks and splinters?", choices: ["It deepens the same picture — the whole stair is broken and bare, hardship layered on hardship", "It contradicts the earlier images", "It ends the metaphor", "It is unrelated"] },
          reveals: "Hardship deepened — a stair that is broken, worn, and bare.",
          conceals: "How the piled-up details make one image carry an entire hard life.",
          ace: "Articulate the torn-boards image; connect it to the tacks and splinters; extend it to how repeated details build a single strong picture."
        },
        {
          id: "landings", name: "The Landings and Corners", image: "images/landings.webp",
          clues: ["Even so, the mother has 'been a-climbin' on.'", "She reaches 'landin's' and turns 'corners.'", "These mark real progress despite the broken stair."],
          identify: { q: "What do the landings and corners show?", choices: ["Progress — the mother keeps moving up despite the hard stair", "Places where she gives up", "Rooms in a mansion", "The bottom of the stairs"] },
          purpose: { q: "What part of the poem's meaning do they carry?", choices: ["Perseverance — she keeps climbing and getting somewhere", "Comfort and luxury", "Fear of the climb", "The end of her journey"] },
          significance: { q: "Why show landings and corners after all the hardship?", choices: ["To prove the hardship did not stop her — she made real progress anyway", "To show the stair was easy after all", "To end the poem sadly", "They mean nothing"] },
          reveals: "Progress pictured as landings reached and corners turned.",
          conceals: "How the poem balances hardship against steady forward motion.",
          ace: "Articulate what landings and corners show; connect them to perseverance; extend it to a time you made progress through something hard."
        },
        {
          id: "inthedark", name: "Climbing in the Dark", image: "images/inthedark.webp",
          clues: ["Sometimes the mother goes on 'in the dark / Where there ain't been no light.'", "She keeps climbing even when she cannot see the way ahead.", "The dark makes the climb harder and more uncertain."],
          identify: { q: "What does climbing 'in the dark' show?", choices: ["Pushing forward even when the way ahead can't be seen", "Climbing at night for fun", "Giving up when it gets dark", "A power outage in the house"] },
          purpose: { q: "Why add the dark to the broken stair?", choices: ["To show her perseverance holds even when she can't see or be sure", "To show the climb is easy", "To change the subject", "To end the metaphor"] },
          significance: { q: "What does climbing in the dark reveal about the mother?", choices: ["Her determination doesn't depend on comfort or certainty — she goes on regardless", "She is afraid and stops", "She has finished climbing", "She dislikes the stair"] },
          reveals: "Perseverance tested against uncertainty and the unknown.",
          conceals: "How 'the dark' raises the stakes of the same steady climb.",
          ace: "Articulate the climbing-in-the-dark image; connect it to perseverance; extend it to going on without knowing how things will turn out."
        },
        {
          id: "dontsetdown", name: "\"Don't You Set Down\"", image: "images/dontsetdown.webp",
          clues: ["The mother turns from her own story to a direct charge to her son.", "She tells him: 'don't you set down on the steps' because it's hard.", "She warns him: 'don't you fall now.'"],
          identify: { q: "What is the mother's charge to her son?", choices: ["Don't stop, don't sit down, and don't fall — keep climbing", "Sit down and rest on the steps", "Turn back to the bottom", "Wait for her to carry him"] },
          purpose: { q: "How does this charge change the poem?", choices: ["It turns her life story into direct advice — the poem's whole purpose", "It abandons the metaphor", "It contradicts everything before it", "It has no purpose"] },
          significance: { q: "Why give this charge right after her own hardships?", choices: ["Her example earns the advice — she can say 'keep going' because she did", "She wants him to have it easy", "She is scolding him for no reason", "It means nothing"] },
          reveals: "The poem's purpose — wisdom and hope handed from mother to son.",
          conceals: "How the metaphor becomes a message once she turns to address him.",
          ace: "Articulate the mother's charge; connect it to her own climb; extend it to advice that carries more weight because the speaker lived it."
        },
        {
          id: "dialectvoice", name: "The Dialect Voice", image: "images/dialectvoice.webp",
          clues: ["The mother speaks in vernacular dialect: 'ain't,' 'climbin',' 'a-goin'.'", "The spellings capture how she really talks, not textbook English.", "Hughes chose this voice on purpose."],
          identify: { q: "What is the dialect voice in this poem?", choices: ["The mother's real, everyday speech written the way she sounds", "A grammar mistake by the poet", "A foreign language", "A formal, textbook narrator"] },
          purpose: { q: "Why does Hughes write in the mother's dialect?", choices: ["To make her voice authentic, personal, and true to who she is", "To make the poem harder to read", "Because he could not write formally", "To hide the poem's meaning"] },
          significance: { q: "What does the dialect reveal about craft?", choices: ["Voice itself is a deliberate choice that shapes character and authenticity", "Dialect never belongs in poetry", "It shows the mother is uneducated and nothing more", "It is an accident"] },
          reveals: "Vernacular dialect as a purposeful craft choice, not an error.",
          conceals: "How the spelling on the page carries a real, living human voice.",
          ace: "Articulate what the dialect voice does; connect it to the mother's character; extend it to how a writer's word choices create a voice."
        }
      ]
    },

    ctob: {
      name: "Keep Climbing",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole poem compares the mother's life to a broken ______. (one word)",
          evidence: ["The famous first line names it: 'ain't been no crystal ____.'", "It is something you climb, with steps and landings.", "The word begins with 'stai…'."],
          hints: ["Something with steps that you climb.", "Stai…", "The word is stair."],
          answer: "stair"
        },
        {
          type: "mc",
          prompt: "The 'crystal stair' the mother names stands for —",
          options: [
            "an easy, smooth life she did NOT have.",
            "the actual staircase in her house.",
            "a gift she gives her son.",
            "a piece of jewelry."
          ],
          hints: ["She names it only to say her life was NOT like it.", "Crystal is smooth and gleaming — the opposite of her real stair."]
        },
        {
          type: "mc",
          prompt: "The tacks, splinters, and boards torn up are mainly images of —",
          options: [
            "the hardship and difficulty of her life.",
            "wealth and comfort.",
            "rest and relaxation.",
            "celebration and joy."
          ],
          hints: ["Think about how these sharp, broken things would feel underfoot.", "They picture a life that has been painful and hard."]
        },
        {
          type: "digit",
          prompt: "\"Mother to Son\" has how many speakers — that is, how many people speak aloud in the poem? Enter the number.",
          evidence: ["A dramatic monologue is spoken by a single voice.", "The mother talks the whole way through; the son only listens.", "One voice, start to finish."],
          hints: ["Count the voices that actually speak, not the ones addressed.", "The son is spoken TO, but never speaks.", "The number is 1."],
          answer: "1"
        },
        {
          type: "sequence",
          prompt: "Put the poem's moves in the order they appear, earliest first.",
          items: [
            "\"Life for me ain't been no crystal stair.\"",
            "The tacks, splinters, and torn-up boards of her real stair.",
            "She has kept climbing — reaching landings and turning corners, even in the dark.",
            "She charges her son: don't turn back, don't set down, don't fall."
          ],
          hints: ["The poem opens with the crystal-stair line.", "The hardship images come before she describes climbing on.", "Her direct charge to her son comes near the end."]
        },
        {
          type: "mc",
          prompt: "In the second half, the poem shifts from the mother describing her own life to —",
          options: [
            "speaking directly to her son with advice.",
            "describing a different family.",
            "telling a story about the past only.",
            "listing rules for climbing stairs."
          ],
          hints: ["Notice where she stops saying 'I' and starts saying 'you.'", "Her own climb becomes a charge: keep going, don't fall."]
        }
      ]
    },

    arcade: {
      name: "Hardship or Perseverance?",
      instruction: "\"Mother to Son\" sets the pain of a broken stair right beside the strength to keep climbing. Sort each image by what it mainly shows: is it an image of HARDSHIP on the stair, or of PERSEVERANCE / going on? Reasoning earns the points.",
      buckets: [
        { id: "hardship", label: "Hardship on the stair", short: "Hardship" },
        { id: "persevere", label: "Perseverance / going on", short: "Perseverance" }
      ],
      cards: [
        { text: "Tacks scattered on the steps.", bucket: "hardship", why: "Small, sharp pains — the sting of a hard life underfoot." },
        { text: "Splinters in the bare wood.", bucket: "hardship", why: "More physical pain built into every step of the climb." },
        { text: "Boards torn up on the stair.", bucket: "hardship", why: "The stair is broken and unfinished — gaps and danger." },
        { text: "Places with no carpet on the floor.", bucket: "hardship", why: "Bare and comfortless — there was never any softness." },
        { text: "Still climbing on, all the time.", bucket: "persevere", why: "She keeps moving up despite everything — the poem's core." },
        { text: "Reaching landings on the way up.", bucket: "persevere", why: "Real progress made in spite of the broken stair." },
        { text: "Turning corners as she climbs.", bucket: "persevere", why: "She keeps going even where the path bends and changes." },
        { text: "Going on in the dark where there's no light.", bucket: "persevere", why: "She presses forward even when she cannot see the way." }
      ],
      followup: "The poem places the broken stair and the steady climb in the very same voice — hardship and perseverance side by side. What does that pairing suggest about the kind of hope the mother is passing to her son?"
    },

    analysis: {
      mcq: [
        {
          q: "The central metaphor of \"Mother to Son\" compares the mother's life to —",
          options: [
            "a rough, broken staircase she keeps climbing.",
            "a smooth crystal stair she glides up.",
            "a quiet garden path.",
            "a calm, still river."
          ],
          why: "The poem builds every image from the stair — 'Life for me ain't been no crystal stair' — and its tacks, splinters, and torn-up boards."
        },
        {
          q: "The tacks, splinters, and boards torn up are images that mainly suggest —",
          options: [
            "hardship and difficulty.",
            "comfort and luxury.",
            "rest and calm.",
            "wealth and ease."
          ],
          why: "These sharp, broken details make the mother's hardship physical and concrete."
        },
        {
          q: "The line about climbing 'in the dark / Where there ain't been no light' works in the poem to —",
          options: [
            "show she keeps going even without seeing the way ahead.",
            "describe a comfortable, well-lit home.",
            "list one of her tools.",
            "end the poem with rest."
          ],
          why: "The dark raises the stakes of the same steady climb — perseverance even in uncertainty."
        },
        {
          q: "In the second half, the poem shifts from the mother's own story to a direct charge to her son. This shift makes the poem —",
          options: [
            "a piece of advice, not just a description.",
            "an angry complaint.",
            "a distant, formal report.",
            "a confused list of facts."
          ],
          why: "Turning from 'I' to 'you' — don't set down, don't fall — gives the poem its purpose as wisdom passed on."
        },
        {
          q: "Because one comparison is developed from the first line to the last, \"Mother to Son\" is a clear example of —",
          options: [
            "an extended metaphor.",
            "a simile.",
            "a rhyme scheme.",
            "a pun."
          ],
          why: "The stair comparison is sustained across the whole poem, the definition of an extended metaphor."
        }
      ],
      short: [
        "Choose one image from the Broken Stair. Explain what it shows and what it reveals about the poem's meaning.",
        "Hughes writes the mother in vernacular dialect ('ain't,' 'climbin''). Explain why this is a craft choice, not a mistake, and what it adds to the poem.",
        "Explain the shift from the mother describing her own life to speaking directly to her son. How does the direct charge change the feeling and purpose of the poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"Mother to Son\" use one extended metaphor — life as a broken staircase — to express the abstract theme of perseverance? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about perseverance in your own words. Connect two images that develop it — for example the tacks and splinters and the climb 'in the dark.' Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"Mother to Son\" carries a whole theme — perseverance — through a single repeated image: the broken staircase. Choose another poem, song, story, or speech that does the same thing (one image or metaphor carrying a big idea). Explain the connection with evidence: what is the single image, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's single-image technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"Mother to Son\" by Langston Hughes uses the image of a broken staircase to express perseverance. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"Mother to Son.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in \"Mother to Son\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"Mother to Son\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the single-image technique in \"Mother to Son\" to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"Mother to Son\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of \"Mother to Son\" by Langston Hughes (1922) as a short dramatic monologue — a study of extended metaphor, vernacular dialect as craft, imagery, and structure. The poem is public domain, so it may be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"Mother to Son\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1922 and is in the public domain in the United States, so it may be used directly. This room still paraphrases longer stretches and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's extended metaphor, imagery, and structure academically, and treat the mother's vernacular dialect as a deliberate craft choice — a source of authentic voice and character, never a marker of deficiency. Follow your district's policy and community expectations.",
        "Details here were checked against the poem's content anchors (the opening 'ain't been no crystal stair' metaphor; tacks and splinters; boards torn up and bare places with no carpet; the mother 'a-climbin' on,' reaching landings and turning corners; going on 'in the dark' where there was no light; the direct charge to the son — don't turn back, don't set down on the steps, don't fall; and 'I'se still climbin''). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 7 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially metaphor and extended metaphor, and an author's use of voice and dialect. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.4", "RL.7.5", "W.7.1", "SL.7.1", "L.7.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
