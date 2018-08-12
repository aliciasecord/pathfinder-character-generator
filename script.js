// All of the HTML comes from the JS file
const container = document.getElementById('container');

// This information should always show at the top of the page
const header = document.getElementById('header');

// The buttons that let the user choose guided or random selection
const choosePath = document.getElementById('choosePath');

// Set variables for the buttons
const random = document.getElementById('random');
const guide = document.getElementById('guide');

// Create function to get random selection from an array
function randomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Array for random race selection
const raceArray = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human'];

// Create variable for random character race
let charRace = randomItem(raceArray);

// Array for random race selection
const classArray = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']

// Create variable for random character class
let charClass = randomItem(classArray);

// Create variable for default character level
let charLevel = 1;

// Create variables for the div to display the character basics
const character = document.getElementById('character');
const characterlevel = document.getElementById('characterlevel');
const characterrace = document.getElementById('characterrace');
const characterclass = document.getElementById('characterclass');

// Create variable for step 2 div
const step2 = document.getElementById('step-2');

// Create variables for the buttons to move to step 2
const charnext = document.getElementById('charnext');
const tryagain = document.getElementById('tryagain');
const chooseagain = document.getElementById('chooseagain');

// If user clicks random button
random.addEventListener('click', () => {
  // Hide the choosePath buttons
  choosePath.classList.add('hide');
  // Return random race and class and default level 1
  character.classList.remove('hide');
  characterlevel.innerHTML = `Level ${charLevel}`;
  characterrace.innerHTML = `${charRace}`;
  characterclass.innerHTML = `${charClass}`;
  // Then show the buttons to move forward
  step2.classList.remove('hide');
  tryagain.classList.remove('hide');
  chooseagain.classList.remove('hide');
});

// if click tryagain get new random values
tryagain.addEventListener('click', () => {
  charRace = randomItem(raceArray);
  charClass = randomItem(classArray);
  characterlevel.innerHTML = `Level ${charLevel}`;
  characterrace.innerHTML = `${charRace}`;
  characterclass.innerHTML = `${charClass}`;
});

// Create variable for the whole guided selection
const guided = document.getElementById('guided');

// Create a variable for the three selections
const levelSelect = document.getElementById('levelSelect');
const raceSelect = document.getElementById('raceSelect');
const classSelect = document.getElementById('classSelect')

// If the user clicks 'guided selection' first select level
guide.addEventListener('click', () => {
  // Hide the choosePath buttons
  choosePath.classList.add('hide');
  // Show the levelSelect dropdown and confirmation
  levelSelect.classList.remove('hide');
});

// Create variables to capture the selection and confirmation button
const selectlevel = document.getElementById('selectlevel');
const levelConfirm = document.getElementById('levelConfirm');

selectlevel.addEventListener('change', () => {
    charLevel = selectlevel.options[selectlevel.selectedIndex].text;
    characterlevel.innerHTML = `${charLevel}`;
});

levelConfirm.addEventListener('click', () => {
  // Show the character section
  character.classList.remove('hide');
  // Hide the level selection section
  levelSelect.classList.add('hide');
  // Show the race selection section
  raceSelect.classList.remove('hide');
});

// Create function to show and hide selection details
function RaceClickFunction (chosen, selected) {
  let c = document.getElementById(chosen);
  let s = document.getElementById(selected);
  //I'm using "click" but it works with any event
  document.addEventListener('click', function(event) {
    if (c.contains(event.target)) {
      s.classList.remove('hide');
      charRace = c.textContent;
      characterrace.innerHTML = charRace;
    }
    else {
      s.classList.add('hide');
    }
  });
}

// Create click effects for all the races
RaceClickFunction('Dwarf', 'DwarfRace');
RaceClickFunction('Halfling', 'HalflingRace');
RaceClickFunction('Elf', 'ElfRace');
RaceClickFunction('Human', 'HumanRace');
RaceClickFunction('Gnome', 'GnomeRace');
RaceClickFunction('Half-Orc', 'Half-OrcRace');
RaceClickFunction('Half-Elf', 'Half-ElfRace');

// If they choose Random race
const ChooseRace = document.getElementById('ChooseRace');
ChooseRace.addEventListener('click', () => {
  charRace = randomItem(raceArray);
  characterrace.innerHTML = charRace;
});

