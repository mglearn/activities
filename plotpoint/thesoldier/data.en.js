/* PlotPoint — "The Soldier" by Rupert Brooke (1914).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1914 sonnet is in the public domain in the United States, so
   this room may reference the text directly. "The Soldier" is studied here as
   LITERATURE — sonnet form, personification, imagery, and tone — in a neutral,
   academic frame consistent with the Texas required literary-works list
   (19 TAC §110.70, English II / high school). Its idealized, patriotic view of a
   soldier's death reflects the romantic optimism of early 1914, before the
   disillusionment of trench warfare; that historical context is taught, not endorsed.
   The room paraphrases, quotes only brief public-domain phrases where a close reading
   needs them. Standards are good-faith alignment; TEKS/ELPS flagged "Needs review."
   Relic artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "thesoldier",
  storageKey: "plotpoint.thesoldier.v1",

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

    "nav.enter": "Enter the Poem", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Poem",
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
    "enter.readListenNote": "This 1914 sonnet is in the public domain. Use your class's copy or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Soldier",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "A Corner of a Foreign Field",
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
    "ctob.title": "For Ever England",
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
    "arcade.title": "Body or Spirit?",
    "arcade.default": "Sort each image by the part of the poem it belongs to.",
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
    "print.item.relic": "Foreign-field evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Personified-homeland organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/The_Soldier_(Brooke)",
      title: "The Soldier",
      author: "Rupert Brooke",
      grades: "English II",
      genre: "Poetry · Sonnet · War",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain",
      textAccess: "A short public-domain sonnet; use your class's copy or any public-domain text.",
      copyright: "This 1914 sonnet is in the public domain in the United States, so this room may reference the text directly. \"The Soldier\" is studied here as literature — its sonnet form, personification, imagery, and tone. The room paraphrases and quotes only brief public-domain phrases where a close reading needs them.",
      contentNote: "\"The Soldier\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. It is an idealized World War I poem contemplating a soldier's death; it is studied here as literature — sonnet form, personification, and tone — with its pre-trench-war patriotism treated as historical context, not endorsement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"The Soldier\" — a quiet green English field under a soft sky, wildflowers and a slow river, one small unmarked plot of turned earth set apart, calm and elegiac rather than grim."
    },
    hook: "Fourteen lines. A young soldier imagines his own death far from home and asks you to feel not horror but peace. If he dies abroad, he says, then \"some corner of a foreign field\" becomes \"for ever England\" — his body given back to the country that made him. Written in the hopeful first months of World War I, before the trenches taught a harder lesson, the poem turns dying for one's country into something beautiful. Read it as a sonnet, and watch how its personification of England as a loving mother carries the whole idea.",
    goals: [
      "Understand \"The Soldier\" as a sonnet: a fourteen-line poem that turns from an eight-line octave to a six-line sestet at the volta.",
      "Analyze its personification of England as a nurturing mother who bore, shaped, and made the speaker aware.",
      "Trace how the octave gives the body to England's soil and the sestet gives the spirit back as \"a pulse in the eternal mind.\"",
      "Interpret the poem's idealized, patriotic tone and place it in historical context — the romantic optimism of early 1914, before the disillusionment of trench warfare."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the shape of a sonnet — octave, sestet, and the turn (volta) between them.",
        "Discuss: how might a writer make dying for one's country sound noble and beautiful rather than terrible?"
      ],
      during: [
        "Use A Corner of a Foreign Field to slow down and read the poem image by image.",
        "Track the movement: from the body given to foreign soil in the octave to the spirit given back in the sestet."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the sonnet's structure and its personification of England.",
        "Complete the Extend task to compare its idealized patriotism, or its personified homeland, to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what the speaker asks the reader to \"think\" of him if he should die. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the octave (the body given to a foreign field) with the sestet (the spirit given back). Explain how moving from body to spirit shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — personifying a homeland as a loving parent, or idealizing sacrifice as beautiful — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "sonnet", def: "A fourteen-line poem, usually in iambic pentameter, with a set structure and a turn in its argument.", example: "\"The Soldier\" is a fourteen-line sonnet.", nonexample: "A three-line haiku.", context: "As a sonnet, the poem develops one idea across fourteen lines and then turns." },
      { term: "octave", def: "The first eight lines of a sonnet, which set up its situation or question.", example: "The octave of \"The Soldier\" gives the body to a foreign field.", nonexample: "The final couplet of a play.", context: "In the octave the speaker imagines his death and burial abroad." },
      { term: "sestet", def: "The last six lines of a sonnet, which respond to or resolve the octave.", example: "The sestet turns from the body to the spirit.", nonexample: "The opening line of a novel.", context: "The sestet shifts to the heart, the eternal mind, and an English heaven." },
      { term: "volta", def: "The 'turn' in a sonnet — the point where its thought shifts direction.", example: "The turn from body to spirit between the octave and sestet.", nonexample: "A word repeated for rhythm.", context: "The volta moves the poem from foreign soil to the eternal mind." },
      { term: "personification", def: "Giving human qualities or actions to something that is not human.", example: "Describing England as a mother who \"bore\" and \"shaped\" the speaker.", nonexample: "Describing a country only with map coordinates.", context: "The poem personifies England as a nurturing parent." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "England's flowers, rivers, air, and suns.", nonexample: "An abstract word like 'good' with no picture.", context: "The poem's imagery draws the English landscape the speaker loves." },
      { term: "tone", def: "The writer's attitude toward the subject, felt through word choice and imagery.", example: "The poem's calm, patriotic, idealizing tone about death.", nonexample: "A blunt list of casualty numbers.", context: "The tone treats dying for one's country as noble and beautiful." },
      { term: "theme", def: "The central idea or insight a work explores.", example: "Patriotic self-sacrifice imagined as noble and redemptive.", nonexample: "The number of stanzas in the poem.", context: "The poem's theme is dying for one's country seen as a beautiful gift." },
      { term: "elegiac", def: "Having the mournful, reflective tone of an elegy — a poem meditating on death.", example: "A quiet, tender meditation on one's own possible death.", nonexample: "A loud, cheerful marching chant.", context: "The poem is elegiac yet consoling rather than despairing." }
    ],

    relic: {
      name: "A Corner of a Foreign Field",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "corner", name: "Some Corner of a Foreign Field", image: "images/corner.webp",
          clues: ["The poem's central image: a grave abroad that becomes \"for ever England.\"", "The speaker asks the reader to \"think only this\" if he should die.", "A small plot of foreign soil is claimed for home."],
          identify: { q: "What does this opening image describe?", choices: ["A grave in a foreign field that the speaker imagines becoming \"for ever England\"", "A battlefield map in a general's tent", "A crowded English city street", "A ship crossing the sea"] },
          purpose: { q: "What is this image's role in the poem?", choices: ["It is the controlling image that turns a soldier's death abroad into a piece of home", "It appears once and is dropped", "It describes the enemy's homeland", "It has no connection to the rest"] },
          significance: { q: "Why claim the foreign field \"for ever England\"?", choices: ["It reframes death abroad as loyalty and belonging rather than loss", "It shows England wants to conquer more land", "It warns the reader to stay home", "It mocks the idea of patriotism"] },
          reveals: "The single controlling image of the whole sonnet.",
          conceals: "How a burial far from home is quietly turned into a homecoming.",
          ace: "Articulate the foreign-field image; connect it to the idea of belonging; extend it to why a place can stand for a whole country."
        },
        {
          id: "dust", name: "A Dust Whom England Bore", image: "images/dust.webp",
          clues: ["The speaker calls his body \"a dust whom England bore, shaped, made aware.\"", "England is described as if she were a mother.", "Everything the body is was given by England."],
          identify: { q: "What does \"a dust whom England bore, shaped, made aware\" describe?", choices: ["The speaker's body as something England created, like a mother's child", "A dust storm over a battlefield", "The ashes of a burned village", "A statue carved from English stone"] },
          purpose: { q: "What technique is at work in this line?", choices: ["Personification — England is given the human role of a mother who bore and shaped him", "A simile comparing dust to snow", "A rhyme scheme description", "A list of place names"] },
          significance: { q: "What does calling the body \"England's\" suggest?", choices: ["The speaker owes his whole self to his country, so giving it back seems natural", "England no longer cares for the speaker", "The body belongs to the foreign land", "The speaker regrets being English"] },
          reveals: "England pictured as a nurturing mother who made the speaker who he is.",
          conceals: "How personification makes self-sacrifice feel like repaying a debt of love.",
          ace: "Articulate the mother-England image; connect it to the idea of being 'made' by a place; extend it to how personifying a country changes how we feel about it."
        },
        {
          id: "landscape", name: "The English Landscape Given by England", image: "images/landscape.webp",
          clues: ["The speaker lists what England gave: her flowers, her ways to roam, her air, her rivers, her suns.", "These concrete images stand for everything that shaped him.", "The landscape is remembered with tenderness, not detail of war."],
          identify: { q: "What does this image gather together?", choices: ["The English landscape — flowers, rivers, air, and suns — that England gave the speaker", "A list of the soldier's weapons", "A map of enemy positions", "The streets of a foreign capital"] },
          purpose: { q: "Why fill the octave with gentle landscape images?", choices: ["To show, through the senses, everything England gave and the speaker loves", "To describe the terrain of the battle", "To warn of natural dangers", "To pad out the line count"] },
          significance: { q: "What do these images add to the poem's argument?", choices: ["They make England's gift concrete, so returning the body feels like gratitude", "They prove England is wealthier than other lands", "They show the speaker wants to leave England", "They introduce the poem's villain"] },
          reveals: "England's gift pictured as a whole loved landscape.",
          conceals: "How sensory imagery carries an abstract feeling of belonging.",
          ace: "Articulate the landscape image; connect it to the idea of a gift; extend it to how the places that shaped you carry emotion."
        },
        {
          id: "turn", name: "The Turn to the Spirit — A Pulse in the Eternal Mind", image: "images/turn.webp",
          clues: ["After eight lines about the body, the poem turns at the sestet.", "The speaker's heart becomes \"a pulse in the eternal mind.\"", "This is the sonnet's volta — its change of direction."],
          identify: { q: "What happens at this point in the poem?", choices: ["The sonnet turns (the volta) from the body to the spirit — \"a pulse in the eternal mind\"", "The poem restarts from the beginning", "The speaker returns to England alive", "A new speaker takes over"] },
          purpose: { q: "Why is this turn important to the sonnet's structure?", choices: ["It marks the volta, the shift from the eight-line octave to the six-line sestet", "It ends the poem abruptly", "It repeats the octave word for word", "It changes the poem into prose"] },
          significance: { q: "What does \"a pulse in the eternal mind\" suggest?", choices: ["The spirit lives on, joined to something larger and lasting", "The speaker's mind is failing", "The heart stops mattering", "England has forgotten him"] },
          reveals: "The sonnet's hinge — the move from body to spirit.",
          conceals: "How the octave-to-sestet turn organizes the poem's whole argument.",
          ace: "Articulate what changes at the turn; connect the body of the octave to the spirit of the sestet; extend it to why a poem's structure can carry its meaning."
        },
        {
          id: "givenback", name: "The Thoughts Given Back", image: "images/givenback.webp",
          clues: ["In the sestet the spirit \"gives back\" what England gave.", "The gifts returned are \"her sights and sounds; dreams happy as her day.\"", "They include \"laughter, learnt of friends\" and gentleness."],
          identify: { q: "What does the spirit \"give back\" in the sestet?", choices: ["England's sights, sounds, dreams, laughter, and gentleness", "The soldier's medals and weapons", "A list of the enemy's crimes", "The money England spent on him"] },
          purpose: { q: "How does 'giving back' echo the octave?", choices: ["The octave said England gave him everything; now the spirit returns those gifts", "It contradicts the octave", "It introduces a brand-new speaker", "It abandons England entirely"] },
          significance: { q: "What does returning these gifts complete?", choices: ["A full circle — what England gave is offered back, making the sacrifice feel whole", "A confession of guilt", "A demand for payment", "A change of loyalty to another country"] },
          reveals: "The sestet's gift-in-return, completing the exchange with England.",
          conceals: "How the poem's structure mirrors giving and giving back.",
          ace: "Articulate what is given back; connect it to the gifts named in the octave; extend it to how an idea of return can shape a whole poem."
        },
        {
          id: "heaven", name: "Under an English Heaven", image: "images/heaven.webp",
          clues: ["The poem's final image places everything \"under an English heaven.\"", "Even the afterlife is imagined as English.", "It closes the poem on a note of peace and idealized belonging."],
          identify: { q: "What does the closing image, \"under an English heaven,\" picture?", choices: ["A peaceful, idealized afterlife imagined as English", "A stormy sky over the battlefield", "The roof of an English church", "A foreign sky the speaker fears"] },
          purpose: { q: "Why end the poem this way?", choices: ["To close on peace and belonging, extending England even into the afterlife", "To leave the reader in fear", "To describe the weather realistically", "To criticize England"] },
          significance: { q: "What does making even heaven \"English\" reveal about the tone?", choices: ["The poem idealizes England so fully that belonging outlasts death", "The poem doubts there is any comfort", "The poem rejects the idea of home", "The poem turns bitter at the end"] },
          reveals: "The poem's idealized, consoling close.",
          conceals: "How completely the poem imagines England as home, even beyond death.",
          ace: "Articulate the English-heaven image; connect it to the poem's peaceful tone; extend it to how an ending can leave a reader feeling a certain way."
        },
        {
          id: "idealized", name: "The Idealized View of Death (Historical Context)", image: "images/idealized.webp",
          clues: ["The whole poem treats dying for one's country as noble and beautiful.", "It was written in 1914, in the hopeful first months of the war.", "It comes before the trenches and the later war poets' disillusionment."],
          identify: { q: "How does the poem present a soldier's death?", choices: ["As noble, beautiful, and redemptive — an idealized view", "As meaningless and horrifying", "As a minor, forgettable event", "As a defeat to be avenged"] },
          purpose: { q: "Why is the poem's 1914 date important context?", choices: ["It was written before trench warfare, capturing early-war optimism rather than later disillusionment", "It proves the poem is not really about war", "It means the poem is copyrighted", "It shows the poem was written after the war ended"] },
          significance: { q: "How can this idealized view be studied fairly today?", choices: ["As historical context — one real attitude of 1914, useful to contrast with later, harsher war poems", "As the only correct view of war", "As proof war is always beautiful", "As a reason to ignore the poem"] },
          reveals: "The poem's romantic, pre-trench-war idealism.",
          conceals: "How later war poetry would answer this view with realism.",
          ace: "Articulate the poem's idealized view of death; connect it to its 1914 date; extend it to how a later, more realistic poem might respond."
        }
      ]
    },

    ctob: {
      name: "For Ever England",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "If the speaker dies, a corner of a foreign field becomes, he says, \"for ever ______.\" (one word)",
          evidence: ["The whole poem is a tribute to one country.", "That country is imagined as the speaker's mother.", "The word begins with 'Eng…'."],
          hints: ["The speaker's home country.", "Eng…", "The word is England."],
          answer: "England"
        },
        {
          type: "mc",
          prompt: "In the octave, the speaker describes his body mainly as —",
          options: [
            "a \"dust\" that England bore, shaped, and made aware.",
            "a weapon forged for war.",
            "a stranger to England.",
            "a king's crown."
          ],
          hints: ["Look at how the speaker names what his body owes to England.", "Which option pictures England as a mother who made him?"]
        },
        {
          type: "mc",
          prompt: "The technique of describing England as a mother who \"bore\" and \"shaped\" the speaker is —",
          options: [
            "personification.",
            "onomatopoeia.",
            "alliteration.",
            "a rhyme scheme."
          ],
          hints: ["It gives a human role to something not human.", "England is treated as if she were a person — a parent."]
        },
        {
          type: "digit",
          prompt: "How many lines does this sonnet have? Enter the number.",
          evidence: ["The poem's form is a sonnet.", "A sonnet divides into an eight-line octave and a six-line sestet.", "Eight plus six."],
          hints: ["Count an octave plus a sestet.", "Eight plus six.", "The number is 14."],
          answer: "14"
        },
        {
          type: "sequence",
          prompt: "Put the poem's movements in the order they appear, earliest first.",
          items: [
            "\"If I should die, think only this of me\" — the opening request.",
            "A corner of a foreign field becomes \"for ever England.\"",
            "The turn (volta): the heart becomes \"a pulse in the eternal mind.\"",
            "Everything rests, at the close, \"under an English heaven.\""
          ],
          hints: ["The poem opens with a request to the reader.", "The volta comes after the octave, in the sestet.", "The English heaven closes the poem."]
        },
        {
          type: "mc",
          prompt: "At the volta, the poem turns from the body to —",
          options: [
            "the spirit — \"a pulse in the eternal mind.\"",
            "a description of the enemy.",
            "a battle scene in detail.",
            "the speaker's family tree."
          ],
          hints: ["The octave deals with the body and the foreign field.", "The sestet shifts to the heart, thoughts, and an English heaven."]
        }
      ]
    },

    arcade: {
      name: "Body or Spirit?",
      instruction: "\"The Soldier\" divides at its volta: the octave gives the body to England's soil, and the sestet gives the spirit back to the eternal mind. Sort each image by where it belongs: THE BODY (the physical / octave) or THE SPIRIT (the soul / sestet)? Reasoning earns the points.",
      buckets: [
        { id: "body", label: "The body (physical / octave)", short: "Body" },
        { id: "spirit", label: "The spirit (soul / sestet)", short: "Spirit" }
      ],
      cards: [
        { text: "A corner of a foreign field becoming \"for ever England.\"", bucket: "body", why: "The octave's grave-abroad image — the physical body given to the soil." },
        { text: "\"A dust whom England bore, shaped, made aware.\"", bucket: "body", why: "The body described as something England physically made." },
        { text: "England's flowers, rivers, air, and suns.", bucket: "body", why: "The octave's sensory landscape, tied to the physical world England gave." },
        { text: "The rich earth enriched by \"a richer dust.\"", bucket: "body", why: "The buried body enriching foreign soil — wholly physical, in the octave." },
        { text: "The heart as \"a pulse in the eternal mind.\"", bucket: "spirit", why: "The sestet's turn to the soul, joined to something lasting." },
        { text: "Giving back England's \"sights and sounds; dreams happy as her day.\"", bucket: "spirit", why: "The spirit returns England's gifts — the sestet's exchange." },
        { text: "\"Laughter, learnt of friends\" and gentleness.", bucket: "spirit", why: "Remembered feelings the spirit gives back, in the sestet." },
        { text: "Everything at peace \"under an English heaven.\"", bucket: "spirit", why: "The closing image of the afterlife — the realm of the spirit." }
      ],
      followup: "The octave gives the body; the sestet gives the spirit. What does dividing the gift into body and spirit suggest about how completely the speaker imagines giving himself to England?"
    },

    analysis: {
      mcq: [
        {
          q: "\"The Soldier\" is best identified by its form as a —",
          options: [
            "sonnet, a fourteen-line poem with an octave, a sestet, and a turn.",
            "haiku of seventeen syllables.",
            "limerick built for humor.",
            "free-verse poem with no set structure."
          ],
          why: "The poem is fourteen lines with an eight-line octave, a six-line sestet, and a volta between them."
        },
        {
          q: "Describing England as one who \"bore, shaped, made aware\" the speaker is an example of —",
          options: [
            "personification.",
            "onomatopoeia.",
            "hyperbole about numbers.",
            "a rhyme scheme."
          ],
          why: "England is given the human role of a mother who bore and shaped the speaker."
        },
        {
          q: "The octave and the sestet divide the poem's gift into —",
          options: [
            "the body given to foreign soil, then the spirit given back to the eternal mind.",
            "the past, then a prediction of the future battle.",
            "a question, then a list of enemies.",
            "a joke, then its punchline."
          ],
          why: "The octave buries the body abroad; the sestet turns, at the volta, to the returning spirit."
        },
        {
          q: "The overall tone of the poem toward dying for one's country is best described as —",
          options: [
            "idealized, peaceful, and patriotic.",
            "bitter and horrified.",
            "mocking and sarcastic.",
            "cold and indifferent."
          ],
          why: "The poem treats death for England as noble and beautiful, closing \"under an English heaven.\""
        },
        {
          q: "Knowing the poem was written in 1914, before trench warfare, best helps a reader —",
          options: [
            "place its idealism in historical context and contrast it with later, harsher war poetry.",
            "conclude the poem is not about war at all.",
            "decide the poem is factually inaccurate.",
            "ignore the poem's imagery."
          ],
          why: "The poem captures early-war optimism; later poets would answer that idealism with realism."
        }
      ],
      short: [
        "Choose one image from A Corner of a Foreign Field. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem personifies England as a mother who \"bore, shaped, made aware\" the speaker. Explain how this personification shapes the way the poem asks us to feel about the soldier's death.",
        "Explain the turn (volta) from the octave to the sestet — from the body in foreign soil to the spirit as \"a pulse in the eternal mind.\" How does that shift change the feeling of the poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"The Soldier\" use the sonnet form and personification to present a soldier's death as noble and beautiful? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about dying for one's country in your own words. Connect two images that develop it — one from the octave, one from the sestet. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"The Soldier\" carries a whole idea — that dying for one's country is noble and beautiful — through the personification of England as a loving mother. Choose another poem, song, story, or speech that does something similar (personifying a homeland, or idealizing sacrifice) — or choose a realistic war poem that answers Brooke's idealism. Explain the connection with evidence: what is the shared technique or idea, what changes in the other text, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's idealized patriotism or personified-homeland technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"The Soldier\" by Rupert Brooke uses personification of England to make dying for one's country sound noble. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"The Soldier.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in \"The Soldier\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"The Soldier\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect \"The Soldier\" — its idealized patriotism or its personified homeland — to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"The Soldier\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Rupert Brooke's \"The Soldier\" (1914) as a sonnet — a study of sonnet form (octave, sestet, volta), personification, imagery, and tone. The poem is in the public domain, so this room reproduces no copyrighted edition. \"The Soldier\" is presented as literature, with its idealized, patriotic view of a soldier's death treated as historical context — the optimism of early 1914, before the disillusionment of trench warfare — consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"The Soldier\" appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was published in 1914 and is in the public domain in the United States, so it may be used directly. This room still paraphrases and quotes only brief public-domain phrases where a close reading needs them.",
        "Teach as literature — sonnet form (octave, sestet, volta), personification of England as a mother, imagery, and tone. Present the poem's idealized, pre-trench-war patriotism as historical context (contrast it with later war poets such as Wilfred Owen or Siegfried Sassoon), not as endorsement.",
        "Details here were checked against the poem (the opening \"If I should die, think only this of me\"; \"some corner of a foreign field / That is for ever England\"; \"a dust whom England bore, shaped, made aware\"; England's flowers, air, rivers, and suns; the volta to \"a pulse in the eternal mind\"; the given-back sights, sounds, dreams, and \"laughter, learnt of friends\"; and the close \"under an English heaven\"). Longer passages are paraphrased, not reproduced.",
        "Confirm the English II TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English II ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, and author's purpose and craft — especially sonnet form, personification, imagery, tone, and theme. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
