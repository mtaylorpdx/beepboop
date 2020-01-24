// business logic

var dave = function(array) {

  console.log(array);
}



//user interface logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var number = $("input#inputNumber").val();
    var array = number.split("");
    var result = dave(array);
    $("#output").text(result);
  });
});
