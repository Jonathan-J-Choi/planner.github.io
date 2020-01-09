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


// Today's Date and Updating with Seconds
function updateTime(){
$( "#todayDate" ).html(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
                                                     
updateTime();
setInterval(function(){
 updateTime();
},1000);


// Store to local storage when click save
$("#save1").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo1').value;
  localStorage.setItem('memo1', input);
});

// Save
$("#save2").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo2').value;
  localStorage.setItem('memo2', input);
});

$("#save3").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo3').value;
  localStorage.setItem('memo3', input);
});

$("#save4").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo4').value;
  localStorage.setItem('memo4', input);
});

$("#save5").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo5').value;
  localStorage.setItem('memo5', input);
});

$("#save6").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo6').value;
  localStorage.setItem('memo6', input);
});

$("#save7").click(function(){
  alert("The button was clicked.");
  var input = document.getElementById('memo7').value;
  localStorage.setItem('memo7', input);
});

$("#save8").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo8').value;
  localStorage.setItem('memo8', input);
});

$("#save9").click(function(){
  alert("Your changes have been saved!");
  var input = document.getElementById('memo9').value;
  localStorage.setItem('memo9', input);
});

// Get Saved Memos When Page Loads
$(document).ready( function() {
  document.getElementById('memo1').value = localStorage.getItem('memo1');
  document.getElementById('memo2').value = localStorage.getItem('memo2');
  document.getElementById('memo3').value = localStorage.getItem('memo3');
  document.getElementById('memo4').value = localStorage.getItem('memo4');
  document.getElementById('memo5').value = localStorage.getItem('memo5');
  document.getElementById('memo6').value = localStorage.getItem('memo6');
  document.getElementById('memo7').value = localStorage.getItem('memo7');
  document.getElementById('memo8').value = localStorage.getItem('memo8');
  document.getElementById('memo9').value = localStorage.getItem('memo9');
});

