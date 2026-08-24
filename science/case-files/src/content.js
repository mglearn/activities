/* ============================================================
   CER & ACE Case Files — canonical content
   Single source of truth for the teacher guide, both student
   packets, both PowerPoint decks, and the website. Edit here,
   then run `node src/build.js` (PDFs + site data) and
   `node src/build-decks.js` (PPTX).
   ============================================================ */

const BRAND = {
  title: 'CER & ACE Case Files',
  tagline: 'Observe. Test. Explain. Extend.',
  publisher: 'TCEA',
  grades: 'Grades 5–8 core · K–16 adaptable',
  url: 'https://mglearn.github.io/activities/science/case-files/',
};

/* The four-move routine that every case shares. */
const ROUTINE = [
  { n: '01', move: 'Observe', text: 'Record what you notice before naming the object or explaining the result.' },
  { n: '02', move: 'Test',    text: 'Choose a property, tool, or measurement that can produce useful evidence.' },
  { n: '03', move: 'Explain', text: 'Connect the result to a science idea. Tell why the evidence matters.' },
  { n: '04', move: 'Check',   text: 'Retest, consider another explanation, and state what still feels uncertain.' },
];

const ROLES = [
  { role: 'Evidence manager', text: 'Handles tools and samples safely' },
  { role: 'Recorder',         text: 'Writes observations and measurements' },
  { role: 'Skeptic',          text: 'Checks whether the evidence supports the claim' },
  { role: 'Reporter',         text: "Shares the group's explanation and uncertainty" },
];

const EVIDENCE_RULE =
  'A result is not automatically evidence. Explain what the result tells you and why it matters.';

/* The two response formats. */
const FORMATS = {
  CER: {
    id: 'CER',
    name: 'Claim · Evidence · Reasoning',
    blurb: 'Claim answers the mystery. Evidence names specific observations or data. Reasoning explains why the evidence supports the claim using a science concept.',
    use: 'Use CER when students need a formal scientific argument. They state a claim, cite specific evidence, and connect that evidence to a science idea.',
    pageDeck: 'Build an argument from the evidence',
    intro: 'Answer the mystery. Use specific data from Page 1, then explain the science idea that connects the evidence to your claim.',
    stems: 'Based on my investigation, I claim… | The strongest evidence is… | This supports my claim because…',
    sections: [
      { n: '1', head: 'Claim',                  hint: 'One clear sentence that answers the mystery.',                                        lines: 2, tone: 'accent' },
      { n: '2', head: 'Evidence',               hint: 'Name the measurements and observations that best support the claim.',                 lines: 4, tone: 'plain'  },
      { n: '3', head: 'Reasoning',              hint: 'Explain why the evidence supports the claim. Name the science concept that makes the evidence matter.', lines: 4, tone: 'alt' },
      { n: '4', head: 'Alternative explanation', hint: 'What else might explain the result, and what evidence makes it less likely?',        lines: 2, tone: 'plain'  },
      { n: '5', head: 'Confidence check',       hint: 'What increases or limits your confidence?',                                           lines: 2, tone: 'accent' },
    ],
  },
  ACE: {
    id: 'ACE',
    name: 'Articulate · Connect · Extend',
    blurb: 'Articulate what you learned and how you know. Connect it to something you already know. Extend it with a prediction, application, or new test.',
    use: "Use ACE when you want to hear more of the student's thinking. Students articulate what they learned, connect it to prior knowledge, and extend it with a prediction, application, or new test.",
    pageDeck: 'Move from surface to connection and transfer',
    intro: 'Use Page 1 evidence in every section. Your own words matter more than polished language.',
    stems: 'I discovered… | This connects to… because… | If I changed…, I predict… because…',
    checklist: ['I named a result from Page 1.', 'I explained why it matters.', 'My extension could be tested or used.'],
    sections: [
      { n: 'A', head: 'Articulate it', hint: 'What did you figure out? Say it in your own words and name the evidence that changed or confirmed your thinking.', lines: 5, tone: 'accent' },
      { n: 'C', head: 'Connect it',    hint: 'How does this result connect to something you already learned, observed, or experienced? Explain the relationship.', lines: 5, tone: 'alt' },
      { n: 'E', head: 'Extend it',     hint: 'Apply the idea somewhere new. Write a prediction, a real-world use, or a new test you could carry out.',           lines: 5, tone: 'plain' },
    ],
  },
};

