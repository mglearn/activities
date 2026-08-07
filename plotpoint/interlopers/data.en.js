/* PlotPoint — The Interlopers (Saki / H. H. Munro, 1919).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (the feud, the flask,
   and the ending are described, not quoted). Standards are good-faith Common
   Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "interlopers",
  storageKey: "plotpoint.interlopers.v1",

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
    "vocab.title": "Words for The Interlopers",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Disputed Forest",
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
    "ctob.title": "The Feud in the Forest",
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
    "arcade.title": "Human Feud or Nature's Indifference?",
    "arcade.default": "Sort each detail by what force it belongs to.",
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
    "extend.title": "The Cost of the Feud",
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
    "print.item.relic": "Forest evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Cost-of-the-feud organizer",
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
      title: "The Interlopers",
      author: "Saki (H. H. Munro)",
      grades: "Grades 8–10",
      genre: "Irony · Tragedy · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1919)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Published in 1919 in The Toys of Peace, The Interlopers is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A deadly, generations-old feud between two men. The ending implies the two men will be killed by wolves — suspenseful and dark, but not graphic. Suitable for middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1477",
      audio: "https://librivox.org/the-toys-of-peace-by-saki/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Interlopers — a wild, windy winter forest at night, two men pinned side by side beneath a fallen beech tree, with shadowy shapes gathering on a distant hillside."
    },
    hook: "Two men and their families have hated each other for generations over a narrow strip of disputed forest. On a wild winter night, Ulrich von Gradwitz and Georg Znaeym each stalk the woods hoping to catch and kill the other. They meet face to face — and in that instant a great tree crashes down, pinning both men to the ground. Trapped together in the dark, enemies must decide what to do next — while something else moves toward them through the trees.",
    goals: [
      "Understand the plot of Saki's feud tale and the accident that traps the two enemies.",
      "Analyze how the two men change from mortal enemies to would-be friends while helpless.",
      "Trace Saki's use of dramatic irony — especially the twist ending the men never see coming.",
      "Interpret the story's view of feud, pride, and human conflict against an indifferent nature."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of dramatic irony and situational irony.",
        "Discuss: Is any quarrel worth passing down for generations? What would it take to end one?"
      ],
      during: [
        "Use The Disputed Forest to slow down and read the meeting and the reversal, step by step.",
        "Track the turn from threats to friendship — and every hint of the danger neither man notices."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the irony and the feud.",
        "Complete the Extend task to weigh the cost of the feud."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Ulrich and Georg finally decide to end their feud. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the men's new friendship to the ending. Explain how the gap between their hope and the reader's dread creates dramatic irony." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of feud and pride to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "feud", def: "A long, bitter quarrel between families or groups, often passed down for generations.", example: "The Gradwitz and Znaeym families hating each other over the forest.", nonexample: "A brief disagreement that is quickly forgiven.", context: "The feud has divided the two families for three generations." },
      { term: "interloper", def: "A person who intrudes where they have no right to be.", example: "Someone poaching on land that is not legally theirs.", nonexample: "A guest who was clearly invited.", context: "Each man sees the other as an interloper in the forest." },
      { term: "poaching", def: "Hunting or taking game illegally on someone else's land.", example: "Georg's family hunting in the forest that the courts gave to Ulrich.", nonexample: "Hunting on your own property with a license.", context: "Georg is accused of poaching on the disputed strip of land." },
      { term: "dramatic irony", def: "When the reader knows something a character does not.", example: "The reader senses danger the two trapped men do not.", nonexample: "The reader and character learning a fact at the same time.", context: "The story's ending turns on dramatic irony." },
      { term: "situational irony", def: "When what happens is the opposite of what is expected.", example: "Two enemies become friends just as death arrives.", nonexample: "An outcome that everyone predicted from the start.", context: "The twist ending is a sharp piece of situational irony." },
      { term: "reconciliation", def: "The ending of a conflict and the restoring of a friendly relationship.", example: "Ulrich and Georg agreeing to end their feud.", nonexample: "Two people deciding to hate each other even more.", context: "Their reconciliation comes only after the tree pins them down." },
      { term: "indifferent", def: "Having no concern or care about something.", example: "The storm and the wolves that care nothing for the men's quarrel.", nonexample: "A friend who worries deeply about your safety.", context: "Nature is indifferent to which family owns the forest." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "The wild, dangerous storm shaking the whole forest.", nonexample: "A detail with no link to later events.", context: "Saki uses the violent weather as foreshadowing." },
      { term: "situational reversal", def: "A sudden turn that flips a situation to its opposite.", example: "Sworn enemies deciding to help each other survive.", nonexample: "A situation that stays exactly the same throughout.", context: "The story hinges on a reversal, then a final, darker one." }
    ],

    relic: {
      name: "The Disputed Forest",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "disputed-land", name: "The Strip of Disputed Land", image: "images/disputed-land.webp",
          clues: ["A narrow strip of forest lies on the edge of Ulrich's estate.", "The courts long ago ruled the land legally belongs to the Gradwitz family.", "The Znaeym family has never accepted the ruling and keeps hunting there."],
          identify: { q: "What is the disputed land?", choices: ["A narrow strip of forest both families claim", "A large castle", "A city square", "A frozen lake"] },
          purpose: { q: "What is the land's role in the story?", choices: ["It is the cause of the whole generations-long feud", "It is where the wine is stored", "It is a marketplace", "It has no importance"] },
          significance: { q: "What does the fight over a narrow strip reveal?", choices: ["How small a thing can fuel a deadly, inherited hatred", "That the families are wealthy", "That the forest is worthless", "That the courts were unfair"] },
          reveals: "How a minor legal dispute grew into a life-and-death feud.",
          conceals: "How little the land will matter by the story's end.",
          ace: "Articulate what the land is; connect it to the feud; extend it to how small grievances can grow into lasting conflict."
        },
        {
          id: "winter-storm", name: "The Wild Winter Night", image: "images/winter-storm.webp",
          clues: ["The story takes place on a wild, windy winter night.", "The wind roars and shakes the whole forest.", "The restless weather has driven the wild creatures from their usual dens."],
          identify: { q: "What kind of night is it?", choices: ["A wild, windy winter night", "A calm summer afternoon", "A bright spring morning", "A quiet autumn dusk"] },
          purpose: { q: "What is the storm's role in the story?", choices: ["Its violence loosens the tree and stirs the forest's dangers", "It warms the men", "It ends the feud peacefully", "It has no purpose"] },
          significance: { q: "What does the restless weather foreshadow?", choices: ["That nature, not the men, will decide the outcome", "That the men will make peace easily", "That morning will bring rescue", "That the forest is safe"] },
          reveals: "Nature as a powerful force indifferent to the men's quarrel.",
          conceals: "The specific danger the storm has driven toward them.",
          ace: "Articulate the setting; connect the storm to foreshadowing; extend it to how a story's weather can hint at what is coming."
        },
        {
          id: "two-rifles", name: "The Two Rifles", image: "images/two-rifles.webp",
          clues: ["Each man patrols the forest carrying a rifle.", "Each hopes to catch the other alone and settle the feud by force.", "When they meet face to face, neither can bring himself to shoot an unarmed man in cold blood."],
          identify: { q: "Why is each man carrying a rifle?", choices: ["He hopes to catch and kill his enemy", "He is hunting deer for food", "He is target shooting", "He is guarding a festival"] },
          purpose: { q: "What is the rifles' role in the story?", choices: ["They show the men came ready to kill each other", "They are gifts they exchange", "They are used to signal for help", "They are never mentioned"] },
          significance: { q: "What does their hesitation to shoot reveal?", choices: ["Even bitter enemies feel a pull of conscience", "That the rifles are broken", "That they are cowards", "That the feud is over"] },
          reveals: "That the men are killers by intent but not quite in the act.",
          conceals: "How quickly the tree will make their weapons useless.",
          ace: "Articulate why they are armed; connect the hesitation to conscience; extend it to why people sometimes cannot carry out what they planned."
        },
        {
          id: "fallen-beech", name: "The Fallen Beech Tree", image: "images/fallen-beech.webp",
          clues: ["As the two men face each other, a great beech tree crashes down.", "Loosened by the storm, it pins both men to the ground.", "They are injured, trapped, and lying helpless side by side."],
          identify: { q: "What happens the moment the men meet?", choices: ["A storm-loosened beech tree falls and pins them both", "They shake hands", "They fire their rifles", "They run away"] },
          purpose: { q: "What is the fallen tree's role in the story?", choices: ["It traps the enemies together and forces them to talk", "It blocks the road home", "It hides the wolves", "It has no purpose"] },
          significance: { q: "What does the accident reveal about the feud?", choices: ["Nature can overrule human plans in an instant", "That the men planned it", "That the forest is dying", "That the feud was justified"] },
          reveals: "The turning point where enemies become fellow prisoners.",
          conceals: "That the trap will not be broken in time.",
          ace: "Articulate what the tree does; connect it to the theme of nature vs. human conflict; extend it to how chance can force enemies together."
        },
        {
          id: "wine-flask", name: "The Wine Flask", image: "images/wine-flask.webp",
          clues: ["Trapped and cold, Ulrich manages to reach his wine flask.", "He offers a drink to his old enemy Georg.", "This small kindness begins to melt the hatred between them."],
          identify: { q: "What does Ulrich offer Georg?", choices: ["A drink from his wine flask", "His rifle", "A map out of the forest", "A written apology"] },
          purpose: { q: "What is the flask's role in the story?", choices: ["It is the first gesture that begins their reconciliation", "It is poisoned", "It is used as a weapon", "It calls the wolves"] },
          significance: { q: "What does the offered drink reveal?", choices: ["That shared suffering can soften even old hatred", "That Ulrich is drunk", "That Georg is not really an enemy", "That the wine is valuable"] },
          reveals: "The small human gesture that turns the feud toward peace.",
          conceals: "Whether the peace will come in time to matter.",
          ace: "Articulate what the flask is; connect the gesture to reconciliation; extend it to how a small act of kindness can shift a relationship."
        },
        {
          id: "the-pact", name: "The Offer of Friendship", image: "images/the-pact.webp",
          clues: ["Lying helpless together, Ulrich offers Georg his friendship.", "Moved, Georg agrees to end the feud and become friends.", "They resolve to call for help for whichever party's men arrive first."],
          identify: { q: "What do the two men finally agree to do?", choices: ["End the feud and become friends", "Keep fighting to the death", "Split the forest in half", "Never speak again"] },
          purpose: { q: "What is the pact's role in the story?", choices: ["It is the reconciliation that sets up the ironic ending", "It ends the story happily", "It starts a new feud", "It has no purpose"] },
          significance: { q: "Why is their new friendship so important?", choices: ["It makes the twist ending more tragic and ironic", "It proves the land was worthless", "It shows they were never really enemies", "It saves them both"] },
          reveals: "That the generations-long feud could have ended in friendship.",
          conceals: "That the reconciliation comes too late.",
          ace: "Articulate the pact; connect it to situational irony; extend it to how the timing of peace can change its meaning."
        },
        {
          id: "the-shapes", name: "The Shapes on the Hillside", image: "images/the-shapes.webp",
          clues: ["The men shout together into the forest for help.", "Figures are seen hurrying down the distant hillside.", "Ulrich strains to count them, laughs with relief — then his laugh dies. The shapes are wolves."],
          identify: { q: "What are the shapes coming down the hillside?", choices: ["Wolves", "Ulrich's men", "Georg's men", "Rescuers with lanterns"] },
          purpose: { q: "What is this final image's role in the story?", choices: ["It delivers the ironic twist ending", "It rescues both men", "It ends the storm", "It starts the feud"] },
          significance: { q: "What makes the ending so ironic?", choices: ["Nature arrives just as the men make peace, dooming them", "The wolves were tame", "The men were never in danger", "The feud was finally settled fairly"] },
          reveals: "The twist that answers the title — who the true 'interlopers' are.",
          conceals: "The men's fate, left implied rather than shown.",
          ace: "Articulate what the shapes are; connect the twist to dramatic irony; extend it to how an ending can force you to rethink a whole story."
        }
      ]
    },

    ctob: {
      name: "The Feud in the Forest",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The long, bitter quarrel that has divided the two families for generations is a ______. (one word)",
          evidence: ["The two families have hated each other over the forest for a long time.", "The hatred was passed down from earlier generations.", "The word means an inherited quarrel between families, and begins with 'fe…'."],
          hints: ["An inherited quarrel between families.", "Fe…", "The word is feud."],
          answer: "feud"
        },
        {
          type: "mc",
          prompt: "What are Ulrich and Georg quarreling over?",
          options: [
            "A narrow strip of disputed forest land.",
            "A large sum of inherited money.",
            "A stolen horse.",
            "A broken promise of marriage."
          ],
          hints: ["Think about where the whole story takes place.", "Which option is the piece of land on the edge of the estate?"]
        },
        {
          type: "mc",
          prompt: "What traps the two men when they finally meet?",
          options: [
            "A storm-loosened beech tree that falls and pins them.",
            "A pack of hunters who tie them up.",
            "A sudden flood.",
            "A locked hunting lodge."
          ],
          hints: ["The wild storm has loosened something above them.", "Which option is the falling tree?"]
        },
        {
          type: "digit",
          prompt: "How many men are pinned together under the fallen tree? Enter the number.",
          evidence: ["Ulrich and Georg are the two enemies who meet in the forest.", "The tree falls on both of them at once.", "It is a count of exactly two people."],
          hints: ["Just the two enemies.", "One plus one.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the story's events in order, earliest first.",
          items: [
            "Ulrich and Georg patrol the forest hoping to kill each other.",
            "They meet face to face, but neither shoots first.",
            "A falling beech tree pins both men to the ground.",
            "Trapped together, the enemies agree to end their feud."
          ],
          hints: ["It begins with each man hunting his enemy.", "They must meet before the tree can fall on them.", "The reconciliation comes only after they are trapped."]
        },
        {
          type: "mc",
          prompt: "At the very end, the shapes hurrying down the hillside turn out to be —",
          options: [
            "wolves.",
            "Ulrich's rescue party.",
            "Georg's rescue party.",
            "a group of woodcutters."
          ],
          hints: ["Ulrich laughs with relief, then his laugh dies.", "Which option is not human help at all?"]
        }
      ]
    },

    arcade: {
      name: "Human Feud or Nature's Indifference?",
      instruction: "Saki sets a human quarrel against a wild, uncaring natural world. Sort each detail: does it belong to the HUMAN FEUD (the men's plans, pride, and choices), or to NATURE'S INDIFFERENCE (forces that care nothing for the quarrel)? Reasoning earns the points.",
      buckets: [
        { id: "feud", label: "Human feud", short: "Feud" },
        { id: "nature", label: "Nature's indifference", short: "Nature" }
      ],
      cards: [
        { text: "Two families have hated each other for three generations.", bucket: "feud", why: "The inherited quarrel is a purely human creation." },
        { text: "Each man patrols the woods hoping to kill the other.", bucket: "feud", why: "Their deadly intent is a human choice." },
        { text: "The courts ruled the land legally belongs to one family.", bucket: "feud", why: "The legal dispute is part of the human conflict." },
        { text: "The two enemies finally agree to become friends.", bucket: "feud", why: "The reconciliation is a human decision." },
        { text: "A wild storm shakes and roars through the whole forest.", bucket: "nature", why: "The weather cares nothing for the men's quarrel." },
        { text: "A great beech tree crashes down and pins both men.", bucket: "nature", why: "The falling tree is an indifferent natural accident." },
        { text: "The restless weather drives wild creatures from their dens.", bucket: "nature", why: "Nature's own rhythms set the danger in motion." },
        { text: "Wolves come down the hillside toward the trapped men.", bucket: "nature", why: "The wolves are an indifferent natural force, not rescuers." }
      ],
      followup: "The men's feud means nothing to the storm or the wolves. What is Saki suggesting about human conflict when he sets it against an indifferent nature?"
    },

    analysis: {
      mcq: [
        {
          q: "The cause of the feud between Ulrich and Georg is —",
          options: [
            "a narrow strip of disputed forest land.",
            "a debt one family owes the other.",
            "a rivalry over a woman.",
            "an old military grudge."
          ],
          why: "The whole quarrel grows from the disputed forest on the edge of the estate."
        },
        {
          q: "When the two men meet face to face, they do not shoot because —",
          options: [
            "neither can bring himself to kill an unarmed man in cold blood.",
            "their rifles are broken.",
            "a friend stops them.",
            "they run out of ammunition."
          ],
          why: "In that hesitation, conscience holds them back — and then the tree falls."
        },
        {
          q: "What forces the enemies to talk to each other?",
          options: [
            "A fallen beech tree pins them both to the ground.",
            "A snowstorm blocks the only path.",
            "Their families arrive at once.",
            "They agree to a formal truce meeting."
          ],
          why: "Trapped side by side under the tree, they can only talk."
        },
        {
          q: "By the end of their conversation, the two men decide to —",
          options: [
            "end the feud and become friends.",
            "keep fighting to the death.",
            "divide the forest between them.",
            "take the case back to court."
          ],
          why: "Moved by their shared helplessness and Ulrich's offer, they reconcile."
        },
        {
          q: "The story's twist ending reveals that the approaching shapes are —",
          options: [
            "wolves, not rescuers.",
            "Ulrich's loyal men.",
            "Georg's loyal men.",
            "a group of travelers."
          ],
          why: "The dramatic irony lands when the hoped-for rescue turns out to be wolves."
        }
      ],
      short: [
        "Choose one artifact from The Disputed Forest. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the story uses dramatic irony in its ending and how it builds suspense.",
        "The men make peace only after the tree traps them, and it comes too late. What does this reveal about the feud — and about how they wasted years as enemies?"
      ],
      paragraph: "Write an evidence-based paragraph. What is Saki suggesting about human conflict when he sets a generations-old feud against an indifferent nature? Make a claim and support it with specific details about the setting, the reconciliation, and the ending.",
      aceReflection: "Articulate what the story suggests about feuds and pride in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Cost of the Feud",
      prompt: "Ulrich and Georg end their feud — but only after it is too late to matter. Choose another story, film, or real situation about a long-running conflict. Explain the connection with evidence: what was the quarrel, what finally changed it, and what did the conflict truly cost the people in it?",
      format: "A short evidence-based comparison connecting the story's view of feud and reconciliation to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Ulrich and Georg decide to end their feud in The Interlopers. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Interlopers. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Interlopers because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Interlopers: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of feud and reconciliation to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Interlopers for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Saki's The Interlopers as a study of irony, the futility of feud, and human conflict against an indifferent nature. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages (the feud, the flask, and the ending are described, not quoted), invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (published 1919 in The Toys of Peace) is public domain. Confirm the linked Project Gutenberg edition and any audiobook recording before assigning.",
        "Content: a deadly generations-old feud whose ending implies the two men will be killed by wolves. Suspenseful and dark, but not graphic. Suitable for middle and high school; preview and follow local policy.",
        "Details here were checked against the story (the enemies Ulrich von Gradwitz and Georg Znaeym; the generations-old feud over a narrow strip of disputed forest on the edge of Ulrich's estate in the eastern Carpathian Mountains; the land ruled legally Ulrich's but poached by the Znaeyms; the wild winter night; each man hunting the other with a rifle; their hesitation to shoot; the storm-loosened beech tree pinning both men; Ulrich's wine flask and offer of friendship; their agreement to end the feud and call for the first party's men; the shapes on the hillside revealed as wolves). Famous lines and phrases are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–10 ELAR TEKS (19 TAC Ch. 110) strands on plot, irony, theme, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.9-10.1", "RL.9-10.2", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
