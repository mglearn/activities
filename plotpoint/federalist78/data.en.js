/* PlotPoint — Federalist No. 78 (Alexander Hamilton, 1788).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts about the essay and
   its argument; standards codes are only those given by the build plan (Common
   Core) — TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every choices/options
   array; the engine shuffles.

   A short founding-document room (§B2 mold) on judicial independence and judicial
   review; cross-links to the PlotPoint Federalist Papers room. Text/audio via the
   complete Federalist Papers (Project Gutenberg #1404 / LibriVox), which contains
   No. 78. */
window.__ROOM__ = {
  id: "federalist78",
  storageKey: "plotpoint.federalist78.v1",

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

    "nav.enter": "Enter the Argument", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Argument",
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
    "enter.readListenNote": "This document is in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning. (No. 78 is part of the complete Federalist Papers.)",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Federalist No. 78",
    "vocab.intro": "{n} terms that unlock the essay. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Judiciary Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this idea, document, or moment?",
    "relic.q.purpose": "Explain its likely purpose",
    "relic.q.significance": "Its argumentative significance",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this idea shows, connect it to Hamilton's argument, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Case of the Least Dangerous Branch",
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
    "arcade.title": "Hamilton's Argument, or an Anti-Federalist Worry?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Claims to weigh",
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
    "extend.title": "Should Courts Have the Final Word?",
    "extend.format": "Format",
    "extend.evidence": "The idea from Hamilton I am building on",
    "extend.transfers": "What transfers to a modern debate",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My argument and my position",
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
    "print.item.extend": "Judicial-power argument organizer",
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
      title: "Federalist No. 78",
      author: "Alexander Hamilton",
      grades: "Grades 11–12",
      genre: "Nonfiction · Founding document · Argument",
      time: "45–75 minutes",
      spoiler: "No plot to spoil",
      rights: "Public domain (1788)",
      textAccess: "This is a public-domain founding document; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in 1788 as one of The Federalist Papers; a public-domain founding-era document. This room paraphrases and reproduces no full passages.",
      contentNote: "A short founding-era argument about the courts, judicial independence, and judicial review. Suitable for grades 11–12 and civics or English III classes. Best paired with the PlotPoint Federalist Papers room. Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1404",
      audio: "https://librivox.org/the-federalist-papers-by-alexander-hamilton-john-jay-and-james-madison/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Federalist No. 78 — a set of scales, a quill and parchment, and the three balanced branches of a young government."
    },
    hook: "Which branch of government is the weakest — and why might that make it the guardian of your rights? In Federalist No. 78, Alexander Hamilton calls the courts the 'least dangerous' branch, then makes one of the boldest cases in American history for judicial review: the power of judges to strike down laws that violate the Constitution. (It pairs with the PlotPoint Federalist Papers room.)",
    goals: [
      "Analyze how Hamilton argues that the judiciary is the 'least dangerous' branch yet essential to liberty.",
      "Interpret his case for judicial review and for judicial independence through life tenure.",
      "Evaluate the argument against the standard Anti-Federalist worry about unelected, life-tenured judges.",
      "Connect the debate over judicial power to a modern question about the courts, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: the 1788 debate over whether the states should ratify the new Constitution. This room cross-links to the PlotPoint Federalist Papers room.",
        "Discuss: Should unelected judges be able to overturn laws passed by elected lawmakers? What makes a court trustworthy?"
      ],
      during: [
        "Use the Relic Room to examine one idea or move in Hamilton's argument at a time.",
        "Track Hamilton's claims — least dangerous branch, judicial review, life tenure — and note where a critic might push back."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map Hamilton's argument and test it against Anti-Federalist objections.",
        "Complete the Extend task to take your own position on the power of the courts today."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Hamilton calls the judiciary the 'least dangerous' branch. Include one detail from the essay that supports the claim." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Hamilton's idea of judicial independence (life tenure) to his case for judicial review. Explain how the two support each other." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the debate over judicial review to a modern question about the courts. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "judiciary", def: "The branch of government made up of the courts and judges.", example: "The courts that interpret and apply the law.", nonexample: "The Congress that writes the laws.", context: "Federalist No. 78 defends the judiciary — the courts and judges." },
      { term: "judicial review", def: "The power of courts to declare a law void when it conflicts with the Constitution.", example: "A court striking down a statute that violates the Constitution.", nonexample: "Congress rewriting the Constitution at will.", context: "The essay is the classic case for judicial review." },
      { term: "constitutional", def: "In keeping with, or relating to, the Constitution.", example: "A law that stays within the limits the Constitution sets.", nonexample: "A rule that ignores the Constitution entirely.", context: "Courts weigh whether a law is constitutional." },
      { term: "ratification", def: "The formal approval that makes a document like the Constitution official.", example: "States voting to adopt the new Constitution.", nonexample: "Rejecting a document so it never takes effect.", context: "The Federalist Papers argued for ratification of the Constitution." },
      { term: "Federalist Papers", def: "The 85 essays (1787–88) urging the states to adopt the Constitution, written under the name Publius.", example: "Essays defending the new plan of government.", nonexample: "A private letter with no public purpose.", context: "The Federalist Papers urged the states to adopt the Constitution." },
      { term: "Anti-Federalist", def: "A person who opposed ratifying the Constitution, fearing too strong a central government.", example: "A critic warning that federal courts would grow too powerful.", nonexample: "A supporter urging quick ratification.", context: "An Anti-Federalist feared a court that could not be held accountable." },
      { term: "tenure", def: "The conditions and length of time a person holds an office.", example: "Judges keeping their posts on good behavior.", nonexample: "An office that ends after a single day.", context: "Judges hold their office on good-behavior tenure." },
      { term: "checks and balances", def: "The system by which each branch of government can limit the others.", example: "Courts able to void laws that violate the Constitution.", nonexample: "One branch with total, unchecked power.", context: "Judicial review is part of the system of checks and balances." },
      { term: "unconstitutional", def: "Contrary to the Constitution, and therefore not valid law.", example: "A statute that a court strikes down for violating the Constitution.", nonexample: "A law that fits comfortably within constitutional limits.", context: "A court may strike down a law it finds unconstitutional." },
      { term: "independence", def: "Freedom from control or pressure by others; here, judges free of political pressure.", example: "A judge who can rule fairly without fear of removal.", nonexample: "A judge who must please the president to keep the job.", context: "Life tenure is meant to protect judicial independence." },
      { term: "Publius", def: "The shared Roman pen name Hamilton, Madison, and Jay used for the essays.", example: "Signing the Federalist essays 'Publius' rather than by name.", nonexample: "Publishing openly under one's own name.", context: "Hamilton wrote Federalist No. 78 under the pen name Publius." }
    ],

    relic: {
      name: "The Judiciary Archive",
      intro: "Seven instructional reconstructions of the ideas and moves through which Federalist No. 78 makes its case — teaching recreations, not illustrations from any edition. Investigate what each shows, and what it cannot.",
      artifacts: [
        {
          id: "papers", name: "The Federalist Papers", image: "images/papers.webp",
          clues: ["In 1787–88, three writers publish a series of newspaper essays.", "They write together under one Roman pen name, Publius.", "Their goal is to persuade the states to ratify the new Constitution."],
          identify: { q: "What are these?", choices: ["The Federalist Papers, the essays urging ratification of the Constitution", "A private diary", "a British law", "a Supreme Court ruling"] },
          purpose: { q: "What was their purpose?", choices: ["To persuade the states to adopt the new Constitution", "To reject the Constitution", "To crown a king", "To abolish all courts"] },
          significance: { q: "What is their significance?", choices: ["No. 78 is one of these essays, making the case for the courts", "It proves the essays opposed the Constitution", "It has no importance", "It ends the debate"] },
          reveals: "That No. 78 is one move in a larger campaign to win ratification.",
          conceals: "It hides how fierce the opposition was; the Anti-Federalists had strong arguments of their own.",
          ace: "Articulate what the Federalist Papers were for; connect No. 78 to that larger goal; extend it to how a single argument fits a bigger campaign."
        },
        {
          id: "leastdangerous", name: "“The Least Dangerous Branch”", image: "images/leastdangerous.webp",
          clues: ["Hamilton compares the three branches of government.", "He says the courts hold 'neither force nor will, but merely judgment.'", "With no army and no control of money, the judiciary is, he argues, the weakest."],
          identify: { q: "What is this claim?", choices: ["Hamilton's claim that the judiciary is the 'least dangerous' branch", "A claim that the courts are the strongest", "A description of the army", "A tax law"] },
          purpose: { q: "Why make this claim?", choices: ["To reassure readers that an independent court will not threaten their liberty", "To frighten readers", "To describe a battle", "To abolish the courts"] },
          significance: { q: "What is its significance?", choices: ["It reframes judicial power as a safeguard, not a threat", "It proves courts are dangerous", "It has no importance", "It ends the essay"] },
          reveals: "Hamilton's strategy: because the court is weak, it can be trusted with independence.",
          conceals: "It downplays how much power 'merely judgment' turns out to hold, as later history shows.",
          ace: "Articulate why Hamilton calls the courts weakest; connect that to trusting them with independence; extend it to whether the courts are still 'least dangerous' today."
        },
        {
          id: "review", name: "Judicial Review", image: "images/review.webp",
          clues: ["Hamilton argues that some laws will conflict with the Constitution.", "When they do, he says, the courts must treat the law as void.", "This power to strike down unconstitutional laws is called judicial review."],
          identify: { q: "What is this idea?", choices: ["Judicial review — the power of courts to void laws that violate the Constitution", "The power to write laws", "The power to raise an army", "The power to collect taxes"] },
          purpose: { q: "What does it establish?", choices: ["That the Constitution, not the legislature, is the supreme law", "That Congress has the final word", "That elections should end", "That a judge should be crowned"] },
          significance: { q: "What is its significance?", choices: ["This is the essay's most influential idea, later established by Marbury v. Madison", "It proves courts cannot check laws", "It has no importance", "It ends the debate"] },
          reveals: "Hamilton's boldest claim: judges must guard the Constitution against ordinary laws.",
          conceals: "It leaves open who guards the guardians — a worry the Anti-Federalists pressed hard.",
          ace: "Articulate what judicial review is; connect it to the supremacy of the Constitution; extend it to a modern law a court might strike down."
        },
        {
          id: "tenure", name: "Good Behaviour and Life Tenure", image: "images/tenure.webp",
          clues: ["Hamilton argues judges should keep their posts 'during good behaviour.'", "In practice, that means for life, unless they commit misconduct.", "The point is to free judges from pressure by the other branches."],
          identify: { q: "What does this describe?", choices: ["Life tenure ('good behaviour') that protects judicial independence", "A two-year term for judges", "The election of judges", "A ban on courts"] },
          purpose: { q: "What is its purpose?", choices: ["To make judges independent of political pressure and popular passion", "To make judges easy to remove", "To pay judges more", "To end the courts"] },
          significance: { q: "What is its significance?", choices: ["Independence is what lets a weak branch stand up to the strong ones", "It proves judges should fear the president", "It has no importance", "It ends the essay"] },
          reveals: "Why Hamilton ties independence to permanence: a judge who can be removed cannot be impartial.",
          conceals: "It underplays the cost — life tenure also removes a check the voters might otherwise have.",
          ace: "Articulate the reason for life tenure; connect independence to impartial judging; extend it to whether lifetime judges are wise today."
        },
        {
          id: "supreme", name: "The Constitution as Supreme Law", image: "images/supreme.webp",
          clues: ["Hamilton distinguishes the will of the people from the will of the legislature.", "The Constitution, ratified by the people, is fundamental law.", "A mere statute, he argues, cannot override it."],
          identify: { q: "What is this idea?", choices: ["That the Constitution is superior to any ordinary law", "That Congress is above the Constitution", "A description of a king's power", "A court schedule"] },
          purpose: { q: "What does it justify?", choices: ["Striking down laws that conflict with the higher, fundamental law", "Making statutes supreme", "Ending the Constitution", "Crowning a legislature"] },
          significance: { q: "What is its significance?", choices: ["This ranking of laws is the logical ground for judicial review", "It proves statutes outrank the Constitution", "It has no importance", "It ends the debate"] },
          reveals: "The heart of the logic: the people's Constitution outranks the legislature's statutes.",
          conceals: "It assumes judges will read the Constitution faithfully — exactly the point critics doubt.",
          ace: "Articulate why the Constitution outranks a statute; connect that ranking to judicial review; extend it to who should decide when the two conflict."
        },
        {
          id: "guardian", name: "Courts as Guardians of Rights", image: "images/guardian.webp",
          clues: ["Hamilton argues an independent court protects citizens from unjust laws.", "It stands between the individual and an overreaching majority or legislature.", "He calls the judges faithful guardians of the Constitution."],
          identify: { q: "What role does Hamilton give the courts?", choices: ["Guardians of the Constitution and of individual rights", "Lawmakers", "An army", "A tax office"] },
          purpose: { q: "What does this role do?", choices: ["It shields rights from momentary majorities and legislative overreach", "It lets majorities do anything", "It ends all rights", "It crowns a judge"] },
          significance: { q: "What is its significance?", choices: ["It frames the courts as a bulwark for liberty and limited government", "It proves courts endanger rights", "It has no importance", "It ends the essay"] },
          reveals: "Hamilton's promise: a free people needs judges willing to say 'no' to unjust laws.",
          conceals: "It trusts judges to know justice; critics ask what stops them from imposing their own views.",
          ace: "Articulate how courts guard rights; connect the guardian role to independence; extend it to a time a court might protect a minority from a majority."
        },
        {
          id: "marbury", name: "The Legacy: Marbury v. Madison", image: "images/marbury.webp",
          clues: ["Fifteen years after the essay, the Supreme Court decides a famous case.", "In Marbury v. Madison (1803), Chief Justice Marshall strikes down part of a law.", "The ruling turns Hamilton's argument for judicial review into settled practice."],
          identify: { q: "What does this reconstruct?", choices: ["Marbury v. Madison (1803), which established judicial review in practice", "The writing of Federalist No. 78", "The ratification vote", "a British trial"] },
          purpose: { q: "What does it show?", choices: ["The essay's argument becoming the law of the land", "The repeal of the Constitution", "The abolition of the Supreme Court", "The crowning of a president"] },
          significance: { q: "What is its significance?", choices: ["It confirms Federalist No. 78 as the intellectual foundation of judicial review", "It proves judicial review was rejected", "It has no importance", "It ends the courts"] },
          reveals: "How an argument on paper became one of the pillars of American government.",
          conceals: "It compresses a complex case into a symbol; the real ruling and its politics were more tangled.",
          ace: "Articulate what Marbury v. Madison did; connect it to Federalist No. 78; extend it to how ideas become institutions over time."
        }
      ]
    },

    ctob: {
      name: "The Case of the Least Dangerous Branch",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The Federalist Papers are a series of essays defending the Constitution. How many essays are there in all? Enter the number.",
          evidence: ["They were written by Hamilton, Madison, and Jay.", "Federalist No. 78 is one of them.", "The full series numbers eighty-five essays."],
          hints: ["It is more than eighty.", "It is five past eighty.", "The number is 85."],
          answer: "85"
        },
        {
          type: "word",
          prompt: "Which founding father wrote Federalist No. 78? (one word — his surname)",
          evidence: ["He wrote most of the essays on the courts and the executive.", "He later became the first Secretary of the Treasury.", "His surname begins with 'Ham-.'"],
          hints: ["He is on the ten-dollar bill.", "It begins with 'Hami…'.", "The author is Hamilton."],
          answer: "Hamilton"
        },
        {
          type: "word",
          prompt: "Under what single shared pen name were the Federalist Papers published? (one word)",
          evidence: ["Hamilton, Madison, and Jay all used it.", "It is a single Roman name, not their own.", "It begins with 'Pub-.'"],
          hints: ["It is a classical Roman pseudonym.", "It begins with 'Pub…'.", "The pen name is Publius."],
          answer: "Publius"
        },
        {
          type: "mc",
          prompt: "Hamilton calls the judiciary the 'least dangerous' branch because it has —",
          options: [
            "neither force nor will, but merely judgment — no army and no control of money.",
            "the largest army of the three branches.",
            "full control of the national treasury.",
            "the power to make new laws."
          ],
          hints: ["Think about what the courts do NOT control.", "Which option is about judgment, not force or money?"]
        },
        {
          type: "sequence",
          prompt: "Put the parts of Hamilton's case (and its legacy) in order, as the argument builds.",
          items: [
            "Hamilton argues the judiciary is the weakest, 'least dangerous' branch.",
            "He argues judges need life tenure ('good behaviour') to stay independent.",
            "He argues courts must strike down laws that violate the Constitution.",
            "Years later, Marbury v. Madison establishes judicial review in practice."
          ],
          hints: ["He first reassures readers the court is weak.", "Independence comes before the power to strike down laws.", "The Marbury case comes last, in 1803."]
        },
        {
          type: "mc",
          prompt: "Federalist No. 78 is the classic argument for —",
          options: [
            "judicial review — the power of courts to declare laws unconstitutional.",
            "abolishing the courts entirely.",
            "giving Congress the final say over the Constitution.",
            "electing all judges to short terms."
          ],
          hints: ["Think about the essay's most lasting idea.", "Which option is about courts checking laws against the Constitution?"]
        }
      ]
    },

    arcade: {
      name: "Hamilton's Argument, or an Anti-Federalist Worry?",
      instruction: "Federalist No. 78 argues for a strong, independent judiciary; its Anti-Federalist critics feared exactly that. Sort each statement by whose side it is on: part of Hamilton's argument, or an Anti-Federalist worry about it. There is room to argue, but sort by whose position the statement states. Thoughtful sorting earns the points.",
      buckets: [
        { id: "hamilton", label: "Part of Hamilton's argument", short: "Hamilton" },
        { id: "worry", label: "An Anti-Federalist worry", short: "Worry" }
      ],
      cards: [
        { text: "The courts have 'neither force nor will, but merely judgment' — the least dangerous branch.", bucket: "hamilton", why: "This is Hamilton's core reassurance about judicial power." },
        { text: "Judges should serve during good behavior (life tenure) to remain independent.", bucket: "hamilton", why: "Hamilton ties independence to permanent tenure." },
        { text: "Courts must strike down laws that violate the Constitution.", bucket: "hamilton", why: "This is Hamilton's argument for judicial review." },
        { text: "An independent judiciary protects individual rights from unjust majorities.", bucket: "hamilton", why: "Hamilton casts the courts as guardians of liberty." },
        { text: "Unelected judges with life tenure could become unaccountable.", bucket: "worry", why: "A classic Anti-Federalist fear about judicial power." },
        { text: "Letting courts overturn laws could override the people's elected representatives.", bucket: "worry", why: "The worry that judges outrank the democratic legislature." },
        { text: "Judges might impose their own views while claiming to 'interpret' the Constitution.", bucket: "worry", why: "A challenge to Hamilton's trust that judges will read the Constitution faithfully." },
        { text: "Life tenure removes a check that voters would otherwise have.", bucket: "worry", why: "It questions the democratic cost of permanent judges." }
      ],
      followup: "Hamilton makes a bold case, and the Anti-Federalists pushed back hard. Using specific points, decide whether an independent, life-tenured judiciary with the power of judicial review is more a safeguard for liberty or a danger to democracy — and whether Hamilton answers the strongest worry."
    },

    analysis: {
      mcq: [
        {
          q: "Federalist No. 78 is —",
          options: [
            "a persuasive essay arguing for an independent judiciary with the power of judicial review.",
            "a short story about a courtroom.",
            "a poem about the Constitution.",
            "a Supreme Court ruling."
          ],
          why: "It is one of the Federalist essays, arguing to persuade readers about the courts."
        },
        {
          q: "Hamilton argues the judiciary is the 'least dangerous' branch because —",
          options: [
            "it controls neither the army nor the treasury and can only exercise judgment.",
            "it has the most soldiers.",
            "it collects all the taxes.",
            "it writes the nation's laws."
          ],
          why: "Without force (the sword) or money (the purse), the court has 'merely judgment.'"
        },
        {
          q: "By 'good behaviour' tenure, Hamilton means judges should —",
          options: [
            "serve for life, barring misconduct, so they remain independent.",
            "be re-elected every two years.",
            "be appointed for a single year.",
            "serve only while the president approves."
          ],
          why: "Permanent tenure frees judges from political pressure and popular passion."
        },
        {
          q: "Judicial review, as argued here, lets courts —",
          options: [
            "declare a law void when it conflicts with the Constitution.",
            "write new laws of their own.",
            "command the army.",
            "set tax rates."
          ],
          why: "Because the Constitution is supreme, a conflicting statute must give way."
        },
        {
          q: "A common Anti-Federalist objection to this view is that —",
          options: [
            "unelected judges with life tenure could become unaccountable.",
            "courts are too weak to matter.",
            "the Constitution should not exist.",
            "judges should command the military."
          ],
          why: "Critics feared a powerful, permanent judiciary beyond the voters' reach."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it advances Hamilton's argument (least dangerous branch, judicial review, life tenure, or the courts as guardians).",
        "Explain judicial review in your own words. Using specific reasoning, decide whether you think courts should have this power.",
        "State the strongest Anti-Federalist objection to Hamilton's view. Using specific reasoning, explain whether Hamilton answers it."
      ],
      paragraph: "Write an evidence-based paragraph. Is an independent, life-tenured judiciary with the power of judicial review good for a democracy? Evaluate Hamilton's argument and the Anti-Federalist worry, and defend your own position with specific reasoning.",
      aceReflection: "Articulate why Hamilton calls the courts the 'least dangerous' branch. Connect judicial independence to judicial review. Extend the debate to a modern question about the courts, and name where the comparison breaks down."
    },

    extend: {
      name: "Should Courts Have the Final Word?",
      prompt: "Hamilton argued that independent, life-tenured judges should be able to strike down laws that violate the Constitution — a safeguard for liberty. Anti-Federalists warned that unelected judges could become unaccountable. Choose a real or imagined law you consider unjust or unconstitutional. Write a short argument: should the courts have the power to overturn it? Use Hamilton's reasoning, answer the strongest Anti-Federalist worry, and then state and defend your own position.",
      format: "A short argument on whether courts should be able to overturn a chosen law — using Hamilton's reasoning, answering the Anti-Federalist worry, and stating your own position."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Alexander Hamilton calls the judiciary the 'least dangerous' branch in Federalist No. 78. Do not answer for me. Ask me one question at a time that helps me explain his reasoning in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Federalist No. 78. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in Federalist No. 78 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Federalist No. 78: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Hamilton's argument about judicial review to a modern debate about the courts, [debate]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my argument about whether an independent, life-tenured judiciary is good for democracy for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Federalist No. 78 — Hamilton's claim that the judiciary is the 'least dangerous' branch, his case for judicial review, and his argument for judicial independence through life tenure. It teaches students to read and evaluate a founding-era argument and pairs naturally with the PlotPoint Federalist Papers room. It never reproduces the text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#1404) and LibriVox recording are the complete Federalist Papers, which include No. 78; direct students to essay No. 78. Verify the link before assigning.",
        "The Federalist Papers are public-domain founding-era documents. Some annotated or scholarly editions carry their own copyright — verify the edition you assign.",
        "This room cross-links to the existing PlotPoint Federalist Papers room (Nos. 10 and 51). Together they cover faction, separation of powers, and the judiciary.",
        "Details here reflect the essay's widely discussed argument (the 'least dangerous' branch; 'neither force nor will, but merely judgment'; life tenure; judicial review; the Constitution as supreme law). Confirm phrasing against the text; the room paraphrases and does not quote.",
        "Marbury v. Madison (1803) is included as historical legacy, after the essay; note that it postdates Federalist No. 78 and is used to show the argument's later influence.",
        "Teach the essay as an argument to be evaluated, presenting the Anti-Federalist objections fairly; encourage students to build and defend their own positions. Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-purpose and argument, and multiple-genre (informational/argumentative) strands, and supports civics/U.S. history document analysis. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.9-10.5", "RI.9-10.6", "RI.9-10.8", "RI.11-12.8"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
