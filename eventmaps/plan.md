# Build Plan: TEKS-Aligned History Event Maps Website

## Project Goal

Build a self-contained, privacy-first website called **History Event Maps** for grades 3–5, 6–8, and 9–12 social studies/history classrooms.

The site will provide a family of visual historical-thinking organizers rather than variations of one traditional event-map worksheet.

The instructional routine is:

1. Students review two to three short, credible sources.
2. Students conduct brief research and complete as much of an Event Map as they can.
3. Students compare evidence and interpretations.
4. The teacher projects or displays the same organizer.
5. The teacher fills gaps, corrects misconceptions, adds vocabulary, and provides additional historical context.
6. Students revise/add to their Event Maps.
7. Students complete a short synthesis or transfer question.

The finished site should match the practical level of detail and usability of the existing activities at:

https://mglearn.github.io/activities

Do not create a generic worksheet repository. The project should function as a **historical-thinking activity library**.

---

# 1. Non-Negotiable Requirements

## Audience

Create materials for:

- Grades 3–5
- Grades 6–8
- Grades 9–12

High-school activities may align to:

- United States History
- World History
- World Geography
- United States Government
- Economics

## Standards

Activities must align to the **current Texas Social Studies TEKS in 19 TAC Chapter 113**.

Important:

- Verify TEKS against current TEA sources before entering exact codes.
- Never fabricate a TEKS code.
- Distinguish between content TEKS and social studies skills TEKS.
- Store TEKS in data files, not hard-coded inside worksheet artwork.
- Design the architecture so standards can be updated later without redrawing PDFs.
- Include a visible note that districts should confirm exact locally adopted standards/codes when appropriate.

## Languages

Every student-facing resource must be available in the same seven-language model used by the activities site.

Target languages:

1. English
2. Spanish
3. Vietnamese
4. Arabic
5. Simplified Chinese
6. Urdu
7. Hindi

Do not bake instructional text into PNG/JPG graphics.

All translated labels should remain HTML/SVG/live text so layouts can adapt to longer translations.

Arabic and Urdu must receive appropriate RTL handling.

## Formats

Every Event Map must be available as:

- Browser version
- Color printable PDF
- True grayscale printable PDF
- Teacher version
- Student version

The grayscale version must NOT simply be a desaturated color image.

Use:

- Different line weights
- Solid/dashed/dotted borders
- Patterns where needed
- Icons
- Text labels

Information must remain understandable without color.

## Technical Requirements

Prefer:

- Static HTML/CSS/JavaScript
- GitHub Pages-compatible deployment
- No server
- No database
- No login
- No student accounts
- No user tracking required for functionality
- No student data collection
- No external runtime dependencies unless unavoidable
- Fully usable by opening locally where practical

Keep code modular, readable, simple, and maintainable.

Use:

- Semantic HTML
- CSS custom properties
- SVG for organizers
- JSON for activity/content data
- JSON locale files for translations
- JavaScript only where needed

---

# 2. Design the Collection Around Historical Thinking

Do NOT reproduce the traditional event map shown in the reference image.

Create nine distinct Event Map families.

Each map should support a particular form of historical reasoning.

---

# 3. Grades 3–5 Event Maps

## Map 1: History Trail

### Purpose

Help students identify chronology and tell the basic story of an event.

### Structure

Include:

- Event name
- Where?
- When?
- Four to six important moments
- Important people/groups
- What happened?
- Why did this moment matter?
- One question students still have

Use a visual path/trail rather than a conventional vertical timeline.

### Best Uses

Examples:

- Exploration
- Settlement
- Texas history
- American Revolution
- Inventions
- Migration
- Community/local history
- Civic events

### Historical Thinking

Primary emphasis:

- Chronology
- Sequence
- Basic significance
- People and place

---

## Map 2: Cause Ripples

### Purpose

Help students distinguish causes, events, immediate effects, and longer-term consequences.

### Visual Structure

Create concentric rings/ripples.

Center:

**THE EVENT**

Inner ring:

**What caused it?**

Second ring:

**What happened right afterward?**

Outer ring:

**What changed later?**

Also include:

- People/groups affected
- Evidence/source markers
- "Which result mattered most?"

### Historical Thinking

Primary emphasis:

- Cause and effect
- Immediate versus long-term consequences

---

## Map 3: People, Place, Change

### Purpose

Connect people/groups, geography, and historical change.

### Structure

Use three interconnected lenses:

**WHO?**
- People
- Groups
- Leaders

