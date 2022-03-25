$(document).ready(function () {
  $("form#political-meter").submit(function (event) {
    event.preventDefault();
    console.log("Thank You!");

    const age = parseInt($("input#age").val());
    const computerPart = $("input#computer-part").val();
    const activity = $("input#activity").val();
    const favoriteFood = $("input#fav-food").val();
    const favoriteMusic = $("input#age").val();
  });
});
