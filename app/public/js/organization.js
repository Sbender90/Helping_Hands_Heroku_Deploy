$(document).ready(function() {
  if (sessionStorage.hhOrgData) {
    var hhOrgData = JSON.parse(sessionStorage.hhOrgData);
    console.log(hhOrgData);
    //Display the organization name.
    $("#org-name-header").html("Organization: " + hhOrgData.organizer);

    //Get the organizations events.
    $.get("/api/org_events/" + hhOrgData.org_id, function(data) {
      if (data) {
        console.log(data);
        displayEvents(data);
      }
    });
  }
  //Triggers the login process
  $("#org-login-btn").on("click", function(event) {
    event.preventDefault();

    var newLogin = {};
    newLogin.email = $("#org-email")
      .val()
      .trim();
    newLogin.password = $("#org-password")
      .val()
      .trim();
    newLogin.hh_role = $("#org-login-btn").val();

    document.getElementById("org-login-form").reset();

    console.log(newLogin);

    //validation function to insure all fields are populated.
    if (!newLogin.email || !newLogin.password) {
      console.log("There are empty fields");
      return;
    }
    //quesries database and returns with user info without password
    $.post("/api/login", newLogin, function(data) {
      if (data) {
        console.log(data);
        sessionStorage.setItem("hhOrgData", JSON.stringify(data));
        location.reload();
      }
    });
  });

  //Triggers the creation of a new event and refreshs the page.
  $("#new-event-btn").on("click", function(event) {
    event.preventDefault();
    //assemble an object defining an event
    var newEvent = {};
    console.log(newEvent);

    newEvent.event_name = $("#event-name")
      .val()
      .trim();
    newEvent.event_desc = $("#event-description")
      .val()
      .trim();
    newEvent.event_loc = $("#event-location")
      .val()
      .trim();
    newEvent.event_date = $("#event-date")
      .val()
      .trim();
    newEvent.event_time = $("#event-time")
      .val()
      .trim();
    newEvent.OrganizationOrgId = hhOrgData.org_id;

    document.getElementById("event-form").reset();

    //send a new post to the database.
    $.post("/api/new_event", newEvent, function(data) {
      if (data) {
        console.log(data);
      }
    });

    location.reload();
  });

  //Triggers the display of volunteers signed up for an event.
  $("#event-volunteers-btn").on("click", function(event) {
    event.preventDefault();
    $("#vol-tbody").empty();
    $("#vol-thead").empty();

    console.log("get my volunteers!");

    var event_id = $("#event-id-val")
      .val()
      .trim();

    //Function to return the get the volunteer id numbers for an event via
    //the through table, then obtain their information from the Volunteers table.
    if (event_id) {
      $.get("/api/event_volunteers/" + event_id, function(data) {
        if (data) {
          console.log(data);
          console.log(data.length);
          displayVolunteers(data);
        }
      });
    }
  });

  function displayVolunteers(array) {
    //empty out the current table
    $("#vol-thead").empty();
    var headRow = $("<tr>");
    var idTh = $("<th>")
      .attr("scope", "col")
      .html("#");
    var firstNameTh = $("<th>")
      .attr("scope", "col")
      .html("First Name");
    var lastNameTh = $("<th>")
      .attr("scope", "col")
      .html("Last Name");
    var emailTh = $("<th>")
      .attr("scope", "col")
      .html("Email");
    var phoneTh = $("<th>")
      .attr("scope", "col")
      .html("Phone Number");
    headRow.append(idTh, firstNameTh, lastNameTh, emailTh, phoneTh);
    $("#vol-thead").append(headRow);

    $("#vol-tbody").empty();
    var tBody = $("#vol-tbody");

    for (i = 0; i < array.length; i++) {
      var tRow = $("<tr>");
      var headTh = $("<th>")
        .attr("scope", "row")
        .text(i + 1);

      var firstNameTd = $("<td>").text(array[i].first_name);
      var lastNameTd = $("<td>").text(array[i].last_name);
      var emailTd = $("<td>").text(array[i].email);
      var phoneTd = $("<td>").text(array[i].phone_num);
      tRow.append(headTh, firstNameTd, lastNameTd, emailTd, phoneTd);
      tBody.append(tRow);
    }
  }

  function displayEvents(array) {
    //empty out the current table
    $("#event-thead").empty();
    var headRow = $("<tr>");
    var idTh = $("<th>")
      .attr("scope", "col")
      .html("event_id");
    var nameTh = $("<th>")
      .attr("scope", "col")
      .html("Event Name");
    var locationTh = $("<th>")
      .attr("scope", "col")
      .html("Event Location");
    var dateTh = $("<th>")
      .attr("scope", "col")
      .html("Event Date");
    var timeTh = $("<th>")
      .attr("scope", "col")
      .html("Event Time");
    headRow.append(idTh, nameTh, locationTh, dateTh, timeTh);
    $("#event-thead").append(headRow);

    $("#event-tbody").empty();
    var tBody = $("#event-tbody");

    for (i = 0; i < array.length; i++) {
      var tRow = $("<tr>");
      var headTh = $("<th>")
        .attr("scope", "row")
        .text(array[i].event_id);

      var nameTd = $("<td>").text(array[i].event_name);
      var locationTd = $("<td>").text(array[i].event_loc);
      var dateTd = $("<td>").text(array[i].event_date);
      var timeTd = $("<td>").text(array[i].event_time);
      tRow.append(headTh, nameTd, locationTd, dateTd, timeTd);
      tBody.append(tRow);
    }
  }
});
