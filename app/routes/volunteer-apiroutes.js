// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var Event = require("../models/event.js");
// var Organizer = require("../models/organization.js");
// var Volunteer = require("../models/volunteer.js");
// var VolunteerEvents = require("../models/vol_evnt.js");
var db = require("../models");
var path = require("path");
var Sequelize = require("sequelize");

const Op = Sequelize.Op;
// var sequelize = db.helping_handsdb;

// Routes
// =============================================================
module.exports = function(app) {

  // app.get("/volunteer", function(request, response){
  //   response.sendFile(path.join(__dirname, "../public/html/volunteer.html"));
  //   console.log('inside get /volunteer');
  // });

// get all events associated witht he vol_id in the volunteer_events table
// to show the user
//

  app.get("/api/posts/", function(req, res) {
    // console.log("POST GET: ", res)
    db.events.findAll({
     
    })
      .then(function(dbEvents) {
        res.json(dbEvents);
        // console.log("Got the data: ", dbEvents);
      });
  });
  //the where is hardcoded need to change that to be dynamic for the user that is currently loged 
  app.get("/api/volevnts", function(req, res) {
    db.volunteer_events.findAll({
      attributes: ["event_id"],
      where: {
        vol_id: 2
      }
    }).then(function(dbVolEve) {
      console.log(dbVolEve);
      db.Events.findAll({
        where: {
          [Op.or]: [{ id: 3 }, { id: 1 }]
        }
        

      }).then(function(dbEvents) {
        // console.log("op.or: ", dbVolEve);
        // console.log(dbEvents);
        res.json(dbEvents);
      });
    });
  });


//   app.get("/api/posts/:user", function (req, res) {

//     // console.log("vol_events get: ", res);
//   // console.log(res)

//   db.Volunteer_Events.findAll({
//     where: {
//       vol_id: req.params.user_id
//     }
//   }).then(function(dbevents){
//     console.log(dbevents)
//     res.json(dbevents);
//   })
// });
  
   
  //tutor function
//   app.get("/api/posts/:user", function (req, res) {

//     // console.log("vol_events get: ", res);
//   // console.log(res)
//   var query={vol_id: 2};
//   db.Volunteer_Events.findAll({
//     where: {
//       id: req.params.vol_id
//     },
//     include:[{model:db.Events}]
//   }).then(function(dbevents){
//     console.log(dbevents)
//     res.json(dbevents);
//   })
// });




    //     where: {
    //         vol_id: 2 //(req.params.user, I assume)
    //     }
    // }).then(function (req,res) {
    //     console.log("post res:"+ res);
    //     // db.Events.findAll({
    //     //     where: {
    //     //         [Op.or]: [{ vol_id }, { event_id }] //or some manipulation of it
    //     //     }
    //     // }).then(function (dbEvents) {
    //     //     console.log(dbEvents);
    //     //     res.json(dbEvents);
    //     // });
  //  //});



  // app.get("/api/posts/:user", function(req, res) {
  //   // console.log("vol_events get: ", res);
  //   db.Volunteer_Events.findAll ({
  //     where: {
  //       vol_id: 2
  //     },
  //     include: [db.Events]
  //   }).then(function(dbVolunteer_Events){
  //     res.json(dbVolunteer_Events);
  //     // console.log("got the Volunteer_Events: ", dbVolunteer_Events);
  //   });
  // });

  // app.delete("/api/posts/:user/:id", function(req, res) {
  //   db.Volunteer_Events.destroy({
  //     where: {
  //       id: req.params.vol_id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });


  // app.get("/api/posts/:user", function(req, res) {
  //   // console.log("vol_events get: ", res);
  //   db.Events.findAll ({
      
  //     include: [db.Volunteer_Events]
  //   }).then(function(dbVolunteer_Events){
  //     res.json(dbVolunteer_Events);
  //     // console.log("got the Volunteer_Events: ", dbVolunteer_Events);
  //   });
  // });
  // app.get("/api/posts/:user", function(req, res) {
  //   // not sure about what to put in the vol_id //
  //   db.Events.findAll ({
  //     where: {
  //       id: 2
  //     },
  //     attributes: ["event_name", "event_desc", "event_loc", "event_date", "event_time"]
  //   }).then(function(db_vol_events) {
  //     db.Volunteer_Events.findAll ({
        
  //     }).then(function(evnt_user){
  //       res.json(evnt_user);
  //     })
  //   })
    
  // });

  // app.get("/api/posts/", function(req, res) {
  //   // console.log("POST GET: ", res)
  //   db.Events.findAll({
     
  //   })
  //     .then(function(dbEvents) {
  //       res.json(dbEvents);
  //       // console.log("Got the data: ", dbEvents);
  //     });
  // });





};
