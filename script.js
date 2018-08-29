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

// When you click the roll stats button
charnext.addEventListener('click', () => {
  // Hide next step buttons
  step2.classList.add('hide');
  tryagain.classList.add('hide');
  // Show rolltype section
  rolltype.classList.remove('hide');
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

// Function for calculating classic stats
function rollClassicStat() {
  let arr = []
  for (i=0; i < 6; i++){
    let x = makeDie(6).times(3)
    s = x[0] + x[1] + x[2];
    arr.push(s);
    }
  return arr
  }

// Function for calculating stats (add top 3 of 4 die rolls, reroll any ones)
function rollStandardStat() {
  let arr = []
  for (i=0; i < 6; i++){
    let x = noOnes(5).times(4)
    x.sort();
    s = x[1] + x[2] + x[3];
    arr.push(s);
    }
  return arr
  }

// Function for calculating stats (roll 2 add 6)
function rollHeroicStats(){
  let arr = [];
  for (i=0; i < 6; i++){
    let x = makeDie(6).times(2)
    s = x[0]+x[1]+6;
    arr.push(s);
    }
  return arr
}

// Create an array for stats
let stats;

// Create variables for rolltypes
const classic = document.getElementById('classic');
const standard = document.getElementById('standard');
const heroic = document.getElementById('heroic');

// Create variables for each ability score
let str; // strength
let dex; // dexterity
let con; // constitution
let int; // intelligence
let wis; // wisdom
let cha; // charisma

function assignStats() {
  // Sort them from highest to lowest
  stats.sort(function (a, b) {return a - b;});

  // Assign STR
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

// Create variables for step-3
const step3 = document.getElementById('step-3');
// const rollagain = document.getElementById('rollagain'); // Need to find a concise way to do this
const makeSheet = document.getElementById('makeSheet');

function fillStats() {
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
};

classic.addEventListener('click', () => {
  stats = rollClassicStat();
  assignStats();
  // Show stats section
  statsSection.classList.remove('hide');
  // Calculate modifiers
  modstr = calcMod(str);
  moddex = calcMod(dex);
  modint = calcMod(int);
  modcon = calcMod(con);
  modwis = calcMod(wis);
  modcha = calcMod(cha);
  // Fill in stats
  fillStats()
  // Hide rolltype buttons
  rolltype.classList.add('hide');
  // Show roll again and charactersheet buttons
  step3.classList.remove('hide');
});

standard.addEventListener('click', () => {
  stats = rollStandardStat();
  assignStats();
  // Show stats section
  statsSection.classList.remove('hide');
  // Calculate modifiers
  modstr = calcMod(str);
  moddex = calcMod(dex);
  modint = calcMod(int);
  modcon = calcMod(con);
  modwis = calcMod(wis);
  modcha = calcMod(cha);
  // Fill in stats
  fillStats()
  // Hide rolltype buttons
  rolltype.classList.add('hide');
  // Show roll again and charactersheet buttons
  step3.classList.remove('hide');
})

heroic.addEventListener('click', () => {
  stats = rollHeroicStats();
  assignStats();
  // Show stats section
  statsSection.classList.remove('hide');
  // Calculate modifiers
  modstr = calcMod(str);
  moddex = calcMod(dex);
  modint = calcMod(int);
  modcon = calcMod(con);
  modwis = calcMod(wis);
  modcha = calcMod(cha);
  // Fill in stats
  fillStats()
  // Hide rolltype buttons
  rolltype.classList.add('hide');
  // Show roll again and charactersheet buttons
  step3.classList.remove('hide');
})

// Make variable for charactersheet div
const charactersheet = document.getElementById('charactersheet');

// Random gender assignment
let Gender = function () {
    let x = Math.floor(Math.random() * 2);
    switch (x) {
        case (0): return "Female";
        case (1): return "Male";
        }
};

// Functions for creating races as objects
function race(languages, optLang, size, age, speed, mheight, mweight, mNames, fheight, fweight, fNames, traits, weapons, a, b, c, d, e, f, g) {
    this.size = size;
    this.speed = speed;
    this.traits = traits;
    this.languages = languages;
    this.optLanguages = function () {
        var lang = [];
        for (var i = optLang.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = optLang[i];
            optLang[i] = optLang[j];
            optLang[j] = temp;
        }
        if (modint() > 0) {
      		for (var x = 0; x < modint(); x++) {
                lang.push(optLang[x]);
        	}
        	return lang;
        }
        else {
            return lang;
        }
        };
    this.knownLanguages = function () {
        return ("Common" + this.languages + ", " + this.optLanguages());
    };
    this.HW = function (){
        return Roll(a, b);
    };
    this.fheight = fheight;
    this.fweight = fweight;
    this.weight = function () {
        switch (PCGender) {
            case ("Female"):
                return fweight + this.HW() + "lbs";
            case ("Male"):
                return mweight + this.HW() + "lbs";
            }
        };
    this.height = function () {
        switch (PCGender) {
            case ("Female"):
                var fh = fheight + this.HW();
                return parseInt(fh/12) + "ft " + (fh % 12) + "in";
            case ("Male"):
                var mh = mheight + this.HW();
                return parseInt(mh/12) + "ft " + (mh % 12) + "in";
            }
        };
    this.name = function() {
        switch (PCGender) {
            case ("Male"):
                return mNames[Math.floor(Math.random() * mNames.length)];
            case ("Female"):
                return fNames[Math.floor(Math.random() * fNames.length)];
            }
        };
    this.Age = function () {
      	var x = Math.round(Roll(c, d) + ((PCLevel - 1)*g));
      	var y = Math.round(Roll(6, e) + ((PCLevel - 1)*g));
      	var z = Math.round(Roll(6, f) + ((PCLevel - 1)*g));
        if (PCClass == "Barbarian" || PCClass == "Rogue" || PCClass == "Sorcerer") {
            return age + x;
        	}
        else if (PCClass == "Bard" || PCClass == "Fighter" || PCClass == "Paladin" || PCClass == "Ranger") {
            return age + y;
            }
        else {
            return age + z;
        	}
        };
    }

/*Dwarf object for characteristics*/
var Dwarf = new race(
    /* language */ ", Dwarven",
    /* optLang */ ["Giant", 'Troll'],
    /* size */ "Med",
    /* age */ 24,
    /* speed */ 20,
    /* mheight */ 45,
    /* mweight */ 150,
    /* mnames */ ['Dolgrin', 'Runyar', 'Harsk', 'Kazmuk', 'Morgym', 'Rogar'],
    /* fheight */ 43,
    /* fweight */ 120,
    /* fnames */ ['Agna', 'Bodill', 'Ingra', 'Kotri', 'Rusilka', 'Yangrit'],
    /* traits */
        ["Darkvision: See in the dark up to 60 feet",
        "Defensive Training: +4 dodge bonus to AC against giant subtype",
        "Greed: +2 racial bonus on Appraise skill checks on nonmagical goods that contain precious metals or gemstones",
        "Hatred: +1 bonus on attack rolls against orc and goblinoid subtypes",
        "Hardy: +2 bonus on saving throws against poison, spells, and spell-like abilities",
        "Stability: +4 bonus to CMD against bull rush or trip while standing on the ground",
        "Stonecunning: +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors, they receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking."
        ],
    /* weapons */ "Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word dwarven in its name as a martial weapon.",
    /* a */ 4,
    /* b */ 2,
    /* c */ 6,
    /* d */ 2,
    /* e */ 3,
    /* f */ 4,
    /* f */ 2,
    /* g */ 3.35
    );

/* Elf object for characteristics */
var Elf = new race(
    /* language */ ", Elven",
    /* optLang */ ["Celestial", "Draconic", 'Gnoll', 'Gnome', 'Goblin', 'Orc', 'Sylvan'],
    /* size */ "Med",
    /* age */ 110,
    /* speed */ 30,
    /* mheight */ 64,
    /* mweight */ 100,
    /* mnames */ ['Caladrel', 'Heldalel', 'Lanliss', 'Meirdrarel', 'Seldlon', 'Talathel', 'Variel', 'Zordlon'],
    /* fheight */ 64,
    /* fweight */ 100,
    /* fnames */ ['Amrunelara', 'Dardlara', 'Farnra', 'Jathal', 'Merisiel', 'Oparal', 'Soumral', 'Tessara', 'Yalandlara'],
    /* traits */
        ["Elven Immunities: Elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
        "Low-Light Vision: Elves can see twice as far as humans in conditions of dim light.",
        "Elven Magic: Elves receive a +2 racial bonus on caster level checks made to overcome spell resistance. In addition, elves receive a +2 racial bonus on Spellcraft skill checks made to identify the properties of magic items.",
        "Keen Senses: Elves receive a +2 racial bonus on Perception skill checks."
        ],
    /* weapons */ "Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word 'elven' in its name as a martial weapon.",
    /* a */ 6,
    /* b */ 2,
    /* c */ 6,
    /* d */ 4,
    /* e */ 6,
    /* f */ 10,
    /* g */ 2.2
    );

/* Gnome object for characteristics */
var Gnome = new race(
    /* language */ ", Gnome, Sylvan",
    /* optLang */ ["Draconic", 'Dwarven', 'Elven', 'Giant', 'Goblin', 'Orc'],
    /* size */ "Small",
    /* age */ 40,
    /* speed */ 20,
    /* mheight */ 36,
    /* mweight */ 35,
    /* mnames */ ['Abroshtor', 'Bastargre', 'Halungalom', 'Krolmnite', 'Poshment', 'Zarzuket', 'Zatqualmie'],
    /* fheight */ 34,
    /* fweight */ 30,
    /* fnames */ ['Besh', 'Fijit', 'Lini', 'Neji', 'Majet', 'Pai', 'Queck', 'Trig'],
    /* traits */
        ["Defensive Training: Gnomes get a +4 dodge bonus to AC against monsters of the giant type.",
        "Low-Light Vision: Gnomes can see twice as far as humans in conditions of dim light.",
        "Gnome Magic: Gnomes add +1 to the DC of any saving throws against illusion spells that they cast. Gnomes with a Charisma of 11 or higher also gain the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation, and speak with animals. The caster level for these effects is equal to the gnome's level. The DC for these spells is equal to 10 + the spell's level + the gnome's Charisma modifier.",
        "Hatred: Gnomes receive a +1 bonus on attack rolls against humanoid creatures of the reptilian and goblinoid subtypes due to special training against these hated foes.",
        "Illusion Resistance: Gnomes get a +2 racial saving throw bonus against illusion spells or effects.",
        "Keen Senses: Gnomes receive a +2 racial bonus on Perception skill checks.",
        "Obsessive: Gnomes receive a +2 racial bonus on a Craft or Profession skill of their choice."
        ],
    /* weapons */ "Gnomes treat any weapon with the word 'gnome' in its name as a martial weapon.",
    /* a */ 4,
    /* b */ 2,
    /* c */ 6,
    /* d */ 4,
    /* e */ 6,
    /* f */ 9,
    /* g */ 1.8
    );

/* Half-Elf object for characteristics */
var HalfElf = new race(
    /* language */ ", Elven",
    /* optLang */ ["Gnome", 'Orc', 'Terran', 'Undercommon', "Draconic", 'Dwarven', 'Sylvan', 'Giant', 'Goblin', 'Orc', "Celestial", 'Abyssal', 'Gnoll'],
    /* size */ "Med",
    /* age */ 20,
    /* speed */ 30,
    /* mheight */ 62,
    /* mweight */ 110,
    /* mnames */ ['Calathes', 'Encinal', 'Kyras', 'Narciso', 'Quiray', 'Satinder', 'Seltyiel', 'Zirul'],
    /* fheight */ 60,
    /* fweight */ 90,
    /* fnames */ ['Cathran', 'Elsbeth', 'Iandoli', 'Kieyanna', 'Lialda', 'Maddela', 'Reda', 'Tamarie'],
    /* traits */ [
        "Adaptability: Half-elves receive Skill Focus as a bonus feat at 1st level.",
        "Low-Light Vision: Half-elves can see twice as far as humans in conditions of dim light.",
        "Elf Blood: Half-elves count as both elves and humans for any effect related to race.",
        "Elven Immunities: Half-elves are immune to magic sleep effects and get a +2 racial saving throw bonus against enchantment spells and effects.",
        "Keen Senses: Half-elves receive a +2 racial bonus on Perception skill checks.",
        "Multitalented: Half-elves choose two favored classes at first level and gain +1 hit point or +1 skill point whenever they take a level in either one of those classes."
    ],
    /* weapons */ "No racial weapons",
    /* a */ 8,
    /* b */ 2,
    /* c */ 6,
    /* d */ 1,
    /* e */ 2,
    /* f */ 3,
    /* g */ 1.8
    );

/* Half-Orc object for characteristics */
var HalfOrc = new race(
    /* language */ ", Orc",
    /* optLang */ ['Abyssal', "Draconic", 'Giant', 'Gnoll', 'Goblin'],
    /* size */ "Med",
    /* age */ 14,
    /* speed */ 30,
    /* mheight */ 58,
    /* mweight */ 150,
    /* mnames */ ['Ausk', 'Davor', 'Hakak', 'Kizziar', 'Makoa', 'Nesteruk', 'Tsadok'],
    /* fheight */ 53,
    /* fweight */ 110,
    /* fnames */ ['Canan', 'Drogheda', 'Goruza', 'Mazon', 'Shirish', 'Tevaga', 'Zelika'],
    /* traits */
        ["Intimidating: Half-orcs receive a +2 racial bonus on Intimidate skill checks due to their fearsome nature.",
        "Darkvision: Half-orcs can see in the dark up to 60 feet.",
        "Orc Blood: Half-orcs count as both humans and orcs for any effect related to race.",
        "Orc Ferocity: Once per day, when a half-orc is brought below 0 hit points but not killed, he can fight on for one more round as if disabled. At the end of his next turn, unless brought to above 0 hit points, he immediately falls unconscious and begins dying."
        ],
    /*weapons */ "Half-orcs are proficient with greataxes and falchions and treat any weapon with the word 'orc' in its name as a martial weapon.",
    /* a */ 12,
    /* b */ 2,
    /* c */ 4,
    /* d */ 1,
    /* e */ 1,
    /* f */ 2,
    /* g */ 0.6
    );

/* Halfling object for characteristics */
var Halfling = new race(
    /* language */ ", Halfling",
    /* optLang */ ['Dwarven', "Elven", 'Gnome', 'Goblin'],
    /* size */ "Small",
    /* age */ 20,
    /* speed */ 20,
    /* mheight */ 32,
    /* mweight */ 30,
    /* mnames */ ['Antal', 'Boram', 'Evan', 'Jamir', 'Kaleb', 'Lem', 'Miro', 'Sumak'],
    /* fheight */ 30,
    /* fweight */ 25,
    /* fnames */ ['Anafa', 'Bellis', 'Etune', 'Filiu', 'Lissa', 'Marra', 'Rillka', 'Sistra', 'Yamyra'],
    /* traits */
        ["Fearless: Halflings receive a +2 racial bonus on all saving throws against fear. This bonus stacks with the bonus granted by halfling luck.",
        "Halfling Luck: Halflings receive a +1 racial bonus on all saving throws.",
        "Keen Senses: Halflings receive a +2 racial bonus on Perception skill checks.",
        "Sure-Footed: Halflings receive a +2 racial bonus on Acrobatics and Climb skill checks."
        ],
    /* weapons */ "Halflings are proficient with slings and treat any weapon with the word 'halfling' in its name as a martial weapon.",
    /* a */ 4,
    /* b */ 2,
    /* c */ 6,
    /* d */ 2,
    /* e */ 3,
    /* f */ 4,
    /* g */ 1
    );

/* Human object for characteristics */
var Human = new race (
    /* language */ "",
    /* optLang */ ["Giant", "Gnome", 'Orc', 'Terran', 'Undercommon', "Draconic", 'Dwarven', 'Sylvan', 'Goblin', 'Orc', "Celestial", 'Abyssal', 'Gnoll'],
    /* size */ "Med",
    /* age */ 15,
    /* speed */ 30,
    /* mheight */ 58,
    /* mweight */ 120,
    /* mnames */ ['Michael', 'Jacob', 'Matthew', 'Nicholas', 'Christopher', 'Joseph', 'Zachary', 'Joshua', 'Andrew', 'William', 'Daniel', 'Christian', 'Tyler', 'Ryan', 'Anthony', 'Alexander', 'Jonathan', 'David', 'Dylan', 'James', 'John', 'Justin', 'Benjamin', 'Brandon', 'Austin', 'Cameron', 'Samuel', 'Nathan', 'Noah', 'Brian', 'Jose', 'Ethan', 'Robert', 'Hunter', 'Devin', 'Steven', 'Eric', 'Kevin','Caleb', 'Sean', 'Kyle', 'Jason', 'Jordan', 'Aaron', 'Thomas', 'Logan', 'Connor', 'Gabriel', 'Jared', 'Isaiah', 'Jack', 'Cody', 'Mason', 'Juan', 'Colin', 'Luis', 'Adam', 'Evan', 'Marcus', 'Seth', 'Mark', 'Isaac', 'Luke', 'Garrett', 'Charles', 'Jesse', 'Xavier', 'Richard', 'Nathaniel', 'Chase', 'Patrick', 'Cole', 'Carlos', 'Angel', 'Blake', 'Dominic', 'Lucas', 'Derek', 'Dakota', 'Jackson', 'Trevor', 'Alex', 'Maxwell', 'Spencer', 'Victor', 'Timothy', 'Shane', 'Bryce', 'Carson', 'Dalton', 'Ian', 'Elijah', 'Tristan', 'Paul', 'Gavin', 'Brendan', 'Jesus', 'Colton', 'Aidan', 'Antonio'],
    /* fheight */ 53,
    /* fweight */ 85,
    /* fnames */ ['Hannah', 'Emily', 'Sarah', 'Madison', 'Brianna', 'Kaylee', 'Kaitlyn', 'Hailey', 'Alexis', 'Elizabeth', 'Taylor', 'Lauren', 'Ashley', 'Katherine', 'Jessica', 'Anna', 'Samantha', 'Makayla', 'Kayla', 'Madeline', 'Jasmine', 'Alyssa', 'Abigail', 'Olivia', 'Brittany', 'Nicole', 'Destiny', 'Mackenzie', 'Emma', 'Jennifer', 'Rachel', 'Sydney', 'Megan', 'Grace', 'Alexandra', 'Morgan', 'Savannah', 'Victoria', 'Sophia', 'Natalie', 'Amanda', 'Stephanie', 'Chloe', 'Allison', 'Rebecca', 'Jacqueline', 'Julia', 'Cheyenne', 'Amber', 'Erica', 'Isabella', 'Kylie', 'Christina', 'Brooke', 'Bailey', 'Maria', 'Diana', 'Danielle', 'Kelsey', 'Jordan', 'Andrea', 'Vanessa', 'Melissa', 'Kimberly', 'Sierra', 'Maya', 'Michelle', 'Caroline', 'Arianna', 'Zoe', 'Leslie', 'Isabel', 'Gabrielle', 'Faith', 'Lindsey', 'Erin', 'Kiara', 'Jenna', 'Casey', 'Paige', 'Mary', 'Alicia', 'Cameron', 'Alexandria', 'Molly', 'Melanie', 'Katie', 'Courtney', 'Trinity', 'Jada', 'Claire', 'Audrey', 'Adriana', 'Mia', 'Margaret', 'Riley', 'Jocelyn', 'Gabriela', 'Sabrina', 'Miranda'],
    /* traits */
        ["Bonus Feat: Humans select one extra feat at 1st level.",
        "Skilled: Humans gain an additional skill rank at first level and one additional rank whenever they gain a level."
        ],
    /* weapons */ "No racial weapons",
    /* a */ 10,
    /* b */ 2,
    /* c */ 4,
    /* d */ 1,
    /* e */ 1,
    /* f */ 2,
    /* g */ 1
    );

theRaces = {'Dwarf', 'Elf', 'Gnome', 'HalfElf', 'HalfOrc', 'Halfling', 'Human'};

let charGender = Gender();
let charName;
let charLang;
let charSpeed;
let charSize;
let charAge;
let charHeight;
let charWeight;
let RacialTraits;

function PCAssignRace(races, race) {
  charName = races[race].name();
  charLang = races[race].knownLanguages();
  charSpeed = races[race].speed;
  charSize = races[race].size;
  charAge = races[race].Age();
  charHeight = races[race].height();
  charWeight = races[race].weight();
  RacialTraits = races[race].traits;
  };

function SizeMod() {
	if (charSize == "Small"){return -1;}
	else {return 0;}
};

makeSheet.addEventListener('click', () => {
  PCAssignRace(theRaces, charRace);
  SizeMod();

  charactersheet.innerHTML = `
    <p>
      <span id="name">Name: ${charName}</span></br>
      <span id="gender">Gender: ${charGender}</span></br>
      <span id="size">Size: ${charSize}</span></br>
      <span id="speed">Speed: ${charSpeed}</span></br>
      <span id="languages">Languages: ${charLang}</span></br>
      <span id="age">Age: ${charAge}</span>
      <span id="traits">Racial Traits: ${RacialTraits}</span>
  `
})

function Class (align1, align2, h, skills, skillRanks, BAB, Fort, Ref, Will){
    this.alignment = function () {
        var x = align1[Math.floor(Math.random() * align1.length)];
        var y = align2[Math.floor(Math.random() * align2.length)];
        if (x == "Neutral" && y == "Neutral"){
            return "True Neutral";
        }
        else {
            return x + " " + y;
        }
        };
    this.hp =  function () {
    	var p = PCLevel - 1;
    	return h + Roll(h,p) + (modcon*(p+1));
  	};
  	this.bab = function() {
  	    return BAB[PCLevel];
  	};

  	this.fort = function() {
  	    return Fort[PCLevel] + modcon;
  	};
  	this.ref = function() {
  	    return Ref[PCLevel] + moddex;
  	};
  	this.will = function() {
  	    return Will[PCLevel] + modwis;
  	};
  	this.skillRanks = skills + modint;
    }

var Barbarian = new Class (
    /* align1 */ ['Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 12,
    /* skills */ ['Acrobatics', 'Climb', 'Intimidate', 'Knowledge (nature)', 'Perception', 'Ride', 'Survival', 'Swim'],
    /* skill ranks */ 4,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Bard = new Class (
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Stealth', 'Use Magic Device'],
    /* skill ranks */ 6,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Cleric = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 10,
    /* skills */ ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)', 'Knowledge (history)', 'Knowledge (nature)', 'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Stealth', 'Use Magic Device'],
    /* skill ranks */ 6,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Ref */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Druid = new Class (
    /*align1*/ ['Neutral'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Climb', 'Craft', 'Fly', 'Handle Animal', 'Heal', 'Knowledge (geography)', 'Knowledge (nature)',  'Perception', 'Profession', 'Ride', 'Spellcraft', 'Survival', 'Swim'],
    /* skill ranks */ 4,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Fighter = new Class (
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 10,
    /* skills */ ['Climb', 'Craft', 'Handle Animal', 'Knowledge (engineering)', 'Knowledge (dungeoneering)',  'Profession', 'Ride', 'Survival', 'Swim'],
    /* skill ranks */ 2,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Monk = new Class (
    /*align1*/ ['Lawful'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Acrobatics', 'Climb', 'Craft', 'Escape Artist', 'Intimidate', 'Knowledge (history)', 'Knowledge (religion)', 'Perception', 'Perform', 'Profession', 'Ride', 'Sense Motive', 'Stealth', 'Swim'],
    /* skill ranks */ 4,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Paladin = new Class (
    /*align1*/ ['Lawful'],
    /* align2 */ ['Good'],
    /* hp */ 10,
    /* skills */ ['Craft', 'Diplomacy', 'Handle Animal', 'Heal', 'Knowledge (nobility)', 'Knowledge (religion)', 'Profession', 'Ride', 'Sense Motive', 'Spellcraft'],
    /* skill ranks */ 2,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Ranger = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 10,
    /* skills */ ['Climb', 'Craft', 'Handle Animal', 'Heal', 'Intimidate', 'Knowledge (dungeoneering)', 'Knowledge (geography)', 'Knowledge (nature)', 'Perception', 'Profession', 'Ride', 'Spellcraft', 'Stealth', 'Survival', 'Swim'],
    /* skill ranks */ 6,
    /* BAB */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Will */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6]
    );

var Rogue = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 8,
    /* skills */ ['Acrobatics', 'Appraise', 'Bluff', 'Climb', 'Craft', 'Diplomacy', 'Disable Device', 'Disguise', 'Escape Artist', 'Intimidate', 'Knowledge (dungeoneering)', 'Knowledge (local)', 'Linguistics', 'Perception', 'Perform', 'Profession', 'Sense Motive', 'Sleight of Hand', 'Stealth', 'Swim', 'Use Magic Device'],
    /* skill ranks */ 8,
    /* BAB */ [0, 1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 15],
    /* Fort */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Sorcerer = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 6,
    /* skills */ ['Appraise', 'Bluff', 'Craft', 'Fly', 'Intimidate', 'Knowledge (arcana)', 'Profession', 'Spellcraft', 'Use Magic Device'],
    /* skill ranks */ 2,
    /* BAB */ [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
    /* Fort */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var Wizard = new Class(
    /*align1*/ ['Lawful', 'Neutral', 'Chaotic'],
    /* align2 */ ['Good', 'Neutral', 'Evil'],
    /* hp */ 6,
    /* skills */ ['Appraise', 'Craft', 'Fly', 'Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (engineering)', 'Knowledge (history)', 'Knowledge (nature)', 'Knowledge (nobility)', 'Knowledge (planes)', 'Knowledge (religion)', 'Linguistics', 'Profession', 'Spellcraft'],
    /* skill ranks */ 2,
    /* BAB */ [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
    /* Fort */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Ref */ [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6],
    /* Will */ [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12]
    );

var PCAssignClass = function () {
    switch (PCClass) {
        case ('Barbarian'):
            PCAlignment = Barbarian.alignment();
            HP = Barbarian.hp();
            BAB = Barbarian.bab();
            Fort = Barbarian.fort();
            Ref = Barbarian.ref();
            Will = Barbarian.will();
            break;
        case ('Bard'):
            PCAlignment = Bard.alignment();
            HP = Bard.hp();
            BAB = Bard.bab();
            Fort = Bard.fort();
            Ref = Bard.ref();
            Will = Bard.will();
            break;
        case ('Cleric'):
            PCAlignment = Cleric.alignment();
            HP = Cleric.hp();
            BAB = Cleric.bab();
            Fort = Cleric.fort();
            Ref = Cleric.ref();
            Will = Cleric.will();
            break;
        case ('Druid'):
            PCAlignment = Druid.alignment();
            HP = Druid.hp();
            BAB = Druid.bab();
            Fort = Druid.fort();
            Ref = Druid.ref();
            Will = Druid.will();
            break;
        case ('Fighter'):
            PCAlignment = Fighter.alignment();
            HP = Fighter.hp();
            BAB = Fighter.bab();
            Fort = Fighter.fort();
            Ref = Fighter.ref();
            Will = Fighter.will();
            break;
        case ('Monk'):
            PCAlignment = Monk.alignment();
            HP = Monk.hp();
            BAB = Monk.bab();
            Fort = Monk.fort();
            Ref = Monk.ref();
            Will = Monk.will();
            break;
        case ('Paladin'):
            PCAlignment = 'Lawful Good';
            HP = Paladin.hp();
            BAB = Paladin.bab();
            Fort = Paladin.fort;
            Ref = Paladin.ref;
            Will = Paladin.will;
            break;
        case ('Ranger'):
            PCAlignment = Ranger.alignment();
            HP = Ranger.hp();
            BAB = Ranger.bab();
            Fort = Ranger.fort();
            Ref = Ranger.ref();
            Will = Ranger.will();
            break;
        case ('Rogue'):
            PCAlignment = Rogue.alignment();
            HP = Rogue.hp();
            BAB = Rogue.bab();
            Fort = Rogue.fort();
            Ref = Rogue.ref();
            Will = Rogue.will();
            break;
        case ('Sorcerer'):
            PCAlignment = Sorcerer.alignment();
            HP = Sorcerer.hp();
            BAB = Sorcerer.bab();
            Fort = Sorcerer.fort();
            Ref = Sorcerer.ref();
            Will = Sorcerer.will();
            break;
        case ('Wizard'):
            PCAlignment = Wizard.alignment();
            HP = Wizard.hp();
            BAB = Wizard.bab();
            Fort = Wizard.fort();
            Ref = Wizard.ref();
            Will = Wizard.will();
            break;
        }
    };
