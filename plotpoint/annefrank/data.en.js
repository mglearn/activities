/* PlotPoint — The Diary of a Young Girl (Anne Frank).  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   COPYRIGHTED WORK — independent educational companion. This room reproduces NO
   text and invents NO quotations; details were verified against the diary and the
   documented history of Anne Frank, and are used only to build original,
   transformative analysis. Standards are good-faith Common Core alignment;
   TEKS/ELPS flagged "Needs review." Relic artifacts are clearly labeled
   instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "annefrank",
  storageKey: "plotpoint.annefrank.v1",

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
    "enter.readListenNote": "This is a copyrighted book; students need lawful access to their own copy. This activity does not link to or reproduce the text.",
    "enter.read": "Find the book",
    "enter.listen": "Audiobook",
    "enter.readAloud": "Use your class's licensed copy or audiobook.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Diary of a Young Girl",
    "vocab.intro": "{n} terms that unlock the diary. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Secret Annex",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — what is this?",
    "relic.q.purpose": "Explain its role in the diary",
    "relic.q.significance": "What it reveals about the story's meaning",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate what this artifact shows, connect it to a theme, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "Behind the Bookcase",
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
    "arcade.title": "Ordinary Life or Extraordinary Danger?",
    "arcade.default": "Sort each detail by what it shows about Anne's life.",
    "arcade.drophere": "Drop cards here — or use the buttons on each card.",
    "arcade.moveto": "Move to {b}",
    "arcade.placedn": "{n} of {total} cards sorted",
    "arcade.check": "Check my reasoning", "arcade.replay": "Play again",
    "arcade.placeAll": "Sort every card before checking.",
    "arcade.result": "{c} of {total} sorted with sound reasoning.",
    "arcade.cards": "Details to sort",
    "arcade.followup": "Discuss / write",

    "analysis.eyebrow": "Analyze the Text",
    "analysis.title": "Literary & Historical Analysis",
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
    "extend.title": "Bearing Witness",
    "extend.format": "Format",
    "extend.evidence": "The idea from the diary I am building on",
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
    "print.item.relic": "Secret Annex evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Bearing-witness organizer",
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
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      grades: "Grades 7–10",
      genre: "Diary · Memoir · Nonfiction",
      time: "60–90 minutes",
      spoiler: "Partial spoilers",
      rights: "Copyrighted",
      textAccess: "Students need lawful access to their own copy of the book (print, e-book, or licensed audiobook). This activity does not reproduce or replace the diary.",
      copyright: "The Diary of a Young Girl is under copyright. This is an independent educational companion; it quotes no passages and links to no copy of the text.",
      contentNote: "The diary is a firsthand account of hiding from Nazi persecution during the Holocaust. It includes fear, loss, antisemitism, and (in unabridged editions) a teenager's frank reflections on her body and feelings. Preview carefully, prepare students, and align with local policy.",
      disclaimer: "This activity is an independent educational companion to The Diary of a Young Girl by Anne Frank. Students need lawful access to the book. The activity does not reproduce or replace the diary. It is not affiliated with or endorsed by the Anne Frank Fonds, the author's estate, or the publisher. Original activity content is licensed under CC BY 4.0. The Diary of a Young Girl, its text, and any quoted passages remain the property of their respective copyright owner and are excluded from this license.",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Diary of a Young Girl — a closed diary on a small desk by an attic window with a swinging bookcase nearby."
    },
    hook: "For her thirteenth birthday, a Jewish girl in Amsterdam is given a diary. Weeks later, to escape the Nazis, her family disappears into a few hidden rooms behind a swinging bookcase. For two years, Anne Frank writes down her fears, quarrels, hopes, and dreams — leaving behind one of the most powerful firsthand records of the Holocaust.",
    goals: [
      "Understand the diary as a real, firsthand primary source written during the Holocaust.",
      "Track the world of the Secret Annex: who hid there, how they lived, and the constant danger.",
      "Analyze Anne as both an ordinary teenager and a remarkable witness to history.",
      "Examine why a personal diary can teach history that facts and numbers alone cannot — and connect it to bearing witness today."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the historical setting: the Nazi occupation and the Holocaust.",
        "Discuss: Why might a person in danger keep a diary? What can a diary preserve that nothing else can?"
      ],
      during: [
        "Use the Secret Annex to slow down and read key places, people, and moments closely.",
        "Track how Anne changes over two years of hiding — as a writer, a daughter, and a young woman."
      ],
      after: [
        "Run the breakout, arcade, and analysis to assemble an evidence-based reading.",
        "Complete the Extend task to connect Anne's act of witness to the present."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words why Anne addresses her diary to 'Kitty.' Include one detail that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two sides of Anne's life in hiding (for example, an ordinary teenage worry and an extraordinary danger). Explain how holding both together deepens the diary's meaning." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the idea of 'bearing witness' to a modern situation. Explain what transfers from Anne's diary, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "diary", def: "A personal daily record of one's own experiences and feelings.", example: "Anne writing each day to 'Kitty.'", nonexample: "A published novel about invented characters.", context: "The book is Anne's own diary, written in hiding." },
      { term: "primary source", def: "A firsthand record made by someone who witnessed or lived through events.", example: "A diary written during the events it describes.", nonexample: "A textbook written decades later.", context: "Anne's diary is a primary source about the Holocaust." },
      { term: "persecution", def: "Cruel treatment of a group because of who they are.", example: "Targeting people for their religion or ethnicity.", nonexample: "Treating all people fairly and equally.", context: "The Franks hide to escape Nazi persecution." },
      { term: "antisemitism", def: "Hostility toward or discrimination against Jewish people.", example: "Laws and violence aimed at Jews.", nonexample: "Respect for people of every religion.", context: "Antisemitism forces Anne's family into hiding." },
      { term: "Holocaust", def: "The Nazi genocide of six million Jews and other targeted groups during World War II.", example: "The mass persecution and murder Anne's family flees.", nonexample: "A single ordinary crime.", context: "The diary is one of the most read firsthand accounts of the Holocaust." },
      { term: "occupation", def: "The control of a country by a foreign military force.", example: "Nazi Germany controlling the Netherlands.", nonexample: "A nation governing itself freely.", context: "The Nazi occupation of the Netherlands endangers the Franks." },
      { term: "confidant", def: "A trusted person you share private thoughts with.", example: "The imaginary friend Anne calls 'Kitty.'", nonexample: "A stranger you never speak to.", context: "Anne makes her diary her closest confidant." },
      { term: "testimony", def: "A firsthand account of what someone witnessed or lived through.", example: "Anne recording daily life in hiding.", nonexample: "A rumor with no source.", context: "The diary stands as testimony to what happened." },
      { term: "resilience", def: "The ability to keep hope and strength through hardship.", example: "Anne finding hope even in fear and confinement.", nonexample: "Giving up at the first difficulty.", context: "Anne's resilience shines through the diary's darkest days." }
    ],

    relic: {
      name: "The Secret Annex",
      intro: "Seven instructional reconstructions of places, objects, and moments from the diary — teaching recreations, not artwork from the book. Investigate what each is, its role in the diary, and what it reveals. (This companion reproduces none of the text.)",
      artifacts: [
        {
          id: "diary", name: "The Diary", image: "images/diary.webp",
          clues: ["Anne receives this as a gift on her thirteenth birthday.", "She writes in it almost like writing letters to a friend.", "She names her imaginary reader 'Kitty.'"],
          identify: { q: "What is this object?", choices: ["Anne's diary, which she addresses to 'Kitty'", "A schoolbook", "A ration card", "A photo album"] },
          purpose: { q: "What is its role?", choices: ["It is where Anne records her whole experience of hiding", "It is used to send messages outside", "It lists supplies", "It is a legal document"] },
          significance: { q: "What does writing to 'Kitty' reveal?", choices: ["Anne's deep need for a trusted friend and a private voice", "That Kitty is a real person in the Annex", "That Anne dislikes writing", "That the diary is fiction"] },
          reveals: "How the diary became Anne's closest confidant in confinement.",
          conceals: "How much editing shaped the versions readers know today.",
          ace: "Articulate what the diary is; connect it to Anne's need for a confidant; extend it to why people write down what they cannot say aloud."
        },
        {
          id: "bookcase", name: "The Swinging Bookcase", image: "images/bookcase.webp",
          clues: ["The entrance to the hiding place had to be concealed.", "A movable bookcase was built to cover the doorway.", "Behind it lay the hidden rooms."],
          identify: { q: "What does the swinging bookcase do?", choices: ["It hides the entrance to the Secret Annex", "It stores the family's books only", "It blocks a window", "It is a decoration"] },
          purpose: { q: "What is its role in the story?", choices: ["It keeps the hidden rooms secret from anyone who enters the building", "It lets the family escape quickly", "It signals the helpers", "It has no purpose"] },
          significance: { q: "What does the hidden door reveal?", choices: ["How completely the families had to disappear to survive", "That hiding was easy", "That the building was empty", "That no one was looking for them"] },
          reveals: "The extreme secrecy survival demanded, day after day.",
          conceals: "The constant fear of the door being discovered.",
          ace: "Articulate what the bookcase conceals; connect it to the theme of hiding to survive; extend it to what it means to live in constant secrecy."
        },
        {
          id: "wall-pictures", name: "Anne's Wall of Pictures", image: "images/wall-pictures.webp",
          clues: ["Anne decorates the wall of her small room.", "She pastes up pictures of movie stars and pretty images.", "It makes the cramped space feel more like a teenager's own."],
          identify: { q: "What is on Anne's wall?", choices: ["Pictures of movie stars and images she pasted up", "Maps of escape routes", "Nazi propaganda", "Nothing at all"] },
          purpose: { q: "Why does Anne put them up?", choices: ["To make the hiding place feel a little like an ordinary girl's room", "To send secret signals", "To cover a hole", "To insulate the wall"] },
          significance: { q: "What do the pictures reveal about Anne?", choices: ["That she is a normal teenager even in extraordinary danger", "That she cared only about fame", "That she had given up hope", "That she disliked her room"] },
          reveals: "Anne's ordinary teenage self, insisting on normal life inside hiding.",
          conceals: "How much she longed for the free life those pictures represented.",
          ace: "Articulate what the pictures are; connect them to Anne's ordinary side; extend it to how people hold on to normal life in hard times."
        },
        {
          id: "helpers", name: "The Helpers' Supplies", image: "images/helpers.webp",
          clues: ["The people in hiding could not leave to buy food.", "Trusted friends outside brought supplies and news.", "One of them, Miep, risked her life to help."],
          identify: { q: "Who kept the Annex supplied?", choices: ["Trusted helpers outside, such as Miep", "Nazi soldiers", "Other families in hiding", "No one — they grew food"] },
          purpose: { q: "What is the helpers' role?", choices: ["They risk everything to bring food, news, and hope to the hidden families", "They guard the door", "They betray the families", "They live in the Annex"] },
          significance: { q: "What do the helpers reveal?", choices: ["That ordinary people showed great courage and kindness under Nazi rule", "That hiding was safe and easy", "That no one helped", "That the war was over"] },
          reveals: "The courage of the outside helpers who made survival possible.",
          conceals: "The daily danger they faced for helping Jews.",
          ace: "Articulate what the helpers did; connect their courage to the theme of moral choice; extend it to what it means to help others at great risk."
        },
        {
          id: "peter", name: "Peter's Attic", image: "images/peter.webp",
          clues: ["Another family, the van Daans, shares the Annex.", "Their son, Peter, is a few years older than Anne.", "Over time, Anne and Peter grow close."],
          identify: { q: "Who is Peter?", choices: ["A teenage boy hiding in the Annex with his family", "One of the helpers", "Anne's brother", "A Nazi soldier"] },
          purpose: { q: "What is Peter's role in the diary?", choices: ["His growing friendship with Anne charts her feelings and coming of age", "He guards the door", "He runs the business", "He never appears"] },
          significance: { q: "What does the friendship reveal?", choices: ["That normal growing up continues even in confinement and danger", "That Anne had no feelings", "That the families never spoke", "That hiding stopped time"] },
          reveals: "Anne's coming of age — first closeness and self-discovery — inside hiding.",
          conceals: "How the pressure of confinement complicated every relationship.",
          ace: "Articulate who Peter is; connect the friendship to Anne's growing up; extend it to how relationships change under stress."
        },
        {
          id: "radio", name: "The Radio", image: "images/radio.webp",
          clues: ["The families follow the war from their hiding place.", "They gather to listen to news broadcasts.", "The reports bring both fear and hope."],
          identify: { q: "What does the radio provide?", choices: ["News of the war and the outside world", "Music for parties", "A way to call for help", "Nothing useful"] },
          purpose: { q: "What is its role in the diary?", choices: ["It ties the hidden families to the war whose outcome decides their fate", "It entertains only", "It signals the helpers", "It records Anne's voice"] },
          significance: { q: "What does listening reveal?", choices: ["How the families' survival depended on events far beyond their control", "That they ignored the war", "That the war did not matter", "That they were free to leave"] },
          reveals: "How the hidden families clung to news of a world that held their fate.",
          conceals: "The helplessness of waiting on events they could not affect.",
          ace: "Articulate what the radio brings; connect news to hope and fear; extend it to how people cope with events beyond their control."
        },
        {
          id: "empty-annex", name: "The Empty Annex", image: "images/empty-annex.webp",
          clues: ["After about two years, the hiding place is discovered.", "In August 1944, everyone in the Annex is arrested.", "Anne does not survive the war; her father, Otto, later publishes her diary."],
          identify: { q: "What happened to end the hiding?", choices: ["The Annex was discovered and everyone was arrested in 1944", "The war ended and they went home", "They moved to another city", "Nothing — they stayed hidden"] },
          purpose: { q: "What is this ending's role?", choices: ["It turns Anne's private diary into a lasting witness after the tragedy", "It is a happy conclusion", "It is a minor event", "It never happened"] },
          significance: { q: "Why does the surviving diary matter so much?", choices: ["A single true voice keeps an enormous history human and unforgettable", "Because the diary is fiction", "Because nothing was lost", "Because facts alone are enough"] },
          reveals: "How one girl's words outlived the tragedy and still speak.",
          conceals: "The full scale of loss behind Anne's individual story.",
          ace: "Articulate how the hiding ended; connect the surviving diary to the theme of memory; extend it to why preserving individual stories matters."
        }
      ]
    },

    ctob: {
      name: "Behind the Bookcase",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "digit",
          prompt: "How many people hid together in the Secret Annex? Enter the number.",
          evidence: ["Two families and one more person shared the hiding place.", "The Franks (four people), the van Daans (three people), and Mr. Dussel.", "Add them up: four plus three plus one."],
          hints: ["Two families plus one extra person.", "Four plus three plus one.", "There were 8 people."],
          answer: "8"
        },
        {
          type: "word",
          prompt: "Anne addresses her diary entries to an imaginary friend she names ______. (one word)",
          evidence: ["She writes almost like sending letters to a close friend.", "The friend is not a real person in the Annex.", "The name begins with 'Kit…'."],
          hints: ["A girl's name Anne invented.", "Kit…", "The name is Kitty."],
          answer: "Kitty"
        },
        {
          type: "mc",
          prompt: "Why do the families go into hiding?",
          options: [
            "To escape Nazi persecution of Jews during World War II.",
            "To avoid paying taxes.",
            "To hide from ordinary criminals.",
            "To take a long vacation."
          ],
          hints: ["Think about who was being targeted, and by whom.", "Which option is about Nazi persecution?"]
        },
        {
          type: "mc",
          prompt: "In which city is the Secret Annex located?",
          options: [
            "Amsterdam.",
            "Berlin.",
            "Paris.",
            "London."
          ],
          hints: ["It is in the Netherlands, under Nazi occupation.", "Which option is the Dutch city?"]
        },
        {
          type: "sequence",
          prompt: "Put the events of Anne's story in order, earliest first.",
          items: [
            "Anne receives a diary for her thirteenth birthday.",
            "Her family goes into hiding in the Secret Annex.",
            "They live hidden for about two years, supplied by helpers.",
            "In August 1944 the hiding place is discovered and everyone is arrested."
          ],
          hints: ["It begins with the birthday gift.", "The long time in hiding comes before the discovery.", "The arrest is the tragic end."]
        },
        {
          type: "word",
          prompt: "Because Anne wrote it herself, during the events, her diary is a firsthand, or primary, ______. (one word)",
          evidence: ["She lived through what she describes.", "She wrote it as it happened, not years later.", "A firsthand record used as evidence is called a primary ______."],
          hints: ["It pairs with the word 'primary.'", "It begins with 'sou…'.", "The word is source."],
          answer: "source"
        }
      ]
    },

    arcade: {
      name: "Ordinary Life or Extraordinary Danger?",
      instruction: "Part of the diary's power is that Anne is an ordinary teenager living through an extraordinary time. Sort each detail: does it show ANNE'S ORDINARY TEENAGE LIFE, or the EXTRAORDINARY DANGER of hiding from the Nazis? Reasoning earns the points.",
      buckets: [
        { id: "ordinary", label: "Ordinary teenage life", short: "Ordinary" },
        { id: "danger", label: "Extraordinary danger", short: "Danger" }
      ],
      cards: [
        { text: "Quarreling with her mother and feeling misunderstood", bucket: "ordinary", why: "A very ordinary part of being a teenager." },
        { text: "A first crush and growing close to Peter", bucket: "ordinary", why: "Ordinary coming-of-age feelings, even in hiding." },
        { text: "Pasting movie-star pictures on her bedroom wall", bucket: "ordinary", why: "A normal teenager making a space her own." },
        { text: "Dreaming of becoming a writer one day", bucket: "ordinary", why: "An ordinary hope for the future." },
        { text: "Living behind a hidden bookcase that must stay secret", bucket: "danger", why: "The extraordinary reality of hiding to survive." },
        { text: "Staying silent all day so workers below don't hear", bucket: "danger", why: "A life-or-death precaution unique to hiding." },
        { text: "Depending on helpers to smuggle in food and news", bucket: "danger", why: "Survival hinged on others risking their lives." },
        { text: "Living in constant fear of being discovered by the Nazis", bucket: "danger", why: "The extraordinary danger that shadowed every day." }
      ],
      followup: "Why does it matter that an ordinary teenage girl wrote this diary? What does seeing both sides of Anne's life help readers understand about the Holocaust?"
    },

    analysis: {
      mcq: [
        {
          q: "The Diary of a Young Girl is best described as —",
          options: [
            "the real, firsthand diary of Anne Frank — a primary source about the Holocaust.",
            "a novel Anne invented about made-up characters.",
            "a history textbook written after the war.",
            "a collection of poems."
          ],
          why: "Anne wrote it herself, during the events, making it a firsthand primary source."
        },
        {
          q: "The families go into hiding in order to —",
          options: [
            "escape Nazi persecution of Jews during World War II.",
            "avoid an ordinary crime.",
            "take a holiday.",
            "start a business."
          ],
          why: "The Nazi occupation and antisemitism forced Jewish families like the Franks into hiding."
        },
        {
          q: "Anne addresses her diary to 'Kitty' because —",
          options: [
            "she wants a trusted friend and a private voice to confide in.",
            "Kitty is another person hiding in the Annex.",
            "her teacher required it.",
            "she is writing a novel."
          ],
          why: "'Kitty' gives Anne an intimate confidant for her most private thoughts."
        },
        {
          q: "Daily life in the Secret Annex required —",
          options: [
            "silence by day, help from outside, and constant fear of discovery.",
            "freedom to come and go as they pleased.",
            "regular visits to school and shops.",
            "no precautions at all."
          ],
          why: "Survival depended on secrecy, outside helpers, and unbroken caution."
        },
        {
          q: "Much of the diary's lasting power comes from the fact that —",
          options: [
            "an ordinary girl's voice makes an enormous tragedy personal and real.",
            "it lists exact numbers and dates only.",
            "it avoids all emotion.",
            "it was written long after the war."
          ],
          why: "Anne's individual, human voice lets readers feel a history that statistics cannot convey."
        }
      ],
      short: [
        "Choose one artifact from the Secret Annex. Explain what it is and what it reveals about life in hiding.",
        "Anne is both an ordinary teenager and a witness to history. Choose one ordinary detail and one extraordinary one, and explain how holding both together deepens the diary.",
        "Why might a firsthand diary teach the history of the Holocaust in a way that facts and numbers cannot?"
      ],
      paragraph: "Write an evidence-based paragraph. Why has one teenager's diary become one of the most important books about the Holocaust? Make a claim and support it with specific details about Anne, the Annex, and her writing.",
      aceReflection: "Articulate what makes Anne's diary powerful in your own words. Connect two details — one ordinary, one extraordinary — that develop it. Extend it to bearing witness today, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "Bearing Witness",
      prompt: "Anne bears witness by writing down her daily life in hiding, preserving the truth of what happened. Choose a modern example of someone bearing witness — documenting injustice, war, disaster, or their own community's story. Explain the connection to Anne's diary with evidence: what witnessing preserves, why it matters, and how it can change readers.",
      format: "A short evidence-based comparison connecting Anne's act of witness to a modern example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning why Anne Frank addresses her diary to 'Kitty' in The Diary of a Young Girl. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Diary of a Young Girl. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Diary of a Young Girl because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Diary of a Young Girl: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect Anne's act of bearing witness to a modern example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Diary of a Young Girl for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room is an independent educational companion to The Diary of a Young Girl. It supports close reading of Anne Frank's diary as a primary source: the world of the Secret Annex, Anne as both ordinary teenager and witness to history, and why personal testimony matters. It reproduces no text, invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The book is copyrighted. This is an independent companion — students need their own lawful copy; the room links to and quotes no text. Note that several editions exist (including expanded 'definitive' editions); confirm which your class uses.",
        "Sensitive content: the Holocaust, Nazi persecution and antisemitism, fear and loss, and (in unabridged editions) a teenager's frank reflections on her body and feelings. Preview carefully, prepare students, and follow local policy.",
        "Details here were checked against the diary and well-documented history (Anne's diary given on her thirteenth birthday; the diary addressed to 'Kitty'; the Secret Annex in Amsterdam; eight people hiding — the Franks, the van Daans, and Mr. Dussel; helpers such as Miep; roughly two years in hiding; discovery and arrest in August 1944; Otto Frank as the surviving family member who published the diary). Confirm names and framing against your class edition, as the book uses pseudonyms that some editions restore to real names.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the English I–II / grade 7–10 ELAR TEKS (19 TAC Ch. 110) strands on author's purpose, primary sources, response to literature, and analysis of an informational/literary nonfiction text, with cross-curricular ties to world history. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RI.7.1", "RI.8.1", "RI.8.2", "RI.9-10.1", "RI.9-10.2", "W.8.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
