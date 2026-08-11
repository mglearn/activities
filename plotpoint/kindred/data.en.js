/* PlotPoint — Kindred (Octavia E. Butler).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; details were verified against the novel and are
   used only to build original, transformative analysis. Standards are those given
   by the build plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "kindred",
  storageKey: "plotpoint.kindred.v1",

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
    "enter.readListen": "Read & Listen",
    "enter.readListenTitle": "Get the text",
    "enter.readListenNote": "This is a copyrighted novel; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Kindred",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Family Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the novel",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Broken Ledger",
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
    "arcade.title": "History or Invention?",
    "arcade.default": "Sort each statement by whether it is real history or Butler's invention.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
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
    "extend.title": "Past into Present",
    "extend.format": "Format",
    "extend.evidence": "The connection from the novel I am building on",
    "extend.transfers": "What transfers to the present",
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
    "print.item.relic": "Family Archive evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Past-into-present organizer",
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
      title: "Kindred",
      author: "Octavia E. Butler",
      grades: "Grades 10–12",
      genre: "Historical fiction · Science fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "Kindred is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "Kindred confronts the brutality of American slavery, including violence and whippings, sexual coercion, and a character's suicide. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Kindred by Octavia E. Butler. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author's estate or publisher. Original activity content is licensed under CC BY-NC 4.0. Kindred, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Kindred — a modern doorway opening onto an antebellum plantation landscape."
    },
    hook: "On her twenty-sixth birthday in 1976, Dana is violently pulled out of her California home and into a Maryland plantation before the Civil War — again and again — to save a white boy who turns out to be her own ancestor. To exist, she must keep him alive.",
    goals: [
      "Track how Butler uses time travel to connect a modern woman with the lived reality of slavery.",
      "Analyze the causal loop that ties Dana's survival to keeping her ancestor Rufus alive.",
      "Examine how the plantation shapes characters — including Rufus — into agents or victims of a brutal system.",
      "Distinguish real antebellum history from Butler's fictional invention, and transfer the novel's questions to the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of historical fiction.",
        "Discuss: How is the past connected to the present? Can we ever fully leave history behind?"
      ],
      during: [
        "Use the Family Archive to slow down and read key objects and moments closely.",
        "Track how each trip to the past changes Dana, Kevin, Rufus, and Alice."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the novel's history to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Dana must keep Rufus alive. Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments from the novel (for example, one in 1976 and one in the past). Explain how comparing them changes your understanding of a character or a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply a question the novel raises to the present. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "antebellum", def: "Belonging to the period in the American South before the Civil War.", example: "A plantation in the 1810s.", nonexample: "A modern city in 1976.", context: "Dana is pulled from 1976 into the antebellum South." },
      { term: "plantation", def: "A large estate where enslaved people were forced to labor, usually growing crops.", example: "The Weylin plantation in Maryland.", nonexample: "A small city apartment.", context: "Most of the past sections take place on a Maryland plantation." },
      { term: "patroller", def: "An armed white man who policed roads to catch enslaved people traveling without permission.", example: "Riders who stop and question a Black traveler at night.", nonexample: "A modern crossing guard.", context: "Patrollers make every journey in the past dangerous for Dana." },
      { term: "kindred", def: "One's family and relatives; kin.", example: "An ancestor you are related to by blood.", nonexample: "A stranger with no connection to you.", context: "The title points to Dana's blood ties across time." },
      { term: "ancestor", def: "A person from whom one is descended, such as a great-great-grandparent.", example: "A relative who lived long before you were born.", nonexample: "A friend your own age.", context: "Rufus turns out to be Dana's distant ancestor." },
      { term: "complicity", def: "Being involved in or helping with a wrongdoing, even indirectly.", example: "Going along with a cruel system to survive.", nonexample: "Openly refusing to take part in harm.", context: "The novel explores the hard choices and complicity survival can demand." },
      { term: "dehumanize", def: "To treat people as less than human.", example: "Buying and selling people as property.", nonexample: "Treating everyone with dignity.", context: "Slavery dehumanizes people, and the novel refuses to look away from it." },
      { term: "legacy", def: "Something handed down from the past that still affects the present.", example: "The ongoing effects of slavery.", nonexample: "A brand-new invention with no history.", context: "By linking 1976 to the past, Butler shows slavery's living legacy." },
      { term: "historical fiction", def: "An invented story set in a real time and place from the past, mixing fact and imagination.", example: "A made-up character living through real historical events.", nonexample: "A textbook of only verified facts.", context: "Kindred blends real antebellum history with an invented plot." },
      { term: "coercion", def: "Forcing someone to act through threats, violence, or power over them.", example: "Using power to force someone's choices.", nonexample: "A free choice made without pressure.", context: "The power of enslavers over the enslaved is built on coercion." }
    ],

    relic: {
      name: "The Family Archive",
      intro: "Seven instructional reconstructions of objects and moments from Kindred — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "boxes", name: "The Moving Boxes (1976)", image: "images/boxes.webp",
          clues: ["Dana and Kevin have just moved into a new house in the Los Angeles area.", "Dana is still unpacking books on her twenty-sixth birthday.", "In the middle of this ordinary day, she is suddenly pulled away."],
          identify: { q: "What do these boxes represent?", choices: ["Dana's ordinary present-day life in 1976, into which the past erupts", "Cargo on a slave ship", "Supplies for the plantation", "A time machine"] },
          purpose: { q: "What is their role in the novel?", choices: ["To ground the story in a normal modern life before the first violent pull to the past", "To carry Dana back in time", "To hide weapons", "To store historical records"] },
          significance: { q: "What does this opening reveal?", choices: ["That the past can reach into an ordinary present without warning", "That moving houses is dangerous", "That Dana dislikes her home", "That 1976 is imaginary"] },
          reveals: "How suddenly and completely the past intrudes on Dana's modern life.",
          conceals: "Why Dana, of all people, is the one pulled back — a mystery the novel unfolds.",
          ace: "Articulate what the ordinary opening sets up; connect the present to the past; extend it to how history can suddenly feel close in your own life."
        },
        {
          id: "river", name: "The River", image: "images/river.webp",
          clues: ["On her first trip to the past, Dana finds herself at a riverbank.", "A small red-haired boy is drowning.", "She saves him — and learns his name is Rufus."],
          identify: { q: "What happens at the river?", choices: ["Dana saves a drowning child, Rufus, on her first trip to the past", "Dana escapes to freedom", "Dana meets Kevin for the first time", "Dana is captured by patrollers"] },
          purpose: { q: "What is its role in the novel?", choices: ["It begins the pattern: Dana is pulled back whenever Rufus's life is in danger", "It shows Dana can swim", "It ends the story", "It proves the past is a dream"] },
          significance: { q: "What does it reveal about Dana's situation?", choices: ["Her survival is bound to saving a boy who is her ancestor", "That rivers are dangerous", "That Rufus is grateful forever", "That time travel is safe"] },
          reveals: "The rule that governs Dana's trips: she comes when Rufus is dying.",
          conceals: "The terrible cost of repeatedly saving someone who grows more dangerous.",
          ace: "Articulate the pattern the river begins; connect saving Rufus to Dana's own survival; extend it to the idea of being responsible for someone who may harm you."
        },
        {
          id: "pass", name: "The Traveling Pass", image: "images/pass.webp",
          clues: ["In the antebellum South, an enslaved person could not travel freely.", "They needed a written pass, or risked being seized by patrollers.", "Dana, a free modern woman, is treated as enslaved the moment she arrives."],
          identify: { q: "What is a pass, in this world?", choices: ["A written permit an enslaved person needed to travel without being seized", "A ticket back to 1976", "A map of the plantation", "A gift from Rufus"] },
          purpose: { q: "What is its role in the novel?", choices: ["To show how completely slavery controlled movement and freedom", "To help Dana time-travel", "To identify family members", "To record crops"] },
          significance: { q: "What does it reveal?", choices: ["That in the past, Dana's rights as a free person mean nothing", "That travel was easy", "That patrollers were kind", "That the plantation was empty"] },
          reveals: "How the machinery of slavery stripped away freedom in everyday ways.",
          conceals: "How exhausting and constant that danger was for the people who lived it.",
          ace: "Articulate what the pass controls; connect it to the theme of freedom denied; extend it to how rules can control whole groups of people."
        },
        {
          id: "whip", name: "Tom Weylin's Whip", image: "images/whip.webp",
          clues: ["Rufus's father, Tom Weylin, owns the plantation.", "Enslaved people are punished with brutal whippings.", "Dana witnesses — and eventually experiences — this violence herself."],
          identify: { q: "What does the whip represent?", choices: ["The everyday violence enslavers used to control the enslaved", "A tool for farming", "A toy of Rufus's", "A symbol of freedom"] },
          purpose: { q: "What is its role in the novel?", choices: ["To force Dana and the reader to confront slavery's brutality directly", "To help with the harvest", "To signal mealtimes", "To repair the house"] },
          significance: { q: "What does it reveal about the novel's purpose?", choices: ["Butler refuses to soften or look away from the reality of slavery", "That the Weylins were poor", "That violence solves problems", "That Dana enjoys the past"] },
          reveals: "The plantation's power rested on terror and physical violence.",
          conceals: "The full inner lives of those it was used against — which the novel works to restore.",
          ace: "Articulate what the whip shows; connect the violence to the system that required it; extend it to why some histories are hard, but important, to face."
        },
        {
          id: "knife", name: "Dana's Switchblade", image: "images/knife.webp",
          clues: ["Dana learns to carry a knife when she is pulled to the past.", "It is one of the few ways she can defend herself.", "In the end, she uses it in a final, desperate act against Rufus."],
          identify: { q: "What is this object?", choices: ["The knife Dana carries to the past to protect herself", "A kitchen tool of Sarah's", "A gift from Kevin", "A plantation key"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is Dana's means of self-defense — and the instrument of the final break with Rufus", "It cuts crops", "It opens locked doors", "It has no purpose"] },
          significance: { q: "What does it reveal about Dana's choices?", choices: ["Survival forces her toward violence she never wanted", "That she is cruel by nature", "That weapons solve everything", "That the past is harmless"] },
          reveals: "How the past pushes Dana into impossible, life-or-death decisions.",
          conceals: "What it costs her to make the choice she finally makes.",
          ace: "Articulate the knife's double role; connect self-defense to the impossible choices slavery forces; extend it to how desperate situations can narrow a person's options."
        },
        {
          id: "arm", name: "Dana's Lost Arm", image: "images/arm.webp",
          clues: ["On her final return to 1976, Dana comes back changed forever.", "She loses her left arm where the past held her.", "She survives — but she does not come home whole."],
          identify: { q: "What does the lost arm mark?", choices: ["The permanent cost the past exacts on Dana at the novel's end", "An accident in the present", "A birth defect", "A minor injury"] },
          purpose: { q: "What is its role in the novel?", choices: ["To end the story with a wound that cannot be undone", "To let Dana time-travel again", "To prove she is dreaming", "To reward her"] },
          significance: { q: "What might it symbolize?", choices: ["That no one touches the history of slavery and comes away unharmed", "That Dana was careless", "That the past is easily escaped", "That injuries heal completely"] },
          reveals: "Butler's insistence that the past leaves permanent marks on the present.",
          conceals: "Exactly how Dana will live with what she has seen and lost.",
          ace: "Articulate what the lost arm represents; connect it to the theme of a lasting legacy; extend it to how the past can leave lasting marks on people and communities."
        },
        {
          id: "records", name: "The Historical Records", image: "images/records.webp",
          clues: ["After it is over, Dana and Kevin travel to present-day Maryland.", "They search old records and archives for the Weylins.", "They try to learn what history says about the people and places Dana knew."],
          identify: { q: "What are these records?", choices: ["Real historical documents Dana and Kevin search after her final return", "Rufus's diary", "A slave pass", "A time-travel manual"] },
          purpose: { q: "What is their role in the novel?", choices: ["To connect Dana's lived, fictional experience to the documented historical past", "To prove Dana imagined everything", "To free the enslaved", "To send her back in time"] },
          significance: { q: "What do they reveal about the novel's method?", choices: ["Butler blends invented experience with real history so the past feels true", "That records tell the whole story", "That history is unimportant", "That fiction cannot teach"] },
          reveals: "The novel's blend of lived experience and documented history.",
          conceals: "How much of any life the records leave out — a gap fiction tries to fill.",
          ace: "Articulate why the records matter; connect fiction and history; extend it to what historical documents can and cannot tell us."
        }
      ]
    },

    ctob: {
      name: "The Broken Ledger",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "In what year does Dana's present-day life take place, when her story begins on her birthday? Enter the year.",
          evidence: ["Dana has just moved into a new California home.", "The novel opens on her twenty-sixth birthday.", "The year is the United States' bicentennial — nineteen seventy-six."],
          hints: ["It is the U.S. bicentennial year.", "It begins with 19…", "The year is 1976."],
          answer: "1976"
        },
        {
          type: "mc",
          prompt: "Why is Dana repeatedly pulled into the past?",
          options: [
            "To save the life of Rufus — a boy who turns out to be her own ancestor — whenever he is in danger.",
            "To fight in the Civil War.",
            "To bring modern medicine to the plantation.",
            "To take a vacation in the past."
          ],
          hints: ["Think about what is happening to Rufus each time she arrives.", "Which option is about saving her ancestor?"]
        },
        {
          type: "word",
          prompt: "In which U.S. state is the plantation Dana keeps returning to? (one word)",
          evidence: ["The plantation belongs to the Weylin family.", "It lies in a slave state before the Civil War.", "The state's name begins with 'Mary…'."],
          hints: ["A state on the Atlantic coast.", "Mary…", "The state is Maryland."],
          answer: "Maryland"
        },
        {
          type: "sequence",
          prompt: "Put the causal logic of Dana's story in order, earliest first.",
          items: [
            "Dana is pulled into the past whenever her ancestor Rufus is in danger.",
            "She keeps Rufus alive so that her family line can begin.",
            "Rufus and Alice's daughter, Hagar, continues Dana's family line.",
            "Once the line is secured and Rufus turns on her, Dana breaks free and returns to 1976 for good."
          ],
          hints: ["It starts with the pulls to save Rufus.", "Hagar's birth secures the family line before the final break.", "Dana's permanent return comes last."]
        },
        {
          type: "mc",
          prompt: "What does Dana lose on her final return to 1976?",
          options: [
            "Her left arm.",
            "Her memory of the past.",
            "Her husband, Kevin.",
            "Her home in California."
          ],
          hints: ["The past leaves a permanent, physical mark.", "Which option is the lasting wound?"]
        },
        {
          type: "word",
          prompt: "Kindred blends real history with an invented time-travel story. This makes its genre historical ______. (one word)",
          evidence: ["The setting — an antebellum Maryland plantation — is historically real.", "The time-travel plot is invented.", "Invented stories set in a real past are called historical ______."],
          hints: ["The opposite of nonfiction.", "It begins with 'fic…'.", "The word is fiction."],
          answer: "fiction"
        }
      ]
    },

    arcade: {
      name: "History or Invention?",
      instruction: "Kindred mixes documented history with Butler's imagination. Sort each statement: is it REAL HISTORY (a true fact about the antebellum South) or BUTLER'S INVENTION (something specific to the novel's story)? Reasoning earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "invention", label: "Butler's invention", short: "Invention" }
      ],
      cards: [
        { text: "Enslaved people could be bought, sold, and whipped as property.", bucket: "history", why: "A documented reality of American slavery — real history." },
        { text: "Patrollers stopped and seized Black people traveling without a written pass.", bucket: "history", why: "Slave patrols and pass laws were a real historical system." },
        { text: "Teaching enslaved people to read and write was often forbidden.", bucket: "history", why: "Anti-literacy laws were real in much of the antebellum South." },
        { text: "Maryland was a slave state in the decades before the Civil War.", bucket: "history", why: "A true historical fact about the novel's setting." },
        { text: "Dana is pulled through time whenever Rufus's life is in danger.", bucket: "invention", why: "The time-travel mechanism is Butler's fictional invention." },
        { text: "Rufus Weylin is Dana's own distant ancestor.", bucket: "invention", why: "This family connection is part of the novel's invented plot." },
        { text: "Dana and Kevin travel from 1976 Los Angeles into the past.", bucket: "invention", why: "A modern couple time-traveling is Butler's fiction." },
        { text: "Dana loses her left arm on her final return to the present.", bucket: "invention", why: "This specific event belongs to the novel's story." }
      ],
      followup: "Why might Butler blend real history with invention? What can a time-travel story show a reader that a history textbook cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "Dana is pulled into the past whenever —",
          options: [
            "her ancestor Rufus's life is in danger, and she returns to 1976 when her own life is threatened.",
            "she falls asleep.",
            "Kevin asks her to.",
            "she reads a history book."
          ],
          why: "The novel's rule is that Rufus's mortal danger pulls Dana back, and her own mortal danger returns her home."
        },
        {
          q: "Dana must keep Rufus alive because —",
          options: [
            "he is her ancestor; her family line depends on his surviving long enough for Hagar to be born.",
            "he pays her to protect him.",
            "he is her long-lost brother.",
            "he controls the time travel."
          ],
          why: "Dana's own existence depends on the birth of Hagar, so she is bound to keep Rufus alive despite what he becomes."
        },
        {
          q: "Butler portrays Rufus as —",
          options: [
            "a boy Dana comes to know and even care for, who is also shaped by slavery into a dangerous, cruel man.",
            "a purely evil villain with no human side.",
            "a kind hero throughout.",
            "a minor character who barely appears."
          ],
          why: "Rufus is complex: the novel shows how the power of slavery corrupts him over time, which is central to its meaning."
        },
        {
          q: "Dana's loss of her left arm at the end most likely symbolizes —",
          options: [
            "that no one can touch the history of slavery and return completely unharmed.",
            "that time travel is fun and safe.",
            "that Dana was clumsy.",
            "that the past has no effect on the present."
          ],
          why: "The permanent wound insists that the past leaves lasting marks — a core idea of the novel."
        },
        {
          q: "By sending a modern woman into the past, Butler helps readers —",
          options: [
            "experience the reality of slavery as lived, immediate history rather than distant facts.",
            "forget about history entirely.",
            "learn to build a time machine.",
            "avoid thinking about hard topics."
          ],
          why: "The time-travel device collapses the distance between past and present so the history feels real and personal."
        }
      ],
      short: [
        "Dana is pulled to the past to save Rufus, her ancestor. What impossible choices does this force on her? Use specific examples.",
        "Butler shows Rufus as, at times, sympathetic and, at times, cruel. How does the novel use him to show what the system of slavery does to people?",
        "Explain what Dana's lost arm might mean. Why might Butler end the novel with a wound that cannot be undone?"
      ],
      paragraph: "Write an evidence-based paragraph. Kindred is called both science fiction and historical fiction. Which label fits it better — and what does the time-travel device let Butler show that a straightforward historical novel could not? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about the past and present in your own words. Connect two moments (one modern, one in the past) that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Past into Present",
      prompt: "Butler ties 1976 to the antebellum past to argue that slavery's history still shapes the present. Choose one way the history of slavery or its aftermath still affects American life today (draw on what you have studied). Explain the connection with evidence, the way Butler links her two time periods.",
      format: "A short evidence-based comparison connecting the novel's history to a present-day reality, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Dana must keep Rufus alive in Kindred. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Kindred. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Kindred because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Kindred: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect a theme from Kindred to the present: [connection]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Kindred for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Kindred. It supports close reading of Butler's use of time travel to confront the history of slavery — the causal loop, Rufus's corruption, and the past's permanent cost. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Kindred is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: the novel depicts the violence of slavery, sexual coercion, and a suicide. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the novel (Dana's 1976 origin and twenty-sixth birthday; the Weylin plantation in Maryland; Rufus as Dana's ancestor; Alice and Hagar continuing the family line; Kevin stranded in the past; Dana's loss of her left arm on her final return). Confirm against your class edition, as pagination and framing vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English II–IV / advanced ELAR TEKS (19 TAC Ch. 110) reading-response, historical-context, and multiple-genre strands, with cross-curricular ties to U.S. history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.3", "RL.11-12.3", "RL.9-10.6", "RL.11-12.6", "RH.9-10.1", "RH.11-12.1", "W.9-10.7–W.11-12.9"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
