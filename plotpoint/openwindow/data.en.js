/* PlotPoint — The Open Window (Saki / H. H. Munro, 1914).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases (the closing line and
   all descriptions are described, not quoted). Standards are good-faith Common
   Core alignment; TEKS/ELPS flagged "Needs review." Relic artifacts are clearly
   labeled instructional reconstructions. Correct answer is index 0 in every
   choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "openwindow",
  storageKey: "plotpoint.openwindow.v1",

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
    "vocab.title": "Words for The Open Window",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Inside Mrs. Sappleton's Drawing Room",
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
    "ctob.title": "The Tale at Short Notice",
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
    "arcade.title": "Vera's Invention or the Truth?",
    "arcade.default": "Sort each detail by whether Vera made it up or it is actually true.",
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
    "extend.title": "The Power of a Convincing Lie",
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
    "print.item.relic": "Drawing-room evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Convincing-lie organizer",
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
      title: "The Open Window",
      author: "Saki (H. H. Munro)",
      grades: "Grades 7–9",
      genre: "Satire · Humor · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1914)",
      textAccess: "The story is very short and public domain. Use the free links below, or your class's copy.",
      copyright: "Published in 1914 in the collection Beasts and Super-Beasts, The Open Window is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A light comic tale in which a poised teenager plays an elaborate prank on a nervous, gullible visitor. No mature content; the humor turns on a harmless (if unsettling) practical joke. Suitable for middle school; preview and align with local policy.",
      gutenberg: "https://www.gutenberg.org/ebooks/269",
      audio: "https://librivox.org/beasts-and-super-beasts-by-saki/",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Open Window — a tall floor-length French window standing open onto a green autumn lawn at dusk, a quiet country drawing room, with three distant figures crossing the grass."
    },
    hook: "A nervous man named Framton Nuttel comes to the countryside for a rest cure, armed with polite letters of introduction. While he waits to meet the lady of the house, her calm fifteen-year-old niece tells him a haunting story about a tall window that is always left open — a window that will change how he sees everything that walks across the lawn.",
    goals: [
      "Understand the plot of Saki's comic tale and the prank Vera plays on Framton Nuttel.",
      "Analyze Vera as an unreliable teller who invents convincing stories 'at short notice.'",
      "Trace how the framed story-within-a-story and the gap between appearance and reality create humor.",
      "Interpret the story's playful satire of nervous manners, gullibility, and how easily a good story fools us."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of an unreliable narrator or teller.",
        "Discuss: Why do we tend to believe a story told with confidence and detail?"
      ],
      during: [
        "Use the Drawing Room artifacts to slow down and track what is true versus what Vera invents.",
        "Notice the moment the reader and Framton part ways — when do we start to suspect Vera?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to sort Vera's fiction from the story's facts.",
        "Complete the Extend task to weigh the power of a well-told lie."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Vera fools Framton Nuttel. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the details Vera includes in her tale to why Framton believes her. Explain how specific detail makes a lie convincing." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's idea about convincing lies to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "unreliable narrator", def: "A storyteller whose account cannot be fully trusted.", example: "Vera inventing a tragedy that never happened.", nonexample: "A neutral witness who reports only facts.", context: "Vera acts as a chillingly convincing unreliable teller." },
      { term: "satire", def: "Writing that uses humor to gently mock people or ideas.", example: "The story poking fun at nervous, over-polite manners.", nonexample: "A serious tragedy meant only to sadden.", context: "Saki's satire teases both Framton's nerves and easy belief." },
      { term: "self-possessed", def: "Calm, confident, and in control of oneself.", example: "Vera speaking coolly while inventing her tale.", nonexample: "Someone panicking and stammering.", context: "The self-possessed niece never loses her poise." },
      { term: "delusion", def: "A false belief held despite clear evidence.", example: "Framton thinking the men are ghosts.", nonexample: "A belief that matches the real facts.", context: "Framton assumes Mrs. Sappleton suffers a delusion of grief." },
      { term: "framed narrative", def: "A story told inside another story.", example: "Vera's invented tale set within Saki's story.", nonexample: "A single plot with no story-within-a-story.", context: "The window tale is a framed narrative within the visit." },
      { term: "situational irony", def: "When what happens is the opposite of what's expected.", example: "The 'ghosts' turn out to be perfectly alive.", nonexample: "Events unfolding exactly as predicted.", context: "The situational irony lands when the hunters return." },
      { term: "gullible", def: "Easily fooled or too quick to believe.", example: "Framton swallowing Vera's story whole.", nonexample: "A careful listener who checks the facts.", context: "The gullible guest never doubts a word she says." },
      { term: "improvise", def: "To make something up quickly, on the spot.", example: "Vera inventing a new excuse as Framton flees.", nonexample: "Reciting a speech memorized in advance.", context: "Vera can improvise a believable tale in seconds." },
      { term: "romance", def: "Here, an invented or imaginative story rather than a love story.", example: "Vera's talent for spinning a vivid, false tale.", nonexample: "A dry list of plain, true facts.", context: "The narrator calls making up 'romance' her specialty." }
    ],

    relic: {
      name: "Inside Mrs. Sappleton's Drawing Room",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "letters", name: "The Letters of Introduction", image: "images/letters.webp",
          clues: ["Framton Nuttel has come to the countryside for a nerve cure.", "His sister gave him letters of introduction to local families.", "He is making formal visits to people he has never met."],
          identify: { q: "What are the letters and why does Framton have them?", choices: ["Letters of introduction so he can visit families he does not know", "Love letters from his sister", "A doctor's prescription", "A map of the countryside"] },
          purpose: { q: "What is the letters' role in the story?", choices: ["They set up why a nervous stranger is sitting alone with Vera", "They reveal the ending", "They cure his nerves", "They warn him about Vera"] },
          significance: { q: "What does his reliance on the letters reveal?", choices: ["Framton is an anxious outsider who knows nothing about these people", "He is a longtime family friend", "He is a confident local", "He suspects a trick"] },
          reveals: "That Framton is a nervous stranger with no way to check what he is told.",
          conceals: "How completely this makes him easy to fool.",
          ace: "Articulate why Framton is visiting; connect his outsider status to his gullibility; extend it to how not knowing the facts leaves us open to a good story."
        },
        {
          id: "open-window", name: "The Open French Window", image: "images/open-window.webp",
          clues: ["A tall, floor-length French window stands open onto the lawn.", "Vera says it is kept open every evening on purpose.", "The window is the center of the story Vera tells."],
          identify: { q: "What is the open window?", choices: ["A tall floor-length window kept open onto the lawn", "A locked cellar door", "A painting on the wall", "A garden gate"] },
          purpose: { q: "What is the window's role in the story?", choices: ["It is the stage for Vera's tale and for the men's real return", "It keeps the room warm", "It is only decoration", "It is never used again"] },
          significance: { q: "Why does the open window matter so much?", choices: ["It ties Vera's invented tragedy to what Framton later sees", "It shows the family is wealthy", "It proves the story is true", "It has no meaning"] },
          reveals: "How a single real detail anchors an invented story.",
          conceals: "That the window's 'meaning' is entirely Vera's invention.",
          ace: "Articulate what the window is; connect it to Vera's tale; extend it to how one true detail can make a whole lie feel real."
        },
        {
          id: "vera-tale", name: "Vera's Invented Tragedy", image: "images/vera-tale.webp",
          clues: ["Vera says that three years ago the men went out hunting through the window.", "She claims they were lost in a treacherous bog and never returned.", "She says her aunt keeps the window open, still expecting them."],
          identify: { q: "What tragedy does Vera describe?", choices: ["That the men were lost in a bog three years ago and never came back", "That a fire destroyed the house", "That the aunt is ill", "That Framton is in danger"] },
          purpose: { q: "What is this tale's role in the story?", choices: ["It primes Framton to misread the aunt and the returning men", "It is a true family history", "It warns him to leave", "It has no effect on him"] },
          significance: { q: "What does the invented tale reveal about Vera?", choices: ["She can craft a convincing, detailed false story on the spot", "She is honestly grieving", "She dislikes stories", "She is confused about the facts"] },
          reveals: "Vera's skill at spinning a believable lie 'at short notice.'",
          conceals: "That not a word of the tragedy is true.",
          ace: "Articulate Vera's tale; connect its vivid details to why Framton believes it; extend it to how specific detail lends false stories credibility."
        },
        {
          id: "aunt", name: "Mrs. Sappleton's Cheerful Talk", image: "images/aunt.webp",
          clues: ["Mrs. Sappleton finally comes in and apologizes for being late.", "She chats brightly about her husband and brothers being out shooting.", "She says they will be back soon, muddy from the hunt."],
          identify: { q: "What does Mrs. Sappleton talk about when she enters?", choices: ["Her husband and brothers being out shooting and due back soon", "The weather turning cold", "Framton's health problems", "A funeral"] },
          purpose: { q: "What is her cheerful talk's role in the story?", choices: ["It seems, to Framton, like the delusion Vera described", "It reveals Vera lied", "It ends the visit", "It has nothing to do with the tale"] },
          significance: { q: "Why does Framton misread her cheerfulness?", choices: ["Vera's tale has convinced him the aunt is lost in grief", "She is speaking in code", "She is truly deluded", "She is warning him"] },
          reveals: "How Vera's lie makes an ordinary conversation seem tragic.",
          conceals: "That the aunt is simply expecting her living family home.",
          ace: "Articulate what the aunt says; connect it to Vera's earlier tale; extend it to how a false frame can twist the meaning of plain facts."
        },
        {
          id: "hunters", name: "The Returning Hunters", image: "images/hunters.webp",
          clues: ["At dusk three figures come walking across the lawn toward the window.", "They carry guns, and a tired brown spaniel trots at their heels.", "They are the very men Vera said had died in the bog."],
          identify: { q: "Who are the figures crossing the lawn at dusk?", choices: ["The husband and brothers, alive, returning from shooting", "Ghosts risen from the bog", "Strangers lost in the fog", "Police coming to the house"] },
          purpose: { q: "What is their return's role in the story?", choices: ["It triggers Framton's terror because he thinks they are ghosts", "It proves Vera told the truth", "It ends the shooting season", "It has no effect"] },
          significance: { q: "What does the men's living return reveal?", choices: ["Vera's whole tragedy was invented; the danger was never real", "The bog was truly deadly", "The aunt was right to grieve", "Framton was in real danger"] },
          reveals: "The situational irony — the 'ghosts' are perfectly alive.",
          conceals: "How the reader, like Framton, was set up to expect the worst.",
          ace: "Articulate who the men are; connect their return to the situational irony; extend it to how the truth can overturn a story we fully believed."
        },
        {
          id: "flight", name: "Framton's Panicked Flight", image: "images/flight.webp",
          clues: ["Believing the men are ghosts, Framton grabs his things in terror.", "He rushes out of the house without a word of explanation.", "He nearly collides with a cyclist as he flees down the road."],
          identify: { q: "How does Framton react to the returning men?", choices: ["He bolts from the house in terror, thinking they are ghosts", "He greets them warmly", "He faints in his chair", "He asks Vera for help"] },
          purpose: { q: "What is his flight's role in the story?", choices: ["It is the comic payoff of the prank Vera set up", "It saves his life", "It reveals the truth to everyone", "It ends the shooting"] },
          significance: { q: "What makes his flight funny rather than sad?", choices: ["He is fleeing a danger that exists only because of a lie", "He is truly being chased", "The men mean him harm", "Vera is in danger"] },
          reveals: "The harmless, comic result of Vera's convincing story.",
          conceals: "That the family has no idea why their guest ran off.",
          ace: "Articulate how Framton reacts; connect the fear to Vera's tale; extend it to how a false belief can drive a very real action."
        },
        {
          id: "second-lie", name: "Vera's Second Story", image: "images/second-lie.webp",
          clues: ["The puzzled family asks why the guest dashed away.", "Vera calmly invents a brand-new explanation on the spot.", "She claims Framton has a horror of dogs after once being hunted by a pack."],
          identify: { q: "What does Vera do after Framton flees?", choices: ["She invents a second false story to explain his sudden exit", "She admits she made up the tragedy", "She chases after him", "She stays silent"] },
          purpose: { q: "What is this second lie's role in the story?", choices: ["It shows Vera can improvise a believable tale instantly, again", "It reveals her earlier lie", "It ends the story sadly", "It warns the family"] },
          significance: { q: "What does the narrator mean that this is her 'specialty'?", choices: ["Inventing convincing stories on the spot is her special talent", "She specializes in the truth", "She rarely speaks", "She dislikes attention"] },
          reveals: "That Vera's gift for instant invention is the point of the story.",
          conceals: "How easily the whole family, like Framton, could be fooled too.",
          ace: "Articulate Vera's second lie; connect it to the closing idea of 'romance at short notice'; extend it to how a skilled storyteller can bend any situation."
        }
      ]
    },

    ctob: {
      name: "The Tale at Short Notice",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The niece who invents the tale — and the story's central trickster — is named ______. (one word)",
          evidence: ["She is the self-possessed fifteen-year-old who entertains the guest.", "She calmly makes up the tragedy about the window.", "Her name begins with 'Ver…'."],
          hints: ["The young niece who tells the story.", "Ver…", "The word is Vera."],
          answer: "Vera"
        },
        {
          type: "mc",
          prompt: "Why has Framton Nuttel come to the countryside?",
          options: [
            "For a rest, or 'nerve cure,' to calm his nervous condition.",
            "To buy a country house.",
            "To go hunting with the family.",
            "To attend a funeral."
          ],
          hints: ["He is described as a nervous man.", "Which option is about calming his nerves?"]
        },
        {
          type: "mc",
          prompt: "In Vera's invented tale, what happened to the men who went out the window?",
          options: [
            "They were lost in a treacherous bog and never returned.",
            "They moved to another country.",
            "They were caught in a storm at sea.",
            "They were arrested."
          ],
          hints: ["Think about where Vera says they disappeared.", "Which option is about a dangerous bog?"]
        },
        {
          type: "digit",
          prompt: "Vera says the tragedy happened exactly how many years ago? Enter the number.",
          evidence: ["She wants the tale to feel precise and believable.", "She says it happened on that very day three years earlier.", "It is a single small number, just above two."],
          hints: ["Just above two.", "Two plus one.", "The number is 3."],
          answer: "3"
        },
        {
          type: "sequence",
          prompt: "Put the events of the visit in order, earliest first.",
          items: [
            "Vera entertains Framton and invents the tragic tale of the open window.",
            "Mrs. Sappleton enters and chats cheerfully about the men being out shooting.",
            "The three hunters appear alive, walking across the lawn at dusk.",
            "Framton bolts from the house in terror, and Vera invents a new excuse."
          ],
          hints: ["It begins with Vera alone with the guest.", "The aunt speaks before the men appear.", "The flight and the second lie come last."]
        },
        {
          type: "word",
          prompt: "The narrator's closing line says that inventing stories 'at short notice' was Vera's ______. (one word)",
          evidence: ["It names her special talent for making things up quickly.", "It is the last word of the story.", "The word begins with 'spec…'."],
          hints: ["A person's special talent or skill.", "Spec…", "The word is specialty."],
          answer: "specialty"
        }
      ]
    },

    arcade: {
      name: "Vera's Invention or the Truth?",
      instruction: "Saki fills the story with a lie that sits right beside the truth. Sort each detail: is it part of VERA'S INVENTION (something she made up), or is it ACTUALLY TRUE in the story? Reasoning earns the points.",
      buckets: [
        { id: "invention", label: "Vera's invention (made up)", short: "Invention" },
        { id: "true", label: "Actually true in the story", short: "True" }
      ],
      cards: [
        { text: "The men were lost in a bog three years ago and died.", bucket: "invention", why: "Vera made up this tragedy entirely." },
        { text: "The aunt keeps the window open out of grief, expecting ghosts.", bucket: "invention", why: "Vera invented this reason for the open window." },
        { text: "Framton has a horror of dogs from being hunted by a pack.", bucket: "invention", why: "Vera makes this up to explain his flight." },
        { text: "The men who died were the aunt's husband and two brothers.", bucket: "invention", why: "This is part of Vera's fabricated backstory." },
        { text: "Framton came to the country for a nerve cure.", bucket: "true", why: "This is a real fact about the visitor." },
        { text: "Mrs. Sappleton's husband and brothers really are out shooting.", bucket: "true", why: "They are alive and hunting the whole time." },
        { text: "The men return alive across the lawn at dusk with a spaniel.", bucket: "true", why: "Their living return actually happens." },
        { text: "Framton runs from the house in terror.", bucket: "true", why: "His panicked flight really occurs." }
      ],
      followup: "Vera mixes invented details with true ones so smoothly that Framton cannot tell them apart. Which invented detail did you find most convincing, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Vera's main purpose in telling Framton the window story is to —",
          options: [
            "trick him with a convincing, invented tragedy.",
            "honestly share her family's grief.",
            "warn him about a real danger.",
            "ask him for help."
          ],
          why: "Vera invents the whole tragedy as a prank on the gullible guest."
        },
        {
          q: "Framton believes Vera's story mainly because —",
          options: [
            "he is a nervous stranger with no way to check the facts.",
            "he saw the tragedy happen himself.",
            "the aunt confirms every detail.",
            "another guest warns him it is true."
          ],
          why: "As an anxious outsider, he has nothing to weigh the story against."
        },
        {
          q: "When Mrs. Sappleton talks cheerfully about the men, Framton thinks she is —",
          options: [
            "suffering a delusion caused by grief.",
            "telling an obvious joke.",
            "warning him to leave.",
            "confused about the date."
          ],
          why: "Vera's tale has primed him to misread the aunt's ordinary talk."
        },
        {
          q: "The humor of the ending comes mainly from —",
          options: [
            "the 'ghosts' being alive and Framton fleeing a danger that was never real.",
            "a violent fight breaking out.",
            "a sudden storm destroying the house.",
            "the aunt fainting in shock."
          ],
          why: "The situational irony — living men mistaken for ghosts — drives the comedy."
        },
        {
          q: "The closing line about 'romance at short notice' shows that Vera —",
          options: [
            "has a special talent for inventing believable stories instantly.",
            "always tells the strict truth.",
            "regrets fooling Framton.",
            "rarely speaks to guests."
          ],
          why: "Her instant second lie confirms that quick invention is her gift."
        }
      ],
      short: [
        "Choose one artifact from the Drawing Room. Explain what it is and what it reveals about how Vera fools Framton.",
        "Explain two details Vera includes in her tale and how each makes the lie more believable.",
        "The narrator ends by calling invention Vera's 'specialty.' What does this reveal about her — and about how easily a good story can fool us?"
      ],
      paragraph: "Write an evidence-based paragraph. How does Saki use the framed story-within-a-story and situational irony to create humor? Make a claim and support it with specific details about Vera's tale, the aunt's talk, and the men's return.",
      aceReflection: "Articulate what the story suggests about convincing lies in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Power of a Convincing Lie",
      prompt: "Vera fools Framton completely with an invented story built from small, believable details. Choose another story, film, or real situation where a convincing lie or hoax fools someone. Explain the connection with evidence: what was the lie, why was it believed, and what did it cost or accomplish?",
      format: "A short evidence-based comparison connecting the story's view of convincing lies to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Vera fools Framton Nuttel in The Open Window. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Open Window. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Open Window because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Open Window: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of convincing lies to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Open Window for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Saki's The Open Window as a study of the unreliable teller, the framed story-within-a-story, situational irony, and the satire of gullibility and nervous manners. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages (the closing line and all descriptions are described, not quoted), invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story was published in 1914 in Beasts and Super-Beasts and is in the public domain. The linked Project Gutenberg edition is the collection that contains the story; the linked LibriVox recording is likewise a collection — confirm both include and correctly attribute the story before assigning.",
        "Content: a light comic prank in which a poised teenager frightens a nervous, gullible guest. No mature content. Suitable for middle school; preview and follow local policy.",
        "Details here were checked against the story (Framton Nuttel visiting for a nerve cure with letters of introduction; the self-possessed niece Vera; the tall open French window; Vera's invented tragedy of the men lost in a bog three years earlier; Mrs. Sappleton's cheerful talk of the men out shooting; the living return of the husband, brothers, and spaniel; Framton's panicked flight; and Vera's second invented excuse about a horror of dogs). The closing line and famous phrasings are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 7–9 ELAR TEKS (19 TAC Ch. 110) strands on point of view, narrator reliability, irony, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.7.1", "RL.7.2", "RL.7.6", "RL.8.1", "RL.8.6", "W.7.1", "SL.7.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
