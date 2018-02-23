$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#number").val());
    var result = pingpong(number);
    $("#result").text(result);
  });
});
