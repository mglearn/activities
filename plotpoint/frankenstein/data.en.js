/* PlotPoint — Frankenstein (Mary Shelley).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; details limited to widely established
   facts from the 1818/1831 novel; standards codes are only those given by the build
   plan (Common Core) — TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in
   every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "frankenstein",
  storageKey: "plotpoint.frankenstein.v1",

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
    "vocab.title": "Words for Frankenstein",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Ingolstadt Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this document or object?",
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
    "ctob.title": "The Layered Confession",
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
    "arcade.title": "Born a Monster, or Made One?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Sources to weigh",
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
    "extend.title": "Tell It in Documents",
    "extend.format": "Format",
    "extend.evidence": "The epistolary technique I am building on",
    "extend.transfers": "What transfers to my modern account",
    "extend.changes": "What changes with modern documents",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My found-document account",
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
    "print.item.extend": "Found-document organizer",
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
      title: "Frankenstein; or, The Modern Prometheus",
      author: "Mary Shelley",
      grades: "Grades 9–12",
      genre: "Gothic · Science fiction · Epistolary novel",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1818; 1831 revision)",
      textAccess: "This is a public-domain novel; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published anonymously in 1818 and revised in 1831; both editions are public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "Gothic and science-fiction themes of death, grief, isolation, and the ethics of creation. Preview for maturity and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/84",
      audio: "https://librivox.org/frankenstein-edition-1831-by-mary-shelley-wollstonecraft/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Frankenstein — a lamp-lit workshop and a distant Arctic horizon."
    },
    hook: "The story reaches us in layers: an Arctic explorer writes letters home, a dying man tells him a confession, and inside that confession a rejected creature tells his own story. Three narrators, one question — who is truly the monster?",
    goals: [
      "Analyze how Shelley nests three narrators (Walton, Victor, the Creature) inside an epistolary frame and why that layering matters.",
      "Trace the themes of ambition, responsibility, and isolation across the creator and the creature.",
      "Evaluate the Creature's nature-versus-nurture question, weighing whether he is born a monster or made one by rejection.",
      "Connect the Promethean overreach and the sublime landscapes to the novel's meaning, and transfer the layered-narrative technique to a new situation."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a framed, nested narrative told partly through letters.",
        "Discuss: What does a creator owe to what they create? Is a being's character born or shaped by how it is treated?"
      ],
      during: [
        "Use the Relic Room to examine one document or object at a time.",
        "Track who is narrating each section, and how each narrator's sympathy shifts your judgment."
      ],
      after: [
        "Run the breakout, arcade, and analysis to build an evidence-based reading of the Creature's nature.",
        "Complete the Extend task to build your own layered found-document account."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Shelley layers three narrators. Include one detail from the novel that shows the effect on how you judge Victor or the Creature." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the novel's themes (for example, ambition and responsibility, or isolation and rejection). Explain how they reinforce each other in Victor's or the Creature's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the question of a creator's responsibility to a modern act of creation (a technology, an invention, an idea). Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "epistolary", def: "Told through documents such as letters and reports rather than by a single narrator.", example: "A story delivered as an explorer's letters to his sister.", nonexample: "A story told straight through by one all-knowing narrator.", context: "Frankenstein opens with Walton's epistolary letters that frame the whole novel." },
      { term: "frame narrative", def: "A story that surrounds and introduces another story told inside it.", example: "Walton's letters framing Victor's confession, which frames the Creature's tale.", nonexample: "A single plot with no story-within-a-story.", context: "Shelley builds a frame narrative with three nested narrators." },
      { term: "Promethean", def: "Relating to daring overreach that seizes a godlike power, like the Titan Prometheus who stole fire.", example: "A scientist who dares to create life itself.", nonexample: "A person content to leave nature untouched.", context: "The subtitle 'The Modern Prometheus' marks Victor's Promethean ambition." },
      { term: "sublime", def: "A quality of awe-inspiring grandeur, often in vast or wild nature, mixing beauty with terror.", example: "Towering Alpine glaciers that overwhelm the viewer.", nonexample: "A tidy, ordinary garden path.", context: "The sublime Alpine and Arctic landscapes mirror the characters' inner storms." },
      { term: "wretch", def: "A miserable, unfortunate, or despised being.", example: "The abandoned creature, called a wretch by those who fear him.", nonexample: "A beloved, welcomed guest.", context: "Victor repeatedly calls his creation a 'wretch' and a 'daemon.'" },
      { term: "benevolent", def: "Kind, well-meaning, and wishing good to others.", example: "A being who longs to help the family he secretly watches.", nonexample: "Someone who delights in cruelty.", context: "The Creature begins benevolent and childlike before rejection embitters him." },
      { term: "isolation", def: "The state of being cut off, alone, and without companionship.", example: "A being shunned by everyone he meets.", nonexample: "A person surrounded by accepting friends.", context: "Isolation drives both Victor's obsession and the Creature's despair." },
      { term: "ambition", def: "A strong desire to achieve something great, sometimes beyond wise limits.", example: "A student determined to discover the secret of life.", nonexample: "A person with no goals at all.", context: "Unchecked ambition leads Victor to a discovery he cannot control." },
      { term: "natural philosophy", def: "The older term for the study of nature and the physical sciences, including chemistry.", example: "University lectures on the workings of the natural world.", nonexample: "A course in painting or music.", context: "Victor studies natural philosophy at the University of Ingolstadt." },
      { term: "animate", def: "To bring to life or give the spark of life to something.", example: "Giving motion and breath to an assembled being.", nonexample: "Leaving a statue lifeless and still.", context: "Victor animates his creation, then flees in horror at what he has made." },
      { term: "remorse", def: "Deep regret or guilt for a wrong that one has done.", example: "Grief and guilt over harm one has caused.", nonexample: "Cheerful indifference to one's actions.", context: "By the end, the Creature expresses remorse over the deaths he caused." },
      { term: "vengeful", def: "Seeking to harm someone in return for a wrong, real or perceived.", example: "A rejected being who turns to revenge against his maker.", nonexample: "A forgiving person who lets a grievance go.", context: "The Creature grows vengeful only after repeated cruelty and rejection." }
    ],

    relic: {
      name: "The Ingolstadt Archive",
      intro: "Seven instructional reconstructions of the documents, places, and objects through which Frankenstein's story reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "letters", name: "Walton's Arctic Letters", image: "images/letters.webp",
          clues: ["An explorer writes these to his sister back home as his ship sails north.", "They form the outermost layer of the story.", "It is aboard this ice-bound ship that a dying stranger is taken in."],
          identify: { q: "What are these documents?", choices: ["Robert Walton's letters to his sister from the Arctic", "Victor's laboratory notebook", "The Creature's written confession", "A Geneva newspaper report"] },
          purpose: { q: "What is their purpose?", choices: ["To record Walton's expedition and frame the whole story", "To advertise a voyage to passengers", "To bill Victor's tuition", "To map the streets of Geneva"] },
          significance: { q: "What is their literary significance?", choices: ["They create the outer frame through which Victor's and the Creature's stories reach us", "They prove Walton is the true monster", "They show the Arctic is warm and calm", "They end the novel in Geneva"] },
          reveals: "How Shelley uses an epistolary frame so the confession reaches us through a sympathetic outside witness.",
          conceals: "It hides how much Walton himself shares Victor's dangerous ambition until the tale forces him to see it.",
          ace: "Articulate why the letters open the novel; connect Walton's ambition to Victor's; extend it to how a framing narrator shapes our trust in a story."
        },
        {
          id: "workshop", name: "Victor's Workshop at Ingolstadt", image: "images/workshop.webp",
          clues: ["A young student assembles a being here from dead matter.", "The novel keeps the exact method deliberately vague.", "In this room the 'principle of life' is finally discovered and used."],
          identify: { q: "What is this place?", choices: ["Victor's makeshift workshop where he assembles his creation", "A hospital ward in Geneva", "Walton's ship's cabin", "The De Lacey cottage"] },
          purpose: { q: "What was its purpose for Victor?", choices: ["A private space to pursue and complete his forbidden experiment", "A classroom for other students", "A shop selling instruments", "A church for worship"] },
          significance: { q: "What is its literary significance?", choices: ["It stages the Promethean overreach — the daring act of creating life", "It proves Victor is a skilled carpenter", "It shows science is always harmless", "It sets the ship's route north"] },
          reveals: "The ambition and obsession that drive Victor to seize a power meant to be beyond humans.",
          conceals: "It hides the method itself — Shelley leaves the 'how' vague, keeping the focus on consequences, not mechanics.",
          ace: "Articulate what the workshop represents; connect it to the Promethean theme; extend it to how modern creators face limits they choose to cross or respect."
        },
        {
          id: "animation", name: "The Moment of Animation and Abandonment", image: "images/animation.webp",
          clues: ["The creation opens its eyes and draws breath for the first time.", "Its maker, horrified by its appearance, immediately flees from it.", "This instant of abandonment sets everything that follows in motion."],
          identify: { q: "What moment does this reconstruct?", choices: ["The instant Victor animates his creation and then abandons it", "The Creature's peaceful death", "Walton reaching the North Pole", "Elizabeth's wedding"] },
          purpose: { q: "What does this scene establish?", choices: ["The creator's failure of responsibility at the very first moment of life", "That the Creature is welcomed with joy", "That Victor is a caring parent", "That the experiment failed to work"] },
          significance: { q: "What is its literary significance?", choices: ["Victor's immediate abandonment plants the theme of a creator's responsibility to what he makes", "It proves the Creature was born evil", "It shows the workshop was well lit", "It ends Walton's voyage"] },
          reveals: "The pivotal failure — Victor rejects his creation on sight, before it has done anything at all.",
          conceals: "It hides what the newly living being feels in that moment; the reader learns that only later, in the Creature's own narrative.",
          ace: "Articulate why the abandonment matters; connect it to the responsibility theme; extend it to the duties a creator owes at the moment of creation."
        },
        {
          id: "cottage", name: "The De Lacey Cottage and Paradise Lost", image: "images/cottage.webp",
          clues: ["A being hides near this cottage and secretly watches an exiled family.", "By observing them he teaches himself to speak and read.", "Among the books he encounters is Milton's Paradise Lost."],
          identify: { q: "What is this place and object?", choices: ["The De Lacey cottage where the Creature secretly educates himself", "Victor's family home in Geneva", "The University of Ingolstadt", "Walton's ship"] },
          purpose: { q: "What is its purpose in the story?", choices: ["To show the Creature learning language, feeling, and longing for acceptance", "To prove the Creature cannot learn", "To record a property sale", "To chart the Arctic ice"] },
          significance: { q: "What is its literary significance?", choices: ["It shows the Creature begins benevolent and self-taught, sympathizing before he is rejected", "It proves the Creature was always violent", "It shows books are useless", "It ends the frame narrative"] },
          reveals: "That the Creature is intelligent, eloquent, and yearning for kindness — central to the nurture reading.",
          conceals: "It hides, from the family, the watcher's true nature — until he reveals himself and they flee in terror.",
          ace: "Articulate what the cottage scenes reveal about the Creature; connect his reading to his growing self-understanding; extend it to how rejection can shape a person's path."
        },
        {
          id: "trial", name: "William's Death and Justine's Wrongful Execution", image: "images/trial.webp",
          clues: ["Victor's young brother is killed, the Creature's first act of revenge.", "A loyal servant is accused of the crime she did not commit.", "She is wrongly executed while Victor stays silent about the truth."],
          identify: { q: "What events does this reconstruct?", choices: ["The murder of William and the wrongful execution of Justine Moritz", "The destruction of the female creature", "Elizabeth's wedding night", "Walton's rescue of Victor"] },
          purpose: { q: "What do these events establish?", choices: ["The spreading, innocent cost of Victor's silence and the Creature's revenge", "That Justine is truly guilty", "That the Creature is harmless", "That Victor confesses at once"] },
          significance: { q: "What is its literary significance?", choices: ["Victor's failure to speak makes him complicit, deepening the theme of responsibility", "It proves the justice system is flawless", "It shows William survives", "It ends the novel happily"] },
          reveals: "How Victor's concealment lets an innocent person die — his guilt is not only in creating but in hiding.",
          conceals: "It hides the truth from the court, since Victor cannot or will not explain what really killed his brother.",
          ace: "Articulate the injustice of Justine's death; connect it to Victor's silence and responsibility; extend it to how withheld truth can harm the innocent."
        },
        {
          id: "female", name: "The Half-Finished Female Companion", image: "images/female.webp",
          clues: ["The Creature demands that Victor make him a mate so he need not be alone.", "Victor begins the second creature, then stops.", "Fearing they would breed 'a race of devils,' he destroys the unfinished work."],
          identify: { q: "What is this object?", choices: ["The half-finished female companion Victor destroys", "Victor's first creation", "A statue in Geneva", "Walton's ship's figurehead"] },
          purpose: { q: "What was its intended purpose?", choices: ["A companion to end the Creature's isolation, as he demanded", "A gift for Elizabeth", "A servant for the De Laceys", "Ballast for Walton's ship"] },
          significance: { q: "What is its literary significance?", choices: ["Victor's destruction of it weighs companionship against fear of consequences, and triggers the Creature's final revenge", "It proves the Creature never wanted a companion", "It shows Victor keeps his promises", "It ends the Arctic pursuit"] },
          reveals: "The Creature's deepest wish — to not be alone — and Victor's fear of the consequences of granting it.",
          conceals: "It hides whether the second creature would truly have been dangerous; the fear is Victor's, and it is never tested.",
          ace: "Articulate why the Creature wants a companion; connect it to the isolation theme; extend it to how fear of consequences can justify or excuse breaking a promise."
        },
        {
          id: "arctic", name: "The Final Arctic Pursuit", image: "images/arctic.webp",
          clues: ["After his bride is killed, Victor chases his creation across frozen wastes.", "Exhausted, he is taken aboard an ice-bound ship.", "There he tells his tale and dies, and the Creature appears over his body."],
          identify: { q: "What does this scene reconstruct?", choices: ["Victor's Arctic pursuit of the Creature, ending aboard Walton's ship", "Victor's first day at Ingolstadt", "The wedding in Geneva", "The De Lacey cottage"] },
          purpose: { q: "What does this pursuit show?", choices: ["Creator and creature locked together by revenge to the very end", "That Victor forgives the Creature", "That the Creature is easily caught", "That Walton abandons his voyage in fear"] },
          significance: { q: "What is its literary significance?", choices: ["It closes the frame, as the Creature mourns Victor, voices remorse, and departs to end his own life", "It proves the Creature feels nothing", "It shows the Arctic is safe", "It begins the confession"] },
          reveals: "That creator and creature are bound together — and that the Creature's final words are grief, not triumph.",
          conceals: "It leaves the Creature's actual end offstage; he departs into the ice, and the reader does not witness it.",
          ace: "Articulate what the pursuit reveals about Victor and the Creature; connect it to isolation and revenge; extend it to how the Creature's remorse complicates who the monster is."
        }
      ]
    },

    ctob: {
      name: "The Layered Confession",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many narrators tell their stories, nested inside one another, across the novel? Enter the number.",
          evidence: ["An Arctic explorer writes the outermost letters.", "Inside those letters, a dying man tells his whole confession.", "Inside that confession, the rejected creature tells his own story in turn."],
          hints: ["Count the explorer, the creator, and the creature.", "It is a small odd number, more than two.", "The number is 3."],
          answer: "3"
        },
        {
          type: "word",
          prompt: "At which university does Victor study natural philosophy and complete his experiment? (one word)",
          evidence: ["Victor leaves his home in Geneva to attend a university abroad.", "There he studies chemistry and natural philosophy.", "The city's name begins with 'I.'"],
          hints: ["A city in Bavaria.", "It begins with 'Ingol…'.", "The university is at Ingolstadt."],
          answer: "Ingolstadt"
        },
        {
          type: "word",
          prompt: "By secretly watching the De Lacey family, the Creature teaches himself to do what — the same skill he uses to read? (one word)",
          evidence: ["The Creature hides near a cottage and observes a family for a long time.", "By listening and watching, he gains the ability to communicate.", "He then uses this same skill to read books like Paradise Lost."],
          hints: ["It is what lets him understand and use words.", "Reading is one form of it; speaking is another.", "He teaches himself to read (and to speak)."],
          answer: "read"
        },
        {
          type: "mc",
          prompt: "A common misconception the novel is used to correct is that —",
          options: [
            "'Frankenstein' is the CREATOR, not the monster; the Creature is never named.",
            "Frankenstein is the name of the monster, not the scientist.",
            "the Creature is named 'Adam' in the book.",
            "there is a lab assistant named Igor in the novel."
          ],
          hints: ["Think about who Victor Frankenstein actually is.", "Which option correctly separates the maker from the made?"]
        },
        {
          type: "sequence",
          prompt: "Put these events of the novel in order, earliest first.",
          items: [
            "Victor animates his creation at Ingolstadt and abandons it.",
            "The Creature educates himself by watching the De Lacey family.",
            "Victor destroys the half-finished female companion.",
            "The Creature kills Elizabeth on the wedding night."
          ],
          hints: ["The act of creation comes first.", "The Creature's self-education comes before he demands a mate.", "The wedding-night killing comes last."]
        },
        {
          type: "mc",
          prompt: "Why does layering three narrators change how we judge the Creature?",
          options: [
            "Hearing the Creature's own story invites sympathy that Victor's account alone would not.",
            "It hides the Creature's actions from the reader entirely.",
            "It proves Walton is the real villain.",
            "It removes all the novel's themes."
          ],
          hints: ["Think about what the Creature's own narrative adds.", "Which option is about sympathy and perspective?"]
        }
      ]
    },

    arcade: {
      name: "Born a Monster, or Made One?",
      instruction: "One of the novel's central debates: is the Creature inherently evil (NATURE), or made vengeful by rejection and cruelty (NURTURE)? Sort each statement or piece of evidence into the reading it best supports. There is room to argue — but sort by which reading the evidence most directly backs. Reasoning earns the points.",
      buckets: [
        { id: "nature", label: "Born a monster (Nature)", short: "Nature" },
        { id: "nurture", label: "Made one by rejection (Nurture)", short: "Nurture" }
      ],
      cards: [
        { text: "The Creature begins benevolent and childlike, longing to do good.", bucket: "nurture", why: "His original kindness suggests his later violence is learned, not inborn." },
        { text: "He teaches himself to read and feels deep sympathy for the De Lacey family.", bucket: "nurture", why: "Capacity for empathy and learning points to a shaped character, not a born monster." },
        { text: "He turns vengeful only after repeated rejection because of his appearance.", bucket: "nurture", why: "The timing ties his violence directly to cruelty he suffers." },
        { text: "At the end he expresses genuine remorse over the deaths he caused.", bucket: "nurture", why: "Remorse implies a moral sense that cruelty distorted rather than a nature that never had one." },
        { text: "He commits real murders, including a child and an innocent bride.", bucket: "nature", why: "The severity of his acts can be read as evidence of an inherently monstrous will." },
        { text: "Everyone who sees him recoils in instant terror at his appearance.", bucket: "nature", why: "A reader might take the universal horror as a sign he is monstrous by nature." },
        { text: "He deliberately frames Justine for a murder she did not commit.", bucket: "nature", why: "Calculated cruelty toward an innocent can support the born-evil reading." },
        { text: "He warns Victor, 'I will be with you on your wedding night,' then kills Elizabeth.", bucket: "nature", why: "Premeditated, targeted revenge can be read as a settled malevolence." }
      ],
      followup: "The evidence pulls both ways. Does Shelley finally lean toward nature or nurture — or does she leave the question open on purpose? Use specific moments to defend your reading, and say what changes if the Creature is made, not born."
    },

    analysis: {
      mcq: [
        {
          q: "The structure of Frankenstein is best described as —",
          options: [
            "a frame narrative with three nested narrators inside an epistolary opening.",
            "a single first-person memoir with one narrator throughout.",
            "a stage play written entirely in dialogue.",
            "a poem told in rhyming stanzas."
          ],
          why: "Walton's letters frame Victor's confession, which in turn frames the Creature's own narrative."
        },
        {
          q: "The subtitle 'The Modern Prometheus' points mainly to —",
          options: [
            "Victor's daring overreach in seizing a godlike power to create life.",
            "Victor's skill as a painter.",
            "the ship's route through the Arctic.",
            "the Creature's love of music."
          ],
          why: "Like Prometheus stealing fire, Victor takes a power meant to be beyond humans — and is punished for it."
        },
        {
          q: "The Creature's time observing the De Lacey family mainly shows that he —",
          options: [
            "begins benevolent and intelligent, learning language and longing for acceptance.",
            "is incapable of learning anything.",
            "was violent from the first moment of life.",
            "never desired any human contact."
          ],
          why: "He teaches himself to speak and read and sympathizes with the family, supporting the nurture reading."
        },
        {
          q: "Victor's abandonment of his creation at the moment of animation is important because it —",
          options: [
            "raises the theme of a creator's responsibility to what he makes.",
            "proves the experiment failed.",
            "shows Victor is a devoted parent.",
            "ends the novel."
          ],
          why: "He rejects the being on sight, before it has acted — the failure that sets the tragedy in motion."
        },
        {
          q: "The sublime Alpine and Arctic landscapes in the novel mainly work to —",
          options: [
            "mirror the characters' emotional extremes and the story's awe and dread.",
            "provide comic relief.",
            "serve as a practical travel guide.",
            "explain the characters' finances."
          ],
          why: "Shelley uses vast, terrible natural grandeur to echo the inner storms of Victor and the Creature."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops the theme of ambition, responsibility, or isolation.",
        "Weigh the nature-versus-nurture question. Using specific evidence, argue whether the Creature is born a monster or made one — and acknowledge the strongest point on the other side.",
        "Explain how the three-narrator structure changes your judgment of Victor or the Creature. What does hearing the Creature's own voice add?"
      ],
      paragraph: "Write an evidence-based paragraph. Who bears more responsibility for the tragedy — Victor for creating and abandoning the Creature, or the Creature for the murders he commits? Make a claim and support it with specific moments from the novel.",
      aceReflection: "Articulate the novel's central question about creation. Connect two themes (such as ambition and responsibility). Extend the question of a creator's duty to a modern act of creation, and name where the comparison breaks down."
    },

    extend: {
      name: "Tell It in Documents",
      prompt: "Shelley layers narrators and frames one story inside another so that our sympathy shifts as new voices speak. Choose a modern conflict where two sides each have a story — a dispute, a controversial invention, a misunderstood figure — and tell it through 3–4 nested 'found documents' (a letter, a confession, a firsthand account, a report). Let a later voice complicate the first, the way the Creature's story complicates Victor's.",
      format: "A short nested found-document sequence (3–4 pieces), plus a note on what the layered form adds that a single narrator could not."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Frankenstein is told through three nested narrators. Do not answer for me. Ask me one question at a time that helps me explain the frame-narrative technique in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Frankenstein. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in Frankenstein because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about Frankenstein: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply Frankenstein's question about a creator's responsibility to a modern act of creation, [event or invention]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of Frankenstein's nature-versus-nurture question for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Frankenstein's nested frame structure and its themes of ambition, responsibility, isolation, and nature versus nurture. It never reproduces Shelley's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "This room works for BOTH the 1818 and the 1831 editions. Chapter numbering differs between them; the linked Project Gutenberg text (#84) is the 1831 version. Confirm which edition your class uses.",
        "Both the 1818 first edition and the 1831 revision are public domain. Some annotated or scholarly editions carry their own copyright — verify your edition.",
        "Details here come from the novel (Walton's Arctic frame; Victor's study at Ingolstadt; the animation and abandonment; the De Lacey self-education; William, Justine, Clerval, and Elizabeth; the destroyed female companion; the Arctic pursuit). Confirm them against your edition, since some specifics vary between the 1818 and 1831 texts.",
        "Emphasize the common misconception: 'Frankenstein' is the creator, not the Creature, who is never named. Avoid importing film inventions (no 'Igor,' no lab catchphrase).",
        "Frankenstein carries mature themes of death, grief, and isolation. Preview for maturity and align with local policy.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, multiple-genre, and author's-craft strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.5", "RL.11-12.5", "RL.9-10.6", "RL.11-12.6", "RL.9-10.7", "RL.11-12.7"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
