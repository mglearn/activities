/* PlotPoint — The Story of an Hour (Kate Chopin, 1894).  PUBLIC DOMAIN.
   Translations live in lang/*.js on window.__ROOM_LANGS__.

   Editorial rules: the story is public domain, but this room does not reproduce
   the full text; it invents no quotations and paraphrases throughout (Louise's
   whispered word and the doctors' verdict are described, not quoted). Standards
   are good-faith Common Core alignment; TEKS/ELPS flagged "Needs review." Relic
   artifacts are clearly labeled instructional reconstructions. Correct answer is
   index 0 in every choices/options array; the engine shuffles. */
window.__ROOM__ = {
  id: "storyhour",
  storageKey: "plotpoint.storyhour.v1",

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
    "enter.read": "Read the full text (Wikisource)",
    "enter.listen": "Listen — audiobook (LibriVox)",
    "enter.readAloud": "Prefer a read-aloud? Students may also use their device's built-in read-aloud or a district-approved AI tool on the public-domain text.",
    "ace.articulate": "A · Articulate", "ace.connect": "C · Connect", "ace.extend": "E · Extend",

    "vocab.eyebrow": "Build Your Vocabulary",
    "vocab.title": "Words for The Story of an Hour",
    "vocab.intro": "{n} terms that unlock the story. Study them, match them, then test them in context.",
    "vocab.mode.study": "Study cards", "vocab.mode.match": "Matching", "vocab.mode.context": "Context clues",
    "vocab.example": "Example", "vocab.nonexample": "Nonexample",
    "vocab.matchHint": "Select a term, then select its meaning. Correct pairs lock in.",
    "vocab.terms": "Terms", "vocab.defs": "Meanings",
    "vocab.matchDone": "All terms matched. Nicely reasoned.",
    "vocab.contextLabel": "Choose the word that fits",
    "vocab.noContext": "Context sentences are coming soon for this room.",

    "relic.eyebrow": "Explore the Relic Room",
    "relic.title": "Louise's Hour by the Window",
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
    "ctob.title": "The Hour That Wasn't",
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
    "arcade.title": "What Others Assume or What Louise Feels?",
    "arcade.default": "Sort each detail by whose understanding it shows.",
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
    "extend.title": "The Cost of Freedom",
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
    "print.item.relic": "Window-hour evidence sheet",
    "print.item.ctob": "Breakout evidence sheet",
    "print.item.analysis": "Analysis questions",
    "print.item.extend": "Cost-of-freedom organizer",
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
      title: "The Story of an Hour",
      author: "Kate Chopin",
      grades: "Grades 8–11",
      genre: "Realism · Irony · Short story",
      time: "30–45 minutes",
      spoiler: "Partial spoilers",
      rights: "Public domain (1894)",
      textAccess: "The story is very short and public domain. Use the free links below, or your class's copy.",
      copyright: "First published in 1894, The Story of an Hour is in the public domain. This room paraphrases and reproduces no full passages.",
      contentNote: "A brief, powerful story about marriage, a woman's sudden sense of freedom, and death. A central character dies at the end. Handle with care; suitable for late middle and high school. Preview and align with local policy.",
      gutenberg: "https://en.wikisource.org/wiki/The_Story_of_an_Hour",
      hero: "images/hero.webp",
      heroAlt: "An instructional illustration evoking The Story of an Hour — an open second-floor window framing a spring sky, an empty armchair turned toward it, and new green treetops beyond."
    },
    hook: "In little more than an hour, a woman's whole world turns over — twice. Told that her husband has died in a railroad disaster, Louise Mallard weeps, then climbs to a room alone and, gazing out an open window at the coming spring, feels something she never expected. What happens in that hour, and what waits at the bottom of the stairs, gives this short story its lasting shock.",
    goals: [
      "Understand the plot of Chopin's short story and the sudden reversal at its end.",
      "Analyze Louise Mallard's changing feelings as she sits alone by the open window.",
      "Trace Chopin's use of situational irony — the gap between the doctors' verdict and the real cause of Louise's death.",
      "Interpret the story's view of marriage, women's autonomy, and the meaning of freedom."
    ],
    stages: {
      before: [
        "Preview the vocabulary and the idea of situational irony.",
        "Discuss: What does it mean to live for yourself? How might grief and relief exist in the same moment?"
      ],
      during: [
        "Use Louise's Hour by the Window to slow down and read her changing feelings, step by step.",
        "Track the symbols outside the window — spring, new leaves, birds, blue sky — and what they suggest."
      ],
      after: [
        "Run the breakout, arcade, and analysis to map the irony and the reversal.",
        "Complete the Extend task to weigh the story's view of freedom."
      ]
    },
    ace: {
      articulate: { goal: "Explain one idea in your own words.", prompt: "Explain in your own words how Louise's feelings change while she sits by the window. Include one detail from the story that helped you understand it." },
      connect: { goal: "Show how ideas fit together and why it matters.", prompt: "Connect the doctors' verdict at the end to what Louise was actually feeling. Explain how the gap between them creates situational irony." },
      extend: { goal: "Apply the learning in a new situation.", prompt: "Apply the story's view of freedom and marriage to another story or a real situation. Explain what transfers, what changes, and where the comparison stops working." }
    },

    vocab: [
      { term: "irony", def: "A gap between what seems or is expected and what is actually true.", example: "The doctors blaming Louise's death on joy.", nonexample: "An event that turns out exactly as expected.", context: "The whole story turns on a sharp irony." },
      { term: "situational irony", def: "When what actually happens is the opposite of what is expected.", example: "Louise dies just as she feels newly free.", nonexample: "A character getting exactly the outcome everyone predicted.", context: "The ending is a case of situational irony." },
      { term: "autonomy", def: "The freedom to govern yourself and make your own choices.", example: "Louise imagining years lived only for herself.", nonexample: "Having every decision made for you by another.", context: "The story is quietly about a woman's autonomy." },
      { term: "symbolism", def: "Using an object or image to stand for a larger idea.", example: "The open spring window standing for new life.", nonexample: "A detail that means only itself and nothing more.", context: "Chopin builds meaning through symbolism at the window." },
      { term: "repression", def: "Holding back or shutting down a feeling or desire.", example: "A wish for freedom kept hidden even from oneself.", nonexample: "Freely expressing exactly what you feel.", context: "The story hints at feelings long held under repression." },
      { term: "revelation", def: "A moment when a hidden truth is suddenly seen.", example: "Louise realizing she will now live for herself.", nonexample: "A slow, ordinary day with no new insight.", context: "Her hour by the window brings a revelation." },
      { term: "foreshadowing", def: "Hints early in a story about what will happen later.", example: "The early mention of Louise's weak heart.", nonexample: "A detail with no link to later events.", context: "Chopin plants quiet foreshadowing about the heart." },
      { term: "ambivalence", def: "Having mixed or opposite feelings about the same thing at once.", example: "Louise feeling grief and relief together.", nonexample: "Feeling one clear, simple emotion.", context: "Louise's ambivalence makes her feelings honest and complex." },
      { term: "realism", def: "Writing that presents ordinary life and inner feeling truthfully.", example: "A quiet domestic scene revealing a hidden inner life.", nonexample: "A fantastical tale of magic and monsters.", context: "The story is a compact example of literary realism." }
    ],

    relic: {
      name: "Louise's Hour by the Window",
      intro: "Seven instructional reconstructions of objects and moments from the story — teaching recreations, not artwork from any edition. Investigate what each is, its role in the story, and what it reveals.",
      artifacts: [
        {
          id: "telegram", name: "The News of the Disaster", image: "images/telegram.webp",
          clues: ["Word arrives that a railroad accident has happened.", "Brently Mallard's name is at the top of the list of those killed.", "Because Louise has a weak heart, the news is broken to her as gently as possible."],
          identify: { q: "What news reaches the Mallard house?", choices: ["That Brently Mallard was killed in a railroad disaster", "That Louise has won a prize", "That a storm is coming", "That the family is moving"] },
          purpose: { q: "What is this news's role in the story?", choices: ["It sets the whole hour in motion and is broken gently because of Louise's heart", "It ends the story", "It has no importance", "It is a joke among friends"] },
          significance: { q: "Why does the careful way the news is delivered matter?", choices: ["It signals from the start that Louise's heart is fragile", "It shows the family is wealthy", "It proves the news is false", "It keeps Louise calm forever"] },
          reveals: "That Louise's weak heart is a danger from the very first lines.",
          conceals: "That the report of Brently's death will turn out to be wrong.",
          ace: "Articulate what the news is; connect the gentle delivery to Louise's heart; extend it to how an early detail can quietly set up an ending."
        },
        {
          id: "sister", name: "Josephine at the Door", image: "images/sister.webp",
          clues: ["Louise's sister Josephine is the one who tells her the news.", "Later, Josephine kneels at the closed door, worried and begging Louise to open it.", "Richards, her husband's friend, is also present and tries to help."],
          identify: { q: "Who is Josephine?", choices: ["Louise's sister, who breaks the news and worries at the door", "A doctor", "A stranger", "Brently's mother"] },
          purpose: { q: "What is Josephine's role in the story?", choices: ["She delivers the news gently and later fears for Louise behind the closed door", "She causes the accident", "She owns the house", "She never appears"] },
          significance: { q: "What does Josephine's worry at the door reveal?", choices: ["Others assume Louise is upstairs collapsing in grief", "That Louise is asleep", "That Josephine wants the house", "That the door is broken"] },
          reveals: "The gap between what others assume Louise feels and what she actually feels.",
          conceals: "That behind the door, Louise is not grieving but awakening.",
          ace: "Articulate who Josephine is; connect her worry to what others assume; extend it to how outsiders can misread a person's true feelings."
        },
        {
          id: "window", name: "The Open Window", image: "images/window.webp",
          clues: ["Alone in her room, Louise sinks into an armchair facing an open window.", "Through it she sees new spring leaves, patches of blue sky, and hears birds.", "The fresh air and new life seem to reach toward her."],
          identify: { q: "What does Louise see through the open window?", choices: ["Spring life — new leaves, blue sky, and birds", "A crowded city street", "The railroad accident", "A dark, empty yard"] },
          purpose: { q: "What is the window's role in the story?", choices: ["It frames the spring symbols that mirror her awakening sense of freedom", "It lets in the cold", "It shows the funeral", "It has no meaning"] },
          significance: { q: "What does the spring outside symbolize?", choices: ["New life and the freedom opening before Louise", "The end of the world", "A coming storm of grief", "Nothing at all"] },
          reveals: "The story's central symbolism — an open window onto new life.",
          conceals: "How briefly this new life will last.",
          ace: "Articulate what Louise sees; connect the spring images to her feelings; extend it to how a setting can stand for a character's inner change."
        },
        {
          id: "armchair", name: "The Armchair Facing the Window", image: "images/armchair.webp",
          clues: ["Exhausted from her first burst of weeping, Louise sinks into a roomy armchair.", "She sits facing the open window, physically and emotionally spent.", "There, something she cannot yet name begins to approach her."],
          identify: { q: "Where does Louise sit as her feelings change?", choices: ["In a roomy armchair facing the open window", "At the dinner table", "On the front steps", "In a locked cellar"] },
          purpose: { q: "What is the armchair scene's role?", choices: ["It is where Louise is alone long enough to feel a new emotion arrive", "It is where she first hears the news", "It is where she dies", "It is unimportant"] },
          significance: { q: "What does her sinking into the chair reveal?", choices: ["She is spent, and in that stillness a hidden feeling can surface", "She has fallen asleep", "She is hiding from the family", "She is planning a trip"] },
          reveals: "The quiet, private space where Louise's true feeling can emerge.",
          conceals: "What that approaching feeling will turn out to be.",
          ace: "Articulate where Louise sits; connect the stillness to her revelation; extend it to why being alone can let a hidden feeling surface."
        },
        {
          id: "freedom", name: "The Whispered Word", image: "images/freedom.webp",
          clues: ["A feeling approaches that Louise first tries to beat back, then surrenders to.", "She begins to whisper one word to herself, over and over, under her breath.", "That word names a sense of being unbound — of belonging only to herself."],
          identify: { q: "What does Louise whisper to herself?", choices: ["A word meaning she is now free", "Her husband's name", "A prayer for rescue", "A cry for help"] },
          purpose: { q: "What is this whispered moment's role?", choices: ["It marks Louise's realization that she will now live for herself", "It calls the doctor", "It ends the accident", "It has no meaning"] },
          significance: { q: "What does the whispered word reveal about Louise?", choices: ["A long-hidden desire for autonomy is surfacing at last", "That she never loved anyone", "That she is confused about the news", "That she wants to leave the house"] },
          reveals: "Louise's hidden longing for freedom, surfacing at last.",
          conceals: "That admitting the joy also seals her tragedy.",
          ace: "Articulate what Louise whispers; connect it to her desire for autonomy; extend it to why a private admission can be both freeing and dangerous."
        },
        {
          id: "latchkey", name: "The Latchkey at the Door", image: "images/latchkey.webp",
          clues: ["As Louise and Josephine start down the stairs, someone opens the front door.", "It is opened with a latchkey from outside.", "Brently Mallard walks in, alive — he had been far from the accident."],
          identify: { q: "What happens at the front door near the end?", choices: ["Brently Mallard opens it with a latchkey and walks in alive", "A doctor arrives", "The house catches fire", "A letter is delivered"] },
          purpose: { q: "What is this moment's role in the story?", choices: ["It reverses everything — the reported death was wrong", "It begins the story", "It is only a dream", "It changes nothing"] },
          significance: { q: "Why is Brently's return the story's turning point?", choices: ["It destroys the freedom Louise had just claimed", "It proves Louise was lying", "It shows the accident was minor", "It reunites a happy couple"] },
          reveals: "The sudden reversal that drives the story's irony.",
          conceals: "How fatal, for Louise, this 'good news' will be.",
          ace: "Articulate what happens at the door; connect the reversal to the loss of Louise's freedom; extend it to how a single moment can undo everything a character gained."
        },
        {
          id: "verdict", name: "The Doctors' Verdict", image: "images/verdict.webp",
          clues: ["At the sight of her living husband, Louise dies.", "The doctors give a cause for her death.", "They say it was the joy of seeing him again that killed her weak heart."],
          identify: { q: "What do the doctors conclude killed Louise?", choices: ["Heart disease — from what they call the joy that kills", "A fall down the stairs", "The railroad accident", "A long illness"] },
          purpose: { q: "What is the verdict's role in the story?", choices: ["It states the outsiders' explanation, which the reader knows is wrong", "It saves Louise", "It begins the plot", "It has no meaning"] },
          significance: { q: "Why is the doctors' verdict deeply ironic?", choices: ["It was the loss of freedom, not joy, that truly killed her", "It proves the doctors are skilled", "It shows she was faking", "It matches what really happened"] },
          reveals: "The story's final, cutting irony about how Louise's feelings are misread.",
          conceals: "The real cause — the sudden loss of her one hour of freedom.",
          ace: "Articulate the doctors' verdict; connect it to what the reader knows; extend it to how others can name a feeling wrongly from the outside."
        }
      ]
    },

    ctob: {
      name: "The Hour That Wasn't",
      intro: "Six locks. Every answer is inferable from the evidence given — no outside trivia, no page-number memory. Use the hints if you get stuck; they guide without giving the answer away.",
      locks: [
        {
          type: "word",
          prompt: "The feeling Louise discovers at the window — and the story's central theme — is ______. (one word)",
          evidence: ["She whispers it to herself over and over.", "It names the sense of belonging only to herself, with no one's will bending hers.", "The word means being unbound, and begins with 'free…'."],
          hints: ["The state of being unbound, living for yourself.", "Free…", "The word is freedom."],
          answer: "freedom"
        },
        {
          type: "mc",
          prompt: "How is Brently Mallard first reported to have died?",
          options: [
            "In a railroad disaster.",
            "In a house fire.",
            "In a long illness.",
            "In a shipwreck at sea."
          ],
          hints: ["The news comes from a list of the dead after an accident.", "Which option involves a train?"]
        },
        {
          type: "mc",
          prompt: "What actually causes Louise's death at the end?",
          options: [
            "The shock of losing her new freedom when Brently walks in alive.",
            "The joy of seeing her husband, exactly as the doctors say.",
            "A fall on the stairs.",
            "The original railroad accident."
          ],
          hints: ["The doctors' verdict is the ironic opposite of the truth.", "Which option names what she loses, not what she gains?"]
        },
        {
          type: "digit",
          prompt: "The story's title names a span of time — about how many hours does the whole action cover? Enter the number.",
          evidence: ["The title itself names the span.", "Everything happens between the news and Brently's return.", "The number in the title is one."],
          hints: ["Look at the story's title.", "The action fits inside a single unit of time.", "The number is 1."],
          answer: "1"
        },
        {
          type: "sequence",
          prompt: "Put the events of the hour in order, earliest first.",
          items: [
            "Josephine gently tells Louise that Brently has been killed.",
            "Louise weeps, then goes alone to her room and sits by the open window.",
            "Looking at spring, she feels a sense of freedom and whispers that she is free.",
            "Brently walks in alive, and at the sight of him Louise dies."
          ],
          hints: ["It begins with the news being broken to her.", "She must be alone by the window before the new feeling arrives.", "Brently's return is the final reversal."]
        },
        {
          type: "word",
          prompt: "The doctors blame Louise's death on 'the joy that kills' — but the real cause is the sudden ______ of her freedom. (one word)",
          evidence: ["It is the opposite of gaining something.", "It happens the instant Brently walks in.", "The word means being deprived of something, and begins with 'lo…'."],
          hints: ["The opposite of a gain.", "Lo…", "The word is loss."],
          answer: "loss"
        }
      ]
    },

    arcade: {
      name: "What Others Assume or What Louise Feels?",
      instruction: "Chopin builds the story on situational irony — the people around Louise assume one thing while she experiences another. Sort each detail: does it show WHAT OTHERS ASSUME LOUISE FEELS, or WHAT LOUISE ACTUALLY FEELS? Reasoning earns the points.",
      buckets: [
        { id: "others", label: "What others assume Louise feels", short: "Others assume" },
        { id: "louise", label: "What Louise actually feels", short: "Louise feels" }
      ],
      cards: [
        { text: "She is upstairs collapsing under her grief.", bucket: "others", why: "Josephine fears Louise is making herself ill with sorrow." },
        { text: "She needs to be protected from any more shock.", bucket: "others", why: "The family handles her gently because of her heart and her grief." },
        { text: "She would be overjoyed to find her husband alive.", bucket: "others", why: "The doctors assume the sight of Brently brought her joy." },
        { text: "She is locked away in mourning behind the door.", bucket: "others", why: "Josephine begs at the door, sure Louise is suffering." },
        { text: "A surprising sense of freedom is rising in her.", bucket: "louise", why: "Louise feels something she never expected as she looks outside." },
        { text: "She will now get to live for herself alone.", bucket: "louise", why: "She imagines years belonging only to her." },
        { text: "Spring outside the window feels like new life beginning.", bucket: "louise", why: "The season mirrors her private awakening." },
        { text: "Losing that freedom, not joy, is what breaks her.", bucket: "louise", why: "The reader understands the true cause the doctors miss." }
      ],
      followup: "This gap between what others assume and what Louise feels is situational irony. Which moment is most powerful because of it, and why?"
    },

    analysis: {
      mcq: [
        {
          q: "Louise is told at the start of the story that —",
          options: [
            "her husband, Brently, has been killed in a railroad disaster.",
            "she has inherited a fortune.",
            "she must move away from home.",
            "her sister is ill."
          ],
          why: "The news of Brently's reported death sets the whole hour in motion."
        },
        {
          q: "As Louise sits alone by the open window, she gradually feels —",
          options: [
            "a growing, unexpected sense of freedom.",
            "nothing at all.",
            "a wish to join her husband in death.",
            "anger at her sister."
          ],
          why: "Looking out at spring, she surrenders to a sense of freedom she tries at first to resist."
        },
        {
          q: "The open window and the spring beyond it mainly symbolize —",
          options: [
            "new life and the freedom opening before Louise.",
            "the coming of winter.",
            "the railroad that killed Brently.",
            "the family's wealth."
          ],
          why: "Chopin uses the spring imagery to mirror Louise's inner awakening."
        },
        {
          q: "Louise dies at the moment that —",
          options: [
            "Brently walks in alive and her new freedom is suddenly lost.",
            "she first hears the news of the accident.",
            "she falls asleep in the armchair.",
            "the doctor examines her."
          ],
          why: "Her death comes exactly when the freedom she had claimed is taken away."
        },
        {
          q: "The story's central irony is that —",
          options: [
            "the doctors blame joy, but it was the loss of freedom that killed her.",
            "Brently never really loved Louise.",
            "the accident never happened at all.",
            "Louise had been ill for years."
          ],
          why: "The gap between the doctors' verdict and the true cause is the story's situational irony."
        }
      ],
      short: [
        "Choose one artifact from Louise's Hour by the Window. Explain what it is and what it reveals about the story's meaning.",
        "Explain how the spring outside the window works as a symbol, and how it connects to Louise's changing feelings.",
        "The doctors say Louise died of 'the joy that kills.' Explain why this verdict is ironic, and what the story suggests actually killed her."
      ],
      paragraph: "Write an evidence-based paragraph. How does Chopin use situational irony to reveal the story's view of marriage and freedom? Make a claim and support it with specific details about Louise's hour by the window, Brently's return, and the doctors' verdict.",
      aceReflection: "Articulate what the story suggests about freedom and marriage in your own words. Connect two details that develop it. Extend it to another story or situation, and name where the comparison becomes hard to hold."
    },

    extend: {
      name: "The Cost of Freedom",
      prompt: "Louise glimpses freedom for a single hour, then loses it in an instant. Choose another story, film, or real situation about someone who briefly gains — and then loses — a sense of independence or freedom. Explain the connection with evidence: what was gained, what was lost, and what the moment reveals about the person and their world.",
      format: "A short evidence-based comparison connecting the story's view of freedom to another example, with a note on where the comparison holds and where it breaks down."
    },

    genaiPrompts: [
      { title: "Articulate prompt", text: "I am learning how Louise's feelings change while she sits by the window in The Story of an Hour. Do not answer for me. Ask me one question at a time that helps me explain it in my own words. After I answer, point out one clear part and one part that needs more explanation." },
      { title: "Vocabulary prompt", text: "I am trying to understand the word [word] as it is used in The Story of an Hour. Do not write my answer. Give me one student-friendly definition, one example, one nonexample, and one question that checks whether I understand it." },
      { title: "Connect prompt", text: "I think [detail one] connects to [detail two] in The Story of an Hour because [my explanation]. Challenge my connection with two questions. Do not replace my interpretation. Ask me to support my answer with evidence from the text." },
      { title: "Evidence prompt", text: "Here is my claim about The Story of an Hour: [claim]. Here is the evidence I selected: [evidence]. Ask me whether the evidence is relevant, sufficient, and accurately explained. Do not write the final paragraph." },
      { title: "Extend prompt", text: "I want to connect the story's view of freedom to another example: [example]. Give me two ways the comparison might hold and one reason it might break down. I will decide which ideas are supported." },
      { title: "Critique prompt", text: "Review my interpretation of The Story of an Hour for unsupported assumptions, missing evidence, and weak reasoning. Ask questions instead of rewriting my response." }
    ],

    teacher: {
      overview: "This room supports close reading of Kate Chopin's The Story of an Hour as a study of situational irony, symbolism, and the theme of freedom within marriage. The story is public domain; free text and audiobook links are provided. The room paraphrases and reproduces no full passages (Louise's whispered word and the doctors' verdict are described, not quoted), invents no quotations, and keeps every response on the student's device.",
      reviewNotes: [
        "The story (first published 1894) is public domain, but it is not on Project Gutenberg; this room links the full text from Wikisource. Confirm the linked edition before assigning. No verified standalone LibriVox recording exists, so no audiobook link is provided.",
        "Content: themes of marriage, a woman's brief sense of freedom, and death; a central character (Louise) dies at the end. Handle with care. Suitable for late middle and high school; preview and follow local policy.",
        "Details here were checked against the story (Louise Mallard's weak heart; her sister Josephine breaking the news, with her husband's friend Richards present; Brently Mallard reported killed in a railroad disaster, his name topping the list; Louise weeping, then sitting alone by an open window facing spring; her growing sense of freedom and whispered word; her flushed, feverish triumph as she opens the door; Brently's return alive by latchkey; Louise's death; the doctors' verdict of heart disease, 'the joy that kills'). Louise's whispered word and the doctors' famous phrase are paraphrased, not quoted.",
        "Confirm the TEKS and ELPS alignment below against your course and current adoption year."
      ]
    },
    standards: {
      teks: "Aligned to the grade 8–11 ELAR TEKS (19 TAC Ch. 110) strands on theme, irony, symbolism, and author's craft. Confirm exact student expectations for your grade. (Needs review)",
      elps: "Supports the ELPS Listening, Speaking, Reading, and Writing domains through seven-language chrome, visuals, and bilingual display. Confirm proficiency-level descriptors for your students. (Needs review)",
      ccss: ["RL.8.1", "RL.8.2", "RL.8.4", "RL.9-10.1", "RL.9-10.2", "W.9-10.1", "SL.8.1"],
      udl: "Multiple means of representation (visuals, seven languages, plain directions), action & expression (typed or printed responses; keyboard, touch, and mouse; sequence buttons instead of drag-only), and engagement (choice of pathway, no timers, optional Gen AI)."
    }
  }
};
