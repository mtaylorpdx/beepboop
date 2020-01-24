// business logic

var dave = function(number) {
  var result = [];
  for (var currentNumber = 0; currentNumber <= number; currentNumber +=1) {

    if (currentNumber.toString().includes("3")) {
      console.log(currentNumber)
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");

    } else if (currentNumber.toString().includes("2")) {
        console.log(currentNumber)
        result.push("Boop!");

    } else if (currentNumber.toString().includes("1")) {
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