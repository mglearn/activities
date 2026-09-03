/* Nobel Prize — Curiosity Challenge data.
   Facts verified against NobelPrize.org and primary sources. See data/sources.md. */
window.CURIOSITY_PACK = {
  "title": "Nobel Prize Classroom Challenges: Five Ways to Explore Big Ideas",
  "slug": "nobel-prize",
  "tagline": "Meet the people and ideas behind humanity's biggest breakthroughs.",
  "accent": "#b8860b",
  "gradeBands": ["6-8", "9-12"],
  "activities": [
    {
      "id": "who-am-i",
      "type": "four-clues",
      "title": "Who Am I?",
      "time": "20-25 min",
      "instructions": "Read the clues one at a time, from Clue 1 to Clue 4. Try to name the Nobel laureate as early as you can. Clue 1 describes the problem they tackled; Clue 4 is the biggest giveaway. Say or write your guess before revealing the answer.",
      "teacherMove": "Pause after Clue 2 for a quiet vote, then again after Clue 3. Ask students what KIND of clue helped them most (impact vs. name recognition) to show that contribution matters more than fame.",
      "items": [
        {
          "answer": "Marie Curie",
          "accept": ["marie curie", "curie", "marie sklodowska curie", "maria sklodowska"],
          "clues": [
            "I wanted to understand a mysterious 'ray' energy that certain minerals gave off on their own, without any outside power.",
            "I studied radioactivity and, with my husband, discovered two new elements, including radium.",
            "My work opened the door to using radiation in medicine, cancer treatment, and the science of the atom.",
            "I am the first person ever to win Nobel Prizes in two different sciences, and the only woman to do so."
          ],
          "reveal": "Marie Curie won the 1903 Nobel Prize in Physics (shared, for research on radiation phenomena) and the 1911 Nobel Prize in Chemistry (sole winner, for discovering radium and polonium).",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Albert Einstein",
          "accept": ["albert einstein", "einstein"],
          "clues": [
            "I asked why shining light on a metal can knock electrons loose in a sudden, all-or-nothing way that older physics could not explain.",
            "My explanation showed that light comes in tiny packets of energy, helping launch the field of quantum physics.",
            "That idea made possible technologies like solar cells and digital light sensors.",
            "I am the wild-haired physicist most famous for the equation E=mc², though that is not what my Nobel was for."
          ],
          "reveal": "Albert Einstein won the 1921 Nobel Prize in Physics 'for his discovery of the law of the photoelectric effect'—not for his theory of relativity.",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Alexander Fleming",
          "accept": ["alexander fleming", "fleming", "sir alexander fleming"],
          "clues": [
            "I was frustrated that ordinary infections could kill people, and there was no reliable way to stop bacteria growing in a wound.",
            "In 1928 I noticed that a mold accidentally growing on one of my lab dishes was killing the bacteria around it.",
            "The medicine that grew from my observation became the first widely used antibiotic and has saved millions of lives.",
            "The mold I studied was Penicillium, and the drug is called penicillin."
          ],
          "reveal": "Alexander Fleming shared the 1945 Nobel Prize in Physiology or Medicine with Ernst Chain and Howard Florey 'for the discovery of penicillin and its curative effect in various infectious diseases.'",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Barbara McClintock",
          "accept": ["barbara mcclintock", "mcclintock"],
          "clues": [
            "I wanted to know why kernels on a single ear of corn come out in so many different, unpredictable color patterns.",
            "By tracking maize chromosomes for decades, I discovered that some genetic elements can jump to new positions in the genome.",
            "These 'jumping genes' changed how scientists understand how genes switch on and off—ideas central to modern genetics.",
            "I am the woman who won an unshared Medicine Nobel for discovering mobile genetic elements, or transposons."
          ],
          "reveal": "Barbara McClintock won the 1983 Nobel Prize in Physiology or Medicine 'for her discovery of mobile genetic elements,' becoming the only woman to win an unshared prize in that category.",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Toni Morrison",
          "accept": ["toni morrison", "morrison"],
          "clues": [
            "I set out to tell American stories that had often been left out or told from only one point of view.",
            "In novels like Beloved and Song of Solomon, I wrote about the history and inner lives of Black Americans with poetic force.",
            "My books reshaped American literature and are read in classrooms around the world.",
            "I was the first African American woman to win the Nobel Prize in Literature."
          ],
          "reveal": "Toni Morrison won the 1993 Nobel Prize in Literature as a novelist who 'in novels characterized by visionary force and poetic import, gives life to an essential aspect of American reality.'",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Wangari Maathai",
          "accept": ["wangari maathai", "maathai", "wangari muta maathai"],
          "clues": [
            "In rural Kenya I saw women walking farther and farther for firewood and water as forests disappeared.",
            "I founded a grassroots movement that organized ordinary people—especially women—to plant tens of millions of trees.",
            "My work linked protecting the environment to fighting poverty, defending democracy, and building peace.",
            "I led the Green Belt Movement and was the first African woman to win the Nobel Peace Prize."
          ],
          "reveal": "Wangari Maathai won the 2004 Nobel Peace Prize 'for her contribution to sustainable development, democracy and peace,' the first time the Peace Prize centered on environmental work.",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Amartya Sen",
          "accept": ["amartya sen", "sen", "amartya kumar sen"],
          "clues": [
            "I questioned the common belief that famines happen simply because there is not enough food.",
            "Working in welfare economics, I showed that famines often come from poverty and unequal access, not just food shortage.",
            "My ideas changed how governments and aid groups respond to hunger, and helped create measures of well-being beyond just income.",
            "I am the Indian economist who won the economics Nobel for work on welfare economics and social choice."
          ],
          "reveal": "Amartya Sen won the 1998 Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 'for his contributions to welfare economics,' including social choice theory and the study of famines and poverty.",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Malala Yousafzai",
          "accept": ["malala yousafzai", "malala", "yousafzai"],
          "clues": [
            "In my valley, an armed group tried to stop girls from attending school, and I refused to stay silent.",
            "I spoke and wrote publicly for every child's right to an education, even after being attacked for it.",
            "My voice helped make girls' education a global cause and inspired laws and funding worldwide.",
            "I am the youngest person ever to win a Nobel Prize, awarded when I was 17."
          ],
          "reveal": "Malala Yousafzai shared the 2014 Nobel Peace Prize with Kailash Satyarthi 'for their struggle against the suppression of children and young people and for the right of all children to education'; at 17 she is the youngest laureate ever.",
          "source": "NobelPrize.org"
        },
        {
          "answer": "Emmanuelle Charpentier and Jennifer Doudna",
          "accept": ["charpentier and doudna", "doudna and charpentier", "charpentier", "doudna", "emmanuelle charpentier", "jennifer doudna", "crispr"],
          "clues": [
            "We wanted to understand how bacteria defend themselves by cutting up the DNA of invading viruses.",
            "Studying that bacterial immune system, we turned it into a precise tool for cutting and editing DNA at chosen spots.",
            "Our 'genetic scissors' are now used worldwide to develop disease treatments and improve crops.",
            "The tool we developed in 2012 is known by the name CRISPR-Cas9."
          ],
          "reveal": "Emmanuelle Charpentier and Jennifer Doudna shared the 2020 Nobel Prize in Chemistry 'for the development of a method for genome editing' (CRISPR-Cas9).",
          "source": "NobelPrize.org"
        }
      ]
    },
    {
      "id": "which-field",
      "type": "sort",
      "title": "Which Field?",
      "time": "20-30 min",
      "instructions": "Read each contribution card and decide which of the six Nobel categories it belongs to: Physics, Chemistry, Physiology or Medicine, Literature, Peace, or Economic Sciences. Some are trickier than they look—discuss the borderline ones with a partner before deciding.",
      "teacherMove": "After sorting, spotlight the two flagged 'borderline' cards. Ask: why might one discovery touch several fields? Use this to discuss how modern breakthroughs increasingly blur the lines between chemistry, biology, and computer science.",
      "categories": [
        { "id": "c1", "label": "Physics" },
        { "id": "c2", "label": "Chemistry" },
        { "id": "c3", "label": "Physiology or Medicine" },
        { "id": "c4", "label": "Literature" },
        { "id": "c5", "label": "Peace" },
        { "id": "c6", "label": "Economic Sciences" }
      ],
      "items": [
        { "text": "Discovering the law of the photoelectric effect, showing light behaves as packets of energy (Einstein).", "cat": "c1", "feedback": "Einstein's 1921 Nobel was in Physics for the photoelectric effect." },
        { "text": "Discovering and isolating the radioactive element radium.", "cat": "c2", "feedback": "Marie Curie's 1911 prize for isolating radium was in Chemistry." },
        { "text": "Discovering penicillin and its power to cure bacterial infections.", "cat": "c3", "feedback": "Fleming, Chain, and Florey shared the 1945 prize in Physiology or Medicine for penicillin." },
        { "text": "Writing novels of visionary force that give life to an essential aspect of American reality (Toni Morrison).", "cat": "c4", "feedback": "Toni Morrison won the 1993 Nobel Prize in Literature." },
        { "text": "Founding a grassroots tree-planting movement that linked the environment to democracy and peace.", "cat": "c5", "feedback": "Wangari Maathai's Green Belt work won the 2004 Nobel Peace Prize." },
        { "text": "Advancing welfare economics and explaining why famines happen even when food exists.", "cat": "c6", "feedback": "Amartya Sen won the 1998 economics prize for welfare economics." },
        { "text": "Discovering mobile genetic elements ('jumping genes') by studying corn chromosomes.", "cat": "c3", "feedback": "McClintock's 1983 prize was in Physiology or Medicine." },
        { "text": "Discovering nucleoside base modifications that made effective mRNA vaccines against COVID-19 possible (Karikó and Weissman).", "cat": "c3", "feedback": "Karikó and Weissman won the 2023 Physiology or Medicine prize; note it is CHEMISTRY-adjacent RNA work but was awarded in Medicine." },
        { "text": "Developing CRISPR-Cas9, a precise method for editing DNA (Charpentier and Doudna). [Borderline]", "cat": "c2", "feedback": "Borderline: this DNA-editing biology tool was awarded in CHEMISTRY (2020), not Medicine, surprising many." },
        { "text": "Building AI models that predict how proteins fold into 3-D shapes (AlphaFold, Hassabis and Jumper) and designing new proteins (Baker). [Borderline]", "cat": "c2", "feedback": "Borderline: this artificial-intelligence achievement was awarded the 2024 CHEMISTRY prize, blending computer science and biology." },
        { "text": "Foundational discoveries in machine learning with artificial neural networks (Hopfield and Hinton).", "cat": "c1", "feedback": "Surprisingly, this AI work won the 2024 PHYSICS prize." },
        { "text": "Developing metal–organic frameworks, sponge-like materials that can capture gases and water from air.", "cat": "c2", "feedback": "Yaghi, Kitagawa, and Robson won the 2025 Chemistry prize for metal–organic frameworks." },
        { "text": "Efforts to promote democratic rights during a national political crisis in Venezuela (María Corina Machado).", "cat": "c5", "feedback": "María Corina Machado won the 2025 Nobel Peace Prize." },
        { "text": "Explaining how new technology drives lasting economic growth through 'creative destruction' (Aghion, Howitt, and Mokyr).", "cat": "c6", "feedback": "The 2025 economics prize honored explanations of innovation-driven growth." }
      ]
    },
    {
      "id": "explain-twelve",
      "type": "extend",
      "title": "Explain It Like I'm Twelve",
      "time": "25-35 min",
      "instructions": "Pick one prize-winning idea below. Your job is to rewrite it so a 12-year-old could understand it, without losing what makes it true. Use everyday words, add one analogy, keep one accurate technical term, and include a simple labeled sketch.",
      "teacherMove": "Model the difference between 'simple' and 'wrong.' Have students trade explanations and check each other against the plain summary, so simplifying does not become misinformation.",
      "cards": [
        { "idea": "mRNA vaccines", "plainSummary": "An mRNA vaccine delivers a set of temporary 'instructions' into some of your cells, telling them to build a harmless piece of a virus (like the coronavirus spike). Your immune system sees that piece, learns to recognize it, and is ready to fight the real virus later. The instructions break down quickly and do not change your DNA.", "technicalWord": "messenger RNA (mRNA)" },
        { "idea": "CRISPR gene editing", "plainSummary": "CRISPR-Cas9 is a tool borrowed from bacteria that works like a find-and-replace for DNA. A guide molecule finds one exact spot in the genome, and a protein called Cas9 cuts the DNA there so scientists can turn a gene off or swap in a change.", "technicalWord": "genome" },
        { "idea": "The photoelectric effect", "plainSummary": "When light hits certain metals, it can knock electrons loose—but only if the light's color (its energy) is high enough, no matter how bright it is. This showed that light travels in tiny energy packets, not just smooth waves. It is the idea behind solar panels and light sensors.", "technicalWord": "photon (light packet)" },
        { "idea": "Metal-organic frameworks (MOFs)", "plainSummary": "MOFs are materials built from metal points connected by carbon-based struts, forming a crystal full of tiny holes—like a microscopic sponge with huge inner surface area. Those holes can trap specific gases or even pull drinking water out of dry desert air.", "technicalWord": "porosity" }
      ],
      "requirements": [
        "One plain-language explanation (everyday words, no jargon)",
        "One analogy or comparison to something familiar",
        "One accurate technical word, used and defined correctly",
        "One labeled sketch that supports the explanation"
      ],
      "fields": [
        { "label": "Idea I chose", "hint": "Name one of the four cards." },
        { "label": "My plain explanation", "hint": "3-5 sentences a 12-year-old would understand." },
        { "label": "My analogy", "hint": "It works like ___ because ___." },
        { "label": "My technical word + definition", "hint": "One term, defined in your own words." },
        { "label": "My labeled sketch", "hint": "Draw and label at least two parts." }
      ],
      "example": "mRNA vaccine: 'The vaccine hands a few of your cells a recipe card that says how to build one harmless spike from the virus. The cells build the spike, your immune system studies it like a wanted poster, then throws the recipe away. The technical word is messenger RNA—a short-lived instruction molecule. It works like emailing a photo of a burglar to security guards so they recognize the burglar later, then deleting the email.'"
    },
    {
      "id": "before-after",
      "type": "explain",
      "title": "Before and After",
      "time": "25-30 min",
      "instructions": "Look at the evidence below about the impact of penicillin. Then answer the question, using the sentence starter. Be careful to separate a change the evidence DIRECTLY supports from one that is only ASSOCIATED (happened around the same time but not proven by this evidence alone).",
      "teacherMove": "Push back on the 'lone genius saved the world' story. Point out that Fleming discovered penicillin in 1928, but Chain and Florey's later teamwork made it a usable drug—discoveries usually need many people and years to reach impact.",
      "evidence": {
        "kind": "table",
        "caption": "The path from discovery to life-saving medicine: penicillin, 1928-1945.",
        "description": "A short set of sourced facts about penicillin's development. Fact 1: In 1928, Alexander Fleming noticed that a Penicillium mold killed bacteria on a lab dish, but the substance was unstable and hard to produce in pure form. Fact 2: Between 1935 and 1941, Howard Florey, Ernst Chain, and their team learned to purify penicillin and ran the first successful clinical trials in 1941. Fact 3: Penicillin was mass-produced and used to treat infected wounds during World War II in the early-to-mid 1940s. Fact 4: In 1945, Fleming, Chain, and Florey shared the Nobel Prize in Physiology or Medicine for penicillin and its curative effect in infections.",
        "rows": [
          ["When", "What happened"],
          ["1928", "Fleming observes mold killing bacteria; substance unstable and hard to purify"],
          ["1935-1941", "Florey and Chain's team purifies penicillin; first successful clinical trials in 1941"],
          ["Early-mid 1940s", "Penicillin mass-produced and used to treat infections during World War II"],
          ["1945", "Fleming, Chain, and Florey share the Nobel Prize for penicillin"]
        ]
      },
      "question": "Which change is directly supported by this evidence, and which is only associated with it?",
      "sentenceStarter": "The evidence directly supports that ___, but the claim that ___ is only associated, because the evidence does not show it.",
      "model": "The evidence directly supports that turning penicillin into a usable medicine took a team over many years—Fleming's 1928 discovery was unstable, and it was Florey and Chain's purification and 1941 trials that made it work. The claim that 'Fleming alone cured infectious disease' is only associated: he made the first observation, but the evidence shows others were needed to make it a real treatment.",
      "canSupport": "Penicillin's journey from discovery to cure required multiple scientists working across nearly two decades (1928-1945).",
      "cannotSupport": "That any single person single-handedly created and delivered the penicillin cure."
    },
    {
      "id": "award-committee",
      "type": "extend",
      "title": "The Award Committee",
      "time": "30-40 min",
      "instructions": "Imagine your class gives out its own 'Curiosity Prize.' Nominate a real person, group, or idea you think deserves recognition—it does not have to be a Nobel winner. Make your case using all six required parts, including one honest limitation or counterpoint.",
      "teacherMove": "Insist on the limitation/counterpoint field. Real Nobel committees weigh trade-offs and controversy; requiring a counterpoint teaches students that strong nominations acknowledge complexity instead of hiding it.",
      "requirements": [
        "Nominee (person, group, or idea)",
        "Category (which field or kind of contribution)",
        "Contribution (what they actually did)",
        "Evidence (a fact or source that backs it up)",
        "Why it matters (the real-world impact)",
        "One limitation or counterpoint (a fair criticism, trade-off, or unknown)"
      ],
      "fields": [
        { "label": "Nominee", "hint": "Who or what are you nominating?" },
        { "label": "Category", "hint": "e.g., Science, Peace, Literature, Community, Invention." },
        { "label": "Contribution", "hint": "In one or two sentences, what did they do?" },
        { "label": "Evidence", "hint": "Name a source, date, or verifiable fact." },
        { "label": "Why it matters", "hint": "Who benefits, and how?" },
        { "label": "Limitation or counterpoint", "hint": "One honest downside, trade-off, or open question." }
      ],
      "example": "Nominee: The scientists behind mRNA vaccines (Katalin Karikó and Drew Weissman). Category: Medicine. Contribution: They found chemical modifications to RNA that let it be used safely as a vaccine. Evidence: They won the 2023 Nobel Prize in Physiology or Medicine (NobelPrize.org). Why it matters: mRNA vaccines helped protect billions of people during the COVID-19 pandemic. Limitation: Karikó's ideas were rejected and underfunded for years, showing that even prize-worthy work can be overlooked—and that access to vaccines was unequal worldwide."
    }
  ]
};
