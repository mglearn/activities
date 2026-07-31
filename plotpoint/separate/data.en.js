/* PlotPoint — Separate Is Never Equal (Duncan Tonatiuh).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; details were verified against the book and the
   documented history of Mendez v. Westminster, and are used only to build
   original, transformative analysis. Standards are good-faith Common Core
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "separate",
  storageKey: "plotpoint.separate.v1",

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
    "enter.readListenNote": "This is a copyrighted book; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or read-aloud.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Separate Is Never Equal",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Schoolhouse Files",
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
    "ctob.title": "The Case for the Schools",
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
    "arcade.title": "Excuse or Truth?",
    "arcade.default": "Sort each statement by what it really is.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Reading & History Analysis",
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
    "extend.title": "Standing Up for Fairness",
    "extend.format": "Format",
    "extend.evidence": "The idea from the story I am building on",
    "extend.transfers": "What transfers to a modern situation",
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
    "print.item.relic": "Schoolhouse Files evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Fairness organizer",
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
      title: "Separate Is Never Equal",
      author: "Duncan Tonatiuh",
      grades: "Grades 4–7",
      genre: "Nonfiction · Biography · Picture book",
      time: "45–75 minutes",
      spoiler: "No spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the book (print, e-book, or licensed read-aloud). This activity does not reproduce or replace the book.",
      copyright: "Separate Is Never Equal is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The book tells a true story of racial discrimination and school segregation. It handles prejudice honestly at an age-appropriate level. Preview and align with local policy.",
      disclaimer: "This activity is an independent educational companion to Separate Is Never Equal by Duncan Tonatiuh. Students need lawful access to the book. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY 4.0. Separate Is Never Equal, its illustrations, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Separate Is Never Equal — two very different schoolhouses side by side, one grand and one plain, in a 1940s California town."
    },
    hook: "In 1940s California, a girl named Sylvia Mendez is told she cannot attend the nice neighborhood school — she must go to the run-down 'Mexican school' instead. Her family refuses to accept it. Their fight goes all the way to court and helps end school segregation in California — years before the more famous Brown v. Board of Education.",
    goals: [
      "Understand the book as the true story of Sylvia Mendez and her family's fight against school segregation.",
      "Trace how one family's stand grew into the court case Mendez v. Westminster (1947).",
      "Analyze why 'separate' schools were not, and could not be, 'equal.'",
      "Connect the Mendez family's courage to fairness and standing up for what is right today."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of segregation — keeping people apart by race or heritage.",
        "Discuss: Is it fair to send children to different schools because of where their families come from? Why or why not?"
      ],
      during: [
        "Use the Schoolhouse Files to slow down and read key people, places, and moments closely.",
        "Track what the Mendez family does at each step, from being turned away to winning in court."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the story to fairness today."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the title says 'separate is never equal.' Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments from the story (for example, being turned away and going to court). Explain how together they show how the family fought for change." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of standing up against an unfair rule to a modern situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "segregation", def: "Keeping groups of people apart, especially by race or heritage.", example: "Sending Mexican-American children to a separate school.", nonexample: "All children learning together in one school.", context: "The story is about ending school segregation." },
      { term: "discrimination", def: "Treating people unfairly because of who they are.", example: "Turning children away because of their heritage.", nonexample: "Welcoming every child equally.", context: "The Mendez children faced discrimination at the school." },
      { term: "prejudice", def: "An unfair opinion about people formed before knowing them.", example: "Assuming children will do poorly because of their background.", nonexample: "Judging each person by their own actions.", context: "Prejudice was behind the rule that separated the children." },
      { term: "desegregation", def: "Ending the separation of groups so they can share the same places.", example: "Letting all children attend the same schools.", nonexample: "Keeping separate schools by race.", context: "The Mendez case led to the desegregation of California schools." },
      { term: "lawsuit", def: "A case brought to a court to settle a dispute or right a wrong.", example: "The Mendez family taking the school district to court.", nonexample: "A private argument with no court.", context: "The family's lawsuit challenged the school rule." },
      { term: "civil rights", def: "The rights that protect people's freedom and equal treatment.", example: "The right to an equal education.", nonexample: "A special privilege for only some people.", context: "The Mendez case is an important civil rights story." },
      { term: "injustice", def: "A situation that is unfair or wrong.", example: "Children denied a fair school because of their heritage.", nonexample: "Everyone treated fairly under the same rules.", context: "The family refused to accept the injustice." },
      { term: "integrate", def: "To bring separated groups together into the same place.", example: "Different children learning side by side.", nonexample: "Keeping groups in separate buildings.", context: "The ruling helped integrate California schools." },
      { term: "equality", def: "The state of everyone having the same rights and treatment.", example: "Every child getting the same quality of school.", nonexample: "Some children given far less than others.", context: "The title argues that 'separate' can never mean true equality." }
    ],

    relic: {
      name: "The Schoolhouse Files",
      intro: "Seven instructional reconstructions of people, places, and moments from the true story — teaching recreations, not artwork from the book. Investigate what each is, its role in the story, and what it reveals. (This companion reproduces none of the text or its illustrations.)",
      artifacts: [
        {
          id: "two-schools", name: "The Two Schools", image: "images/two-schools.webp",
          clues: ["In the town, there was more than one public school.", "One was a nice school for white children.", "The other, for Mexican-American children, was plain and run-down."],
          identify: { q: "What do the two schools represent?", choices: ["Segregation — a 'nicer' school for white children and a separate one for Mexican-American children", "Two schools in different towns", "A public and a private school", "A school and a library"] },
          purpose: { q: "What is their role in the story?", choices: ["They show the unfair, separate system the Mendez family fought", "They show two equal, fair schools", "They are only background", "They belong to the family"] },
          significance: { q: "What do the two schools reveal?", choices: ["That 'separate' schools were not equal — and could not be", "That the schools were the same", "That segregation was fair", "That schools do not matter"] },
          reveals: "The heart of the book: separate schools were unequal by design.",
          conceals: "The everyday shame and harm the separation caused children.",
          ace: "Articulate what the two schools show; connect them to the title; extend it to why 'separate' can lead to 'unequal.'"
        },
        {
          id: "enrollment-day", name: "The Day at the 17th Street School", image: "images/enrollment-day.webp",
          clues: ["Sylvia's aunt takes several children to enroll at the nicer school.", "Her aunt's children, with a French last name, are accepted.", "Sylvia and her brothers, the Mendez children, are turned away."],
          identify: { q: "What happens on this day?", choices: ["Some children are accepted while the Mendez children are turned away", "Everyone is welcomed", "The school is closed", "Sylvia wins an award"] },
          purpose: { q: "What is its role in the story?", choices: ["It is the unfair moment that sparks the family's fight", "It ends the story happily", "It is a minor detail", "It shows the school was fair"] },
          significance: { q: "What does the family being turned away reveal?", choices: ["Children were judged by heritage and name, not by who they were", "That the school was full", "That the children did not want to attend", "That names do not matter"] },
          reveals: "How arbitrary and unjust the rule was — based on heritage, not ability.",
          conceals: "How confusing and hurtful this was for a child to experience.",
          ace: "Articulate what happened that day; connect it to the theme of unfair judgment; extend it to how it feels to be excluded for who you are."
        },
        {
          id: "mexican-school", name: "The 'Mexican School'", image: "images/mexican-school.webp",
          clues: ["The school the Mendez children were sent to was far from equal.", "It was plainer, more crowded, and poorly kept.", "A nearby cow pasture and an electric fence were part of its surroundings."],
          identify: { q: "What was the 'Mexican school' like?", choices: ["Run-down and unequal compared to the white school", "Brand new and beautiful", "Exactly the same as the other school", "A private academy"] },
          purpose: { q: "What is its role in the story?", choices: ["It is real proof that 'separate' was not 'equal'", "It shows the schools were identical", "It is where Sylvia wanted to be", "It has no importance"] },
          significance: { q: "What does its condition reveal?", choices: ["Segregation gave some children far less than others", "That all schools were equal", "That the building did not matter", "That the family was ungrateful"] },
          reveals: "Concrete evidence that separate schooling meant worse schooling.",
          conceals: "The talent and effort of the children taught in such conditions.",
          ace: "Articulate what the school was like; connect its condition to the word 'unequal'; extend it to how surroundings affect learning."
        },
        {
          id: "organizing", name: "Gonzalo Mendez Organizing", image: "images/organizing.webp",
          clues: ["Sylvia's father, Gonzalo Mendez, would not accept the rule.", "He talked with other families facing the same unfairness.", "Together they found a lawyer to help them."],
          identify: { q: "What is Gonzalo Mendez doing?", choices: ["Organizing families and getting a lawyer to challenge segregation", "Building a new school himself", "Moving the family away", "Giving up"] },
          purpose: { q: "What is his role in the story?", choices: ["He leads the effort that turns one family's stand into a legal fight", "He is a school official", "He is the judge", "He appears only briefly"] },
          significance: { q: "What does his organizing reveal?", choices: ["Ordinary people can join together to challenge an unjust system", "That one person can change nothing", "That courts do not matter", "That he acted alone"] },
          reveals: "How change grew from a family's refusal into a community effort.",
          conceals: "The risks and costs the families took on to fight.",
          ace: "Articulate what Gonzalo does; connect organizing to making change; extend it to how people work together to fix unfair rules."
        },
        {
          id: "courtroom", name: "The Courtroom", image: "images/courtroom.webp",
          clues: ["The families took the school district to court.", "The case is known as Mendez v. Westminster.", "Witnesses testified that segregation harmed the children."],
          identify: { q: "What is happening in the courtroom?", choices: ["The Mendez family's lawsuit against school segregation is heard", "A criminal trial", "A school graduation", "A town meeting"] },
          purpose: { q: "What is its role in the story?", choices: ["It is where the family's argument is tested and decided", "It ends the story before the fight", "It is unimportant", "It is where Sylvia goes to school"] },
          significance: { q: "What does going to court reveal?", choices: ["The family used the legal system to demand fairness", "That courts ignore fairness", "That the family gave up", "That laws cannot change"] },
          reveals: "How the family sought justice through the courts, not just protest.",
          conceals: "The long wait and uncertainty a court case demands.",
          ace: "Articulate what happens in court; connect the lawsuit to seeking justice; extend it to how courts can protect people's rights."
        },
        {
          id: "ruling", name: "The Judge's Ruling", image: "images/ruling.webp",
          clues: ["In 1947, the court decided in the family's favor.", "California moved to end the segregation of Mexican-American students.", "The Mendez children could finally attend the same schools as others."],
          identify: { q: "What did the ruling do?", choices: ["It found the segregation unlawful and helped end it in California", "It kept the schools separate", "It closed all the schools", "It punished the Mendez family"] },
          purpose: { q: "What is its role in the story?", choices: ["It is the family's hard-won victory", "It is a defeat", "It is a minor event", "It never happened"] },
          significance: { q: "Why does the 1947 ruling matter?", choices: ["It ended school segregation in California and set an important example", "It changed nothing", "It applied only to one family", "It made schools worse"] },
          reveals: "That persistent, lawful action can overturn an unjust rule.",
          conceals: "How much work remained even after the victory.",
          ace: "Articulate what the ruling did; connect it to the family's effort; extend it to why legal victories can help many people, not just one family."
        },
        {
          id: "bridge-to-brown", name: "The Bridge to Brown", image: "images/bridge-to-brown.webp",
          clues: ["The Mendez case came several years before a more famous one.", "In 1954, Brown v. Board of Education ended school segregation nationwide.", "The Mendez fight helped pave the way."],
          identify: { q: "What does 'the bridge to Brown' mean?", choices: ["The Mendez case helped lead toward Brown v. Board of Education (1954)", "A real bridge in the town", "A different family's story", "A school building"] },
          purpose: { q: "What is its role in the story?", choices: ["It shows the Mendez victory was part of a larger movement", "It ends segregation by itself", "It is unrelated to the story", "It happened first"] },
          significance: { q: "What does the connection reveal?", choices: ["One local case can help change a whole nation over time", "That the Mendez case did not matter", "That change happens instantly", "That Brown came first"] },
          reveals: "How the Mendez family's stand echoed far beyond their town.",
          conceals: "The many other people and cases that also made change possible.",
          ace: "Articulate the link to Brown; connect one case to a national movement; extend it to how small steps can add up to big change."
        }
      ]
    },

    ctob: {
      name: "The Case for the Schools",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What is the last name of Sylvia's family, who led the fight? (one word)",
          evidence: ["Sylvia and her father Gonzalo share this name.", "The famous court case is named after the family.", "The name begins with 'Men…'."],
          hints: ["Sylvia and Gonzalo's family name.", "Men…", "The name is Mendez."],
          answer: "Mendez"
        },
        {
          type: "mc",
          prompt: "In which U.S. state does this true story take place?",
          options: [
            "California.",
            "New York.",
            "Texas.",
            "Florida."
          ],
          hints: ["It is on the West Coast.", "Which option is the Mendez family's state?"]
        },
        {
          type: "digit",
          prompt: "In what year did the family win their court case (Mendez v. Westminster)? Enter the year.",
          evidence: ["The case was decided in the 1940s.", "It came seven years before Brown v. Board of Education in 1954.", "The year is nineteen forty-seven."],
          hints: ["The 1940s.", "It begins with 194…", "The year is 1947."],
          answer: "1947"
        },
        {
          type: "mc",
          prompt: "Why were the Mendez children sent to a separate school?",
          options: [
            "Because of their Mexican heritage — an unjust rule, not their ability.",
            "Because they had failed their classes.",
            "Because they lived too far away.",
            "Because they chose to."
          ],
          hints: ["Think about why the family was turned away.", "Which option is about heritage, not ability?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of the Mendez family's fight in order, earliest first.",
          items: [
            "The Mendez children are turned away from the 'white' school and sent to the 'Mexican school.'",
            "Gonzalo Mendez organizes families and finds a lawyer.",
            "The families take the school district to court.",
            "The court rules in their favor and California ends the segregation."
          ],
          hints: ["It begins with the children being turned away.", "Organizing comes before the court case.", "The victory is the final step."]
        },
        {
          type: "word",
          prompt: "The book's title argues that keeping children apart in separate schools is never ______. (one word)",
          evidence: ["The 'Mexican school' was run-down and worse than the white school.", "The title states this directly.", "The missing word means 'the same for everyone' and begins with 'eq…'."],
          hints: ["It means the same for everyone.", "Eq…", "The word is equal."],
          answer: "equal"
        }
      ]
    },

    arcade: {
      name: "Excuse or Truth?",
      instruction: "People who kept the schools separate made excuses; the Mendez family stood on the truth. Sort each statement: is it a FALSE EXCUSE once used to justify segregation, or a TRUE PRINCIPLE the Mendez family stood for? Reasoning earns the points.",
      buckets: [
        { id: "excuse", label: "A false excuse for segregation", short: "False excuse" },
        { id: "truth", label: "A truth the family stood for", short: "Truth" }
      ],
      cards: [
        { text: "\"Mexican children need a separate school to learn English.\"", bucket: "excuse", why: "A false excuse — segregation was about prejudice, not helping children learn." },
        { text: "\"The two schools are 'separate but equal.'\"", bucket: "excuse", why: "A false claim — the 'Mexican school' was clearly worse." },
        { text: "\"Keeping the children apart is just how it has always been done.\"", bucket: "excuse", why: "Tradition is not a reason — 'always done' does not make it fair." },
        { text: "\"Mexican children would hold the other students back.\"", bucket: "excuse", why: "A prejudiced assumption, not a fact about any child." },
        { text: "Every child deserves the same quality of school.", bucket: "truth", why: "A core principle the Mendez family fought for." },
        { text: "The 'Mexican school' was run-down and unequal.", bucket: "truth", why: "A documented truth the family proved in court." },
        { text: "Separating children by heritage shames and harms them.", bucket: "truth", why: "A truth about the real cost of segregation." },
        { text: "Families can join together and change an unfair rule.", bucket: "truth", why: "Exactly what the Mendez family and their neighbors did." }
      ],
      followup: "Why is 'separate' never really 'equal'? Which excuse do you think was hardest to argue against, and how did the family answer it?"
    },

    analysis: {
      mcq: [
        {
          q: "Separate Is Never Equal tells the true story of —",
          options: [
            "Sylvia Mendez and her family's fight to end school segregation.",
            "an imaginary school on another planet.",
            "a family moving to a new country.",
            "a mystery about a missing student."
          ],
          why: "The book is a nonfiction account of the Mendez family and Mendez v. Westminster."
        },
        {
          q: "The Mendez children were sent to a separate school because —",
          options: [
            "of their Mexican heritage, under an unjust rule.",
            "they had failed their classes.",
            "they asked to go there.",
            "the other school had burned down."
          ],
          why: "They were segregated by heritage, not by ability or choice."
        },
        {
          q: "When the family was turned away, they responded by —",
          options: [
            "organizing other families and taking the school district to court.",
            "giving up and staying home.",
            "moving to another country.",
            "paying a fine."
          ],
          why: "Gonzalo Mendez organized families and pursued the case Mendez v. Westminster."
        },
        {
          q: "The result of the case (1947) was that —",
          options: [
            "California moved to end the segregation of Mexican-American students, helping pave the way for Brown v. Board.",
            "the schools stayed exactly the same.",
            "all schools in the town closed.",
            "the family had to leave California."
          ],
          why: "The 1947 ruling ended the segregation and became an important precedent."
        },
        {
          q: "The title 'Separate Is Never Equal' means —",
          options: [
            "separating children can never be truly equal, even if the schools are called 'equal.'",
            "children should always be kept separate.",
            "only new schools can be equal.",
            "schools do not matter."
          ],
          why: "The book argues that separation itself makes true equality impossible."
        }
      ],
      short: [
        "Choose one artifact from the Schoolhouse Files. Explain what it is and what it reveals about the story's meaning.",
        "The 'Mexican school' and the white school were both public schools. Explain, with details, why they were not 'equal.'",
        "Why do you think it mattered that ordinary families — not just lawyers — led this fight?"
      ],
      paragraph: "Write an evidence-based paragraph. Why is the Mendez family's story important, even though the Brown v. Board case is more famous? Make a claim and support it with specific details from the story and its history.",
      aceReflection: "Articulate what 'separate is never equal' means in your own words. Connect two moments that develop it. Extend it to a fairness issue today, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Standing Up for Fairness",
      prompt: "The Mendez family saw an unfair rule and worked together to change it. Choose a real example — historical or current — of people standing up against an unfair rule or treatment. Explain the connection to the Mendez story with evidence: what was unfair, what people did, and what changed.",
      format: "A short evidence-based comparison connecting the Mendez family's stand to a modern example of standing up for fairness, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the title says 'separate is never equal' in Separate Is Never Equal. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Separate Is Never Equal. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in Separate Is Never Equal because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Separate Is Never Equal: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the Mendez family's fight to a modern example of standing up for fairness: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Separate Is Never Equal for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to Separate Is Never Equal. It supports close reading of the true story of Sylvia Mendez and Mendez v. Westminster: school segregation, the family's organizing and lawsuit, the 1947 ruling, and the bridge to Brown v. Board of Education. It reproduces no text or illustrations, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The book is copyrighted. This is an independent companion — students need their own lawful copy; the room links to, quotes, and reproduces nothing from the book, including its distinctive illustrations.",
        "Content: honest, age-appropriate treatment of racial discrimination and segregation. Preview and follow local policy.",
        "Details here were checked against the book and documented history (Sylvia Mendez; her parents Gonzalo and Felicitas Mendez; Aunt Soledad Vidaurri; the 17th Street School in Westminster, California; the run-down 'Mexican school'; the case Mendez v. Westminster; the 1947 ruling; and its role as a precursor to Brown v. Board of Education, 1954). Confirm names and details against your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 4–7 ELAR TEKS (19 TAC Ch. 110) strands on author's purpose, informational/biographical text, and response to reading, with strong cross-curricular ties to social studies and civil rights history. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.4.1", "RI.4.2", "RI.4.3", "RI.5.1", "RI.5.2", "RI.6.1", "W.4.1", "W.5.1", "SL.4.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
