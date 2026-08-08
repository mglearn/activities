/* PlotPoint — The Boarded Window (Ambrose Bierce, 1891).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "boardedwindow",
  storageKey: "plotpoint.boardedwindow.v1",

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
    "vocab.title": "Words for The Boarded Window",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Murlock's Cabin",
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
    "ctob.title": "The Truth Behind the Boards",
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
    "arcade.title": "Appearance or Reality?",
    "arcade.default": "Sort each detail by whether it was only how things seemed — or how they truly were.",
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
    "extend.title": "When Appearances Deceive",
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
    "print.item.relic": "Cabin evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Appearance-vs-reality organizer",
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
      title: "The Boarded Window",
      author: "Ambrose Bierce",
      grades: "Grades 9–12",
      genre: "Gothic · Horror · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1891)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1891 (in Tales of Soldiers and Civilians), The Boarded Window is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A frontier horror story about grief and a terrible mistake. A wife appears to die of fever; that night a panther drags at her body, and a final detail reveals she was still alive when it attacked. Disturbing and eerie but not gory in detail. Best for high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/375",
      audio: "https://librivox.org/in-the-midst-of-life-by-ambrose-bierce/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Boarded Window — a lonely log cabin in dark frontier forest, one window nailed over with rough boards, a single candle burning inside, and the faint yellow eyes of a panther in the trees."
    },
    hook: "Long ago, on the wild edge of the frontier, a man named Murlock lived alone in a cabin with one window nailed shut. No one remembered why. This is the story of that window — of the night his wife took a fever and seemed to die, of the vigil he kept beside her body, and of the thing that came out of the dark forest before morning. What Murlock learned at dawn is worse than any ghost.",
    goals: [
      "Follow Bierce's frame — the narrator explaining the mystery of a boarded-up window.",
      "Track the grim sequence of the night: illness, apparent death, the vigil, the panther, the dawn.",
      "Analyze how Bierce hides the true horror until a single final detail rearranges everything.",
      "Interpret the story's ideas about grief, isolation, and how appearances can deceive."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially vigil, delirium, and irony.",
        "Discuss: How can we misread a person who shows no obvious emotion? Can calm hide deep pain?"
      ],
      during: [
        "Use Murlock's Cabin to slow down and read the night step by step.",
        "Hold onto small details — the story's ending forces you to reread them."
      ],
      after: [
        "Run the breakout, arcade, and analysis to separate what seemed true from what was true.",
        "Complete the Extend task on how appearances deceive."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Murlock discovers at dawn, and why it is worse than believing his wife simply died. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Murlock's blank, tearless calm early in the story to the narrator's idea that deep grief can look like no feeling at all. Explain how that reframes how we judge him." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea that appearances deceive to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "frontier", def: "The wild, thinly settled edge of a country or region.", example: "Murlock's lonely cabin at the border of the deep forest.", nonexample: "A busy city downtown.", context: "The story is set on the American frontier around 1830." },
      { term: "recluse", def: "A person who lives alone and avoids other people.", example: "Murlock, who dwelt by himself for the rest of his life.", nonexample: "A popular host surrounded by friends.", context: "After that night, Murlock became a silent recluse." },
      { term: "vigil", def: "A period of staying awake to watch, especially over the sick or the dead.", example: "Murlock sitting through the night beside his wife's body.", nonexample: "Sleeping soundly through an ordinary night.", context: "His vigil is broken when exhaustion pulls him into sleep." },
      { term: "delirium", def: "A confused, disturbed state of mind, often caused by fever.", example: "The wife's feverish, wandering speech before she fell still.", nonexample: "A calm, clear-headed conversation.", context: "The fever throws her into delirium before she seems to die." },
      { term: "panther", def: "A large wild cat — here, a cougar of the American forests.", example: "The animal that slips through the window in the dark.", nonexample: "A small house cat asleep on a rug.", context: "A panther comes out of the woods to the smell of the body." },
      { term: "dread", def: "A deep fear that something terrible is coming.", example: "The heavy, waiting fear that hangs over the cabin at night.", nonexample: "Cheerful excitement about good news.", context: "Bierce builds dread long before the panther appears." },
      { term: "irony", def: "When the truth is the opposite of what was believed or expected.", example: "Murlock guards a 'dead' wife who is actually still alive.", nonexample: "Events turning out exactly as expected.", context: "The story's horror turns on a cruel irony." },
      { term: "grief", def: "Deep sorrow, especially over a loss.", example: "The numb, tearless grief the narrator says Murlock truly felt.", nonexample: "Mild disappointment over a small setback.", context: "Bierce argues that real grief can look like no feeling at all." }
    ],

    relic: {
      name: "Murlock's Cabin",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "cabin", name: "The Lonely Cabin", image: "images/cabin.webp",
          clues: ["Murlock lives by himself in a rough log cabin.", "It stands in thick forest on the frontier, far from any neighbors.", "One of its windows has been boarded up for as long as anyone can recall."],
          identify: { q: "Where does Murlock live?", choices: ["Alone in a log cabin deep in the frontier forest", "In a crowded town", "On a large plantation", "Aboard a ship"] },
          purpose: { q: "What is the cabin's role in the story?", choices: ["Its isolation traps Murlock alone with grief and danger", "It is a busy meeting place", "It is a shop", "It has no importance"] },
          significance: { q: "Why does the boarded window matter from the start?", choices: ["It is a mystery the whole story exists to explain", "It keeps out the rain", "It shows Murlock is wealthy", "It is only decoration"] },
          reveals: "The lonely, closed-in world where the horror can happen unseen.",
          conceals: "The reason one window is nailed shut — the story's central secret.",
          ace: "Articulate the setting; connect the isolation to Murlock's fate; extend it to how loneliness can deepen a tragedy."
        },
        {
          id: "murlock", name: "The Silent Recluse", image: "images/murlock.webp",
          clues: ["After the events of that night, Murlock lives on alone for many years.", "He becomes gaunt, gray, and stooped, though not truly that old.", "He never speaks of what happened, and never opens the boarded window."],
          identify: { q: "What kind of man does Murlock become?", choices: ["A silent recluse, aged before his time", "A cheerful traveler", "A wealthy merchant", "A soldier"] },
          purpose: { q: "What is Murlock's changed state's role?", choices: ["It signals that something shattering happened to him", "It shows he is lazy", "It proves he is guilty of a crime", "It has no role"] },
          significance: { q: "What does his broken condition suggest?", choices: ["A grief and horror so deep it hollowed out his whole life", "That he is simply old", "That he dislikes company for no reason", "That he fears the weather"] },
          reveals: "The lifelong damage left by a single night.",
          conceals: "Exactly what he saw — held back until the very end.",
          ace: "Articulate how Murlock changed; connect his ruin to the hidden event; extend it to how one experience can reshape an entire life."
        },
        {
          id: "fever", name: "The Fever", image: "images/fever.webp",
          clues: ["Murlock's young wife falls sick with a fever.", "She grows delirious, then after a few days sinks into stillness.", "Murlock believes she has died, for she shows no sign of life."],
          identify: { q: "What happens to Murlock's wife?", choices: ["She falls ill with fever and appears to die", "She leaves him", "She is attacked in the woods", "She recovers fully"] },
          purpose: { q: "What is the fever's role in the story?", choices: ["It creates the 'death' that turns out to be a mistake", "It cures her", "It warns of the panther", "It has no purpose"] },
          significance: { q: "Why is Murlock's belief that she is dead so important?", choices: ["Everything that follows depends on this being wrong", "It proves he is a doctor", "It shows the cabin is unsafe", "It ends the story"] },
          reveals: "The 'death' the whole horror is built on.",
          conceals: "That the fever may only have mimicked death, not caused it.",
          ace: "Articulate what the fever does; connect the false 'death' to the ending; extend it to how a confident judgment can be badly wrong."
        },
        {
          id: "vigil", name: "The Candle-Lit Vigil", image: "images/vigil.webp",
          clues: ["Murlock prepares the body for burial, showing little outward emotion.", "He sits at the table beside her through the night, a candle burning.", "Worn out with grief and exhaustion, he lays his head on his arms and falls asleep."],
          identify: { q: "What does Murlock do during the night?", choices: ["He keeps a vigil by the body and then falls asleep", "He digs a grave", "He rides for a doctor", "He leaves the cabin"] },
          purpose: { q: "What is the vigil's role in the story?", choices: ["His falling asleep leaves the body unguarded when the danger comes", "It frightens the panther away", "It wakes the wife", "It has no role"] },
          significance: { q: "What does his tearless calm really show, per the narrator?", choices: ["Grief so deep it can look like no feeling at all", "That he does not care", "That he is relieved", "That he is planning something"] },
          reveals: "The exhausted, misjudged calm that Bierce tells us is really deep grief.",
          conceals: "That sleep will hand the night to whatever comes next.",
          ace: "Articulate what Murlock does; connect his blank calm to hidden grief; extend it to how we misread people who don't show feeling."
        },
        {
          id: "window", name: "The Unshuttered Window", image: "images/window.webp",
          clues: ["On this night the window is open to the dark forest — not yet boarded.", "The smell of the body drifts out into the night air.", "Something is drawn out of the woods toward that open square of darkness."],
          identify: { q: "What is special about the window that night?", choices: ["It is open, letting the forest — and a predator — reach inside", "It is painted shut", "It is made of stained glass", "It looks onto a busy street"] },
          purpose: { q: "What is the window's role in the story?", choices: ["It is the opening through which the panther enters", "It lets in helpful neighbors", "It shows the sunrise", "It has no role"] },
          significance: { q: "Why will this window be boarded forever after?", choices: ["It is tied to the horror Murlock can never face again", "It lets in a draft", "It is broken beyond repair", "It blocks a nice view"] },
          reveals: "The very opening the title points to — and the way the danger gets in.",
          conceals: "What comes through it while Murlock sleeps.",
          ace: "Articulate the window's role; connect the open window to the boarded one; extend it to how we seal off memories too painful to face."
        },
        {
          id: "panther", name: "The Panther", image: "images/panther.webp",
          clues: ["In the night, a large panther comes out of the forest to the cabin.", "It seizes the body and begins to drag it toward the window.", "Waking in pitch dark, Murlock hears the struggle and fires his rifle blindly, and the animal flees."],
          identify: { q: "What comes into the cabin in the night?", choices: ["A panther from the forest", "A neighbor", "A ghost", "A bear cub"] },
          purpose: { q: "What is the panther's role in the story?", choices: ["Its attack is what finally reveals the terrible truth", "It saves the wife", "It guards the cabin", "It has no role"] },
          significance: { q: "Why does Murlock firing in the dark matter?", choices: ["He never sees what is happening until morning, so the truth is delayed", "It kills the panther instantly", "It wakes the neighbors", "It ends the fever"] },
          reveals: "The violent event that Murlock — and the reader — cannot see clearly in the dark.",
          conceals: "That the body it drags is not, in fact, dead.",
          ace: "Articulate what the panther does; connect the darkness to the delayed truth; extend it to how not seeing clearly can hide a terrible reality."
        },
        {
          id: "earfragment", name: "The Fragment of Ear", image: "images/earfragment.webp",
          clues: ["At dawn, Murlock finds the body has been moved and torn.", "His wife's hands are clenched, as if she fought.", "Between her teeth is a piece of the panther's ear — she was alive when it attacked."],
          identify: { q: "What does Murlock find between his wife's teeth at dawn?", choices: ["A fragment of the panther's ear", "A gold ring", "A scrap of cloth", "A leaf"] },
          purpose: { q: "What is this detail's role in the story?", choices: ["It proves she was alive and fought the panther", "It shows the panther was old", "It identifies the panther's owner", "It has no role"] },
          significance: { q: "Why is this the story's most horrifying moment?", choices: ["It means Murlock guarded — and lost — a wife who was never dead", "It proves the panther is dangerous", "It shows the window was open", "It ends the fever"] },
          reveals: "The single detail that rewrites the whole night: she was alive.",
          conceals: "Nothing now — it forces the reader to reread everything before it.",
          ace: "Articulate what the ear fragment proves; connect it to Murlock's mistaken 'death'; extend it to how one piece of evidence can overturn what we were sure we knew."
        }
      ]
    },

    ctob: {
      name: "The Truth Behind the Boards",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Murlock is certain his wife is ______ — but the ending proves he is wrong. (one word)",
          evidence: ["She grows still and shows no sign of life after her fever.", "He prepares her body for burial.", "The word is the opposite of 'alive,' and begins with 'de…'."],
          hints: ["The opposite of alive.", "De…", "The word is dead."],
          answer: "dead"
        },
        {
          type: "mc",
          prompt: "What animal comes out of the forest and into the cabin that night?",
          options: [
            "A panther.",
            "A wolf.",
            "A bear.",
            "A stray dog."
          ],
          hints: ["It is a large wild cat of the American forests.", "Which option is the big cat?"]
        },
        {
          type: "digit",
          prompt: "For about how many days is the wife ill before she seems to die? Enter the number.",
          evidence: ["Her fever runs its course over several days.", "The narrator says she sank into stillness after this many days.", "It is the number between two and four."],
          hints: ["More than two, fewer than four.", "Between 2 and 4.", "The number is 3."],
          answer: "3"
        },
        {
          type: "mc",
          prompt: "What does Murlock do during his night-long vigil beside the body?",
          options: [
            "Exhausted, he lays his head down and falls asleep.",
            "He rides away to fetch a doctor.",
            "He immediately buries her.",
            "He boards up the window."
          ],
          hints: ["His exhaustion leaves the body unguarded.", "Which option leaves him unaware of the night's events?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of that night in order, earliest first.",
          items: [
            "The wife falls ill with fever and appears to die.",
            "Believing her dead, Murlock keeps a vigil and falls asleep.",
            "A panther enters through the open window and seizes the body.",
            "At dawn a fragment of the panther's ear in her teeth reveals the truth."
          ],
          hints: ["The fever comes first.", "He must fall asleep before the panther can come unseen.", "The ear fragment is the final, dawn revelation."]
        },
        {
          type: "word",
          prompt: "The proof that his wife was alive during the attack is a fragment of the panther's ______, found in her teeth. (one word)",
          evidence: ["She had clenched it while fighting for her life.", "It is the part of the animal's head that hears.", "The word begins with 'ea…'."],
          hints: ["The part of the head used for hearing.", "Ea…", "The word is ear."],
          answer: "ear"
        }
      ]
    },

    arcade: {
      name: "Appearance or Reality?",
      instruction: "Bierce hides the real horror behind what only seems to be true. Sort each detail: was it merely HOW THINGS SEEMED (the appearance Murlock and others accepted), or HOW THINGS TRULY WERE (the reality revealed by the ending)? Reasoning earns the points.",
      buckets: [
        { id: "seemed", label: "How things seemed", short: "Seemed" },
        { id: "real", label: "How things truly were", short: "Reality" }
      ],
      cards: [
        { text: "The wife had quietly died of her fever.", bucket: "seemed", why: "Murlock accepted her stillness as death — but it wasn't." },
        { text: "Murlock felt little as he prepared the body.", bucket: "seemed", why: "His blank calm looked like coldness on the surface." },
        { text: "The night's struggle was only a bad dream.", bucket: "seemed", why: "Waking in the dark, Murlock half-believed he had dreamed it." },
        { text: "The boarded window was just an old settler's quirk.", bucket: "seemed", why: "To outsiders it seemed a meaningless habit, not a horror." },
        { text: "The wife was still alive when the panther came.", bucket: "real", why: "The ending proves she had not truly died." },
        { text: "She fought the animal with her own hands.", bucket: "real", why: "Her clenched fists show a real, desperate struggle." },
        { text: "A piece of the panther's ear was locked in her teeth.", bucket: "real", why: "The physical evidence is undeniable reality." },
        { text: "Murlock's numb calm was really deep grief.", bucket: "real", why: "The narrator tells us profound grief can look like no feeling." }
      ],
      followup: "The story's horror comes from the gap between appearance and reality. Which revealed reality is most disturbing to you, and why does hiding it until the end make it hit harder?"
    },

    analysis: {
      mcq: [
        {
          q: "The story is set —",
          options: [
            "in an isolated cabin on the American frontier around 1830.",
            "in a modern city apartment.",
            "aboard a sailing ship.",
            "in a royal palace."
          ],
          why: "Bierce places the tale in the lonely frontier wilderness near Cincinnati."
        },
        {
          q: "Murlock believes his wife has —",
          options: [
            "died of her fever.",
            "run away in the night.",
            "been carried off by the panther.",
            "fully recovered."
          ],
          why: "Her stillness after the fever convinces him she is dead — the mistaken belief the story turns on."
        },
        {
          q: "During his vigil, Murlock —",
          options: [
            "falls asleep at the table beside the body.",
            "stays fully awake all night.",
            "boards up the window.",
            "leaves to find help."
          ],
          why: "Exhaustion pulls him into sleep, leaving the body unguarded."
        },
        {
          q: "The narrator suggests Murlock's tearless calm early on is really —",
          options: [
            "grief so deep it looks like no feeling at all.",
            "genuine relief that she is gone.",
            "proof that he never loved her.",
            "a sign he expects her to wake."
          ],
          why: "Bierce explicitly reframes apparent coldness as profound grief."
        },
        {
          q: "The fragment of the panther's ear in the wife's teeth reveals that —",
          options: [
            "she was alive during the attack and fought the animal.",
            "the panther was already dead.",
            "Murlock had killed the panther.",
            "she died peacefully in her sleep."
          ],
          why: "The clenched teeth and torn ear prove she had not truly died — the story's final horror."
        }
      ],
      short: [
        "Choose one artifact from Murlock's Cabin. Explain what it is and what it reveals about the story's meaning.",
        "Explain the story's central irony. What does Murlock believe, and what is actually true — and how does Bierce delay the reveal?",
        "The narrator claims deep grief can look like no feeling at all. How does this idea change the way you judge Murlock's calm?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Bierce build horror by keeping the difference between appearance and reality hidden until the final sentence? Make a claim and support it with specific details from the vigil, the panther, and the ending.",
      aceReflection: "Articulate what the story suggests about appearances and grief in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "When Appearances Deceive",
      prompt: "Bierce's horror depends on a gap between what seems true and what is true — a 'dead' wife who is alive, a 'cold' man who is grieving. Choose another story, film, or real situation where appearances badly deceived someone. Explain the connection with evidence: what seemed true, what was actually true, and what the gap cost.",
      format: "A short evidence-based comparison connecting the story's appearance-vs-reality theme to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Murlock discovers at dawn in The Boarded Window and why it is so horrifying. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Boarded Window. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Boarded Window because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Boarded Window: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's appearance-vs-reality theme to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Boarded Window for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Ambrose Bierce's The Boarded Window as a study of gothic structure, irony, and the theme that appearances deceive. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1891, from Tales of Soldiers and Civilians / In the Midst of Life) is public domain. The linked Project Gutenberg edition and the linked LibriVox recording are the full collection, which contains The Boarded Window — confirm the specific story before assigning.",
        "Content: a frontier horror tale. A wife appears to die of fever; a panther drags at the body in the night; a final detail (a fragment of the animal's ear in her teeth) reveals she was alive during the attack. Eerie and disturbing but not gory in description. Best for high school; preview and follow local policy.",
        "Details here were checked against the story (the recluse Murlock; the isolated frontier cabin near Cincinnati, about 1830; the boarded window; the wife's fever, delirium, and apparent death after a few days; Murlock's tearless calm, which the narrator frames as deep grief; the night vigil and his falling asleep; the panther entering the unshuttered window and dragging the body; Murlock firing blindly in the dark; at dawn the moved body, clenched hands, and a fragment of the panther's ear between her teeth). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 9–12 ELAR TEKS (19 TAC Ch. 110) strands on plot structure, irony, point of view, gothic/mood, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.3", "RL.9-10.5", "RL.9-10.6", "RL.11-12.1", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
