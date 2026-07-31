/* PlotPoint — The Apology (Plato).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   facts from Plato's Apology (Socrates' trial, 399 BCE). Famous ideas are
   paraphrased, not quoted from any one translation. Standards are real, applicable
   Common Core RI/SL codes flagged as good-faith alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array. */
window.__ROOM__ = {
  id: "apology",
  storageKey: "plotpoint.apology.v1",

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
    "enter.readListenNote": "This dialogue is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Apology",
    "vocab.intro": "{n} terms that unlock the dialogue. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Trial of Socrates",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the trial",
    "relic.q.significance": "Its meaning for Socrates' defense",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to Socrates' argument, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Charges Against Socrates",
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
    "arcade.title": "Argument or Appeal?",
    "arcade.default": "Sort each move into the kind of persuasion it uses.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Moves to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary & Rhetorical Analysis",
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
    "extend.title": "Put a Belief to the Socratic Test",
    "extend.format": "Format",
    "extend.evidence": "The Socratic method I am building on",
    "extend.transfers": "What transfers to my chosen belief",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the method stops working",
    "extend.response": "My Socratic questioning",
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
    "print.item.relic": "Trial evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Socratic-questioning organizer",
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
      title: "The Apology",
      author: "Plato",
      grades: "Grades 9–12",
      genre: "Philosophy · Classical rhetoric",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "Ancient Greek original and classic translations are public domain",
      textAccess: "Students need a public-domain translation of Plato's Apology (for example, Benjamin Jowett's). This room does not reproduce the text.",
      copyright: "The ancient Greek original and older English translations (such as Jowett's) are public domain; some recent translations remain under copyright. Verify your edition.",
      contentNote: "The dialogue depicts a trial ending in a death sentence and discusses death and duty. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1656",
      audio: "https://librivox.org/the-apology-of-socrates-by-plato/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the trial of Socrates in ancient Athens."
    },
    hook: "On trial for his life, Socrates refuses to beg, flatter, or stop asking hard questions. Plato's Apology is his defense — and a lasting argument that an unexamined life is not worth living.",
    goals: [
      "Reconstruct the charges against Socrates and how he answers each one.",
      "Analyze Socrates' reasoning, including the oracle story and his idea of true wisdom.",
      "Distinguish reasoned argument (logos) from appeals to pity (pathos), and see which Socrates chooses.",
      "Transfer the Socratic method by questioning a belief of your own."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of the Socratic method.",
        "Discuss: Should a person stand by their principles even when it is dangerous? Why or why not?"
      ],
      during: [
        "Use the Relic Room to examine the trial one piece at a time.",
        "Track how Socrates turns each accusation into a question."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to try the Socratic method yourself."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Socrates means by true wisdom. Include one detail from the dialogue that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Socrates' arguments (for example, the oracle story and his refusal to stop questioning). Explain how they support his defense." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the Socratic method to a belief people hold today. Explain what transfers, what changes, and where the method stops working." }
    },

    vocab: [
      { term: "philosophy", def: "The study of fundamental questions about knowledge, values, reason, and existence.", example: "Asking what makes an action right or wrong.", nonexample: "Memorizing a phone number.", context: "Socrates treats philosophy as a lifelong duty, not a hobby." },
      { term: "Socratic method", def: "A way of seeking truth by asking a series of probing questions rather than lecturing.", example: "Answering a claim with a question that tests it.", nonexample: "Simply telling someone the answer.", context: "The Socratic method made Socrates both famous and unpopular." },
      { term: "impiety", def: "Disrespect toward the gods or sacred things.", example: "Being accused of not honoring the city's gods.", nonexample: "Carefully following religious custom.", context: "One charge against Socrates is impiety." },
      { term: "oracle", def: "A person or place that delivers messages believed to come from a god.", example: "The oracle at Delphi answering a question.", nonexample: "A weather report.", context: "The oracle at Delphi said no one was wiser than Socrates." },
      { term: "gadfly", def: "A person who persistently challenges or provokes others to think — like a fly that stirs a sluggish animal.", example: "Someone who keeps asking uncomfortable questions of the powerful.", nonexample: "Someone who never questions anything.", context: "Socrates compares himself to a gadfly rousing the city of Athens." },
      { term: "rhetoric", def: "The art of persuasion through language.", example: "Arranging reasons and words to convince an audience.", nonexample: "Random, disconnected remarks.", context: "Socrates uses plain reasoning rather than showy rhetoric." },
      { term: "virtue", def: "Moral excellence; goodness of character.", example: "Acting with honesty and courage.", nonexample: "Cheating to get ahead.", context: "Socrates argues that caring for virtue matters more than wealth or reputation." },
      { term: "integrity", def: "Holding firmly to one's principles, even under pressure.", example: "Refusing to lie even when lying is easier.", nonexample: "Abandoning your values to avoid trouble.", context: "Socrates shows integrity by refusing to stop philosophizing to save his life." },
      { term: "logos", def: "Persuasion through logic and reasoned argument.", example: "Proving a point step by step with evidence.", nonexample: "Winning only by making people cry.", context: "Socrates relies on logos rather than emotional appeals." },
      { term: "pathos", def: "Persuasion through emotion, such as pity or fear.", example: "Begging a jury for mercy with tears.", nonexample: "Laying out a careful chain of reasons.", context: "Socrates deliberately refuses to use pathos to beg for his life." }
    ],

    relic: {
      name: "The Trial of Socrates",
      intro: "Seven instructional reconstructions of pieces from Socrates' trial in Athens — teaching recreations, not copyrighted illustrations. Investigate what each shows about the case and about Socrates' defense.",
      artifacts: [
        {
          id: "charges", name: "The Written Indictment", image: "images/charges.webp",
          clues: ["This document lists the formal accusations against Socrates.", "It names two offenses against the city.", "The case is brought by citizens, chiefly a man named Meletus."],
          identify: { q: "What is this document?", choices: ["The formal indictment listing the charges against Socrates", "A shopping list", "A map of Athens", "A poem about the gods"] },
          purpose: { q: "What is its role in the trial?", choices: ["To state the accusations Socrates must answer", "To sell goods in the market", "To honor a hero", "To record a voyage"] },
          significance: { q: "What does it show about the case?", choices: ["The charges are impiety and corrupting the youth — accusations Socrates says are vague and unfair", "That Socrates confessed", "That there was no trial", "That the jury was small"] },
          reveals: "The exact accusations Socrates must defend himself against.",
          conceals: "The real reasons behind the charges — resentment built up over years of questioning.",
          ace: "Articulate the two charges; connect them to why Socrates had made enemies; extend it to how vague accusations can be used against someone today."
        },
        {
          id: "oracle", name: "The Oracle's Reply at Delphi", image: "images/oracle.webp",
          clues: ["A friend of Socrates asked the oracle a question.", "The oracle answered that no one was wiser than Socrates.", "Socrates was puzzled, since he felt he knew nothing."],
          identify: { q: "What is this?", choices: ["The oracle's reply that no one is wiser than Socrates", "A guilty verdict", "A jury ballot", "A cup of poison"] },
          purpose: { q: "Why does Socrates tell this story?", choices: ["To explain how his questioning mission began", "To brag about his intelligence", "To insult the jury", "To describe a battle"] },
          significance: { q: "How does Socrates interpret it?", choices: ["His wisdom is knowing that he does not know, unlike those who think they know", "That he is the smartest man alive", "That the oracle was wrong", "That wisdom does not exist"] },
          reveals: "Socrates' central idea: real wisdom begins with admitting the limits of what you know.",
          conceals: "Whether the oracle meant exactly what Socrates says it did; he offers his own interpretation.",
          ace: "Articulate what the oracle prompts Socrates to do; connect it to his idea of wisdom; extend it to why admitting 'I don't know' can be a strength today."
        },
        {
          id: "gadfly", name: "The Gadfly", image: "images/gadfly.webp",
          clues: ["Socrates compares the city of Athens to a large, sluggish horse.", "He compares himself to a small fly that stings it awake.", "He says the city may swat him rather than thank him."],
          identify: { q: "What does this insect represent?", choices: ["Socrates' image of himself as a gadfly rousing Athens", "A real pest in the courtroom", "A gift to the jury", "A symbol of the gods"] },
          purpose: { q: "Why does Socrates use this comparison?", choices: ["To argue that his questioning benefits the city even when it annoys people", "To complain about insects", "To flatter the jury", "To describe farming"] },
          significance: { q: "What does the metaphor claim?", choices: ["A questioner who disturbs the comfortable can still be doing a public good", "That Socrates is harmful", "That Athens is a horse", "That philosophy is useless"] },
          reveals: "Socrates' view that challenging people's easy assumptions is a service, not a crime.",
          conceals: "Whether Athens will ever see it that way — the metaphor admits he may be swatted.",
          ace: "Articulate what the gadfly stands for; connect it to Socrates' mission; extend it to a modern 'gadfly' who challenges the powerful."
        },
        {
          id: "ballot", name: "The Jurors' Voting Tokens", image: "images/ballot.webp",
          clues: ["Socrates is judged not by one judge but by a large jury of Athenian citizens.", "Each juror casts a token to vote guilty or not guilty.", "A majority of the tokens decides his fate."],
          identify: { q: "What are these objects?", choices: ["Voting tokens cast by the citizen jurors", "Coins to pay the accuser", "Pieces of a board game", "Offerings to the gods"] },
          purpose: { q: "What is their role in the trial?", choices: ["To record each juror's guilty or not-guilty vote", "To buy Socrates' freedom", "To decorate the court", "To measure time"] },
          significance: { q: "What do they show about Athenian justice?", choices: ["Guilt was decided by a vote of many ordinary citizens, not a single judge", "That there was no vote", "That only nobles could judge", "That Socrates chose the jury"] },
          reveals: "How Athenian democracy placed judgment in the hands of a large citizen jury.",
          conceals: "The pressures, moods, and resentments that could sway a crowd's vote.",
          ace: "Articulate how Socrates was judged; connect the jury system to the risk of persuasion by emotion; extend it to how public opinion can decide fairness today."
        },
        {
          id: "agora", name: "The Agora (Marketplace)", image: "images/agora.webp",
          clues: ["Socrates did not teach in a private school for pay.", "He questioned people in the open, public heart of the city.", "There he examined politicians, poets, and craftsmen about what they claimed to know."],
          identify: { q: "What place is this?", choices: ["The Agora, the public marketplace where Socrates questioned people", "A private classroom", "A temple", "A prison cell"] },
          purpose: { q: "Why did Socrates work here?", choices: ["To question ordinary citizens in public, for free", "To sell his teachings", "To hide from the city", "To worship the gods"] },
          significance: { q: "What does this setting reveal?", choices: ["Socrates saw philosophy as a public duty open to everyone, not a paid, private craft", "That he charged high fees", "That he taught in secret", "That he avoided people"] },
          reveals: "That Socrates treated philosophy as a public good practiced in the open.",
          conceals: "How much his public questioning embarrassed powerful people and turned them against him.",
          ace: "Articulate where and how Socrates practiced philosophy; connect the public setting to the enemies he made; extend it to what 'questioning in public' looks like today."
        },
        {
          id: "sign", name: "The Inner Sign (Daimonion)", image: "images/sign.webp",
          clues: ["Socrates describes an inner voice or sign he has had since childhood.", "It never tells him what to do — only warns him when he is about to do wrong.", "He says it did not stop him from making his defense as he did."],
          identify: { q: "What is this?", choices: ["Socrates' inner sign, or 'daimonion,' that warns him against wrongdoing", "A trumpet used in court", "A gift from Meletus", "A weapon"] },
          purpose: { q: "What role does it play for Socrates?", choices: ["It warns him away from wrong action, guiding his conscience", "It predicts the future for money", "It commands him to attack", "It chooses the jury"] },
          significance: { q: "Why does it matter in his defense?", choices: ["Its silence suggests to Socrates that his path, even toward death, is not a wrong one", "It proves he is guilty of impiety", "It shows he ignored his conscience", "It has no meaning"] },
          reveals: "Socrates' sense of an inner moral check that guides his choices.",
          conceals: "Exactly what the sign is — the dialogue leaves its nature mysterious.",
          ace: "Articulate what the inner sign does; connect it to the idea of conscience; extend it to how people describe an inner sense of right and wrong today."
        },
        {
          id: "hemlock", name: "The Cup of Hemlock", image: "images/hemlock.webp",
          clues: ["After being found guilty, Socrates is sentenced to death.", "The method of execution is a cup of poison.", "He drinks it calmly rather than flee or beg for mercy."],
          identify: { q: "What is this object?", choices: ["The cup of hemlock poison used for Socrates' execution", "A cup of wine for celebration", "A jury token", "A medicine that heals"] },
          purpose: { q: "What is its role in the story?", choices: ["It carries out the death sentence the court hands down", "It cures Socrates", "It pays his accuser", "It summons the oracle"] },
          significance: { q: "What does Socrates' response reveal?", choices: ["He faces death with calm integrity, refusing to abandon his principles to survive", "He panics and recants", "He escapes the city", "He blames his friends"] },
          reveals: "Socrates' choice to keep his integrity even at the cost of his life.",
          conceals: "Whether Athens gained or lost by silencing him — a question the dialogue leaves to the reader.",
          ace: "Articulate Socrates' choice at the end; connect it to his idea that virtue matters more than survival; extend it to a modern case of standing by principle at great cost."
        }
      ]
    },

    ctob: {
      name: "The Charges Against Socrates",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In which Greek city is Socrates put on trial? (one word)",
          evidence: ["Socrates spent his life questioning citizens in a famous Greek city-state.", "It was an early democracy that judged cases with citizen juries.", "The city's name begins with 'Ath…'."],
          hints: ["A famous city-state, home to an early democracy.", "Ath…", "The city is Athens."],
          answer: "Athens"
        },
        {
          type: "digit",
          prompt: "How many formal charges are brought against Socrates in the indictment? Enter the number.",
          evidence: ["The indictment lists a specific set of offenses.", "One is impiety toward the city's gods; the other is corrupting the youth.", "Count them."],
          hints: ["Read the two offenses named.", "It is a very small number.", "There are 2 charges."],
          answer: "2"
        },
        {
          type: "word",
          prompt: "Who is the chief accuser that formally brings the charges against Socrates? (one name)",
          evidence: ["Several citizens accuse Socrates, but one man leads the prosecution.", "Socrates cross-examines him during the trial.", "His name begins with 'Mele…'."],
          hints: ["Socrates questions him directly in court.", "Mele…", "The accuser is Meletus."],
          answer: "Meletus"
        },
        {
          type: "mc",
          prompt: "How does Socrates interpret the oracle's saying that no one is wiser than he?",
          options: [
            "His wisdom is knowing that he does not know, while others only think they know.",
            "He is literally the smartest person who has ever lived.",
            "The oracle made a mistake and he ignores it.",
            "Wisdom is impossible, so the saying is meaningless."
          ],
          hints: ["Focus on what Socrates admits about his own knowledge.", "Which option is about knowing the limits of your knowledge?"]
        },
        {
          type: "sequence",
          prompt: "Put the stages of Socrates' trial in order, earliest first.",
          items: [
            "Socrates is formally charged with impiety and corrupting the youth.",
            "Socrates makes his defense and questions his accuser.",
            "The jury votes and finds Socrates guilty.",
            "Socrates is sentenced to death and drinks the hemlock."
          ],
          hints: ["The charges come first.", "The defense happens before the verdict.", "The sentence comes last."]
        },
        {
          type: "word",
          prompt: "By drinking what poison is Socrates executed? (one word)",
          evidence: ["After the death sentence, Socrates is given a cup of poison.", "He drinks it calmly rather than flee.", "The poison's name begins with 'hem…'."],
          hints: ["A poison made from a plant.", "Hem…", "The poison is hemlock."],
          answer: "hemlock"
        }
      ]
    },

    arcade: {
      name: "Argument or Appeal?",
      instruction: "On trial for his life, Socrates could win the jury with reason or with tears. Sort each move: is it a REASONED ARGUMENT (logos) — the kind Socrates actually makes — or an APPEAL TO PITY (pathos) — the kind he deliberately refuses? Reasoning earns the points.",
      buckets: [
        { id: "logos", label: "Reasoned argument (logos)", short: "Logos" },
        { id: "pathos", label: "Appeal to pity (pathos he refuses)", short: "Pathos" }
      ],
      cards: [
        { text: "Cross-examining Meletus to expose contradictions in the charges", bucket: "logos", why: "Testing an accuser's claims by logic is reasoned argument." },
        { text: "Explaining the oracle story to define what his 'wisdom' really is", bucket: "logos", why: "Using an example to clarify a claim is reasoned argument." },
        { text: "Arguing that a truly good person cannot be genuinely harmed", bucket: "logos", why: "This is a claim supported by reasoning about virtue." },
        { text: "Insisting he must keep questioning because it is his duty", bucket: "logos", why: "A principled reason for his conduct is argument, not emotional appeal." },
        { text: "Parading his weeping children before the jury to win sympathy", bucket: "pathos", why: "This is an appeal to pity — which Socrates refuses to make." },
        { text: "Begging the jurors with tears to spare his life", bucket: "pathos", why: "Pleading for mercy is an emotional appeal Socrates rejects." },
        { text: "Promising to flatter the crowd if they vote to acquit him", bucket: "pathos", why: "Flattery aimed at feelings, not reason — Socrates refuses it." },
        { text: "Offering to abandon philosophy just to avoid the death penalty", bucket: "pathos", why: "Trading principle for pity is exactly what Socrates will not do." }
      ],
      followup: "Socrates chooses logos over pathos even though pathos might have saved his life. Was that wise or foolish? When, if ever, is an emotional appeal a fair way to persuade?"
    },

    analysis: {
      mcq: [
        {
          q: "The two charges against Socrates are —",
          options: [
            "impiety toward the city's gods and corrupting the youth.",
            "theft and treason.",
            "cowardice in battle and tax evasion.",
            "practicing medicine without training."
          ],
          why: "The indictment accuses Socrates of impiety and of corrupting the young — the two claims he must answer."
        },
        {
          q: "Socrates concludes that his special wisdom is —",
          options: [
            "recognizing how little he truly knows, unlike those who only think they know.",
            "knowing more facts than anyone else in Athens.",
            "being able to predict the future.",
            "winning every argument by any means."
          ],
          why: "From the oracle story, Socrates decides his wisdom lies in admitting the limits of his knowledge."
        },
        {
          q: "When Socrates calls himself a 'gadfly,' he means that he —",
          options: [
            "stirs a comfortable city to think, even though it may resent him for it.",
            "is a harmful pest who should be removed.",
            "is small and unimportant.",
            "can fly away from any danger."
          ],
          why: "The gadfly metaphor argues that his provoking questions are a public benefit, not a crime."
        },
        {
          q: "Socrates refuses to beg the jury or parade his family mainly because —",
          options: [
            "he believes winning by pity would betray his principles and the truth.",
            "he has no family or friends.",
            "he is certain he will be acquitted anyway.",
            "the law forbids speaking to the jury."
          ],
          why: "He deliberately rejects appeals to pity, choosing integrity and reasoned argument over survival."
        },
        {
          q: "A central claim of the Apology is that —",
          options: [
            "a life without self-examination is not worth living.",
            "the wealthiest citizen is always the wisest.",
            "questioning authority is always wrong.",
            "the gods never speak to human beings."
          ],
          why: "Socrates argues that examining one's life and beliefs is essential to living well — even worth dying for."
        }
      ],
      short: [
        "Choose one artifact from the trial. Using specific details, explain what it reveals about Socrates' defense or his character.",
        "Explain Socrates' interpretation of the oracle. How does it lead to his idea of true wisdom?",
        "Socrates chooses reasoned argument over emotional appeals. Explain one place he does this and why it matters to his defense."
      ],
      paragraph: "Write an evidence-based paragraph. Is Socrates wise or foolish to refuse to beg for his life and to keep philosophizing at any cost? Make a claim and support it with specific details from the dialogue.",
      aceReflection: "Articulate what Socrates means by the examined life. Connect two of his arguments that support it. Extend the idea to your own life, and name where it becomes hard to apply."
    },

    extend: {
      name: "Put a Belief to the Socratic Test",
      prompt: "Socrates tests beliefs by asking careful questions instead of simply accepting or attacking them. Choose a common belief people hold today (about success, fairness, technology, or happiness). Write a short Socratic dialogue or a list of 4–6 probing questions that test whether the belief really holds up — the way Socrates would.",
      format: "A short Socratic dialogue or a set of 4–6 probing questions, plus a note on what your questioning revealed about the belief."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning about Socrates' idea of wisdom in Plato's Apology. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Plato's Apology. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in the Apology because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Apology: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to put this belief to the Socratic test: [belief]. Ask me probing questions one at a time, the way Socrates would, instead of telling me whether the belief is true." },
      { title: "Critique prompt", text: "Review my interpretation of the Apology for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Plato's Apology as an argument: the charges, Socrates' reasoning, and his choice of logos over pathos. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your translation. The Greek original and older translations (e.g., Jowett) are public domain; some recent translations remain under copyright.",
        "Details here reflect widely established facts about Socrates' trial (the charges of impiety and corrupting the youth; the accuser Meletus; the oracle story; the gadfly metaphor; the citizen jury; the hemlock). Confirm specifics and any figures against your edition.",
        "The famous idea that 'the unexamined life is not worth living' is paraphrased here, not quoted from any one translation. Quote directly from your class edition if you wish.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading of argumentative/informational text, rhetoric, and author's-purpose strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.5", "RI.11-12.5", "RI.9-10.6", "RI.11-12.6", "RI.9-10.8", "RI.11-12.8", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
