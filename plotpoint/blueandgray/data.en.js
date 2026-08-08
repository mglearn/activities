/* PlotPoint — "The Blue and the Gray" by Francis Miles Finch (1867).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: The poem (1867) is public domain in the United States, so this room
   may reference it directly. "The Blue and the Gray" is studied here as LITERATURE —
   imagery, refrain, antithesis, and elegiac structure — in a neutral, academic frame
   consistent with the Texas required literary-works list (19 TAC §110.30, Grade 6). The
   room paraphrases longer stretches, quotes only brief public-domain phrases where a
   close reading needs them, and reproduces no copyrighted edition. Standards are
   good-faith alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "blueandgray",
  storageKey: "plotpoint.blueandgray.v1",

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
    "vocab.title": "Words for The Blue and the Gray",
    "vocab.intro": "{n} terms that unlock the poem. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Field of Graves",
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
    "ctob.title": "Under the Sod and the Dew",
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
    "arcade.title": "Division or Reconciliation?",
    "arcade.default": "Sort each image by whether it shows division or reconciliation in the poem.",
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
    "print.item.relic": "Field of Graves evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Reconciliation-theme organizer",
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
      gutenberg: "https://en.wikisource.org/wiki/The_Blue_and_the_Gray",
      title: "The Blue and the Gray",
      author: "Francis Miles Finch",
      grades: "Grade 6",
      genre: "Poetry · Civil War · Elegy",
      time: "45–75 minutes",
      spoiler: "None — the whole poem is discussed",
      rights: "Public domain (1867)",
      textAccess: "A short public-domain poem; use your class's copy or any public-domain text.",
      copyright: "The poem (1867) is public domain in the United States, so this room studies it as literature and may quote brief public-domain phrases while paraphrasing longer stretches. It reproduces no copyrighted edition.",
      contentNote: "On the Texas required literary-works list adopted 2026 under 19 TAC §110.30 (Grade 6); implementation no earlier than 2030–2031; studied as literature — imagery, structure, and rhetoric. Preview and follow local policy.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking 'The Blue and the Gray' — a quiet field of grave markers at dawn, some strewn with flowers, rain and dew falling alike over rows of the fallen from both armies."
    },
    hook: "One field. Two armies. After the American Civil War, women laid flowers on the graves of the fallen — and they did not stop at their own side. Francis Miles Finch turned that act into an elegy: soldiers who wore blue and soldiers who wore gray now lie together, side by side, 'under the sod and the dew.' Read it as a poem, and watch how one balanced pairing, repeated stanza after stanza, carries a whole nation's grief and hope for peace.",
    goals: [
      "Understand 'The Blue and the Gray' as a Reconciliation-era elegy honoring the Civil War dead of both sides.",
      "Analyze how the poem balances 'the Blue' and 'the Gray' through antithesis and a repeated closing refrain.",
      "Trace how imagery of graves, falling rain, and dew shows Nature treating both armies impartially.",
      "Interpret how the poem moves from the division of war toward reconciliation and shared mourning — and why that theme still matters."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the ideas of elegy, refrain, and antithesis.",
        "Discuss: after a war, how might a writer honor the dead of both sides without taking a side?"
      ],
      during: [
        "Use the Field of Graves to slow down and read the poem image by image.",
        "Track the pairing: notice how each stanza sets 'the Blue' beside 'the Gray' and closes on the same shared image."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the antithesis and the poem's refrain-like structure.",
        "Complete the Extend task to carry the reconciliation theme, or the balanced technique, to another text."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words what 'The Blue and the Gray' honors and how it treats the two sides. Include one image from the poem that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two elements of the poem — for example the antithesis of Blue and Gray and the repeated closing image. Explain how balancing the two sides shapes the poem's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the poem's technique — honoring both sides through a balanced, repeated pairing — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "elegy", def: "A poem of mourning that grieves and honors those who have died.", example: "A poem laying the war's dead to rest with sorrow and respect.", nonexample: "A cheerful poem celebrating a birthday.", context: "'The Blue and the Gray' is an elegy for the Civil War dead." },
      { term: "refrain", def: "A line or image repeated at set points in a poem, like a chorus.", example: "The paired 'Blue' and 'Gray' image returning to close each stanza.", nonexample: "A line that appears only once and is never echoed.", context: "The poem's refrain-like close pairs the two colors again and again." },
      { term: "antithesis", def: "Setting two opposites side by side in balance to sharpen a contrast.", example: "'The Blue' held against 'the Gray' in the same breath.", nonexample: "Naming just one side and ignoring the other.", context: "The poem's central antithesis is Blue versus Gray, kept in balance." },
      { term: "personification", def: "Giving human qualities or actions to something not human, like Nature.", example: "The rain and dew 'falling alike' on both sides' graves.", nonexample: "Plainly stating that it rained on the field.", context: "Nature is personified, treating both armies impartially." },
      { term: "symbolism", def: "Using an image or object to stand for a larger idea.", example: "Blue standing for the Union, Gray for the Confederacy.", nonexample: "A color mentioned only to describe cloth.", context: "The two colors are symbols for the two armies." },
      { term: "tone", def: "The attitude or feeling a poem expresses toward its subject.", example: "The solemn, grieving tone of a poem about the dead.", nonexample: "A playful, joking attitude.", context: "The poem's tone is solemn and reconciling." },
      { term: "theme", def: "The central idea or message a text explores.", example: "The idea that former enemies can be mourned and honored together.", nonexample: "A single fact with no larger meaning.", context: "Reconciliation is a central theme of the poem." },
      { term: "reconciliation", def: "The restoring of peace and friendship after conflict or division.", example: "Honoring both armies' dead alike as a step toward peace.", nonexample: "Keeping old enemies bitterly divided.", context: "The poem reaches toward reconciliation between North and South." },
      { term: "impartial", def: "Treating all sides equally, favoring none.", example: "Rain falling the same on every grave, whatever side it marks.", nonexample: "Caring for one side's graves and neglecting the other's.", context: "Nature is impartial, blessing both the Blue and the Gray." }
    ],

    relic: {
      name: "The Field of Graves",
      intro: "Seven instructional reconstructions of the images in the poem — teaching recreations, not artwork from any edition. Investigate what each image is, its role in the poem, and what it reveals.",
      artifacts: [
        {
          id: "twocolors", name: "The Two Colors — Blue and Gray", image: "images/twocolors.webp",
          clues: ["The poem's title names two colors: the Blue and the Gray.", "Blue was the color of Union uniforms; Gray, the Confederate.", "The two are almost always named together, side by side."],
          identify: { q: "What do 'the Blue' and 'the Gray' stand for?", choices: ["The Union army (Blue) and the Confederate army (Gray)", "Two kinds of weather in the poem", "Two rivers on a battlefield", "Two seasons of the year"] },
          purpose: { q: "What is the pairing of the two colors's role in the poem?", choices: ["It is the central antithesis that every stanza balances and returns to", "It appears once and is dropped", "It describes the poet's clothing", "It has no connection to the rest"] },
          significance: { q: "Why name both colors together, again and again?", choices: ["To honor both sides equally and hold their opposition in balance", "To argue that one side was right", "To confuse the reader", "To hide who is being mourned"] },
          reveals: "The central symbol and antithesis of the whole poem.",
          conceals: "How much of the poem's meaning is carried by keeping the two sides in balance.",
          ace: "Articulate what the two colors symbolize; connect them to the idea of balance; extend it to why naming both sides matters after a war."
        },
        {
          id: "graves", name: "The Graves 'Under the Sod and the Dew'", image: "images/graves.webp",
          clues: ["The fallen from both armies lie in the same ground.", "The poem pictures them 'under the sod and the dew.'", "Blue and Gray rest side by side, not apart."],
          identify: { q: "What does the shared-grave image show?", choices: ["Soldiers of both sides lying together in the same earth", "A battle still being fought", "A crowded city street", "An empty parade ground"] },
          purpose: { q: "What feeling does placing them together create?", choices: ["Shared rest and the end of the quarrel in death", "Triumph and celebration", "Anger and revenge", "Fear and panic"] },
          significance: { q: "What does 'side by side' add to the picture?", choices: ["In death the two sides are no longer enemies — they share one resting place", "One side is buried more grandly", "The graves are far apart", "The dead are forgotten"] },
          reveals: "Reconciliation pictured as a shared resting place.",
          conceals: "How the shared ground quietly answers the war's division.",
          ace: "Articulate the shared-grave image; connect it to the theme of peace; extend it to how a setting can carry a message."
        },
        {
          id: "refrain", name: "The Refrain — the Repeated Pairing", image: "images/refrain.webp",
          clues: ["Each stanza builds to nearly the same closing image.", "That close pairs 'the Blue' and 'the Gray' once more.", "The repetition works like a chorus in a song."],
          identify: { q: "What is the repeated closing pairing called?", choices: ["A refrain — a repeated line or image, like a chorus", "A rhyme scheme", "A stage direction", "A footnote"] },
          purpose: { q: "Why repeat the pairing at the end of each stanza?", choices: ["The repetition drives home the balance and the shared grief", "To fill space with no meaning", "To make the poem harder to read", "To change the subject each time"] },
          significance: { q: "What does the refrain do to the poem's meaning?", choices: ["It keeps the two sides forever balanced and inseparable in the reader's mind", "It cancels the earlier stanzas", "It hides the poem's theme", "It has no effect"] },
          reveals: "The refrain-like device that unifies the whole poem.",
          conceals: "How repetition itself can argue for equality between the two sides.",
          ace: "Articulate what the refrain repeats; connect the repetition to the theme of balance; extend it to a song or text that uses a chorus this way."
        },
        {
          id: "rain", name: "Falling Rain and Dew, Alike", image: "images/rain.webp",
          clues: ["The poem shows rain and dew falling on the graves.", "They fall the same on both the Blue and the Gray.", "Nature is described as if it chooses to bless both."],
          identify: { q: "What does the falling rain and dew image show?", choices: ["Nature touching both sides' graves the same way", "A storm destroying the field", "A drought drying the ground", "A flood washing graves away"] },
          purpose: { q: "What literary device gives Nature this behavior?", choices: ["Personification — Nature acts as if it treats both sides impartially", "A simile comparing rain to soldiers", "A rhyme between two colors", "A list of facts about weather"] },
          significance: { q: "What does rain falling 'alike' suggest?", choices: ["Nature is impartial — it makes no difference between the two armies", "Nature favors the winning side", "The rain is a punishment", "The weather has nothing to do with the theme"] },
          reveals: "Nature's impartiality shown through personification.",
          conceals: "How the impartial rain models the reconciliation the poem hopes for.",
          ace: "Articulate what rain and dew do in the poem; connect it to impartiality; extend it to another image of nature treating everyone the same."
        },
        {
          id: "reconciliation", name: "The Reconciliation Theme", image: "images/reconciliation.webp",
          clues: ["Former enemies are honored together in the poem.", "The bitterness of war gives way to shared mourning.", "The poem reaches toward peace between North and South."],
          identify: { q: "What larger idea does honoring both sides express?", choices: ["Reconciliation — restoring peace after the division of war", "A call for more fighting", "A demand for revenge", "A wish to forget the dead"] },
          purpose: { q: "How does this theme shape the poem?", choices: ["It turns an elegy for the dead into a hope for national healing", "It has no effect on the poem", "It contradicts the opening", "It appears only in the title"] },
          significance: { q: "Why honor former enemies at all?", choices: ["Shared grief can bind a divided nation back together", "To prove one side was stronger", "To reopen old wounds", "To keep the sides apart"] },
          reveals: "The poem's central theme of reconciliation and shared grief.",
          conceals: "How mourning both sides can be an act of peacemaking.",
          ace: "Articulate the reconciliation theme; connect it to the shared graves; extend it to a time two sides made peace after conflict."
        },
        {
          id: "judgment", name: "\"Waiting the Judgment Day\"", image: "images/judgment.webp",
          clues: ["The poem's close looks beyond the grave to a final day.", "Both sides are pictured together, 'waiting the judgment day.'", "The line gives the elegy a timeless, solemn ending."],
          identify: { q: "What does the 'judgment day' image do at the poem's close?", choices: ["It pictures both sides at rest together, awaiting a final day", "It starts a new battle", "It names a shepherd's tool", "It lists the war's causes"] },
          purpose: { q: "Why end the elegy on this timeless image?", choices: ["It lifts the poem beyond the war to a solemn, shared future", "It changes the subject entirely", "It undoes the reconciliation", "It has no purpose"] },
          significance: { q: "What tone does 'waiting the judgment day' create?", choices: ["A solemn, elegiac calm — grief settled into lasting rest", "A cheerful, triumphant mood", "An angry, accusing mood", "A confused, uncertain mood"] },
          reveals: "The elegiac, timeless close that settles the poem's grief.",
          conceals: "How the ending places both sides equal before a final day.",
          ace: "Articulate what the closing image shows; connect it to the elegy's tone; extend it to why the poem ends beyond the war itself."
        },
        {
          id: "flowers", name: "The Decorated Graves", image: "images/flowers.webp",
          clues: ["The poem was inspired by women laying flowers on graves.", "They decorated the graves of both armies alike.", "That act of remembrance sets the whole poem in motion."],
          identify: { q: "What real act inspired the poem?", choices: ["Women decorating the graves of both sides with flowers", "A victory parade", "A treaty signing", "A soldier's diary"] },
          purpose: { q: "What does the flower-laying show?", choices: ["Remembrance offered to both sides without division", "A reward for the winners only", "A protest against the dead", "A random custom with no meaning"] },
          significance: { q: "Why does honoring both sides' graves matter?", choices: ["It models the impartial, reconciling spirit the whole poem praises", "It proves one army was braver", "It reopens the conflict", "It has nothing to do with the theme"] },
          reveals: "The act of remembrance that inspired the elegy.",
          conceals: "How a simple gesture of flowers can carry a poem's whole argument.",
          ace: "Articulate what the decorated graves show; connect the act to the theme of impartiality; extend it to a way people honor the dead today."
        }
      ]
    },

    ctob: {
      name: "Under the Sod and the Dew",
      intro: "Six locks. Every answer is inferable from the poem and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "A poem of mourning that grieves and honors the dead is called an ______. (one word)",
          evidence: ["The poem laments the fallen of a war.", "Its whole purpose is to honor those who have died.", "The word begins with 'ele…'."],
          hints: ["A mourning poem for the dead.", "Ele…", "The word is elegy."],
          answer: "elegy"
        },
        {
          type: "mc",
          prompt: "In the poem, 'the Blue' and 'the Gray' stand for —",
          options: [
            "the Union army and the Confederate army.",
            "two colors of flowers on the graves.",
            "the sky and the rain.",
            "morning and evening."
          ],
          hints: ["Think about the American Civil War uniforms.", "Which option names the two armies?"]
        },
        {
          type: "mc",
          prompt: "The rain and dew falling the same on both sides' graves is an example of —",
          options: [
            "personification showing Nature's impartiality.",
            "a call for the war to continue.",
            "one army winning over the other.",
            "a description of the poet's home."
          ],
          hints: ["Nature is treated as if it acts with a purpose.", "It falls 'alike' on both the Blue and the Gray."]
        },
        {
          type: "digit",
          prompt: "The poem honors the dead of how many sides of the war? Enter the number.",
          evidence: ["The title names two colors: the Blue and the Gray.", "One color is the Union, the other the Confederacy.", "The poem keeps pairing the two, side by side."],
          hints: ["Count the colors in the title.", "The Blue and the Gray — two sides.", "The number is 2."],
          answer: "2"
        },
        {
          type: "sequence",
          prompt: "Put the poem's movement in order, from what it starts with to how it ends.",
          items: [
            "The division of the war — two armies, Blue against Gray.",
            "The fallen of both sides buried in the same field.",
            "Nature's rain and dew falling alike on every grave.",
            "Both sides at rest together, waiting the judgment day."
          ],
          hints: ["Begin with the conflict that divided the two sides.", "The graves and shared ground come before the timeless close.", "The 'judgment day' image ends the poem."]
        },
        {
          type: "mc",
          prompt: "The repeated image that closes each stanza, pairing the Blue and the Gray, works as a —",
          options: [
            "refrain that keeps the two sides balanced throughout.",
            "sudden change of subject each time.",
            "list of the war's battles.",
            "shift from poetry into plain prose."
          ],
          hints: ["It returns again and again, like a chorus.", "It keeps the two colors side by side in every stanza."]
        }
      ]
    },

    arcade: {
      name: "Division or Reconciliation?",
      instruction: "'The Blue and the Gray' sets the division of war beside the hope of reconciliation. Sort each image by what it shows in the poem: is it an image of DIVISION & CONFLICT, or of RECONCILIATION & SHARED REST? Reasoning earns the points.",
      buckets: [
        { id: "division", label: "Division & conflict", short: "Division" },
        { id: "reconciliation", label: "Reconciliation & shared rest", short: "Reconciliation" }
      ],
      cards: [
        { text: "Two armies facing each other, Blue against Gray.", bucket: "division", why: "Opposing sides in a war — the poem's starting division." },
        { text: "Soldiers marching to battle under rival flags.", bucket: "division", why: "The conflict that set the two colors against each other." },
        { text: "The bitterness and quarrel that split the nation.", bucket: "division", why: "The wartime division the poem hopes to heal." },
        { text: "Enemies who once fought and would not yield.", bucket: "division", why: "The hostility of the war, before any peace." },
        { text: "Blue and Gray lying side by side in one field.", bucket: "reconciliation", why: "Former enemies share the same resting place." },
        { text: "Rain and dew falling alike on all the graves.", bucket: "reconciliation", why: "Nature treats both sides impartially — a sign of peace." },
        { text: "Women laying flowers on both armies' graves.", bucket: "reconciliation", why: "Remembrance offered to both sides without division." },
        { text: "Both sides together, waiting the judgment day.", bucket: "reconciliation", why: "The elegy closes with the two sides at rest as one." }
      ],
      followup: "The poem places the division of war right beside images of shared rest and impartial Nature. What does that placement suggest about the kind of peace the poem hopes for?"
    },

    analysis: {
      mcq: [
        {
          q: "'The Blue and the Gray' is best described as —",
          options: [
            "an elegy honoring the Civil War dead of both sides.",
            "a victory song celebrating one army.",
            "a battle report listing troop movements.",
            "a comic poem about army uniforms."
          ],
          why: "The poem mourns and honors the fallen of both the Union and the Confederacy."
        },
        {
          q: "Setting 'the Blue' against 'the Gray' in balanced, paired lines is an example of —",
          options: [
            "antithesis.",
            "a rhyme scheme only.",
            "a stage direction.",
            "a footnote."
          ],
          why: "The poem holds the two opposites side by side in balance, the definition of antithesis."
        },
        {
          q: "The rain and dew that fall the same on both sides' graves mainly show that —",
          options: [
            "Nature is impartial, making no difference between the two armies.",
            "one side deserved better treatment.",
            "the weather ruined the field.",
            "the poet disliked the rain."
          ],
          why: "Nature is personified as impartial, blessing both the Blue and the Gray alike."
        },
        {
          q: "The image that returns to close each stanza — pairing the Blue and the Gray — functions as a —",
          options: [
            "refrain that keeps the two sides balanced.",
            "sudden change of subject.",
            "list of the war's causes.",
            "shift into plain prose."
          ],
          why: "The repeated closing pairing works like a chorus, keeping the two sides inseparable."
        },
        {
          q: "By honoring the dead of both armies together, the poem's central theme is —",
          options: [
            "reconciliation and shared grief after the war.",
            "revenge against the losing side.",
            "the glory of winning battles.",
            "the joy of returning home."
          ],
          why: "The poem reaches toward peace, mourning both sides as a step toward national healing."
        }
      ],
      short: [
        "Choose one image from the Field of Graves. Explain what it shows and what it reveals about the poem's meaning.",
        "The poem sets 'the Blue' against 'the Gray' in balanced, paired lines. Explain how this antithesis shapes the way you read the two sides.",
        "Explain how the rain and dew 'falling alike' on both sides' graves uses personification to support the poem's theme of reconciliation."
      ],
      paragraph: "Write an evidence-based paragraph. How does 'The Blue and the Gray' use a repeated, balanced pairing of the two sides to express its theme of reconciliation? Make a claim and support it with specific images from the poem.",
      aceReflection: "Articulate what the poem suggests about mourning both sides in your own words. Connect two elements that develop it — for example the antithesis and the refrain. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "One Image, One Idea",
      prompt: "'The Blue and the Gray' carries a whole idea — reconciliation — by balancing two opposites and repeating the pairing until the reader feels them as equals. Choose another poem, song, story, or speech that honors more than one side of a conflict, or that carries a big idea through a repeated, balanced pairing. Explain the connection with evidence: what are the two things held in balance, what idea does the pairing carry, and where does the comparison start to break down?",
      format: "A short evidence-based comparison connecting the poem's balanced-antithesis or reconciliation technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how 'The Blue and the Gray' honors both sides of the Civil War to express reconciliation. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying 'The Blue and the Gray.' Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [element one] connects to [element two] in 'The Blue and the Gray' because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the poem." },
      { title: "Evidence prompt", text: "Here is my claim about 'The Blue and the Gray': [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect 'The Blue and the Gray's' balanced-pairing technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of 'The Blue and the Gray' for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Francis Miles Finch's 'The Blue and the Gray' (1867) as a Reconciliation-era elegy — a study of refrain, antithesis, personification, symbolism, imagery, tone, and theme. The poem is public domain, so it may be referenced directly, and this room reproduces no copyrighted edition. It is presented as literature in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "'The Blue and the Gray' appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The poem was published in 1867 and is in the public domain in the United States, so it may be used directly. This room still paraphrases longer stretches and quotes only brief public-domain phrases.",
        "Teach as literature. Present the poem's imagery, structure, and rhetoric — refrain, antithesis, personification, symbolism, elegiac tone, and the reconciliation theme — academically and neutrally, and follow your district's policy and community expectations.",
        "Content anchors checked against the poem: the two colors (Blue = Union, Gray = Confederacy); the fallen of both sides buried together 'under the sod and the dew'; the refrain-like closing pairing repeated across stanzas; rain and dew falling 'alike' on both sides' graves (personified impartiality); the reconciliation and shared-grief theme; the timeless close 'waiting the judgment day'; the poem's inspiration in women decorating the graves of both armies. Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 6 ELAR TEKS (19 TAC Ch. 110) strands on figurative language, poetic structure, imagery, and theme — especially antithesis, refrain, personification, and symbolism. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.6.2", "RL.6.4", "RL.6.5", "W.6.1", "SL.6.1", "L.6.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
