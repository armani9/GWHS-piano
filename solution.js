var mode = "piano"
$(document).ready(function() {

  $("#guitar").click(function() {
    $("#guitar").css("background", "blue");
    $("#piano").css("background","gray");
    mode = "guitar";
  });
  $("#piano").click(function() {
    $("#piano").css("background", "purple");
    $("#guitar").css("background","gray");
    mode = "piano";
  });




  $(".white").mousedown(function() {
    $(this).css("background-color", "gold");
    var c = $(this).attr("id");
    if (mode === "piano") {
      piano(c);
    }
    else if (mode === "guitar") {
      guitar(c);
    }

  });

  $(".white").mouseup(function() {
    $(this).css("background-color", "white");
  });

  $(".black").mousedown(function() {
    $(this).css("background-color", "red");
    var csharp = $(this).attr("id");
    piano(csharp);
    if (mode === "piano") {
      piano(c);
    }
    else if (mode === "guitar") {
      guitar(c);
    }

  });


  $(document).keyup(function() {
    $(".white").css("background-color", "white");
  });

  $(document).keyup(function() {
    $(".black").css("background-color", "black");
  });

  $(".black").mouseup(function() {
    $(this).css("background-color", "black");
  });






  $(document).keypress(function(event) {
    var letter = (String.fromCharCode(event.which));
    if (letter === "a") {
      if (mode === "piano") {
        piano("c");
      }
      else if (mode === "guitar") {
        guitar("c");
      }

      $("#c").css("background-color", "gold");



    }
    if (letter === "s") {
      if (mode === "piano") {
        piano("d");
      }
      else if (mode === "guitar") {
        guitar("d");
      }
      $("#d").css("background-color", "gold");
    }
    if (letter === "d") {
      if (mode === "piano") {
        piano("e");
      }
      else if (mode === "guitar") {
        guitar("e");
      }
      $("#e").css("background-color", "gold");
    }
    if (letter === "f") {
      if (mode === "piano") {
        piano("f");
      }
      else if (mode === "guitar") {
        guitar("f");
      }
      $("#f").css("background-color", "gold");
    }
    if (letter === "g") {
      piano("g");
      $("#g").css("background-color", "gold");
    }
    if (letter === "h") {
      if (mode === "piano") {
        piano("a");
      }
      else if (mode === "guitar") {
        guitar("a");
      }
      $("#a").css("background-color", "gold");
    }
    if (letter === "j") {
      if (mode === "piano") {
        piano("b");
      }
      else if (mode === "guitar") {
        guitar("b");
      }
      $("#b").css("background-color", "gold");
    }
    if (letter === "q") {
      if (mode === "piano") {
        piano("csharp");
      }
      else if (mode === "guitar") {
        guitar("csharp");
      }
      $("#csharp").css("background-color", "red");
    }
    if (letter === "w") {
      if (mode === "piano") {
        piano("Db");
      }
      else if (mode === "guitar") {
        guitar("Db");
      }
      $("#d").css("background-color", "gold");
    }
    if (letter === "e") {
      if (mode === "piano") {
        piano("dsharp");
      }
      else if (mode === "guitar") {
        guitar("dsharp");
      }
      $("#dsharp").css("background-color", "red");
    }
   
    if (letter === "t") {
      if (mode === "piano") {
        piano("fsharp");
      }
      else if (mode === "guitar") {
        guitar("fsharp");
      }
      $("#fsharp").css("background-color", "red");
    }
    
    if (letter === "u") {
      if (mode === "piano") {
        piano("gsharp");
      }
      else if (mode === "guitar") {
        guitar("gsharp");
      }
      $("#gsharp").css("background-color", "red");
    }
 
    if (letter === "o") {
      if (mode === "piano") {
        piano("asharp");
      }
      else if (mode === "guitar") {
        guitar("asharp");
      }
      $("#asharp").css("background-color", "red");
    }
  });
});







function piano(note) {
  var csharp = new Audio("http://www.vibrationdata.com/piano_C_sharp.mp3");
  if (note === "csharp") {
    csharp.play();
  }
  var c = new Audio("http://www.vibrationdata.com/piano_middle_C.mp3");
  if (note === "c") {
    c.play();
  }
  var d = new Audio("http://www.vibrationdata.com/piano_D.mp3");
  if (note === "d") {
    d.play();
  }
  var dsharp = new Audio("http://www.vibrationdata.com/piano_D_sharp.mp3");
  if (note === "dsharp") {
    dsharp.play();
  }
  var e = new Audio("http://www.vibrationdata.com/piano_E.mp3");
  if (note === "e") {
    e.play();
  }
  var f = new Audio("http://www.vibrationdata.com/piano_F.mp3");
  if (note === "f") {
    f.play();
  }
  var fsharp = new Audio("http://www.vibrationdata.com/piano_F_sharp.mp3");
  if (note === "fsharp") {
    fsharp.play();
  }
  var g = new Audio("http://www.vibrationdata.com/piano_G.mp3");
  if (note === "g") {
    g.play();
  }
  var gsharp = new Audio("http://www.vibrationdata.com/piano_G_sharp.mp3");
  if (note === "gsharp") {
    gsharp.play();
  }
  var a = new Audio("http://www.vibrationdata.com/piano_A.mp3");
  if (note === "a") {
    a.play();
  }
  var asharp = new Audio("http://www.vibrationdata.com/piano_A_sharp.mp3");
  if (note === "asharp") {
    asharp.play();
  }
  var b = new Audio("http://www.vibrationdata.com/piano_B.mp3");
  if (note === "b") {
    b.play();
  }
}


function guitar(chords) {
  var a = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/a-guitar.wav");
  if (chords === "a") {
    a.play();
  }
  var asharp = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/a-sharp-guitar.wav");
  if (chords === "asharp") {
    asharp.play();
  }
  var b = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/b-guitar.wav");
  if (chords === "b") {
    b.play();
  }
  var c = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/c-guitar.wav");
  if (chords === "c") {
    c.play();
  }
  var csharp = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/c-sharp-guitar.wav");
  if (chords === "csharp") {
    csharp.play();
  }
  var d = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/d-guitar.wav");
  if (chords === "d") {
    d.play();
  }
  var dsharp = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/d-sharp-guitar.wav");
  if (chords === "dsharp") {
    dsharp.play();
  }
  var e = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/e-guitar.wav");
  if (chords === "e") {
    e.play();
  }
  var f = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/f-guitar.wav");
  if (chords === "f") {
    f.play();
  }
  var fsharp = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/f-sharp-guitar.wav");
  if (chords === "fsharp") {
    fsharp.play();
  }
  var g = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/g-guitar.wav");
  if (chords === "g") {
    g.play();
  }
  var gsharp = new Audio("https://dl.dropboxusercontent.com/u/88121919/audio/g-sharp-guitar.wav");
  if (chords === "gsharp") {
    gsharp.play();
  }
}
