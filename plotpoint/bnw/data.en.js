/* PlotPoint — Brave New World (Aldous Huxley).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; details were verified against the novel and are
   used only to build original, transformative analysis. Standards are good-faith
   Common Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "bnw",
  storageKey: "plotpoint.bnw.v1",

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
    "enter.readListenNote": "This is a copyrighted novel; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Brave New World",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The World State Systems Lab",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the novel",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Forbidden Book",
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
    "arcade.title": "The Price of Stability",
    "arcade.default": "Sort each thing by what the World State does with it.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
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
    "extend.title": "Comfort vs. Freedom Today",
    "extend.format": "Format",
    "extend.evidence": "The warning from the novel I am building on",
    "extend.transfers": "What transfers to the present",
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
    "print.item.relic": "Systems Lab evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Comfort-vs-freedom organizer",
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
      title: "Brave New World",
      author: "Aldous Huxley",
      grades: "Grades 10–12",
      genre: "Dystopian science fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Brave New World is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel presents a society built on engineered pleasure: normalized casual sex and promiscuity, constant drug use (soma), the abolition of family, and a character's suicide. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Brave New World by Aldous Huxley. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. Brave New World, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Brave New World — rows of identical glass bottles on a conveyor beneath a cold, futuristic ceiling."
    },
    hook: "Imagine a future with no war, no poverty, and no pain — because people are grown in bottles, sorted into castes, and conditioned from birth to love the lives they are given. When anyone feels unhappy, a dose of the drug soma fixes it. Huxley asks: if this is happiness, what has it cost?",
    goals: [
      "Understand Brave New World as a dystopia that controls people through pleasure, conditioning, and comfort rather than force.",
      "Analyze the World State's tools: mass production of humans, the caste system, conditioning, and soma.",
      "Examine John 'the Savage' and what his love of Shakespeare reveals about what the World State has erased.",
      "Weigh Huxley's central trade-off — stability and comfort versus freedom, truth, and depth — and connect it to today."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a dystopia.",
        "Discuss: Would you trade freedom and some pain for guaranteed comfort and happiness? What would be lost?"
      ],
      during: [
        "Use the Systems Lab to examine each tool the World State uses to keep people content.",
        "Track how Bernard, Lenina, and John each fit — or fail to fit — into this world."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect Huxley's warning to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what soma does and why the World State depends on it. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the World State's tools (for example, conditioning and soma). Explain how together they keep people from questioning their world." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply Huxley's warning about control through pleasure to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "dystopia", def: "An imagined society that looks orderly or perfect but is deeply controlling or dehumanizing.", example: "A 'happy' world where no one is free to choose.", nonexample: "A community where people govern themselves freely.", context: "Brave New World is a classic dystopia." },
      { term: "conditioning", def: "Training people to think, feel, or behave in set ways, often without their knowing.", example: "Teaching children in their sleep to love their caste.", nonexample: "Letting a person form their own opinions freely.", context: "The World State shapes citizens through lifelong conditioning." },
      { term: "caste", def: "A fixed social class a person is born or made into and cannot leave.", example: "Being decanted as an Alpha or an Epsilon.", nonexample: "Choosing your own career and rising by effort.", context: "Society is divided into castes from Alpha to Epsilon." },
      { term: "conformity", def: "Going along with the group instead of thinking or acting for oneself.", example: "Everyone repeating the same slogans.", nonexample: "Standing apart to question the rules.", context: "The World State prizes conformity above individuality." },
      { term: "individuality", def: "The qualities that make a person distinct and their own.", example: "Having private thoughts, art, and deep feelings.", nonexample: "Being interchangeable with everyone in your caste.", context: "The World State treats individuality as a threat to stability." },
      { term: "propaganda", def: "Messages designed to shape people's beliefs, often by repetition.", example: "Slogans repeated until everyone believes them.", nonexample: "A balanced report of different views.", context: "Hypnopaedic slogans work like built-in propaganda." },
      { term: "consumerism", def: "A focus on constantly buying, using, and being entertained.", example: "Endless games and 'feelies' that keep people distracted.", nonexample: "Living simply and questioning what you are sold.", context: "The World State runs on constant consumption and entertainment." },
      { term: "dehumanize", def: "To treat people as less than fully human.", example: "Mass-producing people in bottles and ranking them by caste.", nonexample: "Honoring each person's dignity and freedom.", context: "Engineering people to fit a system dehumanizes them." },
      { term: "satire", def: "Writing that criticizes society by exaggerating its flaws.", example: "Pushing comfort and consumption to an absurd extreme.", nonexample: "A neutral description with no critique.", context: "Huxley uses satire to warn about where comfort-seeking can lead." }
    ],

    relic: {
      name: "The World State Systems Lab",
      intro: "Seven instructional reconstructions of objects and systems from the novel — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "bottle", name: "The Hatchery Bottle", image: "images/bottle.webp",
          clues: ["In the World State, people are not born to families.", "They are grown and 'decanted' from bottles in a hatchery.", "One process can split a single egg into many identical people."],
          identify: { q: "What does the hatchery bottle represent?", choices: ["Mass production of human beings, grown and decanted instead of born", "A soma container", "A feely projector", "A caste badge"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows how the World State manufactures people to fit the system", "It stores food", "It powers the city", "It records history"] },
          significance: { q: "What does manufacturing people reveal?", choices: ["That the World State treats human life as a product to be engineered", "That science is always good", "That families are efficient", "That birth is sacred here"] },
          reveals: "How completely the World State controls life from its very beginning.",
          conceals: "What is lost when no one has parents, birth, or a natural family.",
          ace: "Articulate what the bottle represents; connect mass production to the theme of control; extend it to what is lost when people are engineered to fit a system."
        },
        {
          id: "caste-badge", name: "The Caste Badge", image: "images/caste-badge.webp",
          clues: ["Everyone belongs to a rank fixed before they are decanted.", "The ranks run from Alpha at the top to Epsilon at the bottom.", "People are conditioned to be glad of their own caste."],
          identify: { q: "What does the caste badge stand for?", choices: ["The fixed class system from Alpha down to Epsilon", "A soma dose", "A hatchery serial number only", "A club membership"] },
          purpose: { q: "What is the caste system's role?", choices: ["To sort people into permanent roles and keep society 'stable'", "To reward the hardest workers", "To let people choose their futures", "To decorate uniforms"] },
          significance: { q: "What does conditioning people to love their caste reveal?", choices: ["Control is deepest when people are made to desire their own limits", "That the castes are fair", "That anyone can move up", "That rank does not matter"] },
          reveals: "How the World State manufactures not just people but their contentment with their place.",
          conceals: "The loss of any real freedom to become something else.",
          ace: "Articulate what the caste system is; connect it to conditioning; extend it to how people can be taught to accept their own limits."
        },
        {
          id: "speaker", name: "The Hypnopaedia Speaker", image: "images/speaker.webp",
          clues: ["Children in the World State learn while they sleep.", "Recorded phrases are repeated to them thousands of times.", "By adulthood, these slogans feel like their own beliefs."],
          identify: { q: "What is hypnopaedia?", choices: ["Sleep-teaching: repeating slogans until they become 'truths'", "A sport", "A kind of soma", "A caste"] },
          purpose: { q: "What is its role in the novel?", choices: ["It conditions citizens' beliefs and desires without their knowing", "It wakes people up", "It plays music for fun", "It records dreams"] },
          significance: { q: "What does sleep-teaching reveal?", choices: ["Repetition can install beliefs so deeply people mistake them for their own", "That sleep is dangerous", "That slogans are harmless", "That people think freely here"] },
          reveals: "How the World State plants its values below the level of conscious thought.",
          conceals: "How hard it is to question a belief you never chose.",
          ace: "Articulate what hypnopaedia does; connect it to propaganda; extend it to how repeated messages can shape what people believe."
        },
        {
          id: "soma", name: "The soma Ration", image: "images/soma.webp",
          clues: ["Whenever a citizen feels unhappy, there is a remedy.", "It is a drug that brings pleasant feelings with no hangover.", "People take it to escape any discomfort or doubt."],
          identify: { q: "What is soma?", choices: ["A drug that erases unhappiness and keeps citizens content", "A type of food", "A caste rank", "A book"] },
          purpose: { q: "What is soma's role in the novel?", choices: ["It removes pain and doubt so no one questions the system", "It cures diseases", "It powers machines", "It is forbidden"] },
          significance: { q: "What does reaching for soma reveal?", choices: ["The World State controls people by erasing discomfort, not by force", "That the citizens are sick", "That happiness is earned", "That the drug is harmless fun"] },
          reveals: "How the World State keeps order by chemically removing every reason to rebel.",
          conceals: "That numbing all pain also numbs freedom, growth, and truth.",
          ace: "Articulate what soma does; connect erasing pain to preventing rebellion; extend it to how a society might use comfort to avoid hard questions."
        },
        {
          id: "ford", name: "The Sign of 'Our Ford'", image: "images/ford.webp",
          clues: ["This world worships not a god but an industrialist.", "They swear by 'Our Ford' and measure years 'After Ford.'", "Their motto is 'Community, Identity, Stability.'"],
          identify: { q: "Who or what is 'Our Ford'?", choices: ["Henry Ford, whose assembly line the World State treats almost as a religion", "A soma brand", "The Savage", "A caste"] },
          purpose: { q: "Why base a society on Ford and the assembly line?", choices: ["To make mass production and efficiency the highest values", "To honor a real religion", "To celebrate art", "To reward individuality"] },
          significance: { q: "What does the motto 'Community, Identity, Stability' reveal?", choices: ["The World State values order and sameness above freedom", "That people are free to differ", "That change is welcomed", "That the state has no values"] },
          reveals: "How the World State turns industry and efficiency into its deepest faith.",
          conceals: "What a life devoted to efficiency leaves no room for.",
          ace: "Articulate what 'Our Ford' stands for; connect the assembly line to the motto; extend it to what a society loses when efficiency becomes its highest value."
        },
        {
          id: "feely", name: "The Feely Ticket", image: "images/feely.webp",
          clues: ["Citizens enjoy constant entertainment.", "The 'feelies' are films you can feel as well as see and hear.", "Games and amusements fill every free hour."],
          identify: { q: "What are the 'feelies'?", choices: ["Immersive entertainments that keep citizens amused and distracted", "Soma pills", "Caste tests", "Sleep lessons"] },
          purpose: { q: "What is their role in the novel?", choices: ["To fill people's time with pleasure so they never grow restless or reflective", "To educate deeply", "To spark debate", "To tell the truth"] },
          significance: { q: "What does endless entertainment reveal?", choices: ["Distraction can control people as surely as fear can", "That art is thriving", "That people think deeply here", "That fun is harmless"] },
          reveals: "How constant amusement keeps citizens from ever questioning their world.",
          conceals: "The serious thought and feeling that distraction crowds out.",
          ace: "Articulate what the feelies are; connect entertainment to control; extend it to how constant distraction can keep people from thinking."
        },
        {
          id: "shakespeare", name: "The Volume of Shakespeare", image: "images/shakespeare.webp",
          clues: ["John, called 'the Savage,' grew up outside the World State.", "He treasures an old book of Shakespeare's plays.", "Its language gives him words for feelings the World State has erased."],
          identify: { q: "What does John's book of Shakespeare represent?", choices: ["Deep emotion, art, and individuality the World State has erased", "A soma manual", "A caste rulebook", "A hatchery record"] },
          purpose: { q: "What is its role in the novel?", choices: ["It gives John a language for love, grief, and meaning the World State denies", "It teaches him to make soma", "It is required reading for all", "It is a children's toy"] },
          significance: { q: "Why is such a book effectively forbidden in the World State?", choices: ["Great art stirs the deep feelings and questions that threaten 'stability'", "Because it is too long", "Because no one can read", "Because it is boring"] },
          reveals: "What the World State sacrifices to stay stable: art, passion, and meaning.",
          conceals: "Whether a world can have both comfort and the depth John craves.",
          ace: "Articulate what Shakespeare means to John; connect his book to individuality; extend it to why a controlling society might fear great art."
        }
      ]
    },

    ctob: {
      name: "The Forbidden Book",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "Into how many castes is World State society divided (Alpha, Beta, Gamma, Delta, Epsilon)? Enter the number.",
          evidence: ["Everyone is sorted into a rank before being decanted.", "The ranks are named with Greek letters from Alpha to Epsilon.", "Count them: Alpha, Beta, Gamma, Delta, Epsilon."],
          hints: ["Alpha, Beta, Gamma, Delta, Epsilon.", "One more than four.", "There are 5 castes."],
          answer: "5"
        },
        {
          type: "word",
          prompt: "When a citizen feels unhappy, they take a dose of the drug called ______. (one word)",
          evidence: ["It erases discomfort and doubt with no hangover.", "People reach for it whenever life feels hard.", "The drug's name begins with 'so…'."],
          hints: ["The World State's happiness drug.", "So…", "The drug is soma."],
          answer: "soma"
        },
        {
          type: "mc",
          prompt: "How are most people created in the World State?",
          options: [
            "They are grown and decanted from bottles in a hatchery, not born to families.",
            "They are born to loving two-parent families.",
            "They arrive from other planets.",
            "They are built as metal robots."
          ],
          hints: ["Think about the hatchery and the bottles.", "Which option is about being decanted, not born?"]
        },
        {
          type: "mc",
          prompt: "Which writer's work does John 'the Savage' treasure and quote?",
          options: [
            "Shakespeare.",
            "Henry Ford.",
            "Mustapha Mond.",
            "Aldous Huxley."
          ],
          hints: ["It is an old book of plays that gives John his words.", "Which option is the playwright?"]
        },
        {
          type: "sequence",
          prompt: "Put the World State's method for producing content citizens in order, earliest first.",
          items: [
            "Embryos are grown and predestined to a caste in the hatchery.",
            "Children are conditioned, including by sleep-teaching (hypnopaedia).",
            "As adults, they take soma to erase any unhappiness.",
            "Endless entertainment, like the feelies, keeps them from questioning anything."
          ],
          hints: ["It begins before birth, in the hatchery.", "Childhood conditioning comes before the adult soma habit.", "Distraction is the final layer that keeps people content."]
        },
        {
          type: "word",
          prompt: "The World State's three-word motto is 'Community, Identity, ______.' (one word)",
          evidence: ["The motto names the World State's highest goals.", "The last value is the order and sameness the whole system protects.", "The missing word begins with 'Sta…'."],
          hints: ["It means keeping things unchanging and orderly.", "Sta…", "The word is Stability."],
          answer: "Stability"
        }
      ]
    },

    arcade: {
      name: "The Price of Stability",
      instruction: "The World State promises happiness — but at a price. Sort each thing: is it something the World State PROVIDES its citizens (comfort and stability), or something it SACRIFICES to keep control (freedom and depth)? Reasoning earns the points.",
      buckets: [
        { id: "provided", label: "Provided by the World State", short: "Provided" },
        { id: "sacrificed", label: "Sacrificed for stability", short: "Sacrificed" }
      ],
      cards: [
        { text: "Constant comfort and guaranteed pleasure", bucket: "provided", why: "The World State delivers endless comfort to keep people content." },
        { text: "The drug soma to erase any unhappiness", bucket: "provided", why: "soma is provided precisely to remove all pain and doubt." },
        { text: "A guaranteed place and job within your caste", bucket: "provided", why: "Everyone is given a fixed, secure role in the system." },
        { text: "Endless entertainment and distraction (the feelies)", bucket: "provided", why: "Amusements are provided to fill every hour." },
        { text: "Families, mothers, and fathers", bucket: "sacrificed", why: "The World State abolishes the family to prevent strong private bonds." },
        { text: "Deep, lasting love and commitment", bucket: "sacrificed", why: "Intense attachment is discouraged as a threat to stability." },
        { text: "Great art and literature like Shakespeare", bucket: "sacrificed", why: "Powerful art is suppressed because it stirs dangerous feeling." },
        { text: "Individual freedom, truth, and the right to be unhappy", bucket: "sacrificed", why: "Freedom and truth are traded away for guaranteed stability." }
      ],
      followup: "Is a world of guaranteed happiness worth what the World State gives up to get it? Which of these trades would you refuse, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Brave New World is best described as —",
          options: [
            "a dystopia in which people are controlled by pleasure and conditioning rather than force.",
            "a realistic history of the 1930s.",
            "a cheerful adventure with no dark themes.",
            "a mystery about a single crime."
          ],
          why: "The World State keeps order through comfort, conditioning, and soma, not open violence."
        },
        {
          q: "In the World State, people are —",
          options: [
            "mass-produced in a hatchery and sorted into castes from Alpha to Epsilon.",
            "born to families and free to choose their careers.",
            "elected to their social class.",
            "the same rank, with no divisions."
          ],
          why: "Citizens are decanted from bottles and conditioned into a fixed caste."
        },
        {
          q: "The main purpose of soma is to —",
          options: [
            "erase unhappiness and doubt so citizens never want to rebel.",
            "cure physical diseases.",
            "give people energy for work.",
            "punish lawbreakers."
          ],
          why: "soma removes discomfort, keeping people docile and content with the system."
        },
        {
          q: "John 'the Savage' values Shakespeare because it —",
          options: [
            "gives him language for the deep emotions and meaning the World State has erased.",
            "teaches him how to run the hatchery.",
            "is required by the World Controllers.",
            "helps him make soma."
          ],
          why: "Shakespeare expresses love, grief, and individuality that the World State suppresses."
        },
        {
          q: "Huxley's central warning is that a society can control people by —",
          options: [
            "engineered pleasure, comfort, and distraction, not only by fear and pain.",
            "building higher prison walls.",
            "banning all technology.",
            "making everyone read more books."
          ],
          why: "The novel warns that comfort and amusement can be as controlling as any threat."
        }
      ],
      short: [
        "Choose one artifact from the Systems Lab. Explain what it is and what it reveals about how the World State keeps control.",
        "Explain how soma and conditioning work together to keep citizens from questioning their world.",
        "What does John's love of Shakespeare reveal about what the World State has given up? Use specific examples."
      ],
      paragraph: "Write an evidence-based paragraph. The World State offers guaranteed happiness in exchange for freedom, truth, and depth. Is that a good bargain? Make a claim and support it with specific details from the novel.",
      aceReflection: "Articulate Huxley's warning in your own words. Connect two tools of the World State that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Comfort vs. Freedom Today",
      prompt: "Huxley warns that people can be controlled not by pain but by pleasure, comfort, and distraction. Choose one modern example — social media, streaming, games, advertising, or another — and compare it to the World State's methods. Explain the connection with evidence: what is similar, what is different, and where the comparison breaks down.",
      format: "A short evidence-based comparison connecting Huxley's warning to a modern form of comfort or distraction, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what soma does in Brave New World and why the World State needs it. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Brave New World. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [tool one] connects to [tool two] in Brave New World because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Brave New World: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to compare Huxley's warning to a modern form of comfort or distraction: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Brave New World for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Brave New World. It supports close reading of Huxley's dystopia and its tools of control — mass production of humans, the caste system, conditioning and hypnopaedia, soma, and endless distraction — and the challenge John 'the Savage' poses to that world. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The novel is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: normalized casual sex and promiscuity, constant drug use (soma), the abolition of family, and a character's suicide. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the novel (the World State; castes Alpha through Epsilon; Bokanovsky's mass-production and 'decanting'; hypnopaedic conditioning; the drug soma; the worship of 'Our Ford' and the motto 'Community, Identity, Stability'; the feelies; John 'the Savage' and his book of Shakespeare; the World Controller Mustapha Mond). Confirm against your class edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English II–IV / advanced ELAR TEKS (19 TAC Ch. 110) strands on theme, author's purpose, satire, and response to literature, with cross-curricular ties to social studies. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.11-12.1", "RL.11-12.2", "RL.11-12.6", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
