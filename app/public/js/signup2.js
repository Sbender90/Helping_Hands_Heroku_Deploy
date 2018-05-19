//the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$(".role-btn").on("click", function(event) {
  event.preventDefault();
  var newUser = {};

  console.log(newUser);

  if ($(this).val() === "volunteer") {
    console.log("volunteer"),
      (newUser.first_name = $("#firstName")
        .val()
        .trim());
    newUser.last_name = $("#lastName")
      .val()
      .trim();
    newUser.phone_num = $("#phoneNum")
      .val()
      .trim();
    newUser.email = $("#volEmail")
      .val()
      .trim();
    newUser.password = $("#vol-password")
      .val()
      .trim();
    newUser.hh_role = "volunteer";

    console.log(newUser);
  } else if ($(this).val() === "organization") {
    console.log("organization");

    newUser.organizer = $("#orgName")
      .val()
      .trim();
    newUser.email = $("#orgEmail")
      .val()
      .trim();
    newUser.phone_num = $("#phoneNum1")
      .val()
      .trim();
    newUser.password = $("#org-password")
      .val()
      .trim();
    newUser.hh_role = "organization";

    console.log(newUser);
  }

  document.getElementById("vol-signup-form").reset();
  document.getElementById("org-signup-form").reset();

  $.post("/api/signup", newUser, function(data) {
    if (data) {
      window.location.href = "/login";
    }
  });
});
