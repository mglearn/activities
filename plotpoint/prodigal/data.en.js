/* PlotPoint — The Prodigal Son, Luke 15:11–32 (English Standard Version, specified).  COPYRIGHTED SPECIFIED VERSION.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The underlying parable is ancient and public domain, but the
   STATE-NAMED translation is the English Standard Version (ESV), which is COPYRIGHTED.
   This room reproduces NO scripture text — it PARAPHRASES throughout and quotes no
   ESV (or other) wording. The Prodigal Son is studied here as LITERATURE — the parable
   form, character foils, plot arc, reversal, and the deliberate open ending — in a
   neutral, academic, non-devotional frame consistent with the Texas required
   literary-works list (19 TAC §110.70, English I). Because the state names a copyrighted
   translation, a district must supply that specified edition for the identical-text
   requirement; a public-domain translation may support supplemental activities but is
   not textually identical. Standards are good-faith alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "prodigal",
  storageKey: "plotpoint.prodigal.v1",

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

    "nav.enter": "Enter the Text", "nav.vocab": "Vocabulary", "nav.relic": "Relic Room",
    "nav.ctob": "Crack the Case", "nav.arcade": "Arcade Game", "nav.analysis": "Analyze the Text",
    "nav.extend": "Extend the Idea", "nav.genai": "Gen AI Partner", "nav.print": "Print Materials",
    "nav.teacher": "Teacher Guide", "nav.done": "completed",

    "enter.eyebrow": "Enter the Text",
    "enter.by": "from the {a}",
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
    "vocab.title": "Words for the Prodigal Son",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Father's House",
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
    "ctob.title": "The Road Home",
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
    "arcade.title": "Repentance or Resentment?",
    "arcade.default": "Sort each action by the attitude it shows in the parable.",
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
    "print.item.relic": "Father's House evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Foil-and-ending organizer",
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
      title: "The Prodigal Son — Luke 15:11–32",
      author: "English Standard Version (specified)",
      grades: "English I",
      genre: "Sacred text · Parable · Narrative",
      time: "45–75 minutes",
      spoiler: "Full spoilers",
      rights: "Underlying passage public domain; specified version (ESV) copyrighted",
      textAccess: "The parable of the Prodigal Son is a short narrative (Luke 15:11–32). The state-specified edition is the English Standard Version (ESV), which is copyrighted — obtain that edition through your district. This room reproduces no scripture text; it paraphrases only.",
      copyright: "The parable itself is ancient and in the public domain, but the state names a specific modern translation — the English Standard Version (ESV) — which is copyrighted. To respect that copyright, this room reproduces NO scripture text from the ESV or any other edition; it paraphrases throughout and quotes none of the passage. The Prodigal Son is studied here as literature — its parable form, character foils, plot arc, reversal, and open ending.",
      contentNote: "Presented as literature — the parable form, character foils, plot arc, reversal, and the deliberate open ending — in a neutral, academic, non-devotional way, consistent with the Texas required literary-works list (19 TAC §110.70, English I / high school). Because the state names a copyrighted translation (ESV), a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking the Prodigal Son — a distant figure walking a dusty road toward an open gate at sunset, where an older figure hurries out to meet him, with a lit house and waiting older brother in the background."
    },
    hook: "A father has two sons. One demands his inheritance early — as if wishing his father already gone — then wastes it all in a distant country until he is starving among pigs. He turns back to beg for a servant's place, but his father runs to embrace him and throws a feast. Meanwhile the older brother, who never left, stands outside in anger, refusing to celebrate. Read it as a story, and watch how two sons, one father, and an ending that stops mid-argument turn a simple homecoming into a question you have to answer yourself.",
    goals: [
      "Understand the Prodigal Son as a parable — a short narrative that carries a larger meaning beyond its plot.",
      "Analyze the two brothers as character foils, and the father as a foil to each, tracing how contrast reveals theme.",
      "Trace the journey-and-return plot arc and the reversal at its center: the wastrel restored, the dutiful son resentful.",
      "Interpret the deliberate open ending — why the parable stops on the father's appeal and leaves the elder son's choice unresolved."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a parable and character foils.",
        "Discuss: what makes a short story mean more than the events it describes?"
      ],
      during: [
        "Use the Father's House to slow down and read the parable scene by scene.",
        "Track the journey: from the demand for the inheritance, through the far country and the pigs, to the return, the feast, and the brother left outside."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the foils, the reversal, and the structure.",
        "Complete the Extend task to compare the foil-brothers or the open ending to another story."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what a parable is, using the Prodigal Son as your example. Include one moment from the story that carries a meaning larger than the plot." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the two brothers as foils. Explain how the younger son's return and the elder son's anger, placed side by side, shape what the parable is really about." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply one of the parable's techniques — the foil pair or the open ending — to another story, film, or real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "parable", def: "A short, simple story that carries a larger moral or spiritual meaning beyond its plot.", example: "A brief tale about two sons that teaches about forgiveness.", nonexample: "A long factual report with no deeper meaning.", context: "The Prodigal Son is a parable: a short story that means more than it says." },
      { term: "prodigal", def: "Spending money or resources wastefully and extravagantly; recklessly extravagant.", example: "A young heir who burns through a fortune in weeks.", nonexample: "A careful saver who tracks every coin.", context: "The son is called prodigal because he squanders his whole inheritance." },
      { term: "foil", def: "A character whose contrast with another highlights the qualities of both.", example: "The dutiful elder brother set against the reckless younger one.", nonexample: "Two characters who are exactly alike in every way.", context: "The two brothers are foils: each one sharpens what we see in the other." },
      { term: "characterization", def: "The way a writer reveals a character — through actions, words, and choices rather than direct labels.", example: "Learning the son has changed by what he decides to say.", nonexample: "A narrator simply announcing 'he was good.'", context: "The parable uses characterization through action and dialogue, not description." },
      { term: "reversal", def: "A turn in a story where an expected outcome flips to its opposite.", example: "The wasteful son is celebrated while the faithful son is left out.", nonexample: "A story where everything happens exactly as expected.", context: "The reversal is that the one who failed is honored and the one who stayed grows bitter." },
      { term: "plot arc", def: "The shape of a story's events, often a journey out and a return or resolution.", example: "Leaving home, falling low, and coming back changed.", nonexample: "A list of unrelated events with no shape.", context: "The parable follows a clear journey-and-return plot arc." },
      { term: "ambiguous ending", def: "A conclusion left open or unresolved, so the reader must supply the meaning.", example: "A story that stops before we learn what a character decides.", nonexample: "A tidy ending that answers every question.", context: "The parable's ambiguous ending leaves the elder son's choice unresolved." },
      { term: "theme", def: "The central idea or insight about life that a work explores.", example: "Repentance, forgiveness, and resentment in one family.", nonexample: "The mere summary of what happened.", context: "The theme reaches beyond the plot to ideas of mercy and what 'lost' means." },
      { term: "compassion", def: "A deep sympathy for another's suffering, joined with a desire to help.", example: "A father running to embrace a returning child.", nonexample: "Coldly turning away from someone in need.", context: "The father is moved with compassion before the son can even finish apologizing." }
    ],

    relic: {
      name: "The Father's House",
      intro: "Seven instructional reconstructions of the parable's key moments — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the story, and what it reveals. The characters are unnamed in the parable, so none are named here.",
      artifacts: [
        {
          id: "twosons", name: "The Two Sons", image: "images/twosons.webp",
          clues: ["The parable's very first move is to say a certain man had two sons.", "The whole story turns on the contrast between them.", "One will leave and fall low; the other will stay and grow bitter."],
          identify: { q: "How does the parable open?", choices: ["A man has two sons, setting up a contrast between them", "A king rules over a great city", "A shepherd loses one sheep", "A merchant searches for a pearl"] },
          purpose: { q: "What is the two-sons setup's role in the story?", choices: ["It establishes the character foils the whole parable depends on", "It is a detail that never matters again", "It describes the father's wealth", "It ends the story"] },
          significance: { q: "Why begin with two sons rather than one?", choices: ["The contrast between them lets the parable examine two responses at once", "To show the father had a large family", "To make the story longer", "To confuse the reader"] },
          reveals: "The foil structure that organizes the entire parable.",
          conceals: "How much of the meaning will come from comparing the brothers.",
          ace: "Articulate the two-sons setup; connect it to the idea of a foil; extend it to why a writer might tell one story through two contrasting characters."
        },
        {
          id: "demand", name: "The Younger Son's Demand", image: "images/demand.webp",
          clues: ["The younger son asks for his share of the inheritance early.", "In effect, he is treating his father as if already gone.", "The father grants the request rather than refusing it."],
          identify: { q: "What does the younger son demand?", choices: ["His share of the inheritance, before his father has died", "A larger house for himself", "The elder brother's portion", "A place among the servants"] },
          purpose: { q: "What does this demand reveal about the son?", choices: ["He is impatient and self-centered, wishing his own freedom over his family", "He is cautious and humble", "He is loyal and content", "He is afraid to leave home"] },
          significance: { q: "Why does it matter that the father grants it?", choices: ["The father allows the son real freedom — even the freedom to fail", "The father is forced by law to give it", "The father secretly keeps the money", "The father sends servants along to control him"] },
          reveals: "The choice that sets the whole journey in motion.",
          conceals: "How the father's granting the request will later be answered by his welcome.",
          ace: "Articulate what the son demands; connect it to his character; extend it to a time someone was given the freedom to make a mistake."
        },
        {
          id: "farcountry", name: "The Far Country", image: "images/farcountry.webp",
          clues: ["The son travels to a distant country far from home.", "There he wastes the money on reckless, extravagant living.", "This is the 'prodigal' part — the squandered fortune."],
          identify: { q: "What happens in the far country?", choices: ["The son wastes his whole inheritance on reckless living", "The son invests the money wisely", "The son sends the money home", "The son buys land to farm"] },
          purpose: { q: "What does this stage add to the plot arc?", choices: ["It is the descent — the low outward journey away from home", "It is the story's happy ending", "It is the father's decision", "It is the elder brother's complaint"] },
          significance: { q: "Why does the word 'prodigal' fit this scene?", choices: ["'Prodigal' means wastefully extravagant, exactly what he does with the money", "'Prodigal' means faithful and careful", "'Prodigal' means far away", "'Prodigal' means forgiven"] },
          reveals: "The reckless spending that gives the parable its familiar name.",
          conceals: "How far the son must fall before the story can turn.",
          ace: "Articulate what the son does with the money; connect it to the word 'prodigal'; extend it to a story where someone's low point sets up a change."
        },
        {
          id: "pigs", name: "Feeding the Pigs — Coming to Himself", image: "images/pigs.webp",
          clues: ["A famine strikes and the penniless son takes the lowest work — feeding pigs.", "He grows so hungry he envies the pigs' food.", "Then he 'comes to himself' — a turning point of self-realization — and resolves to go home."],
          identify: { q: "What is the son's lowest point?", choices: ["Starving while feeding pigs, envying even their food", "Losing an argument with his brother", "Being turned away at the gate", "Forgetting the way home"] },
          purpose: { q: "What does 'coming to himself' mark in the story?", choices: ["The turning point — self-realization that begins his return", "The end of the parable", "The father's forgiveness", "The elder brother's anger"] },
          significance: { q: "What does the son resolve to do?", choices: ["Go home, confess he has done wrong, and ask to be treated as a hired servant", "Demand more money from his father", "Stay in the far country", "Blame his father for his troubles"] },
          reveals: "The pivot of the plot — the exact moment the descent turns toward return.",
          conceals: "How his rehearsed, humble plan will be interrupted by the father's welcome.",
          ace: "Articulate the son's low point; connect it to his change of mind; extend it to a moment when hitting bottom led to a decision to change."
        },
        {
          id: "fatherruns", name: "The Father Runs to Meet Him", image: "images/fatherruns.webp",
          clues: ["While the son is still far off, the father sees him.", "The father is moved with compassion, runs to him, and embraces him.", "The son begins his rehearsed speech but is interrupted before he can finish."],
          identify: { q: "How does the father respond when he sees the son?", choices: ["He is moved with compassion, runs to him, and embraces him", "He waits coldly inside the house", "He demands repayment first", "He sends a servant to turn him away"] },
          purpose: { q: "What does interrupting the son's speech accomplish?", choices: ["The welcome comes before the apology is finished — mercy outruns the confession", "It shows the father was not listening", "It ends the parable", "It punishes the son"] },
          significance: { q: "What emotion drives this scene?", choices: ["Compassion — deep sympathy joined with the desire to restore", "Anger at the wasted money", "Indifference to the son's return", "Fear of what the neighbors think"] },
          reveals: "The parable's emotional center: forgiveness offered freely and first.",
          conceals: "How this generous welcome will set up the elder brother's very different reaction.",
          ace: "Articulate the father's response; connect it to the theme of compassion; extend it to a time forgiveness came before an apology was finished."
        },
        {
          id: "feast", name: "The Robe, the Ring, and the Feast", image: "images/feast.webp",
          clues: ["The father calls for the best robe, a ring, and sandals for the returned son.", "He orders a celebration with the fattened calf.", "He declares that this son was as good as dead and is alive again, was lost and is found."],
          identify: { q: "How does the father mark the son's return?", choices: ["With the best robe, a ring, sandals, and a feast with the fattened calf", "With a quiet, private meal", "With a list of the son's debts", "With a period of punishment"] },
          purpose: { q: "What do the robe, ring, and sandals signal?", choices: ["Full restoration — the son is welcomed back as a son, not a servant", "That the son must now work off his debt", "That the son is only a guest", "That the son will leave again soon"] },
          significance: { q: "What do 'dead and alive, lost and found' express?", choices: ["The return is a kind of resurrection — the story's language of loss and recovery", "The son has actually died and revived", "The father has lost track of the money", "The feast is a funeral"] },
          reveals: "Restoration pictured through gifts and celebration — the reversal at full height.",
          conceals: "How this joy, seen from outside, will look like injustice to the elder son.",
          ace: "Articulate the symbols of the feast; connect them to full restoration; extend it to how 'lost' and 'found' can mean more than a physical return."
        },
        {
          id: "elderbrother", name: "The Elder Brother's Anger", image: "images/elderbrother.webp",
          clues: ["The elder son, coming in from the fields, hears music and dancing and learns why.", "Angry, he refuses to go in, complaining he served faithfully for years without so much as a young goat for a feast.", "The father pleads with him — and the parable ends on that appeal, the elder son's response left unresolved."],
          identify: { q: "How does the elder brother react to the celebration?", choices: ["He is angry and refuses to go inside", "He joins the feast at once", "He leaves for the far country himself", "He forgives his brother immediately"] },
          purpose: { q: "What is the elder brother's complaint?", choices: ["He served faithfully for years yet was never celebrated, while the wastrel is honored", "He wants a larger inheritance", "He wishes his father were stricter", "He resents the servants"] },
          significance: { q: "Why does the parable end on the father's appeal?", choices: ["The open ending leaves the reader to judge the elder son's next move", "The story simply ran out of events", "The elder son clearly refuses forever", "The elder son clearly goes in and celebrates"] },
          reveals: "The second half of the reversal: the dutiful son now resentful and outside.",
          conceals: "The reader's own verdict — the parable deliberately withholds the elder son's choice.",
          ace: "Articulate the elder brother's complaint; connect it to the theme of resentment; extend it to why leaving an ending unresolved can make a story more powerful."
        }
      ]
    },

    ctob: {
      name: "The Road Home",
      intro: "Six locks. Every answer is inferable from the parable and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The word for spending wastefully and extravagantly — the trait that names this story — is ______. (one word)",
          evidence: ["The younger son burns through his whole inheritance.", "This adjective describes reckless, extravagant spending.", "The word begins with 'prod…'."],
          hints: ["It means recklessly wasteful with money.", "Prod…", "The word is prodigal."],
          answer: "prodigal"
        },
        {
          type: "mc",
          prompt: "The two brothers function in the parable mainly as —",
          options: [
            "character foils, whose contrast sharpens the meaning.",
            "identical twins with no differences.",
            "minor figures who never matter.",
            "narrators who tell the story."
          ],
          hints: ["Think about how each brother makes us see the other more clearly.", "Which option names contrasting characters?"]
        },
        {
          type: "mc",
          prompt: "The moment the son 'comes to himself' while feeding the pigs functions to —",
          options: [
            "mark the turning point where his descent becomes a return.",
            "end the parable on the elder brother.",
            "describe the feast at the father's house.",
            "explain the father's wealth."
          ],
          hints: ["It is the low point that changes the direction of the plot.", "Right after it, he resolves to go home."]
        },
        {
          type: "digit",
          prompt: "The parable begins by telling us how many sons the man had. Enter that number.",
          evidence: ["The opening line states that a certain man had this many sons.", "The whole story turns on the contrast between them — one who leaves and one who stays.", "One plus one."],
          hints: ["Count the brothers the parable is about: the younger and the elder.", "One plus one.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the parable's events in the order they appear, earliest first.",
          items: [
            "The younger son demands his inheritance and leaves for a far country.",
            "Penniless and starving, he feeds pigs and resolves to go home.",
            "The father runs to meet him and throws a feast of celebration.",
            "The elder brother, angry, refuses to join, and the father pleads with him."
          ],
          hints: ["The story begins with the demand and the departure.", "The turn happens among the pigs.", "The elder brother's anger comes last, at the very end."]
        },
        {
          type: "mc",
          prompt: "The parable ends on the father's appeal to the elder son. This open ending —",
          options: [
            "leaves the elder son's response unresolved, so the reader must judge it.",
            "clearly shows the elder son joining the feast.",
            "clearly shows the elder son leaving home forever.",
            "returns to the younger son's journey."
          ],
          hints: ["Notice that we never learn what the elder son decides.", "An unresolved ending hands the decision to the reader."]
        }
      ]
    },

    arcade: {
      name: "Repentance or Resentment?",
      instruction: "The parable sets a returning, humbled son beside a faithful but bitter one. Sort each action by the attitude it shows: does it reveal REPENTANCE & FORGIVENESS, or PRIDE & RESENTMENT? Reasoning earns the points.",
      buckets: [
        { id: "repentance", label: "Repentance & forgiveness", short: "Repentance" },
        { id: "resentment", label: "Pride & resentment", short: "Resentment" }
      ],
      cards: [
        { text: "The younger son resolves to confess he has done wrong.", bucket: "repentance", why: "Admitting fault and turning back is the heart of repentance." },
        { text: "The son asks to be treated as a hired servant, not a son.", bucket: "repentance", why: "He lowers himself, seeking no special claim — genuine humility." },
        { text: "The father runs out to embrace the returning son.", bucket: "repentance", why: "Compassion and welcome show forgiveness offered freely." },
        { text: "The father orders a feast to celebrate the son's return.", bucket: "repentance", why: "Joy over a recovered son enacts full forgiveness." },
        { text: "The elder brother refuses to go into the celebration.", bucket: "resentment", why: "Standing outside in protest is an act of resentment." },
        { text: "The elder brother complains he never got even a young goat.", bucket: "resentment", why: "Counting up his own service reveals wounded pride." },
        { text: "The elder brother calls the returned son 'this son of yours.'", bucket: "resentment", why: "Refusing to say 'my brother' shows bitterness and distance." },
        { text: "The elder brother resents that the wastrel is honored.", bucket: "resentment", why: "Begrudging another's welcome is pride, not gladness." }
      ],
      followup: "The parable places a repentant younger son beside a resentful elder son and then stops before the elder son answers. What does that pairing — and that silence — suggest about which brother the reader is meant to reflect on?"
    },

    analysis: {
      mcq: [
        {
          q: "The Prodigal Son is best described as a —",
          options: [
            "parable — a short story carrying a larger meaning.",
            "sonnet with a fixed rhyme scheme.",
            "news report of real events.",
            "personal letter to one reader."
          ],
          why: "It is a brief narrative told to carry meaning beyond its plot, the definition of a parable."
        },
        {
          q: "The two brothers relate to each other mainly as —",
          options: [
            "foils whose contrast reveals the qualities of both.",
            "identical characters with no differences.",
            "enemies who never share a father.",
            "narrators of the story."
          ],
          why: "The reckless younger son and the dutiful elder son sharpen each other by contrast."
        },
        {
          q: "The scene among the pigs, where the son 'comes to himself,' works in the parable to —",
          options: [
            "mark the turning point where his descent becomes a return.",
            "describe the feast at the father's house.",
            "introduce the elder brother.",
            "end the story."
          ],
          why: "His self-realization at the low point is the pivot from falling to returning."
        },
        {
          q: "The central reversal of the parable is that —",
          options: [
            "the son who wasted everything is celebrated, while the faithful son grows resentful.",
            "the father refuses to forgive either son.",
            "both sons leave home together.",
            "the younger son never returns."
          ],
          why: "The expected outcome flips: the failure is honored and the dutiful son is left bitter and outside."
        },
        {
          q: "The parable ends on the father's appeal to the elder son. This open ending mainly —",
          options: [
            "leaves the elder son's response unresolved, so the reader must supply the judgment.",
            "confirms the elder son joins the feast.",
            "confirms the elder son leaves home.",
            "returns to the younger son's travels."
          ],
          why: "We never learn the elder son's decision; the ambiguity hands the verdict to the reader."
        }
      ],
      short: [
        "Choose one moment from the Father's House. Explain what it shows and what it reveals about the parable's meaning.",
        "The two brothers are foils. Explain how the younger son's return and the elder son's anger, set side by side, shape what the parable is about.",
        "The parable stops on the father's appeal, leaving the elder son's choice unresolved. Explain how this open ending changes the effect of the story on the reader."
      ],
      paragraph: "Write an evidence-based paragraph. How does the Prodigal Son use the two brothers as foils to develop a theme such as forgiveness, repentance, or resentment? Make a claim and support it with specific moments from the parable.",
      aceReflection: "Articulate in your own words what the parable suggests about being 'lost' and 'found.' Connect two moments that develop it — for example the son's return and the elder brother's anger. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "The Prodigal Son builds meaning through a pair of contrasting brothers and an ending that stops mid-argument, leaving the reader to decide. Choose another story, film, song, or real situation that uses one of these techniques — a foil pair, or a deliberately open ending. Explain the connection with evidence: what is the technique, what idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the parable's foil structure or its open ending to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how the Prodigal Son uses two brothers and an open ending to build meaning. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying the Prodigal Son. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [moment one] connects to [moment two] in the Prodigal Son because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the parable." },
      { title: "Evidence prompt", text: "Here is my claim about the Prodigal Son: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the Prodigal Son's foil brothers (or its open ending) to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of the Prodigal Son for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of the Prodigal Son (Luke 15:11–32) as a parable — a study of parable form, character foils, plot arc, reversal, characterization through action and dialogue, and the deliberate open ending. The state names a copyrighted translation (ESV), so this room reproduces no scripture text and paraphrases throughout; a district must supply the specified edition for the identical-text requirement. The parable is presented as literature in a neutral, academic, non-devotional frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "The Prodigal Son appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English I / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "Because the state names a copyrighted translation (ESV), a district must supply that specified edition to meet the requirement that classroom text be identical to the specified version; a public-domain translation may be used for supplemental activities but is not textually identical.",
        "Reproduces no copyrighted text; paraphrases throughout; teach as literature, neutral and academic; follow district policy for religious texts studied as literary works.",
        "Details here were fact-checked against a public-domain translation (no ESV wording reproduced): a man with two sons; the younger son's demand for his inheritance and departure to a far country; the wasted fortune and the famine; feeding pigs and 'coming to himself'; the resolve to return and ask for a servant's place; the father seeing him far off, running, and embracing him; the best robe, ring, and sandals and the fattened calf; 'dead and alive, lost and found'; the elder son's anger, his complaint about years of service, the father's appeal, and the unresolved ending. All content is paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I ELAR TEKS (19 TAC Ch. 110) strands on literary elements — parable and narrative form, character and foils, plot structure, and theme — and to analysis of an author's use of an open ending. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.5", "W.9-10.1", "SL.9-10.1", "L.9-10.4"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
