/* PlotPoint — In the Time of the Butterflies (Julia Alvarez).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; details were verified against the novel and the
   documented history of the Mirabal sisters, and are used only to build original,
   transformative analysis. Standards are good-faith Common Core alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "butterflies",
  storageKey: "plotpoint.butterflies.v1",

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
    "enter.readListen": "Read & Listen",
    "enter.readListenTitle": "Get the text",
    "enter.readListenNote": "This is a copyrighted novel; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for In the Time of the Butterflies",
    "vocab.intro": "{n} terms that unlock the novel. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Hidden Resistance Cache",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the novel",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Code of the Butterflies",
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
    "arcade.title": "History or Invention?",
    "arcade.default": "Sort each statement by whether it is documented history or Alvarez's invention.",
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
    "extend.title": "Voices of Resistance",
    "extend.format": "Format",
    "extend.evidence": "The idea from the novel I am building on",
    "extend.transfers": "What transfers to a modern situation",
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
    "print.item.relic": "Resistance Cache evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Voices-of-resistance organizer",
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
    "path.complete": "Complete Case", "path.complete.time": "60–90 minutes / multiple periods",
    "path.complete.body": "Vocabulary, Relic Room, breakout, arcade, analysis, extend task, ACE reflection."
  },

  content: {
    meta: {
      title: "In the Time of the Butterflies",
      author: "Julia Alvarez",
      grades: "Grades 9–12",
      genre: "Historical fiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the novel (print, e-book, or licensed audiobook). This activity does not reproduce or replace the book.",
      copyright: "In the Time of the Butterflies is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The novel dramatizes life under a dictatorship: political repression, imprisonment and torture, sexual threat and harassment, and the assassination of three of the sisters. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to In the Time of the Butterflies by Julia Alvarez. Students need lawful access to the novel. The activity does not reproduce or replace the book. It is not affiliated with or endorsed by the author or publisher. Original activity content is licensed under CC BY-NC 4.0. In the Time of the Butterflies, its characters, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking In the Time of the Butterflies — four butterflies over a Caribbean mountain road at dusk."
    },
    hook: "Four sisters grow up under a dictator's rule in the Dominican Republic. Three of them join a secret movement against him — under the code name 'Las Mariposas,' the Butterflies — and are murdered for it. The fourth survives to remember. Julia Alvarez turns their real story into four unforgettable voices.",
    goals: [
      "Understand the novel as historical fiction based on the real Mirabal sisters and the Trujillo dictatorship.",
      "Analyze how Alvarez tells the story through the four sisters' alternating voices, framed by Dedé's memory.",
      "Examine what drives ordinary people to resist an unjust and dangerous regime.",
      "Distinguish documented history from Alvarez's invention, and connect the sisters' courage to the present."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of historical fiction based on real people.",
        "Discuss: What makes an ordinary person decide to risk everything to resist injustice?"
      ],
      during: [
        "Use the Resistance Cache to slow down and read key moments and objects closely.",
        "Track how each sister's voice — Patria, Dedé, Minerva, María Teresa — sees the same events differently."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect the sisters' resistance to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why the sisters are called 'the Butterflies.' Include one detail from the novel that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two of the sisters' voices (for example, Minerva's and Dedé's). Explain how comparing how they respond to danger deepens your understanding of a theme." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the novel's idea of courage under an unjust system to a modern situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "dictatorship", def: "A government in which one ruler or small group holds total power, usually by force.", example: "A country where one man controls the army, courts, and press.", nonexample: "A country where leaders are freely elected and can be voted out.", context: "The sisters grow up under a decades-long dictatorship." },
      { term: "regime", def: "A government in power, especially an authoritarian one.", example: "The officials, soldiers, and spies who enforce a dictator's rule.", nonexample: "A neighborhood book club.", context: "The regime punishes anyone who opposes it." },
      { term: "resistance", def: "Organized opposition to those in power, often secret and dangerous.", example: "Meeting in secret to plan against a dictator.", nonexample: "Publicly cheering for the government.", context: "Three of the sisters join the resistance." },
      { term: "clandestine", def: "Kept secret, especially because it is not allowed.", example: "A hidden meeting the regime must never learn about.", nonexample: "A public celebration in the town square.", context: "Resistance work has to be clandestine to survive." },
      { term: "oppression", def: "Cruel or unjust use of power to keep people down.", example: "Jailing people for speaking against the ruler.", nonexample: "Protecting everyone's right to speak freely.", context: "The novel shows daily life under political oppression." },
      { term: "martyr", def: "A person who suffers or dies for a cause or belief.", example: "Someone killed for opposing a dictator, later honored by others.", nonexample: "Someone who quietly avoids all risk.", context: "The murdered sisters become martyrs and symbols." },
      { term: "testimony", def: "A firsthand account of what someone witnessed or lived through.", example: "A survivor telling what really happened.", nonexample: "A made-up rumor with no source.", context: "Dedé's memory becomes a testimony to her sisters." },
      { term: "perspective", def: "The particular point of view from which a story is told.", example: "The same event told by four different sisters.", nonexample: "One official version everyone must repeat.", context: "Alvarez gives each sister her own perspective." },
      { term: "historical fiction", def: "An invented story built on real people and events from the past.", example: "Imagined scenes and dialogue for real historical figures.", nonexample: "A textbook of only verified facts.", context: "The novel is historical fiction rooted in the Mirabals' real lives." }
    ],

    relic: {
      name: "The Hidden Resistance Cache",
      intro: "Seven instructional reconstructions of people, objects, and moments from the novel — teaching recreations, not artwork from the book. Investigate what each is, its role in the novel, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "four-sisters", name: "The Four Sisters", image: "images/four-sisters.webp",
          clues: ["The novel follows one family of four daughters.", "Their names are Patria, Dedé, Minerva, and María Teresa.", "Each sister narrates parts of the story in her own voice."],
          identify: { q: "Who are the four sisters?", choices: ["Patria, Dedé, Minerva, and María Teresa Mirabal", "Four unrelated women", "Four soldiers", "The dictator's daughters"] },
          purpose: { q: "What is their role in the novel?", choices: ["They are the four narrators whose alternating voices tell the story", "They are minor background characters", "They rule the country", "They appear only at the end"] },
          significance: { q: "What does using four voices reveal?", choices: ["That the same history looks different depending on who lives it", "That only one sister matters", "That the sisters agree on everything", "That the story has no narrator"] },
          reveals: "That Alvarez restores four distinct human beings behind a famous historical symbol.",
          conceals: "How much of each inner voice is Alvarez's careful imagination.",
          ace: "Articulate who the sisters are; connect the four voices to the theme of perspective; extend it to why hearing several viewpoints changes how we understand an event."
        },
        {
          id: "code-name", name: "The Code Name 'Las Mariposas'", image: "images/code-name.webp",
          clues: ["The sisters in the resistance used a secret name.", "In Spanish it is 'Las Mariposas.'", "In English, that means 'the Butterflies' — the novel's title."],
          identify: { q: "What is 'Las Mariposas'?", choices: ["The sisters' code name in the resistance — 'the Butterflies'", "The name of the dictator", "A prison", "A city"] },
          purpose: { q: "Why did they use a code name?", choices: ["Secrecy was essential to survive resistance work under the regime", "To sound poetic only", "To hide from their family", "Because names were banned"] },
          significance: { q: "What does the butterfly image come to mean?", choices: ["Fragile beauty and courage that outlast those who tried to crush them", "That the sisters were weak", "That the resistance was a joke", "That butterflies caused the conflict"] },
          reveals: "How a secret code name became a lasting symbol of courage.",
          conceals: "The everyday fear behind the beautiful name.",
          ace: "Articulate what the code name is; connect the butterfly symbol to the sisters' courage; extend it to how a symbol can outlive the people it stands for."
        },
        {
          id: "jefe-portrait", name: "El Jefe's Portrait", image: "images/jefe-portrait.webp",
          clues: ["Families were expected to display the dictator's picture at home.", "In the novel he is called 'El Jefe' — the Chief.", "His real name is Rafael Trujillo, ruler of the Dominican Republic."],
          identify: { q: "Whose portrait hangs in homes in the novel?", choices: ["Rafael Trujillo, the dictator, called 'El Jefe'", "A saint", "The sisters' father", "A foreign king"] },
          purpose: { q: "Why require his portrait in every home?", choices: ["To make the dictator's power feel total and inescapable", "To decorate the house", "To honor a hero the people freely chose", "To teach art"] },
          significance: { q: "What does the required portrait reveal?", choices: ["How a dictatorship reaches into private life and demands loyalty", "That Trujillo was harmless", "That people admired him freely", "That portraits were rare"] },
          reveals: "How total the regime's control over daily life could be.",
          conceals: "The fear that enforced that loyalty behind closed doors.",
          ace: "Articulate what the portrait requirement shows; connect it to the theme of total control; extend it to how symbols can be used to demand obedience."
        },
        {
          id: "law-license", name: "Minerva's Denied Law License", image: "images/law-license.webp",
          clues: ["Minerva is brilliant and studies law.", "She earns her degree despite the regime's hostility.", "In the end she is blocked from actually practicing law."],
          identify: { q: "What happens with Minerva and the law?", choices: ["She earns a law degree but is denied the license to practice", "She becomes a judge", "She refuses to study", "She never attends school"] },
          purpose: { q: "What is its role in the novel?", choices: ["It shows the regime punishing Minerva's independence and defiance", "It shows the government was fair", "It proves Minerva was unqualified", "It has nothing to do with politics"] },
          significance: { q: "What does the denied license reveal?", choices: ["A dictatorship can crush talent and ambition to punish resistance", "That Minerva gave up easily", "That the law protected everyone equally", "That education did not matter to her"] },
          reveals: "How the regime retaliated against those who would not submit.",
          conceals: "The private cost to Minerva of years of study turned to nothing.",
          ace: "Articulate what happens to Minerva's license; connect it to the regime's need for control; extend it to how systems can punish people for independence."
        },
        {
          id: "diary", name: "María Teresa's Diary", image: "images/diary.webp",
          clues: ["The youngest sister keeps a diary.", "Parts of the novel are written as her diary entries.", "Through it we watch her grow from a girl into a member of the resistance."],
          identify: { q: "Whose diary appears in the novel?", choices: ["María Teresa's — the youngest sister", "The dictator's", "Dedé's husband's", "A soldier's"] },
          purpose: { q: "What is the diary's role?", choices: ["It lets the reader follow María Teresa's inner growth in her own words", "It records only the weather", "It belongs to Trujillo", "It is a legal document"] },
          significance: { q: "What does the diary form reveal?", choices: ["How a young, ordinary girl is drawn step by step into a dangerous cause", "That nothing changes her", "That she was never afraid", "That diaries are unimportant"] },
          reveals: "The intimate, growing voice of the youngest sister.",
          conceals: "How much of the diary's wording is Alvarez's invention.",
          ace: "Articulate whose diary this is; connect the diary form to character growth; extend it to how a personal record can show change over time."
        },
        {
          id: "prison", name: "The Prison at La Victoria", image: "images/prison.webp",
          clues: ["For their resistance work, sisters are arrested.", "Minerva and María Teresa are held in prison.", "The prison, La Victoria, becomes a place of suffering and endurance."],
          identify: { q: "What is La Victoria in the novel?", choices: ["The prison where Minerva and María Teresa are held", "The sisters' school", "A resistance safe house", "A church"] },
          purpose: { q: "What is its role in the story?", choices: ["It shows the price the sisters pay for resisting the regime", "It shows the regime was gentle", "It is where the sisters relax", "It has no importance"] },
          significance: { q: "What does the prison reveal?", choices: ["The courage it takes to keep faith while being punished for it", "That resistance had no consequences", "That the sisters were criminals", "That prison changed nothing"] },
          reveals: "The real, physical cost of standing against the dictatorship.",
          conceals: "The full brutality that the novel handles with care.",
          ace: "Articulate what La Victoria is; connect imprisonment to the cost of resistance; extend it to why some people keep resisting even when punished."
        },
        {
          id: "road", name: "The Lonely Road (November 25, 1960)", image: "images/road.webp",
          clues: ["Three of the sisters are returning from visiting the prison.", "On a mountain road, they are ambushed and murdered.", "The date, November 25, 1960, becomes historically important."],
          identify: { q: "What happens on the road?", choices: ["Three of the sisters are assassinated on November 25, 1960", "The sisters escape abroad", "The dictator is overthrown", "Nothing of importance"] },
          purpose: { q: "What is its role in the novel?", choices: ["It is the tragedy the whole novel moves toward and remembers", "It is a happy ending", "It is a minor scene", "It never really happens"] },
          significance: { q: "Why does this date still matter?", choices: ["It is now marked worldwide as a day against violence toward women, honoring the sisters", "It is forgotten", "It ended all dictatorships", "It was an accident"] },
          reveals: "How a private tragedy became a lasting public symbol — and Dedé the survivor who tells it.",
          conceals: "The grief Dedé carries as the sister left to remember.",
          ace: "Articulate what happens on the road; connect the sisters' deaths to their legacy; extend it to how remembering a tragedy can become a form of resistance."
        }
      ]
    },

    ctob: {
      name: "Code of the Butterflies",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many Mirabal sisters does the novel follow? Enter the number.",
          evidence: ["The story is a family story of daughters.", "Their names are Patria, Dedé, Minerva, and María Teresa.", "Count the sisters."],
          hints: ["Patria, Dedé, Minerva, and María Teresa.", "Two plus two.", "There are 4 sisters."],
          answer: "4"
        },
        {
          type: "mc",
          prompt: "Whom do the sisters resist in the novel?",
          options: [
            "Rafael Trujillo, the dictator known as 'El Jefe.'",
            "A foreign invading army.",
            "Their own father.",
            "A rival school."
          ],
          hints: ["He is the ruler whose portrait hangs in every home.", "Which option names the dictator?"]
        },
        {
          type: "word",
          prompt: "In the resistance, the sisters were known by the code name 'Las ______' (Spanish for the butterflies). (one word)",
          evidence: ["The sisters used a secret name in the underground.", "It is the source of the novel's English title, 'the Butterflies.'", "In Spanish the word begins with 'Mari…'."],
          hints: ["It is the Spanish word for butterflies.", "Mari…", "The code name is Mariposas."],
          answer: "Mariposas"
        },
        {
          type: "sequence",
          prompt: "Put the arc of the sisters' story in order, earliest first.",
          items: [
            "The sisters grow up under Trujillo's long dictatorship.",
            "Minerva and others are drawn into the secret resistance.",
            "Members of the family are arrested and imprisoned for opposing the regime.",
            "Three of the sisters are murdered returning from the prison on November 25, 1960."
          ],
          hints: ["It begins with childhood under the dictatorship.", "Resistance comes before the arrests it leads to.", "The assassination is the tragedy at the end."]
        },
        {
          type: "mc",
          prompt: "Which sister survives and, years later, tells the family's story?",
          options: [
            "Dedé.",
            "Minerva.",
            "Patria.",
            "María Teresa."
          ],
          hints: ["She is the one sister not murdered on the road.", "Which name is the surviving narrator?"]
        },
        {
          type: "word",
          prompt: "Because Alvarez builds an invented story on the real Mirabal sisters, the novel's genre is historical ______. (one word)",
          evidence: ["The Mirabal sisters and Trujillo were real.", "The scenes, dialogue, and inner thoughts are imagined.", "Invented stories set among real history are called historical ______."],
          hints: ["The opposite of nonfiction.", "It begins with 'fic…'.", "The word is fiction."],
          answer: "fiction"
        }
      ]
    },

    arcade: {
      name: "History or Invention?",
      instruction: "The novel weaves documented history together with Alvarez's imagination. Sort each statement: is it REAL HISTORY (a documented fact about the Mirabal sisters and Trujillo's Dominican Republic) or ALVAREZ'S INVENTION (something the novelist imagined to tell the story)? Reasoning earns the points.",
      buckets: [
        { id: "history", label: "Real history", short: "History" },
        { id: "invention", label: "Alvarez's invention", short: "Invention" }
      ],
      cards: [
        { text: "The real Mirabal sisters opposed the dictator Rafael Trujillo.", bucket: "history", why: "A documented historical fact behind the novel." },
        { text: "Three of the sisters were assassinated on November 25, 1960.", bucket: "history", why: "A true, dated historical event." },
        { text: "Trujillo ruled the Dominican Republic as a dictator for about three decades.", bucket: "history", why: "Documented history of the era." },
        { text: "November 25 is now an international day against violence toward women, honoring the sisters.", bucket: "history", why: "A real, ongoing commemoration inspired by the Mirabals." },
        { text: "The sisters' private thoughts and conversations as written in the novel.", bucket: "invention", why: "Their inner voices are Alvarez's imaginative reconstruction." },
        { text: "María Teresa's diary entries, composed word for word by Alvarez.", bucket: "invention", why: "The diary form and its wording are the novelist's invention." },
        { text: "The specific 1994 scene in which Dedé is interviewed by a visiting woman.", bucket: "invention", why: "This framing scene is a fictional device Alvarez created." },
        { text: "The detailed personalities and dialogue Alvarez gives each sister.", bucket: "invention", why: "The characterization is imagined, though rooted in real lives." }
      ],
      followup: "Why might Alvarez turn documented history into a novel of four voices? What can fiction show about the Mirabal sisters that a list of facts cannot?"
    },

    analysis: {
      mcq: [
        {
          q: "In the Time of the Butterflies is best described as —",
          options: [
            "historical fiction based on the real Mirabal sisters and the Trujillo dictatorship.",
            "a fantasy set on another planet.",
            "a straightforward history textbook.",
            "a collection of unrelated short stories."
          ],
          why: "Alvarez builds an imagined novel on the documented lives of the Mirabal sisters."
        },
        {
          q: "The novel is told mainly through —",
          options: [
            "the alternating voices of the four sisters, framed by Dedé's memory.",
            "a single narrator who never changes.",
            "the dictator's point of view.",
            "newspaper headlines only."
          ],
          why: "Each sister narrates, and Dedé, the survivor, frames the story from the present."
        },
        {
          q: "'Las Mariposas' (the Butterflies) refers to —",
          options: [
            "the sisters' code name in the resistance.",
            "a species Minerva studied.",
            "the dictator's palace.",
            "a children's game."
          ],
          why: "The sisters used the code name in their underground work; it becomes the novel's central symbol."
        },
        {
          q: "Dedé's role in the novel is —",
          options: [
            "the surviving sister who remembers and passes on the family's story.",
            "the leader of the resistance.",
            "a government official.",
            "a character who never appears."
          ],
          why: "Dedé lives, and her act of remembering frames and preserves the others' story."
        },
        {
          q: "By novelizing this history, Alvarez most importantly helps readers —",
          options: [
            "experience the sisters as full human beings, not just names or symbols.",
            "forget the real events.",
            "learn to overthrow a government.",
            "avoid thinking about the past."
          ],
          why: "The four intimate voices restore the humanity behind a famous historical symbol."
        }
      ],
      short: [
        "Choose one artifact from the Resistance Cache. Explain what it is and what it reveals about the novel's meaning.",
        "Alvarez tells the story through four different sisters. Choose two and explain how their different responses to danger deepen the novel.",
        "Why might Alvarez frame the whole novel through Dedé, the survivor, remembering? What does that choice add?"
      ],
      paragraph: "Write an evidence-based paragraph. Alvarez could have written a history of the Mirabal sisters, but she wrote a novel of four voices instead. What does the fictional form let her show that a history could not? Support your claim with specific details.",
      aceReflection: "Articulate the novel's central idea about courage and resistance in your own words. Connect two sisters' voices that develop it. Extend it to the present, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Voices of Resistance",
      prompt: "Alvarez shows ordinary sisters choosing to resist an unjust and dangerous regime. Choose a real example — historical or contemporary — of people standing up to injustice or oppression. Explain the connection to the novel with evidence: what drives people to resist, what it costs them, and how they are remembered.",
      format: "A short evidence-based comparison connecting the sisters' resistance to a real example of standing up to injustice, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why the Mirabal sisters are called 'the Butterflies' in In the Time of the Butterflies. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in In the Time of the Butterflies. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [sister one]'s voice connects to [sister two]'s in In the Time of the Butterflies because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about In the Time of the Butterflies: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the sisters' resistance to a modern example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of In the Time of the Butterflies for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to In the Time of the Butterflies. It supports close reading of Alvarez's four-voice structure, the Mirabal sisters' resistance to the Trujillo dictatorship, and the relationship between documented history and fiction. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The novel is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text.",
        "Mature content: political repression, imprisonment and torture, sexual threat, and the assassination of three sisters. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the novel and documented history (the four sisters Patria, Dedé, Minerva, and María Teresa Mirabal; the code name 'Las Mariposas'; the dictator Rafael Trujillo, 'El Jefe'; Minerva's law degree and denied license; María Teresa's diary sections; imprisonment at La Victoria; the assassination of three sisters on November 25, 1960; Dedé as the surviving narrator in the novel's frame). Confirm against your class edition, as framing and spellings vary.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I–IV ELAR TEKS (19 TAC Ch. 110) strands on multiple perspectives, author's purpose, historical and cultural context, and response to literature, with cross-curricular ties to world history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.9-10.1", "RL.9-10.2", "RL.9-10.3", "RL.9-10.6", "RL.11-12.1", "W.9-10.1", "SL.9-10.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
