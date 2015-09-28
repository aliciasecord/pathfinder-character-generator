/* Array for random race selection */
var Race = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human']
var Race = Race[Math.floor(Math.random() * Race.length)]

/* Array for random race selection */
var Class = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']
var Class = Class[Math.floor(Math.random() * Class.length)]

$(document).ready(function() {
    /* At the start, the .character div should be hidden */
    $('.hide, #character, #stats, #guided, #again, #rolltype').hide();
    
    /*If they click "Guided Selection" show .character and .level div */
    $('#guide, #chooseagain').click(function() {
        $('#character, #race, #class').hide();
        $('#guided').fadeIn('fast');
        $('#choose, #again').hide('fast');
    });
    
    /*Guided Path*/
    
    /* But if it's the second time through with the Try again buttons need to clear the character fields first  */
    $('#tryagain, #chooseagain').click(function () {
        $('#characterlevel, #characterrace, #characterclass').empty();
    });
    
    /*Select level and append to Character*/
    $('#level span').click(function() {
        PCLevel = $("#selectlevel option:selected").text();
        $('#characterlevel').append('Level ' + PCLevel); 
        $('#race, #character').fadeIn('fast');
        $('#level, #ConfirmRace').hide();
    });
    
    /*Select Race*/
    $('#Dwarf').click(function() {
        $('.Dwarf').fadeIn('fast');
        var PCrace = 'Dwarf';
        $('#characterrace').append(PCrace);
    });
    
    $('#Gnome').click(function() {
        $('.Gnome').fadeIn('fast');
        var PCrace = 'Gnome';
        $('#characterrace').append(PCrace);
    });
    
    $('#Elf').click(function() {
        $('.Elf').fadeIn('fast');
        var PCrace = 'Elf';
        $('#characterrace').append(PCrace);
    });
    
    $('#Halfling').click(function() {
        $('.Halfling').fadeIn('fast');
        var PCrace = 'Halfling';
        $('#characterrace').append(PCrace);
    });
    
    $('#Human').click(function() {
        $('.Human').fadeIn('fast');
        var PCrace = 'Human';
        $('#characterrace').append(PCrace);
    });
    
    $('#Half-Elf').click(function() {
        $('.Half-Elf').fadeIn('fast');
        var PCrace = 'Half-Elf';
        $('#characterrace').append(PCrace);
    });
    
    $('#Half-Orc').click(function() {
        $('.Half-Orc').fadeIn('fast');
        var PCrace = 'Half-Orc';
        $('#characterrace').append(PCrace);
    });
    
    $('#ChooseRace').click(function() {
        var PCrace = Race;
        $('#characterrace').append(PCrace);
        $('#race').hide('fast');
        $('#class').fadeIn('fast');
    });
    
    $('.racepick').click(function() {
        $('#race ul, #race img, #race h3').hide();
        $('#ConfirmRace').fadeIn('fast');
    });
    
    $('#SelectRace').click(function() {
        $('#race, #ConfirmClass').hide();
        $('#class').fadeIn('fast');
    });
    
    $('#ResetRace').click(function() {
        $('.chosenrace, #ConfirmRace').hide();
        $('#race ul, #race img, #race h3').fadeIn('fast');
        $('#characterrace').empty();
    });
    
   /*Select class*/
    $('#Barbarian').click(function() {
        $('.Barbarian').fadeIn('fast');
        var PCclass = 'Barbarian';
        $('#characterclass').append(PCclass);
    });
    
    $('#Bard').click(function() {
        $('.Bard').fadeIn('fast');
        var PCclass = 'Bard';
        $('#characterclass').append(PCclass);
    });
    
    $('#Cleric').click(function() {
        $('.Cleric').fadeIn('fast');
        var PCclass = 'Cleric';
        $('#characterclass').append(PCclass);
    });
    
    $('#Druid').click(function() {
        $('.Druid').fadeIn('fast');
        var PCclass = 'Druid';
        $('#characterclass').append(PCclass);
    });
    
    $('#Fighter').click(function() {
        $('.Fighter').fadeIn('fast');
        var PCclass = 'Fighter';
        $('#characterclass').append(PCclass);
    });
    
    $('#Monk').click(function() {
        $('.Monk').fadeIn('fast');
        var PCclass = 'Monk';
        $('#characterclass').append(PCclass);
    });
    
    $('#Paladin').click(function() {
        $('.Paladin').fadeIn('fast');
        var PCclass = 'Paladin';
        $('#characterclass').append(PCclass);
    });
    
    $('#Ranger').click(function() {
        $('.Ranger').fadeIn('fast');
        var PCclass = 'Ranger';
        $('#characterclass').append(PCclass);
    });
    
    $('#Rogue').click(function() {
        $('.Rogue').fadeIn('fast');
        var PCclass = 'Rogue';
        $('#characterclass').append(PCclass);
    });
    
    $('#Wizard').click(function() {
        $('.Wizard').fadeIn('fast');
        var PCclass = 'Wizard';
        $('#characterclass').append(PCclass);
    });
    
    $('#Sorcerer').click(function() {
        $('.Sorcerer').fadeIn('fast');
        var PCclass = 'Sorcerer';
        $('#characterclass').append(PCclass);
    });
    
    $('#ChooseClass').click(function() {
        var PCclass = Class;
        $('#characterclass').append(PCclass);
        $('#class').hide();
        $('#again').fadeIn('fast');
    });
    
    $('.classpick').click(function() {
        $('#class ul, #class img, #class h3').hide();
        $('#ConfirmClass').fadeIn('fast');
    });
    
    $('#SelectClass').click(function() {
        $('#class').hide();
        $('#again').fadeIn('fast');
    });
    
    $('#ResetClass').click(function() {
        $('.chosenclass, #ConfirmClass').hide();
        $('#class ul, #class img, #class h3').fadeIn('fast');
        $('#characterclass').empty();
    });
    
    /* Random Path */
    
    /* If they choose the Random option, we have to chose level, race and class */
    
    $('#random, #tryagain').click(function() {
        
        /*Choose level*/
        var PCLevel = (Math.floor(Math.random() * 20) + 1);
        $('#characterlevel').show();
        $('#characterlevel').append('Level ' + PCLevel);
        
        /*Choose race*/
        var PCrace = Race;
        $('#characterrace').append(PCrace);
        
        /*Choose Class*/
        var PCclass = Class;
        $('#characterclass').append(PCclass); 
        /* Then hide the choices and show the character description */
        $('#choose').hide();
        $('#character').fadeIn('fast');
        
        /* Also show options to start over or move on */
        $('#again').fadeIn('fast');
    });
    
    /* Call for stats */
    $('#charnext').click(function() {
        $('#again').hide();
        $('#rolltype').fadeIn('fast');
        /* Function for rolling stats */
    });
});

