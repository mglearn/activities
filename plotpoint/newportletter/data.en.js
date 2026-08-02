/* PlotPoint — George Washington, "Letter to the Hebrew Congregation at Newport,
   Rhode Island" (August 1790).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1790 letter is a public-domain U.S. historical document, so
   this room may reference it directly. It is studied here as LITERATURE and RHETORIC —
   epistolary form, allusion, ethos, parallelism, tone, and theme — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC
   §110.30, Grade 7). The letter concerns religious liberty, studied academically. The
   room paraphrases and quotes only brief public-domain phrases where a close reading
   needs them. Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "newportletter",
  storageKey: "plotpoint.newportletter.v1",

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

    "nav.enter": "Enter the Letter", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Letter",
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
    "enter.readListen": "Read — free",
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "This 1790 letter is in the public domain. Use your class's copy or a verified public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Letter to Newport",
    "vocab.intro": "{n} terms that unlock the text. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Founding Desk",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the poem",
    "relic.q.significance": "What it reveals about the poem's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Founders' Promise",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the poem closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Toleration or Right?",
    "arcade.default": "Sort each idea by whether it belongs to the old idea of toleration or the new idea of liberty as a right.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Images to sort",
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
    "extend.title": "One Image, One Idea",
    "extend.format": "Format",
    "extend.evidence": "The image from the poem I am building on",
    "extend.transfers": "What transfers to another text or situation",
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
    "print.item.relic": "Founding Desk evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Toleration-vs-rights organizer",
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
    "path.complete": "Complete Study", "path.complete.time": "45–75 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, close-reading breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "Letter to the Hebrew Congregation at Newport",
      author: "George Washington",
      grades: "Grade 7",
      genre: "Letter · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole letter is discussed",
      rights: "Public domain (1790)",
      textAccess: "A short public-domain letter; use your class's copy or any public-domain text.",
      copyright: "This 1790 letter is a public-domain U.S. historical document, so this room may reference it directly. It is studied here as literature and rhetoric — its epistolary form, allusion, ethos, parallelism, and theme. The room paraphrases and quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "This letter appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. It concerns religious liberty, studied here academically as rhetoric — not as devotional or partisan instruction. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Washington's 1790 letter to Newport — a founding-era writing desk with a quill, an inkwell, a folded letter with a wax seal, and warm candlelight, suggesting a reply written by hand."
    },
    hook: "In 1790, the new United States had a Constitution but no clear answer to a hard question: would every citizen truly be free to believe as they chose? When President Washington visited Newport, Rhode Island, the Jewish congregation there welcomed him with a warm address. His short reply became a landmark of American religious liberty. In a few careful sentences, he drew a line most people had never thought to draw — between merely tolerating a group and recognizing that liberty is their inherent right. Read it as a letter, and watch how each phrase does that work.",
    goals: [
      "Understand the letter as an example of the epistolary (letter) form — a gracious reply to the congregation's welcoming address.",
      "Analyze the letter's key rhetorical distinction between 'toleration' as a favor granted and liberty of conscience as an inherent, equal right.",
      "Identify the letter's use of allusion ('vine and fig tree'), ethos, parallelism, and tone, and explain the effect of each.",
      "Interpret the letter's central theme — religious liberty as an equal right of all citizens — and why this brief document has shaped American ideas of freedom."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the difference between 'toleration' and an inherent 'right.'",
        "Discuss: is being 'tolerated' the same as being free? Who has the power in each case?"
      ],
      during: [
        "Use the Founding Desk to slow down and read the letter phrase by phrase.",
        "Track the argument: from a gracious thank-you, to the promise against bigotry, to the claim that liberty is a natural right, to the biblical wish of peace."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the toleration-versus-rights distinction and the letter's rhetoric.",
        "Complete the Extend task to carry the distinction to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the difference the letter draws between 'toleration' and an inherent 'right.' Include one phrase from the letter that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moves in the letter — for example the promise of 'to bigotry no sanction, to persecution no assistance' and the claim that liberty is a natural right. Explain how they work together to define American religious freedom." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the letter's toleration-versus-rights distinction to another text or a real situation today. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "epistolary", def: "Written in the form of a letter; relating to letters as a kind of writing.", example: "A published reply written and signed as a letter.", nonexample: "A newspaper headline or a stage play.", context: "The document is epistolary: it is Washington's letter answering the congregation." },
      { term: "allusion", def: "A brief, indirect reference to another text, person, or event that the reader is expected to recognize.", example: "Wishing everyone safety 'under his own vine and fig tree,' echoing the Bible.", nonexample: "Naming and fully explaining a source in detail.", context: "The 'vine and fig tree' line is an allusion to the prophet Micah." },
      { term: "ethos", def: "A speaker's appeal to their own credibility or authority to persuade.", example: "The President speaking for the whole new nation.", nonexample: "An appeal based only on statistics.", context: "The letter's ethos comes from Washington's standing as President." },
      { term: "rhetoric", def: "The art of using language effectively to inform or persuade an audience.", example: "Choosing exact words to redefine 'toleration.'", nonexample: "Writing with no purpose or audience in mind.", context: "The letter is studied as rhetoric — persuasion through careful word choice." },
      { term: "parallelism", def: "Repeating a grammatical structure to give balance and emphasis.", example: "'To bigotry no sanction, to persecution no assistance.'", nonexample: "Two sentences with no matching structure.", context: "The famous promise uses parallelism to make it memorable." },
      { term: "tone", def: "The writer's attitude toward the subject and audience, shown through word choice.", example: "The gracious, respectful tone of the reply.", nonexample: "A cold, insulting attitude.", context: "The letter's warm tone signals genuine respect for the congregation." },
      { term: "theme", def: "The central idea or message a text explores.", example: "Religious liberty as an equal right of all citizens.", nonexample: "A single unrelated fact in the text.", context: "The letter's theme is inherent religious liberty for all." },
      { term: "toleration", def: "Allowing a practice or belief you dislike or could forbid — treated here as a favor one group grants another.", example: "One group 'permitting' another to worship, as if by permission.", nonexample: "Treating a freedom as everyone's equal right.", context: "The letter rejects mere 'toleration' as too weak a word." },
      { term: "bigotry", def: "Stubborn, unfair intolerance toward people who differ, especially in belief.", example: "Refusing others their rights because of their religion.", nonexample: "Respecting a neighbor's different beliefs.", context: "The government, the letter promises, gives 'to bigotry no sanction.'" }
    ],

    relic: {
      name: "The Founding Desk",
      intro: "Seven instructional reconstructions of the letter's key moments and ideas — teaching recreations, not images from any edition. Investigate what each one is, its role in the letter, and what it reveals.",
      artifacts: [
        {
          id: "reply", name: "The Reply to Newport's Welcome", image: "images/reply.webp",
          clues: ["The congregation of Newport first sent Washington a warm address of welcome.", "This letter is his gracious reply, thanking them for their good wishes.", "The occasion is a real visit to Rhode Island in 1790."],
          identify: { q: "What is this document?", choices: ["Washington's letter answering the Newport congregation's welcoming address", "A speech Washington gave to Congress", "A law passed by Rhode Island", "A private diary entry"] },
          purpose: { q: "What form does this document take?", choices: ["A courteous reply-letter — the epistolary form", "A newspaper advertisement", "A court ruling", "A poem set to music"] },
          significance: { q: "Why does the occasion matter to the letter's meaning?", choices: ["A friendly exchange lets Washington define freedom warmly, as a promise to real neighbors", "It proves the letter was written by mistake", "It shows the letter is fiction", "It has no bearing on the meaning"] },
          reveals: "That the letter is a reply — a gracious answer within a real exchange.",
          conceals: "How much a warm, personal occasion shapes a national statement.",
          ace: "Articulate what makes this a reply-letter; connect the warm occasion to the letter's tone; extend it to how the audience of a message shapes its words."
        },
        {
          id: "bigotry", name: "To Bigotry No Sanction, to Persecution No Assistance", image: "images/bigotry.webp",
          clues: ["This is the letter's most quoted promise about the new government.", "The two halves are built the same way — a balanced pair.", "It says the government will not support intolerance of any kind."],
          identify: { q: "What does this famous line promise?", choices: ["The government will not support bigotry or aid persecution", "The government will fund one religion", "The government will stay silent on the issue", "The government will punish the congregation"] },
          purpose: { q: "What rhetorical device gives the line its force?", choices: ["Parallelism — two balanced phrases that echo each other", "Rhyme at the end of each line", "A question left unanswered", "An invented word"] },
          significance: { q: "Why make this the government's promise, not just a wish?", choices: ["It frames non-persecution as a duty of the state, not a personal opinion", "It shows the government is undecided", "It applies only to Newport", "It cancels the Constitution"] },
          reveals: "A memorable, balanced promise binding the government against intolerance.",
          conceals: "How the parallel structure makes the promise easy to remember and quote.",
          ace: "Articulate the promise; connect its two balanced halves; extend it to another famous line whose structure makes it stick."
        },
        {
          id: "toleration", name: "Toleration vs. Inherent Rights", image: "images/toleration.webp",
          clues: ["The letter says it is no longer enough to speak of mere 'toleration.'", "'Toleration' would treat freedom as a favor one group grants another.", "The letter insists all citizens hold this freedom equally, by right."],
          identify: { q: "What distinction does the letter draw here?", choices: ["Between 'toleration' as a favor and liberty as an inherent right", "Between two different holidays", "Between reading and writing", "Between summer and winter"] },
          purpose: { q: "Why does the letter reject the word 'toleration'?", choices: ["Because it implies freedom is granted by one group's indulgence, not owned equally", "Because it is too long a word", "Because it means the same as persecution", "Because no one used it in 1790"] },
          significance: { q: "What does calling freedom a 'right' change?", choices: ["It makes freedom belong to everyone equally, not depend on another's permission", "It makes freedom a temporary gift", "It limits freedom to one group", "It removes freedom entirely"] },
          reveals: "The crucial rhetorical move at the heart of the letter.",
          conceals: "How a single word choice can redefine what freedom means.",
          ace: "Articulate the toleration-versus-rights distinction; connect it to who holds the power in each case; extend it to a modern debate where the same distinction matters."
        },
        {
          id: "conscience", name: "Liberty of Conscience as a Natural Right", image: "images/conscience.webp",
          clues: ["The letter treats freedom of belief as belonging to people by nature.", "It is not a favor handed down by a ruler or a majority.", "Because it is inherent, it belongs to every citizen equally."],
          identify: { q: "How does the letter describe liberty of conscience?", choices: ["As an inherent natural right, not a favor granted by anyone", "As a reward for good behavior", "As a privilege only for leaders", "As something the government may cancel"] },
          purpose: { q: "What role does 'natural right' play in the argument?", choices: ["It grounds religious freedom in something no ruler can rightly take away", "It makes the freedom smaller", "It applies only to Washington", "It contradicts the letter's promise"] },
          significance: { q: "Why does calling it 'inherent' matter so much?", choices: ["A right that is inherent belongs to all equally and does not depend on permission", "An inherent right is easier to remove", "It means only the congregation is free", "It has no effect on citizens"] },
          reveals: "The letter's foundation: freedom as something people already possess.",
          conceals: "How grounding freedom in nature strengthens the whole argument.",
          ace: "Articulate what 'natural right' means here; connect it to the rejection of 'toleration'; extend it to why the source of a freedom changes how secure it feels."
        },
        {
          id: "abraham", name: "The Children of the Stock of Abraham", image: "images/abraham.webp",
          clues: ["This is the letter's respectful way of addressing the Jewish community.", "It honors the congregation's own heritage and identity.", "It sets up the peaceful biblical wish that follows."],
          identify: { q: "Who does this phrase address?", choices: ["The Jewish congregation of Newport, named with respect", "The members of Congress", "Soldiers in the army", "The whole population of Europe"] },
          purpose: { q: "What does this respectful address accomplish?", choices: ["It honors the congregation's identity and keeps the letter's warm, courteous tone", "It insults the congregation", "It changes the subject", "It ends the letter abruptly"] },
          significance: { q: "How does naming them this way fit the letter's theme?", choices: ["It treats a specific community as full equals, matching the claim of equal rights", "It sets them apart as lesser", "It removes them from the nation", "It has no link to the theme"] },
          reveals: "The letter's respectful, personal address to a specific community.",
          conceals: "How honoring identity supports the argument for equal belonging.",
          ace: "Articulate what this address shows about tone; connect it to the theme of equal rights; extend it to how naming a group with respect can shape a message."
        },
        {
          id: "vine", name: "Vine and Fig Tree, None to Make Him Afraid", image: "images/vine.webp",
          clues: ["Washington wishes everyone may sit 'under his own vine and fig tree.'", "He adds that 'there shall be none to make him afraid.'", "The words echo the Bible — the prophet Micah."],
          identify: { q: "What does the 'vine and fig tree' image picture?", choices: ["Everyone safe and at peace on their own land, unafraid", "A battlefield after a war", "A crowded marketplace", "A locked prison"] },
          purpose: { q: "What literary device is this line?", choices: ["An allusion — a reference to a well-known biblical passage (Micah)", "A pun on two meanings", "A rhyme scheme", "A stage direction"] },
          significance: { q: "Why end the argument with this borrowed image?", choices: ["It pictures the letter's promise as safety and peace shared by all, in familiar words", "It hides the letter's meaning", "It contradicts the promise of freedom", "It names one of Washington's tools"] },
          reveals: "The letter's vision of freedom pictured as everyone safe and unafraid.",
          conceals: "How an allusion lets a few words carry a large, shared meaning.",
          ace: "Articulate what the vine-and-fig-tree image shows; connect it to the letter's promise; extend it to how a borrowed image can make an idea feel familiar."
        },
        {
          id: "promise", name: "The New Nation's Promise", image: "images/promise.webp",
          clues: ["Taken together, the letter's phrases form a founding statement.", "It promises equal religious freedom as the settled policy of the United States.", "It closes with good wishes for the congregation's happiness."],
          identify: { q: "What larger promise does the whole letter make?", choices: ["Equal religious freedom for all citizens as a settled American principle", "A tax on one religion", "A plan to leave Rhode Island", "A warning against the congregation"] },
          purpose: { q: "Whose authority stands behind this promise?", choices: ["The President speaking for the new nation — an appeal to ethos", "A single anonymous citizen", "A foreign king", "No one in particular"] },
          significance: { q: "Why has this short letter lasted so long?", choices: ["It states equal religious liberty clearly, early, and memorably at the nation's start", "It is the longest founding document", "It was never actually sent", "It applied for only one day"] },
          reveals: "The letter as a founding statement of equal religious freedom.",
          conceals: "How much national meaning a brief, courteous reply can carry.",
          ace: "Articulate the letter's overall promise; connect it to Washington's authority as President; extend it to why a clear statement early on can shape a whole tradition."
        }
      ]
    },

    ctob: {
      name: "The Founders' Promise",
      intro: "Six locks. Every answer is inferable from the letter and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The letter says it is no longer enough to speak of mere ______, as if freedom were a favor one group grants another. (one word)",
          evidence: ["The letter treats this word as too weak.", "It suggests freedom is 'permitted' rather than owned by right.", "The word begins with 'toler…'."],
          hints: ["It means allowing something you could forbid.", "Toler…", "The word is toleration."],
          answer: "toleration"
        },
        {
          type: "mc",
          prompt: "'To bigotry no sanction, to persecution no assistance' mainly promises that the government will —",
          options: [
            "not support intolerance or aid the persecution of any group.",
            "fund a single official religion.",
            "stay completely silent about religion.",
            "punish the Newport congregation."
          ],
          hints: ["Look at what 'no sanction' and 'no assistance' mean together.", "The line is a promise against intolerance."]
        },
        {
          type: "mc",
          prompt: "The letter describes liberty of conscience chiefly as —",
          options: [
            "an inherent natural right that belongs to all citizens equally.",
            "a temporary favor the government may cancel.",
            "a privilege reserved for leaders.",
            "a reward earned through good behavior."
          ],
          hints: ["The letter rejects the idea that freedom is granted by permission.", "Think about the word 'inherent' — something you already possess."]
        },
        {
          type: "digit",
          prompt: "The letter's famous biblical wish names TWO plants a person may sit safely under. How many plants are named? Enter the number.",
          evidence: ["The image is 'his own vine and fig tree.'", "Count the kinds of plant named in that phrase.", "A vine is one; a fig tree is another."],
          hints: ["List the plants: a vine, and a fig tree.", "One plus one.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the moves of the letter in the order they appear, earliest first.",
          items: [
            "A gracious thank-you for the congregation's welcome.",
            "The promise: 'to bigotry no sanction, to persecution no assistance.'",
            "The claim that liberty of conscience is an inherent right, not mere toleration.",
            "The biblical wish that all may sit safely under their own vine and fig tree."
          ],
          hints: ["The letter opens by thanking the congregation.", "The government's promise comes before the deeper claim about rights.", "The vine-and-fig-tree wish closes the argument."]
        },
        {
          type: "mc",
          prompt: "The letter's authority to speak for the whole nation comes mainly from —",
          options: [
            "Washington's standing as President — an appeal to ethos.",
            "a long list of statistics.",
            "the rhymes at the ends of its lines.",
            "a threat of punishment."
          ],
          hints: ["Ask who is writing and what office he holds.", "Ethos is an appeal based on the speaker's credibility."]
        }
      ]
    },

    arcade: {
      name: "Toleration or Right?",
      instruction: "Washington's letter replaces an old idea with a new one. Sort each statement by which idea it belongs to: the OLD idea — toleration, a favor one group grants another — or the NEW idea — liberty as a right, equal for all. Reasoning earns the points.",
      buckets: [
        { id: "toleration", label: "The old idea: toleration (a favor granted)", short: "Toleration" },
        { id: "right", label: "The new idea: liberty as a right (equal for all)", short: "Right" }
      ],
      cards: [
        { text: "One group 'permits' another to worship, as if by kind permission.", bucket: "toleration", why: "Toleration treats freedom as something granted by those in power." },
        { text: "Freedom of belief can be withdrawn if the majority changes its mind.", bucket: "toleration", why: "A favor granted can be taken back — that is toleration, not a right." },
        { text: "A ruler 'allows' a minority to exist, out of generosity.", bucket: "toleration", why: "Framing freedom as generosity keeps the power with the ruler." },
        { text: "Being merely tolerated means depending on another group's goodwill.", bucket: "toleration", why: "Dependence on goodwill is exactly what the letter rejects." },
        { text: "Liberty of conscience belongs to every citizen equally, by nature.", bucket: "right", why: "An inherent, equal claim is a right, not a favor." },
        { text: "The government gives 'to bigotry no sanction, to persecution no assistance.'", bucket: "right", why: "A binding promise against persecution protects a right, not a permission." },
        { text: "No one needs another group's permission to be free.", bucket: "right", why: "A right does not depend on anyone's indulgence." },
        { text: "Freedom of belief is inherent and cannot rightly be taken away.", bucket: "right", why: "What is inherent belongs to people already — the mark of a right." }
      ],
      followup: "The letter deliberately trades the word 'toleration' for the language of inherent rights. What does that single change say about who truly holds freedom in the new nation — and why did the exact word matter?"
    },

    analysis: {
      mcq: [
        {
          q: "The central rhetorical move of the letter is to replace 'toleration' with —",
          options: [
            "the idea of liberty as an inherent right, equal for all citizens.",
            "the idea of a single official state religion.",
            "the idea that freedom is a reward for loyalty.",
            "the idea that only leaders may worship freely."
          ],
          why: "The letter argues freedom is not a favor granted but a right all citizens already hold."
        },
        {
          q: "'To bigotry no sanction, to persecution no assistance' is memorable largely because it uses —",
          options: [
            "parallelism — two balanced phrases that echo each other.",
            "a rhyming couplet.",
            "an invented word.",
            "a question left open."
          ],
          why: "The matched grammatical structure of the two halves is parallelism, which makes the promise stick."
        },
        {
          q: "The wish that all may sit 'under his own vine and fig tree' is an example of —",
          options: [
            "allusion — a reference to a well-known biblical passage.",
            "a simile using 'like' or 'as.'",
            "a pun on two meanings.",
            "a stage direction."
          ],
          why: "The phrase alludes to the Bible (Micah), letting a few words carry a shared image of peace."
        },
        {
          q: "The letter's authority to speak for the nation rests mainly on —",
          options: [
            "ethos — Washington's credibility as President.",
            "a list of statistics.",
            "an emotional threat.",
            "a rhyme scheme."
          ],
          why: "As President, Washington speaks for the new government, an appeal based on his standing (ethos)."
        },
        {
          q: "The overall theme of the letter is best stated as —",
          options: [
            "religious liberty as an equal, inherent right of all citizens.",
            "the importance of winning wars.",
            "the beauty of the Rhode Island coast.",
            "the duties of a shepherd to a flock."
          ],
          why: "Every part of the letter builds toward equal, inherent religious freedom for all."
        }
      ],
      short: [
        "Choose one moment from the Founding Desk. Explain what it shows and what it reveals about the letter's meaning.",
        "The letter refuses to call freedom mere 'toleration.' Explain the difference between toleration and an inherent right, and why the word choice matters.",
        "Explain how the 'vine and fig tree' allusion works. How does borrowing a familiar biblical image change the feeling of the letter's promise?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Washington's letter use rhetoric — its word choice, parallelism, allusion, and ethos — to redefine religious freedom as a right rather than a favor? Make a claim and support it with specific phrases from the letter.",
      aceReflection: "Articulate what the letter suggests about the difference between toleration and rights, in your own words. Connect two of the letter's rhetorical moves that develop that idea. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Toleration or Right?",
      prompt: "Washington's letter turns on one sharp distinction: being merely 'tolerated' by others versus holding a freedom as an inherent right. Choose another text, speech, or real situation where that same distinction matters — where the question is whether a freedom is granted as a favor or owned as a right. Explain the connection with evidence: what is the freedom, who claims to grant it, and where does the comparison to Washington's letter start to break down?",
      format: "A short evidence-based comparison connecting the letter's toleration-versus-rights distinction to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Washington's Letter to the Hebrew Congregation at Newport distinguishes 'toleration' from an inherent right. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Washington's letter to Newport. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [rhetorical move one] connects to [rhetorical move two] in Washington's letter because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the letter." },
      { title: "Evidence prompt", text: "Here is my claim about Washington's letter to Newport: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the letter's toleration-versus-rights distinction to another text or situation: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Washington's letter to Newport for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of George Washington's 1790 Letter to the Hebrew Congregation at Newport, Rhode Island, as a short work of rhetoric — a study of the epistolary form, the toleration-versus-rights distinction, allusion, ethos, parallelism, tone, and theme. The letter is a public-domain U.S. historical document, so it may be referenced directly and this room reproduces no copyrighted edition. It is presented as literature and rhetoric in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "This letter appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The letter is a public-domain U.S. historical document (1790), so it satisfies any identical-text requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric. Present the letter's epistolary form, its key distinction between toleration and inherent rights, and its use of allusion, ethos, parallelism, tone, and theme. It concerns religious liberty, studied academically, not as devotional or partisan instruction.",
        "Anchors here were fact-checked against the letter (the reply to Newport's welcoming address; 'to bigotry no sanction, to persecution no assistance'; the rejection of mere 'toleration' in favor of inherent rights; liberty of conscience as a natural right; 'the children of the Stock of Abraham'; the allusion to 'his own vine and fig tree' with 'none to make him afraid,' echoing Micah). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 7 ELAR TEKS (19 TAC Ch. 110) strands on author's purpose and rhetorical devices, textual evidence, and theme — especially the analysis of rhetoric in an argumentative/informational text, allusion, and diction. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.7.1", "RI.7.2", "RI.7.4", "RI.7.5", "RI.7.6", "W.7.1", "SL.7.1", "L.7.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
