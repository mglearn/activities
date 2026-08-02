/* PlotPoint — The Parson's Daughter of Oxney Colne (Anthony Trollope, 1861).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout, with only
   brief public-domain phrases where useful. It is studied as literature —
   characterization, irony, and class/social realism. Standards are good-faith
   Common Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "parsonsdaughter",
  storageKey: "plotpoint.parsonsdaughter.v1",

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
    "vocab.title": "Words for The Parson's Daughter of Oxney Colne",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Oxney Colne on the Moor",
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
    "ctob.title": "The Broken Engagement",
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
    "arcade.title": "Patience's Pride or John's Ambition?",
    "arcade.default": "Sort each detail by whose pride it shows.",
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
    "extend.title": "Dignity Over a Demeaning Match",
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
    "print.item.relic": "Moor & manor evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Dignity-over-a-match organizer",
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
      title: "The Parson's Daughter of Oxney Colne",
      author: "Anthony Trollope",
      grades: "English IV",
      genre: "Short story · Victorian realism",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1861)",
      textAccess: "A short public-domain story; use your class's copy or any public-domain text.",
      copyright: "First published in 1861, The Parson's Daughter of Oxney Colne is in the public domain and is studied here as literature. This room paraphrases the story, reproduces no full passages, and quotes only brief public-domain phrases where useful.",
      contentNote: "Appears on a Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school), with implementation no earlier than 2030–2031. Studied as literature (characterization, irony, and class/social realism). A quiet Victorian courtship story with no mature content; preview and follow local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Parson's Daughter of Oxney Colne — a humble country parsonage on the windswept edge of Dartmoor in Devon, with a proud young woman standing before the moor."
    },
    hook: "On the lonely edge of Dartmoor, a poor parson's clever daughter falls in love with a rising London barrister — the wealthy heir of her sharp-tongued neighbor. They become engaged. But once back among his fashionable friends, he begins to wonder whether a country parson's daughter is grand enough for his future. When he comes at last to settle the matter in a proud, condescending spirit, Patience must decide what her self-respect is worth.",
    goals: [
      "Understand the plot of Trollope's courtship story and why the engagement is finally broken off.",
      "Analyze the characterization of Patience Woolsworthy, John Broughton, and Miss Le Smyrger.",
      "Trace the social and class realism and the irony in how pride shapes each character's choices.",
      "Interpret the story's theme of self-respect and dignity over a compromised, condescending marriage."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of characterization, realism, and irony.",
        "Discuss: When is it right to refuse something you want in order to keep your dignity?"
      ],
      during: [
        "Use Oxney Colne on the Moor to slow down and read how each character's pride is drawn.",
        "Track the shift in John's tone from ardent suitor to cool, superior fiancé."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the class conflict and the broken engagement.",
        "Complete the Extend task to weigh dignity against a demeaning match."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Patience breaks off the engagement herself. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect John's condescension to Patience's pride. Explain how the clash of their two kinds of pride drives the story to its ending." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea of choosing dignity over a demeaning match to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "characterization", def: "The methods a writer uses to reveal a character's personality.", example: "Showing Patience's pride through her sharp, honest replies.", nonexample: "A plot event that reveals nothing about anyone.", context: "Trollope's careful characterization makes Patience's pride vivid." },
      { term: "realism", def: "Writing that portrays ordinary life and society truthfully, without idealizing it.", example: "The honest picture of class and money shaping a courtship.", nonexample: "A fairy tale with magic and happy endings for all.", context: "The story is a work of Victorian social realism." },
      { term: "irony", def: "A contrast between what is expected or stated and what is really true.", example: "John thinks he is being generous while insulting Patience.", nonexample: "A statement that means exactly what it says.", context: "There is deep irony in John's 'generous' condescension." },
      { term: "theme", def: "The central idea or insight about life that a story explores.", example: "Self-respect matters more than an advantageous marriage.", nonexample: "A single event with no larger meaning.", context: "The theme is dignity over a demeaning match." },
      { term: "tone", def: "The writer's or a character's attitude, shown through word choice.", example: "The cool, superior tone of John's later letters.", nonexample: "A neutral list of facts with no attitude.", context: "John's tone turns condescending once he is back in London." },
      { term: "conflict", def: "The struggle between opposing forces that drives a story.", example: "Love pulling against class pride and worldly ambition.", nonexample: "A calm scene with nothing at stake.", context: "The central conflict is between love and social pride." },
      { term: "foil", def: "A character whose contrast highlights the traits of another.", example: "Blunt Miss Le Smyrger set against proud, reserved Patience.", nonexample: "Two characters who are exactly alike.", context: "Miss Le Smyrger acts as a foil to both young lovers." },
      { term: "barrister", def: "In England, a lawyer who argues cases in the higher courts.", example: "John Broughton's rising career in the London courts.", nonexample: "A country farmer with no profession.", context: "John is an ambitious young London barrister." },
      { term: "condescension", def: "Behaving as if you are superior while pretending to be kind.", example: "John proposing again as though doing Patience a favor.", nonexample: "Treating someone as a genuine equal.", context: "Patience refuses to be married out of John's condescension." }
    ],

    relic: {
      name: "Oxney Colne on the Moor",
      intro: "Seven instructional reconstructions of people, places, and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "oxney-colne", name: "Oxney Colne on the Moor", image: "images/oxney-colne.webp",
          clues: ["The story is set at Oxney Colne, on the edge of Dartmoor in Devon.", "The parsonage is humble and the parson is poor.", "The wild, remote moor shapes the quiet lives of its people."],
          identify: { q: "What is Oxney Colne?", choices: ["A remote Devon parish on the edge of Dartmoor where the story is set", "A grand London townhouse", "A seaside resort", "A cathedral city"] },
          purpose: { q: "What is the setting's role in the story?", choices: ["It marks Patience's humble country station against John's fashionable London world", "It is only mentioned once", "It is where the courts meet", "It has no bearing on the plot"] },
          significance: { q: "What does the humble moorland setting reveal?", choices: ["The modest social station Patience is proud of and John comes to look down on", "That Patience is wealthy", "That John belongs to the country", "That class does not matter here"] },
          reveals: "The plain country world that grounds Patience's pride and self-respect.",
          conceals: "How sharply this world will collide with John's London ambitions.",
          ace: "Articulate what Oxney Colne is; connect the setting to Patience's pride in her station; extend it to how place and class shape a person's sense of worth."
        },
        {
          id: "patience", name: "Patience Woolsworthy", image: "images/patience.webp",
          clues: ["She is the intelligent, spirited daughter of the poor parson.", "She is proud of exactly who she is and will not pretend to be grander.", "Her closest older friend is her neighbor, Miss Le Smyrger."],
          identify: { q: "Who is Patience Woolsworthy?", choices: ["The clever, proud daughter of the poor country parson", "A wealthy London heiress", "John's aunt", "A servant at the manor"] },
          purpose: { q: "What is Patience's role in the story?", choices: ["She is the heroine whose pride and integrity decide the ending", "She is a minor background figure", "She narrates from London", "She owns the estate"] },
          significance: { q: "What does Patience's refusal to pretend reveal?", choices: ["Her self-respect matters more to her than rising above her station", "That she is ashamed of her home", "That she does not love John", "That she wants John's money"] },
          reveals: "A strong-willed heroine who values her integrity above advantage.",
          conceals: "How much that same pride will cost her when John's love cools.",
          ace: "Articulate who Patience is; connect her pride to the story's theme; extend it to why a character's integrity can matter more than getting what she wants."
        },
        {
          id: "le-smyrger", name: "Miss Le Smyrger", image: "images/le-smyrger.webp",
          clues: ["She is the wealthy, sharp-tongued spinster who owns the local property.", "She is Patience's blunt older friend and John's aunt.", "She hopes to see her nephew and Patience matched."],
          identify: { q: "Who is Miss Le Smyrger?", choices: ["The wealthy, blunt spinster neighbor who is John's aunt and Patience's friend", "Patience's mother", "A London lawyer", "John's rival for Patience"] },
          purpose: { q: "What is Miss Le Smyrger's role in the story?", choices: ["She links the two families and acts as a would-be matchmaker", "She is the villain of the tale", "She narrates the London scenes", "She has no part in the courtship"] },
          significance: { q: "What does her blunt wit reveal?", choices: ["A plain-spoken honesty that foils the young lovers' careful pride", "That she is cruel to Patience", "That she despises John", "That she is easily fooled"] },
          reveals: "A sharp, candid voice that judges both young people frankly.",
          conceals: "How little even her good will can bridge the gap of class and pride.",
          ace: "Articulate who Miss Le Smyrger is; connect her bluntness to the lovers' reserve as a foil; extend it to how a candid outsider can expose what others hide."
        },
        {
          id: "john", name: "John Broughton, the London Barrister", image: "images/john.webp",
          clues: ["He is Miss Le Smyrger's nephew and heir.", "He is a rising, ambitious young barrister in London.", "He visits the moor and falls in love with Patience."],
          identify: { q: "Who is John Broughton?", choices: ["The ambitious young London barrister who is Miss Le Smyrger's heir", "The parson of Oxney Colne", "A moorland farmer", "Patience's brother"] },
          purpose: { q: "What is John's role in the story?", choices: ["He is the suitor whose love and pride are tested against class", "He is a minor guest who never speaks", "He is the narrator's employer", "He owns the parsonage"] },
          significance: { q: "What does John's ambition reveal?", choices: ["A worldly pride that will war with his love for Patience", "That he has no feelings for Patience", "That he despises London", "That he is poor like the parson"] },
          reveals: "A capable, ambitious man pulled between real love and social calculation.",
          conceals: "Whether his affection is strong enough to outlast his snobbery.",
          ace: "Articulate who John is; connect his ambition to the coming conflict; extend it to how worldly ambition can pull against sincere feeling."
        },
        {
          id: "engagement", name: "The Engagement", image: "images/engagement.webp",
          clues: ["John and Patience fall in love during his visit to the moor.", "They become engaged, crossing the line between their social stations.", "Patience enters it proudly, as an equal, not a fortunate inferior."],
          identify: { q: "What is the engagement in the story?", choices: ["The promise of marriage between John and Patience across class lines", "A business deal about the estate", "A quarrel between the two families", "An arranged match Patience rejects at once"] },
          purpose: { q: "What is the engagement's role in the story?", choices: ["It raises the central question of whether love can survive their class gap", "It ends the story happily at once", "It is only a rumor", "It concerns Miss Le Smyrger's marriage"] },
          significance: { q: "What does Patience's proud manner in the engagement reveal?", choices: ["She means to be loved as an equal, not accepted as a favor", "She is desperate to escape her home", "She cares only for John's wealth", "She doubts John from the start"] },
          reveals: "Love reaching across a real barrier of class and money.",
          conceals: "How fragile that love will prove once John returns to London.",
          ace: "Articulate what the engagement is; connect it to the class conflict; extend it to how a relationship can strain against social expectations."
        },
        {
          id: "condescension", name: "John's Condescension", image: "images/condescension.webp",
          clues: ["Back among his fashionable London life, John grows hesitant.", "He worries whether a poor parson's daughter suits his ambitions.", "His letters and manner turn cool and superior, as if he were doing her a favor."],
          identify: { q: "What is John's condescension?", choices: ["His cooling, superior manner once he is back in London society", "His generous gifts to Patience", "His plan to move to the moor", "His new respect for the parson"] },
          purpose: { q: "What is this shift's role in the story?", choices: ["It turns the courtship into a test of Patience's self-respect", "It reconciles the two families", "It ends John's career", "It has no effect on Patience"] },
          significance: { q: "What does John's condescension reveal about him?", choices: ["His social pride and ambition are stronger than his love", "That he has stopped caring for Patience entirely", "That he is poor and anxious", "That he admires country life"] },
          reveals: "The snobbery beneath John's charm, surfacing once he is home.",
          conceals: "That he still expects Patience to be grateful for his hand.",
          ace: "Articulate what John's condescension is; connect his cooling tone to the theme; extend it to how someone can insult another while believing they are being kind."
        },
        {
          id: "breaks-it-off", name: "Patience Breaks It Off", image: "images/breaks-it-off.webp",
          clues: ["John comes at last to settle the matter in a proud, patronizing spirit.", "Patience refuses to be looked down upon or married out of mere duty.", "She breaks off the engagement herself, choosing self-respect over a demeaning marriage."],
          identify: { q: "How does the engagement finally end?", choices: ["Patience breaks it off herself rather than be married out of condescension", "John jilts her for a London heiress", "Miss Le Smyrger forbids the match", "They marry quietly on the moor"] },
          purpose: { q: "What is this ending's role in the story?", choices: ["It resolves the class-and-pride conflict on Patience's own terms", "It begins a new courtship", "It restores John's fortune", "It is a misunderstanding soon fixed"] },
          significance: { q: "What does Patience's choice reveal?", choices: ["She values her dignity above a marriage that would demean her", "She never loved John at all", "She is punishing Miss Le Smyrger", "She hopes John will beg again"] },
          reveals: "The story's theme made action — dignity chosen over a compromised match.",
          conceals: "What that costs Patience, who keeps her self-respect but loses the man.",
          ace: "Articulate how Patience ends the engagement; connect her choice to the theme of self-respect; extend it to why refusing what demeans us can be its own kind of victory."
        }
      ]
    },

    ctob: {
      name: "The Broken Engagement",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What Patience chooses to protect, even at the cost of the marriage, is her self-______. (one word)",
          evidence: ["She will not be looked down upon or married out of condescension.", "She would rather lose the match than be demeaned.", "The word completes 'self-______' and means proper regard for one's own dignity."],
          hints: ["Proper regard for one's own worth and dignity.", "It completes the phrase 'self-______'.", "The word is respect."],
          answer: "respect"
        },
        {
          type: "mc",
          prompt: "Where is the story set?",
          options: [
            "Oxney Colne, on the edge of Dartmoor in Devon.",
            "The heart of fashionable London.",
            "A seaside town in Cornwall.",
            "A cathedral close in Yorkshire."
          ],
          hints: ["It is a remote, humble country parish.", "Which option names the moorland parish?"]
        },
        {
          type: "mc",
          prompt: "Why does John grow hesitant after returning to London?",
          options: [
            "He worries a poor parson's daughter does not suit his ambitions.",
            "He loses his position as a barrister.",
            "He falls ill on the journey home.",
            "He discovers Patience has deceived him."
          ],
          hints: ["Think about class and his social world.", "Which option is about his ambition and her station?"]
        },
        {
          type: "digit",
          prompt: "Counting the parties to the engagement, how many people are engaged to be married? Enter the number.",
          evidence: ["An engagement is a promise between two people.", "Here it is Patience and John — and no one else.", "Count them: Patience is one, John is the other."],
          hints: ["An engagement joins a couple.", "Patience plus John.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the courtship in order, earliest first.",
          items: [
            "John visits the moor and he and Patience fall in love.",
            "They become engaged across the gap of class.",
            "Back in London, John grows cool and condescending.",
            "Patience breaks off the engagement to keep her dignity."
          ],
          hints: ["It begins when John comes to the moor.", "The engagement comes before the cooling.", "Patience's refusal is the final act."]
        },
        {
          type: "word",
          prompt: "John's cooling, superior manner — treating Patience as if he were doing her a favor — is his ______. (one word)",
          evidence: ["Once home, his letters and manner turn cool and superior.", "He acts as though marrying her would be an act of generosity.", "The word means looking down on someone while seeming kind, and begins with 'conde…'."],
          hints: ["Acting superior while pretending to be gracious.", "Conde…", "The word is condescension."],
          answer: "condescension"
        }
      ]
    },

    arcade: {
      name: "Patience's Pride or John's Ambition?",
      instruction: "Trollope contrasts two kinds of pride. Sort each detail: does it show PATIENCE'S PRIDE AND SELF-RESPECT (integrity in her humble station), or JOHN'S SNOBBERY AND AMBITION (his worldly, social pride)? Reasoning earns the points.",
      buckets: [
        { id: "patience", label: "Patience's pride & self-respect", short: "Patience" },
        { id: "john", label: "John's snobbery & ambition", short: "John" }
      ],
      cards: [
        { text: "Refusing to pretend to be grander than her country station.", bucket: "patience", why: "Patience is proud of exactly who she is." },
        { text: "Entering the engagement as an equal, not a grateful inferior.", bucket: "patience", why: "She means to be loved, not condescended to." },
        { text: "Breaking off the match rather than be married out of duty.", bucket: "patience", why: "She chooses her dignity over the advantageous marriage." },
        { text: "Valuing her self-respect above rising in the world.", bucket: "patience", why: "Her integrity outweighs any social gain." },
        { text: "Worrying whether a parson's daughter suits his career.", bucket: "john", why: "John measures Patience against his ambitions." },
        { text: "Letting his letters turn cool and superior from London.", bucket: "john", why: "His fashionable world makes him look down on her." },
        { text: "Coming to settle the matter in a patronizing spirit.", bucket: "john", why: "He treats the marriage as a favor he is granting." },
        { text: "Prizing his fashionable social world over the moor.", bucket: "john", why: "His worldly ambition pulls against his love." }
      ],
      followup: "The story sets Patience's self-respect against John's social pride. Which detail makes the clash between them sharpest, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Patience Woolsworthy is best described as —",
          options: [
            "a proud, clever parson's daughter who values her self-respect.",
            "a wealthy heiress ashamed of her origins.",
            "a timid girl eager to escape the moor.",
            "a schemer after John's fortune."
          ],
          why: "The story characterizes Patience through her intelligence and fierce pride in who she is."
        },
        {
          q: "John Broughton is drawn to Patience but hesitates because —",
          options: [
            "he doubts a poor parson's daughter suits his London ambitions.",
            "he has fallen in love with someone else.",
            "her family forbids the match.",
            "he must move abroad for his work."
          ],
          why: "His social pride and ambition war with his affection once he is back in London."
        },
        {
          q: "Miss Le Smyrger functions in the story mainly as —",
          options: [
            "a blunt, wealthy neighbor who links the families and hopes to match them.",
            "the villain who wrecks the engagement.",
            "Patience's rival for John.",
            "a distant figure who never appears."
          ],
          why: "She is John's aunt and Patience's candid older friend, a would-be matchmaker and a foil."
        },
        {
          q: "The engagement finally ends because —",
          options: [
            "Patience breaks it off rather than be married out of condescension.",
            "John abandons her for a richer bride.",
            "the parson refuses his consent.",
            "Miss Le Smyrger separates them."
          ],
          why: "Patience herself ends it, choosing dignity over a demeaning marriage."
        },
        {
          q: "The story's central theme is best stated as —",
          options: [
            "self-respect and dignity matter more than a compromised, condescending marriage.",
            "true love always overcomes every obstacle.",
            "ambition is always rewarded in the end.",
            "the poor should be grateful for any advantage."
          ],
          why: "Patience's choice dramatizes dignity over a demeaning match as the story's guiding idea."
        }
      ],
      short: [
        "Choose one artifact from Oxney Colne on the Moor. Explain what it is and what it reveals about the story's meaning.",
        "Explain how Trollope characterizes Patience and John differently, and how their two kinds of pride create the central conflict.",
        "Patience keeps her dignity but loses the marriage. What does the story suggest this cost is worth — and why?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Trollope use irony and social realism to show that John's 'generous' proposal is really an insult? Make a claim and support it with specific details about his tone, his motives, and Patience's response.",
      aceReflection: "Articulate what the story suggests about self-respect in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Dignity Over a Demeaning Match",
      prompt: "Patience refuses a marriage that would demean her, choosing self-respect over advantage. Choose another story, film, or real situation where someone gives up something they want in order to keep their dignity. Explain the connection with evidence: what was offered, what was demeaning about it, and what the person's refusal cost and gained.",
      format: "A short evidence-based comparison connecting the story's idea of dignity over a demeaning match to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Patience breaks off her engagement in The Parson's Daughter of Oxney Colne. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Parson's Daughter of Oxney Colne. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Parson's Daughter of Oxney Colne because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Parson's Daughter of Oxney Colne: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's idea of choosing dignity over a demeaning match to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Parson's Daughter of Oxney Colne for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Trollope's The Parson's Daughter of Oxney Colne as a study of characterization, irony, and class/social realism, centered on the theme of self-respect over a compromised, condescending marriage. The story is public domain (1861) and is taught here as literature. The room paraphrases the story, reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "This title appears on a Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school), with implementation no earlier than 2030–2031. Confirm the current list and effective dates against TEA guidance before teaching.",
        "The story (1861) is in the public domain and is studied here as literature — characterization, irony, and class/social realism — not reproduced.",
        "Teach as literature: focus on characterization (Patience's pride and integrity, John's snobbery, Miss Le Smyrger's blunt wit), irony, and the class/social realism of a courtship shaped by money and station.",
        "This is a lesser-known Trollope story; confirm plot and character details (Patience Woolsworthy; the parson father; Miss Le Smyrger; John Broughton the London barrister; the Dartmoor/Oxney Colne setting; the engagement; John's condescension; Patience breaking it off) against your assigned text before teaching.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English IV / high-school ELAR TEKS (19 TAC Ch. 110) strands on characterization, author's craft, irony, and the analysis of theme in literary fiction. Confirm exact student expectations and adoption year for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.3", "RL.11-12.4", "RL.11-12.6", "W.11-12.1", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