**WHERE?**
- Location
- Region
- Important geographic features

**WHAT CHANGED?**
- Government
- Community
- Economy
- Culture
- Land
- Daily life

Final synthesis:

**How were the people, place, and change connected?**

### Historical Thinking

Primary emphasis:

- Geography
- People/groups
- Change over time
- Connections

---

# 4. Grades 6–8 Event Maps

## Map 4: Turning Point Map

### Purpose

Help students decide whether an event changed the direction of history.

### Structure

Use:

BEFORE  
↓  
PRESSURES BUILDING  
↓  
TURNING POINT  
↓  
IMMEDIATE RESULTS  
↓  
LONGER-TERM CHANGE

Side panels:

**Who pushed events toward this point?**

**Who resisted?**

**Could events have gone differently?**

Final synthesis:

**Why could this be considered a turning point?**

### Historical Thinking

Primary emphasis:

- Change over time
- Historical significance
- Causation
- Contingency

---

## Map 5: Voices Around the Event

### Purpose

Help students analyze multiple perspectives rather than treating historical groups as a single voice.

### Structure

Place the event in the center.

Surround it with three to five stakeholder cards.

Each stakeholder card contains:

- Person/group
- What did they want?
- What did they fear or oppose?
- What action did they take?
- What evidence supports this?
- How did the event affect them?

Bottom synthesis:

- Where did perspectives overlap?
- Where did they conflict?
- Whose perspective is missing from the sources?

### Historical Thinking

Primary emphasis:

- Perspective
- Motivation
- Evidence
- Historical empathy without presentism

### Good Topics

Examples:

- Colonization
- Texas Revolution
- American Revolution
- Constitutional debates
- Westward expansion
- Sectionalism
- Civil War
- Reconstruction
- Civil rights
- Immigration
- Public policy

---

## Map 6: Conflict and Consequence Chain

### Purpose

Show that major events often develop through interacting actions and reactions rather than a single cause.

### Structure

Create a branching sequence:

PRESSURE  
↓  
ACTION  
↓  
REACTION  
↓  
ESCALATION  
↓  
EVENT  
↓  
CONSEQUENCES

Allow one or more alternate branches.

Include:

- Source evidence
- People/groups responsible for actions
- "Which link was most important?"
- "Where might events have gone differently?"

### Historical Thinking

Primary emphasis:

- Multiple causation
- Escalation
- Action/reaction
- Historical contingency
- Consequences

---

# 5. Grades 9–12 Event Maps

## Map 7: Historical Evidence Dossier

### Purpose

Move students from gathering facts to supporting a historical conclusion with evidence.

### Structure

Style this visually like an investigation file/dossier.

Include:

### Historical Question

### What We Think We Know

### Evidence Card 1
- Source
- Primary/secondary
- Evidence
- Why it matters
- Reliability/limitation

### Evidence Card 2

Same fields.

### Evidence Card 3

Same fields.

### Conflicting Evidence

### Missing Evidence

### Working Conclusion

### Teacher Additions

### Historical Thinking

Primary emphasis:

- Evidence
- Source evaluation
- Corroboration
- Claim construction

---

## Map 8: Systems Shockwave

### Purpose

Analyze how one historical event can affect multiple systems.

### Structure

Place the event in the center.

Create four major outward pathways:

### Political

- Immediate effect
- Secondary effect
- Evidence

### Economic

- Immediate effect
- Secondary effect
- Evidence

### Social/Cultural

- Immediate effect
- Secondary effect
- Evidence

### Geographic/Environmental

- Immediate effect
- Secondary effect
- Evidence

For each pathway, provide space for:

- Who benefited?
- Who faced costs?
- Short-term or long-term?

Final synthesis:

**Which effect had the greatest historical significance? Explain using evidence.**

### Good Topics

Examples:

- Industrialization
- Wars
- Revolutions
- Migration
- Economic crises
- Major legislation
- Technological change
- Imperialism
- Globalization

---

## Map 9: Continuity and Change Ledger

### Purpose

Help students distinguish dramatic historical change from continuity.

### Main Structure

Three columns:

| BEFORE | DURING | AFTER |
|--------|--------|-------|

Below the main columns:

### Changed Significantly

### Changed Gradually

### Stayed Mostly the Same

### Why?

Final synthesis:

**Was this event truly a turning point? Use evidence from at least two sources.**

### Historical Thinking

Primary emphasis:

- Continuity and change
- Periodization
- Significance
- Evidence-based judgment

