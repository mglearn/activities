/* PlotPoint — The Lady, or the Tiger? (Frank R. Stockton, 1882).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases. Standards are
   good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "ladytiger",
  storageKey: "plotpoint.ladytiger.v1",

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
    "vocab.title": "Words for The Lady, or the Tiger?",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The King's Arena",
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
    "ctob.title": "The Right-Hand Door",
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
    "arcade.title": "The Lady or the Tiger?",
    "arcade.default": "Sort each clue by the interpretation it supports.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Clues to sort",
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
    "extend.title": "You Decide",
    "extend.format": "Format",
    "extend.evidence": "The clue from the story I am building on",
    "extend.transfers": "What it suggests about the ending",
    "extend.changes": "What a reader who disagrees might say",
    "extend.breaks": "Where my argument is weakest",
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
    "print.item.relic": "King's Arena evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "You-decide organizer",
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
      title: "The Lady, or the Tiger?",
      author: "Frank R. Stockton",
      grades: "Grades 7–10",
      genre: "Short story · Fable · Classic",
      time: "45–75 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1882)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "Written in 1882, The Lady, or the Tiger? is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A short classic with a famous open ending. It mentions an arena, a tiger, and the threat of death, but contains no graphic violence. Suitable for middle and early high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/396",
      audio: "https://librivox.org/the-bee-man-of-orn-and-other-fanciful-tales-by-frank-r-stockton/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Lady, or the Tiger? — two tall arched doors side by side in a stone arena under a bright sky."
    },
    hook: "A king settles guilt or innocence with a cruel game: the accused stands in an arena and opens one of two doors. Behind one waits a fierce tiger — instant death. Behind the other waits a lady — instant marriage. When the king puts his daughter's secret lover to this test, she alone knows what waits behind each door. She signals him toward one. And then Stockton refuses to tell us what came out.",
    goals: [
      "Understand the story's setup: a 'semi-barbaric' king and his arena of two doors.",
      "Analyze the princess's impossible dilemma and what her choice reveals about human nature.",
      "Weigh textual evidence for each interpretation of the deliberately open ending.",
      "Build and defend an evidence-based argument about an ambiguous text."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an open or ambiguous ending.",
        "Discuss: If you loved someone, could you choose to save them even if it meant losing them to another?"
      ],
      during: [
        "Use the King's Arena to slow down and read the setup and the choice closely.",
        "Track every clue the narrator gives about the princess's feelings and character."
      ],
      after: [
        "Run the breakout, arcade, and analysis to gather evidence for each reading.",
        "Complete the Extend task to argue which door you believe opened."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how the king's arena decides guilt or innocence. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the princess's 'semi-barbaric' nature to the choice she must make. Explain how her character shapes what she might do." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply your reading of the ending to build an argument: which door opened? Explain what evidence transfers, what a doubter might say, and where your case is weakest." }
    },

    vocab: [
      { term: "semi-barbaric", def: "Partly civilized and partly wild or cruel.", example: "A king with grand ideas but savage 'justice.'", nonexample: "A fully fair and gentle ruler.", context: "Stockton calls both the king and the princess 'semi-barbaric.'" },
      { term: "arena", def: "A large enclosed space where public events or contests are held.", example: "The stadium where the accused faces the doors.", nonexample: "A small private study.", context: "The king's arena is the stage for his cruel trials." },
      { term: "impartial", def: "Treating everyone equally; not favoring one side.", example: "A fair judge who follows evidence.", nonexample: "The king's arena, which decides by chance, not fairness.", context: "The king calls his arena impartial, though it is really chance." },
      { term: "dilemma", def: "A hard choice between two difficult options.", example: "Saving a loved one but losing him to another.", nonexample: "An easy pick with no downside.", context: "The princess faces an agonizing dilemma." },
      { term: "ambiguous", def: "Having more than one possible meaning; unclear on purpose.", example: "An ending that could go either way.", nonexample: "A clear, single, stated outcome.", context: "Stockton's ending is famously ambiguous." },
      { term: "fate", def: "The outcome or destiny decided for someone.", example: "Which door the accused opens seals his fate.", nonexample: "A choice with no consequences.", context: "The doors hold the young man's fate." },
      { term: "jealousy", def: "Resentment at the thought of losing someone to a rival.", example: "The princess picturing her love married to another woman.", nonexample: "Feeling only calm and generous.", context: "Jealousy is one force pulling at the princess." },
      { term: "suspense", def: "The tense uncertainty of not knowing what will happen.", example: "Waiting to see which door opens.", nonexample: "Knowing the ending from the start.", context: "The open ending leaves the suspense unresolved." },
      { term: "interpretation", def: "A reader's supported explanation of what a text means.", example: "Arguing, with evidence, which door opened.", nonexample: "A guess with no support.", context: "The story invites more than one interpretation." }
    ],

    relic: {
      name: "The King's Arena",
      intro: "Seven instructional reconstructions of people, places, and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "king", name: "The Semi-Barbaric King", image: "images/king.webp",
          clues: ["A powerful king rules the land.", "Stockton calls him 'semi-barbaric' — part civilized, part wild.", "He invents his own idea of public justice."],
          identify: { q: "How does Stockton describe the king?", choices: ["Semi-barbaric — part civilized, part cruel", "Perfectly fair and gentle", "A foreign conqueror", "A powerless figurehead"] },
          purpose: { q: "What is the king's role in the story?", choices: ["He creates the arena that decides guilt by chance", "He judges cases with careful evidence", "He rescues the accused", "He appears only at the end"] },
          significance: { q: "What does 'semi-barbaric' reveal?", choices: ["That his system mixes grand show with real cruelty", "That he is entirely modern and fair", "That he is harmless", "That he dislikes power"] },
          reveals: "The strange mix of spectacle and savagery behind the arena.",
          conceals: "Whether the king truly believes his system is just.",
          ace: "Articulate what 'semi-barbaric' means; connect it to the arena he builds; extend it to how a ruler's character shapes their idea of justice."
        },
        {
          id: "two-doors", name: "The Two Doors", image: "images/two-doors.webp",
          clues: ["In the arena stand two identical doors, side by side.", "The accused must open one of them.", "From the outside, there is no way to tell them apart."],
          identify: { q: "What do the two doors represent?", choices: ["The accused's fate — one hides life, one hides death", "The exits from the palace", "Doors to two shops", "A magician's trick"] },
          purpose: { q: "What is their role in the story?", choices: ["They turn a trial into a game of chance the accused controls", "They decorate the arena", "They hide treasure", "They lead outside the city"] },
          significance: { q: "What does deciding fate by a door reveal?", choices: ["That the king's 'justice' is really chance dressed as fairness", "That the system is careful and fair", "That doors matter more than people", "That the accused is always guilty"] },
          reveals: "How the whole trial hinges on a single blind choice.",
          conceals: "Who arranges what waits behind each door, and how.",
          ace: "Articulate what the doors decide; connect the choice to the theme of chance vs. justice; extend it to whether luck should ever decide guilt."
        },
        {
          id: "tiger", name: "The Tiger", image: "images/tiger.webp",
          clues: ["Behind one door waits a hungry beast.", "It is the most savage tiger the king can find.", "Opening that door means instant death — and a verdict of guilt."],
          identify: { q: "What waits behind one door?", choices: ["A fierce tiger — death and a verdict of guilt", "A pile of gold", "A friendly dog", "An empty room"] },
          purpose: { q: "What is the tiger's role?", choices: ["It is the punishment half of the arena's 'justice'", "It guards the palace", "It belongs to the princess", "It performs tricks"] },
          significance: { q: "What does the tiger's door mean?", choices: ["Instant death, taken by the crowd as proof of guilt", "A second chance", "A reward for bravery", "Nothing important"] },
          reveals: "The deadly stakes of the arena's game.",
          conceals: "How anyone could call such a fate 'justice.'",
          ace: "Articulate what the tiger's door means; connect punishment to the idea of proof; extend it to whether an outcome can really prove guilt."
        },
        {
          id: "lady", name: "The Lady", image: "images/lady.webp",
          clues: ["Behind the other door waits a woman.", "She is a lady the king has chosen as a fitting match.", "Opening that door means instant marriage — and a verdict of innocence."],
          identify: { q: "What waits behind the other door?", choices: ["A lady — marriage and a verdict of innocence", "A judge", "A treasure chest", "The king himself"] },
          purpose: { q: "What is the lady's role?", choices: ["She is the reward half of the arena's 'justice'", "She is the accuser", "She guards the tiger", "She never appears"] },
          significance: { q: "What does the lady's door mean?", choices: ["Instant marriage, taken by the crowd as proof of innocence", "A punishment", "A trick", "A delay"] },
          reveals: "That even the 'reward' is decided without the accused's consent.",
          conceals: "How the accused, or the lady, might feel about a forced marriage.",
          ace: "Articulate what the lady's door means; connect 'reward' to a forced marriage; extend it to whether such a reward is truly fair."
        },
        {
          id: "princess", name: "The Princess", image: "images/princess.webp",
          clues: ["The king has a beautiful daughter.", "Stockton says she, too, is 'semi-barbaric,' with a soul as fervent as her father's.", "She falls in love with a young man of lower rank."],
          identify: { q: "Who is the princess?", choices: ["The king's daughter, who loves the accused young man", "The lady behind the door", "A servant", "The king's enemy"] },
          purpose: { q: "What is her role in the story?", choices: ["Her love and her nature create the central dilemma", "She judges the case", "She rules the land", "She has no part in the plot"] },
          significance: { q: "Why does Stockton stress she is 'semi-barbaric'?", choices: ["To hint her choice could be loving or jealous — we cannot be sure", "To show she is perfectly kind", "To prove she is cruel", "To say she is a minor character"] },
          reveals: "That the princess is as complex and divided as her father.",
          conceals: "What she truly decides in her heart.",
          ace: "Articulate who the princess is; connect her divided nature to her dilemma; extend it to how mixed feelings can make a choice unpredictable."
        },
        {
          id: "lover", name: "The Young Courtier", image: "images/lover.webp",
          clues: ["A brave young man of low rank loves the princess.", "The king discovers the secret romance.", "For loving above his station, the young man is put into the arena."],
          identify: { q: "Why is the young man put in the arena?", choices: ["He loved the princess, who is above his rank", "He committed a robbery", "He insulted the king in public", "He lost a battle"] },
          purpose: { q: "What is his role in the story?", choices: ["He is the accused whose fate the ending leaves open", "He is the judge", "He arranges the doors", "He is the king's advisor"] },
          significance: { q: "What does his 'crime' reveal about the kingdom?", choices: ["That love across ranks is treated as a punishable offense", "That the courts are fair", "That the king is generous", "That rank does not matter"] },
          reveals: "How rigid rank and a jealous king set the tragedy in motion.",
          conceals: "Whether he trusts the princess's signal completely.",
          ace: "Articulate why he is on trial; connect his 'crime' to the kingdom's values; extend it to how societies punish love that crosses boundaries."
        },
        {
          id: "signal", name: "The Princess's Signal", image: "images/signal.webp",
          clues: ["The princess has secretly learned what waits behind each door.", "As the young man looks to her, she makes a slight, quick movement.", "She signals him toward the door on the right — and the story stops there."],
          identify: { q: "What does the princess do at the crucial moment?", choices: ["She secretly signals him toward one door", "She opens the door herself", "She frees the tiger", "She says nothing"] },
          purpose: { q: "What is the signal's role in the story?", choices: ["It is the hinge on which the whole open ending turns", "It ends the trial safely", "It calls the guards", "It has no effect"] },
          significance: { q: "Why does Stockton stop right after the signal?", choices: ["To make the reader decide, using evidence, what she chose", "Because the story is unfinished", "Because the ending is obvious", "Because the princess is unimportant"] },
          reveals: "The deliberate open ending that makes the story famous.",
          conceals: "The one thing readers most want to know — what came out of the door.",
          ace: "Articulate what the signal is; connect it to the open ending; extend it to why an author might leave a story deliberately unresolved."
        }
      ]
    },

    ctob: {
      name: "The Right-Hand Door",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many doors does the accused choose between in the arena? Enter the number.",
          evidence: ["The accused steps into the arena and faces a wall.", "In it stand two identical doors, side by side.", "He must open one of them."],
          hints: ["One hides the tiger, the other the lady.", "One plus one.", "There are 2 doors."],
          answer: "2"
        },
        {
          type: "word",
          prompt: "Behind one door waits a fierce, hungry ______ that means instant death. (one word)",
          evidence: ["The king chooses the most savage beast he can find.", "Opening that door is taken as proof of guilt.", "The animal's name begins with 'ti…'."],
          hints: ["A large striped big cat.", "Ti…", "The word is tiger."],
          answer: "tiger"
        },
        {
          type: "mc",
          prompt: "Why is the young man put into the arena?",
          options: [
            "He loved the princess, who is above his rank.",
            "He robbed the royal treasury.",
            "He lost an important battle.",
            "He insulted a foreign king."
          ],
          hints: ["Think about the secret romance the king discovers.", "Which option is about loving the princess?"]
        },
        {
          type: "mc",
          prompt: "What does the princess do at the decisive moment?",
          options: [
            "She secretly signals the young man toward one of the doors.",
            "She opens both doors herself.",
            "She sets the tiger free.",
            "She refuses to attend."
          ],
          hints: ["She alone knows what waits behind each door.", "Which option is the secret signal?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of the story in order, earliest first.",
          items: [
            "A low-ranking young man and the princess secretly fall in love.",
            "The king discovers the romance and puts the young man in the arena.",
            "The princess secretly learns which door hides the tiger and which the lady.",
            "She signals him toward a door — and the story ends without telling us the result."
          ],
          hints: ["It begins with the secret romance.", "The princess learns the doors' secret before she signals.", "The open ending comes last."]
        },
        {
          type: "word",
          prompt: "Because Stockton ends without revealing the result, the story is famously open, or ______. (one word)",
          evidence: ["The last line asks the reader a question instead of answering it.", "Both outcomes are left genuinely possible.", "The word means 'having more than one meaning' and begins with 'am…'."],
          hints: ["The opposite of clear and settled.", "Am…", "The word is ambiguous."],
          answer: "ambiguous"
        }
      ]
    },

    arcade: {
      name: "The Lady or the Tiger?",
      instruction: "The ending is open on purpose — but the story gives clues that pull each way. Sort each clue: does it support the reading that the princess sent him to the LADY (love won), or to the TIGER (jealousy won)? There is no 'right' ending — only which reading each clue supports.",
      buckets: [
        { id: "lady", label: "Points to the Lady (love won)", short: "→ Lady" },
        { id: "tiger", label: "Points to the Tiger (jealousy won)", short: "→ Tiger" }
      ],
      cards: [
        { text: "She truly loves him and cannot bear to see him die.", bucket: "lady", why: "Genuine love is a strong reason to save him — even for another woman." },
        { text: "Saving his life matters more to her than having him.", bucket: "lady", why: "If her love is selfless, she would choose his survival." },
        { text: "She would rather picture him alive and married than dead.", bucket: "lady", why: "A loving heart may prefer his life over his death." },
        { text: "She signals him at once, without hesitating.", bucket: "lady", why: "A quick, sure signal can suggest she acts to save him." },
        { text: "Stockton calls her 'semi-barbaric,' like her fierce father.", bucket: "tiger", why: "Her wild side makes a jealous choice believable." },
        { text: "She hates the beautiful lady waiting behind the door.", bucket: "tiger", why: "Jealousy of the rival could push her toward the tiger." },
        { text: "She is tormented picturing him happy with another woman.", bucket: "tiger", why: "That torment hints she might not give him to the lady." },
        { text: "She imagines the horror of the tiger — and does not look away.", bucket: "tiger", why: "Dwelling on that image suggests it stayed a real possibility." }
      ],
      followup: "Which door do YOU think opened? Choose your reading and defend it with the clues above. Remember: Stockton designed the story so a careful reader can argue either way."
    },

    analysis: {
      mcq: [
        {
          q: "In the king's arena, guilt or innocence is decided by —",
          options: [
            "which of two doors the accused opens — the lady or the tiger.",
            "a jury weighing careful evidence.",
            "a duel with the king.",
            "a written confession."
          ],
          why: "The 'trial' is really a game of chance: the accused opens a door and accepts what comes out."
        },
        {
          q: "Stockton calls both the king and the princess 'semi-barbaric' to show that —",
          options: [
            "they mix refined feeling with wild, fierce impulses.",
            "they are entirely gentle and fair.",
            "they come from another country.",
            "they are powerless."
          ],
          why: "The phrase signals a divided nature — which is exactly what makes the princess's choice uncertain."
        },
        {
          q: "The young man is placed in the arena because he —",
          options: [
            "loved the princess, who is above his rank.",
            "stole from the palace.",
            "betrayed the kingdom in war.",
            "broke the arena's rules."
          ],
          why: "His 'crime' is loving across ranks, which the jealous king will not allow."
        },
        {
          q: "At the climax, the princess —",
          options: [
            "secretly signals the young man toward one specific door.",
            "opens the door for him.",
            "frees the tiger to attack the king.",
            "confesses everything to the crowd."
          ],
          why: "Only she knows what lies behind each door, and she gives him a secret signal."
        },
        {
          q: "Stockton ends the story without revealing the outcome in order to —",
          options: [
            "make the reader weigh the evidence and decide what the princess chose.",
            "hide a mistake in the plot.",
            "save space.",
            "show the ending does not matter."
          ],
          why: "The deliberate open ending turns readers into interpreters who must reason from evidence."
        }
      ],
      short: [
        "Choose one artifact from the King's Arena. Explain what it is and what it reveals about the story's meaning.",
        "Explain why Stockton's calling the princess 'semi-barbaric' matters for how we read her choice.",
        "The story never says which door opened. Why might an author choose to leave an ending open? What does it ask of the reader?"
      ],
      paragraph: "Write an evidence-based paragraph arguing which door you believe opened — the lady or the tiger. Make a claim and support it with at least two specific clues from the story. Acknowledge one clue that points the other way.",
      aceReflection: "Articulate the princess's dilemma in your own words. Connect two clues that point in opposite directions. Extend it to a claim about which door opened, and name where your argument is weakest."
    },

    extend: {
      name: "You Decide",
      prompt: "Stockton hands the ending to you. Build the strongest case you can for which door opened — the lady or the tiger. Use specific clues about the princess's love and her 'semi-barbaric' nature. Then, like a fair thinker, name the best clue against your view and answer it.",
      format: "A short evidence-based argument for one reading of the open ending, using at least two clues, with a fair answer to the strongest clue against you."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the king's arena decides guilt in The Lady, or the Tiger? Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Lady, or the Tiger? Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [clue one] connects to [clue two] in The Lady, or the Tiger? because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about which door opened in The Lady, or the Tiger?: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to argue that the [lady/tiger] came out of the door. Give me two clues that might support my view and one strong clue against it. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Lady, or the Tiger? for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Stockton's The Lady, or the Tiger? as a study in ambiguity and evidence-based interpretation: the 'semi-barbaric' king and princess, the arena's game of chance, and the deliberately open ending. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1882) is public domain. The linked Project Gutenberg edition is a standalone text; the linked LibriVox recording is a Stockton collection that includes the story — confirm before assigning.",
        "Content: an arena, a tiger, and the threat of death, but no graphic violence. Suitable for middle and early high school; preview and follow local policy.",
        "This tale is ideal for teaching argument from evidence: there is no 'correct' ending, so assess the quality of students' reasoning, not their choice. The arcade sorts clues by which reading they support, not by a right answer.",
        "Details here were checked against the story (the semi-barbaric king; the arena of two doors, one hiding a tiger and one a lady; the princess who loves a lower-ranking young man; the king's discovery; the princess secretly learning the doors' secret; her signal toward the right-hand door; the open ending). Famous lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 7–10 ELAR TEKS (19 TAC Ch. 110) strands on theme, character, author's purpose, and — especially — using textual evidence to support an interpretation of an ambiguous text. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.3", "RL.8.1", "RL.9-10.1", "W.7.1", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
