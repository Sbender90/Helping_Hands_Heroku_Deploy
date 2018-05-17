// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {
  console.log("singup route listening");

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    //First check to see if the user is already registered,
    db.User.findOne({
      where: {
        email: req.body.email,
        hh_role: req.body.hh_role
      }
    }).then(function(dbUser) {
      //if the result is null, the users info is registered in
      //the users table.
      if (!dbUser) {
        console.log("Not registered!");
        db.User.create({
          email: req.body.email,
          password: req.body.password,
          hh_role: req.body.hh_role
        }).then(function() {
          //Then it is recorded in the organizations or volunteers tables.
          if (req.body.hh_role === "organization") {
            console.log(req.body);
            db.Organization.create({
              organizer: req.body.organizer,
              email: req.body.email,
              phone_num: req.body.phone_num
            }).then(function(dbOrganization) {
              console.log(dbOrganization);
              res.json(dbOrganization);
            });
          } else {
            db.Volunteer.create({
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              phone_num: req.body.phone_num,
              email: req.body.email
            }).then(function(dbVolunteer) {
              console.log(dbVolunteer);
              res.json(dbVolunteer);
            });
          }
        });
      }
    });
  });
};
