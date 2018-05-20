
  var Nightmare = require("nightmare");
  var expect = require("chai").expect;


  new Nightmare({ show: true })
    // Visit login page
    .goto("https://fast-hollows-97257.herokuapp.com/signup")
    // Enter firstname.
    .type("#firstName", "Crystal")
    //Enter lastName
    .type("#lastName", "Hughes")
    //Enter Email
    .type("#volEmail", "hugachia@me.com")
    //Enter Password
    .type("#vol-password", "Kansas")
    //Enter Phone number
    .type("#phoneNum", "913-233-9953")
    // Enter password.
    .screenshot("login.png")
    // Click submitbutton. 
    .click("#volSignup")
    // Scroll down a few hundred pixels.
    .scrollTo(500, 0)
    // Take a screenshot and save it to the current directory.
    .screenshot("login.png")
    // End test
    .end()
    // Execute commands
    .then(function() {
      console.log("Done!");
    })
    // Catch errors
    .catch(function(err) {
      console.log(err);
    });