// Confirm race selection and move on to class
const confirmRace = document.getElementById('confirmRace');
confirmRace.addEventListener('click', () => {
  // Hide the race selection section
  raceSelect.classList.add('hide');
  // Show the class selection section
  classSelect.classList.remove('hide');
});

// Create function to show and hide selection details
function ClassClickFunction (chosen, selected) {
  let c = document.getElementById(chosen);
  let s = document.getElementById(selected);
  //I'm using "click" but it works with any event
  document.addEventListener('click', function(event) {
    if (c.contains(event.target)) {
    //the click was outside the specifiedElement, do something
      s.classList.remove('hide');
      charClass = c.textContent;
      characterclass.innerHTML = charClass;
    }
    else {
      s.classList.add('hide');
    }
  });
}

// Create click effects for all the classes
ClassClickFunction('Barbarian', 'BarbarianClass');
ClassClickFunction('Bard', 'BardClass');
ClassClickFunction('Cleric', 'ClericClass');
ClassClickFunction('Druid', 'DruidClass');
ClassClickFunction('Fighter', 'FighterClass');
ClassClickFunction('Monk', 'MonkClass');
ClassClickFunction('Paladin', 'PaladinClass');
ClassClickFunction('Ranger', 'RangerClass');
ClassClickFunction('Rogue', 'RogueClass');
ClassClickFunction('Wizard', 'WizardClass');
ClassClickFunction('Sorcerer', 'SorcererClass');

// If they choose random class
const ChooseClass = document.getElementById('ChooseClass');
ChooseClass.addEventListener('click', () => {
  charClass = randomItem(classArray);
  characterclass.innerHTML = charClass;
});

// Confirm class selection and move on to class
const ConfirmClass = document.getElementById('ConfirmClass');
ConfirmClass.addEventListener('click', () => {
  // Hide the race selection section
  classSelect.classList.add('hide');
  // Show the class selection section
  step2.classList.remove('hide');
  // Guided selection doesn't offer restart options
});

// Create die roll functions
// Function for rolling any die
function makeDie(sides) {
  let die = function () {
    return 1 + Math.random() * sides | 0;
  };

  die.times = function (count) {
    let rolls = [];
    for(let i = 0 ; i < count ; i++) {
      rolls.push(this());
    }
    return rolls;
  };

  return die;
}

// Function for rolling a die with no ones
function noOnes(sides) {
  let die = function () {
    return 2 + Math.random() * sides | 0;
  };

  die.times = function (count) {
    let rolls = [];
    for(let i = 0 ; i < count ; i++) {
      rolls.push(this());
    }
    return rolls;
  };

  return die;
}

// Function for calculating stats (add top 3 die rolls, reroll any ones)
function rollstat() {
    var x = noOnes(5).times(4)
    var x = x.sort();
    s = x[1] + x[2] + x[3];
    return s
    }

// Create an array of stats
let stats = [rollstat(), rollstat(), rollstat(), rollstat(), rollstat(), rollstat()];

// Sort them from highest to lowest
stats.sort(function (a, b) {
    return a - b;
});

// And variables for the stats sections
const statsSection = document.getElementById('stats');
const strength = document.getElementById('str');
const modstrength = document.getElementById('modstr');
const dexterity = document.getElementById('dex');
const moddexterity = document.getElementById('moddex');
const constitution = document.getElementById('con');
const modconstitution = document.getElementById('modcon');
const intelligence = document.getElementById('int');
const modintelligence = document.getElementById('modint');
const wisdom = document.getElementById('wis');
const modwisdom = document.getElementById('modwis');
const charisma = document.getElementById('cha');
const modcharisma = document.getElementById('modcha');

// Create variables for each ability score
let str; // strength
let dex; // dexterity
let con; // constitution
let int; // intelligence
let wis; // wisdom
let cha; // charisma

