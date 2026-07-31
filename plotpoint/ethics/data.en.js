/* PlotPoint — Nicomachean Ethics, Selections (Aristotle).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   ideas from the Nicomachean Ethics. Standards are real, applicable Common Core
   codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "ethics",
  storageKey: "plotpoint.ethics.v1",

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
    "vocab.title": "Words for the Nicomachean Ethics",
    "vocab.intro": "{n} terms that unlock Aristotle's ethics. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Workshop of Virtue",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in Aristotle's argument",
    "relic.q.significance": "The idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to Aristotle's argument, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Finding the Mean",
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
    "arcade.title": "The Golden Mean",
    "arcade.default": "Sort each trait by whether it is a balanced virtue or an extreme.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Traits to sort",
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
    "extend.title": "Find the Mean",
    "extend.format": "Format",
    "extend.evidence": "The virtue and extremes I am building on",
    "extend.transfers": "What transfers to my situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the doctrine of the mean stops working",
    "extend.response": "My balanced response",
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
    "print.item.relic": "Workshop evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Find-the-mean organizer",
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
      title: "Nicomachean Ethics (Selections)",
      author: "Aristotle",
      grades: "Grades 11–12",
      genre: "Philosophy · Ethics",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Ancient Greek original and classic translations are public domain",
      textAccess: "Students need a public-domain translation of selections from the Nicomachean Ethics. This room does not reproduce the text.",
      copyright: "The Greek original and older translations are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "A demanding philosophical text best read in short selections with discussion. Preview for reading level and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/8438",
      audio: "https://librivox.org/the-nicomachean-ethics-by-aristotle/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Aristotle's ethics — a balanced scale and a flourishing plant."
    },
    hook: "What is a good life, and how do we get one? Aristotle argues that happiness is the highest goal, that virtue is a skill built by practice, and that the right choice usually lies in a balanced middle between too much and too little.",
    goals: [
      "Explain Aristotle's claim that happiness (flourishing) is the highest human good.",
      "Understand virtue of character as a habit formed by repeated action.",
      "Apply the doctrine of the mean: virtue as a balance between excess and deficiency.",
      "Transfer the doctrine of the mean to real choices of your own."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a 'golden mean.'",
        "Discuss: Is being good something you are born with, or something you practice?"
      ],
      during: [
        "Use the Relic Room to examine one idea at a time.",
        "For each virtue, ask: what would be too much, and what would be too little?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull Aristotle's ideas together.",
        "Complete the Extend task by finding the mean in a real situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words Aristotle's doctrine of the mean. Include one example that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Aristotle's ideas (for example, virtue as a habit and the doctrine of the mean). Explain how together they describe how a person becomes good." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the doctrine of the mean to a real choice people face today. Explain what transfers, what changes, and where the doctrine stops working." }
    },

    vocab: [
      { term: "ethics", def: "The study of how we ought to live and what makes actions right or good.", example: "Asking what a good person would do.", nonexample: "Measuring the temperature of a room.", context: "The Nicomachean Ethics is Aristotle's study of the good life." },
      { term: "happiness", def: "For Aristotle, flourishing — living and acting well over a whole life (not just feeling pleasure).", example: "A full life of good character and worthwhile activity.", nonexample: "A brief burst of fun that leaves nothing behind.", context: "Aristotle says happiness is the highest human good." },
      { term: "virtue", def: "An excellent trait of character, such as courage, honesty, or generosity.", example: "Being fair even when it costs you.", nonexample: "Cheating whenever it helps you.", context: "For Aristotle, a good life is a life of virtue." },
      { term: "habit", def: "A settled way of acting, built up by doing something again and again.", example: "Becoming generous by repeatedly giving.", nonexample: "A one-time action you never repeat.", context: "Aristotle says we become virtuous by making virtue a habit." },
      { term: "the mean", def: "The balanced middle between two extremes — too much and too little.", example: "Courage between cowardice and rashness.", nonexample: "Always choosing the most extreme option.", context: "The doctrine of the mean is central to Aristotle's ethics." },
      { term: "excess", def: "Having or doing too much of something.", example: "Rashness — too much boldness.", nonexample: "A careful, balanced amount.", context: "One way to miss a virtue is by excess." },
      { term: "deficiency", def: "Having or doing too little of something.", example: "Cowardice — too little boldness.", nonexample: "A careful, balanced amount.", context: "The other way to miss a virtue is by deficiency." },
      { term: "practical wisdom", def: "The good judgment that helps a person figure out the right action in real situations.", example: "Knowing how brave to be in this particular case.", nonexample: "Following one rigid rule no matter what.", context: "Practical wisdom helps us find the mean, which is not the same for everyone." },
      { term: "character", def: "The settled qualities that make you who you are and shape how you act.", example: "Being reliably honest and kind.", nonexample: "Acting at random with no pattern.", context: "Aristotle's ethics is about building good character." },
      { term: "friendship", def: "A caring relationship; Aristotle names three kinds — for use, for pleasure, and for virtue.", example: "Friends who help each other become better people.", nonexample: "Using someone only to get something from them.", context: "Aristotle devotes much of the Ethics to friendship." }
    ],

    relic: {
      name: "The Workshop of Virtue",
      intro: "Seven instructional reconstructions of images from Aristotle's argument — teaching recreations, not copyrighted illustrations. Investigate what each is, its role in his reasoning, and the idea it stands for.",
      artifacts: [
        {
          id: "tools", name: "The Craftsman's Tools", image: "images/tools.webp",
          clues: ["Aristotle says we learn virtue the way we learn a craft.", "A builder becomes a builder by building; a harpist by playing.", "In the same way, we become just by doing just acts."],
          identify: { q: "What do these tools represent?", choices: ["Aristotle's idea that virtue is learned by practice, like a craft", "A carpenter's real workshop", "A set of weapons", "Farming equipment"] },
          purpose: { q: "What is their role in his argument?", choices: ["To show that we become good by repeatedly acting well, not by theory alone", "To build houses", "To measure land", "To decorate a temple"] },
          significance: { q: "What idea do they stand for?", choices: ["Virtue is a skill developed through practice", "Virtue is something we are simply born with", "Skills cannot be learned", "Only craftsmen can be good"] },
          reveals: "That good character is made, not merely inherited — it is practiced.",
          conceals: "How much good upbringing and luck shape whether we get to practice well.",
          ace: "Articulate the craft comparison; connect practice to becoming virtuous; extend it to a good habit you built by repetition."
        },
        {
          id: "scale", name: "The Balance", image: "images/scale.webp",
          clues: ["A virtue sits at a balance point between two faults.", "On one side is too much; on the other, too little.", "Aristotle calls the balanced point the 'mean.'"],
          identify: { q: "What does this balance represent?", choices: ["The doctrine of the mean — virtue as a balance between excess and deficiency", "A merchant's scale for weighing gold", "A seesaw for children", "A tool for cooking"] },
          purpose: { q: "What is its role in his argument?", choices: ["To locate each virtue between two vices, too much and too little", "To weigh coins", "To measure temperature", "To divide land"] },
          significance: { q: "What idea does it stand for?", choices: ["Virtue lies in a balanced middle, not at an extreme", "The more extreme the better", "Balance does not matter", "Only excess is a vice"] },
          reveals: "Aristotle's central rule for finding virtue: seek the balanced middle.",
          conceals: "That the 'middle' is not the same for everyone or every situation.",
          ace: "Articulate the balance image; connect it to a specific virtue and its extremes; extend it to a choice where balance is hard to find."
        },
        {
          id: "target", name: "The Archer's Target", image: "images/target.webp",
          clues: ["Aristotle says it is easy to miss a target and hard to hit the center.", "There are many ways to miss but only one bullseye.", "So too there are many ways to go wrong and one way to act rightly."],
          identify: { q: "What does the target illustrate?", choices: ["That hitting the mean is hard, like hitting a bullseye — many ways to miss, one to hit", "A game of darts", "A soldier's training", "A hunting method"] },
          purpose: { q: "What is its role in his argument?", choices: ["To show that acting rightly is difficult and takes skill and aim", "To teach archery", "To measure distance", "To frighten enemies"] },
          significance: { q: "What idea does it stand for?", choices: ["Virtue is a difficult, precise target — easy to miss, hard to hit", "Being good is effortless", "There are many equally good extremes", "Aim does not matter"] },
          reveals: "That living well takes skill and effort, not just good intentions.",
          conceals: "Exactly where the 'center' is — it must be judged case by case.",
          ace: "Articulate the target comparison; connect difficulty to the need for practice; extend it to a skill where hitting the center took real effort."
        },
        {
          id: "path", name: "The Well-Worn Path", image: "images/path.webp",
          clues: ["A path is worn into the ground by walking it again and again.", "Aristotle says character is formed the same way.", "Each good action makes the next one a little easier."],
          identify: { q: "What does this path represent?", choices: ["Virtue as a habit worn in by repeated action", "A road between two cities", "A river's course", "A crack in the earth"] },
          purpose: { q: "What is its role in his argument?", choices: ["To show that repeated actions gradually shape our character", "To map a journey", "To mark a border", "To drain water"] },
          significance: { q: "What idea does it stand for?", choices: ["We become what we repeatedly do; habit shapes character", "Character never changes", "One action decides everything", "Habits are meaningless"] },
          reveals: "The Aristotelian insight that repeated choices settle into character.",
          conceals: "How hard it is to change a path once it is deeply worn.",
          ace: "Articulate how the path forms; connect repetition to character; extend it to a habit — good or bad — that has become a 'path' for you."
        },
        {
          id: "rule", name: "The Measuring Rule", image: "images/rule.webp",
          clues: ["The mean is not the same amount for everyone.", "Finding it takes good judgment in the actual situation.", "Aristotle calls this judgment practical wisdom."],
          identify: { q: "What does this measuring rule represent?", choices: ["Practical wisdom, which judges the right amount in each situation", "A carpenter's ruler for wood", "A king's scepter", "A game piece"] },
          purpose: { q: "What is its role in his argument?", choices: ["To show that reason and judgment, not a fixed formula, locate the mean", "To measure boards", "To weigh gold", "To tell time"] },
          significance: { q: "What idea does it stand for?", choices: ["Practical wisdom is needed to find the right action in real cases", "One rule fits every situation", "Judgment is unnecessary", "The mean is always the same for everyone"] },
          reveals: "That ethics requires judgment, not just memorized rules.",
          conceals: "How people can disagree about what the wise choice really is.",
          ace: "Articulate what practical wisdom does; connect it to the mean being 'relative to us'; extend it to a decision that required judgment, not a formula."
        },
        {
          id: "handshake", name: "Clasped Hands", image: "images/handshake.webp",
          clues: ["Aristotle spends much of the Ethics on friendship.", "He names three kinds: friendships of use, of pleasure, and of virtue.", "The best and most lasting is friendship based on good character."],
          identify: { q: "What do these clasped hands represent?", choices: ["Aristotle's account of friendship and its three kinds", "A business contract", "A wrestling match", "A royal oath"] },
          purpose: { q: "What is their role in his argument?", choices: ["To show that a good life includes good friendships, especially of virtue", "To seal a sale", "To start a fight", "To crown a king"] },
          significance: { q: "What idea do they stand for?", choices: ["The best friendships are based on shared virtue, not just use or pleasure", "Friendship does not matter for a good life", "All friendships are the same", "Only useful friends count"] },
          reveals: "That, for Aristotle, flourishing is lived with others, not alone.",
          conceals: "How rare true friendships of virtue are — and how much time they take.",
          ace: "Articulate the three kinds of friendship; connect the best kind to good character; extend it to a friendship in your life and which kind it is."
        },
        {
          id: "flourishing", name: "The Flourishing Plant", image: "images/flourishing.webp",
          clues: ["Aristotle's word for the highest good is often translated 'happiness' or 'flourishing.'", "It is not a passing feeling but a whole life lived well.", "Like a healthy plant, a person flourishes by fulfilling their nature."],
          identify: { q: "What does this flourishing plant represent?", choices: ["Eudaimonia — happiness as flourishing, a whole life lived well", "A gardener's hobby", "A symbol of wealth", "A festival decoration"] },
          purpose: { q: "What is its role in his argument?", choices: ["To picture the highest good as a full life of virtuous activity", "To describe farming", "To predict the weather", "To measure time"] },
          significance: { q: "What idea does it stand for?", choices: ["Happiness is flourishing — living and acting well over a complete life", "Happiness is only momentary pleasure", "Happiness is being rich", "Happiness cannot be reached"] },
          reveals: "Aristotle's picture of the good life as flourishing, not just feeling good.",
          conceals: "How much flourishing depends on things partly outside our control, like health and fortune.",
          ace: "Articulate what 'flourishing' means; connect it to virtue and activity; extend it to what a flourishing life would look like for you."
        }
      ]
    },

    ctob: {
      name: "Finding the Mean",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What does Aristotle call the highest human good — the end we seek for its own sake? (one word, in English)",
          evidence: ["Aristotle asks what everything ultimately aims at.", "He concludes there is one final end sought for itself, not for anything else.", "It is often translated with a word beginning 'happ…'."],
          hints: ["It is more than passing pleasure — it is flourishing.", "Happ…", "The English word is happiness."],
          answer: "happiness"
        },
        {
          type: "mc",
          prompt: "According to Aristotle, virtue of character is —",
          options: [
            "a habit formed by repeatedly acting well, not something we are simply born with.",
            "a feeling that comes and goes on its own.",
            "a gift given only to the wealthy.",
            "impossible for humans to develop."
          ],
          hints: ["Think about how a builder becomes a builder.", "Which option is about practice and habit?"]
        },
        {
          type: "word",
          prompt: "Aristotle's famous doctrine says each virtue is a balanced middle, or ______, between two extremes. (one word)",
          evidence: ["A virtue lies between too much and too little.", "Aristotle names this balanced middle point.", "The word begins with 'me…'."],
          hints: ["The balanced middle between excess and deficiency.", "Me…", "The word is mean."],
          answer: "mean"
        },
        {
          type: "mc",
          prompt: "For Aristotle, courage is the mean between —",
          options: [
            "cowardice (too little boldness) and rashness (too much boldness).",
            "honesty and generosity.",
            "wealth and poverty.",
            "wisdom and friendship."
          ],
          hints: ["Think of too little and too much of the same quality.", "Which pair is deficiency and excess of boldness?"]
        },
        {
          type: "sequence",
          prompt: "Put Aristotle's opening argument about the good in order, earliest first.",
          items: [
            "Every action and choice aims at some good.",
            "Some goods are pursued only for the sake of other goods.",
            "There must be a final good we seek for its own sake.",
            "That final good is happiness (flourishing)."
          ],
          hints: ["Start with the claim that all actions aim at some good.", "The idea of a 'final end' comes before naming it.", "Happiness is named last."]
        },
        {
          type: "digit",
          prompt: "How many kinds of friendship does Aristotle describe (friendships of use, of pleasure, and of virtue)? Enter the number.",
          evidence: ["Aristotle sorts friendships by what they are based on.", "One is based on usefulness, one on pleasure, and one on good character.", "Count the kinds."],
          hints: ["Use, pleasure, and virtue.", "One more than two.", "There are 3 kinds."],
          answer: "3"
        }
      ]
    },

    arcade: {
      name: "The Golden Mean",
      instruction: "Aristotle says each virtue is a balanced mean between two extremes — a vice of excess (too much) and a vice of deficiency (too little). Sort each trait: is it a BALANCED VIRTUE (the mean) or an EXTREME (a vice of too much or too little)? Reasoning earns the points.",
      buckets: [
        { id: "virtue", label: "Balanced virtue (the mean)", short: "Virtue" },
        { id: "extreme", label: "Extreme (a vice)", short: "Extreme" }
      ],
      cards: [
        { text: "Courage — facing fear when and as one should", bucket: "virtue", why: "Courage is the balanced mean between cowardice and rashness." },
        { text: "Generosity — giving the right amount to the right people", bucket: "virtue", why: "Generosity is the mean between stinginess and wastefulness." },
        { text: "Truthfulness — being honest about oneself", bucket: "virtue", why: "Truthfulness is the mean between false modesty and boastfulness." },
        { text: "Even temper — feeling anger at the right things, in the right measure", bucket: "virtue", why: "Good temper is the mean between too little and too much anger." },
        { text: "Rashness — charging in with too little fear", bucket: "extreme", why: "Rashness is an excess — too much boldness." },
        { text: "Cowardice — being ruled by too much fear", bucket: "extreme", why: "Cowardice is a deficiency — too little boldness." },
        { text: "Wastefulness — giving away far too much", bucket: "extreme", why: "Wastefulness is an excess of giving." },
        { text: "Boastfulness — claiming far more than is true", bucket: "extreme", why: "Boastfulness is an excess — too much self-display." }
      ],
      followup: "Pick one virtue and name both extremes around it (too much and too little). Why might the 'mean' be different for different people or situations?"
    },

    analysis: {
      mcq: [
        {
          q: "Aristotle argues that the highest human good is —",
          options: [
            "happiness, understood as flourishing over a whole life.",
            "wealth above all else.",
            "momentary physical pleasure.",
            "power over others."
          ],
          why: "For Aristotle, happiness (eudaimonia) is the final end we seek for its own sake — a life of virtuous activity."
        },
        {
          q: "According to Aristotle, we become virtuous mainly by —",
          options: [
            "practicing virtuous actions until they become a habit.",
            "being born with a naturally good character.",
            "reading about virtue without ever acting.",
            "inheriting virtue from wealthy parents."
          ],
          why: "Just as we learn a craft by doing it, we become just and brave by doing just and brave acts."
        },
        {
          q: "The doctrine of the mean holds that a virtue is —",
          options: [
            "a balanced middle between the extremes of too much and too little.",
            "always the most extreme option available.",
            "whatever the majority happens to do.",
            "a strict rule that never changes for anyone."
          ],
          why: "Each virtue sits between a vice of excess and a vice of deficiency."
        },
        {
          q: "Finding the mean, for Aristotle, requires —",
          options: [
            "practical wisdom — good judgment about the right action in each situation.",
            "a single formula that fits every case.",
            "ignoring the details of the situation.",
            "choosing at random."
          ],
          why: "The mean is 'relative to us' and must be judged case by case with practical wisdom."
        },
        {
          q: "Aristotle says the best and most lasting friendships are those based on —",
          options: [
            "shared virtue and good character.",
            "usefulness alone.",
            "pleasure alone.",
            "wealth alone."
          ],
          why: "Of the three kinds — use, pleasure, and virtue — friendships of virtue are the deepest and most enduring."
        }
      ],
      short: [
        "Choose one artifact from the Workshop. Explain what it is and the idea from Aristotle it stands for.",
        "Pick a virtue and name its two extremes (too much and too little). Explain why the balanced middle is the virtue.",
        "Aristotle says we become good by practice, like learning a craft. Do you agree that character works this way? Use an example."
      ],
      paragraph: "Write an evidence-based paragraph. Is Aristotle's doctrine of the mean a helpful guide for making real decisions, or is it too vague to use? Make a claim and support it with specific ideas from the Ethics.",
      aceReflection: "Articulate the doctrine of the mean in your own words. Connect it to Aristotle's idea that virtue is a habit. Extend it to a real choice, and name where the doctrine becomes hard to apply."
    },

    extend: {
      name: "Find the Mean",
      prompt: "Aristotle says the right action usually lies in a balanced middle between doing too much and too little. Choose a real situation (speaking up, spending money, using your phone, responding to criticism). Name the virtue at stake, describe the two extremes around it, and explain what the balanced 'mean' would look like here.",
      format: "A short analysis naming a virtue, its two extremes (excess and deficiency), and the balanced response — plus a note on where the mean is hard to locate."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning Aristotle's doctrine of the mean from the Nicomachean Ethics. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Nicomachean Ethics. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in Aristotle's Ethics because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Nicomachean Ethics: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply the doctrine of the mean to this situation: [situation]. Ask me questions to help me name the virtue and its two extremes. Do not decide the answer for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Nicomachean Ethics for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room introduces Aristotle's ethics through selections: happiness as the highest good, virtue as a habit, the doctrine of the mean, practical wisdom, and friendship. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation and choose selections appropriate for your students; the full Nicomachean Ethics is long and demanding. The Greek original and older translations are public domain; some recent translations remain under copyright.",
        "Details here reflect widely established ideas (happiness/eudaimonia as the highest good; virtue as a habit learned by practice; the doctrine of the mean, e.g., courage between cowardice and rashness; practical wisdom; the three kinds of friendship). Confirm specifics against your edition.",
        "Translations vary in how they render key terms (eudaimonia as 'happiness' or 'flourishing'; the mean; practical wisdom/phronesis). Note this to students.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III–IV / advanced ELAR TEKS (19 TAC Ch. 110) strands on central ideas of complex informational text, text structure, and argument. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.3", "RI.11-12.5", "RI.11-12.6", "RI.11-12.8", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
