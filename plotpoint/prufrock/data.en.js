/* PlotPoint — T. S. Eliot, "The Love Song of J. Alfred Prufrock" (1915).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: "The Love Song of J. Alfred Prufrock" was first published in 1915 and is in
   the public domain in the United States, so this room may quote brief public-domain phrases
   directly. The poem is studied here as LITERATURE — as a modernist dramatic monologue built
   on stream of consciousness, imagery, allusion, refrain, and irony — in a neutral, academic
   frame consistent with the Texas required literary-works list (19 TAC §110.70, English IV /
   high school). The room paraphrases, quotes only brief public-domain phrases where a close
   reading needs them, and reproduces no copyrighted edition. Standards are good-faith alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the engine
   shuffles. */
window.__ROOM__ = {
  id: "prufrock",
  storageKey: "plotpoint.prufrock.v1",

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
    "enter.readListenNote": "The poem (1915) is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Love Song of J. Alfred Prufrock",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Prufrock's Evening",
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
    "ctob.title": "The Overwhelming Question",
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
    "arcade.title": "Hesitation or City?",
    "arcade.default": "Sort each image by what it does in the poem.",
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
    "print.item.relic": "Prufrock's Evening evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Extended-image organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/The_Love_Song_of_J._Alfred_Prufrock",
      title: "The Love Song of J. Alfred Prufrock",
      author: "T. S. Eliot",
      grades: "English IV",
      genre: "Poetry · Modernist · Dramatic monologue",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1915)",
      textAccess: "A public-domain modernist poem; use your class's copy or any public-domain text.",
      copyright: "\"The Love Song of J. Alfred Prufrock\" was first published in 1915 and is in the public domain in the United States, so this room may quote brief public-domain phrases directly. The poem is studied here as literature — as a modernist dramatic monologue built on imagery, allusion, refrain, and irony. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "The poem appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. It is a challenging modernist poem, studied here as literature — its dramatic monologue, stream of consciousness, imagery, and allusion — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'The Love Song of J. Alfred Prufrock' — a hesitant figure in an overcoat pausing on a foggy city street at evening, yellow fog curling against lit windows, an empty table set behind glass."
    },
    hook: "A poem called a 'love song' that contains no love, and whose speaker never once acts. J. Alfred Prufrock walks you through half-deserted streets toward a room full of people, wanting to ask a woman one 'overwhelming question' — and spends the entire poem not asking it. Read it as literature, and watch how a mind talks itself out of living: an evening stretched out 'like a patient etherized upon a table,' fog that moves like a cat, and a life 'measured out with coffee spoons.' This is the sound of modern hesitation.",
    goals: [
      "Understand the poem as a modernist dramatic monologue that lets us overhear one anxious, hesitating mind in stream of consciousness.",
      "Analyze its imagery of fog, paralysis, aging, and time, and the feelings each image creates.",
      "Trace how Prufrock delays, rehearses, and abandons the 'overwhelming question,' and the effect of that endless hesitation.",
      "Interpret how modernist technique — free verse, allusion, refrain, and irony — carries the theme of alienation and the fear of living."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of dramatic monologue and stream of consciousness.",
        "Discuss: how can a poem let us hear a person's private, jumping thoughts — and why might a 'love song' contain no love?"
      ],
      during: [
        "Use Prufrock's Evening to slow down and read the poem image by image.",
        "Track the movement: from the invitation into the streets, through the social room and the mounting self-doubt, to the mermaids at the close."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the imagery and the poem's structure.",
        "Complete the Extend task to compare the theme of paralysis, or the stream-of-consciousness technique, to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what keeps Prufrock from acting in the poem. Include one image or line that helped you understand his hesitation." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two images from the poem — for example the etherized evening and the coffee spoons. Explain how both picture a life that is passive or drained, and how that shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's idea — paralysis by indecision — or its stream-of-consciousness technique to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "dramatic monologue", def: "A poem spoken by a single character (not the poet) who reveals themselves to a silent listener.", example: "Prufrock speaking his private thoughts to an unnamed 'you.'", nonexample: "A poem in which the poet speaks plainly as themselves.", context: "The poem is a dramatic monologue: we overhear J. Alfred Prufrock, not Eliot." },
      { term: "stream of consciousness", def: "A style that follows the natural, jumping flow of a character's thoughts and associations.", example: "Prufrock's mind leaping from streets to fog to hair to mermaids.", nonexample: "A tidy, numbered list of events in order.", context: "The poem's stream of consciousness lets us follow Prufrock's anxious, drifting mind." },
      { term: "free verse", def: "Poetry without a regular meter or rhyme scheme.", example: "Lines that change length and rhythm to follow a wandering mind.", nonexample: "A sonnet locked into fourteen lines of strict meter.", context: "Eliot writes in modernist free verse rather than fixed stanzas." },
      { term: "allusion", def: "A brief reference to another text, person, or work, meant to add meaning.", example: "Prufrock saying 'I am not Prince Hamlet,' pointing to Shakespeare.", nonexample: "A description that invents everything and refers to nothing outside itself.", context: "The poem's allusions — to Dante, Michelangelo, Hamlet, and Lazarus — deepen its meaning." },
      { term: "refrain", def: "A line or lines repeated at intervals in a poem.", example: "'In the room the women come and go / Talking of Michelangelo.'", nonexample: "A line that appears only once and never returns.", context: "The Michelangelo refrain returns to fix the poem's shallow social scene." },
      { term: "irony", def: "A gap between what is said or expected and what is actually true.", example: "A 'love song' in which the speaker never speaks to the woman or feels love.", nonexample: "A title that plainly matches the poem's content.", context: "The poem's central irony is a love song with no love and no action." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Yellow fog rubbing its back on the window-panes.", nonexample: "An abstract word like 'sad' with no picture attached.", context: "The poem's imagery of fog, streets, and aging makes Prufrock's paralysis vivid." },
      { term: "paralysis", def: "An inability to act or decide, as if frozen in place.", example: "Prufrock asking 'Do I dare?' and then doing nothing.", nonexample: "A character who decides quickly and takes bold action.", context: "Indecision hardens into paralysis: Prufrock never asks his question." },
      { term: "alienation", def: "A feeling of being isolated, cut off, or not belonging.", example: "Prufrock believing the mermaids 'will not sing to me.'", nonexample: "A speaker who feels fully at home among the people around them.", context: "The poem's alienation shows in Prufrock's sense of not fitting the room or the world." }
    ],

    relic: {
      name: "Prufrock's Evening",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "invitation", name: "Let Us Go Then, You and I", image: "images/invitation.webp",
          clues: ["The poem opens by inviting a companion: 'Let us go then, you and I.'", "The 'you' may be the reader, a friend, or a part of Prufrock's own mind.", "It draws us into half-deserted streets at evening."],
          identify: { q: "How does the poem begin?", choices: ["With an invitation — 'Let us go then, you and I' — into the evening streets", "With a description of a battle", "With a list of the speaker's victories", "With a prayer of thanks"] },
          purpose: { q: "What does this opening invitation do?", choices: ["It pulls the reader inside Prufrock's mind for the whole monologue", "It names the poem's setting and then drops it", "It introduces a second speaker who takes over", "It has no effect on the poem"] },
          significance: { q: "Why open a dramatic monologue with 'you and I'?", choices: ["It makes us Prufrock's silent companion, overhearing his private thoughts", "It proves the poem is autobiography", "It signals a happy love story", "It shows the streets are crowded"] },
          reveals: "The doorway into a single hesitating mind.",
          conceals: "How much of the poem happens only inside Prufrock's thoughts.",
          ace: "Articulate what the opening invitation does; connect it to the idea of a dramatic monologue; extend it to why letting us overhear a mind changes how we read."
        },
        {
          id: "etherized", name: "The Evening Etherized Upon a Table", image: "images/etherized.webp",
          clues: ["The evening is spread against the sky 'like a patient etherized upon a table.'", "It is a startling, unromantic simile for a sunset.", "It sets a mood of numbness and passivity from the first lines."],
          identify: { q: "What is the evening compared to?", choices: ["A patient etherized — drugged and unconscious — upon an operating table", "A golden crown", "A field of flowers", "A roaring fire"] },
          purpose: { q: "What mood does this simile create?", choices: ["Numbness, passivity, and unease — the opposite of a romantic evening", "Excitement and adventure", "Warmth and comfort", "Anger and violence"] },
          significance: { q: "Why is this a distinctly modernist image?", choices: ["It replaces a beautiful cliché with a jarring, clinical picture of paralysis", "It follows the rules of a traditional love poem", "It flatters the reader", "It hides the poem's real meaning"] },
          reveals: "A mood of numb passivity set from the opening lines.",
          conceals: "How the image foreshadows Prufrock's own inability to move.",
          ace: "Articulate the etherized-evening simile; connect it to Prufrock's passivity; extend it to why a shocking comparison can say more than a pretty one."
        },
        {
          id: "fog", name: "The Yellow Fog Like a Cat", image: "images/fog.webp",
          clues: ["The yellow fog 'rubs its back upon the window-panes' like a cat.", "It licks the corners of the evening and curls around the house.", "It is a vivid image of the modern industrial city."],
          identify: { q: "What is the yellow fog described as behaving like?", choices: ["A cat rubbing and curling around the windows and house", "A charging bull", "A rushing river", "A marching army"] },
          purpose: { q: "What does the fog image add to the poem?", choices: ["It paints the modern city and mirrors Prufrock's own slow, indirect drift", "It describes a farm at harvest", "It is only weather with no meaning", "It signals the poem is ending"] },
          significance: { q: "How does the cat-like fog fit Prufrock?", choices: ["It hesitates, lingers, and never commits — much like Prufrock himself", "It is bold and decisive", "It is bright and cheerful", "It is loud and violent"] },
          reveals: "The modern cityscape rendered as a soft, hesitant creature.",
          conceals: "How the fog quietly mirrors the speaker's own delay.",
          ace: "Articulate the fog-as-cat image; connect its lingering to Prufrock's hesitation; extend it to how a setting can echo a character's state of mind."
        },
        {
          id: "michelangelo", name: "The Women Come and Go, Talking of Michelangelo", image: "images/michelangelo.webp",
          clues: ["A repeated refrain: 'In the room the women come and go / Talking of Michelangelo.'", "It pictures the polite, shallow social world Prufrock must enter.", "The couplet returns to fix the scene in the reader's mind."],
          identify: { q: "What does this refrain describe?", choices: ["Women moving through a room in polite, surface-level conversation", "A quiet, empty house", "A crowded battlefield", "A solitary walk in nature"] },
          purpose: { q: "Why repeat the couplet as a refrain?", choices: ["Repetition fixes the shallow social scene and Prufrock's dread of it", "To teach art history", "To change the poem's subject", "To praise Michelangelo"] },
          significance: { q: "What does the refrain suggest about this social world?", choices: ["It is polished but empty — talk that circles without real connection", "It is warm and welcoming to Prufrock", "It is dangerous and violent", "It is completely silent"] },
          reveals: "The shallow, intimidating social world Prufrock cannot enter.",
          conceals: "How repetition makes the scene feel inescapable to him.",
          ace: "Articulate what the refrain shows; connect the repetition to Prufrock's dread; extend it to how a repeated line can build a whole mood."
        },
        {
          id: "dare", name: "Do I Dare Disturb the Universe?", image: "images/dare.webp",
          clues: ["Prufrock asks himself, 'Do I dare / Disturb the universe?'", "He imagines being watched and judged — pinned like an insect.", "He fears others will say, 'How his hair is growing thin!'"],
          identify: { q: "What question does Prufrock keep asking himself?", choices: ["'Do I dare?' — whether he can risk acting at all", "Where the party will be held", "What time the sun will rise", "Which street to take home"] },
          purpose: { q: "What does this recurring question reveal?", choices: ["His paralyzing self-doubt and fear of others' judgment", "His confidence and courage", "His anger at the crowd", "His indifference to everything"] },
          significance: { q: "Why blow a small social act up to 'disturb the universe'?", choices: ["The exaggeration shows how enormous ordinary risk feels to an anxious mind", "It shows the act truly is world-changing", "It is a joke with no meaning", "It proves Prufrock is brave"] },
          reveals: "Self-doubt magnified until a small act feels cosmic.",
          conceals: "How fear of judgment, not real danger, freezes him.",
          ace: "Articulate what 'Do I dare?' reveals; connect it to his fear of judgment; extend it to a time a small choice felt overwhelming."
        },
        {
          id: "coffeespoons", name: "I Have Measured Out My Life with Coffee Spoons", image: "images/coffeespoons.webp",
          clues: ["Prufrock says, 'I have measured out my life with coffee spoons.'", "A whole life summed up in tiny, repeated, trivial routines.", "It captures a timid, uneventful existence."],
          identify: { q: "What does measuring life 'with coffee spoons' picture?", choices: ["A life counted out in small, trivial, repeated routines", "A life of great adventures", "A life of wealth and power", "A life spent traveling the world"] },
          purpose: { q: "What does this image say about Prufrock's life?", choices: ["It has been small, cautious, and uneventful", "It has been bold and full of risk", "It has been violent and chaotic", "It has been deeply happy"] },
          significance: { q: "Why choose the coffee spoon, of all measures?", choices: ["Its tininess makes the whole life feel diminished and drained", "It shows he loves coffee", "It proves he is generous", "It has no real significance"] },
          reveals: "A whole life shrunk to a trivial, repeated measure.",
          conceals: "How the small image quietly indicts a timid existence.",
          ace: "Articulate the coffee-spoons image; connect it to Prufrock's timidity; extend it to how a small object can measure a big idea."
        },
        {
          id: "mermaids", name: "The Mermaids Who Will Not Sing to Me", image: "images/mermaids.webp",
          clues: ["Near the close, Prufrock says he has 'heard the mermaids singing, each to each.'", "But he adds, 'I do not think that they will sing to me.'", "The poem ends as human voices wake us, 'and we drown.'"],
          identify: { q: "What does Prufrock say about the mermaids?", choices: ["He has heard them singing, but does not think they will sing to him", "He commands them to sing for him", "He has never heard of mermaids", "He sings a duet with them"] },
          purpose: { q: "What feeling does the mermaid image create at the close?", choices: ["Wistful longing and a sense of being excluded from beauty and love", "Triumph and joy", "Rage and revenge", "Calm satisfaction"] },
          significance: { q: "How does 'and we drown' end the poem?", choices: ["Reality breaks the reverie — Prufrock sinks back, defeated and alone", "The mermaids rescue him", "Prufrock finally asks his question", "The party celebrates him"] },
          reveals: "The wistful sense of exclusion that ends the poem.",
          conceals: "How the beautiful image doubles as a final admission of defeat.",
          ace: "Articulate the mermaid image; connect the longing to Prufrock's alienation; extend it to why a beautiful image can carry a feeling of loss."
        }
      ]
    },

    ctob: {
      name: "The Overwhelming Question",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The yellow fog in the poem moves and rests like a common house animal. Which animal? (one word)",
          evidence: ["It 'rubs its back upon the window-panes.'", "It licks its tongue into the corners of the evening and curls up to sleep.", "The word begins with 'c…' and purrs."],
          hints: ["It rubs, licks, lingers, and curls up asleep.", "C…", "The word is cat."],
          answer: "cat"
        },
        {
          type: "mc",
          prompt: "The evening 'spread out against the sky' is compared to —",
          options: [
            "a patient etherized upon a table.",
            "a golden crown at a coronation.",
            "a field of blooming flowers.",
            "a ship setting out to sea."
          ],
          hints: ["The image is clinical and unsettling, not romantic.", "Think of an operating room, not a sunset postcard."]
        },
        {
          type: "mc",
          prompt: "'I have measured out my life with coffee spoons' mainly suggests that Prufrock's life has been —",
          options: [
            "small, trivial, and timidly uneventful.",
            "bold, adventurous, and full of risk.",
            "wealthy, powerful, and admired.",
            "violent, chaotic, and dangerous."
          ],
          hints: ["A coffee spoon is tiny and used again and again.", "The image shrinks a whole life down to a small routine."]
        },
        {
          type: "digit",
          prompt: "The couplet 'In the room the women come and go / Talking of Michelangelo' appears as a refrain. How many times does this exact couplet appear in the poem? Enter the number.",
          evidence: ["A refrain is a line or lines that repeat at intervals.", "This couplet returns once after it first appears — so it is stated a second time.", "First appearance plus one repetition."],
          hints: ["Count the first time it appears and each time it comes back.", "It appears once, then returns once more.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put these moments in the order they appear in the poem, earliest first.",
          items: [
            "The invitation: 'Let us go then, you and I,' into the evening streets.",
            "The yellow fog curling like a cat around the house.",
            "The self-doubt: 'Do I dare / Disturb the universe?'",
            "The mermaids at the close, who 'will not sing to me.'"
          ],
          hints: ["The poem opens with the invitation into the streets.", "The fog appears early, before the party's questions.", "The mermaids and 'we drown' close the poem."]
        },
        {
          type: "mc",
          prompt: "When Prufrock says 'I am not Prince Hamlet,' he is using allusion to admit that he is —",
          options: [
            "not the tragic hero but a minor, hesitant figure — 'an attendant lord,' even the Fool.",
            "braver and more decisive than Hamlet.",
            "a king who rules over Denmark.",
            "the author of Shakespeare's play."
          ],
          hints: ["He compares himself to a Shakespeare character to lower, not raise, himself.", "He casts himself as a supporting figure, even a fool, not the star."]
        }
      ]
    },

    arcade: {
      name: "Hesitation or City?",
      instruction: "The poem weaves Prufrock's inner paralysis together with images of the modern city and its social world. Sort each item by what it mainly does: is it a SIGN OF PRUFROCK'S HESITATION & PARALYSIS, or an IMAGE OF THE MODERN CITY & SOCIAL WORLD? Reasoning earns the points.",
      buckets: [
        { id: "hesitation", label: "Prufrock's hesitation & paralysis", short: "Hesitation" },
        { id: "city", label: "The modern city & social world", short: "City" }
      ],
      cards: [
        { text: "'Do I dare / Disturb the universe?'", bucket: "hesitation", why: "The recurring 'Do I dare?' names his paralyzing self-doubt." },
        { text: "Reassuring himself 'there will be time' to keep delaying.", bucket: "hesitation", why: "He uses 'there will be time' as an excuse never to act." },
        { text: "Rehearsing and then abandoning the 'overwhelming question.'", bucket: "hesitation", why: "He prepares to ask, then backs away — the heart of his paralysis." },
        { text: "Fearing they will say, 'How his hair is growing thin!'", bucket: "hesitation", why: "Fear of others' judgment freezes him in place." },
        { text: "Half-deserted streets leading through the evening.", bucket: "city", why: "The winding city streets set the modern urban scene." },
        { text: "Yellow fog rubbing its back against the window-panes.", bucket: "city", why: "The fog paints the industrial city at evening." },
        { text: "Women in the room 'talking of Michelangelo.'", bucket: "city", why: "The refrain pictures the polite, shallow social world." },
        { text: "Tea, cakes, ices, and the polite talk of the party.", bucket: "city", why: "The drawing-room details fill out the social world he must enter." }
      ],
      followup: "The poem braids Prufrock's private hesitation into the images of the city and its parties. What does placing his frozen inner life against this busy social world suggest about modern alienation?"
    },

    analysis: {
      mcq: [
        {
          q: "Because a single character (not the poet) speaks his private thoughts to a silent listener, the poem is best classified as a —",
          options: [
            "dramatic monologue.",
            "news report.",
            "traditional sonnet.",
            "stage play with many speakers."
          ],
          why: "We overhear J. Alfred Prufrock addressing an unnamed 'you,' the defining move of a dramatic monologue."
        },
        {
          q: "The opening simile — the evening 'like a patient etherized upon a table' — sets a mood of —",
          options: [
            "numbness and passivity.",
            "joy and celebration.",
            "rage and violence.",
            "cozy warmth and comfort."
          ],
          why: "A drugged, unconscious patient makes the evening feel numb and paralyzed, not romantic."
        },
        {
          q: "'I have measured out my life with coffee spoons' works in the poem to show that Prufrock's life has been —",
          options: [
            "small, trivial, and cautiously uneventful.",
            "heroic and full of great deeds.",
            "rich, powerful, and admired.",
            "wild and dangerous."
          ],
          why: "A tiny, repeated measure shrinks his whole life down to timid routine."
        },
        {
          q: "Calling the poem a 'love song' when the speaker never acts on or even speaks of love is an example of —",
          options: [
            "irony.",
            "rhyme.",
            "alliteration.",
            "a happy ending."
          ],
          why: "The gap between the title's promise and the poem's paralysis is the poem's central irony."
        },
        {
          q: "Prufrock's line 'I am not Prince Hamlet' is an allusion that mainly serves to —",
          options: [
            "cast himself as a minor, hesitant figure rather than a tragic hero.",
            "prove he is braver than Hamlet.",
            "show he has never read Shakespeare.",
            "claim he wrote the play."
          ],
          why: "By denying he is Hamlet and calling himself 'an attendant lord,' he diminishes his own role."
        }
      ],
      short: [
        "Choose one image from Prufrock's Evening. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem places Prufrock's private hesitation right beside images of the busy social world (for example, 'Do I dare?' beside women 'talking of Michelangelo'). Explain what this pairing suggests about modern alienation.",
        "Explain the poem's central irony: why call it a 'love song' when the speaker never acts? How does that gap shape the way you read Prufrock?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 'The Love Song of J. Alfred Prufrock' use modernist technique — stream of consciousness, imagery, allusion, or irony — to express the theme of paralysis or alienation? Make a claim and support it with specific images or lines from the poem.",
      aceReflection: "Articulate what the poem suggests about hesitation and modern life in your own words. Connect two images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "'The Love Song of J. Alfred Prufrock' carries a big idea — paralysis by indecision and modern alienation — through a wandering, stream-of-consciousness voice and images like the etherized evening and the coffee spoons. Choose another poem, song, story, film, or real situation that shows either paralysis by indecision or the stream-of-consciousness technique. Explain the connection with evidence: what transfers, what changes in the new setting, and where the comparison starts to break down.",
      format: "A short evidence-based comparison connecting the poem's theme of paralysis (or its stream-of-consciousness technique) to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'The Love Song of J. Alfred Prufrock' uses images and a wandering inner voice to show paralysis and hesitation. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'The Love Song of J. Alfred Prufrock.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in 'Prufrock' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about 'Prufrock': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the theme of paralysis by indecision in 'Prufrock' to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'The Love Song of J. Alfred Prufrock' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of T. S. Eliot's 'The Love Song of J. Alfred Prufrock' (1915) as a landmark modernist poem — a study of dramatic monologue, stream of consciousness, free verse, imagery, allusion, refrain, and irony. The poem is public domain in the United States, so brief public-domain phrases may be quoted directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. The poem is challenging; plan scaffolds. Every student response stays on the device.",
      reviewNotes: [
        "The poem appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1915 and is in the public domain in the United States, so it may be quoted directly. This room still paraphrases and quotes only brief public-domain phrases where a close reading needs them.",
        "Teach as literature. Present the poem's dramatic-monologue form, stream of consciousness, imagery, and allusion academically and neutrally, and follow your district's policy and community expectations.",
        "Note the difficulty: this is a demanding modernist poem with allusions (Dante, Michelangelo, Hamlet, Lazarus) and non-linear thought; provide scaffolds and re-reading time. Details here were checked against the poem's public-domain text (the 'Let us go then, you and I' opening; the evening 'like a patient etherized upon a table'; the yellow fog like a cat; the 'women come and go / Talking of Michelangelo' refrain; 'Do I dare / Disturb the universe?'; 'I have measured out my life with coffee spoons'; 'I am not Prince Hamlet'; the mermaids who 'will not sing to me' and 'we drown'). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English IV ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, allusion, tone, and theme — especially the analysis of modernist form and dramatic monologue. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
