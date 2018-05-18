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
    db.Events.findAll({
     
    })
      .then(function(dbEvents) {
        res.json(dbEvents);
        // console.log("Got the data: ", dbEvents);
      });
  });
  //the where is hardcoded need to change that to be dynamic for the user that is currently loged 
  app.get("/api/volevnts", function(req, res) {
    db.Volunteer_Events.findAll({
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

  app.post("/api/going", function(req, res) {
    console.log("I'm going: ", req.body);
    Volunteer_Events.create({
      vol_id: req.body.dbCurrentUser
    });
  });

app.get("/api/:user"), function(req, res) {
  console.log("User Id", req.id);
  db.Users.findOne({
      where: {
        email: req.body.email,
        hh_role: req.body.hh_role
    }
  }).then(function(dbCurrentUser) {
    res.json(dbCurrentUser);
    console.log("Current User: ", dbCurrentUser);

  })
}


};
