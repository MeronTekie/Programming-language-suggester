$(document).ready(function () {
  $("form#suggester").submit(function (event) {
    event.preventDefault();
    console.log("Thank You!");

    const age = parseInt($("input#age").val());
    const computerPart = parseInt($("#computer").val());
    const activity = parseInt($("select#activity").val());
    const favoriteFood = parseInt($("select#fav-food").val());
    const favoriteMusic = parseInt($("select#age").val());
    console.log(age);
    console.log(computerPart);
    if (age >= "21" && age <= "45" && computerPart == "2") {
      $("#output").text("We highly recommend you to study JavaScript!");
    }
  });
});
