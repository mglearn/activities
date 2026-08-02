/* PlotPoint — "The Man in the Arena," Theodore Roosevelt (excerpt from "Citizenship in a
   Republic," delivered at the Sorbonne, Paris, April 23, 1910).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1910 speech excerpt is in the public domain in the United States,
   so this room may reference the passage directly. It is studied here as LITERATURE and
   RHETORIC — extended metaphor, antithesis, parallelism, and imagery — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC §110.30,
   Grade 8). The room paraphrases and quotes only brief public-domain phrases where a close
   reading needs them. Standards are good-faith alignment; TEKS/ELPS flagged "Needs review."
   Relic artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "manarena",
  storageKey: "plotpoint.manarena.v1",

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

    "nav.enter": "Enter the Speech", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Speech",
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
    "enter.readListenNote": "This 1910 speech excerpt is in the public domain. Use your class's copy or a verified public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Man in the Arena",
    "vocab.intro": "{n} terms that unlock the text. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Arena Floor",
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
    "ctob.title": "The Doer's Trial",
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
    "arcade.title": "Critic or Doer?",
    "arcade.default": "Sort each image by the feeling it creates in the poem.",
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
    "print.item.relic": "Arena Floor evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Doer-over-critic organizer",
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
      title: "The Man in the Arena",
      author: "Theodore Roosevelt",
      grades: "Grade 8",
      genre: "Speech excerpt · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole passage is discussed",
      rights: "Public domain (1910)",
      textAccess: "A short public-domain speech excerpt; use your class's copy or any public-domain text.",
      copyright: "This 1910 speech excerpt (from Theodore Roosevelt's \"Citizenship in a Republic,\" delivered at the Sorbonne) is in the public domain in the United States, so this room may reference the passage directly. It is studied here as literature and rhetoric — its extended metaphor, antithesis, parallelism, and imagery. The room paraphrases and quotes only brief public-domain phrases where a close reading needs them.",
      contentNote: "Presented as literature and rhetoric — extended metaphor, antithesis, parallelism, and imagery — in a neutral, academic way, consistent with the Texas required literary-works list adopted in 2026 under 19 TAC §110.30 (Grade 8); implementation is scheduled no earlier than the 2030–2031 school year. Because the passage is public domain, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'The Man in the Arena' — a lone figure standing in the dust of a great arena, face marred by effort, while faint spectators look on from the shadowed stands."
    },
    hook: "It is not the critic who counts. In a few sweeping sentences, Theodore Roosevelt turns life into a contest and asks a hard question: who really deserves the credit — the person who points out every stumble from the safety of the stands, or the one down on the arena floor, marred by dust and sweat and blood, actually daring to do the deed? Read it as rhetoric, and watch how one extended metaphor and a series of sharp contrasts drive the whole passage.",
    goals: [
      "Understand 'The Man in the Arena' as a short persuasive passage built on one extended metaphor: life as a contest fought in an arena.",
      "Analyze its antithesis — the sideline critic set against the striving doer — and how each contrast sharpens the argument.",
      "Trace the parallelism and cumulative clauses ('who strives... who errs... who spends himself') and the exhortatory tone they build.",
      "Interpret how vivid imagery ('dust and sweat and blood') carries the abstract idea that daring effort, not criticism, deserves honor — even when it ends in failure."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an extended metaphor and antithesis.",
        "Discuss: is it braver to try greatly and fail, or to stay safe and criticize others who try? Why?"
      ],
      during: [
        "Use the Arena Floor to slow down and read the passage image by image.",
        "Track the contrast: from the dismissed critic, to the striving doer, to the 'cold and timid souls' who never dare."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the metaphor, the antithesis, and the passage's structure.",
        "Complete the Extend task to carry the doer-over-critic idea into another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main comparison 'The Man in the Arena' is built on. Include one image from the passage that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two contrasting figures in the passage — for example the sideline critic and the man in the arena. Explain how placing them side by side sharpens Roosevelt's argument." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the passage's idea — honoring the doer over the critic — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "arena", def: "A central space where a contest is fought; here, a metaphor for the place of real effort and struggle.", example: "The doer 'who is actually in the arena.'", nonexample: "The seats in the stands where spectators watch.", context: "Roosevelt places the person who counts down in the arena, not the stands." },
      { term: "extended metaphor", def: "A single comparison developed across many lines or a whole passage.", example: "Life pictured as a contest in an arena, carried through the passage.", nonexample: "A comparison used once and dropped.", context: "The whole passage is one long extended metaphor of the arena." },
      { term: "antithesis", def: "A contrast of opposite ideas placed close together for effect.", example: "The idle critic set against the striving doer.", nonexample: "Two ideas that simply agree with each other.", context: "The passage runs on antithesis: critic versus doer, victory versus defeat." },
      { term: "parallelism", def: "Repeating a grammatical pattern in nearby phrases or clauses for rhythm and force.", example: "'Who strives... who errs... who spends himself.'", nonexample: "A single clause with no matching partner.", context: "The piling of parallel 'who' clauses builds the passage's momentum." },
      { term: "imagery", def: "Descriptive language that appeals to the senses.", example: "A face 'marred by dust and sweat and blood.'", nonexample: "An abstract word like 'hard' with no picture.", context: "The passage's imagery makes real effort something we can almost see." },
      { term: "rhetoric", def: "The art of using language to persuade an audience.", example: "A speech built to move listeners toward daring greatly.", nonexample: "A shopping list with no persuasive aim.", context: "This is a masterful piece of rhetoric first delivered as a speech." },
      { term: "tone", def: "The writer's attitude toward the subject, shown through word choice.", example: "An inspiring, exhortatory tone that urges the reader to dare.", nonexample: "A flat, indifferent report of facts.", context: "The passage's tone praises the doer and urges bold effort." },
      { term: "valiantly", def: "In a brave and determined way.", example: "The doer 'who strives valiantly' in the contest.", nonexample: "Giving up at the first sign of difficulty.", context: "Roosevelt honors the one who strives valiantly, even when he falls short." },
      { term: "timid", def: "Lacking courage; shrinking from risk or effort.", example: "'Cold and timid souls' who never dare to try.", nonexample: "A daring competitor who risks failure.", context: "The passage ends by contrasting the doer with cold and timid souls." }
    ],

    relic: {
      name: "The Arena Floor",
      intro: "Seven instructional reconstructions of the images in the passage — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the passage, and what it reveals.",
      artifacts: [
        {
          id: "critic", name: "It Is Not the Critic Who Counts", image: "images/critic.webp",
          clues: ["The passage opens by pushing the critic aside: 'It is not the critic who counts.'", "The critic is 'the man who points out how the strong man stumbles.'", "The critic watches and judges but does not act."],
          identify: { q: "How does the passage open?", choices: ["By dismissing the critic — 'It is not the critic who counts'", "By praising the wisest judge in the land", "By describing a peaceful field", "By naming a famous general"] },
          purpose: { q: "What is the critic image's role in the passage?", choices: ["It sets up the antithesis by naming who does NOT deserve the credit", "It is the passage's hero", "It appears once and is unrelated", "It describes the speaker himself"] },
          significance: { q: "Why open by dismissing the critic?", choices: ["It clears the way to honor the doer by contrast", "It attacks all forms of thinking", "It ends the argument early", "It praises staying safe"] },
          reveals: "The figure the passage refuses to honor — the one who only points out flaws.",
          conceals: "How the critic exists mainly to make the doer shine by contrast.",
          ace: "Articulate what the critic does; connect it to the antithesis; extend it to a time you saw someone criticize without ever trying."
        },
        {
          id: "arena", name: "The Man in the Arena", image: "images/arena.webp",
          clues: ["The credit belongs to 'the man who is actually in the arena.'", "The arena is a place of real contest and effort.", "Everything after this line develops that one comparison."],
          identify: { q: "Where does the credit belong, according to the passage?", choices: ["To the man 'actually in the arena' — the one who acts", "To the loudest voice in the crowd", "To the wealthiest man present", "To the one who never enters the contest"] },
          purpose: { q: "What is the arena image's role in the passage?", choices: ["It is the central extended metaphor every later image builds on", "It appears once and is dropped", "It describes a real sports match only", "It has no connection to the argument"] },
          significance: { q: "Why picture effort as a contest in an arena?", choices: ["A contest makes striving, risk, victory, and defeat concrete and visible", "An arena is a place of rest", "An arena is safe and comfortable", "An arena has no spectators"] },
          reveals: "The single controlling metaphor of the whole passage: life as a contest.",
          conceals: "How much of the argument is carried by this one image of the arena.",
          ace: "Articulate the arena metaphor; connect it to one thing a contest demands; extend it to why a vivid image can carry a big idea."
        },
        {
          id: "dustsweatblood", name: "Dust and Sweat and Blood", image: "images/dustsweatblood.webp",
          clues: ["The doer's face is 'marred by dust and sweat and blood.'", "The image is vivid, physical, and hard to ignore.", "It shows the real cost of being in the contest."],
          identify: { q: "What does this image describe?", choices: ["The doer's face marred by dust, sweat, and blood", "A clean, untouched spectator", "An empty arena at night", "A trophy on a shelf"] },
          purpose: { q: "What feeling does this image create?", choices: ["The gritty, physical reality of real effort", "Calm and boredom", "Comfort and ease", "Distance and detachment"] },
          significance: { q: "Why show the marks of struggle on the doer?", choices: ["The wounds prove the doer truly acted, unlike the untouched critic", "To warn readers away from trying", "To show the doer failed", "To decorate the scene"] },
          reveals: "The physical cost of real effort, pictured in vivid imagery.",
          conceals: "How the marks of struggle become a badge of honor, not shame.",
          ace: "Articulate the 'dust and sweat and blood' image; connect it to the idea of real effort; extend it to how sensory detail can make an argument feel real."
        },
        {
          id: "errs", name: "Who Errs, Who Comes Short Again and Again", image: "images/errs.webp",
          clues: ["The doer 'errs, who comes short again and again.'", "The passage does not hide the doer's failures.", "Yet the doer 'does actually strive to do the deeds.'"],
          identify: { q: "What does this image admit about the doer?", choices: ["That the doer errs and comes short again and again", "That the doer never makes a single mistake", "That the doer refuses to try", "That the doer is a critic in disguise"] },
          purpose: { q: "Why include the doer's failures in a passage of praise?", choices: ["To show that honest striving includes mistakes and still deserves credit", "To prove the doer is worthless", "To agree with the critic", "To change the subject"] },
          significance: { q: "What does 'again and again' add to the picture?", choices: ["Effort is repeated and persistent, not a single lucky try", "The doer gives up quickly", "The doer succeeds every time", "The failures cancel the striving"] },
          reveals: "That the passage honors striving that includes real, repeated failure.",
          conceals: "How admitting failure makes the praise more honest and convincing.",
          ace: "Articulate what this image admits; connect it to the passage's respect for effort; extend it to a time trying and failing still mattered."
        },
        {
          id: "triumph", name: "The Triumph of High Achievement", image: "images/triumph.webp",
          clues: ["'At the best,' the doer knows 'the triumph of high achievement.'", "This is the best possible outcome of daring greatly.", "It is one of the two outcomes the doer may meet."],
          identify: { q: "What does this image name?", choices: ["The doer's best outcome — 'the triumph of high achievement'", "The critic's reward", "A quiet retreat from the contest", "A punishment for trying"] },
          purpose: { q: "What is this image's role in the passage?", choices: ["It names the best of the two outcomes the daring doer may reach", "It replaces the arena metaphor", "It describes the timid souls", "It ends the argument in defeat"] },
          significance: { q: "Why name the best outcome so clearly?", choices: ["It shows daring can lead to real triumph, not only risk", "It promises the doer always wins", "It warns against trying", "It praises the critic"] },
          reveals: "The high reward that daring effort can reach at its best.",
          conceals: "How this outcome is set against its opposite — daring failure — to frame the choice.",
          ace: "Articulate what 'the triumph of high achievement' means; connect it to daring greatly; extend it to a goal worth striving for even without a guarantee."
        },
        {
          id: "daringgreatly", name: "Fails While Daring Greatly", image: "images/daringgreatly.webp",
          clues: ["'At the worst, if he fails, at least fails while daring greatly.'", "This is the second, harder outcome the doer may meet.", "The passage insists even this failure is honorable."],
          identify: { q: "What does this image describe?", choices: ["The doer's worst outcome — failing 'while daring greatly'", "The critic winning the contest", "A doer who never dares at all", "A quiet victory without risk"] },
          purpose: { q: "Why call even failure honorable here?", choices: ["Because daring greatly is worthy in itself, win or lose", "Because failure is always painless", "Because the critic is right after all", "To discourage effort"] },
          significance: { q: "What does 'daring greatly' add to the idea of failure?", choices: ["It makes the failure noble — the doer risked much for a worthy cause", "It makes the failure shameful", "It proves the doer should have stayed home", "It has no effect on the meaning"] },
          reveals: "That the passage honors bold failure over safe inaction.",
          conceals: "How this line quietly answers the fear of failing at all.",
          ace: "Articulate what 'fails while daring greatly' means; connect it to the value of effort; extend it to when a brave failure beats a safe refusal to try."
        },
        {
          id: "timidsouls", name: "Cold and Timid Souls Who Neither Know Victory Nor Defeat", image: "images/timidsouls.webp",
          clues: ["The passage closes by naming 'those cold and timid souls.'", "They 'neither know victory nor defeat.'", "The doer's 'place will never be with' them."],
          identify: { q: "Who are the 'cold and timid souls'?", choices: ["Those who never enter the contest, so they know neither victory nor defeat", "The strongest fighters in the arena", "The doer's loyal supporters", "The judges of the contest"] },
          purpose: { q: "Why end the passage with these souls?", choices: ["To contrast the daring doer with those who never dare at all", "To praise a safe, cautious life", "To describe the arena's weather", "To thank the audience"] },
          significance: { q: "What does 'neither victory nor defeat' reveal about them?", choices: ["By never risking anything, they gain nothing worth having", "They win quietly and often", "They are secretly the true heroes", "They fought and lost bravely"] },
          reveals: "The final contrast: those who never dare, set against the doer.",
          conceals: "How the passage ends on a warning, not a promise of easy reward.",
          ace: "Articulate who the timid souls are; connect them to the antithesis with the doer; extend it to why refusing every risk can be its own kind of loss."
        }
      ]
    },

    ctob: {
      name: "The Doer's Trial",
      intro: "Six locks. Every answer is inferable from the passage and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The whole passage is built on comparing life to a contest fought in a(n) ______. (one word)",
          evidence: ["The credit belongs to the one 'actually in' this place.", "It is the central extended metaphor of the passage.", "The word begins with 'are…'."],
          hints: ["A central space where a contest is fought.", "Are…", "The word is arena."],
          answer: "arena"
        },
        {
          type: "mc",
          prompt: "According to the passage, the credit belongs mainly to —",
          options: [
            "the doer who is actually in the arena.",
            "the critic who points out mistakes.",
            "the loudest voice in the crowd.",
            "the one who never enters the contest."
          ],
          hints: ["Think about who acts versus who only watches.", "Which option matches 'the man who is actually in the arena'?"]
        },
        {
          type: "mc",
          prompt: "The critic — 'the man who points out how the strong man stumbles' — functions in the passage to —",
          options: [
            "set up a contrast that makes the doer deserve the honor.",
            "describe the passage's true hero.",
            "give practical advice on how to win.",
            "name one of the doer's rewards."
          ],
          hints: ["The critic is dismissed in the very first line.", "The passage praises the opposite of the critic."]
        },
        {
          type: "digit",
          prompt: "The passage says the doer, in the end, will never stand with those who 'neither know' two things. How many outcomes are named that these timid souls never know? Enter the number.",
          evidence: ["The closing line names 'those cold and timid souls who neither know victory nor defeat.'", "Count the two named outcomes: victory, and defeat.", "One plus one."],
          hints: ["Read the final line and count the outcomes the timid souls never know.", "Victory and defeat — that is how many?", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the passage's figures and images in the order they appear, earliest first.",
          items: [
            "The critic who only points out how the strong man stumbles.",
            "The man in the arena, his face marred by dust and sweat and blood.",
            "The triumph of high achievement — or, at worst, failing while daring greatly.",
            "The cold and timid souls who neither know victory nor defeat."
          ],
          hints: ["The passage opens by dismissing the critic.", "The doer and his effort come before the two outcomes.", "The cold and timid souls appear in the closing contrast."]
        },
        {
          type: "mc",
          prompt: "The phrases 'who strives valiantly; who errs, who comes short again and again; who spends himself' are an example of —",
          options: [
            "parallelism — repeated clauses building rhythm and force.",
            "a single unbalanced sentence with no pattern.",
            "a rhyme scheme at the ends of lines.",
            "plain prose with no persuasive shaping."
          ],
          hints: ["Notice the repeated 'who…' pattern.", "The repetition builds momentum and emphasis."]
        }
      ]
    },

    arcade: {
      name: "Critic or Doer?",
      instruction: "'The Man in the Arena' runs on antithesis — the sideline critic set against the striving doer. Sort each image by which figure it belongs to: is it the CRITIC / TIMID SOUL (who does NOT count), or the DOER IN THE ARENA (who earns the credit)? Reasoning earns the points.",
      buckets: [
        { id: "critic", label: "The critic / the timid (who does NOT count)", short: "Critic" },
        { id: "doer", label: "The doer in the arena (who earns the credit)", short: "Doer" }
      ],
      cards: [
        { text: "Pointing out how the strong man stumbles.", bucket: "critic", why: "This is exactly what the dismissed critic does — judging from outside." },
        { text: "Saying where the doer of deeds could have done them better.", bucket: "critic", why: "The passage names this as the critic's habit, not the doer's action." },
        { text: "A soul that neither knows victory nor defeat.", bucket: "critic", why: "This is the cold and timid soul who never enters the contest." },
        { text: "Staying cold and timid, never daring to try.", bucket: "critic", why: "The passage's final contrast: the one who never dares." },
        { text: "A face marred by dust and sweat and blood.", bucket: "doer", why: "The marks of real effort belong to the man in the arena." },
        { text: "Striving valiantly and spending himself in a worthy cause.", bucket: "doer", why: "This is the doer's honest, persistent effort." },
        { text: "Knowing the triumph of high achievement.", bucket: "doer", why: "This is the doer's best outcome for daring greatly." },
        { text: "Failing, but failing while daring greatly.", bucket: "doer", why: "Even in failure, this belongs to the doer who risked much." }
      ],
      followup: "The passage sets the critic and the doer side by side, then insists even the doer's failure beats the timid soul's safety. What does that placement suggest about what Roosevelt believes truly deserves honor?"
    },

    analysis: {
      mcq: [
        {
          q: "The central metaphor of 'The Man in the Arena' compares life to —",
          options: [
            "a contest fought in an arena, with the doer as the one who acts.",
            "a quiet garden tended by a gardener.",
            "a courtroom judged by a critic.",
            "a distant, silent star."
          ],
          why: "The passage locates the one who counts 'actually in the arena' and builds every image from that contest."
        },
        {
          q: "'It is not the critic who counts' and the praise of the doer are an example of —",
          options: [
            "antithesis — opposite figures set against each other.",
            "a simile using 'like' or 'as.'",
            "a rhyme scheme.",
            "a pun."
          ],
          why: "The passage sharpens its argument by contrasting the idle critic with the striving doer."
        },
        {
          q: "The image of a face 'marred by dust and sweat and blood' works in the passage to —",
          options: [
            "make the physical cost of real effort vivid and concrete.",
            "describe a comfortable, untouched spectator.",
            "list one of the critic's arguments.",
            "close the passage on a note of ease."
          ],
          why: "The sensory imagery shows the doer truly acted, unlike the untouched critic."
        },
        {
          q: "The passage insists that a doer who 'fails while daring greatly' is still honorable because —",
          options: [
            "daring effort in a worthy cause deserves credit, win or lose.",
            "failure is always painless and easy.",
            "the critic turns out to be right.",
            "victory is the only thing that matters."
          ],
          why: "Roosevelt values bold striving itself, ranking daring failure above safe inaction."
        },
        {
          q: "Because one comparison — life as a contest in an arena — is developed across the whole passage, it is a clear example of —",
          options: [
            "an extended metaphor.",
            "a single simile.",
            "a rhyme scheme.",
            "a list of facts."
          ],
          why: "The arena comparison is sustained from the critic to the timid souls, the definition of an extended metaphor."
        }
      ],
      short: [
        "Choose one image from the Arena Floor. Explain what it shows and what it reveals about the passage's meaning.",
        "The passage sets the critic against the doer (antithesis). Explain how placing these opposite figures side by side sharpens Roosevelt's argument.",
        "Explain why the passage insists that failing 'while daring greatly' is more honorable than staying a 'cold and timid' soul. What does this reveal about what Roosevelt values?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 'The Man in the Arena' use one extended metaphor and sharp antithesis to argue that daring effort deserves honor more than criticism? Make a claim and support it with specific images from the passage.",
      aceReflection: "Articulate what the passage suggests about the doer versus the critic in your own words. Connect two contrasting images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Doer and the Critic",
      prompt: "'The Man in the Arena' carries a whole idea — honor the daring doer, not the idle critic — through a single extended metaphor: life as a contest in an arena. Choose another poem, song, story, speech, or real situation that makes a similar move (praising bold effort over sideline criticism, or one image carrying a big idea). Explain the connection with evidence: what is the single image or contrast, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the passage's doer-over-critic idea to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'The Man in the Arena' uses the image of a contest in an arena to argue that the doer matters more than the critic. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'The Man in the Arena.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in 'The Man in the Arena' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the passage." },
      { title: "Evidence prompt", text: "Here is my claim about 'The Man in the Arena': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the passage's doer-over-critic idea to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'The Man in the Arena' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Theodore Roosevelt's 'The Man in the Arena' (the famous excerpt from his 1910 Sorbonne address 'Citizenship in a Republic') as a short persuasive passage — a study of extended metaphor, antithesis, parallelism, imagery, and tone. The excerpt is public domain, so the passage can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature and rhetoric in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "'The Man in the Arena' appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 8); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The passage is an excerpt from Theodore Roosevelt's 1910 speech 'Citizenship in a Republic,' which is in the public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric and literature. Focus on the extended metaphor (life as a contest in an arena), antithesis (critic versus doer; victory versus defeat), parallelism ('who strives... who errs... who spends himself'), vivid imagery ('dust and sweat and blood'), and exhortatory tone.",
        "Details here were fact-checked against the passage (dismissing the critic; the man 'actually in the arena'; the face 'marred by dust and sweat and blood'; striving valiantly and coming short again and again; 'the triumph of high achievement'; failing 'while daring greatly'; and the 'cold and timid souls who neither know victory nor defeat'). Longer stretches are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 8 ELAR TEKS (19 TAC Ch. 110) strands on rhetorical and figurative language, author's purpose and craft, and argument — especially extended metaphor, antithesis, and parallelism. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.8.1", "RI.8.2", "RI.8.4", "RI.8.5", "RI.8.6", "W.8.1", "SL.8.1", "L.8.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
