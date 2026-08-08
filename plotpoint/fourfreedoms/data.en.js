/* PlotPoint — Franklin D. Roosevelt, "The Four Freedoms," from the Annual Message
   to Congress (State of the Union), January 6, 1941.  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1941 address is a public-domain work of the U.S. government,
   so this room may reference the speech directly. It is studied here as LITERATURE and
   RHETORIC — enumeration, anaphora, parallelism, antithesis, and tone — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC §110.70,
   English III / high school). The room paraphrases, quotes only brief public-domain
   phrases where a close reading needs them, and reproduces no copyrighted edition.
   The speech was delivered as World War II loomed; it is treated as rhetoric, not as
   current policy advocacy. Standards are good-faith alignment; TEKS/ELPS flagged
   "Needs review." Relic artifacts are clearly labeled instructional reconstructions.
   Correct answer is index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "fourfreedoms",
  storageKey: "plotpoint.fourfreedoms.v1",

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
    "enter.readListenNote": "This 1941 address is a public-domain U.S. government work. Use your class's copy or any public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for the Four Freedoms",
    "vocab.intro": "{n} terms that unlock the speech. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Four Freedoms Gallery",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this image?",
    "relic.q.purpose": "Explain its role in the speech",
    "relic.q.significance": "What it reveals about the speech's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it invites you to notice",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this image shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Four Locks of Freedom",
    "ctob.progress": "{n} of {total} locks opened",
    "ctob.done": "Every lock is open. You read the speech closely — with evidence.",
    "ctob.lock": "Lock {n}",
    "lock.digit": "Number lock", "lock.word": "Word lock", "lock.mc": "Choice lock", "lock.sequence": "Sequence lock",
    "ctob.correct": "Open — the evidence supports it.",
    "ctob.enter": "Enter your answer",
    "ctob.check": "Check", "ctob.wrong": "Not yet — re-read the evidence and try again.",
    "ctob.hint": "Show a hint",
    "seq.up": "Move up", "seq.down": "Move down",

    "arcade.eyebrow": "Play the Arcade Game",
    "arcade.title": "Vision or Tyranny?",
    "arcade.default": "Sort each statement by whether it belongs to the speech's vision of freedom or the tyranny it opposes.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Statements to sort",
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
    "extend.title": "Name Your Freedoms",
    "extend.format": "Format",
    "extend.evidence": "The idea from the speech I am building on",
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
    "print.item.relic": "Four Freedoms evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Name-your-freedoms organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/Four_Freedoms_speech",
      title: "The Four Freedoms",
      author: "Franklin D. Roosevelt",
      grades: "English III",
      genre: "Speech · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole speech is discussed",
      rights: "Public domain (U.S. government work, 1941)",
      textAccess: "A public-domain speech excerpt; use your class's copy or any public-domain text.",
      copyright: "This 1941 address is a public-domain work of the U.S. government, so this room may reference the speech directly. It is studied here as literature and rhetoric — its enumeration, anaphora, parallelism, antithesis, and tone. The room paraphrases, quotes only brief public-domain phrases where a close reading needs them, and reproduces no copyrighted edition.",
      contentNote: "Presented as literature and rhetoric — enumeration, anaphora, parallelism, antithesis, and tone — in a neutral, academic way, consistent with the Texas required literary-works list (19 TAC §110.70, English III / high school), adopted 2026 with implementation no earlier than 2030–2031. The speech was delivered as World War II loomed and before the U.S. entered the war; it is studied as rhetoric, not as current policy. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'The Four Freedoms' — four columns of light rising side by side over a wartime horizon, suggesting speech, worship, freedom from want, and freedom from fear."
    },
    hook: "In the middle of a world at war, a leader stands before Congress and does something a poet might do: he names four things. Not a list of weapons or budgets — four freedoms. Freedom of speech. Freedom of worship. Freedom from want. Freedom from fear. Watch how the repetition builds, how 'everywhere in the world' turns American values into a claim about all people, and how the whole passage is set against one dark opposite: the dictators' 'new order of tyranny.' Read it as rhetoric, and see how enumeration and anaphora can make an idea feel inevitable.",
    goals: [
      "Understand 'The Four Freedoms' as a persuasive passage that enumerates four essential human freedoms as the foundation of a just world.",
      "Analyze how anaphora ('The first is… The second is…'), parallelism, and repetition of 'everywhere in the world' shape the passage's force and meaning.",
      "Trace the antithesis between the four freedoms and the dictators' 'new order of tyranny,' and the effect of that contrast.",
      "Interpret how a wartime speech casts specific American values as universal human rights — and why this passage has shaped later language about human rights."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the rhetorical terms enumeration, anaphora, and antithesis.",
        "Discuss: how can a speaker make an argument feel powerful by naming things in a repeated, parallel pattern?"
      ],
      during: [
        "Use the Four Freedoms Gallery to slow down and read the passage freedom by freedom.",
        "Track the pattern: 'The first is… The second is… The third is… The fourth is…,' and notice 'everywhere in the world.'"
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the four freedoms and the tyranny they oppose.",
        "Complete the Extend task to apply the enumerate-your-values technique to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the vision 'The Four Freedoms' sets out. Name one of the four freedoms and describe what the speech says it means." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the four freedoms — for example freedom from want and freedom from fear. Explain how listing them side by side, in parallel, shapes the passage's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the speech's technique — enumerating values in a repeated, parallel pattern — to another text or a real situation. Explain what transfers, what changes, and where the technique stops working." }
    },

    vocab: [
      { term: "enumeration", def: "Naming or listing items one by one, often in a numbered or ordered pattern.", example: "The first is… the second is… the third is… the fourth is…", nonexample: "One vague statement with no items named.", context: "The passage's power comes from enumeration — four freedoms named in order." },
      { term: "anaphora", def: "The repetition of the same words at the beginning of successive phrases or clauses.", example: "'The first is… The second is… The third is…'", nonexample: "Each sentence beginning with a completely different phrase.", context: "The anaphora of 'The first/second/third/fourth is…' drives the passage forward." },
      { term: "parallelism", def: "Repeating a grammatical structure so ideas are balanced and echo one another.", example: "Four freedoms stated in the same 'freedom of / freedom from' shape.", nonexample: "Four ideas each phrased in a different, mismatched way.", context: "Parallelism makes the four freedoms feel like one balanced set." },
      { term: "antithesis", def: "Setting two opposite ideas against each other for contrast and effect.", example: "The four freedoms set against the dictators' 'new order of tyranny.'", nonexample: "Two ideas that mean the same thing restated.", context: "The passage's antithesis pits freedom against tyranny." },
      { term: "rhetoric", def: "The art of using language to persuade or move an audience.", example: "Choosing repetition and contrast to make a vision persuasive.", nonexample: "A plain list with no attention to how it sounds.", context: "The speech is studied here as rhetoric — how it persuades." },
      { term: "tone", def: "The attitude a speaker's language expresses toward the subject and audience.", example: "A resolute, hopeful tone even in a time of war.", nonexample: "Words chosen with no attitude at all.", context: "The passage's tone is idealistic and resolute." },
      { term: "theme", def: "The central idea or message a work develops.", example: "Universal human freedoms as the foundation of a just world.", nonexample: "A single fact with no larger meaning.", context: "The theme is defining and defending freedoms for all people." },
      { term: "tyranny", def: "Cruel and unjust use of power by a ruler or government.", example: "A dictator ruling by force and fear.", nonexample: "A government chosen by and answerable to its people.", context: "The four freedoms stand against a 'new order of tyranny.'" },
      { term: "armaments", def: "Weapons and military equipment, especially those a nation builds up.", example: "A worldwide reduction of armaments so no nation can attack another.", nonexample: "Farm tools used only for harvesting.", context: "Freedom from fear is defined through a reduction of armaments." }
    ],

    relic: {
      name: "The Four Freedoms Gallery",
      intro: "Seven instructional reconstructions of the ideas in the passage — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the speech, and what it reveals.",
      artifacts: [
        {
          id: "vision", name: "A World Founded on Four Freedoms", image: "images/vision.webp",
          clues: ["The passage looks forward to a world founded upon a set of essential human freedoms.", "It presents these not as a distant dream but as a definite basis for a better world.", "Everything after this frame names the freedoms one by one."],
          identify: { q: "What does this image set out?", choices: ["A vision of a future world founded on essential human freedoms", "A plan for a single new law", "A description of a battle", "A budget for the military"] },
          purpose: { q: "What is this vision's role in the passage?", choices: ["It is the frame that the four named freedoms build on", "It is a minor aside", "It closes the speech and is dropped", "It describes the speaker's daily schedule"] },
          significance: { q: "Why present it as a 'definite basis,' not a far-off dream?", choices: ["To make the vision feel achievable and worth defending now", "To warn that it can never happen", "To change the subject", "To flatter the dictators"] },
          reveals: "The controlling vision the whole passage develops.",
          conceals: "How much of the passage's force depends on presenting the vision as attainable.",
          ace: "Articulate the vision; connect it to one of the four freedoms; extend it to why naming a hopeful goal can persuade an audience."
        },
        {
          id: "speech", name: "Freedom of Speech and Expression", image: "images/speech.webp",
          clues: ["This is the first of the four freedoms.", "It is stated as freedom of speech and expression.", "It is followed by the words 'everywhere in the world.'"],
          identify: { q: "Which freedom does this image show?", choices: ["Freedom of speech and expression", "Freedom from taxes", "Freedom to travel by sea", "Freedom to own weapons"] },
          purpose: { q: "Where does this freedom fall in the pattern?", choices: ["It is the first, opening the anaphora 'The first is…'", "It is the last freedom named", "It is left out of the list", "It appears only in a footnote"] },
          significance: { q: "What does 'everywhere in the world' add to this freedom?", choices: ["It universalizes the freedom — for all people, not only Americans", "It limits the freedom to one nation", "It cancels the freedom", "It has no effect"] },
          reveals: "The first freedom and the universalizing phrase attached to it.",
          conceals: "How repetition of 'everywhere in the world' turns a national value into a human right.",
          ace: "Articulate the first freedom; connect it to 'everywhere in the world'; extend it to why a speaker might claim a value for all people."
        },
        {
          id: "worship", name: "Freedom of Worship", image: "images/worship.webp",
          clues: ["This is the second of the four freedoms.", "It is freedom of every person to worship in their own way.", "Like the first, it is extended to people 'everywhere in the world.'"],
          identify: { q: "Which freedom does this image show?", choices: ["Freedom of worship — to worship in one's own way", "Freedom to skip school", "Freedom to break the law", "Freedom from work"] },
          purpose: { q: "What part of the pattern does it hold?", choices: ["It is the second freedom, continuing the anaphora", "It is the first freedom", "It replaces the vision", "It ends the passage"] },
          significance: { q: "What does 'in their own way' emphasize?", choices: ["Individual freedom of conscience — each person chooses", "That everyone must worship alike", "That no one may worship", "A rule about buildings"] },
          reveals: "The second freedom, framed as a matter of individual conscience.",
          conceals: "How the parallel phrasing links it tightly to the first freedom.",
          ace: "Articulate the second freedom; connect its phrasing to the first; extend it to how parallel wording binds a list together."
        },
        {
          id: "want", name: "Freedom from Want", image: "images/want.webp",
          clues: ["This is the third of the four freedoms.", "It points toward economic security — a healthy peacetime life for all nations.", "The wording shifts from 'freedom of' to 'freedom from.'"],
          identify: { q: "Which freedom does this image show?", choices: ["Freedom from want — economic security for all", "Freedom from homework", "Freedom to spend without limit", "Freedom from all laws"] },
          purpose: { q: "How does the wording change here?", choices: ["It shifts from 'freedom of' to 'freedom from,' a turn in the parallel pattern", "It abandons parallelism entirely", "It repeats the first freedom exactly", "It stops the enumeration"] },
          significance: { q: "What does 'freedom from want' mainly point to?", choices: ["Economic security and a healthy peacetime life for all nations", "Freedom from having opinions", "Freedom to avoid all responsibility", "A ban on trade"] },
          reveals: "The third freedom and the shift from 'of' to 'from.'",
          conceals: "How the passage widens from personal liberty to economic and international well-being.",
          ace: "Articulate the third freedom; connect the 'of'-to-'from' shift to the first two; extend it to how a small wording change can shift an argument."
        },
        {
          id: "fear", name: "Freedom from Fear", image: "images/fear.webp",
          clues: ["This is the fourth and final freedom.", "It is defined through a worldwide reduction of armaments.", "The goal is that no nation can commit aggression against another."],
          identify: { q: "Which freedom does this image show?", choices: ["Freedom from fear — safety from aggression", "Freedom from bad weather", "Freedom to start a war", "Freedom from paying rent"] },
          purpose: { q: "How is this freedom defined in the passage?", choices: ["Through a worldwide reduction of armaments so no nation can attack another", "Through building more weapons than any rival", "Through ignoring other nations", "Through a single new tax"] },
          significance: { q: "Why place 'freedom from fear' last?", choices: ["It completes the list and turns to peace among nations — a strong closing note", "It is the least important", "It contradicts the other three", "It restarts the list"] },
          reveals: "The fourth freedom and its focus on peace between nations.",
          conceals: "How the enumeration builds to a global, not just personal, vision.",
          ace: "Articulate the fourth freedom; connect it to the third; extend it to why a list's final item can carry extra weight."
        },
        {
          id: "everywhere", name: "\"Everywhere in the World\"", image: "images/everywhere.webp",
          clues: ["This phrase is repeated after the freedoms.", "It attaches each freedom to people beyond the United States.", "It turns American values into a claim about all human beings."],
          identify: { q: "What does this repeated phrase do?", choices: ["It extends each freedom to people 'everywhere in the world'", "It limits the freedoms to one city", "It is a date and place", "It names a person"] },
          purpose: { q: "Why repeat it after several of the freedoms?", choices: ["Repetition drives home that these are universal, not local, rights", "To fill space", "To confuse the audience", "To end the speech"] },
          significance: { q: "What is the effect of universalizing the freedoms?", choices: ["It reframes national values as human rights for all people", "It weakens the argument", "It makes the freedoms optional", "It removes the audience"] },
          reveals: "The universalizing move at the heart of the passage.",
          conceals: "How a single repeated phrase can globalize an argument.",
          ace: "Articulate what the phrase does; connect it to two of the freedoms; extend it to how repetition can expand a claim's reach."
        },
        {
          id: "tyranny", name: "The Four Freedoms vs. the \"New Order of Tyranny\"", image: "images/tyranny.webp",
          clues: ["The passage contrasts the four freedoms with the dictators' 'new order of tyranny.'", "This is the speech's central antithesis.", "The freedoms are framed as the opposite of rule by force and fear."],
          identify: { q: "What contrast does this image show?", choices: ["The four freedoms set against a 'new order of tyranny'", "Two nearly identical ideas", "A comparison of two rivers", "A list of allies"] },
          purpose: { q: "What is this contrast's role in the passage?", choices: ["It is the antithesis that sharpens the value of the freedoms", "It is unrelated to the freedoms", "It softens the speech", "It replaces the enumeration"] },
          significance: { q: "Why define the freedoms against tyranny?", choices: ["Contrast makes the freedoms feel urgent and worth defending", "To praise the dictators", "To end the argument early", "To hide the freedoms"] },
          reveals: "The antithesis that gives the passage its stakes.",
          conceals: "How setting a vision against its opposite raises the emotional force.",
          ace: "Articulate the contrast; connect tyranny to one of the freedoms it denies; extend it to why arguments often define a good against its opposite."
        }
      ]
    },

    ctob: {
      name: "Four Locks of Freedom",
      intro: "Six locks. Every answer is inferable from the passage and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The repetition of the same opening words in 'The first is… The second is…' is the rhetorical device called ______. (one word)",
          evidence: ["It names the repeated words at the start of successive phrases.", "The passage uses it to list the four freedoms in order.", "The word begins with 'ana…'."],
          hints: ["It repeats the same beginning words in a series.", "Ana…", "The word is anaphora."],
          answer: "anaphora"
        },
        {
          type: "mc",
          prompt: "'Freedom of speech' and 'freedom of worship' are mainly freedoms of —",
          options: [
            "personal expression and conscience.",
            "military conquest.",
            "buying and selling goods.",
            "travel between nations."
          ],
          hints: ["Think about what each freedom lets an individual do.", "Which option matches speaking and worshiping in one's own way?"]
        },
        {
          type: "mc",
          prompt: "The repeated phrase 'everywhere in the world' functions in the passage to —",
          options: [
            "extend the freedoms to all people, not only Americans.",
            "limit the freedoms to a single nation.",
            "name the location where the speech was given.",
            "list one of the four freedoms."
          ],
          hints: ["It is added after the freedoms are named.", "It turns national values into universal ones."]
        },
        {
          type: "digit",
          prompt: "How many freedoms does the speech name? Enter the number.",
          evidence: ["The speech's common title counts them.", "The anaphora runs 'The first… The second… The third… The fourth…'.", "One more than three."],
          hints: ["The passage is famous as 'The ___ Freedoms.'", "One more than three.", "The number is 4."],
          answer: "4"
        },
        {
          type: "sequence",
          prompt: "Put the four freedoms in the order the speech names them, first to last.",
          items: [
            "Freedom of speech and expression.",
            "Freedom of worship.",
            "Freedom from want.",
            "Freedom from fear."
          ],
          hints: ["The passage opens with speech and expression.", "Worship follows speech; both use 'freedom of.'", "The two 'freedom from' items come last, ending with fear."]
        },
        {
          type: "mc",
          prompt: "The passage sets the four freedoms against the dictators' 'new order of tyranny.' This contrast is an example of —",
          options: [
            "antithesis.",
            "a simile.",
            "a rhyme scheme.",
            "understatement."
          ],
          hints: ["The device sets two opposite ideas against each other.", "Freedom is placed directly against tyranny."]
        }
      ]
    },

    arcade: {
      name: "Vision or Tyranny?",
      instruction: "'The Four Freedoms' defines a hopeful vision by setting it against its opposite. Sort each statement by which side it belongs to: is it part of the speech's VISION OF FREEDOM, or part of the TYRANNY IT OPPOSES? Reasoning earns the points.",
      buckets: [
        { id: "vision", label: "The Four Freedoms (the vision)", short: "Vision" },
        { id: "tyranny", label: "The tyranny they oppose (the contrast)", short: "Tyranny" }
      ],
      cards: [
        { text: "Freedom of speech and expression, everywhere in the world.", bucket: "vision", why: "The first of the four freedoms in the speaker's vision." },
        { text: "Freedom of every person to worship in their own way.", bucket: "vision", why: "The second freedom — individual freedom of conscience." },
        { text: "Freedom from want — economic security for all nations.", bucket: "vision", why: "The third freedom, pointing to a healthy peacetime life." },
        { text: "Freedom from fear through a worldwide reduction of armaments.", bucket: "vision", why: "The fourth freedom — safety from aggression." },
        { text: "A 'new order of tyranny' the dictators sought to impose.", bucket: "tyranny", why: "The passage names this as the opposite of its vision." },
        { text: "Ruling by force so no one may speak or worship freely.", bucket: "tyranny", why: "Denying speech and worship is what tyranny does." },
        { text: "One nation committing aggression against another.", bucket: "tyranny", why: "Aggression is exactly what freedom from fear opposes." },
        { text: "Power kept in place by fear rather than consent.", bucket: "tyranny", why: "Rule by fear is the antithesis of freedom from fear." }
      ],
      followup: "The passage defines its four freedoms partly by naming the tyranny they stand against. What does building an argument through antithesis — good against its opposite — add to the speech's persuasive force?"
    },

    analysis: {
      mcq: [
        {
          q: "The main purpose of the 'Four Freedoms' passage is to —",
          options: [
            "name four essential freedoms as the foundation of a just world.",
            "report casualty numbers from the war.",
            "describe the speaker's daily routine.",
            "propose a single new tax law."
          ],
          why: "The passage enumerates four freedoms and offers them as the basis for a better world."
        },
        {
          q: "The repeated pattern 'The first is… The second is… The third is… The fourth is…' is an example of —",
          options: [
            "anaphora and enumeration.",
            "a rhyme scheme.",
            "understatement.",
            "a flashback."
          ],
          why: "The same opening words repeat as the freedoms are listed in order."
        },
        {
          q: "Repeating 'everywhere in the world' after the freedoms mainly works to —",
          options: [
            "frame the freedoms as universal human rights, not only American ones.",
            "limit the freedoms to a single city.",
            "name the room where the speech was given.",
            "add one more freedom to the list."
          ],
          why: "The phrase extends each freedom to all people, universalizing the vision."
        },
        {
          q: "Setting the four freedoms against the dictators' 'new order of tyranny' is an example of —",
          options: [
            "antithesis, which sharpens the value of the freedoms.",
            "a simile comparing two like things.",
            "a pun on the word 'order.'",
            "a rhyme between freedom and tyranny."
          ],
          why: "Placing freedom directly against tyranny is a contrast of opposites — antithesis."
        },
        {
          q: "The passage's overall tone can best be described as —",
          options: [
            "resolute and idealistic.",
            "bitter and hopeless.",
            "casual and joking.",
            "confused and uncertain."
          ],
          why: "Even in wartime, the passage speaks with confidence and hope about a better world."
        }
      ],
      short: [
        "Choose one of the four freedoms from the Gallery. Explain what the speech says it means and what it reveals about the passage's vision.",
        "The passage repeats 'everywhere in the world.' Explain what this repetition adds and how it changes American values into a claim about all people.",
        "Explain the contrast between the four freedoms and the 'new order of tyranny.' How does this antithesis strengthen the speech?"
      ],
      paragraph: "Write an evidence-based paragraph. How does 'The Four Freedoms' use enumeration, anaphora, and parallelism to make its vision persuasive? Make a claim and support it with specific details from the passage.",
      aceReflection: "Articulate what the passage argues in your own words. Connect two of the four freedoms and explain how listing them in parallel shapes the meaning. Extend the enumerate-your-values technique to another text or situation, and name where it becomes hard to apply."
    },

    extend: {
      name: "Name Your Freedoms",
      prompt: "'The Four Freedoms' carries a whole vision by enumerating values in a repeated, parallel pattern and setting them against an opposite. Choose another speech, essay, song, or document that does the same thing (a numbered or parallel list of values or demands). Explain the connection with evidence: what values are named, how the parallel pattern works, and where the technique starts to break down.",
      format: "A short evidence-based comparison connecting the speech's enumerate-your-values technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'The Four Freedoms' uses enumeration and anaphora to present a vision of universal freedoms. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'The Four Freedoms.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [freedom one] connects to [freedom two] in 'The Four Freedoms' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the passage." },
      { title: "Evidence prompt", text: "Here is my claim about 'The Four Freedoms': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the speech's enumerate-your-values technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'The Four Freedoms' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Franklin D. Roosevelt's 'Four Freedoms' passage (from the January 6, 1941 Annual Message to Congress) as rhetoric — a study of enumeration, anaphora, parallelism, antithesis, and tone. The address is a public-domain U.S. government work, so it may be referenced directly and this room reproduces no copyrighted edition. It is presented as literature and rhetoric in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. The speech was delivered as World War II loomed; it is studied as rhetoric, not as current policy. Every student response stays on the device.",
      reviewNotes: [
        "'The Four Freedoms' appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.70 (English III / high school); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The text is a public-domain work of the U.S. government, delivered January 6, 1941 — so it may be used directly and satisfies the 'text identical to the specified version' requirement. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric. Focus on the passage's craft — enumeration and parallelism (four parallel freedoms), anaphora ('The first/second/third/fourth is…'), repetition of 'everywhere in the world,' and antithesis (freedoms vs. the 'new order of tyranny') — in a neutral, academic frame; note it was given as World War II loomed and treat it as literature, following local policy.",
        "Fact-check the anchors against the speech: the four freedoms are freedom of speech and expression, freedom of worship, freedom from want, and freedom from fear; 'freedom from want' is tied to economic security and a healthy peacetime life; 'freedom from fear' is defined through a worldwide reduction of armaments; each freedom is extended to people 'everywhere in the world.' Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English III ELAR TEKS (19 TAC Ch. 110) strands on rhetorical devices, author's purpose, argument, and structure in a persuasive text — especially enumeration, anaphora, parallelism, and antithesis. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.11-12.1", "RI.11-12.2", "RI.11-12.4", "RI.11-12.5", "RI.11-12.6", "W.11-12.1", "SL.11-12.1", "L.11-12.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
