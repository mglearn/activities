/* PlotPoint — Franklin D. Roosevelt, First Inaugural Address (March 4, 1933).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1933 address is a public-domain work of the U.S. government, so this
   room may reference it directly. FDR's First Inaugural is studied here as LITERATURE and
   RHETORIC — antithesis, extended metaphor, anaphora, allusion, tone, and argument — in a
   neutral, academic frame consistent with the Texas required literary-works list
   (19 TAC §110.70, English III / high school). The room paraphrases, quotes only brief
   public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "fdrinaugural",
  storageKey: "plotpoint.fdrinaugural.v1",

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
    "enter.readListenNote": "This 1933 address is a public-domain U.S. government work. Use your class's copy or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for FDR's First Inaugural",
    "vocab.intro": "{n} terms that unlock the speech. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Inaugural Platform",
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
    "ctob.title": "The Case for Confidence",
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
    "arcade.title": "Fear or Confidence?",
    "arcade.default": "Sort each line by the work it does in the speech.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Lines to sort",
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
    "extend.evidence": "The image from the speech I am building on",
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
    "print.item.relic": "Inaugural Platform evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Rhetorical-transfer organizer",
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
      title: "First Inaugural Address",
      author: "Franklin D. Roosevelt",
      grades: "English III",
      genre: "Speech · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole speech is discussed",
      rights: "Public domain (U.S. government work, 1933)",
      textAccess: "A public-domain speech; use your class's copy or any public-domain text.",
      copyright: "This 1933 address is a public-domain work of the U.S. government, so this room may reference it directly. It is studied here as literature and rhetoric — its antithesis, metaphor, anaphora, allusion, tone, and argument. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as rhetoric and literature — antithesis, extended metaphor, anaphora, allusion, tone, and argument — in a neutral, academic way, consistent with the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English III / high school). Implementation is scheduled no earlier than the 2030–2031 school year. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking FDR's 1933 First Inaugural — a speaker at a podium before a vast, anxious crowd during the Great Depression, with a resolute, steadying gesture."
    },
    hook: "March 4, 1933. Banks are failing, factories stand idle, and millions have lost their jobs and savings. A new president steps to the microphone and, before promising a single program, names the real enemy: not the Depression itself, but the fear it breeds. 'The only thing we have to fear is fear itself.' Read it as a speech, and watch how one line, one war metaphor, and a drumbeat of parallel phrases try to turn a frightened nation toward confidence and action.",
    goals: [
      "Understand FDR's First Inaugural as a persuasive speech that answers a national crisis of fear with a call to confidence and action.",
      "Analyze its key rhetorical devices — antithesis, the extended war metaphor, anaphora, and biblical allusion — and the feelings each one creates.",
      "Trace the speech's movement from an honest picture of the crisis, through the assignment of blame, to a resolute promise of united, decisive action.",
      "Interpret how word choice and tone build ethos and pathos — and why 'fear itself' has shaped American political language."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the rhetorical terms: antithesis, anaphora, allusion, and extended metaphor.",
        "Discuss: in a real emergency, how can a leader's words change what people are able to do?"
      ],
      during: [
        "Use the Inaugural Platform to slow down and read the speech move by move.",
        "Track the argument: name the crisis honestly, name the danger of fear, assign blame, then call the nation to action."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the speech's devices and structure.",
        "Complete the Extend task to carry the 'fear itself' idea, or the crisis-leadership rhetoric, to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what FDR means by 'the only thing we have to fear is fear itself.' Include one detail from the speech that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moves in the speech — for example, the honest picture of the crisis and the war metaphor. Explain how placing hard facts next to a call to action shapes the speech's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the speech's technique — steadying a frightened audience by naming fear and calling for united action — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "inaugural", def: "Marking the formal beginning of something, especially a president's term; an inaugural address is the speech given at that ceremony.", example: "A new president's first speech after taking the oath.", nonexample: "A farewell speech given on the last day in office.", context: "This is FDR's first inaugural address, delivered as he took office." },
      { term: "antithesis", def: "A contrast set up by placing opposite ideas close together in balanced wording.", example: "'The only thing we have to fear is fear itself.'", nonexample: "A plain sentence with no contrast, like 'It is Tuesday.'", context: "The famous line turns on an antithesis: fear against fear itself." },
      { term: "aphorism", def: "A short, memorable statement of a general truth or principle.", example: "'The only thing we have to fear is fear itself.'", nonexample: "A long, winding paragraph with no clear point.", context: "The line became an aphorism people still quote today." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling the Depression an enemy the nation must wage war against.", nonexample: "Saying something is 'like' another thing (that is a simile).", context: "FDR builds a war metaphor: the emergency is an enemy." },
      { term: "allusion", def: "A brief reference to a well-known text, person, or idea outside the speech.", example: "Calling the failed financiers 'the money changers' echoes a biblical scene.", nonexample: "Naming your own next paragraph.", context: "The 'money changers' phrase is a biblical allusion." },
      { term: "anaphora", def: "Repeating the same word or phrase at the start of successive lines or clauses.", example: "Beginning several statements with the same words for rhythm and emphasis.", nonexample: "Ending each sentence with a different word.", context: "The speech uses anaphora and parallelism to drive its points home." },
      { term: "tone", def: "The attitude a speaker's words express toward the subject and audience.", example: "A tone that is frank about the crisis yet reassuring and resolute.", nonexample: "A neutral list with no attitude at all.", context: "The speech balances an honest tone with a confident, steadying one." },
      { term: "theme", def: "The central idea or message a work explores.", example: "Overcoming fear with confidence and united action in a crisis.", nonexample: "A single unrelated fact mentioned once.", context: "The theme is meeting a national emergency with courage and action." },
      { term: "terror", def: "Intense, often unreasoning fear that can freeze people into inaction.", example: "The 'nameless, unreasoning' fear FDR says paralyzes needed efforts.", nonexample: "Calm, measured caution before a decision.", context: "FDR warns that terror paralyzes the effort a crisis demands." }
    ],

    relic: {
      name: "The Inaugural Platform",
      intro: "Seven instructional reconstructions of the key moves in the speech — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the speech, and what it reveals.",
      artifacts: [
        {
          id: "fear", name: "The Only Thing We Have to Fear Is Fear Itself", image: "images/fear.webp",
          clues: ["The speech's most famous line names the true enemy.", "It sets one kind of fear against fear itself — a balanced contrast.", "FDR calls it 'nameless, unreasoning, unjustified terror' that paralyzes effort."],
          identify: { q: "What does this famous line claim?", choices: ["The deepest danger is fear itself, which paralyzes needed action", "The Depression cannot be solved", "The government has no power to act", "The people are to blame for the crisis"] },
          purpose: { q: "What is this line's role in the speech?", choices: ["It is the central antithesis that frames the whole argument for confidence", "It ends the speech on a note of despair", "It lists the shepherd's tools", "It has no connection to the rest"] },
          significance: { q: "Why open by naming fear rather than the Depression?", choices: ["It says the crisis is solvable and that losing nerve is the real threat", "It admits the situation is hopeless", "It changes the subject away from the economy", "It blames the audience"] },
          reveals: "The controlling idea of the whole speech: confidence against fear.",
          conceals: "How much of the argument rides on this single reassuring antithesis.",
          ace: "Articulate the 'fear itself' line; connect it to why fear could 'paralyze' effort; extend it to why naming a feeling can change what people do."
        },
        {
          id: "crisis", name: "The Depression's Grim Facts", image: "images/crisis.webp",
          clues: ["FDR describes idle factories, farmers without markets, and families' savings gone.", "He does not hide the hardship or pretend the crisis is small.", "This honest picture comes before any promise of a solution."],
          identify: { q: "What does this part of the speech show?", choices: ["An honest picture of the crisis — idle industry, lost markets, and vanished savings", "A celebration of prosperity", "A description of a foreign war", "A list of the president's hobbies"] },
          purpose: { q: "Why describe the hardship so frankly?", choices: ["Honesty about the crisis builds trust and makes the call to action credible", "To frighten the nation into giving up", "To change the subject", "To praise the previous leaders"] },
          significance: { q: "What does the frank tone add to FDR's ethos?", choices: ["A leader who tells the truth about hard facts earns the right to ask for confidence", "It shows the leader is out of touch", "It proves the crisis is imaginary", "It undercuts everything that follows"] },
          reveals: "That confidence in the speech is built on honesty, not denial.",
          conceals: "How naming the pain first sets up the turn toward action.",
          ace: "Articulate what the grim facts show; connect the honesty to the call for confidence; extend it to why trust often begins with hard truth."
        },
        {
          id: "moneychangers", name: "The Money Changers", image: "images/moneychangers.webp",
          clues: ["FDR blames the collapse partly on the failed practices of 'the money changers.'", "The phrase echoes a well-known biblical scene of driving them out.", "It assigns responsibility for the crisis to reckless finance."],
          identify: { q: "Who are 'the money changers' in the speech?", choices: ["The reckless financiers FDR blames for the economic collapse", "The unemployed workers", "Foreign armies", "The nation's farmers"] },
          purpose: { q: "What kind of device is 'the money changers'?", choices: ["A biblical allusion that assigns blame with a familiar, charged image", "A literal head count of bankers", "A weather report", "A shepherd's tool"] },
          significance: { q: "Why use an allusion to assign blame?", choices: ["A familiar image makes the blame vivid, moral, and easy to grasp", "It hides who is responsible", "It softens the criticism into a joke", "It has no rhetorical effect"] },
          reveals: "How a brief allusion can carry a moral judgment in a few words.",
          conceals: "How much cultural weight the reference borrows from its source.",
          ace: "Articulate who the money changers are; connect the allusion to the blame it assigns; extend it to another time a familiar reference sharpened an argument."
        },
        {
          id: "work", name: "Putting People to Work", image: "images/work.webp",
          clues: ["FDR names putting people back to work as the greatest, most urgent task.", "It turns the speech from diagnosis toward a concrete goal.", "It answers the crisis of lost jobs directly."],
          identify: { q: "What does FDR call the greatest task?", choices: ["Putting people back to work", "Rewriting the Constitution", "Building a navy", "Lowering the flag"] },
          purpose: { q: "What part of the argument does this supply?", choices: ["A concrete goal — the crisis met with a clear, practical aim", "A reason to wait and do nothing", "A change of topic away from the economy", "A closing farewell"] },
          significance: { q: "Why name a single greatest task?", choices: ["Focusing on one urgent goal makes bold action feel possible and clear", "It proves the problem is too large", "It replaces action with talk", "It ends the speech"] },
          reveals: "The speech moving from naming the problem to naming the work.",
          conceals: "How a single, clear goal can organize a frightened nation's energy.",
          ace: "Articulate the greatest task; connect it to the crisis of lost jobs; extend it to why naming one clear goal can steady a group under stress."
        },
        {
          id: "warmetaphor", name: "The War Metaphor", image: "images/warmetaphor.webp",
          clues: ["FDR asks the nation to face the emergency as an army faces an enemy.", "He is willing, if needed, to wage a 'war against the emergency.'", "The metaphor runs through the call for discipline and, if needed, broad executive power."],
          identify: { q: "What comparison does the war metaphor make?", choices: ["Facing the Depression as a nation faces an enemy in war", "Comparing the economy to a garden", "Comparing the president to a shepherd", "Comparing Congress to a jury"] },
          purpose: { q: "What does casting the crisis as a war accomplish?", choices: ["It justifies urgency, unity, discipline, and, if needed, broad executive power", "It admits defeat", "It makes the crisis seem trivial", "It changes the subject to foreign policy"] },
          significance: { q: "Why is this an extended metaphor, not a single line?", choices: ["The war comparison is developed across several ideas — enemy, discipline, and power", "It is used once and dropped", "It is only a passing joke", "It contradicts the rest of the speech"] },
          reveals: "How a sustained metaphor can reframe a whole emergency.",
          conceals: "How the war framing sets up the request for extraordinary power.",
          ace: "Articulate the war metaphor; connect it to the call for unity and discipline; extend it to how a metaphor can change what an audience is willing to accept."
        },
        {
          id: "unity", name: "A Call for National Unity and Discipline", image: "images/unity.webp",
          clues: ["FDR asks the people to move together, as one, like a trained army.", "He calls for discipline and a willingness to sacrifice for the common good.", "Unity is presented as the condition for meeting the emergency."],
          identify: { q: "What does this call ask of the people?", choices: ["To act as one, with discipline and shared sacrifice", "To act each for themselves", "To leave the crisis to fate", "To distrust their neighbors"] },
          purpose: { q: "Why appeal to unity and discipline here?", choices: ["A united, disciplined people can carry out the bold action the crisis demands", "To divide the nation into groups", "To excuse inaction", "To praise the money changers"] },
          significance: { q: "How does the unity appeal work with the war metaphor?", choices: ["It extends the metaphor — a nation at war acts as one disciplined force", "It cancels the war metaphor", "It shifts to a private, personal tone", "It has no connection to the metaphor"] },
          reveals: "How pathos and the war framing combine into a call for solidarity.",
          conceals: "How much the plan depends on the audience choosing to act together.",
          ace: "Articulate the call for unity; connect it to the war metaphor; extend it to a time a group needed shared discipline to face a hard task."
        },
        {
          id: "action", name: "A Promise of Bold, Direct Action", image: "images/action.webp",
          clues: ["FDR pledges decisive, direct leadership to meet the crisis.", "He promises action — and action now — rather than delay.", "The tone is reassuring but resolute, closing the argument on confidence."],
          identify: { q: "What does FDR promise near the close?", choices: ["Bold, decisive, direct action to meet the emergency", "A long study before any decision", "A return to the old ways unchanged", "A quiet retreat from leadership"] },
          purpose: { q: "How does this promise answer the opening fear?", choices: ["Decisive action is the confident reply to 'fear itself'", "It confirms the nation should be afraid", "It abandons the argument", "It repeats the grim facts without hope"] },
          significance: { q: "What does the resolute-but-reassuring tone achieve?", choices: ["It models the confidence it asks the nation to feel", "It shows the leader is unsure", "It hides the plan", "It ends on despair"] },
          reveals: "How the speech closes the loop from fear to confident action.",
          conceals: "How tone itself can carry the argument's final claim.",
          ace: "Articulate the promise of action; connect it back to 'fear itself'; extend it to how a confident tone can shape what an audience believes is possible."
        }
      ]
    },

    ctob: {
      name: "The Case for Confidence",
      intro: "Six locks. Every answer is inferable from the speech and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In the famous line, the only thing we have to ______ is ______ itself. (one word, used twice)",
          evidence: ["It is the single most quoted word in the speech.", "FDR calls it 'nameless, unreasoning, unjustified terror.'", "The word is 'fear.'"],
          hints: ["The emotion that can paralyze needed effort.", "Terror is a stronger form of this feeling.", "The word is fear."],
          answer: "fear"
        },
        {
          type: "mc",
          prompt: "The honest picture of idle factories, lost markets, and vanished savings mainly serves to —",
          options: [
            "tell the truth about the crisis so the call to action can be trusted.",
            "prove the Depression cannot be solved.",
            "celebrate the nation's prosperity.",
            "change the subject to foreign affairs."
          ],
          hints: ["Notice that the frank description comes before any solution.", "Which option matches a leader building trust by facing hard facts?"]
        },
        {
          type: "mc",
          prompt: "Calling the failed financiers 'the money changers' works in the speech as —",
          options: [
            "a biblical allusion that assigns moral blame for the collapse.",
            "a literal count of the nation's banks.",
            "a description of a shepherd's tools.",
            "a promise of new jobs."
          ],
          hints: ["The phrase echoes a well-known biblical scene.", "It is a reference that borrows a charged, familiar image to assign blame."]
        },
        {
          type: "digit",
          prompt: "This is Franklin D. Roosevelt's ______ inaugural address. Enter the number.",
          evidence: ["The room and title both call it his 'First Inaugural Address.'", "It was delivered as he took office for the very first time, in 1933.", "The ordinal 'first' corresponds to this number."],
          hints: ["The title says 'First Inaugural Address.'", "'First' as a number.", "The number is 1."],
          answer: "1"
        },
        {
          type: "sequence",
          prompt: "Put the speech's main moves in the order they appear, earliest first.",
          items: [
            "Name the real enemy: fear itself.",
            "Describe the crisis honestly — idle industry and lost savings.",
            "Assign blame to the 'money changers.'",
            "Call the nation to bold, united action against the emergency."
          ],
          hints: ["The speech opens by naming fear.", "Blame comes after the honest picture of hardship.", "The call to united action drives toward the close."]
        },
        {
          type: "mc",
          prompt: "FDR frames the fight against the Depression using an extended metaphor of —",
          options: [
            "war — facing the emergency as a nation faces an enemy.",
            "a garden that needs watering.",
            "a courtroom trial with a jury.",
            "a long ocean voyage for pleasure."
          ],
          hints: ["He speaks of discipline, unity, and, if needed, broad power to act.", "He is willing to wage a 'war against the emergency.'"]
        }
      ]
    },

    arcade: {
      name: "Fear or Confidence?",
      instruction: "FDR's speech names a crisis of fear and answers it with a call to confidence and action. Sort each line by the work it does: does it mainly NAME THE CRISIS or the DANGER OF FEAR, or does it CALL FOR ACTION & CONFIDENCE? Reasoning earns the points.",
      buckets: [
        { id: "crisis", label: "Naming the crisis / the danger of fear", short: "Crisis / fear" },
        { id: "action", label: "The call to action / confidence", short: "Action / confidence" }
      ],
      cards: [
        { text: "'Nameless, unreasoning, unjustified terror' that paralyzes effort.", bucket: "crisis", why: "It names fear itself as the deeper danger." },
        { text: "Idle factories and farmers who cannot sell their crops.", bucket: "crisis", why: "An honest picture of the economic crisis." },
        { text: "Families' savings gone and workers without jobs.", bucket: "crisis", why: "The hardship the speech faces frankly." },
        { text: "The failed practices of the 'money changers.'", bucket: "crisis", why: "Blame for the collapse — part of naming the crisis." },
        { text: "'The only thing we have to fear is fear itself.'", bucket: "action", why: "It reframes fear so the nation can move toward confidence." },
        { text: "Putting people back to work as the greatest task.", bucket: "action", why: "A concrete goal — the crisis met with action." },
        { text: "Facing the emergency as a nation faces an enemy in war.", bucket: "action", why: "The war metaphor mobilizes the nation to act." },
        { text: "A call for national unity, discipline, and bold, direct action.", bucket: "action", why: "The resolute appeal to confidence and united effort." }
      ],
      followup: "The speech names fear and hardship honestly, then turns hard toward action and confidence. What does that structure — crisis first, confidence second — suggest about how FDR believed a leader should steady a frightened nation?"
    },

    analysis: {
      mcq: [
        {
          q: "The most famous line of the speech claims that the deepest danger is —",
          options: [
            "fear itself, which paralyzes the action the crisis demands.",
            "the size of the national debt.",
            "a foreign army about to invade.",
            "the weather on inauguration day."
          ],
          why: "FDR opens by naming 'fear itself' as the true enemy that freezes needed effort."
        },
        {
          q: "FDR describes idle factories and vanished savings mainly to —",
          options: [
            "tell the truth about the crisis and earn the trust to ask for confidence.",
            "prove the situation is hopeless.",
            "praise the previous administration.",
            "change the subject to foreign policy."
          ],
          why: "The frank picture of hardship builds ethos before the turn toward action."
        },
        {
          q: "Calling the failed financiers 'the money changers' is an example of —",
          options: [
            "biblical allusion used to assign blame.",
            "a simile comparing banks to gardens.",
            "a literal statistic about the economy.",
            "a rhyme scheme."
          ],
          why: "The phrase borrows a charged biblical image to place moral blame for the collapse."
        },
        {
          q: "FDR's repeated framing of the Depression as an enemy to be fought is an example of —",
          options: [
            "an extended war metaphor.",
            "a single passing simile.",
            "understatement.",
            "a change of topic."
          ],
          why: "The war comparison is developed across the call for unity, discipline, and bold power."
        },
        {
          q: "The overall tone of the speech is best described as —",
          options: [
            "frank about the crisis yet reassuring and resolute.",
            "playful and lighthearted.",
            "bitter and hopeless.",
            "cold and indifferent."
          ],
          why: "FDR faces the hard facts honestly while steadily projecting confidence and resolve."
        }
      ],
      short: [
        "Choose one move from the Inaugural Platform. Explain what it shows and what it reveals about the speech's argument.",
        "The speech names hardship honestly, then turns to a call for action. Explain what this crisis-then-confidence structure suggests about how FDR wanted the nation to respond.",
        "Explain how the war metaphor works. How does casting the Depression as an enemy change what FDR can ask of the nation?"
      ],
      paragraph: "Write an evidence-based paragraph. How does FDR's First Inaugural use rhetoric — antithesis, the war metaphor, allusion, or tone — to turn a frightened nation toward confidence and action? Make a claim and support it with specific details from the speech.",
      aceReflection: "Articulate what the speech suggests about facing fear in your own words. Connect two rhetorical moves that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Speech, One Answer to Fear",
      prompt: "FDR meets a frightened nation by naming fear itself and calling for united, decisive action. Choose another speech, essay, song, or story that answers fear or crisis in a similar way. Explain the connection with evidence: what is the shared move (naming fear, a rallying metaphor, a call to unity), what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the speech's crisis-leadership rhetoric to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how FDR's First Inaugural uses the line 'the only thing we have to fear is fear itself' to steady a frightened nation. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying FDR's First Inaugural Address. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [move one] connects to [move two] in FDR's First Inaugural because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the speech." },
      { title: "Evidence prompt", text: "Here is my claim about FDR's First Inaugural: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect FDR's crisis-leadership rhetoric to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of FDR's First Inaugural for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Franklin D. Roosevelt's First Inaugural Address (1933) as persuasive rhetoric — a study of antithesis, the extended war metaphor, anaphora, biblical allusion, tone, and argument. The address is a public-domain U.S. government work, so it can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature and rhetoric in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "FDR's First Inaugural appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The address is a public-domain work of the U.S. government (1933), so it satisfies the identical-text requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric and literature. Present the speech's devices — antithesis, the extended war metaphor, anaphora, biblical allusion ('the money changers'), tone, and argument — academically and neutrally, and follow your district's policy and community expectations.",
        "Anchors here were checked against the address (the 'fear itself' antithesis and 'nameless, unreasoning, unjustified terror'; the honest picture of idle industry and lost savings; the 'money changers' allusion; putting people to work as the greatest task; the war metaphor and the request for broad power if needed; the call for national unity and discipline; the resolute, reassuring tone). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on rhetorical devices, argument, author's purpose, tone, and figurative language — especially antithesis, extended metaphor, anaphora, and allusion. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.4", "RI.11-12.5", "RI.11-12.6", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
