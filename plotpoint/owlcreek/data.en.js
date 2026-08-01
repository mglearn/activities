/* PlotPoint — An Occurrence at Owl Creek Bridge (Ambrose Bierce, 1890).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. No audiobook link is
   provided (no clean single-work recording confirmed) — the free Gutenberg text
   link stands alone and the engine hides the audio button. Standards are
   good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "owlcreek",
  storageKey: "plotpoint.owlcreek.v1",

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
    "enter.readListen": "Read — free",
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "This story is in the public domain. This free, external resource opens in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for An Occurrence at Owl Creek Bridge",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Bridge and the Vision",
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
    "ctob.title": "The Falling Instant",
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
    "arcade.title": "Real or Illusion?",
    "arcade.default": "Sort each event by whether it really happened or was only in his mind.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Events to sort",
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
    "extend.title": "The Twist That Reframes Everything",
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
    "print.item.relic": "Bridge-and-vision evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Twist-ending organizer",
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
      title: "An Occurrence at Owl Creek Bridge",
      author: "Ambrose Bierce",
      grades: "Grades 9–12",
      genre: "Short story · Realism · Classic",
      time: "45–75 minutes",
      spoiler: "Reveals the twist",
      rights: "Public domain (1890)",
      textAccess: "The story is short and public domain. Use the free link below, or your class's copy.",
      copyright: "Written in 1890, An Occurrence at Owl Creek Bridge is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A Civil War story that opens with a man about to be hanged and ends with his death. War, execution, and a grim twist; no graphic gore. Best for high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/375",
      aiAudio: "https://archive.org/download/synapseml_gutenberg_an_occurrence_at_owl_creek_bridge_by_bie/an_occurrence_at_owl_creek_bridge_by_bie.mp3",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking An Occurrence at Owl Creek Bridge — a wooden railroad bridge over a slow creek at dawn, with a dangling rope."
    },
    hook: "A man stands on a railroad bridge with a noose around his neck, Union soldiers all around him. In the last instant before he drops, the rope snaps — and he escapes: into the river, past the bullets, all the way home to his wife's arms. Or does he? Ambrose Bierce tells one of literature's most famous twists, where a whole desperate escape unfolds in the space of a single breath.",
    goals: [
      "Understand the three-part structure of Bierce's story and how it withholds the truth.",
      "Analyze how point of view and time distortion trick the reader into believing an illusion.",
      "Trace the clues that hint the escape is not real.",
      "Interpret the story's twist and what it suggests about the mind, war, and death."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an unreliable perception (not just an unreliable narrator).",
        "Discuss: Can the mind stretch a single second into what feels like hours? When might that happen?"
      ],
      during: [
        "Use the Bridge and the Vision to slow down and read each part of the story closely.",
        "Track any detail in the 'escape' that feels dreamlike or too perfect to be real."
      ],
      after: [
        "Run the breakout, arcade, and analysis to separate what is real from what is illusion.",
        "Complete the Extend task to connect the twist to another story."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what really happens at the end of the story. Include one detail that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect one dreamlike detail of the 'escape' to the twist ending. Explain how the detail hints that the escape is not real." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's twist — a whole experience unfolding in an instant — to another story, film, or idea. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "illusion", def: "Something that seems real but is not.", example: "An escape that happens only in the mind.", nonexample: "An event that truly takes place.", context: "Most of the story turns out to be an illusion." },
      { term: "perception", def: "The way a person senses and understands the world.", example: "Time seeming to slow to a crawl.", nonexample: "A camera recording exactly what happens.", context: "Bierce follows Farquhar's perception, not the facts." },
      { term: "point of view", def: "The perspective from which a story is told.", example: "A narrator who reports only what one character seems to experience.", nonexample: "A god's-eye view that reveals the whole truth at once.", context: "The point of view lets Bierce hide the truth until the end." },
      { term: "hallucination", def: "A vivid experience of something that is not really there.", example: "Seeing and feeling a journey home while dying.", nonexample: "Watching an event that actually occurs.", context: "The escape is a dying man's hallucination." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "The rope, the soldiers, the noose in Part I.", nonexample: "A detail with no link to later events.", context: "The grim opening foreshadows the true ending." },
      { term: "saboteur", def: "A person who secretly damages or destroys something, often in war.", example: "Someone trying to burn a military bridge.", nonexample: "A soldier guarding the bridge.", context: "Farquhar is captured as a would-be saboteur." },
      { term: "irony", def: "A gap between what seems true and what is true.", example: "A thrilling 'escape' that is really a death.", nonexample: "An outcome exactly as expected.", context: "The story's power is its final, tragic irony." },
      { term: "suspense", def: "The tense uncertainty of not knowing what will happen.", example: "Following the escape and hoping he makes it.", nonexample: "Knowing the ending from the first line.", context: "Bierce builds suspense we later see was hollow." },
      { term: "plausible", def: "Seeming reasonable or believable.", example: "An escape described in realistic, convincing detail.", nonexample: "An obviously impossible fantasy.", context: "The illusion works because it feels so plausible." }
    ],

    relic: {
      name: "The Bridge and the Vision",
      intro: "Seven instructional reconstructions of moments and objects from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "bridge", name: "The Bridge and the Noose", image: "images/bridge.webp",
          clues: ["The story opens on a railroad bridge in wartime.", "A man stands on it with a rope around his neck.", "Union soldiers wait to carry out an execution."],
          identify: { q: "What is happening at the very start?", choices: ["A man is about to be hanged on a railroad bridge", "A battle is being fought", "A train is arriving", "A wedding is beginning"] },
          purpose: { q: "What is this opening scene's role?", choices: ["It sets the grim reality the rest of the story will seem to escape", "It ends the story", "It is a flashback", "It has no importance"] },
          significance: { q: "Why does Bierce open with the execution?", choices: ["So the reader forgets it during the 'escape' — until the twist returns to it", "To reveal the ending at once", "To show the man is safe", "To describe the scenery only"] },
          reveals: "The true situation the illusion will try to deny.",
          conceals: "That everything after the fall will be unreal.",
          ace: "Articulate the opening scene; connect it to the ending; extend it to how a story's beginning can hold the truth of its end."
        },
        {
          id: "farquhar", name: "Peyton Farquhar", image: "images/farquhar.webp",
          clues: ["The condemned man is a well-off Southern plantation owner.", "His name is Peyton Farquhar.", "He is a Confederate sympathizer, eager to help the cause."],
          identify: { q: "Who is Peyton Farquhar?", choices: ["The Southern planter about to be executed", "A Union general", "A railroad worker", "A spy for the North"] },
          purpose: { q: "What is his role in the story?", choices: ["He is the point-of-view character whose mind we follow", "He is a minor bystander", "He tells the story from safety", "He never appears"] },
          significance: { q: "Why does it matter that we follow only his mind?", choices: ["We experience his illusion as if it were real", "We learn the whole truth at once", "We see events from the soldiers' side", "We cannot know his thoughts"] },
          reveals: "The single, limited perspective that makes the trick possible.",
          conceals: "How unreliable that perspective becomes in his final moments.",
          ace: "Articulate who Farquhar is; connect the limited point of view to the illusion; extend it to how following one mind can shape what we believe."
        },
        {
          id: "scout", name: "The Federal Scout", image: "images/scout.webp",
          clues: ["A flashback explains how Farquhar was caught.", "A soldier in gray had visited his home, seeming to be Confederate.", "He was really a Union (Federal) scout, setting a trap."],
          identify: { q: "Who tricked Farquhar into his sabotage attempt?", choices: ["A Union scout disguised as a Confederate soldier", "His own brother", "A Confederate general", "A freed prisoner"] },
          purpose: { q: "What is the scout's role in the story?", choices: ["He is the trap that leads to Farquhar's capture and execution", "He rescues Farquhar", "He is the narrator", "He guards the bridge"] },
          significance: { q: "What does the disguise reveal about war in the story?", choices: ["Deception and traps, not open battle, decide Farquhar's fate", "That soldiers are always honest", "That Farquhar was a real threat", "That the war is far away"] },
          reveals: "How Farquhar was lured to his death by deception.",
          conceals: "That the reader is about to be deceived, too.",
          ace: "Articulate how the scout traps Farquhar; connect deception in the plot to the deception of the reader; extend it to how appearances can mislead."
        },
        {
          id: "watch", name: "The Ticking Watch", image: "images/watch.webp",
          clues: ["As Farquhar waits to die, his senses grow strangely sharp.", "He hears a slow, pounding sound like the strokes of a hammer.", "It is only the ticking of his own watch, stretched huge by his terror."],
          identify: { q: "What is the loud, pounding sound Farquhar hears?", choices: ["His own watch ticking, made huge by his heightened senses", "A cannon firing", "A drum in the distance", "A hammer building the bridge"] },
          purpose: { q: "What is this detail's role?", choices: ["It shows how his mind is distorting time and sound", "It signals the train", "It calls the soldiers", "It has no purpose"] },
          significance: { q: "Why does the stretched time matter?", choices: ["It prepares us for a long 'escape' that really lasts only an instant", "It proves he escapes", "It shows the watch is broken", "It slows the plot for no reason"] },
          reveals: "The mind's power to stretch a second into what feels like ages.",
          conceals: "That this very power will fill his final instant with a whole illusion.",
          ace: "Articulate what the ticking really is; connect distorted time to the coming illusion; extend it to how the mind can warp our sense of time."
        },
        {
          id: "rope", name: "The Snapped Rope", image: "images/rope.webp",
          clues: ["Farquhar drops from the bridge.", "In his mind, the rope breaks and he plunges into the creek below.", "He feels himself free, fighting up toward the surface and air."],
          identify: { q: "What seems to happen as Farquhar falls?", choices: ["The rope breaks and he falls into the creek, seemingly free", "He is pulled back onto the bridge", "The soldiers save him", "He wakes at home"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It begins the vivid 'escape' that fills his final instant", "It ends the story", "It is a true rescue", "It is a flashback"] },
          significance: { q: "What does the 'escape' really represent?", choices: ["The start of a dying man's hallucination, told as if real", "A lucky break that saves him", "A mistake by the soldiers", "A dream he has that night"] },
          reveals: "The turning point where illusion takes over the story.",
          conceals: "That the rope did not really break at all.",
          ace: "Articulate what seems to happen; connect the 'escape' to the mind's last vision; extend it to how hope can shape what a person perceives."
        },
        {
          id: "journey", name: "The Journey Home", image: "images/journey.webp",
          clues: ["Farquhar swims away, dodging the soldiers' bullets and cannon.", "He travels all day through a strange, wild forest.", "Everything is vivid — but oddly dreamlike and too perfect."],
          identify: { q: "What does Farquhar seem to do after escaping the creek?", choices: ["Travel home through the forest to his wife", "Rejoin the Confederate army", "Hide in a cave forever", "Surrender to the Union"] },
          purpose: { q: "What is the journey's role in the story?", choices: ["It is the long, vivid heart of the illusion", "It is a true account of his escape", "It is a memory from before the war", "It is unimportant"] },
          significance: { q: "What details hint the journey is not real?", choices: ["Its dreamlike, too-perfect, strangely painful quality", "Its dull, ordinary realism", "That it is very short", "That soldiers narrate it"] },
          reveals: "How convincingly the mind can build an entire false world.",
          conceals: "That no time is really passing at all.",
          ace: "Articulate the journey home; connect its dreamlike details to the twist; extend it to how a vivid story can hide that it is not true."
        },
        {
          id: "twist", name: "The Twist", image: "images/twist.webp",
          clues: ["Farquhar reaches his home and sees his wife waiting.", "He steps forward to take her in his arms.", "In that instant, a blinding shock — and the truth: he is dead at the end of the rope, his neck broken."],
          identify: { q: "What is the story's twist ending?", choices: ["The escape was an illusion; Farquhar dies on the bridge", "He reaches his wife and lives", "He rejoins the army", "He was dreaming and wakes up"] },
          purpose: { q: "What is the twist's role in the story?", choices: ["It reveals that the whole escape happened in an instant, in his dying mind", "It rewards the hero", "It starts a sequel", "It is a minor detail"] },
          significance: { q: "Why is the twist so powerful?", choices: ["The reader believed the illusion just as fully as Farquhar did", "Because it was obvious all along", "Because it changes nothing", "Because it is a happy ending"] },
          reveals: "Bierce's masterstroke: a lifetime of escape compressed into a dying breath.",
          conceals: "Nothing more — the truth of the opening scene returns.",
          ace: "Articulate the twist; connect it back to the opening bridge scene; extend it to why a twist that reframes everything can be so unforgettable."
        }
      ]
    },

    ctob: {
      name: "The Falling Instant",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "Into how many numbered parts (sections) is the story divided? Enter the number.",
          evidence: ["The story is told in clearly numbered sections.", "Part I is the bridge; Part II is the flashback; Part III is the 'escape.'", "Count the parts."],
          hints: ["The bridge, the flashback, and the escape.", "One more than two.", "It has 3 parts."],
          answer: "3"
        },
        {
          type: "mc",
          prompt: "What is about to happen to the man at the start of the story?",
          options: [
            "He is about to be hanged by Union soldiers on a railroad bridge.",
            "He is about to lead a cavalry charge.",
            "He is about to board a train home.",
            "He is about to be freed."
          ],
          hints: ["Note the rope and the soldiers.", "Which option is the execution?"]
        },
        {
          type: "mc",
          prompt: "How was Farquhar lured into the trap that led to his capture?",
          options: [
            "A Union scout in a Confederate disguise tricked him.",
            "He was betrayed by his own wife.",
            "He surrendered on purpose.",
            "He was captured in open battle."
          ],
          hints: ["The soldier who visited his home was not who he seemed.", "Which option is the disguised Union scout?"]
        },
        {
          type: "word",
          prompt: "The story is set during the American Civil ______. (one word)",
          evidence: ["It features Union and Confederate soldiers.", "The setting is the 1860s American South.", "The word names the conflict and begins with 'wa…'."],
          hints: ["The 1860s conflict between North and South.", "Wa…", "The word is War."],
          answer: "War"
        },
        {
          type: "sequence",
          prompt: "Put the story's events in order, earliest first.",
          items: [
            "Farquhar stands on the bridge with a noose, about to be hanged.",
            "A flashback shows how a disguised Union scout lured him into the trap.",
            "The rope seems to break and he escapes through the river and forest.",
            "As he reaches his wife, the vision ends — he is dead at the end of the rope."
          ],
          hints: ["It begins on the bridge.", "The flashback explains how he got there before the 'escape.'", "The twist — his death — comes last."]
        },
        {
          type: "word",
          prompt: "The whole thrilling escape was not real — it was an ______ in the instant before death. (one word)",
          evidence: ["The rope never actually broke.", "The journey home happened only in his dying mind.", "The word means something that seems real but is not, and begins with 'ill…'."],
          hints: ["Something that seems real but is not.", "Ill…", "The word is illusion."],
          answer: "illusion"
        }
      ]
    },

    arcade: {
      name: "Real or Illusion?",
      instruction: "Bierce tells a dying man's hallucination as if it were really happening. Sort each event: did it REALLY HAPPEN in the story's world, or was it only an ILLUSION in Farquhar's mind? Reasoning earns the points.",
      buckets: [
        { id: "real", label: "Really happened", short: "Real" },
        { id: "illusion", label: "Only in his mind (illusion)", short: "Illusion" }
      ],
      cards: [
        { text: "Farquhar is a planter eager to help the Confederate cause.", bucket: "real", why: "This is his true history, given in the flashback." },
        { text: "A disguised Union scout tricks him into the sabotage attempt.", bucket: "real", why: "The trap really happened; it led to his capture." },
        { text: "He is captured and brought to Owl Creek Bridge to be hanged.", bucket: "real", why: "The execution is the story's real frame." },
        { text: "He dies at the end of the rope, his neck broken.", bucket: "real", why: "The twist confirms this is what truly happens." },
        { text: "The rope snaps and he plunges free into the creek.", bucket: "illusion", why: "The 'escape' is the start of his dying vision." },
        { text: "He dodges the soldiers' bullets and swims to safety.", bucket: "illusion", why: "Part of the hallucination, not reality." },
        { text: "He travels all day through the forest toward home.", bucket: "illusion", why: "An entire journey imagined in a single instant." },
        { text: "He reaches his house and sees his wife waiting.", bucket: "illusion", why: "The last image of the vision, cut off by death." }
      ],
      followup: "Bierce hides the twist by telling the illusion as if it were real, through Farquhar's own eyes. How does the point of view fool the reader — and when did you first suspect the truth?"
    },

    analysis: {
      mcq: [
        {
          q: "At the start of the story, Peyton Farquhar is —",
          options: [
            "about to be hanged by Union soldiers on Owl Creek Bridge.",
            "leading a Confederate attack.",
            "returning home from the war.",
            "hiding from the army."
          ],
          why: "Part I establishes the execution that frames the whole story."
        },
        {
          q: "The flashback (Part II) reveals that Farquhar was —",
          options: [
            "tricked by a disguised Union scout into a sabotage attempt.",
            "a Union spy all along.",
            "captured in a great battle.",
            "arrested for a crime unrelated to the war."
          ],
          why: "A Federal scout in Confederate disguise set the trap that doomed him."
        },
        {
          q: "Most of Part III describes —",
          options: [
            "a vivid escape home that is revealed to be a dying hallucination.",
            "a real and successful escape.",
            "a second battle at the bridge.",
            "Farquhar's trial."
          ],
          why: "The long 'escape' is the illusion that fills his final instant."
        },
        {
          q: "The twist ending reveals that —",
          options: [
            "the escape never happened; Farquhar dies at the end of the rope.",
            "Farquhar reaches home and survives.",
            "the soldiers let him go.",
            "the whole story was a dream he wakes from."
          ],
          why: "The final line returns to the bridge: he is dead, his neck broken."
        },
        {
          q: "Bierce fools the reader mainly by —",
          options: [
            "telling the illusion through Farquhar's own distorted perception, as if it were real.",
            "hiding facts the narrator knows.",
            "using many unreliable witnesses.",
            "changing the setting every page."
          ],
          why: "The limited point of view and stretched sense of time make the illusion feel true."
        }
      ],
      short: [
        "Choose one artifact from the Bridge and the Vision. Explain what it is and what it reveals about the story's meaning.",
        "Find two details in the 'escape' that hint it is not real, and explain how each is a clue.",
        "Explain how Bierce uses point of view and the distortion of time to trick the reader. Why is the trick so effective?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Bierce make the reader believe an illusion, only to overturn it at the end? Make a claim and support it with specific details about structure, point of view, and the twist.",
      aceReflection: "Articulate what really happens in the story in your own words. Connect two clues that hinted at the truth. Extend the idea of a moment stretched into a whole experience to another story, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Twist That Reframes Everything",
      prompt: "Bierce ends with a twist that forces you to reread everything you just believed. Choose another story, film, or show with a twist that reframes the whole thing (for example, a dream, a death, or a hidden identity revealed at the end). Explain the connection with evidence: what did the twist change, and how were readers or viewers set up to be fooled?",
      format: "A short evidence-based comparison connecting Bierce's twist to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what really happens at the end of An Occurrence at Owl Creek Bridge. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in An Occurrence at Owl Creek Bridge. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [clue] connects to the twist in An Occurrence at Owl Creek Bridge because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about An Occurrence at Owl Creek Bridge: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Bierce's twist to another story with a big twist: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of An Occurrence at Owl Creek Bridge for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Bierce's An Occurrence at Owl Creek Bridge as a study of structure, point of view, time distortion, and the twist ending. The story is public domain; a free full-text link is provided (no single-work audiobook is linked). The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1890) is public domain. The linked Project Gutenberg edition is a standalone text. No LibriVox link is included because a clean single-work recording was not confirmed; students can use a device read-aloud on the free text.",
        "Content: a Civil War execution by hanging and the protagonist's death. War and mortality, but no graphic gore. Best for high school; preview and follow local policy.",
        "This room reveals the twist by design (it is a study of how the twist works). If you want students to discover it while reading, assign the story first, then the room.",
        "Details here were checked against the story (Peyton Farquhar, a Southern planter and Confederate sympathizer; the three-part structure; the opening execution on Owl Creek Bridge; the flashback in which a disguised Federal scout lures him into a sabotage attempt; the heightened perception and the ticking watch; the imagined escape through creek and forest; the final twist that he dies at the end of the rope). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 9–12 ELAR TEKS (19 TAC Ch. 110) strands on plot structure, point of view, author's purpose, and analysis of an author's craft (especially the twist and time distortion), with cross-curricular ties to U.S. history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.3", "RL.9-10.5", "RL.9-10.6", "RL.11-12.1", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
