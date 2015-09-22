var Race = ['Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling', 'Human']
var Race = Race[Math.floor(Math.random() * Race.length)];

var Class = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard']
var Class = Class[Math.floor(Math.random() * Class.length)];

$(document).ready(function() {
    /* At the start, the .character div should be hidden */
    $('.character').hide();
    $('.guided').hide();
    $('.hide').hide();
    
    
    /*If they click "Guided Selection" show .character and .level div */
    $('#guide').click(function() {
        $('#race').hide();
        $('#class').hide();
        $('.character').fadeIn('fast');
        $('.guided').fadeIn('fast');
    });
    
    /* Whichever option they pick, get rid of the choose your path option */
    $('#random').click(function() {
        $('#choose').fadeOut('fast');
    });
    
    $('#guide').click(function() {
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
    
    /*NEED TO FIX THIS ONE TO BE RANDOM*/
    $('#ChooseRace').click(function() {
        $('.Half-Orc').fadeIn('fast');
        var PCrace = 'Half-Orc';
        $('#race').fadeOut('fast');
        $('#class').fadeIn('fast');
    });
    
    $('#SelectRace').click(function() {
        $('#race').fadeOut('fast');
        $('#class').fadeIn('fast');
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
    
    /*NEED TO FIX THIS ONE TO BE RANDOM*/
    $('#ChooseClass').click(function() {
        $('.Sorcerer').fadeIn('fast');
        var PCclass = 'Sorcerer';
        $('#class').fadeOut('fast');
    });
    
    $('#SelectClass').click(function() {
        $('#class').fadeOut('fast');
    });
    
    $('#ResetClass').click(function() {
        $('.chosenclass').fadeOut('fast');
        $('#ConfirmClass').fadeOut('fast');
        $('#class ul').fadeIn('fast');
        $('#class img').fadeIn('fast');
        $('#class h3').fadeIn('fast');
    });
    
});
