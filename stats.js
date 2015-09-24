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

var stat = function (){
    var x = dice.d6.times(4)
    // Sort smallest to largest
    x = x.sort()
    // Use the three largest
    s = x[1] + x[2] + x[3]
    return s
    }

var herostat = function (){
    x = dice.d6.times(2)
    x = x.sort()
    s = x[0] + x[1] + 6
    return s
    }

    
/* Function for getting stat modifier */
function modifier(stat) {
    if (stat < 7) { mod = -6 }
    else if (stat == 7) { mod = -4 }
    else if (stat == 8) { mod = -2 }
    else if (stat == 9) { mod = -1 }
    else if (stat == 10 || stat == 11) { mod = 0 }
    else if (stat == 12 || stat == 13) { mod = 1 }
    else if (stat == 14 || stat == 15) { mod = 2 }
    else if (stat == 16 || stat == 17) { mod = 3 }
    else if (stat == 18 || stat == 19) { mod = 4 } 
    else { mod = 5 }
    return mod
    }

$(document).ready(function() {
  /* Set selections to variables to call later */
    var PCClass = $("#characterclass").text();
    var PCRace = $("#characterrace").text();
    var PCLevel = $("#characterlevel").text();
    
    /* Roll Stats */
    $('#charnext').click(function() {
        $('#again').hide();
        $('#rolltype').fadeIn('fast');
        /* Function for rolling stats */
    });
        
    $('#standard').click(function(){
        var stats = [10, 10, 12, 14, 16, 18]
        
        var str = stats[5];
        $('#str').text(str);
        
        var dex = stats[4];
        $('#dex').text(dex);
        
        var int = stats[3];
        $('#int').text(int);
        
        var con = stats[2]
        $('#con').text(con);
        
        var wis = stats[1];
        $('#wis').text(wis);
        
        var cha = stats[0]
        $('#cha').text(cha);

        $('#rolltype').hide();
        $('#stats').fadeIn('fast');
    });
    
    $('#heroic').click(function(){
        var herostats = [10, 12, 14, 16, 16, 18]
        $('#str').text(herostat);
        $('#strmod').text(hstrmod)
        $('#dex').text(herostat);
        $('#dexmod').text(modifier(12))
        $('#int').text(herostat);
        $('#inmod').text(modifier(12))
        $('#con').text(herostat);
        $('#conmod').text(modifier(12))
        $('#wis').text(herostat);
        $('#cha').text(herostat);

        $('#rolltype').hide();
        $('#stats').fadeIn('fast');
    });
    
    
    /*Testing my variables*/
    $('#t1').text(PCLevel);
    $('#t2').text(PCRace);
    $('#t3').text(PCClass);

});
