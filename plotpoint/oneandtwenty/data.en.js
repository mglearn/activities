/* PlotPoint — "When I Was One-and-Twenty," A. E. Housman, from A Shropshire Lad (1896).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: A Shropshire Lad (1896) is public domain in the United States, so this
   room may reference the poem directly. "When I Was One-and-Twenty" is studied here as
   LITERATURE — its ballad-like form, the age motif, irony, repetition, and rueful tone — in a
   neutral, academic frame consistent with the Texas required literary-works list (19 TAC
   §110.70, English IV / high school). The room paraphrases, quotes only brief public-domain
   phrases where a close reading needs them, and reproduces no copyrighted edition.
   Standards are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts
   are clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "oneandtwenty",
  storageKey: "plotpoint.oneandtwenty.v1",

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
    "enter.readListenNote": "A Shropshire Lad is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for When I Was One-and-Twenty",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Young Man's Ledger",
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
    "ctob.title": "A Year and a Lesson",
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
    "arcade.title": "Won't Listen or Now Knows?",
    "arcade.default": "Sort each line by where it belongs in the poem's turn from youth to regret.",
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
    "print.item.relic": "Young Man's Ledger evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Wisdom-transfer organizer",
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
      title: "When I Was One-and-Twenty",
      author: "A. E. Housman",
      grades: "English IV",
      genre: "Poetry · Lyric",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1896)",
      textAccess: "A short public-domain poem from A Shropshire Lad; use your class's copy or any public-domain text.",
      copyright: "A. E. Housman's A Shropshire Lad (1896), which contains \"When I Was One-and-Twenty,\" is in the public domain in the United States, so this room may reference the poem directly. It is studied here as literature — its ballad-like form, the age motif, irony, and tone. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as literature — ballad form, the age motif, irony, repetition, and rueful tone — in a neutral, academic way, consistent with the Texas required literary-works list adopted in 2026 under 19 TAC §110.70 (English IV / high school), with implementation no earlier than the 2030–2031 school year. Because the poem is public domain, it also satisfies the identical-text requirement. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"When I Was One-and-Twenty\" — a young man at a crossroads holding a small purse of coins in one hand and his other hand over his heart, an older, wiser figure gesturing in the background, warm dusk light and a wistful, backward-looking mood."
    },
    hook: "Two short stanzas. One year of a life. A young man of twenty-one hears a wise man's warning about love — give away your money if you must, but never give your heart away — and he shrugs it off: \"No use to talk to me.\" A single stanza later he is twenty-two, and the whole poem turns on two small repeated words: \"'tis true, 'tis true.\" Read it as a lyric, and watch how a ballad-like rhythm and one small jump in age carry the oldest lesson there is: some wisdom you only believe after it has already cost you.",
    goals: [
      "Understand \"When I Was One-and-Twenty\" as a short, ballad-like lyric in two stanzas about the folly of young love and wisdom learned too late.",
      "Analyze the age motif — \"one-and-twenty\" (21) turning to \"two-and-twenty\" (22) — and how a single year marks the arrival of painful wisdom.",
      "Trace the poem's irony: the young speaker dismisses advice he soon learns, through experience, was true all along.",
      "Interpret how ballad form, repetition (\"'tis true, 'tis true\"), and a rueful tone shape the theme that wisdom often comes only through regret."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a ballad-like lyric and an age motif.",
        "Discuss: why do people so often ignore good advice — and only believe it after they have been hurt?"
      ],
      during: [
        "Use the Young Man's Ledger to slow down and read the poem stanza by stanza.",
        "Track the turn: from a twenty-one-year-old who won't listen, to a twenty-two-year-old who now knows the wise man was right."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the age motif, the irony, and the poem's structure.",
        "Complete the Extend task to carry the wisdom-learned-too-late theme to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the lesson the wise man gives and how the speaker responds. Include one line or image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the two stanzas — the advice given at twenty-one and the admission made at twenty-two. Explain how the single year between them shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's idea — wisdom that is only believed after it costs us something — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "ballad", def: "A short narrative poem in simple, songlike stanzas and rhythm, often telling a story of love or loss.", example: "A two-stanza poem with a steady, singing beat about a young man's regret.", nonexample: "A long, dense essay with no rhythm or story.", context: "Housman's lyric has the songlike form and rhythm of a ballad." },
      { term: "irony", def: "A contrast between what is expected or said and what actually happens or is true.", example: "A young man dismissing advice he very soon learns was right.", nonexample: "Someone saying exactly what they mean, and being correct.", context: "The poem's irony is that the speaker rejects wisdom he almost immediately proves true." },
      { term: "motif", def: "A recurring image, word, or idea that runs through a work and builds its meaning.", example: "The repeated statement of the speaker's age — 'one-and-twenty,' then 'two-and-twenty.'", nonexample: "A detail mentioned once and never returned to.", context: "The age motif frames the whole poem and marks its turn." },
      { term: "repetition", def: "Repeating a word or phrase for emphasis or emotional effect.", example: "The closing line 'And oh, 'tis true, 'tis true.'", nonexample: "Saying something only once, in passing.", context: "The repetition of 'tis true' drives home the speaker's rueful realization." },
      { term: "tone", def: "The speaker's attitude toward the subject, felt through word choice and rhythm.", example: "The rueful, wistful tone of a man looking back on his younger self.", nonexample: "A flat instruction manual with no attitude at all.", context: "By the end the poem's tone turns rueful and regretful." },
      { term: "theme", def: "The central idea or insight about life that a work explores.", example: "That wisdom about love often arrives only through painful experience.", nonexample: "The simple summary of what happens in a poem.", context: "The theme is the folly of youth in love and wisdom learned too late." },
      { term: "speaker", def: "The voice that 'says' a poem, who is not always the poet.", example: "The older, wiser voice looking back on himself at twenty-one.", nonexample: "The printer who set the poem in type.", context: "The speaker narrates his own younger folly from a year's distance." },
      { term: "rue", def: "Bitter regret or sorrow for something done or not done.", example: "The 'endless rue' the speaker pays for giving his heart away.", nonexample: "Cheerful satisfaction with a choice.", context: "Giving the heart away is 'sold for endless rue' — lasting regret." },
      { term: "guineas", def: "Old British gold coins; here, a symbol of money and riches worth giving away.", example: "'Give crowns and pounds and guineas' — money the wise man says to spend freely.", nonexample: "A priceless keepsake no one would part with.", context: "The wise man says to give away crowns, pounds, and guineas — but not the heart." }
    ],

    relic: {
      name: "The Young Man's Ledger",
      intro: "Seven instructional reconstructions of the moments and images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "oneandtwenty", name: "When I Was One-and-Twenty", image: "images/oneandtwenty.webp",
          clues: ["The poem opens by naming the speaker's exact age — 'one-and-twenty.'", "This phrase is repeated and becomes the title and refrain.", "It frames the whole poem as a look back at the speaker's younger self."],
          identify: { q: "What does the phrase 'one-and-twenty' name?", choices: ["The speaker's age — twenty-one — when he heard the advice", "The number of stanzas in the poem", "The name of the wise man", "The number of coins he gave away"] },
          purpose: { q: "What is this phrase's role in the poem?", choices: ["It is the age motif that frames the poem and sets up its turn", "It is a random detail with no meaning", "It describes the wise man's age", "It ends the poem"] },
          significance: { q: "Why open with the speaker's exact age?", choices: ["It marks a specific moment of youth the poem will look back on and measure against", "It shows the speaker is very old", "It is only there for rhyme", "It hides the poem's meaning"] },
          reveals: "The age motif that frames the poem and prepares its turn.",
          conceals: "How a single number becomes the whole poem's measuring stick.",
          ace: "Articulate what 'one-and-twenty' names; connect it to the poem's backward-looking view; extend it to how naming an exact age can shape a memory."
        },
        {
          id: "wiseman", name: "The Wise Man's Advice", image: "images/wiseman.webp",
          clues: ["A 'wise man' speaks the counsel at the heart of the poem.", "He warns the young speaker specifically about matters of the heart.", "His advice is the wisdom the speaker will later prove true."],
          identify: { q: "Who gives the advice in the poem?", choices: ["A wise man the speaker heard when he was twenty-one", "The speaker's mother", "A stranger on a road", "The speaker himself, older"] },
          purpose: { q: "What is the wise man's role?", choices: ["He is the advice-giver whose warning the poem tests", "He is the poem's villain", "He is only mentioned once by accident", "He tells a joke"] },
          significance: { q: "Why does the poem need a wise man?", choices: ["His counsel sets up the irony — advice the young speaker rejects and soon learns is true", "To make the speaker look foolish for no reason", "To fill space in the stanza", "To change the subject away from love"] },
          reveals: "The source of the wisdom the poem will prove true.",
          conceals: "How the wise man's warning quietly predicts the whole second stanza.",
          ace: "Articulate who the wise man is; connect his advice to the poem's ending; extend it to a warning you once received and only later believed."
        },
        {
          id: "heartaway", name: "Give... But Not Your Heart Away", image: "images/heartaway.webp",
          clues: ["The wise man says to give away 'crowns and pounds and guineas.'", "But he warns, 'not your heart away.'", "The advice is to keep your 'fancy free' instead."],
          identify: { q: "What exactly does the wise man advise?", choices: ["Give away money and riches freely, but guard your heart", "Give away your heart but keep your money", "Give away nothing at all", "Give away both money and heart"] },
          purpose: { q: "What does this contrast set up?", choices: ["Money can be spent freely, but the heart must be protected", "That the speaker is poor", "That money is worthless", "That the wise man is greedy"] },
          significance: { q: "What does keeping your 'fancy free' mean here?", choices: ["Staying unattached and heart-whole rather than falling in love", "Spending money on entertainment", "Ignoring all advice", "Traveling widely"] },
          reveals: "The core of the wise man's counsel: guard the heart above all.",
          conceals: "How the poem values the heart against everything money can buy.",
          ace: "Articulate the money-versus-heart contrast; connect it to the poem's theme; extend it to something else people are told to protect."
        },
        {
          id: "notalk", name: "No Use to Talk to Me", image: "images/notalk.webp",
          clues: ["After the advice, the young speaker refuses to listen.", "He says, 'But I was one-and-twenty, / No use to talk to me.'", "His youth is his whole reason for ignoring the warning."],
          identify: { q: "How does the young speaker respond to the advice?", choices: ["He ignores it — 'No use to talk to me'", "He thanks the wise man and obeys", "He argues point by point", "He gives away his heart on purpose to prove a point"] },
          purpose: { q: "What does this refusal show?", choices: ["The stubborn confidence of youth that will not be advised", "That the advice was wrong", "That the speaker never heard it", "That the wise man gave up"] },
          significance: { q: "Why does he blame his age — 'I was one-and-twenty'?", choices: ["The poem ties his refusal to listen directly to his youth", "His age has nothing to do with it", "He is proud of being old", "He is quoting the wise man"] },
          reveals: "The folly of youth — dismissing wisdom because of confidence, not reason.",
          conceals: "How this refusal makes the coming reversal sting.",
          ace: "Articulate the speaker's refusal; connect it to his age; extend it to a time confidence made someone ignore good advice."
        },
        {
          id: "endlessrue", name: "Sighs a Plenty... Endless Rue", image: "images/endlessrue.webp",
          clues: ["The wise man warns that the heart 'was never given in vain.'", "Giving it away is paid for 'with sighs a plenty.'", "And 'sold for endless rue' — lasting regret."],
          identify: { q: "According to the wise man, what is the price of giving your heart away?", choices: ["Sighs a plenty and endless rue — lasting regret", "Great wealth and happiness", "Nothing at all", "A single day of sadness"] },
          purpose: { q: "What is the role of this warning in the poem?", choices: ["It names the exact cost the speaker will later feel", "It praises falling in love", "It describes the wise man's own life", "It ends the first stanza happily"] },
          significance: { q: "What does 'endless rue' emphasize about the cost?", choices: ["The regret is lasting, not a passing mood", "The regret is brief and easily forgotten", "There is no regret", "The cost is only money"] },
          reveals: "The heavy, lasting price the poem sets on giving the heart away.",
          conceals: "How the word 'endless' quietly predicts the speaker's future.",
          ace: "Articulate the price named here; connect it to the poem's ending; extend it to how strong word choice can predict an outcome."
        },
        {
          id: "twoandtwenty", name: "And I Am Two-and-Twenty", image: "images/twoandtwenty.webp",
          clues: ["The second stanza jumps the speaker's age forward.", "He is now 'two-and-twenty' — twenty-two.", "Only a single year has passed since the advice."],
          identify: { q: "What has changed by the second stanza?", choices: ["The speaker is now twenty-two — one year older", "The speaker is now very old", "The wise man has returned", "The speaker has become rich"] },
          purpose: { q: "Why does the poem mark this exact one-year jump?", choices: ["It shows how quickly the painful wisdom arrived — just one year", "To show the speaker never aged", "To describe a long lifetime", "To change the poem into a different story"] },
          significance: { q: "How does 'two-and-twenty' complete the age motif?", choices: ["It answers 'one-and-twenty' and marks the turn from folly to knowing", "It has nothing to do with the opening age", "It cancels the first stanza", "It repeats the same age"] },
          reveals: "The turn of the poem, measured by a single year.",
          conceals: "How much regret the poem packs into just twelve months.",
          ace: "Articulate the one-year jump; connect it to the age motif; extend it to how fast a hard lesson can arrive."
        },
        {
          id: "tistrue", name: "'Tis True, 'Tis True", image: "images/tistrue.webp",
          clues: ["The poem's final line is 'And oh, 'tis true, 'tis true.'", "The phrase is repeated for emphasis.", "It is the speaker's rueful admission that the wise man was right."],
          identify: { q: "What does the repeated closing line admit?", choices: ["That the wise man's advice was true after all", "That the speaker is still young and foolish", "That money matters more than love", "That the wise man was wrong"] },
          purpose: { q: "What is the effect of repeating ''tis true'?", choices: ["The repetition drives home the speaker's regretful realization", "It confuses the reader", "It changes the subject", "It cancels the poem's meaning"] },
          significance: { q: "How does this ending complete the poem's irony?", choices: ["The advice he once dismissed he now confirms — proven right by his own pain", "The advice is finally shown to be false", "The wise man reappears to gloat", "The speaker learns nothing"] },
          reveals: "The rueful admission that closes the poem and confirms its irony.",
          conceals: "How two small repeated words carry a whole poem's regret.",
          ace: "Articulate what the closing line admits; connect the repetition to the tone; extend it to a moment you finally admitted someone was right."
        }
      ]
    },

    ctob: {
      name: "A Year and a Lesson",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The person who gives the speaker advice is called a ______ man. (one word)",
          evidence: ["This figure speaks the counsel at the heart of the first stanza.", "The poem calls him this because of the wisdom he offers.", "The word begins with 'wi…'."],
          hints: ["He knows better than the young speaker.", "Wi…", "The word is wise."],
          answer: "wise"
        },
        {
          type: "mc",
          prompt: "The wise man's main advice to the young speaker is to —",
          options: [
            "give away money freely, but not give his heart away.",
            "give away his heart, but keep all his money.",
            "give away nothing at all and trust no one.",
            "leave home and seek his fortune abroad."
          ],
          hints: ["Notice what he says to give freely versus what to guard.", "'Give crowns and pounds and guineas / But not your heart away.'"]
        },
        {
          type: "mc",
          prompt: "The young speaker responds to the wise man's advice by —",
          options: [
            "ignoring it — 'No use to talk to me.'",
            "carefully following every word of it.",
            "arguing that money matters more than love.",
            "asking the wise man to repeat it."
          ],
          hints: ["Think about how a confident twenty-one-year-old reacts to a warning.", "He blames his youth: 'But I was one-and-twenty.'"]
        },
        {
          type: "digit",
          prompt: "At what age was the speaker given the advice? Enter the number.",
          evidence: ["The title and refrain name it directly: 'one-and-twenty.'", "'One-and-twenty' is an old way of saying twenty plus one.", "Twenty plus one."],
          hints: ["'One-and-twenty' means this number.", "Twenty plus one.", "The number is 21."],
          answer: "21"
        },
        {
          type: "sequence",
          prompt: "Put the poem's moments in the order they appear, earliest first.",
          items: [
            "The wise man advises giving money away, but not the heart.",
            "The young speaker refuses to listen — 'No use to talk to me.'",
            "A year passes and the speaker is now two-and-twenty.",
            "He ruefully admits the advice was true — ''tis true, 'tis true.'"
          ],
          hints: ["The advice comes first, in the first stanza.", "The refusal follows the advice.", "The admission closes the poem, after the year has passed."]
        },
        {
          type: "mc",
          prompt: "Between the two stanzas, the speaker's attitude toward the advice changes from —",
          options: [
            "dismissing it as useless to admitting, ruefully, that it was true.",
            "believing it fully to rejecting it as false.",
            "confusion to greater confusion.",
            "anger at the wise man to friendship with him."
          ],
          hints: ["Compare 'No use to talk to me' with 'And oh, 'tis true, 'tis true.'", "The change is the poem's central irony."]
        }
      ]
    },

    arcade: {
      name: "Won't Listen or Now Knows?",
      instruction: "The poem turns on a single year: at twenty-one the speaker won't listen, and at twenty-two he ruefully knows better. Sort each line by which moment it belongs to: is it from the young speaker who WON'T LISTEN (or the advice he ignores), or from the older speaker who NOW KNOWS? Reasoning earns the points.",
      buckets: [
        { id: "wontlisten", label: "At twenty-one (won't listen)", short: "Won't listen" },
        { id: "nowknows", label: "At twenty-two (now knows)", short: "Now knows" }
      ],
      cards: [
        { text: "The wise man's advice: 'not your heart away.'", bucket: "wontlisten", why: "It belongs to the first stanza, when the speaker was twenty-one and would not heed it." },
        { text: "'Give crowns and pounds and guineas.'", bucket: "wontlisten", why: "Part of the warning delivered while the speaker was one-and-twenty." },
        { text: "'But I was one-and-twenty, / No use to talk to me.'", bucket: "wontlisten", why: "The young speaker's own refusal to listen." },
        { text: "Keeping the 'fancy free' — staying unattached.", bucket: "wontlisten", why: "The advice about the heart, given at twenty-one and ignored." },
        { text: "'And I am two-and-twenty.'", bucket: "nowknows", why: "The second stanza marks the speaker a year older and wiser." },
        { text: "'And oh, 'tis true, 'tis true.'", bucket: "nowknows", why: "The rueful admission that the advice was right after all." },
        { text: "Feeling the 'endless rue' the wise man predicted.", bucket: "nowknows", why: "The lasting regret the older speaker now knows firsthand." },
        { text: "Admitting the wise man was right all along.", bucket: "nowknows", why: "The knowing that comes only after the painful experience." }
      ],
      followup: "The poem places the refusal and the admission just one stanza — and one year — apart. What does that tiny distance suggest about how, and how fast, wisdom about the heart tends to arrive?"
    },

    analysis: {
      mcq: [
        {
          q: "The central situation of the poem is —",
          options: [
            "a young man ignoring a wise man's advice about love, then learning it was true.",
            "a wise man losing all his money to a foolish young man.",
            "two friends arguing about how to spend their fortune.",
            "an old man giving up on love entirely."
          ],
          why: "The wise man warns against giving the heart away; the speaker ignores him, then admits he was right."
        },
        {
          q: "The wise man tells the speaker he may give away 'crowns and pounds and guineas' but should —",
          options: [
            "not give his heart away.",
            "not give his money away.",
            "not travel far from home.",
            "not trust any wise men."
          ],
          why: "The advice values the heart above money: spend freely, but guard the heart."
        },
        {
          q: "The shift from 'one-and-twenty' to 'two-and-twenty' mainly works to —",
          options: [
            "show how quickly — in just one year — painful wisdom arrived.",
            "prove the speaker never really aged.",
            "describe a long lifetime of experience.",
            "change the poem into a different story."
          ],
          why: "The age motif marks a single year as the distance between folly and rueful knowing."
        },
        {
          q: "The poem's irony is that the speaker —",
          options: [
            "dismisses advice he almost immediately learns, through his own pain, was true.",
            "gives advice no one ever follows.",
            "grows wealthy by ignoring the wise man.",
            "forgets the advice entirely by the end."
          ],
          why: "He rejects the warning at twenty-one and confirms it at twenty-two — the heart of the poem's irony."
        },
        {
          q: "The repetition in the final line, 'And oh, 'tis true, 'tis true,' mainly conveys the speaker's —",
          options: [
            "rueful realization that the wise man was right.",
            "cheerful pride in his own choices.",
            "confusion about what happened.",
            "anger at being given advice."
          ],
          why: "Repeating ''tis true' emphasizes the regretful admission and the poem's wistful tone."
        }
      ],
      short: [
        "Choose one moment or image from the Young Man's Ledger. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem marks only one year between the advice and the admission ('one-and-twenty' to 'two-and-twenty'). Explain what this small gap suggests about how wisdom arrives.",
        "Explain the poem's irony. How does the speaker's change from 'No use to talk to me' to ''tis true, 'tis true' shape the feeling of the poem?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"When I Was One-and-Twenty\" use the age motif and irony to express the idea that wisdom often comes only through painful experience? Make a claim and support it with specific lines or images from the poem.",
      aceReflection: "Articulate what the poem suggests about wisdom and regret in your own words. Connect the advice given at twenty-one to the admission made at twenty-two. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Wisdom Learned Too Late",
      prompt: "\"When I Was One-and-Twenty\" carries one big idea — that we often believe hard-won wisdom only after it has cost us — through the age motif and its rueful turn. Choose another poem, song, story, or real situation that shows the same thing: advice ignored and then proven true by experience. Explain the connection with evidence: what is the wisdom, how is it ignored, how is it later confirmed, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's wisdom-learned-too-late theme to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"When I Was One-and-Twenty\" uses the age motif and irony to show wisdom learned too late. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"When I Was One-and-Twenty.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think the advice given at twenty-one connects to the admission made at twenty-two in \"When I Was One-and-Twenty\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"When I Was One-and-Twenty\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the poem's wisdom-learned-too-late theme to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"When I Was One-and-Twenty\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of A. E. Housman's \"When I Was One-and-Twenty\" (from A Shropshire Lad, 1896) as a short, ballad-like lyric — a study of the age motif, irony, repetition, tone, and theme. The poem is public domain, so it can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"When I Was One-and-Twenty\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English IV / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem is from A Shropshire Lad (1896), which is public domain in the United States — so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's ballad-like form, the age motif (21 → 22), its irony, and its rueful tone academically and neutrally, and follow your district's policy and community expectations.",
        "Details here were checked against the poem's text (the opening age 'one-and-twenty'; the wise man's advice to give 'crowns and pounds and guineas' but 'not your heart away'; keeping the 'fancy free'; 'No use to talk to me'; the heart 'never given in vain'; 'sighs a plenty' and 'sold for endless rue'; the turn to 'two-and-twenty'; and the closing 'And oh, 'tis true, 'tis true'). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course (English IV) and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English IV / high school ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, tone, and theme — especially irony, motif, and repetition in lyric poetry. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