/* The worked example that models the routine before students get a blank case. */
const WORKED = {
  n: '00',
  slug: 'worked',
  title: 'Worked Example: Density Deception',
  deck: 'How evidence becomes an explanation',
  img: 'case-density.jpg',
  mystery: 'Four equal-volume cubes were tested. Which cube is aluminum, and how does the density evidence support the identification?',
  materials: 'Four 2 cm cubes, balance, ruler, water tub, paper towels, calculator',
  safety: 'Wipe spills. Lower cubes gently and keep the balance dry.',
  observe: {
    label: 'Sample / object',
    rows: [
      ['Cube A', 'Light tan; floats high',  'Hands; water'],
      ['Cube B', 'White; floats low',       'Hands; water'],
      ['Cube C', 'Silver-gray; sinks',      'Hands; water'],
      ['Cube D', 'Dark gray; sinks fast',   'Hands; water'],
    ],
  },
  evidence: {
    rows: [
      ['Mass',    'A=4.0 g; B=7.6 g; C=21.6 g; D=56.8 g', 'Mass differs at equal volume'],
      ['Volume',  'All cubes = 8 cm³',                    'Volume is controlled'],
      ['Density', 'A=0.50; B=0.95; C=2.70; D=7.10',       'C matches aluminum'],
    ],
  },
  answers: {
    CER: [
      'Cube C is aluminum.',
      'All four cubes had the same 8 cm³ volume. Cube C had a mass of 21.6 g, so its density was 2.70 g/cm³. That value matches the aluminum reference value, and Cube C sank in water as predicted.',
      'Density is mass per unit volume and is a characteristic physical property under stated conditions. Dividing 21.6 g by 8 cm³ gives 2.70 g/cm³. Because this matches the reference value for aluminum, the measurements support the identification.',
      'Cube D is also metallic and sank, but its density of 7.10 g/cm³ matches zinc, not aluminum.',
      'High, because the calculated density matches the reference value; the water test is supporting evidence, not enough by itself.',
    ],
    ACE: [
      'I found that Cube C is aluminum. Its mass was 21.6 g and its volume was 8 cm³, so its density was 2.70 g/cm³.',
      'This connects to using characteristic properties to identify an unknown instead of relying only on color or whether it sinks.',
      'Cube B has a density of 0.95 g/cm³. I predict it will sink in vegetable oil near 0.91 g/cm³ but float in water and denser saltwater.',
    ],
  },
};

