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

$(document).ready(function() {
    $('#characterlevel').append('Level 1');
    $('#characterrace').append('Human');
    $('#characterclass').append('Cleric'); 
    var PCClass = $("#characterclass").text();
    var PCRace = $("#characterrace").text();
    var PCLevel = $("#characterlevel").text();
    var PCLevel = PCLevel.replace('Level ','');
    
    $('#stats').hide();

    $('#classic, #standard, #heroic, #dicepool, #pointbuy').click(function() {
        $('#stats').fadeIn('fast');
        $('#rolltype').hide();
    });
    
    
    
    var stats = [10, 12, 14, 14, 16, 20];
    
    /* Calculate STR */
    if (PCClass == 'Barbarian' || PCClass == 'Fighter' || PCClass == 'Monk') {str = stats[5]}
    else if (PCClass == 'Paladin' || PCClass == 'Druid' || PCClass == 'Ranger') {str = stats[4]}
    else if (PCClass == 'Bard' || PCClass == 'Cleric' || PCClass == 'Sorcerer') {str = stats[0]}
    
    /* Calculate DEX */
    if (PCClass == 'Rogue' || PCClass == 'Ranger') {dex = stats[5]}
    else if (PCClass == 'Bard' || PCClass == 'Wizard') {dex = stats[4]}
    else if (PCClass == 'Barbarian' || PCClass == 'Fighter') {dex = stats[3]}
    else if (PCClass == 'Druid' || PCClass == 'Monk' || PCClass == 'Paladin') {dex = stats[2]}
    else if (PCClass == 'Cleric') {dex = stats[1]}
    
    /* Calculate INT */
    if (PCClass == 'Wizard') {int = stats[5]}
    else if (PCClass == 'Rogue') {int = stats[4]}
    else if (PCClass == 'Bard') {int = stats[3]}
    else if (PCClass == 'Cleric') {int = stats[2]}
    else if (PCClass == 'Barbarian' || PCClass == 'Fighter' || PCClass == 'Monk' || PCClass == 'Paladin' || PCClass == 'Druid' || PCClass == 'Sorcerer') {int = stats[1]}
    
    /* Calculate WIS */
    if (PCClass == 'Druid' || PCClass == 'Cleric') {wis = stats[5]}
    else if (PCClass == 'Monk' || PCClass == 'Ranger') {wis = stats[3]}
    else if (PCClass == 'Barbarian' || PCClass == 'Fighter') {wis = stats[2]}
    else if (PCClass == 'Rogue' || PCClass == 'Barbarian' || PCClass == 'Fighter') {wis = stats[2]}
    else if (PCClass == 'Bard') {wis = stats[1]}
    else if (PCClass == 'Paladin') {wis = stats[0]}
    
    /* Calculate CON */
    if (PCClass == 'Fighter' || PCClass == 'Barbarian' || PCClass == 'Monk') {con = stats[4]}
    else if (PCClass == 'Rogue' || PCClass == 'Cleric' || PCClass == 'Druid' || PCClass == 'Paladin') {con = stats[4]}
    else if (PCClass == 'Bard' || PCClass == 'Ranger') {con = stats[3]}
    
    /* Calculate CHA*/
    if (PCClass == 'Bard' || PCClass == 'Sorcerer' || PCClass == 'Paladin') {cha = stats[5]}
    else if (PCClass == 'Cleric') {cha = stats[4]}
    else if (PCClass == PCClass == 'Rogue' || PCClass == 'Fighter' || PCClass == 'Monk' || 'Druid' || PCClass == 'Barbarian' || PCClass == 'Ranger') {cha = stats[0]}

/* This part isn't built yet     
    $('#dicepool').click(function(){});
    $('#pointbuy').click(function(){});
*/

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
    
    $('#str').append(str); 
    $('#dex').append(dex);
    $('#int').append(int);
    $('#con').append(con);
    $('#wis').append(wis);
    $('#cha').append(cha);
    
    var modstr = Math.floor((str - 10)/2);
    var moddex = Math.floor((dex - 10)/2);
    var modint = Math.floor((int - 10)/2);
    var modcon = Math.floor((con - 10)/2);
    var modwis = Math.floor((wis - 10)/2);
    var modcha = Math.floor((cha - 10)/2);
    
    
    $('#modstr').append(modstr); 
    $('#moddex').append(moddex);
    $('#modint').append(modint);
    $('#modcon').append(modcon);
    $('#modwis').append(modwis);
    $('#modcha').append(modcha);
    
    
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
