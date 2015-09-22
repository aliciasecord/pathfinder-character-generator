var Race = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human']
var Race = Race[Math.floor(Math.random() * Race.length)];

var Class = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']
var Class = Class[Math.floor(Math.random() * Class.length)];

var Level = Math.floor(Math.random() * 20) + 1

$(document).ready(function() {
    /* At the start, the .character div should be hidden */
    $('.character').hide();
    $('.guided').hide();
    $('.hide').hide();
    
    
    /*If they click "Guided Selection" show .character and .level div */
    $('#guide').click(function() {
        $('#race').hide();
        $('#class').hide();
        $('.guided').fadeIn('fast');
        $('#choose').fadeOut('fast');
    });
    
    /*Guided Path*/
    
    /*Select level and append to Character*/
    $('#level span').click(function() {
        $('#characterlevel').show();
        var LevelSelection = $("#selectlevel option:selected").text();
        $('#characterlevel').append(LevelSelection); 
        $('#level').fadeOut('fast');
        $('#race').fadeIn('fast');
        $('#ConfirmRace').hide();
    });
    
    /*Select Race*/
    $('.racepick').click(function() {
        $('#race ul').fadeOut('fast');
        $('#race img').fadeOut('fast');
        $('#race h3').fadeOut('fast');
        $('#ConfirmRace').fadeIn('fast');
    });
    
    $('#Dwarf').click(function() {
        $('.Dwarf').fadeIn('fast');
        var PCrace = 'Dwarf';
    });
    
    $('#Gnome').click(function() {
        $('.Gnome').fadeIn('fast');
        var PCrace = 'Gnome';
    });
    
    $('#Elf').click(function() {
        $('.Elf').fadeIn('fast');
        var PCrace = 'Elf';
    });
    
    $('#Halfling').click(function() {
        $('.Halfling').fadeIn('fast');
        var PCrace = 'Halfling';
    });
    
    $('#Human').click(function() {
        $('.Human').fadeIn('fast');
        var PCrace = 'Human';
    });
    
    $('#Half-Elf').click(function() {
        $('.Half-Elf').fadeIn('fast');
        var PCrace = 'Half-Elf';
    });
    
    $('#Half-Orc').click(function() {
        $('.Half-Orc').fadeIn('fast');
        var PCrace = 'Half-Orc';
    });
    
    $('#ChooseRace').click(function() {
        var PCrace = Race
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
        $('#race').fadeOut('fast');
        $('#class').fadeIn('fast');
    });
    
    $('#SelectRace').click(function() {
        $('#race').fadeOut('fast');
        $('#class').fadeIn('fast');
        $('#ConfirmClass').hide();
    });
    
    $('#ResetRace').click(function() {
        $('.chosenrace').fadeOut('fast');
        $('#ConfirmRace').fadeOut('fast');
        $('#race ul').fadeIn('fast');
        $('#race img').fadeIn('fast');
        $('#race h3').fadeIn('fast');
    });
    
   /*Select class*/
    $('.classpick').click(function() {
        $('#class ul').fadeOut('fast');
        $('#class img').fadeOut('fast');
        $('#class h3').fadeOut('fast');
        $('#ConfirmClass').fadeIn('fast');
    });
    
    $('#Barbarian').click(function() {
        $('.Barbarian').fadeIn('fast');
        var PCclass = 'Barbarian';
    });
    
    $('#Bard').click(function() {
        $('.Bard').fadeIn('fast');
        var PCclass = 'Bard';
    });
    
    $('#Cleric').click(function() {
        $('.Cleric').fadeIn('fast');
        var PCclass = 'Cleric';
    });
    
    $('#Druid').click(function() {
        $('.Druid').fadeIn('fast');
        var PCclass = 'Druid';
    });
    
    $('#Fighter').click(function() {
        $('.Fighter').fadeIn('fast');
        var PCclass = 'Fighter';
    });
    
    $('#Monk').click(function() {
        $('.Monk').fadeIn('fast');
        var PCclass = 'Monk';
    });
    
    $('#Paladin').click(function() {
        $('.Paladin').fadeIn('fast');
        var PCclass = 'Paladin';
    });
    
    $('#Ranger').click(function() {
        $('.Ranger').fadeIn('fast');
        var PCclass = 'Ranger';
    });
    
    $('#Rogue').click(function() {
        $('.Rogue').fadeIn('fast');
        var PCclass = 'Rogue';
    });
    
    $('#Wizard').click(function() {
        $('.Wizard').fadeIn('fast');
        var PCclass = 'Wizard';
    });
    
    $('#Sorcerer').click(function() {
        $('.Sorcerer').fadeIn('fast');
        var PCclass = 'Sorcerer';
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
        $('#class').fadeOut('fast');
        $('.character').fadeIn('fast');
    });
    
    $('#SelectClass').click(function() {
        $('#class').fadeOut('fast');
        $('.character').fadeIn('fast');
    });
    
    $('#ResetClass').click(function() {
        $('.chosenclass').fadeOut('fast');
        $('#ConfirmClass').fadeOut('fast');
        $('#class ul').fadeIn('fast');
        $('#class img').fadeIn('fast');
        $('#class h3').fadeIn('fast');
    });
    
    /* Random Path */
    
    /* If they choose the Random option, we have to chose level, race and class */
    $('#random').click(function() {
        /*Chosse level*/
        var LevelSelection = Level;
        $('#characterlevel').show();
        $('#characterlevel').append(LevelSelection);
        
        /*Chosse race*/
        var PCrace = Race
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
        /*Choose Class*/
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
        /* Then hide the choices and show the character description */
        $('#choose').fadeOut('fast');
        $('.character').fadeIn('fast');
    });
    
});
