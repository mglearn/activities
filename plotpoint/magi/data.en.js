/* PlotPoint — The Gift of the Magi (O. Henry, 1905).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. Standards are
   good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "magi",
  storageKey: "plotpoint.magi.v1",

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
    "vocab.title": "Words for The Gift of the Magi",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Della and Jim's Flat",
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
    "ctob.title": "The Two Treasures",
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
    "arcade.title": "Wise or Foolish?",
    "arcade.default": "Sort each statement by the view it supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
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
    "extend.title": "The Real Gift",
    "extend.format": "Format",
    "extend.evidence": "The idea from the story I am building on",
    "extend.transfers": "What transfers to a modern situation",
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
    "print.item.relic": "Della and Jim's Flat evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "The-real-gift organizer",
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
      title: "The Gift of the Magi",
      author: "O. Henry",
      grades: "Grades 7–10",
      genre: "Short story · Classic",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1905)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1905, The Gift of the Magi is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A gentle, tender story about a poor young couple and sacrifice at Christmas. No mature content. Suitable for middle and early high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/7256",
      audio: "https://librivox.org/the-gift-of-the-magi-by-o-henry/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Gift of the Magi — a pocket watch and a hair comb resting on a small table beside a few coins at Christmas."
    },
    hook: "It is the day before Christmas, and Della has only $1.87 to buy a gift for the husband she adores. She and Jim are poor, but each owns one treasure: her long, beautiful hair and his gold watch. To give the perfect gift, Della makes a hard choice — and so, it turns out, does Jim. Their two gifts meet in an ending that has moved readers for over a century.",
    goals: [
      "Understand the plot of O. Henry's story of a poor young couple at Christmas.",
      "Analyze how O. Henry builds toward a twist ending using two parallel sacrifices.",
      "Explain the situational irony: each gift is made useless by the other's sacrifice.",
      "Interpret the title's allusion to the magi and the story's theme of selfless love."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a twist ending.",
        "Discuss: What is the most meaningful gift you have ever given or received? Why did it matter?"
      ],
      during: [
        "Use Della and Jim's Flat to slow down and read each treasure and each sacrifice closely.",
        "Track the clues O. Henry plants before the ending is revealed."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the story's parallel sacrifices.",
        "Complete the Extend task to connect the theme to a modern idea of gift-giving."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Della sacrifices and why. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Della's sacrifice to Jim's. Explain how putting the two side by side creates the story's irony and its meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea that love matters more than possessions to a modern situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "magi", def: "The wise men who, in the Christmas story, brought gifts to the baby Jesus.", example: "The three who gave gold, frankincense, and myrrh.", nonexample: "Ordinary shoppers buying on sale.", context: "The title compares Della and Jim to the magi." },
      { term: "sacrifice", def: "Giving up something valuable for the sake of someone or something else.", example: "Selling your most prized possession for a loved one.", nonexample: "Keeping everything for yourself.", context: "The story turns on two acts of sacrifice." },
      { term: "situational irony", def: "When what happens is the opposite of what is expected.", example: "Gifts that become useless the moment they are given.", nonexample: "A gift that is exactly what was needed.", context: "The twist ending is a classic case of situational irony." },
      { term: "poverty", def: "The state of being very poor.", example: "Having only $1.87 for a gift.", nonexample: "Having more money than one could spend.", context: "Della and Jim's poverty raises the stakes of every choice." },
      { term: "allusion", def: "A brief reference to another story, person, or idea.", example: "The title's nod to the biblical magi.", nonexample: "A statement with no outside reference.", context: "The title is an allusion to the wise men of the Christmas story." },
      { term: "coveted", def: "Wanted or valued very much.", example: "The combs Della had long admired in a shop window.", nonexample: "Something no one wants.", context: "Jim buys the combs Della had coveted." },
      { term: "selfless", def: "Caring more for others than for oneself.", example: "Giving up your treasure so someone else can be happy.", nonexample: "Thinking only of your own wishes.", context: "Both Della and Jim act in a selfless way." },
      { term: "sentimental", def: "Full of tender feeling and emotion.", example: "A gift that means far more than its price.", nonexample: "A cold, purely practical purchase.", context: "The story is famous for its sentimental power." },
      { term: "prized possession", def: "The thing a person values most.", example: "Della's hair; Jim's gold watch.", nonexample: "A random object no one cares about.", context: "Each gives up a prized possession for the other." }
    ],

    relic: {
      name: "Della and Jim's Flat",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "money", name: "The $1.87", image: "images/money.webp",
          clues: ["Della has been saving pennies for months.", "On Christmas Eve she counts it all: one dollar and eighty-seven cents.", "It is far too little for the gift she wants to give Jim."],
          identify: { q: "What does the $1.87 represent?", choices: ["All the money Della has saved for Jim's gift", "The price of Jim's watch", "Their monthly rent", "A gift from Jim"] },
          purpose: { q: "What is its role in the story?", choices: ["It sets up Della's problem and the sacrifice she will make", "It buys the perfect gift easily", "It is Jim's savings", "It has no importance"] },
          significance: { q: "What does the small sum reveal?", choices: ["The couple's poverty — and how much a good gift will cost Della", "That they are wealthy", "That gifts are cheap", "That money does not matter to the plot"] },
          reveals: "The couple's poverty and the size of the problem Della faces.",
          conceals: "How far Della will go to solve it.",
          ace: "Articulate what the $1.87 shows; connect the couple's poverty to the coming sacrifice; extend it to how limits can force hard, loving choices."
        },
        {
          id: "hair", name: "Della's Hair", image: "images/hair.webp",
          clues: ["Della has one possession she treasures above all.", "It is her long, beautiful brown hair, falling below her knees.", "It is her pride — and, it turns out, something she can sell."],
          identify: { q: "What is Della's greatest treasure?", choices: ["Her long, beautiful hair", "Her wedding ring", "A gold watch", "A set of combs"] },
          purpose: { q: "What is the hair's role in the story?", choices: ["It is the treasure Della gives up to buy Jim's gift", "It is a gift from Jim", "It is worthless", "It is never mentioned again"] },
          significance: { q: "What does selling her hair reveal about Della?", choices: ["She will sacrifice her own pride and beauty for Jim's happiness", "That she is vain", "That she dislikes her hair", "That hair is unimportant"] },
          reveals: "The depth of Della's love, measured by what she gives up.",
          conceals: "That Jim is about to make a matching sacrifice.",
          ace: "Articulate what Della's hair means to her; connect the treasure to her sacrifice; extend it to how the value of a gift can be measured by what it costs the giver."
        },
        {
          id: "watch", name: "Jim's Gold Watch", image: "images/watch.webp",
          clues: ["Jim also owns one treasured possession.", "It is a gold watch handed down through his family.", "He is proud of it — and, it turns out, willing to part with it."],
          identify: { q: "What is Jim's greatest treasure?", choices: ["His gold watch, passed down in his family", "Della's hair", "A new car", "A set of combs"] },
          purpose: { q: "What is the watch's role in the story?", choices: ["It is the treasure Jim gives up to buy Della's gift", "It tells the time only", "It is a gift from Della", "It is unimportant"] },
          significance: { q: "What does selling the watch reveal about Jim?", choices: ["He matches Della's sacrifice, giving up his own most prized thing", "That he does not like the watch", "That he needs the money for himself", "That the watch is fake"] },
          reveals: "That Jim's love is as deep and self-sacrificing as Della's.",
          conceals: "The exact gift he buys with the money — until the end.",
          ace: "Articulate what the watch means to Jim; connect his sacrifice to Della's; extend it to why parallel choices deepen a story's meaning."
        },
        {
          id: "sold-hair", name: "The Sold Hair", image: "images/sold-hair.webp",
          clues: ["Della makes her hard decision.", "She goes to a shop and sells her hair.", "She receives twenty dollars — enough for Jim's gift."],
          identify: { q: "What does Della do to get money?", choices: ["She sells her long hair for twenty dollars", "She sells the gold watch", "She borrows from a friend", "She returns a gift"] },
          purpose: { q: "What is this moment's role?", choices: ["It is Della's sacrifice, the turning point of the plot", "It is a small detail", "It ends the story", "It is a dream"] },
          significance: { q: "What does the sale reveal?", choices: ["Love that will give up even one's pride and beauty", "That Della was tired of her hair", "That money is all that matters", "That the hair was worthless"] },
          reveals: "The concrete act of sacrifice that love demands here.",
          conceals: "How the gift she buys will be affected by Jim's own choice.",
          ace: "Articulate what Della gives up; connect the sale to the theme of sacrifice; extend it to how far people go for those they love."
        },
        {
          id: "chain", name: "The Platinum Watch Chain", image: "images/chain.webp",
          clues: ["With her twenty dollars, Della searches the shops.", "She finds the perfect gift for Jim's prized watch.", "It is a simple, elegant platinum chain for it."],
          identify: { q: "What does Della buy for Jim?", choices: ["A platinum chain for his gold watch", "A new watch", "A book", "A set of combs"] },
          purpose: { q: "What is the chain's role in the story?", choices: ["It is Della's gift — perfect for the treasure Jim no longer has", "It is worthless", "It is Jim's gift to Della", "It is never given"] },
          significance: { q: "What makes the chain ironic?", choices: ["It is meant for the very watch Jim has sold to buy her gift", "It is too expensive", "It is the wrong color", "It is a duplicate"] },
          reveals: "The first half of the twist — a perfect gift for a treasure now gone.",
          conceals: "The matching irony waiting in Jim's gift.",
          ace: "Articulate what Della buys; connect the chain to Jim's missing watch; extend it to how irony can turn a perfect gift bittersweet."
        },
        {
          id: "combs", name: "The Tortoiseshell Combs", image: "images/combs.webp",
          clues: ["Jim comes home and gives Della his gift.", "It is a set of beautiful combs she had long admired in a shop window.", "They are meant for her long, beautiful hair."],
          identify: { q: "What does Jim give Della?", choices: ["A set of combs for her hair", "A gold watch", "A platinum chain", "A dress"] },
          purpose: { q: "What is the combs' role in the story?", choices: ["They are Jim's gift — perfect for the hair Della no longer has", "They are worthless", "They are Della's gift to Jim", "They are never opened"] },
          significance: { q: "What makes the combs ironic?", choices: ["They are for the very hair Della sold to buy Jim's gift", "They are too small", "They are broken", "They are a joke"] },
          reveals: "The second half of the twist, completing the parallel.",
          conceals: "Nothing — the double irony is now fully revealed.",
          ace: "Articulate what Jim gives; connect the combs to Della's missing hair; extend it to how two matching sacrifices create a story's power."
        },
        {
          id: "two-gifts", name: "The Two Gifts Together", image: "images/two-gifts.webp",
          clues: ["Both gifts turn out to be, for now, useless.", "Della has no watch for the chain; Jim has no hair for the combs.", "Yet each has proved a love beyond any possession."],
          identify: { q: "What do the two gifts, side by side, reveal?", choices: ["Both are useless now — but both prove a deep, selfless love", "That the couple wasted their money foolishly", "That gifts do not matter", "That the couple made no sacrifice"] },
          purpose: { q: "Why does O. Henry compare the couple to the magi?", choices: ["Because their sacrificial gifts make them the wisest givers of all", "Because they are rich", "Because they gave many gifts", "Because they are foolish"] },
          significance: { q: "What is the story's final message?", choices: ["Love and sacrifice matter more than the gifts themselves", "That planning gifts is important", "That poverty ruins Christmas", "That watches are valuable"] },
          reveals: "The heart of the story: the sacrifice, not the object, is the true gift.",
          conceals: "Nothing — this is O. Henry's point, stated through the magi allusion.",
          ace: "Articulate why both gifts are 'useless'; connect the sacrifices to the magi allusion; extend it to what makes a gift truly valuable."
        }
      ]
    },

    ctob: {
      name: "The Two Treasures",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "At the start, how many cents has Della saved for Jim's gift? (She has one dollar and eighty-seven cents.) Enter the number of cents.",
          evidence: ["She has saved pennies for months.", "One dollar is one hundred cents, plus eighty-seven more.", "Write the total number of cents as digits."],
          hints: ["One hundred plus eighty-seven.", "One dollar and eighty-seven cents.", "The total is 187 cents."],
          answer: "187"
        },
        {
          type: "word",
          prompt: "To buy Jim's gift, Della sells her most treasured possession — her long, beautiful ______. (one word)",
          evidence: ["It falls below her knees and is her pride.", "She sells it at a shop for twenty dollars.", "The word begins with 'ha…'."],
          hints: ["It grows on your head.", "Ha…", "The word is hair."],
          answer: "hair"
        },
        {
          type: "mc",
          prompt: "What does Jim sell to buy Della's gift?",
          options: [
            "His prized gold watch.",
            "His winter coat.",
            "Their furniture.",
            "His wedding ring."
          ],
          hints: ["It is the family treasure he is most proud of.", "Which option is the gold watch?"]
        },
        {
          type: "mc",
          prompt: "What does Della buy for Jim with her twenty dollars?",
          options: [
            "A platinum chain for his watch.",
            "A new coat.",
            "A set of combs.",
            "A book of poems."
          ],
          hints: ["It is meant for the treasure Jim is proudest of.", "Which option is the watch chain?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of the story in order, earliest first.",
          items: [
            "Della has almost no money for Jim's Christmas gift.",
            "She sells her hair to buy a chain for Jim's watch.",
            "Jim comes home and gives Della combs — he has sold his watch to buy them.",
            "Both gifts are now useless, but their love and sacrifice are clear."
          ],
          hints: ["It begins with Della's money problem.", "Della's sacrifice comes before Jim's gift is revealed.", "The double irony lands at the end."]
        },
        {
          type: "word",
          prompt: "The story's central theme is selfless love shown through ______. (one word)",
          evidence: ["Each gives up their greatest treasure for the other.", "The title calls them the wisest givers, like the magi.", "The word means giving something up for another, and begins with 'sac…'."],
          hints: ["Giving up what you treasure for someone else.", "Sac…", "The word is sacrifice."],
          answer: "sacrifice"
        }
      ]
    },

    arcade: {
      name: "Wise or Foolish?",
      instruction: "On the surface, Della and Jim's gifts seem foolish — each is now useless. But O. Henry calls the couple the wisest givers of all. Sort each statement: does it support the view that the gifts were FOOLISH (the practical outcome), or that the couple was TRULY WISE (O. Henry's meaning)? Reasoning earns the points.",
      buckets: [
        { id: "foolish", label: "Seems foolish (practical view)", short: "Foolish?" },
        { id: "wise", label: "Truly wise (O. Henry's view)", short: "Wise" }
      ],
      cards: [
        { text: "Della's new combs are useless — her hair is gone.", bucket: "foolish", why: "By the practical measure, the gift can't be used." },
        { text: "Jim's new watch chain has no watch to hold.", bucket: "foolish", why: "The chain is useless now that the watch is sold." },
        { text: "They spent everything and can't use either gift.", bucket: "foolish", why: "The practical outcome looks like a total loss." },
        { text: "Each destroyed their own treasure for a useless present.", bucket: "foolish", why: "Judged only by results, the sacrifices seem wasteful." },
        { text: "Each gave up their greatest treasure for the other.", bucket: "wise", why: "The willingness to sacrifice is what O. Henry praises." },
        { text: "The gifts prove their love is deeper than any possession.", bucket: "wise", why: "The real gift is the love the sacrifice reveals." },
        { text: "Like the magi, they gave the wisest, most giving gifts.", bucket: "wise", why: "O. Henry's title makes exactly this claim." },
        { text: "Love that sacrifices is worth more than the object given.", bucket: "wise", why: "This is the story's central, wiser truth." }
      ],
      followup: "O. Henry ends by calling Della and Jim the wisest of gift-givers. Do you agree that their 'foolish' gifts were actually wise? What does the story say a gift is really worth?"
    },

    analysis: {
      mcq: [
        {
          q: "Della and Jim are best described as —",
          options: [
            "a poor young married couple who love each other deeply.",
            "a wealthy family with many servants.",
            "two strangers who just met.",
            "an elderly couple in a mansion."
          ],
          why: "The story stresses their poverty and their deep love, which raises the stakes of their gifts."
        },
        {
          q: "To buy Jim a gift, Della —",
          options: [
            "sells her long, beautiful hair.",
            "sells Jim's watch.",
            "borrows money from a bank.",
            "returns an old present."
          ],
          why: "Della sacrifices her most prized possession, her hair, for twenty dollars."
        },
        {
          q: "The twist ending reveals that —",
          options: [
            "Jim sold his watch to buy combs for Della's hair, so both gifts are now useless.",
            "Jim was rich all along.",
            "Della kept her hair after all.",
            "the gifts were stolen."
          ],
          why: "Each sold a treasure to buy a gift for the other's treasure — the classic double irony."
        },
        {
          q: "The title compares Della and Jim to the magi because they —",
          options: [
            "gave the wisest, most sacrificial gifts, like the wise men.",
            "were kings from the East.",
            "gave many expensive presents.",
            "refused to give anything."
          ],
          why: "O. Henry's allusion says their loving sacrifice makes them the wisest of givers."
        },
        {
          q: "The story's main theme is that —",
          options: [
            "love and sacrifice matter more than material possessions.",
            "expensive gifts are always best.",
            "poverty makes love impossible.",
            "it is foolish to give gifts."
          ],
          why: "The whole story builds toward the idea that the sacrifice, not the object, is the true gift."
        }
      ],
      short: [
        "Choose one artifact from Della and Jim's Flat. Explain what it is and what it reveals about the story's meaning.",
        "Explain the situational irony of the ending, using both Della's and Jim's gifts.",
        "Why does O. Henry compare the couple to the magi? What does the allusion say about their sacrifice?"
      ],
      paragraph: "Write an evidence-based paragraph. Does O. Henry convince you that Della and Jim's 'useless' gifts make them wise? Make a claim and support it with specific details about their sacrifices and the story's ending.",
      aceReflection: "Articulate the story's theme in your own words. Connect Della's sacrifice and Jim's to show the irony. Extend it to a modern idea about gifts or love, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Real Gift",
      prompt: "O. Henry argues that the value of a gift lies in the love and sacrifice behind it, not in its price. Choose a modern situation — a holiday, a family, an ad, or your own experience — and test that idea. Explain the connection with evidence: where does the story's message hold true today, and where does modern gift-giving pull the other way?",
      format: "A short evidence-based comparison connecting the story's message about gifts and sacrifice to a modern situation, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Della sacrifices in The Gift of the Magi and why. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Gift of the Magi. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think Della's sacrifice connects to Jim's in The Gift of the Magi because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Gift of the Magi: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's message about gifts to a modern situation: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Gift of the Magi for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of O. Henry's The Gift of the Magi as a study of situational irony, parallel structure, allusion, and theme: two poor newlyweds who each sacrifice their greatest treasure to give the other a gift. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1905) is public domain. The linked Project Gutenberg edition and LibriVox recording are public domain — confirm before assigning.",
        "Content: a gentle, tender Christmas story about poverty and sacrifice. No mature content. Suitable for middle and early high school; preview and follow local policy.",
        "Details here were checked against the story (Della and Jim, a poor young married couple; Della's $1.87 in savings; her long hair and his heirloom gold watch as their two treasures; Della selling her hair for twenty dollars to buy a platinum watch chain; Jim selling the watch to buy combs Della had admired; the double irony; the closing allusion to the magi). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 7–10 ELAR TEKS (19 TAC Ch. 110) strands on theme, plot structure, author's purpose, and literary devices — especially irony and allusion. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.4", "RL.8.1", "RL.8.2", "W.7.1", "SL.7.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
