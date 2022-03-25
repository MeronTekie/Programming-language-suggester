$(document).ready(function () {
  $("form#suggester").submit(function (event) {
    event.preventDefault();

    const age = parseInt($("input#age").val());
    const computerPart = parseInt($("#computer").val());
    const activity = parseInt($("select#activity").val());
    const favoriteFood = parseInt($("select#fav-food").val());
    const favoriteMusic = parseInt($("select#age").val());

    if (age <= "25" && activity <= "2" && computerPart == "2") {
      $("#output").text("We highly recommend you to study JavaScript!");
    } else if (
      age >= "26" &&
      age < "40" &&
      activity == "3" &&
      computerPart == "3"
    ) {
      $("#output").text("Jave suits perfectly for you!");
    } else if (age >= "40" && activity >= "1" && computerPart >= "1") {
      $("#output").text("Python may be  the most suitable language for you!");
    } else {
      $("#output").text(
        "You better get enrolled in to any langauge before its too late"
      );
    }
  });
});
