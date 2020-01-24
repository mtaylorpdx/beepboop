// business logic

var dave = function(number) {
  var result = [];
  for (var currentNumber = 0; currentNumber <= number; currentNumber +=1) {
    if (currentNumber.toString().includes("1")) {
      console.log(currentNumber)
      result.push("Beep!");
  } else {
    result.push(currentNumber + " ");
  }
  }
  return result;
};

//user interface logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#inputNumber").val());
    var result = dave(number);
    console.log(result);
    $("#output").append(result);
  });
});