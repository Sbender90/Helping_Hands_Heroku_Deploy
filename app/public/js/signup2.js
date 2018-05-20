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
  //Future iterations will check to ensure all fields filled out properly.
  //currently bootstrap.js includes some validation to prevent submission of missing email.

  document.getElementById("vol-signup-form").reset();
  document.getElementById("org-signup-form").reset();

  //makes call to check if user already registered and if not register them into the system.
  $.post("/api/signup", newUser, function(data) {
    //the server will return nothing if the user has already signed up.

    if (data) {
      if ((newUser.hh_role = "organization")) {
        window.location.href = "/organization";
      } else {
        window.location.href = "/volunteer";
      }
    }
  });
});