/*Starting a new Javascript & Jquery section for stats */
/* Set Class, Race and Level variables */


$(document).ready(function(){
  $('#t1').text(PCLevel);
});

/* Functions for rolling any die */
function makeDie(sides) {
  var die = function () {
    return 1 + Math.random() * sides | 0;
  };

  die.times = function (count) {
    var rolls = [];
    for(var i = 0 ; i < count ; i++) {
      rolls.push(this());
    }
    return rolls;
  };

  return die;
}

var dice = {
  d4: makeDie(4),
  d6: makeDie(6),
  d8: makeDie(8),
  d10: makeDie(10),
  d12: makeDie(12),
  d20: makeDie(20),
};

/* Functions for rolling stats */

/* Switches for assigning stats */
var stats = [];

  /* Assign STR */
    if (PCClass == 'Barbarian' || PCClass == 'Fighter' || PCClass == 'Monk') {str = stats[5]}
    else if (PCClass == 'Paladin' || PCClass == 'Druid' || PCClass == 'Ranger') {str = stats[4]}
    else if (PCClass == 'Bard' || PCClass == 'Cleric' || PCClass == 'Sorcerer') {str = stats[0]}
    else {str = stats[5]}
    
  /* Assign DEX */
    if (PCClass == 'Rogue' || PCClass == 'Ranger') {dex = stats[5]}
    else if (PCClass == 'Bard' || PCClass == 'Wizard' || PCClass == 'Sorcerer') {dex = stats[4]}
    else if (PCClass == 'Barbarian' || PCClass == 'Fighter') {dex = stats[3]}
    else if (PCClass == 'Druid' || PCClass == 'Monk' || PCClass == 'Paladin') {dex = stats[2]}
    else if (PCClass == 'Cleric') {dex = stats[1]}
    
  /* Assign INT */
    if (PCClass == 'Wizard') {int = stats[5]}
    else if (PCClass == 'Rogue') {int = stats[4]}
    else if (PCClass == 'Bard') {int = stats[3]}
    else if (PCClass == 'Cleric') {int = stats[2]}
    else if (PCClass == 'Barbarian' || PCClass == 'Fighter' || PCClass == 'Monk' || PCClass == 'Paladin' || PCClass == 'Druid' || PCClass == 'Sorcerer') {int = stats[1]}
    
  /* Assign WIS */
    if (PCClass == 'Druid' || PCClass == 'Cleric') {wis = stats[5]}
    else if (PCClass == 'Monk' || PCClass == 'Ranger') {wis = stats[3]}
    else if (PCClass == 'Barbarian' || PCClass == 'Fighter') {wis = stats[2]}
    else if (PCClass == 'Rogue' || PCClass == 'Barbarian' || PCClass == 'Fighter' || PCClass == 'Sorcerer') {wis = stats[2]}
    else if (PCClass == 'Bard') {wis = stats[1]}
    else if (PCClass == 'Paladin') {wis = stats[0]}
    else {wis = stats[1]}
    
  /* Assign CON */
    if (PCClass == 'Fighter' || PCClass == 'Barbarian' || PCClass == 'Monk') {con = stats[4]}
    else if (PCClass == 'Rogue' || PCClass == 'Cleric' || PCClass == 'Druid' || PCClass == 'Paladin') {con = stats[4]}
    else if (PCClass == 'Bard' || PCClass == 'Ranger' || PCClass == 'Sorcerer') {con = stats[3]}
    
  /* Assign CHA*/
    if (PCClass == 'Bard' || PCClass == 'Sorcerer' || PCClass == 'Paladin') {cha = stats[5]}
    else if (PCClass == 'Cleric') {cha = stats[4]}
    else if (PCClass == PCClass == 'Rogue' || PCClass == 'Fighter' || PCClass == 'Monk' || 'Druid' || PCClass == 'Barbarian' || PCClass == 'Ranger') {cha = stats[0]}
    else {cha = stats[2]}

