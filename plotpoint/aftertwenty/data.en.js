/* PlotPoint — After Twenty Years (O. Henry, 1906).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (the note Jimmy leaves
   and the characters' words are described, not quoted). Standards are good-faith
   Common Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "aftertwenty",
  storageKey: "plotpoint.aftertwenty.v1",

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
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for After Twenty Years",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Corner on the Beat",
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
    "ctob.title": "The Corner Nobody Kept",
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
    "arcade.title": "Loyalty Clue or Twist Clue?",
    "arcade.default": "Sort each detail by what it points the reader toward.",
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
    "extend.title": "Loyalty and Duty",
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
    "print.item.relic": "Street-corner evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Loyalty-and-duty organizer",
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
      title: "After Twenty Years",
      author: "O. Henry",
      grades: "Grades 6–8",
      genre: "Realism · Crime · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1906)",
      textAccess: "The story is very short and public domain, and it reads well for middle school. Use the free links below, or your class's copy.",
      copyright: "Published in 1906 in the collection The Four Million, After Twenty Years is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A short realistic story with a mild crime element: a wanted man is quietly arrested at the end. Nothing graphic. Suitable for middle school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/2776",
      audio: "https://librivox.org/the-four-million-by-o-henry/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking After Twenty Years — a chilly, windy city street at night, a man in a doorway lighting a cigar, a policeman's badge, and a folded note."
    },
    hook: "Twenty years ago, two young friends made a promise: no matter where life took them, they would meet again at the same New York restaurant at the very same hour. Tonight, on a cold and windy street, one of them waits in a darkened doorway. His friend said he would come — and one of them is about to keep the promise in a way no one expects.",
    goals: [
      "Understand the plot: two old friends who agreed to meet again after twenty years.",
      "Recognize dramatic irony — the clues the reader can catch before the twist is revealed.",
      "Analyze how O. Henry builds to a surprise ending and the reader learns the truth.",
      "Interpret the story's tension between loyalty to a friend and duty to the law."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a twist ending.",
        "Discuss: If your best friend broke the law, would you protect them or turn them in? Why is that hard?"
      ],
      during: [
        "Use The Corner on the Beat to slow down and read the clues, one by one.",
        "Track small details — the diamond pin, the fine watch, the changed face — that hint at more than they seem."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the clues and the twist.",
        "Complete the Extend task to weigh loyalty against duty."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what the twenty-year promise was and why Bob still waited for it. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the small clues the reader is given (the pin, the watch, the changed face) to the twist ending. Explain how those details create dramatic irony." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's tension between loyalty and duty to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "appointment", def: "A promise to meet someone at a set time and place.", example: "The two friends' plan to meet in exactly twenty years.", nonexample: "Bumping into someone by accident.", context: "Bob keeps the appointment made twenty years earlier." },
      { term: "loyalty", def: "Faithful support for a friend, cause, or person.", example: "Waiting on a cold night because a friend gave his word.", nonexample: "Abandoning a friend the moment it is inconvenient.", context: "Bob's loyalty brings him back to the same corner." },
      { term: "duty", def: "Something a person is required to do because it is right or their job.", example: "A police officer's responsibility to uphold the law.", nonexample: "Ignoring the rules of your job when it is hard.", context: "Jimmy's duty as an officer clashes with his loyalty to a friend." },
      { term: "dramatic irony", def: "When the reader knows or senses something a character does not.", example: "The reader catches the clues before the twist is revealed.", nonexample: "The reader and character learning a fact at the same time.", context: "O. Henry plants dramatic irony that pays off at the end." },
      { term: "twist ending", def: "A surprising turn at the close of a story that changes how we see it.", example: "Learning who the first officer really was.", nonexample: "An ending exactly like the reader expected.", context: "The twist ending reveals the truth about the two friends." },
      { term: "beat", def: "The regular route a police officer patrols.", example: "The uniformed officer walking his usual streets at night.", nonexample: "A person wandering with no set path.", context: "The officer meets Bob while walking his beat." },
      { term: "plainclothes", def: "Wearing ordinary clothes rather than a uniform, as some police do.", example: "The tall man who greets Bob is not in uniform.", nonexample: "An officer in a full, visible uniform.", context: "A plainclothes officer makes the arrest at the end." },
      { term: "reunion", def: "A meeting again of people who have been apart for a long time.", example: "Two friends coming back together after twenty years.", nonexample: "Meeting a stranger for the first time.", context: "The planned reunion does not go the way Bob imagined." },
      { term: "wanted", def: "Sought by the police because a person is suspected of a crime.", example: "A man the police in another city are looking for.", nonexample: "A guest the host has invited and welcomes.", context: "By the end, the reader learns Bob is a wanted man." }
    ],

    relic: {
      name: "The Corner on the Beat",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "doorway", name: "The Darkened Doorway", image: "images/doorway.webp",
          clues: ["It is a chilly, windy night with few people on the street.", "A man stands back in the dark entrance of a closed hardware store.", "He is waiting there on purpose, keeping out of sight."],
          identify: { q: "Where is Bob when the story opens?", choices: ["In the dark doorway of a closed hardware store", "Inside a warm restaurant", "On a crowded, sunny street", "At a train station"] },
          purpose: { q: "What is the doorway's role in the story?", choices: ["It is the exact spot the friends agreed to meet again", "It is where Bob lives", "It is a police station", "It has no importance"] },
          significance: { q: "What does waiting in the dark suggest?", choices: ["Bob keeps his promise faithfully, even alone in the cold", "Bob is lost", "Bob is hiding from his friend", "Bob dislikes the meeting"] },
          reveals: "Bob's loyalty — he returns to the very spot after twenty years.",
          conceals: "That standing in shadow also keeps Bob's face hidden at first.",
          ace: "Articulate where the story opens; connect the doorway to the twenty-year promise; extend it to how a setting can show a character's loyalty."
        },
        {
          id: "restaurant", name: "The Old Restaurant Spot", image: "images/restaurant.webp",
          clues: ["Twenty years earlier, two young friends dined here together.", "The restaurant, once called 'Big Joe' Brady's, is now gone.", "Before parting, they agreed to meet again at this exact place in twenty years."],
          identify: { q: "What was at this spot twenty years ago?", choices: ["A restaurant where the two friends dined together", "A police station", "Bob's family home", "A train platform"] },
          purpose: { q: "What is this location's role in the story?", choices: ["It is the meeting place fixed by their twenty-year promise", "It is where Bob was arrested before", "It is a wine cellar", "It is never mentioned again"] },
          significance: { q: "Why does the changed spot matter?", choices: ["Time has passed and changed everything, yet the promise still stands", "It proves the friends never existed", "It shows the city is safe", "It cures Bob's cough"] },
          reveals: "How much time has passed while the promise stayed the same.",
          conceals: "How much the two men themselves may have changed inside.",
          ace: "Articulate what stood here before; connect the vanished restaurant to the theme of time; extend it to how a promise can outlast the place that made it."
        },
        {
          id: "cigar", name: "The Lit Cigar", image: "images/cigar.webp",
          clues: ["As Bob waits, he lights a cigar to pass the time.", "The small flame briefly lights up his face in the dark doorway.", "For a moment, his features are clearly visible."],
          identify: { q: "What does Bob do while he waits?", choices: ["He lights a cigar, which lights up his face", "He falls asleep", "He walks away", "He reads a newspaper"] },
          purpose: { q: "What is the cigar's role in the story?", choices: ["Its flame reveals Bob's face at a key moment", "It keeps him warm all night", "It is a gift for his friend", "It has no purpose"] },
          significance: { q: "Why does the flash of light matter?", choices: ["It lets the uniformed officer get a clear look at Bob's face", "It signals Bob's friend", "It scares away a thief", "It proves Bob is cold"] },
          reveals: "A small, ordinary action that quietly lets someone see and recognize Bob.",
          conceals: "That the officer who sees his face may know exactly who he is.",
          ace: "Articulate what the cigar does; connect the flash of light to recognition; extend it to how a tiny detail can drive a whole plot."
        },
        {
          id: "diamond", name: "The Diamond Scarf Pin", image: "images/diamond.webp",
          clues: ["Bob wears a large diamond set in his scarf pin.", "He also shows a fine, expensive-looking pocket watch.", "These signs suggest he has grown wealthy out West."],
          identify: { q: "What does Bob wear that shows his wealth?", choices: ["A large diamond scarf pin and a fine watch", "A police badge", "A jester's costume", "Plain, worn clothing"] },
          purpose: { q: "What is the diamond's role in the story?", choices: ["It shows Bob became rich by 'hustling' out West", "It is a gift for the officer", "It is a clue to a murder", "It has no meaning"] },
          significance: { q: "What might Bob's sudden wealth hint at?", choices: ["He made his money in ways that may not have been honest", "He inherited a farm", "He is a police officer", "He is very poor"] },
          reveals: "That the years changed Bob's fortunes — and maybe his character.",
          conceals: "How exactly Bob became rich, and whether the law is after him.",
          ace: "Articulate what Bob wears; connect his wealth to the hint of 'hustling'; extend it to how appearances can hide a person's real story."
        },
        {
          id: "uniform", name: "The Officer's Uniform", image: "images/uniform.webp",
          clues: ["A police officer in uniform walks his regular beat.", "He stops to talk with Bob, who is waiting in the doorway.", "After a friendly exchange, the officer moves on down the street."],
          identify: { q: "Who stops to talk with Bob first?", choices: ["A uniformed police officer on his beat", "Bob's long-lost friend", "A restaurant owner", "A newspaper seller"] },
          purpose: { q: "What is this officer's role in the story?", choices: ["He speaks with Bob, then walks away for a reason we learn later", "He arrests Bob at once", "He robs Bob", "He owns the hardware store"] },
          significance: { q: "Why is this quiet meeting important?", choices: ["The twist later reveals who this officer truly is", "It shows the streets are empty", "It proves Bob is guilty", "It ends the friendship"] },
          reveals: "An ordinary-seeming encounter that the ending completely recolors.",
          conceals: "That the uniformed officer is actually Bob's old friend, Jimmy.",
          ace: "Articulate who speaks with Bob first; connect this meeting to the twist; extend it to how a first read and a second read can feel completely different."
        },
        {
          id: "wrongface", name: "The Face Under the Streetlight", image: "images/wrongface.webp",
          clues: ["Later, a tall man in a long overcoat hurries up and greets Bob.", "As they walk under a bright drugstore light, Bob studies the man's face.", "Bob notices the nose is not his old friend's — this is not Jimmy."],
          identify: { q: "What does Bob realize under the bright light?", choices: ["The man greeting him is not really his friend Jimmy", "The man is a ghost", "The man is a restaurant waiter", "The man is his brother"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It signals the twist — the 'friend' is actually an officer in plain clothes", "It reunites the two friends happily", "It ends the story with a wedding", "It has no purpose"] },
          significance: { q: "What does the wrong nose reveal to a careful reader?", choices: ["A small physical clue exposes a switch the reader must notice", "That Bob has poor eyesight", "That the light is broken", "That Jimmy has aged"] },
          reveals: "How a tiny detail lets the reader catch the deception with Bob.",
          conceals: "The full truth of who sent this second man, saved for the note.",
          ace: "Articulate what Bob notices; connect the wrong nose to the coming twist; extend it to how small, precise details reward close reading."
        },
        {
          id: "note", name: "The Folded Note", image: "images/note.webp",
          clues: ["The plainclothes officer arrests Bob, who is wanted in Chicago.", "He hands Bob a short note as he does so.", "The note explains that the first, uniformed officer was really Jimmy Wells."],
          identify: { q: "What is written in the note Bob receives?", choices: ["That the uniformed officer was really his friend Jimmy Wells", "A map to a treasure", "An invitation to dinner", "A threat from a stranger"] },
          purpose: { q: "What is the note's role in the story?", choices: ["It delivers the twist and explains Jimmy's choice", "It frees Bob from arrest", "It is a menu", "It is never read"] },
          significance: { q: "What does Jimmy's choice reveal about him?", choices: ["He could not arrest his old friend himself, so he sent someone else", "He forgot the promise entirely", "He wanted revenge on Bob", "He never became an officer"] },
          reveals: "The heart of the story — loyalty and duty pulling Jimmy in two directions.",
          conceals: "How Jimmy felt walking away, which the reader must imagine.",
          ace: "Articulate what the note says; connect it to the pull between loyalty and duty; extend it to why Jimmy's choice is both kind and painful."
        }
      ]
    },

    ctob: {
      name: "The Corner Nobody Kept",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The two friends promised to meet again after how many years? Enter the number.",
          evidence: ["The title itself points to the length of the promise.", "Bob says it has been a long stretch since they last dined together.", "It is two decades — that is, twice ten years."],
          hints: ["Look at the title of the story.", "Two decades.", "The number is 20."],
          answer: "20"
        },
        {
          type: "mc",
          prompt: "Why is Bob standing in the doorway on this cold night?",
          options: [
            "To keep a promise to meet his old friend at this exact spot.",
            "To rob the hardware store.",
            "To wait for a bus home.",
            "To hide from a rainstorm."
          ],
          hints: ["Think about the twenty-year promise.", "Which option matches the appointment the friends made?"]
        },
        {
          type: "mc",
          prompt: "What do the diamond scarf pin and fine watch suggest about Bob?",
          options: [
            "He became wealthy in the years out West.",
            "He is a police officer.",
            "He is very poor.",
            "He borrowed them for the night."
          ],
          hints: ["Expensive items usually signal money.", "Which option matches a man who 'hustled' and grew rich?"]
        },
        {
          type: "mc",
          prompt: "How does Bob first realize the tall man is not really Jimmy?",
          options: [
            "Under a bright light, he sees the man's nose is wrong.",
            "The man speaks a different language.",
            "The man is much shorter than Jimmy.",
            "The man refuses to shake his hand."
          ],
          hints: ["A bright drugstore light lets Bob study the face.", "Which option is the small physical clue Bob notices?"]
        },
        {
          type: "sequence",
          prompt: "Put the events in order, earliest first.",
          items: [
            "Bob waits in the dark doorway and lights a cigar.",
            "A uniformed officer stops, talks with Bob, then walks on.",
            "A tall man in an overcoat greets Bob as his friend.",
            "A plainclothes officer arrests Bob and hands him a note."
          ],
          hints: ["It begins with Bob waiting and the flash of the cigar.", "The uniformed officer comes before the tall stranger.", "The arrest and note come last."]
        },
        {
          type: "word",
          prompt: "The note reveals that the first, uniformed officer was really Bob's old friend, ______. (one first name)",
          evidence: ["The two friends were Bob and Jimmy Wells.", "The note explains that the uniformed cop recognized Bob but could not arrest him himself.", "The name begins with 'Jim…'."],
          hints: ["He is the friend Bob came to meet.", "Jim…", "The name is Jimmy."],
          answer: "Jimmy"
        }
      ]
    },

    arcade: {
      name: "Loyalty Clue or Twist Clue?",
      instruction: "O. Henry hides clues in plain sight. Sort each detail: does it point mainly to FRIENDSHIP AND LOYALTY (the bond and the kept promise), or is it a TWIST CLUE (a hint that Bob is the wanted man or that the officer is really Jimmy)? Reasoning earns the points.",
      buckets: [
        { id: "loyalty", label: "Points to friendship/loyalty", short: "Loyalty" },
        { id: "twist", label: "Points to the twist", short: "Twist" }
      ],
      cards: [
        { text: "Bob returns to the same corner after twenty years.", bucket: "loyalty", why: "Keeping the promise shows his loyalty to the friendship." },
        { text: "Bob calls his friend the truest, staunchest chap in the world.", bucket: "loyalty", why: "His praise shows how much the bond means to him." },
        { text: "Bob waits alone in the cold on a windy night.", bucket: "loyalty", why: "Enduring discomfort for a promise shows faithfulness." },
        { text: "The two friends once dined together at this very spot.", bucket: "loyalty", why: "The shared past is the root of their loyalty." },
        { text: "Bob wears a large diamond and shows off a fine watch.", bucket: "twist", why: "Sudden wealth hints he may have earned it dishonestly." },
        { text: "The uniformed officer looks closely at Bob's lit-up face.", bucket: "twist", why: "The close look hints the officer may recognize a wanted man." },
        { text: "Under the streetlight, the friend's nose looks wrong.", bucket: "twist", why: "The wrong face signals the man is an impostor, not Jimmy." },
        { text: "A plainclothes officer says Bob is wanted in Chicago.", bucket: "twist", why: "This confirms the twist that Bob is the hunted man." }
      ],
      followup: "The gap between what the reader can catch and what Bob believes is dramatic irony. Which clue was hardest to notice on a first read, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Bob is waiting in the doorway because —",
          options: [
            "he promised twenty years ago to meet his friend at this exact spot.",
            "he is planning to rob the store.",
            "he has nowhere else to sleep.",
            "he is lost in the city."
          ],
          why: "The whole story rests on the twenty-year appointment the friends made."
        },
        {
          q: "The diamond pin and fine watch mainly show that Bob —",
          options: [
            "grew wealthy in his years out West.",
            "works as a police officer.",
            "is a poor traveler.",
            "stole them that night."
          ],
          why: "O. Henry uses these details to show Bob's changed fortunes."
        },
        {
          q: "Bob discovers the tall stranger is not Jimmy when —",
          options: [
            "a bright light shows the man's nose is wrong.",
            "the man speaks another language.",
            "the man cannot remember the restaurant.",
            "the man is much older than expected."
          ],
          why: "The small physical clue under the light exposes the switch."
        },
        {
          q: "The note reveals that the first, uniformed officer was —",
          options: [
            "Jimmy Wells, Bob's old friend.",
            "a stranger who wandered by.",
            "the plainclothes officer in disguise.",
            "the owner of the old restaurant."
          ],
          why: "The twist is that Jimmy himself first met and recognized Bob."
        },
        {
          q: "Jimmy sends another officer to make the arrest because —",
          options: [
            "he cannot bring himself to arrest his old friend in person.",
            "he is afraid of Bob.",
            "he is not allowed to work that street.",
            "he does not recognize Bob at all."
          ],
          why: "The story's heart is Jimmy torn between loyalty and duty."
        }
      ],
      short: [
        "Choose one artifact from The Corner on the Beat. Explain what it is and what it reveals about the story's meaning.",
        "Explain two clues O. Henry gives the reader before the twist, and how each hints at the ending.",
        "Jimmy keeps his duty as an officer but sends someone else to arrest Bob. What does that choice reveal about him — and about the pull between loyalty and duty?"
      ],
      paragraph: "Write an evidence-based paragraph. How does O. Henry build to a surprise ending that still feels fair to the careful reader? Make a claim and support it with specific clues planted earlier in the story.",
      aceReflection: "Articulate what the story suggests about loyalty and duty in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Loyalty and Duty",
      prompt: "Jimmy is loyal to an old friend but bound by his duty as an officer — and he finds a painful middle path. Choose another story, film, or real situation where loyalty and duty pull against each other. Explain the connection with evidence: what was the loyalty, what was the duty, and how did the person try to hold both?",
      format: "A short evidence-based comparison connecting the story's tension between loyalty and duty to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how O. Henry sets up the twist in After Twenty Years. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in After Twenty Years. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in After Twenty Years because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about After Twenty Years: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's tension between loyalty and duty to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of After Twenty Years for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of O. Henry's After Twenty Years as a study of dramatic irony, the surprise ending, and the tension between loyalty and duty. The story is very short and public domain, and reads well for middle school; free text links are provided. The room paraphrases and reproduces no full passages (the note and the characters' words are described, not quoted), invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (published 1906 in The Four Million) is public domain. The linked Project Gutenberg edition includes the story within a collection — confirm the edition before assigning.",
        "Content: a mild crime element — a wanted man is quietly arrested at the end. Nothing graphic. Suitable for middle school; preview and follow local policy.",
        "Details here were checked against the story (the two friends Bob and Jimmy Wells; their twenty-year promise to meet at 'Big Joe' Brady's old restaurant spot; Bob waiting in a darkened hardware-store doorway on a cold, windy night; lighting a cigar; the diamond scarf pin and fine watch; wealth gained out West by 'hustling'; the uniformed officer on his beat; the tall plainclothes man in the overcoat; the wrong nose seen under a bright light; 'Silky Bob' wanted in Chicago; the note revealing the first officer was Jimmy Wells). Wording and the note's exact text are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–8 ELAR TEKS (19 TAC Ch. 110) strands on plot, irony, author's purpose, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.6.2", "RL.6.3", "RL.7.1", "RL.7.6", "W.6.1", "SL.6.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