/* The five cases. */
const CASES = [
  {
    n: '01',
    slug: 'mixture',
    title: 'Mystery Mixture',
    deck: 'Separate the evidence without changing it',
    focus: 'Physical properties and separation',
    figureOut: 'Which method separates each mixture',
    img: 'case-mixture.jpg',
    mystery: 'Four mixtures are made from familiar solids. Choose a separation method for each sample, then use physical properties to explain why your method worked.',
    materials: 'Samples A–D, trays, magnet wand, sieve, water cups, filter funnel, filter paper, scoop, magnifier',
    safety: 'Wear goggles. Do not taste samples. Keep iron filings contained; do not rinse them into a sink.',
    observe: { label: 'Sample / object', rows: ['Sample A', 'Sample B', 'Sample C', 'Sample D'] },
    evidence: { rows: ['Magnetism', 'Particle size / sieve', 'Solubility + filtration'] },
    prep: 'Prepare A: iron filings + sand; B: salt + sand; C: gravel + sand; D: steel washers + plastic beads. Keep the amounts small and place each sample on a labeled tray.',
    key: 'A separates with a magnet. B separates by dissolving salt, filtering sand, then evaporating the water. C separates by particle size with a sieve. D separates with a magnet or by hand sorting.',
    questions: [
      'Which property are you using as evidence?',
      'Did the components change identity when you separated them?',
      'What would you try if your first method failed?',
    ],
    misconception: 'Dissolving is not the same as disappearing. The dissolved substance remains in the solution.',
    extend: 'Have students design the fewest-step process that separates a three-part mixture.',
    tx: 'Direct: 5.6B and 6.6B, mixture properties',
    ngss: 'Practice: 5-PS1-3; add material identification for the full PE',
    blogHead: 'Separate a Mystery Mixture',
    blog: [
      'Students receive four teacher-prepared mixtures and a small set of tools: a magnet, sieve, water, filter, and magnifier. Their job is to choose a separation method based on an observable property.',
      'The useful part comes after the separation. Students must explain why the method worked. “I used the magnet” is a procedure. “The magnet removed the iron because iron is magnetic and sand is not” shows the beginning of scientific reasoning.',
    ],
  },
  {
    n: '02',
    slug: 'density',
    title: 'Density Deception',
    deck: 'Use mass and volume to identify the unknown',
    focus: 'Mass, volume, and relative density',
    figureOut: 'Which cube matches an unknown material',
    img: 'case-density.jpg',
    mystery: 'Four equal-size cubes look similar. Which cube is aluminum? Measure mass and volume, calculate density, and compare your results with the reference table.',
    materials: 'Cubes A–D, digital balance, metric ruler or graduated cylinder, water tub, paper towels, calculator',
    safety: 'Wipe spills at once. Lower cubes into water gently. Keep the balance dry.',
    observe: { label: 'Sample / object', rows: ['Cube A', 'Cube B', 'Cube C', 'Cube D'] },
    evidence: { rows: ['Mass (g)', 'Volume (cm³)', 'Density (g/cm³)'] },
    prep: 'For controlled data cards, use four 2 cm cubes: A 4.0 g, B 7.6 g, C 21.6 g, D 56.8 g; each volume is 8 cm³. If using physical samples, measure them first and revise the table because wood and plastic densities vary.',
    key: 'A = wood (0.50), B = plastic (0.95), C = aluminum (2.70), D = zinc (7.10 g/cm³). Cube C is aluminum.',
    questions: [
      'Why can two equal-size cubes have different masses?',
      'What does a density greater than 1.0 predict in fresh water?',
      'How close must a measured value be to count as a match?',
    ],
    misconception: "Weight alone does not determine floating. Compare an object's density with the fluid's density.",
    extend: 'Predict and test each cube in vegetable oil, freshwater, and saltwater. Compare cube density with fluid density before testing.',
    tx: 'Direct: 6.6D; Grade 5 bridge: 5.6A',
    ngss: 'DCI connection: MS-PS1.A; 5-PS1-3 excludes density',
    blogHead: 'Unmask an Unknown with Density',
    blog: [
      'Four cubes look similar, but their masses tell a different story. Students measure mass and volume, calculate density, and compare their results with a short reference table.',
      'This case is built to expose a familiar misconception: heavy objects sink and light objects float. A large piece of wood may weigh more than a tiny metal cube and still float. Density, not weight alone, explains the result.',
      'I would use the completed example before handing students the blank case. It models how to move from measurements to a claim without turning the response into a fill-in-the-blank exercise.',
    ],
  },
  {
    n: '03',
    slug: 'states',
    title: 'State Detectives',
    deck: 'Follow the water and the energy',
    focus: 'Melting, condensation, and evaporation',
    figureOut: 'What changed and where energy moved',
    img: 'case-states.jpg',
    mystery: 'Water is changing at three stations. Identify melting, condensation, and evaporation, then explain whether the water undergoing each state change absorbs or releases energy.',
    materials: 'Ice and beaker, cold metal cup, shallow warm-water dish, thermometers, timer, balance, trays, paper towels',
    safety: 'Teacher provides warm water below 45 °C. No hot plates or open flames. Wipe condensation and spills.',
    observe: { label: 'Sample / object', rows: ['Station A: ice', 'Station B: cold cup', 'Station C: warm water', 'Room air'] },
    evidence: { rows: ['Start / end temperature', 'Visible change / mass', 'Energy absorbed or released'] },
    prep: 'A: ice in a clear beaker; B: metal cup filled with ice water and dried on the outside; C: a wide, shallow dish with a measured mass of warm water. Set all stations on trays and observe for 10–15 minutes.',
    key: 'A is melting: solid water absorbs energy. B shows condensation: water vapor from the air releases energy as it becomes liquid. C shows evaporation: surface molecules absorb enough energy to enter the gas phase; the remaining liquid may cool.',
    questions: [
      'Where did the droplets on the outside of the cup come from?',
      'What evidence shows a physical change rather than a new substance?',
      'How would surface area affect evaporation?',
    ],
    misconception: 'Condensation outside the cup does not leak through the cup; water vapor from the air forms the droplets.',
    extend: 'Change one variable, such as exposed surface area, and predict the effect on evaporation rate.',
    tx: 'Content: 6.6A; add particle comparisons for the full SE',
    ngss: 'Phenomenon: MS-PS1-4; add a particle model for the full PE',
    blogHead: 'Track a State Change',
    blog: [
      'This investigation uses three water stations: melting ice, condensation on a cold cup, and evaporation from warm water. There is no fizzing tablet pretending to be a state change. Fizzing is evidence that students should examine as a possible chemical change, which belongs in a different case.',
      'Students record what they see, measure temperature when appropriate, and identify whether thermal energy enters or leaves the system. The Extend prompt asks them to predict what would change if the room were warmer, the cup were colder, or the surface area increased.',
    ],
  },
  {
    n: '04',
    slug: 'magnet',
    title: 'Magnet or Mimic?',
    deck: 'Metallic shine is not enough evidence',
    focus: 'Magnetic properties',
    figureOut: 'Which objects respond to a magnet and why',
    img: 'case-magnet.jpg',
    mystery: 'Several objects look metallic, but only some respond strongly to a magnet. Which objects are magnetic, and what second property could help you classify the mimics?',
    materials: 'Magnet wand, steel washer, iron nail, paper clip, aluminum tab, copper disk, brass fastener, wood, plastic',
    safety: 'Keep magnets away from electronics. Test objects on a tray and return every small item after use.',
    observe: { label: 'Sample / object', rows: ['Object 1', 'Object 2', 'Object 3', 'Object 4'] },
    evidence: { rows: ['Magnetic attraction', 'Appearance / texture', 'Second property test'] },
    prep: 'Mix ferromagnetic and nonmagnetic objects that look metallic. Include at least one painted plain-carbon-steel item and one shiny aluminum item so appearance will not reveal the answer.',
    key: 'The iron nail, plain-carbon-steel washer, and steel paper clip should attract. Aluminum, copper, brass, wood, and plastic should not. Some stainless steels respond weakly or not at all; test the actual samples before class.',
    questions: [
      'Which evidence changed your first prediction?',
      "Does 'metal' always mean 'magnetic'?",
      'What additional property would separate two nonmagnetic samples?',
    ],
    misconception: 'Not all metals are magnetic. Magnetic response depends on the material, not on shine or color.',
    extend: 'Compare magnetic force at increasing distances using paper spacers as a simple distance scale.',
    tx: 'Direct: 5.6A, compare magnetism',
    ngss: 'Direct property match: 5-PS1-3; 3-PS2-3 only with distance/orientation',
    blogHead: 'Catch the Magnet Mimics',
    blog: [
      'Metallic shine is a poor magnetism test, but students often treat it as proof. This case mixes steel, aluminum, copper, brass, wood, and plastic objects so appearance alone will not solve it.',
      'After testing each object, students classify it and name a second property they could examine. That extra step keeps “metal” and “magnetic” from becoming accidental synonyms.',
    ],
  },
  {
    n: '05',
    slug: 'circuit',
    title: 'Conductor Clues',
    deck: 'A dark lamp needs a second look',
    focus: 'Electrical conductivity',
    figureOut: 'Which materials complete a low-voltage circuit',
    img: 'case-circuit.jpg',
    mystery: 'Which samples conduct electricity well enough to complete a low-voltage circuit? Test one sample at a time, then rule out loose clips or weak batteries before classifying an insulator.',
    materials: 'Two-AA battery holder, LED lamp module, insulated leads, alligator clips, copper, aluminum, graphite, plastic',
    safety: 'Use batteries only, never a wall outlet. Never clip the battery terminals directly together. Disconnect anything that becomes warm.',
    observe: { label: 'Sample / object', rows: ['Copper', 'Aluminum', 'Graphite', 'Plastic'] },
    evidence: { rows: ['Lamp on / off', 'Brightness', 'Retest result'] },
    prep: 'Build and test a low-voltage series circuit with one sample gap. Use a current-limited 3 V LED lamp module intended for two AA cells. Place unused samples away from the connected circuit.',
    key: 'Copper and aluminum should light the lamp. Graphite conducts, but its resistance and dimensions may keep this lamp dark. Plastic is an insulator. Check the circuit before treating a dark lamp as evidence.',
    questions: [
      'What must you check before calling a sample an insulator?',
      'Why might graphite produce a dimmer lamp than copper?',
      'Which material would you choose for a wire and for its covering?',
    ],
    misconception: 'A dark lamp does not prove insulation until the circuit and components have been checked.',
    extend: 'Rank conductors by lamp brightness, then discuss why brightness is only a rough comparison.',
    tx: 'Direct: 5.6A, conduct or insulate electric energy',
    ngss: 'Direct property match: 5-PS1-3',
    blogHead: 'Follow the Conductor Clues',
    blog: [
      'Students place one sample at a time into the gap of a safe, low-voltage circuit. If the lamp turns on, the sample conducted electricity. If it stays off, students check the connections before classifying the material.',
      'That check matters. A dark lamp may indicate an insulator, a loose clip, a dead battery, or a burned-out bulb. Science detectives do not confuse a failed setup with a finding.',
    ],
  },
];

