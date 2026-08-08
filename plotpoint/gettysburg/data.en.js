/* PlotPoint — The Gettysburg Address, Abraham Lincoln (November 19, 1863).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The 1863 Gettysburg Address is a public-domain U.S. historical
   document (a work of the U.S. government), so this room may reference it directly.
   It is studied here as LITERATURE and RHETORIC — anaphora, antithesis, allusion,
   tricolon, tone, and theme — in a neutral, academic frame consistent with the Texas
   required literary-works list (19 TAC §110.30, Grade 6). The room paraphrases and
   quotes only brief public-domain phrases where a close reading needs them. Standards
   are good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are
   clearly labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "gettysburg",
  storageKey: "plotpoint.gettysburg.v1",

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
    "enter.readListenNote": "This 1863 address is in the public domain. Use your class's copy or a verified public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Gettysburg Address",
    "vocab.intro": "{n} terms that unlock the text. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Dedication Ground",
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
    "ctob.title": "The Unfinished Work",
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
    "arcade.title": "The Dead or the Living?",
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
    "print.item.relic": "Dedication Ground evidence sheet",
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
      gutenberg: "https://en.wikisource.org/wiki/Gettysburg_Address",
      title: "The Gettysburg Address",
      author: "Abraham Lincoln",
      grades: "Grade 6",
      genre: "Speech · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole speech is discussed",
      rights: "Public domain (U.S. government work, 1863)",
      textAccess: "A very short public-domain speech; use your class's copy or any public-domain text.",
      copyright: "The 1863 Gettysburg Address is a public-domain U.S. historical document — a work of the U.S. government — so this room may reference it directly. It is studied here as literature and rhetoric, quoting only brief phrases and otherwise paraphrasing. No copyrighted edition is reproduced.",
      contentNote: "Presented as rhetoric and literature — anaphora, antithesis, allusion, tricolon, tone, and theme — in a neutral, academic way, consistent with the Texas required literary-works list adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the Gettysburg Address — a solemn November field at Gettysburg with rows of new graves, a distant crowd gathered for a dedication, and a lone speaker's platform under an autumn sky."
    },
    hook: "Fewer than three hundred words, spoken in about two minutes over a field of fresh graves. In the middle of a civil war, Lincoln stands at a cemetery dedication and does something surprising: he says the speakers cannot make this ground sacred — the soldiers who fought here already did. Then he turns to the living and gives them a job. Read it as literature, and watch a handful of repeated words carry an entire nation's argument about freedom.",
    goals: [
      "Understand the Gettysburg Address as a very short, carefully built speech that honors the dead and charges the living.",
      "Analyze its rhetorical devices — anaphora, antithesis, allusion, and the famous tricolon — and the effect each creates.",
      "Trace the speech's turn from dedicating the ground to rededicating the living to an 'unfinished work.'",
      "Interpret how brief, elevated language carries the abstract ideas of equality, sacrifice, and democracy — and why this speech has shaped American rhetoric."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of rhetorical devices like anaphora and antithesis.",
        "Discuss: how can a speaker persuade an audience by repeating a few key words and phrases?"
      ],
      during: [
        "Use the Dedication Ground to slow down and read the speech phrase by phrase.",
        "Track the turn: from remembering the past and the dead, to charging the living with the task ahead."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the devices and the speech's structure.",
        "Complete the Extend task to transfer the 'rededicate to unfinished work' idea to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main argument the Gettysburg Address makes. Include one phrase from the speech that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the speech — for example, honoring the dead and charging the living. Explain how placing them side by side shapes the speech's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the speech's technique — using repeated words and antithesis to turn an audience toward a shared task — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "rhetoric", def: "The art of using language effectively to inform, move, or persuade an audience.", example: "A speech built to persuade a crowd to act.", nonexample: "A random list of unconnected facts.", context: "The Gettysburg Address is studied as rhetoric because it is built to persuade." },
      { term: "anaphora", def: "Repeating the same word or phrase at the start of nearby clauses for emphasis.", example: "'We cannot dedicate — we cannot consecrate — we cannot hallow.'", nonexample: "Saying each idea once with no repetition.", context: "The speech's anaphora piles up 'we cannot' to make a point." },
      { term: "antithesis", def: "Placing two contrasting ideas close together in balanced phrasing.", example: "'What we say here' set against 'what they did here.'", nonexample: "Two ideas that agree and repeat each other.", context: "The speech uses antithesis to contrast words with deeds." },
      { term: "allusion", def: "A brief reference to another text, event, or idea the audience already knows.", example: "'Four score and seven years ago' pointing back to 1776.", nonexample: "A statement that refers to nothing outside itself.", context: "The allusion to 1776 links the speech to the nation's founding." },
      { term: "tricolon", def: "A series of three parallel words or phrases, often for a powerful ending.", example: "'Of the people, by the people, for the people.'", nonexample: "A single phrase standing alone.", context: "The famous tricolon closes the speech with three balanced phrases." },
      { term: "tone", def: "The attitude a speaker's language expresses toward the subject or audience.", example: "A solemn, respectful tone at a cemetery dedication.", nonexample: "A joking, careless attitude.", context: "The tone of the address is solemn and elevated." },
      { term: "theme", def: "The central idea or insight a text develops about its subject.", example: "Honoring the dead by committing the living to freedom.", nonexample: "A minor detail mentioned only once.", context: "The speech's theme is rededication to an unfinished cause." },
      { term: "consecrate", def: "To declare or make something sacred; to set it apart as holy.", example: "Saying a burial ground has been made sacred.", nonexample: "Treating a place as ordinary and unimportant.", context: "Lincoln says the living cannot consecrate the ground — the dead already have." },
      { term: "proposition", def: "A statement offered as true, to be examined or acted on; a claim.", example: "The claim 'that all men are created equal.'", nonexample: "A question with no claim in it.", context: "The nation is dedicated to a proposition, and the war tests it." }
    ],

    relic: {
      name: "The Dedication Ground",
      intro: "Seven instructional reconstructions of the moments and phrases in the speech — teaching recreations, not artwork from any edition. Investigate what each shows, its role in the speech, and what it reveals.",
      artifacts: [
        {
          id: "fourscore", name: "Four Score and Seven Years Ago", image: "images/fourscore.webp",
          clues: ["The speech's very first words count backward in time.", "'A score' is twenty, so 'four score and seven' means eighty-seven years.", "Counting back eighty-seven years from 1863 lands on 1776."],
          identify: { q: "What does the opening 'Four score and seven years ago' do?", choices: ["It points back in time to the nation's founding in 1776", "It gives the number of soldiers who died", "It names the year the war ends", "It counts the words in the speech"] },
          purpose: { q: "What is this opening allusion's role in the speech?", choices: ["It anchors the speech in the nation's founding before making its argument", "It is a joke to relax the crowd", "It has nothing to do with what follows", "It lists the speaker's credentials"] },
          significance: { q: "Why open with an allusion to 1776 rather than plain dates?", choices: ["Elevated, biblical-sounding counting links the moment to the founding's ideals", "It hides the real date from the audience", "It is only decoration with no meaning", "It signals the speech will be very long"] },
          reveals: "The allusion that ties the whole speech to the nation's founding.",
          conceals: "How much argument is packed into the first sentence.",
          ace: "Articulate what 'four score and seven' means; connect it to 1776; extend it to why a speaker might reach for elevated language at the start."
        },
        {
          id: "proposition", name: "A New Nation — All Men Are Created Equal", image: "images/proposition.webp",
          clues: ["Lincoln says the founders brought forth a nation 'conceived in Liberty.'", "It is dedicated to a 'proposition' — a claim to be tested.", "The claim is 'that all men are created equal,' an allusion to the Declaration of Independence."],
          identify: { q: "What proposition is the nation said to be dedicated to?", choices: ["That all men are created equal", "That the strongest should rule", "That the war can never end", "That the ground is already sacred"] },
          purpose: { q: "What role does naming this proposition play?", choices: ["It states the founding ideal the rest of the speech defends", "It changes the subject away from the war", "It is only a greeting", "It ends the speech"] },
          significance: { q: "Why call equality a 'proposition' being tested?", choices: ["A proposition is a claim that must be proven — and the war is testing it", "A proposition is a settled fact needing no defense", "It means the idea has been abandoned", "It refers to a business deal"] },
          reveals: "The founding ideal the speech sets out to defend.",
          conceals: "How the word 'proposition' quietly frames equality as something still to be won.",
          ace: "Articulate the proposition; connect it to the Declaration of Independence; extend it to why calling an ideal 'tested' raises the stakes."
        },
        {
          id: "endure", name: "Testing Whether the Nation Can Endure", image: "images/endure.webp",
          clues: ["Lincoln says the nation is now engaged in a great civil war.", "The war tests whether such a nation 'can long endure.'", "The cemetery dedication is set inside this larger struggle."],
          identify: { q: "What does the speech say the Civil War is testing?", choices: ["Whether a nation built on equality can survive", "Whether the crowd will stay for the speech", "Whether 1776 was a real year", "Whether the ground can be sold"] },
          purpose: { q: "Why frame the war as a test?", choices: ["It raises the stakes: the founding ideal itself is on trial", "It makes the war sound unimportant", "It changes the topic to the weather", "It lists the armies' names"] },
          significance: { q: "How does the war connect to the dedication?", choices: ["The soldiers being honored died so the nation might endure", "The war has nothing to do with the cemetery", "The test has already been failed", "The war ends the moment he speaks"] },
          reveals: "The stakes of the speech — the survival of a nation built on an idea.",
          conceals: "How a local dedication is quietly tied to a national question.",
          ace: "Articulate the test the war poses; connect it to the dead being honored; extend it to why naming stakes can move an audience."
        },
        {
          id: "consecrate", name: "We Cannot Consecrate This Ground", image: "images/consecrate.webp",
          clues: ["Lincoln repeats a phrase: 'we cannot dedicate — we cannot consecrate — we cannot hallow.'", "This repetition at the start of clauses is anaphora.", "He says the brave men who struggled here already made the ground sacred."],
          identify: { q: "What surprising claim does Lincoln make about the ground?", choices: ["The living speakers cannot make it sacred — the soldiers already did", "The ground was never important", "The speech alone makes it sacred", "The ground should be forgotten"] },
          purpose: { q: "What device is 'we cannot dedicate — consecrate — hallow'?", choices: ["Anaphora — repeating the opening words for emphasis", "A rhyme scheme", "A simile", "A list of names"] },
          significance: { q: "Why say the speakers 'cannot' consecrate the ground?", choices: ["It humbly shifts the honor from words to the soldiers' deeds", "It insults the crowd", "It means the dedication is canceled", "It admits the speech has failed"] },
          reveals: "The humble turn that credits the dead over the speakers.",
          conceals: "How anaphora builds force through repetition.",
          ace: "Articulate the 'we cannot' claim; connect the repetition to its emphasis; extend it to a time humility made a message stronger."
        },
        {
          id: "saydid", name: "What We Say vs. What They Did", image: "images/saydid.webp",
          clues: ["Lincoln contrasts the speakers' words with the soldiers' deeds.", "'The world will little note, nor long remember what we say here.'", "'But it can never forget what they did here.' — a balanced contrast, or antithesis."],
          identify: { q: "What two things does this line contrast?", choices: ["What speakers say here versus what the soldiers did here", "The past versus the weather", "One army versus another army", "Two different speeches"] },
          purpose: { q: "What device balances 'say' against 'did'?", choices: ["Antithesis — contrasting ideas in balanced phrasing", "Anaphora", "Allusion", "Tricolon"] },
          significance: { q: "What does the contrast claim about memory?", choices: ["Deeds outlast words — actions will be remembered longer than speeches", "Speeches are more important than actions", "Nothing here will be remembered", "The two are exactly equal"] },
          reveals: "The antithesis that places words below deeds.",
          conceals: "How the balanced phrasing makes the contrast feel inevitable.",
          ace: "Articulate the say-versus-did contrast; connect it to the theme of sacrifice; extend it to why speakers sometimes downplay their own words."
        },
        {
          id: "unfinished", name: "The Unfinished Work", image: "images/unfinished.webp",
          clues: ["Lincoln turns from the dead to the living.", "He charges the living to dedicate themselves to 'the unfinished work.'", "He calls it 'the great task remaining before us.'"],
          identify: { q: "What does Lincoln ask of the living?", choices: ["To dedicate themselves to the unfinished work the dead began", "To end the speech and go home", "To forget the soldiers", "To rebuild the cemetery walls"] },
          purpose: { q: "What is the role of this turn to the living?", choices: ["It converts mourning into a call to action", "It repeats the opening word for word", "It changes the subject to 1776", "It closes with a joke"] },
          significance: { q: "Why call the cause 'unfinished'?", choices: ["The soldiers' sacrifice must be completed by the living, so their deaths mean something", "The war is already over", "The work can never be done", "The cause has been given up"] },
          reveals: "The charge that turns grief into responsibility.",
          conceals: "How the speech pivots from the dead to a demand on the living.",
          ace: "Articulate the 'unfinished work' charge; connect it to the soldiers' sacrifice; extend it to a cause you were asked to help finish."
        },
        {
          id: "tricolon", name: "Of the People, by the People, for the People", image: "images/tricolon.webp",
          clues: ["The speech ends with three balanced phrases about government.", "Three parallel phrases like this form a tricolon.", "The final vision is a government that 'shall not perish from the earth.'"],
          identify: { q: "What are the three closing phrases about?", choices: ["Government of the people, by the people, for the people", "Three armies in the war", "Three years of fighting", "Three towns near Gettysburg"] },
          purpose: { q: "What device is 'of / by / for the people'?", choices: ["A tricolon — three parallel phrases for a powerful ending", "An allusion", "An antithesis", "A rhyme"] },
          significance: { q: "What vision does this ending offer?", choices: ["Democracy — a government belonging to and serving its people", "A monarchy ruled by one leader", "A government run by the army", "The end of all government"] },
          reveals: "The famous tricolon and the speech's vision of democracy.",
          conceals: "How three short phrases can carry the whole point of the speech.",
          ace: "Articulate the tricolon; connect it to the idea of democracy; extend it to why a three-part ending stays in memory."
        }
      ]
    },

    ctob: {
      name: "The Unfinished Work",
      intro: "Six locks. Every answer is inferable from the speech and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "Lincoln says the living cannot dedicate, cannot ______, and cannot hallow this ground. (one word)",
          evidence: ["It sits in the middle of a three-part repeated phrase.", "It means 'to make sacred.'", "The word begins with 'conse…'."],
          hints: ["It means to make something holy or sacred.", "Conse…", "The word is consecrate."],
          answer: "consecrate"
        },
        {
          type: "mc",
          prompt: "'The world will little note... what we say here, but it can never forget what they did here' is an example of —",
          options: [
            "antithesis — a balanced contrast between words and deeds.",
            "a rhyme scheme.",
            "a simile comparing two like things.",
            "a list of place names."
          ],
          hints: ["Look at what is being set against what.", "It contrasts 'say' with 'did' in balanced phrasing."]
        },
        {
          type: "mc",
          prompt: "The repeated 'we cannot dedicate — we cannot consecrate — we cannot hallow' is an example of —",
          options: [
            "anaphora — repeating the opening words of nearby clauses.",
            "allusion to another famous text.",
            "a tricolon about government.",
            "plain prose with no device."
          ],
          hints: ["Notice which words repeat, and where in the line they sit.", "The same phrase begins each part."]
        },
        {
          type: "digit",
          prompt: "How many years is 'four score and seven'? (A score is twenty.) Enter the number.",
          evidence: ["A 'score' equals twenty years.", "'Four score' is four times twenty.", "Then add seven more."],
          hints: ["Four times twenty, plus seven.", "80 plus 7.", "The number is 87."],
          answer: "87"
        },
        {
          type: "sequence",
          prompt: "Put the speech's moves in the order they appear, earliest first.",
          items: [
            "The founding: 'four score and seven years ago,' a new nation dedicated to equality.",
            "The war tests whether that nation can endure.",
            "The living cannot consecrate the ground — the soldiers already did.",
            "A charge to the living: finish the unfinished work; government of the people shall not perish."
          ],
          hints: ["The speech opens by looking back to the founding.", "The 'we cannot consecrate' turn comes before the charge to the living.", "The tricolon about government closes the speech."]
        },
        {
          type: "mc",
          prompt: "The closing 'government of the people, by the people, for the people' is famous mainly as —",
          options: [
            "a tricolon that pictures democracy in three balanced phrases.",
            "an allusion to the year 1776.",
            "an antithesis contrasting two enemies.",
            "a simple factual date."
          ],
          hints: ["Count the parallel phrases in the line.", "Three balanced phrases in a row form this device."]
        }
      ]
    },

    arcade: {
      name: "The Dead or the Living?",
      instruction: "The Gettysburg Address turns from honoring those who died to charging those who remain. Sort each phrase or idea by which half it belongs to: does it look BACK to the past and the dead (honoring), or FORWARD to the future and the living (the task ahead)? Reasoning earns the points.",
      buckets: [
        { id: "past", label: "The past & the dead (honoring)", short: "Past / dead" },
        { id: "future", label: "The future & the living (the task ahead)", short: "Future / living" }
      ],
      cards: [
        { text: "'Four score and seven years ago' our fathers brought forth a nation.", bucket: "past", why: "It looks back to the founding in 1776 — the past." },
        { text: "The brave men who struggled here have already consecrated this ground.", bucket: "past", why: "It honors the deeds of the soldiers who died." },
        { text: "'What they did here' can never be forgotten.", bucket: "past", why: "It remembers the sacrifice already made — the dead." },
        { text: "We have come to dedicate a final resting place for those who died.", bucket: "past", why: "It marks the burial and honors the fallen." },
        { text: "The living must dedicate themselves to 'the unfinished work.'", bucket: "future", why: "It charges those who remain with a task ahead." },
        { text: "'The great task remaining before us' calls for renewed devotion.", bucket: "future", why: "It points forward to work still to be done." },
        { text: "These dead 'shall not have died in vain' — if the living act.", bucket: "future", why: "It makes meaning depend on the future choices of the living." },
        { text: "Government 'of the people, by the people, for the people' shall not perish.", bucket: "future", why: "It is a vision of democracy carried forward by the living." }
      ],
      followup: "The speech spends its first half on the dead and its second half on the living. Why might Lincoln honor the dead by turning the audience toward the future? What does that structure suggest about how he wants the crowd to grieve?"
    },

    analysis: {
      mcq: [
        {
          q: "The opening 'Four score and seven years ago' is best described as —",
          options: [
            "an allusion to the nation's founding in 1776.",
            "a tricolon about government.",
            "an antithesis between two armies.",
            "a simple weather report."
          ],
          why: "'Four score and seven' equals 87 years, pointing back from 1863 to 1776 — a reference the audience would recognize."
        },
        {
          q: "'We cannot dedicate — we cannot consecrate — we cannot hallow' relies on —",
          options: [
            "anaphora, repeating the opening words for emphasis.",
            "a rhyme scheme.",
            "an allusion to the Bible only.",
            "a single unrepeated statement."
          ],
          why: "The same phrase begins each clause, the definition of anaphora."
        },
        {
          q: "Contrasting 'what we say here' with 'what they did here' is an example of —",
          options: [
            "antithesis, balancing words against deeds.",
            "simile, comparing two like things.",
            "allusion, referring to another text.",
            "a tricolon, listing three phrases."
          ],
          why: "The line sets speech against action in balanced phrasing — antithesis."
        },
        {
          q: "The turn to 'the unfinished work' and 'the great task remaining' mainly serves to —",
          options: [
            "charge the living to complete the cause the dead began.",
            "describe the weather at the cemetery.",
            "list the names of the soldiers.",
            "end the speech with a joke."
          ],
          why: "Lincoln converts mourning into a call to action for those who remain."
        },
        {
          q: "'Government of the people, by the people, for the people' is famous chiefly as —",
          options: [
            "a tricolon expressing the ideal of democracy.",
            "a simile.",
            "a pun.",
            "a rhyme scheme."
          ],
          why: "Three parallel phrases form a tricolon, and together they picture government belonging to its people."
        }
      ],
      short: [
        "Choose one phrase from the Dedication Ground. Explain what it shows and what it reveals about the speech's meaning.",
        "The speech turns from honoring the dead to charging the living. Explain what this structure suggests about how Lincoln wants the audience to respond to grief.",
        "Explain the antithesis 'what we say here' versus 'what they did here.' How does contrasting words with deeds shape the tone of the speech?"
      ],
      paragraph: "Write an evidence-based paragraph. How does the Gettysburg Address use rhetorical devices — such as anaphora, antithesis, allusion, or the closing tricolon — to carry an abstract idea like equality, sacrifice, or democracy? Make a claim and support it with specific phrases from the speech.",
      aceReflection: "Articulate what the speech suggests about honoring the dead in your own words. Connect two devices or moments that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Words That Turn a Crowd",
      prompt: "The Gettysburg Address uses repeated words, antithesis, and a three-part ending to turn an audience from mourning toward a shared, unfinished task. Choose another speech, song, poem, or story that rededicates its audience to a cause — or that uses one of these devices (anaphora, antithesis, allusion, tricolon). Explain the connection with evidence: what device or move do both share, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the speech's rhetoric to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the Gettysburg Address uses repeated words and contrast to honor the dead and charge the living. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying the Gettysburg Address. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [device or moment one] connects to [device or moment two] in the Gettysburg Address because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the speech." },
      { title: "Evidence prompt", text: "Here is my claim about the Gettysburg Address: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the Gettysburg Address's rhetoric to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the Gettysburg Address for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of the Gettysburg Address (1863) as a very short speech — a study of rhetoric: anaphora, antithesis, allusion, the closing tricolon, tone, and theme. The address is a public-domain U.S. government work, so it can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature and rhetoric in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "The Gettysburg Address appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The 1863 address is a public-domain U.S. government work, so it satisfies any identical-text requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric and literature. Foreground the devices — anaphora ('we cannot dedicate... consecrate... hallow'), antithesis ('what we say here' vs. 'what they did here'), allusion (1776 and 'all men are created equal'), and the closing tricolon ('of the people, by the people, for the people') — presented academically and neutrally.",
        "Fact-check the anchors used here against a public-domain text of the address: 'four score and seven years ago' (= 87 years, pointing to 1776); the nation 'conceived in Liberty' and dedicated to the proposition 'that all men are created equal'; the war testing whether the nation 'can long endure'; 'we cannot dedicate — we cannot consecrate — we cannot hallow'; 'what we say here' versus 'what they did here'; 'the unfinished work' and 'the great task remaining before us'; 'shall not have died in vain'; 'a new birth of freedom'; and 'government of the people, by the people, for the people, shall not perish from the earth.' (Minor wording varies among the five known manuscript versions.)",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 6 ELAR TEKS (19 TAC Ch. 110) strands on rhetorical and figurative devices, author's purpose and craft, structure, and theme — especially anaphora, antithesis, allusion, and parallel structure. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.6.1", "RI.6.2", "RI.6.4", "RI.6.5", "RI.6.6", "W.6.1", "SL.6.1", "L.6.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
