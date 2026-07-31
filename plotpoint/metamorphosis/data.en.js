/* PlotPoint — The Metamorphosis (Franz Kafka).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules honored here: no invented quotations, plot details are limited
   to widely established facts, standards codes are only those provided by the
   build plan (Common Core) — TEKS/ELPS are flagged "Needs review" rather than
   fabricated. Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "metamorphosis",
  storageKey: "plotpoint.metamorphosis.v1",

  ui: {
    /* chrome */
    "skip": "Skip to the activity",
    "brand.tag": "Read · Reason · Play",
    "reset": "Reset",
    "reset.confirm": "Reset this room and clear saved progress on this device?",
    "footer.tagline": "No logins · no accounts · no data collected · runs entirely in your browser.",
    "footer.privacy": "Privacy & compliance",
    "footer.back": "All PlotPoint rooms",
    "review.flag": "Needs review",
    "progress.chip": "{n}/{total} activities done",

    /* nav */
    "nav.enter": "Enter the Story", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    /* enter */
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

    /* vocab */
    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Metamorphosis",
    "vocab.intro": "{n} terms that unlock the novella. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    /* relic */
    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Gregor's Room",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object?",
    "relic.q.purpose": "Explain its likely purpose",
    "relic.q.significance": "Its literary significance",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    /* ctob */
    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Locked Door",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. The case is solved — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    /* arcade */
    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Routine Breakdown",
    "arcade.default": "Sort each card into the force that best explains it.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Cards to sort",
    "arcade.followup": "Discuss / write",

    /* analysis */
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

    /* extend */
    "extend.eyebrow": "Extend the Idea",
    "extend.title": "Transfer the Theme",
    "extend.format": "Format",
    "extend.evidence": "Evidence from the text I am building on",
    "extend.transfers": "What transfers to the new situation",
    "extend.changes": "What changes in the new situation",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My final, student-owned response",
    "extend.localNote": "Your response stays on this device. You own it.",

    /* gen ai */
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

    /* print */
    "print.eyebrow": "Print Student Materials",
    "print.title": "Printable Packet",
    "print.intro": "Print a no-login paper packet for this room. Use your browser's print dialog to save as PDF.",
    "print.item.vocab": "Vocabulary reference",
    "print.item.relic": "Relic Room evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Extend organizer",
    "print.item.ace": "ACE organizer",
    "print.item.receipt": "Gen AI thinking receipt",
    "print.button": "Print / Save as PDF",
    "print.answer": "Answer:",

    /* teacher */
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
      title: "The Metamorphosis",
      author: "Franz Kafka",
      grades: "Grades 9–12",
      genre: "Novella · Modernist fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Original German (1915) is public domain",
      textAccess: "Students need access to a public-domain or openly licensed English translation, or the German original. This room does not reproduce the text.",
      copyright: "The 1915 German text is public domain; some English translations remain under copyright. Verify your edition before sharing.",
      contentNote: "Themes include isolation, family conflict, and death. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/5200",
      audio: "https://librivox.org/the-metamorphosis-by-franz-kafka/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Metamorphosis — a dim bedroom at dawn."
    },
    hook: "One ordinary morning, Gregor Samsa wakes to find his body completely changed — and discovers how quickly a person can be reduced to what they can no longer provide.",
    goals: [
      "Trace how a single, unexplained change exposes the relationships and pressures already inside a family.",
      "Analyze how objects, setting, and structure carry meaning when a character can no longer speak for himself.",
      "Distinguish competing forces on a character — duty versus self — using textual evidence.",
      "Transfer the novella's questions about worth and obligation to a new, real situation."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ACE routine.",
        "Discuss: What do we owe the people who support us — and what do they owe us?"
      ],
      during: [
        "Use the Relic Room to slow down and read objects closely as you meet them.",
        "Track shifts in how each family member treats Gregor."
      ],
      after: [
        "Run the breakout, arcade, and analysis to consolidate an evidence-based reading.",
        "Complete the Extend task to carry the theme beyond the book."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain one important idea from The Metamorphosis in your own words. Include one detail that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two details from the novella. Explain how the connection changes your understanding of Gregor, his family, or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply one idea from the novella to a situation today. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "metamorphosis", def: "A complete change in form, condition, or nature.", example: "A caterpillar's change into a butterfly is a metamorphosis.", nonexample: "Getting a new haircut.", context: "The novella's title names Gregor's overnight metamorphosis into another kind of being." },
      { term: "vermin", def: "Small animals or insects seen as pests; the word is often used to dehumanize people.", example: "Calling a group 'vermin' to deny their humanity.", nonexample: "A beloved family pet.", context: "By treating Gregor as vermin, the household stops seeing him as a person." },
      { term: "alienation", def: "The feeling of being isolated or estranged from others or from oneself.", example: "Feeling invisible in a room full of people.", nonexample: "Laughing with close friends who understand you.", context: "Gregor's alienation began long before his body changed — his work already kept him apart." },
      { term: "obligation", def: "A duty or commitment a person feels bound to fulfill.", example: "Paying back money you promised to repay.", nonexample: "A hobby you do purely for fun.", context: "A sense of obligation to his family's debt organized Gregor's entire life." },
      { term: "revulsion", def: "A strong feeling of disgust.", example: "Turning away from something that sickens you.", nonexample: "Mild curiosity about a new food.", context: "The family's early concern slowly hardens into revulsion." },
      { term: "destitute", def: "Without money, resources, or the means to live.", example: "A family with no income and no savings.", nonexample: "A household with a steady paycheck.", context: "The Samsas fear becoming destitute once Gregor can no longer earn." },
      { term: "dutiful", def: "Carefully doing what one's responsibilities require.", example: "A worker who never misses a shift out of duty.", nonexample: "Someone who ignores every promise.", context: "Gregor was the dutiful son whose earnings held the household together." },
      { term: "estranged", def: "No longer close or affectionate; grown distant.", example: "Relatives who stop speaking for years.", nonexample: "Siblings who talk every day.", context: "As the story goes on, Gregor becomes estranged even from his devoted sister." },
      { term: "subordinate", def: "Lower in rank or authority; placed under someone else's control.", example: "An employee who must obey a demanding boss.", nonexample: "A person who answers to no one.", context: "At work Gregor was a subordinate, watched and judged by superiors." },
      { term: "emaciated", def: "Abnormally thin and weak, usually from lack of food.", example: "A body wasted by long hunger.", nonexample: "A healthy, well-fed athlete.", context: "Neglected and barely fed, Gregor grows emaciated as the household turns away." }
    ],

    relic: {
      name: "Gregor's Room",
      intro: "Seven instructional reconstructions of objects from Gregor's room and household. Each is a teaching recreation, not a copyrighted illustration. Investigate what each object shows — and what it hides.",
      artifacts: [
        {
          id: "door", name: "The Bedroom Door (one of three)", image: "images/door.webp",
          clues: ["Gregor's room opens onto the rest of the home through more than one door.", "He is in the habit of locking his doors, even at home.", "Early on, the family and a visitor speak to him through the closed door."],
          identify: { q: "What is this object?", choices: ["A locked interior door of Gregor's bedroom", "The front door of a shop", "A garden gate", "A wardrobe door"] },
          purpose: { q: "What is its likely purpose in the household?", choices: ["To give Gregor privacy and separate his room from shared space", "To keep out the weather", "To display the family's wealth", "To store the sample case"] },
          significance: { q: "What is its literary significance?", choices: ["It makes Gregor's isolation physical — he is shut in and communicated with only through a barrier", "It shows the family is wealthy", "It proves the house is old", "It explains why Gregor is late"] },
          reveals: "That Gregor was separating himself from others — locking doors — even before his transformation.",
          conceals: "It hides how much of that isolation Gregor chose versus how much his work and family imposed on him.",
          ace: "Articulate what the door does to Gregor's contact with his family; connect it to the theme of alienation; extend it to a barrier people put up today."
        },
        {
          id: "picture", name: "The Framed Picture of the Woman in Furs", image: "images/picture.webp",
          clues: ["Gregor cut this image from a magazine.", "He built a frame for it himself.", "When his room is being emptied, he desperately protects this one object."],
          identify: { q: "What is this object?", choices: ["A magazine picture Gregor framed and hung himself", "A family portrait", "A wanted poster", "A train timetable"] },
          purpose: { q: "What is its likely purpose for Gregor?", choices: ["A small personal pleasure and a claim to an identity of his own", "A tool for his job", "A gift for his boss", "A map for travel"] },
          significance: { q: "What is its literary significance?", choices: ["It is the one belonging Gregor fights to keep, showing he still has a self worth defending", "It shows he is wealthy", "It predicts the ending", "It explains the debt"] },
          reveals: "That beneath the changed body, Gregor still has desires, taste, and a sense of self.",
          conceals: "It leaves unclear what the image truly means to him — comfort, longing, or something he cannot name.",
          ace: "Articulate why Gregor protects this picture; connect it to his humanity; extend it to an object that would represent your own identity."
        },
        {
          id: "apple", name: "The Wedged Apple", image: "images/apple.webp",
          clues: ["Gregor's father throws fruit at him during a confrontation.", "One piece strikes and lodges in Gregor's body.", "The wound is never treated and festers over time."],
          identify: { q: "What is this object?", choices: ["An apple the father threw that becomes lodged in Gregor's back", "A snack Grete left him", "A decoration", "A gift from the lodgers"] },
          purpose: { q: "How does it function in the scene?", choices: ["As a weapon the father uses against his transformed son", "As food for the family", "As a toy", "As payment"] },
          significance: { q: "What is its literary significance?", choices: ["It turns the father's rejection into a physical, lasting wound", "It shows the family is hungry", "It proves apples are symbolic of health", "It marks the passage of seasons"] },
          reveals: "That the deepest harm to Gregor comes from his own family, not from strangers.",
          conceals: "It hides whether the father acts from fear, shame, or cruelty — the text leaves his motive open.",
          ace: "Articulate what the apple does to Gregor; connect the wound to the theme of rejection; extend it to how harm from family differs from harm by strangers."
        },
        {
          id: "samplecase", name: "The Traveling Salesman's Sample Case", image: "images/samplecase.webp",
          clues: ["Gregor's job requires constant travel by early train.", "He carries goods to show to customers.", "His first worry on the fateful morning is missing work, not his own body."],
          identify: { q: "What is this object?", choices: ["The sample case Gregor carries for his traveling-salesman work", "A suitcase for vacation", "A doctor's bag", "A toolbox"] },
          purpose: { q: "What is its purpose in Gregor's life?", choices: ["It is the instrument of the job that defines and exhausts him", "It holds his savings", "It stores his picture", "It is a gift for Grete"] },
          significance: { q: "What is its literary significance?", choices: ["It represents the labor that has consumed Gregor's identity and time", "It shows he enjoys travel", "It proves he is well paid", "It foreshadows the lodgers"] },
          reveals: "That Gregor's worth to others has been measured almost entirely by his work.",
          conceals: "It hides what Gregor might have wanted from life if the debt had not bound him to the road.",
          ace: "Articulate how the job shaped Gregor; connect his labor to his alienation; extend it to how work can define a person today."
        },
        {
          id: "food", name: "The Tray of Fresh Food and Spoiled Scraps", image: "images/food.webp",
          clues: ["At first Gregor is brought fresh milk and food.", "He discovers he now prefers old, rotting scraps.", "Later, his food is delivered carelessly and grows scarce."],
          identify: { q: "What is this object?", choices: ["The changing food Grete brings that Gregor can and cannot eat", "A feast for guests", "A market stall", "A picnic"] },
          purpose: { q: "What is its purpose in the story?", choices: ["To track Grete's care for Gregor and how it fades", "To show the family is rich", "To describe local cuisine", "To measure time of day"] },
          significance: { q: "What is its literary significance?", choices: ["What Gregor can eat marks how far his body — and his family's care — has changed", "It proves he is still human", "It explains the debt", "It predicts the weather"] },
          reveals: "That care in this family is measured in small daily acts — and that it is running out.",
          conceals: "It hides whether Grete's fading attention is exhaustion, fear, or growing resentment.",
          ace: "Articulate what the food shows about Gregor's change; connect it to Grete's role; extend it to how small daily acts reveal care in real relationships."
        },
        {
          id: "violin", name: "Grete's Violin", image: "images/violin.webp",
          clues: ["Grete plays the violin.", "The family's lodgers ask to hear her play.", "The music draws Gregor out of his room toward the others."],
          identify: { q: "What is this object?", choices: ["The violin Grete plays for the household and its lodgers", "A radio", "A music box", "A toy"] },
          purpose: { q: "What is its purpose in the scene?", choices: ["To create a moment of beauty that pulls Gregor toward human connection", "To wake the neighbors", "To earn money for the debt", "To signal danger"] },
          significance: { q: "What is its literary significance?", choices: ["It shows Gregor still responds to beauty and longs to belong, even after his change", "It proves Grete is talented", "It ends the debt", "It scares the lodgers away"] },
          reveals: "That Gregor's inner life — his capacity to be moved — survives his transformed body.",
          conceals: "It hides whether anyone but Gregor still sees that inner life in him.",
          ace: "Articulate why the music matters to Gregor; connect it to his humanity; extend it to something that still moves a person others have written off."
        },
        {
          id: "clock", name: "The Alarm Clock", image: "images/clock.webp",
          clues: ["Gregor's mornings are ruled by early train times.", "On the first morning he realizes the alarm has already passed.", "His panic is about work and schedule, not his body."],
          identify: { q: "What is this object?", choices: ["The alarm clock that governs Gregor's working mornings", "A wall calendar", "A pocket watch of his father's", "A sundial"] },
          purpose: { q: "What is its purpose in Gregor's life?", choices: ["To enforce the relentless schedule his job demands", "To decorate the room", "To wake the whole family", "To time Grete's music"] },
          significance: { q: "What is its literary significance?", choices: ["It shows how completely time and work discipline have ruled Gregor's life", "It proves he oversleeps often", "It explains the apple", "It marks the seasons"] },
          reveals: "That even in crisis, Gregor's first instinct is duty to the clock and the job.",
          conceals: "It hides how long this pressure has been shaping him before the story begins.",
          ace: "Articulate what the clock controls; connect schedule to obligation; extend it to how time pressure shapes people you know."
        }
      ]
    },

    ctob: {
      name: "The Locked Door",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many doors lead out of Gregor's room into the rest of the home?",
          evidence: ["Gregor's room connects to shared living space and to family members' rooms.", "People speak to him from more than one side of his room.", "The text establishes his room has doors on three sides."],
          hints: ["Count the sides people approach him from.", "It is more than two.", "The number is three."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put these high-level stages of the story in order, earliest first.",
          items: [
            "Gregor supports the family and pays down his father's debt.",
            "Gregor wakes transformed and is confined to his room.",
            "The family members take jobs and take in lodgers to survive.",
            "After Gregor's death, the family feels relief and looks to the future."
          ],
          hints: ["Start before the transformation.", "The family only takes on work after they lose Gregor's income.", "The relief comes last."]
        },
        {
          type: "mc",
          prompt: "Which detail best supports the claim that Gregor is valued for his labor more than for himself?",
          options: [
            "On the first morning, the household's concern is his missed train and the money, not his wellbeing.",
            "Gregor keeps a framed picture on his wall.",
            "Gregor's room has three doors.",
            "Gregor once liked fresh milk."
          ],
          hints: ["Look for what the family reacts to first.", "Which option is about worth measured in work and money?"]
        },
        {
          type: "word",
          prompt: "What single object, thrown by the father, lodges in Gregor's body and is left to fester? (one word)",
          evidence: ["The father hurls fruit during a confrontation.", "One piece strikes Gregor and stays embedded.", "The untreated wound weakens him over time."],
          hints: ["It is a common fruit.", "It starts with 'a'.", "Think of the fruit in the phrase 'an ___ a day.'"],
          answer: "apple"
        },
        {
          type: "mc",
          prompt: "What does the violin scene most strongly reveal about Gregor?",
          options: [
            "He still responds to beauty and longs for connection after his transformation.",
            "He has learned to play the violin himself.",
            "He wants the lodgers to leave.",
            "He no longer has any inner life."
          ],
          hints: ["Focus on what the music pulls out of Gregor.", "Which option is about his surviving inner life?"]
        },
        {
          type: "digit",
          prompt: "How many lodgers (boarders) does the family take in to make ends meet?",
          evidence: ["To replace lost income, the family rents rooms.", "The boarders eat together and make demands on the household.", "The text describes them as a set of three gentlemen."],
          hints: ["The boarders move and act as a group.", "The same number as the doors.", "It is three."],
          answer: "3"
        }
      ]
    },

    arcade: {
      name: "Routine Breakdown",
      instruction: "Gregor is pulled in two directions the whole novella. Sort each card into the force that best explains it: the pull of DUTY (what he owes work and family) or the pull of SELF (his own identity, body, and inner life). Reasoning — not speed — earns the points.",
      buckets: [
        { id: "duty", label: "Pulls toward Duty", short: "Duty" },
        { id: "self", label: "Pulls toward Self", short: "Self" }
      ],
      cards: [
        { text: "The debt Gregor took on to repay for his father", bucket: "duty", why: "A financial obligation to family is a classic pull of duty." },
        { text: "Fear of missing the early train to work", bucket: "duty", why: "His first crisis is about the job's schedule — obligation, not self." },
        { text: "The manager arriving to check why Gregor is late", bucket: "duty", why: "Outside authority pressuring him to perform is a force of duty." },
        { text: "Earning money so Grete can one day study music", bucket: "duty", why: "Providing for his sister's future is an obligation he has taken on." },
        { text: "The framed picture he fights to keep on his wall", bucket: "self", why: "It is a personal attachment and a claim to his own identity." },
        { text: "Being drawn out of his room by Grete's violin", bucket: "self", why: "His response to beauty comes from his inner life, not duty." },
        { text: "Now preferring old scraps to the fresh food he once liked", bucket: "self", why: "His changed body and appetite are about his altered self." },
        { text: "Wanting to be seen and remembered as himself", bucket: "self", why: "The longing to be recognized as a person is the pull of self." }
      ],
      followup: "Which single card was hardest to place, and why? Some pulls are both at once — where do duty and self overlap for Gregor?"
    },

    analysis: {
      mcq: [
        {
          q: "Which statement best expresses a central theme of The Metamorphosis?",
          options: [
            "The tension between our own identity and the obligations we owe others.",
            "Hard work always pays off in the end.",
            "Insects are dangerous and should be feared.",
            "Family vacations bring people closer together."
          ],
          why: "The novella centers on how Gregor's worth to his family was tied to his obligations — and what remains of a self when those obligations can no longer be met."
        },
        {
          q: "Grete's treatment of Gregor changes over the story mainly because —",
          options: [
            "as the burden grows, her early sympathy gives way to strain and self-preservation.",
            "she never cared about Gregor at all.",
            "Gregor asks her to stop helping him.",
            "she moves away from the family."
          ],
          why: "Grete begins as Gregor's caretaker and gradually withdraws as the cost to her own life mounts — a shift the reader tracks through her actions."
        },
        {
          q: "The apple lodged in Gregor's back most strongly functions as a symbol of —",
          options: [
            "the wounding rejection Gregor suffers from his own family.",
            "the family's hunger and poverty.",
            "the healthiness of fresh fruit.",
            "the arrival of a new season."
          ],
          why: "The wound is inflicted by the father and never heals, making family rejection literal and lasting."
        },
        {
          q: "The novella is told mostly through —",
          options: [
            "a third-person narrator closely tied to Gregor's perspective.",
            "Gregor's own first-person diary.",
            "Grete narrating in first person.",
            "an outside newspaper report."
          ],
          why: "The narration stays near Gregor's thoughts and perceptions, which is why his isolation feels so immediate even as others speak about him."
        },
        {
          q: "Kafka opens with the transformation already complete, rather than explaining how it happened, in order to —",
          options: [
            "shift attention from how it happened to how Gregor and his family respond.",
            "hide the ending from the reader.",
            "prove the story is science fiction.",
            "make the story easier to summarize."
          ],
          why: "By skipping any cause, Kafka forces the reader to focus on consequence and response — the real subject of the book."
        }
      ],
      short: [
        "How does Gregor's family depend on him before his transformation, and how does that dependence shape their reaction afterward? Use specific details.",
        "Choose one object in Gregor's room and explain what it reveals about who Gregor is beneath his changed body.",
        "Identify a moment where communication breaks down between Gregor and his family. What does that breakdown cost him?"
      ],
      paragraph: "Write an evidence-based paragraph. Does the novella treat Gregor's transformation as the real problem, or as something that reveals problems already present in the Samsa family? Make a claim and support it with specific details.",
      aceReflection: "Articulate one theme in your own words. Connect two details that develop it. Extend it to a situation outside the book, and name where the comparison stops working."
    },

    extend: {
      name: "Transfer the Theme",
      prompt: "Kafka asks what a person is worth when they can no longer produce. Identify a real situation today in which someone is valued mainly for what they provide rather than for who they are — for example, a worker, a caregiver, an athlete, or a student judged only by output. Apply the novella's theme to that situation.",
      format: "Choose one: a short advice memo to the Samsa family, OR a contemporary comparison essay. Include text evidence."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning about a theme in The Metamorphosis. Do not answer for me. Ask me one question at a time that helps me explain the theme in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Metamorphosis. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in The Metamorphosis because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Metamorphosis: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply the theme [theme] from The Metamorphosis to [new situation]. Give me two competing ways the comparison might work and one reason each comparison might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Metamorphosis for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Kafka's novella through evidence-based tasks. It never reproduces the text, invents no quotations, and keeps every response on the student's device. Assign a full pathway or a single activity.",
      reviewNotes: [
        "Verify your class edition/translation is public domain or openly licensed before sharing text. The 1915 German original is public domain; some English translations remain under copyright.",
        "The creature Kafka names (an 'ungeheures Ungeziefer,' a 'monstrous vermin') is deliberately unspecified. Avoid teaching a single 'correct' insect.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year before relying on it."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response and author's-craft strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.2", "RL.11-12.2", "RL.9-10.5", "RL.11-12.5", "RL.9-10.6", "RL.11-12.6", "W.9-10.2", "W.11-12.2"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
