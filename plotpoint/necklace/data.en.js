/* PlotPoint — The Necklace (Guy de Maupassant, "La Parure," 1884).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. The early English
   translation by Jonathan Sturges is public domain. Standards are good-faith
   Common Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "necklace",
  storageKey: "plotpoint.necklace.v1",

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
    "vocab.title": "Words for The Necklace",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Loisels' World",
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
    "ctob.title": "The Price of a Pretense",
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
    "arcade.title": "Appearance or Reality?",
    "arcade.default": "Sort each detail by whether it is a pretense Mathilde shows the world or the truth beneath it.",
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
    "extend.title": "The Cost of a Pretense",
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
    "print.item.relic": "Loisels' world evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Cost-of-a-pretense organizer",
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
      title: "The Necklace",
      author: "Guy de Maupassant",
      grades: "Grades 8–10",
      genre: "Realism · Irony · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1884)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy. The early English translation by Jonathan Sturges is public domain — use that edition.",
      copyright: "Originally published as \"La Parure\" in 1884, The Necklace is in the public domain. The early English translation by Jonathan Sturges is public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A realist short story about pride, class, and poverty. There is no mature content. Suitable for middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/3090",
      audio: "https://librivox.org/complete-original-short-stories-of-guy-de-maupassant/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Necklace — a sparkling diamond necklace on velvet beside a modest attic room, suggesting the gap between glittering appearance and hard reality."
    },
    hook: "Mathilde Loisel dreams of the luxury she feels she was born for, but she is married to a modest clerk and lives in plain rooms. Invited to a glittering ministry ball, she borrows a diamond necklace from a wealthy friend to look the part — and dazzles the crowd. Then, on the way home, the necklace is gone. What the Loisels do next will cost them ten hard years, and the truth waiting at the end will change how you read every choice they made.",
    goals: [
      "Understand the plot of Maupassant's story and the chain of choices set off by a single lost necklace.",
      "Analyze Mathilde Loisel as a character shaped by pride, discontent, and dreams of wealth.",
      "Trace Maupassant's use of situational irony — especially the twist that reframes the whole story.",
      "Interpret the story's view of vanity, social class, appearance versus reality, and the cost of pretense."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of situational irony.",
        "Discuss: Have you ever tried to appear richer, cooler, or more successful than you are? What can that cost?"
      ],
      during: [
        "Use The Loisels' World to slow down and read each turning point, step by step.",
        "Track the gap between how Mathilde wants to appear and the reality of her life."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the irony and the chain of consequences.",
        "Complete the Extend task to weigh the cost of a small pretense."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Mathilde borrows the necklace instead of wearing something she already owns. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Mathilde's desire to appear wealthy to the ten years of hardship that follow. Explain how one small choice sets off a long chain of consequences." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of vanity and pretense to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "vanity", def: "Excessive pride in one's appearance or worth; caring too much about how others see you.", example: "Mathilde longing to look rich and admired at the ball.", nonexample: "Being content with a plain, honest life.", context: "Mathilde's vanity drives her to borrow the necklace." },
      { term: "irony", def: "A contrast between what is expected and what actually happens or is true.", example: "The borrowed diamonds turning out to be worthless paste.", nonexample: "Events turning out exactly as planned.", context: "The story's ending is built on situational irony." },
      { term: "discontent", def: "A restless unhappiness with what one has.", example: "Mathilde feeling cheated by her modest home and clothes.", nonexample: "Feeling grateful and satisfied with your life.", context: "Mathilde's discontent shapes every choice she makes." },
      { term: "realism", def: "A style of writing that shows ordinary life and people truthfully, without romantic exaggeration.", example: "The plain details of the Loisels' daily struggle to pay debts.", nonexample: "A fairy tale with magic and a guaranteed happy ending.", context: "Maupassant writes in the tradition of realism." },
      { term: "pretense", def: "An attempt to make something appear true or grander than it really is.", example: "Dressing to look wealthy for one evening at the ball.", nonexample: "Showing your true circumstances honestly.", context: "A single night of pretense costs the Loisels ten years." },
      { term: "franc", def: "The unit of French money used in the story.", example: "The replacement necklace costing thirty-six thousand francs.", nonexample: "A modern dollar or euro coin.", context: "The debt is counted in thousands of francs." },
      { term: "aristocracy", def: "The wealthy, high-ranking upper class of a society.", example: "The elegant guests Mathilde imagines she belongs among.", nonexample: "A working clerk earning a modest salary.", context: "Mathilde believes she was born for the aristocracy." },
      { term: "twist", def: "A sudden, surprising turn near the end of a story that changes its meaning.", example: "Learning the lost necklace was fake all along.", nonexample: "An ending that reveals nothing new.", context: "The final twist forces the reader to rethink the whole story." },
      { term: "menial", def: "Lowly or humble, especially of hard, unskilled work.", example: "Mathilde scrubbing floors and hauling water for ten years.", nonexample: "Sitting comfortably as an admired guest of honor.", context: "The debt forces her into menial household labor." }
    ],

    relic: {
      name: "The Loisels' World",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "invitation", name: "The Ministry Ball Invitation", image: "images/invitation.webp",
          clues: ["Monsieur Loisel proudly brings home an invitation to a fancy ministry party.", "He expects his wife to be delighted.", "Instead, Mathilde is upset — she feels she has nothing suitable to wear."],
          identify: { q: "What does Monsieur Loisel bring home?", choices: ["An invitation to an elegant ministry ball", "A diamond necklace", "A large sum of money", "A new dress"] },
          purpose: { q: "What is the invitation's role in the story?", choices: ["It sets the whole plot in motion by tempting Mathilde to appear wealthy", "It ends the story", "It is a warning she ignores", "It has no importance"] },
          significance: { q: "What does Mathilde's reaction reveal?", choices: ["Her discontent — a chance for joy becomes a source of shame about her means", "That she is grateful", "That she dislikes her husband", "That she fears crowds"] },
          reveals: "How Mathilde turns an opportunity into evidence of what she lacks.",
          conceals: "The long chain of consequences the invitation will set off.",
          ace: "Articulate what the invitation is; connect Mathilde's reaction to her discontent; extend it to how longing for status can spoil a good thing."
        },
        {
          id: "dress", name: "The New Dress", image: "images/dress.webp",
          clues: ["Mathilde says she cannot go to the ball with nothing proper to wear.", "Her husband gives up money he had saved for himself to buy her a dress.", "Even with the dress, she is still unhappy — she has no jewels to wear with it."],
          identify: { q: "How does Mathilde get a dress for the ball?", choices: ["Her husband spends his own saved money to buy her one", "She borrows it from a friend", "She sews it herself", "She already owns one"] },
          purpose: { q: "What is the dress's role in the story?", choices: ["It shows the sacrifices made to keep up appearances — yet it is still not enough for her", "It is the thing she loses", "It is worthless paste", "It never matters again"] },
          significance: { q: "What does 'still not enough' reveal?", choices: ["Vanity keeps demanding more; the dress alone cannot satisfy her", "That the dress is cheap", "That her husband is unkind", "That she loves simple things"] },
          reveals: "How each attempt to satisfy her pride only feeds a new want.",
          conceals: "That the jewels she next craves will be her undoing.",
          ace: "Articulate what the dress cost; connect the sacrifice to Mathilde's vanity; extend it to how appearances can demand endless spending."
        },
        {
          id: "necklace", name: "The Borrowed Necklace", image: "images/necklace.webp",
          clues: ["To complete her look, Mathilde visits her wealthy friend Madame Forestier.", "She borrows a beautiful diamond necklace from her friend's jewel box.", "At the ball she is a great success, admired by everyone."],
          identify: { q: "Where does Mathilde get the necklace she wears?", choices: ["She borrows it from her wealthy friend Madame Forestier", "She buys it new", "She inherits it", "She finds it"] },
          purpose: { q: "What is the necklace's role in the story?", choices: ["It lets Mathilde appear rich for one night — and becomes the object she loses", "It is a gift she keeps", "It is her own jewelry", "It is never worn"] },
          significance: { q: "What does borrowing the necklace reveal?", choices: ["Her success at the ball rests entirely on a borrowed appearance", "That she is generous", "That she distrusts her friend", "That she prefers simple things"] },
          reveals: "That Mathilde's shining moment depends on something that is not hers.",
          conceals: "The true, humble worth of the necklace itself.",
          ace: "Articulate what the necklace is; connect the borrowed jewels to appearance versus reality; extend it to how borrowed status can carry hidden risk."
        },
        {
          id: "ball", name: "The Night at the Ball", image: "images/ball.webp",
          clues: ["At the ball, Mathilde is the most admired woman in the room.", "She dances, delighted, feeling she finally belongs among the elegant.", "When it ends, she and her husband slip away and hurry home."],
          identify: { q: "How does the evening at the ball go for Mathilde?", choices: ["She is a great success, admired and happy", "She is ignored and miserable", "She leaves early in tears", "She never arrives"] },
          purpose: { q: "What is the ball's role in the story?", choices: ["It is the single triumphant night the whole disaster is built around", "It is where she meets her husband", "It ends the debt", "It has no effect on the plot"] },
          significance: { q: "What does her happiness at the ball reveal?", choices: ["Her joy depends on being seen as wealthy, not on who she truly is", "That she is naturally content", "That the ministry is corrupt", "That she dislikes attention"] },
          reveals: "The one glittering evening that Mathilde longs for all her life.",
          conceals: "That the price of this night is about to come due.",
          ace: "Articulate what the ball means to Mathilde; connect her happiness to vanity; extend it to whether a moment of admiration can be worth its cost."
        },
        {
          id: "loss", name: "The Empty Neck", image: "images/loss.webp",
          clues: ["On the way home, Mathilde reaches for the necklace and finds it gone.", "The Loisels search everywhere and retrace their steps in vain.", "They never find it and dare not tell Madame Forestier the truth."],
          identify: { q: "What do the Loisels discover after the ball?", choices: ["The borrowed necklace is missing", "The dress is torn", "They have lost their money", "Madame Forestier is angry"] },
          purpose: { q: "What is the loss's role in the story?", choices: ["It is the turning point that plunges the couple into debt and hardship", "It ends the story happily", "It is quickly solved", "It has no consequences"] },
          significance: { q: "What does their decision not to confess reveal?", choices: ["Pride and fear lead them to a costly secret instead of the truth", "That they are honest", "That the necklace was cheap", "That Madame Forestier is cruel"] },
          reveals: "The single moment when everything the Loisels have begins to unravel.",
          conceals: "That an honest confession might have avoided the whole disaster.",
          ace: "Articulate what is lost; connect the choice to hide it to pride and fear; extend it to how covering a mistake can cost far more than admitting it."
        },
        {
          id: "debt", name: "Ten Years of Debt", image: "images/debt.webp",
          clues: ["The Loisels secretly buy a replacement diamond necklace costing thirty-six thousand francs.", "They borrow from money-lenders and take on crushing debt.", "For ten years they dismiss their servant, move to a cheap attic, and labor to repay it all."],
          identify: { q: "How do the Loisels replace the lost necklace?", choices: ["They buy a costly diamond necklace by going deep into debt", "They confess and are forgiven", "They find the original", "They make a fake one"] },
          purpose: { q: "What is the debt's role in the story?", choices: ["It shows the enormous, lasting cost of a single evening's pretense", "It is quickly paid off", "It brings them wealth", "It is never mentioned again"] },
          significance: { q: "What do the ten hard years reveal about Mathilde?", choices: ["She becomes coarse and old before her time, changed by real hardship", "That she grows richer", "That she stays exactly the same", "That she never worked"] },
          reveals: "How a moment of vanity turns into a decade of grinding labor.",
          conceals: "That all this sacrifice was made to replace a worthless fake.",
          ace: "Articulate what the debt costs; connect ten years of labor to one lost night; extend it to how a small pretense can demand a huge, lasting price."
        },
        {
          id: "truth", name: "The Truth Revealed", image: "images/truth.webp",
          clues: ["Years later, Mathilde meets Madame Forestier by chance and finally tells the whole story.", "Madame Forestier is deeply moved.", "She reveals that the borrowed necklace was only costume jewelry — paste — worth at most five hundred francs."],
          identify: { q: "What does Mathilde learn at the end?", choices: ["The lost necklace was fake, worth only a few hundred francs", "The necklace was real and priceless", "Madame Forestier had died", "She was never in debt"] },
          purpose: { q: "What is this revelation's role in the story?", choices: ["It is the ironic twist that reframes every sacrifice the Loisels made", "It rewards Mathilde with riches", "It begins the story", "It changes nothing"] },
          significance: { q: "What does the twist reveal about the whole story?", choices: ["The years of suffering were built on pretense and a misunderstanding, not real value", "That honesty never matters", "That the Loisels were lazy", "That Madame Forestier lied on purpose"] },
          reveals: "The situational irony at the heart of the story — a fortune spent to replace a fake.",
          conceals: "Whether an earlier confession could have spared the Loisels everything.",
          ace: "Articulate what the twist reveals; connect the fake necklace to appearance versus reality; extend it to why the ending changes how we read every earlier choice."
        }
      ]
    },

    ctob: {
      name: "The Price of a Pretense",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Mathilde's central flaw — and the story's driving theme — is ______. (one word)",
          evidence: ["She is unhappy with her modest life and longs to appear rich.", "She cares deeply about how others see her at the ball.", "The word means excessive pride in appearance, and begins with 'van…'."],
          hints: ["Caring too much about how you look to others.", "Van…", "The word is vanity."],
          answer: "vanity"
        },
        {
          type: "mc",
          prompt: "Why does Mathilde borrow the necklace from Madame Forestier?",
          options: [
            "To look rich and complete her outfit for the ministry ball.",
            "Because her own necklace broke.",
            "To sell it for money.",
            "Because her friend insisted she take it."
          ],
          hints: ["She already has a new dress but feels she needs jewels.", "Which option is about appearing wealthy?"]
        },
        {
          type: "mc",
          prompt: "How do the Loisels handle the lost necklace?",
          options: [
            "They secretly buy a costly replacement and go deep into debt.",
            "They immediately confess to Madame Forestier.",
            "They report it to the police and recover it.",
            "They decide it does not matter."
          ],
          hints: ["They are too proud and afraid to tell the truth.", "Which option leads to ten years of hardship?"]
        },
        {
          type: "digit",
          prompt: "For how many years do the Loisels labor to repay their debt? Enter the number.",
          evidence: ["They dismiss their servant and move to a cheap attic.", "Mathilde grows coarse and old before her time from the hard work.", "The story says they toiled for a full decade — that is, this many years."],
          hints: ["A full decade.", "The number of years in a decade.", "The number is 10."],
          answer: "10"
        },
        {
          type: "sequence",
          prompt: "Put the Loisels' story in order, earliest first.",
          items: [
            "Mathilde borrows a diamond necklace and shines at the ball.",
            "She discovers the necklace is lost on the way home.",
            "The Loisels buy a costly replacement and fall into debt.",
            "Mathilde learns the borrowed necklace was only cheap paste."
          ],
          hints: ["It begins with the triumphant night at the ball.", "The loss comes before the debt.", "The truth about the fake necklace is revealed last."]
        },
        {
          type: "word",
          prompt: "In the end, the borrowed necklace turns out to be cheap costume jewelry — that is, ______. (one word)",
          evidence: ["Madame Forestier reveals it was not real diamonds.", "It was worth at most five hundred francs.", "The word for fake gemstone glass begins with 'pas…'."],
          hints: ["It means fake gems made of glass.", "Pas…", "The word is paste."],
          answer: "paste"
        }
      ]
    },

    arcade: {
      name: "Appearance or Reality?",
      instruction: "Maupassant builds the story on the gap between how things look and how they truly are. Sort each detail: does it show APPEARANCE (what Mathilde wants others to see), or REALITY (the truth beneath it)? Reasoning earns the points.",
      buckets: [
        { id: "appearance", label: "Appearance — what Mathilde shows", short: "Appearance" },
        { id: "reality", label: "Reality — the truth beneath", short: "Reality" }
      ],
      cards: [
        { text: "A dazzling diamond necklace at the ministry ball.", bucket: "appearance", why: "The necklace makes her look wealthy for one night." },
        { text: "Mathilde as the most admired, elegant woman in the room.", bucket: "appearance", why: "For an evening she seems to belong among the rich." },
        { text: "A new dress and borrowed jewels signaling luxury.", bucket: "appearance", why: "These are the props of a wealth she does not have." },
        { text: "The image of a woman born for a life of comfort.", bucket: "appearance", why: "This is the self she wishes the world to see." },
        { text: "The necklace was cheap paste worth a few hundred francs.", bucket: "reality", why: "The truth beneath the glitter is that it was fake." },
        { text: "The Loisels live in plain rooms on a clerk's modest salary.", bucket: "reality", why: "Their real circumstances are far from wealthy." },
        { text: "Ten years of debt, menial labor, and hardship.", bucket: "reality", why: "This is the true cost hidden behind one night's shine." },
        { text: "Mathilde grows coarse, rough-handed, and old before her time.", bucket: "reality", why: "Hard reality erases the elegant image she prized." }
      ],
      followup: "The story turns on the gap between appearance and reality. Which detail shows that gap most sharply, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "At the start of the story, Mathilde is unhappy mainly because —",
          options: [
            "she feels she was born for luxury but lives in modest circumstances.",
            "her husband treats her cruelly.",
            "she has no friends at all.",
            "she is seriously ill."
          ],
          why: "Mathilde's discontent comes from the gap between her dreams of wealth and her plain life."
        },
        {
          q: "Mathilde borrows the diamond necklace in order to —",
          options: [
            "appear wealthy and complete her look for the ball.",
            "sell it and pay off a debt.",
            "replace one she had already broken.",
            "give it to Madame Forestier as a gift."
          ],
          why: "She wants to look rich, and jewels finish the wealthy appearance she craves."
        },
        {
          q: "After losing the necklace, the Loisels choose to —",
          options: [
            "secretly buy a costly replacement and take on years of debt.",
            "confess the loss to Madame Forestier at once.",
            "flee the city to avoid the problem.",
            "accuse a servant of stealing it."
          ],
          why: "Pride and fear lead them to hide the loss and pay for it dearly."
        },
        {
          q: "The ten years of hard labor change Mathilde into —",
          options: [
            "a coarse, worn woman, aged before her time.",
            "a wealthy and admired lady.",
            "a bitter recluse who never leaves home.",
            "a person exactly as she was before."
          ],
          why: "Real hardship strips away the elegant image she once prized."
        },
        {
          q: "The story's final twist is that the lost necklace was —",
          options: [
            "only cheap costume jewelry, worth a fraction of what they repaid.",
            "even more valuable than they feared.",
            "found again years later.",
            "never actually lost."
          ],
          why: "The situational irony is that all their sacrifice replaced a worthless fake."
        }
      ],
      short: [
        "Choose one artifact from The Loisels' World. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the story contrasts appearance and reality. Use two specific details.",
        "Mathilde's one night of pretense costs the Loisels ten years. What does that reveal about vanity — and about the choices we make to hide a mistake?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Maupassant use situational irony to deliver the story's meaning? Make a claim and support it with specific details about Mathilde's choices, the debt, and the final twist.",
      aceReflection: "Articulate what the story suggests about vanity and pretense in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Cost of a Pretense",
      prompt: "Mathilde spends ten years paying for one night of appearing rich — and it was all for a fake. Choose another story, film, or real situation where someone pays a heavy price to keep up appearances. Explain the connection with evidence: what was the pretense, what did it cost, and what was the truth beneath it?",
      format: "A short evidence-based comparison connecting the story's view of vanity and pretense to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Mathilde borrows the necklace in The Necklace by Guy de Maupassant. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Necklace. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Necklace because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Necklace: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of vanity and pretense to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Necklace for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Maupassant's The Necklace as a study of character, situational irony, and the themes of vanity, social class, and appearance versus reality. The story is public domain; the early English translation by Jonathan Sturges is public domain, and a free text link is provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (\"La Parure,\" 1884) is public domain, and the early English translation by Jonathan Sturges is public domain. VERIFY the exact Project Gutenberg edition and translation link before assigning — the story typically appears within a Maupassant collection rather than as a standalone file, so confirm the linked edition contains this translation.",
        "Content: a realist story about pride, class, and poverty, with no mature content. Suitable for middle and high school; preview and follow local policy.",
        "Details here were checked against the story (Mathilde Loisel's discontent and dreams of luxury; her husband, a modest ministry clerk; the ball invitation; the new dress; the borrowed diamond necklace from Madame Forestier; Mathilde's success at the ball; the loss of the necklace; the secret replacement costing thirty-six thousand francs; the money-lenders and ten years of debt and menial labor; Mathilde growing coarse and old before her time; the final revelation that the borrowed necklace was paste worth at most five hundred francs). Specific lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–10 ELAR TEKS (19 TAC Ch. 110) strands on character, theme, irony, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.3", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