/* Teacher-guide front matter. */
const QUICK_START = {
  lede: 'Run the completed density example before the first investigation. Students see what counts as an observation, data, and explanation. Then print Page 1 plus either CER or ACE for the case you want to use.',
  steps: [
    { n: '01', head: 'Choose the response',      text: 'CER fits formal argument-from-evidence practice. ACE fits reflection, connection, and transfer. Both require Page 1 evidence.' },
    { n: '02', head: 'Prepare one evidence tray', text: 'Keep sample amounts small. Test every setup before class. Put only the materials students need on the tray.' },
    { n: '03', head: 'Assign case roles',         text: 'Use evidence manager, recorder, skeptic, and reporter. Rotate roles across cases.' },
    { n: '04', head: 'Debrief the reasoning',    text: 'Ask which result changed a first idea, which explanation was ruled out, and what remains uncertain.' },
  ],
  changes: [
    'Coordinated, original case visuals with layout-added text',
    'State-change case uses melting, condensation, and evaporation only',
    'Low-voltage circuit includes a troubleshooting check before classification',
    'Standards table distinguishes direct matches from bridges and extensions',
  ],
};

const STANDARDS = {
  note: 'Core packet level: grades 5–8. Adapt the writing demand, instruments, precision, and analysis for younger students, high school, or introductory college courses.',
  practices: [
    'Ask questions and define problems',
    'Plan and conduct investigations',
    'Collect qualitative and quantitative evidence',
    'Analyze data, develop explanations, and communicate reasoning',
  ],
  sources: [
    ['Texas Education Agency TEKS', 'tea.texas.gov/curriculum-and-instruction/texas-essential-knowledge-and-skills-teks'],
    ['Texas Education Agency Science', 'tea.texas.gov/educators/subject-areas/science/science'],
    ['NGSS MS-PS1-4', 'nextgenscience.org/pe/ms-ps1-4-matter-and-its-interactions'],
    ['NGSS 5-PS1-3', 'nextgenscience.org/pe/5-ps1-3-matter-and-its-interactions'],
    ['NGSS 3-PS2-3', 'nextgenscience.org/pe/3-ps2-3-motion-and-stability-forces-and-interactions'],
  ],
  caveat: 'This guide treats standards matches carefully: direct matches are separated from prior-grade bridges and extensions. Confirm local pacing, materials, accommodations, and laboratory safety rules before use.',
};

