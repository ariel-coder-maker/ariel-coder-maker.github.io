/* MYP 5 (Grade 10) - Circuits, Forces and the Human Machine - Term 1 review escape room.
   Student-facing content only. Teacher answers and reasoning: TEACHER_KEY_MYP5.md (not linked from the game).
   `k` encodes the correct choice and `w` the room code word. This only stops casual peeking; it is not security. */
window.GAME_DATA = {
 "grade": "MYP 5",
 "gradeLabel": "Grade 10 · MYP 5 Sciences",
 "unit": "Circuits, Forces and the Human Machine",
 "story": "Something escaped from the bionics wing. The facility is sealed, and six locked doors stand between your team and the exit. Each room holds evidence from what you studied this term. Solve it, unscramble the code, and get out before the infection spreads.",
 "rule": "Use only your own Lesson 1–16 worksheets and class work. No AI, no web search, no other teams.",
 "rooms": [
  {
   "name": "Biomechanics Lab",
   "lessons": "Lessons 1, 2, 6 and 16",
   "image": "assets/MYP5/room-01-biomechanics.jpg",
   "w": "REFPTA==",
   "clue": {
    "label": "Clipboard on the wall",
    "x": 90.3,
    "y": 36.8,
    "w": 5.8,
    "h": 15,
    "text": "Research trail: your body-lever work (Lesson 1 and the forearm lever in Lesson 6), the sliding filament model (Lesson 2), and the Lesson 16 reading “Levers in Your Body”. Keep the moment rule handy: moment = force × distance from the pivot."
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
     "x": 19.5,
     "y": 37,
     "w": 12,
     "h": 43,
     "q": "The skeleton arm is holding a 20 N dumbbell still. The biceps attaches 4 cm from the elbow, and the dumbbell is 35 cm from the elbow. What force must the biceps pull with to keep the arm balanced?",
     "c": [
      "2.3 N",
      "140 N",
      "175 N",
      "700 N"
     ],
     "k": 85,
     "hint": "Balance the moments: the muscle’s moment about the elbow must equal the load’s moment.",
     "src": "Lesson 16, Part 2 and Part 3 (moments)"
    },
    {
     "obj": "See-saw lever with hanging weights",
     "x": 39.8,
     "y": 49.5,
     "w": 17.4,
     "h": 26,
     "q": "Use the elbow from the skeleton arm (20 N load, 175 N biceps pull). Mechanical advantage = load ÷ effort. What is the elbow’s mechanical advantage, and what does that tell you?",
     "c": [
      "About 8.8: the muscle multiplies the force of the load",
      "About 0.11: the muscle pulls much harder than the load, but the hand moves far and fast",
      "About 0.11: the elbow is a poor design that wastes the muscle’s energy",
      "Exactly 1: the forces are balanced, so mechanical advantage is always 1"
     ],
     "k": 48,
     "hint": "Divide the load by the effort, then think about what the elbow gains in return.",
     "src": "Lesson 16, Part 2 reading"
    },
    {
     "obj": "Model of the upper-arm muscles",
     "x": 31.6,
     "y": 35,
     "w": 6.8,
     "h": 38,
     "q": "You bend your elbow to lift the dumbbell. What happens inside the biceps, and what is the triceps doing at the same time?",
     "c": [
      "Actin slides past myosin using ATP, the sarcomeres shorten, and the triceps relaxes",
      "The filaments themselves shrink, and the triceps also contracts to help",
      "The sarcomeres get longer, and the triceps contracts",
      "Actin slides past myosin, and the triceps contracts to pull the arm up"
     ],
     "k": 11,
     "hint": "Two steps: what the filaments do in a contracting muscle, then how an antagonistic pair works.",
     "src": "Lesson 2, Sections 1 and 3"
    },
    {
     "obj": "Plaster foot on tiptoe",
     "x": 59,
     "y": 48,
     "w": 6.8,
     "h": 30,
     "q": "When you stand on tiptoe, the ball of the foot is the pivot, and your body weight acts between the pivot and the pull of the calf muscle. Which statement is correct?",
     "c": [
      "The calf pull is closer to the pivot than the load, so it needs more force than the load",
      "The calf pull is further from the pivot than the load, so the mechanical advantage is greater than 1",
      "The pivot is in the middle, like a see-saw, so the mechanical advantage is 1",
      "The calf pull is further from the pivot, so it needs more force than the body weight"
     ],
     "k": 48,
     "hint": "Compare the distances from the pivot. The force that is further away needs to be smaller.",
     "src": "Lesson 16, Part 2 reading"
    }
   ]
  },
  {
   "name": "Sprint Testing Hall",
   "lessons": "Lessons 3, 4, 5 and 6",
   "image": "assets/MYP5/room-02-motion.jpg",
   "w": "SFNVUA==",
   "clue": {
    "label": "Whistle on a hook",
    "x": 91,
    "y": 21.5,
    "w": 4,
    "h": 40,
    "text": "Research trail: Newton’s three laws and F = ma (Lesson 3), your class 10 m sprint data and its errors (Lessons 4 and 5), and the Usain Bolt split-time table (Lesson 6)."
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
     "x": 58,
     "y": 74,
     "w": 17,
     "h": 17,
     "q": "Sprinter A (65 kg) pushes off the blocks with 780 N. Sprinter B (52 kg) pushes off with the same force. How much greater is B’s acceleration?",
     "c": [
      "0 m/s²: the same force gives the same acceleration",
      "3 m/s²",
      "15 m/s²",
      "13 m/s²"
     ],
     "k": 48,
     "hint": "Find each acceleration with a = F ÷ m first, then compare them.",
     "src": "Lesson 3, Main activity (Q8)"
    },
    {
     "obj": "Light gates on tripods",
     "x": 36.7,
     "y": 48,
     "w": 6.5,
     "h": 22,
     "q": "In Bolt’s 100 m race, the 10–20 m segment took 0.99 s and the 20–30 m segment took 0.90 s. What do these splits show?",
     "c": [
      "His velocity rose from about 10.1 m/s to 11.1 m/s, so he was still accelerating",
      "His velocity fell, because the segment time got smaller",
      "His velocity stayed at about 10 m/s",
      "He was slowing down, because he had already passed top speed"
     ],
     "k": 11,
     "hint": "Velocity = displacement ÷ segment time. Work out both, then compare.",
     "src": "Lesson 6, Section 3 (split-time table)"
    },
    {
     "obj": "Silver stopwatch",
     "x": 8,
     "y": 53,
     "w": 9.2,
     "h": 20,
     "q": "In the class 10 m sprint, the timer started the stopwatch late, after the runner had already left. What does this do to the calculated speed?",
     "c": [
      "The time is too long, so the speed is too low",
      "The time is too short, so the speed is too high",
      "It makes no difference, because the distance is still 10 m",
      "The time is too short, so the speed is too low"
     ],
     "k": 48,
     "hint": "Decide first whether the recorded time is too big or too small, then use speed = distance ÷ time.",
     "src": "Lesson 5, Section 4 (Q11)"
    },
    {
     "obj": "Running shoe",
     "x": 44.5,
     "y": 83,
     "w": 9.5,
     "h": 9,
     "q": "A runner’s shoe pushes backward on the ground. What pushes the runner forward, and in which part of a 100 m race must the legs push hardest?",
     "c": [
      "The ground pushes forward on the shoe (third law); hardest in the first 30 m, where the acceleration is greatest (F = ma)",
      "The shoe pushes itself forward; hardest at the end, where the speed is highest",
      "The ground pushes forward on the shoe; hardest at top speed, because F = m × v",
      "Nothing pushes back; the legs push hardest in the middle of the race"
     ],
     "k": 11,
     "hint": "Use Newton’s third law for the push, then the second law: where in the race is the acceleration biggest?",
     "src": "Lesson 3 (third law) and Lesson 6, Q8"
    }
   ]
  },
  {
   "name": "Circuit Workshop",
   "lessons": "Lessons 7 and 8",
   "image": "assets/MYP5/room-03-circuits.jpg",
   "w": "VExPVg==",
   "clue": {
    "label": "Open toolbox",
    "x": 34,
    "y": 49,
    "w": 16.5,
    "h": 12,
    "text": "Research trail: charge, current and I = Q ÷ t, and the circuit missions (Lesson 7); the series and parallel rules, your lab results and the magnet-and-coil simulation (Lesson 8)."
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
     "x": 22.2,
     "y": 59,
     "w": 6.2,
     "h": 10,
     "q": "A charge of 30 C passes through a lamp in 60 s. If the same current keeps flowing for 5 minutes, how much charge flows?",
     "c": [
      "2.5 C",
      "150 C",
      "9000 C",
      "0.1 C"
     ],
     "k": 48,
     "hint": "Find the current with I = Q ÷ t, then use Q = I × t with the time in seconds.",
     "src": "Lesson 7, Section 2 (Q3)"
    },
    {
     "obj": "Circuit board with two bulbs",
     "x": 3,
     "y": 67,
     "w": 20,
     "h": 19,
     "q": "In a parallel circuit the branch currents are 0.5 A and 0.25 A. In a series circuit, two identical bulbs share a 6 V battery. Which pair of answers is correct?",
     "c": [
      "0.25 A from the battery; 6 V across each series bulb",
      "0.75 A from the battery; 6 V across each series bulb",
      "0.75 A from the battery; 3 V across each series bulb",
      "0.5 A from the battery; 3 V across each series bulb"
     ],
     "k": 85,
     "hint": "Parallel: branch currents add up. Series: the potential difference is shared between the bulbs.",
     "src": "Lesson 8, Section 2 (Q2)"
    },
    {
     "obj": "Bicycle with a front lamp",
     "x": 3.6,
     "y": 40,
     "w": 23,
     "h": 26,
     "q": "A bicycle’s front and back lights run from one battery. Both must stay on if either lamp breaks, and ONE switch must turn both on and off. Which design works?",
     "c": [
      "Both lamps in series, with one switch",
      "Lamps in parallel, with a switch in each branch",
      "Lamps in series, with a switch next to each lamp",
      "Lamps in parallel, with one switch in the main wire before the circuit splits"
     ],
     "k": 122,
     "hint": "Two conditions: which arrangement keeps one lamp on when the other breaks, and where must one switch go to control both?",
     "src": "Lesson 7, Section 3 (Mission 3)"
    },
    {
     "obj": "Copper coil and bar magnet",
     "x": 30,
     "y": 61,
     "w": 13.6,
     "h": 14,
     "q": "In the Lesson 8 simulation, a magnet first sits still inside a coil, then is pulled out. What does the meter show?",
     "c": [
      "A steady current the whole time the magnet is inside the coil",
      "A current only while the magnet is moving, and zero while it sits still",
      "A current only while the magnet is still",
      "Zero the whole time, because a magnet cannot make electricity"
     ],
     "k": 48,
     "hint": "Think about what had to change in the simulation for the meter needle to move.",
     "src": "Lesson 8, simulation section"
    }
   ]
  },
  {
   "name": "Resistance Bench",
   "lessons": "Lessons 9, 10 and 13",
   "image": "assets/MYP5/room-04-resistance.jpg",
   "w": "U01ITw==",
   "clue": {
    "label": "Open fuse box",
    "x": 62,
    "y": 25,
    "w": 8.4,
    "h": 14,
    "text": "Research trail: Ohm’s law V = IR and the traffic model (Lesson 9), the Criterion A cornerstone and its data table (Lesson 10), and how length and cross-section set a pencil strip’s resistance (Lesson 13)."
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
     "x": 56,
     "y": 52,
     "w": 23,
     "h": 21,
     "q": "Two 10 Ω heaters are connected in parallel to a 12 V supply. The main wire has a 3 A fuse. What is the total current, and does the fuse blow?",
     "c": [
      "1.2 A; it does not blow",
      "0.6 A; it does not blow",
      "2.4 A; it does not blow",
      "4.8 A; it blows"
     ],
     "k": 85,
     "hint": "In parallel each heater gets the full 12 V. Find each current, then add them.",
     "src": "Lesson 10, Cornerstone Q5"
    },
    {
     "obj": "Two analog meters",
     "x": 23,
     "y": 64.5,
     "w": 15.4,
     "h": 14,
     "q": "Component X: 2.0 V gives 0.20 A, 4.0 V gives 0.30 A, and 6.0 V gives 0.36 A. Which judgment does the data support?",
     "c": [
      "R stays at 10 Ω, so X is ohmic and a good fixed resistor",
      "R rises from 10 Ω to about 17 Ω, so X is not ohmic. It behaves like a filament bulb heating up",
      "R falls as the p.d. rises, so X is a good fixed resistor",
      "The current rises with p.d., so X must be ohmic"
     ],
     "k": 48,
     "hint": "Work out R = V ÷ I at every row before you decide.",
     "src": "Lesson 10, Section 1 (Q2) and Cornerstone Q6"
    },
    {
     "obj": "Pencil-shaded strips on paper",
     "x": 63.6,
     "y": 73.6,
     "w": 24.4,
     "h": 16,
     "q": "You draw a new pencil strip twice as long AND twice as wide as your first one. Using the model of resistance, what should happen to its resistance?",
     "c": [
      "About four times bigger",
      "About half",
      "About double: width does not matter",
      "About the same: doubling the length doubles R, and doubling the width halves it"
     ],
     "k": 122,
     "hint": "Take one change at a time: what does more length do, and what does a wider path do?",
     "src": "Lesson 9 (Q1, traffic model) and Lesson 13, Part A"
    },
    {
     "obj": "Yellow multimeter and probes",
     "x": 4.7,
     "y": 74,
     "w": 15.6,
     "h": 21,
     "q": "You want to test how the LENGTH of a pencil lead affects its resistance, using one ammeter and one voltmeter. Which plan is correct?",
     "c": [
      "Ammeter in series and voltmeter across the lead; change only the length, keep the grade and width the same",
      "Voltmeter in series and ammeter across the lead; change only the length",
      "Ammeter in series and voltmeter across the lead; change the length and the pencil grade together",
      "Both meters in series; keep everything the same"
     ],
     "k": 11,
     "hint": "Two checks: how each meter is connected, and whether only one variable changes.",
     "src": "Lesson 9, Cornerstone (B.iii and B.iv)"
    }
   ]
  },
  {
   "name": "Copper Refinery",
   "lessons": "Lesson 11",
   "image": "assets/MYP5/room-05-refinery.jpg",
   "w": "U05PSQ==",
   "clue": {
    "label": "Beakers of blue solution",
    "x": 3.6,
    "y": 19.5,
    "w": 15.6,
    "h": 14.5,
    "text": "Research trail: Lesson 11, Make It Pure! Look at your prediction, the masses you recorded from the video, the redox table (OIL RIG), and the data on how much copper moves."
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
     "x": 8,
     "y": 54.7,
     "w": 24.7,
     "h": 30,
     "q": "Copper is purified in the tank. Which electrode gains mass? (one word)",
     "c": [
      "The anode (+), because copper ions are negative and move toward it",
      "The cathode (−), because positive copper ions are attracted to it and gain electrons",
      "The anode (+), because it loses electrons and becomes heavier",
      "Both plates gain mass equally"
     ],
     "k": 48,
     "hint": "Start with the charge on a copper ion, then decide which electrode attracts it.",
     "src": "Lesson 11, Sections 2 and 3",
     "q0": "Copper is purified in the tank. Which plate gains mass, and why?",
     "t": "XSJlZG9odGFjIGVodCIsImVkb2h0YWMiWw=="
    },
    {
     "obj": "Stack of copper sheets",
     "x": 56.3,
     "y": 72,
     "w": 18.5,
     "h": 16,
     "q": "Which statement correctly matches each electrode to its half-equation and its process?",
     "c": [
      "Anode: Cu → Cu²⁺ + 2e⁻ (oxidation). Cathode: Cu²⁺ + 2e⁻ → Cu (reduction)",
      "Anode: Cu²⁺ + 2e⁻ → Cu (oxidation). Cathode: Cu → Cu²⁺ + 2e⁻ (reduction)",
      "Anode: Cu → Cu²⁺ + 2e⁻ (reduction). Cathode: Cu²⁺ + 2e⁻ → Cu (oxidation)",
      "Both electrodes: Cu²⁺ + 2e⁻ → Cu (reduction)"
     ],
     "k": 11,
     "hint": "OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons. Which electrode loses electrons?",
     "src": "Lesson 11, Section 3 (redox table)"
    },
    {
     "obj": "Balance with a copper plate",
     "x": 77.8,
     "y": 71,
     "w": 18.4,
     "h": 17.6,
     "q": "In 10 minutes the cathode gained 0.32 g. With the same current, how much would it gain in 30 minutes?",
     "c": [
      "0.32 g: the mass gain does not depend on time",
      "0.11 g",
      "0.64 g",
      "0.96 g, because three times the time passes three times the charge"
     ],
     "k": 122,
     "hint": "Link the mass to the charge passed, and the charge to the time (Q = I × t).",
     "src": "Lesson 11, Section 4 (how much copper moved)"
    },
    {
     "obj": "Tray of grey sludge",
     "x": 1.5,
     "y": 84,
     "w": 22,
     "h": 15,
     "q": "In a refinery, the anode loses more mass than the cathode gains. What explains the difference?",
     "c": [
      "Some copper is destroyed during electrolysis",
      "The cathode also loses some copper",
      "Impurities in the impure anode fall to the bottom as sludge, or stay in solution, instead of plating onto the cathode",
      "The balance is always wrong for heavy plates"
     ],
     "k": 85,
     "hint": "Mined copper is about 99.5% pure. Where does the other 0.5% go?",
     "src": "Lesson 11, objective 5 and Section 4"
    }
   ]
  },
  {
   "name": "Bionics Wing",
   "lessons": "Lessons 12, 13, 14 and 15",
   "image": "assets/MYP5/room-06-bionics.jpg",
   "w": "Tk9YQQ==",
   "clue": {
    "label": "Mannequin hand with a pencil strip",
    "x": 85.4,
    "y": 58,
    "w": 12.4,
    "h": 26,
    "text": "Research trail: neurons, action potentials and the ECG (Lesson 12), your pencil-sensor GRASP (Lessons 13–14), and the Lesson 15 reading “Bionic Limbs”. Convert MΩ and µA carefully."
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
     "x": 46,
     "y": 30.5,
     "w": 20.5,
     "h": 25.5,
     "q": "An action potential passes along the axon. Which description is correct?",
     "c": [
      "Depolarization: K⁺ moves in and the inside becomes negative. Repolarization: Na⁺ moves out",
      "Depolarization: electrons flow along the axon like a wire. Repolarization: they flow back",
      "Depolarization: Na⁺ moves in and the inside becomes positive. Repolarization: K⁺ moves out and the inside becomes negative again",
      "Depolarization and repolarization both happen when Na⁺ moves out"
     ],
     "k": 85,
     "hint": "Look at the action-potential graph: which ion makes the voltage rise, and which makes it fall again?",
     "src": "Lesson 12, Section 3 (Q5)"
    },
    {
     "obj": "Heart monitor",
     "x": 17,
     "y": 47.5,
     "w": 11,
     "h": 15.6,
     "q": "On an ECG trace, the tall spikes are 0.8 s apart. What is the heart rate?",
     "c": [
      "48 beats per minute",
      "75 beats per minute",
      "80 beats per minute",
      "0.8 beats per minute"
     ],
     "k": 48,
     "hint": "How many beats fit into 60 seconds if one beat takes 0.8 s?",
     "src": "Lesson 12, Section 4 (the heart’s pacemaker)"
    },
    {
     "obj": "Sensor pad and coiled cable",
     "x": 58.9,
     "y": 72,
     "w": 21.5,
     "h": 11,
     "q": "A pencil sensor strip of 12 MΩ is connected to a 1.5 V cell. What current flows?",
     "c": [
      "8 µA",
      "0.125 µA",
      "18 µA",
      "125 µA"
     ],
     "k": 48,
     "hint": "Change MΩ to Ω first, use I = V ÷ R, then change amps to microamps.",
     "src": "Lesson 15, Part 2 (Q5)"
    },
    {
     "obj": "Robotic prosthetic hand",
     "x": 4.4,
     "y": 31,
     "w": 10.4,
     "h": 34,
     "q": "Sweat lowers the resistance of the skin under a myoelectric hand’s electrodes. The voltage stays the same. What happens, and why is it a problem?",
     "c": [
      "The current falls, so the hand stops working",
      "Nothing changes, because the voltage is the same",
      "The current falls, so the signal never reaches the threshold",
      "The current rises, so the signal can pass the threshold and the hand may move when the user did not mean it to"
     ],
     "k": 122,
     "hint": "Use I = V ÷ R with a smaller R. Then think about what the controller compares the signal with.",
     "src": "Lesson 15, Part 1 (Q3)"
    }
   ]
  },
  {
   "name": "The Vault",
   "lessons": "Every stop",
   "image": "assets/MYP5/room-06-bionics.jpg",
   "vault": true,
   "w": "UE1B",
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
     "q": "A 12 V motor draws 0.5 A for 60 s and lifts a 30 N load by 2 m. What is its efficiency?",
     "c": [
      "About 17%",
      "60%",
      "About 6%",
      "About 600%"
     ],
     "k": 11,
     "hint": "Energy in = V × I × t. Useful energy = force × distance. Efficiency = useful ÷ in.",
     "src": "Lessons 1, 9 and 10: work, current and energy"
    },
    {
     "obj": "Vault lock 2",
     "card": "Vault lock 2",
     "x": 17,
     "y": 47.5,
     "w": 11,
     "h": 15.6,
     "q": "A copper cathode gains 0.32 g in 10 minutes at 0.8 A. Same tank, 1.6 A for 10 minutes. How much does it gain?",
     "c": [
      "0.64 g",
      "0.16 g",
      "0.32 g",
      "1.28 g"
     ],
     "k": 11,
     "hint": "Mass deposited is proportional to the charge, and charge = current × time.",
     "src": "Lessons 7 and 11: charge and electrolysis"
    },
    {
     "obj": "Vault lock 3",
     "card": "Vault lock 3",
     "x": 58.9,
     "y": 72,
     "w": 21.5,
     "h": 11,
     "q": "You hold a 20 N book still, 30 cm from your elbow. Your biceps attaches 4 cm from the elbow. What force must the biceps pull with?",
     "c": [
      "150 N",
      "2.7 N",
      "600 N",
      "20 N"
     ],
     "k": 11,
     "hint": "Balanced moments: biceps × 4 cm = 20 N × 30 cm.",
     "src": "Lessons 1 and 2: levers in your body"
    }
   ]
  }
 ],
 "recap": {
  "soi": "Modeling a system as an idealized circuit or lever hides real losses and resistances that determine whether the design actually works when built.",
  "opener": "Before the outbreak: what do you remember? For each stop, name one thing the class actually DID.",
  "stops": [
   {
    "title": "Your body is a machine",
    "lessons": "Lessons 1, 2 and 16",
    "did": [
     "Found the levers in your own body: pivot, effort and load",
     "Pushed against the wall and felt which muscle contracts and which relaxes",
     "Compared skeletal, smooth and cardiac muscle",
     "Read “Levers in Your Body” and worked out moments at the elbow"
    ],
    "learned": [
     "moment = force × distance from the pivot",
     "The elbow’s mechanical advantage is less than 1: it trades force for speed and range",
     "Sliding filament model: actin slides past myosin, powered by ATP",
     "Muscles only pull, so they work in antagonistic pairs"
    ]
   },
   {
    "title": "Forces and the 10 m sprint",
    "lessons": "Lessons 3, 4, 5 and 6",
    "did": [
     "Four Corners: which of Newton’s laws is the sprinter using?",
     "Timed the whole class over 10 m with a tape and stopwatch",
     "Drew the class speed distribution: the Criterion C formative",
     "Turned Usain Bolt’s split times into velocities and judged the running blade"
    ],
    "learned": [
     "Newton’s three laws, and F = ma",
     "speed = distance ÷ time; human reaction time is the biggest timing error",
     "A race has phases: accelerate in the first 30 m, then hold top speed",
     "Engineered limbs are judged against the body part they replace"
    ]
   },
   {
    "title": "Charge, current and circuits",
    "lessons": "Lessons 7 and 8",
    "did": [
     "Static demonstration: a rubbed plastic object picked up paper",
     "Circuit diagram missions, including the bicycle-light design",
     "Lab: built series and parallel circuits and unscrewed a bulb",
     "Simulation: moved a magnet in and out of a coil"
    ],
    "learned": [
     "Current is the flow of charge: I = Q ÷ t",
     "Ammeter in series; voltmeter in parallel, across the component",
     "Series: same current, p.d. shared. Parallel: branch currents add up",
     "A moving magnet in a coil induces a current"
    ]
   },
   {
    "title": "Resistance and Ohm’s law",
    "lessons": "Lessons 9 and 10",
    "did": [
     "Traffic model: long roads, narrow roads",
     "Criterion B cornerstone: designed a pencil-lead resistance investigation",
     "Criterion A cornerstone: current, resistance and the fuse problem",
     "Measurement pilot: p.d. across a pencil lead"
    ],
    "learned": [
     "V = I × R, so R = V ÷ I",
     "Longer conductor → more resistance; thicker → less",
     "Ohmic components keep R constant; a hot filament does not",
     "Two equal resistors in parallel have half the resistance"
    ]
   },
   {
    "title": "Make it pure: electrolysis of copper",
    "lessons": "Lesson 11",
    "did": [
     "Predicted which copper plate gains and which loses mass",
     "Recorded electrode masses from the experiment video",
     "Completed the redox table with half-equations",
     "Used other classes’ data: mass of copper against charge"
    ],
    "learned": [
     "Cathode (−) gains copper: Cu²⁺ + 2e⁻ → Cu (reduction)",
     "Anode (+) loses copper: Cu → Cu²⁺ + 2e⁻ (oxidation)",
     "OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons",
     "Mass deposited depends on the charge passed; impurities fall as sludge"
    ]
   },
   {
    "title": "Bioelectricity, sensors and your GRASP",
    "lessons": "Lessons 12 to 15",
    "did": [
     "Traced a nerve signal and read an ECG to find a heart rate",
     "Measured resistance with a multimeter",
     "GRASP: drew your own graphite sensor strips and calibrated them in MΩ",
     "Read “Bionic Limbs” and checked your own practice answers"
    ],
    "learned": [
     "Action potential: Na⁺ in (depolarization), K⁺ out (repolarization)",
     "The sinoatrial node is the heart’s pacemaker",
     "A sensor changes its resistance; a strip’s R depends on length and width",
     "Real sensors drift and stretch, so the idealized model hides real losses"
    ],
    "ask": "When was the model “good enough” in your GRASP, and when did it break down?"
   }
  ]
 }
};
