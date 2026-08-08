/* PlotPoint — The Masque of the Red Death (Edgar Allan Poe, 1842).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "masque",
  storageKey: "plotpoint.masque.v1",

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
    "vocab.title": "Words for The Masque of the Red Death",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Prospero's Abbey",
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
    "ctob.title": "The Ebony Clock",
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
    "arcade.title": "Human Control or Death's Power?",
    "arcade.default": "Sort each detail by whether it shows Prospero's illusion of control or death's inevitable power.",
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
    "extend.title": "What We Try to Wall Out",
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
    "print.item.relic": "Abbey evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Control-vs-inevitability organizer",
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
      title: "The Masque of the Red Death",
      author: "Edgar Allan Poe",
      grades: "Grades 9–12",
      genre: "Gothic · Horror · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1842)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1842, The Masque of the Red Death is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A gothic allegory about the inescapability of death. A deadly plague, a masked figure of Death, and the death of every character make this eerie and symbolic — chilling but not gory in detail. Best for high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/1064",
      audio: "https://librivox.org/the-works-of-edgar-allan-poe-raven-edition-volume-1/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Masque of the Red Death — a candlelit suite of seven colored chambers seen in a row, ending in a black room with blood-red windows, a tall ebony clock, and a shrouded masked figure standing at the far threshold."
    },
    hook: "A terrible plague called the Red Death is sweeping the land, killing its victims in half an hour. Prince Prospero decides he will simply lock it out: he seals a thousand nobles inside a walled abbey and throws a wild masked ball through seven strange, colored rooms. But in the last black room stands a giant ebony clock, and each hour its chime freezes the dancers cold. Then, at midnight, an uninvited guest arrives — costumed as the Red Death itself.",
    goals: [
      "Follow the plot: Prospero's escape, the seven rooms, the ball, and the masked intruder.",
      "Analyze the story as an allegory — a tale whose images stand for a larger idea.",
      "Interpret key symbols: the seven rooms, the black room, the ebony clock, and the Red Death.",
      "Explain Poe's theme — that no wealth, wall, or power can keep death away."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially allegory, personification, and dominion.",
        "Discuss: Can money or power protect anyone from death? Why do people act as if they can?"
      ],
      during: [
        "Use Prospero's Abbey to track the rooms, the clock, and the intruder.",
        "Watch for symbols — colors, time, and the figure of Death — and what each may stand for."
      ],
      after: [
        "Run the breakout, arcade, and analysis to read the allegory.",
        "Complete the Extend task on what people try, and fail, to wall out."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Prince Prospero tries to escape the Red Death — and why it does not work. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the ebony clock and the black seventh room to the story's idea about death. Explain how Poe uses these symbols to build dread and meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's allegory — that death cannot be walled out — to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "pestilence", def: "A deadly, fast-spreading disease.", example: "The Red Death sweeping across Prospero's land.", nonexample: "A mild, harmless cold.", context: "A pestilence has emptied the country outside the abbey walls." },
      { term: "masque", def: "A grand costume party or masked ball.", example: "The wild masked ball Prospero throws in the seven rooms.", nonexample: "A quiet dinner with no costumes.", context: "Prospero holds a masque to keep his guests entertained." },
      { term: "revelry", def: "Wild, noisy celebration and merrymaking.", example: "The dancing, music, and wine inside the abbey.", nonexample: "A silent, solemn ceremony.", context: "The revelry drowns out any thought of the plague outside." },
      { term: "abbey", def: "A large, walled building — here, Prospero's fortified retreat.", example: "The castellated abbey with its gates welded shut.", nonexample: "An open field with no walls.", context: "Prospero locks himself and his court inside the abbey." },
      { term: "allegory", def: "A story whose characters and events stand for larger ideas.", example: "The whole tale standing for death's power over everyone.", nonexample: "A plain report meant only literally.", context: "The Masque of the Red Death is a famous allegory." },
      { term: "personification", def: "Giving human form or traits to an idea or thing.", example: "The Red Death appearing as a masked figure who walks and stands.", nonexample: "Describing a disease only as germs and symptoms.", context: "Poe uses personification to turn Death into a guest." },
      { term: "dominion", def: "Power, rule, or control over something.", example: "The Red Death holding sway over everyone in the end.", nonexample: "Having no power or say at all.", context: "The final line gives the Red Death 'illimitable dominion.'" },
      { term: "seclusion", def: "The state of being shut away from others.", example: "Prospero's court sealed off from the dying world.", nonexample: "Living openly among a crowd.", context: "Their seclusion feels safe — until it doesn't." }
    ],

    relic: {
      name: "Prospero's Abbey",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "reddeath", name: "The Red Death", image: "images/reddeath.webp",
          clues: ["A deadly plague is sweeping the country.", "Its victims suffer sharp pains, sudden dizziness, and bleeding from the pores.", "It kills within about half an hour, leaving scarlet stains — and so is named the Red Death."],
          identify: { q: "What is the Red Death?", choices: ["A fast, deadly plague marked by bleeding and scarlet stains", "A masked dancer", "A kind of wine", "A room in the abbey"] },
          purpose: { q: "What is the Red Death's role in the story?", choices: ["It is the doom Prospero tries — and fails — to escape", "It is a festival", "It is a harmless rumor", "It has no role"] },
          significance: { q: "What does naming the plague 'the Red Death' add?", choices: ["It turns a disease into a vivid, almost living force", "It makes it sound harmless", "It shows the plague is fake", "It hides the danger"] },
          reveals: "The unstoppable threat the whole story circles around.",
          conceals: "That it will walk into the abbey wearing a costume.",
          ace: "Articulate what the Red Death is; connect its speed and scarlet mark to the story's dread; extend it to how naming a danger can make it feel alive."
        },
        {
          id: "abbey", name: "The Walled Abbey", image: "images/abbey.webp",
          clues: ["Prince Prospero gathers a thousand healthy nobles.", "He shuts them all inside a strong, castle-like abbey.", "The gates are welded shut so no one can enter or leave."],
          identify: { q: "How does Prospero try to escape the plague?", choices: ["He seals himself and a thousand nobles inside a walled abbey", "He flees across the sea", "He takes medicine", "He prays in a church"] },
          purpose: { q: "What is the abbey's role in the story?", choices: ["It is the fortress Prospero trusts to keep death out", "It is a hospital for the sick", "It is a market", "It has no role"] },
          significance: { q: "What does welding the gates shut reveal about Prospero?", choices: ["He believes walls and wealth can shut out death itself", "He wants to help the sick", "He is planning to leave", "He fears his guests"] },
          reveals: "The human attempt to lock danger safely outside.",
          conceals: "That the danger is already destined to get in.",
          ace: "Articulate Prospero's plan; connect the welded gates to his confidence; extend it to how people try to seal themselves off from what frightens them."
        },
        {
          id: "sevenrooms", name: "The Seven Colored Rooms", image: "images/sevenrooms.webp",
          clues: ["The ball is held in a suite of seven connected rooms.", "Each room is a different color: blue, purple, green, orange, white, violet — and black.", "They run from east to west, like a path from morning to night."],
          identify: { q: "How are the seven rooms arranged?", choices: ["In a row from east to west, each a different color, ending in black", "In a circle, all the same color", "Stacked as seven floors", "Scattered at random"] },
          purpose: { q: "What is the seven rooms' role in the story?", choices: ["They form the strange stage for the masque — and a hidden symbol", "They are bedrooms for guests", "They store the wine", "They have no role"] },
          significance: { q: "What might the east-to-west, color-to-black path stand for?", choices: ["The course of a life, from bright beginning to dark end", "The rooms of a normal house", "The days of the week", "Nothing at all"] },
          reveals: "A journey — perhaps a whole life — laid out room by room.",
          conceals: "That the final room is where the story must end.",
          ace: "Articulate how the rooms are set up; connect the color path to a lifetime; extend it to how a setting can quietly symbolize an idea."
        },
        {
          id: "blackroom", name: "The Black Room", image: "images/blackroom.webp",
          clues: ["The seventh and last room is draped entirely in black velvet.", "Its windows, though, are a deep blood-red scarlet.", "The guests are afraid of it, and few dare to enter."],
          identify: { q: "What is unusual about the seventh room?", choices: ["It is black with blood-red windows, and frightens the guests", "It is the brightest and happiest room", "It is full of flowers", "It is where the food is served"] },
          purpose: { q: "What is the black room's role in the story?", choices: ["It is the dreaded room where the ending will unfold", "It is a cheerful dance floor", "It is a storeroom", "It has no role"] },
          significance: { q: "What do the black walls and blood-red windows suggest?", choices: ["Death and blood — the end waiting at the close of the path", "A celebration", "Wealth and comfort", "Safety"] },
          reveals: "The room that colors death and blood into the very walls.",
          conceals: "That the masked figure will make its stand here.",
          ace: "Articulate the black room's look; connect the black and blood-red to death; extend it to how a single setting can fill readers with dread."
        },
        {
          id: "clock", name: "The Ebony Clock", image: "images/clock.webp",
          clues: ["A giant clock of black ebony stands in the black room.", "Every hour it chimes with a deep, strange sound.", "Each time it strikes, the music stops and the dancers freeze, uneasy, until it falls silent."],
          identify: { q: "What stands in the black room and interrupts the party?", choices: ["A giant ebony clock that chimes each hour", "A fountain", "A throne", "A mirror"] },
          purpose: { q: "What is the ebony clock's role in the story?", choices: ["Its hourly chime reminds everyone of passing time they cannot stop", "It tells guests when to eat", "It plays dance music", "It has no role"] },
          significance: { q: "Why does the clock's chime unsettle the revelers?", choices: ["It marks time running out — a reminder of death beneath the fun", "It is too loud to dance to", "It is broken", "It signals a new game"] },
          reveals: "Time itself, tolling through the party like a warning.",
          conceals: "How few hours the revelers have left.",
          ace: "Articulate what the clock does; connect its hourly chime to mortality; extend it to how a reminder of time can darken any celebration."
        },
        {
          id: "figure", name: "The Masked Figure", image: "images/figure.webp",
          clues: ["At midnight a new masked guest appears, uninvited.", "It is dressed as a corpse of the Red Death — its shroud and mask spattered with blood.", "Prospero, enraged, chases it through all seven rooms with a drawn dagger."],
          identify: { q: "Who appears at midnight?", choices: ["A figure costumed as the Red Death itself", "A doctor with a cure", "A lost child", "A royal messenger"] },
          purpose: { q: "What is the masked figure's role in the story?", choices: ["It is Death arriving inside the sealed abbey", "It is a party performer", "It is a guard", "It has no role"] },
          significance: { q: "What does the figure's costume — a bloody shroud — reveal?", choices: ["Death has slipped past every wall, wearing the plague itself", "The party is a costume contest", "Prospero has won", "The plague is over"] },
          reveals: "Death walking, calmly, straight through Prospero's defenses.",
          conceals: "That there is no living person beneath the costume at all.",
          ace: "Articulate who the figure is; connect its costume to the Red Death; extend it to how the thing we fear most can appear where we thought we were safe."
        },
        {
          id: "shroud", name: "The Empty Shroud", image: "images/shroud.webp",
          clues: ["Prospero confronts the figure in the black room and falls dead.", "The furious guests seize the intruder to unmask it.", "Inside the shroud and mask they find nothing — no body at all — and one by one every reveler dies."],
          identify: { q: "What do the guests find inside the intruder's costume?", choices: ["Nothing — the shroud and mask are empty", "A famous enemy", "Prospero's brother", "A hidden weapon"] },
          purpose: { q: "What is this discovery's role in the story?", choices: ["It proves the figure is Death itself, which cannot be fought or killed", "It reveals a harmless prankster", "It ends the plague", "It has no role"] },
          significance: { q: "What does the empty costume — and every guest dying — mean?", choices: ["No wall, wealth, or weapon can keep death out; it rules over all", "The guests were only sleeping", "Prospero will recover", "The abbey was safe after all"] },
          reveals: "The story's final truth: death holds dominion over everyone.",
          conceals: "Nothing now — the closing line makes the meaning plain.",
          ace: "Articulate what the guests find; connect the empty shroud to the theme; extend it to why an enemy you cannot fight is the most frightening of all."
        }
      ]
    },

    ctob: {
      name: "The Ebony Clock",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many colored rooms make up the suite where the masque is held? Enter the number.",
          evidence: ["Each room is a different color.", "They run in a row from east to west, ending in the black room.", "It is the number between six and eight."],
          hints: ["More than six, fewer than eight.", "Between 6 and 8.", "The number is 7."],
          answer: "7"
        },
        {
          type: "word",
          prompt: "The prince who seals himself away to escape the plague is named Prince ______. (one word)",
          evidence: ["He owns the castellated abbey.", "His name suggests 'prosperous' — wealthy and fortunate.", "It begins with 'Pros…'."],
          hints: ["His name sounds like 'prosperous.'", "Pros…", "The name is Prospero."],
          answer: "Prospero"
        },
        {
          type: "mc",
          prompt: "How does Prince Prospero try to escape the Red Death?",
          options: [
            "He seals himself and a thousand nobles inside a walled abbey.",
            "He sails away to another country.",
            "He drinks a special medicine.",
            "He surrenders to the plague."
          ],
          hints: ["Think of the welded gates.", "Which option is locking the danger outside?"]
        },
        {
          type: "mc",
          prompt: "What do the guests find inside the masked figure's costume?",
          options: [
            "Nothing — the shroud and mask are empty.",
            "A rival prince in disguise.",
            "A sick beggar.",
            "A hidden treasure."
          ],
          hints: ["It cannot be fought because there is no body.", "Which option means the figure is Death itself?"]
        },
        {
          type: "sequence",
          prompt: "Put the events in order, earliest first.",
          items: [
            "The Red Death ravages the country outside.",
            "Prospero seals himself and a thousand nobles in the abbey.",
            "They hold a masked ball through the seven colored rooms.",
            "At midnight a figure of the Red Death appears, and everyone dies."
          ],
          hints: ["The plague comes before Prospero hides.", "The ball happens inside the sealed abbey.", "The masked figure arrives last."]
        },
        {
          type: "word",
          prompt: "The seventh and final room is draped in ______ — the color of death and mourning. (one word)",
          evidence: ["Its windows are a deep blood-red.", "The guests are afraid to enter it.", "It is the darkest color there is; the word begins with 'bla…'."],
          hints: ["The darkest color; the opposite of white.", "Bla…", "The word is black."],
          answer: "black"
        }
      ]
    },

    arcade: {
      name: "Human Control or Death's Power?",
      instruction: "The whole story sets Prospero's attempt at control against the power of death. Sort each detail: does it show PROSPERO'S ILLUSION OF CONTROL, or DEATH'S INEVITABLE POWER? Reasoning earns the points.",
      buckets: [
        { id: "control", label: "Prospero's illusion of control", short: "Control" },
        { id: "death", label: "Death's inevitable power", short: "Death" }
      ],
      cards: [
        { text: "Welding the abbey's iron gates shut against the plague.", bucket: "control", why: "Prospero believes strong walls can keep death out." },
        { text: "Filling the halls with music, wine, and masked dancers.", bucket: "control", why: "He tries to drown out fear with revelry." },
        { text: "Trusting that wealth and a thousand friends make him safe.", bucket: "control", why: "His confidence rests on riches and numbers." },
        { text: "Raging at the intruder and chasing it with a dagger.", bucket: "control", why: "A last, futile attempt to fight death off." },
        { text: "The ebony clock tolling every hour, freezing the dancers.", bucket: "death", why: "Time keeps passing no matter how they party." },
        { text: "A figure of the Red Death appearing inside the sealed abbey.", bucket: "death", why: "Death slips past every wall Prospero built." },
        { text: "The costume proving empty — nothing to fight or kill.", bucket: "death", why: "Death cannot be stabbed, bribed, or locked out." },
        { text: "Every reveler dying as the Red Death takes them all.", bucket: "death", why: "Death's dominion is complete and final." }
      ],
      followup: "Poe's whole story argues that death cannot be escaped. Which single detail makes that idea hit hardest for you, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Prince Prospero tries to escape the Red Death by —",
          options: [
            "sealing himself and a thousand nobles inside a walled abbey.",
            "finding a doctor with a cure.",
            "leading the sick in prayer.",
            "fleeing alone into the mountains."
          ],
          why: "He trusts strong walls and welded gates to lock the plague out."
        },
        {
          q: "The seven rooms are arranged —",
          options: [
            "in a row from east to west, each a different color, ending in black.",
            "in a circle, all painted white.",
            "as seven identical floors.",
            "at random around a courtyard."
          ],
          why: "The colored path from east to west, ending in black, suggests a life moving toward death."
        },
        {
          q: "The ebony clock in the black room mainly —",
          options: [
            "reminds the revelers of passing time they cannot stop.",
            "keeps the dancers on rhythm.",
            "signals mealtimes.",
            "plays cheerful music."
          ],
          why: "Its hourly chime freezes the party with the thought of time — and death — running on."
        },
        {
          q: "When the guests seize the masked figure, they discover —",
          options: [
            "the costume is empty, with no body inside.",
            "a rival prince in disguise.",
            "a harmless servant.",
            "a hidden weapon."
          ],
          why: "The empty shroud shows the figure is Death itself, which cannot be fought."
        },
        {
          q: "As an allegory, the story suggests that —",
          options: [
            "no wealth, wall, or power can keep death away.",
            "hard work always defeats disease.",
            "the rich deserve to be safe.",
            "parties can cure fear."
          ],
          why: "The Red Death's final 'dominion over all' makes death's inescapability the central idea."
        }
      ],
      short: [
        "Choose one artifact from Prospero's Abbey. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the seven rooms and the ebony clock work as symbols. What larger idea does each point to?",
        "The story is called an allegory. What big idea does the whole tale stand for, and which details support that reading?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Poe use symbols — the seven rooms, the black room, the ebony clock, and the Red Death — to argue that death cannot be escaped? Make a claim and support it with specific details.",
      aceReflection: "Articulate what the story suggests about death and human control in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "What We Try to Wall Out",
      prompt: "Prospero builds walls to keep out a danger that comes anyway. Choose another story, film, or real situation in which people try to lock out something they fear — death, change, the truth, the outside world. Explain the connection with evidence: what they tried to wall out, how it got in anyway, and what that reveals.",
      format: "A short evidence-based comparison connecting Poe's allegory to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Prince Prospero tries and fails to escape the Red Death. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Masque of the Red Death. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Masque of the Red Death because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Masque of the Red Death: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's allegory about death to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Masque of the Red Death for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Edgar Allan Poe's The Masque of the Red Death as a study of allegory, symbolism, and the theme that death cannot be escaped. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1842) is public domain. The linked Project Gutenberg edition is a standalone text; the linked LibriVox recording is a complete-works collection (The Works of Edgar Allan Poe, Raven Edition, Volume 1) that includes the story — confirm the specific track before assigning.",
        "Content: a gothic allegory. A deadly plague, a personified figure of Death, and the death of every character make it eerie and symbolic, though not gory in description. Best for high school; preview and follow local policy.",
        "Details here were checked against the story (Prince Prospero; the Red Death plague, fatal within about half an hour, marked by scarlet stains; the thousand nobles sealed in a castellated abbey with welded gates; the seven colored rooms from blue in the east to the black room in the west; the black room's blood-red windows; the giant ebony clock whose hourly chime halts the dancers; the masked figure appearing at midnight in a blood-dabbled shroud; Prospero chasing it with a dagger and dying; the empty costume; and the final 'dominion' of the Red Death over all). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 9–12 ELAR TEKS (19 TAC Ch. 110) strands on theme, symbolism, allegory, mood/gothic, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.4", "RL.9-10.5", "RL.11-12.1", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
