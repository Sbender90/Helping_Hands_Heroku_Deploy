$(document).ready(function() {
$("#going-btn").on("click", function(event) {
  console.log('submit button: ', event);
  event.preventDefault();



$.ajax({
    url: "/api/going",
    method: "POST"
  })
  .then(function (response) {
    var results = response;
    console.log("button test: ", result);
  });

});


});

/*

-Need to click the button
-Then run AJAX to the going route
-The going route needs to add the Users.id to the Volunteer_Events table
  -Put the Users.id into the vol_id column in Volunteer_Events


*/