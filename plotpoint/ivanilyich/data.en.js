/* PlotPoint — The Death of Ivan Ilyich (Leo Tolstoy).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the room paraphrases and reproduces no
   full passages; details limited to widely established facts from the 1886 novella;
   standards codes are only those given by the build plan (Common Core) — TEKS/ELPS
   flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles.

   Sources: full text via Wikisource (Louise & Aylmer Maude translation, public
   domain); audio via LibriVox (Constance Garnett translation, public domain). The
   two are different public-domain translations of the same novella. */
window.__ROOM__ = {
  id: "ivanilyich",
  storageKey: "plotpoint.ivanilyich.v1",

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
    "enter.readListenNote": "This novella is in the public domain. These free, external resources open in a new tab — verify the link and translation before assigning.",
    "enter.read": "Read the full text (Wikisource)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Death of Ivan Ilyich",
    "vocab.intro": "{n} terms that unlock the novella. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Golovin Archive",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this moment, object, or person?",
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
    "ctob.title": "The Case of the Examined Life",
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
    "arcade.title": "Authentic or Artificial?",
    "arcade.default": "Sort each card into the reading it best supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Details to weigh",
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
    "extend.title": "The Life Worth Living",
    "extend.format": "Format",
    "extend.evidence": "The idea from the novella I am building on",
    "extend.transfers": "What transfers to a modern life",
    "extend.changes": "What changes today",
    "extend.breaks": "Where the comparison stops working",
    "extend.response": "My reflection on a life worth living",
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
    "print.item.extend": "Authentic-life organizer",
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
      title: "The Death of Ivan Ilyich",
      author: "Leo Tolstoy",
      grades: "Grades 9–12",
      genre: "Novella · Realism · Philosophical fiction",
      time: "60–90 minutes",
      spoiler: "Full spoilers",
      rights: "Public domain (1886; PD English translations)",
      textAccess: "This is a public-domain novella; students may use the free links below or a class copy. The room does not reproduce the text.",
      copyright: "First published in Russian in 1886. The linked English full text (Wikisource, the Maude translation) and audio (LibriVox, the Garnett translation) are both public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A short novel centered on a terminal illness, dying, and death, with intense reflection on mortality and the meaning of life. Suitable for mature readers in grades 9–12. Preview and align with local policy.",
      gutenberg: "https://en.wikisource.org/wiki/The_Death_of_Ivan_Ilych",
      audio: "https://librivox.org/the-death-of-ivan-ilyitch-by-leo-tolstoy/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Death of Ivan Ilyich — a judge's empty chair, a fallen step-ladder and curtain, and a single window of pale light."
    },
    hook: "Ivan Ilyich did everything right: a proper career, a proper marriage, a pleasant, respectable life. Then a small fall while hanging a curtain begins an illness no one will name. As death closes in, he faces one terrible question — what if his whole correct life was wrong? Tolstoy's novella turns dying into the truest test of how to live.",
    goals: [
      "Analyze how Tolstoy structures the novella, opening with Ivan's death before tracing the life that led to it.",
      "Interpret the contrast between Ivan's artificial, propriety-driven life and the honest compassion of the servant Gerasim.",
      "Evaluate the novella's central question — what makes a life meaningful — and how Ivan's dying answers it.",
      "Connect the story's challenge about how to live to a modern situation, weighing what transfers and what changes."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the premise: a respectable Russian judge in the 1880s faces a sudden terminal illness.",
        "Discuss: What makes a life meaningful? Could a person do everything 'correctly' and still live wrongly?"
      ],
      during: [
        "Use the Relic Room to examine one moment, object, or person at a time.",
        "Track the contrast between the family's pretenses and Gerasim's honesty, and how Ivan's view of his life changes."
      ],
      after: [
        "Run the breakout, arcade, and analysis to weigh the authentic against the artificial in Ivan's world.",
        "Complete the Extend task to reflect on what Tolstoy suggests makes a life worth living."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what Ivan Ilyich realizes about his life as he is dying. Include one detail from the novella that shows the change in him." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the novella's themes (for example, mortality and authenticity, or propriety and alienation). Explain how they reinforce each other in Ivan's story." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the novella's challenge — to live authentically, not just correctly — to a modern life. Explain what transfers, what changes today, and where the comparison stops working." }
    },

    vocab: [
      { term: "novella", def: "A work of prose fiction longer than a short story but shorter than a novel.", example: "A tight, focused story that follows one man's dying.", nonexample: "A brief one-page anecdote or a long multi-volume epic.", context: "The Death of Ivan Ilyich is a short novella by Tolstoy." },
      { term: "mortality", def: "The condition of being subject to death.", example: "Realizing, with dread, that you too must die.", nonexample: "Believing you will live forever.", context: "The story forces Ivan to face his own mortality." },
      { term: "propriety", def: "Correct, respectable behavior that follows social rules and appearances.", example: "Choosing a career and marriage mainly to look proper.", nonexample: "Acting from honest feeling rather than to impress.", context: "Ivan built his life around propriety and appearances." },
      { term: "hypocrisy", def: "Pretending to feelings or virtues one does not really have.", example: "Cheerfully pretending a dying man will soon be well.", nonexample: "Speaking the plain truth about a hard situation.", context: "The family's cheerful hypocrisy hides the truth of his dying." },
      { term: "alienation", def: "A feeling of being cut off or estranged from others.", example: "A dying man surrounded by people who will not be honest with him.", nonexample: "Feeling truly known and understood by those around you.", context: "Ivan feels a deep alienation from those who will not face his death." },
      { term: "compassion", def: "Sympathy for another's suffering joined with a desire to help.", example: "A servant who tends the sick man kindly and without pretense.", nonexample: "Coldly ignoring another's pain.", context: "Only the servant Gerasim shows Ivan honest compassion." },
      { term: "epiphany", def: "A sudden, life-changing realization or insight.", example: "Grasping, at the last, how one truly should have lived.", nonexample: "A dull day in which nothing is understood.", context: "Near death, Ivan has an epiphany about how he has lived." },
      { term: "conventional", def: "Following accepted customs and expectations without question.", example: "A tidy, ordinary life lived exactly as expected.", nonexample: "A life shaped by one's own honest choices.", context: "Ivan's conventional life looked correct but felt empty." },
      { term: "redemption", def: "Being saved or set right, often morally or spiritually.", example: "Finding peace and love in one's final moments.", nonexample: "Dying bitter and unchanged.", context: "Ivan's final peace reads as a kind of redemption." },
      { term: "irony", def: "A gap between what is expected and what actually happens.", example: "A judge who becomes the helpless one others coldly judge.", nonexample: "Events unfolding exactly as everyone expects.", context: "By a bitter irony, the judge becomes the helpless case others judge." },
      { term: "superficial", def: "Concerned only with surfaces — shallow, not deep.", example: "Filling one's days with rank, decor, and card games.", nonexample: "Attending to what truly matters in life.", context: "Ivan's superficial concerns — rank, decor, and cards — fill his days." }
    ],

    relic: {
      name: "The Golovin Archive",
      intro: "Seven instructional reconstructions of the moments, objects, and people through which The Death of Ivan Ilyich reaches us — teaching recreations, not illustrations from any edition. Investigate what each record shows, and what it cannot.",
      artifacts: [
        {
          id: "funeral", name: "The Opening Funeral", image: "images/funeral.webp",
          clues: ["The novella begins not with Ivan's life but with news of his death.", "His colleagues' first thoughts are of promotions and who will move up.", "His widow's main concern is her pension."],
          identify: { q: "What does this reconstruct?", choices: ["The opening scene of Ivan's death and his colleagues' reactions", "Ivan's wedding", "Ivan's first day as a judge", "Ivan's recovery from illness"] },
          purpose: { q: "Why does Tolstoy begin here?", choices: ["To show how self-interested and hollow the world around Ivan is", "To celebrate Ivan's life", "To describe a happy gathering", "To introduce a mystery to solve"] },
          significance: { q: "What is its significance?", choices: ["Starting with the death frames the whole novella as a judgment of how Ivan lived", "It proves Ivan was deeply loved", "It has no meaning", "It ends the story happily"] },
          reveals: "How little Ivan's death means to the people around him — each thinks first of themselves.",
          conceals: "It withholds Ivan's inner life; only the flashback that follows lets us feel his story from within.",
          ace: "Articulate why the novella opens with the funeral; connect the colleagues' reactions to the theme of hollow propriety; extend it to how people respond to a death that does not touch them."
        },
        {
          id: "ladder", name: "The Career Ladder", image: "images/ladder.webp",
          clues: ["Ivan rises steadily as a respectable judge, doing everything correctly.", "He chooses his marriage and his work to be proper and pleasant.", "His life is called the most ordinary — and therefore the most terrible."],
          identify: { q: "What does this represent?", choices: ["Ivan's steady climb up a proper, conventional career", "A ladder he falls from", "A staircase in a palace", "A tool from his childhood"] },
          purpose: { q: "What does Tolstoy show through Ivan's rise?", choices: ["A life built entirely on appearances and social correctness", "A life of daring adventure", "A life of deep friendships", "A life of great creativity"] },
          significance: { q: "What is its significance?", choices: ["The 'correct' life Ivan builds is exactly what the novella puts on trial", "It proves Ivan lived wisely", "It has no meaning", "It ends the story"] },
          reveals: "That Ivan's success is measured only by propriety and comfort, never by love or truth.",
          conceals: "It hides, at first, the emptiness beneath the success — a hollowness Ivan feels only when dying.",
          ace: "Articulate what Ivan values as he climbs; connect his 'correct' life to the theme of propriety; extend it to how success can be measured by the wrong things."
        },
        {
          id: "curtains", name: "The Fall While Hanging Curtains", image: "images/curtains.webp",
          clues: ["Furnishing his fine new home, Ivan climbs to adjust a curtain.", "He slips and knocks his side — a small, almost comic accident.", "From this trivial bruise grows the illness that kills him."],
          identify: { q: "What does this reconstruct?", choices: ["Ivan's minor fall while hanging a curtain, which begins his fatal illness", "A duel", "A carriage crash", "A battle wound"] },
          purpose: { q: "Why is the cause so trivial?", choices: ["To show that death can enter an ordinary life through the smallest thing", "To make the story exciting", "To prove Ivan was clumsy", "To celebrate his new home"] },
          significance: { q: "What is its significance?", choices: ["A meaningless accident amid his pursuit of comfort ironically undoes his whole life", "It proves the home was cursed", "It has no meaning", "It ends the story"] },
          reveals: "That the very pursuit of a proper, comfortable life delivers the injury that destroys it.",
          conceals: "It hides how serious the injury is; Ivan and those around him refuse to see it clearly for a long time.",
          ace: "Articulate what starts Ivan's illness; connect the trivial cause to the theme of mortality; extend it to how small events can change everything."
        },
        {
          id: "doctors", name: "The Doctors", image: "images/doctors.webp",
          clues: ["As Ivan sickens, doctors examine him with cold, self-important formality.", "They talk over him about his 'case,' never about his fear.", "He recognizes their manner — it is exactly how he treated people in court."],
          identify: { q: "How do the doctors treat Ivan?", choices: ["With cold formality, discussing his 'case' rather than his suffering", "With warm, honest sympathy", "By curing him at once", "By ignoring him completely"] },
          purpose: { q: "What does this reveal?", choices: ["That the pretenses Ivan lived by are now turned coldly on him", "That medicine always heals", "That the doctors love Ivan", "That Ivan is not really ill"] },
          significance: { q: "What is its significance?", choices: ["The judge becomes the judged — a bitter irony at the novella's core", "It proves doctors are kind", "It has no meaning", "It ends the story"] },
          reveals: "That Ivan is now the object of the same cold, formal treatment he once handed out.",
          conceals: "It leaves the doctors' inner lives blank; like Ivan once did, they hide behind their role.",
          ace: "Articulate how the doctors treat Ivan; connect their manner to the theme of irony; extend it to how we hide behind roles instead of facing a person."
        },
        {
          id: "gerasim", name: "Gerasim, the Honest Servant", image: "images/gerasim.webp",
          clues: ["A young peasant servant cares for the dying Ivan.", "He holds Ivan's legs up for hours to ease his pain, without complaint.", "Alone among them, he speaks and acts honestly about death."],
          identify: { q: "Who is Gerasim?", choices: ["The peasant servant who honestly comforts the dying Ivan", "Ivan's fellow judge", "Ivan's son", "One of the doctors"] },
          purpose: { q: "What does Gerasim model?", choices: ["Honest compassion and an easy acceptance of death", "Cold indifference", "Ambitious self-interest", "Fear and denial"] },
          significance: { q: "What is his significance?", choices: ["Gerasim's honesty exposes, by contrast, the pretenses of everyone else", "He proves the servants are cruel", "He has no importance", "He ends the story"] },
          reveals: "That the 'simple' peasant lives more truthfully than the respectable people around Ivan.",
          conceals: "It idealizes Gerasim somewhat; he is less a full character than a model of honest care.",
          ace: "Articulate how Gerasim treats Ivan; connect his honesty to the theme of authenticity; extend it to what genuine care looks like when someone is suffering."
        },
        {
          id: "syllogism", name: "The Syllogism", image: "images/syllogism.webp",
          clues: ["Ivan recalls a textbook logic example: all people are mortal.", "In the abstract, he accepts that everyone must die.", "But he cannot bring himself to believe the rule truly applies to him."],
          identify: { q: "What is this?", choices: ["The logic lesson 'all people are mortal' that Ivan cannot apply to himself", "A legal contract", "A prayer", "A doctor's prescription"] },
          purpose: { q: "Why does Tolstoy include it?", choices: ["To show the gap between knowing about death and facing your own", "To teach formal logic", "To prove Ivan is a genius", "To lighten the mood"] },
          significance: { q: "What is its significance?", choices: ["It captures the human refusal to feel one's own mortality as real", "It proves logic solves everything", "It has no meaning", "It ends the story"] },
          reveals: "The difference between an abstract fact and a truth one feels in the body.",
          conceals: "It leaves unspoken why the fear is so total; the novella lets the reader feel it rather than explain it.",
          ace: "Articulate the syllogism problem; connect it to the theme of mortality; extend it to how we 'know' hard truths without truly accepting them."
        },
        {
          id: "light", name: "The Final Light", image: "images/light.webp",
          clues: ["After days of agony, Ivan stops struggling against his death.", "He feels a sudden pity and love for his family.", "In place of terror, he senses light — and for him, death itself seems to end."],
          identify: { q: "What does this reconstruct?", choices: ["Ivan's final change of heart and his death at peace", "Ivan's recovery", "Ivan's wedding", "The opening funeral"] },
          purpose: { q: "What happens to Ivan here?", choices: ["He lets go of his false life and finds pity, love, and peace", "He grows more bitter than ever", "He returns to his career", "Nothing changes"] },
          significance: { q: "What is its significance?", choices: ["The ending suggests that honest love, even at the last, can redeem a life", "It proves death is meaningless", "It has no meaning", "It shows Ivan learned nothing"] },
          reveals: "That the terror of death lifts once Ivan stops clinging to himself and turns toward love.",
          conceals: "It leaves the 'light' open to interpretation — spiritual, psychological, or both; Tolstoy does not pin it down.",
          ace: "Articulate what changes in Ivan at the end; connect his peace to the theme of redemption; extend it to how facing death might change how a person lives."
        }
      ]
    },

    ctob: {
      name: "The Case of the Examined Life",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "The novella is told in short, numbered chapters. How many chapters does it have? Enter the number.",
          evidence: ["It opens with the funeral, then flashes back through Ivan's life and dying.", "The story is divided into brief numbered sections.", "There are twelve of them in all."],
          hints: ["It is a dozen.", "It is ten plus two.", "The number is 12."],
          answer: "12"
        },
        {
          type: "word",
          prompt: "Ivan Ilyich's family name (surname) is what? (one word)",
          evidence: ["His full name is Ivan Ilyich, followed by his family name.", "The opening death notice names him by it.", "The surname begins with 'Gol-.'"],
          hints: ["It is the title of this Relic Room's archive.", "It begins with 'Golo…'.", "The surname is Golovin."],
          answer: "Golovin"
        },
        {
          type: "word",
          prompt: "Which peasant servant honestly comforts the dying Ivan, easing his pain without pretense? (one word)",
          evidence: ["He is a strong, kindly young servant.", "He holds Ivan's legs up for hours to ease the pain.", "His name begins with 'Ger-.'"],
          hints: ["He alone treats death honestly.", "It begins with 'Gera…'.", "His name is Gerasim."],
          answer: "Gerasim"
        },
        {
          type: "mc",
          prompt: "The trivial event that begins Ivan's fatal illness is —",
          options: [
            "a fall while hanging curtains as he decorates his new home.",
            "a wound received in a duel.",
            "a crash of his carriage.",
            "an injury in a battle."
          ],
          hints: ["Think about what he was doing to furnish his fine new apartment.", "Which option is a small household accident?"]
        },
        {
          type: "sequence",
          prompt: "Put these stages of the novella in order, earliest first.",
          items: [
            "Ivan Ilyich builds a proper, successful life as a judge.",
            "He falls while hanging curtains and develops a mysterious illness.",
            "As he declines, only the servant Gerasim comforts him honestly.",
            "In his final moments, Ivan lets go of his fear and dies at peace."
          ],
          hints: ["The proper career comes first.", "The illness begins before Gerasim's care.", "The peaceful death comes last."]
        },
        {
          type: "mc",
          prompt: "Ivan's dying realization is that —",
          options: [
            "his respectable, proper life was hollow, lived for appearances rather than truth.",
            "he had always lived exactly as he should.",
            "death was never anything to fear.",
            "his real mistake was not becoming wealthier."
          ],
          hints: ["Think about how Ivan judges his 'correct' life at the end.", "Which option is about a proper life that was actually empty?"]
        }
      ]
    },

    arcade: {
      name: "Authentic or Artificial?",
      instruction: "Tolstoy sets honest, authentic living against hollow, artificial propriety. Sort each detail by which the novella presents it as: authentic (honest and real) or artificial (false propriety). There is room to argue, but sort by what the story most directly shows. Thoughtful sorting earns the points.",
      buckets: [
        { id: "authentic", label: "Authentic (honest and real)", short: "Authentic" },
        { id: "artificial", label: "Artificial (false propriety)", short: "Artificial" }
      ],
      cards: [
        { text: "Gerasim honestly helps Ivan and accepts death as a natural part of life.", bucket: "authentic", why: "His plain, honest care is the novella's model of authentic living." },
        { text: "Ivan's final moment of genuine pity and love for his family.", bucket: "authentic", why: "Real feeling, at last, replaces a lifetime of performance." },
        { text: "Ivan facing the hard truth that his life may have been wrong.", bucket: "authentic", why: "Honest self-examination is the authentic turn the novella rewards." },
        { text: "The peasant's simple, uncomplaining kindness to a suffering man.", bucket: "authentic", why: "Compassion without pretense is exactly what Tolstoy calls real." },
        { text: "Ivan choosing his career and marriage mainly for propriety and appearances.", bucket: "artificial", why: "A life arranged to look correct is the artificiality the story indicts." },
        { text: "The family keeping up cheerful pretenses and avoiding the truth of his dying.", bucket: "artificial", why: "Their comforting lies are hollow propriety, not real care." },
        { text: "The doctors treating Ivan with cold, self-important formality.", bucket: "artificial", why: "They hide behind role and manner instead of meeting him honestly." },
        { text: "Colleagues, at the funeral, thinking mainly of promotions and pensions.", bucket: "artificial", why: "Self-interest dressed as respect is the emptiest propriety of all." }
      ],
      followup: "Tolstoy weighs the authentic against the artificial. Using specific moments, argue what the novella suggests makes a life real rather than merely 'correct' — and whether Ivan grasps it in time."
    },

    analysis: {
      mcq: [
        {
          q: "The Death of Ivan Ilyich is a —",
          options: [
            "novella that examines one man's dying and the meaning of his life.",
            "long epic poem about a war.",
            "comic play.",
            "children's adventure story."
          ],
          why: "It is a short, focused work of prose fiction centered on Ivan's illness and death."
        },
        {
          q: "The novella opens with —",
          options: [
            "Ivan's funeral and his colleagues' self-interested reactions, before flashing back to his life.",
            "Ivan's happy childhood.",
            "a great battle.",
            "Ivan's wedding day."
          ],
          why: "Beginning with the death frames the whole story as a judgment of how Ivan lived."
        },
        {
          q: "Gerasim mainly serves to —",
          options: [
            "model honest compassion and an acceptance of death that the others lack.",
            "provide comic relief.",
            "cure Ivan's illness.",
            "advance Ivan's career."
          ],
          why: "The peasant's plain honesty exposes, by contrast, everyone else's pretenses."
        },
        {
          q: "Ivan's illness makes him, ironically, —",
          options: [
            "the helpless 'case' others coldly judge, just as he once judged others.",
            "a wealthy and admired man.",
            "a great soldier.",
            "completely forgotten by everyone."
          ],
          why: "The judge becomes the judged — a central irony of the novella."
        },
        {
          q: "Ivan finds peace at the end when he —",
          options: [
            "stops clinging to his false life and feels pity and love for others.",
            "finally becomes rich.",
            "returns to his old career.",
            "proves he was right all along."
          ],
          why: "Letting go of self and turning toward love lifts the terror of death."
        }
      ],
      short: [
        "Choose one artifact from the Relic Room. Using specific details, explain how it develops one of the novella's themes (mortality, propriety, authenticity, or compassion).",
        "Explain the contrast between Gerasim and the rest of Ivan's world. Using specific evidence, show what Tolstoy suggests is the difference between real and false care.",
        "Explain what Ivan realizes as he dies. Using specific evidence, describe how his view of his own life changes."
      ],
      paragraph: "Write an evidence-based paragraph. What does The Death of Ivan Ilyich suggest makes a life meaningful? Make a claim and support it with specific moments.",
      aceReflection: "Articulate Ivan's dying realization. Connect two themes (such as mortality and authenticity, or propriety and alienation). Extend the novella's challenge — to live truthfully, not just correctly — to a modern life, and name where the comparison breaks down."
    },

    extend: {
      name: "The Life Worth Living",
      prompt: "Tolstoy uses one man's dying to ask what makes a life real rather than merely 'correct.' Choose a modern life driven mostly by appearances — status, image, comfort, the 'right' choices — and imagine that person facing Ivan's question: have I lived rightly? Write a short reflective piece in which they confront that question honestly, and say what living authentically would mean for them. Then note what transfers from Tolstoy and where a modern world makes the comparison break down.",
      format: "A short reflective piece in which a modern character confronts Ivan's question, plus a note on what transfers from Tolstoy and where the comparison breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning what Ivan Ilyich realizes about his life as he is dying. Do not answer for me. Ask me one question at a time that helps me explain his realization in my own words. After I answer, point out one part that is clear and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [term] as it is used in The Death of Ivan Ilyich. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [theme one] connects to [theme two] in The Death of Ivan Ilyich because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Death of Ivan Ilyich: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to apply the novella's challenge about living authentically to a modern life, [situation]. Give me two ways the comparison might work and one reason each might fail. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of what makes a life meaningful in The Death of Ivan Ilyich for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of The Death of Ivan Ilyich — its inverted structure (death first, then the life), its contrast between artificial propriety and honest compassion, and its questions about mortality and how to live. It never reproduces Tolstoy's text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "Two public-domain English translations are linked: the full TEXT is the Louise & Aylmer Maude translation (Wikisource), and the AUDIO is the Constance Garnett translation (LibriVox). They are different translations of the same novella; verify the link and translation, and note that wording and some names may differ between them.",
        "The underlying 1886 work and both linked English translations are in the public domain. Some modern translations carry their own copyright — verify the edition you assign.",
        "Details here come from the novella (the opening funeral; Ivan's proper career; the fall while hanging curtains; the cold doctors; the servant Gerasim; the 'all people are mortal' logic problem; the peaceful death). Confirm against your translation.",
        "The subject is a terminal illness, dying, and death, treated with emotional intensity. Preview for maturity and align with local policy; consider students who have experienced serious illness or loss.",
        "Chapter count and some proper names can vary slightly by translation; the room uses the widely accepted twelve-chapter structure and the surname 'Golovin.'",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the high-school English I–IV ELAR TEKS (19 TAC Ch. 110) reading-response, author's-craft (structure, theme), and multiple-genre strands. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.11-12.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.5", "RL.11-12.5", "RL.9-10.6"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
