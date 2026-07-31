/* PlotPoint — The Federalist Papers, Selections (Publius: Hamilton, Madison, Jay).
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; famous ideas ("if men were angels…";
   "ambition must be made to counteract ambition") are paraphrased, not quoted.
   Details are widely established. Standards are real, applicable Common Core
   codes flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "federalist",
  storageKey: "plotpoint.federalist.v1",

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
    "enter.readListenNote": "These essays are in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Federalist Papers",
    "vocab.intro": "{n} terms that unlock the essays. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Printer's Table",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the argument",
    "relic.q.significance": "The idea it stands for",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Ratification Debate",
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
    "arcade.title": "Safeguard or Danger?",
    "arcade.default": "Sort each thing by what it does to liberty.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Things to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Rhetorical & Political Analysis",
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
    "extend.title": "Checks and Balances Today",
    "extend.format": "Format",
    "extend.evidence": "The idea from the essays I am building on",
    "extend.transfers": "What transfers to a modern institution",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the design stops working",
    "extend.response": "My evidence-based argument",
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
    "print.item.relic": "Printer's Table evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Checks-and-balances organizer",
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
      title: "The Federalist Papers (Selections)",
      author: "Publius (Hamilton, Madison, Jay)",
      grades: "Grades 11–12",
      genre: "Political philosophy · Nonfiction",
      time: "60–90 minutes",
      spoiler: "No spoilers",
      rights: "1787–88 essays are public domain",
      textAccess: "Students need a public-domain edition of selected Federalist essays (for example, Nos. 10 and 51). This room does not reproduce the text.",
      copyright: "The original 1787–88 essays are public domain; some annotated classroom editions carry their own copyright. Verify your edition.",
      contentNote: "Dense 18th-century argumentative prose. Best read in short selections (e.g., Nos. 1, 10, 51) with guidance. Align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1404",
      audio: "https://librivox.org/the-federalist-papers-by-alexander-hamilton-john-jay-and-james-madison/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the Federalist Papers — a printing press, a quill, and a rolled constitution by candlelight."
    },
    hook: "In 1787, three writers hiding behind one pen name flooded the newspapers with essays to convince a doubtful public to adopt a bold new plan of government — and, along the way, argued about human nature, power, and how to keep any one group from seizing it all.",
    goals: [
      "Understand the Federalist Papers as newspaper essays arguing to ratify the U.S. Constitution.",
      "Explain the problem of faction and why the authors favored a large representative republic.",
      "Analyze the design of separated powers and checks and balances, and the view of human nature behind it.",
      "Transfer the authors' reasoning about power and checks to a modern institution."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of ratifying a constitution.",
        "Discuss: If people cannot always be trusted to use power well, how should a government be designed?"
      ],
      during: [
        "Use the Printer's Table to examine one idea at a time.",
        "For each essay, ask: what problem is Publius solving, and how?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to apply checks and balances to a modern institution."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what a 'faction' is and why Publius fears it. Include one detail from the essays that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the authors' ideas (for example, controlling faction and separating powers). Explain how together they aim to protect liberty." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of checks and balances to a modern institution or group. Explain what transfers, what changes, and where the design stops working." }
    },

    vocab: [
      { term: "ratify", def: "To formally approve and adopt, such as a constitution.", example: "States voting to approve the Constitution.", nonexample: "Rejecting a proposed plan.", context: "The essays were written to persuade New York to ratify the Constitution." },
      { term: "faction", def: "A group united by a shared interest that may work against the common good or others' rights.", example: "A group seizing government for its own gain.", nonexample: "Citizens debating openly for the public good.", context: "Federalist No. 10 is famous for its analysis of faction." },
      { term: "republic", def: "A government in which power rests with elected representatives, not a direct vote by all on everything.", example: "Citizens electing lawmakers to represent them.", nonexample: "A single ruler with total power.", context: "Publius argues a large republic controls faction better than a small democracy." },
      { term: "federalism", def: "A system that divides power between a national government and the states.", example: "Some powers national, some left to the states.", nonexample: "All power held by one central ruler.", context: "The Constitution's federalism divides power to protect liberty." },
      { term: "separation of powers", def: "Dividing government into branches (legislative, executive, judicial) with different jobs.", example: "Congress makes laws; the president enforces; courts judge.", nonexample: "One office doing all three.", context: "Federalist No. 51 defends the separation of powers." },
      { term: "checks and balances", def: "Giving each branch ways to limit the others so none becomes too powerful.", example: "A veto; confirmation votes; judicial review.", nonexample: "One branch with no limits.", context: "Checks and balances keep 'ambition counteracting ambition.'" },
      { term: "tyranny", def: "Cruel or absolute power held by one person or group.", example: "All power seized by a single faction.", nonexample: "Power divided and checked.", context: "The whole design aims to prevent tyranny." },
      { term: "pseudonym", def: "A false name used by an author instead of their real one.", example: "Writing under a made-up name.", nonexample: "Signing your own legal name.", context: "The authors all wrote under the pseudonym 'Publius.'" },
      { term: "constitution", def: "The fundamental plan and rules for how a government is organized and limited.", example: "The document that sets up the branches of government.", nonexample: "A single temporary law.", context: "The essays argue for adopting the U.S. Constitution." },
      { term: "representation", def: "Choosing officials to speak and act for the people.", example: "Electing lawmakers to decide on your behalf.", nonexample: "Everyone voting directly on every issue.", context: "Publius says representation can refine and enlarge the public's views." }
    ],

    relic: {
      name: "The Printer's Table",
      intro: "Seven instructional reconstructions of ideas and objects behind the Federalist Papers — teaching recreations, not artwork from any edition. Investigate what each is, its role in the argument, and the idea it stands for.",
      artifacts: [
        {
          id: "publius", name: "The Name 'Publius'", image: "images/publius.webp",
          clues: ["The essays are all signed with one name.", "That name is not a real person — it is a shared pen name.", "Behind it stand three authors: Hamilton, Madison, and Jay."],
          identify: { q: "What is 'Publius'?", choices: ["The shared pen name of the three authors", "A single real author", "The printer's name", "A New York governor"] },
          purpose: { q: "Why write under one shared name?", choices: ["To present a single, unified voice arguing for the Constitution", "To hide a crime", "To sell more copies", "To avoid writing"] },
          significance: { q: "What does the pseudonym show?", choices: ["The essays aim to persuade with reasons, not with the authors' personal fame", "That the authors were ashamed", "That only one person wrote them", "That names do not matter"] },
          reveals: "That the argument was meant to stand on its reasoning, under one public voice.",
          conceals: "Which author wrote which essay — a question scholars still debate.",
          ace: "Articulate why 'Publius' is used; connect a shared voice to a shared argument; extend it to why an idea might be judged apart from who said it."
        },
        {
          id: "newspaper", name: "The Newspaper Essays", image: "images/newspaper.webp",
          clues: ["The essays first appeared in New York newspapers.", "They were published quickly, one after another, in 1787 and 1788.", "Their goal was to persuade the public to support the new Constitution."],
          identify: { q: "Where did the Federalist Papers first appear?", choices: ["In New York newspapers", "In a single bound book only", "In private letters", "On monuments"] },
          purpose: { q: "What was their purpose?", choices: ["To persuade citizens to ratify the proposed Constitution", "To entertain with fiction", "To record laws", "To sell newspapers only"] },
          significance: { q: "What does the newspaper form show?", choices: ["Serious political argument was aimed at ordinary citizens in a public debate", "That the ideas were secret", "That only experts could read them", "That the Constitution was already adopted"] },
          reveals: "That ratification was decided through public argument, not by decree.",
          conceals: "How difficult the dense essays were for many everyday readers.",
          ace: "Articulate the essays' purpose; connect public argument to self-government; extend it to how public debate shapes decisions today."
        },
        {
          id: "faction", name: "The Problem of Faction", image: "images/faction.webp",
          clues: ["In Federalist No. 10, Madison names the great danger to a republic.", "It is a group that pursues its own interest against others' rights or the common good.", "He argues you cannot remove its causes, so you must control its effects."],
          identify: { q: "What danger does Federalist No. 10 warn against?", choices: ["Faction — self-interested groups that harm the common good", "Foreign trade", "Reading newspapers", "Too many elections"] },
          purpose: { q: "How does Madison propose to control faction?", choices: ["With a large republic and representation that dilute any single faction's power", "By banning all disagreement", "By giving one faction control", "By abolishing government"] },
          significance: { q: "What does this argument show?", choices: ["A large, representative republic can better guard against any group seizing power", "That factions are harmless", "That small direct democracies are safest", "That the public should not vote"] },
          reveals: "The authors' realistic view that self-interest is permanent and must be managed.",
          conceals: "Whether the design truly prevents powerful factions — a live debate.",
          ace: "Articulate what a faction is; connect Madison's fear to his solution; extend it to a modern group that pursues its own interest against the common good."
        },
        {
          id: "branches", name: "The Three Branches", image: "images/branches.webp",
          clues: ["The Constitution divides the national government into three parts.", "One makes laws, one carries them out, one judges cases.", "Each has its own powers and its own job."],
          identify: { q: "What do these three branches represent?", choices: ["The separation of powers: legislative, executive, and judicial", "Three political parties", "Three states", "Three newspapers"] },
          purpose: { q: "Why divide government this way?", choices: ["So that no single person or group holds all the power", "To make government slower for its own sake", "To confuse citizens", "To copy Britain exactly"] },
          significance: { q: "What idea does the division protect?", choices: ["Dividing power helps guard liberty against tyranny", "That one branch should dominate", "That power should be undivided", "That branches are decorations"] },
          reveals: "The core structural idea: split power so it cannot all be seized at once.",
          conceals: "How much the branches actually stay within their bounds in practice.",
          ace: "Articulate the three branches; connect division of power to protecting liberty; extend it to why splitting power can prevent abuse."
        },
        {
          id: "checks", name: "The Counterweights", image: "images/checks.webp",
          clues: ["Dividing power is not enough on its own.", "Each branch is given ways to limit the others.", "Publius says we must make ambition counteract ambition."],
          identify: { q: "What do these counterweights represent?", choices: ["Checks and balances among the branches", "Weights for a market scale", "Coins", "Anchors"] },
          purpose: { q: "What do checks and balances do?", choices: ["Let each branch limit the others so none grows too powerful", "Let one branch rule the rest", "Remove all limits on power", "Speed up every decision"] },
          significance: { q: "What view of human nature lies behind this?", choices: ["Because people are not angels, power must be checked by other power", "That leaders always act selflessly", "That government is unnecessary", "That checks are pointless"] },
          reveals: "The realistic idea that safeguards, not good intentions, keep power in bounds.",
          conceals: "How well the checks hold when one branch or party grows very strong.",
          ace: "Articulate what checks and balances do; connect them to the view that people aren't angels; extend it to a group that needs internal checks today."
        },
        {
          id: "federalism", name: "The Divided Map", image: "images/federalism.webp",
          clues: ["Power is split not only among branches but between levels of government.", "Some powers belong to the national government.", "Others are left to the states."],
          identify: { q: "What does this divided map represent?", choices: ["Federalism — dividing power between the national government and the states", "A treasure map", "A battle plan", "A trade route"] },
          purpose: { q: "Why divide power between nation and states?", choices: ["To create another layer of limits that protects liberty", "To make travel easier", "To confuse voters", "To end the states"] },
          significance: { q: "What does this division add?", choices: ["A second way to keep any single government from holding all power", "That states have no role", "That the nation has no power", "That maps decide law"] },
          reveals: "That the Constitution guards liberty with layered, divided power.",
          conceals: "How the exact line between national and state power would be fought over.",
          ace: "Articulate what federalism divides; connect layered power to protecting liberty; extend it to a modern dispute over national vs. local control."
        },
        {
          id: "constitution", name: "The Constitution", image: "images/constitution.webp",
          clues: ["All the essays argue for adopting one specific document.", "It sets up the branches, the powers, and the limits of the new government.", "Publius urges the public to approve it."],
          identify: { q: "What is this document?", choices: ["The U.S. Constitution the essays argue to ratify", "A treaty with Britain", "A newspaper", "A private letter"] },
          purpose: { q: "What is its role in the essays?", choices: ["It is the plan of government the authors are defending", "It is a work of fiction", "It records a battle", "It lists taxes only"] },
          significance: { q: "What does defending it require?", choices: ["Persuading citizens that the design will protect, not endanger, their liberty", "Hiding the document", "Ignoring objections", "Forcing approval"] },
          reveals: "That a constitution's authority can rest on public persuasion and consent.",
          conceals: "The compromises and objections behind the document, argued elsewhere.",
          ace: "Articulate what the Constitution sets up; connect the document to the essays' purpose; extend it to why the rules of an institution matter."
        }
      ]
    },

    ctob: {
      name: "The Ratification Debate",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The Federalist Papers were written to persuade the public to ratify (approve) the new U.S. ______. (one word)",
          evidence: ["The essays defend a specific new plan of government.", "It sets up the branches, powers, and limits of that government.", "The word begins with 'Const…'."],
          hints: ["The fundamental plan of the government.", "Const…", "The word is Constitution."],
          answer: "Constitution"
        },
        {
          type: "mc",
          prompt: "Under what single name were all the Federalist essays published?",
          options: [
            "Publius.",
            "Hamilton.",
            "The Federalist.",
            "George Washington."
          ],
          hints: ["It is a shared pen name, not a real person.", "Which option is the pseudonym for all three authors?"]
        },
        {
          type: "digit",
          prompt: "How many authors wrote the Federalist Papers (Hamilton, Madison, and Jay)? Enter the number.",
          evidence: ["Three writers shared the work under one pen name.", "They were Alexander Hamilton, James Madison, and John Jay.", "Count the authors."],
          hints: ["Hamilton, Madison, and Jay.", "One more than two.", "There were 3 authors."],
          answer: "3"
        },
        {
          type: "mc",
          prompt: "In Federalist No. 10, Madison argues that the greatest danger to a republic is —",
          options: [
            "faction: groups that pursue their own interest against the common good.",
            "reading newspapers.",
            "holding elections.",
            "trading with other states."
          ],
          hints: ["Think about self-interested groups.", "Which option names the danger of faction?"]
        },
        {
          type: "sequence",
          prompt: "Put the logic of Federalist No. 51 in order, earliest first.",
          items: [
            "People are not angels, and cannot always be trusted with power.",
            "So government is necessary to control people.",
            "But the government itself must also be controlled.",
            "So power is divided among branches that check one another."
          ],
          hints: ["It begins with a realistic view of human nature.", "Government's own need for control comes before the solution.", "Dividing and checking power is the conclusion."]
        },
        {
          type: "word",
          prompt: "To keep any branch from becoming too powerful, the Constitution creates a system of checks and ______. (one word)",
          evidence: ["Dividing power among branches is not enough by itself.", "Each branch is given ways to limit the others.", "The paired word here begins with 'bal…'."],
          hints: ["It pairs with 'checks.'", "Bal…", "The word is balances."],
          answer: "balances"
        }
      ]
    },

    arcade: {
      name: "Safeguard or Danger?",
      instruction: "Publius argues that certain designs protect liberty while others threaten it. Sort each thing: is it a SAFEGUARD the Constitution builds in to protect liberty, or a DANGER to liberty that the design guards against? Reasoning earns the points.",
      buckets: [
        { id: "safeguard", label: "A safeguard for liberty", short: "Safeguard" },
        { id: "danger", label: "A danger to liberty", short: "Danger" }
      ],
      cards: [
        { text: "Dividing power among three branches", bucket: "safeguard", why: "Separation of powers keeps any one branch from ruling alone." },
        { text: "Letting each branch check the others", bucket: "safeguard", why: "Checks and balances make ambition counteract ambition." },
        { text: "A large republic that dilutes any single faction", bucket: "safeguard", why: "Madison's remedy in No. 10 — size and variety weaken faction." },
        { text: "Representatives who refine the public's views", bucket: "safeguard", why: "Representation, Publius says, can enlarge and refine public opinion." },
        { text: "One person or group holding all the power", bucket: "danger", why: "Concentrated power is the tyranny the design guards against." },
        { text: "A single faction seizing the government", bucket: "danger", why: "A faction capturing government is exactly the danger of No. 10." },
        { text: "Passion overruling reason in politics", bucket: "danger", why: "Publius warns that inflamed passion threatens sound government." },
        { text: "Leaders who face no limits on their power", bucket: "danger", why: "Unchecked power is the threat checks and balances answer." }
      ],
      followup: "Publius assumes people are not angels. Does designing a system to check self-interest make it stronger or more cynical? Where do you see checks and balances working — or failing — today?"
    },

    analysis: {
      mcq: [
        {
          q: "The Federalist Papers were written mainly to —",
          options: [
            "persuade citizens to ratify the proposed U.S. Constitution.",
            "declare independence from Britain.",
            "entertain readers with fiction.",
            "record the results of a war."
          ],
          why: "They are argumentative essays urging the public, especially in New York, to adopt the Constitution."
        },
        {
          q: "The name 'Publius' on every essay is —",
          options: [
            "a shared pen name for the three authors, Hamilton, Madison, and Jay.",
            "the real name of a single author.",
            "the newspaper's owner.",
            "the president at the time."
          ],
          why: "All three writers published under the single pseudonym 'Publius.'"
        },
        {
          q: "In Federalist No. 10, Madison's remedy for faction is to —",
          options: [
            "use a large representative republic so no single faction easily dominates.",
            "ban all disagreement.",
            "hand power to the strongest faction.",
            "abolish government entirely."
          ],
          why: "He argues you cannot remove faction's causes, so a large republic controls its effects."
        },
        {
          q: "Federalist No. 51's idea that 'if men were angels, no government would be necessary' supports —",
          options: [
            "checks and balances, since imperfect people need power to be limited by power.",
            "removing all limits on government.",
            "trusting leaders to police themselves.",
            "ending elections."
          ],
          why: "Because people are flawed, the design pits ambition against ambition to keep power in check."
        },
        {
          q: "Overall, the authors design the government to —",
          options: [
            "divide and check power so that no person or group can seize it all.",
            "concentrate power in one strong leader.",
            "let the majority do whatever it wants.",
            "avoid any structure at all."
          ],
          why: "Separation of powers, checks and balances, and federalism all divide power to protect liberty."
        }
      ],
      short: [
        "Choose one artifact from the Printer's Table. Explain what it is and the idea from the essays it stands for.",
        "Explain the problem of faction in your own words, and how Madison proposes to control it.",
        "The authors assume people cannot always be trusted with power. How does that assumption shape the design of the government?"
      ],
      paragraph: "Write an evidence-based paragraph. Do the Federalist Papers' safeguards — separation of powers, checks and balances, and a large republic — actually protect liberty? Make a claim and support it with specific ideas from the essays and one example.",
      aceReflection: "Articulate the authors' view of human nature. Connect it to two design features they defend. Extend it to a modern institution, and name where the design becomes hard to apply."
    },

    extend: {
      name: "Checks and Balances Today",
      prompt: "Publius argues that power must be divided and checked because people cannot always be trusted with it. Choose a modern organization or institution you know (a school, a club, a company, a government body). Apply the authors' reasoning: where is power concentrated, what checks exist or are missing, and how could checks and balances improve it?",
      format: "A short evidence-based argument applying separation of powers and checks and balances to a modern institution, with a note on where the design fits and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning the idea of faction in Federalist No. 10. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in the Federalist Papers. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [idea one] connects to [idea two] in the Federalist Papers because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about the Federalist Papers: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply checks and balances to this modern institution: [institution]. Ask me questions to find where power is concentrated and what checks exist or are missing. Do not decide for me." },
      { title: "Critique prompt", text: "Review my interpretation of the Federalist Papers for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of selected Federalist essays (especially Nos. 10 and 51) as argument and civics: ratification, faction, the large republic, separation of powers, and checks and balances. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The original 1787–88 essays are public domain; some annotated classroom editions carry their own copyright.",
        "The prose is dense 18th-century argument. Assign short selections (e.g., Nos. 1, 10, 51) with scaffolding, and confirm which essays your course uses.",
        "Details here reflect widely established facts (essays published in New York newspapers 1787–88 to ratify the Constitution; the shared pseudonym 'Publius'; authors Hamilton, Madison, and Jay; faction in No. 10; separation of powers and checks and balances in No. 51). Famous lines are paraphrased, not quoted. Confirm attribution of specific papers against your edition.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III–IV / advanced ELAR TEKS (19 TAC Ch. 110) strands on argument, author's purpose, and rhetorical analysis, with strong cross-curricular ties to U.S. Government and History. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.5", "RI.11-12.6", "RI.11-12.8", "W.11-12.1", "SL.11-12.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
