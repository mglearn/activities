/* PlotPoint — The Canterbury Tales (Geoffrey Chaucer).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details are limited to widely
   established facts from the General Prologue; standards codes are only those
   given by the build plan (Common Core) — TEKS/ELPS are flagged "Needs review."
   Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "canterbury",
  storageKey: "plotpoint.canterbury.v1",

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
    "vocab.title": "Words for The Canterbury Tales",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Pilgrims' Luggage",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — whose belongings are these?",
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
    "ctob.title": "The Missing Tale",
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
    "arcade.title": "Pilgrim Road",
    "arcade.default": "Sort each card into the force that best explains it.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Pilgrims to judge",
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
    "extend.title": "Create a Modern Pilgrim",
    "extend.format": "Format",
    "extend.evidence": "Chaucer's technique I am building on",
    "extend.transfers": "What transfers to my modern pilgrim",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern pilgrim portrait",
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
    "print.item.extend": "Modern-pilgrim organizer",
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
      title: "The Canterbury Tales",
      author: "Geoffrey Chaucer",
      grades: "Grades 11–12",
      genre: "Poetry · Frame narrative (Middle English)",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Middle English original (late 1300s) is public domain",
      textAccess: "Students need a public-domain or openly licensed edition or translation of the General Prologue. This room does not reproduce the text.",
      copyright: "The Middle English original is public domain; many modern English translations remain under copyright. Verify your edition before sharing.",
      contentNote: "This room focuses on the General Prologue. Some individual tales contain bawdy or mature material — preview any tales you assign and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2383",
      audio: "https://librivox.org/the-canterbury-tales-by-geoffrey-chaucer/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Canterbury Tales — pilgrims on a medieval road."
    },
    hook: "Twenty-nine strangers meet at an inn and agree to a storytelling contest on the road to Canterbury. Before a single tale is told, Chaucer's narrator sizes up each pilgrim — and quietly reveals who they really are.",
    goals: [
      "Analyze how Chaucer's frame narrative gathers many voices and social classes into one poem.",
      "Read the General Prologue portraits closely to infer character from clothing, possessions, and habits.",
      "Distinguish sincere praise from irony and estates satire in the narrator's descriptions.",
      "Transfer Chaucer's portrait technique to create and interpret a modern pilgrim."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a frame narrative.",
        "Discuss: How do we 'read' a stranger from small details — their clothes, habits, and what they carry?"
      ],
      during: [
        "Use the Relic Room to study one pilgrim's belongings at a time.",
        "Track when the narrator sounds admiring and when he is quietly mocking."
      ],
      after: [
        "Run the breakout, arcade, and analysis to consolidate an evidence-based reading of the Prologue.",
        "Complete the Extend task to build your own modern pilgrim."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Chaucer reveals a pilgrim's character. Include one detail from a portrait that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two portraits from the Prologue. Explain how comparing them changes your understanding of Chaucer's view of medieval society." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Chaucer's portrait technique to a person or role today. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "pilgrimage", def: "A journey to a sacred place made for religious reasons.", example: "Traveling to a holy shrine to pray.", nonexample: "A weekend shopping trip.", context: "The whole poem is framed by a spring pilgrimage to Canterbury." },
      { term: "frame narrative", def: "A story that contains other stories told within it.", example: "Travelers swapping tales, all held inside one larger story.", nonexample: "A single, uninterrupted plot.", context: "Chaucer uses a frame narrative: the pilgrimage holds all the separate tales." },
      { term: "estate", def: "In medieval society, one of the broad social classes — roughly those who fight, those who pray, and those who work.", example: "A knight (nobility), a parson (clergy), a plowman (laborer).", nonexample: "A person's passing mood.", context: "Chaucer samples every estate, from knight to plowman." },
      { term: "satire", def: "Writing that uses humor or irony to expose faults, especially of people or institutions.", example: "Gently mocking a greedy official to expose corruption.", nonexample: "A straightforward news report.", context: "Many portraits are satire aimed at corrupt church figures." },
      { term: "irony", def: "A gap between what is said and what is really meant or true.", example: "Calling a lazy monk 'a fine, hardworking man.'", nonexample: "Saying exactly what you mean.", context: "The narrator's praise is often ironic — the more he admires, the more we doubt." },
      { term: "chivalry", def: "The medieval code of honor, courage, and courtesy expected of a knight.", example: "A knight who is brave, modest, and honorable.", nonexample: "Cheating to win a contest.", context: "The Knight embodies chivalry." },
      { term: "prologue", def: "An introductory section that sets up a longer work.", example: "The General Prologue that introduces the pilgrims.", nonexample: "The final chapter of a book.", context: "The General Prologue introduces the whole company." },
      { term: "gentilesse", def: "Nobility that comes from character and virtue rather than from birth or wealth — a key Chaucerian idea.", example: "A poor person who acts with honor and generosity.", nonexample: "A wealthy person who is cruel to others.", context: "Chaucer suggests true gentilesse is earned by conduct, not inherited." },
      { term: "indulgence", def: "In the medieval church, a pardon for sin that a pardoner could grant — and sometimes sell.", example: "Paying for a document said to reduce punishment for sin.", nonexample: "Earning a school certificate through study.", context: "The Pardoner profits by selling indulgences and fake relics." },
      { term: "retinue", def: "A group of attendants or companions accompanying an important person.", example: "The servants and companions traveling with a lord.", nonexample: "A single traveler journeying alone.", context: "Some pilgrims travel with a small retinue." }
    ],

    relic: {
      name: "The Pilgrims' Luggage",
      intro: "Seven instructional reconstructions of belongings from Chaucer's pilgrims — teaching recreations, not copyrighted illustrations. Investigate what each object reveals about its owner's role and character, and what the narrator's description hides.",
      artifacts: [
        {
          id: "cloth", name: "The Wife of Bath's Cloth and Headdress", image: "images/cloth.png",
          clues: ["This pilgrim is a skilled cloth-maker from near Bath.", "Her Sunday headdresses are famously elaborate and heavy.", "She wears fine scarlet stockings and has traveled on many pilgrimages."],
          identify: { q: "Whose belongings are these?", choices: ["The Wife of Bath — an expert cloth-maker", "The Prioress", "A nameless servant", "The Knight's wife"] },
          purpose: { q: "What do these fine textiles show about her?", choices: ["Her success and independence in a skilled trade", "That she is poor", "That she is a cloistered nun", "That she cannot travel"] },
          significance: { q: "What is their literary significance?", choices: ["They mark her as a bold, self-made woman who claims authority in a male-dominated world", "They prove she is dishonest", "They show she is silent and meek", "They explain the contest rules"] },
          reveals: "A woman who has built status and confidence through her own craft and wide experience.",
          conceals: "How much of her boldness is genuine and how much is performance for the road.",
          ace: "Articulate what her clothing shows about her; connect it to the theme of who gets to claim authority; extend it to how appearance signals status today."
        },
        {
          id: "relics", name: "The Pardoner's Bag of 'Relics'", image: "images/relics.png",
          clues: ["This pilgrim sells pardons for sin.", "His bag holds objects he claims are holy relics.", "He is known to profit from the faith of simple people."],
          identify: { q: "Whose belongings are these?", choices: ["The Pardoner — a seller of pardons and relics", "The Parson", "The Monk", "A pilgrim guide"] },
          purpose: { q: "What is their purpose for him?", choices: ["To make money by selling forgiveness and fake holy objects", "To heal the sick for free", "To lead the group in prayer", "To carry the company's food"] },
          significance: { q: "What is their literary significance?", choices: ["They expose church corruption — sacred things turned into a sales scheme", "They show he is generous", "They prove the relics are genuine", "They set the travel route"] },
          reveals: "How religious authority could be abused for private profit.",
          conceals: "Whether anyone in the company is fooled — or whether they buy in knowingly.",
          ace: "Articulate what the fake relics reveal; connect them to Chaucer's satire of the church; extend it to how trust is sold today."
        },
        {
          id: "tunic", name: "The Knight's Stained Tunic", image: "images/tunic.png",
          clues: ["This pilgrim has just returned from long military campaigns.", "His coarse tunic is marked where his armor pressed and rusted against it.", "He is described as truthful, honorable, and modest."],
          identify: { q: "Whose belongings are these?", choices: ["The Knight — newly returned from his campaigns", "The Squire", "The Yeoman", "A merchant"] },
          purpose: { q: "What is its likely purpose?", choices: ["Plain travel clothing worn straight from war to pilgrimage", "A costume for the contest", "A disguise", "A gift for the shrine"] },
          significance: { q: "What is its literary significance?", choices: ["It signals genuine, unshowy virtue — he seeks the shrine before comfort or display", "It shows he is vain", "It proves he is poor", "It predicts who wins the contest"] },
          reveals: "A man whose worth is in his deeds, not his appearance.",
          conceals: "The violence of the campaigns that stained it.",
          ace: "Articulate what the plain tunic shows; connect it to the ideal of chivalry; extend it to what modest, unshowy virtue looks like today."
        },
        {
          id: "bagpipe", name: "The Miller's Bagpipe", image: "images/bagpipe.png",
          clues: ["This brawny pilgrim leads the company out of town playing music.", "He is loud, crude, and fond of wrestling.", "He is said to have a 'thumb of gold' — a joke about millers cheating their customers."],
          identify: { q: "Whose belongings are these?", choices: ["The Miller — a loud, brawny tradesman", "The Cook", "The Host", "The Clerk"] },
          purpose: { q: "What is its purpose on the road?", choices: ["To make noise and set a rowdy tone for the journey", "To signal prayer times", "To pay the innkeeper", "To carry grain"] },
          significance: { q: "What is its literary significance?", choices: ["It matches his coarse, disruptive character and hints that he cheats at his trade", "It shows he is gentle and quiet", "It proves he is holy", "It ends the pilgrimage"] },
          reveals: "A common tradesman whose appetite and dishonesty are worn openly.",
          conceals: "Whether his cheating is unusual or simply typical of his trade.",
          ace: "Articulate what the bagpipe suggests about him; connect it to Chaucer's satire of the trades; extend it to how public behavior signals character today."
        },
        {
          id: "brooch", name: "The Prioress's Brooch and Rosary", image: "images/brooch.png",
          clues: ["This pilgrim is the head of a convent with very refined table manners.", "She wears a coral rosary and a gold brooch.", "The brooch is engraved with the Latin motto 'Amor vincit omnia' — 'Love conquers all.'"],
          identify: { q: "Whose belongings are these?", choices: ["The Prioress (Madame Eglantine)", "The Wife of Bath", "A queen", "A merchant's wife"] },
          purpose: { q: "What is their likely purpose?", choices: ["Jewelry and manners that display courtly refinement", "Tools for farm work", "Weapons for defense", "Payment for lodging"] },
          significance: { q: "What is their literary significance?", choices: ["They hint she cares as much about worldly elegance and courtly love as about religious duty", "They prove she is a soldier", "They show she is poor", "They set the route"] },
          reveals: "A religious figure drawn to the manners and romance of the noble court.",
          conceals: "Whether her motto means sacred love or something more worldly — Chaucer leaves it teasingly open.",
          ace: "Articulate the tension in her belongings; connect the sacred and worldly in her portrait; extend it to how people today blend their public role with private taste."
        },
        {
          id: "books", name: "The Clerk of Oxford's Books", image: "images/books.png",
          clues: ["This thin, threadbare pilgrim is a student at Oxford.", "He spends what little money he has on books rather than clothes.", "He speaks rarely, and only with moral and learned purpose."],
          identify: { q: "Whose belongings are these?", choices: ["The Clerk of Oxford — a devoted student", "The Pardoner", "The Miller", "The Franklin"] },
          purpose: { q: "What is their purpose for him?", choices: ["To study and pursue learning above comfort or wealth", "To sell at market", "To pay off debts", "To entertain the group"] },
          significance: { q: "What is their literary significance?", choices: ["They mark him as one of the poem's admired figures — genuine devotion, not display", "They prove he is greedy", "They show he is a knight", "They explain the frame story"] },
          reveals: "A value system that prizes wisdom over wealth.",
          conceals: "How he survives on so little — the real cost of his devotion.",
          ace: "Articulate what the books reveal; connect his poverty to Chaucer's idea of true worth; extend it to what people sacrifice for a calling today."
        },
        {
          id: "tabard", name: "The Tabard Inn Sign and the Host", image: "images/tabard.png",
          clues: ["The company gathers at this inn in Southwark before setting out.", "Its keeper is a bold, cheerful man named Harry Bailly.", "He proposes the storytelling contest and appoints himself judge and guide."],
          identify: { q: "What place — and whose idea — is this?", choices: ["The Tabard Inn and its Host, Harry Bailly", "A church", "The shrine at Canterbury", "The Knight's castle"] },
          purpose: { q: "What is its purpose in the poem?", choices: ["The gathering place and the origin of the tale-telling contest", "A place to buy relics", "A monastery", "A courtroom"] },
          significance: { q: "What is its literary significance?", choices: ["It is the hinge of the frame narrative — the Host's game sets the whole poem in motion", "It shows the pilgrims are lost", "It proves the tales are true", "It ends the journey"] },
          reveals: "How a single organizing idea — a game with rules — lets Chaucer collect many voices.",
          conceals: "That the planned contest is never finished; the poem is incomplete.",
          ace: "Articulate the Host's role; connect the inn to the frame narrative; extend it to another 'container' that lets many voices be heard today."
        }
      ]
    },

    ctob: {
      name: "The Missing Tale",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The narrator says the company he joins at the Tabard numbered how many pilgrims (not counting himself)?",
          evidence: ["The General Prologue gives a specific size for the company he falls in with.", "It is famously phrased as 'well nine and twenty.'", "Nine and twenty means the number after twenty-eight."],
          hints: ["It is in the twenties.", "'Nine and twenty.'", "The answer is 29."],
          answer: "29"
        },
        {
          type: "word",
          prompt: "To the shrine of which martyred archbishop, at Canterbury, are the pilgrims traveling? (give his last name)",
          evidence: ["The pilgrims journey to honor a saint martyred inside Canterbury Cathedral.", "He was an Archbishop of Canterbury killed in 1170.", "His name was Thomas ______."],
          hints: ["A famous Archbishop of Canterbury.", "Often called Thomas à ______.", "His surname is Becket."],
          answer: "Becket"
        },
        {
          type: "mc",
          prompt: "Who proposes the tale-telling contest and sets its rules?",
          options: [
            "The Host of the Tabard Inn, Harry Bailly.",
            "The Knight.",
            "The narrator, Chaucer the pilgrim.",
            "The Pardoner."
          ],
          hints: ["He owns the inn where they gather.", "He also appoints himself judge and guide."]
        },
        {
          type: "sequence",
          prompt: "Put these events of the frame in order, earliest first.",
          items: [
            "The pilgrims gather by chance at the Tabard Inn in Southwark.",
            "The Host proposes a tale-telling contest with a prize.",
            "The next morning the company sets out and draws lots.",
            "The Knight, drawing the short straw, tells the first tale."
          ],
          hints: ["It begins at the inn, before the journey.", "The contest is proposed before anyone travels.", "The Knight's tale comes only once they are on the road."]
        },
        {
          type: "mc",
          prompt: "Chaucer's General Prologue portraits mainly reveal character by —",
          options: [
            "describing each pilgrim's clothing, possessions, and habits, often with irony.",
            "listing each pilgrim's exact age and birthplace.",
            "reporting long speeches made by each pilgrim.",
            "explaining the plot of each pilgrim's tale in advance."
          ],
          hints: ["Think about what the narrator actually notices.", "Which option is about observed detail and tone?"]
        },
        {
          type: "word",
          prompt: "The winner of the contest is promised a free ____, paid for by all the others, at the Tabard on the way home. (one word)",
          evidence: ["The Host sets a prize for whoever tells the best tale.", "The prize is a meal at the whole company's expense.", "It is a shared evening ______."],
          hints: ["An evening meal.", "Eaten together back at the inn.", "The word is supper."],
          answer: "supper"
        }
      ]
    },

    arcade: {
      name: "Pilgrim Road",
      instruction: "Chaucer's narrator praises every pilgrim — but he does not mean it the same way each time. Judge each pilgrim's portrait: is the narrator's admiration GENUINE, or is it IRONIC, using praise to satirize a corrupt or comic figure? Reasoning — not speed — earns the points.",
      buckets: [
        { id: "admired", label: "Genuinely admired", short: "Admired" },
        { id: "satire", label: "Satirized / undercut", short: "Satire" }
      ],
      cards: [
        { text: "The Knight", bucket: "admired", why: "Truthful, honorable, and modest — a sincere ideal of chivalry." },
        { text: "The Parson", bucket: "admired", why: "A poor but holy priest who genuinely practices what he preaches." },
        { text: "The Plowman", bucket: "admired", why: "An honest laborer who loves God and helps his neighbors without complaint." },
        { text: "The Clerk of Oxford", bucket: "admired", why: "Devoted to learning over wealth; his poverty is dignified, not mocked." },
        { text: "The Pardoner", bucket: "satire", why: "Sells fake relics and pardons for profit — Chaucer's sharpest church-corruption satire." },
        { text: "The Monk", bucket: "satire", why: "Ignores his monastic rule, preferring hunting and rich food to prayer and study." },
        { text: "The Friar", bucket: "satire", why: "Exploits confession and charity for money instead of serving the poor." },
        { text: "The Miller", bucket: "satire", why: "Crude and dishonest, with a 'thumb of gold' that hints he cheats his customers." }
      ],
      followup: "Which pilgrim was hardest to place — someone Chaucer seems to both enjoy and mock? The Wife of Bath and the Prioress live in that gray zone. Where would you put them, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "The 'frame' of The Canterbury Tales is —",
          options: [
            "a pilgrimage and storytelling contest that holds many separate tales together.",
            "a single continuous plot about one hero.",
            "a private diary kept by Chaucer.",
            "a set of unrelated poems with no connection to one another."
          ],
          why: "The pilgrimage and the Host's contest are the frame device that gathers the individual tales into one work."
        },
        {
          q: "By describing pilgrims from the Knight down to the Miller and the Pardoner, Chaucer creates —",
          options: [
            "a cross-section of medieval society he can both praise and satirize (estates satire).",
            "a fantasy world with no real social classes.",
            "a portrait gallery of only noble characters.",
            "a purely religious sermon with no humor."
          ],
          why: "Chaucer samples the medieval 'estates,' using each portrait to reveal and often satirize a social role."
        },
        {
          q: "When the narrator lavishly praises a corrupt pilgrim, the effect is usually —",
          options: [
            "irony — the excessive praise invites us to judge the pilgrim more harshly.",
            "sincere admiration the reader is meant to share.",
            "confusion with no real purpose.",
            "a neutral, factual biography."
          ],
          why: "The naive-seeming narrator's over-praise is a controlled irony that lets readers see the fault for themselves."
        },
        {
          q: "Chaucer most often reveals a pilgrim's true character through —",
          options: [
            "concrete details of dress, possessions, and daily habits.",
            "direct statements of the moral lesson.",
            "the pilgrim's exact words in the tale that follows.",
            "the weather along the journey."
          ],
          why: "The Prologue builds character from observed physical and behavioral detail rather than direct commentary."
        },
        {
          q: "One reason the pilgrimage frame is so useful to Chaucer is that it —",
          options: [
            "brings many social classes together plausibly, so their voices and values can clash.",
            "keeps every character the same so the poem stays simple.",
            "avoids any mention of religion.",
            "guarantees that the poem will be finished."
          ],
          why: "A pilgrimage was one of the few settings where diverse classes genuinely mixed, letting Chaucer stage many voices together."
        }
      ],
      short: [
        "Choose one pilgrim from the Relic Room. Using specific details, explain what Chaucer's description reveals about that pilgrim's true character.",
        "Find a portrait where the narrator's praise seems ironic. How do the details undercut the praise?",
        "How does the frame narrative — the pilgrimage and the contest — make it possible for so many different voices to appear in one poem?"
      ],
      paragraph: "Write an evidence-based paragraph. Does Chaucer use the General Prologue mainly to celebrate medieval society, to criticize it, or to do both at once? Make a claim and support it with specific portraits.",
      aceReflection: "Articulate Chaucer's portrait technique in your own words. Connect two portraits that use it differently. Extend it by describing a person today the same technique could expose — and name where the comparison breaks down."
    },

    extend: {
      name: "Create a Modern Pilgrim",
      prompt: "Chaucer reveals character through dress, possessions, and habits, and quietly satirizes social roles. Choose a recognizable role in today's world — an influencer, a coach, a CEO, a nurse, a politician, a student. Write a short 'modern pilgrim' portrait in Chaucer's style, using concrete details to reveal character and, if you wish, gentle satire.",
      format: "A modern pilgrim portrait (prose or verse), plus a note on whether your tone is admiring, satirical, or both. Show character through details, not labels."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Chaucer reveals character in The Canterbury Tales. Do not answer for me. Ask me one question at a time that helps me explain the technique in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Canterbury Tales. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [pilgrim one] connects to [pilgrim two] in The Canterbury Tales because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the portraits." },
      { title: "Evidence prompt", text: "Here is my claim about a pilgrim in The Canterbury Tales: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to write a modern pilgrim in Chaucer's style based on [role today]. Give me two ways the satire might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of a Canterbury Tales portrait for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of the General Prologue through evidence-based tasks. It never reproduces Chaucer's text, invents no quotations, and keeps every response on the student's device. Assign a full pathway or a single activity.",
      reviewNotes: [
        "Verify your class edition/translation is public domain or openly licensed. The Middle English original is public domain; many modern translations remain under copyright.",
        "Details here come from the General Prologue (e.g., 'nine and twenty' pilgrims, the Host's contest and prize supper, the Tabard Inn in Southwark, the shrine of Thomas Becket). Confirm them against your edition, since line numbers and spellings vary.",
        "Some individual tales contain bawdy or mature material. This room focuses on the General Prologue; preview any tales you assign.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year before relying on it."
      ]
    },
    standards: {
      teks: "Aligned to the English IV / British-literature ELAR TEKS (19 TAC Ch. 110) reading-response and author's-craft strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.4", "RL.11-12.5", "RL.11-12.6", "W.11-12.3", "W.11-12.9"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
