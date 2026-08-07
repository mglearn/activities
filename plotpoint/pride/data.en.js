/* PlotPoint — Pride and Prejudice (Jane Austen).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__ (added in a later pass;
   the engine falls back per-field to English until they land).

   Editorial rules: no invented quotations; details limited to widely established
   facts from the 1813 novel; standards codes are only those given by the build
   plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "pride",
  storageKey: "plotpoint.pride.v1",

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
    "enter.readListenNote": "This book is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Pride and Prejudice",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Longbourn Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this document, place, or person?",
    "relic.q.purpose": "Explain its likely purpose",
    "relic.q.significance": "Its literary significance",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Case of the First Impression",
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
    "arcade.title": "First Impressions: Accurate or Misleading?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Judgments to weigh",
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
    "extend.title": "The Letter That Changes a Mind",
    "extend.format": "Format",
    "extend.evidence": "The technique from the novel I am building on",
    "extend.transfers": "What transfers to my modern account",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My revised-judgment account",
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
    "print.item.relic": "Relic Room evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Revised-judgment organizer",
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
      title: "Pride and Prejudice",
      author: "Jane Austen",
      grades: "Grades 9–12",
      genre: "Novel of manners · Social satire · Romance",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1813)",
      textAccess: "This is a public-domain novel; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1813 and long in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A Regency novel of courtship and class. Mild but present themes of reputation, an elopement, and social pressure on young women to marry. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1342",
      audio: "https://librivox.org/pride-and-prejudice-by-jane-austen/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Pride and Prejudice — a Regency country estate, a garden path, and a sealed letter."
    },
    hook: "A single sharp remark at a country dance sets two clever people against each other. He decides her family is beneath him; she decides he is proud and unfeeling. Pride and Prejudice asks how far a first impression can mislead — and how much honesty it takes to admit you were wrong.",
    goals: [
      "Analyze how Austen uses irony and free indirect discourse to guide our sympathy and judgment, mostly through Elizabeth Bennet's eyes.",
      "Trace the twin errors named in the title — pride and prejudice — in both Darcy and Elizabeth, and how each character grows.",
      "Evaluate how marriage, money, and the entail on Longbourn shape the choices of women with little economic power.",
      "Connect the novel's lesson about first impressions and revised judgment to a new situation, and weigh what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a 'novel of manners' told with irony, mostly from Elizabeth's point of view.",
        "Discuss: How much should you trust a first impression? What would it take to make you change your mind about someone?"
      ],
      during: [
        "Use the Relic Room to examine one document, place, or person at a time.",
        "Track each first impression as it forms, and notice which ones the story later confirms or overturns."
      ],
      after: [
        "Run the breakout, arcade, and analysis to build an evidence-based reading of how Elizabeth's judgment matures.",
        "Complete the Extend task to write your own 'letter that changes a mind.'"
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how the title's two flaws — pride and prejudice — appear in both Darcy and Elizabeth. Include one detail from the novel that shows each character growing." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the novel's themes (for example, prejudice and self-knowledge, or marriage and money). Explain how they reinforce each other in Elizabeth's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the novel's lesson about revising a first impression to a modern situation. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "entail", def: "A legal restriction that passes property to a particular heir (here, a male relative), so others cannot inherit it.", example: "An estate that must go to a distant male cousin instead of the owner's daughters.", nonexample: "Property freely left to whoever the owner chooses.", context: "The entail on Longbourn means the Bennet daughters cannot inherit their home." },
      { term: "novel of manners", def: "A novel that closely depicts the customs, values, and social rules of a particular class.", example: "A story built around visits, balls, letters, and marriage etiquette.", nonexample: "An adventure tale on the high seas with no social rules.", context: "Pride and Prejudice is a classic novel of manners set among the Regency gentry." },
      { term: "free indirect discourse", def: "A narrative technique that blends the narrator's third-person voice with a character's own thoughts and wording.", example: "Narration that quietly takes on Elizabeth's opinions without quotation marks.", nonexample: "A plain report that never enters any character's mind.", context: "Austen's free indirect discourse lets us share Elizabeth's judgments — and her errors." },
      { term: "irony", def: "A gap between what is said or expected and what is really meant or true.", example: "A narrator praising a foolish character so the reader sees the folly.", nonexample: "A statement that means exactly and only what it says.", context: "Austen's irony exposes vanity and pride while seeming perfectly polite." },
      { term: "prejudice", def: "A judgment formed before the evidence, and held on to against new facts.", example: "Deciding someone's whole character from a single rude remark.", nonexample: "Changing your view when the facts change.", context: "Elizabeth's prejudice against Darcy forms at the first ball and resists correction." },
      { term: "amiable", def: "Friendly, good-natured, and pleasant to be around.", example: "A cheerful newcomer everyone quickly likes.", nonexample: "A cold, sneering guest who insults the room.", context: "Bingley is amiable and open, an easy contrast with the reserved Darcy." },
      { term: "civility", def: "Formal politeness and courtesy in social behavior.", example: "Greeting a rival with correct, cool good manners.", nonexample: "Shouting insults across a ballroom.", context: "Characters wound and defend one another under a surface of perfect civility." },
      { term: "reserve", def: "A habit of holding back one's feelings or opinions.", example: "A calm person whose deep feelings rarely show.", nonexample: "Someone who announces every emotion loudly.", context: "Jane's reserve hides her love for Bingley — and misleads Darcy." },
      { term: "accomplished", def: "Skilled in the refined arts expected of a genteel woman — music, drawing, languages, and manners.", example: "A young woman praised for playing, singing, and speaking French.", nonexample: "A person judged only by physical strength.", context: "The characters debate what truly makes a woman 'accomplished.'" },
      { term: "condescension", def: "In Austen's day, gracious attention from a social superior — a word she uses with heavy irony.", example: "A great lady expecting thanks for 'lowering' herself to give advice.", nonexample: "Genuine, equal friendship with no talk of rank.", context: "Mr. Collins praises Lady Catherine's 'condescension' without hearing how absurd it sounds." },
      { term: "prudence", def: "Careful, practical judgment about one's own interests, especially money and security.", example: "Choosing a safe marriage for financial security.", nonexample: "Acting on impulse with no thought for the future.", context: "Charlotte's prudence leads her to accept Mr. Collins; Lydia's lack of it nearly ruins her family." }
    ],

    relic: {
      name: "The Longbourn Archive",
      intro: "Seven instructional reconstructions of the places, documents, and people through which Pride and Prejudice reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "netherfield", name: "Netherfield Park and the Meryton Assembly", image: "images/netherfield.webp",
          clues: ["A wealthy young gentleman, Mr. Bingley, rents this large country house near the Bennets.", "At a public ball nearby, his proud friend Mr. Darcy refuses to dance with Elizabeth and calls her merely 'tolerable.'", "First impressions of both men form here — and take the whole novel to correct."],
          identify: { q: "What is this place?", choices: ["Netherfield Park, the estate Mr. Bingley rents near the Bennets", "Pemberley, Mr. Darcy's estate in Derbyshire", "Rosings Park, Lady Catherine's estate", "The parsonage at Hunsford"] },
          purpose: { q: "What happens here early in the novel?", choices: ["Bingley and Darcy arrive, and first impressions form at a country ball", "Elizabeth and Darcy marry", "Lydia elopes with Wickham", "Mr. Collins delivers a sermon"] },
          significance: { q: "What is its literary significance?", choices: ["It stages the snap judgments — Elizabeth's dislike and Darcy's disdain — that the plot must overturn", "It proves Darcy was friendly from the start", "It shows the entail does not matter", "It ends the novel"] },
          reveals: "How quickly reputations and judgments form in this society — Darcy's public slight makes Elizabeth ready to think the worst of him.",
          conceals: "It hides Darcy's real character, which his cold public manner disguises.",
          ace: "Articulate the first impressions formed at Netherfield; connect them to the title's two flaws; extend it to how a first impression can harden into prejudice."
        },
        {
          id: "entail", name: "The Entail on Longbourn", image: "images/entail.webp",
          clues: ["A legal arrangement means the Bennet estate cannot pass to any of the five daughters.", "On Mr. Bennet's death it will go to a distant male cousin, Mr. Collins.", "This is why marrying well is treated as urgent, not merely romantic."],
          identify: { q: "What is this document?", choices: ["The entail directing Longbourn to a male heir, Mr. Collins", "Elizabeth and Darcy's marriage settlement", "Wickham's gambling debts", "Bingley's lease on Netherfield"] },
          purpose: { q: "What does it explain?", choices: ["Why the Bennet daughters face financial insecurity without marriage", "How the Bennets became very wealthy", "How the daughters will inherit the estate", "The sale of a piece of land"] },
          significance: { q: "What is its literary significance?", choices: ["It sets the economic pressure that drives much of the marriage plot", "It proves marriage is only ever about love", "It shows women could inherit freely", "It ends the story happily"] },
          reveals: "The real economic stakes for women who cannot inherit — marriage is survival as much as sentiment.",
          conceals: "It hides how unfair the arrangement is to the daughters, a criticism Austen makes through irony rather than open protest.",
          ace: "Articulate what the entail forces on the Bennet daughters; connect it to the theme of marriage and money; extend it to how limited choices shape what looks like a 'free' decision."
        },
        {
          id: "collins", name: "Mr. Collins's Proposal", image: "images/collins.webp",
          clues: ["A pompous clergyman, patronized by Lady Catherine de Bourgh, offers to marry Elizabeth.", "He treats the match as a favor and cannot believe her refusal is sincere.", "Rejected, he quickly proposes to Elizabeth's practical friend Charlotte Lucas, who accepts."],
          identify: { q: "Who is this and what does he do?", choices: ["Mr. Collins, the clergyman who proposes to Elizabeth and is refused", "Mr. Darcy, proposing for the first time", "Mr. Wickham, asking for Lydia", "Mr. Bingley, proposing to Jane"] },
          purpose: { q: "What does this episode set up?", choices: ["A contrast between a marriage of convenience and Elizabeth's insistence on respect and affection", "Proof that Elizabeth will marry anyone", "Proof that Collins is humble", "The end of the entail"] },
          significance: { q: "What is its literary significance?", choices: ["Charlotte's acceptance shows the pragmatic, economic view of marriage that Elizabeth rejects", "It proves love always wins easily", "It shows Elizabeth has no standards", "It has no bearing on the themes"] },
          reveals: "Two opposite answers to the same pressure — Elizabeth refuses security without esteem; Charlotte takes security because her options are few.",
          conceals: "It hides how limited Charlotte's real choices are, which makes her decision more sympathetic than it first appears.",
          ace: "Articulate why Elizabeth refuses Mr. Collins; connect Charlotte's choice to the economics of marriage; extend it to how few options can make a 'sensible' choice feel forced."
        },
        {
          id: "militia", name: "The Militia and Mr. Wickham", image: "images/militia.webp",
          clues: ["A charming officer in the militia stationed at Meryton wins the neighborhood's trust.", "He tells Elizabeth that Darcy cheated him out of a promised living.", "His easy manners make his version believable — for a while."],
          identify: { q: "Who is this charming officer?", choices: ["Mr. Wickham, who slanders Darcy with a false story", "Mr. Darcy in uniform", "Colonel Fitzwilliam, Darcy's cousin", "Mr. Bingley's brother"] },
          purpose: { q: "What is his role in the plot?", choices: ["To plant a false story that deepens Elizabeth's prejudice against Darcy", "To prove that Darcy is dishonest", "To serve as Elizabeth's true match", "To show the militia keeps order"] },
          significance: { q: "What is its literary significance?", choices: ["His charm shows how pleasing manners can disguise a bad character — the mirror image of Darcy", "It proves first impressions are always right", "It shows Elizabeth is never fooled", "It ends the marriage plot"] },
          reveals: "That surface charm is not evidence of virtue; Wickham is everything Darcy first appears to be, reversed.",
          conceals: "It hides Wickham's real history — including his attempt on Darcy's young sister — until Darcy's letter exposes it.",
          ace: "Articulate how Wickham fools the neighborhood; connect his charm to Darcy's cold manner; extend it to how we mistake likeability for goodness."
        },
        {
          id: "letter", name: "Darcy's Letter at Hunsford", image: "images/letter.webp",
          clues: ["After Elizabeth rejects his first, insulting proposal, Darcy hands her a long letter.", "It explains his part in separating Bingley from Jane, and the truth about Wickham.", "Reading and rereading it forces Elizabeth to doubt her own judgment."],
          identify: { q: "What is this document?", choices: ["Darcy's letter explaining Wickham's history and his interference with Jane and Bingley", "Wickham's written confession", "Mr. Collins's sermon notes", "Lydia's runaway note"] },
          purpose: { q: "What is its purpose in the story?", choices: ["To give Elizabeth new evidence that overturns her first impressions", "To propose to Elizabeth a second time", "To end their acquaintance forever", "To announce Darcy's marriage to someone else"] },
          significance: { q: "What is its literary significance?", choices: ["It is the novel's turning point, where prejudice begins to give way to self-knowledge", "It proves Elizabeth was right all along", "It has no effect on Elizabeth", "It reveals nothing new"] },
          reveals: "That evidence, not charm, changes Elizabeth's mind — she revises her view because the facts no longer fit her first impression.",
          conceals: "It withholds Darcy's feelings in the moment; Elizabeth, and the reader, must infer how much the letter costs his pride.",
          ace: "Articulate what the letter reveals; connect it to the theme of revised judgment; extend it to how solid evidence can change a mind that charm could not."
        },
        {
          id: "pemberley", name: "Pemberley", image: "images/pemberley.webp",
          clues: ["Touring Derbyshire with her aunt and uncle, Elizabeth visits Darcy's grand estate.", "His housekeeper describes him as generous and kind to servants and tenants.", "Meeting him there, she finds him courteous and changed — and her feelings shift."],
          identify: { q: "What is this place?", choices: ["Pemberley, Darcy's Derbyshire estate", "Longbourn, the Bennet home", "Netherfield, Bingley's rented house", "Rosings, Lady Catherine's estate"] },
          purpose: { q: "What is its purpose in the story?", choices: ["To let Elizabeth see evidence of Darcy's true character on his own ground", "To show Darcy is cruel to his servants", "To arrange Lydia's marriage", "To hold the Meryton ball"] },
          significance: { q: "What is its literary significance?", choices: ["The estate and the housekeeper's praise give Elizabeth a fuller, fairer picture that softens her judgment", "It proves wealth is all that matters", "It shows Darcy has not changed at all", "It ends Elizabeth's growth"] },
          reveals: "Darcy as those who depend on him see him — responsible and kind — a side his public stiffness hid.",
          conceals: "It leaves open how much Darcy has genuinely changed versus how much Elizabeth's eyes have opened; the novel suggests both.",
          ace: "Articulate what Elizabeth learns at Pemberley; connect the housekeeper's account to the theme of true character; extend it to how seeing someone 'at home' can revise a judgment."
        },
        {
          id: "lydia", name: "Lydia's Elopement and the Settlement", image: "images/lydia.webp",
          clues: ["The youngest Bennet sister, Lydia, runs off with Wickham, threatening the family's reputation.", "Quietly, Darcy finds them and pays to arrange their marriage.", "He does it without seeking credit, and Elizabeth learns of it only by accident."],
          identify: { q: "What events does this reconstruct?", choices: ["Lydia's elopement with Wickham and the marriage Darcy secretly arranges", "Jane and Bingley's wedding", "Elizabeth's refusal of Mr. Collins", "Charlotte's marriage"] },
          purpose: { q: "What do these events establish?", choices: ["A test of the family's reputation that reveals Darcy's changed, selfless conduct", "That Wickham is honorable after all", "That Lydia has excellent judgment", "The end of the entail"] },
          significance: { q: "What is its literary significance?", choices: ["Darcy's quiet generosity, done for Elizabeth's sake, completes his change from proud to considerate", "It proves reputation does not matter in this society", "It shows Darcy wants public praise", "It has nothing to do with the romance"] },
          reveals: "How much Darcy has changed — he acts to protect the family that once insulted him, and hides his hand.",
          conceals: "It keeps his motive quiet; Elizabeth must piece together that he did it for her.",
          ace: "Articulate what Darcy does for the Bennets; connect it to reputation and responsibility; extend it to why quiet, uncredited help can matter more than public gestures."
        }
      ]
    },

    ctob: {
      name: "The Case of the First Impression",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many Bennet daughters are there in the family? Enter the number.",
          evidence: ["Mrs. Bennet is anxious to see all her girls married.", "The eldest is Jane and the second is Elizabeth.", "Mary, Kitty, and Lydia are the three younger sisters."],
          hints: ["Count Jane, Elizabeth, Mary, Kitty, and Lydia.", "It is one more than four.", "The number is 5."],
          answer: "5"
        },
        {
          type: "word",
          prompt: "What is the name of the Bennet family's estate, the one entailed away to Mr. Collins? (one word)",
          evidence: ["The Bennets live on a modest country estate in Hertfordshire.", "Because of the entail, it will pass to Mr. Collins, not the daughters.", "Its name begins with 'L' and ends in '-bourn.'"],
          hints: ["It is where the Bennet family lives.", "It begins with 'Long…'.", "The estate is Longbourn."],
          answer: "Longbourn"
        },
        {
          type: "word",
          prompt: "What is the name of Darcy's grand Derbyshire estate, the visit to which changes Elizabeth's feelings? (one word)",
          evidence: ["Elizabeth tours the estate while traveling with her aunt and uncle.", "Its housekeeper praises Darcy as generous and kind.", "The name begins with 'Pem-.'"],
          hints: ["Darcy's home in Derbyshire.", "It begins with 'Pember…'.", "The estate is Pemberley."],
          answer: "Pemberley"
        },
        {
          type: "mc",
          prompt: "What first forces Elizabeth to begin revising her judgment of Darcy?",
          options: [
            "Darcy's letter, which explains the truth about Wickham and about Jane and Bingley.",
            "Wickham confessing that he lied to her.",
            "Mr. Collins proving that Darcy is kind.",
            "Lady Catherine praising Elizabeth's manners."
          ],
          hints: ["Think about the document Darcy hands her after his first proposal.", "Which option is about new evidence that contradicts her first impression?"]
        },
        {
          type: "sequence",
          prompt: "Put these events of the novel in order, earliest first.",
          items: [
            "Darcy slights Elizabeth at the Meryton assembly.",
            "Elizabeth refuses Darcy's proud first proposal at Hunsford.",
            "Lydia elopes with Wickham, and Darcy quietly arranges the marriage.",
            "Elizabeth and Darcy become engaged."
          ],
          hints: ["The country ball comes first.", "The rejected first proposal comes before Lydia's elopement.", "The engagement comes last."]
        },
        {
          type: "mc",
          prompt: "Why does visiting Pemberley change how Elizabeth feels about Darcy?",
          options: [
            "Seeing his estate and hearing his housekeeper's praise reveals a generous side that contradicts her prejudice.",
            "Because Pemberley is large and expensive, and wealth is all she really cares about.",
            "Because Darcy is rude to his servants there.",
            "Because Wickham is waiting for her at Pemberley."
          ],
          hints: ["Think about what the housekeeper, Mrs. Reynolds, tells her.", "Which option is about evidence of Darcy's true character?"]
        }
      ]
    },

    arcade: {
      name: "First Impressions: Accurate or Misleading?",
      instruction: "One of the novel's central lessons is that a first impression can be right — or badly wrong. Sort each snap judgment by whether the story finally confirms it (Accurate) or overturns it (Misleading). There is room to argue, but sort by which reading the evidence most directly supports. Reasoning earns the points.",
      buckets: [
        { id: "accurate", label: "First impression holds up (Accurate)", short: "Accurate" },
        { id: "misleading", label: "First impression is overturned (Misleading)", short: "Misleading" }
      ],
      cards: [
        { text: "Elizabeth decides Darcy is proud and unfeeling after he slights her at the ball.", bucket: "misleading", why: "He later proves principled and generous; her snap judgment was wrong." },
        { text: "The neighborhood believes Wickham's charming account that Darcy wronged him.", bucket: "misleading", why: "Wickham is the real deceiver; his pleasant manners hid a bad character." },
        { text: "Darcy assumes the reserved Jane does not truly care for Bingley.", bucket: "misleading", why: "Jane loves Bingley deeply; her calm surface misled him." },
        { text: "Elizabeth is certain, after the first proposal, that she could never respect Darcy.", bucket: "misleading", why: "His letter and later conduct change her mind entirely." },
        { text: "Elizabeth reads Mr. Collins as pompous and self-important on first meeting.", bucket: "accurate", why: "His proposal and conduct confirm exactly that impression." },
        { text: "Elizabeth senses at once that Lady Catherine is domineering and rude.", bucket: "accurate", why: "Lady Catherine's later demands confirm the first impression." },
        { text: "Elizabeth trusts Jane's sweetness and sincerity from the very start.", bucket: "accurate", why: "Jane's goodness holds true throughout the novel." },
        { text: "Charlotte Lucas judges that marrying Mr. Collins will give her security.", bucket: "accurate", why: "The practical prediction proves correct, whatever its emotional cost." }
      ],
      followup: "The novel's original working title is often reported to have been about first impressions. Using specific moments, argue when a first impression in the novel should be trusted and when it should be tested — and what Elizabeth has to do to tell the difference."
    },

    analysis: {
      mcq: [
        {
          q: "The title Pride and Prejudice points mainly to —",
          options: [
            "flaws that appear in both Darcy and Elizabeth, and that each must overcome.",
            "a flaw found only in Darcy.",
            "the name of the Bennet family estate.",
            "a dance performed at the Meryton ball."
          ],
          why: "Darcy shows pride and Elizabeth shows prejudice, but each also shows the other; the growth is mutual."
        },
        {
          q: "Austen's use of free indirect discourse mainly allows her to —",
          options: [
            "blend the narrator's voice with Elizabeth's thoughts, shaping irony and sympathy.",
            "tell the whole story through letters.",
            "write the novel as a stage play.",
            "hide Elizabeth's point of view from the reader."
          ],
          why: "The narration slips into Elizabeth's perspective, so we share her judgments — including her mistakes."
        },
        {
          q: "Charlotte Lucas's marriage to Mr. Collins mainly serves to —",
          options: [
            "present a practical, economic view of marriage that contrasts with Elizabeth's.",
            "prove that everyone in the novel marries for love.",
            "show that women had complete financial freedom.",
            "end the entail on Longbourn."
          ],
          why: "Charlotte trades affection for security, throwing Elizabeth's insistence on esteem into relief."
        },
        {
          q: "Darcy's letter after his first proposal is a turning point because it —",
          options: [
            "gives Elizabeth evidence that forces her to revise her judgment of Darcy and Wickham.",
            "proves Elizabeth was right about everything.",
            "announces his engagement to someone else.",
            "has no effect on the plot."
          ],
          why: "New, verifiable facts — not charm — move Elizabeth from prejudice toward self-knowledge."
        },
        {
          q: "The entail on Longbourn matters to the plot because it —",
          options: [
            "leaves the Bennet daughters financially insecure, making a good marriage urgent.",
            "makes the Bennet family extremely wealthy.",
            "guarantees the daughters will inherit the estate.",
            "has nothing to do with marriage."
          ],
          why: "Because the daughters cannot inherit, marriage becomes an economic necessity, not only romance."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops the theme of pride, prejudice, or the economics of marriage.",
        "First impressions in the novel are sometimes right and sometimes wrong. Using specific evidence, explain how Elizabeth learns to tell a fair judgment from a prejudiced one.",
        "Explain how Austen's ironic narration shapes your view of one character (for example, Mr. Collins, Mrs. Bennet, or Lady Catherine). What does the narrator's tone add?"
      ],
      paragraph: "Write an evidence-based paragraph. Who changes more over the course of the novel — Elizabeth or Darcy — and what specifically causes that change? Make a claim and support it with specific moments.",
      aceReflection: "Articulate the novel's central lesson about first impressions. Connect two themes (such as pride and self-knowledge, or marriage and money). Extend the idea of a revised judgment to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "The Letter That Changes a Mind",
      prompt: "Darcy's letter works because it answers Elizabeth's charges with evidence, forcing her to revise a confident first impression. Choose a modern situation where someone judges another person quickly and wrongly. Write a short two-part piece: first the snap judgment (a post, a message, a private thought), then the 'letter' or new evidence that overturns it — and show the judger beginning to change their mind, the way Elizabeth does.",
      format: "A two-part account (a first impression, then the evidence that revises it), plus a note on what changed the judgment and what still resists changing."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the title Pride and Prejudice names flaws in both Darcy and Elizabeth. Do not answer for me. Ask me one question at a time that helps me explain, in my own words, how each character shows pride and prejudice. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Pride and Prejudice. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in Pride and Prejudice because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Pride and Prejudice: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply the novel's lesson about revising a first impression to a modern situation, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of how Elizabeth's judgment of Darcy changes for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Pride and Prejudice — its irony and free indirect discourse, the twin flaws named in the title, and the economic pressures shaping courtship and marriage. It never reproduces Austen's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#1342) and LibriVox recording (version 1) are the standard 1813 novel; verify the link and edition before assigning.",
        "Pride and Prejudice is in the public domain. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "Details here come from the novel (the Meryton assembly; the entail on Longbourn; Mr. Collins's proposal and Charlotte's marriage; Wickham and the militia; Darcy's Hunsford letter; Pemberley; Lydia's elopement). Confirm them against your edition.",
        "The novel's original working title is widely reported to have been 'First Impressions.' Present that as commonly reported rather than certain.",
        "Mature content is mild but present (an elopement and strong social pressure on young women to marry). Preview for maturity and align with local policy.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft, and multiple-genre strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.3", "RL.11-12.3", "RL.9-10.5", "RL.9-10.6", "RL.11-12.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
