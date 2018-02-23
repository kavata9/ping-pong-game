$(document).ready(function() {
    $("#enter form").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("#value").val());
     console.log(number);
      var result = (number);
      $("#result").text(result);
    });
  });
  var number = function(value) {
    if (number % 3 === 0) {
      return ping;
    } else {
      return false;
    }
  };
