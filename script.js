/* Array for random race selection */
var Race = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human']

/* Array for random race selection */
var Class = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']

$(document).ready(function() {
    /* At the start, the .character div should be hidden */
    $('.hide, #character, #stats, #guided, #again, #rolltype').hide();
    
    /*If they click "Guided Selection" show .character and .level div */
    $('#guide, #chooseagain').click(function() {
        $('#character, #race, #class').hide();
        $('#guided').fadeIn('fast');
        $('#choose, #again').fadeOut('fast');
    });
    
    /*Guided Path*/
    
    /* But if it's the second time through with the Try again buttons need to clear the character fields first  */
    $('#tryagain, #chooseagain').click(function () {
        $('#characterlevel, #characterrace, #characterclass').empty();
    });
    
    /*Select level and append to Character*/
    $('#level span').click(function() {
        var LevelSelection = $("#selectlevel option:selected").text();
        $('#characterlevel').append('Level ' + LevelSelection); 
        $('#level').fadeOut('fast');
        $('#race').fadeIn('fast');
        $('#ConfirmRace').hide();
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
        var PCrace = Race[Math.floor(Math.random() * Race.length)];
        if(PCrace == 'Dwarf') {
    	    $('span.Dwarf').fadeIn('fast');
    	    }
        else if (PCrace == 'Elf') {
	        $('span.Elf').fadeIn('fast');
            }
        else if (PCrace == 'Gnome') {
	        $('span.Gnome').fadeIn('fast');
            }
        else if (PCrace == 'Halfling') {
	        $('span.Halfling').fadeIn('fast');
            }
        else if (PCrace == 'Half-Elf') {
	        $('span.Half-Elf').fadeIn('fast');
            }
        else if (PCrace == 'Half-Orc') {
	        $('span.Half-Orc').fadeIn('fast'); 
            }
        else {
	        $('span.Human').fadeIn('fast');
            }
        $('#characterrace').append(PCrace);
        $('#race').fadeOut('fast');
        $('#class').fadeIn('fast');
    });
    
    $('.racepick').click(function() {
        $('#race ul').fadeOut('fast');
        $('#race img').fadeOut('fast');
        $('#race h3').fadeOut('fast');
        $('#ConfirmRace').fadeIn('fast');
    });
    
    $('#SelectRace').click(function() {
        $('#race').fadeOut('fast');
        $('#class').fadeIn('fast');
        $('#ConfirmClass').hide();
    });
    
    $('#ResetRace').click(function() {
        $('.chosenrace, #ConfirmRace').fadeOut('fast');
        $('#ConfirmRace').fadeOut('fast');
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
        var PCclass = Class
        if(PCclass == 'Barbarian') {
    	    $('span.Barbarian').fadeIn('fast');
    	    }
        else if (PCclass == 'Bard') {
	        $('span.Bard').fadeIn('fast');
            }
        else if (PCclass == 'Cleric') {
	        $('span.Cleric').fadeIn('fast');
            }
        else if (PCclass == 'Druid') {
	        $('span.Druid').fadeIn('fast');
            }
        else if (PCclass == 'Fighter') {
	        $('span.Fighter').fadeIn('fast');
            }
        else if (PCclass == 'Monk') {
	        $('span.Monk').fadeIn('fast');
            }
        else if (PCclass == 'Paladin') {
	        $('span.Paladin').fadeIn('fast');
            }
        else if (PCclass == 'Ranger') {
	        $('span.Ranger').fadeIn('fast');
            }
        else if (PCclass == 'Rogue') {
	        $('span.Rogue').fadeIn('fast');
            }
        else if (PCclass == 'Wizard') {
	        $('span.Wizard').fadeIn('fast');
            }
        else {
	        $('span.Sorcerer').fadeIn('fast');
            }
        $('#characterclass').append(PCclass);
        $('#class').fadeOut('fast');
        $('.character').fadeIn('fast');
    });
    
    $('.classpick').click(function() {
        $('#class ul, #class img, #class h3').fadeOut('fast');
        $('#ConfirmClass').fadeIn('fast');
    });
    
    $('#SelectClass').click(function() {
        $('#class').fadeOut('fast');
        $('.character').fadeIn('fast');
        $('#again').fadeIn('fast');
    });
    
    $('#ResetClass').click(function() {
        $('.chosenclass, #ConfirmClass').fadeOut('fast');
        $('#class ul, #class img, #class h3').fadeIn('fast');
        $('#characterclass').empty();
    });
    
    /* Random Path */
    
    /* If they choose the Random option, we have to chose level, race and class */
    
    $('#random, #tryagain').click(function() {
        
        /*Choose level*/
        var Level = Math.floor(Math.random() * 20) + 1
        $('#characterlevel').show();
        $('#characterlevel').append('Level ' + Level);
        
        /*Chosse race*/
        var PCrace = Race[Math.floor(Math.random() * Race.length)];
        if(PCrace == 'Dwarf') {
    	    $('span.Dwarf').fadeIn('fast');
    	    }
        else if (PCrace == 'Elf') {
	        $('span.Elf').fadeIn('fast');
            }
        else if (PCrace == 'Gnome') {
	        $('span.Gnome').fadeIn('fast');
            }
        else if (PCrace == 'Halfling') {
	        $('span.Halfling').fadeIn('fast');
            }
        else if (PCrace == 'Half-Elf') {
	        $('span.Half-Elf').fadeIn('fast');
            }
        else if (PCrace == 'Half-Orc') {
	        $('span.Half-Orc').fadeIn('fast');
            }
        else {
	        $('span.Human').fadeIn('fast');
            }
        $('#characterrace').append(PCrace);
        
        /*Choose Class*/
        var PCclass = Class[Math.floor(Math.random() * Class.length)];
        if(PCclass == 'Barbarian') {
    	    $('span.Barbarian').fadeIn('fast');
    	    }
        else if (PCclass == 'Bard') {
	        $('span.Bard').fadeIn('fast');
            }
        else if (PCclass == 'Cleric') {
	        $('span.Cleric').fadeIn('fast');
            }
        else if (PCclass == 'Druid') {
	        $('span.Druid').fadeIn('fast');
            }
        else if (PCclass == 'Fighter') {
	        $('span.Fighter').fadeIn('fast');
            }
        else if (PCclass == 'Monk') {
	        $('span.Monk').fadeIn('fast');
            }
        else if (PCclass == 'Paladin') {
	        $('span.Paladin').fadeIn('fast');
            }
        else if (PCclass == 'Ranger') {
	        $('span.Ranger').fadeIn('fast');
            }
        else if (PCclass == 'Rogue') {
	        $('span.Rogue').fadeIn('fast');
            }
        else if (PCclass == 'Wizard') {
	        $('span.Wizard').fadeIn('fast');
            }
        else {
	        $('span.Sorcerer').fadeIn('fast');
            }
        $('#characterclass').append(PCclass);
        /* Then hide the choices and show the character description */
        $('#choose').fadeOut('fast');
        $('#character').fadeIn('fast');
        
        /* Also show options to start over or move on */
        $('#again').fadeIn('fast');
    });
    
    /* Roll Stats */
    $('#charnext').click(function() {
        $('#tryagain, #chooseagain').fadeOut('fast');
        $('##rolltype').fadeIn('fast');
    });
    
    /* Function for rolling stats */
    var stats = [10, 11, 12, 13, 14, 15]
    $('#standard').click(function() {});
    $('#heroic').click(function() {});
    
    /* Either way, show stats */
    $('#standard, #heroic').click(function() {
        $('#stats').fadeIn('fast');
    });
});
