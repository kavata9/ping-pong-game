$(document).ready(function(){
  //gather user input
  //var input=parseInt(prompt("Enter the number"));
  //create a function
  $("#form").submit(function(){
    var input=$("#submit").val();
    ping(input);

    event.preventDefault();
  });
});
