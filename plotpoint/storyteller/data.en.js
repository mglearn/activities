/* PlotPoint — The Storyteller (Saki / H. H. Munro, 1914).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout. Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "storyteller",
  storageKey: "plotpoint.storyteller.v1",

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
    "vocab.title": "Words for The Storyteller",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Railway Carriage",
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
    "ctob.title": "The Tale That Held Them",
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
    "arcade.title": "The Aunt's Story or the Bachelor's Story?",
    "arcade.default": "Sort each detail by which kind of storytelling it belongs to.",
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
    "extend.title": "What Makes a Story Work",
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
    "print.item.relic": "Railway-carriage evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Story-craft organizer",
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
      title: "The Storyteller",
      author: "Saki (H. H. Munro)",
      grades: "Grades 6–9",
      genre: "Satire · Humor · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1914)",
      textAccess: "The story is short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1914 (in Beasts and Super-Beasts), The Storyteller is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A witty, satirical tale. The bachelor's story-within-the-story ends with a very well-behaved girl being eaten by a wolf — comic and bloodless, not graphic. Suitable for middle and high school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/269",
      audio: "https://librivox.org/beasts-and-super-beasts-by-saki/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Storyteller — a sunny railway carriage seen from the aisle, three restless children and a stern aunt, a calm bachelor mid-tale, and a faint dreamlike wolf and three small medals hovering like a thought."
    },
    hook: "Three bored, fidgety children are trapped in a hot railway carriage with their aunt — and her feeble, preachy story about a good little girl only makes them worse. Then a stranger, a bachelor, offers a tale of his own: a story about a girl who was 'horribly good.' It is exactly the kind of story adults think children should never hear — and the children find it perfectly wonderful.",
    goals: [
      "Follow the frame structure — a story told inside a story — and who tells each one.",
      "Contrast the aunt's dull, moralizing tale with the bachelor's surprising one, and why the children prefer his.",
      "Analyze Saki's use of irony: the girl's 'goodness' is exactly what gets her caught.",
      "Interpret the story as satire — a witty attack on preachy tales that reward good behavior."
    ],
    stages: {
      before: [
        "Preview the vocabulary, especially satire, irony, and frame story.",
        "Discuss: What makes a story boring? What makes one you actually remember?"
      ],
      during: [
        "Use The Railway Carriage to track the two storytellers and their very different tales.",
        "Notice each place the bachelor's story breaks the 'rules' of a proper children's story."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the satire and irony.",
        "Complete the Extend task to weigh what actually makes a story work."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the children like the bachelor's story so much more than the aunt's. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect Bertha's three medals to how she is caught. Explain how Saki turns her 'goodness' into the very thing that dooms her — and why that is ironic." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of preachy, moralizing tales to another story, show, or situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "satire", def: "Writing that uses humor and irony to criticize or mock something.", example: "Mocking preachy 'be good' stories by having goodness backfire.", nonexample: "A plain, serious news report.", context: "The Storyteller is a satire of moralizing children's tales." },
      { term: "irony", def: "When what happens is the opposite of what you'd expect.", example: "Bertha's goodness is exactly what gets her eaten.", nonexample: "A hard-working team winning as expected.", context: "Saki builds the whole ending on irony." },
      { term: "frame story", def: "A story that contains another story told inside it.", example: "The train scene surrounds the bachelor's tale of Bertha.", nonexample: "A single story with no story inside it.", context: "The Storyteller is a frame story — a tale within a tale." },
      { term: "protagonist", def: "The main character a story follows.", example: "Bertha is the protagonist of the bachelor's tale.", nonexample: "A character mentioned once and never seen again.", context: "The bachelor makes Bertha his doomed protagonist." },
      { term: "moral", def: "The lesson a story is meant to teach.", example: "'Good children are rewarded' is a common moral.", nonexample: "A random fact with no lesson attached.", context: "The aunt's story pushes an obvious moral; the bachelor's mocks it." },
      { term: "improper", def: "Not considered proper, polite, or suitable.", example: "The aunt calls the bachelor's tale 'improper.'", nonexample: "A lesson everyone agrees is wholesome.", context: "The aunt is scandalized that an 'improper' story delights the children." },
      { term: "exasperated", def: "Very annoyed and out of patience.", example: "The aunt, worn down by the children's endless questions.", nonexample: "Calm and perfectly content.", context: "The aunt grows exasperated as her story falls flat." },
      { term: "myrtle", def: "A leafy evergreen shrub with fragrant white flowers.", example: "Bertha hides, trembling, in a bed of myrtle bushes.", nonexample: "A bare stone wall.", context: "The wolf hunts through the park while Bertha hides in the myrtle." }
    ],

    relic: {
      name: "The Railway Carriage",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "railway", name: "The Hot Railway Carriage", image: "images/railway.webp",
          clues: ["The whole story takes place in one train compartment on a sultry afternoon.", "An aunt is traveling with three small children — a boy named Cyril and two girls.", "A bachelor, a stranger to the group, shares the carriage."],
          identify: { q: "Where does the entire story take place?", choices: ["In a hot railway carriage on a train", "In a school classroom", "In the Prince's park", "In a wolf's den"] },
          purpose: { q: "What is the carriage's role in the story?", choices: ["It traps the adults and children together, so the storytelling contest can happen", "It is where Bertha lives", "It is a place the wolf hunts", "It has no importance"] },
          significance: { q: "Why does the closed-in setting matter?", choices: ["Bored, restless children and tired adults are forced to entertain each other", "It shows the family is wealthy", "It proves the trip is dangerous", "It hides the ending"] },
          reveals: "The pressure-cooker setting that sets a dull storyteller against a clever one.",
          conceals: "Which of the two grown-ups will actually win the children's attention.",
          ace: "Articulate the setting; connect the cramped train to the children's restlessness; extend it to how a boring wait makes any good story feel priceless."
        },
        {
          id: "auntstory", name: "The Aunt's Dull Story", image: "images/auntstory.webp",
          clues: ["To calm the children, the aunt tells a story about a good little girl.", "The girl is saved from a mad bull by people who admire her fine character.", "The children are unimpressed and pepper her with skeptical questions."],
          identify: { q: "What is the aunt's story about?", choices: ["A good little girl rescued from a bull because people admired her goodness", "A wolf that eats a child", "A prince and his pigs", "A train journey"] },
          purpose: { q: "What is the aunt's story's role?", choices: ["It is the weak, preachy tale the bachelor's story is set against", "It is the main plot of the whole book", "It frightens the children into silence", "It has no purpose"] },
          significance: { q: "Why do the children reject the aunt's story?", choices: ["It is obvious and preachy, and its 'good' reward feels unbelievable", "It is far too scary", "It is too long to finish", "It has no words"] },
          reveals: "The tired, moralizing kind of story Saki is about to mock.",
          conceals: "How easily a 'proper' story can bore the very children it targets.",
          ace: "Articulate the aunt's story; connect its preachiness to the children's boredom; extend it to a lesson-heavy story or ad you have tuned out."
        },
        {
          id: "medals", name: "Bertha's Three Medals", image: "images/medals.webp",
          clues: ["In the bachelor's tale, Bertha is 'horribly good.'", "She has won three medals — for obedience, punctuality, and good behavior.", "She wears all three pinned to her dress, and they clink as she walks."],
          identify: { q: "What are Bertha's three medals for?", choices: ["Obedience, punctuality, and good behavior", "Bravery, sports, and music", "Reading, art, and science", "Winning three races"] },
          purpose: { q: "What is the medals' role in the story?", choices: ["They are the badge of her 'goodness' — and, later, the thing that betrays her", "They are a gift from the wolf", "They open the park gate", "They have no role"] },
          significance: { q: "Why is it ironic that the medals give Bertha away?", choices: ["The proof of her goodness is exactly what leads the wolf to her", "They are made of gold", "They are too heavy to carry", "They protect her from harm"] },
          reveals: "Saki's central irony packed into three clinking objects.",
          conceals: "That the very reward for being good will get Bertha killed.",
          ace: "Articulate what the medals stand for; connect them to the ending; extend it to how a symbol of success can turn into a weakness."
        },
        {
          id: "park", name: "The Prince's Park", image: "images/park.webp",
          clues: ["As a reward for being so good, Bertha is allowed into the Prince's private park.", "It is a special honor — most children are never let inside.", "Oddly, the beautiful park has no flowers at all."],
          identify: { q: "Why is Bertha allowed into the Prince's park?", choices: ["As a special reward for being extraordinarily good", "Because she paid a fee", "Because the wolf invited her", "Because she lives there"] },
          purpose: { q: "What is the park's role in the story?", choices: ["It is the 'reward' setting where the danger finally finds her", "It is where the train stops", "It is the aunt's home", "It is never described"] },
          significance: { q: "What makes the flowerless park a clever, funny detail?", choices: ["It quietly breaks the pretty, tidy rules of a proper children's story", "It proves the Prince is poor", "It shows the season is winter", "It warns of the wolf"] },
          reveals: "How the bachelor tweaks the expected 'reward' into something odd and funny.",
          conceals: "That this prize is where Bertha's goodness runs out of luck.",
          ace: "Articulate why Bertha enters the park; connect the missing flowers to Saki's humor; extend it to a 'reward' that turns out to be a trap."
        },
        {
          id: "pigs", name: "The Prince's Pigs", image: "images/pigs.webp",
          clues: ["Instead of flowers, the park is full of pigs of many colors.", "The bachelor explains there are no flowers because the pigs ate them all.", "The children find this detail delightful and completely convincing."],
          identify: { q: "Why are there no flowers in the park?", choices: ["The Prince keeps pigs, and the pigs ate all the flowers", "It is the wrong season", "The gardener quit", "Bertha picked them"] },
          purpose: { q: "What is the pigs' role in the story?", choices: ["They win the children over with a funny, unexpected explanation", "They attack Bertha", "They guard the medals", "They pull the train"] },
          significance: { q: "Why does this odd detail work so well on the children?", choices: ["It feels surprising and 'true' in a way the aunt's tidy story never did", "It teaches an obvious lesson", "It is very sad", "It repeats the aunt's story"] },
          reveals: "How a small, silly, believable detail can capture an audience.",
          conceals: "How carefully the bachelor breaks the rules to keep them listening.",
          ace: "Articulate the pig explanation; connect it to why the children believe it; extend it to how one vivid detail can make a whole story feel real."
        },
        {
          id: "wolf", name: "The Hungry Wolf", image: "images/wolf.webp",
          clues: ["While Bertha wanders the park, a large wolf slips in to hunt.", "It is looking for a fat little pig to carry off for supper.", "Bertha sees it and runs to hide, her heart pounding with fear."],
          identify: { q: "What does the wolf come into the park to do?", choices: ["Hunt for a plump little pig to eat", "Guard the flowers", "Play with Bertha", "Deliver the medals"] },
          purpose: { q: "What is the wolf's role in the story?", choices: ["It is the sudden danger that turns a 'reward' into a death trap", "It saves Bertha", "It tells the story", "It has no role"] },
          significance: { q: "How does the wolf make this an 'improper' children's story?", choices: ["A good child is threatened — and not rescued — which proper tales never allow", "It proves crime doesn't pay", "It shows the park is safe", "It ends happily for Bertha"] },
          reveals: "The danger that flips the expected happy, moral ending.",
          conceals: "That Bertha's own goodness will decide whether the wolf finds her.",
          ace: "Articulate why the wolf enters; connect its arrival to the broken 'rules' of a proper story; extend it to a story that refused to give you the ending you expected."
        },
        {
          id: "myrtle", name: "The Betraying Clink", image: "images/myrtle.webp",
          clues: ["Bertha hides, trembling, deep in a bed of myrtle bushes.", "The wolf is about to give up and leave.", "But her three medals clink together as she shakes with fear — and the wolf hears them."],
          identify: { q: "What finally gives away Bertha's hiding place?", choices: ["Her three medals clink together as she trembles", "She sneezes loudly", "She calls for help", "Her shoes squeak"] },
          purpose: { q: "What is this clinking moment's role?", choices: ["It delivers the story's ironic punch line — goodness betrays her", "It scares the wolf off", "It wakes the aunt", "It ends the train ride"] },
          significance: { q: "What does the ending suggest about the story's 'moral'?", choices: ["Saki mocks the idea that being good always keeps you safe or is rewarded", "Being good always pays off", "Wolves fear medals", "Parks are dangerous"] },
          reveals: "The exact instant Saki's satire lands — the reward becomes the doom.",
          conceals: "Nothing to the reader now — but everything the aunt's story hid.",
          ace: "Articulate what betrays Bertha; connect the clink to the theme; extend it to why an ironic ending can stick with you more than a tidy, happy one."
        }
      ]
    },

    ctob: {
      name: "The Tale That Held Them",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In the bachelor's tale, Bertha is described as extraordinarily ______ — the very quality the story mocks. (one word)",
          evidence: ["She has won medals for behaving perfectly.", "The bachelor calls her 'horribly' this.", "The word is the opposite of 'bad,' and begins with 'go…'."],
          hints: ["The opposite of bad.", "Go…", "The word is good."],
          answer: "good"
        },
        {
          type: "mc",
          prompt: "Where does the entire story take place?",
          options: [
            "In a hot railway carriage on a train.",
            "In the Prince's park.",
            "Inside a school.",
            "In a wolf's den."
          ],
          hints: ["An aunt is traveling with three children.", "Which option is the train compartment?"]
        },
        {
          type: "digit",
          prompt: "How many medals has Bertha won for her good behavior? Enter the number.",
          evidence: ["They are for obedience, punctuality, and good conduct.", "She wears all of them pinned to her dress.", "One for each of those three virtues."],
          hints: ["One for obedience, one for punctuality, one for good conduct.", "Count the virtues.", "The number is 3."],
          answer: "3"
        },
        {
          type: "mc",
          prompt: "What happens to Bertha at the end of the bachelor's story?",
          options: [
            "A wolf finds her and eats her.",
            "She wins a fourth medal.",
            "She tames the wolf as a pet.",
            "She escapes and goes home."
          ],
          hints: ["Proper children's stories would never allow this.", "Which option is the 'improper' ending?"]
        },
        {
          type: "sequence",
          prompt: "Put the events in order, earliest first.",
          items: [
            "The aunt's moral story bores the restless children.",
            "The bachelor begins his tale about the 'horribly good' Bertha.",
            "A wolf enters the Prince's park while Bertha is walking.",
            "Bertha's medals clink, and the wolf devours her."
          ],
          hints: ["The aunt fails first, which is why the bachelor tries.", "Bertha must be in the park before the wolf can find her.", "The clinking medals bring the ending."]
        },
        {
          type: "word",
          prompt: "Saki's whole story is a ______ — humor and irony used to mock preachy, moralizing tales. (one word)",
          evidence: ["It makes fun of stories that reward good behavior.", "It uses irony and wit to criticize.", "The word begins with 'sat…' (think 'satirical')."],
          hints: ["Humor used to criticize something.", "Sat…", "The word is satire."],
          answer: "satire"
        }
      ]
    },

    arcade: {
      name: "The Aunt's Story or the Bachelor's Story?",
      instruction: "Saki sets two kinds of storytelling against each other. Sort each detail: does it belong to the AUNT'S kind of story (proper, preachy, and dull) or the BACHELOR'S kind (surprising, 'improper,' and gripping)? Reasoning earns the points.",
      buckets: [
        { id: "aunt", label: "The aunt's kind of story", short: "Aunt" },
        { id: "bachelor", label: "The bachelor's kind of story", short: "Bachelor" }
      ],
      cards: [
        { text: "The heroine is rewarded simply for being good.", bucket: "aunt", why: "The aunt's tale assumes goodness is always repaid." },
        { text: "The children are bored and ask doubtful questions.", bucket: "aunt", why: "The aunt's preachy story loses them at once." },
        { text: "Admirers rescue a girl from a mad bull because of her character.", bucket: "aunt", why: "This is the aunt's unbelievable, moralizing plot." },
        { text: "The story pushes an obvious, tidy lesson.", bucket: "aunt", why: "Proper tales exist to teach a neat moral." },
        { text: "Being 'horribly good' leads to a grisly surprise.", bucket: "bachelor", why: "The bachelor flips the expected reward into doom." },
        { text: "A park full of pigs has no flowers because the pigs ate them.", bucket: "bachelor", why: "An odd, funny detail that wins the children over." },
        { text: "The children sit still and call the tale 'beautiful.'", bucket: "bachelor", why: "The 'improper' story completely captures them." },
        { text: "Three clinking medals get the good child eaten.", bucket: "bachelor", why: "The ironic punch line the aunt would never allow." }
      ],
      followup: "The bachelor's story is 'improper,' yet the children love it and the aunt's proper story failed. What is Saki suggesting about stories that only exist to teach a lesson?"
    },

    analysis: {
      mcq: [
        {
          q: "The Storyteller is built as a frame story, which means —",
          options: [
            "the bachelor's tale is told inside the larger train-carriage story.",
            "the story is told out of order.",
            "there is no narrator at all.",
            "every character tells the same tale."
          ],
          why: "The train scene 'frames' the story-within-the-story about Bertha."
        },
        {
          q: "The children prefer the bachelor's story to the aunt's mainly because —",
          options: [
            "it is surprising and not obviously preachy.",
            "it is much longer.",
            "it teaches a clearer moral.",
            "it is about their own family."
          ],
          why: "The aunt's tidy moral bores them; the bachelor's odd, 'improper' tale grips them."
        },
        {
          q: "Bertha's three medals are important because —",
          options: [
            "their clinking reveals her hiding place to the wolf.",
            "they protect her from the wolf.",
            "she trades them for safety.",
            "they open the park gate."
          ],
          why: "The badge of her goodness is exactly what betrays her — the central irony."
        },
        {
          q: "The ending is ironic because —",
          options: [
            "Bertha's goodness is the very thing that gets her caught.",
            "the wolf turns out to be friendly.",
            "the aunt was right all along.",
            "nothing bad happens to anyone."
          ],
          why: "We expect goodness to save her; instead it dooms her."
        },
        {
          q: "The story as a whole is best described as —",
          options: [
            "satire that mocks preachy, moralizing children's tales.",
            "a straightforward adventure with a happy ending.",
            "a serious tragedy about grief.",
            "a factual report about trains."
          ],
          why: "Saki uses humor and irony to criticize stories that reward goodness on cue."
        }
      ],
      short: [
        "Choose one artifact from The Railway Carriage. Explain what it is and what it reveals about the story's meaning.",
        "Explain how Saki uses irony in Bertha's ending. What do we expect to happen, and what happens instead?",
        "The aunt calls the bachelor's story 'improper,' yet the children love it. What is Saki suggesting about the purpose of stories?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Saki use the contrast between the aunt's story and the bachelor's story to satirize moralizing tales? Make a claim and support it with specific details from both stories.",
      aceReflection: "Articulate what the story suggests about preachy tales in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "What Makes a Story Work",
      prompt: "Saki suggests that a surprising, 'improper' story can beat a proper, preachy one. Choose another story, show, film, or ad that tried to teach you a lesson — or one that surprised you. Explain the connection with evidence: what approach did it take, how did the audience respond, and what does that reveal about how stories actually hold us?",
      format: "A short evidence-based comparison connecting Saki's view of storytelling to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the children prefer the bachelor's story to the aunt's in The Storyteller. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Storyteller. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Storyteller because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Storyteller: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Saki's view of preachy stories to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Storyteller for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Saki's The Storyteller as a study of satire, irony, and the frame-story structure. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (1914, from Beasts and Super-Beasts) is public domain. The linked Project Gutenberg edition and the linked LibriVox recording are the full Beasts and Super-Beasts collection, which contains The Storyteller — confirm the specific story before assigning.",
        "Content: a comic, satirical tale whose inner story ends with a very well-behaved girl being eaten by a wolf. Bloodless and humorous, not graphic. Suitable for middle and high school; preview and follow local policy.",
        "Details here were checked against the story (the hot railway carriage; the aunt and three children, including a boy named Cyril; the bachelor; the aunt's failed tale of a good girl saved from a bull; Bertha, 'horribly good,' with three medals for obedience, punctuality, and good conduct; the Prince's park with pigs and no flowers; the wolf hunting a pig; Bertha hiding in the myrtle; her medals clinking and betraying her; the ironic devouring). Any well-known lines are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 6–9 ELAR TEKS (19 TAC Ch. 110) strands on theme, point of view, irony, structure (frame story), and author's purpose. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.2", "RL.6.3", "RL.6.5", "RL.7.2", "RL.7.6", "RL.8.6", "W.7.1", "SL.7.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
