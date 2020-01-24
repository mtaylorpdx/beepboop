// business logic

var dave = function(number) {

}



//user interface logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    v
    var number = parseInt($("#input").val());
    var result = dave(number);

    console.log(result)
    $("#output").text(result);
  })
})