function assignStats() {
  /* Assign STR */
  if (charClass == 'Barbarian' || charClass == 'Fighter' || charClass == 'Monk') {str = stats[5]}
  else if (charClass == 'Paladin' || charClass == 'Druid' || charClass == 'Ranger') {str = stats[4]}
  else if (charClass == 'Bard' || charClass == 'Cleric' || charClass == 'Sorcerer') {str = stats[0]}
  else {str = stats[5]}

  /* Assign DEX */
  if (charClass == 'Rogue' || charClass == 'Ranger') {dex = stats[5]}
  else if (charClass == 'Bard' || charClass == 'Wizard' || charClass == 'Sorcerer') {dex = stats[4]}
  else if (charClass == 'Barbarian' || charClass == 'Fighter') {dex = stats[3]}
  else if (charClass == 'Druid' || charClass == 'Monk' || charClass == 'Paladin') {dex = stats[2]}
  else if (charClass == 'Cleric') {dex = stats[1]}
  else {dex = stats[3]}

  /* Assign INT */
  if (charClass == 'Wizard') {int = stats[5]}
  else if (charClass == 'Rogue') {int = stats[4]}
  else if (charClass == 'Bard') {int = stats[3]}
  else if (charClass == 'Cleric') {int = stats[2]}
  else if (charClass == 'Barbarian' || charClass == 'Fighter' || charClass == 'Monk' || charClass == 'Paladin' || charClass == 'Druid' || charClass == 'Sorcerer') {int = stats[1]}
  else {int = stats[1]}

  /* Assign WIS */
  if (charClass == 'Druid' || charClass == 'Cleric') {wis = stats[5]}
  else if (charClass == 'Monk' || charClass == 'Ranger') {wis = stats[3]}
  else if (charClass == 'Rogue' || charClass == 'Barbarian' || charClass == 'Fighter' || charClass == 'Sorcerer') {wis = stats[2]}
  else if (charClass == 'Bard') {wis = stats[1]}
  else if (charClass == 'Paladin') {wis = stats[0]}
  else {wis = stats[2]}

  /* Assign CON */
  if (charClass == 'Fighter' || charClass == 'Barbarian' || charClass == 'Monk' || charClass == 'Rogue' || charClass == 'Cleric' || charClass == 'Druid' || charClass == 'Paladin') {con = stats[4]}
  else if (charClass == 'Bard' || charClass == 'Ranger' || charClass == 'Sorcerer') {con = stats[3]}
  else {con = stats[4]}

  /* Assign CHA*/
  if (charClass == 'Bard' || charClass == 'Sorcerer' || charClass == 'Paladin') {cha = stats[5]}
  else if (charClass == 'Cleric') {cha = stats[4]}
  else if (charClass == charClass == 'Rogue' || charClass == 'Fighter' || charClass == 'Monk' || 'Druid' || charClass == 'Barbarian' || charClass == 'Ranger') {cha = stats[0]}
  else {cha = stats[0]}

  // Add racial modifiers
  switch (charRace){
    case ('Dwarf'):
      wis += 2;
      con += 2;
      cha = cha - 2;
      break;
    case ('Elf'):
      dex += 2;
      int += 2;
      con = con - 2;
      break;
    case ('Gnome'):
      con += 2;
      cha += 2;
      str = str - 2;
      break;
    case ('Halfling'):
      str = str - 2;
      dex += 2;
      cha += 2;
    default:
      if (charClass == 'Barbarian' || charClass == 'Fighter' || charClass == 'Monk')
          {str = str + 2}
      else if (charClass == 'Rogue' || charClass == 'Ranger')
          {dex = dex + 2}
      else if (charClass == 'Wizard')
          {int = int + 2}
      else if (charClass == 'Druid' || charClass == 'Cleric')
          {wis = wis + 2}
      else
          {cha = cha + 2}
      }
  }

// Calculate modifiers
function calcMod (ability){
  return Math.floor((ability - 10)/2)
}

// Create variables for each of the ability modifiers
let modstr;
let moddex;
let modint;
let modcon;
let modwis;
let modcha;

// When you click the roll stats button
charnext.addEventListener('click', () => {
  // Hide next step buttons
  step2.classList.add('hide');
  tryagain.classList.add('hide')
  // Show stats section
  statsSection.classList.remove('hide');
  // Assign stats based on class and race
  assignStats();
  // Calculate modifiers
  modstr = calcMod(str);
  moddex = calcMod(dex);
  modint = calcMod(int);
  modcon = calcMod(con);
  modwis = calcMod(wis);
  modcha = calcMod(cha);
  // Fill in stats
  strength.innerHTML = str;
  modstrength.innerHTML = modstr;
  dexterity.innerHTML = dex;
  moddexterity.innerHTML = moddex;
  constitution.innerHTML = con;
  modconstitution.innerHTML = modcon;
  intelligence.innerHTML = int;
  modintelligence.innerHTML = modint;
  wisdom.innerHTML = wis;
  modwisdom.innerHTML = modwis;
  charisma.innerHTML = cha;
  modcharisma.innerHTML = modcha;
});
