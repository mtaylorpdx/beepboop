// Business Logic

var dave = function(number) {
  var result = [];
  for (var i = 0; i <= number; i +=1) {
    if (stringCheck(i, "3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (stringCheck(i, "2")) {
        result.push("Boop! ");
    } else if (stringCheck(i, "1")) {
        result.push("Beep! ");
    } else {
      result.push(i + " ");
    }
  }
  return result;
};


function stringCheck(number, obj) {
  var strNumber = number.toString();
  for (var i = 0; i< strNumber.length; i++) {
      if (strNumber[i] === obj) {
        return true;
      }
 } 
 return false;
}

//User Interface Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#inputNumber").val());
    $("#output").append(dave(number));
    $("#reset").click(function() {
      document.location.reload(true);
    });
  });
});