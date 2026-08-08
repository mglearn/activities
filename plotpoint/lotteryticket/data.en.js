/* PlotPoint — The Lottery Ticket (Anton Chekhov, 1887; PD Constance Garnett tr.).
   PUBLIC DOMAIN.  Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "lotteryticket",
  storageKey: "plotpoint.lotteryticket.v1",

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
    "enter.read": "Read the full text (American Literature)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Lottery Ticket",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Evening of the Ticket",
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
    "ctob.title": "Series 9,499",
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
    "arcade.title": "Hope or Resentment?",
    "arcade.default": "Sort each detail by whether it belongs to the hopeful daydream or the bitter turn.",
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
    "extend.title": "The Poison of \"What If\"",
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
    "print.item.relic": "Evening evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Hope-vs-resentment organizer",
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
      title: "The Lottery Ticket",
      author: "Anton Chekhov",
      grades: "Grades 8–11",
      genre: "Realism · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1887)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1887, The Lottery Ticket is in the public domain, as is the Constance Garnett translation used by most free editions. This room paraphrases and reproduces no full passages.",
      contentNote: "A quiet, sharp story about greed and marriage. As a couple imagines winning a fortune, their affection curdles into resentment; at the end the disappointed husband bitterly says he could hang himself (a moment of despair, not a real plan). Mature theme; best for middle and high school with discussion; preview and align with local policy.",
      gutenberg: "https://americanliterature.com/author/anton-chekhov/short-story/the-lottery-ticket/",
      audio: "https://archive.org/details/AntonChekhov-SelectedShortStories",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Lottery Ticket — a lamplit table where a man holds a newspaper and a small lottery ticket, a woman leaning in hopefully, while shadowy daydreams of a country estate and stacks of money hover behind them."
    },
    hook: "After supper, Ivan Dmitritch — a comfortable, ordinary man — glances at the newspaper and notices that the winning lottery series matches the ticket his wife keeps in a drawer. He hasn't checked the number yet, so he lets himself hope. For a few golden minutes the couple imagines the seventy-five thousand roubles and everything it could buy. Then the daydream begins to turn — and long before Ivan looks at the actual number, something between them has already gone quietly, terribly sour.",
    goals: [
      "Follow the couple's shift from hope to resentment as they imagine winning.",
      "Analyze how Chekhov shows character through daydreams rather than action.",
      "Trace the irony: the mere fantasy of money damages them before they even lose.",
      "Interpret the story's ideas about greed, discontent, and marriage."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially windfall, resentment, and contempt.",
        "Discuss: How might suddenly imagining great wealth change how people see each other?"
      ],
      during: [
        "Use The Evening of the Ticket to track each step from hope to bitterness.",
        "Watch how each daydream quietly turns into a complaint about the other person."
      ],
      after: [
        "Run the breakout, arcade, and analysis to separate the hope from the resentment.",
        "Complete the Extend task on how imagining 'what if' can poison what we have."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Ivan and Masha's happy daydream turns sour, even before they check the number. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the couple's imagined fortune to the resentment that grows between them. Explain how Chekhov uses a prize they never win to expose what they really feel." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea — that imagining wealth can poison contentment — to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "lottery", def: "A game in which numbered tickets win prizes purely by chance.", example: "The ticket Ivan's wife keeps in a drawer.", nonexample: "A prize earned by hard work and skill.", context: "A national lottery draw sets the whole story going." },
      { term: "windfall", def: "A sudden, unexpected gain of money.", example: "The seventy-five thousand roubles the couple imagine winning.", nonexample: "A steady paycheck earned each week.", context: "The dream of a windfall changes how the couple see each other." },
      { term: "greed", def: "A strong, selfish desire for more money or things.", example: "The hunger for wealth that grows in Ivan as he dreams.", nonexample: "Being content with what you already have.", context: "Chekhov quietly exposes the greed beneath an ordinary marriage." },
      { term: "illusion", def: "A false idea or belief; something that seems real but isn't.", example: "The couple's vision of a rich new life they will never have.", nonexample: "A plain fact you can check and confirm.", context: "They live inside the illusion of winning before checking the number." },
      { term: "resentment", def: "Bitter anger at feeling wronged or shortchanged.", example: "Ivan's growing irritation at how his wife would use the money.", nonexample: "Warm gratitude toward someone.", context: "Resentment creeps into their daydream uninvited." },
      { term: "contempt", def: "A feeling that someone is worthless; scorn.", example: "The scorn Ivan and Masha begin to feel for each other.", nonexample: "Deep respect and admiration.", context: "Their imagined riches breed mutual contempt." },
      { term: "discontent", def: "A restless dissatisfaction with your life.", example: "The couple's sudden disgust with their own home and habits.", nonexample: "Calm satisfaction with your situation.", context: "The fantasy leaves them worse off — full of discontent." },
      { term: "roubles", def: "Units of Russian money.", example: "The seventy-five thousand roubles of the top prize.", nonexample: "A handful of U.S. pennies.", context: "The prize is counted in roubles, the money of Chekhov's Russia." }
    ],

    relic: {
      name: "The Evening of the Ticket",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "ticket", name: "The Lottery Ticket", image: "images/ticket.webp",
          clues: ["Ivan's wife keeps a lottery ticket put away in the house.", "It carries a series number and a separate ticket number.", "Their ticket belongs to series 9,499 and is number 26."],
          identify: { q: "What does Ivan's wife own that starts the story?", choices: ["A lottery ticket", "A gold watch", "A newspaper", "A country estate"] },
          purpose: { q: "What is the ticket's role in the story?", choices: ["It is the small chance of a fortune that sparks the whole daydream", "It is a train ticket for a trip", "It is worthless scrap paper to them", "It has no role"] },
          significance: { q: "Why does a single ticket matter so much to the couple?", choices: ["It offers a rare chance to escape their ordinary life", "It proves they are already rich", "It is a family heirloom", "It is a gift for a friend"] },
          reveals: "The tiny seed of possibility the entire story grows from.",
          conceals: "That its real number will bring nothing at all.",
          ace: "Articulate what the ticket is; connect it to the couple's hopes; extend it to how a small chance can unleash big fantasies."
        },
        {
          id: "newspaper", name: "The Newspaper", image: "images/newspaper.webp",
          clues: ["After supper, Ivan looks through the newspaper.", "It prints the winning series number of the latest lottery draw.", "He reads that series 9,499 has won — the very series on their ticket."],
          identify: { q: "What does Ivan find in the newspaper?", choices: ["That the winning series matches their ticket's series", "A job offer", "Bad news about a friend", "A recipe"] },
          purpose: { q: "What is the newspaper's role in the story?", choices: ["It delivers the news that lights the spark of hope", "It ends the story", "It is never read", "It reports the weather only"] },
          significance: { q: "Why is matching only the series so powerful?", choices: ["It is enough to make hope feel real, before any number is checked", "It guarantees they have won", "It proves they have lost", "It means nothing to them"] },
          reveals: "The single line of print that sets the fantasy in motion.",
          conceals: "That a matching series is not yet a winning ticket.",
          ace: "Articulate what the newspaper says; connect the matching series to their rising hope; extend it to how partial 'good news' can run away with our imagination."
        },
        {
          id: "delay", name: "The Delayed Check", image: "images/delay.webp",
          clues: ["Ivan does not immediately look up their ticket's number.", "He deliberately puts off checking, to keep the hope alive longer.", "He wants to stretch out the sweet feeling of possibly having won."],
          identify: { q: "Why doesn't Ivan check the ticket's number right away?", choices: ["He delays on purpose to make the hope last longer", "He cannot find the ticket", "He already knows they lost", "He is not interested"] },
          purpose: { q: "What is the delay's role in the story?", choices: ["It opens the space for the long daydream that reveals the couple", "It ends the suspense at once", "It hides the newspaper", "It has no role"] },
          significance: { q: "What does choosing to delay reveal about hope?", choices: ["The dream of winning can feel better than the risk of knowing the truth", "That Ivan is lazy", "That the ticket is fake", "That he does not want money"] },
          reveals: "How people can prefer a hopeful maybe to a certain answer.",
          conceals: "The disappointment waiting the moment he looks.",
          ace: "Articulate why Ivan delays; connect the pause to the power of hope; extend it to a time you avoided checking something to keep hope alive."
        },
        {
          id: "roubles", name: "The Seventy-Five Thousand", image: "images/roubles.webp",
          clues: ["The top prize in the draw is seventy-five thousand roubles.", "The couple begin to imagine that money as already theirs.", "In their minds they start spending it, ruble by ruble."],
          identify: { q: "How large is the prize the couple imagine winning?", choices: ["Seventy-five thousand roubles", "One hundred roubles", "A million dollars", "A single ruble"] },
          purpose: { q: "What is the imagined fortune's role in the story?", choices: ["It becomes a screen onto which each of them projects a different life", "It is money they actually receive", "It is a debt they owe", "It has no role"] },
          significance: { q: "What does the way they 'spend' the money reveal?", choices: ["Their real wishes, frustrations, and differences come to the surface", "That they agree about everything", "That they do not care about money", "That they are already wealthy"] },
          reveals: "How an imagined fortune exposes who people really are.",
          conceals: "That not a single ruble of it will ever arrive.",
          ace: "Articulate the size of the prize; connect the imagined spending to their true selves; extend it to how people reveal themselves by how they'd use a windfall."
        },
        {
          id: "estate", name: "The Daydream of the Estate", image: "images/estate.webp",
          clues: ["Ivan imagines buying land — a country estate with a garden.", "He pictures lazy autumn days, travel abroad, a richer life.", "For a while the daydream is warm and full of pleasure."],
          identify: { q: "What does Ivan picture doing with the winnings?", choices: ["Buying a country estate and traveling in comfort", "Giving it all away", "Hiding it under the floor", "Burning the money"] },
          purpose: { q: "What is the estate daydream's role?", choices: ["It is the high point of pleasure before the mood turns", "It is a real place they visit", "It ends the story happily", "It has no role"] },
          significance: { q: "Why does Chekhov let the daydream feel so sweet first?", choices: ["The warmth makes the coming bitterness land harder", "To show the couple are content", "To prove they win", "To describe the countryside"] },
          reveals: "The peak of the fantasy — comfort, ease, and escape.",
          conceals: "How quickly this shared dream will split them apart.",
          ace: "Articulate Ivan's daydream; connect its sweetness to the turn that follows; extend it to how a shared fantasy can start out uniting people."
        },
        {
          id: "resentment", name: "The Souring", image: "images/resentment.webp",
          clues: ["The daydream shifts: Ivan resents how his wife would use the money.", "He imagines her relatives arriving to beg for a share.", "She, in turn, resents him; their own rooms and habits begin to disgust them."],
          identify: { q: "What happens to the couple's feelings as they dream?", choices: ["Their hope curdles into resentment and contempt for each other", "They grow closer and kinder", "They fall asleep", "They forget the ticket"] },
          purpose: { q: "What is the souring's role in the story?", choices: ["It is Chekhov's real subject — how greed poisons a marriage", "It is a brief joke", "It is a dream they both enjoy", "It has no role"] },
          significance: { q: "Why is it striking that they turn bitter before checking the number?", choices: ["The mere fantasy of money is enough to damage them", "They already know they lost", "They are joking the whole time", "The money is really theirs"] },
          reveals: "The story's dark heart: imagined wealth breeds real contempt.",
          conceals: "That there is no fortune to fight over in the first place.",
          ace: "Articulate how the couple's mood changes; connect the resentment to the imagined money; extend it to how the idea of a prize can turn allies into rivals."
        },
        {
          id: "number", name: "The Real Number", image: "images/number.webp",
          clues: ["At last Ivan checks their ticket's actual number against the paper.", "Their number is 26; the winning number is 46.", "They have won nothing — and their ordinary life now feels hateful to them."],
          identify: { q: "What does Ivan discover when he finally checks the number?", choices: ["Their number does not match — they have not won", "They have won the full prize", "The ticket is missing", "They won a smaller prize"] },
          purpose: { q: "What is this final reveal's role in the story?", choices: ["It ends the fantasy and leaves the couple worse off than before", "It makes them rich", "It reunites them happily", "It has no role"] },
          significance: { q: "Why are they unhappier after losing than before they hoped?", choices: ["The daydream made their real life look poor and hateful by comparison", "They spent all their money", "They were injured", "They never wanted to win"] },
          reveals: "The bleak irony: they lose a fortune they never had, and lose contentment too.",
          conceals: "Nothing now — the truth exposes what the fantasy stirred up.",
          ace: "Articulate what the real number reveals; connect the loss to their new discontent; extend it to how comparing our life to a fantasy can spoil what we have."
        }
      ]
    },

    ctob: {
      name: "Series 9,499",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many roubles is the top lottery prize the couple imagine winning? Enter the number (no comma).",
          evidence: ["It is the fortune they dream of spending all evening.", "The story names it as seventy-five thousand.", "Write it as a whole number of five digits."],
          hints: ["Seventy-five thousand.", "75 followed by three zeros.", "The number is 75000."],
          answer: "75000"
        },
        {
          type: "word",
          prompt: "Ivan delays checking the ticket's ______ so the hope will last longer. (one word)",
          evidence: ["He already sees that the series matches.", "This is the second thing he must check to know if they won.", "It is what you count with; the word begins with 'num…'."],
          hints: ["The series matched; this still has to.", "Num…", "The word is number."],
          answer: "number"
        },
        {
          type: "mc",
          prompt: "What happens to the couple's feelings as they daydream about the money?",
          options: [
            "Their hope sours into resentment and contempt for each other.",
            "They grow more loving and grateful.",
            "They lose all interest in the money.",
            "They fall asleep and forget it."
          ],
          hints: ["Notice how each daydream turns into a complaint about the other.", "Which option shows the bitter turn?"]
        },
        {
          type: "mc",
          prompt: "In the end, does their ticket win the prize?",
          options: [
            "No — the number does not match, and they win nothing.",
            "Yes — they win the full seventy-five thousand.",
            "Yes — they win a smaller prize.",
            "The story never says."
          ],
          hints: ["Their number is 26; the winning number is 46.", "Which option means they lost?"]
        },
        {
          type: "sequence",
          prompt: "Put the evening in order, earliest first.",
          items: [
            "Ivan reads that the winning series is 9,499 — their ticket's series.",
            "He delays checking the number and imagines the 75,000 roubles.",
            "Their daydreams curdle into resentment and contempt for each other.",
            "He checks the number at last: it does not match, and they have won nothing."
          ],
          hints: ["The matching series comes first and starts the hope.", "The bitterness grows while the number is still unchecked.", "Checking the real number is the final beat."]
        },
        {
          type: "word",
          prompt: "As they dream of the money, the couple's warmth turns to ______ — scorn and hatred for each other. (one word)",
          evidence: ["Ivan begins to despise his wife and her relatives.", "It is the opposite of respect and love.", "It means looking down on someone as worthless; the word begins with 'con…'."],
          hints: ["The opposite of respect.", "Con…", "The word is contempt."],
          answer: "contempt"
        }
      ]
    },

    arcade: {
      name: "Hope or Resentment?",
      instruction: "Chekhov lets a happy daydream slowly curdle. Sort each detail: does it belong to the couple's HOPEFUL DAYDREAM, or to the BITTER TURN that poisons it? Reasoning earns the points.",
      buckets: [
        { id: "hope", label: "The hopeful daydream", short: "Hope" },
        { id: "resentment", label: "The bitter turn", short: "Bitterness" }
      ],
      cards: [
        { text: "Imagining a country estate with a garden and river.", bucket: "hope", why: "A warm, shared vision of the good life to come." },
        { text: "Picturing travel abroad and lazy autumn days.", bucket: "hope", why: "Pure pleasant fantasy, before the mood shifts." },
        { text: "Delaying the number-check to make the sweetness last.", bucket: "hope", why: "Ivan protects the hopeful feeling on purpose." },
        { text: "Feeling, for a moment, rich and full of possibility.", bucket: "hope", why: "The high point of the couple's shared dream." },
        { text: "Resenting how his wife would spend or hoard the money.", bucket: "resentment", why: "The daydream turns into suspicion of her." },
        { text: "Imagining her relatives arriving to beg for a share.", bucket: "resentment", why: "Greed breeds imagined enemies and grudges." },
        { text: "Their own rooms suddenly looking hateful and poor.", bucket: "resentment", why: "The fantasy makes real life feel unbearable." },
        { text: "Ivan bitterly muttering that he could go and hang himself.", bucket: "resentment", why: "The despairing low point after the dream collapses." }
      ],
      followup: "The couple never win a single ruble, yet the money still damages them. What is Chekhov suggesting about the difference between having wealth and merely craving it?"
    },

    analysis: {
      mcq: [
        {
          q: "When Ivan sees that the winning series matches their ticket, he —",
          options: [
            "deliberately delays checking the number to prolong the hope.",
            "immediately confirms they have won.",
            "throws the ticket away.",
            "hides the newspaper from his wife."
          ],
          why: "He savors the hopeful feeling and puts off the moment of truth."
        },
        {
          q: "As the couple imagine the seventy-five thousand roubles, their feelings —",
          options: [
            "turn from joy to resentment and contempt for each other.",
            "grow warmer and more grateful.",
            "stay exactly the same.",
            "focus only on their children."
          ],
          why: "The shared dream slowly curdles into mutual bitterness."
        },
        {
          q: "Ivan begins to resent his wife because he imagines —",
          options: [
            "her controlling the money and her relatives coming to take a share.",
            "her giving the money to him.",
            "her leaving the money untouched.",
            "her buying gifts for him."
          ],
          why: "His daydream fills with suspicion about how she and her family would grab the winnings."
        },
        {
          q: "In the end, the ticket —",
          options: [
            "does not win; their number does not match.",
            "wins the full prize.",
            "wins a small consolation prize.",
            "is lost before they can check."
          ],
          why: "Their number is 26 while the winning number is 46 — they have won nothing."
        },
        {
          q: "The story mainly shows how —",
          options: [
            "merely craving wealth can poison contentment and love.",
            "hard work always pays off.",
            "luck favors the patient.",
            "money makes people generous."
          ],
          why: "Chekhov exposes how the fantasy of riches damages the couple before they even lose."
        }
      ],
      short: [
        "Choose one artifact from The Evening of the Ticket. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the couple's daydream turns from hope into resentment. What triggers the change?",
        "The couple never win any money, yet they end up unhappier than before. How does Chekhov use that irony to make his point?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Chekhov use an imagined fortune the couple never win to expose their real feelings about each other? Make a claim and support it with specific details from the daydream and its bitter turn.",
      aceReflection: "Articulate what the story suggests about greed and discontent in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Poison of \"What If\"",
      prompt: "In Chekhov's story, simply imagining wealth is enough to breed resentment and spoil an ordinary life. Choose another story, film, or real situation where dreaming about money, fame, or success changed how people treated each other. Explain the connection with evidence: what was imagined, how it changed them, and what it cost.",
      format: "A short evidence-based comparison connecting the story's view of greed and fantasy to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the couple's daydream turns sour in The Lottery Ticket. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Lottery Ticket. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Lottery Ticket because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Lottery Ticket: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of greed and fantasy to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Lottery Ticket for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Anton Chekhov's The Lottery Ticket as a study of realism, characterization through interior daydream, irony, and the theme that craving wealth can poison contentment. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1887) is public domain, as is the Constance Garnett translation used by most free editions. The text link points to a free online edition (American Literature) and the audio link is a LibriVox recording (an Anton Chekhov selected-stories collection) that includes the story — confirm the specific text and track before assigning.",
        "Content: a psychological story about greed and marriage. As a couple imagine winning, their affection turns to resentment and contempt; at the end the disappointed husband bitterly says he could go and hang himself — a moment of despair, not a literal plan. Mature theme; best handled with discussion. Suitable for middle and high school; preview and follow local policy.",
        "Details here were checked against the story (Ivan Dmitritch and his wife Masha; the lottery ticket in series 9,499, number 26; the newspaper announcing series 9,499 as a winner; Ivan delaying the number-check to prolong hope; the 75,000-rouble prize; the warm daydream of an estate and travel; the souring into resentment, imagined grasping relatives, and mutual contempt; the final check showing the winning number is 46, not 26; their deepened discontent). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–11 ELAR TEKS (19 TAC Ch. 110) strands on theme, characterization, irony, and author's craft, including the analysis of realism. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
