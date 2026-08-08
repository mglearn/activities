/* PlotPoint — Democracy in America, Volume 1 (Alexis de Tocqueville; Henry Reeve
   translation).  English source data.  Translations live in lang/*.js.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established ideas from Volume 1, scoped
   to its core themes (equality of conditions; township self-government; associations;
   the jury; tyranny of the majority; the free press; the chapter on the three races);
   standards codes are only those given by the build plan (Common Core) — TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "tocqueville",
  storageKey: "plotpoint.tocqueville.v1",

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
    "vocab.title": "Words for Democracy in America",
    "vocab.intro": "{n} terms that unlock the book. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The American Notebook Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this observation, institution, or idea?",
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
    "ctob.title": "The Case of the Majority",
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
    "arcade.title": "Strength of Democracy, or Danger?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Observations to weigh",
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
    "extend.title": "Tocqueville Visits Today",
    "extend.format": "Format",
    "extend.evidence": "The idea from Tocqueville I am building on",
    "extend.transfers": "What transfers to today",
    "extend.changes": "What has changed since the 1830s",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My Tocqueville-style observation",
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
    "print.item.extend": "Strength-and-danger organizer",
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
      title: "Democracy in America (Volume 1, selections)",
      author: "Alexis de Tocqueville",
      grades: "Grades 9–12",
      genre: "Nonfiction · Political philosophy · Enlightenment",
      time: "60–90 minutes",
      spoiler: "No plot to spoil",
      rights: "Public domain (1835; Henry Reeve translation)",
      textAccess: "This is a public-domain book; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in French in 1835; the linked English text is the public-domain Henry Reeve translation. This room paraphrases and reproduces no full passages.",
      contentNote: "A work of political philosophy suitable for grades 9–12. This room focuses on selected core themes of Volume 1. It touches on slavery and the treatment of Native peoples (Tocqueville's chapter on the 'three races'). Preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/815",
      audio: "https://librivox.org/democracy-in-america-vol-i-by-alexis-de-tocqueville/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Democracy in America — a traveler's notebook and quill, a New England town meeting hall, and an early American flag."
    },
    hook: "In the 1830s a young French aristocrat toured the United States and asked a bold question: what does it mean for a whole society to be built on equality? In Democracy in America, Tocqueville admires much of what he sees — and warns of dangers democracies still face today.",
    goals: [
      "Analyze how Tocqueville argues that 'equality of conditions' is the central fact shaping American society.",
      "Interpret his account of what protects liberty in a democracy — local self-government, associations, the jury, and the press.",
      "Evaluate his warnings, especially the 'tyranny of the majority,' and his grim chapter on slavery and Native peoples.",
      "Connect Tocqueville's observations to a modern democracy, weighing what still holds and what has changed."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the setting: an outsider's study of the young United States in the 1830s.",
        "Discuss: What are the strengths of a society built on equality? What could go wrong when the majority always rules?"
      ],
      during: [
        "Use the Relic Room to examine one observation, institution, or idea at a time. This room focuses on Volume 1's core themes.",
        "Track which features Tocqueville admires as strengths and which he fears as dangers."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh democracy's strengths against its dangers.",
        "Complete the Extend task to write your own Tocqueville-style observation of democracy today."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Tocqueville means by 'equality of conditions.' Include one detail that shows why he thinks it matters so much." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of Tocqueville's ideas (for example, associations and self-government, or equality and the tyranny of the majority). Explain how they reinforce each other." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply one of Tocqueville's observations to a modern democracy. Explain what still holds true, what has changed since the 1830s, and where the comparison stops working." }
    },

    vocab: [
      { term: "democracy", def: "A system in which political power rests broadly with the people, usually through voting and equal rights.", example: "Citizens electing their own leaders and governing themselves.", nonexample: "A single monarch ruling by inherited right.", context: "Tocqueville came to America to study its new democracy." },
      { term: "aristocracy", def: "A society ruled by a hereditary noble class, with sharp ranks of birth.", example: "A country led by lords who inherit land and power.", nonexample: "A society where citizens are broadly equal.", context: "Coming from an aristocracy, Tocqueville measured America against the old European order." },
      { term: "equality of conditions", def: "Tocqueville's term for a society without fixed ranks, where people are broadly equal in status.", example: "Most citizens starting on roughly level footing, not divided into lords and peasants.", nonexample: "A rigid ladder of inherited noble ranks.", context: "Tocqueville says the equality of conditions shapes all of American life." },
      { term: "tyranny of the majority", def: "The danger that the majority's opinion or power can crush dissent and override minority rights.", example: "Public opinion punishing anyone who thinks differently.", nonexample: "Protecting the rights of a small minority against the crowd.", context: "He warns of a tyranny of the majority that can silence dissent." },
      { term: "association", def: "A voluntary group citizens form to pursue a shared purpose.", example: "Neighbors banding together to build a school or a charity.", nonexample: "A government office ordering people what to do.", context: "For nearly every purpose, Tocqueville notes, Americans form an association." },
      { term: "despotism", def: "Rule by absolute, unchecked power that crushes freedom.", example: "A ruler or a state that allows no dissent.", nonexample: "A government limited by law and shared power.", context: "Tocqueville fears a new, mild despotism could grow out of too much equality." },
      { term: "mores", def: "A people's habits, customs, and moral beliefs — their 'habits of the heart.'", example: "The everyday values and manners that shape how citizens act.", nonexample: "A single written law passed by a legislature.", context: "By mores Tocqueville means a people's habits, customs, and beliefs." },
      { term: "self-government", def: "The practice of citizens governing their own local affairs.", example: "A town meeting where residents decide local matters themselves.", nonexample: "A distant central power deciding everything for a town.", context: "Local self-government trains Americans in the habits of liberty." },
      { term: "egalitarian", def: "Favoring or marked by equality among people.", example: "A society that treats citizens as social equals.", nonexample: "A world of strict noble ranks and inherited privilege.", context: "America struck Tocqueville as strikingly egalitarian." },
      { term: "individualism", def: "A tendency for people to withdraw into private life and their own small circle.", example: "Citizens focusing on family and comfort, leaving public life to others.", nonexample: "Citizens actively joining together for the common good.", context: "Tocqueville warns that individualism can quietly pull citizens away from public life." },
      { term: "conformity", def: "Going along with the majority's opinions and behavior.", example: "Keeping quiet because everyone around you thinks one way.", nonexample: "Speaking your own mind against the crowd.", context: "Strong public opinion can push democratic citizens toward conformity." }
    ],

    relic: {
      name: "The American Notebook Archive",
      intro: "Seven instructional reconstructions of the observations, institutions, and ideas through which Democracy in America reaches us — teaching recreations, not illustrations from any edition. This room focuses on Volume 1's core themes. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "equality", name: "Equality of Conditions", image: "images/equality.webp",
          clues: ["Tocqueville says one fact struck him more than any other in America.", "It is not chiefly liberty, but the broad equality among citizens.", "He argues this single fact shapes laws, manners, and ideas alike."],
          identify: { q: "What is this central observation?", choices: ["The equality of conditions Tocqueville saw as America's defining feature", "The wealth of a few noble families", "The power of the American king", "The size of the army"] },
          purpose: { q: "Why does Tocqueville stress it?", choices: ["Because he thinks equality shapes nearly everything else in a democracy", "Because it proves America has nobles", "Because it makes America weak", "Because it ends democracy"] },
          significance: { q: "What is its significance?", choices: ["Equality of conditions is the master idea from which his whole analysis flows", "It proves ranks of birth still rule America", "It has no importance", "It ends the book"] },
          reveals: "That Tocqueville reads all of American life through one lens: the spread of equality.",
          conceals: "It glosses over how unequal America actually was — enslaved people and Native peoples were excluded from that 'equality.'",
          ace: "Articulate what 'equality of conditions' means; connect it to the theme of democracy; extend it to how one big social fact can shape a whole society."
        },
        {
          id: "township", name: "The New England Township", image: "images/township.webp",
          clues: ["In small New England towns, residents gather to run their own affairs.", "They vote on local matters directly, face to face.", "Tocqueville calls such local self-rule a school of liberty."],
          identify: { q: "What is this institution?", choices: ["The New England township and its local self-government", "The national congress", "A royal court", "A private business"] },
          purpose: { q: "What does it teach citizens?", choices: ["The habits and skills of governing themselves", "How to obey a distant king", "How to avoid all responsibility", "How to grow rich quickly"] },
          significance: { q: "What is its significance?", choices: ["Local self-government trains citizens for liberty and guards against central power", "It proves towns are useless", "It has no importance", "It ends the book"] },
          reveals: "Tocqueville's belief that liberty is learned locally, in the daily practice of self-rule.",
          conceals: "It idealizes the township; not every community governed itself so well, and many people were excluded.",
          ace: "Articulate what the township does; connect self-government to liberty; extend it to how local participation shapes citizens today."
        },
        {
          id: "associations", name: "The Voluntary Associations", image: "images/associations.webp",
          clues: ["Americans join together for nearly every purpose Tocqueville can name.", "They form clubs, charities, and societies without waiting for the government.", "He sees these groups as a key strength of the democracy."],
          identify: { q: "What are these?", choices: ["The voluntary associations Americans form for shared purposes", "Branches of the federal army", "Royal decrees", "State prisons"] },
          purpose: { q: "What is their purpose in a democracy?", choices: ["To let citizens accomplish together what no one could do alone", "To replace all local government", "To keep citizens isolated", "To serve a king"] },
          significance: { q: "What is their significance?", choices: ["Associations are a vital safeguard of liberty and a cure for isolation", "They prove citizens are helpless", "They have no importance", "They end democracy"] },
          reveals: "That in a land of equals, joining together is how citizens gain strength and resist both isolation and central power.",
          conceals: "It hides that some associations excluded people by race or sex; the 'joining' was not open to all.",
          ace: "Articulate what associations do; connect them to liberty; extend it to how joining groups still shapes civic life."
        },
        {
          id: "jury", name: "The Jury Box", image: "images/jury.webp",
          clues: ["Ordinary citizens are called to judge cases in court.", "Tocqueville sees the jury as more than a legal tool.", "He treats it as a free school that teaches citizens judgment and responsibility."],
          identify: { q: "What is this?", choices: ["The jury, in which ordinary citizens help judge cases", "A council of nobles", "The king's private court", "A military tribunal"] },
          purpose: { q: "Why does Tocqueville admire the jury?", choices: ["Because it teaches citizens judgment and a share in public life", "Because it lets the rich rule", "Because it silences the people", "Because it has no effect"] },
          significance: { q: "What is its significance?", choices: ["The jury is a 'free school' that trains citizens in responsibility and law", "It proves ordinary people cannot judge", "It has no importance", "It ends the book"] },
          reveals: "Tocqueville's view that democratic institutions educate citizens simply by involving them.",
          conceals: "It leaves out who was barred from juries; participation was far from universal.",
          ace: "Articulate what the jury teaches; connect participation to citizenship; extend it to how taking part educates people."
        },
        {
          id: "majority", name: "The Tyranny of the Majority", image: "images/majority.webp",
          clues: ["Tocqueville admires majority rule but fears one thing about it.", "When the majority always wins, minorities and dissenters have nowhere to appeal.", "Worse, public opinion can press so hard that few dare to think differently."],
          identify: { q: "What is this warning?", choices: ["The 'tyranny of the majority' Tocqueville fears in a democracy", "A plot by nobles to seize power", "An invasion by a foreign king", "A tax on the rich"] },
          purpose: { q: "What is Tocqueville warning against?", choices: ["The majority crushing dissent and overriding minority rights", "The people having any voice at all", "Local self-government", "Voluntary associations"] },
          significance: { q: "What is its significance?", choices: ["It names democracy's inner danger: unchecked majority power over minds and rights", "It proves majorities are always right", "It has no importance", "It ends the book"] },
          reveals: "That Tocqueville sees the gravest threat to a democracy coming not from a king but from the majority itself.",
          conceals: "It leaves open how to fix the danger; Tocqueville points to law, religion, and associations, but offers no guarantee.",
          ace: "Articulate the tyranny of the majority; connect it to the theme of equality; extend it to how public opinion can pressure people today."
        },
        {
          id: "press", name: "The Free Press", image: "images/press.webp",
          clues: ["Newspapers spread quickly across the young republic.", "Tocqueville sees the press as noisy and often coarse.", "Yet he judges it essential to holding a democracy together and checking power."],
          identify: { q: "What is this?", choices: ["The free press Tocqueville observed in America", "A royal proclamation", "A secret police force", "A private diary"] },
          purpose: { q: "What role does the press play?", choices: ["To spread information, link scattered citizens, and check those in power", "To keep citizens ignorant", "To serve only the government", "To replace elections"] },
          significance: { q: "What is its significance?", choices: ["A free press helps bind a democracy together and guard against abuses", "It proves newspapers are worthless", "It has no importance", "It ends the book"] },
          reveals: "Tocqueville's judgment that even a rough, quarrelsome press is a necessary support of freedom.",
          conceals: "It downplays how the press can also inflame the very majority opinion he warns about.",
          ace: "Articulate why Tocqueville values the press; connect it to liberty; extend it to the role of media in a democracy today."
        },
        {
          id: "threeraces", name: "The Chapter on the Three Races", image: "images/threeraces.webp",
          clues: ["Tocqueville devotes a long, sober chapter to those left out of American equality.", "He examines the enslavement of Black Americans and the removal of Native peoples.", "He predicts that these injustices will bring lasting conflict."],
          identify: { q: "What does this chapter confront?", choices: ["Slavery and the treatment of Native peoples in America", "The wealth of European nobles", "The design of American courts", "The size of American farms"] },
          purpose: { q: "Why does Tocqueville include it?", choices: ["To face the deep injustices that contradict America's democratic promise", "To praise slavery", "To describe the weather", "To end the book quickly"] },
          significance: { q: "What is its significance?", choices: ["It exposes the gap between America's ideal of equality and its treatment of Black and Native peoples", "It proves equality was complete", "It has no importance", "It ends democracy"] },
          reveals: "That Tocqueville saw, and named, the injustice at the heart of a nation that called itself equal.",
          conceals: "It carries the limits and prejudices of its author and era; read it critically alongside other voices.",
          ace: "Articulate what this chapter confronts; connect it to the ideal of equality; extend it to how a society's ideals and its injustices can clash."
        }
      ]
    },

    ctob: {
      name: "The Case of the Majority",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "Tocqueville devotes a famous chapter to the peoples living in America. How many 'races' does he examine in it? Enter the number.",
          evidence: ["He looks at white Americans of European descent.", "He looks at enslaved Black Americans.", "And he looks at the Native peoples being driven from their land."],
          hints: ["Count the three groups he names.", "It is a small odd number.", "The number is 3."],
          answer: "3"
        },
        {
          type: "word",
          prompt: "What French visitor wrote Democracy in America after touring the United States? (one word — his surname)",
          evidence: ["He was a young French aristocrat who came to America in the 1830s.", "He came partly to study American prisons, then wrote a book about democracy.", "His surname begins with 'Toc-.'"],
          hints: ["He gave us the phrase 'tyranny of the majority.'", "It begins with 'Tocq…'.", "He is Tocqueville."],
          answer: "Tocqueville"
        },
        {
          type: "word",
          prompt: "Tocqueville says the defining feature of American society is a broad equality of ______. (one word)",
          evidence: ["He calls it the single fact that struck him most.", "His famous phrase is 'equality of ______.'", "The word begins with 'cond-.'"],
          hints: ["It completes his phrase 'equality of ___.'", "It begins with 'cond…'.", "The word is conditions."],
          answer: "conditions"
        },
        {
          type: "mc",
          prompt: "Tocqueville's phrase 'tyranny of the majority' warns that —",
          options: [
            "majority opinion can crush dissent and override the rights of minorities.",
            "a king will soon seize power in America.",
            "the poor will violently rob the rich.",
            "a foreign army will invade the country."
          ],
          hints: ["Think about the danger inside majority rule itself.", "Which option is about the majority silencing others?"]
        },
        {
          type: "sequence",
          prompt: "Put the movement of Tocqueville's argument in order, as his book unfolds.",
          items: [
            "Tocqueville, a French aristocrat, travels through the United States in the 1830s.",
            "He observes that equality of conditions shapes nearly everything in America.",
            "He praises local self-government and citizens' voluntary associations.",
            "He warns that the majority's power could threaten liberty and minority rights."
          ],
          hints: ["His travels come first.", "He names the central fact (equality) before analyzing institutions.", "His warning about the majority comes last."]
        },
        {
          type: "mc",
          prompt: "Tocqueville argues that Americans guard against too much central power mainly through —",
          options: [
            "local self-government and a web of voluntary associations.",
            "a powerful king and a large standing army.",
            "strict censorship of the press.",
            "abolishing all elections."
          ],
          hints: ["Think about townships and the groups citizens form.", "Which option is about self-rule and associations?"]
        }
      ]
    },

    arcade: {
      name: "Strength of Democracy, or Danger?",
      instruction: "Tocqueville both admires and worries about American democracy. Sort each observation by how he presents it: a strength he admires, or a danger he warns about. There is room to argue, but sort by Tocqueville's own view. Thoughtful sorting earns the points.",
      buckets: [
        { id: "strength", label: "A strength Tocqueville admires", short: "Strength" },
        { id: "danger", label: "A danger Tocqueville warns about", short: "Danger" }
      ],
      cards: [
        { text: "Americans form voluntary associations for nearly every civic purpose.", bucket: "strength", why: "Tocqueville sees associations as a key safeguard of liberty." },
        { text: "Local townships govern their own affairs, teaching citizens self-rule.", bucket: "strength", why: "He calls local self-government a school of liberty." },
        { text: "The jury lets ordinary citizens share in judgment and responsibility.", bucket: "strength", why: "He praises the jury as a free school for citizens." },
        { text: "A broad equality of conditions gives most citizens a real stake in society.", bucket: "strength", why: "Equality is the strength from which much of his admiration flows." },
        { text: "The majority can trample the rights of minorities — a 'tyranny of the majority.'", bucket: "danger", why: "This is the central danger Tocqueville warns of in a democracy." },
        { text: "Intense public opinion makes people afraid to voice unpopular views.", bucket: "danger", why: "He fears the pressure to conform that comes with equality." },
        { text: "Slavery and the removal of Native peoples betray America's democratic promise.", bucket: "danger", why: "Tocqueville names these injustices as grave threats to the nation's future." },
        { text: "Without local liberty and associations, equal citizens could drift under one central power.", bucket: "danger", why: "He warns that equality without self-rule can slide toward a soft despotism." }
      ],
      followup: "Tocqueville weighs democracy's strengths against its dangers. Using specific observations, argue which of his warnings feels most urgent today — and which of his admired strengths matters most for keeping a democracy free."
    },

    analysis: {
      mcq: [
        {
          q: "Democracy in America is —",
          options: [
            "a work of nonfiction analyzing American society and democracy.",
            "a novel about invented American families.",
            "a collection of poems.",
            "a play for the stage."
          ],
          why: "Tocqueville observes and analyzes real institutions and ideas, not a fictional story."
        },
        {
          q: "Tocqueville says the central fact shaping America is —",
          options: [
            "the broad equality of conditions among its citizens.",
            "the great wealth of a few noble families.",
            "the power of an American king.",
            "the size of its army."
          ],
          why: "He treats equality of conditions as the master fact from which the rest of American life flows."
        },
        {
          q: "By 'tyranny of the majority,' Tocqueville means —",
          options: [
            "the danger that majority opinion silences dissent and overrides minority rights.",
            "the rule of a cruel single monarch.",
            "an invasion by a foreign power.",
            "the collapse of all government."
          ],
          why: "He fears that in a democracy the majority itself can become the oppressor."
        },
        {
          q: "Tocqueville sees voluntary associations and local self-government as —",
          options: [
            "vital safeguards of liberty in a democracy.",
            "obstacles that weaken the nation.",
            "relics with no real use.",
            "tools of a king."
          ],
          why: "He argues that citizens learn and protect liberty by governing locally and joining together."
        },
        {
          q: "Tocqueville's chapter on the three races mainly —",
          options: [
            "confronts slavery and the treatment of Native peoples as threats to America's future.",
            "celebrates America as already fully equal.",
            "describes American farming methods.",
            "praises the European nobility."
          ],
          why: "He faces the injustices that contradict America's ideal of equality and predicts lasting conflict."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops one of Tocqueville's ideas (equality, self-government, associations, or the tyranny of the majority).",
        "Explain the 'tyranny of the majority.' Using specific reasoning, decide whether you think it is still a real danger in a modern democracy.",
        "Tocqueville both admires and worries about democracy. Choose one strength and one danger he names, and explain why he weighs them the way he does."
      ],
      paragraph: "Write an evidence-based paragraph. Which of Tocqueville's warnings about democracy feels most relevant today? Make a claim and support it with specific reasoning from the book.",
      aceReflection: "Articulate Tocqueville's central idea about equality. Connect two of his observations (such as associations and self-government, or equality and the tyranny of the majority). Extend one idea to a modern democracy, and name where the comparison breaks down."
    },

    extend: {
      name: "Tocqueville Visits Today",
      prompt: "Tocqueville wrote as an outside observer, naming both the strengths and the dangers of a democracy built on equality. Imagine he arrived today. Choose one feature of modern democratic life (for example, social media and public opinion, online communities, or civic participation) and write a short Tocqueville-style observation: describe it, decide whether it is a strength or a danger for democracy, and explain your reasoning — noting where his 1830s world and ours differ.",
      format: "A short Tocqueville-style observation of one feature of modern democracy, labeling it a strength or danger, plus a note on what has changed since the 1830s."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Tocqueville means by 'equality of conditions' in Democracy in America. Do not answer for me. Ask me one question at a time that helps me explain the idea in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in Democracy in America. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in Democracy in America because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Democracy in America: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply one of Tocqueville's observations to modern democracy, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of whether the 'tyranny of the majority' is a real danger today for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Democracy in America, Volume 1 — Tocqueville's idea of equality of conditions, the institutions he says protect liberty, and his warnings, including the tyranny of the majority. It never reproduces Tocqueville's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The linked Project Gutenberg text (#815) is the public-domain Henry Reeve English translation of Volume 1; the linked LibriVox recording is Volume 1. Verify the link, translation, and edition before assigning.",
        "This room is scoped to selected core themes of Volume 1 (equality of conditions; township self-government; associations; the jury; tyranny of the majority; the press; the chapter on the three races), not the whole two-volume work.",
        "The underlying work and the Reeve translation are public domain; some modern translations (for example, later 20th-century versions) carry their own copyright — verify the edition you assign.",
        "The chapter on the 'three races' addresses slavery and the removal of Native peoples. Tocqueville names these injustices but writes with the assumptions of his era; teach it critically and alongside other voices. Preview and align with local policy.",
        "Details here reflect widely established themes of Volume 1; confirm specific passages against your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-purpose and argument, and multiple-genre (informational/argumentative) strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.9-10.1", "RI.11-12.1", "RI.9-10.2", "RI.11-12.2", "RI.9-10.4", "RI.9-10.6", "RI.9-10.8"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
