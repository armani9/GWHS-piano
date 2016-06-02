$(document).ready(function(){
  
$ (".white").mousedown(function(){
  $(this).css("background-color","gold");
  var c = $(this).attr("id");
  piano (c);
});

  $ (".white").mouseup(function(){
  $(this).css("background-color","white");
});
  
  $ (".black").mousedown(function(){
  $(this).css("background-color","red");
    var csharp = $(this).attr("id");
  piano (csharp);
});


  $ (document).keyup(function(){
  $(".white").css("background-color","white");
});
  
  $ (document).keyup(function(){
  $(".black").css("background-color","black");
});

  $ (".black").mouseup(function(){
  $(this).css("background-color","black");
});
  





$(document).keypress(function(event){
  var letter = (String.fromCharCode(event.which)); 
if (letter==="a"){
  piano("c");
  $("#c").css("background-color","gold");
}
  if (letter==="s"){
  piano("d");
    $("#d").css("background-color","gold");
}
    if (letter==="d"){
  piano("e");
      $("#e").css("background-color","gold");
}
    if (letter==="f"){
  piano("f");
      $("#f").css("background-color","gold");
}
    if (letter==="g"){
  piano("g");
      $("#g").css("background-color","gold");
}
    if (letter==="h"){
  piano("a");
      $("#a").css("background-color","gold");
}
    if (letter==="j"){
  piano("b");
      $("#b").css("background-color","gold");
}
if (letter==="q"){
  piano("csharp");
  $("#csharp").css("background-color","red");
}
    if (letter==="w"){
  piano("d");
      $("#d").css("background-color","gold");
}
    if (letter==="e"){
  piano("dsharp");
      $("#dsharp").css("background-color","red");
}
    if (letter==="r"){
  piano("fsharp");
      $("#fsharp").css("background-color","red");
}
    if (letter==="t"){
  piano("g");
      $("#g").css("background-color","gold");
}
    if (letter==="y"){
  piano("gsharp");
      $("#gsharp").css("background-color","red");
}
    if (letter==="u"){
  piano("a");
  $("#a").css("background-color","gold");
}
    if (letter==="i"){
  piano("asharp");
      $("#asharp").css("background-color","red");
}
    if (letter==="o"){
  piano("b");
      $("#b").css("background-color","gold");
}
  });
    });







function piano(note){
var csharp = new Audio ("http://www.vibrationdata.com/piano_C_sharp.mp3");
  if (note === "csharp"){
  csharp.play();
}
var c = new Audio("http://www.vibrationdata.com/piano_middle_C.mp3");
    if (note === "c"){
    c.play();
  }
var d = new Audio ("http://www.vibrationdata.com/piano_D.mp3");
  if (note === "d"){
    d.play();
  }
var dsharp = new Audio ("http://www.vibrationdata.com/piano_D_sharp.mp3");
  if (note === "dsharp"){
    dsharp.play();
  }
var e = new Audio ("http://www.vibrationdata.com/piano_E.mp3");
if (note === "e"){
    e.play();
  }
var f = new Audio ("http://www.vibrationdata.com/piano_F.mp3");
if (note === "f"){
    f.play();
  }  
var fsharp = new Audio ("http://www.vibrationdata.com/piano_F_sharp.mp3");
if (note === "fsharp"){
    fsharp.play();
  }
var g = new Audio ("http://www.vibrationdata.com/piano_G.mp3");
if (note === "g"){
    g.play();
  }
var gsharp = new Audio ("http://www.vibrationdata.com/piano_G_sharp.mp3");
if (note === "gsharp"){
    gsharp.play();
  }
var a = new Audio ("http://www.vibrationdata.com/piano_A.mp3");
if (note === "a"){
    a.play();
  }
var asharp = new Audio ("http://www.vibrationdata.com/piano_A_sharp.mp3");
if (note === "asharp"){
    asharp.play();
  }
var b = new Audio ("http://www.vibrationdata.com/piano_B.mp3");
if (note === "b"){
    b.play();
  } 
}
