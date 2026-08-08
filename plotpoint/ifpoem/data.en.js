/* PlotPoint — "If—" by Rudyard Kipling (1910).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: "If—" (first published 1910) is in the public domain in the
   United States, so this room may reference the poem directly. It is studied here
   as LITERATURE — anaphora, the extended conditional structure, parallelism, and
   personification — in a neutral, academic frame consistent with the Texas required
   literary-works list (19 TAC §110.70, English III / high school). The room
   paraphrases, quotes only brief public-domain phrases where a close reading needs
   them, and reproduces no copyrighted edition. Standards are good-faith alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the
   engine shuffles. */
window.__ROOM__ = {
  id: "ifpoem",
  storageKey: "plotpoint.ifpoem.v1",

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
    "enter.readListenNote": "\"If—\" is in the public domain. Use your class's edition or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for If—",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Father's Counsel",
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
    "ctob.title": "The Making of a Man",
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
    "arcade.title": "Adversity or Temptation?",
    "arcade.default": "Sort each challenge by the kind of test it names in the poem.",
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
    "print.item.relic": "Father's Counsel evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Conditional-structure organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/If%E2%80%94",
      title: "If—",
      author: "Rudyard Kipling",
      grades: "English III",
      genre: "Poetry · Didactic",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1910)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "\"If—\" (first published 1910) is in the public domain in the United States, so this room may reference the poem directly. It is studied here as literature — its anaphora, conditional structure, and personification. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "\"If—\" appears on the Texas required literary-works list adopted 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Presented as literature — anaphora, conditional structure, and personification — in a neutral, academic way. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Kipling's \"If—\": a father speaking quietly with his son at a doorway, morning light behind them, suggesting steady advice passed from one generation to the next."
    },
    hook: "One poem. One long sentence. Line after line, it stacks up conditions — \"If you can keep your head… If you can wait… If you can dream…\" — and holds back its reward until the very last two lines. \"If—\" reads like advice a father hands a son, but its real subject is self-mastery: staying steady when things go well and when they go wrong. Read it as a poem, and watch how the repeated \"If you can\" builds toward a single, delayed answer.",
    goals: [
      "Understand \"If—\" as a didactic poem of advice built as one extended conditional sentence, resolved only in its final couplet.",
      "Analyze the anaphora — the repeated \"If you can…\" — and how parallel structure drives the poem forward.",
      "Trace how the poem pairs opposites (Triumph and Disaster, dreams and thoughts, crowds and kings) to define balance and self-mastery.",
      "Interpret how personification and a withheld reward shape the poem's theme of stoic resilience — and why it has become one of the best-known poems in English."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of anaphora and conditional (\"if… then\") structure.",
        "Discuss: how can a whole poem be a single sentence, and why might a writer delay the point until the very end?"
      ],
      during: [
        "Use the Father's Counsel to slow down and read the poem condition by condition.",
        "Track the pattern: notice how nearly every stanza pairs a hardship with a temptation, adversity with success."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the anaphora, the paired opposites, and the withheld payoff.",
        "Complete the Extend task to carry the poem's \"if you can…\" structure or its balance-of-opposites idea to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what \"If—\" is really about. Include one \"If you can…\" condition from the poem that helped you understand its main idea." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the poem's paired opposites — for example Triumph and Disaster, or dreaming and thinking. Explain how holding both in balance shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — a stack of \"if you can…\" conditions building to one delayed reward — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "anaphora", def: "The deliberate repetition of the same word or phrase at the start of successive lines or clauses.", example: "The repeated \"If you can…\" that opens line after line.", nonexample: "A word repeated once by accident with no pattern.", context: "The poem's anaphora — \"If you can\" again and again — is its engine." },
      { term: "conditional", def: "An \"if… then\" structure that makes one thing depend on another.", example: "\"If you can keep your head… you'll be a Man.\"", nonexample: "A flat statement of fact with no \"if.\"", context: "The whole poem is one long conditional whose \"then\" waits until the end." },
      { term: "parallelism", def: "Repeating the same grammatical pattern across phrases or lines to create balance.", example: "\"If you can dream… If you can think…\" built on the same frame.", nonexample: "Sentences with no matching structure at all.", context: "Parallelism keeps each new condition echoing the ones before it." },
      { term: "personification", def: "Giving human qualities or actions to an idea, object, or force.", example: "Naming Triumph and Disaster as \"two impostors,\" or the Will that says \"Hold on.\"", nonexample: "Describing a person doing an ordinary human action.", context: "The poem personifies Triumph, Disaster, and even the Will." },
      { term: "didactic", def: "Intended to teach a lesson or give moral instruction.", example: "A poem offering advice on how to live well.", nonexample: "A poem written only to describe a landscape.", context: "\"If—\" is didactic: it advises the reader how to become mature." },
      { term: "tone", def: "The writer's attitude toward the subject, conveyed through word choice.", example: "The calm, steady, encouraging voice of the poem.", nonexample: "The plot of a story.", context: "The poem's tone is measured and mentoring, never frantic." },
      { term: "theme", def: "The central idea or insight about life that a work explores.", example: "Self-mastery and balance as the making of maturity.", nonexample: "A single vocabulary word with no larger meaning.", context: "The theme of \"If—\" is stoic resilience and self-control." },
      { term: "couplet", def: "Two consecutive lines, often rhymed, that work as a pair.", example: "The final two lines that at last deliver the poem's reward.", nonexample: "A single stray line with no partner.", context: "The withheld payoff arrives in the poem's closing couplet." },
      { term: "impostor", def: "Someone or something that pretends to be more real or important than it is.", example: "Calling both Triumph and Disaster \"impostors\" that shouldn't rule you.", nonexample: "A trustworthy guide you should always follow.", context: "The poem treats Triumph and Disaster as impostors to be met the same way." }
    ],

    relic: {
      name: "The Father's Counsel",
      intro: "Seven instructional reconstructions of the images and ideas in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "refrain", name: "The \"If You Can…\" Refrain", image: "images/refrain.webp",
          clues: ["Line after line opens with the same two words: \"If you can…\"", "Each new line adds another condition to a growing list.", "The reward for all these conditions never comes until the very end."],
          identify: { q: "What repeated device opens line after line of the poem?", choices: ["The anaphora \"If you can…,\" beginning a new condition each time", "A rhymed refrain sung as a chorus", "A question asked again and again", "A different first word in every line"] },
          purpose: { q: "What is the role of this repeated conditional frame?", choices: ["It builds one long sentence of conditions that all lead to a single delayed reward", "It restarts the poem's meaning with each line", "It lists unrelated facts", "It has no effect on structure"] },
          significance: { q: "Why hold the \"then\" of the conditions until the last lines?", choices: ["Delaying the payoff makes every condition feel necessary and heightens the final reward", "It hides the poem's meaning by mistake", "It shows the speaker is unsure", "It ends the poem early"] },
          reveals: "The anaphora and conditional frame that organize the whole poem.",
          conceals: "How a single suspended sentence holds all the poem's advice together.",
          ace: "Articulate what the repeated \"If you can\" does; connect it to the delayed reward; extend it to why repetition can build momentum in a text."
        },
        {
          id: "head", name: "Keeping Your Head When Others Lose Theirs", image: "images/head.webp",
          clues: ["The first condition is staying calm while everyone around you panics.", "It adds a hard twist: they may even blame you for the trouble.", "The virtue named is composure under pressure."],
          identify: { q: "What is the poem's very first condition?", choices: ["Keeping your head, and calm, while others panic and blame you", "Winning an argument at any cost", "Avoiding all difficult people", "Never making a decision"] },
          purpose: { q: "What virtue does this opening condition name?", choices: ["Composure and self-control under pressure", "Ambition for wealth", "A talent for public speaking", "Physical strength"] },
          significance: { q: "Why make it harder by adding that others blame you?", choices: ["Staying steady even when unfairly blamed shows the deepest kind of self-mastery", "To show the speaker is angry", "To excuse losing your temper", "It has no added meaning"] },
          reveals: "Composure as the poem's first and founding virtue.",
          conceals: "How the poem raises the difficulty of each virtue with a second clause.",
          ace: "Articulate what \"keeping your head\" means here; connect it to being blamed unfairly; extend it to a moment you had to stay calm under pressure."
        },
        {
          id: "impostors", name: "Triumph and Disaster — \"Those Two Impostors\"", image: "images/impostors.webp",
          clues: ["The poem names \"Triumph and Disaster\" as if they were two people.", "It calls them \"those two impostors.\"", "The advice is to \"treat those two impostors just the same.\""],
          identify: { q: "How does the poem treat Triumph and Disaster?", choices: ["It personifies them as \"two impostors\" to be met the same way", "It ranks Triumph far above Disaster", "It ignores both of them", "It describes them as real historical people"] },
          purpose: { q: "What does calling them \"impostors\" suggest?", choices: ["Neither success nor failure is as real or final as it feels — don't let either rule you", "Triumph is a lie but Disaster is true", "Both should be feared equally", "They are unrelated to the poem's advice"] },
          significance: { q: "What does \"treat those two impostors just the same\" ask of the reader?", choices: ["Balance — respond to success and failure with the same steadiness", "Celebrate wildly when you win", "Give up completely when you lose", "Avoid trying anything at all"] },
          reveals: "Personification used to argue for balance between success and failure.",
          conceals: "How treating opposites \"just the same\" becomes the poem's model of maturity.",
          ace: "Articulate why Triumph and Disaster are called impostors; connect that to the idea of balance; extend it to a time you met a win or loss with steadiness."
        },
        {
          id: "dreams", name: "Dreams and Thoughts Without Being Ruled by Them", image: "images/dreams.webp",
          clues: ["The poem says to dream — \"and not make dreams your master.\"", "It says to think — \"and not make thoughts your aim.\"", "Each gift comes with a warning against excess."],
          identify: { q: "What does the poem say about dreaming and thinking?", choices: ["Do both, but don't let dreams master you or thoughts become your only aim", "Never dream or think at all", "Dream constantly and ignore action", "Think only, never dream"] },
          purpose: { q: "Why pair each ability with a limit?", choices: ["To argue for moderation — good qualities become traps when taken to excess", "To forbid imagination", "To praise laziness", "To confuse the reader"] },
          significance: { q: "What idea do these paired warnings develop?", choices: ["Balance and self-mastery — using a gift without being ruled by it", "That dreams are worthless", "That thinking is dangerous", "That the reader should choose one and drop the other"] },
          reveals: "Moderation: strengths must be governed, not obeyed.",
          conceals: "How the poem keeps qualifying each virtue to guard against extremes.",
          ace: "Articulate the warning attached to dreams and thoughts; connect it to the theme of balance; extend it to a strength that can become a weakness if unchecked."
        },
        {
          id: "risk", name: "Risking All and Starting Again", image: "images/risk.webp",
          clues: ["The poem imagines staking all your winnings \"on one turn of pitch-and-toss.\"", "You lose it all — and start again from the beginning.", "You do it \"and never breathe a word about your loss.\""],
          identify: { q: "What scenario does this stanza imagine?", choices: ["Risking everything you've won, losing it, and beginning again in silence", "Saving money and never taking a chance", "Winning easily with no risk", "Refusing to ever compete"] },
          purpose: { q: "What virtue does this test name?", choices: ["Resilience — the strength to start over after total loss", "Recklessness for its own sake", "Greed for winnings", "Pride in success"] },
          significance: { q: "What does \"never breathe a word about your loss\" add?", choices: ["Bearing loss without complaint deepens the resilience being praised", "The speaker wants the loss kept secret dishonestly", "It means the loss did not really happen", "It ends the poem"] },
          reveals: "Resilience pictured as beginning again after everything is lost.",
          conceals: "How the poem asks for endurance without self-pity, not just survival.",
          ace: "Articulate the pitch-and-toss risk; connect losing to starting again; extend it to a setback you had to rebuild from."
        },
        {
          id: "will", name: "The Will That Says \"Hold On\"", image: "images/will.webp",
          clues: ["Near the end there is \"nothing in you\" left except one thing.", "That one thing is the Will.", "The Will speaks a command: \"Hold on!\""],
          identify: { q: "When everything else is gone, what remains?", choices: ["The Will, personified, saying \"Hold on!\"", "A crowd of friends", "A pile of winnings", "The dark valley"] },
          purpose: { q: "Why personify the Will as speaking?", choices: ["Giving the Will a voice dramatizes endurance as an inner command", "To add a second character to a story", "To make the Will a real person", "It has no purpose"] },
          significance: { q: "What does this image add to the poem's theme?", choices: ["Endurance — holding on by sheer will when nothing else is left", "That giving up is fine", "That strength comes only from others", "That the journey is over"] },
          reveals: "Endurance personified as an inner voice that commands you to hold on.",
          conceals: "How the poem locates the last strength inside the self, not outside it.",
          ace: "Articulate what the Will does here; connect it to endurance to the end; extend it to a time your own will was all that kept you going."
        },
        {
          id: "reward", name: "The Withheld Reward — \"You'll Be a Man, My Son\"", image: "images/reward.webp",
          clues: ["Every \"If you can…\" has been waiting for one answer.", "The answer finally arrives in the last two lines.", "The reward: \"Yours is the Earth\" — and, \"which is more,\" you'll be a Man."],
          identify: { q: "What finally arrives in the poem's closing couplet?", choices: ["The long-delayed reward — the whole Earth, and becoming \"a Man\"", "A new list of conditions", "A description of a landscape", "A question left unanswered"] },
          purpose: { q: "Why hold the reward until the very last lines?", choices: ["The delayed payoff makes every earlier condition feel earned and lands the poem's point", "The poem forgot to state it earlier", "To hide the meaning from the reader", "To make the poem shorter"] },
          significance: { q: "What does \"which is more, you'll be a Man\" value most?", choices: ["Becoming a mature, self-mastered person matters more than owning the whole Earth", "Wealth is the only true reward", "The Earth is worthless", "Maturity is impossible"] },
          reveals: "The withheld payoff: maturity and self-mastery as the true reward.",
          conceals: "How the single suspended sentence finally resolves in this couplet.",
          ace: "Articulate the poem's final reward; connect it to all the conditions before it; extend it to why a delayed payoff can make a message land harder."
        }
      ]
    },

    ctob: {
      name: "The Making of a Man",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The poem is built on repeating the same two words at the start of its conditions: \"______ you can…\" (one word)",
          evidence: ["The poem's title is a single word made of these letters.", "This word begins nearly every condition in the poem.", "It is the little word that sets up an \"if… then.\""],
          hints: ["It is a two-letter conditional word.", "The poem is even named after it.", "The word is if."],
          answer: "if"
        },
        {
          type: "mc",
          prompt: "The poem advises the reader to \"treat those two impostors just the same.\" The two impostors are —",
          options: [
            "Triumph and Disaster.",
            "Dreams and Thoughts.",
            "Crowds and Kings.",
            "Truth and Lies."
          ],
          hints: ["They are a paired success and a paired failure.", "One is a great win; the other is a great loss."]
        },
        {
          type: "mc",
          prompt: "When the poem says to dream \"and not make dreams your master,\" it is mainly urging —",
          options: [
            "balance — using a strength without being ruled by it.",
            "giving up dreaming entirely.",
            "dreaming so much that action stops.",
            "ignoring all imagination."
          ],
          hints: ["Notice the warning attached to each good quality.", "The poem repeatedly qualifies a virtue to guard against excess."]
        },
        {
          type: "digit",
          prompt: "The poem urges filling \"the unforgiving minute\" with a certain number of \"seconds' worth of distance run.\" How many seconds are in the \"unforgiving minute\" the poem names? Enter the number.",
          evidence: ["The line pairs \"the unforgiving minute\" with \"seconds' worth of distance run.\"", "It is the ordinary number of seconds in any one minute.", "Six followed by a zero."],
          hints: ["How many seconds make one minute?", "Six tens.", "The number is 60."],
          answer: "60"
        },
        {
          type: "sequence",
          prompt: "Put these virtues in the order the poem introduces them, earliest first.",
          items: [
            "Keeping your head while others panic and blame you.",
            "Meeting Triumph and Disaster the same way.",
            "Risking all your winnings and starting again after losing.",
            "Holding on by sheer will when nothing else is left."
          ],
          hints: ["The poem opens with staying calm under blame.", "The impostors come before the pitch-and-toss gamble.", "The Will that says \"Hold on\" comes near the end."]
        },
        {
          type: "mc",
          prompt: "The poem holds back its reward until the final two lines. That reward is —",
          options: [
            "owning the Earth and, more than that, becoming \"a Man.\"",
            "a table set with an overflowing cup.",
            "escape from all further hardship.",
            "praise from a watching crowd."
          ],
          hints: ["The last couplet finally answers every \"If you can…\"", "The poem values becoming mature above even owning the whole Earth."]
        }
      ]
    },

    arcade: {
      name: "Adversity or Temptation?",
      instruction: "\"If—\" tests the reader in two ways: by hardship you must endure, and by success you must not let go to your head. Sort each challenge the poem names: is it a TEST OF ADVERSITY (hardship to bear), or a TEST OF SUCCESS (temptation to stay balanced through)? Reasoning earns the points.",
      buckets: [
        { id: "adversity", label: "Tests of adversity / hardship", short: "Adversity" },
        { id: "success", label: "Tests of success / temptation", short: "Success" }
      ],
      cards: [
        { text: "Keeping your head when others lose theirs and blame you.", bucket: "adversity", why: "Staying calm under panic and unfair blame is a hardship to endure." },
        { text: "Watching your life's work broken, and stooping to rebuild it.", bucket: "adversity", why: "Rebuilding after ruin is a test of resilience against loss." },
        { text: "Losing everything on one turn of pitch-and-toss and starting again.", bucket: "adversity", why: "Total loss followed by a fresh start is pure adversity." },
        { text: "Holding on when there is nothing left but the Will that says \"Hold on.\"", bucket: "adversity", why: "Endurance when nothing remains is the hardest hardship in the poem." },
        { text: "Meeting Triumph without letting the victory rule you.", bucket: "success", why: "Triumph is a success that tempts you to lose your balance." },
        { text: "Dreaming without making dreams your master.", bucket: "success", why: "A gift that could master you is a temptation to keep in check." },
        { text: "Walking with crowds yet keeping your virtue.", bucket: "success", why: "Popularity is a social success that tempts you to lose yourself." },
        { text: "Talking with kings yet keeping the common touch.", bucket: "success", why: "Rising among the powerful tempts you to forget ordinary people." }
      ],
      followup: "The poem asks the reader to pass both kinds of test with the same steadiness — enduring hardship and staying balanced in success. What does treating adversity and success \"just the same\" suggest about how the poem defines maturity?"
    },

    analysis: {
      mcq: [
        {
          q: "\"If—\" is best described as a didactic poem because it —",
          options: [
            "offers advice on how to live and become mature.",
            "tells a suspenseful adventure story.",
            "describes a single landscape in detail.",
            "argues a legal case."
          ],
          why: "The poem is a stack of counsel from a mentor to a youth on how to live well — the definition of didactic verse."
        },
        {
          q: "The repeated \"If you can…\" that opens line after line is an example of —",
          options: [
            "anaphora.",
            "a simile.",
            "onomatopoeia.",
            "a rhyme scheme."
          ],
          why: "Repeating the same phrase at the start of successive lines is the definition of anaphora."
        },
        {
          q: "Calling Triumph and Disaster \"those two impostors\" and treating them \"just the same\" mainly develops the idea that —",
          options: [
            "neither success nor failure should be allowed to rule you.",
            "success is always better than failure.",
            "failure should be feared above all.",
            "the reader should avoid all risk."
          ],
          why: "Personifying both as impostors argues for meeting success and failure with the same balanced steadiness."
        },
        {
          q: "The poem withholds its reward until the final couplet. This structure mainly works to —",
          options: [
            "make every earlier condition feel earned before the payoff arrives.",
            "hide the poem's meaning from the reader.",
            "show the speaker cannot decide what to say.",
            "end the poem before its point is made."
          ],
          why: "Delaying the single \"then\" of the long conditional sentence heightens the impact of the closing reward."
        },
        {
          q: "Because one \"if… then\" idea is sustained across the entire poem and resolved only at the end, \"If—\" is a clear example of —",
          options: [
            "an extended conditional structure.",
            "a limerick.",
            "free verse with no pattern.",
            "a single rhyming couplet."
          ],
          why: "The poem is essentially one long conditional sentence built through parallel \"If you can…\" clauses."
        }
      ],
      short: [
        "Choose one \"If you can…\" condition from the Father's Counsel. Explain what virtue it names and what it reveals about the poem's idea of maturity.",
        "The poem repeatedly pairs opposites (Triumph and Disaster, dreams and thoughts, crowds and kings). Explain what treating these opposites \"just the same\" suggests about the poem's theme.",
        "Explain how the poem's anaphora — the repeated \"If you can…\" — works together with the withheld reward in the final couplet. How do the two shape the poem's effect?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"If—\" use its anaphora and extended conditional structure to express an abstract idea like self-mastery or resilience? Make a claim and support it with specific conditions from the poem.",
      aceReflection: "Articulate what the poem suggests about becoming mature in your own words. Connect two of its paired opposites that develop that idea. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"If—\" carries a whole idea — self-mastery and resilience — through one repeated structure (a stack of \"if you can…\" conditions) and one key move (treating Triumph and Disaster \"just the same\"). Choose another poem, song, story, or speech that builds a big idea through repetition, or that asks you to meet opposites with the same steadiness. Explain the connection with evidence: what is the repeated structure or paired opposite, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's \"if you can…\" structure or its balance-of-opposites idea to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Kipling's \"If—\" uses the repeated \"If you can…\" to build an idea about self-mastery. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"If—.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [opposite one] connects to [opposite two] in \"If—\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"If—\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the \"if you can…\" structure of \"If—\" to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"If—\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Rudyard Kipling's \"If—\" (1910) as a short didactic poem — a study of anaphora, the extended conditional structure, parallelism, and personification. The poem is public domain, so it may be referenced directly and this room reproduces no copyrighted edition. \"If—\" is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"If—\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1910 and is in the public domain in the United States, so it satisfies the identical-text requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's anaphora, conditional structure, parallelism, and personification (Triumph and Disaster as \"impostors\"; the Will that says \"Hold on\") academically and neutrally, and follow your district's policy and community expectations.",
        "Details here were checked against the poem (the repeated \"If you can…\"; keeping your head while others lose theirs and blame you; trusting yourself yet allowing for doubt; not dealing in lies or hate; dreaming without being mastered and thinking without making thoughts the aim; \"treat those two impostors just the same\"; hearing your words twisted and your work broken, then rebuilding; risking all on \"one turn of pitch-and-toss\" and starting again; the Will that says \"Hold on\"; keeping virtue among crowds and the common touch among kings; \"the unforgiving minute / With sixty seconds' worth of distance run\"; and the final reward — \"Yours is the Earth… you'll be a Man, my son\"). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, and author's craft — especially anaphora, parallelism, personification, and theme in poetry. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.11-12.1", "RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
