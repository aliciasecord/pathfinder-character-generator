/* Array for random race selection */
var Race = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human']
var Race = Race[Math.floor(Math.random() * Race.length)]

/* Array for random race selection */
var Class = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']
var Class = Class[Math.floor(Math.random() * Class.length)]

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
        var PClevel = $("#selectlevel option:selected").text();
        $('#characterlevel').append('Level ' + PClevel); 
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
        var PClevel = Math.floor(Math.random() * 20) + 1
        $('#characterlevel').show();
        $('#characterlevel').append('Level ' + PClevel);
        
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
    
        /* Roll Stats */
    $('#charnext').click(function() {
        $('#again').hide();
        $('#rolltype').fadeIn('fast');
    });
    
    $('#classic, #standard, #heroic').click(function() {
        $('#stats').fadeIn('fast');
        $('#rolltype').hide();
    });
    
    $('#classic').click(function() { 
    });
    
    $('#standard').click(function() {
    });
    
    
    $('#heroic').click(function() {
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