---

# 6. Common Source Strip

All Event Maps should include a consistent lightweight citation system.

For grades 3–5 and 6–8:

## Source 1

- Title/type
- One useful fact

## Source 2

- Title/type
- One useful fact

## Source 3

- Title/type
- One useful fact

Students label information on the map with:

①  
②  
③

or:

S1  
S2  
S3

Do not force elementary/middle school students into formal citation formatting for this activity.

For grades 9–12, extend the Source Strip to include:

- Primary or secondary?
- Creator
- Date
- Useful evidence
- Reliable because...
- Limitation...

---

# 7. The Student-to-Teacher Workflow

A defining feature of the project is that the teacher uses the SAME map students just investigated.

Each activity must include two closely related versions.

## Student Investigation Map

Characteristics:

- Mostly blank
- Short prompts
- Source-number markers
- Significant writing space
- No answer key embedded
- Enough ambiguity for actual investigation

## Teacher Expansion Map

Characteristics:

- Same visual structure
- Suggested responses
- Key vocabulary
- Historical context
- Common misconceptions
- Important missing information
- Optional discussion prompts
- TEKS references
- Suggested "add this to your map" notes

The teacher should be able to project the organizer after the student investigation and continue filling it in.

Do not force the teacher to switch to an unrelated slideshow for the explanation phase.

---

# 8. Six-Step Classroom Routine

Package the instructional routine consistently across the site.

## 1. Scan

Students examine two to three short sources.

## 2. Map

Students record what they can determine from the evidence.

## 3. Compare

Students compare evidence and interpretations with a partner/group.

## 4. Expand

Teacher fills knowledge gaps, corrects misconceptions, and provides additional historical context.

## 5. Revise

Students add, correct, or reorganize information on their Event Maps.

## 6. Conclude

Students answer one synthesis question.

Keep this routine visible on individual activity pages.

---

# 9. Optional ACE Connection

Where appropriate, include a short post-map ACE reflection.

ACE means:

### Articulate

Explain the event or historical idea in your own words.

### Connect

Explain how people, causes, places, ideas, or consequences fit together.

### Extend

Apply the historical pattern or idea to a different situation, era, or problem.

Do NOT turn every activity into an ACE worksheet.

Use ACE as an optional synthesis layer after the historical investigation.

---

# 10. Website Information Architecture

Suggested structure:

```text
/
├── index.html
├── about/
├── maps/
├── activities/
├── teacher/
├── standards/
├── downloads/
├── assets/
├── data/
├── locales/
├── templates/
└── scripts/
````

Possible URLs:

```text
/
 /maps/
 /maps/history-trail/
 /maps/cause-ripples/
 /maps/people-place-change/
 /maps/turning-point/
 /maps/voices/
 /maps/conflict-consequence/
 /maps/evidence-dossier/
 /maps/systems-shockwave/
 /maps/continuity-change/

 /activities/boston-tea-party/
 /activities/battle-of-gonzales/
 /activities/new-deal/
