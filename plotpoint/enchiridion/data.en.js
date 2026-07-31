/* PlotPoint — The Enchiridion (Epictetus).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   facts about Epictetus and the Enchiridion. Standards are real, applicable
   Common Core codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs
   review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "enchiridion",
  storageKey: "plotpoint.enchiridion.v1",

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
    "enter.readListenNote": "This handbook is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Enchiridion",
    "vocab.intro": "{n} terms that unlock Stoic practice. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Handbook",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role for Epictetus",
    "relic.q.significance": "The Stoic idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a Stoic idea, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "What Is Up to Us",
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
    "arcade.title": "Fact or Judgment?",
    "arcade.default": "Sort each statement into what it really is.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Philosophical Analysis",
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
    "extend.title": "Write Your Own Handbook",
    "extend.format": "Format",
    "extend.evidence": "The Stoic rule I am building on",
    "extend.transfers": "What transfers to my situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the rule stops working",
    "extend.response": "My handbook rules",
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
    "print.item.relic": "Handbook evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Your-handbook organizer",
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
      title: "The Enchiridion",
      author: "Epictetus",
      grades: "Grades 9–12",
      genre: "Philosophy · Stoicism",
      time: "30–45 minutes",
      spoiler: "No spoilers",
      rights: "Ancient Greek original and classic translations are public domain",
      textAccess: "Students need a public-domain translation of the Enchiridion (for example, Elizabeth Carter's). This room does not reproduce the text.",
      copyright: "The Greek original and older translations (such as Elizabeth Carter's) are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "Practical philosophy that discusses loss, death, and self-control in a calm, matter-of-fact way. Preview for reading level and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/45109",
      audio: "https://librivox.org/the-enchiridion-by-epictetus/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Epictetus's handbook — a simple lamp and an open book."
    },
    hook: "Epictetus was born a slave and became one of Rome's most respected teachers. His 'handbook' is a short set of rules for staying free inside — no matter what happens outside.",
    goals: [
      "Understand who Epictetus was and what a 'handbook' (Enchiridion) is for.",
      "Explain the Stoic dichotomy of control and Epictetus's claim that our judgments — not events — disturb us.",
      "Analyze Stoic images such as the actor's role, the two handles, and loving things as breakable.",
      "Transfer Stoic rules by writing a practical handbook for a challenge of your own."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a 'handbook' for living.",
        "Discuss: When something goes wrong, is it the event that upsets you, or the way you think about it?"
      ],
      during: [
        "Use the Relic Room to examine one rule or image at a time.",
        "For each rule, ask: what is up to me here, and what is not?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull the Stoic rules together.",
        "Complete the Extend task by writing your own short handbook."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words Epictetus's claim that our judgments, not events, disturb us. Include one detail from the handbook that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Epictetus's rules or images (for example, the two handles and loving things as breakable). Explain how together they shape a Stoic way of living." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a rule from the Enchiridion to a challenge people face today. Explain what transfers, what changes, and where the rule stops working." }
    },

    vocab: [
      { term: "Stoicism", def: "An ancient philosophy that teaches living by reason and virtue and staying calm about what we cannot control.", example: "Staying steady when things go wrong.", nonexample: "Falling apart at every setback.", context: "The Enchiridion is a classic handbook of Stoicism." },
      { term: "judgment", def: "The opinion or interpretation you form about something.", example: "Deciding an event is a 'disaster.'", nonexample: "The plain fact of what happened.", context: "Epictetus says our judgments, not events, are what disturb us." },
      { term: "impression", def: "The immediate appearance of something to the mind, before you judge it.", example: "The first flash of 'this is terrible.'", nonexample: "A careful conclusion after thinking it through.", context: "Epictetus urges us to test each impression before accepting it." },
      { term: "desire", def: "Wanting to get or keep something.", example: "Wanting to win a prize.", nonexample: "Feeling nothing about anything.", context: "Epictetus warns against desiring things that are not up to us." },
      { term: "aversion", def: "Wanting to avoid or push away something.", example: "Dreading failure or pain.", nonexample: "Calmly accepting what comes.", context: "Epictetus teaches us to aim our aversion only at what is within our control." },
      { term: "non-attachment", def: "Caring about things without depending on them for your peace.", example: "Enjoying something while accepting it may not last.", nonexample: "Falling apart when a possession breaks.", context: "Epictetus teaches non-attachment to things outside our control." },
      { term: "tranquility", def: "A calm, untroubled state of mind.", example: "Staying peaceful even in a storm of events.", nonexample: "Constant anxiety over everything.", context: "The goal of the handbook is lasting tranquility." },
      { term: "endurance", def: "The ability to bear hardship patiently.", example: "Staying steady through a hard season.", nonexample: "Quitting at the first difficulty.", context: "Epictetus prizes endurance in the face of what we cannot change." },
      { term: "self-control", def: "Governing your own impulses and reactions.", example: "Choosing a calm reply instead of a furious one.", nonexample: "Reacting on impulse every time.", context: "Self-control is at the heart of Stoic practice." },
      { term: "handbook", def: "A short, practical guide meant to be kept close and used often.", example: "A pocket manual of rules for living.", nonexample: "A long, abstract textbook you never open.", context: "The word 'Enchiridion' means a handbook — something kept ready to hand." }
    ],

    relic: {
      name: "The Handbook",
      intro: "Seven instructional reconstructions of objects and images from Epictetus's teaching — teaching recreations, not copyrighted illustrations. Investigate what each is, its role for Epictetus, and the Stoic idea it stands for.",
      artifacts: [
        {
          id: "handbook", name: "The Handbook (Enchiridion)", image: "images/handbook.png",
          clues: ["This small book gathers Epictetus's most practical teachings.", "It was compiled by his student from his lessons.", "Its Greek name means 'something kept ready to hand.'"],
          identify: { q: "What is this?", choices: ["The Enchiridion, a short handbook of Epictetus's teachings", "A book of Roman laws", "A merchant's ledger", "A collection of poems"] },
          purpose: { q: "What is its role?", choices: ["To give short, practical rules a person can use every day", "To entertain readers with stories", "To record the emperor's decrees", "To map the empire"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Philosophy is meant to be practiced daily, not just studied in theory", "Philosophy is only for scholars", "Rules should be long and complicated", "Wisdom cannot be shared"] },
          reveals: "That Stoicism was meant to be carried and used, like a manual for living.",
          conceals: "How much practice it really takes to live by such simple-sounding rules.",
          ace: "Articulate what a 'handbook for living' is; connect it to philosophy as practice; extend it to a short rule you could actually use."
        },
        {
          id: "chain", name: "The Broken Shackle", image: "images/chain.png",
          clues: ["Epictetus was born into slavery before he was freed.", "He taught that a person can be free inside even when not free outside.", "He located real freedom in the mind, not in the body's circumstances."],
          identify: { q: "What does this broken shackle represent?", choices: ["The idea that true freedom is inner, not outer — Epictetus was once enslaved", "A prisoner's escape from jail", "A soldier's broken weapon", "A blacksmith's tool"] },
          purpose: { q: "What is its role in his teaching?", choices: ["To show that freedom of mind does not depend on outer circumstances", "To boast about escaping", "To measure strength", "To decorate the school"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Real freedom comes from mastering your own judgments, not from your situation", "Freedom is only about the body", "No one can ever be free", "Only the rich are free"] },
          reveals: "The Stoic conviction that the mind can remain free under any conditions.",
          conceals: "The real hardship of Epictetus's early life, which the calm teaching does not dwell on.",
          ace: "Articulate what 'inner freedom' means; connect it to controlling your judgments; extend it to a situation where someone stays free in spirit despite hard limits."
        },
        {
          id: "mask", name: "The Actor's Mask", image: "images/mask.png",
          clues: ["Epictetus compares life to a play.", "You do not get to choose which role you are given.", "Your job is only to play well the part you have."],
          identify: { q: "What does this mask represent?", choices: ["Epictetus's image of life as a play in which you play your assigned role", "A disguise for a thief", "A festival decoration", "A soldier's helmet"] },
          purpose: { q: "What is its role in his teaching?", choices: ["To teach that we should focus on playing our role well, not on choosing it", "To hide the actor's face", "To frighten enemies", "To win a prize"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Accept the role and circumstances you are given, and act your part with virtue", "You can control everything about your life", "Roles do not matter", "Only lead actors count"] },
          reveals: "The Stoic focus on how well you act, not on the hand you are dealt.",
          conceals: "Whether some 'roles' in real life are simply too heavy to bear well.",
          ace: "Articulate the play metaphor; connect it to focusing on effort over circumstance; extend it to a 'role' you did not choose but can still play well."
        },
        {
          id: "cup", name: "The Clay Cup", image: "images/cup.png",
          clues: ["Epictetus says that when you love a cup, remember it is only a cup.", "Then, if it breaks, you will not be shattered.", "He applies the same idea to bigger things we love and can lose."],
          identify: { q: "What lesson does this cup teach?", choices: ["Love things while remembering they are breakable and may be lost", "That cups are worthless", "That you should never own anything", "That clay is stronger than gold"] },
          purpose: { q: "What is its role in his teaching?", choices: ["To train us to care about things without being crushed when we lose them", "To sell pottery", "To measure liquids", "To decorate a table"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Non-attachment — enjoy things while accepting they are not fully in our control", "That we should feel nothing at all", "That loss should be denied", "That only unbreakable things matter"] },
          reveals: "The Stoic practice of loving things without depending on keeping them.",
          conceals: "Whether this calm can really hold when what we lose is a person, not a cup.",
          ace: "Articulate the cup lesson; connect it to non-attachment; extend it to something you value but cannot fully control."
        },
        {
          id: "handles", name: "The Two Handles", image: "images/handles.png",
          clues: ["Epictetus says everything has two handles.", "By one handle a thing can be carried; by the other it cannot.", "He advises taking hold of the handle by which it can be borne."],
          identify: { q: "What does this image of two handles teach?", choices: ["That we can choose how to 'take hold of' an event — in a way we can bear", "That jars are hard to carry", "That two hands are better than one", "That handles should be replaced"] },
          purpose: { q: "What is its role in his teaching?", choices: ["To show that our response to an event is a choice, like which handle we grip", "To describe pottery-making", "To warn about broken pots", "To measure weight"] },
          significance: { q: "What Stoic idea does it show?", choices: ["We can choose an interpretation of events that we are able to bear", "Events have only one meaning", "Nothing can be carried", "Interpretation does not matter"] },
          reveals: "The Stoic insight that how we frame an event is within our control.",
          conceals: "That some events may feel as if they offer no bearable handle at all.",
          ace: "Articulate the two-handles image; connect it to choosing your judgment; extend it to a hard situation and the 'handle' by which you could carry it."
        },
        {
          id: "lamp", name: "The Clay Lamp", image: "images/lamp.png",
          clues: ["Epictetus tells a story about a lamp of his that was stolen.", "Rather than be upset, he reflected on the price of keeping his peace.", "He replaced it with a plain clay lamp and let the loss go."],
          identify: { q: "What does this lamp story illustrate?", choices: ["Not letting the loss of a possession disturb your peace", "How to light a room", "How to catch a thief", "How to make pottery"] },
          purpose: { q: "What is its role in his teaching?", choices: ["To model calmly accepting the loss of things outside our control", "To warn against buying lamps", "To praise expensive objects", "To explain how fire works"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Peace of mind is worth more than any possession we might lose", "Possessions are the highest good", "Theft cannot be survived", "We should hoard our things"] },
          reveals: "The Stoic willingness to trade a small loss for lasting calm.",
          conceals: "That letting go is far easier to say than to do with things we truly treasure.",
          ace: "Articulate the lamp story's lesson; connect it to valuing peace over possessions; extend it to a loss you could choose to let go of."
        },
        {
          id: "archer", name: "The Archer's Target", image: "images/archer.png",
          clues: ["A skilled archer does everything in their power to aim well.", "But once the arrow flies, the result is no longer in their hands.", "Epictetus uses this to separate effort from outcome."],
          identify: { q: "What does the archer teach in Stoic thought?", choices: ["Do your best in what is up to you, then accept the outcome, which is not", "That aiming does not matter", "That winning is all that counts", "That archery is dangerous"] },
          purpose: { q: "What is its role in his teaching?", choices: ["To separate our effort (up to us) from the result (not fully up to us)", "To teach a sport", "To measure distance", "To frighten enemies"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Aim your desire at doing well, not at controlling results you cannot guarantee", "Results are entirely in our control", "Effort is pointless", "Only outcomes matter"] },
          reveals: "The Stoic focus on the quality of our effort rather than the outcome.",
          conceals: "How hard it is to care deeply about a goal yet release the result.",
          ace: "Articulate the archer image; connect effort to what is 'up to us'; extend it to a goal where you can control the effort but not the result."
        }
      ]
    },

    ctob: {
      name: "What Is Up to Us",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Into what condition was Epictetus born, before he became a famous teacher? (one word)",
          evidence: ["Epictetus did not begin life free.", "He was later freed and went on to teach philosophy.", "The word begins with 'sla…'."],
          hints: ["He was not born free.", "Sla…", "He was born a slave."],
          answer: "slave"
        },
        {
          type: "digit",
          prompt: "The Enchiridion opens by dividing all things into how many kinds: those in our power and those not? Enter the number.",
          evidence: ["The very first teaching sorts everything into two groups.", "One group is up to us; the other is not.", "Count the groups."],
          hints: ["Up to us, or not up to us.", "The smallest number greater than one.", "There are 2 kinds."],
          answer: "2"
        },
        {
          type: "mc",
          prompt: "Epictetus's most famous teaching is that we are disturbed not by things themselves, but by —",
          options: [
            "our judgments (opinions) about those things.",
            "the weather.",
            "the will of our enemies.",
            "the passage of time alone."
          ],
          hints: ["Think about where the disturbance really comes from.", "Which option is about our own opinions?"]
        },
        {
          type: "word",
          prompt: "The Greek title 'Enchiridion' means a short, practical guide kept close at hand. In one English word, what kind of book is it?",
          evidence: ["It is small and meant to be used, not just studied.", "It gathers rules a person keeps ready to hand.", "The word begins with 'hand…'."],
          hints: ["Something you keep ready to hand.", "Hand…", "It is a handbook."],
          answer: "handbook"
        },
        {
          type: "sequence",
          prompt: "Put Epictetus's practice for handling a troubling impression in order, earliest first.",
          items: [
            "A troubling impression appears (something seems bad).",
            "I pause instead of reacting at once.",
            "I ask whether it is within my control.",
            "If it is not up to me, I remind myself it need not disturb me."
          ],
          hints: ["First the impression strikes.", "Pausing comes before questioning it.", "The calming reminder comes last."]
        },
        {
          type: "mc",
          prompt: "Epictetus compares life to a play in order to teach that we should —",
          options: [
            "play well whatever role we are given, since we do not choose the part.",
            "demand the leading role every time.",
            "refuse to take part in life at all.",
            "blame the playwright for our lines."
          ],
          hints: ["Focus on what the actor can control.", "Which option is about playing your role well?"]
        }
      ]
    },

    arcade: {
      name: "Fact or Judgment?",
      instruction: "Epictetus taught that we are disturbed not by events but by our judgments about them. Sort each statement: is it a plain FACT (an event, neither good nor bad in itself) or a JUDGMENT (an added opinion that upsets us)? Reasoning earns the points.",
      buckets: [
        { id: "fact", label: "Fact (a neutral event)", short: "Fact" },
        { id: "judgment", label: "Judgment (an added opinion)", short: "Judgment" }
      ],
      cards: [
        { text: "It is raining today.", bucket: "fact", why: "A plain event, neither good nor bad in itself." },
        { text: "This rain has ruined everything!", bucket: "judgment", why: "An added opinion — the distress is in the judgment, not the rain." },
        { text: "My friend criticized my work.", bucket: "fact", why: "A neutral event: someone said something." },
        { text: "This proves I am worthless.", bucket: "judgment", why: "A harsh interpretation added on top of the event." },
        { text: "The bus was late.", bucket: "fact", why: "Simply what happened, neither good nor bad in itself." },
        { text: "The whole day is a disaster now.", bucket: "judgment", why: "An opinion that magnifies the event into a catastrophe." },
        { text: "I did not win the prize.", bucket: "fact", why: "A plain outcome, stated without interpretation." },
        { text: "It is unbearable and unfair that I lost.", bucket: "judgment", why: "An added judgment — Epictetus says this is what disturbs us." }
      ],
      followup: "Pick one 'judgment' card. What is the bare fact underneath it, and how might naming just the fact change how you feel?"
    },

    analysis: {
      mcq: [
        {
          q: "The Enchiridion opens by teaching that everything falls into two kinds —",
          options: [
            "things that are up to us and things that are not.",
            "things that are cheap and things that are expensive.",
            "things that are old and things that are new.",
            "things that are Greek and things that are Roman."
          ],
          why: "Epictetus's first and most basic move is the dichotomy of control."
        },
        {
          q: "Epictetus's most famous claim is that people are disturbed by —",
          options: [
            "their judgments about events, not by the events themselves.",
            "bad weather more than anything else.",
            "the actions of the gods alone.",
            "a lack of money."
          ],
          why: "The handbook locates our distress in our opinions, which are within our control."
        },
        {
          q: "When Epictetus says to remember a favorite cup is only a cup, he is teaching —",
          options: [
            "non-attachment — loving things while accepting they can be lost.",
            "that we should own nothing.",
            "that we should never feel anything.",
            "that cheap objects are better than fine ones."
          ],
          why: "By recalling that things are breakable, we care for them without being crushed by loss."
        },
        {
          q: "Epictetus's image that 'everything has two handles' means that —",
          options: [
            "we can choose to interpret an event in a way we are able to bear.",
            "objects are difficult to carry.",
            "events have only one possible meaning.",
            "we should avoid handling anything."
          ],
          why: "Which 'handle' we grip — our interpretation — is up to us, even when the event is not."
        },
        {
          q: "The purpose of the Enchiridion as a 'handbook' is to —",
          options: [
            "give short, practical rules a person can use in daily life.",
            "tell an exciting adventure story.",
            "record the history of Rome.",
            "list the laws of the empire."
          ],
          why: "It is designed as a compact, usable guide — philosophy meant to be practiced, not just read."
        }
      ],
      short: [
        "Choose one artifact from the Handbook. Explain what it is and the Stoic idea it stands for.",
        "Explain Epictetus's claim that our judgments, not events, disturb us. Give one example from your own experience.",
        "Epictetus was born a slave yet taught that people can be free inside. What does he mean by inner freedom, and do you find it convincing?"
      ],
      paragraph: "Write an evidence-based paragraph. Is Epictetus right that most of our distress comes from our judgments rather than from events? Make a claim and support it with specific ideas from the Enchiridion.",
      aceReflection: "Articulate the idea that judgments, not events, disturb us. Connect two of Epictetus's images that support it. Extend it to a real situation, and name where the idea becomes hard to apply."
    },

    extend: {
      name: "Write Your Own Handbook",
      prompt: "Epictetus wrote short, practical rules to keep ready for hard moments. Choose a challenge you or someone your age might face. Write 3–5 of your own 'handbook' rules for it, using Stoic ideas: name what is and is not in your control, and separate the plain facts from the judgments that upset you.",
      format: "A short personal handbook (3–5 rules), plus a note on which Stoic ideas you used and where they might be hard to follow."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning Epictetus's idea that our judgments, not events, disturb us. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Enchiridion. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in the Enchiridion because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Enchiridion: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to turn a Stoic rule into practical advice for this challenge: [challenge]. Ask me questions to sort what is and is not in my control, and to separate facts from judgments. Do not decide for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Enchiridion for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces Stoic practice through Epictetus's Enchiridion: the dichotomy of control, the claim that judgments (not events) disturb us, and vivid images such as the actor's role and the two handles. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation. The Greek original and older translations (e.g., Elizabeth Carter) are public domain; some recent translations remain under copyright.",
        "Details here reflect widely established facts and images (Epictetus was born into slavery and later freed; the Enchiridion is a handbook compiled by his student Arrian; the dichotomy of control; judgments vs. events; the actor's role; the two handles; loving things as breakable). Confirm specifics against your edition.",
        "The lamp anecdote is a traditional story associated with Epictetus; present it as an illustrative story and confirm the version in your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) strands on central ideas of informational text, text structure, and author's purpose. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.11-12.2", "RI.9-10.4", "RI.9-10.5", "RI.9-10.6", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
