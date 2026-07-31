/* PlotPoint — Meditations (Marcus Aurelius).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   facts about Marcus Aurelius and Stoicism. Standards are real, applicable
   Common Core codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs
   review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "meditations",
  storageKey: "plotpoint.meditations.v1",

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
    "enter.readListenNote": "This work is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Meditations",
    "vocab.intro": "{n} terms that unlock Stoic thinking. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Emperor's Journal",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role for Marcus Aurelius",
    "relic.q.significance": "The Stoic idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a Stoic idea, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Stoic's Notebook",
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
    "arcade.title": "In Your Control?",
    "arcade.default": "Sort each item by whether it is within your control.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
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
    "extend.title": "Write to Yourself",
    "extend.format": "Format",
    "extend.evidence": "The Stoic practice I am building on",
    "extend.transfers": "What transfers to my situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the practice stops working",
    "extend.response": "My notes to myself",
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
    "print.item.relic": "Journal evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Notes-to-self organizer",
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
      title: "Meditations",
      author: "Marcus Aurelius",
      grades: "Grades 9–12",
      genre: "Philosophy · Stoicism",
      time: "30–45 minutes",
      spoiler: "No spoilers",
      rights: "Ancient Greek original and classic translations are public domain",
      textAccess: "Students need a public-domain translation of the Meditations (for example, George Long's). This room does not reproduce the text.",
      copyright: "The Greek original and older translations (such as George Long's) are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "Reflective philosophy that discusses death, duty, and hardship in a calm, thoughtful way. Preview for reading level and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2680",
      audio: "https://librivox.org/the-meditations-of-marcus-aurelius/"
    },
    hook: "The most powerful man in the Roman world wrote a private notebook — not to publish, but to remind himself how to be patient, just, and calm. The Meditations is Stoic philosophy in practice.",
    goals: [
      "Understand who Marcus Aurelius was and why he wrote private notes to himself.",
      "Explain the core Stoic idea that some things are within our control and others are not.",
      "Analyze Stoic themes such as virtue, impermanence, duty, and calm in the face of hardship.",
      "Transfer the Stoic practice of writing to oneself to a real challenge of your own."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of Stoicism.",
        "Discuss: When something upsets you, how much of it is actually in your control?"
      ],
      during: [
        "Use the Relic Room to examine one part of the emperor's world at a time.",
        "For each entry, ask: is this about what I can control, or what I must accept?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull the Stoic ideas together.",
        "Complete the Extend task by writing calm, honest notes to yourself."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the Stoic idea of focusing on what you can control. Include one detail from the Meditations that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two Stoic ideas from the Meditations (for example, impermanence and calm). Explain how together they shape how a Stoic tries to live." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a Stoic idea to a challenge people face today. Explain what transfers, what changes, and where the practice stops working." }
    },

    vocab: [
      { term: "Stoicism", def: "An ancient philosophy that teaches living by reason and virtue and staying calm about what we cannot control.", example: "Staying steady when plans fall apart.", nonexample: "Panicking over every small setback.", context: "The Meditations is a classic of Stoicism." },
      { term: "virtue", def: "Moral excellence — qualities like courage, justice, honesty, and self-control.", example: "Doing the right thing even when it is hard.", nonexample: "Cheating whenever it is convenient.", context: "For the Stoics, virtue is the only true good." },
      { term: "equanimity", def: "Calmness and balance of mind, especially in difficult situations.", example: "Staying composed when things go wrong.", nonexample: "Flying into a rage at bad news.", context: "Marcus trains himself to meet each day with equanimity." },
      { term: "indifferents", def: "In Stoicism, things that are neither good nor bad in themselves, such as wealth, health, or reputation.", example: "Money, which can be used well or badly.", nonexample: "Justice, which the Stoics count as a true good.", context: "Stoics treat outcomes and possessions as 'indifferents.'" },
      { term: "memento mori", def: "A reminder that you will die; a prompt to value the present and live well now.", example: "Remembering life is short, so use today wisely.", nonexample: "Assuming you will live forever.", context: "Marcus often reminds himself that life is brief — a kind of memento mori." },
      { term: "reason", def: "The mind's power to think clearly and judge well; for the Stoics, our guide to living rightly.", example: "Thinking through a problem calmly before acting.", nonexample: "Acting purely on impulse and anger.", context: "The Stoics say we should live according to reason." },
      { term: "impermanence", def: "The fact that all things change and pass away.", example: "Seasons, fame, and even empires all fade.", nonexample: "Something that lasts unchanged forever.", context: "Marcus reflects often on the impermanence of all things." },
      { term: "duty", def: "What one ought to do; one's responsibility to others and to the common good.", example: "An emperor working for his people even when tired.", nonexample: "Ignoring your responsibilities for comfort.", context: "Marcus reminds himself to do his duty each morning." },
      { term: "self-discipline", def: "Controlling one's impulses and desires in order to act well.", example: "Choosing what is right over what is easy.", nonexample: "Giving in to every craving.", context: "Stoicism prizes self-discipline over indulgence." },
      { term: "cosmopolitan", def: "Belonging to all humanity; seeing all people as fellow citizens of the world.", example: "Treating a stranger as a fellow human being.", nonexample: "Caring only about your own small group.", context: "Marcus holds the cosmopolitan view that we are all made for one another." }
    ],

    relic: {
      name: "The Emperor's Journal",
      intro: "Seven instructional reconstructions of objects from Marcus Aurelius's world — teaching recreations, not copyrighted illustrations. Investigate what each is, its role for the emperor, and the Stoic idea it stands for.",
      artifacts: [
        {
          id: "journal", name: "The Private Notebook", image: "images/journal.png",
          clues: ["These are notes the emperor wrote to himself.", "They were never meant to be published or read by others.", "They read like reminders and advice he gives his own mind."],
          identify: { q: "What is this?", choices: ["Marcus Aurelius's private notebook of reminders to himself", "A public speech to the Senate", "A book of laws", "A letter to an enemy"] },
          purpose: { q: "What was its role for Marcus?", choices: ["A place to remind and steady himself in how to live well", "A way to boast to the public", "A record of his wealth", "A battle map"] },
          significance: { q: "What Stoic idea does it show?", choices: ["That philosophy is a daily practice, worked on privately, not just a theory", "That fame is the goal of life", "That feelings should be ignored entirely", "That rulers need no self-examination"] },
          reveals: "That even an emperor needed to practice, in private, how to be patient and just.",
          conceals: "How much he struggled to live up to his own reminders — the notes hint at the effort.",
          ace: "Articulate why Marcus wrote to himself; connect it to philosophy as practice; extend it to how writing to yourself might help you today."
        },
        {
          id: "camp", name: "The Campaign Tent", image: "images/camp.png",
          clues: ["Much of the notebook was written far from home.", "The emperor spent years on military campaigns at the frontier.", "He reflected on duty and calm in the middle of war and hardship."],
          identify: { q: "What is this?", choices: ["A military campaign tent at the frontier where Marcus wrote", "A palace throne room", "A market stall", "A temple"] },
          purpose: { q: "What was its role?", choices: ["A harsh, demanding setting where Marcus practiced his philosophy under pressure", "A place for luxury and rest", "A school for students", "A courtroom"] },
          significance: { q: "What Stoic idea does it show?", choices: ["That Stoicism is meant to be lived under real hardship, not only discussed in comfort", "That philosophy only works in peace", "That duty can be avoided", "That war is good"] },
          reveals: "That these calm reflections were written in difficult, stressful conditions.",
          conceals: "The full weight of the burdens — war, plague, loss — that Marcus faced while writing.",
          ace: "Articulate the setting of the writing; connect hardship to the value of Stoic calm; extend it to staying steady under pressure today."
        },
        {
          id: "dichotomy", name: "The Dividing Line", image: "images/dichotomy.png",
          clues: ["A central Stoic idea sorts everything into two groups.", "One group is what we can control; the other is what we cannot.", "The Stoics say our peace depends on telling the two apart."],
          identify: { q: "What does this line represent?", choices: ["The Stoic division between what is in our control and what is not", "A border between two countries", "A crack in a wall", "A ruler for measuring"] },
          purpose: { q: "What is its role in Stoic thinking?", choices: ["To help decide where to put your effort and where to accept what happens", "To measure distances", "To divide land", "To keep score in a game"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Focus your energy on your own judgments and actions; accept what you cannot control", "Try to control everything", "Nothing is ever in our control", "Only rulers have control"] },
          reveals: "The core Stoic move: sort what is up to you from what is not.",
          conceals: "How hard it is, in practice, to accept the things that are truly outside our control.",
          ace: "Articulate the dividing line; connect it to where you spend your worry; extend it to a situation where sorting control from acceptance would help."
        },
        {
          id: "crown", name: "The Emperor's Crown, Set Aside", image: "images/crown.png",
          clues: ["Marcus held the highest power in the Roman world.", "Yet he reminds himself not to be corrupted by luxury or pride.", "He treats his power as a responsibility, not a prize."],
          identify: { q: "What is this?", choices: ["The emperor's crown, which Marcus treats as a duty rather than a prize", "A soldier's helmet", "A merchant's hat", "A crown he stole"] },
          purpose: { q: "What is its role for Marcus?", choices: ["A reminder to use great power humbly and for others, not for himself", "A way to show off wealth", "A tool of war", "A gift to the gods"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Power and wealth are 'indifferents' — good only if used with virtue", "Power is the highest good", "Rulers should indulge themselves", "Humility is weakness"] },
          reveals: "That Marcus tried to keep his character steady despite enormous power.",
          conceals: "How rare such restraint was among rulers — and how easily power corrupts.",
          ace: "Articulate how Marcus views his power; connect it to the idea of 'indifferents'; extend it to how someone might handle sudden power or fame today."
        },
        {
          id: "cosmos", name: "The View from Above", image: "images/cosmos.png",
          clues: ["Marcus often pictures the whole cosmos and his small place in it.", "From that distance, quarrels and fame look tiny.", "He reminds himself that all people share one reason and one world."],
          identify: { q: "What does this image represent?", choices: ["Marcus's 'view from above' — seeing himself as a small part of the whole cosmos", "A map for a sea voyage", "A star chart for farming", "A picture of his palace"] },
          purpose: { q: "What is its role in his thinking?", choices: ["To gain perspective, shrinking petty worries and pride", "To predict the future", "To plan a war", "To measure time"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Cosmopolitanism — we are all small parts of one world, made for one another", "That people should live alone", "That the self is all that matters", "That the world is meaningless"] },
          reveals: "The Stoic habit of stepping back to see the bigger picture.",
          conceals: "Whether such a wide view can truly ease real, personal pain.",
          ace: "Articulate the 'view from above'; connect it to perspective on problems; extend it to a worry that would shrink if you zoomed out."
        },
        {
          id: "hourglass", name: "The Hourglass", image: "images/hourglass.png",
          clues: ["Marcus reminds himself that time is always running out.", "He says the present moment is the only time we truly have.", "He urges himself to act well now, not later."],
          identify: { q: "What is this object?", choices: ["An hourglass marking how short and present-focused life is", "A water jug", "A game timer", "A compass"] },
          purpose: { q: "What is its role in his reflections?", choices: ["To remind him that life is brief, so he should live well in the present", "To schedule meetings", "To measure a race", "To tell fortunes"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Focus on the present moment, since it is all we ever really have", "That the future is guaranteed", "That the past can be changed", "That time does not matter"] },
          reveals: "The Stoic focus on using the present moment well.",
          conceals: "How difficult it is to stay present when the mind runs to past and future.",
          ace: "Articulate what the hourglass reminds Marcus of; connect it to living in the present; extend it to how focusing on 'now' could change a habit of yours."
        },
        {
          id: "flower", name: "A Fading Flower", image: "images/flower.png",
          clues: ["Marcus reflects that everything blooms and then fades.", "Empires, fame, and lives all pass away in time.", "He tries to accept this change calmly rather than fear it."],
          identify: { q: "What does this represent?", choices: ["Impermanence — that all things, like a flower, bloom and fade", "A gift for a friend", "A symbol of victory", "A medicine"] },
          purpose: { q: "What is its role in his thinking?", choices: ["To help him accept change and loss with calm", "To celebrate a festival", "To decorate the palace", "To predict the weather"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Impermanence — accepting that all things change and pass", "That nothing ever changes", "That change should be feared", "That only flowers matter"] },
          reveals: "The Stoic acceptance of change as natural, not tragic.",
          conceals: "Whether calm acceptance can fully answer the real grief that loss brings.",
          ace: "Articulate what the fading flower stands for; connect impermanence to acceptance; extend it to how accepting change might help with something ending in your life."
        }
      ]
    },

    ctob: {
      name: "The Stoic's Notebook",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What powerful Roman role did Marcus Aurelius hold while writing these notes? (one word)",
          evidence: ["The author ruled the Roman world.", "He wrote these private notes during his reign, often on campaign.", "The word begins with 'emp…'."],
          hints: ["He was the ruler of Rome.", "Emp…", "The role is emperor."],
          answer: "emperor"
        },
        {
          type: "word",
          prompt: "What is the name of the philosophy Marcus practices in the Meditations? (one word)",
          evidence: ["It is an ancient philosophy of reason, virtue, and calm.", "It teaches focusing on what we can control.", "The word begins with 'Sto…'."],
          hints: ["Named after a covered walkway (the Stoa) in ancient Athens.", "Sto…", "The philosophy is Stoicism."],
          answer: "Stoicism"
        },
        {
          type: "digit",
          prompt: "The core Stoic exercise sorts everything into how many groups: what is in our control and what is not? Enter the number.",
          evidence: ["Marcus keeps returning to one basic division.", "On one side is what we can control; on the other, what we cannot.", "Count the groups."],
          hints: ["In our control, or not in our control.", "The smallest number bigger than one.", "There are 2 groups."],
          answer: "2"
        },
        {
          type: "mc",
          prompt: "For whom did Marcus Aurelius write the Meditations?",
          options: [
            "For himself, as private reminders for living well.",
            "For publication as a bestseller.",
            "For his enemies, as a warning.",
            "For schoolchildren, as a textbook."
          ],
          hints: ["The notes were not meant to be published.", "Which option is about writing to oneself?"]
        },
        {
          type: "sequence",
          prompt: "Put a Stoic response to an upsetting event in order, earliest first.",
          items: [
            "Something upsetting happens to me.",
            "I recognize that the event itself is outside my control.",
            "I choose how I will judge and respond to it.",
            "I act with reason and for the common good."
          ],
          hints: ["First the event occurs.", "Recognizing what is outside my control comes before choosing my response.", "Acting well comes last."]
        },
        {
          type: "mc",
          prompt: "According to the Stoics, what is the only true good?",
          options: [
            "Virtue — good character and right action.",
            "Wealth and property.",
            "Fame and the praise of others.",
            "Physical comfort and pleasure."
          ],
          hints: ["Stoics call wealth and fame 'indifferents.'", "Which option is about character?"]
        }
      ]
    },

    arcade: {
      name: "In Your Control?",
      instruction: "The heart of Stoic practice is telling apart what you can control from what you cannot. Sort each item: is it UP TO ME (within my control) or NOT UP TO ME (outside my control)? Reasoning earns the points.",
      buckets: [
        { id: "control", label: "Up to me (in my control)", short: "Up to me" },
        { id: "notcontrol", label: "Not up to me (outside my control)", short: "Not up to me" }
      ],
      cards: [
        { text: "The opinions and judgments I form", bucket: "control", why: "Your own judgments are the clearest example of what is up to you." },
        { text: "How I choose to act right now", bucket: "control", why: "Your present choices and actions are within your control." },
        { text: "Whether I respond to an insult with anger or calm", bucket: "control", why: "Your response to others is up to you, even when their words are not." },
        { text: "The effort I put into my duty", bucket: "control", why: "How hard you try is within your control." },
        { text: "Whether other people like or praise me", bucket: "notcontrol", why: "Other people's opinions are outside your control — a Stoic 'indifferent.'" },
        { text: "The weather and events in the wider world", bucket: "notcontrol", why: "External events are not up to you." },
        { text: "What already happened in the past", bucket: "notcontrol", why: "The past cannot be changed, so it is outside your control." },
        { text: "Whether my body stays healthy or falls ill", bucket: "notcontrol", why: "Health can be influenced but not fully controlled — the Stoics count it among things not up to us." }
      ],
      followup: "Which card was hardest to place — something you can influence but not fully control? How might focusing on what IS up to you change how you handle it?"
    },

    analysis: {
      mcq: [
        {
          q: "The central Stoic idea Marcus returns to again and again is —",
          options: [
            "the difference between what is within our control and what is not.",
            "the importance of becoming rich and famous.",
            "the need to win every argument.",
            "the goal of avoiding all responsibility."
          ],
          why: "Marcus repeatedly urges himself to focus on his own judgments and actions and to accept what he cannot control."
        },
        {
          q: "For the Stoics, the only true good is —",
          options: [
            "virtue — good character and right action.",
            "wealth.",
            "fame.",
            "physical pleasure."
          ],
          why: "Stoics treat wealth, fame, and comfort as 'indifferents'; only virtue is truly good."
        },
        {
          q: "Marcus wrote the Meditations —",
          options: [
            "as private notes to steady and remind himself, not for publication.",
            "as a public speech to the Roman Senate.",
            "as a novel for entertainment.",
            "as a set of laws for the empire."
          ],
          why: "The work reads as private self-address — reminders the emperor gives his own mind."
        },
        {
          q: "When Marcus reflects that all things fade and pass, he is emphasizing —",
          options: [
            "impermanence, and the calm acceptance of change.",
            "that nothing ever really changes.",
            "that change should terrify us.",
            "that only the emperor lasts forever."
          ],
          why: "A recurring Stoic theme is accepting impermanence with equanimity rather than fear."
        },
        {
          q: "Marcus's 'view from above' and his sense that people are made for one another express —",
          options: [
            "a cosmopolitan view that we are small parts of one world with duties to each other.",
            "the belief that people should live in total isolation.",
            "the idea that only Romans matter.",
            "the claim that the world is meaningless."
          ],
          why: "Marcus combines perspective ('the view from above') with a duty to the common human community."
        }
      ],
      short: [
        "Choose one artifact from the Emperor's Journal. Explain what it is and the Stoic idea it stands for.",
        "Explain the Stoic difference between what is 'up to us' and what is not. Give one example of each from your own life.",
        "Marcus was the most powerful man in his world, yet he wrote humble reminders to himself. Why might that be surprising — and what does it show about Stoicism?"
      ],
      paragraph: "Write an evidence-based paragraph. Is the Stoic advice to focus on what you can control genuinely helpful for people today, or does it ask too much? Make a claim and support it with specific ideas from the Meditations.",
      aceReflection: "Articulate the Stoic idea of control in your own words. Connect two Stoic themes that support it. Extend it to a real challenge, and name where the practice becomes hard to apply."
    },

    extend: {
      name: "Write to Yourself",
      prompt: "Marcus steadied himself by writing private reminders about how to think and act. Choose a real challenge you or someone your age might face. Write a short set of Stoic 'notes to self' about it: name what is and is not in your control, and remind yourself how to respond with reason and calm.",
      format: "A short set of notes-to-self (a few reminders), plus a note on which parts of the challenge are within your control and which you must accept."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning the Stoic idea of focusing on what I can control, from the Meditations. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Meditations. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in the Meditations because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Meditations: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply the Stoic control exercise to this challenge: [challenge]. Ask me questions to help me sort what is and is not in my control. Do not decide for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Meditations for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces Stoic philosophy through Marcus Aurelius's Meditations: the dichotomy of control, virtue, impermanence, duty, and calm. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation. The Greek original and older translations (e.g., George Long) are public domain; some recent translations remain under copyright.",
        "Details here reflect widely established facts (Marcus Aurelius was a Roman emperor; the Meditations were private notes written partly on military campaign; core Stoic ideas of control, virtue, impermanence, and cosmopolitanism). Confirm specifics against your edition.",
        "The idea that 'we are disturbed by our opinions, not by things' is central to Stoicism and is most famously stated by Epictetus; present it as a shared Stoic theme, and quote your own edition if you attribute exact wording.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) strands on central ideas of informational/reflective text, text structure, and author's purpose. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.11-12.2", "RI.9-10.5", "RI.9-10.6", "RI.11-12.6", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
