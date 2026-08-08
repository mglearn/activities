/* PlotPoint — Adventures of Huckleberry Finn (Mark Twain, 1884/1885).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the novel is public domain, but this room does NOT reproduce
   its text and invents no quotations; it paraphrases throughout. The original
   novel repeatedly uses a racial slur and depicts racist attitudes as part of its
   anti-racist satire; this room reproduces NONE of that language and treats
   slavery, race, and Huck's moral awakening with care and historical context.
   Standards are good-faith Common Core alignment; TEKS/ELPS flagged "Needs
   review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "huckfinn",
  storageKey: "plotpoint.huckfinn.v1",

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
    "enter.readListenNote": "This novel is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Adventures of Huckleberry Finn",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Down the Mississippi",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the novel",
    "relic.q.significance": "What it reveals about the novel's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Free on the River",
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
    "arcade.title": "The River or the Shore?",
    "arcade.default": "Sort each detail by whether it belongs to the freedom of the river or the cruelty of the shore.",
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
    "extend.title": "Conscience vs. the Crowd",
    "extend.format": "Format",
    "extend.evidence": "The idea from the novel I am building on",
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
    "print.item.relic": "River evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Conscience organizer",
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
      title: "Adventures of Huckleberry Finn",
      author: "Mark Twain",
      grades: "Grades 10–12",
      genre: "Satire · Novel",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1884/1885)",
      textAccess: "The novel is public domain. Use the free links below, or your class's edition.",
      copyright: "First published in 1884–85, Adventures of Huckleberry Finn is in the public domain. This room paraphrases and reproduces no passages and no offensive language.",
      contentNote: "A mature American classic and one of the most frequently challenged books in U.S. schools. Set in the pre–Civil War South, it confronts slavery and racism directly; the original text repeatedly uses a racial slur and portrays racist attitudes as the target of its anti-racist satire. This room reproduces NONE of that language and no passages — it studies the novel's themes, satire, and Huck's moral awakening with care and historical context. Preview thoroughly, plan for honest discussion, and follow your district's policy; some districts restrict, contextualize, or substitute an edition.",
      gutenberg: "https://www.gutenberg.org/ebooks/76",
      audio: "https://librivox.org/the-adventures-of-huckleberry-finn-by-mark-twain/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Adventures of Huckleberry Finn — a small raft drifting down a wide, sunlit Mississippi River at dawn, two figures aboard, with one shadowed shore of fences and towns on the left and open golden water opening ahead."
    },
    hook: "Huck Finn would rather do almost anything than be 'sivilized.' To escape his violent father, he fakes his own death and lights out on his own — and on a river island he finds Jim, an enslaved man running for his freedom. Together they push a raft down the Mississippi, and out on the water they are free and equal. But every time they touch the shore, they run into the greed, cruelty, and hypocrisy of 'respectable' society — until Huck must decide, once and for all, whether to betray his friend or defy everything he's been taught.",
    goals: [
      "Follow the novel's episodic journey down the Mississippi and its main figures.",
      "Analyze the central contrast between the free river and the cruel, hypocritical shore.",
      "Trace Huck's moral growth as his own conscience collides with his society's rules.",
      "Interpret Twain's satire — how humor exposes the hypocrisy of a 'civilized' slaveholding society."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially satire, conscience, and hypocrisy, and the historical context of slavery.",
        "Set norms for honest, respectful discussion of a difficult, frequently challenged text."
      ],
      during: [
        "Use Down the Mississippi to track the river-and-shore pattern and Huck's choices.",
        "Notice each time 'civilized' society behaves worse than the two outsiders on the raft."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the satire and Huck's moral turn.",
        "Complete the Extend task on following your conscience against the crowd."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the river feels free to Huck and Jim while the shore is dangerous. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Huck's decision to help Jim to freedom with everything his society taught him was 'right.' Explain how his heart and his 'conscience' end up on opposite sides — and which one he follows." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the novel's idea — that doing right can mean defying the crowd — to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "satire", def: "Writing that uses humor and irony to expose and criticize society's faults.", example: "Twain mocking the cruelty of 'respectable' slaveholding society.", nonexample: "A straight, serious history report.", context: "Huckleberry Finn is a landmark of American satire." },
      { term: "vernacular", def: "The everyday spoken language of ordinary people in a region.", example: "Huck telling the story in his own rough, regional dialect.", nonexample: "Formal, textbook English.", context: "Twain wrote the novel in vernacular, not polished prose." },
      { term: "conscience", def: "The inner sense of what is right and wrong.", example: "The voice inside Huck arguing over whether to help Jim.", nonexample: "Acting with no thought of right or wrong.", context: "Huck's conscience has been shaped — and twisted — by his society." },
      { term: "hypocrisy", def: "Claiming to have morals or beliefs that one does not actually practice.", example: "'Good Christian' townsfolk who buy and sell human beings.", nonexample: "Living by the values you preach.", context: "Twain attacks the hypocrisy at the heart of 'civilized' society." },
      { term: "superstition", def: "Belief in luck, signs, and omens rather than reason.", example: "Huck and Jim reading meaning into snakeskins and spiders.", nonexample: "Explaining events by cause and effect.", context: "Superstition colors how Huck and Jim read the world." },
      { term: "feud", def: "A long, violent quarrel between families or groups.", example: "The Grangerfords and Shepherdsons killing each other for reasons no one recalls.", nonexample: "Two families living in easy friendship.", context: "The feud shows society's violence dressed up as honor." },
      { term: "picaresque", def: "An episodic tale following a low-status, roguish hero through a series of adventures.", example: "Huck drifting from one river episode to the next.", nonexample: "A single tight plot in one place.", context: "The novel has a picaresque, episode-by-episode structure." },
      { term: "civilize", def: "To train someone to follow a society's manners and rules (spelled 'sivilize' by Huck).", example: "The Widow's efforts to make Huck respectable.", nonexample: "Leaving someone wholly to their own wild ways.", context: "Huck resists being 'sivilized' from the first page to the last." }
    ],

    relic: {
      name: "Down the Mississippi",
      intro: "Seven instructional reconstructions of people, places, and moments from the novel — teaching recreations, not artwork from any edition. Investigate what each is, its role in the novel, and what it reveals.",
      artifacts: [
        {
          id: "river", name: "The River and the Raft", image: "images/river.webp",
          clues: ["Huck and Jim travel south on a small raft down the Mississippi.", "Out on the water, away from towns, they feel free and at peace.", "The raft becomes the one place where they can simply be themselves."],
          identify: { q: "Where do Huck and Jim spend their freest, happiest time?", choices: ["On a raft, out on the Mississippi River", "In a big city", "On the Widow's farm", "In a jail cell"] },
          purpose: { q: "What is the river and raft's role in the novel?", choices: ["They are the moving symbol of freedom at the story's heart", "They are only a way to catch fish", "They are a battlefield", "They have no importance"] },
          significance: { q: "What does the river represent, set against the shore?", choices: ["Freedom, peace, and honest friendship", "Danger and cruelty", "Wealth and status", "Boredom"] },
          reveals: "The novel's central image of freedom on the move.",
          conceals: "That freedom on the river is always threatened by the shore.",
          ace: "Articulate what the raft means; connect the river to freedom; extend it to other stories where a journey stands for escape or growth."
        },
        {
          id: "jim", name: "Jim", image: "images/jim.webp",
          clues: ["Jim is an enslaved man who runs away to seek freedom for himself and his family.", "He and Huck travel together and come to trust and protect each other.", "Twain shows Jim as wise, loving, and fully human — the moral center of the book."],
          identify: { q: "Who is Jim?", choices: ["An enslaved man seeking freedom, who becomes Huck's true friend", "A wealthy landowner", "A con man", "Huck's schoolteacher"] },
          purpose: { q: "What is Jim's role in the novel?", choices: ["His humanity and friendship force Huck to question everything he was taught", "He is comic relief only", "He is the villain", "He has no role"] },
          significance: { q: "Why is Jim central to the novel's meaning?", choices: ["His dignity exposes the lie behind slavery and 'civilized' society", "He proves Huck is right to run away", "He shows the river is dangerous", "He is unimportant"] },
          reveals: "The human being whose friendship reshapes Huck's conscience.",
          conceals: "How much the society around them refuses to see that humanity.",
          ace: "Articulate who Jim is; connect his friendship to Huck's growth; extend it to how knowing a person can break down a prejudice."
        },
        {
          id: "pap", name: "Pap Finn", image: "images/pap.webp",
          clues: ["Pap is Huck's violent, drunken father.", "He kidnaps Huck and locks him in a cabin, mainly to get at his money.", "His cruelty is part of the 'respectable' shore world Huck flees."],
          identify: { q: "Who is Pap Finn?", choices: ["Huck's abusive, drunken father", "A kind guardian", "A riverboat captain", "Jim's owner"] },
          purpose: { q: "What is Pap's role in the novel?", choices: ["His abuse drives Huck to fake his death and escape onto the river", "He guides Huck to safety", "He frees Jim", "He has no role"] },
          significance: { q: "What does Pap reveal about 'civilized' society?", choices: ["That the respectable shore holds cruelty as bad as anything Huck fears", "That fathers always protect their children", "That the river is dangerous", "That Huck is wealthy"] },
          reveals: "The violence and greed waiting on the shore, even at 'home.'",
          conceals: "That worse hypocrites than Pap wear finer clothes downriver.",
          ace: "Articulate who Pap is; connect his cruelty to the shore world; extend it to how 'respectable' surfaces can hide real harm."
        },
        {
          id: "conmen", name: "The Duke and the Dauphin", image: "images/conmen.webp",
          clues: ["Two traveling swindlers talk their way onto the raft.", "One calls himself a 'duke' and the other a lost French king (the 'dauphin').", "They cheat town after town — even robbing a grieving family of orphans."],
          identify: { q: "Who are the Duke and the Dauphin?", choices: ["Two con men who take over the raft and swindle towns", "Honest riverboat pilots", "Huck's uncles", "Runaway slaves"] },
          purpose: { q: "What is the con men's role in the novel?", choices: ["Their scams put the raft's freedom and Jim's safety in danger", "They rescue Jim", "They teach Huck to read", "They have no role"] },
          significance: { q: "What do the Duke and Dauphin reveal about the shore?", choices: ["How easily 'respectable' towns are fooled — and how greedy people are", "That kings are noble", "That the river is safe", "That crime never pays"] },
          reveals: "Human greed and gullibility on parade, town after town.",
          conceals: "That they will finally sell Jim for a reward, forcing Huck's great choice.",
          ace: "Articulate who the con men are; connect their scams to Twain's satire; extend it to how frauds still exploit trust today."
        },
        {
          id: "feud", name: "The Grangerford–Shepherdson Feud", image: "images/feud.webp",
          clues: ["Ashore, Huck stays with the wealthy, well-mannered Grangerford family.", "They are locked in a deadly feud with the neighboring Shepherdsons.", "Both families go to the same church, then shoot each other over a quarrel no one remembers."],
          identify: { q: "What is the Grangerford–Shepherdson feud?", choices: ["A long, deadly quarrel between two 'respectable' families", "A friendly rivalry", "A card game", "A boat race"] },
          purpose: { q: "What is the feud's role in the novel?", choices: ["It shows genteel society's senseless violence beneath its fine manners", "It brings Huck home", "It frees Jim", "It has no role"] },
          significance: { q: "What does the feud reveal about 'civilized' honor?", choices: ["That polished manners can mask pointless, murderous cruelty", "That feuds are noble", "That the river is dangerous", "That the families are poor"] },
          reveals: "The hollow 'honor' of the respectable shore, ending in blood.",
          conceals: "How eager Huck is to get back to the peace of the raft.",
          ace: "Articulate what the feud is; connect the families' manners to their violence; extend it to how 'honor' or pride can drive senseless conflict."
        },
        {
          id: "letter", name: "The Torn-Up Letter", image: "images/letter.webp",
          clues: ["The con men sell Jim, and Huck writes a letter to turn Jim in — as his society says is 'right.'", "He remembers Jim's kindness and their friendship on the river.", "He tears the letter up, choosing to help free Jim even if he believes it will damn him."],
          identify: { q: "What does Huck do at his great moral crossroads?", choices: ["He tears up the letter and decides to help free Jim", "He turns Jim in for a reward", "He runs away alone", "He does nothing"] },
          purpose: { q: "What is this moment's role in the novel?", choices: ["It is the climax of Huck's conscience versus his society", "It is a minor detail", "It ends the river journey", "It has no role"] },
          significance: { q: "Why is Huck's choice so powerful?", choices: ["He does right by defying everything he was taught was right", "He proves the con men were honest", "He shows the river is safe", "He obeys the rules"] },
          reveals: "The heart of the novel: a good heart overruling a corrupted 'conscience.'",
          conceals: "How rare and hard such a choice is in his world.",
          ace: "Articulate Huck's decision; connect his heart to his 'sinful' choice; extend it to a time doing right meant breaking a rule."
        },
        {
          id: "territory", name: "Lighting Out for the Territory", image: "images/territory.webp",
          clues: ["By the end, Jim is finally free.", "Aunt Sally wants to adopt and 'sivilize' Huck.", "Huck decides instead to head west, to 'light out for the Territory' ahead of the rest."],
          identify: { q: "How does Huck end his story?", choices: ["He decides to head west to escape being 'sivilized'", "He settles down in town", "He becomes a preacher", "He returns to Pap"] },
          purpose: { q: "What is this ending's role in the novel?", choices: ["It leaves Huck still choosing freedom over society's rules", "It rejoins him to respectable life", "It punishes Huck", "It has no role"] },
          significance: { q: "What does 'lighting out for the Territory' suggest?", choices: ["Huck would rather stay free than be remade by a society he distrusts", "Huck has learned to love town life", "The river was a mistake", "Huck wants Pap back"] },
          reveals: "Huck's last, stubborn choice of freedom over 'civilization.'",
          conceals: "Whether any place is truly free of the shore's rules.",
          ace: "Articulate Huck's final choice; connect it to his distrust of 'sivilizing'; extend it to why some characters choose the open road over settling down."
        }
      ]
    },

    ctob: {
      name: "Free on the River",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Twain's main weapon against the cruelty and hypocrisy of 'civilized' society is ______ — humor and irony used to criticize. (one word)",
          evidence: ["He mocks feuds, con men, and 'respectable' slaveholders.", "It uses wit to expose society's faults.", "The word begins with 'sat…'."],
          hints: ["Humor used to criticize society.", "Sat…", "The word is satire."],
          answer: "satire"
        },
        {
          type: "mc",
          prompt: "Who is Jim?",
          options: [
            "An enslaved man seeking freedom, who becomes Huck's true friend.",
            "A wealthy plantation owner.",
            "One of the con men.",
            "Huck's schoolteacher."
          ],
          hints: ["He runs away to find freedom for himself and his family.", "Which option describes Huck's companion on the raft?"]
        },
        {
          type: "word",
          prompt: "Huck and Jim journey south on a raft down the ______ River. (one word — the river's name)",
          evidence: ["It is the great river of the American South.", "Its wide waters carry the raft past town after town.", "The name begins with 'Miss…'."],
          hints: ["The longest river system in the United States.", "Miss…", "The name is Mississippi."],
          answer: "Mississippi"
        },
        {
          type: "mc",
          prompt: "In the novel, how do the river and the shore differ in meaning?",
          options: [
            "The river brings freedom and peace; the shore brings greed, violence, and hypocrisy.",
            "The river is dangerous; the shore is always safe.",
            "Both are equally cheerful places.",
            "Neither has any meaning."
          ],
          hints: ["Think about how Huck and Jim feel on the raft versus in the towns.", "Which option matches the river-and-shore pattern?"]
        },
        {
          type: "sequence",
          prompt: "Put the novel's events in order, earliest first.",
          items: [
            "Huck fakes his own death to escape his abusive father.",
            "He meets the runaway Jim, and they raft down the Mississippi.",
            "The con men take over the raft and finally sell Jim.",
            "Huck tears up the letter and decides to help free Jim."
          ],
          hints: ["Huck must escape Pap before the river journey begins.", "The con men appear well into the trip.", "Tearing up the letter is Huck's climactic choice."]
        },
        {
          type: "word",
          prompt: "Huck's inner sense of right and wrong — twisted by his society, yet finally overruled by his heart — is his ______. (one word)",
          evidence: ["It tells him, wrongly, that helping Jim is a 'sin.'", "His good heart wins out against it in the end.", "The word begins with 'con…'."],
          hints: ["Your inner sense of right and wrong.", "Con…", "The word is conscience."],
          answer: "conscience"
        }
      ]
    },

    arcade: {
      name: "The River or the Shore?",
      instruction: "The novel is built on a contrast: the free river versus the cruel shore. Sort each detail: does it belong to THE RIVER (freedom, peace, friendship) or THE SHORE (society's greed, violence, and hypocrisy)? Reasoning earns the points.",
      buckets: [
        { id: "river", label: "The river = freedom", short: "River" },
        { id: "shore", label: "The shore = society's cruelty", short: "Shore" }
      ],
      cards: [
        { text: "Huck and Jim drift on the raft, talking and watching the stars.", bucket: "river", why: "The river gives them peace and easy companionship." },
        { text: "Out on the water, Huck feels 'free and easy' and himself.", bucket: "river", why: "Away from towns, no one tries to remake him." },
        { text: "Huck and Jim look out for each other as equals.", bucket: "river", why: "On the raft their friendship can be honest." },
        { text: "No one is trying to 'sivilize' Huck in the middle of the river.", bucket: "river", why: "The river is free of society's rules." },
        { text: "Pap locks Huck in a cabin and beats him for his money.", bucket: "shore", why: "The shore holds cruelty even at 'home.'" },
        { text: "The Grangerfords and Shepherdsons murder each other in a feud.", bucket: "shore", why: "Genteel society's violence dressed up as honor." },
        { text: "The Duke and Dauphin swindle grieving families out of their money.", bucket: "shore", why: "The shore is full of greed and fraud." },
        { text: "A town cheers to watch con men tarred and feathered.", bucket: "shore", why: "Respectable crowds enjoy their own cruelty." }
      ],
      followup: "Almost everything good happens on the river and almost everything cruel happens ashore. What is Twain suggesting about 'civilized' society?"
    },

    analysis: {
      mcq: [
        {
          q: "The novel is narrated by —",
          options: [
            "Huck himself, in his own rough regional dialect (vernacular).",
            "an all-knowing outside voice.",
            "Jim, years later.",
            "Tom Sawyer."
          ],
          why: "Huck tells his own story in vernacular, which shapes the novel's humor and honesty."
        },
        {
          q: "Jim is best understood as —",
          options: [
            "an enslaved man seeking freedom whom Huck comes to see as a friend and equal.",
            "a minor comic character with no importance.",
            "the story's villain.",
            "a wealthy landowner."
          ],
          why: "Jim's dignity and humanity are the moral center that reshapes Huck's conscience."
        },
        {
          q: "The contrast between the river and the shore mainly shows that —",
          options: [
            "freedom and friendship live on the raft, while cruelty and hypocrisy rule the shore.",
            "the river is always more dangerous than the land.",
            "both places are equally kind.",
            "neither setting matters."
          ],
          why: "Twain repeatedly sets the peace of the river against the greed and violence ashore."
        },
        {
          q: "Huck's central moral crisis is resolved when he —",
          options: [
            "decides to help Jim to freedom even though he believes society will damn him for it.",
            "turns Jim in for a reward.",
            "gives up and returns to Pap.",
            "forgets about Jim entirely."
          ],
          why: "Tearing up the letter, Huck follows his heart against everything he was taught was 'right.'"
        },
        {
          q: "Through his satire, Twain mainly criticizes —",
          options: [
            "the hypocrisy and cruelty of a 'civilized' society that accepts slavery.",
            "the dangers of river travel.",
            "the laziness of young people.",
            "the weather in the South."
          ],
          why: "The novel exposes how 'respectable' society can be crueler than the outsiders it scorns."
        }
      ],
      short: [
        "Choose one artifact from Down the Mississippi. Explain what it is and what it reveals about the novel's meaning.",
        "Explain the river-and-shore contrast with two examples. What does each setting come to represent?",
        "Huck follows his heart even though he thinks it is a 'sin.' What does the novel suggest about conscience, society, and doing right?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Twain use the contrast between the free river and the cruel shore to satirize 'civilized' society and to develop Huck's moral growth? Make a claim and support it with specific details.",
      aceReflection: "Articulate what the novel suggests about conscience and society in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Conscience vs. the Crowd",
      prompt: "Huck does what he believes is right for Jim even though his whole society tells him it is wrong. Choose another story, film, or real situation in which someone followed their conscience against the crowd or the law. Explain the connection with evidence: what the person was taught, what they chose, and what it cost.",
      format: "A short evidence-based comparison connecting Huck's choice to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the river means freedom and the shore means danger in Adventures of Huckleberry Finn. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Adventures of Huckleberry Finn. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in Adventures of Huckleberry Finn because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Adventures of Huckleberry Finn: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Huck's choice to follow his conscience to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Adventures of Huckleberry Finn for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Mark Twain's Adventures of Huckleberry Finn as a study of satire, symbolism (the river and the shore), narrative voice (vernacular), and the theme of conscience versus society. The novel is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no passages, invents no quotations, reproduces none of the novel's offensive language, and keeps every response on the student's device.",
      reviewNotes: [
        "IMPORTANT — sensitive content. This is a mature, frequently challenged American classic set in the pre–Civil War South. The original text repeatedly uses a racial slur and depicts racist attitudes as the target of its anti-racist satire. This room reproduces none of that language and no passages. Preview thoroughly, prepare students for honest, respectful discussion, and follow your district's policy; some districts restrict, contextualize, provide an alternative, or teach a specific edition. Confirm your campus's stance before assigning.",
        "The novel (1884–85) is public domain. The linked Project Gutenberg edition and the linked LibriVox recording are the full novel — confirm the specific edition/recording before assigning.",
        "Details here were checked against the novel (Huck's first-person vernacular narration; his abusive father Pap and his faked death; Jim, an enslaved man seeking freedom, and the raft journey down the Mississippi; the free river versus the cruel shore; the Grangerford–Shepherdson feud; the con men, the 'duke' and the 'dauphin,' and their swindles; Huck's climactic choice to tear up the letter and help free Jim; and his decision at the end to 'light out for the Territory'). The famous 'sivilize' spelling is Huck's. Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III / grade 11 ELAR TEKS (19 TAC §110.38) strands on theme, author's purpose and satire, point of view and narrative voice, symbolism, and the analysis of American literature in historical context. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.3", "RL.11-12.4", "RL.11-12.6", "W.11-12.1", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