```

---

# 11. Landing Page

Title:

# History Event Maps

Suggested subtitle:

**Investigate an event. Examine the evidence. Build the story. Fill in the gaps.**

Provide a brief description:

Students examine two or three sources, complete what they can on a visual Event Map, compare their thinking, and then revise the map as the teacher adds historical context.

Primary controls:

## Grade Band

* Grades 3–5
* Grades 6–8
* Grades 9–12

## Course

Possible options:

* Elementary Social Studies
* Texas History
* United States History
* World History
* World Geography
* Government
* Economics

## Map Type

List all nine.

## Era/Topic

Data-driven.

## Language

Seven languages.

## Format

* Browser
* Color
* Grayscale

## Search

Placeholder:

**Search an event, person, place, era, or TEKS**

---

# 12. Activity Cards

Cards should match the practical information density of the existing Learning Activities Hub.

Example:

## Boston Tea Party

Grades 6–8
United States History

**Voices Around the Event**

Examine how Patriots, merchants, British officials, and other colonists viewed taxation, resistance, and British authority.

**Estimated time:** 20–30 minutes

TEKS:
[verified codes loaded from data]

Actions:

* Open Activity
* Color PDF
* Grayscale PDF
* Teacher Guide

Optional tags:

* American Revolution
* Multiple Perspectives
* Primary Sources
* Cause and Effect

---

# 13. Individual Activity Page

Each activity page should contain the following sections.

## Historical Challenge

Two to four sentences explaining the investigation.

Do not reveal the complete answer before students investigate.

## Investigate

Provide two or three carefully selected sources.

Each source includes:

* Source title
* Source type
* Short description
* External link
* One or two investigation questions
* Optional excerpt only when legally appropriate

Prefer authoritative/public sources:

* Library of Congress
* National Archives
* Smithsonian
* TEA
* Texas State Library and Archives Commission
* National Park Service
* Government archives
* University archives
* Museum collections
* Public-domain historical collections

Avoid copying large amounts of copyrighted text.

## Build Your Event Map

Display an accessible browser preview.

Actions:

* Open full-screen map
* Download color
* Download grayscale

## Compare

Provide one or two short peer-discussion prompts.

## Expand

Tell students that the teacher will add context, corrections, vocabulary, and missing information.

Do not place teacher answers in the student view.

## Revise

Prompt students to modify their original Event Map.

## Conclude

Provide one historical-thinking synthesis question.

## Optional ACE It

* Articulate
* Connect
* Extend

## Standards

Show verified:

* Grade/course
* Content TEKS
* Skills TEKS

## Downloads

* Student Color PDF
* Student Grayscale PDF
* Teacher Color PDF
* Teacher Grayscale PDF

---

# 14. Data-Driven Architecture

Do not create separate hard-coded HTML pages by hand for every event.

Use structured data.

Suggested activity data:

```json
{
  "id": "boston-tea-party",
  "title": "Boston Tea Party",
  "gradeBands": ["6-8"],
  "courses": ["us-history"],
  "mapType": "voices-around-event",
  "era": "american-revolution",
  "estimatedMinutes": 25,
  "summary": "",
  "challenge": "",
  "sources": [],
  "comparePrompts": [],
  "conclusionPrompt": "",
  "ace": {
    "enabled": true,
    "articulate": "",
    "connect": "",
    "extend": ""
  },
  "teks": {
    "content": [],
    "skills": [],
    "verifiedDate": "",
    "source": ""
  },
  "teacher": {
    "keyIdeas": [],
    "misconceptions": [],
    "vocabulary": [],
    "context": [],
    "discussionPrompts": []
  },
  "tags": []
}
```

Use a JSON schema to validate activity records.

---

# 15. Locale Architecture

Suggested structure:

```text
/locales/
  en.json
  es.json
  vi.json
  ar.json
  zh-CN.json
  ur.json
  hi.json
```

Use keys rather than duplicating markup.

Example:

```json
{
  "site.title": "History Event Maps",
  "routine.scan": "Scan",
  "routine.map": "Map",
  "routine.compare": "Compare",
  "routine.expand": "Expand",
  "routine.revise": "Revise",
  "routine.conclude": "Conclude",
  "map.source1": "Source 1",
  "map.event": "Event"
}
```

Requirements:

* UTF-8
* RTL support for Arabic/Urdu
* Do not assume identical text lengths
* Do not force fixed-height text fields that break translations
* Keep icons independent from English labels
* Perform visual QA in every language

---

# 16. Organizer Rendering Strategy

Create organizer templates primarily as SVG.

Benefits:

* Vector-quality printing
* Easy language replacement
* Browser preview
* Accessible live text
* Easy color/grayscale switching
* PDF generation
* Reusable layouts

Suggested template files:

```text
/templates/
  history-trail.svg
  cause-ripples.svg
  people-place-change.svg
  turning-point.svg
  voices-around-event.svg
  conflict-consequence.svg
  evidence-dossier.svg
  systems-shockwave.svg
  continuity-change.svg
