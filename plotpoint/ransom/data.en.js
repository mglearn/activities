/* PlotPoint — The Ransom of Red Chief (O. Henry, 1907).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. Standards are
   good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "ransom",
  storageKey: "plotpoint.ransom.v1",

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
    "vocab.title": "Words for The Ransom of Red Chief",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Kidnappers' Hideout",
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
    "ctob.title": "The Counter-Offer",
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
    "arcade.title": "Plan vs. Reality",
    "arcade.default": "Sort each thing by whether it was the plan or what really happened.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
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
    "extend.title": "Situational Irony",
    "extend.format": "Format",
    "extend.evidence": "The reversal from the story I am building on",
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
    "print.item.relic": "Hideout evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Situational-irony organizer",
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
      title: "The Ransom of Red Chief",
      author: "O. Henry",
      grades: "Grades 7–10",
      genre: "Short story · Comedy · Classic",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1907)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1907, The Ransom of Red Chief is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A comic story about a bungled kidnapping. The 'kidnapped' boy treats it as a game and cheerfully torments his captors (rocks, roughhousing, pretend 'scalping'). Slapstick, not real menace. Suitable for middle and early high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1595",
      audio: "https://librivox.org/whirligigs-by-o-henry/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Ransom of Red Chief — a rope, a crumpled ransom note, and a toy tomahawk outside a hillside cave at dusk."
    },
    hook: "Two small-time crooks kidnap a rich man's ten-year-old son and demand a ransom. Easy money — except the boy is having the time of his life. He calls himself 'Red Chief,' torments his captors day and night, and refuses to go home. Soon the kidnappers are the ones who are desperate, and the boy's father makes them an offer they never saw coming.",
    goals: [
      "Understand the plot of O. Henry's comic story and its bungled-kidnapping setup.",
      "Analyze how the humor is built almost entirely on situational irony.",
      "Track how the balance of power flips: the kidnappers become the victims.",
      "Explain O. Henry's famous twist ending and transfer the idea of situational irony to other stories."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of situational irony.",
        "Discuss: What makes a story funny? Can a plan going completely wrong be comedy?"
      ],
      during: [
        "Use the Hideout to slow down and read the key turns of the plot closely.",
        "Track each moment when what the kidnappers expected does not happen."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the story's reversals.",
        "Complete the Extend task to connect situational irony to another story."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the kidnapping goes wrong for Sam and Bill. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the boy's behavior to the kidnappers' growing desperation. Explain how one causes the other and builds the comedy." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of situational irony to another story, film, or real event. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "ransom", def: "Money demanded for the release of a captured person.", example: "The note demanding cash to return the boy.", nonexample: "A gift given freely with no demand.", context: "Sam and Bill kidnap the boy to collect a ransom." },
      { term: "kidnap", def: "To seize and hold a person against their will.", example: "Taking the boy and hiding him in a cave.", nonexample: "Inviting a guest who is free to leave.", context: "The whole scheme starts when they kidnap Johnny." },
      { term: "situational irony", def: "When what happens is the opposite of what is expected.", example: "Kidnappers ending up desperate to give the child back.", nonexample: "Everything turning out exactly as planned.", context: "The story runs on situational irony from start to finish." },
      { term: "scheme", def: "A clever or secret plan, often to get money.", example: "Sam and Bill's plan to get rich by kidnapping.", nonexample: "An honest day's work for pay.", context: "Their scheme falls apart almost at once." },
      { term: "desperate", def: "Feeling hopeless and ready to do anything.", example: "The kidnappers begging to be rid of the boy.", nonexample: "Feeling calm and in control.", context: "The captors grow desperate as the boy torments them." },
      { term: "exaggeration", def: "Making something seem larger, worse, or funnier than it really is.", example: "A ten-year-old overpowering two grown men.", nonexample: "A plain, exact description.", context: "O. Henry uses comic exaggeration throughout." },
      { term: "comedy", def: "A story meant to amuse, often ending happily or absurdly.", example: "A kidnapping that turns into a farce.", nonexample: "A grim tragedy with a sorrowful end.", context: "The story is a comedy of a plan gone wrong." },
      { term: "narrator", def: "The voice telling the story.", example: "Sam, one of the kidnappers, tells it himself.", nonexample: "An all-knowing outsider with no stake.", context: "Sam narrates, which adds to the humor." },
      { term: "victim", def: "A person harmed by an action or crime.", example: "By the end, the kidnappers are the real victims.", nonexample: "The person in full control of the situation.", context: "The story flips who the victim really is." }
    ],

    relic: {
      name: "The Kidnappers' Hideout",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "note", name: "The Ransom Note", image: "images/note.webp",
          clues: ["Sam and Bill need money and hatch a plan.", "They write a letter demanding cash for the boy's return.", "Their plan is to grow rich the easy way."],
          identify: { q: "What is the ransom note?", choices: ["The kidnappers' demand for money to return the boy", "A love letter", "A treasure map", "A school report"] },
          purpose: { q: "What is its role in the story?", choices: ["It sets the whole scheme — and its failure — in motion", "It ends the story", "It rescues the boy", "It has no purpose"] },
          significance: { q: "What does the note reveal about the plan?", choices: ["The kidnappers expect easy money and total control — which they never get", "That the plan is careful and safe", "That the father is dangerous", "That the boy is in danger"] },
          reveals: "The confident plan that the rest of the story hilariously undoes.",
          conceals: "How badly the kidnappers have misjudged the boy.",
          ace: "Articulate what the note demands; connect the confident plan to what follows; extend it to how a plan can rest on a wrong assumption."
        },
        {
          id: "warpaint", name: "Red Chief's War Paint", image: "images/warpaint.webp",
          clues: ["The kidnapped boy is not scared at all.", "He treats the whole thing as a thrilling game.", "He names himself 'Red Chief' and plays at being a fierce warrior."],
          identify: { q: "Who is 'Red Chief'?", choices: ["The kidnapped boy, playing at being a fierce chief", "One of the kidnappers", "The boy's father", "A real warrior"] },
          purpose: { q: "What is his role in the story?", choices: ["His wild delight turns the kidnapping into torment for his captors", "He calls the police", "He escapes home", "He is barely present"] },
          significance: { q: "What does the boy's game reveal?", choices: ["The kidnappers have captured something far worse than they bargained for", "That the boy is terrified", "That the boy wants to go home", "That kidnapping is easy"] },
          reveals: "That the 'victim' is delighted — the first great reversal.",
          conceals: "How much punishment the kidnappers are about to take.",
          ace: "Articulate how the boy reacts; connect his delight to the story's irony; extend it to how a situation can flip when someone reacts unexpectedly."
        },
        {
          id: "bruises", name: "Bill's Bruises", image: "images/bruises.webp",
          clues: ["The boy does not just play — he attacks.", "He throws rocks, roughhouses, and even pretends to 'scalp' his captor.", "Bill takes the worst of it and begins to crack."],
          identify: { q: "What do Bill's bruises come from?", choices: ["The boy's rough 'games' and attacks", "A fall from a horse", "A fight with the father", "A car accident"] },
          purpose: { q: "What is their role in the story?", choices: ["They show the kidnappers physically worn down by the boy", "They prove the boy is helpless", "They warn the father", "They end the scheme early"] },
          significance: { q: "What do the bruises reveal about the power balance?", choices: ["A single child is overpowering two grown men — comic exaggeration", "That the kidnappers are winning", "That the boy is weak", "That violence is serious here"] },
          reveals: "The comic reversal of power between captors and captive.",
          conceals: "Just how far the kidnappers will go to escape the boy.",
          ace: "Articulate what happens to Bill; connect the boy's attacks to the flipping power balance; extend it to how comedy uses exaggeration."
        },
        {
          id: "cave", name: "The Cave", image: "images/cave.webp",
          clues: ["The kidnappers hide the boy away from town.", "Their hideout is a cave in the hills near Summit.", "It is meant to keep the boy secret and secure."],
          identify: { q: "What is the cave?", choices: ["The kidnappers' hideout for the boy", "The boy's home", "A bank", "A schoolhouse"] },
          purpose: { q: "What is its role in the story?", choices: ["It is the stage where the plan unravels day and night", "It is where the ransom is paid", "It is where the boy is rescued", "It is unimportant"] },
          significance: { q: "What does the hideout come to reveal?", choices: ["A place meant to trap the boy becomes a trap for the kidnappers", "That the plan is working", "That the boy is scared", "That caves are dangerous"] },
          reveals: "The setting where the kidnappers slowly lose control.",
          conceals: "How eager they will soon be to leave it.",
          ace: "Articulate what the cave is for; connect the hideout to the trapped kidnappers; extend it to how a plan can trap its own makers."
        },
        {
          id: "wont-leave", name: "The Boy Who Won't Leave", image: "images/wont-leave.webp",
          clues: ["Kidnappers expect a child to cry for home.", "Instead, the boy is having too much fun to leave.", "He would rather stay in the 'wild' than be rescued."],
          identify: { q: "What is surprising about the boy?", choices: ["He enjoys the kidnapping and does not want to go home", "He is desperate to escape", "He fears the kidnappers", "He calls for his father"] },
          purpose: { q: "What is this reversal's role?", choices: ["It wrecks the kidnappers' plan to trade the boy for money", "It ends the story happily", "It frees the kidnappers", "It has no effect"] },
          significance: { q: "What does the boy's refusal reveal?", choices: ["The captive now holds the power over his captors", "That the kidnappers are in charge", "That the boy misses home", "That the plan is working"] },
          reveals: "The heart of the joke: the hostage is the happy one.",
          conceals: "How the kidnappers will possibly get rid of him.",
          ace: "Articulate why the boy won't leave; connect his happiness to the kidnappers' problem; extend it to how holding power can become a burden."
        },
        {
          id: "reply", name: "Ebenezer Dorset's Reply", image: "images/reply.webp",
          clues: ["The kidnappers send their ransom demand to the boy's father.", "The father, Ebenezer Dorset, writes back with a counter-offer.", "He does not offer to pay — he asks to be paid."],
          identify: { q: "What is surprising about the father's reply?", choices: ["He demands the kidnappers pay HIM to take the boy back", "He agrees to pay double", "He calls the army", "He ignores the note"] },
          purpose: { q: "What is its role in the story?", choices: ["It is the twist that completes the story's reversal", "It starts the kidnapping", "It rescues the kidnappers", "It is a minor detail"] },
          significance: { q: "What does Dorset's reply reveal?", choices: ["Even the father knows the boy is a handful — the joke is on the kidnappers", "That the father is heartless", "That the boy is precious", "That crime pays"] },
          reveals: "O. Henry's signature twist: the demand for money is reversed.",
          conceals: "How quickly the kidnappers will agree to the strange deal.",
          ace: "Articulate the father's counter-offer; connect it to the story's pattern of reversal; extend it to why a surprise twist can make a story satisfying."
        },
        {
          id: "payment", name: "The Payment to Be Rid of Him", image: "images/payment.webp",
          clues: ["The exhausted kidnappers accept the father's deal.", "They pay him to take his own son back.", "Then they flee as fast as they can."],
          identify: { q: "How does the scheme end?", choices: ["The kidnappers pay the father to take the boy, then run", "The kidnappers collect a huge ransom", "The boy is never returned", "The father is arrested"] },
          purpose: { q: "What is this ending's role?", choices: ["It delivers the final, complete reversal of the plan", "It rewards the kidnappers", "It punishes the boy", "It is unimportant"] },
          significance: { q: "What does paying to return the boy reveal?", choices: ["The plan has backfired totally — the criminals lose money and dignity", "That crime is profitable", "That the boy was in danger", "That the father lost"] },
          reveals: "The complete inversion of a kidnapping — the captors pay up.",
          conceals: "Nothing — the joke is now fully landed.",
          ace: "Articulate how the story ends; connect the payment to the total reversal; extend it to how situational irony can deliver a story's punchline."
        }
      ]
    },

    ctob: {
      name: "The Counter-Offer",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "mc",
          prompt: "What is Sam and Bill's plan to make money?",
          options: [
            "Kidnap a wealthy man's son and demand a ransom.",
            "Rob a bank in the city.",
            "Win a horse race.",
            "Sell a treasure map."
          ],
          hints: ["Think about why they take the boy.", "Which option is about a ransom?"]
        },
        {
          type: "digit",
          prompt: "How many dollars of ransom do the kidnappers demand in their note? Enter the number.",
          evidence: ["They first imagine a bigger sum, then set the demand lower.", "The amount they actually demand in the letter is fifteen hundred dollars.", "Write it as digits."],
          hints: ["Between one thousand and two thousand.", "One thousand five hundred.", "The amount is 1500."],
          answer: "1500"
        },
        {
          type: "mc",
          prompt: "How does the boy react to being kidnapped?",
          options: [
            "He loves the adventure and does not want to go home.",
            "He cries and begs to be freed.",
            "He quietly waits to be rescued.",
            "He is too frightened to speak."
          ],
          hints: ["He gives himself the name 'Red Chief.'", "Which option shows he is enjoying it?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of the story in order, earliest first.",
          items: [
            "Sam and Bill kidnap the boy and demand a ransom.",
            "The boy torments the kidnappers and refuses to leave.",
            "Desperate, the kidnappers lower their ransom demand.",
            "The father counter-offers: pay him to take the boy back."
          ],
          hints: ["It begins with the kidnapping.", "The boy's torment comes before the kidnappers give in.", "The father's counter-offer is the final twist."]
        },
        {
          type: "word",
          prompt: "The comic reversal is complete when the kidnappers, not the boy, become the real ______. (one word)",
          evidence: ["By the end, the child holds all the power.", "The captors are exhausted, beaten, and out of pocket.", "The word means a person harmed by events, and begins with 'vic…'."],
          hints: ["The opposite of the one in control.", "Vic…", "The word is victims."],
          answer: "victims"
        },
        {
          type: "word",
          prompt: "When the opposite of what is expected happens — kidnappers begging to give a child back — the story is using situational ______. (one word)",
          evidence: ["Everyone expects a kidnapping to frighten the child and pay the criminals.", "Here the reverse happens at every turn.", "The word for this kind of reversal begins with 'iro…'."],
          hints: ["The opposite of what you expect.", "Iro…", "The word is irony."],
          answer: "irony"
        }
      ]
    },

    arcade: {
      name: "Plan vs. Reality",
      instruction: "The whole story runs on situational irony — reality flips the kidnappers' plan. Sort each thing: was it part of SAM & BILL'S PLAN (what they expected), or WHAT ACTUALLY HAPPENED? Reasoning earns the points.",
      buckets: [
        { id: "plan", label: "Sam & Bill's plan (expected)", short: "The plan" },
        { id: "reality", label: "What actually happened", short: "Reality" }
      ],
      cards: [
        { text: "The boy would be scared and cry to go home.", bucket: "plan", why: "The kidnappers expected a frightened child." },
        { text: "The rich father would quickly pay to get his son back.", bucket: "plan", why: "Their whole scheme assumed the father would pay up." },
        { text: "The kidnapping would be quick, easy money.", bucket: "plan", why: "They pictured getting rich with little effort." },
        { text: "They would leave richer than before.", bucket: "plan", why: "The plan was to profit from the ransom." },
        { text: "The boy had a blast and refused to leave.", bucket: "reality", why: "The 'victim' enjoyed himself — the first reversal." },
        { text: "The father demanded money to take the boy back.", bucket: "reality", why: "The counter-offer flips the ransom completely." },
        { text: "The boy tormented and injured his captors.", bucket: "reality", why: "The captive overpowered the captors — comic exaggeration." },
        { text: "They paid to be rid of the boy and fled.", bucket: "reality", why: "The plan backfired totally: the criminals lost money." }
      ],
      followup: "This story is built on situational irony — the opposite of what's expected. Which reversal is funniest, and why do you think O. Henry saves the biggest one for the very end?"
    },

    analysis: {
      mcq: [
        {
          q: "Sam and Bill kidnap the boy in order to —",
          options: [
            "collect a ransom from his wealthy father.",
            "teach him a lesson.",
            "adopt him.",
            "win a bet."
          ],
          why: "Their scheme is a straightforward kidnapping for ransom money."
        },
        {
          q: "The boy, 'Red Chief,' reacts to being kidnapped by —",
          options: [
            "treating it as a thrilling adventure and tormenting his captors.",
            "crying and pleading to go home.",
            "escaping the first night.",
            "sitting quietly in fear."
          ],
          why: "He turns the kidnapping into a game and makes his captors miserable."
        },
        {
          q: "The humor of the story comes mainly from —",
          options: [
            "situational irony — the kidnappers become the victims.",
            "clever wordplay and puns.",
            "a frightening villain.",
            "a sad, surprising death."
          ],
          why: "At every turn the opposite of the expected happens, which is situational irony."
        },
        {
          q: "Ebenezer Dorset's reply to the ransom note is surprising because he —",
          options: [
            "demands that the kidnappers pay him to take his son back.",
            "offers to pay far more than they asked.",
            "sends the police at once.",
            "agrees without any conditions."
          ],
          why: "Instead of paying, the father flips the demand — the story's signature twist."
        },
        {
          q: "By the end of the story, the kidnappers —",
          options: [
            "pay the father to return the boy and flee.",
            "escape with a large ransom.",
            "keep the boy for good.",
            "are caught and jailed."
          ],
          why: "The plan backfires completely: the criminals lose money and run."
        }
      ],
      short: [
        "Choose one artifact from the Hideout. Explain what it is and what it reveals about the story's humor.",
        "Explain how the boy's behavior slowly flips the power between captors and captive. Use two examples.",
        "O. Henry is famous for twist endings. Explain the twist here and why it is satisfying."
      ],
      paragraph: "Write an evidence-based paragraph. How does O. Henry use situational irony to make The Ransom of Red Chief funny? Make a claim and support it with at least two specific reversals from the story.",
      aceReflection: "Articulate what situational irony means in your own words. Connect two reversals from the story that create it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Situational Irony",
      prompt: "The Ransom of Red Chief is built on situational irony — the opposite of what everyone expects. Choose another story, film, show, or real event where a plan backfires or the outcome flips expectations. Explain the connection with evidence: what was expected, what actually happened, and why the reversal works.",
      format: "A short evidence-based comparison connecting the story's situational irony to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the kidnapping backfires in The Ransom of Red Chief. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Ransom of Red Chief. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [event one] connects to [event two] in The Ransom of Red Chief because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Ransom of Red Chief: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's situational irony to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Ransom of Red Chief for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of O. Henry's The Ransom of Red Chief as a comedy built on situational irony: the bungled kidnapping, the flipping power balance between captors and captive, and O. Henry's signature twist ending. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1907) is public domain. The linked Project Gutenberg edition is the collection Whirligigs, which opens with this story; the linked LibriVox recording is the same collection — confirm before assigning.",
        "Content: comic, slapstick peril — a boy who cheerfully torments his captors (rocks, roughhousing, pretend 'scalping'). No real menace. Suitable for middle and early high school; preview and follow local policy.",
        "Details here were checked against the story (the narrator Sam and his partner Bill Driscoll; the town of Summit; the boy Johnny, who dubs himself 'Red Chief'; the ransom demand of $1,500; the boy's delight and torment of the captors; the father Ebenezer Dorset's counter-offer that the kidnappers pay $250 to return the boy; the kidnappers paying and fleeing). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 7–10 ELAR TEKS (19 TAC Ch. 110) strands on plot, theme, author's purpose, and figurative/rhetorical devices — especially irony and its effect. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.3", "RL.7.6", "RL.8.1", "W.7.1", "SL.7.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
