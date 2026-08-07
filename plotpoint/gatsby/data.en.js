/* PlotPoint — The Great Gatsby (F. Scott Fitzgerald).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   facts from the 1925 novel; standards codes are only those given by the build
   plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "gatsby",
  storageKey: "plotpoint.gatsby.v1",

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
    "vocab.title": "Words for The Great Gatsby",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The West Egg Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this place, object, or document?",
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
    "ctob.title": "The Case of the Green Light",
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
    "arcade.title": "Whose Fault Was It? Illusion vs. Carelessness",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Evidence to weigh",
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
    "extend.title": "A Symbol of Someone's Hope",
    "extend.format": "Format",
    "extend.evidence": "The technique from the novel I am building on",
    "extend.transfers": "What transfers to my modern scene",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My observer-narrated scene",
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
    "print.item.extend": "Symbol-and-narration organizer",
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
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      grades: "Grades 9–12",
      genre: "Novel · Tragedy · Jazz Age modernism",
      time: "60–90 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1925; U.S. public domain since 2021)",
      textAccess: "This is a public-domain novel; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1925; entered the U.S. public domain on January 1, 2021. This room paraphrases and reproduces no full passages.",
      contentNote: "A Jazz Age tragedy with mature content: extramarital affairs, heavy drinking during Prohibition, domestic violence, a fatal car crash, two deaths, and a character's racist remarks. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/64317",
      audio: "https://librivox.org/the-great-gatsby-by-f-scott-fitzgerald/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Great Gatsby — a distant green light across a dark bay, a grand lit mansion, and an Art Deco skyline."
    },
    hook: "From a rented cottage next door, Nick Carraway watches his neighbor throw magnificent parties for a city full of strangers. The host, Jay Gatsby, built a fortune and a mansion for one reason: to win back a woman across the bay. The Great Gatsby asks what happens when a dream is chased too hard — and who pays for it.",
    goals: [
      "Analyze how Fitzgerald uses Nick Carraway, a first-person peripheral narrator, to shape and complicate our judgment of Gatsby and the Buchanans.",
      "Interpret the novel's central symbols — the green light, the valley of ashes, and the eyes of Doctor T. J. Eckleburg — and how they carry its themes.",
      "Evaluate the novel's portrait of the American Dream and the barriers of class (old money, new money, no money).",
      "Connect the technique of a symbol carrying a character's hope to a new situation, and weigh what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the 1920s setting — the Jazz Age, Prohibition, and the gap between old and new money.",
        "Discuss: Can you repeat the past? What happens to a person who builds a whole life around one dream?"
      ],
      during: [
        "Use the Relic Room to examine one place, object, or document at a time.",
        "Track the central symbols (the green light, the valley of ashes, the watching eyes) and notice how Nick's narration colors each scene."
      ],
      after: [
        "Run the breakout, arcade, and analysis to build an evidence-based reading of the tragedy and the American Dream.",
        "Complete the Extend task to write your own observer-narrated scene built around a symbol."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what the green light symbolizes and how its meaning shifts by the end. Include one detail from the novel that shows the change." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the novel's themes (for example, the American Dream and class, or illusion and carelessness). Explain how they reinforce each other in Gatsby's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of a symbol that carries a person's hope to a modern situation. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "Jazz Age", def: "The 1920s in America — a decade of jazz music, new wealth, loosened social rules, and postwar restlessness.", example: "Wild parties, fast cars, and dance music after World War I.", nonexample: "A quiet, traditional farming village untouched by change.", context: "The Great Gatsby captures the glamour and excess of the Jazz Age." },
      { term: "Prohibition", def: "The 1920–1933 U.S. ban on making and selling alcohol, which fueled a huge illegal trade.", example: "Serving liquor secretly at a lavish party when it was against the law.", nonexample: "Buying wine openly at a licensed store today.", context: "During Prohibition, the alcohol flowing at Gatsby's parties was illegal." },
      { term: "bootlegging", def: "The illegal making, moving, or selling of alcohol, often tied to organized crime.", example: "Secretly selling liquor for huge profits during the 1920s.", nonexample: "Running a legal, taxed brewery.", context: "Gatsby's fortune is hinted to come from bootlegging and other shady dealings." },
      { term: "nouveau riche", def: "People who have recently gained wealth, often looked down on by the established upper class.", example: "A self-made millionaire in a brand-new mansion.", nonexample: "A family that has inherited its money over generations.", context: "As nouveau riche, Gatsby is never fully accepted by the old-money crowd." },
      { term: "valley of ashes", def: "In the novel, a bleak industrial wasteland of grey dust lying between West Egg and New York.", example: "A gloomy dumping ground where the poor live and labor.", nonexample: "A bright, thriving city park.", context: "The valley of ashes exposes the ruin hidden beneath the era's wealth." },
      { term: "symbolism", def: "The use of an object, place, or image to stand for a larger idea.", example: "A single green light standing for hope and longing.", nonexample: "A plain label that means only itself.", context: "Fitzgerald's symbolism turns a green light and a billboard into ideas." },
      { term: "ostentatious", def: "Showy and expensive in a way meant to impress others.", example: "A mansion and parties designed purely for display.", nonexample: "A modest home kept deliberately simple.", context: "Gatsby's ostentatious parties are staged to draw Daisy's attention." },
      { term: "disillusionment", def: "The loss of a belief or ideal once one sees a harsher truth.", example: "Realizing that a glittering dream was empty all along.", nonexample: "Holding on to a hopeful belief that proves true.", context: "Nick's disillusionment with the East finally drives him back to the Midwest." },
      { term: "decadence", def: "Moral decline hidden behind luxury and self-indulgence.", example: "Endless parties and careless spending with no purpose.", nonexample: "A disciplined life of restraint and service.", context: "The novel exposes the decadence beneath the Jazz Age glamour." },
      { term: "peripheral narrator", def: "A first-person narrator who tells a story mainly about others while taking part at the edges.", example: "A neighbor who observes and reports the hero's rise and fall.", nonexample: "An all-knowing narrator standing outside the story.", context: "Nick is a peripheral narrator, watching Gatsby more than acting himself." },
      { term: "the American Dream", def: "The belief that anyone, through hard work, can rise to wealth and success.", example: "A poor boy reinventing himself as a rich, admired man.", nonexample: "A society where birth alone fixes your place forever.", context: "The Great Gatsby questions whether the American Dream is real or an illusion." }
    ],

    relic: {
      name: "The West Egg Archive",
      intro: "Seven instructional reconstructions of the places, objects, and documents through which The Great Gatsby reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "green", name: "The Green Light Across the Bay", image: "images/green.webp",
          clues: ["At the end of Daisy's dock, a small green light glows across the water.", "Gatsby is seen reaching toward it in the dark.", "For him it stands for the future he means to reclaim."],
          identify: { q: "What is this?", choices: ["The green light at the end of Daisy's dock", "A traffic signal in New York City", "The lamp in Gatsby's library", "A lighthouse guiding ships to West Egg"] },
          purpose: { q: "What does it mean to Gatsby?", choices: ["It stands for his hope and his longing to reclaim Daisy and the past", "It warns boats away from the rocks", "It marks the entrance to his parties", "It signals the police"] },
          significance: { q: "What is its literary significance?", choices: ["It is the novel's central symbol of an idealized, receding dream", "It proves Gatsby is a sailor", "It shows Daisy loves Gatsby openly", "It ends the novel happily"] },
          reveals: "How Gatsby turns a distant light into the whole shape of his hope.",
          conceals: "It hides that the dream is already out of reach — the light is faint, far away, and attached to a woman who has moved on.",
          ace: "Articulate what the green light stands for; connect it to the theme of the American Dream; extend it to how people fix their hopes on a distant symbol."
        },
        {
          id: "mansion", name: "Gatsby's Mansion and the Parties", image: "images/mansion.webp",
          clues: ["A huge West Egg mansion blazes with light every summer weekend.", "Hundreds of guests arrive uninvited to drink and dance.", "The host himself stays strangely apart from his own parties."],
          identify: { q: "What is this place?", choices: ["Gatsby's West Egg mansion, where he throws enormous parties", "The Buchanans' home in East Egg", "Nick's small rented cottage", "Wilson's garage in the valley of ashes"] },
          purpose: { q: "What is the parties' real purpose?", choices: ["To attract Daisy's attention from across the bay", "To raise money for charity", "To hold meetings for the bond trade", "To celebrate Nick's arrival"] },
          significance: { q: "What is its literary significance?", choices: ["The lavish, empty spectacle exposes the hollowness beneath new-money display", "It proves Gatsby has many close friends", "It shows old money welcomes Gatsby", "It ends the valley of ashes"] },
          reveals: "Gatsby's wealth is a performance aimed at one person, not a life full of friends.",
          conceals: "Behind the crowds, almost no one truly knows Gatsby — a loneliness the parties hide.",
          ace: "Articulate why Gatsby throws the parties; connect the spectacle to the theme of illusion; extend it to how display can stand in for real connection."
        },
        {
          id: "ashes", name: "The Valley of Ashes and Doctor T. J. Eckleburg's Eyes", image: "images/ashes.webp",
          clues: ["Between West Egg and the city lies a grey wasteland of industrial ash.", "A faded billboard shows the enormous eyes of Doctor T. J. Eckleburg behind spectacles.", "The poor, including the Wilsons, live and work here."],
          identify: { q: "What is this place?", choices: ["The valley of ashes, watched over by the billboard eyes of Doctor T. J. Eckleburg", "A public garden in East Egg", "Gatsby's swimming pool", "The ballroom of the Plaza Hotel"] },
          purpose: { q: "What does it show?", choices: ["The decay and poverty hidden beneath the era's glittering wealth", "An advertisement for a popular eye doctor", "The road to Gatsby's parties", "A monument to a war hero"] },
          significance: { q: "What is its literary significance?", choices: ["The watching eyes suggest a lost moral or spiritual order overlooking the ruin", "They prove God speaks directly to Wilson", "They show the valley is a cheerful place", "They guide Gatsby back to Daisy"] },
          reveals: "The human cost — the Wilsons — of the careless wealth on either side of the valley.",
          conceals: "The billboard's meaning is left open; the eyes watch but explain nothing, and characters read into them what they need.",
          ace: "Articulate what the valley of ashes represents; connect the eyes to the theme of moral decay; extend it to how a society can look away from the cost of its wealth."
        },
        {
          id: "car", name: "The Yellow Car", image: "images/car.webp",
          clues: ["Gatsby drives a bright, expensive yellow automobile.", "On the way back from the city, it strikes and kills Myrtle Wilson.", "Daisy was driving, but Gatsby chooses to take the blame."],
          identify: { q: "What is this object?", choices: ["Gatsby's yellow car, which strikes and kills Myrtle Wilson", "Tom Buchanan's blue coupe", "Nick's old Ford", "A taxi from the Plaza Hotel"] },
          purpose: { q: "What role does it play?", choices: ["It causes the fatal accident that sets the tragedy's end in motion", "It wins Gatsby a race", "It carries guests to a party", "It belongs to the police"] },
          significance: { q: "What is its literary significance?", choices: ["The car ties Gatsby's dream to disaster and leads Wilson to him", "It proves Gatsby is a careful driver", "It shows Daisy confesses the truth", "It has no effect on the plot"] },
          reveals: "How the careless world of the Buchanans lets Gatsby absorb the blame — and the danger.",
          conceals: "It hides, from Wilson, that Daisy was the driver; that gap in the truth gets Gatsby killed.",
          ace: "Articulate what happens with the yellow car; connect it to the theme of carelessness; extend it to how the powerful let others carry the blame."
        },
        {
          id: "shirts", name: "The Reunion and Gatsby's Shirts", image: "images/shirts.webp",
          clues: ["Nick arranges for Gatsby and Daisy to meet again at his cottage after years apart.", "Gatsby leads Daisy through his mansion to impress her.", "Displaying his many beautiful imported shirts, he moves her to tears."],
          identify: { q: "What does this reconstruct?", choices: ["The reunion of Gatsby and Daisy, including the scene with his shirts", "Gatsby's first meeting with Nick", "Tom and Myrtle's apartment party", "Gatsby's funeral"] },
          purpose: { q: "What is its purpose in the story?", choices: ["To rekindle the romance and show how Gatsby uses wealth to court Daisy", "To sell Daisy some shirts", "To introduce Jordan Baker", "To end the affair"] },
          significance: { q: "What is its literary significance?", choices: ["It fuses love and materialism — Gatsby's feelings and his fortune become impossible to separate", "It proves Daisy cares nothing for Gatsby", "It shows Gatsby is poor", "It closes the novel"] },
          reveals: "How completely Gatsby has wrapped his love for Daisy inside displays of wealth.",
          conceals: "It hides whether Daisy loves Gatsby himself or the luxury and second chance he represents.",
          ace: "Articulate what the shirt scene shows; connect wealth to love in Gatsby's mind; extend it to how money and feeling get tangled together."
        },
        {
          id: "plaza", name: "The Confrontation at the Plaza Hotel", image: "images/plaza.webp",
          clues: ["On the hottest day of the summer, the group gathers in a suite at the Plaza Hotel.", "Tom challenges Gatsby and exposes how he really made his money.", "Daisy cannot bring herself to say she never loved Tom."],
          identify: { q: "What does this reconstruct?", choices: ["The confrontation at the Plaza Hotel between Gatsby and Tom", "A party at Gatsby's mansion", "A meeting at Wilson's garage", "Nick's dinner in East Egg"] },
          purpose: { q: "What does the scene do?", choices: ["It brings the rivalry into the open and tests Daisy's choice", "It celebrates Gatsby and Daisy's engagement", "It closes a bond-trading deal", "It plans a trip west"] },
          significance: { q: "What is its literary significance?", choices: ["Tom's exposure shatters Gatsby's dream; Daisy retreats to the safety of old money", "It proves Daisy will leave Tom", "It shows Tom apologizing to Gatsby", "It has no effect on the ending"] },
          reveals: "That Gatsby's dream depends on Daisy erasing her past — something she will not do.",
          conceals: "It leaves Daisy's true feelings uncertain; she chooses safety, but the novel never fully explains her heart.",
          ace: "Articulate what happens at the Plaza; connect it to the barrier of class; extend it to how a dream can collapse when reality is finally spoken aloud."
        },
        {
          id: "schedule", name: "James Gatz's Self-Improvement Schedule", image: "images/schedule.webp",
          clues: ["After Gatsby's death, his father shows Nick a boyhood book of the young James Gatz.", "Inside is a strict daily schedule and a list of resolutions for self-improvement.", "It reveals the poor farm boy who reinvented himself as Jay Gatsby."],
          identify: { q: "What is this document?", choices: ["Young James Gatz's self-improvement schedule, kept from boyhood", "Gatsby's guest list for his parties", "Nick's bond-trading notes", "Tom's racing trophies"] },
          purpose: { q: "What does it reveal?", choices: ["The disciplined, self-made effort behind Gatsby's reinvention", "That Gatsby was born wealthy", "A list of Gatsby's crimes", "A plan for the Plaza confrontation"] },
          significance: { q: "What is its literary significance?", choices: ["It shows the American-Dream drive that made — and doomed — Gatsby", "It proves Gatsby never worked hard", "It shows Gatsby forgot his past", "It ends the valley of ashes"] },
          reveals: "That Gatsby's grandeur grew from a real, striving boy — the Dream's promise at its purest.",
          conceals: "It hides how that same relentless striving curdled into obsession and illegal wealth.",
          ace: "Articulate what the schedule shows about young Gatz; connect it to the American Dream; extend it to how ambition can build a person up and hollow them out."
        }
      ]
    },

    ctob: {
      name: "The Case of the Green Light",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "West Egg and East Egg face each other across the bay. How many 'Eggs' are there? Enter the number.",
          evidence: ["Gatsby and Nick live in West Egg, home to new money.", "The Buchanans live across the water in East Egg, home to old money.", "The two communities stare at each other across a small bay."],
          hints: ["Count West Egg and East Egg.", "It is the number of communities named 'Egg.'", "The number is 2."],
          answer: "2"
        },
        {
          type: "word",
          prompt: "What is the narrator's surname — the man who rents the cottage next to Gatsby? (one word)",
          evidence: ["He is Daisy's cousin and moves east to learn the bond business.", "He rents a small house beside Gatsby's mansion in West Egg.", "His first name is Nick, and his surname begins with 'Carra-.'"],
          hints: ["The narrator's first name is Nick.", "It begins with 'Carra…'.", "His surname is Carraway."],
          answer: "Carraway"
        },
        {
          type: "word",
          prompt: "What was Gatsby's real family name before he reinvented himself? (one word)",
          evidence: ["He was born to poor farmers in North Dakota.", "As a young man he changed his name to Jay Gatsby.", "His birth surname is short and begins with 'Ga-.'"],
          hints: ["He was born James ______.", "It begins with 'Gat…'.", "His birth name was James Gatz."],
          answer: "Gatz"
        },
        {
          type: "mc",
          prompt: "The green light at the end of Daisy's dock most represents —",
          options: [
            "Gatsby's hope and his longing to reclaim Daisy and the past.",
            "a signal that warns boats away from the shore.",
            "Tom Buchanan's political ambitions.",
            "the wealth of the valley of ashes."
          ],
          hints: ["Think about what Gatsby reaches toward in the dark.", "Which option is about hope and longing?"]
        },
        {
          type: "sequence",
          prompt: "Put these events in order, earliest first.",
          items: [
            "Nick arranges the reunion of Gatsby and Daisy at his cottage.",
            "Tom exposes how Gatsby made his money during the Plaza confrontation.",
            "Daisy, driving Gatsby's car, strikes and kills Myrtle.",
            "George Wilson shoots Gatsby."
          ],
          hints: ["The reunion comes first.", "The Plaza confrontation comes before the accident.", "Gatsby's death comes last."]
        },
        {
          type: "mc",
          prompt: "Why does Gatsby take the blame for the fatal accident?",
          options: [
            "To protect Daisy, out of his devotion to the dream of her.",
            "Because he was actually the one driving the car.",
            "Because the police order him to confess.",
            "Because Tom asks him to."
          ],
          hints: ["Think about who was really driving.", "Which option is about protecting Daisy?"]
        }
      ]
    },

    arcade: {
      name: "Whose Fault Was It? Illusion vs. Carelessness",
      instruction: "Nick finally blames the tragedy on both Gatsby's impossible dream and the Buchanans' careless privilege. Sort each piece of evidence by which reading it most directly supports: Gatsby's illusion, or the Buchanans' carelessness. There is room to argue — sort by what the evidence backs best. Reasoning earns the points.",
      buckets: [
        { id: "gatsby", label: "Gatsby's illusion (chasing a dream)", short: "Illusion" },
        { id: "buchanans", label: "The Buchanans' carelessness (privilege without care)", short: "Carelessness" }
      ],
      cards: [
        { text: "Gatsby rebuilds his whole identity and fortune to win back a woman from years ago.", bucket: "gatsby", why: "His entire life is bent around an idealized dream of Daisy." },
        { text: "He insists he can 'repeat the past' and recover what he once had with Daisy.", bucket: "gatsby", why: "Believing the past can be restored is the heart of his illusion." },
        { text: "He watches the green light across the bay night after night.", bucket: "gatsby", why: "He turns a distant light into proof that his dream is still within reach." },
        { text: "He takes the blame for the deadly crash to shield Daisy.", bucket: "gatsby", why: "Even at the end, devotion to the dream of her overrides his own safety." },
        { text: "Daisy drives Gatsby's car, kills Myrtle, and never stops.", bucket: "buchanans", why: "She flees the consequences of a death she caused." },
        { text: "Tom carries on an open affair and once breaks Myrtle's nose when she defies him.", bucket: "buchanans", why: "His careless cruelty treats other people as disposable." },
        { text: "After the deaths, Tom and Daisy leave town and let others clean up.", bucket: "buchanans", why: "Their money lets them walk away untouched." },
        { text: "Tom tells George Wilson that the car belonged to Gatsby.", bucket: "buchanans", why: "He points a grieving, armed man toward Gatsby without a second thought." }
      ],
      followup: "Nick calls Tom and Daisy 'careless people' who smash things and retreat into their money. Using specific moments, argue how much of the tragedy comes from Gatsby's illusion and how much from the Buchanans' carelessness — and whether Fitzgerald lets anyone off the hook."
    },

    analysis: {
      mcq: [
        {
          q: "Nick Carraway is best described as —",
          options: [
            "a first-person peripheral narrator who takes part in the story while mostly observing others.",
            "an all-knowing narrator standing outside the story.",
            "the novel's main hero and central figure.",
            "a narrator who never appears in the events he describes."
          ],
          why: "Nick both participates and observes, and his biases color how we see Gatsby and the Buchanans."
        },
        {
          q: "The green light most symbolizes —",
          options: [
            "Gatsby's hope and his longing for Daisy and an idealized past.",
            "a warning to passing ships.",
            "Tom's wealth and power.",
            "the end of Prohibition."
          ],
          why: "Gatsby reaches toward the light as the emblem of the future he wants to reclaim."
        },
        {
          q: "The valley of ashes and the eyes of Doctor T. J. Eckleburg mainly suggest —",
          options: [
            "moral and spiritual decay beneath the era's glittering wealth.",
            "the health benefits of good eye care.",
            "the natural beauty of Long Island.",
            "Gatsby's business success."
          ],
          why: "The grey wasteland and the watching, empty eyes point to a lost moral order behind the wealth."
        },
        {
          q: "The confrontation at the Plaza Hotel is a turning point because it —",
          options: [
            "forces the rivalry into the open and shatters Gatsby's dream when Tom exposes him.",
            "reunites Gatsby and Daisy for the first time.",
            "shows Tom willingly giving up Daisy.",
            "has no effect on the plot."
          ],
          why: "Tom's exposure and Daisy's retreat break the dream Gatsby has built everything upon."
        },
        {
          q: "By the end, the novel presents the American Dream as —",
          options: [
            "corrupted — promising self-reinvention but delivering illusion, class barriers, and loss.",
            "fully achieved and rewarded.",
            "irrelevant to the characters.",
            "a simple matter of hard work always paying off."
          ],
          why: "Gatsby remakes himself yet dies alone and excluded; the Dream's promise proves hollow."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops a central symbol or theme (the American Dream, class, illusion, or moral decay).",
        "Nick is both a participant and an observer. Using specific evidence, explain how his point of view shapes — and possibly biases — our judgment of Gatsby.",
        "Explain how one symbol (the green light, the valley of ashes, or the eyes of Doctor T. J. Eckleburg) carries a theme of the novel. What does the symbol let Fitzgerald say indirectly?"
      ],
      paragraph: "Write an evidence-based paragraph. Is Gatsby 'great'? Decide whether the novel finally admires him, criticizes him, or both, and support your claim with specific moments.",
      aceReflection: "Articulate what the green light symbolizes. Connect two themes (such as the American Dream and class, or illusion and carelessness). Extend the idea of a symbol carrying a person's hope to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "A Symbol of Someone's Hope",
      prompt: "Fitzgerald lets a single green light carry all of Gatsby's hope, and has an observer — Nick — describe it so we see both the dream and its cracks. Choose a modern object that could stand for a character's hope or illusion. Write a short scene narrated by an observer (a friend, a neighbor) who describes the object and what it reveals about the dreamer — including what the dreamer cannot see.",
      format: "A short observer-narrated scene built around one symbol, plus a note on what the symbol reveals and where it stops working."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the green light works as a symbol in The Great Gatsby. Do not answer for me. Ask me one question at a time that helps me explain, in my own words, what the green light stands for and how it changes. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in The Great Gatsby. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in The Great Gatsby because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Great Gatsby: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply the idea of a symbol that carries a character's hope to a modern situation, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether Gatsby is truly 'great' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of The Great Gatsby — Nick's peripheral narration, the novel's central symbols, and its critique of the American Dream and class. It never reproduces Fitzgerald's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#64317) and LibriVox recording (version 1) are the 1925 novel; verify the link and edition before assigning.",
        "The Great Gatsby entered the U.S. public domain on January 1, 2021. Copyright status can differ by country — confirm for your location and verify any specific edition you assign.",
        "Details here come from the novel (West Egg and East Egg; the green light; the valley of ashes and Doctor T. J. Eckleburg's eyes; Gatsby's parties; the reunion; the Plaza confrontation; Myrtle's death; Gatsby's murder; James Gatz's schedule). Confirm against your edition.",
        "Mature content is significant: extramarital affairs, heavy drinking during Prohibition, domestic violence (Tom breaks Myrtle's nose), a fatal car crash, and two deaths. Preview for maturity and align with local policy.",
        "Tom Buchanan voices racist and white-supremacist ideas; teachers may frame these as the novel's critique of his character, not endorsement.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (symbolism, point of view), and multiple-genre strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.2", "RL.9-10.4", "RL.11-12.4", "RL.9-10.6", "RL.11-12.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
