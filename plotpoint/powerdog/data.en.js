/* PlotPoint — Rudyard Kipling, "The Power of the Dog" (early 20th century).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This early-twentieth-century Kipling poem is in the public domain in
   the United States, and the room studies it as LITERATURE — apostrophe, refrain,
   rhetorical question, and the argument that weighs love against loss — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC §110.30,
   Grade 6). The room paraphrases longer stretches and quotes only brief public-domain
   phrases where a close reading needs them. Standards are good-faith alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the engine
   shuffles. */
window.__ROOM__ = {
  id: "powerdog",
  storageKey: "plotpoint.powerdog.v1",

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
    "enter.readListenNote": "The King James Version is in the public domain. Use your class's edition or any KJV text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Power of the Dog",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Heart Given Away",
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
    "ctob.title": "The Weight of Love and Loss",
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
    "arcade.title": "Joy or Grief?",
    "arcade.default": "Sort each image by the side of the poem's argument it belongs to.",
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
    "print.item.relic": "Heart Given Away evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Love-and-loss organizer",
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
      title: "The Power of the Dog",
      author: "Rudyard Kipling",
      grades: "Grade 6",
      genre: "Poetry · Lyric",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "This early-twentieth-century Kipling poem is in the public domain in the United States, so the room studies it as literature, quoting only brief public-domain phrases and paraphrasing longer stretches.",
      contentNote: "On the Texas required literary-works list adopted 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Studied as literature — its apostrophe, refrain, rhetorical question, and argument. Note that the poem deals with the death of a pet (grief); preview for grade level and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'The Power of the Dog' — a person's open hand resting on an old dog's head by a quiet hearth, warm and tender, with an empty leash and collar set nearby to suggest loss."
    },
    hook: "A poem that gives you a warning before it gives you a story: think hard before you give your heart to a dog. Kipling knows the arithmetic — a dog's whole life is shorter than a person's, so loving one almost always ends in grief. Yet the poem keeps circling back to that grief only to ask whether the years of devotion were worth the price. Read it as a poem, and watch an argument being made in verse: love weighed against loss, right in front of you.",
    goals: [
      "Understand 'The Power of the Dog' as a short lyric poem that makes an argument: whether to give your heart to a dog whose life is far shorter than yours.",
      "Analyze how apostrophe (direct address to the reader) and a refrain-like warning shape the poem's voice and feeling.",
      "Trace how the poem weighs the joy of years of devotion against the grief of loss, and how its rhetorical question drives that weighing.",
      "Interpret the poem's answer — that the love is still worth it — and why 'the more do we grieve' becomes a measure of how much was loved."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of apostrophe, refrain, and rhetorical question.",
        "Discuss: how can a poem make an argument — actually try to persuade you — instead of just telling a story?"
      ],
      during: [
        "Use the Heart Given Away to slow down and read the poem image by image.",
        "Track the argument: from the warning to 'beware,' through the years of devotion, to the grief at the end and the poem's answer."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the poem's argument and its literary devices.",
        "Complete the Extend task to compare the 'grief is the price of love' idea to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the argument 'The Power of the Dog' is making. Include one line or image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the poem — for example the years of devotion and the grief at the end. Explain how placing joy and loss side by side shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's idea — that grief can be the price of love — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "lyric", def: "A short poem that expresses personal feeling or a single mood or idea, rather than telling a long story.", example: "A brief poem sharing one speaker's feelings about loving a dog.", nonexample: "A long novel with many chapters and characters.", context: "'The Power of the Dog' is a lyric: a short poem centered on one feeling and idea." },
      { term: "apostrophe", def: "A figure of speech in which the speaker directly addresses a person, group, or thing — here, the reader.", example: "'Brothers and Sisters, I bid you beware.'", nonexample: "A neutral report that never speaks to anyone.", context: "The poem uses apostrophe to warn the reader face to face." },
      { term: "refrain", def: "A line or phrase repeated at intervals in a poem, often to drive home its main idea.", example: "The repeated warning about giving your heart 'to a dog to tear.'", nonexample: "A line that appears only once and is never echoed.", context: "The poem's warning returns like a refrain to keep its point in view." },
      { term: "rhetorical question", def: "A question asked for effect, to make the reader think, not to get an answer.", example: "'Why should we give our hearts to a dog to tear?'", nonexample: "'What time is it?' asked to learn the time.", context: "The poem's rhetorical question pushes the reader to weigh the choice." },
      { term: "rhyme", def: "The matching of ending sounds in words, often at the ends of lines of verse.", example: "'beware' matched with 'tear.'", nonexample: "Two lines whose last words share no sound.", context: "The poem's steady rhyme helps its argument feel measured and deliberate." },
      { term: "tone", def: "The speaker's attitude toward the subject, felt through word choice and rhythm.", example: "A tender but clear-eyed tone toward love and loss.", nonexample: "A word like 'stuff' that carries no attitude at all.", context: "The poem's tone mixes warning with deep affection." },
      { term: "theme", def: "The central idea or insight about life that a work explores.", example: "The idea that grief is the price we pay for love.", nonexample: "The mere subject 'a dog,' with no idea attached.", context: "The poem's theme is that loving something we will lose still has worth." },
      { term: "devotion", def: "Deep loyalty, love, and faithful care given to someone or something over time.", example: "Years of a dog's steady loyalty and a person's care in return.", nonexample: "Ignoring someone you claim to care about.", context: "The poem sets the years of devotion on one side of its scale." },
      { term: "grief", def: "Deep sorrow, especially the pain felt at the death or loss of someone loved.", example: "The sorrow felt when a beloved pet dies.", nonexample: "Mild annoyance at a small inconvenience.", context: "The poem names grief as the cost of loving a dog." }
    ],

    relic: {
      name: "The Heart Given Away",
      intro: "Seven instructional reconstructions of the images and moves in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem's argument, and what it reveals.",
      artifacts: [
        {
          id: "warning", name: "The Warning to Beware", image: "images/warning.webp",
          clues: ["The poem addresses the reader directly: 'Brothers and Sisters, I bid you beware.'", "This direct address to the reader is called apostrophe.", "The warning returns like a refrain to keep its point in view."],
          identify: { q: "What does the opening warning do?", choices: ["It speaks directly to the reader, telling them to beware of giving their heart to a dog", "It describes a specific dog by name", "It tells a long story about a journey", "It lists rules for training a dog"] },
          purpose: { q: "What is this direct address's role in the poem?", choices: ["It is apostrophe — it pulls the reader into the poem's argument face to face", "It is only a title with no purpose", "It changes the poem into a news report", "It ends the poem"] },
          significance: { q: "Why open with a warning instead of a happy scene?", choices: ["It frames the whole poem as a weighing of love against loss, honestly stated up front", "It is meant to scare the reader away from the poem", "It has nothing to do with the rest", "It is a mistake in the text"] },
          reveals: "The poem's use of apostrophe — speaking straight to the reader.",
          conceals: "How the warning works like a refrain that keeps returning.",
          ace: "Articulate what the warning says; connect it to the idea of apostrophe; extend it to why speaking directly to a reader can make an argument feel personal."
        },
        {
          id: "toteardog", name: "A Heart 'to a Dog to Tear'", image: "images/toteardog.webp",
          clues: ["The poem pictures giving your heart 'to a dog to tear.'", "'To tear' names the pain that loving a dog can bring.", "The image makes love sound like handing over something breakable."],
          identify: { q: "What does the phrase 'to a dog to tear' picture?", choices: ["Giving your heart to a dog, knowing it may be torn by grief", "A dog physically biting a person", "A torn piece of paper", "A dog tearing up a toy"] },
          purpose: { q: "What is this metaphor's role in the poem?", choices: ["It captures the risk at the heart of the poem — love makes you vulnerable to loss", "It describes a dog's bad behavior", "It is only a description of a dog's teeth", "It has no connection to the theme"] },
          significance: { q: "What does 'to tear' reveal about loving a dog?", choices: ["Loving something you will outlive opens you to real sorrow", "Dogs are dangerous animals to avoid", "Love has no cost at all", "The dog dislikes the speaker"] },
          reveals: "The central metaphor of vulnerability — a heart handed over to be torn.",
          conceals: "How the poem admits the cost of love before it defends love.",
          ace: "Articulate the 'to tear' image; connect it to the risk of loving; extend it to another time caring about something meant risking hurt."
        },
        {
          id: "shortlife", name: "The Dog's Short Life", image: "images/shortlife.webp",
          clues: ["The poem turns on a hard fact: a dog's whole life is far shorter than a person's.", "This contrast is the reason loving a dog so often ends in grief.", "The years a dog lives are counted against the years a person lives."],
          identify: { q: "What contrast does this image set up?", choices: ["A dog's short life against a person's much longer one", "A dog's size against a person's size", "A dog's speed against a person's speed", "A dog's color against a person's clothes"] },
          purpose: { q: "Why is this contrast the poem's turning point?", choices: ["The short life is why loving a dog almost always ends in loss", "It shows dogs are unimportant", "It is only a fact about biology with no meaning", "It ends the poem's argument"] },
          significance: { q: "What does the length of the dog's life mean for the reader?", choices: ["Anyone who loves a dog is likely to outlive it and grieve", "Dogs live longer than people", "The reader should never own a dog", "Time does not matter in the poem"] },
          reveals: "The core contrast that drives the whole poem: short dog-life, long human-life.",
          conceals: "How a plain fact becomes the poem's emotional engine.",
          ace: "Articulate the life-span contrast; connect it to the poem's warning; extend it to how knowing an ending changes how we value something."
        },
        {
          id: "devotion", name: "The Years of Devotion", image: "images/devotion.webp",
          clues: ["The poem counts the joy too: the years of a dog's faithful love.", "Devotion is the good side of the poem's ledger.", "The longer a dog is kept, the more it is loved."],
          identify: { q: "What does the years-of-devotion image show?", choices: ["The joy and loyalty of the years spent loving a dog", "A single unhappy day", "A dog running away", "An empty house"] },
          purpose: { q: "What part of the poem's argument does this hold?", choices: ["It is the joy side — the reward that has to be weighed against the grief", "It is the grief side of the poem", "It cancels the poem's warning", "It is unrelated to the theme"] },
          significance: { q: "Why does the poem place devotion beside the grief?", choices: ["So the reader can weigh the reward of love against its cost", "To prove love is never worth it", "To hide the poem's sadness", "To end on a warning"] },
          reveals: "The joy side of the poem's weighing — years of faithful love.",
          conceals: "How the same closeness that brings joy also deepens the later grief.",
          ace: "Articulate the devotion image; connect it to the grief it is weighed against; extend it to how a good thing can carry its own cost."
        },
        {
          id: "grief", name: "The Grief at the End", image: "images/grief.webp",
          clues: ["When the dog's short life ends, the poem names deep grief.", "Grief is the cost the warning tried to prepare the reader for.", "The poem says the longer we keep them, the more we grieve."],
          identify: { q: "What does the grief image show?", choices: ["The deep sorrow felt when the beloved dog dies", "A minor disappointment", "A happy reunion", "A new puppy arriving"] },
          purpose: { q: "What is grief's role in the poem's argument?", choices: ["It is the cost — the loss that has to be set against the years of love", "It is the poem's happy ending", "It replaces the warning", "It has no purpose"] },
          significance: { q: "What does 'the more do we grieve' reveal?", choices: ["The depth of grief is a measure of how much was loved", "Grief means the love was a mistake", "Grief fades to nothing", "Grief comes before the love"] },
          reveals: "Loss pictured as the price the warning foresaw.",
          conceals: "How grief and love are shown to be tied together, not opposites.",
          ace: "Articulate the grief image; connect it to the years of devotion; extend it to why deeper love can mean deeper loss."
        },
        {
          id: "question", name: "The Rhetorical Question", image: "images/question.webp",
          clues: ["The poem asks why we should give our hearts to a dog to tear.", "It is a rhetorical question — asked to make the reader think, not to be answered.", "The question gathers up the whole weighing of love against loss."],
          identify: { q: "What kind of question does the poem ask?", choices: ["A rhetorical question — asked for effect, to make the reader think", "A question that expects a factual answer", "A question about the time of day", "A math problem"] },
          purpose: { q: "What is the rhetorical question's role?", choices: ["It presses the reader to weigh the choice the whole poem has laid out", "It ends the poem with a fact", "It changes the subject entirely", "It answers itself immediately with a simple 'no'"] },
          significance: { q: "Why ask instead of simply tell?", choices: ["A question pulls the reader into making the judgment themselves", "A question hides the poem's meaning", "A question proves love is foolish", "A question has no effect on the reader"] },
          reveals: "The poem's rhetorical question as the hinge of its argument.",
          conceals: "How the question invites the reader to answer for themselves.",
          ace: "Articulate the rhetorical question; connect it to the poem's weighing of love and loss; extend it to a choice where the answer was not simple."
        },
        {
          id: "answer", name: "The Poem's Answer", image: "images/answer.webp",
          clues: ["After all the warning, the poem does not tell the reader to stop loving dogs.", "It concludes that the love is still worth the grief it costs.", "The longer we've kept them, the more do we grieve — and still we love."],
          identify: { q: "What answer does the poem finally give?", choices: ["That loving a dog is worth it, even though it ends in grief", "That no one should ever love a dog", "That dogs do not really feel love", "That grief can be avoided entirely"] },
          purpose: { q: "How does this answer complete the argument?", choices: ["It resolves the weighing in favor of love, cost and all", "It abandons the poem's question", "It contradicts everything before it", "It has no purpose"] },
          significance: { q: "What does the poem's answer suggest about love and loss?", choices: ["Grief is real, but the years of love are still worth the price", "Love should be avoided to escape grief", "Grief means the love was wasted", "Love and grief have nothing to do with each other"] },
          reveals: "The poem's answer — the love is worth the grief it costs.",
          conceals: "How a warning turns, in the end, into a quiet defense of love.",
          ace: "Articulate the poem's answer; connect it to the earlier warning; extend it to another case where something was worth its cost."
        }
      ]
    },

    ctob: {
      name: "The Weight of Love and Loss",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The poem's opening warning tells the reader to ______ of giving their heart to a dog. (one word)",
          evidence: ["The speaker addresses 'Brothers and Sisters' directly.", "The word is a warning: to be careful or on guard.", "The word begins with 'bew…'."],
          hints: ["It means to be careful or watch out.", "Bew…", "The word is beware."],
          answer: "beware"
        },
        {
          type: "mc",
          prompt: "When the speaker calls the reader 'Brothers and Sisters' and speaks to them directly, the poem is using —",
          options: [
            "apostrophe — direct address to the reader.",
            "a simile comparing two things.",
            "a list of facts about dogs.",
            "a rhyme scheme only."
          ],
          hints: ["Think about who the speaker is talking to.", "Which term names speaking straight to the reader?"]
        },
        {
          type: "mc",
          prompt: "The main reason loving a dog so often ends in grief, according to the poem, is that —",
          options: [
            "a dog's life is far shorter than a person's, so we usually outlive it.",
            "dogs are unfriendly and hard to love.",
            "people quickly forget their dogs.",
            "dogs cost too much money to keep."
          ],
          hints: ["Think about the contrast in life spans.", "Who is likely to outlive whom?"]
        },
        {
          type: "digit",
          prompt: "In its title, the poem names one kind of animal, and it is the same animal all the way through. How many different kinds of animal does the poem center on? Enter the number.",
          evidence: ["Read the title: 'The Power of the Dog.'", "The whole poem is about loving this one animal.", "One and only one kind of animal."],
          hints: ["The title names the single animal.", "It is a single kind of animal.", "The number is 1."],
          answer: "1"
        },
        {
          type: "sequence",
          prompt: "Put the moves of the poem's argument in the order they unfold, earliest first.",
          items: [
            "The warning to beware of giving your heart to a dog.",
            "The years of devotion — the joy of loving a dog.",
            "The grief when the dog's short life ends.",
            "The answer that the love is still worth the cost."
          ],
          hints: ["The poem opens with a warning.", "Joy comes before the grief.", "The poem's answer comes last of all."]
        },
        {
          type: "mc",
          prompt: "The poem's final position on whether to love a dog is that —",
          options: [
            "the love is worth it, even though it ends in grief.",
            "no one should ever love a dog.",
            "grief can be avoided by loving carefully.",
            "dogs are not worth any feeling at all."
          ],
          hints: ["Notice that the warning does not end in a simple 'no.'", "The longer we keep them, the more we grieve — and still we love."]
        }
      ]
    },

    arcade: {
      name: "Joy or Grief?",
      instruction: "'The Power of the Dog' weighs the joy of loving a dog against the grief of losing one. Sort each image by the side of the poem's argument it belongs to: is it about THE JOY OF LOVING A DOG, or THE GRIEF OF LOSING ONE? Reasoning earns the points.",
      buckets: [
        { id: "joy", label: "The joy of loving a dog", short: "Joy" },
        { id: "grief", label: "The grief of losing one", short: "Grief" }
      ],
      cards: [
        { text: "Years of a dog's faithful, steady devotion.", bucket: "joy", why: "The devotion is the reward side of the poem's ledger." },
        { text: "The daily companionship of a loyal dog.", bucket: "joy", why: "Companionship is part of the joy the poem weighs." },
        { text: "The warmth of love returned by a devoted animal.", bucket: "joy", why: "Returned love is the gift the years bring." },
        { text: "The longer we keep them, the more we love them.", bucket: "joy", why: "The deepening of love over the years is the joy side." },
        { text: "Giving your heart 'to a dog to tear.'", bucket: "grief", why: "The image names the sorrow love opens us to." },
        { text: "The death that ends a dog's short life.", bucket: "grief", why: "The loss at the end is the cost the poem warns of." },
        { text: "The deep sorrow of the empty place a dog leaves.", bucket: "grief", why: "The grief after loss is the price of the love." },
        { text: "The longer we've kept them, the more do we grieve.", bucket: "grief", why: "Deeper love makes the grief at the end sharper." }
      ],
      followup: "The poem sets the years of joy directly against the grief of loss — and its very last move is to weigh them. What does the poem's answer suggest about whether that joy is worth the grief it costs?"
    },

    analysis: {
      mcq: [
        {
          q: "The central argument of 'The Power of the Dog' is about —",
          options: [
            "whether to give your heart to a dog whose life is far shorter than yours.",
            "how to train a dog to obey commands.",
            "which breed of dog is the most loyal.",
            "the history of dogs in warfare."
          ],
          why: "The poem weighs the joy of loving a dog against the grief of losing one, and asks whether the love is worth it."
        },
        {
          q: "When the speaker says 'Brothers and Sisters, I bid you beware,' the poem is using —",
          options: [
            "apostrophe — direct address to the reader.",
            "a simile comparing two unlike things.",
            "a factual definition of a term.",
            "a rhyme scheme with no meaning."
          ],
          why: "The speaker addresses the reader directly, which is apostrophe."
        },
        {
          q: "The poem gives grief as the price of loving a dog mainly because —",
          options: [
            "a dog's life is far shorter than a person's, so we usually outlive it.",
            "dogs are difficult and unpleasant to keep.",
            "people lose interest in their dogs over time.",
            "dogs cannot feel any affection in return."
          ],
          why: "The short life of the dog against the longer human life is the poem's core contrast."
        },
        {
          q: "The line 'why should we give our hearts to a dog to tear?' is best described as —",
          options: [
            "a rhetorical question that presses the reader to weigh the choice.",
            "a real question the speaker needs answered with a fact.",
            "a command telling the reader what to do.",
            "a definition of the word 'heart.'"
          ],
          why: "It is asked for effect, to make the reader think, not to get an answer — a rhetorical question."
        },
        {
          q: "By the end, the poem concludes that —",
          options: [
            "the love is worth it, even though it ends in grief.",
            "no one should ever love a dog.",
            "grief can be avoided by loving less.",
            "dogs deserve no real affection."
          ],
          why: "Despite the warning, the poem defends the love: the longer we keep them, the more we grieve — and still the love is worth it."
        }
      ],
      short: [
        "Choose one image or move from the Heart Given Away. Explain what it shows and what it reveals about the poem's argument.",
        "The poem weighs the years of devotion against the grief at the end. Explain what this weighing suggests about the kind of love the poem describes.",
        "Explain how the poem uses apostrophe — speaking directly to the reader as 'Brothers and Sisters.' How does addressing the reader change the feeling of the poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 'The Power of the Dog' use apostrophe and a rhetorical question to make an argument about whether love is worth its grief? Make a claim and support it with specific images or lines from the poem.",
      aceReflection: "Articulate what the poem suggests about love and loss in your own words. Connect two parts of the poem that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "'The Power of the Dog' carries one big idea — that grief is the price of love — through a poem that weighs both sides honestly. Choose another poem, song, story, or real situation that does the same thing (facing the cost of loving something you may lose). Explain the connection with evidence: what is loved, what is risked, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's 'grief is the price of love' argument to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'The Power of the Dog' argues that loving a dog is worth the grief it costs. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'The Power of the Dog.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] in 'The Power of the Dog' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about 'The Power of the Dog': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect this poem's idea — that grief is the price of love — to another text or situation: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'The Power of the Dog' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Rudyard Kipling's 'The Power of the Dog' as a short lyric poem — a study of apostrophe, refrain, rhetorical question, tone, and an argument that weighs love against loss. The poem is in the public domain, so this room reproduces no copyrighted edition; it paraphrases longer stretches and quotes only brief public-domain phrases. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "'The Power of the Dog' appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem is in the public domain in the United States (an early-twentieth-century work by Rudyard Kipling). This room still paraphrases longer stretches and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's apostrophe, refrain, rhetorical question, and argument academically and neutrally. Note that the poem deals with the death of a pet (grief); preview it for your grade level and follow your district's policy and community expectations.",
        "Details here were checked against the poem's content anchors: the opening apostrophe warning 'Brothers and Sisters, I bid you beware'; the metaphor of giving your heart 'to a dog to tear'; the contrast between a dog's short life and a person's longer one; the years of devotion; the grief at the end; the rhetorical question 'why should we give our hearts to a dog to tear?'; and the poem's answer that 'the more do we grieve' the more we have loved. Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 6 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, and theme — especially apostrophe, refrain, rhetorical question, tone, and how a poem develops an argument. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.6.2", "RL.6.4", "RL.6.5", "W.6.1", "SL.6.1", "L.6.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
