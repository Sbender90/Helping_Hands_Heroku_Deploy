// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var Sequelize = require("sequelize");
// Routes
// =============================================================
module.exports = function(app) {
  console.log("api-routes listening");

  app.post("/api/login", function(req, res) {
    console.log(req.body);
    db.User.findOne({
      where: req.body
    }).then(function(dbUser) {
      if (!dbUser) {
        console.log("null response");
        return;
      }

      if (dbUser.hh_role === "organization") {
        db.Organization.findOne({
          where: {
            email: dbUser.email
          }
        }).then(function(dbOrganization) {
          console.log(dbOrganization);
          res.json(dbOrganization);
          return;
        });
      } else {
        db.Volunteer.findOne({
          where: {
            email: dbUser.email
          }
        }).then(function(dbVolunteer) {
          console.log(dbVolunteer);
          res.json(dbVolunteer);
        });
      }
    });
  });
};
