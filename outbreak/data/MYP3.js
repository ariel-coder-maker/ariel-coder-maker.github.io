/* Grade 8 · MYP 3 Sciences - Powering the Planet: Machines, Energy and Human Impact. Built by build_grade.js from content/MYP3.js - edit that file, not this one.
   Student data only; answers are encoded to stop casual peeking, not secured. Teacher key: teacher/TEACHER_KEY_MYP3.md */
window.GAME_DATA = {
 "grade": "MYP 3",
 "gradeLabel": "Grade 8 · MYP 3 Sciences",
 "unit": "Powering the Planet: Machines, Energy and Human Impact",
 "story": "Something escaped from the energy research wing. The facility is sealed, and six locked doors stand between your team and the exit. Each room holds evidence from what you studied this term. Solve it, unscramble the code, and get out before the infection spreads.",
 "rule": "Use only your own Lesson 1–16 worksheets and class work. No AI, no web search, no other teams.",
 "recap": {
  "soi": "The efficiency of an energy-transforming system determines how much of a finite resource must be consumed to do a given amount of useful work.",
  "opener": "Before the outbreak: what do you remember? For each stop, name one thing the class actually DID.",
  "stops": [
   {
    "title": "Energy, work and machines",
    "lessons": "Lessons 1 and 2",
    "did": [
     "See–Think–Wonder: a crane, scissors and a bicycle",
     "Labeled PE and KE on a see-saw, a pulley and a wedge",
     "Found a machine at home and traced its energy chain"
    ],
    "learned": [
     "A machine transforms energy; it never creates it",
     "Potential energy (stored) and kinetic energy (moving)",
     "work (J) = force (N) × distance moved (m)",
     "power (W) = work ÷ time"
    ]
   },
   {
    "title": "Wedges and pressure",
    "lessons": "Lessons 3 and 4",
    "did": [
     "Pressed a blunt and a sharp pencil into putty",
     "Lab: tested wedge shapes and measured cutting depth",
     "Drew a bar chart of your results and toured other groups’ graphs"
    ],
    "learned": [
     "pressure = force ÷ area",
     "A sharper edge means a smaller area, so more pressure for the same force",
     "Categories (sharp, medium, blunt) suit a bar chart",
     "A conclusion quotes your own data"
    ]
   },
   {
    "title": "Levers and moments",
    "lessons": "Lessons 5 and 8",
    "did": [
     "Lab: balanced washers on a ruler at different distances",
     "Converted a moment into newton meters",
     "Criterion B cornerstone: designed a mechanical-advantage investigation"
    ],
    "learned": [
     "moment = force × distance from the pivot",
     "Balanced when clockwise moment = counterclockwise moment",
     "mechanical advantage = load ÷ effort",
     "A strong hypothesis is testable, with an if–then–because reason"
    ]
   },
   {
    "title": "Pulleys and efficiency",
    "lessons": "Lessons 6 and 7",
    "did": [
     "Lab: the broomstick pulley, adding turns of string",
     "Rubbed your hands together to feel wasted energy",
     "Calculated efficiency for lamps, a fan, a motorbike and a wind turbine"
    ],
    "learned": [
     "More sections of string share the load, so the effort is smaller",
     "efficiency (%) = useful energy out ÷ energy in × 100",
     "Wasted energy is usually heat and sound; it is never destroyed",
     "No machine is 100% efficient"
    ]
   },
   {
    "title": "Energy resources and fair methods",
    "lessons": "Lessons 9 and 10",
    "did": [
     "Four Corners: where does Myanmar’s electricity come from?",
     "Analyzed world energy data from 1990 to 2023",
     "Criterion C cornerstone: evaluated your own investigation"
    ],
    "learned": [
     "Renewable resources are replaced within a human lifetime",
     "Percentage change = (new − old) ÷ old × 100",
     "Fossil fuels are still most of the world’s energy",
     "Every improvement must fix a stated limitation"
    ]
   },
   {
    "title": "Worldviews, sustainability and the Lever Lab",
    "lessons": "Lessons 11 to 16",
    "did": [
     "Stood on the worldview line and read environmental data",
     "The village pond: extraction or exploitation?",
     "GRASP Lever Lab: measured your own lever’s efficiency",
     "Read about oil refining and the cod that disappeared"
    ],
    "learned": [
     "Technocentric, anthropocentric and ecocentric worldviews",
     "Sustainable means used no faster than it is replaced",
     "A population can pass a tipping point and not recover",
     "A more efficient machine burns less of a finite resource"
    ],
    "ask": "Which machine you studied wastes the most energy, and how would you make it more efficient?"
   }
  ]
 },
 "rooms": [
  {
   "name": "Quarantine Lab · Energy and Work",
   "lessons": "Lessons 1 and 15",
   "image": "assets/MYP5/room-01-biomechanics.jpg",
   "w": "S1JPVw==",
   "clue": {
    "label": "Clipboard on the wall",
    "x": 90.3,
    "y": 36.8,
    "w": 5.8,
    "h": 15,
    "text": "Research trail: the energy chains for the see-saw, pulley and wedge (Lesson 1), and the work and power rules in Lesson 15, Part 2."
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
     "q": "A person uses a pulley to lift a bucket of water out of a well. Which energy chain is correct?",
     "c": [
      "The pulley creates new energy to lift the bucket",
      "Chemical energy in the person’s muscles → kinetic energy of the rope → potential energy of the raised bucket",
      "Potential energy of the bucket → chemical energy in the person",
      "The energy is destroyed when the bucket stops at the top"
     ],
     "k": 48,
     "hint": "A machine only transforms energy. Start with where the energy comes from.",
     "src": "Lesson 1, Section 3 (Q8) and Q11"
    },
    {
     "obj": "See-saw lever with hanging weights",
     "card": "Evidence file 2",
     "x": 39.8,
     "y": 49.5,
     "w": 17.4,
     "h": 26,
     "q": "A crane lifts a 2 000 N load up 15 m in 60 s. What are the work done and the power?",
     "c": [
      "30 000 J and 500 W",
      "30 000 J and 1 800 000 W",
      "133 J and 2.2 W",
      "2 015 J and 34 W"
     ],
     "k": 11,
     "hint": "Work = force × distance. Then power = work ÷ time.",
     "src": "Lesson 15, Part 2 (Q4)"
    },
    {
     "obj": "Model of the upper-arm muscles",
     "card": "Evidence file 3",
     "x": 31.6,
     "y": 35,
     "w": 6.8,
     "h": 38,
     "q": "Ana pushes a box with 50 N for 4 m. Ben pushes the same box with 100 N for 1 m. Who does more work?",
     "c": [
      "Ben, because he pushes harder",
      "They do the same work",
      "Ana: 200 J compared with Ben’s 100 J",
      "Nobody does work, because the box is not lifted"
     ],
     "k": 85,
     "hint": "Work depends on BOTH the force and the distance moved.",
     "src": "Lesson 1 (Q15) and Lesson 15 (work rule)"
    },
    {
     "obj": "Plaster foot on tiptoe",
     "card": "Evidence file 4",
     "x": 59,
     "y": 48,
     "w": 6.8,
     "h": 30,
     "q": "A book falls off a high shelf. What happens to its energy as it falls?",
     "c": [
      "Its potential energy changes into kinetic energy",
      "Its kinetic energy changes into potential energy",
      "It gains potential energy as it speeds up",
      "It has no energy until it hits the floor"
     ],
     "k": 11,
     "hint": "Where does the book have the most stored energy, and when is it moving fastest?",
     "src": "Lesson 1, Section 2 (Q5)"
    }
   ],
   "bk": [
    {
     "q": "What does a machine do with energy?",
     "c": [
      "Transfers and transforms it; it never creates energy",
      "Creates new energy",
      "Destroys energy",
      "Stores all of it as heat"
     ],
     "k": 11,
     "hint": "Energy is conserved.",
     "src": "Lesson 1: machines and energy"
    },
    {
     "q": "A 50 N box is pushed 4 m. How much work is done?",
     "c": [
      "200 J",
      "12.5 J",
      "54 J",
      "46 J"
     ],
     "k": 11,
     "hint": "work = force × distance.",
     "src": "Lesson 1: work"
    },
    {
     "q": "A motor does 600 J of work in 20 s. What is its power?",
     "c": [
      "30 W",
      "12 000 W",
      "580 W",
      "620 W"
     ],
     "k": 11,
     "hint": "power = work ÷ time.",
     "src": "Lesson 1: power"
    }
   ]
  },
  {
   "name": "Test Hall · Wedges and Pressure",
   "lessons": "Lessons 3 and 4",
   "image": "assets/MYP5/room-02-motion.jpg",
   "w": "QUVSQQ==",
   "clue": {
    "label": "Whistle on a hook",
    "x": 91,
    "y": 21.5,
    "w": 4,
    "h": 40,
    "text": "Research trail: the pressure formula and the wedge problems (Lesson 3), and choosing and reading graphs of the wedge data (Lesson 4)."
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
     "q": "The same 10 N force pushes on a blunt wedge (area 2 cm²) and a sharp wedge (area 0.5 cm²). What pressure does the sharp wedge make, compared with the blunt one?",
     "c": [
      "5 N/cm², the same as the blunt wedge",
      "20 N/cm², four times as much as the blunt wedge",
      "20 N/cm², a quarter as much",
      "5 N/cm², because the force is the same"
     ],
     "k": 48,
     "hint": "Use pressure = force ÷ area for each wedge, then compare.",
     "src": "Lesson 3, Section 2 (Q4–Q6)"
    },
    {
     "obj": "Light gates on tripods",
     "card": "Evidence file 2",
     "x": 36.7,
     "y": 48,
     "w": 6.5,
     "h": 22,
     "q": "Test: “How does the shape of a wedge affect how deep it cuts into putty?” Which set of variables is correct?",
     "c": [
      "IV: cutting depth; DV: wedge shape; CV: putty",
      "IV: wedge shape; DV: cutting depth; CV: the force (mass) used and the type of putty",
      "IV: the force; DV: the putty; CV: wedge shape",
      "IV: wedge shape; DV: the force; CV: cutting depth"
     ],
     "k": 48,
     "hint": "What do you change on purpose, and what do you measure?",
     "src": "Lesson 3, Section 3 (Q8)"
    },
    {
     "obj": "Silver stopwatch",
     "card": "Evidence file 3",
     "x": 8,
     "y": 53,
     "w": 9.2,
     "h": 20,
     "q": "Your wedge results compare three shapes: sharp, medium and blunt. Which graph should you draw, and why?",
     "c": [
      "A line graph, because lines show trends",
      "A bar chart, because the shapes are separate categories, not numbers",
      "A pie chart, because there are three shapes",
      "No graph: a table is always enough"
     ],
     "k": 48,
     "hint": "Is the thing you changed a number or a category?",
     "src": "Lesson 4 (Q4)"
    },
    {
     "obj": "Running shoe",
     "card": "Evidence file 4",
     "x": 44.5,
     "y": 83,
     "w": 9.5,
     "h": 9,
     "q": "Depths: sharp 18 mm, medium 11 mm, blunt 6 mm. Which conclusion is best?",
     "c": [
      "Sharper is better",
      "The sharp wedge cut 3 times deeper than the blunt one: the same force on a smaller area makes more pressure",
      "The blunt wedge used more force",
      "The results are random"
     ],
     "k": 48,
     "hint": "A strong conclusion quotes numbers AND gives a scientific reason.",
     "src": "Lesson 4 (Q9–Q10)"
    }
   ],
   "bk": [
    {
     "q": "Why does a sharp knife cut better than a blunt one?",
     "c": [
      "The same force on a smaller area makes more pressure",
      "It has more force",
      "It has a larger area",
      "It is heavier"
     ],
     "k": 11,
     "hint": "pressure = force ÷ area.",
     "src": "Lessons 3 and 4: wedges"
    },
    {
     "q": "A 20 N force acts on 4 cm². What is the pressure?",
     "c": [
      "5 N/cm²",
      "80 N/cm²",
      "24 N/cm²",
      "16 N/cm²"
     ],
     "k": 11,
     "hint": "Divide the force by the area.",
     "src": "Lesson 3: pressure"
    },
    {
     "q": "Which unit can you use for pressure?",
     "c": [
      "N/cm²",
      "newtons",
      "joules",
      "watts"
     ],
     "k": 11,
     "hint": "Force per area.",
     "src": "Lesson 3: pressure"
    }
   ]
  },
  {
   "name": "Power Workshop · Levers",
   "lessons": "Lessons 5 and 8",
   "image": "assets/MYP5/room-03-circuits.jpg",
   "w": "VEZJTA==",
   "clue": {
    "label": "Open toolbox",
    "x": 34,
    "y": 49,
    "w": 16.5,
    "h": 12,
    "text": "Research trail: balancing washers and the principle of moments (Lesson 5), and the Criterion B cornerstone on mechanical advantage (Lesson 8)."
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
     "q": "Three washers hang 8 cm left of the pivot. Where must 2 washers go on the right to balance them?",
     "c": [
      "8 cm",
      "12 cm",
      "16 cm",
      "5.3 cm"
     ],
     "k": 48,
     "hint": "Left moment = washers × distance. The right moment must be the same.",
     "src": "Lesson 5, Section 2 (Q3)"
    },
    {
     "obj": "Circuit board with two bulbs",
     "card": "Evidence file 2",
     "x": 3,
     "y": 67,
     "w": 20,
     "h": 19,
     "q": "A 3 N load hangs 0.4 m from the pivot. What is its moment, and what effort at 0.6 m on the other side balances it?",
     "c": [
      "1.2 N m; 2 N",
      "1.2 N m; 3 N",
      "7.5 N m; 4.5 N",
      "0.12 N m; 0.2 N"
     ],
     "k": 11,
     "hint": "Moment = force × distance (in meters). Then divide by the effort’s distance.",
     "src": "Lesson 5 (Q10) and Lesson 13 formula sheet"
    },
    {
     "obj": "Bicycle with a front lamp",
     "card": "Evidence file 3",
     "x": 3.6,
     "y": 40,
     "w": 23,
     "h": 26,
     "q": "Which hypothesis is stronger? A: “Ramps make things easier.” B: “If the ramp is longer (same height), the push needed will be smaller, because the push acts over a longer distance.”",
     "c": [
      "A, because it is shorter and clearer",
      "B, because it is testable and gives a scientific reason",
      "Both are equally strong",
      "Neither can be tested"
     ],
     "k": 48,
     "hint": "Check each one for two things: can you test it, and does it say why?",
     "src": "Lesson 8, Section 2 (Q2)"
    },
    {
     "obj": "Copper coil and bar magnet",
     "card": "Evidence file 4",
     "x": 30,
     "y": 61,
     "w": 13.6,
     "h": 14,
     "q": "You keep the load in the same place but move your effort further from the pivot. What happens?",
     "c": [
      "The effort needed goes up, and the mechanical advantage goes down",
      "The effort needed goes down, and the mechanical advantage goes up",
      "Nothing changes, because the load is the same",
      "The load gets lighter"
     ],
     "k": 48,
     "hint": "A bigger distance means a smaller force for the same moment. Then MA = load ÷ effort.",
     "src": "Lesson 5 and Lesson 8 (Q3)"
    }
   ],
   "bk": [
    {
     "q": "4 N hangs 10 cm left of a pivot. What force 20 cm to the right balances it?",
     "c": [
      "2 N",
      "8 N",
      "40 N",
      "0.5 N"
     ],
     "k": 11,
     "hint": "Clockwise moment = counterclockwise moment.",
     "src": "Lesson 5: moments"
    },
    {
     "q": "What is the pivot of a lever called?",
     "c": [
      "The fulcrum",
      "The effort",
      "The load",
      "The moment"
     ],
     "k": 11,
     "hint": "The point it turns around.",
     "src": "Lesson 5: parts of a lever"
    },
    {
     "q": "A lever lifts a 600 N load with a 200 N effort. What is its mechanical advantage?",
     "c": [
      "3",
      "0.33",
      "400",
      "800"
     ],
     "k": 11,
     "hint": "MA = load ÷ effort.",
     "src": "Lesson 8: mechanical advantage"
    }
   ]
  },
  {
   "name": "Heat Bench · Pulleys and Efficiency",
   "lessons": "Lessons 6, 7 and 16",
   "image": "assets/MYP5/room-04-resistance.jpg",
   "w": "RVBPUg==",
   "clue": {
    "label": "Open fuse box",
    "x": 62,
    "y": 25,
    "w": 8.4,
    "h": 14,
    "text": "Research trail: fixed and movable pulleys and the broomstick pulley (Lesson 6), the efficiency table and harder problems (Lesson 7), and the pulley problem in Lesson 16, Part 3."
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
     "q": "A 6 N load hangs from a fixed pulley, and an identical load from a movable pulley held by 2 sections of string. About what force holds each one still?",
     "c": [
      "Fixed: 6 N (it only changes the direction). Movable: about 3 N",
      "Fixed: 3 N. Movable: 6 N",
      "Both 6 N",
      "Both 3 N"
     ],
     "k": 11,
     "hint": "Count the sections of string holding the load in each case.",
     "src": "Lesson 6, Section 2 (Q2–Q3)"
    },
    {
     "obj": "Two analog meters",
     "card": "Evidence file 2",
     "x": 23,
     "y": 64.5,
     "w": 15.4,
     "h": 14,
     "q": "A pulley lifts an 800 N load up 1 m. The effort of 250 N pulls the rope 4 m. What is the efficiency?",
     "c": [
      "31%",
      "80%",
      "125%",
      "320%"
     ],
     "k": 48,
     "hint": "Work in = effort × its distance; work out = load × its height. Then efficiency = out ÷ in × 100.",
     "src": "Lesson 16, Part 3 (Q5)"
    },
    {
     "obj": "Pencil-shaded strips on paper",
     "card": "Evidence file 3",
     "x": 63.6,
     "y": 73.6,
     "w": 24.4,
     "h": 16,
     "q": "A motorbike engine is 30% efficient and takes in 4 000 J of fuel energy each second. How much useful energy does it give, and how much is wasted?",
     "c": [
      "Useful 1 200 J; wasted 2 800 J",
      "Useful 2 800 J; wasted 1 200 J",
      "Useful 30 J; wasted 3 970 J",
      "Useful 4 000 J; wasted 0 J"
     ],
     "k": 11,
     "hint": "Useful = 30% of 4 000 J. Wasted = energy in − useful.",
     "src": "Lesson 7, Section 4 (Q5)"
    },
    {
     "obj": "Yellow multimeter and probes",
     "card": "Evidence file 4",
     "x": 4.7,
     "y": 74,
     "w": 15.6,
     "h": 21,
     "q": "A student says: “The wind turbine destroys 6 500 J of energy every second.” What is wrong with this?",
     "c": [
      "Nothing, because the energy is lost",
      "Energy cannot be destroyed; the 6 500 J is transferred as wasted energy, such as heat, sound and moving air",
      "The turbine creates 6 500 J",
      "Wind has no energy"
     ],
     "k": 48,
     "hint": "Use the law of conservation of energy.",
     "src": "Lesson 7, Section 5 (Q7)"
    }
   ],
   "bk": [
    {
     "q": "Why does adding more sections of string to a pulley make lifting easier?",
     "c": [
      "The load is shared between more string sections, so less effort is needed",
      "The load gets lighter",
      "Friction disappears",
      "The string gets stronger"
     ],
     "k": 11,
     "hint": "Count the strings holding the load.",
     "src": "Lesson 6: the broomstick pulley"
    },
    {
     "q": "A lamp uses 100 J and gives out 20 J of light. What is its efficiency?",
     "c": [
      "20%",
      "80%",
      "120%",
      "5%"
     ],
     "k": 11,
     "hint": "useful out ÷ total in × 100.",
     "src": "Lesson 7: efficiency"
    },
    {
     "q": "Where does the wasted energy of a machine usually go?",
     "c": [
      "Heat and sound, into the surroundings",
      "It is destroyed",
      "Back into the fuel",
      "Into more useful work"
     ],
     "k": 11,
     "hint": "Rub your hands together.",
     "src": "Lesson 7: wasted energy"
    }
   ]
  },
  {
   "name": "Blue Vault · Energy Resources",
   "lessons": "Lessons 9 and 10",
   "image": "assets/MYP5/room-05-refinery.jpg",
   "w": "TEVVRg==",
   "clue": {
    "label": "Beakers of blue solution",
    "x": 3.6,
    "y": 19.5,
    "w": 15.6,
    "h": 14.5,
    "text": "Research trail: renewable or non-renewable, the forest question, and the world energy table (Lesson 9). Then validity, limitations and improvements (Lesson 10)."
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
     "q": "Which list contains ONLY renewable energy resources?",
     "c": [
      "Coal, natural gas, wind",
      "Sunlight, wind, flowing water",
      "Uranium, sunlight, oil",
      "Oil, wood from any forest, coal"
     ],
     "k": 48,
     "hint": "Renewable means replaced naturally within a human lifetime.",
     "src": "Lesson 9, Section 2 (Q2)"
    },
    {
     "obj": "Stack of copper sheets",
     "card": "Evidence file 2",
     "x": 56.3,
     "y": 72,
     "w": 18.5,
     "h": 16,
     "q": "A forest is cut at 5% of its trees each year but regrows only 2% each year. Is its wood renewable here?",
     "c": [
      "Yes, because trees always grow back",
      "No: it is used faster than it regrows, so being renewable depends on the rate of use",
      "Yes, because 5% is a small amount",
      "No, because wood is a fossil fuel"
     ],
     "k": 48,
     "hint": "Compare how fast it is used with how fast it is replaced.",
     "src": "Lesson 9, Section 2 (Q3)"
    },
    {
     "obj": "Balance with a copper plate",
     "card": "Evidence file 3",
     "x": 77.8,
     "y": 71,
     "w": 18.4,
     "h": 17.6,
     "q": "Fossil fuels (oil + coal + gas) were 299 EJ in 1990 and 504 EJ in 2023. What is the percentage change?",
     "c": [
      "About 41%",
      "About 69%",
      "About 205%",
      "About 59%"
     ],
     "k": 48,
     "hint": "(new − old) ÷ old × 100. Divide by the OLD value.",
     "src": "Lesson 9, Section 3 (Q5)"
    },
    {
     "obj": "Tray of grey sludge",
     "card": "Evidence file 4",
     "x": 1.5,
     "y": 84,
     "w": 22,
     "h": 15,
     "q": "A student timed a toy car rolling down a ramp ONCE with a phone, at each height. Which limitation and improvement go together?",
     "c": [
      "Limitation: only one trial and reaction-time errors. Improvement: repeat 3 times and use the mean, or use a light gate",
      "Limitation: the car was too small. Improvement: be more careful",
      "Limitation: one trial. Improvement: use a different ramp",
      "Limitation: none. Improvement: do it again"
     ],
     "k": 11,
     "hint": "A good improvement must fix the exact limitation you named.",
     "src": "Lesson 10, Section 2 (Q2)"
    }
   ],
   "bk": [
    {
     "q": "Which energy resource is non-renewable?",
     "c": [
      "Coal",
      "Wind",
      "Sunlight",
      "Flowing water"
     ],
     "k": 11,
     "hint": "Which one will run out?",
     "src": "Lesson 9: energy resources"
    },
    {
     "q": "Why are fossil fuels called finite?",
     "c": [
      "They take millions of years to form, so they will run out",
      "They are free",
      "They never run out",
      "They are made by the wind"
     ],
     "k": 11,
     "hint": "Finite = limited.",
     "src": "Lesson 9: fossil fuels"
    },
    {
     "q": "You compare two fuels by heating water. Which step keeps it a fair test?",
     "c": [
      "Heat the same mass of water for the same time",
      "Use a different amount of each fuel",
      "Use different thermometers",
      "Start the water at different temperatures"
     ],
     "k": 11,
     "hint": "Change only the fuel.",
     "src": "Lesson 10: fair methods"
    }
   ]
  },
  {
   "name": "Exit Wing · Sustainability and the Lever Lab",
   "lessons": "Lessons 11 to 16",
   "image": "assets/MYP5/room-06-bionics.jpg",
   "w": "RE5PUA==",
   "clue": {
    "label": "Mannequin hand with a pencil strip",
    "x": 85.4,
    "y": 58,
    "w": 12.4,
    "h": 26,
    "text": "Research trail: the three worldviews (Lesson 11), the village pond words (Lesson 12), your Lever Lab processing table (Lesson 14), and the reading about the cod (Lesson 16)."
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
     "q": "“Our new extraction technology lets us mine more ore from less land. Engineering will solve the problems mining causes.” Which worldview is this? (one word)",
     "c": [
      "Ecocentric",
      "Anthropocentric",
      "Technocentric",
      "None of these"
     ],
     "k": 85,
     "hint": "What does the speaker put at the center: technology, humans or nature?",
     "src": "Lesson 11, Section 1 and 2",
     "q0": "“Our new extraction technology lets us mine more ore from less land. Engineering will solve the problems mining causes.” Which worldview is this?",
     "t": "XSJtc2lydG5lY29uaGNldCIsImNpcnRuZWNvbmhjZXQiWw=="
    },
    {
     "obj": "Heart monitor",
     "card": "Evidence file 2",
     "x": 17,
     "y": 47.5,
     "w": 11,
     "h": 15.6,
     "q": "Villagers cut water lilies to sell, but only from half the pond each year, so the lilies grow back. Which description fits?",
     "c": [
      "Exploitation, not sustainable",
      "Extraction, and sustainable",
      "Exploitation, but sustainable",
      "Neither extraction nor exploitation"
     ],
     "k": 48,
     "hint": "Are they taking a resource? Is it taken faster than it grows back?",
     "src": "Lesson 12, Section 2 (Q5)"
    },
    {
     "obj": "Sensor pad and coiled cable",
     "card": "Evidence file 3",
     "x": 58.9,
     "y": 72,
     "w": 21.5,
     "h": 11,
     "q": "In the Lever Lab, the mean effort was 2.0 N, moving 0.10 m. The 3.0 N load rose 0.05 m. What was the efficiency?",
     "c": [
      "75%",
      "133%",
      "15%",
      "60%"
     ],
     "k": 11,
     "hint": "Work in = F × 0.10 m. Work out = W × load rise. Then out ÷ in × 100.",
     "src": "Lesson 14, Part 2 (Q2)"
    },
    {
     "obj": "Robotic prosthetic hand",
     "card": "Evidence file 4",
     "x": 4.4,
     "y": 31,
     "w": 10.4,
     "h": 34,
     "q": "Cod fishing on the Grand Banks stopped in 1992, but the cod did not recover. Why?",
     "c": [
      "The fishing ships came back",
      "The population passed a tipping point: other animals took its place in the food web, so it could not grow back",
      "Cod moved to warmer water every year",
      "Scientists stopped counting them"
     ],
     "k": 48,
     "hint": "Use the word from the reading for a change that is very hard to undo.",
     "src": "Lesson 16, Part 2 (Q4)"
    }
   ],
   "bk": [
    {
     "q": "Which describes sustainable use of a resource?",
     "c": [
      "Using it so it can recover for the future",
      "Using all of it now",
      "Never using it at all",
      "Using it faster each year"
     ],
     "k": 11,
     "hint": "Think of the water lilies.",
     "src": "Lesson 11: sustainability"
    },
    {
     "q": "In the Lever Lab, useful work out was 0.15 J and work in was 0.20 J. What was the efficiency?",
     "c": [
      "75%",
      "133%",
      "25%",
      "0.75%"
     ],
     "k": 11,
     "hint": "useful ÷ in × 100.",
     "src": "Lessons 13–16: the Lever Lab"
    },
    {
     "q": "Why is a more efficient machine better for the planet?",
     "c": [
      "It needs less fuel for the same useful work",
      "It works faster",
      "It is heavier",
      "It makes more heat"
     ],
     "k": 11,
     "hint": "Less waste, less fuel.",
     "src": "Lessons 7 and 11: efficiency and resources"
    }
   ]
  },
  {
   "name": "The Vault",
   "lessons": "Every stop",
   "image": "assets/MYP5/room-06-bionics.jpg",
   "vault": true,
   "w": "TElP",
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
     "q": "A pulley system is 80% efficient. You need 2 000 J of useful work to lift a load. How much energy must you put in?",
     "c": [
      "2 500 J",
      "1 600 J",
      "2 000 J",
      "400 J"
     ],
     "k": 11,
     "hint": "Energy in = useful energy out ÷ efficiency (as a decimal).",
     "src": "Lessons 1 and 7: work and efficiency"
    },
    {
     "obj": "Vault lock 2",
     "card": "Vault lock 2",
     "x": 17,
     "y": 47.5,
     "w": 11,
     "h": 15.6,
     "q": "A lever is balanced. The effort is 50 N at 0.8 m from the pivot. The load is 0.2 m from the pivot. What are the load and the mechanical advantage?",
     "c": [
      "200 N; MA = 4",
      "12.5 N; MA = 0.25",
      "40 N; MA = 0.8",
      "200 N; MA = 0.25"
     ],
     "k": 11,
     "hint": "Balanced: effort × its distance = load × its distance. Then MA = load ÷ effort.",
     "src": "Lessons 5 and 8: moments and mechanical advantage"
    },
    {
     "obj": "Vault lock 3",
     "card": "Vault lock 3",
     "x": 58.9,
     "y": 72,
     "w": 21.5,
     "h": 11,
     "q": "Power station A turns 35% of its coal energy into electricity; station B turns 45%. Both must supply 900 J. How much MORE coal energy does A burn?",
     "c": [
      "About 570 J more",
      "100 J more",
      "About 2 570 J more",
      "The same amount"
     ],
     "k": 11,
     "hint": "Energy in = 900 ÷ efficiency for each station, then subtract.",
     "src": "Lessons 7, 9 and 10: efficiency and finite resources"
    }
   ]
  }
 ]
};
