$(document).ready(function() {
  // The app stores a user's infromation returned from the login process.
  // Clear it at the start of each login attempt.
  sessionStorage.clear();

  $(".role-btn").on("click", function(event) {
    event.preventDefault();
    //The object that will be used to retrieve the users information.
    var newLogin = {
      email: "",
      password: "",
      hh_role: ""
    };

    newLogin.hh_role = $(this).val();

    if (newLogin.hh_role === "volunteer") {
      newLogin.email = $("#vol-email")
        .val()
        .trim();
      newLogin.password = $("#vol-password")
        .val()
        .trim();
    } else if (newLogin.hh_role === "organization") {
      newLogin.email = $("#org-email")
        .val()
        .trim();
      newLogin.password = $("#org-password")
        .val()
        .trim();
    }

    document.getElementById("vol-login-form").reset();
    document.getElementById("org-login-form").reset();

    console.log(newLogin);

    //validation function to insure all fields are populated.
    if (!newLogin.email || !newLogin.password) {
      console.log("There are empty fields");
      return;
    }

    $.post("/api/login", newLogin, function(data) {
      if (data) {
        console.log(data);

        // Store the data in sessionStorage.
        // This section can be revised once the final app is working.
        // An object is returned from the search.
        // For now we'll just store the entire thing.
        // Absurdly we have to turn it back into JSON.

        sessionStorage.setItem("hhUserData", JSON.stringify(data));

        //Display a successful login Message for the user.
        //Needs some work
        $("#result-message").text(
          "You've succussfully logged in. Now go out there and make a difference!"
        );
        $("#result-modal").modal("show");

        //Redirect to the appropriate volunteer or organization page.
        if (newLogin.hh_role === "volunteer") {
          window.location.href = "/volunteer";
        } else {
          window.location.href = "/organization";
        }
      }
    });
  });
});
