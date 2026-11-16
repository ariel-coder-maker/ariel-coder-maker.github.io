/* Grade 7 · MYP 2 Sciences - Mapping Motion and Matter: Measuring Our Changing World. Built by build_grade.js from content/MYP2.js - edit that file, not this one.
   Student data only; answers are encoded to stop casual peeking, not secured. Teacher key: teacher/TEACHER_KEY_MYP2.md */
window.GAME_DATA = {
 "grade": "MYP 2",
 "gradeLabel": "Grade 7 · MYP 2 Sciences",
 "unit": "Mapping Motion and Matter: Measuring Our Changing World",
 "story": "Something escaped from the motion research wing. The facility is sealed, and six locked doors stand between your team and the exit. Each room holds evidence from what you studied this term. Solve it, unscramble the code, and get out before the infection spreads.",
 "rule": "Use only your own Lesson 1–16 worksheets and class work. No AI, no web search, no other teams.",
 "recap": {
  "soi": "Standardized systems of measurement reveal patterns in how matter and motion behave, letting scientists make reliable predictions across very different scales.",
  "opener": "Before the outbreak: what do you remember? For each stop, name one thing the class actually DID.",
  "stops": [
   {
    "title": "Measuring our world",
    "lessons": "Lessons 1 and 2",
    "did": [
     "Measured your desk in hand-spans and compared with a partner",
     "Measured classroom distances with body units",
     "Read the early human migration map",
     "Found places with latitude and longitude"
    ],
    "learned": [
     "Body units like the cubit change from person to person",
     "Standardized units (meters, seconds) give everyone the same answer",
     "Early humans spread out of Africa over thousands of years",
     "Coordinates give an exact position on Earth"
    ]
   },
   {
    "title": "Journeys and speed",
    "lessons": "Lessons 3 and 4",
    "did": [
     "Calculated speeds for each leg of a long journey",
     "Plotted a journey on a distance-time graph",
     "Walked and timed the 100 m loop near school"
    ],
    "learned": [
     "speed = distance ÷ time (m/s or km/h)",
     "Distance is how far you go; displacement is how far you end up from the start",
     "Going there and back gives zero displacement",
     "More trials make an average more trustworthy"
    ]
   },
   {
    "title": "Reading journey graphs",
    "lessons": "Lesson 5",
    "did": [
     "Described four objects from one distance-time graph",
     "Worked out speed from a gradient",
     "Calculated speeds of transport through the ages",
     "Classified each part of a journey graph"
    ],
    "learned": [
     "Steeper line = faster; flat distance-time line = at rest",
     "Gradient of a distance-time graph = speed",
     "A rising speed-time line shows acceleration",
     "Convert km and minutes to m and s before you calculate"
    ]
   },
   {
    "title": "The hare and tortoise race",
    "lessons": "Lessons 6 and 7",
    "did": [
     "Ran the race: hare, tortoise and napper, timed at four markers",
     "Calculated section times and section speeds",
     "Criterion C cornerstone: drew speed-time graphs of your race"
    ],
    "learned": [
     "Section speed = section distance ÷ section time",
     "Three patterns of motion: speeding up, constant speed, stopping",
     "Timers stand level with their line to keep the test fair",
     "A table needs distance AND time before you can compare speeds"
    ]
   },
   {
    "title": "Forces: inertia and pushing back",
    "lessons": "Lessons 8 and 9",
    "did": [
     "Pulled paper from under a cup and let go of an untied balloon",
     "Coin flick and the raw-or-boiled egg spin",
     "Criterion B cornerstone: planned the catapult car test"
    ],
    "learned": [
     "First law (inertia): objects keep doing what they are doing unless a force acts",
     "Third law: every push has an equal and opposite push back",
     "Friction slows moving things down",
     "A fair test changes one thing and keeps the others the same"
    ]
   },
   {
    "title": "Matter and the Metal Detectives",
    "lessons": "Lessons 10 to 16",
    "did": [
     "Sorted 12 substances: element, compound or mixture",
     "Built the periodic table with element cards; watched Rutherford’s gold foil",
     "Watched zinc in copper sulfate turn brown",
     "GRASP Metal Detectives: timed your own metal reactions"
    ],
    "learned": [
     "Element: one kind of atom. Compound: atoms bonded. Mixture: not bonded",
     "Protons and neutrons in the nucleus; electrons outside",
     "A more reactive metal displaces a less reactive one",
     "Corrosion: iron rusts; zinc (galvanizing) protects it"
    ],
    "ask": "How did measuring carefully help you make a prediction you could trust this term?"
   }
  ]
 },
 "rooms": [
  {
   "name": "Quarantine Lab · Measuring Our World",
   "lessons": "Lesson 1",
   "image": "assets/MYP5/room-01-biomechanics.jpg",
   "w": "TkFQUw==",
   "clue": {
    "label": "Clipboard on the wall",
    "x": 90.3,
    "y": 36.8,
    "w": 5.8,
    "h": 15,
    "text": "Research trail: your hand-span measurements, the history of units, and the migration map (Lesson 1)."
   },
   "door": {
    "label": "Sealed door and keypad",
    "x": 68,
    "y": 25,
    "w": 21,
    "h": 52
   },
   "qs": [
    {
     "obj": "Skeleton arm holding a dumbbell",
     "card": "Evidence file 1",
     "x": 19.5,
     "y": 37,
     "w": 12,
     "h": 43,
     "q": "You measure your desk as 9 hand-spans. Your partner measures the same desk as 11 hand-spans. Why, and how do you fix it?",
     "c": [
      "The desk changed size. Measure it again tomorrow",
      "Your hands are different sizes. Use a standard unit, like centimeters with a ruler",
      "Your partner made a mistake. Use your answer",
      "Hand-spans are perfect. Take the average of 9 and 11"
     ],
     "k": 48,
     "hint": "What was different between you and your partner, not the desk?",
     "src": "Lesson 1, Hook (Q1–Q2)"
    },
    {
     "obj": "See-saw lever with hanging weights",
     "card": "Evidence file 2",
     "x": 39.8,
     "y": 49.5,
     "w": 17.4,
     "h": 26,
     "q": "The cubit was based on the length of a forearm. Why did scientists stop using units like the cubit?",
     "c": [
      "Forearms are too short to measure anything",
      "Everyone’s forearm is a different length, so the same object got different measurements",
      "The cubit was too hard to say",
      "Cubits only worked in Egypt"
     ],
     "k": 48,
     "hint": "Think about your hand-span activity.",
     "src": "Lesson 1, Mini-lesson (Q3–Q4)"
    },
    {
     "obj": "Model of the upper-arm muscles",
     "card": "Evidence file 3",
     "x": 31.6,
     "y": 35,
     "w": 6.8,
     "h": 38,
     "q": "Your hand-span is 18 cm. The desk is 7 hand-spans long. How long is the desk in meters?",
     "c": [
      "126 m",
      "1.26 m",
      "12.6 m",
      "0.126 m"
     ],
     "k": 48,
     "hint": "Find the length in centimeters first, then change to meters (100 cm = 1 m).",
     "src": "Lesson 1, Practical (Q6)"
    },
    {
     "obj": "Plaster foot on tiptoe",
     "card": "Evidence file 4",
     "x": 59,
     "y": 48,
     "w": 6.8,
     "h": 30,
     "q": "What does the early human migration map show?",
     "c": [
      "Humans first lived in Australia and moved to Africa",
      "Modern humans spread out of Africa into Asia, Europe, Australia and the Americas over many thousands of years",
      "Humans appeared everywhere at the same time",
      "Humans never moved far from where they were born"
     ],
     "k": 48,
     "hint": "Look at where the arrows start.",
     "src": "Lesson 1, See–Think–Wonder (Q8–Q9)"
    }
   ]
  },
  {
   "name": "Test Hall · Speed",
   "lessons": "Lessons 3, 4 and 15",
   "image": "assets/MYP5/room-02-motion.jpg",
   "w": "VFNBRg==",
   "clue": {
    "label": "Whistle on a hook",
    "x": 91,
    "y": 21.5,
    "w": 4,
    "h": 40,
    "text": "Research trail: the long journey table and the ferry problem (Lesson 3), the 100 m loop and displacement (Lesson 4), and the speed rules in Lesson 15, Part 2."
   },
   "door": {
    "label": "Sealed door and keypad",
    "x": 73,
    "y": 15,
    "w": 17.5,
    "h": 58
   },
   "qs": [
    {
     "obj": "Sprint starting blocks",
     "card": "Evidence file 1",
     "x": 58,
     "y": 74,
     "w": 17,
     "h": 17,
     "q": "A ferry travels 180 km from Yangon to Bangkok in 6 hours. What is its average speed?",
     "c": [
      "1 080 km/h",
      "30 km/h",
      "0.03 km/h",
      "174 km/h"
     ],
     "k": 48,
     "hint": "speed = distance ÷ time. Check that the answer makes sense for a boat.",
     "src": "Lesson 3, Exit ticket (Q9)"
    },
    {
     "obj": "Light gates on tripods",
     "card": "Evidence file 2",
     "x": 36.7,
     "y": 48,
     "w": 6.5,
     "h": 22,
     "q": "You walk 25 m from the classroom door to the gate, then 25 m straight back, in 40 s. What are your distance and your displacement?",
     "c": [
      "Distance 50 m, displacement 0 m",
      "Distance 0 m, displacement 50 m",
      "Distance 25 m, displacement 25 m",
      "Distance 50 m, displacement 50 m"
     ],
     "k": 11,
     "hint": "Distance is how far you walked. Displacement is how far you ended up from where you started.",
     "src": "Lesson 4, Section 2 (Q4)"
    },
    {
     "obj": "Silver stopwatch",
     "card": "Evidence file 3",
     "x": 8,
     "y": 53,
     "w": 9.2,
     "h": 20,
     "q": "A walker covers the 100 m loop in 50 s. A car at 36 km/h travels at 10 m/s. How many times faster is the car?",
     "c": [
      "2 times",
      "5 times",
      "18 times",
      "50 times"
     ],
     "k": 48,
     "hint": "Find the walker’s speed in m/s first, then compare.",
     "src": "Lesson 4, Section 2 (Q2) and Section 3 (Q6)"
    },
    {
     "obj": "Running shoe",
     "card": "Evidence file 4",
     "x": 44.5,
     "y": 83,
     "w": 9.5,
     "h": 9,
     "q": "A student walks 120 m in 80 s. At the same speed, how long would they take to walk 300 m?",
     "c": [
      "200 s",
      "450 s",
      "1.5 s",
      "240 s"
     ],
     "k": 11,
     "hint": "First find the speed. Then time = distance ÷ speed.",
     "src": "Lesson 15, Part 2 (Q4)"
    }
   ]
  },
  {
   "name": "Power Workshop · Journey Graphs",
   "lessons": "Lesson 5",
   "image": "assets/MYP5/room-03-circuits.jpg",
   "w": "RU5JTA==",
   "clue": {
    "label": "Open toolbox",
    "x": 34,
    "y": 49,
    "w": 16.5,
    "h": 12,
    "text": "Research trail: Lesson 5: the four-line graph, gradient = speed, Table 1.3 (speed through the ages) and the journey segments A to F."
   },
   "door": {
    "label": "Sealed door and keypad",
    "x": 63,
    "y": 22,
    "w": 17.5,
    "h": 40
   },
   "qs": [
    {
     "obj": "Battery pack with crocodile leads",
     "card": "Evidence file 1",
     "x": 22.2,
     "y": 59,
     "w": 6.2,
     "h": 10,
     "q": "What does a flat, horizontal line mean on a distance-time graph, and on a speed-time graph?",
     "c": [
      "At rest on both",
      "Distance-time: at rest. Speed-time: moving at a constant speed",
      "Distance-time: constant speed. Speed-time: at rest",
      "Speeding up on both"
     ],
     "k": 48,
     "hint": "Read the label on the y-axis of each graph.",
     "src": "Lesson 5, Section 2 (Q4)"
    },
    {
     "obj": "Circuit board with two bulbs",
     "card": "Evidence file 2",
     "x": 3,
     "y": 67,
     "w": 20,
     "h": 19,
     "q": "On the same distance-time graph, line P is steeper than line Q. Which object is faster?",
     "c": [
      "Q, because its line is longer",
      "P, because a steeper line has a bigger gradient, so it covers more distance each second",
      "They are the same speed",
      "You cannot tell from a graph"
     ],
     "k": 48,
     "hint": "What does the gradient of a distance-time graph tell you?",
     "src": "Lesson 5, Section 2 (Q3)"
    },
    {
     "obj": "Bicycle with a front lamp",
     "card": "Evidence file 3",
     "x": 3.6,
     "y": 40,
     "w": 23,
     "h": 26,
     "q": "A steam train covered 10 km in 9 minutes. What was its speed in m/s?",
     "c": [
      "1.1 m/s",
      "about 18.5 m/s",
      "1 111 m/s",
      "90 m/s"
     ],
     "k": 48,
     "hint": "Change 10 km to meters and 9 minutes to seconds before you divide.",
     "src": "Lesson 5, Section 3 (Q5, Table 1.3)"
    },
    {
     "obj": "Copper coil and bar magnet",
     "card": "Evidence file 4",
     "x": 30,
     "y": 61,
     "w": 13.6,
     "h": 14,
     "q": "On a distance-time graph, an object is at 20 m at 4 s and at 50 m at 10 s. What is its speed?",
     "c": [
      "5 m/s",
      "12.5 m/s",
      "3.3 m/s",
      "30 m/s"
     ],
     "k": 11,
     "hint": "Gradient = change in distance ÷ change in time.",
     "src": "Lesson 5, Section 2 (Q2)"
    }
   ]
  },
  {
   "name": "Heat Bench · The Great Race",
   "lessons": "Lessons 6, 7 and 16",
   "image": "assets/MYP5/room-04-resistance.jpg",
   "w": "RUNBUg==",
   "clue": {
    "label": "Open fuse box",
    "x": 62,
    "y": 25,
    "w": 8.4,
    "h": 14,
    "text": "Research trail: the hare, tortoise and napper race (Lesson 6), the cornerstone speed tables (Lesson 7), and the Usain Bolt reading in Lesson 16."
   },
   "door": {
    "label": "Sealed door and keypad",
    "x": 79.5,
    "y": 10,
    "w": 18,
    "h": 60
   },
   "qs": [
    {
     "obj": "Glowing electric heater",
     "card": "Evidence file 1",
     "x": 56,
     "y": 52,
     "w": 23,
     "h": 21,
     "q": "The hare speeds up, the tortoise keeps the same pace, and the napper stops for a nap. What do their speed-time lines look like?",
     "c": [
      "Hare: rising. Tortoise: flat. Napper: drops to zero, then rises again",
      "Hare: flat. Tortoise: rising. Napper: flat",
      "All three lines rise",
      "Hare: falling. Tortoise: flat. Napper: rising"
     ],
     "k": 11,
     "hint": "On a speed-time graph, speeding up goes up and stopping means speed = 0.",
     "src": "Lesson 6, Section 1 (Q1) and Lesson 7"
    },
    {
     "obj": "Two analog meters",
     "card": "Evidence file 2",
     "x": 23,
     "y": 64.5,
     "w": 15.4,
     "h": 14,
     "q": "A cyclist passes markers at 5, 10, 15 and 20 m at times 2.0, 3.5, 4.8 and 6.0 s. What was the cyclist doing?",
     "c": [
      "Slowing down: the times get bigger",
      "Speeding up: each 5 m section takes less time (2.0, 1.5, 1.3, 1.2 s)",
      "Constant speed: the markers are evenly spaced",
      "Stopped between 10 and 15 m"
     ],
     "k": 48,
     "hint": "Work out the time for each 5 m section, not the total time.",
     "src": "Lesson 7, Section 2 (Q2)"
    },
    {
     "obj": "Pencil-shaded strips on paper",
     "card": "Evidence file 3",
     "x": 63.6,
     "y": 73.6,
     "w": 24.4,
     "h": 16,
     "q": "Runner A ran 20 m in 16.7 s. Runner B ran 10 m in 10.1 s. Who was faster?",
     "c": [
      "B, because 10.1 s is a smaller time",
      "A: about 1.2 m/s compared with B’s 1.0 m/s",
      "They were the same speed",
      "You cannot tell"
     ],
     "k": 48,
     "hint": "You need distance AND time. Work out each speed.",
     "src": "Lesson 7, Section 1 (Q1)"
    },
    {
     "obj": "Yellow multimeter and probes",
     "card": "Evidence file 4",
     "x": 4.7,
     "y": 74,
     "w": 15.6,
     "h": 21,
     "q": "Usain Bolt ran 100 m in 9.58 s, but his top speed was about 12.4 m/s. Why is his average speed lower than his top speed?",
     "c": [
      "His average is about 10.4 m/s, because he started from 0 and had to accelerate",
      "His average is about 12.4 m/s, because the race is short",
      "The wind slowed him down",
      "The timing was wrong"
     ],
     "k": 11,
     "hint": "Average speed = total distance ÷ total time. Think about the start of the race.",
     "src": "Lesson 16, Part 2 (Q4)"
    }
   ]
  },
  {
   "name": "Blue Vault · Forces",
   "lessons": "Lessons 8 and 9",
   "image": "assets/MYP5/room-05-refinery.jpg",
   "w": "SFNVUA==",
   "clue": {
    "label": "Beakers of blue solution",
    "x": 3.6,
    "y": 19.5,
    "w": 15.6,
    "h": 14.5,
    "text": "Research trail: the demonstrations and Motion Tricks (Lesson 8), and the catapult cornerstone variables table (Lesson 9)."
   },
   "door": {
    "label": "Sealed vault door and keypad",
    "x": 69,
    "y": 26,
    "w": 18,
    "h": 36
   },
   "qs": [
    {
     "obj": "Tank with two copper plates",
     "card": "Evidence file 1",
     "x": 8,
     "y": 54.7,
     "w": 24.7,
     "h": 30,
     "q": "Your teacher pulls a sheet of paper sharply from under a cup of water. What happens, and which law explains it?",
     "c": [
      "The cup falls over (third law)",
      "The cup stays where it is (first law: inertia)",
      "The cup moves with the paper (second law)",
      "The water jumps out (gravity)"
     ],
     "k": 48,
     "hint": "An object keeps doing what it is doing unless a force acts on it.",
     "src": "Lesson 8, Section 1 (Q1)"
    },
    {
     "obj": "Stack of copper sheets",
     "card": "Evidence file 2",
     "x": 56.3,
     "y": 72,
     "w": 18.5,
     "h": 16,
     "q": "An untied balloon is let go and shoots across the room. Why?",
     "c": [
      "The balloon pushes air out backward, and the air pushes the balloon forward (third law)",
      "The balloon is lighter than air",
      "Gravity pulls it sideways",
      "The air inside disappears"
     ],
     "k": 11,
     "hint": "Every push has an equal and opposite push back.",
     "src": "Lesson 8, Section 1 (Q1) and Q2"
    },
    {
     "obj": "Balance with a copper plate",
     "card": "Evidence file 3",
     "x": 77.8,
     "y": 71,
     "w": 18.4,
     "h": 17.6,
     "q": "You stop a spinning egg with one fingertip and let go. It starts turning again by itself. Is it raw or boiled? (one word)",
     "c": [
      "Hard-boiled, because it is solid",
      "Raw: the liquid inside keeps moving (inertia) and turns the shell again",
      "Raw, because it is lighter",
      "You cannot tell"
     ],
     "k": 48,
     "hint": "What inside the egg could still be moving after you stop the shell?",
     "src": "Lesson 8, Section 3 (Motion Tricks, egg spin)",
     "q0": "You stop a spinning egg with one fingertip and let go. It starts turning again by itself. What kind of egg is it?",
     "t": "XSJ3YXIiWw=="
    },
    {
     "obj": "Tray of grey sludge",
     "card": "Evidence file 4",
     "x": 1.5,
     "y": 84,
     "w": 22,
     "h": 15,
     "q": "A student tests: “Does the size of a paper airplane affect how far it flies?” Which variables are correct?",
     "c": [
      "IV: distance flown; DV: size; CV: paper type",
      "IV: size of the airplane; DV: distance flown; CV: the same paper and the same throw",
      "IV: paper type; DV: size; CV: distance",
      "IV: the throw; DV: the paper; CV: size"
     ],
     "k": 48,
     "hint": "What do you change on purpose? What do you measure?",
     "src": "Lesson 9, Section 2 (Q2)"
    }
   ]
  },
  {
   "name": "Exit Wing · Matter and Metals",
   "lessons": "Lessons 10 to 15",
   "image": "assets/MYP5/room-06-bionics.jpg",
   "w": "Q05JWg==",
   "clue": {
    "label": "Mannequin hand with a pencil strip",
    "x": 85.4,
    "y": 58,
    "w": 12.4,
    "h": 26,
    "text": "Research trail: the substance card sort (Lesson 10), inside the atom (Lesson 11), the reactivity series (Lessons 12–14) and the reading “Why Do Some Metals Last?” (Lesson 15)."
   },
   "door": {
    "label": "Final exit door and keypad",
    "x": 68.9,
    "y": 22,
    "w": 16,
    "h": 48
   },
   "qs": [
    {
     "obj": "Neuron model in a glass case",
     "card": "Evidence file 1",
     "x": 46,
     "y": 30.5,
     "w": 20.5,
     "h": 25.5,
     "q": "Which matching is correct for iron, rust, and sand mixed with salt?",
     "c": [
      "Iron: compound. Rust: element. Sand and salt: mixture",
      "Iron: element. Rust: compound. Sand and salt: mixture",
      "Iron: mixture. Rust: compound. Sand and salt: element",
      "All three are compounds"
     ],
     "k": 48,
     "hint": "One kind of atom? Atoms bonded together? Or just mixed?",
     "src": "Lesson 10, Section 2 (Q3)"
    },
    {
     "obj": "Heart monitor",
     "card": "Evidence file 2",
     "x": 17,
     "y": 47.5,
     "w": 11,
     "h": 15.6,
     "q": "Magnesium is put in blue copper sulfate solution. Which metal appears as a brown coating? (one word)",
     "c": [
      "(a) Magnesium displaces copper. (b) No reaction",
      "(a) No reaction. (b) Copper displaces zinc",
      "Both react",
      "Neither reacts"
     ],
     "k": 11,
     "hint": "A metal HIGHER in the series displaces a metal LOWER down.",
     "src": "Lesson 12, Section 3 (Q4)",
     "q0": "Use the reactivity series. (a) Magnesium is put in copper sulfate. (b) Copper is put in zinc sulfate. What happens?",
     "t": "XSJyZXBwb2MiWw=="
    },
    {
     "obj": "Sensor pad and coiled cable",
     "card": "Evidence file 3",
     "x": 58.9,
     "y": 72,
     "w": 21.5,
     "h": 11,
     "q": "Which description of the particles in an atom is correct?",
     "c": [
      "Protons (+) and neutrons (no charge) in the nucleus; electrons (−) outside it",
      "Electrons (+) in the nucleus; protons (−) outside it",
      "Neutrons (−) outside; protons (+) outside",
      "All three particles are spread evenly through the atom"
     ],
     "k": 11,
     "hint": "Use your Lesson 11 table: charge and where each particle is found.",
     "src": "Lesson 11, Section 2 (Q3)"
    },
    {
     "obj": "Robotic prosthetic hand",
     "card": "Evidence file 4",
     "x": 4.4,
     "y": 31,
     "w": 10.4,
     "h": 34,
     "q": "A galvanized (zinc-coated) iron fence is scratched. Why does the iron under the scratch still not rust?",
     "c": [
      "Zinc is above iron in the reactivity series, so the zinc reacts first and protects the iron",
      "Zinc is below iron, so it cannot react",
      "Scratches make metal stronger",
      "Iron never rusts"
     ],
     "k": 11,
     "hint": "Which metal is more reactive, zinc or iron?",
     "src": "Lesson 15, Part 1 (Q3)"
    }
   ]
  },
  {
   "name": "The Vault",
   "lessons": "Every stop",
   "image": "assets/MYP5/room-06-bionics.jpg",
   "vault": true,
   "w": "U0FH",
   "clue": {
    "label": "Mannequin hand with a pencil strip",
    "x": 85.4,
    "y": 58,
    "w": 12.4,
    "h": 26,
    "text": "The cure is sealed in here. Each lock links two stops of the term. Read carefully: one wrong answer costs 30 seconds."
   },
   "door": {
    "label": "Final exit door and keypad",
    "x": 68.9,
    "y": 22,
    "w": 16,
    "h": 48
   },
   "qs": [
    {
     "obj": "Vault lock 1",
     "card": "Vault lock 1",
     "x": 46,
     "y": 30.5,
     "w": 20.5,
     "h": 25.5,
     "q": "A tortoise walks steadily at 0.5 m/s. The hare runs 100 m in 10 s, then naps for 120 s. Over the whole 130 s, who has the higher AVERAGE speed?",
     "c": [
      "The hare: about 0.77 m/s, against 0.5 m/s",
      "The tortoise: 0.5 m/s, against 0.3 m/s",
      "The hare: 10 m/s, against 0.5 m/s",
      "They are exactly the same"
     ],
     "k": 11,
     "hint": "Average speed = total distance ÷ total time, and the nap counts as time.",
     "src": "Lessons 4 and 6: speed and the great race"
    },
    {
     "obj": "Vault lock 2",
     "card": "Vault lock 2",
     "x": 17,
     "y": 47.5,
     "w": 11,
     "h": 15.6,
     "q": "Your hand-span is 18 cm. A corridor is 50 hand-spans long, and you walk it in 6 s. What is your speed?",
     "c": [
      "1.5 m/s",
      "150 m/s",
      "0.15 m/s",
      "3 m/s"
     ],
     "k": 11,
     "hint": "First turn hand-spans into meters (50 × 0.18 m), then divide by the time.",
     "src": "Lessons 1 and 3: units, then speed"
    },
    {
     "obj": "Vault lock 3",
     "card": "Vault lock 3",
     "x": 58.9,
     "y": 72,
     "w": 21.5,
     "h": 11,
     "q": "A toy car is pushed and rolls 4 m in 2 s, then slows down and stops. Which statement is correct?",
     "c": [
      "Its average speed was 2 m/s; friction is an unbalanced force that slowed it",
      "Its speed was 8 m/s; it stopped because the push ran out",
      "Its speed was 2 m/s; the forces were balanced the whole time",
      "Its speed was 0.5 m/s; friction made it speed up"
     ],
     "k": 11,
     "hint": "Speed = distance ÷ time. Something only slows down if a force acts against its motion.",
     "src": "Lessons 3 and 8: speed and forces"
    }
   ]
  }
 ]
};
