// business logic

var dave = function(number) {
  result = [];
  for (var currentNumber = 1; currentNumber <= number; currentNumber +=1) {
    result.push(currentNumber + " ");

  }
  return result;
  console.log(result);
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




// // business logic

// var dave = function(array) {

//   for (var currentNumber = 1; currentNumber <= array[0]; currentNumber +=1) {
//     return currentNumber
//   }


//   console.log(array);
// }



// //user interface logic

// $(document).ready(function() {
//   $("form#input").submit(function(event) {
//     event.preventDefault();

//     var number = $("input#inputNumber").val();
//     var array = number.split(" ");
//     var result = dave(array);
//     $("#output").text(result);
//   });
// });
