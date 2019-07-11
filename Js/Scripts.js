  var pingPong = function(number) {

  var zeroArray = [];

  for ( i=1; i<=number; i++) {
    console.log(number);
    if (i % 15 === 0) {
      zeroArray.push("PingPong");
    }
    else if  (i % 5 === 0) {
      zeroArray.push("pong");
    }
    else if (i % 3 === 0) {
      zeroArray.push("ping");
    }
    else {
     zeroArray.push(i);
    }
  }
  return zeroArray;
}

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $("#result").empty();
    event.preventDefault();
    var userNumber = parseInt($("input#number").val());
    var result = pingPong(userNumber);
    console.log(result);

    result.forEach(function(parameter){

      $("#result").append("<li>" + parameter + "</li>");
    });

  });
  $("#result").show();
});
