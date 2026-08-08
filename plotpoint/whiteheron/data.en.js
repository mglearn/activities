/* PlotPoint — A White Heron (Sarah Orne Jewett, 1886).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (the climb, the offer,
   and the heron are described, not quoted). Standards are good-faith alignment
   to the Texas required literary-works list adopted 2026 under 19 TAC §110.30
   (Grade 6), with implementation no earlier than 2030–2031; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array;
   the engine shuffles. */
window.__ROOM__ = {
  id: "whiteheron",
  storageKey: "plotpoint.whiteheron.v1",

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
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for A White Heron",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Sylvia's Woods",
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
    "ctob.title": "The Heron's Secret",
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
    "arcade.title": "Tell the Hunter or Protect the Heron?",
    "arcade.default": "Sort each pull Sylvia feels toward one side of her choice.",
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
    "extend.title": "Nature or Reward?",
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
    "print.item.relic": "Woods evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Nature-or-reward organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/A_White_Heron",
      title: "A White Heron",
      author: "Sarah Orne Jewett",
      grades: "Grade 6",
      genre: "Short story · Regionalism",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1886)",
      textAccess: "A short public-domain story; use your class's copy or any public-domain text.",
      copyright: "Written in 1886, A White Heron is in the public domain. It is studied here as literature, paraphrasing and quoting only brief public-domain phrases; this room reproduces no full passages.",
      contentNote: "Adopted 2026 on the Texas required literary-works list under 19 TAC §110.30 (Grade 6), with implementation no earlier than 2030–2031. A gentle coming-of-age story set in the Maine woods; note that a rare bird is threatened with being shot for a collection (nothing graphic). Studied as literature; preview and align with local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking A White Heron — a great pine tree rising above the Maine woods at dawn, a white heron in flight, and a shy girl gazing toward the sea."
    },
    hook: "Sylvia is a shy nine-year-old who has left a crowded town to live with her grandmother in the Maine woods, where she loves the animals and the quiet. Then a friendly young hunter appears, offering ten dollars to anyone who can lead him to a rare white heron — so he can shoot it for his collection. Sylvia knows the woods better than anyone. Will she share the heron's secret, or keep it?",
    goals: [
      "Understand the plot of Jewett's story and the choice Sylvia must make.",
      "Analyze Sylvia as a shy child whose loyalty is to the wild things of the woods.",
      "Trace Jewett's regionalism and nature imagery, and the symbolism of the heron and the great pine.",
      "Interpret the story's conflict between nature and conscience on one side and money and approval on the other."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of regionalism and symbolism.",
        "Discuss: Would you give up a reward to protect something wild? What makes that choice hard?"
      ],
      during: [
        "Use Sylvia's Woods to slow down and read Sylvia's world, moment by moment.",
        "Track the nature imagery and the pull between the hunter's offer and Sylvia's love of the woods."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the conflict and the choice.",
        "Complete the Extend task to weigh nature and conscience against reward."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Sylvia stays silent instead of telling the hunter where the heron is. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the white heron to what Sylvia values. Explain how the bird becomes a symbol of the wild nature she chooses to protect." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's conflict between nature and reward to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "regionalism", def: "Writing that captures the speech, customs, and landscape of a specific place.", example: "Jewett's careful picture of the Maine woods and farm life.", nonexample: "A story set in no particular place at all.", context: "A White Heron is a classic work of New England regionalism." },
      { term: "symbolism", def: "Using an object or image to stand for a larger idea.", example: "The white heron standing for wild, untouched nature.", nonexample: "A detail that means only itself and nothing more.", context: "The story's symbolism turns a bird into a whole way of seeing the world." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "The sea, the sunrise, and the treetops seen from the pine.", nonexample: "A plain list of facts with no sensory detail.", context: "Jewett fills the climb with vivid nature imagery." },
      { term: "conflict", def: "A struggle between opposing forces or desires.", example: "Sylvia torn between helping the hunter and protecting the heron.", nonexample: "A scene where everyone agrees and nothing is at stake.", context: "The central conflict is nature and conscience against money and approval." },
      { term: "characterization", def: "The methods a writer uses to reveal what a character is like.", example: "Showing Sylvia's shyness and her love of the woods.", nonexample: "Naming a character but never showing who they are.", context: "Jewett's characterization makes Sylvia's silence feel earned." },
      { term: "theme", def: "The central idea or message a story explores.", example: "Choosing conscience and the natural world over reward.", nonexample: "A single event with no larger meaning.", context: "The theme weighs loyalty to the wild against the desire to please." },
      { term: "point of view", def: "The vantage point from which a story is told.", example: "Third-person narration that moves close to Sylvia's thoughts.", nonexample: "A story told with no narrator or perspective at all.", context: "The point of view shifts near to Sylvia at the story's key moments." },
      { term: "ornithologist", def: "A scientist who studies birds.", example: "The young hunter who collects and stuffs rare birds.", nonexample: "Someone with no interest in birds at all.", context: "The charming ornithologist wants the heron for his collection." },
      { term: "heron", def: "A tall wading bird with long legs and a long neck, often found near water.", example: "The rare white heron nesting near the sea.", nonexample: "A small songbird that never wades.", context: "The white heron is the wild creature at the heart of the story." }
    ],

    relic: {
      name: "Sylvia's Woods",
      intro: "Seven instructional reconstructions of characters and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "sylvia", name: "Sylvia and the Woods", image: "images/sylvia.webp",
          clues: ["Sylvia is a shy nine-year-old who left a crowded town to live in the woods.", "She loves the animals and feels she belongs among the trees.", "She knows the paths and creatures of the forest better than anyone."],
          identify: { q: "Who is Sylvia?", choices: ["A shy country girl who loves the woods and its animals", "A hunter visiting the farm", "Her grandmother's neighbor", "A scientist studying birds"] },
          purpose: { q: "What is Sylvia's role in the story?", choices: ["She is the main character whose choice drives the plot", "She sells wine in town", "She warns the heron of danger with a signal", "She has no importance"] },
          significance: { q: "What does her love of the woods reveal?", choices: ["That she belongs to nature, which shapes the choice she will make", "That she dislikes animals", "That she wants to leave the farm", "That she fears the forest"] },
          reveals: "A girl whose whole world is the living woods around her.",
          conceals: "Just how hard the coming choice will test that loyalty.",
          ace: "Articulate who Sylvia is; connect her love of the woods to her later silence; extend it to how where we belong can shape what we protect."
        },
        {
          id: "moolly", name: "The Cow, Mistress Moolly", image: "images/moolly.webp",
          clues: ["Sylvia tends a cow named Mistress Moolly each evening.", "The cow wanders the woods and Sylvia patiently brings her home.", "The quiet chore shows Sylvia's gentle daily life on the farm."],
          identify: { q: "What is Mistress Moolly?", choices: ["The cow Sylvia tends on the farm", "A rare wild bird", "The grandmother's dog", "A horse the hunter rides"] },
          purpose: { q: "What is the cow's role in the story?", choices: ["Tending her shows Sylvia's peaceful, patient life in nature", "She leads the hunter to the heron", "She is sold for ten dollars", "She has no purpose"] },
          significance: { q: "What does the daily chore reveal about Sylvia?", choices: ["She is patient, gentle, and at home in the natural world", "She is greedy for reward", "She is afraid of animals", "She wishes to return to town"] },
          reveals: "The calm rhythm of Sylvia's country life before the hunter arrives.",
          conceals: "The larger test that will soon interrupt that quiet.",
          ace: "Articulate what tending Moolly shows; connect the quiet chore to Sylvia's character; extend it to how small daily habits reveal who a person is."
        },
        {
          id: "hunter", name: "The Young Hunter", image: "images/hunter.webp",
          clues: ["A friendly young ornithologist arrives, carrying a gun.", "He is charming and pleasant, and Sylvia is drawn to him.", "He collects and stuffs birds, and is hunting a rare white heron to add to his collection."],
          identify: { q: "Who is the young hunter?", choices: ["A charming ornithologist who kills birds to collect them", "Sylvia's older brother", "A farmer selling a cow", "The heron's protector"] },
          purpose: { q: "What is the hunter's role in the story?", choices: ["He offers the reward that tempts Sylvia and creates the central conflict", "He raises the cow", "He guards the woods", "He has no importance"] },
          significance: { q: "What makes the hunter's charm troubling?", choices: ["He is kind, yet he wants to kill the very wild things Sylvia loves", "He is cruel to everyone", "He hates the outdoors", "He is a stranger to birds"] },
          reveals: "How a pleasant person can still pose a threat to what is wild.",
          conceals: "That his friendly manner is bound up with a deadly purpose.",
          ace: "Articulate who the hunter is; connect his charm to the temptation he brings; extend it to how likable people can still ask us to do harm."
        },
        {
          id: "offer", name: "The Ten-Dollar Offer", image: "images/offer.webp",
          clues: ["The hunter offers ten dollars to anyone who can help him find the heron.", "To Sylvia's poor grandmother, ten dollars is a large sum.", "The money — and the young man's approval — pull at Sylvia."],
          identify: { q: "What is the ten-dollar offer?", choices: ["A reward for leading the hunter to the white heron", "A gift to the grandmother", "The price of the cow", "A payment for the woods"] },
          purpose: { q: "What is the offer's role in the story?", choices: ["It is the temptation that makes Sylvia's choice difficult", "It buys the farm", "It ends the story happily", "It has no purpose"] },
          significance: { q: "What does the offer test in Sylvia?", choices: ["Whether she will trade the wild heron for money and approval", "Whether she can count coins", "Whether she likes the hunter's gun", "Whether the cow is for sale"] },
          reveals: "Money and approval set against Sylvia's loyalty to the woods.",
          conceals: "How heavy so small a sum can feel when a life hangs on it.",
          ace: "Articulate what the offer is; connect the money to Sylvia's poverty and her wish to please; extend it to how a reward can pressure a hard choice."
        },
        {
          id: "heron", name: "The White Heron", image: "images/heron.webp",
          clues: ["The white heron is a rare bird the hunter has long sought.", "It nests in a secret place near the sea, among the marsh and pines.", "It is the central symbol of wild, untouched nature in the story."],
          identify: { q: "What is the white heron?", choices: ["The rare wild bird the hunter wants to shoot and collect", "A cow on the farm", "A bird Sylvia keeps as a pet", "A statue in the woods"] },
          purpose: { q: "What is the heron's role in the story?", choices: ["It is what Sylvia must choose to reveal or protect", "It guides the cow home", "It belongs to the grandmother", "It has no importance"] },
          significance: { q: "What does the white heron symbolize?", choices: ["Wild, innocent nature that Sylvia chooses to protect", "The hunter's wealth", "The town Sylvia left behind", "Nothing beyond itself"] },
          reveals: "The living symbol of everything wild that Sylvia values.",
          conceals: "How fragile that wildness is once its secret is known.",
          ace: "Articulate what the heron is; connect the bird to the idea of wild nature; extend it to how one image can stand for a whole way of seeing the world."
        },
        {
          id: "pine", name: "The Great Pine Tree", image: "images/pine.webp",
          clues: ["A huge, ancient pine towers over all the other trees.", "Before dawn Sylvia secretly climbs it — a frightening, thrilling climb.", "From its top she sees the sea, the sunrise, and the heron rising from its nest."],
          identify: { q: "What does Sylvia do at the great pine?", choices: ["She climbs it before dawn to see the whole world from its top", "She cuts it down", "She hides the cow beneath it", "She sells it to the hunter"] },
          purpose: { q: "What is the great pine's role in the story?", choices: ["The climb tests Sylvia and gives her a wide, new vision", "It shelters the farmhouse", "It marks the road to town", "It has no purpose"] },
          significance: { q: "What does the climb and the view symbolize?", choices: ["A test of courage and a wider understanding of her world", "That Sylvia is tired", "That the woods are small", "That the heron is gone"] },
          reveals: "A daring climb that opens a larger vision of the natural world.",
          conceals: "That the same view hands Sylvia the heron's secret to keep or tell.",
          ace: "Articulate what happens at the pine; connect the climb to Sylvia's growth; extend it to how a hard test can give someone a wider view of the world."
        },
        {
          id: "silence", name: "Sylvia's Silence", image: "images/silence.webp",
          clues: ["Back home, the moment comes to tell the hunter where the heron is.", "Sylvia cannot speak — she keeps the secret.", "The heron lives; the hunter leaves disappointed, and Sylvia has chosen the wild."],
          identify: { q: "What is Sylvia's silence?", choices: ["Her refusal to tell the hunter where the heron lives", "A song she sings to the cow", "A promise to the hunter", "A prayer at dawn"] },
          purpose: { q: "What is the silence's role in the story?", choices: ["It is the climactic choice that resolves the conflict", "It begins the story", "It sells the cow", "It has no importance"] },
          significance: { q: "What does Sylvia's silence reveal?", choices: ["She chooses loyalty to the wild over money and the hunter's approval", "She has forgotten where the heron is", "She dislikes the woods", "She fears the grandmother"] },
          reveals: "The heart of the story — conscience and the wild chosen over reward.",
          conceals: "Whether the story thinks she was right, though it honors her loyalty.",
          ace: "Articulate what Sylvia's silence is; connect the choice to what she values; extend it to a time keeping quiet was the braver, harder thing."
        }
      ]
    },

    ctob: {
      name: "The Heron's Secret",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The rare wild bird at the center of the story is a white ______. (one word)",
          evidence: ["It is a tall wading bird with long legs and a long neck.", "It gives the story its title.", "The word begins with 'her…' — the word is heron."],
          hints: ["It is in the story's title.", "Her…", "The word is heron."],
          answer: "heron"
        },
        {
          type: "mc",
          prompt: "Where does Sylvia live when the story takes place?",
          options: [
            "On a remote farm in the Maine woods with her grandmother.",
            "In a crowded manufacturing town.",
            "In a seaside hotel.",
            "Alone in a cabin with no family."
          ],
          hints: ["She left a crowded town to come here.", "Which option names the woods and her grandmother?"]
        },
        {
          type: "mc",
          prompt: "Why does the young hunter want to find the white heron?",
          options: [
            "To shoot it and add it to his bird collection.",
            "To set it free in a new place.",
            "To paint its picture and leave it be.",
            "To give it to Sylvia as a pet."
          ],
          hints: ["He is an ornithologist who collects and stuffs birds.", "Which option means killing it for a collection?"]
        },
        {
          type: "digit",
          prompt: "How many dollars does the young man offer for the heron? Enter the number.",
          evidence: ["He offers a reward to anyone who can help him find the heron.", "To Sylvia's poor grandmother, it is a large sum.", "It is ten dollars — one more than nine."],
          hints: ["It is a round number, one more than nine.", "Ten.", "The number is 10."],
          answer: "10"
        },
        {
          type: "sequence",
          prompt: "Put the story's events in order, earliest first.",
          items: [
            "The young hunter arrives and offers money to find the white heron.",
            "Before dawn, Sylvia secretly climbs the great pine tree.",
            "From the treetop she sees the heron rise and learns where it nests.",
            "Back home, she keeps silent and protects the heron's secret."
          ],
          hints: ["It begins when the hunter makes his offer.", "She must climb before she can see the heron.", "Her silence is the final choice."]
        },
        {
          type: "word",
          prompt: "In the end, Sylvia protects the heron by keeping ______. (one word)",
          evidence: ["The moment comes to tell the hunter where the bird is.", "Instead she says nothing at all.", "The word means staying quiet, and begins with 'sil…' — the word is silent."],
          hints: ["It means saying nothing.", "Sil…", "The word is silent."],
          answer: "silent"
        }
      ]
    },

    arcade: {
      name: "Tell the Hunter or Protect the Heron?",
      instruction: "Sylvia is pulled two ways. Sort each detail: is it a reason to TELL THE HUNTER (money and approval), or a reason to PROTECT THE HERON (nature and conscience)? Reasoning earns the points.",
      buckets: [
        { id: "tell", label: "Reasons to tell the hunter", short: "Tell" },
        { id: "protect", label: "Reasons to protect the heron", short: "Protect" }
      ],
      cards: [
        { text: "The ten dollars would help her poor grandmother.", bucket: "tell", why: "The reward is real money the family could use." },
        { text: "She likes the friendly young man and wants to please him.", bucket: "tell", why: "His approval pulls her toward telling the secret." },
        { text: "The hunter has traveled far and would be grateful.", bucket: "tell", why: "Helping him would win his thanks and admiration." },
        { text: "Sharing the secret feels like the easy, expected thing to do.", bucket: "tell", why: "It would end the tension and make the visitor happy." },
        { text: "The white heron is a rare, living wild creature.", bucket: "protect", why: "Telling would mean the heron is shot and stuffed." },
        { text: "Sylvia loves the woods and belongs to them.", bucket: "protect", why: "Her loyalty is to the wild things she lives among." },
        { text: "From the great pine she felt joined to the whole living world.", bucket: "protect", why: "The wide vision bonds her to nature over reward." },
        { text: "Her conscience will not let her betray the bird.", bucket: "protect", why: "Keeping silent honors what she believes is right." }
      ],
      followup: "Sylvia's silence chooses one side of this pull over the other. Which reason do you think weighed most heavily for her, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Sylvia's deepest loyalty in the story is to —",
          options: [
            "the wild things of the woods she loves.",
            "the money the hunter offers.",
            "the crowded town she came from.",
            "the hunter's approval above all else."
          ],
          why: "The story shows Sylvia belongs to the woods and its creatures."
        },
        {
          q: "The young hunter wants the white heron so he can —",
          options: [
            "shoot it and add it to his collection.",
            "protect it from other hunters.",
            "study it and let it fly free.",
            "photograph it for a book."
          ],
          why: "He is an ornithologist who collects and stuffs the birds he hunts."
        },
        {
          q: "Sylvia climbs the great pine tree in order to —",
          options: [
            "see the wider world and find where the heron nests.",
            "escape from the hunter.",
            "bring the cow home.",
            "pick fruit for her grandmother."
          ],
          why: "From the treetop she sees the sea, the sunrise, and the heron's home."
        },
        {
          q: "At the story's climax, Sylvia —",
          options: [
            "stays silent and does not reveal the heron's secret.",
            "tells the hunter exactly where the heron nests.",
            "warns the hunter to leave the woods.",
            "gives the hunter the ten dollars back."
          ],
          why: "She cannot speak, and her silence protects the heron."
        },
        {
          q: "The central conflict of the story is between —",
          options: [
            "nature and conscience on one side and money and approval on the other.",
            "two hunters competing for the same bird.",
            "Sylvia and her grandmother.",
            "the town and the sea."
          ],
          why: "Sylvia must weigh loyalty to the wild against reward and the wish to please."
        }
      ],
      short: [
        "Choose one artifact from Sylvia's Woods. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the white heron works as a symbol. What larger idea does the bird stand for?",
        "Sylvia keeps silent even though the money would help her grandmother. What does that choice reveal about her — and about the story's view of nature and reward?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Jewett use nature imagery and symbolism to make Sylvia's choice meaningful? Make a claim and support it with specific details about the woods, the great pine, and the heron.",
      aceReflection: "Articulate what the story suggests about choosing nature and conscience over reward in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Nature or Reward?",
      prompt: "Sylvia gives up a reward and a young man's approval to protect a wild bird. Choose another story, film, or real situation where someone must choose between a reward and doing what they believe is right for something they value. Explain the connection with evidence: what was the temptation, what was the choice, and what did it cost?",
      format: "A short evidence-based comparison connecting the story's conflict between nature and reward to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Sylvia stays silent to protect the white heron in A White Heron. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in A White Heron. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in A White Heron because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about A White Heron: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's conflict between nature and reward to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of A White Heron for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Jewett's A White Heron as a study of regionalism, nature imagery, symbolism, and a coming-of-age conflict between nature and materialism. The story is public domain and is studied here as literature; the room paraphrases and reproduces no full passages (the climb, the offer, and the heron are described, not quoted), invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "This story was adopted in 2026 on the Texas required literary-works list under 19 TAC §110.30 (Grade 6); confirm your district's implementation timeline, which is no earlier than the 2030–2031 school year.",
        "The story (1886) is public domain. Use your class's copy or any public-domain text; verify the edition before assigning.",
        "Teach as literature: focus on symbolism (the white heron as wild nature; the great pine as a test and a wider vision), nature imagery and regionalism, and the coming-of-age choice. Note that a bird is threatened with being shot for a collection (nothing graphic); preview and follow local policy.",
        "Details here were checked against the story (Sylvia, a shy nine-year-old, and her grandmother Mrs. Tilley; the cow, Mistress Moolly; the move from a crowded town to the Maine woods; the friendly young ornithologist and his gun; the ten-dollar offer for the rare white heron; the frightening climb of the great pine before dawn; the view of the sea, sunrise, and the heron rising from its nest; and Sylvia's final silence that protects the bird). Phrases are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 6 ELAR TEKS (19 TAC Ch. 110) strands on point of view, author's craft, figurative language, and theme, and to the required literary-works list adopted under 19 TAC §110.30. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.6.2", "RL.6.3", "RL.6.4", "RL.6.6", "W.6.1", "SL.6.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
