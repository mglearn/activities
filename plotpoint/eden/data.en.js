/* PlotPoint — Adam and Eve, Genesis 2–3 (New International Reader's Version, specified). COPYRIGHTED TRANSLATION.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The Genesis garden narrative is ancient and in the public domain, but the
   state-specified translation — the New International Reader's Version (NIrV) — is COPYRIGHTED.
   This room reproduces NO scripture text: it paraphrases the narrative throughout and quotes no
   translation's wording. Genesis 2–3 is studied here as LITERATURE — an origin narrative, its
   symbolism, characterization, dialogue, and dramatic arc — in a neutral, academic, non-devotional
   frame consistent with the Texas required literary-works list (19 TAC §110.70, English III / high
   school). Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "eden",
  storageKey: "plotpoint.eden.v1",

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

    "nav.enter": "Enter the Text", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Text",
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
    "vocab.title": "Words for Genesis 2–3",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Garden of Eden",
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
    "ctob.title": "The Path Through the Garden",
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
    "arcade.title": "Before or After the Fruit?",
    "arcade.default": "Sort each detail by where it falls in the story's turn from innocence to consequence.",
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
    "print.item.relic": "Garden of Eden evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Origin-story organizer",
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
      title: "Adam and Eve — Genesis 2–3",
      author: "New International Reader's Version (specified)",
      grades: "English III",
      genre: "Sacred text · Origin narrative · Myth & symbol",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Underlying narrative public domain; specified version (NIrV) copyrighted",
      textAccess: "Genesis 2–3 is a short narrative of two chapters. The specified translation (NIrV) is copyrighted — use the edition your district supplies. This room reproduces no scripture and paraphrases throughout.",
      copyright: "The Genesis garden narrative is ancient and in the public domain, but the state-specified translation — the New International Reader's Version (NIrV) — is copyrighted. This room reproduces no scripture text: it paraphrases the narrative throughout, quotes no translation's wording, and studies Genesis 2–3 as literature — its origin-narrative form, symbolism, characterization, and dramatic arc.",
      contentNote: "Presented as literature — an origin narrative, its symbolism, characterization, dialogue, and dramatic arc — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.70, English III / high school). Because the state names a copyrighted translation (NIrV), a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Genesis 2–3 — a lush garden at dawn with two prominent trees, a winding river, and a coiled serpent half-hidden in the leaves."
    },
    hook: "One garden. Two trees. A single choice — and everything changes. Genesis 2–3 is an origin story: a narrative that explains why the world is the way it is, why people work, why they feel shame, why they die. It takes enormous ideas — innocence, temptation, disobedience, consequence — and stages them through concrete images: a fruit, a serpent, fig leaves, a flaming sword. Read it as literature, and watch a whole theory of the human condition unfold in a handful of scenes.",
    goals: [
      "Understand Genesis 2–3 as an origin (etiological) narrative that explains why the world is as it is — why people work, feel shame, and die.",
      "Analyze the story's symbols — the two trees, the fruit, the serpent, nakedness — and what each represents beyond its literal detail.",
      "Trace the dramatic arc from innocence to temptation to transgression to consequence, and study the dialogue and blame-shifting that drive it.",
      "Interpret how concrete images and characters carry the abstract themes of knowledge, choice, disobedience, shame, and mortality — and why this narrative has shaped literature and language."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an origin (etiological) narrative and symbolism.",
        "Discuss: how can a story explain something as large as why people feel shame or why they die?"
      ],
      during: [
        "Use the Garden of Eden room to slow down and read the narrative scene by scene.",
        "Track the turn: from innocence without shame, through the serpent's temptation, to the consequences and the expulsion."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the symbols and the story's dramatic arc.",
        "Complete the Extend task to compare this origin-story technique to another myth or narrative."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what kind of story Genesis 2–3 is and what it sets out to explain. Include one image or moment from the narrative that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the narrative — for example the innocence 'without shame' and the shame that follows the fruit. Explain how placing them side by side shapes the story's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's technique — using a single symbolic choice to explain a large truth about human life — to another myth, story, or real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "origin narrative", def: "A story that explains how something in the world came to be the way it is (also called an etiological narrative).", example: "A tale explaining why people must work the ground and why they die.", nonexample: "A news report on today's weather.", context: "Genesis 2–3 is an origin narrative about work, shame, and mortality." },
      { term: "symbolism", def: "The use of an object, figure, or image to stand for a larger idea beyond its literal meaning.", example: "A fruit that represents a forbidden choice.", nonexample: "A plain word used only for its dictionary meaning.", context: "The trees, the fruit, and the serpent all carry symbolism in this story." },
      { term: "characterization", def: "The methods a writer uses to reveal what a character is like — through words, choices, and actions.", example: "Showing the serpent's craftiness through the way it questions.", nonexample: "A list of a character's height and weight with no personality.", context: "The narrative's characterization makes the serpent seem cunning." },
      { term: "dialogue", def: "The spoken exchange between characters in a story.", example: "The serpent questioning the woman, and her reply.", nonexample: "A paragraph of pure description with no one speaking.", context: "The temptation unfolds through dialogue between the serpent and the woman." },
      { term: "foreshadowing", def: "Hints or clues a writer plants early that point toward what will happen later.", example: "An early warning that eating the fruit brings death.", nonexample: "A detail that never connects to anything else.", context: "The warning about the tree is foreshadowing of the consequences to come." },
      { term: "motif", def: "A recurring image, idea, or element that gains meaning through repetition in a work.", example: "The recurring image of the tree throughout the garden story.", nonexample: "A single detail mentioned once and never again.", context: "The tree is a central motif in Genesis 2–3." },
      { term: "theme", def: "A central idea or insight about life that a work explores.", example: "The tension between knowledge and innocence.", nonexample: "The plot summary of what happens.", context: "Choice, shame, and mortality are major themes of this narrative." },
      { term: "temptation", def: "The act of being drawn toward doing something forbidden or unwise.", example: "The serpent urging the woman to eat what was forbidden.", nonexample: "Freely choosing something allowed and encouraged.", context: "The serpent's persuasion is the story's scene of temptation." },
      { term: "transgression", def: "The act of breaking a rule, law, or command.", example: "Eating from the one tree that was forbidden.", nonexample: "Following an instruction exactly as given.", context: "Eating the fruit is the transgression the whole story turns on." }
    ],

    relic: {
      name: "The Garden of Eden",
      intro: "Seven instructional reconstructions of the scenes and symbols in the narrative — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "garden", name: "The Garden of Eden", image: "images/garden.webp",
          clues: ["The first man is formed from the dust of the ground and given the breath of life.", "A garden is planted in Eden, watered by a river, and the man is placed there to work and care for it.", "This is the story's setting — a place of provision before anything goes wrong."],
          identify: { q: "What does the garden image show?", choices: ["The setting where the first human is placed to tend and keep a garden of plenty", "A ruined city after a war", "A ship crossing the sea", "A courtroom in session"] },
          purpose: { q: "What is the garden's role in the narrative?", choices: ["It establishes a world of innocence and provision that the coming choice will disrupt", "It is only background with no meaning", "It is where the story ends", "It describes the writer's home"] },
          significance: { q: "Why open with a place of plenty and care?", choices: ["It sets up the 'before' the story will contrast against the shame and hardship that follow", "It has no connection to the plot", "It warns of a flood", "It introduces a battle"] },
          reveals: "The story's starting condition: humanity at home in a world of provision.",
          conceals: "How much the opening peace exists to be broken by the coming choice.",
          ace: "Articulate what the garden setting establishes; connect it to the idea of innocence; extend it to why a story might build a peaceful 'before' on purpose."
        },
        {
          id: "trees", name: "The Two Trees", image: "images/trees.webp",
          clues: ["Two special trees stand in the middle of the garden: the tree of life, and the tree of the knowledge of good and evil.", "The man may eat from any tree except the tree of knowledge.", "A warning is attached: eating from the forbidden tree brings death."],
          identify: { q: "What do the two trees represent?", choices: ["The tree of life and the tree of the knowledge of good and evil — the story's central symbols", "Two ordinary fruit trees with no meaning", "A pair of signposts", "Two rivers"] },
          purpose: { q: "Why place a single forbidden tree in a garden of plenty?", choices: ["The one limit creates the possibility of a choice — and of disobedience", "To provide shade", "To mark the garden's border", "To feed the animals"] },
          significance: { q: "What does the warning about the tree do for the story?", choices: ["It is foreshadowing — it sets the stakes the later choice will test", "It ends the narrative", "It describes the weather", "It names the river"] },
          reveals: "The symbolic center of the story: knowledge, limit, and choice.",
          conceals: "How a single rule turns a garden into the stage for a decision.",
          ace: "Articulate what the two trees symbolize; connect the forbidden tree to the idea of choice; extend it to how a single limit can drive a whole plot."
        },
        {
          id: "firstpair", name: "The First Man and Woman", image: "images/firstpair.webp",
          clues: ["No fitting companion is found for the man among the animals.", "The first woman is formed from part of the man's own body, and the two are joined.", "Both are naked and feel no shame — the story's picture of innocence."],
          identify: { q: "What does this image show?", choices: ["The first man and woman, joined as companions and unashamed", "A crowd in a marketplace", "A king and his court", "Two strangers arguing"] },
          purpose: { q: "What is the point of 'naked and unashamed'?", choices: ["It pictures innocence — a state before shame exists", "It describes the climate", "It warns of danger", "It names a character"] },
          significance: { q: "Why establish this innocence before the temptation?", choices: ["So the story can measure exactly what is lost after the fruit", "It has no purpose in the plot", "To introduce the serpent", "To end the story happily"] },
          reveals: "The 'before' state the story defines innocence by.",
          conceals: "How the phrase 'without shame' quietly sets up the whole turn to come.",
          ace: "Articulate what innocence looks like here; connect it to companionship; extend it to why a story shows a state it plans to take away."
        },
        {
          id: "serpent", name: "The Serpent's Temptation", image: "images/serpent.webp",
          clues: ["The serpent is described as the craftiest of the creatures.", "It questions the woman about God's command, then flatly contradicts the warning.", "It claims they will not die but will become like God, knowing good and evil."],
          identify: { q: "How does the serpent work on the woman?", choices: ["Through crafty questioning and a direct contradiction of the warning", "By force and threats", "By offering money", "By staying silent"] },
          purpose: { q: "What does the serpent's speech reveal about it?", choices: ["Its characterization as cunning and persuasive — revealed through dialogue", "That it is kind and honest", "That it is frightened", "That it is a guard"] },
          significance: { q: "Why does the temptation happen in conversation, not action?", choices: ["The dialogue lets the story dramatize persuasion and doubt directly", "Conversation is quicker to read", "It hides the serpent", "It has no effect"] },
          reveals: "Temptation staged as persuasive, deceptive dialogue.",
          conceals: "How the serpent mixes a half-truth with a lie to make the fruit appealing.",
          ace: "Articulate how the serpent persuades; connect its craftiness to the dialogue; extend it to a persuasion you have seen work the same way."
        },
        {
          id: "fruit", name: "Eating the Fruit and the Opened Eyes", image: "images/fruit.webp",
          clues: ["The woman sees that the fruit looks good and desirable for gaining wisdom.", "She eats and gives some to the man, who also eats.", "Their eyes are 'opened' — and they suddenly feel shame at their nakedness."],
          identify: { q: "What is the turning point this image shows?", choices: ["The eating of the forbidden fruit and the sudden arrival of shame", "A quiet meal with no consequence", "The planting of the garden", "The naming of the animals"] },
          purpose: { q: "What changes the instant the fruit is eaten?", choices: ["Innocence gives way to shame — the story's decisive shift", "Nothing changes at all", "The garden grows larger", "The river dries up"] },
          significance: { q: "Why is this the story's transgression?", choices: ["It breaks the one command that was given — the act the whole plot turns on", "It is a small, harmless choice", "It follows the instructions exactly", "It happens by accident"] },
          reveals: "The transgression itself — the hinge from innocence to consequence.",
          conceals: "How 'opened eyes' turns a promise of wisdom into the birth of shame.",
          ace: "Articulate what the fruit-eating changes; connect the 'opened eyes' to shame; extend it to a moment when knowing something changed everything."
        },
        {
          id: "hiding", name: "Hiding and Blaming", image: "images/hiding.webp",
          clues: ["Ashamed of their nakedness, the two sew fig leaves together and hide from God.", "When questioned, the man blames the woman — and implicitly God for giving her.", "The woman blames the serpent: a chain of blame-shifting passes down the line."],
          identify: { q: "What does this scene show?", choices: ["The pair hiding in shame, then shifting blame when questioned", "A joyful celebration", "A peaceful conversation", "The animals being named"] },
          purpose: { q: "What does the blame-shifting reveal about the characters?", choices: ["Their instinct to avoid responsibility — each passes the fault to another", "That they are proud of their choice", "That nothing has changed in them", "That they blame no one"] },
          significance: { q: "Why does the story trace the blame down a chain?", choices: ["It dramatizes how transgression breaks trust — man to woman to serpent", "It is a list with no meaning", "It ends the danger", "It restores innocence"] },
          reveals: "The first response to guilt: hiding, then blame-shifting.",
          conceals: "How the fig leaves and the hiding are small signs of a large inner change.",
          ace: "Articulate the blame chain; connect hiding to shame; extend it to how people deflect responsibility when caught."
        },
        {
          id: "expulsion", name: "The Consequences and the Expulsion", image: "images/expulsion.webp",
          clues: ["Consequences are pronounced: the serpent is cursed to crawl; the woman will bear children in pain; the man will struggle against thorns and hard labor.", "The man is told he will return, in the end, to the dust from which he came.", "The two are clothed in garments of skin and sent out; guardian cherubim and a flaming sword bar the way back to the tree of life."],
          identify: { q: "What does this final image show?", choices: ["The consequences pronounced and the pair sent out of the garden, the way back guarded", "A wedding feast", "A return to innocence", "The planting of a new garden"] },
          purpose: { q: "How do these consequences work as an origin narrative?", choices: ["They explain why people work hard, suffer pain, and die — the world as it now is", "They are punishments with no larger meaning", "They restore the garden", "They end the serpent's story only"] },
          significance: { q: "What does the guarded way back to the tree of life suggest?", choices: ["The lost state is now permanently out of reach — there is no simple return", "The garden will reopen tomorrow", "The sword is only decoration", "The consequences are temporary"] },
          reveals: "How the story explains the hardships of the world it was written into.",
          conceals: "How the flaming sword turns a single choice into a lasting, irreversible change.",
          ace: "Articulate the consequences; connect them to the origin-story purpose; extend it to how one choice can close a door for good."
        }
      ]
    },

    ctob: {
      name: "The Path Through the Garden",
      intro: "Six locks. Every answer is inferable from the narrative and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The crafty creature who tempts the woman is a ______. (one word)",
          evidence: ["It is described as the craftiest of the creatures.", "It questions the woman and contradicts the warning about the tree.", "The word begins with 'serp…'."],
          hints: ["A creature that crawls and speaks in the story.", "Serp…", "The word is serpent."],
          answer: "serpent"
        },
        {
          type: "mc",
          prompt: "Before eating the fruit, the man and woman are described as —",
          options: [
            "innocent and unashamed.",
            "at war with each other.",
            "wealthy rulers of a kingdom.",
            "afraid of the animals."
          ],
          hints: ["Think about how the story pictures the 'before' state.", "The narrative says they were naked and felt no shame."]
        },
        {
          type: "mc",
          prompt: "The serpent tempts the woman mainly by —",
          options: [
            "contradicting the warning and promising she will become like God, knowing good and evil.",
            "threatening her with force.",
            "offering her riches and power over the animals.",
            "promising to make the garden larger."
          ],
          hints: ["The serpent works through words, not force.", "It denies that eating brings death and dangles a kind of knowledge."]
        },
        {
          type: "digit",
          prompt: "The garden holds a certain number of specially named trees at its center. How many special, named trees stand in the garden? Enter the number.",
          evidence: ["One is the tree of life.", "The other is the tree of the knowledge of good and evil.", "Count the specially named trees — one and one."],
          hints: ["The tree of life is one; the tree of the knowledge of good and evil is another.", "One plus one.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the story's events in the order they happen, earliest first.",
          items: [
            "The man and woman live in the garden, innocent and unashamed.",
            "The serpent tempts the woman, and she and the man eat the fruit.",
            "Ashamed, they hide and then shift the blame when questioned.",
            "Consequences are pronounced and they are sent out of the garden."
          ],
          hints: ["The story begins in innocence, before any choice.", "The blame-shifting comes after the fruit is eaten.", "The expulsion and the guarded way back close the narrative."]
        },
        {
          type: "mc",
          prompt: "As an origin narrative, the consequences at the end mainly work to —",
          options: [
            "explain why people work hard, feel pain, and die.",
            "describe a single family's private quarrel with no larger meaning.",
            "predict the weather in the region.",
            "list the names of the animals."
          ],
          hints: ["An origin story explains why the world is the way it is.", "Notice the hard labor, the pain, and the return to dust."]
        }
      ]
    },

    arcade: {
      name: "Before or After the Fruit?",
      instruction: "Genesis 2–3 turns on a single moment: the eating of the fruit. Sort each detail by where it falls in that turn — is it part of the BEFORE (innocence and harmony), or the AFTER (shame and consequence)? Reasoning earns the points.",
      buckets: [
        { id: "before", label: "Before the fruit (innocence / harmony)", short: "Before" },
        { id: "after", label: "After the fruit (shame / consequence)", short: "After" }
      ],
      cards: [
        { text: "The man and woman are naked and feel no shame.", bucket: "before", why: "The story's picture of innocence, before the choice is made." },
        { text: "The garden is a place of provision, watered by a river.", bucket: "before", why: "Plenty and care mark the world before anything goes wrong." },
        { text: "The man and woman are joined as fitting companions.", bucket: "before", why: "Harmony between them belongs to the innocent 'before.'" },
        { text: "God permits eating from every tree but one.", bucket: "before", why: "The single limit is set before the transgression happens." },
        { text: "They sew fig leaves together and hide in shame.", bucket: "after", why: "Shame and hiding follow the moment their eyes are opened." },
        { text: "The man blames the woman and the woman blames the serpent.", bucket: "after", why: "The blame-shifting chain comes after the fruit is eaten." },
        { text: "The ground will bring thorns and hard labor.", bucket: "after", why: "Hard work is pronounced as a consequence of the choice." },
        { text: "A flaming sword guards the way back to the tree of life.", bucket: "after", why: "The guarded expulsion closes the story after the transgression." }
      ],
      followup: "The story hinges on one moment — the eating of the fruit — that divides innocence from consequence. What details does the narrative use to mark that turning point, and why does placing a 'before' and an 'after' side by side make the change feel so large?"
    },

    analysis: {
      mcq: [
        {
          q: "Genesis 2–3 is best understood as —",
          options: [
            "an origin narrative that explains why the world is the way it is.",
            "a news report on current events.",
            "a set of cooking instructions.",
            "a personal diary of a single day."
          ],
          why: "The consequences at the end explain human work, pain, and death — the mark of an origin (etiological) narrative."
        },
        {
          q: "The two trees, the fruit, and the serpent are best described as the story's —",
          options: [
            "symbols, standing for ideas larger than their literal detail.",
            "minor background scenery with no meaning.",
            "list of characters' names.",
            "rhyme scheme."
          ],
          why: "Each object carries meaning beyond itself — knowledge, choice, and temptation — which is the work of symbolism."
        },
        {
          q: "The serpent's temptation is dramatized mainly through —",
          options: [
            "dialogue — crafty questions and a direct contradiction of the warning.",
            "a long list of the garden's plants.",
            "a battle scene.",
            "a description of the weather."
          ],
          why: "The persuasion unfolds in spoken exchange, revealing the serpent's craftiness through dialogue."
        },
        {
          q: "When God questions them, the man blames the woman and the woman blames the serpent. This chain best illustrates —",
          options: [
            "blame-shifting — each character avoids responsibility.",
            "honest confession by both.",
            "a return to innocence.",
            "a joyful celebration."
          ],
          why: "The fault is passed down the line, dramatizing the instinct to avoid responsibility."
        },
        {
          q: "Because a single symbolic choice is developed into an explanation of shame, work, and death, Genesis 2–3 is a clear example of —",
          options: [
            "an origin (etiological) narrative.",
            "a simile.",
            "a limerick.",
            "a weather forecast."
          ],
          why: "The story explains how the human condition came to be as it is, the definition of an origin narrative."
        }
      ],
      short: [
        "Choose one image from the Garden of Eden room. Explain what it shows and what it reveals about the story's meaning.",
        "The story places innocence and shame on either side of a single choice. Explain what this 'before and after' structure suggests about the change the narrative describes.",
        "Explain the serpent's temptation. How does the serpent use dialogue — questions and a contradiction — to make the fruit appealing?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Genesis 2–3 use symbols and a single choice to explain a large idea about human life, such as knowledge, shame, or mortality? Make a claim and support it with specific details from the narrative.",
      aceReflection: "Articulate in your own words what the story explains about the human condition. Connect two moments that develop it. Extend it to another myth or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "Genesis 2–3 explains a large truth about human life — why people know shame, work, and mortality — through a single symbolic choice and a handful of images: two trees, a fruit, a serpent. Choose another myth, story, film, or real situation that does the same thing (a single symbolic choice or object carrying a big idea). Explain the connection with evidence: what is the single symbol or choice, what large idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the story's origin-narrative technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Genesis 2–3 uses a single symbolic choice — eating the forbidden fruit — to explain ideas like shame, work, and mortality. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Genesis 2–3. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Genesis 2–3 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the narrative." },
      { title: "Evidence prompt", text: "Here is my claim about Genesis 2–3: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Genesis 2–3's origin-narrative technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Genesis 2–3 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Genesis 2–3 (the specified New International Reader's Version) as an origin narrative — a study of symbolism, characterization, dialogue, and dramatic arc. The NIrV translation is copyrighted, so this room reproduces no scripture text and paraphrases throughout; a district must supply the specified edition for the assigned reading. Genesis 2–3 is presented as literature in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "Genesis 2–3 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The specified version is the New International Reader's Version (NIrV), which is copyrighted. Because the state names a copyrighted translation, a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical.",
        "Reproduces no copyrighted text; paraphrases throughout; teach as literature, neutral and academic; follow district policy for religious texts studied as literary works.",
        "Details here were checked against a public-domain translation of Genesis 2–3, with no wording quoted (the man formed from the dust; the garden in Eden and the river; the two trees — of life, and of the knowledge of good and evil — and the warning about death; the naming of the animals; the woman formed from the man's side; naked and without shame; the crafty serpent's questioning and contradiction; the fruit desirable for wisdom; the opened eyes and the fig leaves; hiding and the blame-shifting chain; the curses on serpent, woman, and man; the return to dust; the garments of skin; and the expulsion with cherubim and a flaming sword). All passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on figurative language, literary elements, structure, and theme — especially symbolism, characterization, and the origin (etiological) narrative form. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
