/* PlotPoint — Letters from a Stoic, Selections (Seneca).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; famous ideas (the value of time, we
   suffer more in imagination) are paraphrased, not quoted from any one
   translation. Details are widely established. Standards are real, applicable
   Common Core codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs
   review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "seneca",
  storageKey: "plotpoint.seneca.v1",

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
    "vocab.title": "Words for Seneca's Letters",
    "vocab.intro": "{n} terms that unlock Stoic thinking. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Letter Desk",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the letters",
    "relic.q.significance": "The Stoic idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a Stoic idea, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Value of Time",
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
    "arcade.title": "Reclaim the Day",
    "arcade.default": "Sort each way of spending time.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Ways to spend time",
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
    "extend.title": "Review Your Day",
    "extend.format": "Format",
    "extend.evidence": "The Stoic practice I am building on",
    "extend.transfers": "What transfers to my life",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the practice stops working",
    "extend.response": "My review",
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
    "print.item.relic": "Letter Desk evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Daily-review organizer",
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
      title: "Letters from a Stoic (Selections)",
      author: "Seneca",
      grades: "Grades 9–12",
      genre: "Philosophy · Stoicism",
      time: "30–45 minutes",
      spoiler: "No spoilers",
      rights: "Latin original and classic translations are public domain",
      textAccess: "Students need a public-domain edition of Seneca's moral letters or essays. This room does not reproduce the text.",
      copyright: "The Latin original and older translations are public domain; some recent translations (including popular 'Letters from a Stoic' selections) remain under copyright. Verify your edition.",
      contentNote: "Calm, practical philosophy that discusses hardship, mortality, and self-control. Preview for reading level and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/56075",
      audio: "https://librivox.org/moral-letters-vol-i-by-lucius-annaeus-seneca/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Seneca's Letters — a writing desk with a sealed letter and an hourglass by lamplight."
    },
    hook: "A wealthy, powerful Roman writes letters to a friend, not about politics, but about how to live: how to value your time, choose true friends, face hard days, and stop tormenting yourself with fears that never come true.",
    goals: [
      "Understand Seneca's letters as practical Stoic guidance written to a friend.",
      "Explain his argument that time is our most valuable and most wasted possession.",
      "Analyze Stoic ideas such as facing adversity calmly, true friendship, and daily self-examination.",
      "Transfer Seneca's practice of reviewing the day to your own life."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of Stoicism as daily practice.",
        "Discuss: If time is the one thing we can never get back, why do we waste so much of it?"
      ],
      during: [
        "Use the Letter Desk to examine one idea at a time.",
        "For each letter, ask: what practical advice is Seneca giving, and why?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull the Stoic ideas together.",
        "Complete the Extend task by reviewing one of your own days."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Seneca says time is our most valuable possession. Include one detail from the letters that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Seneca's ideas (for example, valuing time and reviewing your day). Explain how together they describe a Stoic way of living." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply one of Seneca's ideas to your life today. Explain what transfers, what changes, and where the advice stops working." }
    },

    vocab: [
      { term: "Stoicism", def: "An ancient philosophy of living by reason and virtue and staying calm about what we cannot control.", example: "Meeting a setback with steadiness.", nonexample: "Falling apart over every problem.", context: "Seneca is one of the great Roman Stoics." },
      { term: "epistle", def: "A letter, especially one written to teach or guide.", example: "A letter of advice to a friend.", nonexample: "A quick text with no thought behind it.", context: "Seneca's philosophy comes to us as epistles — letters to Lucilius." },
      { term: "tranquility", def: "A calm, untroubled state of mind.", example: "Staying peaceful when plans fall apart.", nonexample: "Constant worry and agitation.", context: "The goal of Seneca's practice is tranquility." },
      { term: "adversity", def: "Serious difficulty or hardship.", example: "Illness, loss, or misfortune.", nonexample: "An easy stretch of good luck.", context: "Seneca teaches how to meet adversity without being crushed." },
      { term: "Fortune", def: "The workings of chance — the changeable things it gives and takes.", example: "Sudden wealth one year, loss the next.", nonexample: "A truth that never changes.", context: "Seneca warns not to depend on Fortune's gifts." },
      { term: "virtue", def: "Moral excellence — good character and right action.", example: "Being honest and just even when it costs you.", nonexample: "Cheating for an easy win.", context: "For the Stoics, virtue is the only true good." },
      { term: "procrastination", def: "Putting off what you could do now until later.", example: "Always saying you'll start living 'someday.'", nonexample: "Acting on what matters today.", context: "Seneca attacks procrastination: while we delay, life slips away." },
      { term: "self-examination", def: "Honestly reviewing your own actions and character.", example: "Looking back each night on how you acted.", nonexample: "Never questioning yourself.", context: "Seneca describes reviewing each day to improve." },
      { term: "contentment", def: "Being satisfied with what is enough, rather than always craving more.", example: "Finding a simple meal satisfying.", nonexample: "Never feeling you have enough.", context: "Seneca praises contentment over endless luxury." },
      { term: "mortality", def: "The fact that all living things must die.", example: "Remembering that life is limited.", nonexample: "Assuming you will live forever.", context: "Seneca urges us to face our mortality calmly." }
    ],

    relic: {
      name: "The Letter Desk",
      intro: "Seven instructional reconstructions of objects from Seneca's world — teaching recreations, not copyrighted illustrations. Investigate what each is, its role in the letters, and the Stoic idea it stands for.",
      artifacts: [
        {
          id: "letter", name: "A Letter to Lucilius", image: "images/letter.webp",
          clues: ["Seneca's philosophy reaches us as personal letters.", "Each is addressed to a single friend named Lucilius.", "They read like practical advice from an older mentor."],
          identify: { q: "What is this?", choices: ["A moral letter Seneca writes to his friend Lucilius", "A speech to the Senate", "A business contract", "A law"] },
          purpose: { q: "What is its role?", choices: ["To offer practical, personal guidance on how to live well", "To boast about his wealth", "To record taxes", "To map the empire"] },
          significance: { q: "What does the letter form show?", choices: ["Philosophy meant as personal, friend-to-friend guidance for daily life", "That philosophy is only for scholars", "That letters cannot teach", "That advice should be public"] },
          reveals: "That Stoic wisdom here is intimate and practical, not abstract lecture.",
          conceals: "How much Seneca struggled to live up to his own advice.",
          ace: "Articulate what the letter form adds; connect friendship to giving advice; extend it to advice you would write a friend."
        },
        {
          id: "hourglass", name: "The Hourglass", image: "images/hourglass.webp",
          clues: ["Seneca's first and most famous letter is about time.", "He says we do not lack time — we waste most of it.", "He urges his friend to hold on to every hour."],
          identify: { q: "What does this hourglass represent?", choices: ["Seneca's theme that time is our most precious, most wasted possession", "A game timer", "A cooking tool", "A compass"] },
          purpose: { q: "What is its role in the letters?", choices: ["To make the reader guard their time as their most valuable good", "To measure crops", "To time a race", "To tell fortunes"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Time, once gone, cannot return — so use it well now, not 'someday'", "That time is unlimited", "That the past can be relived", "That time does not matter"] },
          reveals: "Seneca's urgent focus on using time well before it slips away.",
          conceals: "How hard it is to actually reclaim time from habit and distraction.",
          ace: "Articulate why time matters to Seneca; connect wasted time to a wasted life; extend it to a way you could reclaim some of your own time."
        },
        {
          id: "ledger", name: "The Evening Ledger", image: "images/ledger.webp",
          clues: ["Seneca describes a nightly practice.", "Each evening he reviews how he acted that day.", "He notes what he did well and where he went wrong, to improve."],
          identify: { q: "What is this ledger?", choices: ["A record of Seneca's nightly review of his own actions", "A merchant's account book", "A guest list", "A ship's log"] },
          purpose: { q: "What is its role?", choices: ["To examine each day honestly and grow better over time", "To track money owed", "To plan a war", "To record the weather"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Self-examination: reviewing your conduct daily is how character improves", "That the past should be ignored", "That reflection is a waste", "That we are born perfect"] },
          reveals: "The Stoic habit of daily, honest self-review.",
          conceals: "How uncomfortable honest self-examination can be.",
          ace: "Articulate the nightly-review practice; connect reflection to improvement; extend it to a question you could ask yourself each night."
        },
        {
          id: "bread", name: "The Plain Meal", image: "images/bread.webp",
          clues: ["Seneca was very wealthy, yet he praised simple living.", "He suggests occasionally living on plain food and rough clothes.", "By practicing 'poverty,' he says, we lose our fear of it."],
          identify: { q: "What does this plain meal represent?", choices: ["Seneca's practice of voluntary simplicity", "A feast for guests", "A market stall", "A gift to the emperor"] },
          purpose: { q: "What is its role in the letters?", choices: ["To free us from the fear of losing luxury by practicing without it", "To show he was poor", "To describe local food", "To save money only"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Contentment with 'enough' frees us from dependence on wealth and Fortune", "That luxury is the highest good", "That we should own nothing", "That food is unimportant"] },
          reveals: "The Stoic aim of not being enslaved to comfort and possessions.",
          conceals: "The tension between Seneca's great wealth and his praise of simplicity.",
          ace: "Articulate why Seneca practices simplicity; connect it to freedom from Fortune; extend it to a comfort you could learn to live without."
        },
        {
          id: "anchor", name: "The Anchor", image: "images/anchor.webp",
          clues: ["Seneca compares life's troubles to a storm at sea.", "The Stoic aims to stay steady no matter how Fortune tosses them.", "He argues we suffer more in imagination than in reality."],
          identify: { q: "What does the anchor represent?", choices: ["Steadiness of mind against the storms of Fortune", "A ship's decoration", "A fishing tool", "A weapon"] },
          purpose: { q: "What is its role in the letters?", choices: ["To picture the calm the Stoic keeps through hardship", "To catch fish", "To measure depth", "To start a voyage"] },
          significance: { q: "What Stoic idea does it show?", choices: ["We are disturbed more by imagined fears than by real events, so we can steady the mind", "That storms cannot be survived", "That fear is always justified", "That calm is impossible"] },
          reveals: "Seneca's insight that much of our suffering is created by our own fears.",
          conceals: "How genuinely hard real adversity can be, beyond mere worry.",
          ace: "Articulate the anchor image; connect imagined fear to real trouble; extend it to a worry of yours that may never actually happen."
        },
        {
          id: "rings", name: "The Two Rings", image: "images/rings.webp",
          clues: ["Seneca writes about true friendship.", "He says: think long before you make a friend.", "But once you do, trust them fully, as another self."],
          identify: { q: "What do these two rings represent?", choices: ["Seneca's account of true, trusting friendship", "A business deal", "A royal marriage", "A pair of coins"] },
          purpose: { q: "What is its role in the letters?", choices: ["To advise choosing friends carefully, then trusting them completely", "To seal a contract", "To pay a debt", "To decorate a hand"] },
          significance: { q: "What Stoic idea does it show?", choices: ["A true friend is chosen with care and then trusted as another self", "That friendship is worthless", "That we should trust everyone instantly", "That friends are only useful"] },
          reveals: "The Stoic value of deep, deliberate friendship over shallow ties.",
          conceals: "How rare such carefully-built friendships really are.",
          ace: "Articulate Seneca's friendship advice; connect careful choosing to full trust; extend it to what makes a friendship worth that trust today."
        },
        {
          id: "cloak", name: "The Traveler's Cloak", image: "images/cloak.webp",
          clues: ["Seneca notices that restless people travel constantly to feel better.", "Yet they carry their troubles with them wherever they go.", "He says you must change your mind, not just your surroundings."],
          identify: { q: "What does the traveler's cloak represent?", choices: ["The restless traveler who hopes a new place will bring peace", "A soldier's uniform", "A merchant's disguise", "A gift for a friend"] },
          purpose: { q: "What is its role in the letters?", choices: ["To show that changing your location does not change your troubled mind", "To keep out the rain", "To hide from enemies", "To signal wealth"] },
          significance: { q: "What Stoic idea does it show?", choices: ["Real change comes from within, not from a change of scenery", "That travel always heals", "That the mind cannot change", "That places determine happiness"] },
          reveals: "The Stoic focus on the inner life rather than outer circumstances.",
          conceals: "Whether a change of place can ever genuinely help.",
          ace: "Articulate Seneca's point about travel; connect inner change to outer circumstances; extend it to a time a 'fresh start' didn't fix the real problem."
        }
      ]
    },

    ctob: {
      name: "The Value of Time",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Seneca's Stoic guidance reaches us in the form of personal ______ written to his friend Lucilius. (one word)",
          evidence: ["Seneca did not write a formal textbook of philosophy.", "He wrote to a single friend, again and again.", "The word — a written message — begins with 'let…'."],
          hints: ["A written message sent to someone.", "Let…", "The word is letters."],
          answer: "letters"
        },
        {
          type: "mc",
          prompt: "In his most famous letter, Seneca argues that what do we possess that is most valuable yet most carelessly wasted?",
          options: [
            "Our time.",
            "Our money.",
            "Our fame.",
            "Our land."
          ],
          hints: ["It is the one thing we can never get back once it is gone.", "Which option can never be regained?"]
        },
        {
          type: "word",
          prompt: "The philosophy Seneca shares with Marcus Aurelius and Epictetus is called ______. (one word)",
          evidence: ["It is an ancient philosophy of reason, virtue, and calm.", "It teaches steadiness against what we cannot control.", "The word begins with 'Sto…'."],
          hints: ["Named after a covered walkway in ancient Athens.", "Sto…", "The philosophy is Stoicism."],
          answer: "Stoicism"
        },
        {
          type: "mc",
          prompt: "Seneca's idea that 'we suffer more in imagination than in reality' means that —",
          options: [
            "we often torment ourselves with fears of troubles that never actually come.",
            "imagination is more painful than any real injury.",
            "we should never use our imagination.",
            "real troubles are never difficult."
          ],
          hints: ["Think about worrying over things that may never happen.", "Which option is about imagined fears?"]
        },
        {
          type: "sequence",
          prompt: "Put Seneca's practice of daily self-examination in order, earliest first.",
          items: [
            "I live through the events of my day.",
            "At night, I honestly review how I acted.",
            "I note what I did well and where I went wrong.",
            "I resolve to do better tomorrow."
          ],
          hints: ["First the day happens.", "The review comes at night.", "The resolution to improve comes last."]
        },
        {
          type: "digit",
          prompt: "Each of Seneca's moral letters is addressed to how many friends? Enter the number.",
          evidence: ["The letters are personal, not public speeches.", "They are all written to the same person, Lucilius.", "Count how many friends each letter is addressed to."],
          hints: ["A single, specific friend.", "The smallest counting number.", "The answer is 1."],
          answer: "1"
        }
      ]
    },

    arcade: {
      name: "Reclaim the Day",
      instruction: "Seneca says most people complain life is short while wasting most of it — they are merely existing, not really living. Sort each way of spending time: is it TIME WELL USED (living, as Seneca would urge) or TIME SLIPPING AWAY (existing, as Seneca would warn)? Reasoning earns the points.",
      buckets: [
        { id: "used", label: "Time well used (living)", short: "Used" },
        { id: "wasted", label: "Time slipping away (existing)", short: "Slipping" }
      ],
      cards: [
        { text: "Reflecting on the day and trying to improve", bucket: "used", why: "Self-examination is exactly the Stoic use of time Seneca praises." },
        { text: "Deeply reading a few worthwhile books", bucket: "used", why: "Seneca urges reading deeply, not skimming everything." },
        { text: "Time given to a true friend", bucket: "used", why: "Seneca prizes real friendship as time well spent." },
        { text: "Doing what matters now, not 'someday'", bucket: "used", why: "Acting today, not delaying life, is Seneca's core advice." },
        { text: "Endless busywork that leads nowhere", bucket: "wasted", why: "Being busy is not the same as living well — time slipping away." },
        { text: "Putting off really living until 'later'", bucket: "wasted", why: "Seneca warns that while we delay, life passes us by." },
        { text: "Chasing distractions all day long", bucket: "wasted", why: "Aimless distraction is the wasted time Seneca warns against." },
        { text: "Skimming everything and absorbing nothing", bucket: "wasted", why: "Seneca says scattered reading leaves the mind with nothing." }
      ],
      followup: "Seneca says being busy is not the same as living. Where in your week are you 'busy' but not really living — and what would 'reclaiming' that time look like?"
    },

    analysis: {
      mcq: [
        {
          q: "Seneca's philosophy reaches us mainly as —",
          options: [
            "letters of practical guidance written to a friend.",
            "long formal lectures to large crowds.",
            "a single epic poem.",
            "a book of laws."
          ],
          why: "The Moral Letters are personal, practical epistles addressed to Lucilius."
        },
        {
          q: "Seneca's most famous argument about time is that —",
          options: [
            "we do not lack time; we waste most of it, so we must guard it now.",
            "there is always plenty of time for everything.",
            "time is worthless.",
            "only the wealthy have any time."
          ],
          why: "His first letter urges the reader to hold on to time, our most valuable and most wasted possession."
        },
        {
          q: "When Seneca says we suffer more in imagination than in reality, he means —",
          options: [
            "we often make ourselves miserable fearing troubles that never come.",
            "imagination has no effect on us.",
            "real troubles never hurt.",
            "we should stop thinking entirely."
          ],
          why: "Much of our distress, Seneca argues, comes from anticipating evils that may never happen."
        },
        {
          q: "Seneca's advice on friendship is to —",
          options: [
            "choose a friend slowly and carefully, then trust them fully.",
            "trust everyone you meet at once.",
            "never trust anyone.",
            "keep friends only for what they can give you."
          ],
          why: "He advises deliberation before friendship and complete trust afterward — a friend as another self."
        },
        {
          q: "Seneca's remark that restless travelers carry their troubles with them shows that —",
          options: [
            "real change comes from within, not from a change of scenery.",
            "travel always cures unhappiness.",
            "the mind cannot be changed.",
            "where you live decides your happiness."
          ],
          why: "You must change your soul, not just your surroundings — an inner, not outer, remedy."
        }
      ],
      short: [
        "Choose one artifact from the Letter Desk. Explain what it is and the Stoic idea it stands for.",
        "Explain Seneca's argument about time in your own words. Do you agree that we waste most of it? Use an example.",
        "Seneca was very wealthy yet praised simple living. Is that a contradiction, a useful practice, or both? Explain your reasoning."
      ],
      paragraph: "Write an evidence-based paragraph. Choose one piece of Seneca's advice (about time, fear, friendship, or simplicity) and argue whether it is genuinely useful for people today. Support your claim with specific ideas from the letters and one real example.",
      aceReflection: "Articulate one of Seneca's key ideas in your own words. Connect it to a second idea from the letters. Extend it to your own life, and name where the advice becomes hard to follow."
    },

    extend: {
      name: "Review Your Day",
      prompt: "Seneca reviewed each day at night — asking honestly how he had acted and how he could do better. Try it: reflect on one recent day. What did you do well? Where did you fall short? How did you spend your time — living, or merely existing? What will you do differently tomorrow?",
      format: "A short honest self-review (a few sentences) covering what went well, what didn't, how you used your time, and one thing to change — in Seneca's calm, practical spirit."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning Seneca's argument about the value of time. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Seneca's letters. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in Seneca's letters because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Seneca's letters: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Seneca's practice of reviewing the day to my own life. Ask me questions that help me review honestly — what went well, what did not, how I used my time. Do not do the reflecting for me." },
      { title: "Critique prompt", text: "Review my interpretation of Seneca's letters for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces Stoic practice through Seneca's moral letters: the value of time, facing adversity calmly, true friendship, simplicity, and daily self-examination. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your edition. The Latin original and older translations are public domain; note that some popular modern 'Letters from a Stoic' selections carry their own copyright.",
        "Details here reflect widely established ideas (the letters to Lucilius; time as our most wasted possession; 'we suffer more in imagination than in reality'; careful friendship then full trust; voluntary simplicity; the restless traveler; nightly self-review). Confirm specifics against your edition.",
        "Famous phrasings are paraphrased, not quoted from any one translation; quote your class edition if you attribute exact wording.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) strands on central ideas of informational text, author's purpose, and reflective response. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.5", "RI.9-10.6", "W.9-10.3", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
