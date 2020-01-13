// Dom Elements
var todayDate = document.getElementById("#todayDate");
var memo1 = document.getElementById("#memo1");
var memo2 = document.getElementById("#memo2");
var memo3 = document.getElementById("#memo3");
var memo4 = document.getElementById("#memo4");
var memo5 = document.getElementById("#memo5");
var memo6 = document.getElementById("#memo6");
var memo7 = document.getElementById("#memo7");
var memo8 = document.getElementById("#memo8");
var memo9 = document.getElementById("#memo9");
var save1 = document.getElementById("#save1");
var save2 = document.getElementById("#save2");
var save3 = document.getElementById("#save3");
var save4 = document.getElementById("#save4");
var save5 = document.getElementById("#save5");
var save6 = document.getElementById("#save6");
var save7 = document.getElementById("#save7");
var save8 = document.getElementById("#save8");
var save9 = document.getElementById("#save9");
var clr = document.getElementById("#clr");

// Hours
var hour9 = document.getElementById("#hour9");
var hour10 = document.getElementById("#hour10");
var hour11 = document.getElementById("#hour11");
var hour12 = document.getElementById("#hour12");
var hour13 = document.getElementById("#hour13");
var hour14 = document.getElementById("#hour14");
var hour15 = document.getElementById("#hour15");
var hour16 = document.getElementById("#hour16");
var hour17 = document.getElementById("#hour17");

// Hour value in 24 hour
hour9 = "09";
hour10 = "10";
hour11 = "11";
hour12 = "12";
hour13 = "13";
hour14 = "14";
hour15 = "15";
hour16 = "16";
hour17 = "17";

// Current Hour
var momentH = moment().format("HH");
console.log(momentH);

// Today's Date and Updating with Seconds
function updateTime() {
  $("#todayDate").html(moment().format("MMMM Do YYYY, h:mm:ss A"));
}
updateTime();
setInterval(function() {
  updateTime();
}, 1000);

// Color changing with time
function updateColor() {
  if (hour9 << momentH) {
    $("#memo1").css("background-color", "#EEECF1");
  }
  if (hour9 == momentH) {
    $("#memo1").css("background-color", "#FFDDDD");
  }
  if (hour9 > momentH) {
    $("#memo1").css("background-color", "#D9FFDF");
  }

  if (hour10 << momentH) {
    $("#memo2").css("background-color", "#EEECF1");
  }
  if (hour10 == momentH) {
    $("#memo2").css("background-color", "#FFDDDD");
  }
  if (hour10 > momentH) {
    $("#memo2").css("background-color", "#D9FFDF");
  }

  if (hour11 << momentH) {
    $("#memo3").css("background-color", "#EEECF1");
  }
  if (hour11 == momentH) {
    $("#memo3").css("background-color", "#FFDDDD");
  }
  if (hour11 > momentH) {
    $("#memo3").css("background-color", "#D9FFDF");
  }

  if (hour12 << momentH) {
    $("#memo4").css("background-color", "#EEECF1");
  }
  if (hour12 == momentH) {
    $("#memo4").css("background-color", "#FFDDDD");
  }
  if (hour12 > momentH) {
    $("#memo4").css("background-color", "#D9FFDF");
  }

  if (hour13 << momentH) {
    $("#memo5").css("background-color", "#EEECF1");
  }
  if (hour13 == momentH) {
    $("#memo5").css("background-color", "#FFDDDD");
  }
  if (hour13 > momentH) {
    $("#memo5").css("background-color", "#D9FFDF");
  }

  if (hour14 << momentH) {
    $("#memo6").css("background-color", "#EEECF1");
  }
  if (hour14 == momentH) {
    $("#memo6").css("background-color", "#FFDDDD");
  }
  if (hour14 > momentH) {
    $("#memo6").css("background-color", "#D9FFDF");
  }

  if (hour15 << momentH) {
    $("#memo7").css("background-color", "#EEECF1");
  }
  if (hour15 == momentH) {
    $("#memo7").css("background-color", "#FFDDDD");
  }
  if (hour15 > momentH) {
    $("#memo7").css("background-color", "#D9FFDF");
  }

  if (hour16 << momentH) {
    $("#memo8").css("background-color", "#EEECF1");
  }
  if (hour16 == momentH) {
    $("#memo8").css("background-color", "#FFDDDD");
  }
  if (hour16 > momentH) {
    $("#memo8").css("background-color", "#D9FFDF");
  }

  if (hour17 << momentH) {
    $("#memo9").css("background-color", "#EEECF1");
  }
  if (hour17 == momentH) {
    $("#memo9").css("background-color", "#FFDDDD");
  } else if (hour17 > momentH) {
    $("#memo9").css("background-color", "#D9FFDF");
  }
}

updateColor();
setInterval(function() {
  updateColor();
}, 60000);

// Store to local storage when click save
$("#save1").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo1").value;
  localStorage.setItem("memo1", input);
});

// Save
$("#save2").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo2").value;
  localStorage.setItem("memo2", input);
});

$("#save3").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo3").value;
  localStorage.setItem("memo3", input);
});

$("#save4").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo4").value;
  localStorage.setItem("memo4", input);
});

$("#save5").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo5").value;
  localStorage.setItem("memo5", input);
});

$("#save6").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo6").value;
  localStorage.setItem("memo6", input);
});

$("#save7").click(function() {
  alert("The button was clicked.");
  var input = document.getElementById("memo7").value;
  localStorage.setItem("memo7", input);
});

$("#save8").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo8").value;
  localStorage.setItem("memo8", input);
});

$("#save9").click(function() {
  alert("Alright! I'll go ahead and save that to your memo!");
  var input = document.getElementById("memo9").value;
  localStorage.setItem("memo9", input);
});

// Click to reset local storage
$("#clr").click(function() {
  localStorage.clear();
  location.reload();
  alert("Schedule cleared! It's time to party!");
});

// Get Saved Memos When Page Loads
$(document).ready(function() {
  document.getElementById("memo1").value = localStorage.getItem("memo1");
  document.getElementById("memo2").value = localStorage.getItem("memo2");
  document.getElementById("memo3").value = localStorage.getItem("memo3");
  document.getElementById("memo4").value = localStorage.getItem("memo4");
  document.getElementById("memo5").value = localStorage.getItem("memo5");
  document.getElementById("memo6").value = localStorage.getItem("memo6");
  document.getElementById("memo7").value = localStorage.getItem("memo7");
  document.getElementById("memo8").value = localStorage.getItem("memo8");
  document.getElementById("memo9").value = localStorage.getItem("memo9");
});
