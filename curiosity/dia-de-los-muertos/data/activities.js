/* Día de los Muertos — Curiosity Challenge data.
   Facts verified against UNESCO, Smithsonian, and cultural-institution sources.
   Framed as a living tradition, not "Mexican Halloween." See data/sources.md. */
window.CURIOSITY_PACK = {
  "title": "Día de los Muertos: Five Classroom Activities for Culture, Symbols, and Story",
  "slug": "dia-de-los-muertos",
  "tagline": "Explore a living tradition through symbols, maps, myth-busting, design, and story.",
  "accent": "#a8327d",
  "gradeBands": ["3-5", "6-8", "9-12"],
  "activities": [
    {
      "id": "symbol-detective",
      "type": "sort",
      "title": "Symbol Detective: What Each Ofrenda Object Does",
      "time": "20-25 min",
      "instructions": "An ofrenda (home altar) welcomes deceased loved ones back for a visit. Sort each object by the main role it plays. Some objects can do more than one job, and families choose differently — pick the role that best fits, then read the feedback to see how meanings vary.",
      "teacherMove": "Frame the ofrenda as an act of love and remembrance, not decoration. Emphasize that no two altars are identical and that families add or omit items for personal, regional, and religious reasons. Avoid calling it 'spooky' or comparing it to Halloween.",
      "categories": [
        { "id": "c1", "label": "Guides the spirits (light & scent)" },
        { "id": "c2", "label": "Nourishes visiting spirits" },
        { "id": "c3", "label": "Remembers a specific person" },
        { "id": "c4", "label": "Represents life's fragility / the cycle" }
      ],
      "items": [
        { "text": "Marigolds (cempasúchil)", "cat": "c1", "feedback": "UNESCO and Purépecha tradition describe marigold petals and their strong scent laid in paths to help guide souls home; many families scatter petals from the gate or cemetery to the altar, though the amount and placement vary by region." },
        { "text": "Candles", "cat": "c1", "feedback": "Candlelight is set out to help spirits find their way, and Michoacán's all-night lakeside vigils on Janitzio are famous for their glow; some families light one candle per remembered person, others light many." },
        { "text": "Copal incense", "cat": "c1", "feedback": "Copal, from the Náhuatl 'copalli,' is a tree resin whose fragrant smoke is believed to carry prayers upward and help attract and guide spirits; its use is common but not universal on every altar." },
        { "text": "Water", "cat": "c2", "feedback": "A glass of water is often set out to refresh spirits after their long journey and as a sign of welcome; some families instead offer atole, coffee, or a favorite drink." },
        { "text": "Salt", "cat": "c2", "feedback": "Salt is frequently placed in a small dish and is widely associated with purification and protection; families connect it to different meanings, and not every altar includes it." },
        { "text": "Pan de muerto", "cat": "c2", "feedback": "Pan de muerto is a sweet bread, often round with bone-shaped strips on top, offered as food for the visiting spirits; its shapes and flavors differ from region to region." },
        { "text": "The person's favorite foods", "cat": "c2", "feedback": "Families prepare the deceased's favorite dishes and place them on the altar and at the tomb; the specific foods are deeply personal, from mole and tamales to a loved one's preferred candy." },
        { "text": "Photographs", "cat": "c3", "feedback": "A photo names and honors the specific person being remembered and is often the visual center of the altar; some families use several photos across generations." },
        { "text": "Personal objects", "cat": "c3", "feedback": "Belongings like a hat, tool, toy, or instrument recall who the person was; on November 1 many families add toys for children (angelitos), reserving November 2 for adults." },
        { "text": "Papel picado", "cat": "c4", "feedback": "Cut-paper banners flutter with any breeze, and their delicate, moving paper is often read as a reminder of the fragility of life; designs and colors vary widely by maker and region." },
        { "text": "Sugar or clay calaveras (skulls)", "cat": "c4", "feedback": "Decorative sugar skulls (alfeñiques) present death as something familiar rather than fearful and may carry a loved one's name; many are made to display rather than eat, and clay versions are common where sugar art is less traditional." },
        { "text": "Monarch butterfly imagery", "cat": "c4", "feedback": "In Michoacán, Purépecha tradition sees monarchs arriving near the holiday as souls returning, tying the tradition to nature's cycle; this association is strongest in the butterflies' wintering region and less central elsewhere." }
      ]
    },
    {
      "id": "map-tradition",
      "type": "spot",
      "variant": "notice-wonder",
      "title": "Map the Tradition",
      "time": "15-20 min",
      "instructions": "Use the map and its written description to locate Mexico and several places where Día de los Muertos is observed. Notice what the regions share and wonder about what changes as the tradition travels.",
      "teacherMove": "Stress that these are illustrative examples, not a claim that every community observes identically or that everyone in a region participates. Invite students to add places they know. Correct any 'all Mexicans do X' generalizations.",
      "image": {
        "file": "assets/images/dia-map.png",
        "alt": "Simple reference map highlighting Mexico and several regions associated with Día de los Muertos.",
        "description": "The map centers on Mexico and highlights several places associated with Día de los Muertos. In the west, Michoacán and the town of Pátzcuaro with its lake island of Janitzio are marked, known for candlelit nighttime vigils in cemeteries and Purépecha traditions. To the south, Oaxaca is highlighted, known for marigold-filled altars and neighborhood street processions called comparsas. Mexico City is marked in the center, including nearby Mixquic and its large cemetery observances. Farther north, the map shows U.S. diaspora communities in cities such as Los Angeles, San Antonio, and Chicago, where museums and neighborhoods host public celebrations. Together these points show one tradition expressed in many local ways rather than a single fixed practice.",
        "caption": "Día de los Muertos was inscribed on UNESCO's list of Intangible Cultural Heritage in 2008; while rooted in Indigenous Mexican communities, its practices vary by region and family and have spread through migration into U.S. communities, where institutions like the National Museum of Mexican Art present it publicly."
      },
      "prompts": [
        "Locate Mexico and the named regions (Michoacán/Pátzcuaro, Oaxaca, Mexico City, and U.S. diaspora communities).",
        "Compare two regions' practices using the description — for example, Michoacán's quiet candlelit vigils and Oaxaca's lively comparsas.",
        "Wonder: what stays similar and what changes as the tradition moves between regions and across the border?"
      ]
    },
    {
      "id": "fact-misconception",
      "type": "sort",
      "title": "Fact or Misconception?",
      "time": "25-30 min",
      "instructions": "Read each statement and decide: is it Supported by cultural and historical sources, is it a Misconception, or does it truly Depend on the community or family? Read the feedback to check your thinking.",
      "teacherMove": "This is the myth-busting core of the pack. Guard against the 'Mexican Halloween' framing, monolithic claims, and treating the tradition as a costume theme. When a statement 'depends,' celebrate that variation rather than seeking one 'right' answer.",
      "categories": [
        { "id": "c1", "label": "Supported" },
        { "id": "c2", "label": "Misconception" },
        { "id": "c3", "label": "Depends on community or family" }
      ],
      "items": [
        { "text": "Día de los Muertos is basically 'Mexican Halloween.'", "cat": "c2", "feedback": "Museums stress it is a distinct tradition of remembrance and love with pre-Hispanic and Catholic roots, not a version of Halloween, even though both fall near the same time of year." },
        { "text": "The main days are November 1 and November 2.", "cat": "c1", "feedback": "The celebration centers on November 1 and 2, aligned with the Catholic feasts of All Saints' and All Souls', with preparations often beginning in late October." },
        { "text": "November 1 is often dedicated to remembering children who have died.", "cat": "c1", "feedback": "In many communities November 1 honors deceased children ('angelitos'), while November 2 focuses on adults, though families observe this timing in their own ways." },
        { "text": "The tradition blends pre-Hispanic Indigenous practices with Catholic observances.", "cat": "c1", "feedback": "UNESCO describes a fusion of pre-Hispanic religious rites with Catholic feasts introduced by Europeans in the sixteenth century." },
        { "text": "Marigolds' color and scent are believed to help guide spirits.", "cat": "c1", "feedback": "Petals are laid in paths and on altars precisely because their bright color and strong scent are believed to help guide returning souls." },
        { "text": "Every family builds its altar exactly the same way.", "cat": "c2", "feedback": "Altars vary widely by region, family, budget, and belief; there is no single required layout or set of objects." },
        { "text": "La Catrina is an ancient Aztec goddess of the dead.", "cat": "c2", "feedback": "The elegant skeleton figure comes from printmaker José Guadalupe Posada's early-1900s 'Calavera Garbancera,' later named 'La Catrina' by muralist Diego Rivera — a modern satirical image, not an ancient deity." },
        { "text": "Painting one's face as a Catrina skull is a centuries-old ritual requirement.", "cat": "c2", "feedback": "Catrina face painting is a relatively recent, largely public and artistic popularization; it is not a required ritual and did not exist in its current form before the twentieth century." },
        { "text": "Sugar skulls (calaveras) are always meant to be eaten.", "cat": "c3", "feedback": "Some sugar skulls are edible gifts while many elaborately decorated ones are made to display on the altar; whether they are eaten depends on the family and the skull." },
        { "text": "Monarch butterflies are seen as the souls of the dead returning.", "cat": "c3", "feedback": "This belief is strong in Purépecha Michoacán, where monarchs arrive around the holiday, but it is not central to the tradition everywhere." },
        { "text": "Papel picado is a purely pre-Hispanic art unchanged for millennia.", "cat": "c2", "feedback": "Modern papel picado developed after colonial trade brought thin 'papel de China' tissue paper, becoming a distinct craft centered in San Salvador Huixcolotla, Puebla, in the twentieth century." },
        { "text": "The ofrenda is meant to welcome and honor loved ones, not to scare people.", "cat": "c1", "feedback": "Cultural institutions describe the altar as an act of welcome, care, and remembrance for returning loved ones, not as something frightening." },
        { "text": "Comparsas (satirical costumed street parades) happen the same way everywhere in Mexico.", "cat": "c3", "feedback": "Comparsas are especially associated with Oaxaca and are not a feature of every region's observance, such as Michoacán's quiet candlelit vigils." }
      ]
    },
    {
      "id": "pattern-hunt",
      "type": "spot",
      "variant": "notice-wonder",
      "title": "Pattern and Design Hunt",
      "time": "20-25 min",
      "instructions": "Look closely at the papel picado pattern in the description. Hunt for design principles — repetition, symmetry, color, symbol, and focal point — then infer why an artist might arrange a design this way.",
      "teacherMove": "Keep the focus on design PRINCIPLES, not on copying specific images. When students later create their own patterns, guide them to invent respectful motifs rather than reproduce sacred or personal imagery from a real family's altar.",
      "image": {
        "file": "assets/images/dia-papel-picado.png",
        "alt": "A single rectangular papel picado banner with a cut-paper pattern.",
        "description": "A single rectangular banner of thin colored paper has a design cut out of it so that light passes through the holes. A wide border frames the edges, and the interior is organized by a vertical line of symmetry, so the left and right halves mirror each other. A central medallion of curling, flower-like shapes forms a clear focal point, surrounded by rows of small repeated diamonds and half-circles that create a steady rhythm. Scalloped points run along the bottom edge, and the paper's bright color contrasts with the wall behind it. The overall effect is delicate, balanced, and lively.",
        "caption": "Papel picado is a Mexican folk art of chiseling designs into stacked sheets of thin 'papel de China' tissue paper; the town of San Salvador Huixcolotla in Puebla is recognized as its cradle and was named a cultural heritage of the state in 1998."
      },
      "prompts": [
        "Notice repetition and symmetry — where do shapes repeat, and where does one half mirror the other?",
        "Identify the focal point and color choices — what draws your eye first, and how does color affect the mood?",
        "Infer why the design might be arranged this way — how do the cut-out holes, border, and rhythm work together when the banner hangs and moves?"
      ]
    },
    {
      "id": "memory-story",
      "type": "extend",
      "title": "Memory Story",
      "time": "25-40 min",
      "instructions": "Día de los Muertos is, at heart, about remembering. Create a short remembrance artifact that honors a subject of your choice — a person, a place, a tradition, a pet, or a meaningful memory. Your subject can be fictional or historical; you never have to share a personal loss.",
      "teacherMove": "Model with a historical or fictional example first so no student feels pressured toward personal grief. Offer the six-word option as a low-stakes entry point. Celebrate variety of subjects, and connect back to how remembrance, not spectacle, is the core of the tradition.",
      "requirements": [
        "Choose a subject you want to honor (fictional or historical subjects are welcome).",
        "Create ONE of: a six-word remembrance, a mini story (3-5 sentences), OR an illustrated memory card with a short caption."
      ],
      "fields": [
        { "label": "Subject", "hint": "Who or what are you remembering? (a person, place, tradition, pet, or memory — real, historical, or fictional)" },
        { "label": "Six-word remembrance", "hint": "Sum up the subject in exactly six words, e.g., 'Taught whole town to plant corn.'" },
        { "label": "Mini story or caption", "hint": "3-5 sentences, or a caption for your memory card, telling why this subject is worth remembering." },
        { "label": "One symbol I would add", "hint": "Name a marigold, favorite food, object, or image you'd place with this memory — and say why." }
      ],
      "privacyNote": "Students are never required to share personal loss; fictional or historical subjects are welcome.",
      "example": "Subject: Monarch butterflies. Six-word remembrance: 'Small wings crossing a whole continent.' Mini story: Each autumn, monarchs travel thousands of miles to the forests of Michoacán, arriving around early November. For generations, people there have welcomed their return as a sign of renewal and remembrance. I would add an image of orange wings to honor a journey that connects distant places."
    }
  ]
};
