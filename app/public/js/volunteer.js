$(document).ready(function () {
  $("#events_div").addClass("list-group-item", "list-group-item-action", "flex-column", "aligh-items-start");
  $("#user_att_div").addClass("list-group-item", "list-group-item-action", "flex-column", "aligh-items-start");
  $.ajax({
      url: "/api/posts/",
      method: "GET"

    })
    .then(function (response) {
      var results = response;
      // console.log("Got the data: ", results);
      for (var i = 0; i < results.length; i++) {
        var event_name = $("<p>").text(results[i].event_name);
        event_name.addClass("mb-1");
        event_name.addClass("eventNameCss");
        var event_desc = $("<p>").text(results[i].event_desc);
        event_desc.addClass("mb-1");
        event_desc.addClass("eventDescCss");
        var event_date = $("<p>").text(results[i].event_date);
        event_date.addClass("mb-1");
        event_date.addClass("dateTime");
        var event_time = $("<p>").text(results[i].event_time);
        event_time.addClass("mb-1");
        event_time.addClass("dateTime");
        var submit_btn = $("<button>").text("Mark as going");
        submit_btn.addClass("btn btn-submit");
        $('submit_btn').attr('id', 'going-btn');
        

        $("#events_div").append(event_name);
        $("#events_div").append(event_desc);
        $("#events_div").append("The Day: ", event_date);
        $("#events_div").append("The Time: ", event_time);
        $("#events_div").append(submit_btn);

      }
    });

  $.ajax({
      url: "/api/volevnts",
      method: "GET"

    })
    .then(function (response) {
      var results = response;

      for (var i = 0; i < results.length; i++) {
        var event_name = $("<p>").text(results[i].event_name);
        event_name.addClass("mb-1");
        event_name.addClass("eventNameCss");
        var event_desc = $("<p>").text(results[i].event_desc);
        event_desc.addClass("mb-1");
        event_desc.addClass("eventDescCss");
        var event_date = $("<p>").text(results[i].event_date);
        event_date.addClass("mb-1");
        event_date.addClass("dateTime");
        var event_time = $("<p>").text(results[i].event_time);
        event_time.addClass("mb-1");
        event_time.addClass("dateTime");
        var un_submit_btn = $("<button>").text("Mark as not going");
        un_submit_btn.addClass("btn btn-submit");
        $('un_submit_btn').attr('id', 'not-going-btn');
        
        

        $("#user_att_div").append(event_name);
        $("#user_att_div").append(event_desc);
        $("#user_att_div").append("The Day: ", event_date);
        $("#user_att_div").append("The Time: ", event_time);
        $("#user_att_div").append(un_submit_btn);
        
      }
    });




});