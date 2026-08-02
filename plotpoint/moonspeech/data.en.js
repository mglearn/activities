/* PlotPoint — John F. Kennedy, "We Choose to Go to the Moon," Rice University, Houston,
   September 12, 1962.  PUBLIC DOMAIN (U.S. government work).
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1962 address is a work of the U.S. federal government and is in
   the public domain, so this room may reference and quote it directly. It is studied here
   as LITERATURE and RHETORIC — antithesis, anaphora, analogy, appeals, and structure — in
   a neutral, academic frame consistent with the Texas required literary-works list
   (19 TAC §110.70, English III / high school). The room paraphrases and quotes only brief
   public-domain phrases where a close reading needs them. Standards are good-faith
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every choices/options array;
   the engine shuffles. */
window.__ROOM__ = {
  id: "moonspeech",
  storageKey: "plotpoint.moonspeech.v1",

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

    "nav.enter": "Enter the Speech", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Speech",
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
    "enter.readListenNote": "This 1962 address is a U.S. government work in the public domain. Use your class's copy or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Moon Speech",
    "vocab.intro": "{n} terms that unlock the speech. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Launchpad of Ideas",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the speech",
    "relic.q.significance": "What it reveals about the speech's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Path to the Moon",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the speech closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Hard or Worth It?",
    "arcade.default": "Sort each statement by the case it makes in the speech.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
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
    "extend.evidence": "The idea from the speech I am building on",
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
    "print.item.relic": "Launchpad of Ideas evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Hard-goal transfer organizer",
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
      title: "We Choose to Go to the Moon",
      author: "John F. Kennedy",
      grades: "English III",
      genre: "Speech · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole speech is discussed",
      rights: "Public domain (U.S. government work, 1962)",
      textAccess: "A public-domain speech; use your class's copy or any public-domain text.",
      copyright: "This 1962 address is a work of the U.S. federal government and is in the public domain, so this room may reference and quote it directly. It is studied here as literature and rhetoric — its antithesis, anaphora, analogy, and appeals. The room paraphrases and quotes only brief public-domain phrases where a close reading needs them.",
      contentNote: "Presented as rhetoric and literature — antithesis, anaphora, analogy, appeals, and structure — in a neutral, academic way, consistent with the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school). Implementation is scheduled no earlier than the 2030–2031 school year. Because this is a public-domain U.S. government work, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Kennedy's 1962 moon speech — a crowded stadium at Rice University under an open sky, a podium with a presidential seal, and a distant full moon above the Texas horizon."
    },
    hook: "One nation, one hard goal, one deadline: land a man on the Moon and return him safely to Earth before the decade is out. In September 1962, standing in a Houston stadium, President Kennedy had to convince a country to spend enormous effort on something nobody knew how to do. Read the speech as a piece of rhetoric, and watch how he turns difficulty itself into the reason to try — 'not because they are easy, but because they are hard.'",
    goals: [
      "Understand the speech as an argument for choosing a hard, ambitious national goal — reaching the Moon before the decade is out.",
      "Analyze Kennedy's rhetorical devices — antithesis, anaphora, analogy, and rhetorical questions — and the effect each creates.",
      "Trace how appeals to national pride, courage, and progress (ethos and pathos) build the case for accepting cost and risk.",
      "Interpret the theme that a nation should choose difficult, worthy goals precisely because they test and measure its best — and why this speech still shapes how we talk about ambition."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the rhetorical terms antithesis, anaphora, and analogy.",
        "Discuss: why might a leader argue for a goal *because* it is hard, rather than in spite of it?"
      ],
      during: [
        "Use the Launchpad of Ideas to slow down and read the speech move by move.",
        "Track the argument: from the frontier of space, through the honest cost, to the choice made 'because they are hard.'"
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the devices and the structure of the argument.",
        "Complete the Extend task to transfer the choose-the-hard-goal idea to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main argument of the speech — why Kennedy says the nation should go to the Moon. Include one line or image from the speech that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two rhetorical moves in the speech — for example the antithesis 'not because they are easy, but because they are hard' and the mountain-climbing analogy. Explain how they work together to justify a hard goal." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the speech's core idea — choosing a hard goal because it measures your best — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "antithesis", def: "A device that sets two opposite ideas against each other in a balanced structure.", example: "'Not because they are easy, but because they are hard.'", nonexample: "A plain list of similar items with no contrast.", context: "The speech's most famous line is built on antithesis." },
      { term: "anaphora", def: "Repeating the same words at the start of successive phrases or sentences for emphasis.", example: "'We choose to go to the Moon… We choose to go to the Moon…'", nonexample: "Using a different opening for every sentence.", context: "Kennedy uses anaphora to hammer home the choice." },
      { term: "analogy", def: "A comparison that explains one thing by likening it to another more familiar thing.", example: "Attempting the Moon compared to climbing the highest mountain.", nonexample: "A statement with no comparison at all.", context: "The speech answers 'why go?' with an analogy about mountains." },
      { term: "rhetorical question", def: "A question asked for effect, not to get an answer, to make the audience think.", example: "'Why climb the highest mountain?'", nonexample: "A question the speaker truly expects someone to answer aloud.", context: "Kennedy raises rhetorical questions, then answers them himself." },
      { term: "rhetoric", def: "The art of using language to persuade or influence an audience.", example: "Studying how a speech convinces its listeners.", nonexample: "A private diary entry meant for no audience.", context: "This speech is a landmark of American political rhetoric." },
      { term: "tone", def: "The attitude a speaker takes toward the subject and audience.", example: "A confident, hopeful tone about a hard challenge.", nonexample: "The literal facts a sentence reports.", context: "The tone is bold and hopeful even while admitting the difficulty." },
      { term: "theme", def: "The central idea or message a text explores.", example: "Choosing hard goals because they test a nation's best.", nonexample: "A single vocabulary word with no larger meaning.", context: "The speech's theme is ambition worth its difficulty." },
      { term: "frontier", def: "The edge of the known or settled world — a place of new challenge and exploration.", example: "Kennedy calls space a new frontier to be explored.", nonexample: "A well-mapped, long-settled place with nothing new to discover.", context: "Space is framed as a frontier America should lead." },
      { term: "endeavor", def: "A serious, sustained effort toward an ambitious goal.", example: "The space program as a national endeavor.", nonexample: "A quick, effortless task done without trying.", context: "Reaching the Moon is described as a great endeavor." }
    ],

    relic: {
      name: "The Launchpad of Ideas",
      intro: "Seven instructional reconstructions of the key moves in the speech — teaching recreations, not archival footage. Investigate what each idea is, its role in the argument, and what it reveals about Kennedy's rhetoric.",
      artifacts: [
        {
          id: "choose", name: "\"We Choose to Go to the Moon\"", image: "images/choose.webp",
          clues: ["This repeated line names the bold national goal at the heart of the speech.", "The word 'choose' frames the Moon as a decision, not an accident.", "The same phrase returns again and again for emphasis."],
          identify: { q: "What does this repeated line announce?", choices: ["The deliberate national goal to reach the Moon", "A warning against space travel", "A description of a past achievement", "A request for more taxes"] },
          purpose: { q: "What is the repetition of 'We choose' doing?", choices: ["Using anaphora to stress that this is a chosen, willed decision", "Filling time with meaningless words", "Quoting an earlier president", "Listing scientific data"] },
          significance: { q: "Why insist on the word 'choose'?", choices: ["It casts the effort as a free act of national will, not something forced", "It shows the goal is easy", "It blames another country", "It cancels the plan"] },
          reveals: "The speech's central claim, framed as a chosen goal.",
          conceals: "How the repeated phrasing (anaphora) drives the whole argument.",
          ace: "Articulate what 'we choose' claims; connect it to the idea of national will; extend it to why framing a goal as a choice changes how we hear it."
        },
        {
          id: "hard", name: "\"Not Because They Are Easy, but Because They Are Hard\"", image: "images/hard.webp",
          clues: ["This line sets 'easy' directly against 'hard' in a balanced structure.", "It gives the surprising reason for choosing the Moon.", "Kennedy says the goal 'will serve to organize and measure the best of our energies and skills.'"],
          identify: { q: "What kind of rhetorical device is this line?", choices: ["Antithesis — two opposite ideas balanced against each other", "A simple factual report", "A rhyming couplet", "A quotation from a poem"] },
          purpose: { q: "Why choose the goal 'because they are hard'?", choices: ["The difficulty is what will organize and measure the nation's best", "Because hard things are cheaper", "Because no effort is required", "To discourage the audience"] },
          significance: { q: "What does turning 'hard' into a reason accomplish?", choices: ["It reframes difficulty as the very point, not an obstacle", "It admits the plan should be abandoned", "It hides the real cost", "It changes the subject"] },
          reveals: "The famous antithesis that makes difficulty the reason to try.",
          conceals: "How a balanced opposition can flip an objection into a motive.",
          ace: "Articulate the antithesis; connect it to the reason Kennedy gives; extend it to a time difficulty made a goal more worth pursuing."
        },
        {
          id: "frontier", name: "The New Frontier of Space", image: "images/frontier.webp",
          clues: ["Kennedy pictures space as the next great challenge to be explored.", "He argues America should lead this frontier rather than cede it to others.", "'Frontier' calls up exploration, courage, and moving into the unknown."],
          identify: { q: "How does the speech frame space?", choices: ["As a new frontier for exploration and leadership", "As a place to avoid", "As already fully explored", "As a threat with no benefit"] },
          purpose: { q: "Why call space a 'frontier'?", choices: ["The word links space to a proud tradition of exploration and courage", "It makes space sound boring", "It suggests space is off-limits", "It has no rhetorical purpose"] },
          significance: { q: "What does 'leading' the frontier appeal to?", choices: ["National pride and the will to lead rather than follow", "A wish to stay behind", "Fear of all progress", "Indifference to the future"] },
          reveals: "Space cast as a frontier America should lead.",
          conceals: "How a single word ('frontier') carries a whole set of values.",
          ace: "Articulate the frontier image; connect it to national pride; extend it to another 'frontier' a group has chosen to lead."
        },
        {
          id: "history", name: "The Compressed History of Progress", image: "images/history.webp",
          clues: ["Kennedy compresses long stretches of human history into a short span to dramatize change.", "The device shows how fast human advancement is now accelerating.", "It makes reaching the Moon feel like the natural next step."],
          identify: { q: "What does compressing human history do?", choices: ["It dramatizes how quickly human progress is accelerating", "It proves the Moon is unreachable", "It lists the presidents in order", "It describes a single year in detail"] },
          purpose: { q: "Why speed up history in the speech?", choices: ["To make bold new achievement feel like the next natural step", "To slow the audience down", "To confuse the timeline", "To avoid the topic of space"] },
          significance: { q: "What feeling does this acceleration create?", choices: ["Urgency and momentum — progress is coming fast, so lead it", "Calm and stillness", "Regret about the past", "Boredom with change"] },
          reveals: "A dramatized sense that progress is accelerating.",
          conceals: "How reframing time can make a huge goal feel inevitable.",
          ace: "Articulate the compressed-history move; connect it to urgency; extend it to another argument that uses the speed of change."
        },
        {
          id: "mountain", name: "\"Why Climb the Highest Mountain?\"", image: "images/mountain.webp",
          clues: ["Kennedy answers 'why attempt this?' with a mountaineer's logic.", "The comparison recalls being asked why climb the highest mountain — 'because it is there.'", "It is a rhetorical question answered by an analogy."],
          identify: { q: "How does Kennedy justify attempting something so hard?", choices: ["With an analogy to climbing the highest mountain", "By promising it will be easy", "By refusing to explain", "By citing a law"] },
          purpose: { q: "What does the mountain analogy accomplish?", choices: ["It makes a vast, abstract goal feel familiar and worth doing", "It warns against exploration", "It proves the Moon is pointless", "It changes the subject to sports"] },
          significance: { q: "Why answer a rhetorical question with an analogy?", choices: ["It invites the audience to supply the shared value of meeting a challenge", "It hides the argument", "It avoids persuasion", "It insults the listener"] },
          reveals: "A rhetorical question answered by a familiar analogy.",
          conceals: "How analogy carries an argument without stating it outright.",
          ace: "Articulate the mountain analogy; connect it to the question it answers; extend it to a challenge people take on simply because it is there."
        },
        {
          id: "cost", name: "The Cost and Difficulty Acknowledged", image: "images/cost.webp",
          clues: ["Kennedy does not hide the enormous cost and difficulty of the goal.", "He admits the effort is expensive and unproven.", "By naming the hardship honestly, he strengthens his credibility."],
          identify: { q: "How does the speech treat the cost of going to the Moon?", choices: ["It openly acknowledges the great cost and difficulty", "It claims there is no cost", "It ignores the subject entirely", "It says the goal is cheap and simple"] },
          purpose: { q: "Why admit the cost so directly?", choices: ["Honesty builds ethos — the audience trusts a speaker who names the hard truth", "To scare people away from the plan", "To hide the benefits", "Because he opposes the goal"] },
          significance: { q: "What does naming the difficulty set up?", choices: ["It makes the choice to proceed anyway more courageous and persuasive", "It cancels the argument", "It ends the speech", "It removes all risk"] },
          reveals: "An honest reckoning with cost that strengthens credibility.",
          conceals: "How admitting difficulty can make an argument more, not less, persuasive.",
          ace: "Articulate how the speech treats cost; connect honesty to trust; extend it to a time admitting difficulty made an argument stronger."
        },
        {
          id: "will", name: "A Test of National Energy and Will", image: "images/will.webp",
          clues: ["Kennedy casts the effort as a measure of the nation's courage, skill, and will.", "The goal 'will serve to organize and measure the best of our energies and skills.'", "The whole endeavor becomes a test the nation chooses to meet."],
          identify: { q: "What does Kennedy say the effort will measure?", choices: ["The best of the nation's energies, skills, and will", "The nation's wealth alone", "A single scientist's work", "The failures of the past"] },
          purpose: { q: "Why frame the Moon goal as a test of will?", choices: ["It turns a technical project into a matter of national character", "It makes the goal seem trivial", "It shifts blame elsewhere", "It ends the argument early"] },
          significance: { q: "What appeal does 'a test of will' rely on?", choices: ["Pride and courage — pathos and ethos combined", "Fear of the audience", "Pure statistics", "Indifference"] },
          reveals: "The endeavor framed as a measure of national character.",
          conceals: "How the argument's climax appeals to pride and courage together.",
          ace: "Articulate what the effort is said to measure; connect it to pride and courage; extend it to a goal that tested a group's best."
        }
      ]
    },

    ctob: {
      name: "The Path to the Moon",
      intro: "Six locks. Every answer is inferable from the speech and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The speech's most famous line says the nation goes to the Moon not because it is easy, but because it is ______. (one word)",
          evidence: ["This word is set against 'easy' in a balanced antithesis.", "The difficulty is exactly the reason Kennedy gives.", "The word begins with 'ha…'."],
          hints: ["The opposite of 'easy.'", "Ha…", "The word is hard."],
          answer: "hard"
        },
        {
          type: "mc",
          prompt: "The line 'not because they are easy, but because they are hard' is an example of —",
          options: [
            "antithesis — two opposite ideas balanced against each other.",
            "a simile comparing two like things.",
            "a rhyme scheme.",
            "a factual statistic."
          ],
          hints: ["Notice the balanced pair of opposites: easy vs. hard.", "Which term names setting opposites against each other?"]
        },
        {
          type: "mc",
          prompt: "Kennedy frames outer space in the speech mainly as —",
          options: [
            "a new frontier that America should explore and lead.",
            "a settled place with nothing left to discover.",
            "a danger the nation should retreat from.",
            "a purely private business venture."
          ],
          hints: ["Think about the word that links space to exploration and courage.", "He argues the nation should lead, not follow."]
        },
        {
          type: "digit",
          prompt: "Kennedy sets the goal of reaching the Moon before 'this decade is out.' A decade is how many years? Enter the number.",
          evidence: ["A decade means ten years.", "The goal is to land on the Moon before the decade (the 1960s) is over.", "Ten years — that is the meaning of a decade."],
          hints: ["A decade equals ten years.", "One decade = 10.", "The number is 10."],
          answer: "10"
        },
        {
          type: "sequence",
          prompt: "Put these rhetorical moves in the order Kennedy's argument tends to build them, first to last.",
          items: [
            "Frame space as a new frontier the nation should lead.",
            "Compress human history to show progress accelerating.",
            "Acknowledge the enormous cost and difficulty honestly.",
            "Declare the choice 'because they are hard' as a test of national will."
          ],
          hints: ["He opens by casting space as a frontier.", "The honest cost comes before the ringing conclusion.", "The 'because they are hard' choice is the climax."]
        },
        {
          type: "mc",
          prompt: "When Kennedy asks a question like 'Why climb the highest mountain?' and then answers it himself, he is using —",
          options: [
            "a rhetorical question paired with an analogy.",
            "a literal question expecting a spoken answer.",
            "a definition of a scientific term.",
            "a direct quotation of an opponent."
          ],
          hints: ["He does not expect the audience to shout back an answer.", "He compares the Moon effort to climbing a mountain."]
        }
      ]
    },

    arcade: {
      name: "Hard or Worth It?",
      instruction: "Kennedy admits the Moon goal is enormously hard, then argues it is worth pursuing anyway. Sort each statement: is it a REASON THE GOAL IS HARD OR COSTLY, or a REASON TO PURSUE IT ANYWAY? Reasoning earns the points.",
      buckets: [
        { id: "hard", label: "Reasons the goal is hard or costly", short: "Hard/Costly" },
        { id: "worth", label: "Reasons to pursue it anyway", short: "Worth It" }
      ],
      cards: [
        { text: "The effort will require enormous amounts of money.", bucket: "hard", why: "Kennedy openly names the great cost of the program." },
        { text: "No one yet knows how to reach the Moon and return safely.", bucket: "hard", why: "The goal is unproven and technically difficult." },
        { text: "The challenge demands new skills the nation has not yet mastered.", bucket: "hard", why: "The difficulty lies in doing what has never been done." },
        { text: "The deadline — before the decade is out — leaves little time.", bucket: "hard", why: "A tight timeline adds to the difficulty and cost." },
        { text: "The goal will organize and measure the best of the nation's energies and skills.", bucket: "worth", why: "Kennedy's stated reason: difficulty measures a nation's best." },
        { text: "America should lead the new frontier of space rather than cede it.", bucket: "worth", why: "National leadership on the frontier is a reason to pursue it." },
        { text: "Meeting a great challenge tests and proves national courage and will.", bucket: "worth", why: "The effort becomes a test of character worth accepting." },
        { text: "Human progress is accelerating, and this is the next natural step.", bucket: "worth", why: "The momentum of progress argues for taking the step now." }
      ],
      followup: "Kennedy places the hardship and the payoff side by side — the cost is real, yet the difficulty itself becomes the reason to go. What does that pairing suggest about the kind of goals he believes a nation should choose?"
    },

    analysis: {
      mcq: [
        {
          q: "The central argument of the speech is that the nation should go to the Moon —",
          options: [
            "because the goal is hard and will measure the best of its energies and skills.",
            "because the goal is easy and requires little effort.",
            "because another nation ordered it to.",
            "because the trip will be inexpensive."
          ],
          why: "Kennedy's famous line makes difficulty itself the reason, tied to organizing and measuring the nation's best."
        },
        {
          q: "'Not because they are easy, but because they are hard' is a clear example of —",
          options: [
            "antithesis.",
            "simile.",
            "onomatopoeia.",
            "alliteration."
          ],
          why: "The line balances two opposite ideas — easy and hard — against each other."
        },
        {
          q: "By repeating 'We choose to go to the Moon,' Kennedy mainly creates —",
          options: [
            "emphasis and momentum through anaphora.",
            "a rhyme scheme.",
            "a scientific definition.",
            "a change of topic."
          ],
          why: "Repeating the opening words of successive statements is anaphora, which builds emphasis."
        },
        {
          q: "When Kennedy openly admits the enormous cost and difficulty of the goal, the main effect is to —",
          options: [
            "build credibility by facing the hard truth honestly.",
            "prove the goal should be abandoned.",
            "hide the risks from the audience.",
            "change the subject to something easier."
          ],
          why: "Acknowledging difficulty strengthens ethos — the audience trusts a speaker who names the hard truth."
        },
        {
          q: "Comparing the Moon effort to climbing the highest mountain is an example of —",
          options: [
            "analogy.",
            "a statistic.",
            "a stage direction.",
            "a footnote."
          ],
          why: "The comparison explains an unfamiliar goal by likening it to a familiar challenge — an analogy."
        }
      ],
      short: [
        "Choose one move from the Launchpad of Ideas. Explain what it shows and what it reveals about the speech's argument.",
        "Kennedy sets a reason the goal is hard right next to a reason to pursue it anyway. Explain what this pairing suggests about the kind of goals he believes are worth choosing.",
        "Explain how the antithesis 'not because they are easy, but because they are hard' works. How does turning difficulty into a reason change the feeling of the argument?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Kennedy use rhetorical devices — such as antithesis, anaphora, or analogy — to persuade the nation to accept a hard, costly goal? Make a claim and support it with specific lines or moves from the speech.",
      aceReflection: "Articulate what the speech suggests about choosing hard goals in your own words. Connect two rhetorical moves that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Hard-Goal Challenge",
      prompt: "Kennedy argues for a goal precisely because it is hard — the difficulty is what makes it worth choosing. Find another speech, essay, story, or real situation that makes a similar case (choosing a hard, worthy goal, or framing a challenge as a frontier to lead). Explain the connection with evidence: what is the hard goal, how is it justified, and where does the comparison to Kennedy's argument start to break down?",
      format: "A short evidence-based comparison connecting the speech's 'choose it because it's hard' argument to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Kennedy's moon speech argues for a hard goal 'because it is hard.' Do not answer for me. Ask me one question at a time that helps me explain the argument in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Kennedy's moon speech. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [device one] connects to [device two] in the moon speech because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the speech." },
      { title: "Evidence prompt", text: "Here is my claim about the moon speech: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the moon speech's 'choose it because it's hard' argument to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Kennedy's moon speech for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of John F. Kennedy's 'We Choose to Go to the Moon' (Rice University, September 12, 1962) as rhetoric and literature — a study of antithesis, anaphora, analogy, rhetorical questions, appeals, and structure. As a U.S. government work, the speech is in the public domain, so the state-specified text can be referenced directly and this room reproduces no copyrighted edition. It is presented neutrally and academically. Every student response stays on the device.",
      reviewNotes: [
        "This speech appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The text is a work of the U.S. federal government (1962) and is in the public domain — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric and literature. Foreground the rhetorical devices — antithesis ('not because they are easy, but because they are hard'), anaphora ('We choose to go to the Moon…'), analogy (climbing the highest mountain; the new frontier), rhetorical questions, and appeals to pride and courage (ethos/pathos) — presented academically and neutrally.",
        "Fact-check the historical anchors against a reliable public-domain copy: the Rice University setting (Houston, September 12, 1962); the goal to reach the Moon before 'this decade is out'; the antithesis about easy vs. hard; the mountain-climbing analogy; and the framing of space as a new frontier. Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your English III course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on rhetorical devices, author's purpose and craft, argument, and theme — especially antithesis, anaphora, analogy, and appeals. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.5", "RI.11-12.6", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
