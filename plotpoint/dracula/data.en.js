/* PlotPoint — Dracula (Bram Stoker).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   facts from the 1897 novel; standards codes are only those given by the build
   plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "dracula",
  storageKey: "plotpoint.dracula.v1",

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
    "vocab.title": "Words for Dracula",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Demeter Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this document or object?",
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
    "ctob.title": "The Missing Ship Log",
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
    "arcade.title": "Night Route",
    "arcade.default": "Sort each card into the force that best explains it.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Sources to weigh",
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
    "extend.title": "Tell It in Documents",
    "extend.format": "Format",
    "extend.evidence": "The epistolary technique I am building on",
    "extend.transfers": "What transfers to my modern account",
    "extend.changes": "What changes with modern documents",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My found-document account",
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
    "print.item.extend": "Found-document organizer",
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
      title: "Dracula",
      author: "Bram Stoker",
      grades: "Grades 9–12",
      genre: "Gothic horror · Epistolary novel",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "1897 first edition is public domain",
      textAccess: "Students need a public-domain edition of the 1897 novel. This room does not reproduce the text.",
      copyright: "The 1897 first edition is public domain; some annotated, abridged, or translated editions carry their own copyright. Verify your edition before sharing.",
      contentNote: "Gothic horror with themes of death, illness, and menace. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/345",
      audio: "https://librivox.org/dracula-by-bram-stoker/"
    },
    hook: "There is no single narrator to trust. Dracula reaches us only as a stack of letters, diaries, telegrams, and ship's logs — and the reader must assemble the truth from the documents, just as the characters do.",
    goals: [
      "Analyze how Stoker builds the novel entirely from documents (an epistolary structure) and why that choice matters.",
      "Reconstruct events and movement by sequencing and cross-checking first-hand records.",
      "Evaluate narrators and sources for reliability, distinguishing evidence from rumor and superstition.",
      "Connect setting and structure to the novel's suspense, and transfer the found-document technique to a new situation."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an epistolary (document-based) novel.",
        "Discuss: How do we decide a document is trustworthy? What makes a first-hand account convincing?"
      ],
      during: [
        "Use the Relic Room to read one document or object at a time.",
        "Track which accounts corroborate each other — and which rest on fear or hearsay."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to build your own found-document account."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Stoker tells Dracula through documents. Include one detail from the novel that shows the effect." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two documents or accounts from the novel. Explain how comparing them changes your understanding of an event, a character, or the suspense." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the found-document technique to a modern event. Explain what transfers, what changes with today's media, and where the comparison stops working." }
    },

    vocab: [
      { term: "epistolary", def: "Told through documents such as letters, diaries, and reports rather than by a single narrator.", example: "A novel assembled from characters' journals and telegrams.", nonexample: "A story told straight through by one all-knowing narrator.", context: "Dracula is an epistolary novel built from many first-hand documents." },
      { term: "foreboding", def: "A strong feeling that something bad is about to happen.", example: "A sense of dread as the carriage climbs toward the dark castle.", nonexample: "Cheerful confidence that all is well.", context: "Harker's journal fills with foreboding as he realizes he is a prisoner." },
      { term: "superstition", def: "A belief in supernatural causes or protections not based on reason or evidence.", example: "Villagers pressing a crucifix on a traveler for protection.", nonexample: "A doctor's diagnosis based on symptoms.", context: "The 'superstitions' of the villagers turn out to warn of a real danger." },
      { term: "solicitor", def: "In Britain, a lawyer who handles legal business such as property and contracts.", example: "A solicitor sent to finalize a client's purchase of a house.", nonexample: "A ship's captain.", context: "Jonathan Harker travels to Transylvania as a solicitor to complete a property sale." },
      { term: "revenant", def: "A being that has returned from the dead; one of the 'undead.'", example: "A corpse that rises and walks at night.", nonexample: "A living, healthy person.", context: "Van Helsing argues they are facing a revenant, not an ordinary criminal." },
      { term: "transfusion", def: "The transfer of blood from one person into another.", example: "Giving blood to a patient who has lost too much.", nonexample: "Taking a person's temperature.", context: "The doctors attempt transfusions to save a weakening victim." },
      { term: "asylum", def: "An institution for the care of people with mental illness (an older term).", example: "A hospital where Dr. Seward keeps records of his patients.", nonexample: "A public library.", context: "Dr. Seward runs an asylum next to the estate Dracula has bought." },
      { term: "corroborate", def: "To support or confirm a claim with additional evidence.", example: "Two separate diaries describing the same event the same way.", nonexample: "A single rumor with no source.", context: "The characters corroborate the impossible by comparing their documents." },
      { term: "dread", def: "Deep, anticipatory fear of something to come.", example: "Lying awake, listening for a sound at the window.", nonexample: "Relaxed boredom on a quiet afternoon.", context: "Stoker sustains dread by revealing danger through fragments." },
      { term: "provincial", def: "Relating to regions outside the capital; sometimes suggesting the local or old-fashioned.", example: "A remote mountain village far from the city.", nonexample: "A busy national capital.", context: "The provincial setting of Transylvania heightens Harker's isolation." }
    ],

    relic: {
      name: "The Demeter Archive",
      intro: "Seven instructional reconstructions of the documents and objects through which Dracula's story reaches us — teaching recreations, not copyrighted illustrations. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "log", name: "The Demeter's Captain's Log", image: "images/log.png",
          clues: ["This record is kept aboard the ship carrying Dracula's cargo to England.", "Its entries grow more fearful as crew members vanish one by one.", "The captain is found dead, lashed to the wheel, with the log telling what happened."],
          identify: { q: "What is this document?", choices: ["The captain's log of the ship Demeter", "Harker's journal", "A doctor's prescription", "A newspaper advertisement"] },
          purpose: { q: "What is its purpose?", choices: ["To record the ship's voyage and events at sea", "To sell tickets to passengers", "To map the London streets", "To list Dracula's servants"] },
          significance: { q: "What is its literary significance?", choices: ["It lets the reader witness the horror at sea through a doomed first-hand record", "It proves the crew were criminals", "It shows the weather was calm", "It ends the novel"] },
          reveals: "How Stoker delivers terror as documented fact — a log we read as the crew disappears.",
          conceals: "It hides exactly what the sailors saw; the log records the effects, not a clear sight of the cause.",
          ace: "Articulate what the log lets the reader witness; connect it to the epistolary structure; extend it to how a recovered recording can make a story feel real today."
        },
        {
          id: "earthbox", name: "A Box of Transylvanian Earth", image: "images/earthbox.png",
          clues: ["Dracula ships a large number of heavy wooden boxes to England.", "Each is filled with soil from his homeland.", "He must rest on this native earth, so the boxes become his hiding places."],
          identify: { q: "What is this object?", choices: ["One of Dracula's boxes of native earth", "A coffin-maker's sample", "A crate of books", "A shipment of tea"] },
          purpose: { q: "What is its purpose for Dracula?", choices: ["A resting place of native soil he needs to survive in England", "A gift for Harker", "Ballast for the ship", "A donation to a church"] },
          significance: { q: "What is its literary significance?", choices: ["Finding and sterilizing the boxes becomes the strategy for defeating him", "It proves Dracula is a gardener", "It shows he is poor", "It explains the weather"] },
          reveals: "That Dracula has a concrete weakness the hunters can act on — a rule to the horror.",
          conceals: "It hides how many boxes remain hidden at any moment, sustaining suspense.",
          ace: "Articulate why the earth matters; connect the boxes to the hunt's strategy; extend it to how a monster with rules changes a story's tension."
        },
        {
          id: "journal", name: "Jonathan Harker's Shorthand Journal", image: "images/journal.png",
          clues: ["This traveler keeps a private journal in shorthand.", "He records his growing realization that he is a prisoner in the castle.", "Because it is in shorthand, others cannot easily read it at first."],
          identify: { q: "Whose document is this?", choices: ["Jonathan Harker's private journal", "The Demeter captain's log", "Dr. Seward's case notes", "Mina's recipe book"] },
          purpose: { q: "What is its purpose?", choices: ["To privately record what he witnesses at the castle", "To advertise a property", "To bill a client", "To chart the stars"] },
          significance: { q: "What is its literary significance?", choices: ["It is a first-hand account of the castle that later helps the others understand the threat", "It proves Harker is dishonest", "It shows the castle is comfortable", "It sets the ship's route"] },
          reveals: "How private writing becomes crucial shared evidence once the characters pool their records.",
          conceals: "It hides, for a time, what Harker knows — because no one else can yet read his shorthand.",
          ace: "Articulate the value of Harker's journal; connect private writing to shared evidence; extend it to how a personal record can later matter to others."
        },
        {
          id: "newspaper", name: "The Whitby Newspaper Clipping", image: "images/newspaper.png",
          clues: ["A great storm drives a strange ship aground at an English seaside town.", "A local paper reports the wreck and the dead captain.", "The clipping is pasted into the characters' collected records."],
          identify: { q: "What is this document?", choices: ["A newspaper report of the storm and shipwreck at Whitby", "A love letter", "A ship's manifest", "A medical chart"] },
          purpose: { q: "What is its purpose in the archive?", choices: ["To supply a public, outside account of the ship's arrival", "To advertise the asylum", "To record Harker's journey home", "To list Dracula's boxes"] },
          significance: { q: "What is its literary significance?", choices: ["A public record corroborates the private diaries, making the impossible feel documented", "It proves newspapers are unreliable", "It shows the town is cheerful", "It ends the hunt"] },
          reveals: "How Stoker mixes public and private documents so the accounts confirm one another.",
          conceals: "It hides the supernatural cause behind an ordinary headline about a storm.",
          ace: "Articulate what the clipping adds; connect public and private records; extend it to how news coverage shapes belief in an event today."
        },
        {
          id: "phonograph", name: "Dr. Seward's Phonograph Diary", image: "images/phonograph.png",
          clues: ["This doctor records his diary by speaking into a phonograph.", "He runs an asylum and observes a patient obsessed with consuming life.", "His spoken recordings are later transcribed to join the written records."],
          identify: { q: "Whose document is this?", choices: ["Dr. Seward's spoken diary on phonograph", "Harker's shorthand journal", "The Demeter's log", "Lucy's letter"] },
          purpose: { q: "What is its purpose?", choices: ["To record his observations, including his strange patient", "To play music for patients", "To sell recordings", "To send telegrams"] },
          significance: { q: "What is its literary significance?", choices: ["It shows Stoker using cutting-edge 1890s technology to make the record feel modern and real", "It proves Seward is careless", "It shows the asylum is empty", "It sets the ship's course"] },
          reveals: "How new recording technology adds another kind of first-hand evidence to the case.",
          conceals: "It hides meaning in plain sight — Seward records his patient's ravings without yet grasping them.",
          ace: "Articulate why the phonograph diary matters; connect technology to credibility; extend it to how recordings serve as evidence now."
        },
        {
          id: "letter", name: "The Letters of Mina and Lucy", image: "images/letter.png",
          clues: ["Two close friends write to each other about their lives and worries.", "Their letters record ordinary events just before danger arrives.", "The contrast between their warmth and what follows deepens the dread."],
          identify: { q: "What are these documents?", choices: ["Personal letters between Mina and Lucy", "The captain's log", "A newspaper clipping", "A property contract"] },
          purpose: { q: "What is their purpose?", choices: ["To share news and feelings between friends", "To advertise a house", "To record a voyage", "To bill a client"] },
          significance: { q: "What is their literary significance?", choices: ["Their everyday warmth makes the coming horror land harder and humanizes the victims", "They prove the women are unimportant", "They set the ship's route", "They end the novel"] },
          reveals: "How ordinary correspondence grounds the novel's people before terror strikes.",
          conceals: "It hides the danger already gathering behind the friends' small daily concerns.",
          ace: "Articulate what the letters establish; connect ordinary life to rising dread; extend it to how everyday messages read differently once we know what came next."
        },
        {
          id: "medbag", name: "Van Helsing's Medical Bag and Notes", image: "images/medbag.png",
          clues: ["A learned doctor arrives with both modern medicine and old knowledge.", "His bag holds instruments for transfusions and remedies against the threat.", "He takes the villagers' 'superstitions' seriously as evidence."],
          identify: { q: "Whose belongings are these?", choices: ["Professor Van Helsing's medical bag and notes", "Harker's luggage", "The captain's sea chest", "Renfield's box"] },
          purpose: { q: "What is their purpose?", choices: ["To treat the victims and combat the threat with knowledge old and new", "To sell medicine", "To chart the coast", "To record music"] },
          significance: { q: "What is their literary significance?", choices: ["Van Helsing bridges science and folklore, modeling how the hunters weigh all the evidence", "They prove science always fails", "They show he is a fraud", "They set the ship's route"] },
          reveals: "A method: take every source seriously, then test it — even the ones reason would dismiss.",
          conceals: "It hides how much even Van Helsing does not yet know as he improvises against the threat.",
          ace: "Articulate Van Helsing's approach; connect science and folklore in the novel; extend it to how we should weigh unfamiliar evidence today."
        }
      ]
    },

    ctob: {
      name: "The Missing Ship Log",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What is the name of the ship that carries Dracula and his boxes of earth to England? (one word)",
          evidence: ["A ship sails from the Black Sea toward England carrying a strange cargo.", "Its log records the crew vanishing one by one.", "The vessel's name begins with 'D.'"],
          hints: ["It is named after a Greek goddess of the harvest.", "It begins with 'Deme…'.", "The ship is the Demeter."],
          answer: "Demeter"
        },
        {
          type: "word",
          prompt: "At which English seaside town does the ship run aground during a great storm? (one word)",
          evidence: ["A violent storm drives the ship onto the shore of a northern English town.", "A local newspaper reports the wreck.", "The town's name begins with 'W.'"],
          hints: ["A harbor town in Yorkshire.", "It begins with 'Whit…'.", "The town is Whitby."],
          answer: "Whitby"
        },
        {
          type: "digit",
          prompt: "How many boxes of native earth does Dracula bring to England, which the hunters must track down? Enter the number.",
          evidence: ["Dracula must rest on soil from his homeland.", "He ships his earth in many identical wooden boxes.", "The novel gives the count as fifty."],
          hints: ["It is a round number.", "Half of one hundred.", "The number is 50."],
          answer: "50"
        },
        {
          type: "mc",
          prompt: "The novel is told mainly through —",
          options: [
            "letters, diaries, logs, and clippings — an epistolary structure.",
            "a single all-knowing narrator.",
            "Dracula's own confession.",
            "a modern courtroom transcript."
          ],
          hints: ["Think about the form of every chapter.", "Which option names document types?"]
        },
        {
          type: "sequence",
          prompt: "Put these stages of Dracula's approach to England in order, earliest first.",
          items: [
            "Jonathan Harker visits Castle Dracula in Transylvania.",
            "Dracula sails toward England aboard the Demeter.",
            "The ship wrecks at Whitby during a storm.",
            "Dracula begins preying on people in England."
          ],
          hints: ["It starts far away, at the castle.", "The sea voyage comes before the wreck.", "The attacks in England come last."]
        },
        {
          type: "mc",
          prompt: "Why does the epistolary form make the horror feel more believable?",
          options: [
            "Multiple first-hand accounts corroborate one another, so the impossible seems documented.",
            "It hides all the scary parts from the reader.",
            "It proves none of the characters can be trusted.",
            "It removes all suspense from the story."
          ],
          hints: ["Think about what happens when separate records agree.", "Which option is about corroboration?"]
        }
      ]
    },

    arcade: {
      name: "Night Route",
      instruction: "The hunters must assemble the truth from many sources — but not all sources are equal. Sort each one: is it a FIRST-HAND RECORD (a document written by a direct witness) or RUMOR & SUPERSTITION (fear, hearsay, or folklore)? Note: in Dracula, the 'superstitions' often prove true — but that is not the same as documented evidence. Reasoning earns the points.",
      buckets: [
        { id: "record", label: "First-hand record", short: "Record" },
        { id: "rumor", label: "Rumor & superstition", short: "Rumor" }
      ],
      cards: [
        { text: "Harker's journal of his imprisonment in the castle", bucket: "record", why: "A direct, dated account written by the witness himself." },
        { text: "The Demeter captain's log of the crew disappearing", bucket: "record", why: "A contemporaneous first-hand record kept during the voyage." },
        { text: "Dr. Seward's phonograph diary from the asylum", bucket: "record", why: "A first-hand professional record of what Seward observed." },
        { text: "Van Helsing's written medical notes on the victims", bucket: "record", why: "A trained observer's documented findings." },
        { text: "Villagers pressing charms on Harker and warning him away", bucket: "rumor", why: "Folk superstition and warning — not a documented account of events." },
        { text: "Sailors' dockside gossip about a 'cursed' ship", bucket: "rumor", why: "Second-hand hearsay driven by fear, not first-hand record." },
        { text: "Old local legends about the castle on the hill", bucket: "rumor", why: "Folklore passed down, not a witness's document." },
        { text: "Panicked crowd talk after the Whitby storm", bucket: "rumor", why: "Rumor spreading through a frightened crowd, not a verified account." }
      ],
      followup: "Dracula is built from first-hand documents — yet the folk 'superstitions' keep turning out true. What does Stoker gain by making careful records and old fears point to the same conclusion?"
    },

    analysis: {
      mcq: [
        {
          q: "The central structural feature of Dracula is that it is —",
          options: [
            "an epistolary novel assembled from documents, with no single narrator.",
            "a play written entirely in dialogue.",
            "a poem told in rhyming stanzas.",
            "a memoir narrated by Dracula himself."
          ],
          why: "Every chapter is a document — a diary, letter, log, or clipping — and the reader assembles the story from them."
        },
        {
          q: "One main effect of telling the story through many first-hand documents is that it —",
          options: [
            "makes impossible events feel credible because separate records corroborate them.",
            "keeps the reader from ever feeling suspense.",
            "proves that none of the characters actually exist.",
            "removes all fear from the novel."
          ],
          why: "When independent accounts agree, the supernatural starts to feel documented and therefore harder to dismiss."
        },
        {
          q: "The novel's settings — a remote castle, a storm-struck harbor, an asylum — mainly work to —",
          options: [
            "build isolation and dread that heighten the suspense.",
            "provide comic relief.",
            "prove the story is a travel guide.",
            "explain the characters' finances."
          ],
          why: "Stoker chooses isolating, threatening settings that intensify vulnerability and fear."
        },
        {
          q: "Van Helsing is important partly because he —",
          options: [
            "takes folklore seriously as evidence while also using modern science.",
            "refuses to believe anything the others report.",
            "narrates the entire novel by himself.",
            "is the ship's captain."
          ],
          why: "He models weighing every source — old knowledge and new — which is how the hunters finally act effectively."
        },
        {
          q: "By giving Dracula concrete weaknesses (such as needing his native earth), Stoker —",
          options: [
            "gives the hunters a plan and gives the horror consistent rules.",
            "makes Dracula impossible to defeat.",
            "removes all danger from the story.",
            "proves Dracula is only a dream."
          ],
          why: "Rules and weaknesses turn dread into a solvable problem, which drives the second half's suspense."
        }
      ],
      short: [
        "Choose one document from the Relic Room. Using specific details, explain how its form (log, letter, diary, clipping) shapes what the reader learns and feels.",
        "Where in the novel do separate accounts corroborate one another? How does that agreement affect the reader's belief?",
        "Explain how one setting in the novel creates suspense. What specific details make it feel dangerous?"
      ],
      paragraph: "Write an evidence-based paragraph. Does the epistolary form make Dracula more frightening, more believable, or both? Make a claim and support it with specific documents from the novel.",
      aceReflection: "Articulate why Stoker tells the story through documents. Connect two records that corroborate an event. Extend the technique to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "Tell It in Documents",
      prompt: "Stoker builds terror from ordinary documents that slowly reveal something impossible. Choose a suspenseful modern event — a disappearance, a strange discovery, an unexplained signal — and tell it through 3–4 'found documents' (texts, emails, a police report, a social post, a voicemail transcript). Let the documents reveal the truth the way Stoker's do.",
      format: "A short found-document sequence (3–4 pieces), plus a note on what the document form adds that a single narrator could not."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Dracula is told through documents. Do not answer for me. Ask me one question at a time that helps me explain the epistolary technique in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Dracula. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [document one] connects to [document two] in Dracula because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Dracula: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to tell a modern suspense story through found documents like Dracula, about [event]. Give me two ways the technique might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Dracula's structure for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Dracula's epistolary structure and its handling of evidence, narration, and suspense. It never reproduces Stoker's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your class edition is public domain. The 1897 first edition is public domain; some annotated, abridged, or translated editions carry their own copyright.",
        "Details here come from the novel (the ship Demeter; the wreck at Whitby; the fifty boxes of earth; Seward's phonograph diary; Harker's shorthand journal). Confirm them against your edition, since details vary by printing.",
        "Dracula is Gothic horror with mature themes. Preview for maturity and align with local policy.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, multiple-genre, and author's-craft strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.5", "RL.11-12.5", "RL.9-10.6", "RL.11-12.6", "RL.9-10.7", "RL.11-12.7"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
