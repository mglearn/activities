/* PlotPoint — The Tell-Tale Heart (Edgar Allan Poe, 1843).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room still does not
   reproduce the full text; famous lines (e.g., "the beating of his hideous
   heart") are paraphrased, not quoted. Standards are good-faith Common Core
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "poe",
  storageKey: "plotpoint.poe.v1",

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
    "vocab.title": "Words for The Tell-Tale Heart",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Scene of the Crime",
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
    "ctob.title": "Under the Floorboards",
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
    "arcade.title": "Sanity or Madness?",
    "arcade.default": "Sort each thing by what it really shows about the narrator.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
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
    "extend.title": "The Unreliable Narrator",
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
    "print.item.relic": "Scene-of-the-crime evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Unreliable-narrator organizer",
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
      title: "The Tell-Tale Heart",
      author: "Edgar Allan Poe",
      grades: "Grades 7–10",
      genre: "Gothic · Horror · Short story",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1843)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1843, The Tell-Tale Heart is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A classic horror story: it depicts a murder, dismemberment (described without gore), and a disturbed narrator. Intense mood but restrained detail. Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2148",
      audio: "https://librivox.org/the-works-of-edgar-allan-poe-raven-edition-volume-2-by-edgar-allan-poe/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Tell-Tale Heart — a single ray of lantern light crossing a dark room toward an old wooden floor."
    },
    hook: "A narrator swears he is not mad — and then, to prove how calm and clever he is, explains exactly how he murdered a harmless old man because he could not stand the look of his pale, filmy eye. But after he hides the body beneath the floor, a sound begins that only he can hear.",
    goals: [
      "Understand the story as a classic of psychological horror told by an unreliable narrator.",
      "Analyze how Poe builds suspense through the narrator's disturbed mind and the beating heart.",
      "Examine the irony of a narrator who insists he is sane while describing insane acts.",
      "Explore how guilt shapes the narrator's downfall, and transfer the idea to other stories."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an unreliable narrator.",
        "Discuss: Can the person telling a story be wrong — or lying — about what really happened?"
      ],
      during: [
        "Use the Scene of the Crime to slow down and read key objects and moments closely.",
        "Track every time the narrator insists he is sane, and ask whether the evidence agrees."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to compare the narrator to another unreliable storyteller."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the narrator kills the old man. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the narrator's claim that he is sane to one of his actions. Explain how putting them side by side changes how you read him." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of the unreliable narrator to another story, film, or situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "unreliable narrator", def: "A storyteller whose account cannot be fully trusted.", example: "A narrator who insists he is sane while describing a murder.", nonexample: "A calm, trustworthy witness who reports plainly.", context: "Poe's narrator is a famous unreliable narrator." },
      { term: "suspense", def: "The tense feeling of not knowing what will happen next.", example: "Waiting to see if the narrator will be caught.", nonexample: "A dull scene where nothing is at stake.", context: "Poe builds suspense as the heartbeat grows louder." },
      { term: "obsession", def: "A thought or urge a person cannot stop returning to.", example: "The narrator fixated on the old man's eye.", nonexample: "A passing thought quickly forgotten.", context: "The narrator's obsession with the eye drives the story." },
      { term: "paranoia", def: "Intense, irrational fear or suspicion.", example: "Hearing threats or sounds that are not really there.", nonexample: "A reasonable, calm response to real danger.", context: "The narrator's paranoia makes him hear the beating heart." },
      { term: "guilt", def: "The painful awareness of having done wrong.", example: "The feeling that finally makes the narrator confess.", nonexample: "A clear conscience with nothing to hide.", context: "Guilt, not the police, undoes the narrator." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "The narrator's obsession hinting at violence to come.", nonexample: "A detail with no connection to later events.", context: "Poe uses foreshadowing to build dread." },
      { term: "gothic", def: "A style of literature using gloom, fear, and the macabre.", example: "A dark house, a murder, and a haunting sound.", nonexample: "A bright, cheerful comedy.", context: "The Tell-Tale Heart is a classic gothic tale." },
      { term: "irony", def: "A gap between what is said or expected and what is true.", example: "A narrator 'proving' his sanity by describing madness.", nonexample: "A statement that means exactly what it says.", context: "The story runs on the irony of the narrator's claims." },
      { term: "macabre", def: "Disturbing because it deals with death and horror.", example: "Hiding a body beneath the floorboards.", nonexample: "A gentle, comforting scene.", context: "Poe is a master of the macabre." }
    ],

    relic: {
      name: "The Scene of the Crime",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "lantern", name: "The Shuttered Lantern", image: "images/lantern.webp",
          clues: ["Each night the narrator opens the old man's door very slowly.", "He carries a lantern closed so that no light escapes.", "He lets out a single thin ray to fall upon the old man's eye."],
          identify: { q: "What does the narrator do with the lantern?", choices: ["He releases a single ray of light onto the old man's eye", "He signals for help", "He reads by it", "He burns the house down"] },
          purpose: { q: "What is its role in the story?", choices: ["It shows the narrator's patient, methodical stalking of the old man", "It provides warmth", "It scares away intruders", "It has no purpose"] },
          significance: { q: "What does the careful lantern reveal?", choices: ["The narrator mistakes his cold planning for proof that he is sane", "That he is kind", "That he fears the dark", "That the old man is guilty"] },
          reveals: "How the narrator turns patience and control into 'evidence' of his sanity.",
          conceals: "That such calculation over an innocent man is itself a sign of madness.",
          ace: "Articulate what the lantern does; connect the narrator's care to his claim of sanity; extend it to how careful planning can hide a disturbed mind."
        },
        {
          id: "eye", name: "The Vulture Eye", image: "images/eye.webp",
          clues: ["The narrator says he loves the old man and wants nothing he owns.", "He is tormented by one thing: the old man's pale, filmy eye.", "He compares it to the eye of a vulture."],
          identify: { q: "What is the 'vulture eye'?", choices: ["The old man's pale, clouded eye that the narrator cannot bear", "A real vulture", "A painting", "A jewel"] },
          purpose: { q: "What is the eye's role in the story?", choices: ["It is the narrator's sole, irrational reason for the murder", "It watches over the house", "It hides money", "It belongs to the narrator"] },
          significance: { q: "What does killing over an eye reveal?", choices: ["The narrator's reasons are irrational — a sign of his disturbed mind", "That the eye was dangerous", "That the old man was cruel", "That eyes cause crimes"] },
          reveals: "How trivial and irrational the narrator's motive truly is.",
          conceals: "What deeper fear the eye might represent for him.",
          ace: "Articulate what the eye is; connect it to the narrator's motive; extend it to how an irrational fixation can drive terrible acts."
        },
        {
          id: "seven-nights", name: "The Seven Nights", image: "images/seven-nights.webp",
          clues: ["The narrator does not act at once.", "For seven nights in a row he watches the old man sleep.", "Each night the eye is closed, so he waits."],
          identify: { q: "What happens over the seven nights?", choices: ["The narrator secretly watches the sleeping old man, waiting for the eye to open", "The old man watches the narrator", "The police keep watch", "Nothing happens"] },
          purpose: { q: "What is their role in the story?", choices: ["They build dread and show the narrator's obsessive patience", "They pass the time pleasantly", "They warn the old man", "They are unimportant"] },
          significance: { q: "What does the week of watching reveal?", choices: ["An obsession so deep it overrides all reason and mercy", "That the narrator is bored", "That the old man is guilty", "That patience is a virtue here"] },
          reveals: "The depth of the narrator's obsession and self-control.",
          conceals: "How he justifies the watching to himself night after night.",
          ace: "Articulate what the seven nights show; connect patience to obsession; extend it to how obsession can grow over time."
        },
        {
          id: "bed", name: "The Heavy Bed", image: "images/bed.webp",
          clues: ["On the eighth night, the old man wakes.", "The narrator finally acts.", "He uses the heavy bed to end the old man's life."],
          identify: { q: "What role does the bed play?", choices: ["It is the means by which the narrator kills the old man", "It is where the narrator sleeps peacefully", "It hides the lantern", "It is a gift"] },
          purpose: { q: "What is its role in the story?", choices: ["It marks the moment the obsession turns into murder", "It provides comfort", "It signals the police", "It has no purpose"] },
          significance: { q: "What does the sudden act reveal?", choices: ["How obsession, once acted on, becomes deadly", "That the old man attacked first", "That the narrator was defending himself", "That the bed was cursed"] },
          reveals: "The turning point where thought becomes irreversible violence.",
          conceals: "The narrator's lack of any real remorse at the moment.",
          ace: "Articulate what happens at the bed; connect the murder to the obsession that led to it; extend it to how a fixed idea can end in harm."
        },
        {
          id: "floorboards", name: "The Floorboards", image: "images/floorboards.webp",
          clues: ["After the murder, the narrator must hide the body.", "He takes up three planks from the floor.", "He hides the old man beneath them and replaces the boards."],
          identify: { q: "What does the narrator do with the floorboards?", choices: ["He hides the body beneath them and replaces them", "He builds a new room", "He escapes through them", "He signals for help"] },
          purpose: { q: "What is their role in the story?", choices: ["They hold the secret that the narrator believes is perfectly hidden", "They decorate the room", "They trap the police", "They have no purpose"] },
          significance: { q: "What do the floorboards come to reveal?", choices: ["That a guilty conscience can betray even a 'perfect' hiding place", "That the house is haunted", "That floors are unsafe", "That the narrator is innocent"] },
          reveals: "The narrator's confidence that the crime is undetectable.",
          conceals: "The guilt already building beneath his calm.",
          ace: "Articulate what the floorboards hide; connect the hidden body to hidden guilt; extend it to how secrets can weigh on the mind."
        },
        {
          id: "police", name: "The Three Officers", image: "images/police.webp",
          clues: ["A neighbor reported a shriek in the night.", "Three police officers arrive to search the house.", "The narrator calmly invites them in and even sets his chair over the hiding place."],
          identify: { q: "Why do the police come?", choices: ["A neighbor heard a scream and reported it", "The narrator called them", "They came by chance", "The old man called them"] },
          purpose: { q: "What is their role in the story?", choices: ["Their calm visit tests the narrator's composure to the breaking point", "They arrest him at once", "They ignore him", "They leave immediately"] },
          significance: { q: "What does the narrator's boldness reveal?", choices: ["Overconfidence that will collapse under his own guilt", "That he is innocent", "That the police are foolish", "That the crime was justified"] },
          reveals: "The narrator's dangerous overconfidence in his own cleverness.",
          conceals: "How close his calm is to cracking.",
          ace: "Articulate why the police come; connect the narrator's boldness to his coming collapse; extend it to how overconfidence can undo a person."
        },
        {
          id: "heart", name: "The Beating Heart", image: "images/heart.webp",
          clues: ["As the narrator sits with the officers, he hears a sound.", "It is a low, quick beating, like a heart, growing louder and louder.", "He believes it is the dead man's heart beneath the floor."],
          identify: { q: "What sound does the narrator hear?", choices: ["A beating like a heart, growing louder beneath the floor", "Church bells", "The police whispering", "A knock at the door"] },
          purpose: { q: "What is the sound's role in the story?", choices: ["It drives the narrator to confess", "It leads the police to leave", "It wakes the old man", "It has no effect"] },
          significance: { q: "What does the beating heart most likely reveal?", choices: ["The narrator's own guilt and paranoia, not a real sound", "That the old man is alive", "That the police are lying", "That the house is haunted"] },
          reveals: "That guilt, not evidence, destroys the narrator.",
          conceals: "Whether the sound is his heartbeat, his imagination, or his conscience.",
          ace: "Articulate what the sound is; connect the beating heart to the narrator's guilt; extend it to how a guilty conscience can betray a person."
        }
      ]
    },

    ctob: {
      name: "Under the Floorboards",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "mc",
          prompt: "What about the old man torments the narrator and drives him to murder?",
          options: [
            "The old man's pale, filmy 'vulture' eye.",
            "The old man's money.",
            "The old man's cruelty.",
            "The old man's loud snoring."
          ],
          hints: ["The narrator says he wants nothing the old man owns.", "Which option is the 'vulture eye'?"]
        },
        {
          type: "digit",
          prompt: "The narrator watches the sleeping old man for seven nights. On which night does he finally kill him? Enter the number.",
          evidence: ["For seven nights the eye stays closed and he waits.", "He acts only when the eye opens at last.", "That is the night after the seven — the eighth."],
          hints: ["One night after the seven of watching.", "Seven plus one.", "It is the 8th night."],
          answer: "8"
        },
        {
          type: "word",
          prompt: "After the murder, the narrator hides the body beneath the ______. (one word)",
          evidence: ["He takes up several planks in the room.", "He puts the body in the space below and replaces the boards.", "He hides it under the ______, which begins with 'flo…'."],
          hints: ["The boards you walk on.", "Flo…", "The word is floor."],
          answer: "floor"
        },
        {
          type: "mc",
          prompt: "Why does the narrator finally confess to the police?",
          options: [
            "He hears a beating heart growing louder and cannot bear his own guilt.",
            "The police find the body first.",
            "A witness accuses him.",
            "He wants a reward."
          ],
          hints: ["Think about the sound only he can hear.", "Which option is about the beating heart and guilt?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of the story in order, earliest first.",
          items: [
            "The narrator becomes obsessed with the old man's eye.",
            "He watches the sleeping old man for seven nights.",
            "On the eighth night he kills him and hides the body under the floor.",
            "The police arrive, the beating grows louder, and he confesses."
          ],
          hints: ["It begins with the obsession.", "The nights of watching come before the murder.", "The confession is last."]
        },
        {
          type: "word",
          prompt: "From the very first line, the narrator insists over and over that he is not ______. (one word)",
          evidence: ["He wants to prove how calm and clever he is.", "He claims a disease sharpened his senses but did not destroy his reason.", "He denies he is ______, a word that begins with 'ma…'."],
          hints: ["The opposite of sane.", "Ma…", "The word is mad."],
          answer: "mad"
        }
      ]
    },

    arcade: {
      name: "Sanity or Madness?",
      instruction: "The narrator insists he is sane. Sort each thing: does the narrator offer it as PROOF OF HIS SANITY, or does it actually reveal his MADNESS? Reasoning earns the points.",
      buckets: [
        { id: "sanity", label: "Offered as proof of sanity", short: "'Proof' of sanity" },
        { id: "madness", label: "A sign of his madness", short: "Sign of madness" }
      ],
      cards: [
        { text: "He planned the crime carefully over many nights", bucket: "sanity", why: "The narrator offers his careful planning as proof he is not mad." },
        { text: "He moved slowly and cautiously so as not to wake the old man", bucket: "sanity", why: "He points to his patience and control as signs of a sound mind." },
        { text: "He cleaned so thoroughly that no stain remained", bucket: "sanity", why: "He treats his tidy cover-up as evidence of his cleverness." },
        { text: "He spoke calmly and boldly to the police at first", bucket: "sanity", why: "He offers his composure with the officers as proof of sanity." },
        { text: "He killed a harmless old man over the look of his eye", bucket: "madness", why: "Murder for such a reason is deeply irrational." },
        { text: "He claims to hear the dead man's heart beating", bucket: "madness", why: "Hearing the heartbeat reveals his paranoia, not reality." },
        { text: "He insists again and again that he is not mad", bucket: "madness", why: "Protesting his sanity so often suggests the opposite." },
        { text: "He suddenly confesses with no real evidence against him", bucket: "madness", why: "Confessing to a sound only he hears shows his mind unraveling." }
      ],
      followup: "The narrator says his careful planning proves he is sane. Does it? What makes him an 'unreliable narrator,' and how does Poe let us see past his claims?"
    },

    analysis: {
      mcq: [
        {
          q: "The narrator kills the old man because —",
          options: [
            "he is tormented by the look of the old man's pale, filmy eye.",
            "he wants the old man's money.",
            "the old man had wronged him.",
            "he was ordered to."
          ],
          why: "The narrator says he loves the old man and wants nothing he owns; only the eye drives him."
        },
        {
          q: "The Tell-Tale Heart is told by —",
          options: [
            "the murderer himself, an unreliable first-person narrator.",
            "a neutral outside observer.",
            "the old man.",
            "one of the police officers."
          ],
          why: "The story is a first-person confession by the killer, whose account we cannot fully trust."
        },
        {
          q: "Throughout the story, the narrator insists that —",
          options: [
            "he is not mad, but calm, clever, and sane.",
            "he feels deep sorrow for the old man.",
            "he cannot remember the night.",
            "someone else did it."
          ],
          why: "From the first line he protests his sanity — even as his actions suggest otherwise."
        },
        {
          q: "The narrator finally confesses because —",
          options: [
            "he hears the old man's heart beating louder and louder and cannot stand his guilt.",
            "the police discover the body.",
            "a neighbor identifies him.",
            "he is offered a deal."
          ],
          why: "It is the sound of the beating heart — his own guilt and paranoia — that breaks him."
        },
        {
          q: "The beating heart at the end most likely represents —",
          options: [
            "the narrator's own guilt and paranoia rather than a real sound.",
            "the old man coming back to life.",
            "a trick by the police.",
            "a ghost haunting the house."
          ],
          why: "Poe uses the imagined heartbeat to show that guilt, not evidence, destroys the narrator."
        }
      ],
      short: [
        "Choose one artifact from the Scene of the Crime. Explain what it is and what it reveals about the story's meaning.",
        "The narrator keeps insisting he is sane. Using two examples, explain why he is an unreliable narrator.",
        "What does the beating heart at the end represent? Explain how guilt, not the police, undoes the narrator."
      ],
      paragraph: "Write an evidence-based paragraph. How does Poe build suspense and horror in The Tell-Tale Heart without much blood or action? Make a claim and support it with specific details about the narrator, the eye, and the beating heart.",
      aceReflection: "Articulate what makes the narrator unreliable in your own words. Connect two details that develop it. Extend it to another unreliable narrator you know, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Unreliable Narrator",
      prompt: "Poe lets readers see the truth even though the narrator cannot. Choose another story, film, or show with a narrator or main character whose version of events cannot be fully trusted. Explain the connection to The Tell-Tale Heart with evidence: how do we, the audience, see past what the narrator claims?",
      format: "A short evidence-based comparison connecting Poe's unreliable narrator to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the narrator of The Tell-Tale Heart kills the old man. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Tell-Tale Heart. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Tell-Tale Heart because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Tell-Tale Heart: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to compare Poe's unreliable narrator to another story: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Tell-Tale Heart for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Poe's The Tell-Tale Heart: the unreliable narrator, the building of suspense, dramatic irony, and guilt as the narrator's undoing. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1843) is public domain. The linked Project Gutenberg edition (Works of Edgar Allan Poe, Raven Edition, Volume 2) and LibriVox recording are public domain — confirm the edition before assigning.",
        "Content: a classic horror tale depicting a murder and the hiding of a body; intense psychological mood, but restrained physical detail. Preview and follow local policy.",
        "Details here were checked against the story (the narrator's insistence that he is not mad; the old man's pale 'vulture' eye as the sole motive; seven nights of watching and the murder on the eighth; hiding the body beneath the floorboards; the three officers; the imagined beating heart that prompts the confession). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 7–10 ELAR TEKS (19 TAC Ch. 110) strands on point of view, narrator reliability, plot and suspense, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.6", "RL.8.1", "RL.8.2", "RL.9-10.1", "W.8.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
