$(document).ready(function() {
  /* global moment */

  // eventContainer holds all of our events
  var eventContainer = $(".event-container");
  var eventCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleEventDelete);
  $(document).on("click", "button.edit", handleEventEdit);
  // Variable to hold our events
  var events;



  // This function does an API call to delete events
  function deleteEvents(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/events/" + id
    })
      .then(function() {
        getEvents(eventCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed events HTML inside eventContainer
  function initializeRows() {
    eventContainer.empty();
    var eventsToAdd = [];
    for (var i = 0; i < events.length; i++) {
      eventsToAdd.push(createNewRow(events[i]));
    }
    eventContainer.append(eventsToAdd);
  }

  // This function constructs an event HTML
  function createNewRow(post) {
    var formattedDate = new Date(event.createAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newEventCard = $("<div>");
    newEventCard.addClass("card");
    var newEventCardHeading = $("<div>");
    newEventCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newEventTitle = $("<h2>");
    var newEventDate = $("<small>");
    var newEventOrganization = $("<h5>");
    newEventOrganization.text("Written by: " + event.organization.name);
    newEventOrganization.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newEventCardBody = $("<div>");
    newEventCardBody.addClass("card-body");
    var newEventBody = $("<p>");
    newEventTitle.text(event.title + " ");
    newEventBody.text(event.body);
    newEventDate.text(formattedDate);
    newEventTitle.append(newEventDate);
    newEventCardHeading.append(deleteBtn);
    newEventCardHeading.append(editBtn);
    newEventCardHeading.append(newEventTitle);
    newEventCardHeading.append(newEventOrganization);
    newEventCardBody.append(newEventBody);
    newEventCard.append(newEventCardHeading);
    newEventCard.append(newEventCardBody);
    newEventCard.data("event", event);
    return newEventCard;
  }

  // This function figures out which event we want to delete and then calls deleteEvents
  function handleEventDelete() {
    var currentEvent = $(this)
      .parent()
      .parent()
      .data("event");
    deleteEvents(currentEvent.id);
  }

  // This function figures out which event we want to edit and takes it to the appropriate url
  function handleEventEdit() {
    var currentEvent = $(this)
      .parent()
      .parent()
      .data("event");
    window.location.href = "/cms?event_id=" + currentEvent.id;
  }

  // This function displays a message when there are no events
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for organization #" + id;
    }
    eventContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No events yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> ");
    eventContainer.append(messageH2);
  }

});
