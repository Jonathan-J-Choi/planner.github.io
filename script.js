// One Way
// // Dom Elements
// var todayDate = document.getElementById("todayDate");
// var hour = document.getElementById("hour");
// var memo = document.getElementById("memo");
// var save = document.getElementById("save");

// // Wait for page to load then:
// $(document).ready(function(){
//   $( "#todayDate" ).append( "<p>Test</p>" );
//   $( "#hour" ).append( "<p>Hour</p>" );
//   $( "#memo" ).append( "<p>Insert Text here</p>" );
//   $( "#save" ).append( "<p>Save</p>" );
// });


// Or Another

// Dom Elements
var todayDate = document.getElementById("todayDate");
var fullCell = document.getElementById("fullCell")
var hour = document.getElementById("hour");
var memo = document.getElementById("memo");
var save = document.getElementById("save");

// Today's Date
$( "#todayDate" ).append( "<p>Test</p>" );

// Create more fullCell

// times
var timeBlock = [
  "9 A.M",
  "10 A.M",
  "11 A.M",
  "12 P.M",
  "1 P.M",
  "2 P.M",
  "3 P.M",
  "4 P.M",
  "5 P.M",
]
console.log(timeBlock)