/* This part isn't built yet     
    $('#dicepool').click(function(){});
    $('#pointbuy').click(function(){});
*/

  /* Apply racial modifiers */
    if (PCRace == 'Halfling' || PCRace == 'Gnome') {str = str - 2}
    if (PCRace == 'Elf' || PCRace == 'Halfling') {dex = dex + 2}
    if (PCRace == 'Elf') {int = int + 2}
    if (PCRace == 'Dwarf') {wis = wis + 2}
    if (PCRace == 'Dwarf' || PCRace == 'Gnome') {con = con + 2}
    if (PCRace == 'Elf') {con = con - 2}
    if (PCRace == 'Halfling' || PCRace == 'Gnome') {cha = cha + 2}
    if (PCRace == 'Dwarf') {cha = cha - 2}
    if (PCRace == 'Human' || PCRace == 'Half-Elf' || PCRace == 'Half-Orc') {
        if (PCClass == 'Barbarian' || PCClass == 'Fighter' || PCClass == 'Monk')
            {str = str + 2}
        else if (PCClass == 'Rogue' || PCClass == 'Ranger')
            {dex = dex + 2}
        else if (PCClass == 'Wizard')
            {int = int + 2}
        else if (PCClass == 'Druid' || PCClass == 'Cleric')
            {wis = wis + 2}
        else if (PCClass == 'Bard' || PCClass == 'Paladin' || PCClass == 'Sorcerer')
            {cha = cha + 2}
        } 

var modstr = Math.floor((str - 10)/2);
var moddex = Math.floor((dex - 10)/2);
var modint = Math.floor((int - 10)/2);
var modcon = Math.floor((con - 10)/2);
var modwis = Math.floor((wis - 10)/2);
var modcha = Math.floor((cha - 10)/2);

$(document).ready(function() {
    $('#classic, #standard, #heroic').click(function() {
        $('#stats').fadeIn('fast');
        $('#rolltype').hide();
    });
    
    $('#str').append(str); 
    $('#dex').append(dex);
    $('#int').append(int);
    $('#con').append(con);
    $('#wis').append(wis);
    $('#cha').append(cha);
    
    $('#modstr').append(modstr); 
    $('#moddex').append(moddex);
    $('#modint').append(modint);
    $('#modcon').append(modcon);
    $('#modwis').append(modwis);
    $('#modcha').append(modcha);
});

    $('#t2').text(stats[5]);
    $('#t3').text(moddex);
    $('#t4').text(modint);
    $('#t5').text(str);
    $('#t6').text(dex);
});


var classicstat = function (){
    x = dice.d6.times(3)
    s = x[0] + x[1] + x[2]
    return s
    }

    var classicstats = [];
        for (i=0; i<7; i++) {
        stats.push(classicstat());
        }
    var classicstats = classicstats.sort();

    $('#classic').click(function() { 
    });
    
    var standardstat = function (){
    x = dice.d6.times(4)
    x = x.sort();
    s = x[1] + x[2] + x[3]
    return s
    }

    var standardstats = [];
        for (i=0; i<7; i++) {
        stats.push(standardstat());
        }
    var standardstats = standardstats.sort();    
        
    $('#standard').click(function() {
    });
    
    var herostat = function (){
    x = dice.d6.times(2)
    s = x[0] + x[1] + 6
    return s
    }

    var heroicstats = [];
        for (i=0; i<7; i++) {
        stats.push(herostat());
        }
    var heroicstats = heroicstats.sort(); 
    
    $('#heroic').click(function() {
    });
