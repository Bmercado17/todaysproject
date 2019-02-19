
$(document).ready(function() {
  debugger;
  var Animals = parseInt(prompt("What animals do you prefer 1 to 5, 5 being big animals?"));

  if (Animals > 5) {
    $('#Animals').show();
  } else if (Animals === 5) {
    alert("We enjoy small animals as well");
    $('#Animals').show();
  } else {
    $('#small-animals').show();
 }
});
