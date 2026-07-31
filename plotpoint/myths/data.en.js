/* PlotPoint — Selected Myths (Thomas Bulfinch).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   Greek/Roman myths as retold by Bulfinch; standards ranges are those given by
   the build plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "myths",
  storageKey: "plotpoint.myths.v1",

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
    "enter.by": "retold by {a}",
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
    "enter.readListenNote": "These retellings are in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Myths",
    "vocab.intro": "{n} terms that unlock the myths. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Museum of Lost Myths",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — which myth is this from?",
    "relic.q.purpose": "Explain its role in the myth",
    "relic.q.significance": "Its meaning or lesson",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a myth pattern, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Who Stole the Fire?",
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
    "arcade.title": "Hero's Path",
    "arcade.default": "Sort each figure into the role it plays.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} figures sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every figure before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Figures to sort",
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
    "extend.title": "Make a Modern Myth",
    "extend.format": "Format",
    "extend.evidence": "The myth pattern or archetype I am building on",
    "extend.transfers": "What transfers to my modern myth",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern myth",
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
    "print.item.relic": "Museum evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Modern-myth organizer",
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
      title: "Selected Myths (Bulfinch)",
      author: "Thomas Bulfinch",
      grades: "Grades 6–9",
      genre: "Mythology · Classic retellings",
      time: "30–45 minutes",
      spoiler: "No spoilers",
      rights: "Bulfinch's retellings are public domain",
      textAccess: "Students need a public-domain edition of Bulfinch's retellings (such as The Age of Fable) or any classroom myth collection. This room does not reproduce the text.",
      copyright: "Bulfinch's 19th-century retellings are public domain; specific modern retellings or translations may carry their own copyright. Verify your edition.",
      contentNote: "Some myths include violence or mature themes. Preview selections for your grade and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/4928",
      audio: "https://librivox.org/bulfinch-age-of-fable/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Greek and Roman myths — a hero, gods, and a quest."
    },
    hook: "Long before novels, people explained the world with stories about gods, heroes, and monsters. These myths still echo in the movies, games, and words we use today.",
    goals: [
      "Identify common myth archetypes, such as the hero and the wise helper.",
      "Recognize the quest pattern and how it repeats across many myths.",
      "Explain how transformations and lessons (like hubris) give myths meaning.",
      "Transfer a myth pattern to a modern story of your own."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an archetype.",
        "Discuss: Why do so many stories, old and new, follow a hero on a quest?"
      ],
      during: [
        "Use the Museum to study one myth artifact at a time.",
        "Notice patterns that repeat from myth to myth — quests, helpers, transformations."
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull the patterns together.",
        "Complete the Extend task to make your own modern myth."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain one myth in your own words. Include one detail that shows the lesson or pattern it teaches." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two myths that share a pattern (a quest, a helper, a transformation, or hubris). Explain how seeing the pattern helps you understand both." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a myth pattern to a modern story you know. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "myth", def: "A traditional story, often about gods or heroes, that explains the world or teaches a lesson.", example: "A story of how fire came to humans.", nonexample: "A weather forecast.", context: "Each myth in this collection explains or teaches something." },
      { term: "archetype", def: "A character type or pattern that appears again and again across stories.", example: "The brave hero; the wise guide.", nonexample: "A random, one-time detail.", context: "The hero and the helper are archetypes found in myths and modern films alike." },
      { term: "quest", def: "A long journey or task a hero takes on to reach an important goal.", example: "Setting out to defeat a monster.", nonexample: "Staying home and doing nothing.", context: "Many myths follow a hero on a quest." },
      { term: "transformation", def: "A magical change from one form into another.", example: "A person turned into a tree or a spider.", nonexample: "Simply getting a haircut.", context: "Myths use transformation to explain how something in the world came to be." },
      { term: "hubris", def: "Dangerous, excessive pride that makes someone overreach and fall.", example: "Flying too close to the sun after being warned.", nonexample: "Asking for help when unsure.", context: "Icarus's fall is a warning about hubris." },
      { term: "mortal", def: "A being who will one day die; an ordinary human, as opposed to a god.", example: "A human hero.", nonexample: "An immortal god of Olympus.", context: "Myths often show mortals dealing with powerful gods." },
      { term: "immortal", def: "Never dying; living forever, as the gods do.", example: "Zeus, king of the gods.", nonexample: "An ordinary human.", context: "The immortal gods watch and shape the lives of mortals." },
      { term: "oracle", def: "A person or place that reveals messages or prophecies from the gods.", example: "Travelers visiting a shrine to ask about the future.", nonexample: "A weather app.", context: "A hero may visit an oracle to learn what he must do." },
      { term: "labyrinth", def: "A huge, confusing maze designed to trap whoever enters.", example: "The maze built to hold the Minotaur.", nonexample: "A straight, short hallway.", context: "Theseus needs help to escape the labyrinth." },
      { term: "allusion", def: "A brief reference to a well-known story, person, or idea.", example: "Calling a huge job a 'Herculean task.'", nonexample: "A word with no hidden reference.", context: "Myths give us allusions we still use in everyday language." }
    ],

    relic: {
      name: "The Museum of Lost Myths",
      intro: "Seven instructional reconstructions of objects from famous myths — teaching recreations, not copyrighted illustrations. Investigate which myth each comes from, what it did in the story, and the lesson it carries.",
      artifacts: [
        {
          id: "fire", name: "A Stolen Ember", image: "images/fire.png",
          clues: ["In this myth, a Titan pities humans living in cold and darkness.", "He carries fire down from the heavens as a gift to people.", "For this gift, the gods punish him severely."],
          identify: { q: "Which myth is this from?", choices: ["The myth of Prometheus, who brought fire to humans", "The myth of King Midas", "The myth of Icarus", "The myth of Pandora"] },
          purpose: { q: "What does this fire do in the myth?", choices: ["It gives humans warmth, tools, and the start of progress", "It turns everything to gold", "It lets people fly", "It traps a monster"] },
          significance: { q: "What does the myth teach?", choices: ["That a great gift can come with a terrible cost for defying the gods", "That gold always brings happiness", "That flying is safe", "That curiosity is always rewarded"] },
          reveals: "How myths explain the origins of human progress — and its price.",
          conceals: "Whether Prometheus's defiance was worth the punishment; the myth lets us judge.",
          ace: "Articulate what the fire stands for; connect the gift to its punishment; extend it to a modern discovery that helped people but also brought risk."
        },
        {
          id: "sandals", name: "Winged Sandals", image: "images/sandals.png",
          clues: ["These sandals have small wings at the heels.", "They let their wearer fly swiftly.", "A hero borrows them for his quest to defeat the snake-haired Medusa."],
          identify: { q: "Which myth are these from?", choices: ["Winged sandals of Hermes, lent to the hero Perseus", "Ariadne's thread", "Pandora's jar", "Midas's crown"] },
          purpose: { q: "What is their role in the myth?", choices: ["To let the hero move swiftly on his quest", "To turn things to gold", "To trap a monster", "To predict the future"] },
          significance: { q: "What pattern do they show?", choices: ["The archetype of the helper's gift that equips a hero for a quest", "That flying is always dangerous", "That gods never help mortals", "That gold is cursed"] },
          reveals: "The quest pattern: heroes rarely succeed alone — they receive help and tools.",
          conceals: "How much of the hero's success is his own courage, and how much the gift.",
          ace: "Articulate what the sandals do; connect them to the helper archetype; extend it to a 'gift' that helps a modern hero in a story you know."
        },
        {
          id: "thread", name: "A Ball of Thread", image: "images/thread.png",
          clues: ["A simple ball of thread becomes a lifesaving tool.", "A clever princess gives it to a hero entering a deadly maze.", "By unwinding it as he goes, the hero can find his way back out."],
          identify: { q: "Which myth is this from?", choices: ["Ariadne's thread, which helps Theseus escape the labyrinth", "The fire of Prometheus", "The wings of Icarus", "The gold of Midas"] },
          purpose: { q: "What is its role in the myth?", choices: ["To guide the hero safely out of the labyrinth", "To fly over the maze", "To turn the maze to gold", "To feed the monster"] },
          significance: { q: "What does it show?", choices: ["That cleverness and a helper's gift can beat brute strength", "That mazes are impossible to escape", "That heroes never need help", "That gold solves every problem"] },
          reveals: "The archetype of the wise helper whose small gift makes the quest survivable.",
          conceals: "Ariadne's own story, and what becomes of her after she helps.",
          ace: "Articulate how the thread saves the hero; connect it to the helper archetype; extend it to a small but crucial help in a modern story."
        },
        {
          id: "wings", name: "Wax-and-Feather Wings", image: "images/wings.png",
          clues: ["An inventor builds wings from feathers and wax to escape imprisonment.", "He warns his son not to fly too high or too low.", "The son ignores the warning, flies too near the sun, and falls."],
          identify: { q: "Which myth are these from?", choices: ["The wax wings of Daedalus and Icarus", "Hermes's sandals", "Pandora's jar", "Daphne's laurel"] },
          purpose: { q: "What is their role in the myth?", choices: ["To let father and son escape by flying to freedom", "To turn the sky to gold", "To trap a monster", "To tell the future"] },
          significance: { q: "What does the myth warn against?", choices: ["Hubris — overreaching pride that ignores wise limits", "Ever trying anything new", "Listening to parents", "Building inventions"] },
          reveals: "How myths teach through consequence: ignoring wise limits brings a fall.",
          conceals: "How much of the fall is Icarus's fault, and how much the danger of the invention itself.",
          ace: "Articulate the warning in this myth; connect it to the idea of hubris; extend it to a modern example of overreaching that ends badly."
        },
        {
          id: "jar", name: "A Sealed Jar", image: "images/jar.png",
          clues: ["A curious person is given a sealed container and told never to open it.", "Unable to resist, they open it.", "All the troubles of the world escape — but one thing, hope, remains inside."],
          identify: { q: "Which myth is this from?", choices: ["Pandora's jar (often called a 'box')", "Ariadne's thread", "Prometheus's ember", "Midas's cup"] },
          purpose: { q: "What is its role in the myth?", choices: ["To hold back the world's troubles until curiosity releases them", "To store gold", "To guide a hero", "To let someone fly"] },
          significance: { q: "What does the myth explain?", choices: ["Why the world has hardship — and why hope endures despite it", "That curiosity is always good", "That jars are magical", "That the gods are always kind"] },
          reveals: "How a myth can explain why suffering exists, yet still leave room for hope.",
          conceals: "Whether opening the jar was a mistake, or an unavoidable part of being human.",
          ace: "Articulate what escapes the jar and what remains; connect the myth to a lesson about curiosity; extend it to a modern 'opened box' with unexpected results."
        },
        {
          id: "laurel", name: "A Laurel Branch", image: "images/laurel.png",
          clues: ["A young woman is pursued by the god Apollo.", "To escape, she is transformed into a tree.", "Its evergreen leaves become a symbol of honor and victory."],
          identify: { q: "Which myth is this from?", choices: ["The laurel tree that Daphne becomes", "Icarus's wings", "Midas's gold", "Pandora's jar"] },
          purpose: { q: "What does this transformation do in the myth?", choices: ["It lets Daphne escape and explains where the laurel's meaning comes from", "It turns her to gold", "It gives her wings", "It traps a monster"] },
          significance: { q: "What does it show about myths?", choices: ["Transformation is used to explain a feature of the world, like the laurel as a symbol", "That trees are dangerous", "That gods always deserve to win", "That escape is impossible"] },
          reveals: "How myths use transformation to explain names, plants, and symbols around us.",
          conceals: "Daphne's own wishes, beneath a story often told from the god's point of view.",
          ace: "Articulate what changes in this myth; connect transformation to explaining the world; extend it to a modern symbol and the story behind it."
        },
        {
          id: "gold", name: "A Golden Touch", image: "images/gold.png",
          clues: ["A king wishes that everything he touches would turn to gold.", "At first he is delighted with his new power.", "Then he cannot eat or drink, because his food and cup turn to metal too."],
          identify: { q: "Which myth is this from?", choices: ["King Midas and his golden touch", "Prometheus's fire", "Ariadne's thread", "Daphne's laurel"] },
          purpose: { q: "What does the golden touch reveal about the wish?", choices: ["That getting exactly what you wish for can become a curse", "That gold is always good", "That kings are always wise", "That food does not matter"] },
          significance: { q: "What does the myth warn against?", choices: ["Greed and careless wishes, which bring ruin", "Sharing with others", "Thinking before acting", "Being generous"] },
          reveals: "How myths turn a simple wish into a lasting lesson about greed.",
          conceals: "How the king might have known better; the myth leaves us to decide.",
          ace: "Articulate the lesson of Midas; connect greed to its consequence; extend it to a modern 'be careful what you wish for' situation."
        }
      ]
    },

    ctob: {
      name: "Who Stole the Fire?",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Who defies the gods and steals fire to give it to humans? (one name)",
          evidence: ["A Titan pities humans living in cold and dark.", "He carries fire down from the heavens as a gift.", "His name begins with 'Prome…'."],
          hints: ["A Titan, not one of the Olympian gods.", "Prome…", "The name is Prometheus."],
          answer: "Prometheus"
        },
        {
          type: "digit",
          prompt: "How many famous Labors is the hero Hercules assigned to complete? Enter the number.",
          evidence: ["As a trial, the strongman hero must complete a set of near-impossible tasks.", "They are known as his Labors.", "The traditional number is a dozen."],
          hints: ["A dozen.", "More than ten.", "The number is 12."],
          answer: "12"
        },
        {
          type: "word",
          prompt: "What word names the dangerous, excessive pride that makes a character overreach and fall — as when Icarus flies too high? (one word)",
          evidence: ["Myths often punish those who think themselves above the gods or ignore wise limits.", "Icarus disregards the warning and flies too close to the sun.", "The Greek word begins with 'hu…'."],
          hints: ["It means dangerous over-pride.", "Hu…", "The word is hubris."],
          answer: "hubris"
        },
        {
          type: "sequence",
          prompt: "Put the stages of a classic hero's quest in order, earliest first.",
          items: [
            "The hero receives a call or a task.",
            "The hero faces trials and obstacles.",
            "The hero gains a reward or new knowledge.",
            "The hero returns home, changed."
          ],
          hints: ["It starts with a call to adventure.", "Trials come before any reward.", "The hero returns changed at the end."]
        },
        {
          type: "mc",
          prompt: "When Daphne becomes a laurel tree or Arachne becomes a spider, the myth is using —",
          options: [
            "transformation to explain a feature of the world or to teach a lesson.",
            "a math problem for the reader to solve.",
            "a modern news report.",
            "a recipe for cooking."
          ],
          hints: ["Think about the magical change in each story.", "Which option names that change?"]
        },
        {
          type: "word",
          prompt: "The huge maze where the Minotaur was kept, which Theseus escaped using Ariadne's thread, is called a ______. (one word)",
          evidence: ["The inventor Daedalus built a vast, confusing maze.", "The Minotaur was trapped at its center.", "The word begins with 'laby…'."],
          hints: ["A confusing maze.", "Laby…", "The word is labyrinth."],
          answer: "labyrinth"
        }
      ]
    },

    arcade: {
      name: "Hero's Path",
      instruction: "Myths repeat the same character roles, called archetypes. Sort each figure by the role they play: is this THE HERO who undertakes the quest, or A GUIDE OR HELPER who aids the hero? Reasoning — not speed — earns the points.",
      buckets: [
        { id: "hero", label: "The Hero (undertakes the quest)", short: "Hero" },
        { id: "helper", label: "The Guide or Helper (aids the hero)", short: "Helper" }
      ],
      cards: [
        { text: "Perseus, who sets out to defeat Medusa", bucket: "hero", why: "He takes on the dangerous quest himself — the hero role." },
        { text: "Theseus, who enters the labyrinth to face the Minotaur", bucket: "hero", why: "He undertakes the central challenge — the hero role." },
        { text: "Hercules, who must complete the Twelve Labors", bucket: "hero", why: "He performs the trials himself — the hero role." },
        { text: "Odysseus, who struggles for years to reach home", bucket: "hero", why: "His long journey home is his quest — the hero role." },
        { text: "Athena, goddess of wisdom, who advises and equips heroes", bucket: "helper", why: "She aids heroes with wisdom and gifts — the helper role." },
        { text: "Ariadne, who gives Theseus the thread to escape", bucket: "helper", why: "Her gift makes the hero's escape possible — the helper role." },
        { text: "Hermes, the messenger who guides heroes and lends winged sandals", bucket: "helper", why: "He guides and equips the hero — the helper role." },
        { text: "An oracle, who reveals what a hero must do", bucket: "helper", why: "The oracle guides the hero with knowledge — the helper role." }
      ],
      followup: "Modern stories still use these archetypes. Name a hero and a guide from a recent film, game, or book — how do they match the ancient pattern, and where do they differ?"
    },

    analysis: {
      mcq: [
        {
          q: "An 'archetype' in myth is —",
          options: [
            "a character type or pattern that appears again and again across stories.",
            "a single word borrowed from Latin.",
            "a kind of ancient map.",
            "a musical instrument."
          ],
          why: "Archetypes, like the hero and the wise guide, recur across many myths and modern stories."
        },
        {
          q: "Many myths follow a quest pattern in which the hero —",
          options: [
            "receives a call, faces trials, gains something, and returns changed.",
            "stays home and changes nothing.",
            "instantly wins with no struggle.",
            "never meets any helpers."
          ],
          why: "The call, the trials, the reward, and the changed return form the repeated shape of the hero's quest."
        },
        {
          q: "In myths, a transformation (like Daphne becoming a laurel) often works to —",
          options: [
            "explain a feature of the world or deliver a lesson.",
            "prove that people can really turn into trees.",
            "end the story with no meaning.",
            "describe the weather."
          ],
          why: "Transformations explain origins (a plant, a symbol) or carry a moral, rather than being literal claims."
        },
        {
          q: "The fall of Icarus is a classic example of —",
          options: [
            "hubris — dangerous pride that ignores wise limits.",
            "good luck.",
            "careful planning.",
            "a guaranteed happy ending."
          ],
          why: "Icarus ignores a clear warning and overreaches, the pattern Greek myths call hubris."
        },
        {
          q: "We still call a huge effort a 'Herculean task' because —",
          options: [
            "myths give us allusions — shared references that carry meaning into everyday language.",
            "Hercules invented the idea of tasks.",
            "the phrase has no connection to any myth.",
            "it is a scientific measurement."
          ],
          why: "The strength of Hercules survives as an allusion we still use to describe enormous effort."
        }
      ],
      short: [
        "Choose one artifact from the Museum. Explain which myth it comes from and what lesson or pattern that myth teaches.",
        "Pick a hero and a helper from the myths. Explain how each one fits its archetype.",
        "Explain one way a myth pattern — a quest, a transformation, or hubris — shows up in a modern movie, show, game, or book you know."
      ],
      paragraph: "Write an evidence-based paragraph. Why do you think these ancient myths are still told today? Choose one myth and explain what it still teaches modern readers, using specific details.",
      aceReflection: "Articulate one myth pattern in your own words. Connect two different myths that share it. Extend it to a modern story, and name where the comparison stops working."
    },

    extend: {
      name: "Make a Modern Myth",
      prompt: "Myths use heroes, helpers, quests, transformations, and lessons about pride or greed. Invent your own short modern myth, OR retell a myth pattern in a modern setting — a school, a city, or the internet. Include a hero, a challenge, and a lesson, the way the ancient myths do.",
      format: "A short modern myth (a few paragraphs), plus a note naming the myth pattern or archetype you used."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning about a Greek or Roman myth. Do not answer for me. Ask me one question at a time that helps me explain the myth and its lesson in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in these myths. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [myth one] connects to [myth two] because they share [pattern]. Challenge my connection with two questions. Do not replace my idea. Ask me to support my answer with details from the myths." },
      { title: "Evidence prompt", text: "Here is my claim about a myth: [claim]. Here is the evidence I chose: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to turn a myth pattern into a modern myth about [idea]. Give me two ways the pattern might fit and one reason each might not work. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of a myth for unsupported assumptions, missing evidence, and weak reasoning. Ask me questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces myth archetypes, the quest pattern, transformation, and hubris through evidence-based tasks. It never reproduces a copyrighted retelling, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your edition. Bulfinch's retellings (The Age of Fable) are public domain; specific modern retellings or translations may carry their own copyright.",
        "Myths vary by source and by Greek vs. Roman version (Zeus/Jupiter, Hercules/Heracles, 'Pandora's jar' vs. 'box'). Confirm the names and details your edition uses.",
        "These are broadly known myths (Prometheus and fire; the Twelve Labors of Hercules; Daedalus and Icarus; Ariadne's thread and the labyrinth; Pandora's jar; King Midas; Daphne's laurel). Confirm specifics against your text.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the middle-grades reading/response and multiple-genre ELAR TEKS (19 TAC Ch. 110) for grades 6–8, extendable to English I. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1–RL.9-10.1", "RL.6.2–RL.9-10.2", "RL.6.9–RL.9-10.9 (comparing myths & themes)", "W.6.9–W.9-10.9", "SL.6.1–SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
