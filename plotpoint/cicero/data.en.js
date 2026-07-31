/* PlotPoint — Cicero, On Friendship (Laelius de Amicitia), c. 44 BCE.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations. Cicero's famous definition of
   friendship (accord in things human and divine, joined with goodwill and
   affection) and his sayings are paraphrased as ideas, not quoted. Details are
   widely established (Laelius the main speaker, mourning Scipio; addressed to
   his sons-in-law Fannius and Scaevola; the work dedicated to Atticus).
   Standards are real, applicable Common Core codes flagged as good-faith
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "cicero",
  storageKey: "plotpoint.cicero.v1",

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
    "enter.readListenNote": "This dialogue is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for On Friendship",
    "vocab.intro": "{n} terms that unlock the dialogue. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Laelius's Study",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the dialogue",
    "relic.q.significance": "The idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Test of True Friendship",
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
    "arcade.title": "True Friend or Flatterer?",
    "arcade.default": "Sort each thing by what it shows.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Close Reading & Argument",
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
    "extend.title": "Cicero's Test, Applied",
    "extend.format": "Format",
    "extend.evidence": "The idea from the dialogue I am building on",
    "extend.transfers": "What transfers to a modern friendship",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the idea stops working",
    "extend.response": "My evidence-based argument",
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
    "print.item.relic": "Laelius's Study evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Friendship-test organizer",
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
      title: "On Friendship (Laelius de Amicitia)",
      author: "Marcus Tullius Cicero",
      grades: "Grades 9–12",
      genre: "Philosophy · Dialogue · Nonfiction",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Ancient text (c. 44 BCE) is public domain",
      textAccess: "Students need a public-domain translation of Cicero's On Friendship (De Amicitia). This room does not reproduce the text.",
      copyright: "The dialogue itself (c. 44 BCE) is public domain; individual modern translations may carry their own copyright. Verify your edition.",
      contentNote: "A short but dense philosophical dialogue on friendship, virtue, and loyalty. Accessible in selections with guidance. Align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2808",
      audio: "https://librivox.org/treatises-on-friendship-and-old-age-by-marcus-tullius-cicero/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Cicero's On Friendship — two clasped hands, a scroll, and an empty chair in a Roman study by lamplight."
    },
    hook: "Grieving the death of his dearest friend, an old Roman named Laelius sits with his two sons-in-law and tries to answer a question people still argue about: what makes a friendship real — and how do you tell a true friend from a flatterer who only tells you what you want to hear?",
    goals: [
      "Understand On Friendship as a Roman philosophical dialogue about the nature of true friendship.",
      "Explain Cicero's claim that real friendship rests on virtue and can exist only among good people.",
      "Analyze his warning about flattery and his belief that friendship grows from nature and affection, not calculation.",
      "Transfer Cicero's test of friendship to a modern relationship and judge where it still holds."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a philosophical dialogue.",
        "Discuss: What is the difference between a real friend and someone who just agrees with you?"
      ],
      during: [
        "Use Laelius's Study to examine one idea at a time.",
        "For each claim, ask: what does Cicero say a true friend does, and why?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to apply Cicero's test to a modern friendship."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Cicero means when he says true friendship is only possible among good people. Include one detail from the dialogue that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Cicero's ideas (for example, that friendship rests on virtue and that flattery destroys it). Explain how together they describe what a real friend is." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Cicero's test of friendship to a modern relationship you know about (in life, a book, or a film). Explain what transfers, what changes, and where his idea stops working." }
    },

    vocab: [
      { term: "friendship", def: "In the dialogue, a bond of mutual goodwill and affection between good people (Latin: amicitia).", example: "Two people who wish each other well for the other's own sake.", nonexample: "Two people using each other for gain.", context: "Cicero's whole dialogue asks what real friendship is." },
      { term: "virtue", def: "Moral goodness and good character.", example: "Being honest, fair, and courageous.", nonexample: "Cheating whenever it is useful.", context: "Cicero argues friendship can exist only among people of virtue." },
      { term: "goodwill", def: "A sincere wish for another person's good, expecting nothing back.", example: "Wanting your friend to succeed for their sake.", nonexample: "Helping only to be repaid.", context: "Friendship, Cicero says, joins affection with goodwill." },
      { term: "loyalty", def: "Faithfulness and reliability toward a friend, especially in hard times (Latin: fides).", example: "Standing by a friend when it costs you something.", nonexample: "Leaving a friend the moment it is inconvenient.", context: "Loyalty is the foundation of a lasting friendship." },
      { term: "flattery", def: "Insincere praise meant to please rather than to tell the truth.", example: "Telling someone their bad plan is brilliant.", nonexample: "Honestly warning a friend about a mistake.", context: "Cicero calls flattery the great enemy of friendship." },
      { term: "sycophant", def: "A person who flatters and agrees with everything to gain favor; a yes-man.", example: "Someone who praises the powerful no matter what.", nonexample: "A friend who tells you an honest, hard truth.", context: "A sycophant is the opposite of a true friend." },
      { term: "dialogue", def: "A written work in the form of a conversation exploring ideas.", example: "Characters discussing friendship back and forth.", nonexample: "A single uninterrupted speech.", context: "On Friendship is written as a dialogue among three Romans." },
      { term: "adversity", def: "Hardship, misfortune, or difficult times.", example: "Losing a job or facing illness.", nonexample: "A season of easy good luck.", context: "Cicero says a true friend makes adversity easier to bear." },
      { term: "counsel", def: "Honest advice or guidance.", example: "Telling a friend the truth about a risky choice.", nonexample: "Saying only what your friend wants to hear.", context: "A true friend offers frank counsel, not flattery." }
    ],

    relic: {
      name: "Laelius's Study",
      intro: "Seven instructional reconstructions of ideas and objects from Cicero's dialogue — teaching recreations, not artwork from any edition. Investigate what each is, its role in the argument, and the idea it stands for.",
      artifacts: [
        {
          id: "dialogue", name: "The Conversation", image: "images/dialogue.webp",
          clues: ["The work is written as a conversation, not a lecture.", "An old man named Laelius speaks with two younger relatives.", "They are his sons-in-law, and they ask him about friendship."],
          identify: { q: "What form does On Friendship take?", choices: ["A dialogue — a conversation exploring ideas", "A single battle speech", "A collection of letters", "A list of laws"] },
          purpose: { q: "Why put the ideas in a conversation?", choices: ["So the reader can follow the questions and answers as they unfold", "To hide the ideas", "To record a trial", "To entertain with a story only"] },
          significance: { q: "What does the dialogue form show?", choices: ["Big questions about how to live are worked out through honest exchange", "That only one person is right", "That friendship cannot be discussed", "That conversation is pointless"] },
          reveals: "That Cicero explores friendship by dramatizing thoughtful people reasoning together.",
          conceals: "That Cicero, the author, is shaping every voice to make his own case.",
          ace: "Articulate what a dialogue is; connect the form to the topic of friendship; extend it to why hard questions are often best explored in conversation."
        },
        {
          id: "empty-chair", name: "The Empty Chair", image: "images/empty-chair.webp",
          clues: ["Laelius is grieving.", "His dearest friend, Scipio, has recently died.", "The whole conversation grows out of that loss."],
          identify: { q: "Whose absence sets the mood of the dialogue?", choices: ["Scipio, Laelius's dearest friend, who has just died", "A Roman emperor", "Laelius's enemy", "A stranger"] },
          purpose: { q: "Why begin from grief?", choices: ["Loss makes Laelius reflect on what true friendship was and meant", "To celebrate a victory", "To settle a debt", "To start a war"] },
          significance: { q: "What does the empty chair stand for?", choices: ["The depth and value of a real friendship, felt most when it is gone", "That friendship does not matter", "That grief should be hidden", "That old age ends friendship"] },
          reveals: "That the dialogue's warmth comes from real love and real loss.",
          conceals: "The particular history the two friends shared, only hinted at here.",
          ace: "Articulate why Laelius is grieving; connect his loss to his reflections; extend it to what a loss can teach about a relationship's worth."
        },
        {
          id: "definition", name: "The Definition Scroll", image: "images/definition.webp",
          clues: ["Cicero tries to say exactly what friendship is.", "He describes an agreement, or accord, on things human and divine.", "To that agreement he adds goodwill and affection."],
          identify: { q: "What does this scroll represent?", choices: ["Cicero's definition of friendship as accord joined with goodwill and affection", "A recipe", "A property deed", "A map of Rome"] },
          purpose: { q: "Why define friendship so carefully?", choices: ["So the rest of the argument rests on a clear idea of what friendship is", "To confuse the reader", "To avoid the topic", "To sell scrolls"] },
          significance: { q: "What does the definition emphasize?", choices: ["Shared values plus genuine affection, not mere usefulness", "Only usefulness", "Only shared hobbies", "Only living nearby"] },
          reveals: "That for Cicero friendship joins agreement on what matters with real affection.",
          conceals: "How hard it is to find people who truly share one's deepest values.",
          ace: "Articulate Cicero's definition; connect 'accord' to 'affection'; extend it to whether shared values are necessary for a close friendship today."
        },
        {
          id: "virtue-root", name: "The Root of Virtue", image: "images/virtue-root.webp",
          clues: ["Cicero keeps returning to one condition for friendship.", "He says only good people can truly be friends.", "Without good character, he argues, real friendship cannot grow."],
          identify: { q: "What condition does this root stand for?", choices: ["Virtue — friendship can exist only among good people", "Wealth", "Fame", "Physical strength"] },
          purpose: { q: "Why make virtue the root of friendship?", choices: ["Because trust and goodwill depend on good character", "Because good people are rare", "To exclude the poor", "To flatter the powerful"] },
          significance: { q: "What follows from this claim?", choices: ["A bond built on shared vice or mere use is not true friendship", "That anyone can be a true friend to anyone", "That virtue is unimportant", "That friendship needs no trust"] },
          reveals: "That for Cicero character, not convenience, is the foundation of friendship.",
          conceals: "How to judge who is truly 'good' — a harder question than it sounds.",
          ace: "Articulate why virtue is the root; connect character to trust; extend it to whether a friendship built only on usefulness can last."
        },
        {
          id: "flatterer-mask", name: "The Flatterer's Mask", image: "images/flatterer-mask.webp",
          clues: ["Cicero warns against a great danger to friendship.", "It wears a friendly face but tells you only what you want to hear.", "He contrasts it with a friend's honest, sometimes hard, counsel."],
          identify: { q: "What does this mask represent?", choices: ["Flattery — false friendship that only pleases", "True counsel", "Silence", "A stranger"] },
          purpose: { q: "Why warn so strongly about flattery?", choices: ["Because it feels like friendship but corrupts it", "Because flatterers are honest", "Because it is harmless", "Because friends never disagree"] },
          significance: { q: "What is the mark of a true friend by contrast?", choices: ["Willingness to tell the truth and give honest counsel", "Agreeing with everything you say", "Praising all your choices", "Never challenging you"] },
          reveals: "That honesty, not constant agreement, is a sign of real friendship.",
          conceals: "How to give hard truths kindly — the skill Cicero prizes but does not fully teach.",
          ace: "Articulate what flattery is; connect it to the loss of true friendship; extend it to how you can tell an honest friend from a flatterer today."
        },
        {
          id: "old-wine", name: "The Old Wine", image: "images/old-wine.webp",
          clues: ["Cicero values friendships that have lasted a long time.", "He compares old friendships to something that improves with age.", "New friendships are good, he says, but old ones are to be treasured."],
          identify: { q: "What does the old wine stand for?", choices: ["Long-lasting friendship, valued like wine that improves with age", "A single party", "A business deal", "A quick acquaintance"] },
          purpose: { q: "Why praise old friendships?", choices: ["Time builds trust, shared history, and proven loyalty", "Because new friends are bad", "Because old people cannot make friends", "To discourage new friendships"] },
          significance: { q: "What does this image teach?", choices: ["Some goods in friendship can only grow with time and faithfulness", "That friendship should be discarded quickly", "That age ruins friendship", "That loyalty does not matter"] },
          reveals: "That Cicero prizes endurance and proven trust in a friendship.",
          conceals: "That not every old friendship stays healthy simply because it is old.",
          ace: "Articulate why old friendships are valued; connect time to trust; extend it to what a long friendship can offer that a new one cannot."
        },
        {
          id: "the-limit", name: "The Limit", image: "images/the-limit.webp",
          clues: ["Cicero sets a boundary even friendship must not cross.", "He says you should never ask a friend to do something wrong.", "And you should never do wrong just because a friend asks."],
          identify: { q: "What limit does this stone mark?", choices: ["Never ask, or grant, what is dishonorable, even for a friend", "Never disagree with a friend", "Never make new friends", "Never end a friendship"] },
          purpose: { q: "Why set this limit?", choices: ["Because true friendship rests on virtue and cannot excuse wrongdoing", "Because friends should obey each other", "Because rules ruin friendship", "Because loyalty means anything goes"] },
          significance: { q: "What does the limit protect?", choices: ["The integrity that makes the friendship worth having", "The right to do wrong together", "The stronger friend's power", "Blind obedience"] },
          reveals: "That for Cicero loyalty has a boundary: it never overrides doing right.",
          conceals: "How to hold that line when a close friend pressures you.",
          ace: "Articulate Cicero's limit; connect it to virtue as the root; extend it to a modern case where loyalty and doing right pull in different directions."
        }
      ]
    },

    ctob: {
      name: "The Test of True Friendship",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no memorized page numbers. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Cicero argues that true friendship can exist only among people who have good character — that is, ______. (one word)",
          evidence: ["Cicero keeps returning to one condition for real friendship.", "He says a bond built on shared wrongdoing is not true friendship.", "The word means moral goodness and begins with 'vir…'."],
          hints: ["It means moral goodness.", "Vir…", "The word is virtue."],
          answer: "virtue"
        },
        {
          type: "mc",
          prompt: "Who is the main speaker of the dialogue, reflecting on friendship after his friend's death?",
          options: [
            "Laelius.",
            "Scipio.",
            "Atticus.",
            "Julius Caesar."
          ],
          hints: ["He is the one grieving and giving the speech, not the one who died.", "Which name belongs to the living speaker?"]
        },
        {
          type: "digit",
          prompt: "Laelius gives his reflections to his two sons-in-law, Fannius and Scaevola. How many listeners is that? Enter the number.",
          evidence: ["He is speaking to family members who asked him about friendship.", "They are named Fannius and Scaevola.", "Count them."],
          hints: ["Fannius and Scaevola.", "One plus one.", "There are 2 listeners."],
          answer: "2"
        },
        {
          type: "mc",
          prompt: "According to Cicero, the great enemy of true friendship is —",
          options: [
            "flattery: false praise that only tells people what they want to hear.",
            "honest disagreement.",
            "spending time apart.",
            "growing older."
          ],
          hints: ["Think about the flatterer's mask.", "Which option names insincere praise?"]
        },
        {
          type: "sequence",
          prompt: "Put Cicero's account of where friendship comes from in order, earliest first.",
          items: [
            "Nature gives people the capacity for love and affection.",
            "We feel goodwill toward those we see as good.",
            "That goodwill grows into a lasting friendship.",
            "Advantage may follow from friendship, but it is not its cause."
          ],
          hints: ["It begins in nature, not in calculation.", "Goodwill comes before the friendship it grows into.", "Cicero puts usefulness last — as a result, not the reason."]
        },
        {
          type: "word",
          prompt: "Unlike a flatterer, a true friend is willing to tell you the honest ______, even when it is hard to hear. (one word)",
          evidence: ["Cicero contrasts the friend with the flatterer.", "The flatterer says only what pleases; the friend does the opposite.", "The word is the opposite of a comforting lie and begins with 'tru…'."],
          hints: ["The opposite of flattery's lies.", "Tru…", "The word is truth."],
          answer: "truth"
        }
      ]
    },

    arcade: {
      name: "True Friend or Flatterer?",
      instruction: "Cicero draws a sharp line between a true friend and a flatterer. Sort each behavior: is it the mark of a TRUE FRIEND, or the mark of a FLATTERER? Reasoning earns the points.",
      buckets: [
        { id: "friend", label: "A true friend", short: "True friend" },
        { id: "flatterer", label: "A flatterer", short: "Flatterer" }
      ],
      cards: [
        { text: "Tells you an honest truth even when it is hard", bucket: "friend", why: "Cicero says a real friend gives frank counsel, not just comfort." },
        { text: "Stays loyal when times turn hard", bucket: "friend", why: "A true friend makes adversity lighter by sharing it." },
        { text: "Wishes you well for your own sake", bucket: "friend", why: "Friendship joins affection with genuine goodwill." },
        { text: "Refuses to help you do something wrong", bucket: "friend", why: "Cicero's limit: never ask or grant what is dishonorable." },
        { text: "Agrees with everything you say", bucket: "flatterer", why: "Constant agreement is the flatterer's trademark, not a friend's." },
        { text: "Praises even your bad decisions", bucket: "flatterer", why: "Flattery tells you what pleases, not what is true." },
        { text: "Disappears the moment you face trouble", bucket: "flatterer", why: "False friendship abandons you in adversity." },
        { text: "Befriends you only for what he can get", bucket: "flatterer", why: "Cicero says friendship sought only for advantage is not real." }
      ],
      followup: "Cicero says a friend who only agrees with you is no friend at all. Do you agree that honesty is a test of real friendship? Where have you seen the difference between a true friend and a flatterer?"
    },

    analysis: {
      mcq: [
        {
          q: "On Friendship is best described as —",
          options: [
            "a philosophical dialogue exploring the nature of true friendship.",
            "a battle history.",
            "a book of laws.",
            "a collection of love poems."
          ],
          why: "Cicero writes it as a conversation in which Laelius reflects on what friendship is."
        },
        {
          q: "Cicero argues that true friendship can exist only among —",
          options: [
            "people of good character (virtue).",
            "people who are wealthy.",
            "people who are famous.",
            "people who live in the same city."
          ],
          why: "For Cicero, trust and goodwill rest on virtue, so real friendship needs good character."
        },
        {
          q: "According to Cicero, friendship arises mainly from —",
          options: [
            "nature and affection, not a calculation of profit.",
            "the hope of getting rich.",
            "fear of enemies.",
            "a legal contract."
          ],
          why: "He says nature and goodwill come first; any advantage follows friendship rather than causing it."
        },
        {
          q: "Cicero warns that the greatest threat to friendship is —",
          options: [
            "flattery — false praise that pleases instead of telling the truth.",
            "honest disagreement between friends.",
            "making new friends.",
            "growing old together."
          ],
          why: "Flattery wears a friendly mask but corrupts friendship; a true friend gives honest counsel."
        },
        {
          q: "Cicero's rule about what friends may ask of each other is —",
          options: [
            "never ask, or grant, what is dishonorable, even for a friend.",
            "always do whatever a friend requests.",
            "never disagree with a friend.",
            "keep friendship secret."
          ],
          why: "Because friendship rests on virtue, loyalty never excuses doing wrong."
        }
      ],
      short: [
        "Choose one artifact from Laelius's Study. Explain what it is and the idea from the dialogue it stands for.",
        "Explain in your own words why Cicero thinks a flatterer cannot be a true friend.",
        "Cicero says friendship comes from nature and affection, not from calculating advantage. Do you find that convincing? Why or why not?"
      ],
      paragraph: "Write an evidence-based paragraph. Is Cicero right that true friendship requires good character (virtue)? Make a claim and support it with specific ideas from the dialogue and one example from life, a book, or a film.",
      aceReflection: "Articulate Cicero's test of a true friend. Connect it to two ideas from the dialogue (for example, virtue and the danger of flattery). Extend it to a modern friendship, and name where the test becomes hard to apply."
    },

    extend: {
      name: "Cicero's Test, Applied",
      prompt: "Cicero offers a test of friendship: it rests on virtue, it prizes honesty over flattery, it stays loyal in hard times, and it never asks a friend to do wrong. Choose a real or fictional friendship you know well. Apply Cicero's test: where does the friendship pass, where does it fall short, and what would Cicero praise or warn about?",
      format: "A short evidence-based argument applying Cicero's test of friendship to a specific relationship, with a note on where his idea fits and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning Cicero's idea that true friendship requires virtue. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Cicero's On Friendship. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in On Friendship because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the dialogue." },
      { title: "Evidence prompt", text: "Here is my claim about On Friendship: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Cicero's test of friendship to this relationship: [relationship]. Ask me questions to find where it passes his test and where it falls short. Do not decide for me." },
      { title: "Critique prompt", text: "Review my interpretation of On Friendship for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Cicero's On Friendship (Laelius de Amicitia) as philosophy and argument: the nature of true friendship, virtue as its foundation, the danger of flattery, and loyalty within moral limits. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The dialogue itself (c. 44 BCE) is public domain; individual modern translations may carry their own copyright. The linked Gutenberg edition (Shuckburgh) is public domain — confirm the edition you assign.",
        "The prose is short but philosophically dense. Assign selections with scaffolding, and decide which sections fit your course.",
        "Details here reflect widely established facts: the work is a dialogue in which Laelius, mourning his friend Scipio, addresses his sons-in-law Fannius and Scaevola; the treatise is dedicated to Cicero's friend Atticus; Cicero grounds friendship in virtue, warns against flattery, and argues friendship arises from nature more than from calculated advantage. Cicero's famous definition and sayings are paraphrased, not quoted. Confirm specifics against your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I–IV ELAR TEKS (19 TAC Ch. 110) strands on author's purpose, argument, and analysis of a foundational philosophical text, with cross-curricular ties to world history and ethics. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.9-10.2", "RI.9-10.4", "RI.11-12.1", "RI.11-12.2", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
