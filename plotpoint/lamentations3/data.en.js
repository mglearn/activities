/* PlotPoint — Lamentations 3 (Jewish Publication Society 1917 Tanakh).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The Jewish Publication Society 1917 translation is public domain in the
   United States, so this room may reference the state-specified version directly.
   Lamentations 3 is studied here as LITERATURE — the acrostic form, lament genre, imagery,
   and structural pivot — in a neutral, academic, non-devotional frame consistent with the
   Texas required literary-works list (19 TAC §110.30, Grade 8). The room paraphrases, quotes
   only brief public-domain phrases where a close reading needs them, and reproduces no
   copyrighted edition. Standards are good-faith alignment; TEKS/ELPS flagged "Needs review."
   Relic artifacts are clearly labeled instructional reconstructions. Correct answer is index 0
   in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "lamentations3",
  storageKey: "plotpoint.lamentations3.v1",

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
    "enter.readListenNote": "The Jewish Publication Society 1917 translation is in the public domain. Use your class's edition or any JPS 1917 text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Lamentations 3",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Poet's Workshop",
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
    "ctob.title": "The Turn at the Center",
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
    "arcade.title": "Despair or Hope?",
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
    "print.item.relic": "Poet's Workshop evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Acrostic-and-pivot organizer",
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
      title: "Lamentations 3",
      author: "Jewish Publication Society 1917 Tanakh",
      grades: "Grade 8",
      genre: "Sacred poetry · Lament · JPS 1917 translation",
      time: "45–75 minutes",
      spoiler: "None — the whole chapter is discussed",
      rights: "Public domain (Jewish Publication Society 1917 translation)",
      textAccess: "Lamentations 3 is the central poem of the Book of Lamentations. The Jewish Publication Society 1917 translation is public domain — use your class's edition or any JPS 1917 text.",
      copyright: "The Jewish Publication Society 1917 translation is in the public domain in the United States, so this room may reference the state-specified version directly. Lamentations 3 is studied here as literature — its acrostic form, lament genre, imagery, and structural pivot. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as literature — the acrostic form, the lament genre, imagery of siege and darkness, and the pivot from despair to hope — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.30, Grade 8). Because the specified version (JPS 1917) is public domain, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Lamentations 3 — the ruined walls of a besieged city at gray dawn, a lone figure seated in shadow, and a thin band of first light breaking on the horizon."
    },
    hook: "The Book of Lamentations mourns a city in ruins. Its third and central poem is the longest, and in Hebrew it is a strict acrostic — line after line begins with the next letter of the alphabet, as if grief itself were being forced into order. The poem opens in first-person darkness — 'I am the man that hath seen affliction' — walls closing in, bones broken, no way out. Then, at the very center, it turns: the mercies are 'new every morning.' Read it as a poem, and watch how a rigid form holds a wound open and then lets in a little light.",
    goals: [
      "Understand Lamentations 3 as the central poem of a book of laments, shaped in Hebrew as a strict acrostic.",
      "Analyze its imagery of siege, darkness, and confinement, and the feelings each image creates.",
      "Trace the poem's structural pivot from despair to hope — 'new every morning' — and back into lament.",
      "Interpret how a rigid acrostic form disciplines raw grief, and why the lament has shaped literature and everyday language."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a lament and an acrostic.",
        "Discuss: how can a strict form — like starting each line with the next letter of the alphabet — shape the way a poet expresses grief?"
      ],
      during: [
        "Use the Poet's Workshop to slow down and read the poem image by image.",
        "Track the movement: from dense images of suffering, through the turn at the center, back into lament and plea."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the acrostic form and the poem's pivot.",
        "Complete the Extend task to compare the acrostic-as-discipline or the despair-to-hope pivot to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Lamentations 3 moves from despair toward hope. Include one image from the poem that helped you understand the turn." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the poem — for example the images of siege and the line 'new every morning.' Explain how placing despair and hope side by side shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply one of the poem's techniques — a strict form disciplining grief, or a pivot from despair to hope — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "lament", def: "A poem or song expressing deep grief, mourning, or sorrow.", example: "A poem mourning a city that has been destroyed.", nonexample: "A cheerful birthday song.", context: "Lamentations is a book of laments; chapter 3 is its central lament." },
      { term: "acrostic", def: "A poem in which successive lines or sections begin with successive letters of the alphabet.", example: "Each set of lines starting with the next Hebrew letter in order.", nonexample: "A poem whose lines start with any word at random.", context: "In Hebrew, Lamentations 3 is a strict acrostic from the first letter to the last." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "Being walled about in darkness so one cannot escape.", nonexample: "An abstract word like 'sad' with no picture.", context: "The poem's imagery of siege and darkness makes the suffering concrete." },
      { term: "personification", def: "Giving human actions or qualities to something not human.", example: "Speaking of mercies that are 'new every morning,' as if they wake with the day.", nonexample: "Describing an object plainly with no human quality.", context: "The poem often gives grief and mercy a living, human presence." },
      { term: "pivot", def: "A structural turning point where a poem changes direction or mood.", example: "The move from despair to hope at the center of the chapter.", nonexample: "A poem that keeps exactly the same mood throughout.", context: "The pivot in Lamentations 3 comes when the speaker recalls a reason for hope." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling the LORD 'my portion,' as if hope were an inheritance.", nonexample: "Saying something is 'like' another thing (that is a simile).", context: "The 'portion' metaphor names where the speaker finds hope." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "That hope can be found even in the middle of ruin.", nonexample: "A single word or a plot detail with no larger meaning.", context: "One theme of the poem is patient hope in the midst of grief." },
      { term: "affliction", def: "A state of great suffering, distress, or hardship.", example: "The speaker who says he has 'seen affliction.'", nonexample: "A moment of easy comfort and rest.", context: "The poem opens with a man who has seen deep affliction." },
      { term: "portion", def: "A share or inheritance assigned to someone; what one is given as one's own.", example: "Calling the LORD 'my portion' — one's assigned share and hope.", nonexample: "Something borrowed and quickly returned.", context: "'The LORD is my portion' names the speaker's ground for hope." }
    ],

    relic: {
      name: "The Poet's Workshop",
      intro: "Seven instructional reconstructions of the features and images in the poem — teaching recreations, not artwork from any edition. Investigate what each one is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "acrostic", name: "The Acrostic Structure", image: "images/acrostic.webp",
          clues: ["In Hebrew, successive lines begin with successive letters of the alphabet.", "The whole chapter is ordered from the first letter to the last.", "The form is a discipline imposed on raw grief."],
          identify: { q: "What is the acrostic structure of Lamentations 3?", choices: ["A form in which successive lines begin with successive letters of the Hebrew alphabet", "A rhyme scheme repeated in every stanza", "A chorus that returns after each verse", "A single unbroken sentence with no pattern"] },
          purpose: { q: "What is the acrostic's role in the poem?", choices: ["It imposes a strict order on grief, shaping the lament line by line", "It has no effect on how the poem reads", "It hides the meaning of the poem", "It marks where the poem should be sung"] },
          significance: { q: "Why shape a poem of grief as a strict acrostic?", choices: ["A rigid form can hold overwhelming emotion in order and give it structure", "The alphabet makes the poem easier to forget", "It shows the poet had nothing to say", "It proves the poem is not really sad"] },
          reveals: "That a strict form is deliberately used to contain and order grief.",
          conceals: "How much of the poem's power comes from its disciplined structure.",
          ace: "Articulate what an acrostic is; connect the form to the poem's grief; extend it to why a strict form can help someone express hard feelings."
        },
        {
          id: "speaker", name: "\"I Am the Man That Hath Seen Affliction\"", image: "images/speaker.webp",
          clues: ["The poem opens in the first person: a single suffering voice.", "The speaker names himself 'the man that hath seen affliction.'", "This 'I' carries the reader through the whole chapter."],
          identify: { q: "How does the poem introduce its speaker?", choices: ["As a first-person 'I' — the man that hath seen affliction", "As a distant narrator describing others", "As a crowd speaking together", "As a king giving commands"] },
          purpose: { q: "What is the effect of the first-person voice?", choices: ["It makes the suffering personal and immediate for the reader", "It keeps the reader at a safe distance", "It turns the poem into a list of facts", "It hides who is speaking"] },
          significance: { q: "Why open with 'I have seen affliction' rather than a general statement?", choices: ["A single voice lets one person stand in for a whole grieving people", "It proves only one person suffered", "It changes the subject away from grief", "It ends the poem before it begins"] },
          reveals: "A personal, first-person voice that carries the lament.",
          conceals: "How one 'I' can speak for an entire community's grief.",
          ace: "Articulate who the speaker is; connect the first-person voice to the poem's feeling; extend it to a time a single voice spoke for many."
        },
        {
          id: "siege", name: "Images of Siege and Darkness", image: "images/siege.webp",
          clues: ["Early in the poem the speaker is led into darkness, not light.", "He feels 'walled about' so that he cannot escape.", "The images are of confinement, siege, and being worn down."],
          identify: { q: "What do the poem's opening images picture?", choices: ["Darkness, confinement, and being walled about with no way out", "A bright feast in an open field", "A calm journey along an easy road", "A quiet garden at midday"] },
          purpose: { q: "What feeling do the siege and darkness images create?", choices: ["Suffering, entrapment, and despair", "Comfort and rest", "Excitement and adventure", "Boredom"] },
          significance: { q: "Why picture grief as being 'walled about'?", choices: ["It shows suffering as inescapable, closing in from every side", "It shows the speaker is safe and protected", "It shows the poem is about building a city", "It shows the danger is far away"] },
          reveals: "Grief pictured as siege — darkness closing in with no exit.",
          conceals: "How physical images of confinement carry an inner state of despair.",
          ace: "Articulate the siege imagery; connect it to the feeling of being trapped; extend it to how a concrete image can carry an inner feeling."
        },
        {
          id: "morning", name: "The Central Turn — \"New Every Morning\"", image: "images/morning.webp",
          clues: ["At the center of the poem the mood decisively turns.", "The speaker recalls that the mercies are not consumed.", "They are 'new every morning; great is Thy faithfulness.'"],
          identify: { q: "What happens at the center of the poem?", choices: ["The speaker turns from despair to hope, recalling mercies 'new every morning'", "The poem repeats its opening images unchanged", "The speaker gives up entirely", "The poem changes to a different subject"] },
          purpose: { q: "What is the role of this turn in the poem's structure?", choices: ["It is the pivot — the hinge where despair gives way to hope", "It is a minor detail with no effect", "It ends the poem", "It restates the siege imagery"] },
          significance: { q: "Why place the hope at the very center rather than the end?", choices: ["Set at the center, the hope becomes the poem's structural heart, framed by grief on both sides", "It hides the hope from the reader", "It proves the grief was not real", "It has no meaning"] },
          reveals: "The structural pivot from despair to hope at the poem's center.",
          conceals: "How the hope is framed by grief on both sides rather than tacked on at the end.",
          ace: "Articulate the turn; connect 'new every morning' to the surrounding grief; extend it to another work that turns from despair to hope."
        },
        {
          id: "portion", name: "\"The LORD Is My Portion\"", image: "images/portion.webp",
          clues: ["After the turn, the speaker names his ground for hope.", "He calls the LORD 'my portion' — his assigned share.", "A 'portion' is an inheritance, what is given to someone as their own."],
          identify: { q: "What does the speaker mean by calling the LORD 'my portion'?", choices: ["He names the LORD as his share and inheritance — his ground for hope", "He is describing a meal", "He is dividing land among neighbors", "He is counting his possessions"] },
          purpose: { q: "How does the 'portion' metaphor work in the poem?", choices: ["It turns an abstract hope into something owned and inherited", "It lists the speaker's wealth", "It changes the subject", "It has no connection to hope"] },
          significance: { q: "Why picture hope as a 'portion' or inheritance?", choices: ["It makes hope feel like a possession that cannot be taken away", "It makes hope sound temporary", "It makes hope sound frightening", "It makes hope sound unimportant"] },
          reveals: "Hope pictured as an inheritance — a portion that is one's own.",
          conceals: "How a metaphor of ownership makes hope feel secure.",
          ace: "Articulate the portion metaphor; connect it to the poem's hope; extend it to another metaphor that turns a feeling into a possession."
        },
        {
          id: "waiting", name: "Waiting Quietly for Deliverance", image: "images/waiting.webp",
          clues: ["After the turn, the poem meditates on patient hope.", "It says it is good to wait quietly for deliverance and to bear hardship.", "The speaker urges searching one's ways and returning."],
          identify: { q: "What does the poem counsel after the turn?", choices: ["To wait quietly for deliverance, bear hardship, and examine one's ways", "To fight back at once", "To forget the grief immediately", "To leave the city forever"] },
          purpose: { q: "What idea does this section develop?", choices: ["Patient endurance and self-examination as a response to suffering", "The pleasures of the feast", "The details of the siege", "A list of the poet's enemies"] },
          significance: { q: "How does patient waiting fit the poem's movement?", choices: ["It extends the hope of the turn into a way of living through hardship", "It cancels the hope of the turn", "It returns to the opening darkness", "It ends the poem abruptly"] },
          reveals: "Hope extended into patient endurance and self-examination.",
          conceals: "How the poem moves from a single turn into a sustained way of enduring.",
          ace: "Articulate the counsel to wait; connect it to the earlier turn; extend it to a time patient endurance mattered more than quick action."
        },
        {
          id: "return", name: "The Return to Lament", image: "images/return.webp",
          clues: ["Toward the end the lament resumes.", "The poem returns to distress, tears, and a plea.", "The hope of the center does not erase the grief."],
          identify: { q: "What happens toward the end of the poem?", choices: ["The lament returns — distress, tears, and a plea", "The poem ends on the feast", "The speaker forgets his grief", "The acrostic breaks apart"] },
          purpose: { q: "Why let the lament return after the hope?", choices: ["To show that hope and grief coexist rather than one erasing the other", "To prove the hope was false", "To restart the poem from the beginning", "To change the poem's subject"] },
          significance: { q: "What does the return to lament reveal about the poem?", choices: ["Grief is honest and ongoing; hope does not pretend the suffering is gone", "The poem has no real hope", "The poem is only about complaint", "The poem forgets its own turn"] },
          reveals: "That grief and hope coexist — the lament resumes after the turn.",
          conceals: "How the poem refuses an easy, tidy ending.",
          ace: "Articulate the return to lament; connect it to the earlier hope; extend it to why honest grief can sit beside hope."
        }
      ]
    },

    ctob: {
      name: "The Turn at the Center",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In Hebrew, this poem is a strict ______ — successive lines begin with successive letters of the alphabet. (one word)",
          evidence: ["The whole chapter is ordered from the first letter to the last.", "The form imposes a strict order on the grief.", "The word begins with 'acro…'."],
          hints: ["A poem whose lines follow the alphabet in order.", "Acro…", "The word is acrostic."],
          answer: "acrostic"
        },
        {
          type: "mc",
          prompt: "The poem's opening images — being led into darkness and 'walled about' — mainly picture —",
          options: [
            "suffering, confinement, and despair.",
            "rest and celebration.",
            "trade and wealth.",
            "travel and adventure."
          ],
          hints: ["Think about how darkness and being walled about make the reader feel.", "Which option matches being trapped with no way out?"]
        },
        {
          type: "mc",
          prompt: "'The mercies are new every morning' functions in the poem to —",
          options: [
            "mark the turn from despair toward hope.",
            "describe the enemies surrounding the city.",
            "list the shepherd's tools.",
            "end the poem on the siege."
          ],
          hints: ["It sits at the center of the poem.", "Right after it comes 'great is Thy faithfulness.'"]
        },
        {
          type: "digit",
          prompt: "This is the central poem of the Book of Lamentations — the ______ chapter. Enter the number.",
          evidence: ["It is the middle and longest of the five poems.", "It sits between chapter 2 and chapter 4.", "Two plus one."],
          hints: ["It is the central chapter, between the second and the fourth.", "Two plus one.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the poem's movements in the order they appear, earliest first.",
          items: [
            "First-person grief: 'I am the man that hath seen affliction.'",
            "Images of siege and darkness — walled about, led into the dark.",
            "The turn: the mercies are 'new every morning.'",
            "The return to lament — distress, tears, and a plea."
          ],
          hints: ["The poem begins with a single grieving voice.", "The turn to hope comes at the center.", "The lament resumes near the end."]
        },
        {
          type: "mc",
          prompt: "Letting the lament return after the hope of the center suggests that —",
          options: [
            "grief and hope coexist — hope does not pretend the suffering is gone.",
            "the hope was false and should be ignored.",
            "the poem is only a happy song.",
            "the poem has no structure at all."
          ],
          hints: ["Notice that the poem does not simply end on 'new every morning.'", "The distress and plea come back before the poem closes."]
        }
      ]
    },

    arcade: {
      name: "Despair or Hope?",
      instruction: "Lamentations 3 sets dense images of suffering right beside a decisive turn toward hope. Sort each image by the feeling it creates in the poem: is it an image of DESPAIR & SUFFERING, or of HOPE & FAITHFULNESS? Reasoning earns the points.",
      buckets: [
        { id: "despair", label: "Images of suffering / despair", short: "Despair" },
        { id: "hope", label: "Images of hope / faithfulness", short: "Hope" }
      ],
      cards: [
        { text: "Being led into darkness, not into light.", bucket: "despair", why: "The opening images picture suffering and the absence of light." },
        { text: "Being 'walled about' so one cannot escape.", bucket: "despair", why: "Confinement and siege — grief with no way out." },
        { text: "Bitterness and broken bones.", bucket: "despair", why: "Physical images of being worn down by affliction." },
        { text: "A man who says he 'hath seen affliction.'", bucket: "despair", why: "The first-person voice of deep suffering." },
        { text: "Mercies that are 'new every morning.'", bucket: "hope", why: "The central turn — renewal that arrives with each dawn." },
        { text: "'Great is Thy faithfulness.'", bucket: "hope", why: "A statement of steady, reliable faithfulness at the pivot." },
        { text: "Calling the LORD 'my portion.'", bucket: "hope", why: "The metaphor names an inheritance — a secure ground for hope." },
        { text: "Waiting quietly for deliverance.", bucket: "hope", why: "Patient endurance grows out of the poem's turn toward hope." }
      ],
      followup: "The poem places dense suffering right beside 'new every morning,' and then lets the lament return. What does setting despair and hope side by side — and refusing a tidy ending — suggest about the kind of hope the poem describes?"
    },

    analysis: {
      mcq: [
        {
          q: "In Hebrew, Lamentations 3 is structured as —",
          options: [
            "a strict acrostic, with successive lines beginning with successive letters of the alphabet.",
            "a set of rhyming couplets.",
            "a single unbroken sentence.",
            "a repeated chorus with verses."
          ],
          why: "The chapter's defining Hebrew form runs alphabetically from the first letter to the last."
        },
        {
          q: "The poem's opening images — darkness and being 'walled about' — mainly suggest —",
          options: [
            "suffering, confinement, and despair.",
            "rest and celebration.",
            "wealth and trade.",
            "speed and adventure."
          ],
          why: "Both images picture entrapment and grief with no way out."
        },
        {
          q: "'The mercies are new every morning' works in the poem to —",
          options: [
            "mark the turn from despair toward hope at the poem's center.",
            "describe the enemies besieging the city.",
            "list a shepherd's tools.",
            "close the poem on the siege."
          ],
          why: "It is the pivot, immediately followed by 'great is Thy faithfulness.'"
        },
        {
          q: "By calling the LORD 'my portion,' the speaker pictures hope as —",
          options: [
            "an inheritance or share that is one's own.",
            "a meal to be eaten quickly.",
            "a stranger passing by.",
            "a distant, silent star."
          ],
          why: "A 'portion' is an assigned share; the metaphor makes hope feel owned and secure."
        },
        {
          q: "Letting the lament return after the hope at the center most suggests that —",
          options: [
            "grief and hope coexist; the poem refuses a tidy ending.",
            "the hope was never real.",
            "the poem is simply a happy song.",
            "the acrostic form has broken down."
          ],
          why: "The distress and plea resume, so hope sits beside honest, ongoing grief rather than erasing it."
        }
      ],
      short: [
        "Choose one image or feature from the Poet's Workshop. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem sets dense suffering right beside 'new every morning,' then lets the lament return. Explain what this placement suggests about the kind of hope the poem describes.",
        "Explain how the strict acrostic form shapes a poem of grief. What does imposing a rigid structure on raw emotion do to the way we read it?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Lamentations 3 use its structure — the acrostic form and the pivot at the center — to hold both despair and hope? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about hope in your own words. Connect two parts that develop it — for example an image of siege and 'new every morning.' Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "Lamentations 3 does two striking things: it forces grief into a strict acrostic form, and it pivots at its center from despair to hope before returning to lament. Choose another poem, song, story, or speech that does one of these — uses a strict form to hold strong emotion, or turns from despair toward hope. Explain the connection with evidence: what is the form or the turn, what does it do to the feeling, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's acrostic-as-discipline or its despair-to-hope pivot to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Lamentations 3 uses an acrostic form and a central turn to move from despair toward hope. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Lamentations 3. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] in Lamentations 3 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about Lamentations 3: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Lamentations 3's acrostic form (or its despair-to-hope pivot) to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Lamentations 3 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Lamentations 3 (Jewish Publication Society 1917 translation) as the central poem of a book of laments — a study of the acrostic form, the lament genre, imagery of siege and darkness, and the structural pivot from despair to hope. The JPS 1917 translation is public domain, so the state-specified version can be referenced directly and this room reproduces no copyrighted edition. Lamentations 3 is presented as literature in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "Lamentations 3 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 8); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The specified version is the Jewish Publication Society 1917 translation, which is public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's acrostic form, imagery, and structure academically and neutrally, without devotional instruction, and follow your district's policy and community expectations for religious texts studied as literary works.",
        "Details here were checked against the JPS 1917 text (the acrostic form; the opening first-person voice, 'I am the man that hath seen affliction'; images of being led into darkness and 'walled about'; bitterness and broken bones; the central turn, mercies 'new every morning' and 'great is Thy faithfulness'; 'The LORD is my portion'; the counsel to wait quietly and to search one's ways; and the return to distress, tears, and plea). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 8 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially acrostic form, structural pivot, and metaphor. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.4", "RL.8.5", "W.8.1", "SL.8.1", "L.8.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
