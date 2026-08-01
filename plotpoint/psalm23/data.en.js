/* PlotPoint — Psalm 23, "The Shepherd's Psalm" (King James Version, 1611).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The KJV is public domain in the United States, so this room may
   reference the state-specified version directly. Psalm 23 is studied here as
   LITERATURE — imagery, extended metaphor, and poetic structure — in a neutral,
   academic, non-devotional frame consistent with the Texas required literary-works
   list (19 TAC §110.30, Grade 7). The room paraphrases, quotes only brief public-domain
   phrases where a close reading needs them, and reproduces no copyrighted edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "psalm23",
  storageKey: "plotpoint.psalm23.v1",

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
    "vocab.title": "Words for Psalm 23",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Shepherd's Field",
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
    "ctob.title": "The Shepherd's Path",
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
    "arcade.title": "Comfort or Danger?",
    "arcade.default": "Sort each image by the feeling it creates in the poem.",
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
    "print.item.relic": "Shepherd's Field evidence sheet",
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
      title: "Psalm 23 — The Shepherd's Psalm",
      author: "King James Version",
      grades: "Grade 7",
      genre: "Sacred poetry · Hebrew Bible · King James Version",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (King James Version, 1611)",
      textAccess: "Psalm 23 is six short verses. The King James Version is public domain — use your class's Bible or any KJV edition.",
      copyright: "The King James Version (1611) is in the public domain in the United States, so this room may reference the state-specified version directly. Psalm 23 is studied here as literature — its imagery, metaphor, and structure. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as literature — imagery, extended metaphor, and poetic structure — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.30, Grade 7). Because the specified version (KJV) is public domain, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Psalm 23 — a green hillside at dawn with a quiet stream, a shepherd's staff resting against a rock, and sheep grazing near still water."
    },
    hook: "Six short verses. One picture, held from beginning to end: a shepherd caring for sheep. Psalm 23 takes something abstract — trust, comfort, feeling safe even in danger — and paints it entirely through the concrete world of green fields, calm water, a dark valley, and a shepherd's staff. Read it as a poem, and watch how every line keeps building the same single comparison.",
    goals: [
      "Understand Psalm 23 as a short pastoral poem built on one extended metaphor: a shepherd and the flock.",
      "Analyze its imagery of provision, guidance, danger, and comfort, and the feelings each image creates.",
      "Trace the poem's shift from speaking about the shepherd to speaking directly to him, and the effect of that shift.",
      "Interpret how concrete images carry the abstract ideas of trust and comfort — and why this poem has shaped English literature and everyday language."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an extended metaphor.",
        "Discuss: how can a writer describe an abstract feeling — like feeling safe — using only concrete pictures?"
      ],
      during: [
        "Use the Shepherd's Field to slow down and read the poem image by image.",
        "Track the journey: from restful fields and calm water, through a dark valley, to a welcoming table."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the metaphor and the poem's structure.",
        "Complete the Extend task to compare this single-image technique to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main comparison Psalm 23 is built on. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two images from the poem — for example the green pastures and the dark valley. Explain how placing comfort and danger side by side shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — carrying a whole idea through one repeated image — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "psalm", def: "A sacred song or poem, especially one from the biblical Book of Psalms.", example: "Psalm 23 is one of the best-known psalms.", nonexample: "A grocery list.", context: "This psalm is a short poem meant to be read or sung." },
      { term: "pastoral", def: "Relating to shepherds, sheep, and rural life; a literary style that uses that imagery.", example: "Fields, flocks, and quiet streams in a poem.", nonexample: "A poem set in a busy city subway.", context: "Psalm 23 is pastoral: its whole world is a shepherd's field." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling a caring guide 'my shepherd.'", nonexample: "Saying something is 'like' another thing (that is a simile).", context: "The poem's central metaphor is the shepherd." },
      { term: "extended metaphor", def: "A single comparison developed across many lines or a whole poem.", example: "The shepherd image carried through every verse of Psalm 23.", nonexample: "A comparison used once and dropped.", context: "Psalm 23 is one long extended metaphor." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Green pastures and still waters we can almost see.", nonexample: "An abstract word like 'nice' with no picture.", context: "The poem's imagery makes comfort feel concrete." },
      { term: "parallelism", def: "A Hebrew poetic device of paired, balanced lines that echo or complete each other.", example: "Lying down in green pastures / being led beside still waters.", nonexample: "A single line with no matching partner.", context: "Hebrew poetry like this psalm often works through parallelism." },
      { term: "anoint", def: "To pour oil on someone's head as a sign of honor, welcome, or blessing.", example: "A host anointing a guest's head with oil.", nonexample: "Ignoring a guest at the door.", context: "The poem's host anoints the guest's head, a mark of welcome." },
      { term: "staff", def: "A long stick a shepherd uses to guide and protect the flock (paired with a 'rod').", example: "The shepherd steering a sheep back with his staff.", nonexample: "A weapon used to attack.", context: "The rod and staff are tools of protection, and they comfort." },
      { term: "dwell", def: "To live or remain in a place.", example: "Choosing to dwell in a welcoming house.", nonexample: "Passing through and never staying.", context: "The poem ends with the wish to dwell in a welcoming house forever." }
    ],

    relic: {
      name: "The Shepherd's Field",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "shepherd", name: "The Shepherd", image: "images/shepherd.webp",
          clues: ["The poem's very first move is to call the LORD 'my shepherd.'", "Everything after this line develops that one comparison.", "The speaker takes the role of a sheep, cared for by the shepherd."],
          identify: { q: "What comparison opens the poem?", choices: ["The LORD is described as a shepherd, and the speaker as a cared-for sheep", "The LORD is described as a king on a throne", "The LORD is described as a judge in a court", "The LORD is described as a soldier"] },
          purpose: { q: "What is the shepherd image's role in the poem?", choices: ["It is the central metaphor that every later image builds on", "It appears once and is dropped", "It describes the poet's job", "It has no connection to the rest"] },
          significance: { q: "Why choose a shepherd, of all figures?", choices: ["A shepherd provides, guides, and protects — the exact ideas the poem explores", "A shepherd is wealthy and powerful", "A shepherd is frightening", "A shepherd is a stranger"] },
          reveals: "The single controlling metaphor of the whole poem.",
          conceals: "How much of the poem's meaning is carried by this one image.",
          ace: "Articulate the shepherd metaphor; connect it to one thing a shepherd does; extend it to why a familiar image can explain a hard idea."
        },
        {
          id: "pastures", name: "Green Pastures", image: "images/pastures.webp",
          clues: ["The shepherd makes the sheep 'lie down in green pastures.'", "The image is one of rest, plenty, and safety.", "It comes near the start of the sheep's journey."],
          identify: { q: "What does the green-pastures image show?", choices: ["A place of rest and plenty where the sheep can lie down", "A battlefield", "A crowded market", "A locked room"] },
          purpose: { q: "What feeling does this image create?", choices: ["Calm, provision, and safety", "Fear and panic", "Anger", "Boredom"] },
          significance: { q: "What does 'lie down' add to the picture?", choices: ["The sheep feels safe enough to rest — trust, not just food", "The sheep is exhausted and collapses", "The sheep is trapped", "The sheep is lost"] },
          reveals: "Provision pictured as a place of rest.",
          conceals: "How 'lying down' quietly signals trust and safety.",
          ace: "Articulate the pastures image; connect it to the feeling of rest; extend it to how a setting can carry an emotion."
        },
        {
          id: "waters", name: "Still Waters", image: "images/waters.webp",
          clues: ["The shepherd leads the sheep 'beside the still waters.'", "Sheep are calmed by quiet water, not rushing streams.", "The poem pairs this line with the green pastures."],
          identify: { q: "Where does the shepherd lead the sheep?", choices: ["Beside still, calm waters", "Across a stormy sea", "Into a dry desert", "Onto a busy road"] },
          purpose: { q: "Why 'still' waters rather than fast water?", choices: ["Calm water suggests peace and refreshment", "Fast water is easier to drink", "Still water is dangerous", "It is only for decoration"] },
          significance: { q: "How does this line work with the green pastures?", choices: ["The two balanced images echo each other — an example of parallelism", "They contradict each other", "One cancels the other", "They are unrelated"] },
          reveals: "Peace pictured as calm water, balanced against the pastures.",
          conceals: "The paired, echoing structure of Hebrew poetry.",
          ace: "Articulate the still-waters image; connect it to the pastures line; extend it to how paired images build a mood."
        },
        {
          id: "paths", name: "The Right Paths", image: "images/paths.webp",
          clues: ["The shepherd leads the sheep in 'the paths of righteousness.'", "A good shepherd guides the flock along safe, correct ways.", "This is the guidance part of the shepherd's care."],
          identify: { q: "What does the 'paths of righteousness' image show?", choices: ["The shepherd guiding the flock along the right, safe way", "The sheep wandering off alone", "A road blocked by a wall", "A path that leads nowhere"] },
          purpose: { q: "What part of the shepherd's care does this show?", choices: ["Guidance — leading the flock in the right direction", "Feeding the flock", "Punishing the flock", "Selling the flock"] },
          significance: { q: "How does guidance fit the poem's larger picture?", choices: ["Provision, then guidance, then protection — the shepherd meets every need", "Guidance replaces the shepherd", "Guidance ends the poem", "Guidance is a danger"] },
          reveals: "The shepherd as a guide, not only a provider.",
          conceals: "How the poem moves step by step through a shepherd's duties.",
          ace: "Articulate the right-paths image; connect it to the idea of guidance; extend it to a time direction mattered as much as supplies."
        },
        {
          id: "valley", name: "The Valley of the Shadow", image: "images/valley.webp",
          clues: ["The journey passes through 'the valley of the shadow of death.'", "This is the poem's one image of real danger and fear.", "Yet the speaker says, 'I will fear no evil: for thou art with me.'"],
          identify: { q: "What does this image introduce?", choices: ["Danger and fear — a dark, threatening valley", "A second field of rest", "A celebration", "The end of the journey"] },
          purpose: { q: "Why place a dark valley in a comforting poem?", choices: ["To show the comfort holds even through danger, not only in easy places", "To scare the reader and stop there", "To change the subject", "By mistake"] },
          significance: { q: "What turns the fear aside in this line?", choices: ["The presence of the shepherd — 'thou art with me'", "The sheep running away", "The valley disappearing", "A new shepherd arriving"] },
          reveals: "That the poem's comfort is tested against real danger.",
          conceals: "The exact moment the poem shifts to speaking directly to the shepherd.",
          ace: "Articulate the valley image; connect the danger to the promise of presence; extend it to why comfort means more when it survives fear."
        },
        {
          id: "rodstaff", name: "The Rod and Staff", image: "images/rodstaff.webp",
          clues: ["In the dark valley the speaker names the shepherd's 'rod' and 'staff.'", "These tools guide, count, and protect the flock.", "The line says they 'comfort me.'"],
          identify: { q: "What are the rod and staff?", choices: ["A shepherd's tools for guiding and protecting the flock", "Weapons for hunting", "Musical instruments", "Farming plows"] },
          purpose: { q: "Why mention them in the valley, of all places?", choices: ["In the place of most danger, the tools of protection bring comfort", "To show the shepherd is armed for war", "To decorate the scene", "To frighten the sheep"] },
          significance: { q: "What does 'they comfort me' reveal?", choices: ["Protection, not just provision, is part of feeling safe", "The sheep dislikes the shepherd", "The tools are useless", "The journey is over"] },
          reveals: "Protection pictured through a shepherd's everyday tools.",
          conceals: "How comfort and danger are held in the very same line.",
          ace: "Articulate what the rod and staff do; connect them to comfort in the valley; extend it to an object that made you feel safe in a hard moment."
        },
        {
          id: "table", name: "The Table, the Oil, and the Overflowing Cup", image: "images/table.webp",
          clues: ["The image changes from field to feast: a table is prepared for the guest.", "The host anoints the guest's head with oil — a sign of honor and welcome.", "The cup 'runneth over,' and the poem ends wishing to dwell in a welcoming house."],
          identify: { q: "What scene closes the poem?", choices: ["A host welcoming a guest with a full table, oil, and an overflowing cup", "A battle", "A funeral", "An empty room"] },
          purpose: { q: "How does this ending shift the metaphor?", choices: ["From shepherd-and-sheep to host-and-guest — both picture generous care", "It abandons the poem's meaning", "It contradicts the opening", "It has no purpose"] },
          significance: { q: "What does the overflowing cup suggest?", choices: ["Abundance — more than enough, given freely", "Scarcity and lack", "A spill to clean up", "A warning"] },
          reveals: "Care pictured as lavish welcome, closing the poem on abundance.",
          conceals: "How the wish to 'dwell' turns a journey into a lasting home.",
          ace: "Articulate the feast image; connect welcome to the shepherd's care; extend it to how the ending changes the poem's feeling."
        }
      ]
    },

    ctob: {
      name: "The Shepherd's Path",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole poem is built on comparing the LORD to a ______. (one word)",
          evidence: ["The very first line names this figure.", "This person provides, guides, and protects a flock.", "The word begins with 'shep…'."],
          hints: ["Someone who cares for sheep.", "Shep…", "The word is shepherd."],
          answer: "shepherd"
        },
        {
          type: "mc",
          prompt: "The green pastures and still waters are mainly images of —",
          options: [
            "rest, peace, and provision.",
            "war and conquest.",
            "trade and wealth.",
            "travel and adventure."
          ],
          hints: ["Think about how these images make the reader feel.", "Which option matches lying down and calm water?"]
        },
        {
          type: "mc",
          prompt: "'The valley of the shadow of death' functions in the poem to —",
          options: [
            "introduce danger the speaker passes through with trust.",
            "describe the pleasant home the speaker lives in.",
            "end the poem on a happy feast.",
            "name one of the shepherd's tools."
          ],
          hints: ["It is the poem's one dark, frightening image.", "The next words are 'I will fear no evil: for thou art with me.'"]
        },
        {
          type: "digit",
          prompt: "This poem is Psalm number ______ in the Book of Psalms. Enter the number.",
          evidence: ["It is often called simply 'the Twenty-third Psalm.'", "It sits between Psalm 22 and Psalm 24.", "Twenty plus three."],
          hints: ["Its common nickname is 'the Twenty-third Psalm.'", "Twenty plus three.", "The number is 23."],
          answer: "23"
        },
        {
          type: "sequence",
          prompt: "Put the poem's images in the order they appear, earliest first.",
          items: [
            "Rest in green pastures beside still waters.",
            "Guidance along the right paths.",
            "The dark valley of the shadow of death.",
            "A table, oil, and an overflowing cup in a welcoming house."
          ],
          hints: ["The poem begins with rest and calm.", "Danger comes after guidance.", "The feast and the welcoming house close the poem."]
        },
        {
          type: "mc",
          prompt: "Partway through, the poem changes how it speaks of the shepherd. It shifts from —",
          options: [
            "talking about him ('he') to talking directly to him ('thou').",
            "talking to him ('thou') to talking about him ('he').",
            "past tense to future tense only.",
            "poetry to plain prose."
          ],
          hints: ["Notice where 'he leadeth me' becomes 'thou art with me.'", "The change makes the tone more personal and intimate."]
        }
      ]
    },

    arcade: {
      name: "Comfort or Danger?",
      instruction: "Psalm 23 places gentle comfort right next to real danger. Sort each image by the feeling it creates in the poem: is it an image of COMFORT & PROVISION, or of DANGER & HARDSHIP? Reasoning earns the points.",
      buckets: [
        { id: "comfort", label: "Comfort & provision", short: "Comfort" },
        { id: "danger", label: "Danger & hardship", short: "Danger" }
      ],
      cards: [
        { text: "Lying down in green pastures.", bucket: "comfort", why: "Rest and plenty — the sheep is safe enough to lie down." },
        { text: "Being led beside still, calm waters.", bucket: "comfort", why: "Quiet water pictures peace and refreshment." },
        { text: "The shepherd's rod and staff that 'comfort me.'", bucket: "comfort", why: "Tools of protection, named as a comfort." },
        { text: "A table prepared with an overflowing cup.", bucket: "comfort", why: "A generous welcome and more than enough." },
        { text: "Walking through the valley of the shadow of death.", bucket: "danger", why: "The poem's one dark, threatening image." },
        { text: "The presence of enemies nearby.", bucket: "danger", why: "The table is set 'in the presence of mine enemies' — a threat is near." },
        { text: "The risk of fear in a dark, shadowed place.", bucket: "danger", why: "The valley is exactly where fear could take hold." },
        { text: "A journey that could go wrong without a guide.", bucket: "danger", why: "Without the shepherd's guidance, the paths hold real risk." }
      ],
      followup: "The poem sets comfort and danger side by side — a full table 'in the presence of mine enemies,' comfort found inside the dark valley. What does that placement suggest about the kind of comfort the poem describes?"
    },

    analysis: {
      mcq: [
        {
          q: "The central metaphor of Psalm 23 compares the LORD to —",
          options: [
            "a caring shepherd, with the speaker as a cared-for sheep.",
            "a mighty king on a throne.",
            "a strict judge in a court.",
            "a distant, silent star."
          ],
          why: "The poem opens by naming the LORD 'my shepherd' and builds every image from there."
        },
        {
          q: "'Green pastures' and 'still waters' are images that mainly suggest —",
          options: [
            "rest, peace, and provision.",
            "war and conquest.",
            "trade and riches.",
            "speed and adventure."
          ],
          why: "Both images picture calm, safety, and having enough."
        },
        {
          q: "The 'valley of the shadow of death' works in the poem to —",
          options: [
            "introduce danger the speaker passes through while still trusting the shepherd.",
            "describe the comfortable house where the speaker lives.",
            "list one of the shepherd's tools.",
            "close the poem with a feast."
          ],
          why: "It is the single image of danger, immediately answered by 'thou art with me.'"
        },
        {
          q: "Partway through, the poem shifts from speaking about the shepherd to speaking directly to him. This shift makes the tone more —",
          options: [
            "personal and intimate.",
            "angry and bitter.",
            "distant and formal.",
            "confused and uncertain."
          ],
          why: "Moving from 'he' to 'thou' turns description into direct address, drawing the reader close."
        },
        {
          q: "Because one comparison is developed from the first line to the last, Psalm 23 is a clear example of —",
          options: [
            "an extended metaphor.",
            "a simile.",
            "a pun.",
            "a rhyme scheme."
          ],
          why: "The shepherd comparison is sustained across the whole poem, the definition of an extended metaphor."
        }
      ],
      short: [
        "Choose one image from the Shepherd's Field. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem places comfort and danger side by side (for example, a set table 'in the presence of mine enemies'). Explain what this pairing suggests about the comfort the poem describes.",
        "Explain the shift from 'he leadeth me' to 'thou art with me.' How does speaking directly to the shepherd change the feeling of the poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Psalm 23 use one extended metaphor to express an abstract idea like trust or comfort? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about comfort in your own words. Connect two images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "Psalm 23 carries a whole idea — trust and comfort — through a single repeated image: the shepherd. Choose another poem, song, story, or speech that does the same thing (one image or metaphor carrying a big idea). Explain the connection with evidence: what is the single image, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's single-image technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Psalm 23 uses the image of a shepherd to express trust and comfort. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Psalm 23. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in Psalm 23 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about Psalm 23: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Psalm 23's single-image technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Psalm 23 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Psalm 23 (King James Version) as a short pastoral poem — a study of extended metaphor, imagery, parallelism, and structure. The KJV is public domain, so the state-specified version can be referenced directly and this room reproduces no copyrighted edition. Psalm 23 is presented as literature in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "Psalm 23 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The specified version is the King James Version, which is public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's imagery, metaphor, and structure academically and neutrally, without devotional instruction, and follow your district's policy and community expectations for religious texts studied as literary works.",
        "Details here were checked against the KJV text (the opening shepherd metaphor; green pastures and still waters; the restored soul; the paths of righteousness; the valley of the shadow of death and 'I will fear no evil, for thou art with me'; the rod and staff that comfort; the prepared table 'in the presence of mine enemies'; the anointing oil and overflowing cup; goodness and mercy; the wish to dwell in the house of the LORD). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 7 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially metaphor and extended metaphor. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.4", "RL.7.5", "W.7.1", "SL.7.1", "L.7.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
