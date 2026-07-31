/* PlotPoint — Between the World and Me (Ta-Nehisi Coates).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; details were verified against the book and are
   used only to build original, transformative analysis. Standards are good-faith
   Common Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "between",
  storageKey: "plotpoint.between.v1",

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
    "enter.readListen": "Read & Listen",
    "enter.readListenTitle": "Get the text",
    "enter.readListenNote": "This is a copyrighted book; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Between the World and Me",
    "vocab.intro": "{n} terms that unlock the book. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Letter to His Son",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the book",
    "relic.q.significance": "What it reveals about the book's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Weight of the Body",
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
    "arcade.title": "The Dream or the Reckoning?",
    "arcade.default": "Sort each statement by which side of Coates's argument it belongs to.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary & Rhetorical Analysis",
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
    "extend.title": "An Honest Letter",
    "extend.format": "Format",
    "extend.evidence": "The idea from the book I am building on",
    "extend.transfers": "What transfers to a modern situation",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My evidence-based response",
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
    "print.item.relic": "Letter evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Honest-letter organizer",
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
      title: "Between the World and Me",
      author: "Ta-Nehisi Coates",
      grades: "Grades 11–12",
      genre: "Memoir · Essay · Nonfiction",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the book (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Between the World and Me is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The book confronts racism, the history of violence against Black Americans, police killings (including the death of the author's friend), and mature reflections on the body. It contains strong language. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Between the World and Me by Ta-Nehisi Coates. Students need lawful access to the book. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY 4.0. Between the World and Me, its text, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Between the World and Me — a handwritten letter, a city skyline, and a university gate at dusk."
    },
    hook: "A father writes a long letter to his teenage son. He will not comfort him with easy hope. Instead, Ta-Nehisi Coates tries to tell the truth about history, race, and what it means to live in a Black body in America — and to help his son see clearly the country he is growing up in.",
    goals: [
      "Understand the book as a letter from Coates to his son, in the tradition of the personal essay.",
      "Analyze Coates's central ideas: 'the body,' 'the Dream,' and 'the Mecca.'",
      "Examine how personal memory (Baltimore, Howard, the death of Prince Jones) carries a larger argument about America.",
      "Evaluate Coates's choice to write honestly rather than reassuringly, and connect it to writing hard truths today."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a book written as a letter (an epistle).",
        "Discuss: When is it more caring to tell a hard truth than to offer comfort?"
      ],
      during: [
        "Use the Letter to slow down and read Coates's key ideas and memories closely.",
        "Track how each personal memory supports a larger claim about America."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to write your own honest reflection."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Coates means by 'the body.' Include one detail from the book that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect one of Coates's memories (for example, Howard or Prince Jones) to one of his big ideas (the body, the Dream). Explain how the memory supports the idea." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Coates's choice to write an honest, uncomforting letter to a situation you know. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "memoir", def: "A true account of the author's own life and experiences.", example: "Coates writing about his own childhood and growth.", nonexample: "A made-up story about invented people.", context: "The book draws on Coates's own memories." },
      { term: "epistolary", def: "Written in the form of a letter.", example: "A whole book addressed to 'you,' the author's son.", nonexample: "A neutral report with no reader addressed.", context: "The epistolary form makes the book feel personal and direct." },
      { term: "vulnerability", def: "The state of being exposed to harm.", example: "Coates's focus on the physical danger to the body.", nonexample: "Complete safety from any threat.", context: "The book centers on the vulnerability of the Black body." },
      { term: "systemic", def: "Built into the structures of a whole system, not just one person's act.", example: "Patterns of harm reaching across laws, schools, and policing.", nonexample: "A single, isolated mistake.", context: "Coates argues that the danger is systemic, not accidental." },
      { term: "disillusionment", def: "The loss of a comforting but false belief.", example: "A young person realizing the world is less just than they were told.", nonexample: "Holding on to a myth without questioning it.", context: "The book grows out of a moment of disillusionment." },
      { term: "reckoning", def: "An honest facing of a hard truth and its consequences.", example: "Confronting history instead of looking away.", nonexample: "Avoiding a difficult reality.", context: "Coates asks his son, and America, for a reckoning." },
      { term: "legacy", def: "What is handed down from the past into the present.", example: "How past injustice still shapes life today.", nonexample: "An event with no lasting effects.", context: "The book traces the legacy of history in the present." },
      { term: "rhetoric", def: "The art of using language to inform and persuade.", example: "Coates's repeated images that build his argument.", nonexample: "Words chosen at random with no purpose.", context: "The book's power comes partly from its rhetoric." },
      { term: "plunder", def: "The violent taking of what belongs to others.", example: "Coates's word for wealth built on others' loss.", nonexample: "A fair, freely agreed exchange.", context: "Coates links 'the Dream' to a history of plunder." }
    ],

    relic: {
      name: "The Letter to His Son",
      intro: "Seven instructional reconstructions of ideas and images from the book — teaching recreations, not artwork from it. Investigate what each is, its role in the book, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "letter", name: "The Letter", image: "images/letter.webp",
          clues: ["The whole book is addressed to one reader.", "That reader is the author's teenage son.", "Coates writes to him directly, as 'you.'"],
          identify: { q: "What form does the book take?", choices: ["A long letter from Coates to his son", "A newspaper article", "A short story collection", "A legal brief"] },
          purpose: { q: "Why write to his son directly?", choices: ["To speak person-to-person, making the argument intimate and urgent", "To keep the ideas hidden", "To avoid making a point", "To entertain a wide crowd"] },
          significance: { q: "What does the letter form reveal?", choices: ["That Coates treats hard truths as an act of love and care", "That the book is fiction", "That he has nothing to say", "That letters cannot argue"] },
          reveals: "How the private form carries a public argument about America.",
          conceals: "How much Coates shapes a personal letter for many readers.",
          ace: "Articulate the book's form; connect writing to a son with speaking hard truths; extend it to why we sometimes tell the people we love the most difficult things."
        },
        {
          id: "body", name: "The Body", image: "images/body.webp",
          clues: ["Coates keeps returning to one word.", "He is concerned with what can happen to a person physically.", "He calls the Black body vulnerable in America."],
          identify: { q: "What does 'the body' mean in the book?", choices: ["The physical vulnerability of Black people in America", "A dead body in a mystery", "A group of lawmakers", "A student club"] },
          purpose: { q: "Why focus on the body?", choices: ["To keep the argument grounded in real, physical stakes, not abstractions", "To discuss exercise", "To avoid talking about race", "To describe clothing"] },
          significance: { q: "What does centering the body reveal?", choices: ["That for Coates, injustice is felt in real, physical danger", "That the body is unimportant", "That history is only ideas", "That safety is guaranteed"] },
          reveals: "Coates's insistence that history lands on real, breakable bodies.",
          conceals: "The hope some readers want that he refuses to hand them.",
          ace: "Articulate what 'the body' means; connect it to the theme of vulnerability; extend it to why keeping an argument physical can make it harder to ignore."
        },
        {
          id: "dream", name: "The Dream", image: "images/dream.webp",
          clues: ["Coates has a special, critical name for a comforting belief.", "It is the image of an innocent, perfect America.", "He argues this comfort ignores the cost paid by others."],
          identify: { q: "What is 'the Dream' in the book?", choices: ["A comforting American myth of innocence that ignores its cost to Black people", "Coates's hope for his son", "A literal dream Coates has", "A university"] },
          purpose: { q: "Why give it that name?", choices: ["To show how a pleasant story can hide an unjust history", "To praise the American Dream", "To describe sleep", "To avoid the topic"] },
          significance: { q: "What does 'the Dream' reveal about Coates's argument?", choices: ["That comfort and forgetting can be their own kind of harm", "That America has no problems", "That myths are harmless", "That history does not matter"] },
          reveals: "Coates's claim that a comforting myth can obscure real injustice.",
          conceals: "How complicated real people and communities are within any myth.",
          ace: "Articulate what 'the Dream' means; connect it to the idea of comfortable forgetting; extend it to how a pleasant story can hide an uncomfortable truth."
        },
        {
          id: "baltimore", name: "The Streets and the Schools", image: "images/baltimore.webp",
          clues: ["Coates grew up in Baltimore.", "He describes two systems ruling his young life.", "One was the danger of the streets; the other, the demands of the schools."],
          identify: { q: "What do 'the streets and the schools' represent?", choices: ["The two systems that governed Coates's childhood in Baltimore", "Two friends", "Two books", "Two cities"] },
          purpose: { q: "What is their role in the book?", choices: ["They ground his argument in the real pressures of his upbringing", "They are only background scenery", "They prove nothing", "They are invented"] },
          significance: { q: "What do the streets and schools reveal?", choices: ["How a young person can be squeezed between danger and demands, with little safety", "That childhood was carefree", "That school solved everything", "That the streets were safe"] },
          reveals: "How Coates's specific upbringing carries a larger claim about survival.",
          conceals: "The full range of joy and community that also filled his youth.",
          ace: "Articulate what the streets and schools were; connect his upbringing to his argument; extend it to how environment shapes a young person's choices."
        },
        {
          id: "mecca", name: "The Mecca (Howard)", image: "images/mecca.webp",
          clues: ["Coates attended a historically Black university.", "He calls it 'the Mecca.'", "There he discovered the depth and variety of Black life and thought."],
          identify: { q: "What does Coates mean by 'the Mecca'?", choices: ["Howard University, where his understanding of Black life expanded", "A place of worship he visits", "His childhood home", "A prison"] },
          purpose: { q: "What is the Mecca's role in the book?", choices: ["It marks his awakening to the richness and diversity of Black people", "It is where he gives up", "It is a minor detail", "It is a myth"] },
          significance: { q: "What does the Mecca reveal?", choices: ["That learning and community can transform how a person sees the world", "That college was pointless", "That Coates learned nothing", "That diversity is unimportant"] },
          reveals: "A place of intellectual awakening at the heart of the book.",
          conceals: "The ongoing questions the Mecca opened but did not answer.",
          ace: "Articulate what 'the Mecca' is; connect it to Coates's growth; extend it to how a new community can change how you understand yourself and the world."
        },
        {
          id: "prince-jones", name: "Prince Jones", image: "images/prince-jones.webp",
          clues: ["Coates had a friend at Howard.", "That friend was killed by a police officer.", "His death haunts the book and makes its dangers personal."],
          identify: { q: "Who was Prince Jones?", choices: ["Coates's friend from Howard, killed by a police officer", "A character Coates invented", "Coates's son", "A teacher"] },
          purpose: { q: "What is his role in the book?", choices: ["His killing turns Coates's argument from idea into personal grief and proof", "He provides comic relief", "He never appears", "He is a minor stranger"] },
          significance: { q: "What does Prince Jones's death reveal?", choices: ["That the danger to the body Coates describes is real and close, not abstract", "That the police always protect everyone", "That Coates exaggerates", "That the loss did not matter"] },
          reveals: "The personal loss that anchors the book's argument in real grief.",
          conceals: "The full life of the friend behind the example.",
          ace: "Articulate who Prince Jones was; connect his death to Coates's idea of the vulnerable body; extend it to how a single loss can reveal a larger pattern."
        },
        {
          id: "no-easy-hope", name: "The Refusal of Easy Hope", image: "images/no-easy-hope.webp",
          clues: ["Coates could have comforted his son with reassurance.", "Instead he chooses to be honest about hard realities.", "He wants his son to see clearly rather than feel falsely safe."],
          identify: { q: "What choice does this represent?", choices: ["Coates's decision to tell the truth rather than offer easy comfort", "A promise that everything is fine", "A refusal to write at all", "A happy ending"] },
          purpose: { q: "Why refuse easy hope?", choices: ["Because clear sight, not false comfort, is what he believes his son needs", "Because he wants his son to despair", "Because hope is illegal", "Because he has no feelings"] },
          significance: { q: "What does this refusal reveal about the book?", choices: ["That honesty can be a deeper form of love than reassurance", "That the book is hopeless", "That truth does not matter", "That comfort is always best"] },
          reveals: "Coates's belief that clear sight is a gift, even when it is hard.",
          conceals: "The tenderness underneath the book's unflinching tone.",
          ace: "Articulate Coates's choice; connect honesty to love; extend it to when telling a hard truth is more caring than offering comfort."
        }
      ]
    },

    ctob: {
      name: "The Weight of the Body",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "mc",
          prompt: "What form does Between the World and Me take?",
          options: [
            "A letter written by Coates to his teenage son.",
            "A collection of poems.",
            "A murder mystery.",
            "A science-fiction novel."
          ],
          hints: ["Think about who Coates is addressing as 'you.'", "Which option describes a letter?"]
        },
        {
          type: "word",
          prompt: "Coates calls the historically Black university he attended 'the Mecca.' Its real name is ______ University. (one word)",
          evidence: ["He attended a famous historically Black university.", "There his understanding of Black life and thought grew.", "The name begins with 'How…'."],
          hints: ["A famous HBCU in Washington, D.C.", "How…", "The university is Howard."],
          answer: "Howard"
        },
        {
          type: "word",
          prompt: "Coates grounds his whole argument in the vulnerability of the Black ______. (one word)",
          evidence: ["He keeps the danger physical and real, not abstract.", "He insists injustice is felt in a person's flesh.", "The missing word begins with 'bo…'."],
          hints: ["What can be physically harmed.", "Bo…", "The word is body."],
          answer: "body"
        },
        {
          type: "mc",
          prompt: "In the book, what does Coates mean by 'the Dream'?",
          options: [
            "A comforting American myth of innocence that ignores its cost to Black people.",
            "Coates's personal wish for wealth.",
            "A dream his son has while sleeping.",
            "A plan to move abroad."
          ],
          hints: ["It is a comforting story Coates is critical of.", "Which option describes a myth that hides a cost?"]
        },
        {
          type: "digit",
          prompt: "In what year was Between the World and Me first published? Enter the year.",
          evidence: ["It responds to events of the mid-2010s.", "It won that year's National Book Award for Nonfiction.", "The year is twenty fifteen."],
          hints: ["The mid-2010s.", "It begins with 201…", "The year is 2015."],
          answer: "2015"
        },
        {
          type: "sequence",
          prompt: "Put the arc of Coates's story in order, earliest first.",
          items: [
            "Coates grows up navigating the streets and schools of Baltimore.",
            "At Howard, 'the Mecca,' his understanding of Black life expands.",
            "His friend Prince Jones is killed by a police officer.",
            "Years later, Coates writes this letter to his son."
          ],
          hints: ["It begins with his Baltimore childhood.", "The Mecca comes before the loss of his friend.", "Writing the letter to his son is the latest step."]
        }
      ]
    },

    arcade: {
      name: "The Dream or the Reckoning?",
      instruction: "Coates contrasts 'the Dream' — a comforting story — with the honest reckoning he wants his son to face. Sort each statement: does it belong to THE DREAM (comforting myth), or to THE RECKONING Coates insists on (honest reality)? Reasoning earns the points.",
      buckets: [
        { id: "dream", label: "The Dream (comforting myth)", short: "The Dream" },
        { id: "reckoning", label: "The reckoning Coates insists on", short: "Reckoning" }
      ],
      cards: [
        { text: "America was always innocent and simply good.", bucket: "dream", why: "Part of the comforting myth Coates calls 'the Dream.'" },
        { text: "It is best not to dwell on how past wealth was built.", bucket: "dream", why: "The Dream depends on comfortable forgetting." },
        { text: "Hard work alone always guarantees safety and success.", bucket: "dream", why: "A reassuring belief the book challenges." },
        { text: "Everything is fine, so there is nothing to reckon with.", bucket: "dream", why: "The false comfort Coates refuses to offer his son." },
        { text: "The Black body has been physically vulnerable throughout U.S. history.", bucket: "reckoning", why: "A hard reality Coates insists his son must see." },
        { text: "Present-day life is still shaped by past injustice.", bucket: "reckoning", why: "Coates ties history directly to the present." },
        { text: "Prince Jones's killing showed the danger was real and close.", bucket: "reckoning", why: "A personal proof of the reckoning Coates demands." },
        { text: "Clear sight matters more than false comfort.", bucket: "reckoning", why: "The very principle behind Coates's honest letter." }
      ],
      followup: "Why does Coates refuse to comfort his son with 'the Dream'? Do you agree that clear sight can be more caring than reassurance? Defend your answer."
    },

    analysis: {
      mcq: [
        {
          q: "Between the World and Me is written as —",
          options: [
            "a letter from Ta-Nehisi Coates to his teenage son.",
            "a neutral history textbook.",
            "a fantasy novel.",
            "a set of song lyrics."
          ],
          why: "The book is an extended letter addressed directly to Coates's son."
        },
        {
          q: "When Coates writes about 'the body,' he is emphasizing —",
          options: [
            "the real, physical vulnerability of Black people in America.",
            "the importance of exercise.",
            "a body of lawmakers.",
            "a dead body in a mystery."
          ],
          why: "Coates keeps his argument grounded in physical stakes rather than abstractions."
        },
        {
          q: "'The Dream' in the book refers to —",
          options: [
            "a comforting American myth of innocence that ignores its cost to Black people.",
            "Coates's ambition to be rich.",
            "a nightmare his son has.",
            "a plan for a vacation."
          ],
          why: "Coates uses 'the Dream' to name a pleasant story that hides an unjust history."
        },
        {
          q: "Howard University, 'the Mecca,' matters in the book because —",
          options: [
            "it opened Coates to the depth and diversity of Black life and thought.",
            "it is where Coates gave up on learning.",
            "it is only mentioned once.",
            "it is an invented place."
          ],
          why: "The Mecca marks Coates's intellectual awakening and sense of community."
        },
        {
          q: "The death of Prince Jones is important because it —",
          options: [
            "makes the danger to the body personal, real, and undeniable for Coates.",
            "provides comic relief.",
            "has nothing to do with the argument.",
            "proves the police protect everyone."
          ],
          why: "His friend's killing turns Coates's argument from idea into lived grief and proof."
        }
      ],
      short: [
        "Choose one artifact from the Letter. Explain what it is and what it reveals about the book's meaning.",
        "Choose one of Coates's memories (Baltimore, Howard, or Prince Jones) and explain how it supports one of his big ideas (the body or the Dream).",
        "Coates chooses honesty over easy comfort. Do you think that is the right choice for a parent writing to a child? Explain with evidence."
      ],
      paragraph: "Write an evidence-based paragraph. Why does Coates write Between the World and Me as a letter to his son rather than as an essay to the public? What does the form add to his argument? Support your claim with specific details.",
      aceReflection: "Articulate Coates's central claim about 'the body' and 'the Dream' in your own words. Connect two parts of the book that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "An Honest Letter",
      prompt: "Coates writes an honest letter to someone he loves, refusing easy comfort in favor of clear truth. Think of a hard truth about the world that you believe a younger person should understand. In the spirit of Coates, explain what you would want them to see, why honesty matters more than comfort here, and where being honest gets complicated.",
      format: "A short, evidence-informed reflection modeled on Coates's honest-letter approach, with a note on where telling the hard truth helps and where it becomes complicated.",
      note: "This is your own reflection. Do not copy or quote Coates's words; build your own, in your own voice."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Coates means by 'the body' in Between the World and Me. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Between the World and Me. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [memory] connects to [big idea] in Between the World and Me because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Between the World and Me: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Coates's honest-letter approach to this situation: [situation]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Between the World and Me for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Between the World and Me. It supports close reading of Coates's letter to his son and his central ideas — 'the body,' 'the Dream,' and 'the Mecca' — and how personal memory (Baltimore, Howard, the death of Prince Jones) carries a larger argument. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The book is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: racism, the history of violence against Black Americans, police killings (including the death of Coates's friend Prince Jones), strong language, and frank reflection on the body. Best for grades 11–12. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the book (its form as a letter to Coates's son; the recurring focus on 'the body'; 'the Dream' as the myth of American innocence; Baltimore's streets and schools; Howard University as 'the Mecca'; the killing of Prince Jones; publication in 2015 and its National Book Award for Nonfiction). Confirm framing against your class edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III–IV / advanced ELAR TEKS (19 TAC Ch. 110) strands on author's purpose, rhetoric, memoir and the personal essay, and response to literature, with cross-curricular ties to U.S. history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.3", "RI.11-12.5", "RI.11-12.6", "W.11-12.1", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
