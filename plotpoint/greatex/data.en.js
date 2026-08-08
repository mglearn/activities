/* PlotPoint — Great Expectations (Charles Dickens).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts from the 1860–61 novel;
   standards codes are only those given by the build plan (Common Core) — TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "greatex",
  storageKey: "plotpoint.greatex.v1",

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
    "vocab.title": "Words for Great Expectations",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Expectations Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this object, place, or person?",
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
    "ctob.title": "The Case of the Benefactor",
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
    "arcade.title": "True Worth or Mere Gentility?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Evidence to weigh",
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
    "extend.title": "Chasing “Expectations”",
    "extend.format": "Format",
    "extend.evidence": "The idea from the novel I am building on",
    "extend.transfers": "What transfers to my modern story",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My modern “expectations” story",
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
    "print.item.extend": "True-worth comparison organizer",
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
      title: "Great Expectations",
      author: "Charles Dickens",
      grades: "Grades 9–12",
      genre: "Novel · Bildungsroman · Victorian fiction",
      time: "60–90 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1860–61)",
      textAccess: "This is a public-domain novel; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First serialized in 1860–61 and long in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A Victorian coming-of-age novel with some mature content: crime and convicts, a death by fire, and cruelty tied to class. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1400",
      audio: "https://librivox.org/great-expectations-by-charles-dickens/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Great Expectations — a misty marsh with a broken file, a blacksmith's forge, and a decaying mansion beyond."
    },
    hook: "A poor orphan feeds a hunted convict in the marshes, then dreams of becoming a gentleman for a girl who scorns him. When a fortune arrives from a hidden benefactor, Pip climbs — and learns, too late, who truly loved him. Great Expectations asks what actually makes a person worthy.",
    goals: [
      "Analyze how Dickens shapes a bildungsroman, tracing Pip's growth from boyhood through false pride to hard-won maturity.",
      "Interpret the novel's central irony — that money and manners do not make a gentleman, while loyalty and kindness do.",
      "Evaluate how the hidden benefactor, Miss Havisham, and Estella drive Pip's expectations and disappointments.",
      "Connect the novel's warning about chasing status to a new situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: the marshes and forge of Pip's boyhood versus the wealth of London.",
        "Discuss: What do you think makes someone a 'gentleman' or a truly worthy person — money, manners, or something else?"
      ],
      during: [
        "Use the Relic Room to examine one object, place, or person at a time.",
        "Track how Pip's new wealth changes how he treats Joe, and watch for who his real benefactor turns out to be."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh true worth against mere gentility.",
        "Complete the Extend task to write your own modern story of chasing 'expectations.'"
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Pip is disappointed to learn who his benefactor really is. Include one detail from the novel that shows how his values have gone wrong." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the novel's themes (for example, class and worth, or ambition and gratitude). Explain how they reinforce each other in Pip's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the novel's warning about chasing wealth and status to a modern situation. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "expectations", def: "In the novel, the prospect of coming into a fortune and rising in social rank.", example: "A boy told he will one day inherit money and become a gentleman.", nonexample: "A person content to stay exactly where they are.", context: "Pip's great expectations promise him a fortune and a place among gentlemen." },
      { term: "benefactor", def: "A person who gives money or help, often secretly.", example: "An unknown giver who pays for Pip's new life.", nonexample: "Someone who takes money from another for themselves.", context: "Pip is sure his benefactor is Miss Havisham, but he is wrong." },
      { term: "gentility", def: "The manners, dress, and refinement associated with the upper class.", example: "Fine clothes and polished speech meant to signal high status.", nonexample: "Rough, honest work with no concern for appearances.", context: "Pip mistakes gentility — fine clothes and manners — for real worth." },
      { term: "bildungsroman", def: "A novel that traces a young person's growth from childhood toward maturity.", example: "A story following a boy's mistakes and lessons into adulthood.", nonexample: "A tale about a single day that changes nothing.", context: "As a bildungsroman, the novel follows Pip from boyhood to hard-won maturity." },
      { term: "convict", def: "A person found guilty of a crime and sentenced to punishment.", example: "An escaped prisoner hiding in the marshes.", nonexample: "A free citizen who has broken no law.", context: "Pip's whole fate is tied to a convict he helps in the marshes." },
      { term: "forge", def: "A blacksmith's workshop, where iron is heated and hammered into shape.", example: "The fire and anvil where Joe makes and mends tools.", nonexample: "A grand drawing room in a London townhouse.", context: "Joe works honestly at his forge, shaping iron over the fire." },
      { term: "recluse", def: "A person who withdraws from society and lives shut away.", example: "A woman who never leaves her decaying, curtained house.", nonexample: "A cheerful host always surrounded by guests.", context: "Miss Havisham lives as a recluse among her stopped clocks." },
      { term: "snobbery", def: "Looking down on people of lower rank while admiring higher rank.", example: "Being ashamed of an old friend once you have money.", nonexample: "Treating people the same whatever their wealth.", context: "Pip's new wealth breeds a snobbery that makes him ashamed of Joe." },
      { term: "gratitude", def: "A feeling of thankfulness that moves a person to return kindness.", example: "A man repaying, many times over, a child who once fed him.", nonexample: "Taking a kindness for granted and forgetting it.", context: "Magwitch's gratitude to the boy who fed him drives the whole plot." },
      { term: "conscience", def: "The inner sense of right and wrong that judges one's own actions.", example: "The guilt that gnaws at a boy who steals to help a stranger.", nonexample: "Acting with no thought of right or wrong.", context: "Pip's guilty conscience haunts him after he steals for the convict." },
      { term: "irony", def: "A gap between what seems true and what really is.", example: "The 'low' convict proving nobler than the polished gentlemen.", nonexample: "A statement that means exactly what it says.", context: "Dickens uses irony to show that Pip's 'betters' are often his moral inferiors." }
    ],

    relic: {
      name: "The Expectations Archive",
      intro: "Seven instructional reconstructions of the objects, places, and people through which Great Expectations reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "file", name: "The File and the Convict in the Marshes", image: "images/file.webp",
          clues: ["In a lonely churchyard, a frightened boy meets an escaped convict.", "The convict demands food and a file to cut his leg-iron.", "The terrified boy steals both from home and brings them to him."],
          identify: { q: "What does this reconstruct?", choices: ["Pip helping the escaped convict in the marshes", "Pip's first day in London", "Miss Havisham's wedding", "Joe at his forge"] },
          purpose: { q: "What does this scene set up?", choices: ["A secret debt that will shape Pip's whole future", "Pip's career as a lawyer", "Miss Havisham's revenge", "Estella's marriage"] },
          significance: { q: "What is its literary significance?", choices: ["This early act of frightened kindness secretly earns Pip his fortune", "It proves Pip is a criminal", "It ends the novel", "It shows the marshes are safe"] },
          reveals: "That Pip's fortune grows from one small, frightened act of kindness — not from the source he imagines.",
          conceals: "It hides the convict's future role; neither Pip nor the reader yet knows he will become the hidden benefactor.",
          ace: "Articulate what Pip does for the convict; connect it to the theme of gratitude; extend it to how a small kindness can return in unexpected ways."
        },
        {
          id: "satishouse", name: "Satis House and the Stopped Clocks", image: "images/satishouse.webp",
          clues: ["A wealthy woman lives in a dim, decaying mansion.", "She still wears her yellowed wedding dress, and every clock is stopped.", "A rotting wedding feast sits untouched on the table."],
          identify: { q: "What is this place?", choices: ["Satis House, Miss Havisham's decaying mansion", "Joe's forge", "Jaggers's law office", "Pip's London lodgings"] },
          purpose: { q: "What does it reveal about Miss Havisham?", choices: ["That she froze her life at the moment she was jilted", "That she is a cheerful hostess", "That she is poor", "That she loves Pip as a son"] },
          significance: { q: "What is its literary significance?", choices: ["The frozen house symbolizes a life ruined by clinging to past pain", "It proves wealth brings happiness", "It has no meaning", "It ends Pip's expectations"] },
          reveals: "How a single betrayal has trapped Miss Havisham in a rotting, motionless past.",
          conceals: "It hides her plan for Estella — that she is raising the girl to wound men as she was wounded.",
          ace: "Articulate what the stopped clocks show; connect the house to the theme of the past's grip; extend it to how holding onto a wound can freeze a life."
        },
        {
          id: "estella", name: "Estella, Raised to Break Hearts", image: "images/estella.webp",
          clues: ["A beautiful girl is cold and scornful toward Pip.", "Miss Havisham has raised her with a hard, unfeeling heart.", "Pip loves her even as she warns him she cannot love back."],
          identify: { q: "Who is this?", choices: ["Estella, Miss Havisham's adopted daughter", "Biddy, Pip's childhood friend", "Mrs. Joe, Pip's sister", "Molly, the housekeeper"] },
          purpose: { q: "What is her role in the story?", choices: ["To be Miss Havisham's instrument of revenge on men", "To marry Joe", "To rescue Magwitch", "To tutor Pip in Latin"] },
          significance: { q: "What is her literary significance?", choices: ["Estella shows how a person can be shaped — even deformed — by how they are raised", "She proves love is always returned", "She has no effect on Pip", "She ends the novel in the marshes"] },
          reveals: "That Estella's coldness is trained into her, not born — she is a victim of Miss Havisham's design.",
          conceals: "It hides her true parentage; only later is it revealed whose daughter she really is.",
          ace: "Articulate how Estella treats Pip; connect her coldness to how she was raised; extend it to how upbringing can shape a person's heart."
        },
        {
          id: "fortune", name: "The Anonymous Fortune", image: "images/fortune.webp",
          clues: ["A lawyer tells Pip he has 'great expectations' from a secret giver.", "Pip is to become a gentleman in London.", "He is warned never to ask who the benefactor is."],
          identify: { q: "What does this reconstruct?", choices: ["The news that Pip will inherit a fortune from an unknown benefactor", "Pip's apprenticeship to Joe", "Miss Havisham's death", "Magwitch's trial"] },
          purpose: { q: "What does the fortune do to Pip?", choices: ["It lifts him into wealth — and into snobbery toward his old life", "It makes him a blacksmith", "It sends him to prison", "It cures Miss Havisham"] },
          significance: { q: "What is its literary significance?", choices: ["The gift tests Pip's character, and at first he fails, growing ashamed of Joe", "It proves money makes people kind", "It has no effect on Pip", "It ends the novel happily"] },
          reveals: "How sudden wealth can distort a person's values before it teaches them anything.",
          conceals: "It hides the source of the money, letting Pip wrongly assume it comes from Miss Havisham.",
          ace: "Articulate what the fortune promises Pip; connect it to the theme of ambition; extend it to how sudden gain can change how we treat the people who love us."
        },
        {
          id: "forge", name: "Joe's Forge", image: "images/forge.webp",
          clues: ["A gentle blacksmith raises Pip with patience and love.", "He is looked down on once Pip becomes a 'gentleman.'", "He stays loyal and kind no matter how Pip treats him."],
          identify: { q: "Whose workshop is this?", choices: ["Joe Gargery's forge, the home of Pip's childhood", "Jaggers's law office", "Miss Havisham's brewery", "Magwitch's hideout"] },
          purpose: { q: "What does Joe represent?", choices: ["Honest work and steady love that owe nothing to rank", "The emptiness of wealth", "Cruelty and revenge", "Cold ambition"] },
          significance: { q: "What is its literary significance?", choices: ["Joe is the novel's true gentleman, measured by kindness, not class", "Joe proves the poor are worthless", "The forge has no meaning", "It ends Pip's story in London"] },
          reveals: "That real worth — Joe's — is found in loyalty and love, not in money or manners.",
          conceals: "It hides, from the snobbish Pip, that he already had the best of company before he ever left the forge.",
          ace: "Articulate what Joe is like; connect his loyalty to the theme of true worth; extend it to how we sometimes overlook the people who matter most."
        },
        {
          id: "benefactor", name: "The Benefactor Revealed", image: "images/benefactor.webp",
          clues: ["A rough, weathered man returns from years abroad.", "He reveals that HE, the old convict, is Pip's secret benefactor.", "He made a fortune and spent it to turn Pip into a gentleman."],
          identify: { q: "Who is Pip's true benefactor?", choices: ["Magwitch, the convict Pip helped as a boy", "Miss Havisham", "Joe Gargery", "Mr. Jaggers"] },
          purpose: { q: "What does this revelation do?", choices: ["It shatters Pip's assumptions about class and where his fortune came from", "It makes Pip a blacksmith again", "It frees Miss Havisham", "It ends Estella's coldness"] },
          significance: { q: "What is its literary significance?", choices: ["That a hunted convict, not a lady, funded Pip overturns the novel's ideas of rank and worth", "It proves gentlemen are always born rich", "It has no effect on Pip", "It shows crime pays"] },
          reveals: "That gratitude, not gentility, is the real engine of Pip's fortune — the 'low' convict is his generous father-figure.",
          conceals: "It hides how Pip will respond — whether he can overcome his disgust and repay Magwitch's love.",
          ace: "Articulate who the benefactor really is; connect the twist to the theme of class and worth; extend it to how our assumptions about people can be badly wrong."
        },
        {
          id: "return", name: "Pip's Illness and Return to Joe", image: "images/return.webp",
          clues: ["Pip loses his fortune and falls dangerously ill.", "Joe quietly comes to London and nurses him back to health.", "Humbled, Pip finally sees the worth of the man he once scorned."],
          identify: { q: "What does this reconstruct?", choices: ["Pip's illness and Joe's faithful care, and Pip's change of heart", "Pip's first arrival in London", "Miss Havisham's wedding", "Magwitch's escape"] },
          purpose: { q: "What does this show about Pip?", choices: ["That suffering and loss finally mature him", "That he becomes even prouder", "That he never changes", "That he blames Joe"] },
          significance: { q: "What is its literary significance?", choices: ["Pip's humbling completes the bildungsroman — he learns what truly matters", "It proves wealth is all that matters", "It has no meaning", "It ends with Pip still a snob"] },
          reveals: "That Pip's real growth comes only after he loses his fortune and rediscovers loyalty and love.",
          conceals: "It leaves his future with Estella uncertain — Dickens wrote more than one ending, and the novel keeps it open.",
          ace: "Articulate how Pip changes by the end; connect his growth to the loss of his fortune; extend it to how failure can teach what success cannot."
        }
      ]
    },

    ctob: {
      name: "The Case of the Benefactor",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "Dickens divides the novel into stages of Pip's expectations — his boyhood, his life as a London gentleman, and his disillusionment. How many stages are there? Enter the number.",
          evidence: ["The novel is built in clearly marked stages of Pip's 'expectations.'", "The first stage is his boyhood at the forge; the second, his rise in London.", "The third stage is his fall and his hard-won growth."],
          hints: ["Count boyhood, London, and disillusionment.", "It is a small odd number.", "The number is 3."],
          answer: "3"
        },
        {
          type: "word",
          prompt: "Who is the wealthy recluse who wears her old wedding dress and raises Estella? (one word — her surname)",
          evidence: ["She was jilted on her wedding day long ago.", "She stopped every clock and left the wedding feast to rot.", "Her surname begins with 'Hav-.'"],
          hints: ["She lives at Satis House.", "It begins with 'Havi…'.", "Her name is Havisham."],
          answer: "Havisham"
        },
        {
          type: "word",
          prompt: "Who turns out to be Pip's secret benefactor — the convict Pip helped in the marshes? (one word)",
          evidence: ["Pip fed him and brought him a file when he was on the run.", "He later made a fortune abroad, in Australia.", "His name begins with 'Mag-.'"],
          hints: ["He is the returning convict.", "It begins with 'Magw…'.", "He is Magwitch."],
          answer: "Magwitch"
        },
        {
          type: "mc",
          prompt: "Pip is shocked to learn that his fortune actually came from —",
          options: [
            "Magwitch, the convict he once helped, not from Miss Havisham.",
            "Joe, who had been saving money in secret.",
            "Estella, who loved him all along.",
            "Mr. Jaggers's own private fortune."
          ],
          hints: ["Think about who Pip helped as a boy in the marshes.", "Which option overturns Pip's snobbish assumption?"]
        },
        {
          type: "sequence",
          prompt: "Put these events in order, earliest first.",
          items: [
            "Young Pip helps an escaped convict in the marshes.",
            "Pip receives a fortune from an unknown benefactor and moves to London.",
            "Pip learns that the convict Magwitch is his secret benefactor.",
            "Magwitch is caught, Pip loses his fortune, and he returns to value Joe."
          ],
          hints: ["The churchyard meeting comes first.", "The move to London comes before the benefactor is revealed.", "Pip's humbling comes last."]
        },
        {
          type: "mc",
          prompt: "Through Joe and Magwitch, the novel argues that a true 'gentleman' is defined by —",
          options: [
            "loyalty, kindness, and honesty rather than money or fine manners.",
            "wealth alone.",
            "being born into a noble family.",
            "wearing elegant clothes."
          ],
          hints: ["Compare Joe and Magwitch with the polished snobs.", "Which option is about character, not class?"]
        }
      ]
    },

    arcade: {
      name: "True Worth or Mere Gentility?",
      instruction: "The novel keeps asking what really makes a 'gentleman.' Sort each piece of evidence by which it shows: true worth (real character — loyalty, kindness, honesty) or mere gentility (surface — money, manners, rank). There is room to argue, but sort by what the evidence most directly shows. Reasoning earns the points.",
      buckets: [
        { id: "worth", label: "True worth (real character)", short: "True worth" },
        { id: "gentility", label: "Mere gentility (surface only)", short: "Gentility" }
      ],
      cards: [
        { text: "Joe the blacksmith stays kind, loyal, and honest despite Pip's snobbery.", bucket: "worth", why: "His steady goodness owes nothing to rank or wealth." },
        { text: "Magwitch, a convict, secretly gives everything he has out of gratitude.", bucket: "worth", why: "His generosity shows a nobility his low status hides." },
        { text: "Herbert Pocket is warm, generous, and encouraging, though he is not rich.", bucket: "worth", why: "His kindness, not his purse, makes him a real friend." },
        { text: "Pip finally learns to value loyalty and love over status.", bucket: "worth", why: "His growth is measured in character, not in money." },
        { text: "Newly rich, Pip grows ashamed of Joe and puts on gentlemanly airs.", bucket: "gentility", why: "He mistakes manners and money for worth, and looks down on true friends." },
        { text: "Estella has elegant manners but has been trained to be cold and cruel.", bucket: "gentility", why: "Polish without kindness is only surface gentility." },
        { text: "Bentley Drummle is wealthy and well-born but coarse and brutal.", bucket: "gentility", why: "Birth and money cannot make him a real gentleman." },
        { text: "Pip assumes fine clothes and money will make him worthy of Estella.", bucket: "gentility", why: "He confuses appearances with genuine worth." }
      ],
      followup: "Dickens sets Joe and Magwitch against the polished snobs. Using specific moments, argue what the novel finally says makes a 'gentleman' — and whether Pip ever truly becomes one."
    },

    analysis: {
      mcq: [
        {
          q: "Great Expectations is a bildungsroman, which means it —",
          options: [
            "follows a young person's growth from childhood toward maturity.",
            "is told entirely in letters.",
            "takes place in a single day.",
            "is a comic play."
          ],
          why: "The novel traces Pip's mistakes and lessons as he grows from a boy at the forge into a wiser adult."
        },
        {
          q: "Pip's 'great expectations' mainly refer to —",
          options: [
            "his hope of inheriting a fortune and rising to become a gentleman.",
            "his plan to become a blacksmith like Joe.",
            "his wish to leave England forever.",
            "his ambition to become a lawyer."
          ],
          why: "The 'expectations' are the promised inheritance that lifts Pip toward gentility."
        },
        {
          q: "Miss Havisham raises Estella mainly to —",
          options: [
            "take revenge on men by teaching Estella to break their hearts.",
            "make Estella a loving wife for Pip.",
            "send Estella to work at the forge.",
            "keep Estella hidden from the world."
          ],
          why: "Jilted long ago, Miss Havisham shapes Estella into an instrument of revenge on men."
        },
        {
          q: "The revelation that Magwitch is Pip's benefactor mainly overturns —",
          options: [
            "Pip's snobbish assumptions about class, gratitude, and worth.",
            "the fact that the novel is set in England.",
            "Joe's love for Pip.",
            "Estella's coldness."
          ],
          why: "A hunted convict, not a fine lady, funded Pip — exploding his ideas about who is 'above' whom."
        },
        {
          q: "Through Joe and Magwitch, the novel argues that true worth comes from —",
          options: [
            "character and loyalty, not wealth or social rank.",
            "being born into money.",
            "having elegant manners.",
            "owning fine property."
          ],
          why: "The 'low' characters prove nobler than the polished ones, redefining what a gentleman is."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops a theme (class and worth, ambition, gratitude, or the grip of the past).",
        "Trace Pip's growth. Using specific evidence, explain how he changes from a snobbish young gentleman into a humbler, wiser adult.",
        "Explain how Joe or Magwitch challenges the novel's idea of a 'gentleman.' What does the contrast reveal?"
      ],
      paragraph: "Write an evidence-based paragraph. Does Pip become a better person by the end of the novel? Make a claim and support it with specific moments.",
      aceReflection: "Articulate what the novel says makes a person worthy. Connect two themes (such as class and worth, or ambition and gratitude). Extend the warning about chasing status to a modern situation, and name where the comparison breaks down."
    },

    extend: {
      name: "Chasing “Expectations”",
      prompt: "Dickens gives Pip a fortune and lets it warp his values before loss and love teach him what truly matters. Choose a modern character who chases status, wealth, or image — and either learns, or fails to learn, that real worth lies elsewhere. Write a short before-and-after sketch of that character, showing the chase and the lesson (or the missed lesson), the way Pip's story does.",
      format: "A short before-and-after character sketch about chasing status, plus a note on what the character learns and where the comparison to Pip breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Pip is disappointed to learn who his real benefactor is in Great Expectations. Do not answer for me. Ask me one question at a time that helps me explain his reaction in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Great Expectations. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in Great Expectations because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Great Expectations: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to compare Pip's chase after status to a modern situation, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether Pip becomes a better person for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Great Expectations — its bildungsroman structure, its central irony about class and worth, and the roles of Miss Havisham, Estella, and the hidden benefactor. It never reproduces Dickens's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#1400) and LibriVox recording (version 1) are the standard novel; verify the link and edition before assigning.",
        "Great Expectations is in the public domain. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "Dickens wrote more than one ending; the revised (published) ending leaves Pip and Estella's future hopeful but ambiguous. Note which ending your edition prints.",
        "Details here come from the novel (the marsh convict; Satis House; Estella; the anonymous fortune; Joe's forge; Magwitch as benefactor; Pip's humbling). Confirm against your edition.",
        "Mature content: crime and imprisonment, cruelty tied to class, and a character's death by fire. Preview for maturity and align with local policy.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (characterization, theme), and multiple-genre strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.2", "RL.9-10.3", "RL.11-12.3", "RL.9-10.5", "RL.9-10.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
