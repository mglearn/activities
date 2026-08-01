/* PlotPoint — Robert Frost, "Nothing Gold Can Stay" (1923).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem was first published in 1923 and is in the public domain
   in the United States. "Nothing Gold Can Stay" is studied here as LITERATURE — its
   symbolism, paradox, allusion, compression, and rhyme — in a neutral, academic frame
   consistent with the Texas required literary-works list (19 TAC §110.30, Grade 7). The
   room paraphrases, quotes only brief public-domain phrases where a close reading needs
   them, and reproduces no copyrighted edition. Standards are good-faith alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled instructional
   reconstructions. Correct answer is index 0 in every choices/options array; the engine
   shuffles. */
window.__ROOM__ = {
  id: "nothinggold",
  storageKey: "plotpoint.nothinggold.v1",

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
    "vocab.title": "Words for Nothing Gold Can Stay",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Golden Hour",
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
    "ctob.title": "The Fading Gold",
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
    "arcade.title": "Golden Peak or Fading Fall?",
    "arcade.default": "Sort each image by the moment it captures in the poem.",
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
    "print.item.relic": "Golden Hour evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Symbol-and-theme organizer",
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
      title: "Nothing Gold Can Stay",
      author: "Robert Frost",
      grades: "Grade 7",
      genre: "Poetry · Lyric",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1923)",
      textAccess: "A very short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "The poem, first published in 1923, is in the public domain in the United States, so this room may reference it directly. \"Nothing Gold Can Stay\" is studied here as literature — its symbolism, paradox, allusion, and rhyme. The room quotes only brief public-domain phrases and paraphrases where needed, and reproduces no copyrighted edition.",
      contentNote: "On the Texas required literary-works list adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Studied as literature — compression, symbolism, allusion, and rhyme — in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking \"Nothing Gold Can Stay\" — a single golden-green leaf at dawn on a spring branch, its color already beginning to fade toward ordinary green."
    },
    hook: "Eight short lines. In fewer than fifty words, Robert Frost captures one of the oldest ideas in all of literature: the most beautiful things last the shortest time. Spring's first green is called \"gold\" — but gold is the hardest color to hold. A leaf is briefly a flower, dawn briefly outshines day, and even Eden could not stay perfect. Read it closely and watch a whole philosophy of impermanence fold itself into a single rhymed image.",
    goals: [
      "Understand \"Nothing Gold Can Stay\" as a compact lyric of eight lines built on the theme of impermanence.",
      "Analyze how Frost uses the symbol of \"gold\" to stand for youth, innocence, beauty, and perfection.",
      "Examine the paradoxes and the Eden allusion the poem uses to make its argument that beauty fades.",
      "Interpret how tight rhyme, compression, and an aphoristic closing line drive home the poem's theme."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a symbol carrying an abstract idea.",
        "Discuss: why do people so often say that the best moments are the ones that pass most quickly?"
      ],
      during: [
        "Use the Golden Hour relic room to slow down and read the poem image by image.",
        "Track the movement: from a golden first green, to a leaf that fades, to Eden, to dawn, to the final aphorism."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the symbolism, paradox, and allusion.",
        "Complete the Extend task to transfer the impermanence theme or the gold symbol to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main idea of \"Nothing Gold Can Stay.\" Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two images from the poem — for example the first green called gold and Eden sinking to grief. Explain how the poem uses both to make the same argument about beauty and time." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's idea — that the most precious things are the most fleeting — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "lyric", def: "A short poem that expresses a single feeling, mood, or idea, often in a musical way.", example: "An eight-line poem on the passing of beauty.", nonexample: "A long story-poem with many characters and events.", context: "\"Nothing Gold Can Stay\" is a compact lyric, not a narrative." },
      { term: "symbolism", def: "Using an object or image to stand for a larger, abstract idea.", example: "Letting \"gold\" stand for youth, beauty, and innocence.", nonexample: "A word that means only its plain, literal thing.", context: "The poem's central symbol, \"gold,\" carries the idea of fleeting perfection." },
      { term: "paradox", def: "A statement that seems to contradict itself yet reveals a truth.", example: "Calling a green leaf \"gold,\" or a leaf a \"flower.\"", nonexample: "A plain statement everyone agrees is simply true.", context: "The poem calls the first green \"gold\" — a paradox that makes us look closer." },
      { term: "allusion", def: "A brief reference to a well-known person, place, story, or event.", example: "Mentioning Eden to recall a fall from perfection.", nonexample: "A description that invents everything from scratch.", context: "The line about Eden is an allusion to the Garden of Eden." },
      { term: "couplet", def: "Two lines of poetry, usually rhyming, that form a pair.", example: "Two rhymed lines side by side, like \"gold\" and \"hold.\"", nonexample: "A single unrhymed line standing alone.", context: "The poem is built from rhymed couplets." },
      { term: "aphorism", def: "A short, memorable statement of a general truth.", example: "\"Nothing gold can stay.\"", nonexample: "A long, winding explanation with no clear point.", context: "The poem ends on an aphorism that states its theme." },
      { term: "theme", def: "The central idea or insight a work of literature explores.", example: "The theme that beauty and innocence do not last.", nonexample: "The plot, meaning simply what happens.", context: "The theme of this poem is impermanence." },
      { term: "impermanence", def: "The quality of not lasting; the state of being temporary and passing away.", example: "A sunset that is gone within minutes.", nonexample: "A mountain that stands for millions of years.", context: "Impermanence — that beautiful things fade — is the poem's whole subject." },
      { term: "hue", def: "A color or shade of color.", example: "The golden-green hue of a new spring leaf.", nonexample: "The weight or size of an object.", context: "The poem calls this the \"hardest hue to hold.\"" }
    ],

    relic: {
      name: "The Golden Hour",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "firstgreen", name: "Nature's First Green Is Gold", image: "images/firstgreen.webp",
          clues: ["The poem opens by calling spring's first green \"gold.\"", "Gold here is not a real color but a symbol of value and beauty.", "This golden first green is the poem's picture of fleeting perfection."],
          identify: { q: "What does the opening image describe?", choices: ["Spring's very first green, which the poem calls \"gold\"", "A field of ripe wheat in autumn", "A vein of real gold in a mine", "A golden sunset over the sea"] },
          purpose: { q: "Why call a green sprout \"gold\"?", choices: ["\"Gold\" symbolizes how precious and beautiful that first moment is", "The plant is literally the color of metal", "The poet could not think of the word green", "It is a mistake in the poem"] },
          significance: { q: "What idea does \"gold\" carry through the poem?", choices: ["Youth, innocence, beauty, and perfection", "Wealth and money", "Sadness and mourning", "Danger and warning"] },
          reveals: "The central symbol of the poem: gold as fleeting perfection.",
          conceals: "How much of the poem's meaning rides on one color-word.",
          ace: "Articulate what \"gold\" stands for; connect it to the first green of spring; extend it to why a color can carry a big idea."
        },
        {
          id: "hardesthue", name: "Her Hardest Hue to Hold", image: "images/hardesthue.webp",
          clues: ["The poem says this gold is nature's \"hardest hue to hold.\"", "A hue is a color or shade.", "The line explains why the golden moment cannot last."],
          identify: { q: "What does \"her hardest hue to hold\" mean?", choices: ["This golden color is the one nature can keep for the shortest time", "This is the brightest gold ever seen", "This color is painted on by hand", "This is a color no one likes"] },
          purpose: { q: "What does this line add to the opening image?", choices: ["It explains why the golden perfection cannot last", "It changes the subject to winter", "It repeats the first line exactly", "It introduces a new character"] },
          significance: { q: "How does the word \"hardest\" shape the poem's argument?", choices: ["It insists the most beautiful state is the most fragile", "It says gold is easy to keep", "It means the leaf is heavy", "It has nothing to do with time"] },
          reveals: "Why the golden moment is doomed to fade almost at once.",
          conceals: "How a single word, \"hardest,\" begins the poem's argument about loss.",
          ace: "Articulate what a \"hue\" is; connect \"hardest to hold\" to the theme; extend it to something beautiful you have watched fade."
        },
        {
          id: "leafflower", name: "The Early Leaf, But Only So an Hour", image: "images/leafflower.webp",
          clues: ["The poem says the earliest leaf is really a flower.", "But it stays a flower \"only so an hour.\"", "This is the poem's picture of a brief peak of beauty."],
          identify: { q: "What paradox does this image contain?", choices: ["The earliest leaf is called a flower — for only an hour", "A leaf turns into a stone", "A flower becomes a bird", "A tree grows in a single night"] },
          purpose: { q: "Why call the first leaf a \"flower\"?", choices: ["To mark its brief, blossoming peak of beauty before it fades", "Because leaves and flowers are the same thing", "To describe a garden of roses", "To warn of a coming storm"] },
          significance: { q: "What does \"only so an hour\" emphasize?", choices: ["How short the peak of beauty lasts", "How long the summer will be", "How large the tree becomes", "How many leaves a tree has"] },
          reveals: "The fleeting height of beauty, held for barely a moment.",
          conceals: "How the paradox of leaf-as-flower makes the loss feel sharper.",
          ace: "Articulate the leaf-as-flower paradox; connect it to \"only so an hour\"; extend it to a peak moment that passed too fast."
        },
        {
          id: "subsides", name: "Then Leaf Subsides to Leaf", image: "images/subsides.webp",
          clues: ["After its brief flowering, the leaf \"subsides to leaf.\"", "To subside is to settle down or sink to a lower, ordinary state.", "The flower-like beauty becomes just a plain leaf."],
          identify: { q: "What happens in \"leaf subsides to leaf\"?", choices: ["The flowering beauty settles down into an ordinary leaf", "The leaf grows twice as large", "The leaf turns back into a bud", "The leaf falls off the tree"] },
          purpose: { q: "What does the word \"subsides\" suggest?", choices: ["A quiet sinking or fading from something special to something plain", "A sudden explosion of color", "A rise to greater beauty", "A total disappearance"] },
          significance: { q: "How does this line advance the poem's theme?", choices: ["It shows the decline that follows every golden peak", "It says beauty lasts forever", "It ends the poem happily", "It changes the poem's subject to animals"] },
          reveals: "The inevitable slide from peak beauty to the ordinary.",
          conceals: "How gently, and how completely, the golden moment is lost.",
          ace: "Articulate what \"subsides\" means; connect it to the earlier flowering; extend it to how something special can quietly become ordinary."
        },
        {
          id: "eden", name: "So Eden Sank to Grief", image: "images/eden.webp",
          clues: ["The poem widens its scope with a reference to Eden.", "Eden is the perfect garden of the biblical fall-from-perfection story.", "The line says Eden \"sank to grief.\""],
          identify: { q: "What is the poem alluding to here?", choices: ["The Garden of Eden and a fall from perfection", "A modern city park", "A gold mine in the mountains", "A stormy ocean voyage"] },
          purpose: { q: "Why bring Eden into a poem about leaves?", choices: ["To show the same fading of perfection applies to the whole human story", "To change the subject entirely", "To describe a real garden the poet owned", "To add a happy ending"] },
          significance: { q: "How does the allusion expand the poem's meaning?", choices: ["It lifts the idea from one leaf to all of human history", "It shrinks the poem to a single tree", "It contradicts the earlier lines", "It has no effect on meaning"] },
          reveals: "That the poem's theme is universal, not just about spring.",
          conceals: "How a single word, \"Eden,\" pulls in a whole story of loss.",
          ace: "Articulate what Eden alludes to; connect the fall to the fading leaf; extend it to why the poet reaches beyond nature."
        },
        {
          id: "dawn", name: "So Dawn Goes Down to Day", image: "images/dawn.webp",
          clues: ["The poem says dawn \"goes down\" to day.", "Normally we think of the sun coming up, not going down, at dawn.", "The wording treats the arrival of ordinary daylight as a kind of decline."],
          identify: { q: "What is surprising about \"dawn goes down to day\"?", choices: ["Dawn's arrival of daylight is described as a going-down, a decline", "The sun actually rises twice", "It is midnight, not dawn", "Day comes before dawn"] },
          purpose: { q: "Why describe dawn as going \"down\"?", choices: ["To cast the fading of dawn's brief gold as another loss of perfection", "To say the day will be dark", "To describe an actual sunset", "To confuse the reader for no reason"] },
          significance: { q: "How does this line echo the rest of the poem?", choices: ["It repeats the pattern of a golden moment fading to the ordinary", "It breaks completely from the poem's idea", "It ends the theme of loss", "It describes a season, not a time of day"] },
          reveals: "One more example of brief gold sinking into the everyday.",
          conceals: "How the paradoxical wording makes even sunrise feel like a loss.",
          ace: "Articulate the paradox in \"dawn goes down\"; connect it to the fading leaf; extend it to another everyday change that hides a loss."
        },
        {
          id: "nothinggold", name: "Nothing Gold Can Stay", image: "images/nothinggold.webp",
          clues: ["The poem closes with its title line as a short, memorable statement.", "It states the theme directly: gold — beauty, youth, perfection — cannot last.", "This kind of compact truth-statement is called an aphorism."],
          identify: { q: "What does the final line do?", choices: ["States the poem's theme as a short, memorable aphorism", "Introduces a brand-new image", "Asks the reader a question", "Describes the shepherd"] },
          purpose: { q: "Why end on this line?", choices: ["To gather every earlier image into one clear statement of the theme", "To start a second poem", "To contradict everything before it", "To list the poet's name"] },
          significance: { q: "Why is this line so easy to remember?", choices: ["It is compact, rhythmic, and states a general truth — an aphorism", "It is very long and detailed", "It rhymes with nothing else", "It is written in another language"] },
          reveals: "The theme itself, stated plainly at last: nothing golden lasts.",
          conceals: "How every image in the poem was quietly building to this line.",
          ace: "Articulate the aphorism in your own words; connect it to two earlier images; extend it to why a short line can carry a whole poem."
        }
      ]
    },

    ctob: {
      name: "The Fading Gold",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "In this poem, the color-word ______ stands for youth, beauty, and perfection. (one word)",
          evidence: ["It appears in the poem's first line and its last line.", "It is a precious metal used here as a symbol, not a real leaf color.", "The word begins with 'go…'."],
          hints: ["A precious yellow metal, used here as a symbol.", "Go…", "The word is gold."],
          answer: "gold"
        },
        {
          type: "mc",
          prompt: "Calling spring's first green \"gold\" is best described as an example of —",
          options: [
            "symbolism — an image standing for a larger idea.",
            "a rhyme scheme.",
            "a plot twist.",
            "a stage direction."
          ],
          hints: ["\"Gold\" is not the leaf's real color.", "Which term means one thing standing for a bigger idea?"]
        },
        {
          type: "mc",
          prompt: "The reference to Eden functions in the poem to —",
          options: [
            "widen the idea of lost perfection to the whole human story.",
            "describe a garden the poet planted himself.",
            "introduce the poem's main character.",
            "name one color of a leaf."
          ],
          hints: ["Eden is the perfect garden of a well-known fall-from-perfection story.", "The allusion lifts the poem beyond a single leaf."]
        },
        {
          type: "digit",
          prompt: "How many lines does the poem have? Enter the number.",
          evidence: ["It is a very short lyric made of rhymed couplets.", "Count each line of the poem from top to bottom.", "It is more than seven and fewer than nine."],
          hints: ["It is a very compact poem — count the lines.", "More than seven, fewer than nine.", "The number is 8."],
          answer: "8"
        },
        {
          type: "sequence",
          prompt: "Put the poem's images in the order they appear, earliest first.",
          items: [
            "Nature's first green is called gold.",
            "The early leaf is a flower, but only for an hour.",
            "Eden sinks to grief.",
            "Dawn goes down to day, and nothing gold can stay."
          ],
          hints: ["The poem opens with the first green of spring.", "The leaf-as-flower comes before the wider references.", "Eden, then dawn, then the closing line."]
        },
        {
          type: "mc",
          prompt: "The poem's last line, \"Nothing gold can stay,\" is best described as —",
          options: [
            "an aphorism that states the poem's theme.",
            "a question the reader must answer.",
            "a description of the poet's garden.",
            "a piece of dialogue between characters."
          ],
          hints: ["It is short, memorable, and states a general truth.", "It gathers the whole poem into one line."]
        }
      ]
    },

    arcade: {
      name: "Golden Peak or Fading Fall?",
      instruction: "\"Nothing Gold Can Stay\" moves from a golden peak of beauty to its inevitable fading. Sort each image by the moment it captures: is it an image of the GOLDEN PEAK (the beautiful beginning), or of the FALL & FADE (the decline)? Reasoning earns the points.",
      buckets: [
        { id: "peak", label: "Golden peak (the beginning)", short: "Peak" },
        { id: "fall", label: "Fall & fade (the decline)", short: "Fall" }
      ],
      cards: [
        { text: "Nature's first green, called \"gold.\"", bucket: "peak", why: "The opening image of fresh, precious, golden perfection." },
        { text: "The earliest leaf, which is really a flower.", bucket: "peak", why: "The brief blossoming height of beauty." },
        { text: "Dawn — the first golden light of morning.", bucket: "peak", why: "Dawn is the day's own brief golden moment." },
        { text: "Eden as a perfect, unspoiled garden.", bucket: "peak", why: "Eden pictures a state of flawless, original perfection." },
        { text: "The flower lasting \"only so an hour.\"", bucket: "fall", why: "The peak is already slipping away almost at once." },
        { text: "The leaf that \"subsides\" to an ordinary leaf.", bucket: "fall", why: "The special beauty settles down into the plain and everyday." },
        { text: "Eden sinking \"to grief.\"", bucket: "fall", why: "The perfect garden falls into loss and sorrow." },
        { text: "Dawn \"going down\" to ordinary day.", bucket: "fall", why: "The golden light fades into common daylight — another decline." }
      ],
      followup: "The poem gives each golden image a matching moment of fading. What does that pairing suggest about the way Frost sees beauty and time?"
    },

    analysis: {
      mcq: [
        {
          q: "The central theme of \"Nothing Gold Can Stay\" is best described as —",
          options: [
            "impermanence — that beautiful, precious things do not last.",
            "the value of hard work.",
            "the beauty of winter storms.",
            "the importance of wealth."
          ],
          why: "Every image in the poem shows a golden moment fading, and the last line states it outright."
        },
        {
          q: "In the poem, \"gold\" is best understood as a symbol of —",
          options: [
            "youth, innocence, beauty, and perfection.",
            "money and riches.",
            "danger and fear.",
            "sadness and mourning."
          ],
          why: "The poem uses gold not as a metal but as a stand-in for precious, fleeting perfection."
        },
        {
          q: "Calling the earliest leaf a \"flower\" that lasts \"only so an hour\" is an example of —",
          options: [
            "paradox that captures a brief peak of beauty.",
            "a simple factual description of botany.",
            "a rhyme scheme.",
            "a stage direction."
          ],
          why: "A leaf is not literally a flower; the paradox marks the fleeting height of beauty."
        },
        {
          q: "The reference to Eden works in the poem to —",
          options: [
            "extend the idea of lost perfection to the whole human story.",
            "describe a garden the poet owned.",
            "introduce a new character.",
            "close the poem on a cheerful note."
          ],
          why: "The allusion to Eden's fall lifts the poem from one leaf to a universal pattern of loss."
        },
        {
          q: "The short, memorable final line, \"Nothing gold can stay,\" is best called —",
          options: [
            "an aphorism that states the poem's theme.",
            "an extended metaphor.",
            "a pun.",
            "a rhyme scheme."
          ],
          why: "It is a compact statement of a general truth that gathers the whole poem into one line."
        }
      ],
      short: [
        "Choose one image from the Golden Hour relic room. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem pairs each golden image with a moment of fading (for example, the leaf that is a flower \"only so an hour\"). Explain what this pattern suggests about how the poem sees beauty and time.",
        "Explain the Eden allusion. How does bringing in the Garden of Eden change the scope of a poem that began with a single leaf?"
      ],
      paragraph: "Write an evidence-based paragraph. How does \"Nothing Gold Can Stay\" use the symbol of \"gold\" to express the abstract idea of impermanence? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about beauty and time in your own words. Connect two images that develop it. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "\"Nothing Gold Can Stay\" carries a whole idea — that the most precious things are the most fleeting — through the symbol of gold and images of things that fade. Choose another poem, song, story, film, or real situation that explores impermanence, or that uses one symbol to carry a big idea. Explain the connection with evidence: what is the single image or symbol, what abstract idea does it carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's symbol-and-theme technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how \"Nothing Gold Can Stay\" uses the symbol of gold to express impermanence. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying \"Nothing Gold Can Stay.\" Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [image one] connects to [image two] in \"Nothing Gold Can Stay\" because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about \"Nothing Gold Can Stay\": [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect this poem's theme of impermanence to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of \"Nothing Gold Can Stay\" for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Robert Frost's \"Nothing Gold Can Stay\" (1923) as a compact eight-line lyric — a study of symbolism, paradox, allusion, compression, and rhyme. The poem is in the public domain, so it can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "\"Nothing Gold Can Stay\" appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 7); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was first published in 1923 and is in the public domain in the United States, so it may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's compression, symbolism (gold as youth/beauty/perfection), paradox (green called gold; a leaf called a flower), Eden allusion, and rhymed couplets academically and neutrally.",
        "Details here were checked against the poem's content anchors: nature's first green called gold; that gold as the hardest hue to hold; the early leaf as a flower for only an hour; leaf subsiding to leaf; Eden sinking to grief; dawn going down to day; and the closing aphorism, \"Nothing gold can stay.\" Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 7 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially symbolism, paradox, allusion, and rhyme. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.4", "RL.7.5", "W.7.1", "SL.7.1", "L.7.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
