/* PlotPoint — A Pair of Silk Stockings (Kate Chopin, 1897).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "silkstockings",
  storageKey: "plotpoint.silkstockings.v1",

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
    "vocab.title": "Words for A Pair of Silk Stockings",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Mrs. Sommers's Afternoon",
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
    "ctob.title": "Fifteen Dollars",
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
    "arcade.title": "Duty or Desire?",
    "arcade.default": "Sort each detail by whether it serves her family's needs or her own desire.",
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
    "extend.title": "When Desire Meets Duty",
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
    "print.item.relic": "Afternoon evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Duty-vs-desire organizer",
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
      title: "A Pair of Silk Stockings",
      author: "Kate Chopin",
      grades: "Grades 8–11",
      genre: "Realism · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1897)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1897, A Pair of Silk Stockings is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A gentle, realist story about poverty, desire, and a mother's brief afternoon of spending on herself. Mature in theme, not in content; includes a quiet glass of wine with lunch. Suitable for middle and high school; preview and align with local policy.",
      gutenberg: "https://americanliterature.com/author/kate-chopin/short-story/a-pair-of-silk-stockings/",
      audio: "https://librivox.org/short-story-collection-86-by-various/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking A Pair of Silk Stockings — a worn woman's gloved hand resting on a pair of soft black silk stockings on a shop counter, with a streetcar and a warmly lit restaurant window suggested behind her."
    },
    hook: "Mrs. Sommers, a tired, thrifty mother, unexpectedly comes into fifteen dollars. She spends a happy evening planning exactly how to stretch it for her children — better shoes, new cloth, little hats. But the next day, worn out and waiting at a shop counter, her hand falls on a pair of soft silk stockings. In one small, dangerous moment, she decides — just this once — to spend it all on herself.",
    goals: [
      "Follow Mrs. Sommers's day, from her careful plan to her string of small indulgences.",
      "Analyze the turning point — the silk stockings — and the quiet chain reaction it sets off.",
      "Interpret the tension between self-denial for family and desire for oneself.",
      "Read the bittersweet ending and what it reveals about her real life and longing."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially impulse, indulge, and poignant.",
        "Discuss: Is it selfish to spend on yourself when others need it? When is a small luxury worth it?"
      ],
      during: [
        "Use Mrs. Sommers's Afternoon to track each choice, from plan to purchase.",
        "Notice how Chopin lingers on touch, taste, and comfort — the pleasure of each moment."
      ],
      after: [
        "Run the breakout, arcade, and analysis to sort duty from desire.",
        "Complete the Extend task on the pull between wanting and giving."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the silk stockings are the turning point of the story. What changes in Mrs. Sommers after she puts them on? Include one detail that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Mrs. Sommers's careful plan for her children to how she actually spends the day. Explain what the gap between them reveals about a life of constant self-denial." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's tension between desire and duty to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "impulse", def: "A sudden urge to do something without planning it.", example: "Mrs. Sommers buying the stockings on the spot.", nonexample: "Following a careful budget you wrote yesterday.", context: "On impulse, she keeps the silk stockings for herself." },
      { term: "indulge", def: "To let yourself enjoy something pleasant, especially a treat.", example: "Ordering oysters and wine at a fine restaurant.", nonexample: "Denying yourself every comfort.", context: "For one afternoon, Mrs. Sommers indulges herself." },
      { term: "luxury", def: "Something pleasant and costly that you do not truly need.", example: "Soft silk stockings and kid gloves.", nonexample: "Plain shoes bought only because the old ones wore out.", context: "Small luxuries fill her whole afternoon." },
      { term: "self-denial", def: "Going without things you want, often for others' sake.", example: "Years of Mrs. Sommers spending only on her children.", nonexample: "Treating yourself whenever you please.", context: "Her day breaks a long habit of self-denial." },
      { term: "reverie", def: "A state of being pleasantly lost in your own thoughts.", example: "Mrs. Sommers drifting in daydreams at the counter.", nonexample: "Focusing sharply on a checklist.", context: "She sinks into a reverie instead of shopping wisely." },
      { term: "poignant", def: "Deeply and sadly touching to the heart.", example: "Her wish, on the way home, that the ride would never end.", nonexample: "A flat, forgettable moment.", context: "The story closes on a poignant, aching longing." },
      { term: "matinee", def: "An afternoon performance of a play or show.", example: "The play Mrs. Sommers slips into after lunch.", nonexample: "A late-night concert.", context: "She loses herself completely in the matinee." },
      { term: "shabby", def: "Worn, faded, and in poor condition.", example: "Mrs. Sommers's old, mended clothes.", nonexample: "A crisp, brand-new outfit.", context: "The silk feels wonderful against her shabby everyday life." }
    ],

    relic: {
      name: "Mrs. Sommers's Afternoon",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "money", name: "The Fifteen Dollars", image: "images/money.webp",
          clues: ["Mrs. Sommers unexpectedly comes into fifteen dollars.", "To her, it feels like a large and important sum.", "She spends an evening happily planning how to make it stretch."],
          identify: { q: "How much unexpected money does Mrs. Sommers receive?", choices: ["Fifteen dollars", "One hundred dollars", "Fifty cents", "A thousand dollars"] },
          purpose: { q: "What is the money's role in the story?", choices: ["It is the small windfall that sets the whole day in motion", "It pays a debt she owes", "It is stolen from her", "It has no importance"] },
          significance: { q: "What does her excitement over fifteen dollars reveal?", choices: ["How poor she is, and how rare any extra money is for her", "That she is wealthy", "That she is careless with money", "That she dislikes shopping"] },
          reveals: "The tight, thrifty life that makes a small sum feel enormous.",
          conceals: "That the money will not go where she planned at all.",
          ace: "Articulate what the money is; connect her excitement to her poverty; extend it to how a small amount can mean very different things to different people."
        },
        {
          id: "plan", name: "The Plan for the Children", image: "images/plan.webp",
          clues: ["That evening she carefully plans to spend it all on her children.", "She lists better shoes for Janie, cloth for shirt-waists, a gown for Mag, little caps and hats.", "The plan makes her feel proud and clever."],
          identify: { q: "Whom does Mrs. Sommers first plan to spend the money on?", choices: ["Her children", "Herself", "Her husband", "A charity"] },
          purpose: { q: "What is the plan's role in the story?", choices: ["It sets up the self-denial her afternoon will overturn", "It is the last we hear of the money", "It is a plan to save the money", "It has no role"] },
          significance: { q: "What does the detailed plan reveal about her?", choices: ["She is a devoted mother used to putting her children first", "She is selfish", "She has no idea what her family needs", "She wants to waste the money"] },
          reveals: "Her habit of thinking of everyone but herself.",
          conceals: "How easily one small temptation will sweep the plan aside.",
          ace: "Articulate the plan; connect it to her role as a mother; extend it to how our careful plans can collide with a sudden want."
        },
        {
          id: "stockings", name: "The Silk Stockings", image: "images/stockings.webp",
          clues: ["Waiting tiredly at a counter, her hand rests on a pile of silk stockings.", "The smooth, soft feel of them is almost overwhelming.", "Instead of the plan, she buys a pair for herself — the turning point of the story."],
          identify: { q: "What does Mrs. Sommers buy that breaks her plan?", choices: ["A pair of silk stockings for herself", "Shoes for Janie", "Cloth for the children", "A gown for Mag"] },
          purpose: { q: "What is the stockings' role in the story?", choices: ["They are the impulse that turns the whole day toward herself", "They are a gift for a child", "They are returned at once", "They have no role"] },
          significance: { q: "Why are the stockings such a powerful turning point?", choices: ["A single small pleasure awakens a hunger she has long denied", "They are very expensive", "They are the wrong size", "They ruin her plan by accident"] },
          reveals: "How a moment of pure sensation can override years of duty.",
          conceals: "How far this one small indulgence will lead her.",
          ace: "Articulate what she buys; connect the soft silk to her awakened desire; extend it to how one small yes can open the door to many more."
        },
        {
          id: "boots", name: "The Fitted Boots", image: "images/boots.webp",
          clues: ["Wearing the new stockings, she goes on to the shoe department.", "She buys well-fitting boots and does not mind spending a dollar or two more.", "She also picks up kid gloves and two costly magazines."],
          identify: { q: "What does Mrs. Sommers buy after the stockings?", choices: ["Fitted boots, gloves, and magazines for herself", "Nothing else", "Only food for her children", "New furniture"] },
          purpose: { q: "What is this shopping spree's role?", choices: ["It shows the indulgence spreading, purchase by purchase", "It uses up the last of the money on the children", "It is a mistake she regrets at once", "It has no role"] },
          significance: { q: "What does her willingness to spend 'a dollar or two more' reveal?", choices: ["Her caution is melting into pleasure and confidence", "She has become rich", "She no longer cares about quality", "She is only buying necessities"] },
          reveals: "The indulgence growing bolder with each new purchase.",
          conceals: "That every dollar spent is one taken from the children's plan.",
          ace: "Articulate what else she buys; connect the growing spree to her fading caution; extend it to how one treat can make the next feel easy."
        },
        {
          id: "lunch", name: "The Restaurant Lunch", image: "images/lunch.webp",
          clues: ["Hungry and enjoying herself, she walks into a nice restaurant.", "She orders oysters, a chop with cress, a sweet dessert, and a glass of wine.", "She lingers over the good food, calm and content."],
          identify: { q: "What does Mrs. Sommers do at the restaurant?", choices: ["Treats herself to a fine, leisurely lunch", "Buys food only for her children", "Washes dishes to earn money", "Skips eating to save money"] },
          purpose: { q: "What is the lunch's role in the story?", choices: ["It deepens her afternoon of comfort and self-care", "It makes her sick", "It is where she loses the money", "It has no role"] },
          significance: { q: "What does the quiet, pleasant meal reveal?", choices: ["How rare rest and comfort are in her ordinary life", "That she is a wealthy regular there", "That she dislikes the food", "That she is in a hurry"] },
          reveals: "A woman savoring an ease she almost never gets.",
          conceals: "The hard, hungry days waiting for her at home.",
          ace: "Articulate what the lunch is like; connect the comfort to her usual life; extend it to why small comforts can feel enormous when they are rare."
        },
        {
          id: "matinee", name: "The Matinee", image: "images/matinee.webp",
          clues: ["After lunch, she buys a ticket to an afternoon play.", "She sits among well-dressed people and loses herself completely in the show.", "For a few hours she feels part of a richer, easier world."],
          identify: { q: "Where does Mrs. Sommers go after lunch?", choices: ["To a matinee — an afternoon play", "Straight home", "To her children's school", "To work"] },
          purpose: { q: "What is the matinee's role in the story?", choices: ["It is the peak of her escape into another kind of life", "It is where she meets her family", "It bores her", "It has no role"] },
          significance: { q: "What does losing herself in the play reveal?", choices: ["How badly she has needed to escape her real life", "That she prefers plays to her children", "That she is wealthy", "That she is unhappy at the theatre"] },
          reveals: "The height of her borrowed afternoon of luxury.",
          conceals: "That the play, like the day, must end.",
          ace: "Articulate where she goes; connect the escape to her hard life; extend it to how stories and shows let people step briefly into other lives."
        },
        {
          id: "cablecar", name: "The Cable Car Home", image: "images/cablecar.webp",
          clues: ["When it is all over, she waits for the cable car to take her home.", "A man across from her notices her small, pale face.", "She feels a deep, aching wish that the car would go on and on and never stop."],
          identify: { q: "How does the story end?", choices: ["On the cable car, wishing the ride would never end", "With Mrs. Sommers buying more gifts", "With her children thanking her", "With her returning everything"] },
          purpose: { q: "What is the cable-car ending's role?", choices: ["It reveals her true feelings about going back to her real life", "It starts a new shopping trip", "It shows her joy at seeing her family", "It has no role"] },
          significance: { q: "What does her wish that the ride never end reveal?", choices: ["How much she dreads returning to her hard, ordinary life", "That she loves riding streetcars", "That she is lost", "That she wants to spend more money"] },
          reveals: "The bittersweet truth beneath the whole happy afternoon.",
          conceals: "Nothing now — it names the sadness the pleasures were hiding.",
          ace: "Articulate the final wish; connect it to everything she bought; extend it to how a bright escape can make an ordinary life feel harder to return to."
        }
      ]
    },

    ctob: {
      name: "Fifteen Dollars",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many dollars does Mrs. Sommers unexpectedly come into? Enter the number.",
          evidence: ["It feels like a large sum to her.", "She plans an evening around exactly this many dollars.", "It is the number named in the story — a ten and a five."],
          hints: ["More than ten, fewer than twenty.", "Ten plus five.", "The number is 15."],
          answer: "15"
        },
        {
          type: "word",
          prompt: "The first thing she buys for herself, breaking her plan, is a pair of silk ______. (one word)",
          evidence: ["Her hand rests on them at a shop counter.", "They are smooth and soft against the skin.", "The word is in the story's title, and begins with 'stock…'."],
          hints: ["It is in the title of the story.", "Stock…", "The word is stockings."],
          answer: "stockings"
        },
        {
          type: "mc",
          prompt: "Whom did Mrs. Sommers originally plan to spend the money on?",
          options: [
            "Her children.",
            "Herself.",
            "Her landlord.",
            "A neighbor."
          ],
          hints: ["Think of the shoes, cloth, and little hats she listed.", "Which option is her family?"]
        },
        {
          type: "mc",
          prompt: "How does the story end?",
          options: [
            "On a cable car, wishing the ride would go on forever.",
            "With her children opening new gifts.",
            "With Mrs. Sommers returning everything she bought.",
            "With her getting a better-paying job."
          ],
          hints: ["She is heading home after her afternoon out.", "Which option shows her dread of going back?"]
        },
        {
          type: "sequence",
          prompt: "Put Mrs. Sommers's day in order, earliest first.",
          items: [
            "She comes into fifteen dollars and plans to spend it on her children.",
            "On impulse, she buys silk stockings for herself.",
            "She treats herself to boots, gloves, and a fine lunch.",
            "She rides the cable car home, wishing it would never stop."
          ],
          hints: ["The plan comes before any purchase.", "The stockings are the first thing she buys for herself.", "The cable car is the last scene."]
        },
        {
          type: "word",
          prompt: "The heart of the story is that, just this once, Mrs. Sommers spends the money on ______ instead of her children. (one word)",
          evidence: ["Every purchase of the afternoon is for her own pleasure.", "It is the opposite of spending it on others.", "The word is a pronoun she would use for her own person — 'her…'."],
          hints: ["The person she treats all afternoon.", "Her…", "The word is herself."],
          answer: "herself"
        }
      ]
    },

    arcade: {
      name: "Duty or Desire?",
      instruction: "Mrs. Sommers is pulled between her family's needs and her own wants. Sort each detail: does it belong to her sense of DUTY to her family, or her DESIRE for herself? Reasoning earns the points.",
      buckets: [
        { id: "duty", label: "Duty to her family", short: "Duty" },
        { id: "desire", label: "Desire for herself", short: "Desire" }
      ],
      cards: [
        { text: "Add a dollar or two to the price of Janie's shoes.", bucket: "duty", why: "Part of her careful plan to clothe the children better." },
        { text: "Buy cloth to make the children's shirt-waists.", bucket: "duty", why: "A practical purchase for the family, not herself." },
        { text: "Get a new gown for Mag and hats for the little ones.", bucket: "duty", why: "More of the plan built entirely around her children." },
        { text: "Stretch fifteen dollars as far as it will go for the family.", bucket: "duty", why: "Her thrifty, self-denying instinct as a mother." },
        { text: "Slip on a pair of soft silk stockings.", bucket: "desire", why: "The first purely selfish pleasure of the day." },
        { text: "Order oysters and a glass of wine at a nice restaurant.", bucket: "desire", why: "A luxury just for her own enjoyment." },
        { text: "Sit through a matinee, lost in the play.", bucket: "desire", why: "An afternoon of escape she chooses for herself." },
        { text: "Wish the cable car would carry her on forever.", bucket: "desire", why: "Her longing to stay in this life, not return to duty." }
      ],
      followup: "Chopin never says whether Mrs. Sommers is right or wrong to spend the money on herself. What do you think the story wants us to feel about her choice — and why?"
    },

    analysis: {
      mcq: [
        {
          q: "When Mrs. Sommers first gets the fifteen dollars, she plans to —",
          options: [
            "spend all of it wisely on her children.",
            "buy silk stockings for herself.",
            "save it for an emergency.",
            "give it away."
          ],
          why: "Her first instinct is a careful, selfless plan for her family."
        },
        {
          q: "The turning point of the story is when Mrs. Sommers —",
          options: [
            "impulsively buys silk stockings for herself.",
            "loses the money.",
            "returns home early.",
            "argues with a clerk."
          ],
          why: "The soft stockings awaken a desire that redirects the whole day."
        },
        {
          q: "As the afternoon goes on, Mrs. Sommers —",
          options: [
            "keeps indulging herself with boots, gloves, a fine lunch, and a play.",
            "feels guilty and stops spending.",
            "buys everything on her children's list.",
            "goes straight home."
          ],
          why: "Each new pleasure leads to the next, all for herself."
        },
        {
          q: "The ending on the cable car reveals that Mrs. Sommers —",
          options: [
            "dreads returning to her hard, ordinary life.",
            "is eager to see her children.",
            "regrets spending the money.",
            "plans to shop again tomorrow."
          ],
          why: "Her wish that the ride never end exposes her longing to escape."
        },
        {
          q: "The story is mainly about —",
          options: [
            "a poor woman's brief, bittersweet escape into a life she cannot keep.",
            "the dangers of shopping.",
            "a happy family celebration.",
            "a crime and its punishment."
          ],
          why: "Chopin explores desire, self-denial, and the ache of an ordinary life."
        }
      ],
      short: [
        "Choose one artifact from Mrs. Sommers's Afternoon. Explain what it is and what it reveals about the story's meaning.",
        "Explain why the silk stockings work as the story's turning point. What do they awaken in Mrs. Sommers?",
        "The story never says whether Mrs. Sommers is right or wrong to spend the money on herself. What do you think, and what evidence supports your view?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Chopin use Mrs. Sommers's afternoon of small luxuries to explore the tension between desire and duty? Make a claim and support it with specific details from her plan, her purchases, and the ending.",
      aceReflection: "Articulate what the story suggests about desire and self-denial in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "When Desire Meets Duty",
      prompt: "Mrs. Sommers spends one afternoon choosing her own desire over her family's needs — and the ending is bittersweet, not simple. Choose another story, film, or real situation where someone is torn between what they want and what they owe others. Explain the connection with evidence: what was the desire, what was the duty, and what did the choice cost?",
      format: "A short evidence-based comparison connecting the story's desire-vs-duty tension to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the silk stockings are the turning point in A Pair of Silk Stockings. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in A Pair of Silk Stockings. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in A Pair of Silk Stockings because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about A Pair of Silk Stockings: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's desire-vs-duty tension to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of A Pair of Silk Stockings for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Kate Chopin's A Pair of Silk Stockings as a study of realism, characterization, and the theme of desire versus self-denial. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1897) is public domain. The text link points to a free online edition (American Literature) and the audio link is a LibriVox Short Story Collection (Vol. 086) that includes the story — confirm the specific text and track before assigning.",
        "Content: a gentle realist story about poverty and self-indulgence. Mrs. Sommers has a quiet glass of wine with lunch. Mature in theme but not in content. Suitable for middle and high school; preview and follow local policy.",
        "Details here were checked against the story (the tired mother Mrs. Sommers; her unexpected fifteen dollars; her evening plan to spend it on her children — shoes for Janie, cloth for shirt-waists, a gown for Mag, caps and hats; the silk stockings she buys for herself at the counter; the fitted boots, kid gloves, and two magazines; the leisurely restaurant lunch with oysters and wine; the afternoon matinee; the cable-car ride home and her wish that it would never stop). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–11 ELAR TEKS (19 TAC Ch. 110) strands on theme, characterization, author's craft, and the analysis of realism. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.2", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
