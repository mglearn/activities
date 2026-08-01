/* PlotPoint — The Cask of Amontillado (Edgar Allan Poe, 1846).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (Montresor's motto
   and the coat of arms are described, not quoted). Standards are good-faith
   Common Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "cask",
  storageKey: "plotpoint.cask.v1",

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
    "vocab.title": "Words for The Cask of Amontillado",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Montresor's Catacombs",
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
    "ctob.title": "The Unfinished Toast",
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
    "arcade.title": "Fortunato's View or the Reader's View?",
    "arcade.default": "Sort each detail by whose understanding it shows.",
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
    "extend.title": "The Cost of Revenge",
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
    "print.item.relic": "Catacombs evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Cost-of-revenge organizer",
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
      title: "The Cask of Amontillado",
      author: "Edgar Allan Poe",
      grades: "Grades 8–11",
      genre: "Gothic · Horror · Short story",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1846)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1846, The Cask of Amontillado is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A classic revenge horror story. It ends with a man being sealed alive behind a wall to die. Chilling but not graphic. Suitable for late middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1063",
      audio: "https://librivox.org/12-creepy-tales-by-edgar-allan-poe/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Cask of Amontillado — a torch-lit stone catacomb lined with bones, a wine bottle, and a mason's trowel."
    },
    hook: "Montresor has been wronged, and he has planned a perfect revenge. During the wild days of carnival, he flatters a proud wine expert named Fortunato and lures him with the promise of a rare cask of sherry. Down and down they go into the family catacombs — and only one of them will climb back out.",
    goals: [
      "Understand the plot of Poe's revenge tale and the trap Montresor sets.",
      "Analyze Montresor as a calm, unreliable, and remorseless first-person narrator.",
      "Trace Poe's use of dramatic irony — the gap between what Fortunato knows and what the reader knows.",
      "Interpret the story's view of pride, revenge, and a conscience that never appears."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of dramatic irony.",
        "Discuss: Can revenge ever truly satisfy? What does wanting it reveal about a person?"
      ],
      during: [
        "Use Montresor's Catacombs to slow down and read the trap, step by step.",
        "Track every double meaning — the friendly words that hide a deadly plan."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the irony and the crime.",
        "Complete the Extend task to weigh the cost of revenge."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Montresor uses Fortunato's pride against him. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Montresor's friendly words to his real plan. Explain how the gap between them creates dramatic irony and horror." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of revenge to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "revenge", def: "Harming someone in return for a wrong they did to you.", example: "Montresor punishing Fortunato for an insult.", nonexample: "Forgiving someone who wronged you.", context: "Revenge is Montresor's single, cold purpose." },
      { term: "catacombs", def: "Underground passages and vaults, often lined with the bones of the dead.", example: "The damp tunnels beneath Montresor's home.", nonexample: "A bright, open ballroom.", context: "Montresor leads Fortunato deep into the catacombs." },
      { term: "connoisseur", def: "An expert with refined taste, especially in food, wine, or art.", example: "Fortunato's pride in judging fine wine.", nonexample: "Someone who cannot tell one wine from another.", context: "Montresor plays on Fortunato's pride as a wine connoisseur." },
      { term: "dramatic irony", def: "When the reader knows something a character does not.", example: "We know the vault is a trap; Fortunato does not.", nonexample: "The reader and character learning a fact at the same time.", context: "The story is thick with dramatic irony." },
      { term: "unreliable narrator", def: "A storyteller whose account cannot be fully trusted.", example: "A murderer calmly justifying his crime.", nonexample: "A neutral witness with no stake.", context: "Montresor is a chillingly unreliable narrator." },
      { term: "immure", def: "To shut someone up within walls; to wall in.", example: "Sealing a person behind fresh brickwork.", nonexample: "Letting someone walk out a door.", context: "Montresor immures Fortunato alive." },
      { term: "carnival", def: "A festive season of costumes, masks, and celebration.", example: "The crowded, drunken streets where the story begins.", nonexample: "A quiet, ordinary workday.", context: "The carnival lets Montresor lure Fortunato unnoticed." },
      { term: "remorseless", def: "Feeling no guilt or regret.", example: "A narrator who shows no sorrow for murder.", nonexample: "A person tormented by guilt.", context: "Montresor recounts his crime in a remorseless voice." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "Montresor revealing a mason's trowel.", nonexample: "A detail with no link to later events.", context: "Poe plants foreshadowing that Fortunato ignores." }
    ],

    relic: {
      name: "Montresor's Catacombs",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "carnival", name: "The Carnival Costume", image: "images/carnival.webp",
          clues: ["The story opens during the wild celebration of carnival.", "Fortunato is dressed as a jester, in a tight suit and a cap with bells.", "He is also drunk from the festivities."],
          identify: { q: "How is Fortunato dressed and what is happening?", choices: ["As a jester with cap and bells, during carnival", "In armor, for a battle", "In plain work clothes", "As a king"] },
          purpose: { q: "What is the carnival's role in the story?", choices: ["Its noise and disguise let Montresor lure Fortunato unnoticed", "It is where the wine is stored", "It ends the story", "It has no importance"] },
          significance: { q: "Why is the jester costume darkly fitting?", choices: ["Fortunato is being made a 'fool' — led to his death without knowing it", "It shows he is wealthy", "It proves he is wise", "It keeps him warm"] },
          reveals: "The ironic image of a proud man dressed as a fool at his own doom.",
          conceals: "The deadly plan hidden beneath the festive scene.",
          ace: "Articulate the carnival setting; connect the jester costume to dramatic irony; extend it to how a festive surface can hide danger."
        },
        {
          id: "amontillado", name: "The Cask of Amontillado", image: "images/amontillado.webp",
          clues: ["Montresor claims to have bought a rare cask of sherry.", "He says he needs an expert to confirm it is genuine Amontillado.", "This bait draws the proud Fortunato underground."],
          identify: { q: "What is the Amontillado?", choices: ["A rare wine used as bait to lure Fortunato", "A weapon", "A costume", "A room in the house"] },
          purpose: { q: "What is the cask's role in the story?", choices: ["It is the lure that plays on Fortunato's pride", "It is a gift for a friend", "It cures the sick", "It is never mentioned again"] },
          significance: { q: "What does the bait reveal about Montresor's plan?", choices: ["He has studied his victim and knows exactly which pride to exploit", "He truly needs wine advice", "He is generous", "He acts on impulse"] },
          reveals: "How carefully Montresor has tailored the trap to his victim.",
          conceals: "That there may be no cask of Amontillado at all.",
          ace: "Articulate what the Amontillado is; connect the bait to Fortunato's pride; extend it to how manipulators use a person's own desires against them."
        },
        {
          id: "luchesi", name: "The Rival, Luchesi", image: "images/luchesi.webp",
          clues: ["Montresor keeps mentioning another wine expert named Luchesi.", "He offers to ask Luchesi instead if Fortunato is too busy.", "This makes the proud Fortunato insist on coming himself."],
          identify: { q: "Who is Luchesi in the story?", choices: ["A rival expert Montresor names to bait Fortunato's pride", "Montresor's servant", "Fortunato's brother", "A carnival performer"] },
          purpose: { q: "What is Luchesi's role?", choices: ["Naming him goads Fortunato into going deeper, to prove he is the better judge", "He helps Fortunato escape", "He owns the wine", "He warns Fortunato"] },
          significance: { q: "What does the Luchesi trick reveal?", choices: ["Montresor manipulates Fortunato's jealousy and pride at every step", "That Luchesi is dangerous", "That Fortunato is humble", "That the wine is fake"] },
          reveals: "Montresor's skill at pushing Fortunato onward using rivalry.",
          conceals: "How willingly Fortunato walks into the trap.",
          ace: "Articulate who Luchesi is; connect the rivalry to Fortunato's pride; extend it to how a rival's name can be used to manipulate someone."
        },
        {
          id: "coat-of-arms", name: "The Coat of Arms & Motto", image: "images/coat-of-arms.webp",
          clues: ["Deep in the vaults, Montresor describes his family's crest.", "It shows a golden foot crushing a serpent whose fangs are in the heel.", "Its motto means, in effect, 'no one wounds me and goes unpunished.'"],
          identify: { q: "What does Montresor's coat of arms show?", choices: ["A foot crushing a biting serpent, with a motto about punishing wrongs", "A crown and sword", "A ship at sea", "A blank shield"] },
          purpose: { q: "What is the crest's role in the story?", choices: ["It states Montresor's code of revenge out loud", "It decorates the wine", "It identifies Fortunato", "It has no meaning"] },
          significance: { q: "What does the motto reveal about Montresor?", choices: ["He believes any insult must be answered with punishment", "He forgives easily", "He fears the serpent", "He values mercy"] },
          reveals: "Montresor's whole philosophy of revenge, hidden in plain sight.",
          conceals: "Whether the 'insult' he avenges was ever real.",
          ace: "Articulate what the crest and motto say; connect them to Montresor's actions; extend it to how a person's stated code can justify terrible acts."
        },
        {
          id: "niter", name: "The Niter on the Walls", image: "images/niter.webp",
          clues: ["The deep vaults are damp and cold.", "White crystals of niter coat the stone walls.", "The damp air makes Fortunato cough, but he refuses to turn back."],
          identify: { q: "What is the niter?", choices: ["White crystals coating the damp catacomb walls", "A kind of wine", "A weapon", "A costume"] },
          purpose: { q: "What is its role in the story?", choices: ["It signals how deep and deadly the vaults are, and tests Fortunato's resolve", "It cures his cough", "It lights the way", "It has no purpose"] },
          significance: { q: "What does Fortunato's refusal to turn back reveal?", choices: ["His pride overrides every warning sign", "That the vaults are safe", "That he suspects nothing is wrong", "That the niter is valuable"] },
          reveals: "The oppressive, tomb-like setting closing in around the victim.",
          conceals: "Just how near the end of the passage Fortunato's fate waits.",
          ace: "Articulate what the niter shows; connect the setting to rising dread; extend it to how pride can push people past clear warnings."
        },
        {
          id: "trowel", name: "The Mason's Trowel", image: "images/trowel.webp",
          clues: ["Fortunato jokes that Montresor cannot be a real 'mason.'", "Montresor produces a mason's trowel from beneath his cloak.", "Fortunato laughs, not understanding what it is for."],
          identify: { q: "What does Montresor reveal from under his cloak?", choices: ["A mason's trowel", "The cask of wine", "A sword", "A map"] },
          purpose: { q: "What is the trowel's role in the story?", choices: ["It is grim foreshadowing of the wall he will build", "It opens the wine", "It is a gift", "It is a torch"] },
          significance: { q: "What makes this moment chilling?", choices: ["The reader senses its deadly purpose while Fortunato only laughs", "It proves Montresor is a builder", "It shows the vaults are safe", "It ends the danger"] },
          reveals: "Poe's foreshadowing of the murder, hidden inside a joke.",
          conceals: "Nothing to the reader — but everything to Fortunato.",
          ace: "Articulate what the trowel foreshadows; connect the joke to dramatic irony; extend it to how a small object can reveal a plan the victim misses."
        },
        {
          id: "wall", name: "The Wall in the Niche", image: "images/wall.webp",
          clues: ["At the end of the passage is a small, deep niche in the rock.", "Montresor chains the drunken Fortunato to the wall inside it.", "Then, brick by brick, he seals the niche shut, burying Fortunato alive."],
          identify: { q: "How does Montresor kill Fortunato?", choices: ["He chains him in a niche and walls him up alive", "He poisons the wine", "He stabs him", "He lets him fall"] },
          purpose: { q: "What is this final act's role in the story?", choices: ["It completes Montresor's long-planned revenge", "It frees Fortunato", "It ends the carnival", "It is a mistake"] },
          significance: { q: "What does the calm, careful walling-up reveal?", choices: ["Montresor's cold, methodical, remorseless nature", "That he panics", "That he regrets it", "That Fortunato deserved it"] },
          reveals: "The horror at the heart of the story — a man buried alive.",
          conceals: "Whether Montresor ever feels guilt, even fifty years later.",
          ace: "Articulate how Montresor kills Fortunato; connect the calm method to his character; extend it to why a remorseless narrator is especially frightening."
        }
      ]
    },

    ctob: {
      name: "The Unfinished Toast",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Montresor's single, cold motive — and the story's central theme — is ______. (one word)",
          evidence: ["He feels he has been insulted and wronged.", "His family motto is about punishing any wrong.", "The word means paying someone back for a wrong, and begins with 'rev…'."],
          hints: ["Paying someone back for a wrong.", "Rev…", "The word is revenge."],
          answer: "revenge"
        },
        {
          type: "mc",
          prompt: "During what event does Montresor lure Fortunato away?",
          options: [
            "The carnival, with its crowds and costumes.",
            "A royal wedding.",
            "A quiet Sunday morning.",
            "A funeral."
          ],
          hints: ["Fortunato is in costume and has been drinking.", "Which option is the festive season?"]
        },
        {
          type: "mc",
          prompt: "How does Montresor finally kill Fortunato?",
          options: [
            "He chains him in a niche and walls him up alive.",
            "He poisons the wine.",
            "He drowns him in a well.",
            "He challenges him to a duel."
          ],
          hints: ["Think about the trowel and the bricks.", "Which option is being sealed behind a wall?"]
        },
        {
          type: "digit",
          prompt: "Montresor says his crime has stayed undiscovered for how many years? (He mentions half a century.) Enter the number.",
          evidence: ["He is telling the story long after the fact.", "He says no one has disturbed the bones for 'half of a century.'", "Half of one hundred."],
          hints: ["Half a century.", "One hundred divided by two.", "The number is 50."],
          answer: "50"
        },
        {
          type: "sequence",
          prompt: "Put Montresor's plan in order, earliest first.",
          items: [
            "Montresor lures Fortunato with the promise of rare Amontillado.",
            "He leads him deep into the family catacombs, playing on his pride.",
            "He chains Fortunato inside a small niche in the rock.",
            "He seals the niche with brick and mortar, burying him alive."
          ],
          hints: ["It begins with the lure of the wine.", "He must lead Fortunato down before he can chain him.", "The walling-up is the final act."]
        },
        {
          type: "word",
          prompt: "The rare wine Montresor uses as bait is a cask of ______. (one word)",
          evidence: ["It is a kind of Spanish sherry.", "It gives the story its title.", "The word begins with 'Amon…'."],
          hints: ["It is in the story's title.", "Amon…", "The word is Amontillado."],
          answer: "Amontillado"
        }
      ]
    },

    arcade: {
      name: "Fortunato's View or the Reader's View?",
      instruction: "Poe fills the story with dramatic irony — the reader knows what Fortunato does not. Sort each detail: does it show WHAT FORTUNATO BELIEVES (his innocent understanding), or WHAT THE READER KNOWS (the deadly truth)? Reasoning earns the points.",
      buckets: [
        { id: "fortunato", label: "What Fortunato believes", short: "Fortunato" },
        { id: "reader", label: "What the reader knows", short: "Reader" }
      ],
      cards: [
        { text: "He is off to taste and judge a fine, rare wine.", bucket: "fortunato", why: "Fortunato thinks it's just an evening of wine expertise." },
        { text: "Montresor is a friend doing him a favor.", bucket: "fortunato", why: "He trusts the man leading him underground." },
        { text: "The catacombs are simply a wine cellar to pass through.", bucket: "fortunato", why: "To Fortunato they are just damp storage vaults." },
        { text: "He will soon return to the carnival above.", bucket: "fortunato", why: "He has no idea this trip is one-way." },
        { text: "Montresor has planned this murder carefully.", bucket: "reader", why: "The reader sees the trap Fortunato cannot." },
        { text: "Every kind word hides a killer's intent.", bucket: "reader", why: "We hear the double meaning behind the courtesy." },
        { text: "The niche at the end is meant to be a tomb.", bucket: "reader", why: "The reader understands where the passage leads." },
        { text: "The mason's trowel means a wall, not wine.", bucket: "reader", why: "We grasp the trowel's purpose while Fortunato laughs." }
      ],
      followup: "This gap between what Fortunato knows and what the reader knows is dramatic irony. Which moment is most chilling because of it, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Montresor's motive for his crime is —",
          options: [
            "revenge for insults and injuries he blames on Fortunato.",
            "money owed to him.",
            "a quarrel over a woman.",
            "a mistake he cannot undo."
          ],
          why: "Montresor frames the whole story as long-planned revenge for a wrong."
        },
        {
          q: "Montresor lures Fortunato underground by —",
          options: [
            "appealing to his pride as a wine expert with a rare cask of Amontillado.",
            "threatening his family.",
            "offering him money.",
            "asking for his help in a fight."
          ],
          why: "He plays on Fortunato's vanity about judging fine wine."
        },
        {
          q: "Fortunato is especially easy to trap because he is —",
          options: [
            "drunk and proud, dressed as a fool at carnival.",
            "cautious and suspicious.",
            "a trained soldier.",
            "warned by a friend."
          ],
          why: "His drunkenness and pride blind him to every warning sign."
        },
        {
          q: "Montresor kills Fortunato by —",
          options: [
            "chaining him in a niche and sealing him behind a brick wall.",
            "poisoning the wine.",
            "stabbing him with a sword.",
            "pushing him down a well."
          ],
          why: "The horror of the story is that Fortunato is walled up alive."
        },
        {
          q: "Poe creates horror in the story mainly through —",
          options: [
            "the calm, remorseless narrator and heavy dramatic irony.",
            "graphic descriptions of blood.",
            "a monster or ghost.",
            "a fast-moving chase."
          ],
          why: "The chill comes from Montresor's cold voice and the reader's superior knowledge."
        }
      ],
      short: [
        "Choose one artifact from Montresor's Catacombs. Explain what it is and what it reveals about the story's meaning.",
        "Explain two examples of dramatic irony in the story and how they build horror.",
        "Montresor tells this story fifty years later and shows no clear guilt. What does that reveal about him — and about the nature of revenge?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Poe make Montresor a frightening narrator? Make a claim and support it with specific details about his voice, his plan, and his lack of remorse.",
      aceReflection: "Articulate what the story suggests about revenge in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Cost of Revenge",
      prompt: "Montresor gets his revenge — but tells the story fifty years later, still dwelling on it. Choose another story, film, or real situation about revenge. Explain the connection with evidence: what was the wrong, what was the revenge, and what did it truly cost the avenger?",
      format: "A short evidence-based comparison connecting the story's view of revenge to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Montresor uses Fortunato's pride against him in The Cask of Amontillado. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Cask of Amontillado. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Cask of Amontillado because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Cask of Amontillado: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of revenge to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Cask of Amontillado for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Poe's The Cask of Amontillado as a study of the unreliable narrator, dramatic irony, and the theme of revenge and pride. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages (the motto and coat of arms are described, not quoted), invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1846) is public domain. The linked Project Gutenberg edition is a standalone text; the linked LibriVox recording is a Poe collection ('12 Creepy Tales') that includes the story — confirm before assigning.",
        "Content: a revenge tale ending with a man walled up alive to die. Chilling but not graphic. Suitable for late middle and high school; preview and follow local policy.",
        "Details here were checked against the story (the narrator Montresor and his victim Fortunato; the carnival setting; Fortunato's jester costume and drunkenness; the bait of a rare cask of Amontillado; the rival Luchesi; the family coat of arms — a foot crushing a serpent — and the motto meaning 'no one wounds me unpunished'; the niter-lined catacombs; the mason's trowel; Fortunato chained in a niche and walled up alive; the crime undiscovered for half a century). Latin phrases and famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–11 ELAR TEKS (19 TAC Ch. 110) strands on point of view, narrator reliability, irony, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.6", "RL.9-10.1", "RL.9-10.6", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