```

Do not turn finished worksheets into raster images unless creating thumbnails.

---

# 17. Color Design

Use a restrained educational palette.

Suggested TCEA-compatible colors:

```css
--navy: #0A3476;
--gold: #FCB040;
--cream: #F4F8FC;
--slate: #52647A;
--teal: #238A8D;
--purple: #6D5AA8;
--orange: #D97A28;
--green: #5A8F52;
```

The worksheet should still have substantial white space.

Color should carry organizational meaning, not decoration.

Do not use large dark backgrounds on printable worksheets.

---

# 18. Grayscale Design

Create a dedicated grayscale mode.

Example mapping:

```text
Cause = solid border
Event = heavy double border
Immediate consequence = dashed border
Long-term consequence = dotted border
Evidence = document icon
Perspective = person icon
Geography = location icon
```

Requirements:

* Printable on inexpensive school printers
* No meaning dependent on shading alone
* No large gray fills consuming toner
* Strong text contrast
* Distinct section structures

---

# 19. PDF Requirements

PDF outputs should preferably use:

* US Letter
* Landscape for most Event Maps
* 0.35–0.5 inch safe margins
* Vector text and lines
* Large writing spaces
* No clipped content
* No decorative backgrounds consuming toner

Filename format:

```text
boston-tea-party_voices_en_student_color.pdf
boston-tea-party_voices_en_student_gray.pdf
boston-tea-party_voices_en_teacher_color.pdf
boston-tea-party_voices_en_teacher_gray.pdf
```

Generic template examples:

```text
history-trail_en_student_color.pdf
history-trail_es_student_gray.pdf
```

---

# 20. PDF Generation Scale

Nine templates × seven languages × two print modes × two versions:

```text
9 × 7 × 2 × 2 = 252
```

That means the system potentially has **252 generic core PDF variants**.

Do not maintain these manually.

Generate them programmatically during the build.

Event-specific PDFs should use the same template engine.

---

# 21. Teacher Guides

Each activity needs a teacher guide containing:

## Purpose

What historical thinking the map develops.

## Suggested Time

Typical duration.

## Before Class

What the teacher should check/prepare.

## Student Investigation

How to launch the source review.

## Teacher Expansion

Suggested:

* Missing context
* Vocabulary
* Misconceptions
* Questions
* Connections

## Possible Responses

Provide guidance, not rigid scripted answers where interpretation is reasonable.

## Standards

Verified TEKS.

## Extension

One optional deeper-thinking task.

## Accessibility/ML Supports

Include relevant supports such as:

* Chunked sources
* Read-aloud options
* Home-language access
* Visual vocabulary
* Sentence stems
* Reduced writing load
* Oral response option

---

# 22. Accessibility

Target WCAG 2.1 AA minimum.

Requirements:

* Semantic heading hierarchy
* Keyboard navigation
* Visible keyboard focus
* Adequate contrast
* No color-only meaning
* Proper language attributes
* RTL handling
* Alt text for meaningful images
* Decorative images hidden from assistive technology
* SVG elements labeled where required
* PDFs tagged if feasible
* Plain-language student instructions
* Mobile-friendly pages
* No horizontal page scrolling for ordinary site content
* Printable organizers must remain usable with enlarged print when possible

Provide accessibility notes in the README.

---

# 23. Privacy

Default behavior:

**Collect nothing.**

The project should:

* Require no login
* Store no student work server-side
* Request no names
* Request no email
* Use no classroom identifiers
* Avoid third-party trackers
* Process UI preferences locally when necessary

If localStorage is used:

* Use only for harmless preferences such as language/filter settings
* Document its use
* Include a clear reset mechanism

Provide a short privacy/data behavior statement on the site.

---

# 24. Initial Content Set

Do NOT begin by building hundreds of activities.

Build one complete example of each map family first.

## Pilot Phase

Create nine pilot activities:

* Three grades 3–5
* Three grades 6–8
* Three grades 9–12

Each pilot should test one map family.

After templates and workflows are validated, expand to 36 activities.

## Target Initial Release

### Grades 3–5

12 activities

Possible content categories:

* Communities
* Exploration
* Texas history
* U.S. founding
* Civic milestones
* Westward growth
* Innovation
* Migration

### Grades 6–8

12 activities

Possible content:

* Texas history
* Colonial America
* American Revolution
* Constitution
* Westward expansion
* Sectionalism
* Civil War
* Reconstruction

### Grades 9–12

12 activities spread across:

* U.S. History
* World History
* World Geography
* Government
* Economics

Use Event Map types based on the historical thinking demanded by the event.

Do not assign a worksheet format merely because the event belongs to a particular grade.

---

# 25. Suggested Nine Pilot Activities

These are starting suggestions only. Verify TEKS and instructional suitability before implementation.

## Grades 3–5

### History Trail

Founding of a Texas community or sequence-based Texas history event

### Cause Ripples

A major event with clear short-term and long-term effects

### People, Place, Change

Migration, settlement, or regional development

## Grades 6–8

### Turning Point Map

Battle of Gonzales or another Texas/U.S. historical turning point

### Voices Around the Event

Boston Tea Party

### Conflict and Consequence Chain

Events leading toward the American Revolution or Civil War

## Grades 9–12

### Historical Evidence Dossier

A contested historical question supported by primary sources

### Systems Shockwave

Industrialization, Great Depression, major war, or legislation

### Continuity and Change Ledger

Reconstruction, Progressive Era, Cold War, decolonization, or similar broad transformation

Do not lock these selections until exact standards and source availability have been checked.

---

# 26. Search and Filtering

Filters should work client-side.

Support combinations such as:

```text
Grade 7
+ Texas History
+ Turning Point
+ English
```

or:

```text
Grades 9–12
+ World History
+ Systems Shockwave
+ Spanish
```

Search should inspect:

* Event title
* Person
* Place
* Era
* Tags
* Course
* TEKS code
* Historical-thinking skill

Include a clear "Reset filters" control.

---

# 27. Website Visual Design

Match the practical, friendly nature of:

[https://mglearn.github.io/activities](https://mglearn.github.io/activities)

Do not clone it exactly.

Desired characteristics:

* Clean
* Bright
* Classroom-oriented
* Fast
* Card-driven
* Strong filtering
* Large readable typography
* Minimal animation
* Print-focused
* Mobile-friendly

Use TCEA-style navy/gold accents sparingly.

Thumbnails for Event Map types should visually show their structural differences.

---

# 28. Homepage Feature Sections

Suggested homepage sequence:

## History Event Maps

Short explanation.

## How It Works

Six-step routine:

Scan → Map → Compare → Expand → Revise → Conclude

## Choose Your Grade Band

Three large cards.

## Choose How You Want Students to Think

Nine map-type cards grouped by grade band.

## Featured Investigations

Show selected activity cards.

## Browse All Activities

Link to library.

## For Teachers

Teacher guide and standards information.

## Languages

Seven-language selector.

---

# 29. Map Type Gallery

Create a visual gallery for all nine map families.

Each map card includes:

* Thumbnail
* Map name
* Grade band
* Historical-thinking focus
* "Best for..."
* View blank map
* View sample
* Download

Example:

### Voices Around the Event

Grades 6–8

**Think about:** perspective, motivation, evidence

Best for events involving several groups with competing goals.

Buttons:

* Preview
* Sample
* Color
* Grayscale

---

# 30. Mockup to Build First

Create the first fully functional mockup using:

# Voices Around the Event

Grade band:

**Grades 6–8**

Suggested demonstration topic:

**Boston Tea Party**

The mockup should NOT resemble the traditional worksheet supplied as the reference image.

## Layout Concept

Center:

```text
               ┌──────────────────────┐
               │     THE EVENT        │
               │                      │
               │ Boston Tea Party     │
               │ Dec. 16, 1773        │
               └──────────────────────┘
