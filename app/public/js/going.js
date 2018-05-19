$(document).ready(function() {
var vol_id = 3;

  $(".btn-event").on("click", function(event) {
    event.preventDefault();

    var query = {};

    query.vol_id = vol_id;
    console.log("vol_id", query.vol_id);
    query.event_id = $(this).val();
    console.log("event_id", query.event_id);

console.log("query:", query);





  })




});

/*

-Need to click the button
-Then run AJAX to the going route
-The going route needs to add the Users.id to the Volunteer_Events table
  -Put the Users.id into the vol_id column in Volunteer_Events


*/