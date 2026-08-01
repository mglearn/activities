/* PlotPoint — Aesop's Fables, Selections.  English source data.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: no invented quotations; the fables and their traditional
   morals are widely established. Standards are real, applicable Common Core codes
   flagged as good-faith alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "aesop",
  storageKey: "plotpoint.aesop.v1",

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
    "enter.readListenNote": "These fables are in the public domain. These free, external resources open in a new tab — verify the link and edition before assigning.",
    "enter.read": "Read the full text (Project Gutenberg)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for Aesop's Fables",
    "vocab.intro": "{n} terms that unlock the fables. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "The Fable Cabinet",
    "relic.reviewed": "Reviewed", "relic.investigate": "Investigate",
    "relic.placeholder": "Image placeholder",
    "relic.artifact": "Artifact {n}",
    "relic.q.identify": "Identify it — which fable is this from?",
    "relic.q.purpose": "Explain what happens in the fable",
    "relic.q.significance": "The moral (lesson) it teaches",
    "relic.check": "Check my investigation",
    "relic.answerAll": "Answer all three questions before checking.",
    "relic.scored": "You reasoned {c} of {m} correct. Read the reveal, then respond.",
    "relic.reveals": "What it reveals", "relic.conceals": "What it may conceal",
    "relic.aceLabel": "ACE response",
    "relic.aceDefault": "Articulate the fable's lesson, connect it to a real situation, and extend it to a question it raises.",
    "relic.acePlaceholder": "Write your ACE response (stays on this device)…",

    "ctob.eyebrow": "Crack the Case",
    "ctob.title": "The Moral of the Story",
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
    "arcade.title": "Moral or Detail?",
    "arcade.default": "Sort each statement into what it really is.",
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
    "extend.title": "Write Your Own Fable",
    "extend.format": "Format",
    "extend.evidence": "The fable form I am building on",
    "extend.transfers": "What transfers to my fable",
    "extend.changes": "What changes in a modern setting",
    "extend.breaks": "Where the fable form stops working",
    "extend.response": "My fable and its moral",
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
    "print.item.relic": "Fable evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Write-a-fable organizer",
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
      title: "Aesop's Fables (Selections)",
      author: "Aesop",
      grades: "Grades 6–9",
      genre: "Fables · Classic",
      time: "30–45 minutes",
      spoiler: "No spoilers",
      rights: "Classic translations are public domain",
      textAccess: "Students need a public-domain edition of Aesop's Fables (many exist). This room does not reproduce a specific translation.",
      copyright: "Aesop's fables are ancient and public domain; classic translations are public domain, while some recent retellings carry their own copyright. Verify your edition.",
      contentNote: "Short, gentle animal tales with clear morals — broadly appropriate. A few fables involve harm to characters; preview any you assign.",
      gutenberg: "https://www.gutenberg.org/ebooks/11339",
      audio: "https://librivox.org/aesops-fables-volume-1-fables-1-25/",
      aiAudio: "https://archive.org/download/synapseml_gutenberg_aesop_s_fables_by_aesop/aesop_s_fables_by_aesop.mp3",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking Aesop's Fables — a fox, a tortoise, and a crow."
    },
    hook: "For thousands of years, tiny stories about a boastful hare or a thirsty crow have carried big lessons. Aesop's fables are short, but every one leaves you with a moral to think about.",
    goals: [
      "Understand what a fable is and how it uses animal characters to teach a lesson.",
      "Identify the moral (central lesson) of a fable and support it with details.",
      "Tell the difference between a story's moral and its plot details.",
      "Write your own fable that teaches a moral."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of a 'moral.'",
        "Discuss: Can a very short story still teach something important? How?"
      ],
      during: [
        "Use the Fable Cabinet to study one fable at a time.",
        "For each fable, ask: what lesson is this trying to teach me?"
      ],
      after: [
        "Run the breakout, arcade, and analysis to pull the lessons together.",
        "Complete the Extend task by writing your own fable."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain the moral of one fable in your own words. Include one detail from the story that shows the lesson." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect two fables that teach a related lesson. Explain what they have in common and how each teaches it." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the moral of a fable to a real situation today. Explain what transfers, what changes, and where the lesson stops working." }
    },

    vocab: [
      { term: "fable", def: "A short story, often with animal characters, that teaches a moral or lesson.", example: "A tale of a slow tortoise beating a fast hare.", nonexample: "A long history textbook chapter.", context: "Each of Aesop's fables is a short story with a lesson." },
      { term: "moral", def: "The lesson about life or behavior that a story teaches.", example: "'Slow and steady wins the race.'", nonexample: "The color of a character's coat.", context: "Every fable ends with — or points to — a moral." },
      { term: "personification", def: "Giving human qualities, like speech or feelings, to animals or things.", example: "A fox who talks and makes excuses.", nonexample: "A real fox simply hunting.", context: "Aesop uses personification so animals can teach human lessons." },
      { term: "character", def: "A person, animal, or being that takes part in a story.", example: "The ant and the grasshopper.", nonexample: "The weather.", context: "Most fable characters are animals that act like people." },
      { term: "cunning", def: "Clever in a sly or tricky way.", example: "A fox scheming to get food.", nonexample: "Being honest and direct.", context: "The fox is often the cunning character in a fable." },
      { term: "boastful", def: "Showing too much pride; bragging.", example: "A hare bragging he will easily win.", nonexample: "Quietly doing your best.", context: "The boastful hare loses to the steady tortoise." },
      { term: "industrious", def: "Hardworking and steady.", example: "An ant storing food all summer.", nonexample: "Lazing about and preparing for nothing.", context: "The industrious ant is ready when winter comes." },
      { term: "deceive", def: "To trick someone into believing something untrue.", example: "A wolf disguising itself as a sheep.", nonexample: "Telling the plain truth.", context: "A character who deceives others is common in fables." },
      { term: "consequence", def: "A result that follows from an action or choice.", example: "No one believing the boy after he lied.", nonexample: "A choice with no results at all.", context: "Fables show the consequences of foolish or wise choices." },
      { term: "wisdom", def: "Good judgment; knowing the right thing to do.", example: "Preparing today for tomorrow's needs.", nonexample: "Ignoring an obvious danger.", context: "The lessons of the fables add up to practical wisdom." }
    ],

    relic: {
      name: "The Fable Cabinet",
      intro: "Seven instructional reconstructions of objects from famous fables — teaching recreations, not copyrighted illustrations. Investigate which fable each comes from, what happens, and the moral it teaches.",
      artifacts: [
        {
          id: "grapes", name: "The High Grapes", image: "images/grapes.webp",
          clues: ["A hungry fox spots a bunch of ripe grapes hanging high on a vine.", "He jumps again and again but cannot reach them.", "He walks away telling himself the grapes were probably sour anyway."],
          identify: { q: "Which fable is this from?", choices: ["The Fox and the Grapes", "The Tortoise and the Hare", "The Ant and the Grasshopper", "The Lion and the Mouse"] },
          purpose: { q: "What happens with the grapes?", choices: ["The fox cannot reach them, so he decides they must be sour", "The fox shares them with friends", "The fox trades them for cheese", "The fox plants a vine"] },
          significance: { q: "What is the moral?", choices: ["It is easy to look down on what you cannot have ('sour grapes')", "Hard work always pays off", "Look before you leap", "Honesty is the best policy"] },
          reveals: "How people sometimes pretend not to want what they failed to get.",
          conceals: "Whether the grapes really were sour — we only have the fox's excuse.",
          ace: "Articulate the fox's excuse; connect it to 'sour grapes' behavior; extend it to a time someone downplayed what they couldn't have."
        },
        {
          id: "tortoise", name: "The Tortoise's Shell", image: "images/tortoise.webp",
          clues: ["A speedy hare mocks a slow tortoise, then challenges him to a race.", "So sure of winning, the hare stops to nap partway through.", "The tortoise plods on steadily and crosses the finish line first."],
          identify: { q: "Which fable is this from?", choices: ["The Tortoise and the Hare", "The Fox and the Grapes", "The Crow and the Pitcher", "The Boy Who Cried Wolf"] },
          purpose: { q: "How does the race end?", choices: ["The steady tortoise wins while the overconfident hare naps", "The hare wins easily", "They finish in a tie", "Neither one finishes"] },
          significance: { q: "What is the moral?", choices: ["Slow and steady wins the race", "Might makes right", "Look before you leap", "Birds of a feather flock together"] },
          reveals: "That steady effort can beat raw speed and overconfidence.",
          conceals: "Whether the hare learned his lesson afterward.",
          ace: "Articulate why the tortoise wins; connect steadiness to real goals; extend it to a task where slow, steady effort would beat rushing."
        },
        {
          id: "ant", name: "The Ant's Grain", image: "images/ant.webp",
          clues: ["All summer, an ant works to store away food.", "A grasshopper sings and plays instead of preparing.", "When winter comes, the grasshopper is hungry while the ant has plenty."],
          identify: { q: "Which fable is this from?", choices: ["The Ant and the Grasshopper", "The Lion and the Mouse", "The Fox and the Grapes", "The Tortoise and the Hare"] },
          purpose: { q: "What happens when winter comes?", choices: ["The prepared ant has food; the unprepared grasshopper does not", "Both have plenty of food", "The grasshopper shares with the ant", "They both move south"] },
          significance: { q: "What is the moral?", choices: ["Prepare today for the needs of tomorrow", "Slow and steady wins the race", "Pride comes before a fall", "Kindness is never wasted"] },
          reveals: "The value of planning ahead instead of only enjoying the moment.",
          conceals: "Whether the ant should have shown the grasshopper more mercy.",
          ace: "Articulate the ant's wisdom; connect preparation to a real deadline; extend it to something worth preparing for now."
        },
        {
          id: "fleece", name: "The Wolf's Disguise", image: "images/fleece.webp",
          clues: ["A wolf wants to get close to a flock of sheep.", "He wraps himself in a sheep's fleece as a disguise.", "By pretending to be harmless, he fools the flock."],
          identify: { q: "Which fable is this from?", choices: ["The Wolf in Sheep's Clothing", "The Ant and the Grasshopper", "The Crow and the Pitcher", "The Lion and the Mouse"] },
          purpose: { q: "Why does the wolf wear the fleece?", choices: ["To disguise himself as harmless and deceive the sheep", "To stay warm in winter", "To join the flock as a friend", "To trade with the shepherd"] },
          significance: { q: "What is the moral?", choices: ["Appearances can be deceiving — danger may be disguised as safe", "Slow and steady wins the race", "Look before you leap", "Honesty is its own reward"] },
          reveals: "That something dangerous can hide behind an innocent appearance.",
          conceals: "How the flock might have seen through the disguise.",
          ace: "Articulate the wolf's trick; connect it to 'a wolf in sheep's clothing'; extend it to how appearances can mislead people today."
        },
        {
          id: "pitcher", name: "The Crow's Pitcher", image: "images/pitcher.webp",
          clues: ["A thirsty crow finds a pitcher with a little water at the bottom.", "The water is too low for his beak to reach.", "One by one, he drops pebbles in until the water rises high enough to drink."],
          identify: { q: "Which fable is this from?", choices: ["The Crow and the Pitcher", "The Fox and the Grapes", "The Tortoise and the Hare", "The Wolf in Sheep's Clothing"] },
          purpose: { q: "How does the crow reach the water?", choices: ["He drops in pebbles until the water rises to his beak", "He tips the pitcher over", "He waits for rain", "He calls other crows for help"] },
          significance: { q: "What is the moral?", choices: ["Little by little, cleverness and patience solve big problems ('necessity is the mother of invention')", "Might makes right", "Pride comes before a fall", "Slow and steady wins the race"] },
          reveals: "That patient, clever problem-solving can succeed where force cannot.",
          conceals: "How long it took the crow to think of the idea.",
          ace: "Articulate the crow's solution; connect small steps to solving a problem; extend it to a problem you could solve 'pebble by pebble.'"
        },
        {
          id: "mouse", name: "The Gnawed Net", image: "images/mouse.webp",
          clues: ["A great lion catches a tiny mouse but lets the mouse go free.", "Later the lion is trapped in a hunter's net.", "The little mouse gnaws through the ropes and sets the lion free."],
          identify: { q: "Which fable is this from?", choices: ["The Lion and the Mouse", "The Ant and the Grasshopper", "The Crow and the Pitcher", "The Fox and the Grapes"] },
          purpose: { q: "How does the mouse repay the lion?", choices: ["The mouse gnaws through the net and frees the trapped lion", "The mouse brings the lion food", "The mouse scares off the hunters", "The mouse does nothing"] },
          significance: { q: "What is the moral?", choices: ["Even the small and weak can help the great — no kindness is wasted", "Slow and steady wins the race", "Appearances can deceive", "Look before you leap"] },
          reveals: "That kindness can be repaid from unexpected places.",
          conceals: "Whether the lion expected the tiny mouse could ever help him.",
          ace: "Articulate how the mouse repays the lion; connect it to 'no kindness is wasted'; extend it to a time a small act of kindness mattered."
        },
        {
          id: "horn", name: "The Shepherd Boy's Horn", image: "images/horn.webp",
          clues: ["A bored shepherd boy shouts 'Wolf!' to trick the villagers, twice, for fun.", "Each time they rush to help and find no wolf.", "When a real wolf finally comes, no one believes his cries."],
          identify: { q: "Which fable is this from?", choices: ["The Boy Who Cried Wolf", "The Tortoise and the Hare", "The Lion and the Mouse", "The Wolf in Sheep's Clothing"] },
          purpose: { q: "What happens when a real wolf comes?", choices: ["No one believes the boy's cries anymore, because he had lied before", "The villagers come at once", "The wolf runs away on its own", "The boy scares the wolf with his horn"] },
          significance: { q: "What is the moral?", choices: ["If you lie again and again, people stop believing you — even when you tell the truth", "Slow and steady wins the race", "Kindness is never wasted", "Prepare for tomorrow"] },
          reveals: "How repeated lies destroy trust when it is needed most.",
          conceals: "Whether the boy ever regained the villagers' trust.",
          ace: "Articulate why no one believes the boy; connect lying to lost trust; extend it to why trust matters in a real relationship."
        }
      ]
    },

    ctob: {
      name: "The Moral of the Story",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "What do we call a short story, often with animal characters, that teaches a lesson? (one word)",
          evidence: ["Aesop is famous for these very short tales.", "Their characters are usually animals that act like people.", "The word begins with 'fa…'."],
          hints: ["A short tale with a lesson.", "Fa…", "The word is fable."],
          answer: "fable"
        },
        {
          type: "mc",
          prompt: "The lesson about life or behavior that a fable teaches is called its —",
          options: ["moral.", "title.", "setting.", "author."],
          hints: ["It is the point of the whole story.", "Which word means 'the lesson'?"]
        },
        {
          type: "word",
          prompt: "In 'The Tortoise and the Hare,' which slow animal wins the race? (one word)",
          evidence: ["A fast, boastful hare mocks a slow racer.", "The hare naps, sure he will win.", "The winner carries its home on its back — a 'tor…'."],
          hints: ["It moves slowly and has a shell.", "Tor…", "The winner is the tortoise."],
          answer: "tortoise"
        },
        {
          type: "mc",
          prompt: "What lesson does 'The Boy Who Cried Wolf' teach?",
          options: [
            "If you lie again and again, people stop believing you — even when you tell the truth.",
            "Slow and steady wins the race.",
            "Always share what you have.",
            "Never travel alone at night."
          ],
          hints: ["Think about what happens when the real wolf finally comes.", "Which option is about lying and lost trust?"]
        },
        {
          type: "sequence",
          prompt: "Put 'The Crow and the Pitcher' in order, earliest first.",
          items: [
            "A thirsty crow finds a pitcher with a little water at the bottom.",
            "The water is too low for the crow to reach.",
            "The crow drops pebbles into the pitcher, one by one.",
            "The water rises until the crow can finally drink."
          ],
          hints: ["First the crow finds the pitcher.", "The pebbles go in before the water rises.", "Drinking comes last."]
        },
        {
          type: "digit",
          prompt: "How many animals race each other in 'The Tortoise and the Hare'? Enter the number.",
          evidence: ["One racer is slow; the other is fast.", "A tortoise and a hare take part.", "Count the two racers."],
          hints: ["A tortoise and a hare.", "The smallest number greater than one.", "There are 2 racers."],
          answer: "2"
        }
      ]
    },

    arcade: {
      name: "Moral or Detail?",
      instruction: "A fable's MORAL is the general life lesson it teaches. A DETAIL is just something that happened in the story. Sort each statement: is it a MORAL (a lesson you can use in life) or a DETAIL (just a plot fact)? Reasoning earns the points.",
      buckets: [
        { id: "moral", label: "A moral (the lesson)", short: "Moral" },
        { id: "detail", label: "A story detail (what happened)", short: "Detail" }
      ],
      cards: [
        { text: "Slow and steady wins the race.", bucket: "moral", why: "A general lesson you can apply to real life — a moral." },
        { text: "If you lie often, people stop believing you.", bucket: "moral", why: "A lesson about honesty and trust — a moral." },
        { text: "Even the small and weak can help the great.", bucket: "moral", why: "A general lesson about kindness — a moral." },
        { text: "Prepare today for the needs of tomorrow.", bucket: "moral", why: "Advice you can live by — a moral." },
        { text: "The hare stopped to take a nap during the race.", bucket: "detail", why: "Just a plot event from the story — a detail." },
        { text: "The boy shouted 'Wolf!' when there was no wolf.", bucket: "detail", why: "A specific thing that happened — a detail, not the lesson." },
        { text: "The mouse gnawed through the ropes of the net.", bucket: "detail", why: "An event in the story — a detail." },
        { text: "The ant carried grain into its nest all summer.", bucket: "detail", why: "A plot fact from the fable — a detail." }
      ],
      followup: "Pick one 'detail' card. Which moral does that detail help teach? How do details and morals work together?"
    },

    analysis: {
      mcq: [
        {
          q: "A fable is best described as —",
          options: [
            "a short story, often with animal characters, that teaches a moral.",
            "a long true history of real events.",
            "a poem with no meaning.",
            "a list of facts about animals."
          ],
          why: "Aesop's fables are brief tales, usually starring animals, built to deliver a lesson."
        },
        {
          q: "The 'moral' of a fable is —",
          options: [
            "the life lesson the story teaches.",
            "the name of the main character.",
            "the place where the story happens.",
            "the length of the story."
          ],
          why: "The moral is the general lesson about behavior or life that the fable illustrates."
        },
        {
          q: "Why do fables use talking animals instead of people?",
          options: [
            "Animal characters make the lesson clear, simple, and easy to remember.",
            "Aesop did not know how to write about people.",
            "Animals cannot teach lessons.",
            "It makes the stories longer."
          ],
          why: "By giving animals a single clear trait, fables teach a lesson quickly and memorably (personification)."
        },
        {
          q: "'The Boy Who Cried Wolf' and 'The Wolf in Sheep's Clothing' both warn about —",
          options: [
            "dishonesty and being deceived.",
            "the importance of running fast.",
            "how to care for farm animals.",
            "the changing of the seasons."
          ],
          why: "Both fables center on deception — lying, and danger disguised as safe."
        },
        {
          q: "The best evidence for a fable's moral is —",
          options: [
            "the specific details of what the characters do and what results.",
            "the number of words in the story.",
            "the color of the animals.",
            "the title alone."
          ],
          why: "A moral is supported by the story's events — the choices characters make and their consequences."
        }
      ],
      short: [
        "Choose one fable from the Cabinet. Retell what happens in one or two sentences, then state its moral in your own words.",
        "Pick two fables that teach a similar lesson. Explain what they have in common.",
        "Explain the difference between a fable's moral and its details, using one fable as an example."
      ],
      paragraph: "Write an evidence-based paragraph. Choose one fable and argue why its moral still matters today. Support your claim with specific details from the story and one example from real life.",
      aceReflection: "Articulate the moral of one fable in your own words. Connect it to a second fable with a related lesson. Extend it to a real situation, and name where the lesson becomes harder to apply."
    },

    extend: {
      name: "Write Your Own Fable",
      prompt: "Aesop teaches big lessons with tiny stories and animal characters. Write your own short fable: choose one or two animal characters, give them a simple problem, and end with a clear moral. Keep it short — a few sentences — just like Aesop.",
      format: "A short original fable (a few sentences) ending with a one-line moral, plus a note on the lesson you wanted to teach."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning the moral of an Aesop fable. Do not answer for me. Ask me one question at a time that helps me explain the moral in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in Aesop's Fables. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [fable one] connects to [fable two] because they teach a similar lesson. Challenge my connection with two questions. Do not replace my idea. Ask me to support my answer with details from the fables." },
      { title: "Evidence prompt", text: "Here is my claim about a fable: [claim]. Here is the evidence I chose: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to write my own fable that teaches this lesson: [lesson]. Ask me questions to help me pick characters and a problem. Do not write the fable for me." },
      { title: "Critique prompt", text: "Review my fable and its moral for weak reasoning or a moral that does not match the story. Ask me questions instead of rewriting it." }
    ],

    teacher: {
      overview: "This room introduces the fable form through Aesop: what a fable is, how animal characters and personification teach a moral, and how to tell a moral from a plot detail. It never reproduces a specific copyrighted translation and keeps every response on the student's device.",
      reviewNotes: [
        "Verify your edition. Aesop's fables are ancient and public domain; classic translations are public domain, while some recent illustrated retellings carry their own copyright.",
        "The fables and their traditional morals used here are widely established (The Fox and the Grapes; The Tortoise and the Hare; The Ant and the Grasshopper; The Wolf in Sheep's Clothing; The Crow and the Pitcher; The Lion and the Mouse; The Boy Who Cried Wolf). Wording of morals varies by edition.",
        "Fables are simple, but the skill of distinguishing a general moral from a specific detail is a genuine reading-comprehension target — pair the arcade with discussion.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the middle-grades reading/response ELAR TEKS (19 TAC Ch. 110) strands on theme/central idea and how it is conveyed through details, for grades 6–8. Confirm exact student expectations for your course. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.6.1", "RL.6.2", "RL.7.2", "RL.6.3", "W.6.3", "W.7.3", "SL.6.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
