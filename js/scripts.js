$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var divide = $("input#number").val();
    var result = parseInt(divide);
    $("#result").text(result);
    event.preventDefault();
  });
});
var divide = function(number){
  alert(number);
};
