/* PlotPoint — The Yellow Wallpaper (Charlotte Perkins Gilman, 1892).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "yellowwallpaper",
  storageKey: "plotpoint.yellowwallpaper.v1",

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
    "vocab.title": "Words for The Yellow Wallpaper",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Inside the Nursery Room",
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
    "ctob.title": "Behind the Pattern",
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
    "arcade.title": "What She Believes or What Is Real?",
    "arcade.default": "Sort each detail by whether it is the narrator's belief or the likely reality.",
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
    "extend.title": "Silenced and Confined",
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
    "print.item.relic": "Nursery-room evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Confinement organizer",
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
      title: "The Yellow Wallpaper",
      author: "Charlotte Perkins Gilman",
      grades: "Grades 9–12",
      genre: "Gothic · Psychological · Short story",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1892)",
      textAccess: "The story is short and public domain. Use the free link below, or your class's copy.",
      copyright: "Written in 1892, The Yellow Wallpaper is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "Mature content. The story depicts mental illness and postpartum depression, and follows a woman's psychological breakdown under enforced confinement. Preview carefully and align with local policy, student needs, and available support before assigning.",
      gutenberg: "https://www.gutenberg.org/ebooks/1952",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Yellow Wallpaper — a barred upstairs window in a dim room, faded yellow patterned wallpaper peeling from the wall, and an empty writing desk."
    },
    hook: "A woman is told she is only a little sick — a nervous condition — and that the cure is rest, and rest alone. No work. No writing. No visitors. Her physician husband moves her into a shuttered upstairs room with barred windows and horrible yellow wallpaper, and tells her to get well. So she watches the wallpaper. And the more she stares at its tangled pattern, the more certain she becomes that something is moving behind it.",
    goals: [
      "Understand the plot of Gilman's story and the 'rest cure' imposed on the narrator.",
      "Analyze the narrator as an increasingly unreliable first-person voice.",
      "Interpret the yellow wallpaper as a central symbol of confinement and the mind under pressure.",
      "Examine how gender roles and medical authority in the story silence and harm the narrator."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an unreliable narrator.",
        "Discuss: What happens to a person who is told their own feelings are not real?"
      ],
      during: [
        "Use the Nursery Room to slow down and track how the narrator's perceptions shift.",
        "Watch the wallpaper carefully — note each new thing the narrator claims to see in it."
      ],
      after: [
        "Run the breakout, arcade, and analysis to separate belief from reality and read the symbolism.",
        "Complete the Extend task to connect confinement and silencing to another situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how the 'rest cure' affects the narrator's mind over the course of the story. Include one detail that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the yellow wallpaper to the narrator's confinement. Explain how the pattern comes to stand for something larger than a wall covering." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's ideas about being silenced or not believed to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "unreliable narrator", def: "A storyteller whose account cannot be fully trusted.", example: "A narrator whose grip on reality slips as she tells her own story.", nonexample: "A calm outside observer with no stake in events.", context: "The narrator's journal becomes less and less reliable." },
      { term: "symbolism", def: "Using an object or image to stand for a larger idea.", example: "The wallpaper standing for the narrator's confinement.", nonexample: "A wall covering that means only itself.", context: "The story's power comes from its symbolism." },
      { term: "rest cure", def: "An old treatment that confined a patient to bed with no work or stimulation.", example: "The narrator forbidden to write, work, or see friends.", nonexample: "A treatment plan that encourages activity and purpose.", context: "John prescribes a strict rest cure." },
      { term: "confinement", def: "Being kept shut in a place, unable to leave.", example: "The narrator locked into an upstairs room all summer.", nonexample: "Coming and going freely as one pleases.", context: "Her confinement in the nursery drives the story." },
      { term: "postpartum", def: "Relating to the period after giving birth.", example: "A new mother struggling with deep, ongoing sadness.", nonexample: "A condition unrelated to childbirth.", context: "The narrator's suffering fits a postpartum depression." },
      { term: "point of view", def: "The perspective from which a story is told.", example: "A first-person journal written in secret by the narrator.", nonexample: "An all-knowing narrator who sees every character's mind.", context: "The first-person point of view traps us inside her thoughts." },
      { term: "patronize", def: "To treat someone as less capable, in a kindly-seeming but belittling way.", example: "John calling the narrator his 'little girl' and dismissing her worries.", nonexample: "Treating someone as a full equal.", context: "John patronizes the narrator throughout." },
      { term: "delusion", def: "A false belief held firmly despite evidence against it.", example: "The narrator's certainty that a woman is trapped in the wall.", nonexample: "An accurate observation everyone can confirm.", context: "Her delusions about the wallpaper deepen." },
      { term: "irony", def: "A gap between what is said or expected and what is really true.", example: "A 'cure' that makes the patient far worse.", nonexample: "A treatment that plainly does what it promises.", context: "There is bitter irony in calling her confinement a cure." }
    ],

    relic: {
      name: "Inside the Nursery Room",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "wallpaper", name: "The Yellow Wallpaper", image: "images/wallpaper.webp",
          clues: ["It covers the walls of the room in a sickly, faded yellow.", "Its pattern is tangled and confusing, and the narrator studies it for hours.", "She grows convinced there is a figure behind the pattern."],
          identify: { q: "What is the yellow wallpaper?", choices: ["The faded, patterned paper on the walls that obsesses the narrator", "A painting she brought with her", "A window covering", "A page from her journal"] },
          purpose: { q: "What is the wallpaper's role in the story?", choices: ["It becomes the focus of the narrator's obsession and her worsening state", "It decorates a cheerful room", "It is quickly replaced", "It has no importance"] },
          significance: { q: "What does the wallpaper come to symbolize?", choices: ["The constraints trapping the narrator and the state of her mind", "The family's wealth", "The changing seasons", "A gift from John"] },
          reveals: "The central symbol through which the narrator's decline is shown.",
          conceals: "How much of what she sees is real and how much is her mind.",
          ace: "Articulate what the wallpaper is; connect it to the narrator's confinement; extend it to how an object can carry a story's meaning."
        },
        {
          id: "window", name: "The Barred Windows", image: "images/window.webp",
          clues: ["The upstairs room has windows fitted with bars.", "The narrator is told the bars are because the room was once a nursery.", "Through them she can see the garden she is not free to enjoy."],
          identify: { q: "What is unusual about the room's windows?", choices: ["They are fitted with bars", "They are painted shut with no glass", "They are stained-glass art", "They open onto the sea"] },
          purpose: { q: "What is the barred windows' role in the story?", choices: ["They make the 'cure' room feel like a cell", "They keep out the cold", "They are purely decorative", "They let her escape"] },
          significance: { q: "What do the bars reveal about her situation?", choices: ["Her confinement is like an imprisonment, however it is described", "The house is very old", "She chose this room herself", "She is safe and content"] },
          reveals: "How the room of 'rest' doubles as a place of imprisonment.",
          conceals: "Whether the narrator fully grasps that she is being caged.",
          ace: "Articulate what the bars are; connect the barred room to the idea of confinement; extend it to how a 'safe' space can also trap someone."
        },
        {
          id: "journal", name: "The Secret Journal", image: "images/journal.webp",
          clues: ["The narrator has been forbidden to write.", "She keeps a hidden journal anyway, writing when no one is watching.", "The whole story is told through these private entries."],
          identify: { q: "What is the secret journal?", choices: ["The narrator's hidden writing, which forms the story we read", "A letter from John", "The doctor's notes", "A book she is assigned to read"] },
          purpose: { q: "What is the journal's role in the story?", choices: ["It is the narrator's only outlet, and our only view into her mind", "It is read aloud by John", "It records the weather", "It is never mentioned again"] },
          significance: { q: "What does the secret journal reveal?", choices: ["Her need to express herself despite being silenced", "That she is dishonest by nature", "That she enjoys the rest cure", "That she is a professional writer"] },
          reveals: "The narrator's suppressed voice, kept alive in secret.",
          conceals: "How trustworthy that voice becomes as she declines.",
          ace: "Articulate what the journal is; connect the secret writing to her silencing; extend it to why a suppressed voice finds a way out."
        },
        {
          id: "john", name: "John, the Physician Husband", image: "images/john.webp",
          clues: ["John is the narrator's husband and also her doctor.", "He insists nothing is truly wrong and prescribes rest.", "He speaks to her kindly but dismisses her own sense of what she needs."],
          identify: { q: "Who is John?", choices: ["The narrator's husband, who is also her physician", "A visiting stranger", "Her brother's friend", "The house's former owner"] },
          purpose: { q: "What is John's role in the story?", choices: ["He controls her treatment and her freedom in the name of care", "He encourages her to write", "He rarely appears", "He frees her from the room"] },
          significance: { q: "What does John reveal about the story's concerns?", choices: ["How loving intentions plus authority can still silence and harm", "That doctors are always right", "That she has no real problem", "That he means her harm"] },
          reveals: "The way affection and control combine to deny her voice.",
          conceals: "Whether John ever grasps the damage his 'cure' does.",
          ace: "Articulate who John is; connect his authority to her silencing; extend it to how good intentions can still cause harm."
        },
        {
          id: "creeping-woman", name: "The Woman in the Pattern", image: "images/creeping-woman.webp",
          clues: ["Staring at the wallpaper, the narrator begins to see a figure behind the pattern.", "She comes to believe it is a woman — then many women — trapped and creeping.", "By the end she identifies with this trapped figure."],
          identify: { q: "What does the narrator claim to see behind the pattern?", choices: ["A woman — then women — trapped and creeping", "A hidden door", "A painted garden", "Her husband's face"] },
          purpose: { q: "What is the creeping woman's role in the story?", choices: ["She is the narrator's deepening delusion and a mirror of herself", "She is a real intruder", "She is a servant", "She is a portrait on the wall"] },
          significance: { q: "What does the trapped woman symbolize?", choices: ["The narrator's own confinement projected onto the wall", "A ghost haunting the house", "A neighbor she envies", "The coming of winter"] },
          reveals: "How the narrator's mind turns her own trapped state into a vision.",
          conceals: "The line between what she imagines and what she has become.",
          ace: "Articulate what she sees; connect the trapped woman to the narrator herself; extend it to how a symbol can mirror a character's inner state."
        },
        {
          id: "bed", name: "The Nailed-Down Bed", image: "images/bed.webp",
          clues: ["A heavy bed sits fixed in the middle of the room.", "The narrator finds she cannot move it — it seems fastened to the floor.", "In her worsening state she claws and bites at it in frustration."],
          identify: { q: "What is unusual about the bed?", choices: ["It is heavy and seems fastened down, impossible to move", "It floats above the floor", "It is made of gold", "It is missing entirely"] },
          purpose: { q: "What is the immovable bed's role in the story?", choices: ["It underlines that the room resists her, like a locked cell", "It is a comfortable resting place", "It hides the journal", "It is where John sleeps"] },
          significance: { q: "What does her struggle with the bed reveal?", choices: ["How trapped and desperate she has become", "That the house is well furnished", "That she is fully recovered", "That she plans to leave"] },
          reveals: "The room itself resisting her, deepening her sense of being caged.",
          conceals: "How far her control has already slipped.",
          ace: "Articulate what the bed is; connect the fixed bed to her confinement; extend it to how a setting can mirror a character's helplessness."
        },
        {
          id: "peeling", name: "The Peeled-Away Paper", image: "images/peeling.webp",
          clues: ["Near the end, the narrator begins tearing the wallpaper down.", "She says she is freeing the trapped woman behind the pattern.", "She creeps around the room; when John sees her, he faints."],
          identify: { q: "What does the narrator do to the wallpaper at the end?", choices: ["She peels and tears it off the wall", "She paints over it", "She hangs new paper", "She photographs it"] },
          purpose: { q: "What is the peeling's role in the story?", choices: ["It marks the climax of her break with reality", "It is spring cleaning", "It prepares the room for guests", "It fixes the room"] },
          significance: { q: "What does tearing down the paper reveal?", choices: ["Her complete collapse — and her twisted attempt to be free", "That she has recovered", "That the paper was worthless", "That she is leaving happily"] },
          reveals: "The story's climax, where belief and breakdown meet.",
          conceals: "Whether any 'freedom' has truly been won.",
          ace: "Articulate what she does; connect the peeling to her breakdown; extend it to how a final image can hold both freedom and ruin."
        }
      ]
    },

    ctob: {
      name: "Behind the Pattern",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The story's central symbol — the thing the narrator becomes obsessed with — is the yellow ______. (one word)",
          evidence: ["It covers the walls of her room.", "Its tangled pattern draws her attention for hours.", "The word names a paper hung on walls, and begins with 'wall…'."],
          hints: ["It is hung on the walls of the room.", "Wall…", "The word is wallpaper."],
          answer: "wallpaper"
        },
        {
          type: "mc",
          prompt: "Who prescribes the narrator's treatment and controls her freedom?",
          options: [
            "John, her husband, who is also a physician.",
            "A stranger who rents the house.",
            "Her mother.",
            "A nurse hired for the summer."
          ],
          hints: ["He is both family and her doctor.", "Which option is her husband?"]
        },
        {
          type: "mc",
          prompt: "What treatment is the narrator forced to follow?",
          options: [
            "A 'rest cure' — no work, no writing, no visitors.",
            "Daily long walks and exercise.",
            "A strict schedule of study and work.",
            "Travel to a distant city."
          ],
          hints: ["She is told to do as little as possible.", "Which option forbids work and writing?"]
        },
        {
          type: "digit",
          prompt: "For how many months do the narrator and John rent the house for the summer? (She describes a single summer season.) Enter the number.",
          evidence: ["They take the house only for the warm season.", "A summer holiday of this kind runs about three months.", "The number is between two and four."],
          hints: ["A single summer season.", "About one quarter of the year.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the narrator's decline in order, earliest first.",
          items: [
            "John moves her into the upstairs room and orders complete rest.",
            "She grows fixated on the yellow wallpaper's pattern.",
            "She becomes convinced a woman is trapped behind the pattern.",
            "She peels the paper to 'free' her, creeping around the room as John faints."
          ],
          hints: ["It begins with the move and the rest cure.", "She must study the paper before she sees a figure in it.", "The peeling and John's faint are the final scene."]
        },
        {
          type: "word",
          prompt: "By the end, the narrator moves around the room on her hands — a word meaning to move low and slowly, like the figure she saw. She is ______. (one word)",
          evidence: ["She imagines a woman moving this way behind the pattern.", "In her breakdown she begins doing it herself around the room.", "The word means to move slowly and low to the ground, and begins with 'creep…'."],
          hints: ["To move slowly and low to the ground.", "Creep…", "The word is creeping."],
          answer: "creeping"
        }
      ]
    },

    arcade: {
      name: "What She Believes or What Is Real?",
      instruction: "The narrator is unreliable — her account and the likely reality drift apart. Sort each detail: does it show WHAT THE NARRATOR BELIEVES OR CLAIMS, or WHAT IS REALLY HAPPENING? Reasoning earns the points.",
      buckets: [
        { id: "believes", label: "What the narrator believes or claims", short: "She believes" },
        { id: "real", label: "What is really happening", short: "Reality" }
      ],
      cards: [
        { text: "A real woman is trapped and creeping behind the wallpaper.", bucket: "believes", why: "This is the narrator's delusion, not an event others can confirm." },
        { text: "The wallpaper's pattern moves and shifts on its own.", bucket: "believes", why: "She perceives movement in the paper as her mind slips." },
        { text: "She is getting better and only needs a little more rest.", bucket: "believes", why: "She and John claim improvement while she is clearly worsening." },
        { text: "Freeing the woman in the wall will set her free too.", bucket: "believes", why: "Her final belief blends the trapped figure with herself." },
        { text: "The narrator's mental state is steadily deteriorating.", bucket: "real", why: "The evidence of her journal shows a real decline." },
        { text: "The 'rest cure' is isolating her instead of healing her.", bucket: "real", why: "Enforced idleness and confinement make her worse." },
        { text: "She is confined to a room she is not free to leave.", bucket: "real", why: "The barred room and John's control are actual conditions." },
        { text: "By the end she is creeping around the room herself.", bucket: "real", why: "Her own behavior, seen when John enters, is really happening." }
      ],
      followup: "The gap between what the narrator believes and what is really happening is what makes her an unreliable narrator. Which detail was hardest to sort, and what does that difficulty reveal about how the story is told?"
    },

    analysis: {
      mcq: [
        {
          q: "The narrator's treatment in the story is —",
          options: [
            "a 'rest cure' that forbids her to work or write.",
            "a program of daily exercise and study.",
            "a long journey to a new city.",
            "surgery followed by recovery."
          ],
          why: "John prescribes enforced rest with no work, writing, or stimulation."
        },
        {
          q: "The room the narrator is confined to was formerly —",
          options: [
            "a nursery, with barred windows and a fixed bed.",
            "a grand ballroom.",
            "a library full of books.",
            "a kitchen."
          ],
          why: "She is placed in a former nursery with bars on the windows and an immovable bed."
        },
        {
          q: "As the story goes on, the narrator becomes convinced that —",
          options: [
            "a woman is trapped and creeping behind the wallpaper.",
            "the house is on fire.",
            "John is planning a party.",
            "she must return to work in the city."
          ],
          why: "Her obsession with the paper produces the vision of a trapped, creeping woman."
        },
        {
          q: "John's way of treating the narrator can best be described as —",
          options: [
            "loving but patronizing, dismissing her own sense of her needs.",
            "cruel and openly hateful.",
            "distant and completely uninvolved.",
            "eager to follow her every wish."
          ],
          why: "He is affectionate yet controlling, treating her worries as childish."
        },
        {
          q: "The yellow wallpaper is best understood as —",
          options: [
            "a symbol of the narrator's confinement and unraveling mind.",
            "a realistic description of home decorating.",
            "a clue to a hidden treasure.",
            "a gift that cheers her up."
          ],
          why: "The paper functions symbolically, standing for her constraint and mental state."
        }
      ],
      short: [
        "Choose one artifact from the Nursery Room. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the narrator becomes less reliable as the story goes on. Use two details to support your reading.",
        "The narrator's 'cure' makes her worse. What does the story suggest about how she is treated — and by whom?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Gilman use the yellow wallpaper as a symbol? Make a claim and support it with specific details about what the narrator sees in the paper and how her view of it changes.",
      aceReflection: "Articulate what the story suggests about being silenced or not believed, in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Silenced and Confined",
      prompt: "The narrator is told her feelings are not real and is confined for her own good — and it destroys her. Choose another story, film, or real situation in which someone is silenced, dismissed, or confined. Explain the connection with evidence: who held the power, how the person was silenced, and what it cost them.",
      format: "A short evidence-based comparison connecting the story's view of silencing and confinement to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the 'rest cure' affects the narrator's mind in The Yellow Wallpaper. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Yellow Wallpaper. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Yellow Wallpaper because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Yellow Wallpaper: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's ideas about being silenced or confined to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Yellow Wallpaper for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Gilman's The Yellow Wallpaper as a study of the unreliable narrator, symbolism, point of view, and the gendered medical control that silences the narrator. The story is public domain; a free text link is provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device. Because the story centers on mental illness and a psychological breakdown, preview the content and align it with local policy and available student supports.",
      reviewNotes: [
        "The story (1892) is public domain. The linked Project Gutenberg edition is a standalone text; verify the edition before assigning.",
        "Content: the story depicts mental illness and postpartum depression and follows a woman's psychological breakdown under enforced confinement. Preview carefully, align with local policy, and be ready to connect students with support. Best suited to high school.",
        "Details here were checked against the story (an unnamed first-person narrator; her physician husband John; the prescribed 'rest cure' forbidding work and writing; her secret journal; the rented colonial house and the upstairs former nursery with barred windows and a fixed bed; the hideous yellow wallpaper; John's sister Jennie keeping house; the vision of a woman, then women, creeping behind the pattern; the narrator peeling the paper to 'free' her; her creeping around the room; John fainting when he sees her). No lines are quoted; all details are paraphrased.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high school ELAR TEKS (19 TAC Ch. 110) strands on point of view, narrator reliability, symbolism, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.6", "RL.11-12.6", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
