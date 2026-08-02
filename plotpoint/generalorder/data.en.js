/* PlotPoint — General Orders No. 108, Ulysses S. Grant (June 2, 1865).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: This 1865 military order is a public-domain U.S. government work, so
   this room may reference the document directly. General Orders No. 108 is studied here as
   LITERATURE and RHETORIC — genre, ethos, commemoration, and formal address — in a neutral,
   academic frame consistent with the Texas required literary-works list (19 TAC §110.30,
   Grade 6). The room paraphrases, quotes only brief public-domain phrases where a close
   reading needs them. Standards are good-faith alignment; TEKS/ELPS flagged "Needs review."
   Relic artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "generalorder",
  storageKey: "plotpoint.generalorder.v1",

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
    "enter.readListenNote": "This 1865 military order is in the public domain. Use your class's copy or a verified public-domain text.",
    "enter.read": "Read the full text",
    "enter.listen": "Listen — audio",
    "enter.readAloud": "Prefer a read-aloud? Students may use their device's built-in read-aloud or a district-approved tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for General Order No. 108",
    "vocab.intro": "{n} terms that unlock the text. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Soldier's Table",
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
    "ctob.title": "The Order's Address",
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
    "arcade.title": "Achievement or Message?",
    "arcade.default": "Sort each phrase by its role in the order.",
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
    "print.item.relic": "Soldier's Table evidence sheet",
    "print.item.ctob": "Close-reading evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Honoring-service organizer",
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
      title: "General Order No. 108",
      author: "Ulysses S. Grant",
      grades: "Grade 6",
      genre: "Military order · Rhetoric",
      time: "45–75 minutes",
      spoiler: "None — the whole document is discussed",
      rights: "Public domain (U.S. government work, 1865)",
      textAccess: "A short public-domain document; use your class's copy or any public-domain text.",
      copyright: "This 1865 military order is a public-domain U.S. government document. It is studied here as literature and rhetoric — genre, ethos, and commemoration — through brief quotes and paraphrase. The room reproduces no copyrighted edition and quotes only brief public-domain phrases where a close reading needs them.",
      contentNote: "General Order No. 108 appears on the Texas required literary-works list adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. The document concerns soldiers and war and is studied here as rhetoric and literature in a neutral, academic frame. Preview and follow local policy and community expectations.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking General Order No. 108 — a formal military dispatch resting on a field desk at the close of the Civil War, with a national flag furled beside it and rows of soldiers preparing to return home in the distance."
    },
    hook: "The war is over. Standing before the armies he led, General Grant does not shout a victory. He writes them a letter — a formal military order — to say thank you and to send them home. In a few measured lines he tells the soldiers what their four years of \"courage and fortitude\" accomplished: they saved the Union, defended the flag, and won peace. Read it as rhetoric, and watch how a commander turns an official order into an act of gratitude and remembrance.",
    goals: [
      "Understand General Order No. 108 as a formal military order that uses the rhetoric of gratitude to thank and dismiss the soldiers at the end of the Civil War.",
      "Analyze how Grant builds ethos — the authority of a commander who shared the soldiers' hardship — and why that authority makes the thanks convincing.",
      "Trace how the order commemorates sacrifice: what it honors, what it lists, and how parallelism gives weight to the soldiers' achievements.",
      "Interpret how a single document marks the turning point from war to peace, and how it hopes the soldiers will carry the same virtues into peacetime citizenship."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a military order as a form of persuasive, ceremonial writing.",
        "Discuss: how can an official order also be an act of thanks? What makes a leader's gratitude feel earned?"
      ],
      during: [
        "Use the Soldier's Table to slow down and read the order phrase by phrase.",
        "Track the movement: from four years of hard service, through what that service won, to the return home and a nation's thanks."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the order's rhetoric and structure.",
        "Complete the Extend task to compare its honoring-of-service to another text or situation."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words the main purpose of General Order No. 108. Include one phrase from the order that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two parts of the order — for example the list of what the soldiers achieved and the thanks Grant gives them. Explain how placing achievement and gratitude side by side shapes the order's message." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the order's technique — honoring people's service and marking a turning point — to another text or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "military order", def: "An official written command or announcement issued by a commanding officer to troops.", example: "A general's order thanking and dismissing the soldiers.", nonexample: "A private diary entry.", context: "General Order No. 108 is a military order, not a personal letter." },
      { term: "ethos", def: "A speaker's appeal to their own credibility, character, and authority.", example: "A commander who fought beside his troops speaking to them.", nonexample: "A stranger with no standing giving orders.", context: "Grant's ethos rests on his authority and shared experience with the soldiers." },
      { term: "commemoration", def: "The act of honoring and remembering people or events, especially sacrifice.", example: "Words that honor comrades who died in the war.", nonexample: "Forgetting an event entirely.", context: "The order is an act of commemoration for the soldiers' service." },
      { term: "rhetoric", def: "The art of using language to persuade, move, or honor an audience.", example: "Choosing dignified words to thank an army.", nonexample: "Random words with no purpose.", context: "Grant's rhetoric turns an order into a message of gratitude." },
      { term: "tone", def: "The attitude a piece of writing takes toward its subject and audience.", example: "A dignified, grateful tone in a farewell to soldiers.", nonexample: "A careless, joking tone.", context: "The order's tone honors sacrifice and marks a solemn moment." },
      { term: "theme", def: "A central idea a text explores.", example: "Gratitude for sacrifice and the passage from war to peace.", nonexample: "A single unrelated fact.", context: "A theme of the order is gratitude for the soldiers' sacrifice." },
      { term: "parallelism", def: "Repeating a grammatical structure to give balance and emphasis, as in a list of achievements.", example: "Preserved the Union, upheld the government, defended the flag.", nonexample: "A jumble of unrelated sentence shapes.", context: "Grant uses parallelism to list what the soldiers accomplished." },
      { term: "fortitude", def: "Courage and strength in facing hardship or pain over a long time.", example: "Enduring four years of war without giving up.", nonexample: "Quitting at the first difficulty.", context: "The order praises the soldiers' 'courage and fortitude.'" },
      { term: "valor", def: "Great courage in the face of danger, especially in battle.", example: "Soldiers standing firm under fire.", nonexample: "Running from every challenge.", context: "The order credits the soldiers' valor with saving the country." }
    ],

    relic: {
      name: "The Soldier's Table",
      intro: "Seven instructional reconstructions of the key moments in the order — teaching recreations, not artwork from any edition. Investigate what each part is, its role in the order, and what it reveals about Grant's rhetoric.",
      artifacts: [
        {
          id: "address", name: "To the Soldiers of the Armies", image: "images/address.webp",
          clues: ["The order opens by naming exactly who it is written to.", "It addresses the soldiers of the armies of the United States directly.", "The formal address sets a dignified, ceremonial tone from the first line."],
          identify: { q: "Who does the order address?", choices: ["The soldiers of the armies of the United States", "The Congress of the United States", "the enemy generals", "the general public in the newspapers"] },
          purpose: { q: "What is the role of this formal address?", choices: ["It sets a dignified tone and speaks straight to the troops", "It hides who the order is for", "It lists supplies to be delivered", "It has no connection to the rest"] },
          significance: { q: "Why open a farewell with such a formal address?", choices: ["Formal address gives the moment weight and honors the audience", "Formal address confuses the reader", "It is only a legal requirement", "It signals the war is beginning"] },
          reveals: "The order's audience and its dignified, ceremonial tone.",
          conceals: "How much respect is carried by the way the order names its readers.",
          ace: "Articulate who the order addresses; connect the formal address to its tone; extend it to why the way we address people shapes a message."
        },
        {
          id: "fortitude", name: "Four Years of Courage and Fortitude", image: "images/fortitude.webp",
          clues: ["The order looks back on four years of arduous service.", "It honors the soldiers' 'unsurpassed courage and fortitude.'", "It frames the long, hard service as something now completed."],
          identify: { q: "What does this part of the order honor?", choices: ["Four years of hard service marked by courage and fortitude", "a single easy afternoon", "the enemy's strategy", "the weather during the war"] },
          purpose: { q: "Why open by recalling the long, hard service?", choices: ["To honor the sacrifice before naming what it achieved", "To complain about the war", "To ask for more soldiers", "To change the subject"] },
          significance: { q: "What does praising 'fortitude' add?", choices: ["It honors endurance over time, not just bravery in one battle", "It criticizes the soldiers", "It describes the generals only", "It has no effect"] },
          reveals: "That the order grounds its thanks in years of endured hardship.",
          conceals: "How honoring endurance builds Grant's case before the thanks arrive.",
          ace: "Articulate what 'courage and fortitude' honors; connect it to the length of the service; extend it to a time endurance mattered as much as one brave act."
        },
        {
          id: "union", name: "The Union Preserved", image: "images/union.webp",
          clues: ["The order credits the soldiers with preserving the Union.", "It says their valor upheld the authority of the government.", "This is the order's account of what the service accomplished."],
          identify: { q: "What does the order say the soldiers' valor accomplished?", choices: ["It preserved the Union and upheld the government's authority", "It ended all future wars", "It rewrote the Constitution", "It built new cities"] },
          purpose: { q: "What is the role of this claim in the order?", choices: ["It names the achievement that earns the soldiers' thanks", "It blames the soldiers", "It describes a defeat", "It is unrelated to the war"] },
          significance: { q: "Why lead with the preserved Union?", choices: ["It is the largest thing the soldiers' service achieved", "It is a minor detail", "It contradicts the thanks", "It changes the audience"] },
          reveals: "The order's central claim about what the soldiers achieved.",
          conceals: "How Grant links the soldiers' valor directly to the nation's survival.",
          ace: "Articulate what preserving the Union means; connect it to the soldiers' valor; extend it to how a leader defines what a group accomplished."
        },
        {
          id: "flag", name: "The National Flag Defended", image: "images/flag.webp",
          clues: ["The order names the national flag among what the soldiers defended.", "The flag stands for the country and government the soldiers fought for.", "It appears in a balanced list of achievements."],
          identify: { q: "What does the national flag represent here?", choices: ["The nation and government the soldiers defended", "a single regiment only", "an enemy banner", "a decoration with no meaning"] },
          purpose: { q: "Why include the flag in the list of achievements?", choices: ["It is a powerful symbol of what the soldiers fought to protect", "It is only decoration", "It marks a place on a map", "It signals surrender"] },
          significance: { q: "How does the flag fit the order's list?", choices: ["It sits in a balanced series of achievements — an example of parallelism", "It stands entirely alone", "It cancels the other achievements", "It is unrelated to them"] },
          reveals: "How a concrete symbol carries the abstract idea of the nation.",
          conceals: "The balanced, list-like structure Grant uses to weigh the achievements.",
          ace: "Articulate what the flag stands for; connect it to the list of achievements; extend it to how a symbol can stand in for a whole idea."
        },
        {
          id: "peace", name: "Peace Secured", image: "images/peace.webp",
          clues: ["The order marks that the fighting is over and peace is won.", "It presents peace as the result the soldiers' labors secured.", "This is the turning point from war to its end."],
          identify: { q: "What does this part of the order mark?", choices: ["The end of the war and the securing of peace", "the start of a new war", "a temporary ceasefire only", "an ordinary day of drills"] },
          purpose: { q: "Why present peace as an achievement?", choices: ["It is the goal the soldiers' service finally secured", "It is an accident", "It belongs to the enemy", "It is unrelated to the soldiers"] },
          significance: { q: "What does 'peace secured' signal about the order's timing?", choices: ["The document marks the turning point from war to peace", "The war is just beginning", "Nothing has changed", "The soldiers will keep fighting"] },
          reveals: "That the order stands at the exact hinge between war and peace.",
          conceals: "How ending on peace prepares the soldiers to return home.",
          ace: "Articulate what peace secured means; connect it to the soldiers' labors; extend it to why marking a turning point matters in writing."
        },
        {
          id: "gratitude", name: "A Nation's Gratitude", image: "images/gratitude.webp",
          clues: ["The order's central purpose is to give thanks.", "It says the soldiers have earned a nation's gratitude.", "It commemorates the comrades who died as well as those who survived."],
          identify: { q: "What is the order's main purpose?", choices: ["To thank the soldiers and express a nation's gratitude", "To announce a punishment", "To declare a new battle plan", "To collect taxes"] },
          purpose: { q: "Why does the order thank the soldiers so directly?", choices: ["Gratitude is the whole point — the order is an act of thanks", "To distract from a defeat", "To criticize the army", "For no clear reason"] },
          significance: { q: "What does honoring the fallen comrades add?", choices: ["It turns the thanks into commemoration — remembering sacrifice", "It changes the audience", "It weakens the message", "It has no effect"] },
          reveals: "The order's rhetorical heart: gratitude and commemoration.",
          conceals: "How thanks and remembrance work together in the same document.",
          ace: "Articulate the order's purpose; connect gratitude to commemoration; extend it to how thanking someone can also honor a loss."
        },
        {
          id: "civillife", name: "Return to Civil Life", image: "images/civillife.webp",
          clues: ["The order sends the soldiers, their duty done, back to civil life.", "It hopes they will carry the same virtues into peacetime citizenship.", "It closes the passage from soldier to citizen."],
          identify: { q: "What does the order say the soldiers will now do?", choices: ["Return to civil life as citizens, their duty done", "march to a new front", "remain soldiers forever", "leave the country"] },
          purpose: { q: "How does this ending shift the order's picture?", choices: ["From soldiers at war to citizens at peace — the same virtues carried forward", "It abandons the order's meaning", "It contradicts the thanks", "It has no purpose"] },
          significance: { q: "What does hoping they carry the same virtues home suggest?", choices: ["Good citizens are made from the same courage that won the war", "The soldiers failed", "The virtues no longer matter", "The war will resume"] },
          reveals: "The order's hope for the soldiers' future as citizens.",
          conceals: "How the ending turns a farewell into a charge for peacetime.",
          ace: "Articulate the return to civil life; connect the soldiers' virtues to citizenship; extend it to how an ending can point toward what comes next."
        }
      ]
    },

    ctob: {
      name: "The Order's Address",
      intro: "Six locks. Every answer is inferable from the order and the evidence given — no outside trivia. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The order's genre is a formal military ______ issued by a commander to troops. (one word)",
          evidence: ["It is an official command, not a personal letter.", "A commander issues it to the whole army.", "The word begins with 'ord…'."],
          hints: ["An official written command.", "Ord…", "The word is order."],
          answer: "order"
        },
        {
          type: "mc",
          prompt: "The soldiers' four years of service are honored mainly as images of —",
          options: [
            "courage, fortitude, and endured hardship.",
            "wealth and comfort.",
            "leisure and rest.",
            "trade and profit."
          ],
          hints: ["Think about what four years of war demanded of the soldiers.", "Which option matches 'courage and fortitude'?"]
        },
        {
          type: "mc",
          prompt: "'The Union preserved' functions in the order to —",
          options: [
            "name the great achievement the soldiers' valor secured.",
            "describe a defeat the soldiers suffered.",
            "list one of the army's supplies.",
            "announce the start of the war."
          ],
          hints: ["It is the order's account of what the service accomplished.", "It is paired with defending the flag and securing peace."]
        },
        {
          type: "digit",
          prompt: "What is the number of this General Order? Enter the number.",
          evidence: ["The order is identified by its official number in its title.", "It is Grant's order to the soldiers at the war's end.", "The number is written in the room's name for this document."],
          hints: ["Look at the document's official title.", "It is 'General Order No. ___.'", "The number is 108."],
          answer: "108"
        },
        {
          type: "sequence",
          prompt: "Put the order's ideas in the order they unfold, earliest first.",
          items: [
            "Four years of arduous service, marked by courage and fortitude.",
            "That service preserved the Union and defended the flag.",
            "Peace is secured and a nation's gratitude is given.",
            "The soldiers return to civil life as citizens."
          ],
          hints: ["The order begins by looking back on the long service.", "Achievement comes before the thanks.", "The return to civil life closes the order."]
        },
        {
          type: "mc",
          prompt: "Grant's authority to thank the soldiers rests most on —",
          options: [
            "his ethos as their commanding general who shared their service.",
            "a promise of money and land.",
            "his skill as a poet.",
            "a threat of punishment."
          ],
          hints: ["Think about why the soldiers would find his thanks convincing.", "He is the general who led them through the war."]
        }
      ]
    },

    arcade: {
      name: "Achievement or Message?",
      instruction: "General Order No. 108 both names what the soldiers accomplished and delivers a message to them. Sort each phrase by its role: is it one of the ACHIEVEMENTS the soldiers won, or part of the ORDER'S MESSAGE to them — its gratitude and their return home? Reasoning earns the points.",
      buckets: [
        { id: "achievement", label: "What the soldiers accomplished", short: "Achievement" },
        { id: "message", label: "The order's message to them", short: "Message" }
      ],
      cards: [
        { text: "Preserving the Union.", bucket: "achievement", why: "The greatest thing the soldiers' valor secured." },
        { text: "Upholding the authority of the government.", bucket: "achievement", why: "A named result of the soldiers' service." },
        { text: "Defending the national flag.", bucket: "achievement", why: "The flag they protected stands for the nation." },
        { text: "Securing peace after four years of war.", bucket: "achievement", why: "Peace is the goal the soldiers' labors won." },
        { text: "Thanks and a nation's gratitude for their service.", bucket: "message", why: "Gratitude is the order's central message." },
        { text: "Honoring the comrades who died in the war.", bucket: "message", why: "The order commemorates the fallen as part of its thanks." },
        { text: "The hope that they carry the same virtues into citizenship.", bucket: "message", why: "A charge for their future, addressed to the soldiers." },
        { text: "Sending the soldiers, their duty done, back to civil life.", bucket: "message", why: "The order's message dismisses them home." }
      ],
      followup: "The order names achievements and then turns them into a message of thanks and a return home. What does joining accomplishment with gratitude suggest about how Grant wants the soldiers to remember their service?"
    },

    analysis: {
      mcq: [
        {
          q: "The main purpose of General Order No. 108 is to —",
          options: [
            "thank and dismiss the soldiers at the end of the war.",
            "announce the start of a new campaign.",
            "punish soldiers for misconduct.",
            "request more supplies from Congress."
          ],
          why: "The order gives thanks to the soldiers and marks their return to civil life."
        },
        {
          q: "Grant's praise of the soldiers' 'courage and fortitude' mainly honors —",
          options: [
            "endurance and bravery across four years of hard service.",
            "wealth gained during the war.",
            "a single lucky battle.",
            "skill at avoiding all danger."
          ],
          why: "'Fortitude' names strength endured over a long time, not one brave moment."
        },
        {
          q: "The order lists preserving the Union, upholding the government, and defending the flag. This list works to —",
          options: [
            "use parallelism to weigh the soldiers' achievements.",
            "describe the enemy's plans.",
            "list the army's daily chores.",
            "close the order with a joke."
          ],
          why: "The balanced series of achievements is an example of parallelism giving them weight."
        },
        {
          q: "Grant's thanks are convincing largely because of his ethos, meaning —",
          options: [
            "his authority as the commanding general who shared the soldiers' service.",
            "his fame as a novelist.",
            "a reward he promises each soldier.",
            "the threat behind his words."
          ],
          why: "Ethos is the appeal to a speaker's credibility; Grant led the very soldiers he thanks."
        },
        {
          q: "The order ends by sending the soldiers back to civil life. This ending marks —",
          options: [
            "the turning point from war to peace and from soldier to citizen.",
            "the beginning of another war.",
            "a punishment for the army.",
            "the surrender of the United States."
          ],
          why: "The close moves the soldiers from wartime service to peacetime citizenship."
        }
      ],
      short: [
        "Choose one part of the Soldier's Table. Explain what it shows and what it reveals about the order's purpose.",
        "The order names achievements and then gives thanks for them. Explain what joining accomplishment with gratitude suggests about how Grant wants the soldiers to remember their service.",
        "Explain how Grant's ethos — his authority as the soldiers' commander — makes his thanks convincing. Use one detail from the order."
      ],
      paragraph: "Write an evidence-based paragraph. How does General Order No. 108 use the rhetoric of gratitude and commemoration to honor the soldiers and mark the end of the war? Make a claim and support it with specific details from the order.",
      aceReflection: "Articulate what the order suggests about honoring service in your own words. Connect two of its parts that develop that idea. Extend it to another text or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Honoring Service, Marking a Turning Point",
      prompt: "General Order No. 108 honors people's service and marks a turning point — the end of the war and the return home. Choose another speech, letter, ceremony, or text that does the same thing (thanking people for what they did and marking a passage from one time to another). Explain the connection with evidence: what service is honored, how the turning point is marked, and where the comparison starts to break down.",
      format: "A short evidence-based comparison connecting the order's honoring-of-service technique to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how General Order No. 108 uses the rhetoric of gratitude to thank soldiers at the end of the war. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the term [word] as it is used in studying General Order No. 108. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [part one] connects to [part two] in General Order No. 108 because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with details from the order." },
      { title: "Evidence prompt", text: "Here is my claim about General Order No. 108: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect General Order No. 108's honoring-of-service technique to another text: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of General Order No. 108 for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of General Order No. 108 (Ulysses S. Grant, June 2, 1865) as a formal military order — a study of genre, ethos, commemoration, and the rhetoric of gratitude at the end of the Civil War. The document is a public-domain U.S. government work, so it can be referenced directly and this room reproduces no copyrighted edition. It is presented as literature and rhetoric in a neutral, academic frame, consistent with its inclusion on the Texas required literary-works list. Every student response stays on the device.",
      reviewNotes: [
        "General Order No. 108 appears on the Texas required literary-works lists adopted in 2026 under 19 TAC §110.30 (Grade 6); implementation is scheduled no earlier than the 2030–2031 school year. Confirm placement against your district's current adoption year.",
        "The document is a public-domain U.S. government work (1865), so it satisfies the identical-text requirement and may be used directly. This room still paraphrases and quotes only brief public-domain phrases.",
        "Teach as rhetoric and literature. Present the order's genre, ethos, commemoration, and formal address academically; note that it concerns soldiers and war, and follow your district's policy and community expectations.",
        "Details here were fact-checked against the order's anchors (the formal address 'To the Soldiers of the Armies of the United States'; four years of arduous service with 'unsurpassed courage and fortitude'; preserving the Union and upholding the government; defending the national flag; securing peace; a nation's gratitude and the honoring of fallen comrades; the return to civil life). Longer passages are paraphrased, not reproduced.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the Grade 6 ELAR TEKS (19 TAC Ch. 110) strands on author's purpose, rhetorical devices, tone, and theme — especially ethos, parallelism, and the features of an informational and persuasive text. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.6.1", "RI.6.2", "RI.6.6", "RI.6.8", "W.6.1", "SL.6.1", "L.6.5"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
