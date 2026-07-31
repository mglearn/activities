/* PlotPoint — Narrative of the Life of Frederick Douglass (1845).  English source.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details were verified against the
   public-domain 1845 Narrative. Standards are real, applicable Common Core codes
   flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "douglass",
  storageKey: "plotpoint.douglass.v1",

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
    "enter.readListenNote": "This work is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Narrative",
    "vocab.intro": "{n} terms that unlock the Narrative. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Path to Literacy",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the Narrative",
    "relic.q.significance": "What it reveals about the book's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Pathway from Slavery to Freedom",
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
    "arcade.title": "Chains and Keys",
    "arcade.default": "Sort each thing by what it did in Douglass's life.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
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
    "extend.title": "The Power of the Word",
    "extend.format": "Format",
    "extend.evidence": "The idea from the Narrative I am building on",
    "extend.transfers": "What transfers to the present",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
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
    "print.item.relic": "Relic Room evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Power-of-the-word organizer",
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
      title: "Narrative of the Life of Frederick Douglass",
      author: "Frederick Douglass",
      grades: "Grades 9–12",
      genre: "Autobiography · Nonfiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "1845 first edition is public domain",
      textAccess: "Students need a public-domain edition of the 1845 Narrative. This room does not reproduce the text.",
      copyright: "The 1845 first edition is public domain; some annotated or abridged editions carry their own copyright. Verify your edition.",
      contentNote: "A firsthand account of American slavery that describes its brutality, including violence and whippings. It is a foundational American text; preview carefully, prepare students, and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/23",
      audio: "https://librivox.org/narrative-of-the-life-of-frederick-douglass-by-frederick-douglass/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Douglass's Narrative — an open primer and a broken chain in morning light."
    },
    hook: "Born into slavery in Maryland, forbidden even to learn the alphabet, Frederick Douglass discovered that reading was 'the pathway from slavery to freedom' — and turned the word into a weapon against the system that tried to keep him silent.",
    goals: [
      "Understand the Narrative as a firsthand argument against slavery by a formerly enslaved author.",
      "Trace how literacy becomes, for Douglass, the pathway from slavery to freedom.",
      "Analyze how slavery dehumanized the enslaved and corrupted enslavers, and how Douglass reclaimed his dignity.",
      "Reflect on and transfer Douglass's argument about knowledge, power, and freedom to the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a slave narrative as testimony and argument.",
        "Discuss: Why might those in power try to keep others from learning to read and write?"
      ],
      during: [
        "Use the Path to Literacy to examine one turning point at a time.",
        "Track how each step — learning, resisting, escaping — changes Douglass and his sense of freedom."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect Douglass's argument to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Douglass calls reading 'the pathway from slavery to freedom.' Include one detail from the Narrative that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments from the Narrative (for example, learning to read and standing up to Covey). Explain how together they show Douglass's road toward freedom." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Douglass's argument about knowledge and power to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "slavery", def: "The system of holding people as property and forcing them to labor without freedom or pay.", example: "People bought, sold, and forced to work.", nonexample: "A worker free to quit and be paid.", context: "Douglass was born into slavery in Maryland." },
      { term: "abolitionist", def: "A person who worked to end slavery.", example: "A speaker demanding freedom for the enslaved.", nonexample: "A person defending slavery.", context: "Douglass became a famous abolitionist writer and speaker." },
      { term: "narrative", def: "A true or told account of connected events; here, an autobiography.", example: "A first-person story of one's own life.", nonexample: "A list of unrelated facts.", context: "His Narrative tells the story of his life in his own words." },
      { term: "literacy", def: "The ability to read and write.", example: "Learning the alphabet and then whole books.", nonexample: "Being forbidden to read at all.", context: "Literacy is the turning point of Douglass's whole story." },
      { term: "dehumanize", def: "To treat people as less than human.", example: "Denying people names, families, or the right to learn.", nonexample: "Treating everyone with dignity.", context: "Slavery dehumanized the enslaved — and, Douglass shows, corrupted enslavers too." },
      { term: "resistance", def: "Standing against or refusing to submit to oppression.", example: "Refusing to be beaten again.", nonexample: "Silently accepting every cruelty.", context: "Douglass's fight with Covey is a turning point of resistance." },
      { term: "emancipation", def: "The act of being set free from slavery or control.", example: "Gaining one's freedom.", nonexample: "Being forced back into bondage.", context: "Douglass's escape is his own emancipation." },
      { term: "hypocrisy", def: "Claiming to hold values one does not actually practice.", example: "Preaching kindness while owning slaves.", nonexample: "Practicing what you preach.", context: "Douglass exposes the hypocrisy of 'Christian' slaveholders." },
      { term: "dignity", def: "The sense that a person deserves respect and worth.", example: "Refusing to be treated as property.", nonexample: "Being reduced to a tool.", context: "By resisting, Douglass reclaims his dignity." },
      { term: "testimony", def: "A firsthand account offered as evidence of the truth.", example: "A witness telling what they saw and lived.", nonexample: "A secondhand rumor.", context: "The Narrative is Douglass's testimony against slavery." }
    ],

    relic: {
      name: "The Path to Literacy",
      intro: "Seven instructional reconstructions of objects and moments from Douglass's Narrative — teaching recreations, not artwork from any edition. Investigate what each is, its role in the book, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "primer", name: "The Spelling Book", image: "images/primer.webp",
          clues: ["In Baltimore, his mistress Sophia Auld begins teaching him the alphabet.", "Her husband forbids it, saying learning would ruin an enslaved person.", "Douglass keeps learning in secret, from white children and any scrap of print."],
          identify: { q: "What is this?", choices: ["A spelling book — how Douglass secretly learns to read", "A ship's logbook", "A church hymnal", "A shopping list"] },
          purpose: { q: "What is its role in the Narrative?", choices: ["Learning to read opens Douglass's mind to the injustice of slavery", "It teaches him to farm", "It records his wages", "It maps the coast"] },
          significance: { q: "What does the ban on reading reveal?", choices: ["Enslavers feared literacy because knowledge could lead to freedom", "That reading is unimportant", "That the Aulds were poor", "That Douglass disliked books"] },
          reveals: "That those in power tried to keep the enslaved from reading precisely because it was dangerous to slavery.",
          conceals: "The daily risk and effort Douglass took to learn in secret.",
          ace: "Articulate why the reading ban existed; connect literacy to freedom; extend it to why access to knowledge still matters today."
        },
        {
          id: "orator", name: "The Columbian Orator", image: "images/orator.webp",
          clues: ["As a boy, Douglass gets hold of a book of speeches called 'The Columbian Orator.'", "It contains powerful arguments about liberty and against slavery.", "Reading it gives words to feelings he already had."],
          identify: { q: "What is this book?", choices: ["'The Columbian Orator,' a book of speeches on liberty", "His own diary", "A book of law", "A sailor's manual"] },
          purpose: { q: "What is its role in the Narrative?", choices: ["It sharpens Douglass's understanding of liberty and the power of argument", "It teaches him to swim", "It pays his debts", "It maps his escape"] },
          significance: { q: "What does it show about reading?", choices: ["Books can give a reader the language and reasons to seek freedom", "That books are only entertainment", "That reading is dangerous nonsense", "That speeches do not matter"] },
          reveals: "How the written and spoken word shaped Douglass's mind and future as an orator.",
          conceals: "How rare and precious such a book was for someone forbidden to read.",
          ace: "Articulate what the Orator gives Douglass; connect reading to finding one's voice; extend it to a book or idea that changed how you see the world."
        },
        {
          id: "shipyard", name: "The Baltimore Shipyard", image: "images/shipyard.webp",
          clues: ["In Baltimore, Douglass learns a skilled trade in the shipyards.", "He earns wages for his hard, skilled labor.", "But the money he earns is taken from him by the man who claims to own him."],
          identify: { q: "What is this place?", choices: ["The Baltimore shipyard where Douglass does skilled, paid labor", "A cotton field", "A schoolhouse", "A courthouse"] },
          purpose: { q: "What is its role in the Narrative?", choices: ["It shows Douglass earning wages that are seized by his enslaver", "It is where he learns to read", "It is where he is born", "It is where he preaches"] },
          significance: { q: "What does the seized wage reveal?", choices: ["The core injustice of slavery — taking the fruits of a person's own labor", "That shipwork is easy", "That Douglass was lazy", "That Baltimore was free"] },
          reveals: "The plain economic theft at the heart of slavery.",
          conceals: "How close such skilled, city labor could bring an enslaved person to the idea of freedom.",
          ace: "Articulate what happens to Douglass's wages; connect stolen labor to the wrong of slavery; extend it to why fair pay for work matters."
        },
        {
          id: "covey", name: "The Turning Point with Covey", image: "images/covey.webp",
          clues: ["Douglass is sent to Edward Covey, a man known for breaking the spirit of the enslaved.", "After months of brutal treatment, Douglass decides he will not be beaten again.", "He stands up to Covey physically — and is never whipped afterward."],
          identify: { q: "What does this turning point mark?", choices: ["Douglass resisting the slave-breaker Covey and refusing further beatings", "A friendly wrestling match", "A day of rest", "A church service"] },
          purpose: { q: "What is its role in the Narrative?", choices: ["It is the moment Douglass reclaims his sense of dignity and will", "It teaches him a trade", "It records his wages", "It maps his escape"] },
          significance: { q: "What does it reveal?", choices: ["Resistance can restore a person's spirit even before they are legally free", "That violence solves everything", "That Covey was kind", "That Douglass gave up"] },
          reveals: "That Douglass's freedom begins inwardly, with the refusal to be broken.",
          conceals: "The great danger such resistance carried for an enslaved person.",
          ace: "Articulate why this moment matters to Douglass; connect resistance to dignity; extend it to what it means to refuse to be broken by unjust treatment."
        },
        {
          id: "road", name: "The Road North", image: "images/road.webp",
          clues: ["After years of planning, Douglass escapes from slavery to the free North.", "In the Narrative he deliberately does not explain exactly how he escaped.", "He withholds the method to protect others still seeking their freedom."],
          identify: { q: "What does this road represent?", choices: ["Douglass's escape from slavery to freedom in the North", "A trade route for goods", "A path to church", "A road to the shipyard"] },
          purpose: { q: "Why does Douglass withhold the details of his escape?", choices: ["To protect others still enslaved and the routes they might use", "Because he forgot", "Because it was boring", "To make the book longer"] },
          significance: { q: "What does that choice reveal?", choices: ["Even in telling his story, Douglass acts to protect others seeking freedom", "That he never really escaped", "That the escape was easy", "That details do not matter"] },
          reveals: "Douglass's care for others still enslaved, even as he tells his own story.",
          conceals: "The exact, dangerous method of his escape — kept secret on purpose.",
          ace: "Articulate why Douglass hides the method; connect his silence to protecting others; extend it to a time telling the whole truth could put others at risk."
        },
        {
          id: "narrative", name: "The Narrative Itself", image: "images/narrative.webp",
          clues: ["Once free, Douglass writes the story of his life.", "He puts his real name and facts on the page, at great personal risk.", "The book becomes powerful evidence in the fight against slavery."],
          identify: { q: "What is this book?", choices: ["The Narrative Douglass writes and publishes about his own life", "A novel he invented", "A book of poems", "A stranger's diary"] },
          purpose: { q: "What is its role?", choices: ["To testify to the reality of slavery and argue for its end", "To entertain with adventure", "To record recipes", "To sell goods"] },
          significance: { q: "What does writing it reveal?", choices: ["Douglass turns the very literacy slavery forbade into a weapon against it", "That writing is easy", "That his story is fiction", "That words have no power"] },
          reveals: "The full circle: the forbidden skill of reading and writing becomes Douglass's greatest tool.",
          conceals: "The danger of publishing his true name and story while others hunted the formerly enslaved.",
          ace: "Articulate what the Narrative accomplishes; connect literacy to the power to testify; extend it to how telling a true story can change minds today."
        },
        {
          id: "chain", name: "The Broken Chain", image: "images/chain.webp",
          clues: ["Douglass's story moves from bondage toward freedom.", "The chains that once held him are, in the end, broken.", "Yet he keeps working so that others may be free too."],
          identify: { q: "What does the broken chain represent?", choices: ["Douglass's journey from slavery to freedom", "A tool for the shipyard", "A decoration", "A punishment"] },
          purpose: { q: "What is its role as a symbol?", choices: ["To mark the movement from bondage to freedom in his life and work", "To hold a boat", "To lock a door", "To measure weight"] },
          significance: { q: "What does it stand for beyond Douglass himself?", choices: ["The larger fight to end slavery for everyone, which he joined", "That chains cannot be broken", "That freedom is only personal", "That the past is forgotten"] },
          reveals: "That Douglass's personal freedom fueled a public fight for the freedom of all.",
          conceals: "How much work remained — and remains — after any single person is freed.",
          ace: "Articulate what the broken chain means; connect personal freedom to a wider cause; extend it to how one person's freedom can serve others."
        }
      ]
    },

    ctob: {
      name: "The Pathway from Slavery to Freedom",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In which U.S. state was Frederick Douglass born into slavery? (one word)",
          evidence: ["Douglass was born on the Eastern Shore, in Talbot County.", "It was a slave state before the Civil War.", "The state's name begins with 'Mary…'."],
          hints: ["A state on the Atlantic coast.", "Mary…", "The state is Maryland."],
          answer: "Maryland"
        },
        {
          type: "mc",
          prompt: "Douglass calls learning to read 'the pathway from slavery to freedom' because —",
          options: [
            "literacy let him understand his condition and imagine and pursue freedom.",
            "reading was required to get a job.",
            "books were worth a lot of money.",
            "his enslaver wanted him to read."
          ],
          hints: ["Think about what reading opened up in his mind.", "Which option is about understanding and seeking freedom?"]
        },
        {
          type: "word",
          prompt: "As a boy, Douglass was deeply shaped by a book of speeches called 'The Columbian ______.' (one word)",
          evidence: ["The book was full of powerful speeches about liberty.", "It gave Douglass language for his longing to be free.", "Its title word means a skilled public speaker."],
          hints: ["Someone who gives powerful speeches.", "It begins with 'Ora…'.", "The word is Orator."],
          answer: "Orator"
        },
        {
          type: "mc",
          prompt: "Douglass's fight with the slave-breaker Covey is a turning point because —",
          options: [
            "by resisting, he reclaims his dignity and is never whipped again.",
            "he wins a prize.",
            "Covey becomes his friend.",
            "he is immediately set free."
          ],
          hints: ["Focus on what changes in Douglass, and in his treatment, afterward.", "Which option is about dignity and no more whippings?"]
        },
        {
          type: "sequence",
          prompt: "Put the stages of Douglass's life in the Narrative in order, earliest first.",
          items: [
            "Douglass is born into slavery in Maryland.",
            "He secretly learns to read and write.",
            "He resists the brutal slave-breaker Covey.",
            "He escapes to the North and becomes an abolitionist writer and speaker."
          ],
          hints: ["It begins with his birth into slavery.", "Learning to read comes before the fight with Covey.", "Becoming a writer and speaker comes last."]
        },
        {
          type: "digit",
          prompt: "In what year did Douglass first publish his Narrative? Enter the year.",
          evidence: ["Douglass wrote his life story after escaping to freedom.", "It appeared in the 1840s, before the Civil War.", "The year was eighteen forty-five."],
          hints: ["In the 1840s.", "It begins with 184…", "The year is 1845."],
          answer: "1845"
        }
      ]
    },

    arcade: {
      name: "Chains and Keys",
      instruction: "The Narrative shows both the tools slavery used to keep people down and the steps by which Douglass reached toward freedom. Sort each thing: was it a CHAIN OF SLAVERY (something that kept people enslaved) or a KEY TO FREEDOM (part of Douglass's path out)? Reasoning earns the points.",
      buckets: [
        { id: "chain", label: "A chain of slavery", short: "Chain" },
        { id: "key", label: "A key to freedom", short: "Key" }
      ],
      cards: [
        { text: "Forbidding enslaved people to read or write", bucket: "chain", why: "Keeping people from literacy was a deliberate tool of control." },
        { text: "Brutal whippings meant to instill fear", bucket: "chain", why: "Violence and terror were used to keep the enslaved obedient." },
        { text: "Separating children from their mothers", bucket: "chain", why: "Breaking families was a cruelty that weakened resistance." },
        { text: "Seizing the wages a person earned", bucket: "chain", why: "Taking the fruits of a person's labor is the theft at slavery's core." },
        { text: "Secretly learning to read and write", bucket: "key", why: "Literacy is Douglass's 'pathway from slavery to freedom.'" },
        { text: "The ideas of liberty in the Columbian Orator", bucket: "key", why: "The book gave Douglass language and reasons to seek freedom." },
        { text: "Standing up to the slave-breaker Covey", bucket: "key", why: "Resistance restored Douglass's dignity and will." },
        { text: "Escaping north and telling his story", bucket: "key", why: "His escape and his Narrative carried his fight against slavery." }
      ],
      followup: "Notice that literacy is both feared by enslavers and sought by Douglass. Why is access to reading, writing, and information so closely tied to freedom and power?"
    },

    analysis: {
      mcq: [
        {
          q: "The Narrative is best described as —",
          options: [
            "a firsthand autobiography that argues against slavery.",
            "an invented adventure novel.",
            "a collection of unrelated poems.",
            "a neutral history textbook."
          ],
          why: "Douglass writes his own true story as testimony and argument against the system of slavery."
        },
        {
          q: "For Douglass, learning to read is so important because it —",
          options: [
            "opens his mind to the injustice of slavery and the possibility of freedom.",
            "helps him earn more money.",
            "is required by law.",
            "is demanded by his enslaver."
          ],
          why: "Literacy lets Douglass understand his condition and see a path toward freedom — the book's central idea."
        },
        {
          q: "When Sophia Auld changes from kind to harsh after being forbidden to teach Douglass, it shows that slavery —",
          options: [
            "corrupts and damages the enslavers as well as the enslaved.",
            "has no effect on enslavers.",
            "makes everyone kinder.",
            "is good for families."
          ],
          why: "Douglass shows how the system deforms even those who seemed kind, harming enslaver and enslaved alike."
        },
        {
          q: "Douglass's decision not to reveal how he escaped shows that he —",
          options: [
            "wants to protect others still enslaved and the routes to freedom.",
            "forgot the details.",
            "did not really escape.",
            "found the escape unimportant."
          ],
          why: "He deliberately withholds the method so that others can still use such paths to freedom."
        },
        {
          q: "A central argument of the Narrative is that —",
          options: [
            "knowledge and the written word are powerful tools against oppression.",
            "reading is a waste of time.",
            "slavery was mild and harmless.",
            "no one can ever change their situation."
          ],
          why: "Douglass turns the very literacy slavery forbade into his greatest weapon against it."
        }
      ],
      short: [
        "Choose one artifact from the Path to Literacy. Explain what it is and what it reveals about Douglass's road to freedom.",
        "Explain why Douglass's enslavers feared teaching him to read. What does that fear reveal about the link between knowledge and power?",
        "The fight with Covey changes Douglass even though he is not yet legally free. What does this suggest about the difference between outer and inner freedom?"
      ],
      paragraph: "Write an evidence-based paragraph. Douglass argues that literacy is 'the pathway from slavery to freedom.' Using specific details from the Narrative, explain how reading and writing become the source of his freedom — and why that made them so dangerous to slavery.",
      aceReflection: "Articulate Douglass's central argument about knowledge and freedom. Connect two moments that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Power of the Word",
      prompt: "Douglass shows that reading, writing, and information are sources of freedom and power — which is exactly why slavery tried to withhold them. Choose a present-day situation where access to knowledge, education, or information affects people's freedom or power (for example, access to books, the internet, or education). Build an argument, in Douglass's spirit, about why that access matters.",
      format: "A short evidence-based argument connecting Douglass's idea about knowledge and freedom to a present-day situation, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Douglass calls reading 'the pathway from slavery to freedom.' Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Douglass's Narrative. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in the Narrative because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Douglass's Narrative: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Douglass's idea about knowledge and freedom to today: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Douglass's Narrative for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Douglass's 1845 Narrative as testimony and argument: literacy as the pathway to freedom, the dehumanizing system of slavery, the turning point with Covey, and the power of the written word. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The 1845 first edition is public domain; some annotated or abridged classroom editions carry their own copyright.",
        "Mature content: the Narrative describes the violence of slavery, including whippings. It is a foundational American text; preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the 1845 text (born in Talbot County, Maryland; 'the pathway from slavery to freedom'; 'The Columbian Orator'; Sophia Auld; the slave-breaker Edward Covey and 'never whipped' afterward; Douglass's deliberate withholding of the escape method). Confirm against your class edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, argument, and author's-purpose strands, with cross-curricular ties to U.S. history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.3", "RI.9-10.6", "RH.9-10.2", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
