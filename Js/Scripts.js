$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var result = pingPong(number);
    $("#result").text(result);
    var pingPong = function(number) {
      if (input % 3 === 0) && (input % 5 !== 0)) || (input % 15 === 0 )) {
        return true;
      } else {
        return false;
      }
    };
  });
});

STOPPING POINT: https://www.learnhowtoprogram.com/intro-to-programming-evening/arrays-looping-8a0d105a-0895-42ec-b85c-d45f7f2eba79/leap-year-part-2 
