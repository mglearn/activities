/* PlotPoint — "A Psalm of Life," Henry Wadsworth Longfellow (1838).  PUBLIC DOMAIN.
   Subtitle: "What the Heart of the Young Man Said to the Psalmist."
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem (1838) is public domain in the United States, so this room may
   reference the text directly. "A Psalm of Life" is studied here as LITERATURE — its
   exhortation, metaphors, quatrain form, and meter — in a neutral, academic frame
   consistent with the Texas required literary-works list (19 TAC §110.70, English IV /
   high school). The room paraphrases, quotes only brief public-domain phrases where a
   close reading needs them, and reproduces no copyrighted edition. Standards are
   good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "psalmoflife",
  storageKey: "plotpoint.psalmoflife.v1",

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
    "vocab.title": "Words for A Psalm of Life",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Field of Life",
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
    "ctob.title": "Up and Doing",
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
    "arcade.title": "Despair or Action?",
    "arcade.default": "Sort each line by what the poem does with it: reject or urge.",
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
    "print.item.relic": "Field of Life evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Legacy-and-action organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/A_Psalm_of_Life",
      title: "A Psalm of Life",
      author: "Henry Wadsworth Longfellow",
      grades: "English IV",
      genre: "Poetry · Didactic lyric",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1838)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "The poem (1838) is in the public domain in the United States, so this room may reference the text directly. \"A Psalm of Life\" is studied here as literature — its exhortation, metaphors, quatrain form, and meter. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "\"A Psalm of Life\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. It is presented as literature — exhortation, metaphor, and meter — in a neutral, academic way. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"A Psalm of Life\" — a wide field at dawn with a single set of footprints crossing sand toward the horizon, suggesting purposeful action and a legacy left behind."
    },
    hook: "A young man refuses to believe that life is empty or that the grave is the end. Instead, Henry Wadsworth Longfellow's \"A Psalm of Life\" turns nine short stanzas into a marching call to act: hearts beat like muffled drums, the world becomes a field of battle, and great lives leave 'footprints on the sands of time.' Read it as a poem, and watch how each stanza pushes the reader from despair toward doing.",
    goals: [
      "Understand \"A Psalm of Life\" as a didactic lyric in nine quatrains that answers gloom with an exhortation to purposeful living.",
      "Analyze its metaphors — muffled drums, the field of battle, footprints on the sands of time — and the feelings and urgings each creates.",
      "Trace the poem's use of antithesis: dream versus real, past and future versus the 'living Present,' despair versus hope.",
      "Interpret how the poem's regular quatrain form and marching meter reinforce its message of active, patient, hopeful effort."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a didactic poem — one that directly teaches or exhorts.",
        "Discuss: how can a poem argue against despair, and what makes an exhortation persuasive rather than preachy?"
      ],
      during: [
        "Use the Field of Life to slow down and read the poem's metaphors one image at a time.",
        "Track the movement: from rejecting 'life is but an empty dream,' through the call to be a hero, to footprints left for others."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the metaphors, the antithesis, and the quatrain structure.",
        "Complete the Extend task to carry the poem's legacy-and-action message to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main argument \"A Psalm of Life\" makes about how to live. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the poem — for example, the rejection of 'an empty dream' and the call to 'be a hero in the strife.' Explain how placing despair and action side by side shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's message — act in the present and leave worthy 'footprints on the sands of time' — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "didactic", def: "Intended to teach or give moral instruction; a poem that argues or exhorts.", example: "A poem that urges the reader to live purposefully.", nonexample: "A poem written only to entertain, with no lesson.", context: "\"A Psalm of Life\" is didactic: it directly counsels the reader how to live." },
      { term: "exhortation", def: "Language that strongly urges or encourages someone to act.", example: "'Let us, then, be up and doing.'", nonexample: "A neutral description of the weather.", context: "The poem is one long exhortation to act rather than despair." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling beating hearts 'muffled drums.'", nonexample: "Saying something is 'like' another thing (that is a simile).", context: "The poem's metaphors — drums, battlefield, footprints — carry its argument." },
      { term: "allusion", def: "A brief reference to another text or idea the reader is expected to recognize.", example: "Answering the funeral phrase 'dust to dust.'", nonexample: "Inventing a phrase with no source behind it.", context: "The line about dust returning to dust alludes to a familiar burial saying." },
      { term: "quatrain", def: "A stanza of four lines, often with a regular rhyme scheme.", example: "Each four-line stanza of this poem.", nonexample: "A single unbroken block of prose.", context: "The poem is built from nine quatrains rhymed ABAB." },
      { term: "meter", def: "The regular pattern of stressed and unstressed syllables in a line of verse.", example: "The steady, marching beat of each line.", nonexample: "Ordinary speech with no measured rhythm.", context: "The poem's marching meter echoes hearts beating like drums." },
      { term: "theme", def: "The central idea or message a work explores.", example: "Live actively and leave a worthy legacy.", nonexample: "The color of the book's cover.", context: "The poem's theme is hope and purposeful action over despair." },
      { term: "sublime", def: "Grand, noble, or elevated; inspiring awe.", example: "Making one's life 'sublime' through great deeds.", nonexample: "Something dull, small, or ordinary.", context: "Great lives remind us we can make our own lives sublime." },
      { term: "bivouac", def: "A temporary camp, especially of soldiers with little or no shelter.", example: "A 'bivouac of Life' where each person is a soldier.", nonexample: "A permanent house one lives in for years.", context: "The poem calls the world a 'bivouac of Life' — a camp in an ongoing struggle." }
    ],

    relic: {
      name: "The Field of Life",
      intro: "Seven instructional reconstructions of the images and turns in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "emptydream", name: "\"Life Is But an Empty Dream\" — Rejected", image: "images/emptydream.webp",
          clues: ["The poem opens by quoting a gloomy claim only to reject it.", "It insists instead that 'Life is real! Life is earnest!'", "The speaker refuses to treat life as unreal or pointless."],
          identify: { q: "How does the poem treat the idea that 'Life is but an empty dream'?", choices: ["It quotes the claim in order to reject it", "It agrees with the claim wholeheartedly", "It never mentions the idea at all", "It ends the poem on that claim"] },
          purpose: { q: "What is this opening move's role in the poem?", choices: ["It sets up the despair the rest of the poem will argue against", "It describes the poet's daily routine", "It praises sleep and dreaming", "It has no connection to the rest"] },
          significance: { q: "What does rejecting the 'empty dream' establish?", choices: ["That the poem is an argument for living actively, not a lament", "That the poem is only about sleep", "That the speaker has given up", "That life truly is meaningless"] },
          reveals: "The despairing claim the whole poem is built to answer.",
          conceals: "How the poem uses antithesis — dream versus real — from its very first lines.",
          ace: "Articulate the rejected claim; connect it to the poem's insistence that life is 'real' and 'earnest'; extend it to why a writer might open by naming the idea they oppose."
        },
        {
          id: "grave", name: "The Grave \"Is Not Its Goal\"", image: "images/grave.webp",
          clues: ["The poem answers the funeral saying 'dust thou art, to dust returnest.'", "It insists that saying 'Was not spoken of the soul.'", "The grave, the speaker says, 'is not its goal.'"],
          identify: { q: "What claim does this part of the poem make about the grave?", choices: ["The grave is not the goal or end of the soul", "The grave is the final purpose of life", "The grave should be feared above all", "The grave is never mentioned"] },
          purpose: { q: "What role does the phrase about dust play here?", choices: ["It is an allusion to a burial saying the poem answers and limits", "It describes gardening", "It praises the desert", "It closes the poem"] },
          significance: { q: "What does 'Was not spoken of the soul' reveal?", choices: ["The poem separates the body's end from the soul's aim, refusing despair", "The poem denies that people die", "The poem says the soul is unimportant", "The poem gives up hope"] },
          reveals: "How the poem answers a familiar phrase about death to argue against despair.",
          conceals: "The distinction the poem draws between the body and the soul.",
          ace: "Articulate the claim about the grave; connect it to the allusion about dust; extend it to how answering a well-known phrase can strengthen an argument."
        },
        {
          id: "drums", name: "Hearts Like \"Muffled Drums\"", image: "images/drums.webp",
          clues: ["The poem says our hearts are 'like muffled drums.'", "Those drums are 'beating funeral marches to the grave.'", "The image joins time, mortality, and a marching beat."],
          identify: { q: "What does the 'muffled drums' image compare?", choices: ["Beating hearts to drums marching toward the grave", "A parade celebrating a victory", "A drum lesson at school", "A quiet library"] },
          purpose: { q: "What idea does this metaphor carry?", choices: ["That time is fleeting and mortality is always advancing", "That music should be louder", "That marching is fun", "That the poem is about war only"] },
          significance: { q: "Why does the poem raise mortality just before urging action?", choices: ["Because limited time is the reason to act now, not despair", "To frighten the reader into stopping", "To change the subject", "To end the poem"] },
          reveals: "Mortality pictured as a steady, marching beat.",
          conceals: "How the poem turns the fact of death into a reason to live actively.",
          ace: "Articulate the muffled-drums image; connect it to the idea that time is short; extend it to how a metaphor can make an abstract idea like time feel physical."
        },
        {
          id: "battle", name: "The \"Field of Battle\" / \"Bivouac of Life\"", image: "images/battle.webp",
          clues: ["The poem calls the world 'a broad field of battle' and 'a bivouac of Life.'", "It urges, 'Be not like dumb, driven cattle!'", "Instead: 'Be a hero in the strife!'"],
          identify: { q: "How does the poem picture the world in these lines?", choices: ["As a field of battle and a bivouac, where each person is a soldier", "As a quiet garden with nothing to do", "As an empty stage", "As a marketplace of goods"] },
          purpose: { q: "What does the contrast between 'driven cattle' and 'a hero' urge?", choices: ["To act with courage and purpose rather than be pushed along passively", "To avoid all conflict by hiding", "To follow the crowd", "To rest and do nothing"] },
          significance: { q: "What does calling life a 'bivouac' add to the picture?", choices: ["It frames life as an ongoing struggle that calls for effort and courage", "It says life is a permanent, settled home", "It says life is a vacation", "It says life is meaningless"] },
          reveals: "The world imagined as a battlefield that demands courage.",
          conceals: "How the poem uses a soldier metaphor to push the reader toward action.",
          ace: "Articulate the battlefield image; connect it to the call to 'be a hero'; extend it to a time you had to choose action over being 'driven' along."
        },
        {
          id: "present", name: "\"Act,—Act in the Living Present!\"", image: "images/present.webp",
          clues: ["The poem warns against trusting the future, 'howe'er pleasant.'", "It warns against dwelling on the 'dead Past.'", "Its central command is to 'Act,—act in the living Present!'"],
          identify: { q: "What does this stanza tell the reader to do?", choices: ["Act now, in the present, rather than trust the future or dwell on the past", "Wait for the future to fix things", "Live only in memories of the past", "Do nothing at all"] },
          purpose: { q: "What is the role of this stanza in the poem?", choices: ["It states the poem's central exhortation — act in the present", "It describes a landscape", "It lists the shepherd's tools", "It ends the poem on despair"] },
          significance: { q: "What antithesis does this stanza build?", choices: ["Past and future set against the 'living Present'", "Rich against poor", "Land against sea", "Day against night, with no point"] },
          reveals: "The poem's central command to act in the present moment.",
          conceals: "How antithesis — past and future versus the present — organizes the argument.",
          ace: "Articulate the command to act in the present; connect it to the warnings about past and future; extend it to a decision where acting now mattered more than waiting."
        },
        {
          id: "footprints", name: "\"Footprints on the Sands of Time\"", image: "images/footprints.webp",
          clues: ["Great lives 'remind us / We can make our lives sublime.'", "Departing, they 'leave behind us / Footprints on the sands of time.'", "Those footprints may help a later 'forlorn and shipwrecked brother.'"],
          identify: { q: "What do 'footprints on the sands of time' represent?", choices: ["A worthy legacy that outlasts a person and may help others later", "A beach vacation", "A set of directions to a house", "A warning to stay away"] },
          purpose: { q: "What role does this image play in the poem?", choices: ["It turns the poem toward legacy — the good our lives can leave behind", "It describes the weather", "It abandons the poem's argument", "It contradicts the opening"] },
          significance: { q: "Who might the footprints help, according to the poem?", choices: ["A later 'forlorn and shipwrecked brother' who takes heart from them", "No one at all", "Only the person who made them", "An enemy in battle"] },
          reveals: "The idea that a well-lived life leaves a legacy for those who come after.",
          conceals: "How the metaphor connects individual action to lasting influence on others.",
          ace: "Articulate the footprints image; connect it to the idea of legacy; extend it to a person whose 'footprints' have encouraged you."
        },
        {
          id: "labor", name: "\"Learn to Labor and to Wait\"", image: "images/labor.webp",
          clues: ["The final stanza urges, 'Let us, then, be up and doing.'", "It asks for 'a heart for any fate.'", "Its closing counsel is 'Still achieving, still pursuing, / Learn to labor and to wait.'"],
          identify: { q: "What does the poem's closing counsel ask of the reader?", choices: ["To keep striving with patience — to labor and to wait", "To give up and rest forever", "To seek only pleasure", "To fear the future"] },
          purpose: { q: "How does 'labor and wait' balance the poem's message?", choices: ["It pairs active effort with patience, tempering urgency with endurance", "It cancels the call to act", "It tells the reader to do nothing", "It has no connection to the rest"] },
          significance: { q: "What tone does the poem end on?", choices: ["Encouragement — hopeful, active, and patient", "Despair and defeat", "Anger and bitterness", "Confusion"] },
          reveals: "The poem's closing balance of active effort and patient endurance.",
          conceals: "How 'wait' softens 'labor,' ending on patient hope rather than mere hurry.",
          ace: "Articulate the closing counsel; connect 'labor' to 'wait'; extend it to a goal that required both effort and patience from you."
        }
      ]
    },

    ctob: {
      name: "Up and Doing",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The poem's central command is to act in the living ______. (one word)",
          evidence: ["The poem warns against trusting the future and dwelling on the past.", "It sets both against one single time when we should act.", "The word begins with 'pres…'."],
          hints: ["Not the past, not the future.", "Pres…", "The word is present."],
          answer: "present"
        },
        {
          type: "mc",
          prompt: "The image of hearts as 'muffled drums, / Beating funeral marches to the grave' mainly conveys —",
          options: [
            "that time is fleeting and mortality is always advancing.",
            "that the poem celebrates a military parade.",
            "that music is the poem's true subject.",
            "that the reader should feel joyful and carefree."
          ],
          hints: ["Think about where the drums are marching to.", "Which option connects the drums to time and death?"]
        },
        {
          type: "mc",
          prompt: "When the poem calls the world 'a broad field of battle' and urges 'Be a hero in the strife!' it is telling the reader to —",
          options: [
            "act with courage and purpose instead of being passively driven.",
            "avoid all effort and rest in comfort.",
            "follow the crowd wherever it goes.",
            "give up because life is a dream."
          ],
          hints: ["The line just before it warns against being 'dumb, driven cattle.'", "The poem contrasts a hero with animals that are merely driven along."]
        },
        {
          type: "digit",
          prompt: "How many four-line stanzas (quatrains) does the poem have? Enter the number.",
          evidence: ["The poem is built entirely from stanzas of four lines each.", "Count the stanzas from the opening rejection of the 'empty dream' to the closing 'labor and to wait.'", "It is one more than eight."],
          hints: ["Every stanza in this poem has four lines.", "There are more than eight and fewer than ten.", "The number is 9."],
          answer: "9"
        },
        {
          type: "sequence",
          prompt: "Put the poem's movements in the order they appear, earliest first.",
          items: [
            "Rejecting the claim that 'Life is but an empty dream.'",
            "Hearts like muffled drums marching to the grave.",
            "The command to 'Act,—act in the living Present!'",
            "Leaving 'footprints on the sands of time' and learning to labor and to wait."
          ],
          hints: ["The poem begins by answering a gloomy claim.", "The drums and mortality come before the central command to act.", "Footprints and the closing counsel come last."]
        },
        {
          type: "mc",
          prompt: "Throughout the poem, Longfellow builds his argument mainly by using antithesis. Which pairing is an example?",
          options: [
            "The 'dead Past' and 'the living Present.'",
            "A shepherd and a flock of sheep.",
            "A summer day and a winter night, with no point.",
            "Two words that rhyme at the ends of lines."
          ],
          hints: ["Antithesis sets two opposed ideas against each other.", "Look at the stanza that warns against the past and future and urges the present."]
        }
      ]
    },

    arcade: {
      name: "Despair or Action?",
      instruction: "\"A Psalm of Life\" argues by contrast: it names ideas it rejects and ideas it urges. Sort each line by what the poem does with it: is it something the poem REJECTS (despair / passivity), or something the poem URGES (action / hope)? Reasoning earns the points.",
      buckets: [
        { id: "reject", label: "What the poem rejects (despair / passivity)", short: "Rejects" },
        { id: "urge", label: "What the poem urges (action / hope)", short: "Urges" }
      ],
      cards: [
        { text: "'Life is but an empty dream.'", bucket: "reject", why: "The poem quotes this gloomy claim only to reject it." },
        { text: "Treating the grave as the goal of the soul.", bucket: "reject", why: "The poem answers 'dust to dust' by insisting the grave 'is not its goal.'" },
        { text: "Being 'like dumb, driven cattle.'", bucket: "reject", why: "The poem warns against passive, herd-like living." },
        { text: "Trusting the future, 'howe'er pleasant,' and letting the dead Past bury its dead.", bucket: "reject", why: "The poem rejects waiting on the future or dwelling on the past." },
        { text: "'Be a hero in the strife!'", bucket: "urge", why: "The poem calls the reader to courageous, purposeful action." },
        { text: "'Act,—act in the living Present!'", bucket: "urge", why: "The poem's central command is to act now." },
        { text: "Leaving 'footprints on the sands of time.'", bucket: "urge", why: "The poem urges a worthy legacy that may help others after us." },
        { text: "'Learn to labor and to wait.'", bucket: "urge", why: "The poem's closing counsel urges patient, active effort." }
      ],
      followup: "The poem's metaphors — muffled drums, a field of battle, footprints in the sand — do more than decorate the argument. Choose one and explain how it pushes the reader from despair toward action."
    },

    analysis: {
      mcq: [
        {
          q: "\"A Psalm of Life\" is best described as a —",
          options: [
            "didactic lyric that exhorts the reader to live actively.",
            "quiet nature poem with no argument.",
            "comic poem meant only to amuse.",
            "a dramatic play in several acts."
          ],
          why: "The poem directly urges the reader how to live, which makes it didactic and exhortative."
        },
        {
          q: "The line 'Life is but an empty dream' appears in the poem so that Longfellow can —",
          options: [
            "reject it and argue that life is real and earnest.",
            "agree with it and end on despair.",
            "describe an actual dream he had.",
            "praise sleep over waking life."
          ],
          why: "The poem quotes the gloomy claim only to answer it: 'Life is real! Life is earnest!'"
        },
        {
          q: "Calling the world 'a broad field of battle' and 'a bivouac of Life' is an example of —",
          options: [
            "metaphor that urges courageous action.",
            "a rhyme scheme.",
            "a factual report of a real war.",
            "a simile using 'like' or 'as.'"
          ],
          why: "The world is described as if it were a battlefield to press the reader to 'be a hero in the strife.'"
        },
        {
          q: "The stanza urging the reader to 'Act,—act in the living Present!' builds its force through antithesis by contrasting —",
          options: [
            "the dead past and pleasant future with the living present.",
            "a shepherd with a flock.",
            "one rhyme with another.",
            "morning with evening, for no reason."
          ],
          why: "The poem sets the past and future against the present to insist on acting now."
        },
        {
          q: "The image of 'footprints on the sands of time' mainly develops the theme of —",
          options: [
            "leaving a worthy legacy that can help others.",
            "the danger of walking on a beach.",
            "the beauty of ocean scenery.",
            "the passing of the seasons."
          ],
          why: "Great lives leave footprints that may cheer a later 'forlorn and shipwrecked brother' — a legacy for others."
        }
      ],
      short: [
        "Choose one image from the Field of Life. Explain what it shows and what it reveals about the poem's argument.",
        "The poem argues by antithesis — for example, the 'dead Past' set against the 'living Present.' Choose one such pairing and explain how the contrast strengthens the poem's message.",
        "Explain how the poem's regular quatrain form and marching meter suit its message. How does the sound of the poem support what it says?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"A Psalm of Life\" use metaphor to move the reader from despair toward action? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem argues about how to live, in your own words. Connect two images or contrasts that develop that argument. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"A Psalm of Life\" carries a big idea — act now and leave a worthy legacy — through vivid images like 'footprints on the sands of time.' Choose another poem, song, story, or speech that urges action or celebrates a lasting legacy. Explain the connection with evidence: what is the central image or message, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's exhortation-and-legacy message to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"A Psalm of Life\" argues that we should act in the present and leave a worthy legacy. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"A Psalm of Life.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in \"A Psalm of Life\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"A Psalm of Life\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect \"A Psalm of Life\"'s exhortation-and-legacy message to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"A Psalm of Life\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Henry Wadsworth Longfellow's \"A Psalm of Life\" (1838) as a didactic lyric — a study of exhortation, metaphor, allusion, antithesis, quatrain form, and marching meter. The poem is public domain, so the text can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"A Psalm of Life\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1838 and is in the public domain in the United States, so it may be used and quoted directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's exhortation, metaphors, and meter academically and neutrally, focusing on craft and argument, and follow your district's policy and community expectations.",
        "Details here were checked against the poem's text (the rejected claim 'Life is but an empty dream' answered by 'Life is real! Life is earnest!'; the grave that 'is not its goal' and the allusion to 'dust to dust'; hearts as 'muffled drums' beating 'funeral marches to the grave'; the world as 'a broad field of battle' and 'a bivouac of Life' with 'Be not like dumb, driven cattle! / Be a hero in the strife!'; 'Act,—act in the living Present!'; 'Footprints on the sands of time' and the 'forlorn and shipwrecked brother'; the closing 'Learn to labor and to wait'; nine quatrains rhymed ABAB). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English IV ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, and theme — especially metaphor, allusion, antithesis, and the effect of meter and stanza form. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