```

Around the center place four stakeholder cards:

```text
┌─────────────────────┐       ┌─────────────────────┐
│ PATRIOTS            │       │ BRITISH OFFICIALS   │
│                     │       │                     │
│ Wanted:             │       │ Wanted:             │
│                     │       │                     │
│ Feared/opposed:     │       │ Feared/opposed:     │
│                     │       │                     │
│ Evidence:           │       │ Evidence:           │
└─────────────────────┘       └─────────────────────┘


                 ┌───────────────┐
                 │   THE EVENT   │
                 │               │
                 │ Boston Tea    │
                 │ Party         │
                 └───────────────┘


┌─────────────────────┐       ┌─────────────────────┐
│ MERCHANTS           │       │ OTHER COLONISTS     │
│                     │       │                     │
│ Wanted:             │       │ Wanted:             │
│                     │       │                     │
│ Feared/opposed:     │       │ Feared/opposed:     │
│                     │       │                     │
│ Evidence:           │       │ Evidence:           │
└─────────────────────┘       └─────────────────────┘
```

Bottom synthesis strip:

```text
WHERE DID THEY AGREE?

____________________________________________________

WHERE DID THEY CONFLICT?

____________________________________________________

WHOSE PERSPECTIVE IS MISSING?

____________________________________________________
```

Include a small source strip:

```text
SOURCE 1       SOURCE 2       SOURCE 3
```

Provide room for students to write.

Generate:

* Browser preview
* Student color
* Student grayscale
* Teacher color
* Teacher grayscale

Do not overfill the sample with answers.

The point is to test the system.

---

# 31. Source Selection Rules

Each activity should usually contain two to three sources.

Prefer:

* Primary sources
* Short secondary contextual sources
* Maps
* Political cartoons
* Photographs
* Posters
* Charts
* Government records
* Speeches
* Letters
* Newspaper excerpts when rights allow

Do not overwhelm students with long readings.

Each source should contribute something useful to completing the Event Map.

Avoid sources where every answer comes from one page.

The activity should require students to combine evidence.

---

# 32. Research Quality Rules

Every historical activity must pass these checks:

* Dates verified
* Names verified
* Event sequence verified
* Source attribution verified
* Links working
* No invented quotes
* No invented historical claims
* No fabricated TEKS
* Multiple perspectives represented when relevant
* Presentism avoided
* Language appropriate for grade band

For disputed historical interpretations:

* Identify reasonable interpretations
* Do not present speculation as settled fact
* Ask students to weigh evidence where appropriate

---

# 33. Build Phases

## Phase 1: Repository and Architecture

Create:

* README
* File structure
* Base CSS
* Base JS
* Activity JSON schema
* Locale architecture
* TEKS data structure
* Build scripts
* Validation scripts

Deliverable:

Site shell loads locally.

---

## Phase 2: Nine Blank Templates

Create the nine generic Event Map SVG templates.

For each:

* Student color
* Student grayscale
* Teacher-ready structure
* Responsive browser preview

Do NOT build 36 activities yet.

Validate layout first.

---

## Phase 3: One Complete Pilot

Build:

**Voices Around the Event**

Use the selected pilot historical event.

Complete:

* Research
* Sources
* Student activity
* Teacher guide
* TEKS
* Seven languages
* PDFs
* Accessibility checks

This becomes the reference implementation.

Do not proceed to mass replication until this activity works.

---

## Phase 4: Complete Nine Pilots

Build one activity per Event Map type.

Validate:

* Map layouts
* PDF generation
* Teacher workflow
* Translation behavior
* Standards display
* Source cards
* Filters
* Search

---

## Phase 5: Seven-Language QA

For all nine pilots:

* Test all seven languages
* Test RTL languages
* Check overflowing labels
* Check SVG text placement
* Check PDFs
* Verify fonts
* Confirm no missing translations

---

## Phase 6: Expand to 36 Activities

After pilot approval:

* 12 grades 3–5
* 12 grades 6–8
* 12 grades 9–12

Use the same schema.

Do not duplicate page code.

---

## Phase 7: Final Website

Complete:

* Homepage
* Browse page
* Map gallery
* Activity pages
* Teacher area
* Standards area
* Download center
* About/privacy/accessibility pages

---

## Phase 8: Validation

Run automated and manual tests.

---

# 34. Validation Requirements

Create automated validators where practical.

## JSON Validation

Check:

* Every activity validates against schema
* Required fields exist
* Grade bands valid
* Map type valid
* Languages valid
* TEKS arrays formatted correctly

## Link Validation

Check:

* Internal links
* Source links
* PDF links
* Teacher guide links
* Locale links

Report broken links.

## Translation Validation

Check:

* Missing keys
* Extra keys
* Empty strings
* English leakage where translation expected

## PDF Validation

Check:

* File exists
* Page count
* Page dimensions
* No clipping
* Expected language
* Expected color mode
* Expected student/teacher mode

## HTML Validation

Check:

* Heading hierarchy
* Duplicate IDs
* Missing labels
* Broken ARIA relationships
* Invalid nesting

## Accessibility

Check programmatically where possible and manually review:

* Keyboard navigation
* Focus
* Contrast
* RTL
* Mobile layouts
* Screen-reader labels

---

# 35. Build Scripts

Suggested scripts:

```text
npm run validate
npm run build
npm run build:pdf
npm run check:links
npm run check:locales
npm run check:data
npm run serve
```

If avoiding Node dependencies, provide equivalent scripts in Python.

Keep the tooling simple.

Do not introduce a large frontend framework solely for this project.

---

# 36. Repository Organization

Suggested structure:

```text
history-event-maps/
│
├── README.md
├── index.html
├── package.json
│
├── assets/
│   ├── css/
│   ├── icons/
│   └── thumbnails/
│
├── data/
│   ├── activities/
│   ├── standards/
│   ├── maps.json
│   └── schema/
│
├── locales/
│   ├── en.json
│   ├── es.json
│   ├── vi.json
│   ├── ar.json
│   ├── zh-CN.json
│   ├── ur.json
│   └── hi.json
│
├── templates/
│   ├── history-trail.svg
│   ├── cause-ripples.svg
│   ├── people-place-change.svg
│   ├── turning-point.svg
│   ├── voices-around-event.svg
│   ├── conflict-consequence.svg
│   ├── evidence-dossier.svg
│   ├── systems-shockwave.svg
│   └── continuity-change.svg
│
├── activities/
│
├── teacher/
│
├── standards/
│
├── downloads/
│
├── scripts/
│   ├── build-site.*
│   ├── build-pdfs.*
│   ├── validate-data.*
│   ├── validate-links.*
│   └── validate-locales.*
│
└── tests/
```

Organize code by feature when that makes maintenance easier.

Avoid duplicate logic.

---

# 37. README Requirements

README should explain:

## Purpose

What History Event Maps are.

## Instructional Model

Scan → Map → Compare → Expand → Revise → Conclude

## Grade Bands

3–5, 6–8, 9–12

## Nine Map Types

List them.

## Running Locally

Simple instructions.

## Adding an Activity

Step-by-step process.

## Adding a Translation

Step-by-step process.

## Updating TEKS

Explain where TEKS data is stored.

## Generating PDFs

Commands.

## Validation

Commands/checks.

## Privacy

No student data.

## Accessibility

Design expectations.

## Licensing

Provide appropriate content/code licensing information once confirmed.

---

# 38. Development Rules for Codex

Follow these rules during implementation:

1. Plan each feature before coding it.
2. Build one complete activity before scaling.
3. Keep functions small.
4. Avoid deep nesting.
5. Use descriptive names.
6. Use one source of truth for activity data.
7. Never manually duplicate event content across HTML/PDF/teacher pages.
8. Generate outputs from JSON wherever practical.
9. Validate input data.
10. Fail clearly when required data is missing.
11. Add tests as features are introduced.
12. Run validation after each major phase.
13. Do not fabricate missing historical information.
14. Do not fabricate TEKS.
15. Document uncertain standards/content for human review.
16. Keep student answer keys out of student-facing files.
17. Do not expose teacher answer keys from obvious student navigation.
18. Do not add accounts, databases, analytics, or cloud APIs without explicit approval.
19. Prefer client-side functionality.
20. Maintain Git history with logical commits.

---

# 39. Definition of Done for One Activity

An activity is NOT complete until all of these exist:

* [ ] Activity JSON
* [ ] Historical facts verified
* [ ] Two to three usable sources
* [ ] Student instructions
* [ ] Student browser map
* [ ] Student color PDF
* [ ] Student grayscale PDF
* [ ] Teacher guide
* [ ] Teacher color PDF
* [ ] Teacher grayscale PDF
* [ ] Content TEKS verified
* [ ] Skills TEKS verified
* [ ] Seven languages
* [ ] RTL tested where applicable
* [ ] Mobile page tested
* [ ] Keyboard accessibility tested
* [ ] Source links tested
* [ ] PDFs tested for clipping
* [ ] Grayscale tested on actual/virtual monochrome print
* [ ] No answers leaked into student version
* [ ] Activity appears correctly in search/filter system
* [ ] Automated validators pass

---

# 40. Definition of Done for MVP

The MVP should include:

* Nine Event Map templates
* Nine complete pilot activities
* Three grade bands
* Seven languages
* Color and grayscale
* Student and teacher versions
* Search/filter library
* Browser previews
* Automated PDF generation
* Verified TEKS display
* Source links
* Teacher guides
* Accessibility documentation
* Privacy documentation
* Validation scripts
* README
* GitHub Pages-ready build

Do not call the project complete merely because the homepage renders.

---

# 41. First Implementation Task

Start with the following sequence:

## Task 1

Inspect the existing repository, if one exists.

Do not overwrite working code.

Report:

* Current structure
* Existing design system
* Existing language system
* Existing build tooling
* Existing reusable components

## Task 2

Create `IMPLEMENTATION_PLAN.md` based on this specification.

Break work into small Git-friendly milestones.

## Task 3

Create the activity JSON schema.

## Task 4

Create the base site shell and seven-language system.

## Task 5

Create the **Voices Around the Event** SVG template in:

* Color
* Grayscale

## Task 6

Create one complete pilot activity using that template.

## Task 7

Generate:

* Browser version
* Student color PDF
* Student grayscale PDF
* Teacher color PDF
* Teacher grayscale PDF

## Task 8

Validate the pilot.

STOP at this point and report results before mass-producing additional Event Maps.

---

# 42. Critical Instruction to Codex

Do not jump immediately to producing all 36 activities.

The order is:

**Architecture → one template → one complete activity → validation → nine templates/pilots → multilingual QA → expansion.**

The first activity is the test of the entire system.

If the architecture makes that activity difficult to maintain, fix the architecture before adding more content.