const ASSESSMENT = {
  rubric: [
    ['Finding',          'Claim answers the mystery',                  2, 'Articulate states the finding',                 1],
    ['Evidence',         'Specific, accurate evidence',                4, 'Finding uses Page 1 evidence',                  2],
    ['Meaning',          'Reasoning connects evidence to concept',     3, 'Connect explains a meaningful relationship',    3],
    ['Transfer / limits','Alternative and confidence',                 1, 'Extend offers a testable or useful transfer',   4],
  ],
  scaffolds: [
    'Preteach: property, evidence, result, claim, density, conductor, and insulator',
    'Let students sketch observations before writing',
    'Provide a word bank, labeled tools, and one stem at a time',
    'Accept oral ACE responses while a partner records key evidence',
    'Keep the same mystery and evidence; reduce the writing load rather than the thinking load',
  ],
  grades: [
    ['K–2',                 'Observe two objects, sort, draw, and explain orally'],
    ['Grades 3–5',          'Use qualitative tests and one measurement'],
    ['Grades 6–8',          'Calculate, compare variables, and write CER or ACE'],
    ['Grades 9–12',         'Add uncertainty, repeated trials, error analysis, and graphing'],
    ['College / educator PD','Critique the method, redesign controls, and score competing explanations'],
  ],
  safety: 'Test tools and circuits before class. Follow district lab rules, accommodations, and disposal procedures. Replace any material that creates an allergy, ingestion, cut, burn, or electrical risk.',
};

const BLOG = {
  title: 'Make Thinking Visible: Science Detective Cases',   // the blog post's own title
  lede: 'Want to get students thinking of themselves as science detectives? Five hands-on cases, a teacher guide, and your choice of a Claim–Evidence–Reasoning or Articulate–Connect–Extend response page.',
  intro: 'The CER & ACE Case Files packet applies one reasoning routine to five short, hands-on investigations. Each case is a Page 1 investigation plus your choice of a Page 2 response: CER or ACE.',
  close: 'Print one case, gather the materials, and let students work the evidence before you supply the explanation. Their first answer may be rough. Good. Now you know what they actually think.',
  pairing: 'Pair a hands-on case with a Science Critical Thinking Online Breakout for a digital follow-up.',
};

module.exports = {
  BRAND, ROUTINE, ROLES, EVIDENCE_RULE, FORMATS, WORKED, CASES,
  QUICK_START, STANDARDS, ASSESSMENT, BLOG,
};
