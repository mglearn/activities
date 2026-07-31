/* PlotPoint — The Allegory of the Cave (Plato, Republic Book VII).  English source.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   features of Plato's allegory. Standards are real, applicable Common Core codes
   flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "cave",
  storageKey: "plotpoint.cave.v1",

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

    "nav.enter": "Enter the Story", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Story",
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
    "enter.readListen": "Read & Listen — free",
    "enter.readListenTitle": "Get the full text and audio",
    "enter.readListenNote": "The allegory is in Book VII of Plato's Republic, which is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Allegory of the Cave",
    "vocab.intro": "{n} terms that unlock the allegory. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Inside the Cave",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this in the allegory?",
    "relic.q.purpose": "Explain its role in the allegory",
    "relic.q.significance": "What it symbolizes",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this part of the allegory shows, connect it to Plato's meaning, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Shadows on the Wall",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. The case is solved — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Out of the Cave",
    "arcade.default": "Sort each item by where it belongs in the allegory.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Items to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary & Philosophical Analysis",
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
    "extend.title": "Find a Modern Cave",
    "extend.format": "Format",
    "extend.evidence": "The part of the allegory I am building on",
    "extend.transfers": "What transfers to my modern example",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern 'cave'",
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
    "print.item.relic": "Allegory evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Modern-cave organizer",
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
    "path.complete": "Complete Case", "path.complete.time": "60–90 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "The Allegory of the Cave",
      author: "Plato",
      grades: "Grades 9–12",
      genre: "Philosophy · Allegory",
      time: "30–45 minutes",
      spoiler: "No spoilers",
      rights: "Ancient Greek original and classic translations are public domain",
      textAccess: "The allegory appears in Book VII of Plato's Republic. Students need a public-domain translation (for example, Benjamin Jowett's). This room does not reproduce the text.",
      copyright: "The Greek original and older translations (such as Jowett's) are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "An abstract philosophical allegory. Preview for reading level and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1497",
      audio: "https://librivox.org/platos_republic/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Plato's cave — shadows, firelight, and a distant opening."
    },
    hook: "Imagine people who have spent their whole lives chained in a cave, seeing only shadows on a wall — and believing those shadows are the whole world. Plato uses this scene to ask what education, truth, and reality really are.",
    goals: [
      "Reconstruct the allegory's setting: the prisoners, the fire, the shadows, and the world outside.",
      "Interpret what each part of the allegory symbolizes in Plato's argument.",
      "Analyze the allegory's claim that education is a hard climb from appearances to truth.",
      "Transfer the allegory to a modern 'cave' where people mistake appearances for reality."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an allegory (a story that stands for something else).",
        "Discuss: How do we know what is real? Could what we see be only part of the picture?"
      ],
      during: [
        "Use the Relic Room to examine one part of the cave at a time.",
        "For each piece, ask: what does this stand for in Plato's meaning?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to find a modern 'cave.'"
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what the shadows on the cave wall represent. Include one detail from the allegory that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the allegory (for example, the ascent out of the cave and the sun). Explain how together they show what Plato means by education." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the allegory to a modern situation where people mistake appearances for reality. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "allegory", def: "A story in which characters and events stand for deeper ideas or meanings.", example: "A cave that stands for human ignorance.", nonexample: "A plain list of facts with no hidden meaning.", context: "The Allegory of the Cave is Plato's most famous allegory." },
      { term: "symbol", def: "Something that stands for or represents an idea beyond itself.", example: "The sun standing for truth.", nonexample: "A number used only to count.", context: "In the allegory, each object is a symbol for part of Plato's argument." },
      { term: "illusion", def: "Something that appears real but is not; a false impression.", example: "Mistaking a shadow for a solid object.", nonexample: "Seeing an object clearly for what it is.", context: "The prisoners live in an illusion, taking shadows for reality." },
      { term: "perception", def: "The way we notice and understand the world through our senses.", example: "What you see, hear, and believe is real.", nonexample: "A fact that is true whether or not anyone notices it.", context: "The allegory questions whether our perception shows us the full truth." },
      { term: "enlightenment", def: "The state of gaining true understanding or knowledge.", example: "Finally seeing the real world in daylight.", nonexample: "Staying comfortable in the dark.", context: "Leaving the cave stands for enlightenment." },
      { term: "ignorance", def: "A lack of knowledge or awareness.", example: "Believing shadows are all that exists.", nonexample: "Understanding how something truly works.", context: "The cave represents a state of ignorance." },
      { term: "reality", def: "The way things truly are, apart from appearances.", example: "The real objects outside the cave.", nonexample: "A shadow cast on a wall.", context: "Plato contrasts appearances with a deeper reality." },
      { term: "philosopher", def: "A lover of wisdom; a person who seeks truth through reason.", example: "The freed prisoner who returns to help the others.", nonexample: "Someone who refuses to question anything.", context: "For Plato, the philosopher has seen beyond the shadows." },
      { term: "ascent", def: "An upward climb; here, the difficult rise toward knowledge.", example: "The steep, painful path out of the cave.", nonexample: "Sliding easily downhill.", context: "The ascent out of the cave stands for the hard work of learning." },
      { term: "the Good", def: "In Plato, the highest truth and source of all knowledge, symbolized by the sun.", example: "The sun that makes everything visible.", nonexample: "A single passing shadow.", context: "The sun outside the cave represents the Good." }
    ],

    relic: {
      name: "Inside the Cave",
      intro: "Seven instructional reconstructions of parts of Plato's allegory — teaching recreations, not copyrighted illustrations. Investigate what each part is, its role, and what it symbolizes in Plato's argument.",
      artifacts: [
        {
          id: "chains", name: "The Chains", image: "images/chains.png",
          clues: ["The prisoners have been bound since childhood.", "They cannot turn their heads and can look only at the wall in front of them.", "They have never seen the fire or the world behind them."],
          identify: { q: "What are these in the allegory?", choices: ["The chains binding the prisoners so they see only the wall", "Ropes for climbing out", "Decorations in a temple", "Tools for building"] },
          purpose: { q: "What is their role?", choices: ["To fix the prisoners' gaze on the shadows and keep them from turning around", "To help the prisoners escape", "To carry objects", "To light the cave"] },
          significance: { q: "What do they symbolize?", choices: ["The habits and limits that keep people trapped in ignorance", "Physical strength", "The passage of time", "Wealth and power"] },
          reveals: "How people can be held in ignorance without even knowing it.",
          conceals: "Who put the prisoners there, and whether they could ever free themselves alone.",
          ace: "Articulate what the chains do; connect them to how ignorance is maintained; extend it to habits that limit what people today are willing to see."
        },
        {
          id: "shadows", name: "The Shadows on the Wall", image: "images/shadows.png",
          clues: ["The prisoners watch shapes moving on the wall in front of them.", "They give these shapes names and talk about them.", "They believe the shadows are the only real things."],
          identify: { q: "What are these in the allegory?", choices: ["The shadows the prisoners mistake for reality", "The real objects outside", "The sun", "The philosopher"] },
          purpose: { q: "What is their role?", choices: ["To be the only 'world' the prisoners can see and name", "To guide the prisoners out", "To cast light", "To carry messages"] },
          significance: { q: "What do they symbolize?", choices: ["Appearances and opinions that people mistake for the truth", "Complete knowledge", "The Good itself", "The soul"] },
          reveals: "How easily appearances can be taken for full reality.",
          conceals: "That the shadows are only copies of real objects the prisoners cannot see.",
          ace: "Articulate what the shadows are; connect them to the idea of appearance versus reality; extend it to 'shadows' people accept as real today."
        },
        {
          id: "fire", name: "The Fire", image: "images/fire.png",
          clues: ["Behind and above the prisoners burns a fire.", "Its light is what casts the shadows on the wall.", "A prisoner who turns toward it is dazzled and pained by the brightness."],
          identify: { q: "What is this in the allegory?", choices: ["The fire inside the cave that casts the shadows", "The sun outside", "A prisoner", "A shadow"] },
          purpose: { q: "What is its role?", choices: ["To provide the light that creates the shadows the prisoners see", "To cook food", "To bind the prisoners", "To block the exit"] },
          significance: { q: "What does it symbolize?", choices: ["A lower or partial source of light and understanding, below the truth of the sun", "The highest truth", "Total darkness", "The prisoners' chains"] },
          reveals: "That there are levels of light and understanding, not just darkness and full truth.",
          conceals: "That an even greater light — the sun — lies outside the cave entirely.",
          ace: "Articulate the fire's role; connect it to a partial or early stage of understanding; extend it to a 'first light' that reveals a little but not everything."
        },
        {
          id: "objects", name: "The Carried Objects", image: "images/objects.png",
          clues: ["Along a raised walkway, people carry statues and figures.", "The fire behind them casts these objects' shadows onto the wall.", "The prisoners see only the shadows, never the objects themselves."],
          identify: { q: "What are these in the allegory?", choices: ["The real objects whose shadows appear on the wall", "The shadows themselves", "The chains", "The sun"] },
          purpose: { q: "What is their role?", choices: ["To be the true things that cast the shadows the prisoners mistake for reality", "To free the prisoners", "To put out the fire", "To narrate the story"] },
          significance: { q: "What do they symbolize?", choices: ["Things that are more real than the shadows but still not the highest truth", "Pure ignorance", "The Good itself", "The prisoners' opinions"] },
          reveals: "That the shadows are copies of real things — reality has layers.",
          conceals: "That even these objects are not the ultimate reality outside the cave.",
          ace: "Articulate the objects' role; connect them to the idea of degrees of reality; extend it to how a copy can be mistaken for the real thing today."
        },
        {
          id: "ascent", name: "The Steep Ascent", image: "images/ascent.png",
          clues: ["A freed prisoner is dragged up a rough, steep path.", "The climb is difficult and the light grows painfully bright.", "Only by continuing does the prisoner reach the world outside."],
          identify: { q: "What is this in the allegory?", choices: ["The steep, painful climb out of the cave", "A shadow on the wall", "The fire", "A pair of chains"] },
          purpose: { q: "What is its role?", choices: ["To bring the freed prisoner from the darkness up to the daylight", "To keep the prisoner trapped", "To cast shadows", "To carry objects"] },
          significance: { q: "What does it symbolize?", choices: ["Education as a hard, uncomfortable journey from ignorance to knowledge", "An easy, instant discovery", "Staying in the dark", "The passing of seasons"] },
          reveals: "That gaining real understanding is difficult and often uncomfortable.",
          conceals: "Whether the prisoner would have climbed at all without being compelled.",
          ace: "Articulate what the ascent represents; connect the difficulty to real learning; extend it to a time when understanding something was hard but worth it."
        },
        {
          id: "sun", name: "The Sun", image: "images/sun.png",
          clues: ["Outside the cave, the freed prisoner is at first blinded by brightness.", "Slowly the eyes adjust — first shadows, then reflections, then real things.", "At last the prisoner can look at the sun itself, the source of all the light."],
          identify: { q: "What is this in the allegory?", choices: ["The sun outside the cave, seen last of all", "The fire inside the cave", "A shadow", "A chain"] },
          purpose: { q: "What is its role?", choices: ["To be the ultimate source of light that makes everything visible", "To cast shadows on the wall", "To bind the prisoners", "To carry objects"] },
          significance: { q: "What does it symbolize?", choices: ["The highest truth — the Good — the source of knowledge and reality", "A single opinion", "Total ignorance", "The chains"] },
          reveals: "That there is a highest truth that makes all other understanding possible.",
          conceals: "How few reach it, and how hard it is to look at directly.",
          ace: "Articulate what the sun stands for; connect it to the goal of learning; extend it to what a 'source of truth' might mean in a field you care about."
        },
        {
          id: "return", name: "The Returning Prisoner", image: "images/return.png",
          clues: ["Having seen the real world, the freed prisoner goes back into the cave.", "In the dark again, the prisoner stumbles and seems foolish to the others.", "The prisoners mock the returner and resist being freed themselves."],
          identify: { q: "Who is this in the allegory?", choices: ["The freed prisoner who returns to help the others", "One of the object-carriers", "The fire-tender", "A guard"] },
          purpose: { q: "What is this figure's role?", choices: ["To bring knowledge back and try to free the other prisoners", "To put out the sun", "To build the cave", "To carry statues"] },
          significance: { q: "What does the return symbolize?", choices: ["The philosopher's duty to share truth, and how others may resist or mock it", "That knowledge should be kept secret", "That the cave is comfortable", "That escape is impossible"] },
          reveals: "The risk and duty of bringing hard truths back to people who prefer the shadows.",
          conceals: "Whether the others will ever listen — the allegory hints they may not.",
          ace: "Articulate why the prisoner returns; connect it to the risk of sharing unwelcome truth; extend it to a modern person who faced resistance for telling the truth."
        }
      ]
    },

    ctob: {
      name: "Shadows on the Wall",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What do the prisoners see on the wall and mistake for reality? (one word)",
          evidence: ["The prisoners face a wall and cannot turn around.", "Moving shapes appear on that wall, cast by a fire behind them.", "The word begins with 'shad…'."],
          hints: ["They are not solid objects, only their outlines.", "Shad…", "The answer is shadows."],
          answer: "shadows"
        },
        {
          type: "word",
          prompt: "What light source inside the cave casts the shadows on the wall? (one word)",
          evidence: ["Something burns behind and above the prisoners.", "Its light throws shadows of passing objects onto the wall.", "The word begins with 'fi…'."],
          hints: ["It gives off heat and light.", "Fi…", "The answer is fire."],
          answer: "fire"
        },
        {
          type: "digit",
          prompt: "In the allegory, how many prisoners are freed and make the journey out of the cave? Enter the number.",
          evidence: ["Plato asks us to imagine one prisoner being released.", "That single prisoner is turned around, then dragged up and out.", "Count how many make the journey."],
          hints: ["Just a single prisoner is described.", "The smallest counting number.", "The answer is 1."],
          answer: "1"
        },
        {
          type: "mc",
          prompt: "What does the sun outside the cave represent in Plato's allegory?",
          options: [
            "The highest truth — the Good — the source of knowledge.",
            "A dangerous illusion to avoid.",
            "Just another shadow on the wall.",
            "The chains that bind the prisoners."
          ],
          hints: ["It is seen last and makes everything else visible.", "Which option is about the ultimate source of truth?"]
        },
        {
          type: "sequence",
          prompt: "Put the freed prisoner's journey in order, earliest first.",
          items: [
            "The prisoner sits chained, watching shadows on the wall.",
            "The prisoner is freed and turns to see the fire.",
            "The prisoner is dragged up the steep path out of the cave.",
            "The prisoner sees the sun and understands true reality."
          ],
          hints: ["It begins in chains, facing the wall.", "The fire is seen before leaving the cave.", "The sun is seen last."]
        },
        {
          type: "mc",
          prompt: "What is Plato's main point in the allegory?",
          options: [
            "Education is a difficult journey from appearances to truth, and many people resist it.",
            "Shadows are more trustworthy than real objects.",
            "It is best never to leave the cave.",
            "Truth is easy to reach and obvious to everyone."
          ],
          hints: ["Think about what the whole climb stands for.", "Which option is about the hard path to knowledge?"]
        }
      ]
    },

    arcade: {
      name: "Out of the Cave",
      instruction: "Plato's allegory contrasts appearances with reality. Sort each item: does it belong to the world of APPEARANCE (the shadows inside the cave) or the world of REALITY (the true things in the sunlight outside)? Reasoning earns the points.",
      buckets: [
        { id: "appearance", label: "Appearance (inside the cave)", short: "Appearance" },
        { id: "reality", label: "Reality (sunlit world outside)", short: "Reality" }
      ],
      cards: [
        { text: "The shadows moving on the cave wall", bucket: "appearance", why: "Shadows are only outlines the prisoners mistake for real things." },
        { text: "The echoes the prisoners hear and take as the shapes' voices", bucket: "appearance", why: "The echoes are misread appearances, not the true source." },
        { text: "The prisoners' names for the passing shapes", bucket: "appearance", why: "They name shadows, not the real objects — appearance, not reality." },
        { text: "Believing the shadows are the only real things", bucket: "appearance", why: "Taking appearances for the whole of reality is exactly the cave's error." },
        { text: "The real objects that cast the shadows", bucket: "reality", why: "These true things are more real than their shadows." },
        { text: "The sun that lights the whole world outside", bucket: "reality", why: "The sun is Plato's symbol of the highest reality and truth." },
        { text: "Seeing things clearly in daylight", bucket: "reality", why: "Clear sight in the sun stands for genuine knowledge." },
        { text: "Understanding that the shadows were only copies", bucket: "reality", why: "Grasping that appearances are copies is the move to reality." }
      ],
      followup: "Where do people today mistake 'shadows' for reality — for example in edited images, highlight reels, or rumors? What would 'leaving the cave' look like there?"
    },

    analysis: {
      mcq: [
        {
          q: "In the allegory, the cave itself most nearly represents —",
          options: [
            "the everyday world of appearances, where people mistake shadows for reality.",
            "a real prison in ancient Athens.",
            "the mind of a single wise philosopher.",
            "the afterlife."
          ],
          why: "Plato uses the cave to stand for the world of appearances and opinion that most people take as reality."
        },
        {
          q: "The sun outside the cave stands for —",
          options: [
            "the highest truth, the Good, and the source of knowledge.",
            "a passing illusion.",
            "the fire inside the cave.",
            "the prisoners' chains."
          ],
          why: "The sun, seen last and lighting everything, symbolizes the Good — the ultimate source of truth."
        },
        {
          q: "The difficult climb out of the cave mainly represents —",
          options: [
            "education as a hard, sometimes painful journey toward knowledge.",
            "a pleasant, effortless walk.",
            "a punishment for curiosity.",
            "the impossibility of ever learning anything."
          ],
          why: "The steep ascent stands for the effort and discomfort of moving from ignorance to understanding."
        },
        {
          q: "When the freed prisoner returns and the others mock him, Plato is showing that —",
          options: [
            "people can resist and ridicule those who try to share difficult truths.",
            "the cave is the best place to live.",
            "shadows really are reality after all.",
            "no one ever changes their mind."
          ],
          why: "The hostile reaction dramatizes how uncomfortable truths — and truth-tellers — are often rejected."
        },
        {
          q: "Overall, the allegory argues that —",
          options: [
            "most people accept appearances as reality, and reaching truth takes a hard, deliberate effort.",
            "seeing is always the same as knowing.",
            "philosophy is useless.",
            "the senses never mislead us."
          ],
          why: "The whole allegory contrasts easy appearances with the demanding path to real knowledge."
        }
      ],
      short: [
        "Choose one part of the allegory from the Relic Room. Explain what it is and what it symbolizes in Plato's argument.",
        "Explain the difference between the fire inside the cave and the sun outside it. Why does Plato include both?",
        "Why does the freed prisoner return to the cave, and what does the others' reaction suggest about sharing the truth?"
      ],
      paragraph: "Write an evidence-based paragraph. Does the Allegory of the Cave describe something real about how people come to knowledge today? Make a claim and support it with specific parts of the allegory.",
      aceReflection: "Articulate what the allegory says about appearances and truth. Connect two parts of it that develop that idea. Extend it to a modern 'cave,' and name where the comparison stops working."
    },

    extend: {
      name: "Find a Modern Cave",
      prompt: "Plato's cave is a place where people mistake appearances (shadows) for reality. Identify a modern 'cave' — a situation where people accept a limited or filtered version of things as the whole truth (for example, edited social-media images, echo chambers, or advertising). Map the parts of the allegory onto your example.",
      format: "A short analysis mapping your modern example onto the allegory (What are the shadows? The fire? The sun? The ascent?), plus a note on where the comparison breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning about Plato's Allegory of the Cave. Do not answer for me. Ask me one question at a time that helps me explain what the shadows and the sun represent, in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Allegory of the Cave. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] of the allegory because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the allegory." },
      { title: "Evidence prompt", text: "Here is my claim about the Allegory of the Cave: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to map the allegory onto this modern situation: [situation]. Ask me questions to test which parts really fit (the shadows, the fire, the sun, the ascent) and where the comparison breaks down. Do not decide for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Allegory of the Cave for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Plato's Allegory of the Cave as a symbolic argument about appearance, reality, and education. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation. The allegory is in Book VII of Plato's Republic; the Greek original and older translations (e.g., Jowett) are public domain, while some recent translations remain under copyright.",
        "Details here reflect widely established features of the allegory (the chained prisoners; the fire; the carried objects; the shadows; the steep ascent; the sun as the Good; the freed prisoner's return). Confirm specifics against your edition.",
        "The allegory is abstract; pair it with discussion and concrete modern examples for younger readers.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) strands on theme, figurative and symbolic language, and author's purpose. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.2", "RL.11-12.2", "RL.9-10.4", "RL.11-12.4", "RI.9-10.1", "RI.11-12.1", "RI.9-10.5", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
