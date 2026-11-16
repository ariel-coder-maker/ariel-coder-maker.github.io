/* LEARNING GAMES — the list behind the "Learning Games" tab.
   To add a game: copy one { ... } block below, fill it in, and put the game's files
   in their own folder next to index.html (like outbreak/). Nothing else needs changing.

   Fields
     id          short name, no spaces (used for the card's link: #games/<id>)
     title       game name
     tagline     one line: what it is
     image       a picture for the card (path inside the game's folder), or '' for none
     subject     e.g. 'Science'
     grades      who it is for, e.g. 'MYP 2–5 (Grades 7–10)'
     players     e.g. 'Teams of 3–6, one laptop per team'
     time        e.g. '40 minutes'
     description 2–4 sentences: what students do and why it helps them learn
     howToPlay   short steps, in order
     goodFor     when to use it, e.g. 'End-of-term review'
     versions    one button row per class: { label, note, play, extra: [{ label, url }] }
*/
window.LEARNING_GAMES = [
  {
    id: 'outbreak',
    title: 'Outbreak Lab Escape',
    tagline: 'A zombie-lab escape room for reviewing the term.',
    image: 'outbreak/assets/MYP5/room-01-biomechanics.jpg',
    subject: 'Science',
    grades: 'MYP 2–5 (Grades 7–10)',
    players: 'Teams of 3–6, one laptop per team',
    time: 'About 40 minutes, plus an 8-minute term review',
    description: 'The lab is sealed and the infection is spreading. Teams search six rooms, answer four questions in each from their own Lesson 1–16 worksheets, and earn the four letters that open each door. Every question is built from what the class actually did this term, so the game is a review that students run themselves, under pressure, as a team.',
    howToPlay: [
      'Make a team of 3–6 and type every player’s name on the start screen.',
      'Click the objects in each room to open a question. Find the answer in your worksheets.',
      'Each correct answer earns a letter. Four letters make the code that opens the door.',
      'Six minutes per room. From 7:00, a player turns into a zombie every minute.',
      'A wrong answer adds 15 seconds. A perfect room earns an antidote.',
      'Escape all six rooms and print your pass: it names who survived.'
    ],
    goodFor: 'End-of-term review (Lesson 17). No AI or web search: the worksheets are the evidence.',
    versions: [
      { label: 'Grade 10 · MYP 5', note: 'Circuits, Forces and the Human Machine', play: 'outbreak/play.html?grade=MYP5', extra: [{ label: 'Term review', url: 'outbreak/recap.html?grade=MYP5' }] },
      { label: 'Grade 9 · MYP 4', note: 'How Do We Know?', play: 'outbreak/play.html?grade=MYP4', extra: [{ label: 'Term review', url: 'outbreak/recap.html?grade=MYP4' }] },
      { label: 'Grade 8 · MYP 3', note: 'Powering the Planet', play: 'outbreak/play.html?grade=MYP3', extra: [{ label: 'Term review', url: 'outbreak/recap.html?grade=MYP3' }] },
      { label: 'Grade 7 · MYP 2', note: 'Mapping Motion and Matter', play: 'outbreak/play.html?grade=MYP2', extra: [{ label: 'Term review', url: 'outbreak/recap.html?grade=MYP2' }] }
    ]
  }
];
