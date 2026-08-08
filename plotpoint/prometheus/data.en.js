/* PlotPoint — "Prometheus" by Johann Wolfgang von Goethe (written c.1772–74, published 1789).
   PUBLIC DOMAIN. Studied here through a public-domain English translation.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: Goethe's original German poem is in the public domain, and this room
   refers to a PUBLIC-DOMAIN English translation. "Prometheus" is studied here as
   LITERATURE — a defiant dramatic monologue and free-verse ode of Sturm und Drang /
   Romantic rebellion — in a neutral, academic frame consistent with the Texas required
   literary-works list (19 TAC §110.70, English II / high school). Because translations
   differ, districts should use their specified public-domain English edition. The room
   paraphrases, quotes only brief public-domain phrases where a close reading needs them,
   and reproduces no copyrighted translation. The poem defies the gods (Zeus); it is
   treated as a mythological and literary text, comparatively rather than devotionally.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "prometheus",
  storageKey: "plotpoint.prometheus.v1",

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

    "nav.enter": "Enter the Poem", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Poem",
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
    "enter.readListen": "Read — free",
    "enter.readListenTitle": "Get the full text",
    "enter.readListenNote": "Goethe's poem is in the public domain. Use your class's specified English translation or any public-domain English translation.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Prometheus",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Titan's Workshop",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the poem",
    "relic.q.significance": "What it reveals about the poem's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Path of Defiance",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the poem closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Gods or Titan?",
    "arcade.default": "Sort each claim by whose power the poem asserts.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Images to sort",
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
    "extend.title": "One Image, One Idea",
    "extend.format": "Format",
    "extend.evidence": "The image from the poem I am building on",
    "extend.transfers": "What transfers to another text or situation",
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
    "print.item.relic": "Titan's Workshop evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Defiance-transfer organizer",
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
    "path.complete": "Complete Study", "path.complete.time": "45–75 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, close-reading breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      gutenberg: "https://en.wikisource.org/wiki/Prometheus_(Goethe)",
      title: "Prometheus",
      author: "Johann Wolfgang von Goethe",
      grades: "English II",
      genre: "Poetry · Ode · Dramatic monologue",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (public-domain English translation)",
      textAccess: "A public-domain poem; use your class's copy or a public-domain English translation.",
      copyright: "Goethe's poem (written in the 1770s, published 1789) is in the public domain; use or refer to a PUBLIC-DOMAIN English translation. This room studies it as literature, paraphrasing and quoting only brief public-domain phrases. Because translations differ, a district should use its specified public-domain English edition; no copyrighted translation is reproduced.",
      contentNote: "The Texas required literary-works list was adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than 2030–2031. The state lists a specific version, so a district should use its specified public-domain English translation. Note that the poem defies the gods (Zeus); it is studied here as literature — a dramatic monologue of Romantic rebellion — not devotionally. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Goethe's 'Prometheus' — a defiant Titan standing at a workbench of raw clay figures, arms raised toward a storm-clouded sky, unmoved by the lightning above."
    },
    hook: "One voice, speaking straight up at the sky — and refusing to bow. In Goethe's 'Prometheus,' the Titan turns to Zeus, ruler of the gods, and tells him to keep his thunder to himself. The gods, he says, would starve without the prayers of hopeful fools; he owes them nothing. He forged his own strength through fire and time, and now he sits shaping humans in his own image — a whole race taught to defy the gods, just as he does. Read it as a poem, and watch defiance become an argument.",
    goals: [
      "Understand 'Prometheus' as a dramatic monologue — the whole poem is one speaker (the Titan Prometheus) addressing an unseen listener (Zeus).",
      "Analyze the poem's defiant, rebellious tone and how apostrophe, rhetorical questions, and anaphora build it line by line.",
      "Trace the argument: dismiss the gods' power, deny owing them anything, recall the youth no one helped, then claim self-reliance and the power to create.",
      "Interpret the theme of defiance against tyrannical authority and human self-reliance — and why this poem became a landmark of Sturm und Drang and Romantic rebellion."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of a dramatic monologue and apostrophe (speaking directly to someone absent).",
        "Discuss: what changes in a poem when a speaker argues with a powerful figure instead of describing them?"
      ],
      during: [
        "Use the Titan's Workshop to slow down and read the poem image by image.",
        "Track the argument: from mocking Zeus's power, to owing the gods nothing, to forging the self, to creating a defiant human race."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the poem's argument and its rebellious tone.",
        "Complete the Extend task to carry the defiance-of-authority theme to another text or myth."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Prometheus is telling Zeus, and why he says he owes the gods nothing. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two moments in the poem — for example the gods fed by prayer and Prometheus's 'holy glowing heart.' Explain how placing the gods' weakness beside the Titan's strength builds the poem's argument." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's stance — a lone figure defying a powerful authority and relying on the self — to another text, myth, or real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "dramatic monologue", def: "A poem in which a single speaker addresses a silent or absent listener, revealing character through the speech.", example: "Prometheus speaking the whole poem straight at Zeus.", nonexample: "A poem narrated by an outside voice describing many characters.", context: "'Prometheus' is a dramatic monologue: one Titan, one long speech." },
      { term: "apostrophe", def: "A figure of speech in which a speaker directly addresses someone absent, dead, or unable to answer.", example: "Prometheus commanding Zeus, who never replies.", nonexample: "Two characters trading lines of dialogue.", context: "The poem opens with apostrophe — the Titan speaks to Zeus, who is not there to answer." },
      { term: "ode", def: "A lyric poem of serious feeling, often addressed to a person or idea; here in free verse rather than fixed stanzas.", example: "A sustained, elevated poem spoken with strong emotion.", nonexample: "A short, light limerick.", context: "'Prometheus' is a free-verse ode of defiance." },
      { term: "allusion", def: "A reference to a well-known myth, text, person, or event outside the poem.", example: "Naming Prometheus, the Titan who gave humans fire.", nonexample: "A made-up character with no source outside the poem.", context: "The poem is one long allusion to the Prometheus myth." },
      { term: "tone", def: "The speaker's attitude toward the subject, felt through word choice and rhythm.", example: "The scornful, defiant tone as Prometheus mocks Zeus.", nonexample: "A gentle, soothing lullaby tone.", context: "The tone here is defiant and rebellious from the first line." },
      { term: "theme", def: "The central idea or insight a work develops about life or the world.", example: "Defiance of tyrannical authority and human self-reliance.", nonexample: "The mere subject 'gods' with no idea attached.", context: "A central theme is rebellion against unjust authority." },
      { term: "anaphora", def: "The repetition of the same word or phrase at the start of successive lines or clauses.", example: "Listing what humans will do: to suffer, to weep, to enjoy, to rejoice.", nonexample: "Lines that each begin with a different word.", context: "Anaphora drives the poem's defiant, building rhythm." },
      { term: "Titan", def: "In Greek myth, one of an older race of powerful gods; Prometheus is a Titan who defies the Olympian Zeus.", example: "Prometheus, a Titan, standing against the ruler of the gods.", nonexample: "An ordinary mortal with no divine power.", context: "As a Titan, Prometheus is powerful enough to challenge Zeus." },
      { term: "defiance", def: "Bold, open resistance to an authority or power.", example: "Telling Zeus he owes the gods nothing.", nonexample: "Quietly obeying every command.", context: "The whole poem is an act of defiance against the gods." }
    ],

    relic: {
      name: "The Titan's Workshop",
      intro: "Seven instructional reconstructions of the poem's key moments — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "address", name: "The Address to Zeus", image: "images/address.webp",
          clues: ["The poem opens by speaking directly to Zeus (Jove), the ruler of the gods.", "Zeus is spoken to but never answers — the whole poem is one side of an argument.", "This direct address frames everything that follows."],
          identify: { q: "How does the poem open?", choices: ["Prometheus directly addresses Zeus, the ruler of the gods", "A narrator describes Prometheus from the outside", "Two gods hold a conversation", "The poem describes a quiet landscape"] },
          purpose: { q: "What does this direct address create?", choices: ["A dramatic monologue and an apostrophe — a defiant speech aimed at an unanswering listener", "A calm, descriptive scene", "A dialogue where Zeus replies", "A neutral report of events"] },
          significance: { q: "Why speak straight at Zeus rather than about him?", choices: ["Confronting the powerful figure face to face makes the defiance direct and personal", "It hides the speaker's feelings", "It shows respect and obedience", "It changes the subject away from Zeus"] },
          reveals: "The poem's form: a dramatic monologue built on apostrophe.",
          conceals: "How the silence of Zeus makes the Titan's voice the only power in the poem.",
          ace: "Articulate whom Prometheus addresses; connect it to the idea of apostrophe; extend it to why confronting power directly feels bolder than describing it."
        },
        {
          id: "heavens", name: "Cover Your Heavens — Vent Your Power on Oaks", image: "images/heavens.webp",
          clues: ["Prometheus tells Zeus to cover his heavens with clouds.", "He compares Zeus's thunder to a boy beheading thistles — venting power on oaks and mountaintops.", "The point is to shrink Zeus's power to something almost childish."],
          identify: { q: "What does Prometheus tell Zeus to do with his power?", choices: ["Cover the sky with clouds and vent his thunder on oaks and mountaintops", "Come down and rule the earth", "Grant Prometheus a gift", "Destroy all of humankind"] },
          purpose: { q: "Why compare Zeus's power to a boy beheading thistles?", choices: ["To belittle it — great force spent on nothing that matters", "To praise its precision", "To warn readers to fear it", "To describe a real storm neutrally"] },
          significance: { q: "What does this mockery establish about the poem's tone?", choices: ["A scornful, defiant tone that refuses to be impressed by the gods", "A reverent, worshipful tone", "A frightened, pleading tone", "A confused, uncertain tone"] },
          reveals: "The Titan's contempt: Zeus's power is real but, to Prometheus, small.",
          conceals: "How mockery, not fear, sets the poem's rebellious tone.",
          ace: "Articulate what Prometheus dismisses; connect the thistle image to the poem's tone; extend it to how belittling a power can be a form of resistance."
        },
        {
          id: "sacrifice", name: "The Gods Fed by Sacrifice and Prayer", image: "images/sacrifice.webp",
          clues: ["Prometheus says the gods are pitifully nourished by sacrifices and prayers.", "He claims they would starve if children and beggars were not full of hope.", "The gods' power is shown to depend on human belief."],
          identify: { q: "On what, does Prometheus say, do the gods depend?", choices: ["The sacrifices and prayers of hopeful people", "Their own endless strength", "The obedience of other gods", "The fire Prometheus gave humans"] },
          purpose: { q: "What is the effect of saying the gods would 'starve'?", choices: ["It reverses the usual order — the gods need humans, not the other way around", "It shows the gods as generous providers", "It proves the gods are all-powerful", "It changes the subject to farming"] },
          significance: { q: "What does this dependence reveal about the gods?", choices: ["Their power is borrowed from human hope, so it is not truly their own", "They created human hope from nothing", "They are indifferent to humans", "They are stronger than Prometheus"] },
          reveals: "The gods' weakness: their power is fed by the hope of fools.",
          conceals: "How the poem quietly moves power away from the gods and toward humans.",
          ace: "Articulate what feeds the gods; connect their hunger to their weakness; extend it to how any authority can depend on the belief of those it rules."
        },
        {
          id: "youth", name: "Prometheus's Unanswered Youth", image: "images/youth.webp",
          clues: ["Prometheus recalls his confused youth, turning his wandering eye toward the sun.", "He hoped there was an ear to hear his complaint or a heart to pity the oppressed.", "No help came — no god answered."],
          identify: { q: "What does Prometheus remember from his youth?", choices: ["Turning toward the sun for help that never came", "A time when the gods rescued him", "Building a temple to Zeus", "Ruling over the other Titans"] },
          purpose: { q: "Why include this memory of being unanswered?", choices: ["To prove the gods gave him no help, so he owes them nothing", "To show the gods once loved him", "To beg the gods for mercy now", "To describe a pleasant childhood"] },
          significance: { q: "What does the unanswered plea set up in the argument?", choices: ["His self-reliance — since no god helped, he saved himself", "His gratitude to the gods", "His fear of the sun", "His wish to return to childhood"] },
          reveals: "The turning point: help was sought from the gods and none came.",
          conceals: "How the memory prepares the claim that he owes the gods nothing.",
          ace: "Articulate what Prometheus sought and did not receive; connect the silence to his later defiance; extend it to how being unhelped can harden into independence."
        },
        {
          id: "heart", name: "The 'Holy Glowing Heart' That Saved Him", image: "images/heart.webp",
          clues: ["Prometheus says it was his own 'holy glowing heart' that forged and saved him.", "Time and fate, not the gods, completed the work.", "This is the core of his self-reliance."],
          identify: { q: "What does Prometheus credit for forging and saving him?", choices: ["His own 'holy glowing heart,' with time and fate", "The mercy of Zeus", "The other Titans", "A gift from the sun"] },
          purpose: { q: "Why insist that his heart, not the gods, saved him?", choices: ["To ground his defiance in self-reliance — the strength was his own", "To thank the gods indirectly", "To show he needs rescuing again", "To describe a physical injury"] },
          significance: { q: "What does 'holy glowing heart' claim for the self?", choices: ["That the sacred, creative power once given to gods belongs to the self", "That the heart is weak and needs help", "That the gods live inside the heart", "That feeling matters more than thinking"] },
          reveals: "The source of his power: an inner, self-made strength.",
          conceals: "How the word 'holy' quietly transfers sacredness from the gods to the self.",
          ace: "Articulate what saved Prometheus; connect his heart to the theme of self-reliance; extend it to a time your own effort, not another's help, carried you through."
        },
        {
          id: "forming", name: "Forming Humans in His Own Image", image: "images/forming.webp",
          clues: ["Prometheus says he sits here forming humans in his own image.", "In myth he is the maker and fire-giver of humankind.", "The Titan takes the role of a creator."],
          identify: { q: "What is Prometheus doing at the poem's turn?", choices: ["Shaping a race of humans in his own image", "Kneeling before Zeus", "Fleeing from the gods", "Rebuilding Mount Olympus"] },
          purpose: { q: "What role does this give Prometheus?", choices: ["The creator and artist — self-reliant enough to make life", "A servant of the gods", "A helpless victim", "A silent observer"] },
          significance: { q: "Why does making humans 'in his own image' matter?", choices: ["The creator's power, once the gods', now belongs to a rebel Titan", "It proves the gods created him", "It shows humans are unlike Prometheus", "It ends his defiance"] },
          reveals: "Prometheus as maker: the self-reliant creator of humankind.",
          conceals: "How creation becomes the ultimate proof that he needs no god.",
          ace: "Articulate what Prometheus creates; connect the creator role to his self-reliance; extend it to how the power to make something can be an act of independence."
        },
        {
          id: "race", name: "A Race to Defy Zeus — 'As I!'", image: "images/race.webp",
          clues: ["Prometheus shapes a human race to suffer, weep, enjoy, and rejoice.", "Above all, he makes them to defy Zeus and pay the gods no regard — 'as I.'", "The poem ends on this defiant, self-reliant note."],
          identify: { q: "What is the human race made to do, above all?", choices: ["To defy Zeus and pay the gods no regard, as Prometheus does", "To worship the gods faithfully", "To rebuild the heavens", "To forget Prometheus entirely"] },
          purpose: { q: "Why end the poem with 'as I'?", choices: ["It passes the Titan's defiance on to humankind, making rebellion the human inheritance", "It asks the gods for forgiveness", "It admits Prometheus was wrong", "It returns power to Zeus"] },
          significance: { q: "What does this closing image assert?", choices: ["That defiance and self-reliance are now shared by a whole human race", "That humans will always obey the gods", "That Prometheus regrets his creation", "That the gods have triumphed"] },
          reveals: "The poem's climax: defiance handed down to humankind.",
          conceals: "How the ending turns one Titan's rebellion into a human condition.",
          ace: "Articulate what the human race is made to do; connect 'as I' to the theme of defiance; extend it to how one person's stand can become a shared example."
        }
      ]
    },

    ctob: {
      name: "The Path of Defiance",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Prometheus speaks the entire poem directly to one figure — the ruler of the gods, ______. (one word)",
          evidence: ["The very first lines are aimed at this figure.", "He is the sky-god who hurls thunder and is told to cover his heavens.", "The name begins with 'Ze…'."],
          hints: ["The Olympian ruler of the gods, god of the sky and thunder.", "Ze…", "The word is Zeus."],
          answer: "Zeus"
        },
        {
          type: "mc",
          prompt: "Telling Zeus to 'cover your heavens' and vent his power on oaks is mainly meant to —",
          options: [
            "mock and belittle the gods' power.",
            "praise the gods' careful precision.",
            "beg the gods for a favor.",
            "describe a real storm neutrally."
          ],
          hints: ["Think about how Prometheus wants Zeus's power to look.", "It compares great force to a boy beheading thistles."]
        },
        {
          type: "mc",
          prompt: "Prometheus says the gods are 'nourished' by sacrifices and prayers in order to show that —",
          options: [
            "the gods depend on human hope and would otherwise starve.",
            "the gods are generous providers for humankind.",
            "the gods are stronger than any Titan.",
            "the gods have no interest in humans at all."
          ],
          hints: ["Who needs whom, in this claim?", "He says the gods would starve if children and beggars were not hopeful."]
        },
        {
          type: "digit",
          prompt: "Reduce Prometheus's closing list of what his human race will do to a single number: he makes them to suffer, to weep, to enjoy, and to rejoice. How many verbs are in that list? Enter the number.",
          evidence: ["Count only the four actions in the final catalog: suffer, weep, enjoy, rejoice.", "Each is a separate thing the new race is made to do.", "Two and two."],
          hints: ["List them out: suffer / weep / enjoy / rejoice.", "Two plus two.", "The number is 4."],
          answer: "4"
        },
        {
          type: "sequence",
          prompt: "Put the stages of Prometheus's argument in the order they appear, earliest first.",
          items: [
            "He mocks Zeus's power and tells him to leave his earth alone.",
            "He says the gods depend on the prayers of hopeful fools and owes them nothing.",
            "He recalls his youth, when he turned to the sun and no god answered.",
            "He declares his own 'holy glowing heart' saved him, and forms a defiant human race."
          ],
          hints: ["The poem opens by dismissing Zeus's power.", "The unanswered youth comes before the claim of self-reliance.", "Creating the human race is the poem's closing move."]
        },
        {
          type: "mc",
          prompt: "By the end, Prometheus shapes a human race chiefly so that they will —",
          options: [
            "defy Zeus and disregard the gods, as he does.",
            "worship the gods more faithfully than before.",
            "rebuild the heavens for Zeus.",
            "forget Prometheus and his rebellion."
          ],
          hints: ["Notice the poem's final words point back to the speaker himself.", "The race is made in his image — and 'as I' he defies the gods."]
        }
      ]
    },

    arcade: {
      name: "Gods or Titan?",
      instruction: "Goethe's poem sets the weakness of the gods against the strength of Prometheus. Sort each claim by which side of that contrast it belongs to: does it show THE POWERLESSNESS / DEPENDENCE OF THE GODS, or THE SELF-RELIANCE / POWER OF PROMETHEUS? Reasoning earns the points.",
      buckets: [
        { id: "gods", label: "Powerlessness / dependence of the gods", short: "Gods" },
        { id: "titan", label: "Self-reliance / power of Prometheus", short: "Titan" }
      ],
      cards: [
        { text: "The gods are nourished by sacrifices and the breath of prayer.", bucket: "gods", why: "Their power is fed by humans — a dependence, not a strength." },
        { text: "Without hopeful children and beggars, the gods would starve.", bucket: "gods", why: "The poem says the gods' survival hangs on human hope." },
        { text: "Zeus's thunder is like a boy beheading thistles on oaks and mountaintops.", bucket: "gods", why: "Great force spent on nothing — the poem belittles the gods' power." },
        { text: "When Prometheus turned to the sun in his youth, no god answered.", bucket: "gods", why: "The gods offered no help — a failure that exposes their indifference or weakness." },
        { text: "Prometheus's own 'holy glowing heart' forged and saved him.", bucket: "titan", why: "His strength is self-made, not god-given." },
        { text: "Time and fate, not the gods, completed his rescue.", bucket: "titan", why: "He credits himself and impartial fate, denying the gods any role." },
        { text: "He sits forming a race of humans in his own image.", bucket: "titan", why: "The creator's power belongs to the Titan, not the gods." },
        { text: "He teaches that race to defy Zeus and disregard the gods, 'as I.'", bucket: "titan", why: "His defiance and independence are strong enough to pass on to humankind." }
      ],
      followup: "The poem keeps the gods' hunger for prayer right beside Prometheus's self-made strength. What does setting the gods' dependence against the Titan's self-reliance suggest about where the poem thinks real power comes from?"
    },

    analysis: {
      mcq: [
        {
          q: "'Prometheus' is best described as a —",
          options: [
            "dramatic monologue — one speaker addressing a silent listener.",
            "sonnet with a strict rhyme scheme.",
            "narrated story told by an outside voice.",
            "dialogue in which Zeus answers back."
          ],
          why: "The whole poem is Prometheus speaking directly to Zeus, who never replies."
        },
        {
          q: "When Prometheus tells Zeus to vent his power on oaks like a boy beheading thistles, the tone is —",
          options: [
            "scornful and defiant.",
            "reverent and worshipful.",
            "frightened and pleading.",
            "calm and neutral."
          ],
          why: "The image belittles Zeus's power, setting the poem's mocking, rebellious tone."
        },
        {
          q: "Prometheus says the gods are 'nourished' by sacrifices and prayers in order to argue that —",
          options: [
            "the gods depend on human hope and are therefore not truly powerful.",
            "the gods are generous providers who feed humankind.",
            "the gods are indifferent to human worship.",
            "the gods created human hope out of nothing."
          ],
          why: "He claims the gods would starve without hopeful fools — reversing who depends on whom."
        },
        {
          q: "Prometheus credits his survival to —",
          options: [
            "his own 'holy glowing heart,' with time and fate — not the gods.",
            "the mercy Zeus showed him in his youth.",
            "the help of the other Titans.",
            "a gift handed down from the sun."
          ],
          why: "He insists the strength that forged him was his own, the heart of his self-reliance."
        },
        {
          q: "The poem ends by having Prometheus form a human race chiefly to —",
          options: [
            "defy the gods, as he does — passing his rebellion to humankind.",
            "worship Zeus with new devotion.",
            "rebuild the heavens Zeus rules.",
            "forget the Titan who made them."
          ],
          why: "The closing 'as I' hands the Titan's defiance and self-reliance down to a whole race."
        }
      ],
      short: [
        "Choose one moment from the Titan's Workshop. Explain what it shows and what it reveals about the poem's argument against the gods.",
        "Prometheus sets the gods' dependence beside his own self-reliance (for example, gods fed by prayer versus a 'holy glowing heart' that saved him). Explain what this contrast suggests about where the poem locates real power.",
        "Explain the effect of apostrophe — Prometheus speaking directly to a Zeus who never answers. How does that one-sided address shape the poem's defiant feeling?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 'Prometheus' use the form of a dramatic monologue to develop its theme of defiance and self-reliance? Make a claim and support it with specific moments from the poem.",
      aceReflection: "Articulate what the poem argues about authority and the self in your own words. Connect two moments that develop it. Extend it to another text, myth, or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Rebel and the Throne",
      prompt: "'Prometheus' carries a big idea — defiance of unjust authority and reliance on the self — through one figure: a lone Titan facing down the ruler of the gods. Choose another poem, story, speech, myth, or song that does the same thing (a single figure standing against a powerful authority, or a self-reliant creator). Explain the connection with evidence: who is the rebel, what authority do they defy, what transfers from Goethe's poem, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's defiant, self-reliant figure to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Goethe's 'Prometheus' uses a Titan's speech to Zeus to argue for defiance and self-reliance. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying Goethe's 'Prometheus.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in 'Prometheus' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about 'Prometheus': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the defiant, self-reliant figure in 'Prometheus' to another text or myth: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'Prometheus' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Goethe's 'Prometheus' (studied through a public-domain English translation) as a dramatic monologue and free-verse ode — a study of apostrophe, defiant tone, mythological allusion, anaphora, and the theme of rebellion against authority. Goethe's original is public domain; because translations differ, districts should use their specified public-domain English edition, and this room reproduces no copyrighted translation. The poem is presented as literature in a neutral, academic frame — a landmark of Sturm und Drang and Romantic rebellion — consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "'Prometheus' appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English II / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "Goethe's original German poem (written c.1772–74, published 1789) is in the public domain. Use a public-domain English translation — translations differ in wording, so confirm and use the district's specified public-domain edition; this room paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's form (dramatic monologue), its defiance and Romantic rebellion, and its mythological allusion academically and neutrally; note that it defies the gods (Zeus) and follow your district's policy and community expectations.",
        "Details here were checked against the poem's arc (the apostrophe to Zeus; 'cover your heavens' and venting power on oaks like a boy beheading thistles; the gods nourished by sacrifice and prayer who would starve without hopeful fools; owing the gods nothing; the youth who turned to the sun unanswered; the 'holy glowing heart' saved by time and fate; forming humans in his own image; the closing race made to suffer, weep, enjoy, rejoice, and defy Zeus 'as I'). Wording varies by translation — anchors are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your English II course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English II ELAR TEKS (19 TAC Ch. 110) strands on poetic structure, figurative language, tone, and theme — especially dramatic monologue, apostrophe, mythological allusion, and rhetorical devices such as anaphora. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
