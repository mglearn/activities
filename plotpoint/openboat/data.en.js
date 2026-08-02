/* PlotPoint — The Open Boat (Stephen Crane, 1897).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (the "subtle
   brotherhood of men" and the "If I am going to be drowned" refrain are
   described or quoted only in brief, as public-domain phrases). Standards are
   good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "openboat",
  storageKey: "plotpoint.openboat.v1",

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
    "enter.readListenNote": "This story is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Open Boat",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Salvage from the Dinghy",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the story",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Voice of the Sea",
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
    "arcade.title": "Nature's Indifference or Human Solidarity?",
    "arcade.default": "Sort each detail by the theme it shows.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Details to sort",
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
    "extend.title": "An Indifferent Universe",
    "extend.format": "Format",
    "extend.evidence": "The idea from the story I am building on",
    "extend.transfers": "What transfers to another story or situation",
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
    "print.item.relic": "Dinghy salvage evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Indifferent-universe organizer",
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
    "path.complete": "Complete Case", "path.complete.time": "45–75 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "The Open Boat",
      author: "Stephen Crane",
      grades: "English IV",
      genre: "Short story · Naturalism",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1897)",
      textAccess: "A short public-domain story; use your class's copy or any public-domain text.",
      copyright: "Written in 1897, The Open Boat is in the public domain. It is studied here as literature, with paraphrase and brief public-domain quotations only; this room reproduces no full passages.",
      contentNote: "This story appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than 2030–2031. Note that a character drowns near the end. The story is studied here as literature; preview and align with local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Open Boat — four men in a tiny lifeboat riding towering gray-green waves under an indifferent sky, a distant lighthouse on the horizon."
    },
    hook: "Their steamer has sunk off the Florida coast, and four men are left in a tiny lifeboat on a violent sea: an injured captain, a cook, an oiler, and a correspondent. For a day and a night they row and bail toward a shore they can see but cannot reach — while the sea and sky care nothing whether they live or die.",
    goals: [
      "Understand the plot of Crane's survival tale and the ordeal of four men adrift in a dinghy.",
      "Analyze naturalism — the story's view of an indifferent universe that dwarfs human effort.",
      "Trace Crane's use of irony, symbolism, and the 'subtle brotherhood of men' forged in crisis.",
      "Interpret the theme of humanity's insignificance before nature and the meaning people create in response."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of naturalism — nature as vast and uncaring.",
        "Discuss: When people face danger together, what changes between them? Does the universe owe us fairness?"
      ],
      during: [
        "Use Salvage from the Dinghy to slow down and read the ordeal, moment by moment.",
        "Track the correspondent's shifting feelings — from rage at the sea to a strange calm."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the naturalism, irony, and symbolism.",
        "Complete the Extend task to carry the indifferent-nature theme into another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Crane means when the men sense that nature does not care about them. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the men's shared labor at the oars to the idea of the 'subtle brotherhood of men.' Explain how solidarity answers an indifferent sea." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of an indifferent universe to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "naturalism", def: "A literary movement showing an indifferent, uncaring universe in which humans are small and shaped by forces beyond their control.", example: "A sea that drowns the strongest man without malice or mercy.", nonexample: "A world where the universe rewards good people and punishes bad ones.", context: "The Open Boat is a landmark work of American naturalism." },
      { term: "irony", def: "A contrast between what seems likely and what actually happens, or between appearance and reality.", example: "The strongest, most capable man is the one who drowns.", nonexample: "The strongest man survives and the weak ones die, exactly as expected.", context: "Crane fills the story with bitter irony." },
      { term: "symbolism", def: "Using an object or image to stand for a larger idea.", example: "The sea standing for an indifferent nature or fate.", nonexample: "A wave that is only a wave and nothing more.", context: "The sea and the boat carry heavy symbolism." },
      { term: "refrain", def: "A phrase or line repeated for emphasis throughout a work.", example: "'If I am going to be drowned…' returning again and again.", nonexample: "A thought stated once and never repeated.", context: "The correspondent's refrain returns whenever hope fades." },
      { term: "imagery", def: "Vivid, sensory language that helps the reader see, hear, or feel a scene.", example: "The gray-green, slate-colored, foaming waves of the sea.", nonexample: "A flat statement that gives no picture at all.", context: "Crane's color and sea imagery makes the ordeal vivid." },
      { term: "theme", def: "The central idea or message a work explores.", example: "Humanity's insignificance before an indifferent nature.", nonexample: "A single plot event with no larger meaning.", context: "The theme is human smallness — and the solidarity people build in answer." },
      { term: "point of view", def: "The perspective from which a story is told.", example: "Events seen mainly through the correspondent's eyes.", nonexample: "A story told from no one's perspective at all.", context: "The correspondent is the story's center of consciousness." },
      { term: "dinghy", def: "A very small open boat.", example: "The tiny lifeboat that holds the four men.", nonexample: "A large, sturdy ocean steamer.", context: "The four men are crowded into one fragile dinghy." },
      { term: "indifference", def: "A complete lack of interest, care, or concern.", example: "A sea and sky that do not notice whether the men live or die.", nonexample: "A rescuer who rushes to help someone in danger.", context: "The men rage at the indifference of nature and fate." }
    ],

    relic: {
      name: "Salvage from the Dinghy",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "dinghy", name: "The Tiny Dinghy on the Violent Sea", image: "images/dinghy.webp",
          clues: ["Their steamer has sunk off the coast of Florida.", "Four men are left in a small open lifeboat — a dinghy.", "The sea heaves in towering waves that the tiny boat must ride."],
          identify: { q: "What is this and how did the men come to be in it?", choices: ["A tiny lifeboat, after their steamer sank off Florida", "A large steamship on a calm sea", "A raft they built on the beach", "A fishing boat they bought"] },
          purpose: { q: "What is the dinghy's role in the story?", choices: ["It is the fragile world the men share while adrift on a huge, hostile sea", "It is a comfortable place to rest", "It carries their cargo home", "It has no importance"] },
          significance: { q: "What does the smallness of the boat reveal about the story's meaning?", choices: ["It shows how tiny and vulnerable humans are before an immense, indifferent nature", "It shows the men are wealthy", "It proves the sea is calm", "It shows the shore is close and safe"] },
          reveals: "The image of human fragility set against the vast power of the sea.",
          conceals: "How long the ordeal will last and who will survive it.",
          ace: "Articulate what the dinghy is; connect its smallness to naturalism; extend it to how a setting can dramatize human vulnerability."
        },
        {
          id: "four-men", name: "The Four Men", image: "images/four-men.webp",
          clues: ["The boat holds an injured captain, a cook, an oiler, and a correspondent.", "The oiler, named Billie, is the only man given a name.", "We see events mostly through the correspondent's eyes."],
          identify: { q: "Who are the four men in the dinghy?", choices: ["The injured captain, the cook, the oiler Billie, and the correspondent", "Four fishermen from the same village", "A family of four", "Four soldiers"] },
          purpose: { q: "What is the role of these four figures?", choices: ["They share the labor of survival and represent different roles working as one", "They compete against one another", "They are strangers who never speak", "They are passengers being rowed by a crew"] },
          significance: { q: "Why does naming only the oiler matter?", choices: ["The single name makes Billie individual — and his later death more personal", "It shows the captain is unimportant", "It means the others are invented", "It has no effect"] },
          reveals: "How Crane turns roles into individuals bound by a shared ordeal.",
          conceals: "That the one named man is the one who will not survive.",
          ace: "Articulate who the four men are; connect their roles to the boat's teamwork; extend it to why naming a character shapes how we feel his fate."
        },
        {
          id: "oars", name: "The Oars and Shared Labor", image: "images/oars.webp",
          clues: ["The men take turns rowing and bailing, hour after hour.", "Exhausted, cold, and hungry, they keep the boat afloat together.", "Out of this shared work grows what Crane calls a 'subtle brotherhood of men.'"],
          identify: { q: "What do the oars and the men's turns at them show?", choices: ["The endless shared labor of rowing and bailing to stay alive", "A rowing race for sport", "A single man doing all the work", "An easy, restful voyage"] },
          purpose: { q: "What is the role of this shared labor in the story?", choices: ["It binds the men into a rare comradeship — a 'subtle brotherhood of men'", "It tires them for no reason", "It is done only by the cook", "It has no effect on them"] },
          significance: { q: "What does the brotherhood reveal about the story's meaning?", choices: ["Facing an indifferent nature, the men create meaning and loyalty among themselves", "The men dislike one another", "Nature rewards their teamwork with rescue", "The work makes them enemies"] },
          reveals: "The human solidarity forged by shared danger and effort.",
          conceals: "That solidarity cannot guarantee that all of them will live.",
          ace: "Articulate what the shared labor shows; connect it to the 'subtle brotherhood of men'; extend it to how crisis can bind people together."
        },
        {
          id: "sea-sky", name: "The Indifferent Sea and Sky", image: "images/sea-sky.webp",
          clues: ["The waves rise gray-green and slate-colored, endless and cold.", "The sea is beautiful yet utterly deadly to the men.", "Nothing in nature notices or cares whether they live or die."],
          identify: { q: "What does this artifact represent?", choices: ["Nature — the sea and sky — that is powerful yet completely indifferent to the men", "A friendly nature that protects sailors", "A storm sent to punish the men", "A calm, harmless pond"] },
          purpose: { q: "What is the sea and sky's role in the story?", choices: ["It is the vast, uncaring force the men struggle against", "It quickly carries them to shore", "It provides them food and water", "It has no role"] },
          significance: { q: "What does nature's indifference reveal about the story's meaning?", choices: ["It embodies naturalism — a universe that neither helps nor hates, simply does not care", "It shows nature loves the brave", "It proves the men were being punished", "It shows the sea is on their side"] },
          reveals: "The naturalist vision of an indifferent universe at the story's core.",
          conceals: "Whether human effort can matter at all against such a force.",
          ace: "Articulate what the sea and sky stand for; connect their indifference to naturalism; extend it to how an uncaring universe reshapes the meaning of struggle."
        },
        {
          id: "shore-people", name: "The People on the Shore Who Cannot Help", image: "images/shore-people.webp",
          clues: ["The men see a lighthouse and, later, people on the distant beach.", "The people on shore wave, but seem not to understand the danger.", "A hoped-for rescue never arrives in time."],
          identify: { q: "What do the men see near the shore?", choices: ["A lighthouse and people who wave but do not grasp their danger", "A rescue boat speeding toward them", "An empty, lifeless coast", "Another sinking ship"] },
          purpose: { q: "What is the role of the people on the shore?", choices: ["Their waving raises false hope of a rescue that never comes", "They immediately launch a rescue", "They cause the wreck", "They are imaginary"] },
          significance: { q: "What does this false hope reveal about the story's meaning?", choices: ["Even other humans cannot bridge the gap — the men are alone with the sea", "It shows help is always near", "It proves the shore is dangerous", "It shows the men refuse help"] },
          reveals: "The cruelty of a rescue in sight yet out of reach.",
          conceals: "How near to shore the deadliest moment still lies.",
          ace: "Articulate what the shore people do; connect their waving to false hope; extend it to how visible help can deepen a sense of isolation."
        },
        {
          id: "refrain", name: "\"If I Am Going to Be Drowned…\"", image: "images/refrain.webp",
          clues: ["The correspondent repeats a bitter question whenever hope fades.", "He asks why, if he is only going to drown, he was allowed to come so far.", "He expects the universe to make sense of his effort — and finds it does not."],
          identify: { q: "What is this repeated line?", choices: ["The correspondent's bitter refrain protesting an unfair, senseless fate", "A prayer of thanks", "A sailor's work song", "The captain's command"] },
          purpose: { q: "What is the refrain's role in the story?", choices: ["It voices the men's rage at a universe that ignores their struggle", "It cheers the men up", "It gives directions to shore", "It has no purpose"] },
          significance: { q: "What does the refrain reveal about the story's meaning?", choices: ["Humans demand fairness from a universe that offers none", "The universe always answers prayers", "The men have given up rowing", "Fate is clearly on their side"] },
          reveals: "The human hunger for meaning against an indifferent cosmos.",
          conceals: "That the effort demanded by fairness will not, by itself, save them.",
          ace: "Articulate what the refrain protests; connect it to naturalism; extend it to how people insist on fairness when the world offers none."
        },
        {
          id: "drowning", name: "The Drowning of the Oiler", image: "images/drowning.webp",
          clues: ["At last the men run the boat toward the breakers and swim for shore.", "The oiler, Billie — the strongest, who worked hardest at the oars — drowns in the surf.", "The injured captain, the cook, and the correspondent are pulled from the water alive."],
          identify: { q: "What happens in this final moment?", choices: ["The strongest man, the oiler, drowns while the others reach shore alive", "All four men die", "All four men reach shore safely", "The captain drowns and the oiler lives"] },
          purpose: { q: "What is this ending's role in the story?", choices: ["It delivers the story's central irony as the ordeal ends", "It rewards the hardest worker", "It begins the men's voyage", "It is a happy rescue"] },
          significance: { q: "What does the oiler's death reveal about the story's meaning?", choices: ["Nature is indifferent — strength and effort do not guarantee survival", "Hard work always earns survival", "The sea targeted the weakest man", "The men were saved by fate"] },
          reveals: "The story's bitter irony — the strongest, most deserving man is the one who dies.",
          conceals: "Any comfort that the universe rewards courage or effort.",
          ace: "Articulate what happens to the oiler; connect the irony to naturalism; extend it to why an unearned, unfair death makes the theme unforgettable."
        }
      ]
    },

    ctob: {
      name: "The Voice of the Sea",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The literary movement this story defines — a view of an uncaring universe — is ______. (one word)",
          evidence: ["The sea and sky do not care whether the men live or die.", "Humans are shown as small and shaped by forces beyond their control.", "The word begins with 'nat…' and names this kind of literature."],
          hints: ["A view of an indifferent, uncaring universe.", "Nat…", "The word is naturalism."],
          answer: "naturalism"
        },
        {
          type: "mc",
          prompt: "How do the four men come to be adrift in the dinghy?",
          options: [
            "Their steamer has sunk off the Florida coast.",
            "They set out on purpose to fish.",
            "They are racing another boat.",
            "They are exploring an island."
          ],
          hints: ["Something happened to their larger ship.", "Which option is a shipwreck?"]
        },
        {
          type: "mc",
          prompt: "Which man is the only one given a name in the story?",
          options: [
            "The oiler, named Billie.",
            "The captain.",
            "The cook.",
            "The correspondent."
          ],
          hints: ["He is the one who works hardest at the oars — and later drowns.", "Which option gives an actual name?"]
        },
        {
          type: "digit",
          prompt: "How many men are in the boat? Enter the number.",
          evidence: ["The dinghy holds a captain, a cook, an oiler, and a correspondent.", "Count each role: captain, cook, oiler, correspondent.", "It is one more than three."],
          hints: ["Captain, cook, oiler, correspondent.", "One more than three.", "The number is 4."],
          answer: "4"
        },
        {
          type: "sequence",
          prompt: "Put the men's ordeal in order, earliest first.",
          items: [
            "Their steamer sinks and four men climb into a tiny dinghy.",
            "They row and bail for a day and a night, forming a brotherhood.",
            "They see people on the shore who wave but cannot help them.",
            "They run for the breakers, and the oiler drowns in the surf."
          ],
          hints: ["It begins with the shipwreck.", "The shared rowing comes before they near the shore.", "The oiler's death is the final event."]
        },
        {
          type: "word",
          prompt: "The very small open boat the four men share is called a ______. (one word)",
          evidence: ["It is a tiny lifeboat, not a large ship.", "The word names a small open boat.", "The word begins with 'din…'."],
          hints: ["A very small open boat.", "Din…", "The word is dinghy."],
          answer: "dinghy"
        }
      ]
    },

    arcade: {
      name: "Nature's Indifference or Human Solidarity?",
      instruction: "Crane sets an indifferent nature against the loyalty the men build together. Sort each detail: does it show NATURE'S INDIFFERENCE (man against an uncaring nature), or HUMAN SOLIDARITY (the men bound together)? Reasoning earns the points.",
      buckets: [
        { id: "nature", label: "Nature's indifference (man vs. nature)", short: "Nature" },
        { id: "solidarity", label: "Human solidarity (men together)", short: "Solidarity" }
      ],
      cards: [
        { text: "The sea rises in cold, gray-green waves that do not care who lives.", bucket: "nature", why: "The waves show a nature that is powerful yet utterly indifferent." },
        { text: "The strongest man, the oiler, drowns in the surf.", bucket: "nature", why: "Nature spares no one for strength or effort — its indifference is total." },
        { text: "People on the shore wave but no rescue ever comes in time.", bucket: "nature", why: "The men are left alone against a sea that offers no help." },
        { text: "The correspondent asks why he was allowed to come so far only to drown.", bucket: "nature", why: "His refrain protests a universe that ignores human fairness." },
        { text: "The men take turns rowing and bailing hour after hour.", bucket: "solidarity", why: "Shared labor is the men working as one to survive." },
        { text: "Out of the ordeal grows a 'subtle brotherhood of men.'", bucket: "solidarity", why: "Crane names the loyalty the shared danger creates." },
        { text: "The injured captain quietly steadies and guides the crew.", bucket: "solidarity", why: "Care for one another holds the boat together." },
        { text: "On shore, others pull the survivors from the freezing water.", bucket: "solidarity", why: "Human hands, not nature, bring the men to safety at the end." }
      ],
      followup: "The men build brotherhood against a sea that never cares. Which detail shows this tension most powerfully, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "The men come to be adrift in the dinghy because —",
          options: [
            "their steamer has sunk off the coast of Florida.",
            "they chose to go fishing far from land.",
            "they are racing another crew.",
            "they are lost while exploring."
          ],
          why: "The story opens after a shipwreck leaves four men in a tiny lifeboat."
        },
        {
          q: "The story is a landmark example of literary naturalism because it presents —",
          options: [
            "a vast, indifferent universe in which humans are small and unprotected.",
            "a nature that rewards the brave and punishes the wicked.",
            "supernatural monsters and ghosts.",
            "a lighthearted comedy at sea."
          ],
          why: "Naturalism shows an uncaring universe indifferent to human effort."
        },
        {
          q: "The 'subtle brotherhood of men' in the story refers to —",
          options: [
            "the comradeship the four men build through shared labor and danger.",
            "a secret club they belonged to before the wreck.",
            "the people waving from the shore.",
            "a rescue crew that saves them."
          ],
          why: "The shared ordeal binds the men into a rare solidarity."
        },
        {
          q: "The story's central irony is that —",
          options: [
            "the oiler, the strongest and hardest-working man, is the one who drowns.",
            "the weakest man survives and the others die.",
            "no one in the boat survives.",
            "the men are rescued instantly."
          ],
          why: "The most capable man dies while the injured captain, cook, and correspondent live."
        },
        {
          q: "The repeated line 'If I am going to be drowned…' mainly reveals —",
          options: [
            "the men's rage at a universe that seems to ignore their struggle.",
            "the men's confidence that they will be saved.",
            "a happy memory of home.",
            "the captain's orders to the crew."
          ],
          why: "The refrain protests an indifferent fate that offers no fairness."
        }
      ],
      short: [
        "Choose one artifact from Salvage from the Dinghy. Explain what it is and what it reveals about the story's meaning.",
        "Explain how Crane uses the sea as a symbol. What does it stand for, and how does its indifference shape the theme?",
        "The strongest man drowns while weaker men live. Explain this irony and what it suggests about nature and human effort."
      ],
      paragraph: "Write an evidence-based paragraph. How does The Open Boat show humanity's insignificance before an indifferent nature? Make a claim and support it with specific details about the sea, the men's effort, and the oiler's death.",
      aceReflection: "Articulate what the story suggests about an indifferent universe in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "An Indifferent Universe",
      prompt: "In The Open Boat, nature does not care whether the men live or die, and they answer it with brotherhood and meaning of their own making. Choose another story, film, or real situation about people facing an indifferent nature or fate — or about solidarity forged in crisis. Explain the connection with evidence: what was the danger, how did people respond, and what did the situation reveal about their place in the universe?",
      format: "A short evidence-based comparison connecting the story's view of an indifferent universe (or its brotherhood-in-crisis) to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Crane shows an indifferent nature in The Open Boat. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Open Boat. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Open Boat because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Open Boat: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of an indifferent universe to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Open Boat for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Stephen Crane's The Open Boat as a study of naturalism, irony, symbolism, and the theme of human insignificance before an indifferent nature — and the solidarity people create in response. The story is public domain and is studied here as literature, with paraphrase and only brief public-domain quotations; the room reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "This story appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than 2030–2031. Confirm the current list and timeline for your campus.",
        "The story (1897) is public domain and is drawn from Crane's real 1897 shipwreck experience; it may be taught from your class's copy or any public-domain text.",
        "Teach as literature: naturalism (an indifferent universe), irony (the strongest man drowns), and symbolism (the sea as indifferent nature/fate; the boat as human solidarity), with the 'subtle brotherhood of men' and the repeated 'If I am going to be drowned' refrain.",
        "Content: a survival story in which a character (the oiler) drowns near the end. Note this for students and follow local policy.",
        "Fact-check the anchors used here (four men — captain, cook, oiler Billie, correspondent; the sunken steamer off Florida; the day-and-night ordeal; the lighthouse and people on the shore; the oiler's drowning while the others survive) and confirm the TEKS and ELPS alignment below against your course and current adoption."
      ]
    },
    standards: {
      teks: "Aligned to the English IV / high school ELAR TEKS (19 TAC Ch. 110) strands on literary movements, author's craft, symbolism, irony, point of view, and theme. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.6", "W.11-12.1", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
