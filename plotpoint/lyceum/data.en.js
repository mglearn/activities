/* PlotPoint — Abraham Lincoln, "The Perpetuation of Our Political Institutions"
   (the Lyceum Address), Springfield, Illinois, January 27, 1838.  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1838 address is a public-domain historical document, so this
   room may reference the text directly. It is studied here as LITERATURE and RHETORIC —
   antithesis, hyperbole, metaphor, parallelism, tone, and theme — in a neutral, academic
   frame consistent with the Texas required literary-works list (19 TAC §110.70, English III /
   high school). The room paraphrases, quotes only brief public-domain phrases where a close
   reading needs them, and reproduces no copyrighted edition. Standards are good-faith
   alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every choices/options array;
   the engine shuffles. */
window.__ROOM__ = {
  id: "lyceum",
  storageKey: "plotpoint.lyceum.v1",

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

    "nav.enter": "Enter the Speech", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Speech",
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
    "enter.readListenNote": "This 1838 address is in the public domain. Use your class's copy or a verified public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Lyceum Address",
    "vocab.intro": "{n} terms that unlock the text. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Speaker's Podium",
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
    "ctob.title": "The Path to Perpetuation",
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
    "arcade.title": "False Threat or Real Threat?",
    "arcade.default": "Sort each image by the feeling it creates in the poem.",
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
    "print.item.relic": "Speaker's Podium evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Rhetoric-transfer organizer",
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
      title: "The Lyceum Address",
      author: "Abraham Lincoln",
      grades: "English III",
      genre: "Speech · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole speech is discussed",
      rights: "Public domain (1838)",
      textAccess: "A public-domain speech; use your class's copy or any public-domain text.",
      copyright: "This 1838 speech is a public-domain historical document, so this room may reference it directly. It is studied here as literature and rhetoric — its antithesis, hyperbole, metaphor, and central theme — using brief public-domain quotes and paraphrase. The room reproduces no copyrighted edition.",
      contentNote: "Presented as literature and rhetoric — antithesis, hyperbole, metaphor, parallelism, tone, and theme — in a neutral, academic way, consistent with the Texas required literary-works list adopted 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. The speech discusses mob violence and lawlessness, studied academically. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the Lyceum Address — a young speaker at a wooden lectern before a hall of listeners in 1838 Springfield, with the words 'reverence for the law' suggested on a banner behind him."
    },
    hook: "A twenty-eight-year-old Abraham Lincoln stands before a small-town lecture club and asks a large question: how do you keep a free nation free? His answer is a warning turned inside out. No foreign army, he says — not all the armies of Europe, Asia, and Africa combined — could ever conquer America by force. If this republic ever falls, it will fall from the inside. Read it as rhetoric, and watch how antithesis, hyperbole, and one chilling metaphor turn a civic lecture into literature.",
    goals: [
      "Understand the Lyceum Address as an argument that free institutions are endangered not from without but from within — by mob violence and lawlessness.",
      "Analyze Lincoln's use of antithesis (foreign threat versus internal danger) and hyperbole (no army on earth could invade) and the feelings each device creates.",
      "Trace how the speech moves from naming the danger to proposing a remedy — a 'political religion' of reverence for the law — and the effect of that structure.",
      "Interpret how a striking metaphor like national 'suicide' carries an abstract idea, and why reason over passion is the speech's governing theme."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of antithesis — setting two opposed ideas side by side.",
        "Discuss: what is the difference between a threat from outside a country and a threat from inside it?"
      ],
      during: [
        "Use the Speaker's Podium to slow down and read the speech idea by idea.",
        "Track the argument: from the false foreign threat, to the real internal danger, to the remedy of reverence for law."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the antithesis and the speech's structure.",
        "Complete the Extend task to transfer the danger-from-within idea, or the reverence-for-law remedy, to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main argument of the Lyceum Address. Include one image or phrase from the speech that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the speech — for example the hyperbole that no army could conquer us, and the claim that ruin must come from within. Explain how placing the false threat next to the real one shapes Lincoln's argument." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the speech's central idea — that a free society is endangered from within — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "perpetuation", def: "The act of making something continue or last far into the future.", example: "The speech asks how to secure the perpetuation of free institutions.", nonexample: "Ending something on purpose.", context: "Lincoln's stated subject is the perpetuation of our political institutions." },
      { term: "antithesis", def: "A rhetorical device that sets two opposed ideas side by side in balanced form.", example: "A foreign enemy versus an internal danger, placed in one argument.", nonexample: "Repeating the same idea twice with no contrast.", context: "The speech's core antithesis is the threat from without against the threat from within." },
      { term: "hyperbole", def: "Deliberate, obvious exaggeration used for emphasis or effect.", example: "Saying all the world's armies could not take one drink from the Ohio River.", nonexample: "A careful, literal statistic.", context: "Lincoln uses hyperbole to dismiss the idea of a foreign conquest." },
      { term: "metaphor", def: "Describing one thing as if it were another to reveal a likeness.", example: "Calling a nation's self-destruction 'suicide.'", nonexample: "Saying one thing is 'like' another (that is a simile).", context: "The speech's memorable metaphor calls national ruin a kind of suicide." },
      { term: "rhetoric", def: "The art of using language to persuade or move an audience.", example: "Structuring a speech to build from a false threat to a real one.", nonexample: "A private list with no audience in mind.", context: "The address is a classic study in rhetoric — argument shaped for effect." },
      { term: "parallelism", def: "Repeating a grammatical form to give ideas balance and rhythm.", example: "'We must live through all time, or die by suicide.'", nonexample: "A sentence whose parts have no matching structure.", context: "Lincoln's parallel phrasing gives his warnings weight." },
      { term: "tone", def: "The speaker's attitude toward the subject, conveyed by word choice.", example: "A grave, urgent tone in a warning about lawlessness.", nonexample: "A playful, joking attitude toward the same subject.", context: "The speech's tone is serious and warning as it names the danger." },
      { term: "theme", def: "The central idea or message a text develops.", example: "Free institutions survive only through reverence for the law.", nonexample: "A minor detail mentioned once.", context: "The speech's theme is that reason, not passion, must govern the republic." },
      { term: "reverence", def: "Deep respect, treated almost as sacred.", example: "Teaching citizens a reverence for the law and the Constitution.", nonexample: "Casual contempt for the rules.", context: "Lincoln's remedy is a shared reverence for the law — a 'political religion.'" }
    ],

    relic: {
      name: "The Speaker's Podium",
      intro: "Seven instructional reconstructions of the key ideas in the speech — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the argument, and what it reveals.",
      artifacts: [
        {
          id: "shepherd", name: "The Question — How to Perpetuate Free Institutions", image: "images/shepherd.webp",
          clues: ["The speech opens by naming its true subject: keeping free institutions alive over time.", "Everything after this frames an answer to that one question.", "Lincoln treats the survival of the republic as a problem to be solved, not a given."],
          identify: { q: "What question sets up the whole speech?", choices: ["How can America's free institutions be preserved over time?", "How can America defeat a foreign empire?", "How can one man become president?", "How can a new state be admitted?"] },
          purpose: { q: "What is this question's role in the speech?", choices: ["It is the central problem that every later point answers", "It is a joke to warm up the crowd", "It is unrelated to the rest", "It describes Lincoln's own career"] },
          significance: { q: "Why open with a question about lasting, not founding?", choices: ["Building a republic and keeping one are different tasks — the speech is about keeping it", "The founding was a failure", "Lincoln had no other topic", "It flatters the audience"] },
          reveals: "The controlling question the entire argument exists to answer.",
          conceals: "How much of the speech's force comes from framing survival as a real risk.",
          ace: "Articulate the guiding question; connect it to one later point; extend it to why keeping a thing can be harder than making it."
        },
        {
          id: "pastures", name: "No Foreign Army Could Conquer Us", image: "images/pastures.webp",
          clues: ["Lincoln imagines the combined armies of Europe, Asia, and Africa turned against America.", "Even with all the world's treasure, he says, they could not take a single drink from the Ohio by force.", "The exaggeration is deliberate — 'in a trial of a thousand years.'"],
          identify: { q: "What does this image claim about a foreign invasion?", choices: ["No army on earth, even all combined, could conquer America by force", "A foreign army will soon invade", "America should invade other continents", "The Ohio River is undefended"] },
          purpose: { q: "What rhetorical device is Lincoln using here?", choices: ["Hyperbole — deliberate exaggeration to dismiss the foreign threat", "A literal military statistic", "A quiet understatement", "A simple factual report"] },
          significance: { q: "Why exaggerate the impossibility of invasion?", choices: ["To clear away the false threat so the real, internal one stands out", "To frighten the audience about Europe", "To praise the American army", "To change the subject"] },
          reveals: "The false threat, ruled out in vivid, exaggerated terms.",
          conceals: "How dismissing one danger sets up the surprise of the real one.",
          ace: "Articulate the hyperbole; connect it to the argument's turn; extend it to why a writer might exaggerate on purpose."
        },
        {
          id: "waters", name: "We Must Ourselves Be Its Author and Finisher", image: "images/waters.webp",
          clues: ["If ruin ever comes, Lincoln says, it must come from within.", "'If destruction be our lot, we must ourselves be its author and finisher.'", "This line pivots from the foreign threat to the internal one."],
          identify: { q: "Where does Lincoln locate the true danger to the nation?", choices: ["Within the nation itself, not in any foreign enemy", "In the armies of Europe", "In the weather and geography", "In a lack of money"] },
          purpose: { q: "How does this line work with the invasion image before it?", choices: ["The two form an antithesis — outside threat versus inside danger", "They repeat the same idea", "One cancels the other out", "They are unrelated"] },
          significance: { q: "What does calling the nation the 'author and finisher' suggest?", choices: ["Any ruin would be self-inflicted — a choice, not an accident", "The nation is a book", "The danger is far off", "The danger is unavoidable"] },
          reveals: "The pivot from a foreign threat to a danger the nation creates itself.",
          conceals: "How antithesis, not just one line, carries the whole argument.",
          ace: "Articulate the pivot; connect it to the invasion hyperbole; extend it to a time the real problem was internal, not external."
        },
        {
          id: "paths", name: "\"Die by Suicide\"", image: "images/paths.webp",
          clues: ["Lincoln says a nation of freemen must 'live through all time, or die by suicide.'", "The word turns national collapse into an act the nation commits against itself.", "It is the speech's most memorable metaphor."],
          identify: { q: "What does the 'suicide' metaphor picture?", choices: ["A nation destroying itself from within", "A soldier dying in battle", "A natural disaster", "A peaceful death of old age"] },
          purpose: { q: "Why choose 'suicide' rather than 'defeat' or 'conquest'?", choices: ["It insists the cause of ruin would be internal, not an outside enemy", "It sounds gentler", "It refers to a real event", "It has no special meaning"] },
          significance: { q: "What makes this metaphor so forceful?", choices: ["It compresses the whole argument into a single, shocking image", "It is a statistic", "It is a quiet aside", "It contradicts the speech"] },
          reveals: "The abstract idea of self-destruction pressed into one stark word.",
          conceals: "How a single metaphor can carry an entire argument's weight.",
          ace: "Articulate the metaphor; connect it to the 'author and finisher' line; extend it to another image that makes an idea unforgettable."
        },
        {
          id: "valley", name: "The Rising Spirit of Mob Violence", image: "images/valley.webp",
          clues: ["Lincoln names the real threat: a growing spirit of mob violence and lawlessness.", "People taking justice into their own hands ignore the courts and the Constitution.", "This lawlessness erodes citizens' attachment to their own government."],
          identify: { q: "What does Lincoln identify as the real internal danger?", choices: ["Mob violence and lawlessness — people bypassing the courts and law", "A shortage of soldiers", "A foreign king", "Bad harvests"] },
          purpose: { q: "Why is mob rule so dangerous, in his argument?", choices: ["It weakens people's attachment to the government and the law", "It is merely rude", "It helps the economy", "It defends the Constitution"] },
          significance: { q: "How does this danger connect to the speech's warning?", choices: ["It is the concrete form the 'internal ruin' would take", "It is unrelated to the main point", "It is the remedy, not the danger", "It ends the speech happily"] },
          reveals: "The abstract 'internal danger' made concrete as mob rule.",
          conceals: "How lawlessness slowly erodes loyalty to the law itself.",
          ace: "Articulate the danger; connect it to the 'suicide' metaphor; extend it to why bypassing the rules can weaken a whole system."
        },
        {
          id: "rodstaff", name: "Reverence for the Law — a \"Political Religion\"", image: "images/rodstaff.webp",
          clues: ["Lincoln's remedy is a shared reverence for the law he calls a 'political religion.'", "Every citizen should swear never to violate the laws and to defend the Constitution.", "This reverence is to be taught in schools, churches, and homes."],
          identify: { q: "What is Lincoln's proposed remedy?", choices: ["A shared reverence for the law — a 'political religion'", "A larger army", "A new foreign alliance", "Abolishing the courts"] },
          purpose: { q: "What does calling it a 'political religion' emphasize?", choices: ["That respect for law should be deep, shared, and almost sacred", "That the law is a church", "That religion should govern the state", "That the remedy is a joke"] },
          significance: { q: "How is this reverence meant to spread?", choices: ["By being taught in schools, churches, and homes to every citizen", "By force of the army", "By a single new law", "By foreign example"] },
          reveals: "The remedy that answers the danger — reverence, taught widely.",
          conceals: "How the remedy mirrors the danger: shared attachment restored where it was eroded.",
          ace: "Articulate the remedy; connect it to the danger of mob rule; extend it to a rule or value your community teaches to keep something working."
        },
        {
          id: "table", name: "Reason Over Passion", image: "images/table.webp",
          clues: ["The speech's deepest theme is letting reason, not passion, govern the republic.", "Mobs act on passion; the law and the courts act on reason.", "Lincoln wants cool, calculating reason to steady the nation's future."],
          identify: { q: "What does Lincoln want to govern the republic?", choices: ["Reason, rather than passion or mob feeling", "Passion and strong emotion", "Foreign advice", "Chance"] },
          purpose: { q: "How does 'reason over passion' tie the speech together?", choices: ["The remedy (law) is reason; the danger (mobs) is passion", "It is a separate topic", "It contradicts the remedy", "It has no role"] },
          significance: { q: "Why end on reason rather than fear?", choices: ["A lasting republic must be steadied by law and reason, not stirred by feeling", "Fear is more persuasive", "Reason is unimportant", "It closes on the foreign threat"] },
          reveals: "The governing theme beneath the whole argument.",
          conceals: "How danger and remedy line up as passion against reason.",
          ace: "Articulate the reason-over-passion theme; connect it to the remedy of reverence for law; extend it to a decision better made by reason than by feeling."
        }
      ]
    },

    ctob: {
      name: "The Path to Perpetuation",
      intro: "Six locks. Every answer is inferable from the speech and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Lincoln says that if the nation is ever destroyed, it will die not by conquest but by ______. (one word)",
          evidence: ["He rules out any foreign army as the cause of ruin.", "The danger, he insists, comes entirely from within.", "The word names an act committed against oneself."],
          hints: ["A nation of freemen must live through all time, or die by this.", "It means self-destruction.", "The word is suicide."],
          answer: "suicide"
        },
        {
          type: "mc",
          prompt: "The image of Europe, Asia, and Africa unable to take a drink from the Ohio is mainly an example of —",
          options: [
            "hyperbole — deliberate exaggeration.",
            "understatement.",
            "a literal military report.",
            "a simple simile."
          ],
          hints: ["Ask whether the claim is meant to be taken literally.", "Which device uses obvious exaggeration for effect?"]
        },
        {
          type: "mc",
          prompt: "Lincoln argues that the real threat to America's institutions is —",
          options: [
            "the growing spirit of mob violence and lawlessness within the nation.",
            "an invading army from Europe.",
            "a lack of natural resources.",
            "the wealth of foreign nations."
          ],
          hints: ["He has already dismissed any foreign army.", "Think about people bypassing the courts and the Constitution."]
        },
        {
          type: "digit",
          prompt: "Lincoln names the continents whose combined armies still could not conquer America. How many continents does he name? Enter the number.",
          evidence: ["He lists them together as the source of the imagined foreign force.", "The continents are Europe, Asia, and Africa.", "Count them: one, two, three."],
          hints: ["Europe, Asia, and Africa — count the names.", "It is a small whole number.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the speech's moves in the order Lincoln makes them, earliest first.",
          items: [
            "Ask how free institutions can be perpetuated.",
            "Dismiss any foreign army as a real threat.",
            "Name mob violence and lawlessness as the true danger.",
            "Propose a 'political religion' of reverence for the law."
          ],
          hints: ["The speech opens by stating its question.", "The false threat is cleared away before the real one is named.", "The remedy comes last, after the danger."]
        },
        {
          type: "mc",
          prompt: "Lincoln's proposed remedy is that reverence for the law should be spread by —",
          options: [
            "teaching it in schools, churches, and homes to every citizen.",
            "sending the army to enforce it.",
            "leaving it to a single new statute.",
            "importing it from a foreign country."
          ],
          hints: ["He wants the whole population to share this attachment.", "Where do citizens first learn shared values?"]
        }
      ]
    },

    arcade: {
      name: "False Threat or Real Threat?",
      instruction: "The Lyceum Address is built on one antithesis: the threat Lincoln dismisses versus the danger he warns about. Sort each idea by its role in the speech: is it part of the FALSE (FOREIGN) THREAT that Lincoln rules out, or part of the REAL (INTERNAL) DANGER he names? Reasoning earns the points.",
      buckets: [
        { id: "false", label: "The false threat (a foreign enemy)", short: "False threat" },
        { id: "real", label: "The real threat (internal lawlessness)", short: "Real threat" }
      ],
      cards: [
        { text: "The combined armies of Europe, Asia, and Africa.", bucket: "false", why: "This is the foreign force Lincoln says could never conquer America." },
        { text: "All the treasure of the earth spent on an invasion.", bucket: "false", why: "Even with the world's wealth, Lincoln says a foreign attack must fail." },
        { text: "An enemy unable to take a drink from the Ohio by force.", bucket: "false", why: "The exaggerated foreign threat Lincoln dismisses." },
        { text: "A conqueror crossing the ocean to seize the nation.", bucket: "false", why: "The kind of external attack Lincoln rules out entirely." },
        { text: "Mobs taking justice into their own hands.", bucket: "real", why: "Lawlessness that bypasses the courts is the true internal danger." },
        { text: "Citizens ignoring the Constitution and the courts.", bucket: "real", why: "This erosion of the law is exactly what Lincoln warns against." },
        { text: "A nation that could 'die by suicide.'", bucket: "real", why: "Self-destruction from within is the danger Lincoln names." },
        { text: "Attachment to the government slowly wearing away.", bucket: "real", why: "Lincoln says lawlessness erodes citizens' loyalty from inside." }
      ],
      followup: "Lincoln spends real effort dismissing a threat that could never happen, then names a quieter one that could. What does that structure — false threat first, real threat second — do to the force of his warning?"
    },

    analysis: {
      mcq: [
        {
          q: "The central argument of the Lyceum Address is that America's institutions are most endangered by —",
          options: [
            "internal lawlessness, not any foreign enemy.",
            "a powerful invading army.",
            "a lack of money and resources.",
            "the size of its own territory."
          ],
          why: "Lincoln rules out foreign conquest and locates the true danger within the nation."
        },
        {
          q: "The claim that all the world's armies could not take a drink from the Ohio is best described as —",
          options: [
            "hyperbole that dismisses the foreign threat.",
            "a literal battlefield prediction.",
            "an understatement of America's strength.",
            "an unrelated aside."
          ],
          why: "The obvious exaggeration clears away the false threat so the real one can stand out."
        },
        {
          q: "By pairing the impossible foreign invasion with the warning that ruin must come from within, Lincoln builds —",
          options: [
            "an antithesis between an outside threat and an inside danger.",
            "a simile comparing two similar things.",
            "a list of unrelated facts.",
            "a rhyming refrain."
          ],
          why: "Setting the two opposed threats side by side is the speech's defining antithesis."
        },
        {
          q: "Calling national ruin 'suicide' works in the speech to —",
          options: [
            "insist that any destruction would be self-inflicted.",
            "predict a specific war.",
            "soften the warning into a joke.",
            "praise a foreign nation."
          ],
          why: "The metaphor compresses the whole argument: the danger is internal and self-caused."
        },
        {
          q: "Lincoln's remedy — a 'political religion' of reverence for the law — is meant to counter the danger of —",
          options: [
            "mob violence and lawlessness.",
            "foreign invasion.",
            "economic collapse.",
            "poor geography."
          ],
          why: "Reverence for law restores the attachment that mob rule and lawlessness erode."
        }
      ],
      short: [
        "Choose one image or phrase from the Speaker's Podium. Explain what it shows and what it reveals about Lincoln's argument.",
        "The speech places a false threat (foreign invasion) next to a real one (internal lawlessness). Explain what this antithesis suggests about where Lincoln thinks the true danger lies.",
        "Explain the 'suicide' metaphor. How does calling national ruin 'suicide' change the feeling and force of the warning?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Lincoln use rhetorical devices — such as antithesis and hyperbole — to argue that free institutions are endangered from within? Make a claim and support it with specific parts of the speech.",
      aceReflection: "Articulate Lincoln's main warning in your own words. Connect two parts of the speech that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Danger Within, Retold",
      prompt: "The Lyceum Address carries a big idea — that a free society is endangered from within, and preserved by reverence for the law — through vivid rhetoric. Choose another speech, essay, song, or story that makes a similar move (warning of an internal danger, or urging respect for shared rules). Explain the connection with evidence: what is the shared idea, how does each text deliver it, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the speech's danger-from-within idea (or its reverence-for-law remedy) to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the Lyceum Address argues that free institutions are endangered from within. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying the Lyceum Address. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] in the Lyceum Address because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the speech." },
      { title: "Evidence prompt", text: "Here is my claim about the Lyceum Address: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the Lyceum Address's danger-from-within idea to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the Lyceum Address for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Abraham Lincoln's 1838 Lyceum Address ('The Perpetuation of Our Political Institutions') as literature and rhetoric — a study of antithesis, hyperbole, metaphor, parallelism, tone, and theme. The speech is public domain, so its text can be referenced directly and this room reproduces no copyrighted edition. It is presented in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "The Lyceum Address appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The speech is a public-domain historical document (delivered January 27, 1838), so it satisfies the 'text identical to the specified version' requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric. Present the speech's antithesis (foreign threat versus internal danger), hyperbole (no army could invade), the 'suicide' metaphor, and the rule-of-law theme academically and neutrally. It discusses mob violence and lawlessness, studied as literature.",
        "Fact-check the anchors against the text of the address (the question of perpetuating free institutions; the combined armies of Europe, Asia, and Africa unable to take a drink from the Ohio; 'we must ourselves be its author and finisher'; 'live through all time, or die by suicide'; the rising spirit of mob violence; the 'political religion' of reverence for the law; reason over passion). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your English III course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on rhetorical devices, author's purpose, argument, and theme — especially antithesis, hyperbole, metaphor, and tone. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.4", "RI.11-12.5", "RI.11-12.6", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
