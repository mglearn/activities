/* PlotPoint — The Last Leaf (O. Henry, 1907).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "lastleaf",
  storageKey: "plotpoint.lastleaf.v1",

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
    "vocab.title": "Words for The Last Leaf",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Greenwich Village Studio",
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
    "ctob.title": "The Leaf That Never Fell",
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
    "arcade.title": "Giving Up or Holding On?",
    "arcade.default": "Sort each detail by whether it shows giving up on life or holding on to it.",
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
    "extend.title": "A Quiet Sacrifice",
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
    "print.item.relic": "Studio evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Sacrifice organizer",
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
      title: "The Last Leaf",
      author: "O. Henry",
      grades: "Grades 8–11",
      genre: "Realism · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1907)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1907 (in The Trimmed Lamp), The Last Leaf is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A tender story about illness, hope, and sacrifice. A young woman nearly dies of pneumonia, and an old neighbor dies after quietly saving her. Touching and sad but not graphic. Suitable for middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/3707",
      audio: "https://librivox.org/the-trimmed-lamp-by-o-henry/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Last Leaf — a rain-streaked studio window in Greenwich Village looking onto an old brick wall where a single ivy leaf clings to a bare vine, with a warm lamp glowing inside and an old painter's ladder just visible below."
    },
    hook: "In a Greenwich Village studio, young artist Johnsy lies ill with pneumonia and has given up hope. Through her window she watches the leaves fall, one by one, from an old ivy vine on the brick wall across the way — and she has decided that when the last leaf falls, she will die. Downstairs lives old Behrman, a gruff painter who has spent forty years promising to paint a masterpiece he never begins. Then comes a cold, stormy night — and in the morning, against all odds, one last leaf is still there.",
    goals: [
      "Follow the plot: Johnsy's illness, her belief about the leaves, and the storm.",
      "Analyze Behrman as a character — and the meaning of his long-promised masterpiece.",
      "Trace O. Henry's famous twist ending and the irony at the heart of it.",
      "Interpret the story's themes of hope, the will to live, and quiet self-sacrifice."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially pneumonia, sacrifice, and irony.",
        "Discuss: Can hope — or losing hope — actually affect whether someone gets well?"
      ],
      during: [
        "Use The Greenwich Village Studio to track Johnsy, the ivy, and Behrman.",
        "Watch for small clues about Behrman that pay off in the final twist."
      ],
      after: [
        "Run the breakout, arcade, and analysis to uncover the irony and the sacrifice.",
        "Complete the Extend task on quiet, hidden sacrifices."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the last leaf matters so much to Johnsy, and what its survival does to her. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Behrman's long-promised 'masterpiece' to what he actually paints on the wall. Explain how O. Henry makes the painted leaf his masterpiece — and at what cost." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea of a quiet, hidden sacrifice to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "pneumonia", def: "A serious illness that inflames the lungs.", example: "The sickness that lays Johnsy — and later Behrman — low.", nonexample: "A minor, one-day headache.", context: "A pneumonia epidemic sweeps the chilly artists' quarter." },
      { term: "masterpiece", def: "A person's greatest work of art or skill.", example: "The painting Behrman always swore he would someday create.", nonexample: "A quick, careless doodle.", context: "For forty years, Behrman's masterpiece stays unpainted." },
      { term: "ivy", def: "A climbing vine with clinging leaves.", example: "The old ivy on the brick wall outside Johnsy's window.", nonexample: "A tall, bare oak tree in a field.", context: "Johnsy counts the ivy leaves as they fall." },
      { term: "sacrifice", def: "Giving up something precious for the sake of someone else.", example: "Behrman risking his life to paint hope for Johnsy.", nonexample: "Keeping everything for yourself.", context: "The story turns on one quiet, costly sacrifice." },
      { term: "delusion", def: "A false belief a person holds firmly despite the facts.", example: "Johnsy's conviction that she will die with the last leaf.", nonexample: "A careful conclusion based on evidence.", context: "Sue tries to talk Johnsy out of her delusion." },
      { term: "irony", def: "When the outcome is the opposite of what is expected.", example: "A painted leaf saving a life while the painting costs one.", nonexample: "Things turning out exactly as planned.", context: "The story's ending rests on a bittersweet irony." },
      { term: "persistent", def: "Continuing firmly, refusing to give up or let go.", example: "The one leaf that clings through wind and rain.", nonexample: "Something that falls away at the first breeze.", context: "The persistent last leaf shames Johnsy into hoping again." },
      { term: "bohemian", def: "Relating to artists who live unconventionally, often with little money.", example: "The struggling painters of Greenwich Village.", nonexample: "A wealthy family in a grand mansion.", context: "The story is set in a bohemian artists' colony." }
    ],

    relic: {
      name: "The Greenwich Village Studio",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "studio", name: "The Artists' Studio", image: "images/studio.webp",
          clues: ["Two young women artists, Sue and Johnsy, share a small studio.", "They live in Greenwich Village, a low-rent colony of struggling artists.", "In cold November, a pneumonia epidemic moves through the neighborhood."],
          identify: { q: "Who shares the studio at the center of the story?", choices: ["Two young artists, Sue and Johnsy", "A doctor and a nurse", "Behrman and his family", "A wealthy couple"] },
          purpose: { q: "What is the studio's role in the story?", choices: ["It is the close, poor world where the whole story unfolds", "It is a hospital ward", "It is an art gallery", "It has no role"] },
          significance: { q: "What does the bohemian setting add to the story?", choices: ["It shows people with little money but deep loyalty to one another", "It proves the artists are famous", "It makes the story a comedy", "It hides the ending"] },
          reveals: "The tight-knit, hard-up community where care matters more than money.",
          conceals: "That one neighbor will give everything for another.",
          ace: "Articulate who lives in the studio; connect the poor artists' colony to their closeness; extend it to how hardship can bind people together."
        },
        {
          id: "johnsy", name: "Johnsy's Illness", image: "images/johnsy.webp",
          clues: ["Johnsy catches pneumonia and grows dangerously weak.", "The doctor says her recovery depends on her own will to live.", "But Johnsy has quietly decided she is going to die."],
          identify: { q: "What is wrong with Johnsy?", choices: ["She is seriously ill with pneumonia and has lost the will to live", "She has broken her arm", "She is only pretending to be sick", "She is perfectly healthy"] },
          purpose: { q: "What is Johnsy's illness's role in the story?", choices: ["It sets up the crisis the whole story must resolve", "It is quickly cured and forgotten", "It is a joke", "It has no role"] },
          significance: { q: "Why does the doctor say her will matters so much?", choices: ["A patient who has given up is far harder to save", "Pneumonia is harmless", "She needs no medicine", "The doctor is joking"] },
          reveals: "How losing hope can be as dangerous as the illness itself.",
          conceals: "What it will take to give her hope back.",
          ace: "Articulate Johnsy's condition; connect her lost will to her danger; extend it to how a person's mindset can shape their recovery."
        },
        {
          id: "ivy", name: "The Ivy Vine", image: "images/ivy.webp",
          clues: ["An old ivy vine climbs the brick wall outside Johnsy's window.", "Its leaves are falling in the cold autumn wind.", "Johnsy watches them drop and counts down: fewer and fewer remain."],
          identify: { q: "What does Johnsy watch through her window?", choices: ["An old ivy vine losing its leaves on a brick wall", "A busy city street", "A garden of roses", "The ocean"] },
          purpose: { q: "What is the ivy's role in the story?", choices: ["Johnsy ties her own life to its falling leaves", "It is food for the winter", "It blocks her view", "It has no role"] },
          significance: { q: "What does Johnsy's delusion about the leaves show?", choices: ["How deeply she has given up, pinning her death to a dying vine", "That she loves gardening", "That the wall is dangerous", "That winter is coming"] },
          reveals: "The strange, sad way despair fixes on a single image.",
          conceals: "That one of those leaves will not be real at all.",
          ace: "Articulate what the ivy is; connect the falling leaves to Johnsy's despair; extend it to how a struggling mind can attach itself to one symbol."
        },
        {
          id: "behrman", name: "Old Behrman", image: "images/behrman.webp",
          clues: ["Behrman is an old painter, past sixty, who lives downstairs.", "For forty years he has talked of painting a great masterpiece — but never has.", "He is gruff and gruffly protective of the two young artists above him."],
          identify: { q: "Who is Behrman?", choices: ["An old, failed painter who dreams of a masterpiece he never paints", "A famous, wealthy artist", "Johnsy's doctor", "A stranger passing through"] },
          purpose: { q: "What is Behrman's role in the story?", choices: ["He is the neighbor whose hidden act will change everything", "He is a villain", "He narrates the story", "He has no role"] },
          significance: { q: "Why does O. Henry stress the masterpiece Behrman never paints?", choices: ["So the ending can reveal what his true masterpiece really is", "To show he is lazy", "To make him seem foolish", "Because he is rich"] },
          reveals: "A gruff old failure with far more heart than anyone sees.",
          conceals: "That his life's masterpiece is still to come — once.",
          ace: "Articulate who Behrman is; connect his unpainted masterpiece to the ending; extend it to how people we underestimate can surprise us."
        },
        {
          id: "storm", name: "The Stormy Night", image: "images/storm.webp",
          clues: ["A fierce, freezing night of wind and cold rain sweeps in.", "Johnsy is sure the last leaf will surely be gone by morning.", "But that night, unseen, something happens out on the brick wall."],
          identify: { q: "What kind of night falls over the story's turning point?", choices: ["A cold, stormy night of wind and rain", "A calm, sunny afternoon", "A snowy holiday", "A quiet spring evening"] },
          purpose: { q: "What is the storm's role in the story?", choices: ["It is when the last leaf should fall — and when Behrman acts", "It ends the story", "It heals Johnsy directly", "It has no role"] },
          significance: { q: "Why is it important that the storm happens at night, unseen?", choices: ["It hides Behrman's secret act until the final reveal", "It shows the weather is nice", "It proves Johnsy is right", "It wakes the whole street"] },
          reveals: "The cover of darkness under which the sacrifice is made.",
          conceals: "Who braved the storm, and why, until the very end.",
          ace: "Articulate the storm; connect the hidden night to the twist; extend it to how the most important acts are sometimes done unseen."
        },
        {
          id: "lastleaf", name: "The Last Leaf", image: "images/lastleaf.webp",
          clues: ["In the morning, one lone ivy leaf still clings to the wall.", "It survives the storm — and another day and night of wind.", "Its stubborn refusal to fall makes Johnsy decide she wants to live after all."],
          identify: { q: "What does Johnsy see on the wall after the storm?", choices: ["One last leaf still clinging to the vine", "A bare wall with no leaves", "A new tree", "A painting of herself"] },
          purpose: { q: "What is the last leaf's role in the story?", choices: ["Its survival gives Johnsy back her will to live", "It signals more bad weather", "It is worthless", "It has no role"] },
          significance: { q: "Why does the leaf's survival change Johnsy?", choices: ["Its stubborn holding on shames her out of giving up", "It proves the wall is strong", "It means winter is over", "It scares her"] },
          reveals: "The small, stubborn image that pulls Johnsy back toward life.",
          conceals: "The astonishing truth about why it never fell.",
          ace: "Articulate what Johnsy sees; connect the leaf's survival to her recovery; extend it to how a single sign of hope can change a person's whole outlook."
        },
        {
          id: "masterpiece", name: "Behrman's Masterpiece", image: "images/masterpiece.webp",
          clues: ["Behrman is found dead of pneumonia, having been out in the freezing storm.", "Near him are a lantern, a ladder, scattered brushes, and a palette of green and yellow paint.", "The last leaf never fell because Behrman painted it on the wall that night — his masterpiece at last."],
          identify: { q: "Why did the last leaf never fall?", choices: ["Behrman painted it on the brick wall during the storm", "It was made of stone", "The wind never touched it", "Johnsy imagined it"] },
          purpose: { q: "What is this final revelation's role in the story?", choices: ["It delivers O. Henry's twist and the meaning of the whole tale", "It begins a new story", "It is a minor detail", "It has no role"] },
          significance: { q: "Why is the painted leaf called Behrman's masterpiece?", choices: ["The work he swore he'd make for forty years turns out to be one that saves a life", "It sold for a fortune", "It hangs in a museum", "It was easy to paint"] },
          reveals: "The bittersweet heart of the story: a life given to save a life.",
          conceals: "Nothing now — the twist makes every earlier clue click into place.",
          ace: "Articulate what Behrman did; connect the painted leaf to his 'masterpiece'; extend it to how the greatest work of a life might be an act of love, not a career."
        }
      ]
    },

    ctob: {
      name: "The Leaf That Never Fell",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The serious lung illness that strikes Johnsy — and later Behrman — is ______. (one word)",
          evidence: ["It sweeps through the cold artists' quarter like an epidemic.", "The doctor says surviving it depends partly on the will to live.", "The word begins with 'pneu…'."],
          hints: ["A dangerous illness of the lungs.", "Pneu…", "The word is pneumonia."],
          answer: "pneumonia"
        },
        {
          type: "mc",
          prompt: "What has Johnsy decided will happen when the last ivy leaf falls?",
          options: [
            "She will die.",
            "She will finally get well.",
            "She will move away.",
            "Winter will end."
          ],
          hints: ["She has given up hope and is counting the leaves.", "Which option shows how deeply she has despaired?"]
        },
        {
          type: "word",
          prompt: "Old ______ is the failing painter downstairs who has spent forty years dreaming of a masterpiece. (one word — his name)",
          evidence: ["He is gruff, past sixty, and protective of the two young artists.", "He never actually starts the great painting he talks about.", "His name begins with 'Beh…'."],
          hints: ["The old painter who lives below the studio.", "Beh…", "The name is Behrman."],
          answer: "Behrman"
        },
        {
          type: "mc",
          prompt: "Why does the last leaf never fall, even through the storm?",
          options: [
            "Behrman painted it on the brick wall.",
            "It was frozen solidly in place.",
            "The wind never reached that wall.",
            "Johnsy only imagined it."
          ],
          hints: ["Think about the lantern, ladder, and green-and-yellow paint found later.", "Which option explains the leaf that could not fall?"]
        },
        {
          type: "sequence",
          prompt: "Put the events in order, earliest first.",
          items: [
            "Johnsy falls ill with pneumonia and loses the will to live.",
            "She decides she will die when the last ivy leaf falls.",
            "During a stormy night, Behrman paints a leaf on the wall.",
            "The 'last leaf' stays, Johnsy recovers, and Behrman is found dead."
          ],
          hints: ["Her illness comes first.", "Behrman paints the leaf during the storm, after Johnsy's decision.", "The recovery and the revelation come last."]
        },
        {
          type: "word",
          prompt: "The painted leaf turns out to be Behrman's long-promised ______ — his greatest work. (one word)",
          evidence: ["For forty years he had sworn he would paint one someday.", "This one saved Johnsy's life.", "The word begins with 'master…'."],
          hints: ["A person's single greatest work of art.", "Master…", "The word is masterpiece."],
          answer: "masterpiece"
        }
      ]
    },

    arcade: {
      name: "Giving Up or Holding On?",
      instruction: "The story balances the pull of despair against the will to live. Sort each detail: does it show GIVING UP ON LIFE, or HOLDING ON TO LIFE? Reasoning earns the points.",
      buckets: [
        { id: "giveup", label: "Giving up on life", short: "Giving up" },
        { id: "holdon", label: "Holding on to life", short: "Holding on" }
      ],
      cards: [
        { text: "Johnsy quietly counts down the falling ivy leaves.", bucket: "giveup", why: "She is measuring out her own death, leaf by leaf." },
        { text: "She says she is tired and wants to let go, like a leaf.", bucket: "giveup", why: "She has surrendered her will to live." },
        { text: "She stops eating and loses interest in getting well.", bucket: "giveup", why: "The clearest sign of her despair." },
        { text: "She ties her fate to a dying vine on a wall.", bucket: "giveup", why: "Her hope has shrunk to a single falling leaf." },
        { text: "The last leaf clings to the vine through a fierce storm.", bucket: "holdon", why: "A stubborn image of not letting go." },
        { text: "Seeing it survive, Johnsy decides she wants to live.", bucket: "holdon", why: "Hope returns and her will comes back." },
        { text: "Behrman braves the freezing night to paint hope onto the wall.", bucket: "holdon", why: "An act devoted entirely to keeping Johnsy alive." },
        { text: "Johnsy asks for food and a mirror as her strength returns.", bucket: "holdon", why: "Small signs that she is choosing life again." }
      ],
      followup: "Johnsy's recovery begins the moment her hope returns — sparked by a leaf that wasn't even real. What is O. Henry suggesting about the power of hope?"
    },

    analysis: {
      mcq: [
        {
          q: "Johnsy becomes convinced that she will die when —",
          options: [
            "the last leaf falls from the ivy vine.",
            "the first snow arrives.",
            "her rent comes due.",
            "Behrman finishes his painting."
          ],
          why: "She ties her life to the falling ivy leaves outside her window."
        },
        {
          q: "Behrman is best described as —",
          options: [
            "an old, failed painter who has always dreamed of a masterpiece.",
            "a wealthy, famous artist.",
            "a young medical student.",
            "Johnsy's older brother."
          ],
          why: "For forty years he has promised a masterpiece he never begins."
        },
        {
          q: "The last leaf survives the storm because —",
          options: [
            "Behrman painted it on the brick wall during the night.",
            "it was sheltered from the wind.",
            "it froze solidly to the vine.",
            "Johnsy dreamed it was there."
          ],
          why: "The lantern, ladder, and green-and-yellow paint reveal Behrman's secret work."
        },
        {
          q: "Behrman dies because he —",
          options: [
            "caught pneumonia painting the leaf out in the cold and wet.",
            "fell from the studio window.",
            "was already gravely ill before the story began.",
            "starved himself to buy paint."
          ],
          why: "He was found soaked and freezing, having been out in the storm to paint the leaf."
        },
        {
          q: "The central irony of the story is that —",
          options: [
            "a painted leaf saved Johnsy's life while creating it cost Behrman his.",
            "Johnsy was never really ill.",
            "Behrman's painting sold for a fortune.",
            "the doctor caused the whole problem."
          ],
          why: "The 'last leaf' that gives Johnsy life is the very work that kills its maker."
        }
      ],
      short: [
        "Choose one artifact from The Greenwich Village Studio. Explain what it is and what it reveals about the story's meaning.",
        "Explain the story's twist ending. How does O. Henry hide Behrman's act, and how do earlier clues pay off?",
        "In what sense is the painted leaf Behrman's true 'masterpiece'? What does the story say a masterpiece can be?"
      ],
      paragraph: "Write an evidence-based paragraph. How does O. Henry use the ivy leaf and Behrman's unpainted masterpiece to develop the story's themes of hope and sacrifice? Make a claim and support it with specific details, including the twist ending.",
      aceReflection: "Articulate what the story suggests about hope and sacrifice in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "A Quiet Sacrifice",
      prompt: "Behrman gives his life to save Johnsy's — quietly, secretly, asking for no credit. Choose another story, film, or real situation in which someone made a hidden or unrecognized sacrifice for another person. Explain the connection with evidence: what was given up, who it helped, and why it stays with us.",
      format: "A short evidence-based comparison connecting the story's quiet sacrifice to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the last leaf matters so much to Johnsy in O. Henry's The Last Leaf. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Last Leaf. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Last Leaf because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Last Leaf: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's quiet sacrifice to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Last Leaf for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of O. Henry's The Last Leaf as a study of the twist ending, irony, and the themes of hope and self-sacrifice. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1907, from The Trimmed Lamp) is public domain. The linked Project Gutenberg edition and the linked LibriVox recording are the full Trimmed Lamp collection, which contains The Last Leaf — confirm the specific story before assigning.",
        "Content: a tender, sad story. A young woman nearly dies of pneumonia and gives up hope; an old neighbor secretly saves her and dies of pneumonia himself. Moving but not graphic. Suitable for middle and high school; preview and follow local policy.",
        "Details here were checked against the story (the artists Sue and Johnsy sharing a Greenwich Village studio; the November pneumonia epidemic; Johnsy's belief she will die when the last ivy leaf falls; the doctor's warning that her will to live matters; old Behrman, past sixty, the failed painter who talks of a masterpiece for forty years; the stormy night; the last leaf still clinging in the morning; Johnsy's recovery; and the revelation that Behrman painted the leaf during the storm, caught pneumonia, and died — the leaf being his masterpiece, found with his lantern, ladder, brushes, and green-and-yellow palette). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–11 ELAR TEKS (19 TAC Ch. 110) strands on plot and the twist/surprise ending, theme, characterization, and irony. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.2", "RL.9-10.5", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
