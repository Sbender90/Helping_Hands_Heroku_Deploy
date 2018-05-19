var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = function(app) {
  console.log("organization api route listening");

  //call to post a new event
  app.post("/api/new_event", function(req, res) {
    console.log(req.body);
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  //call to get all volunteers for an organization
  app.get("/api/event_volunteers/:event_id", function(req, res) {
    console.log(req.params.event_id);
    db.Volunteer_Events.findAll({
      raw: true,
      attributes: ["vol_id"],
      where: {
        event_id: req.params.event_id
      }
    }).then(function(dbVolEve) {
      console.log(dbVolEve);
      db.Volunteer.findAll({
        attributes: ["first_name", "last_name", "phone_num", "email"],
        where: {
          [Op.or]: dbVolEve
        }
      }).then(function(dbVolunteer) {
        res.json(dbVolunteer);
      });
    });
  });

  //call to get all events for an organization
  app.get("/api/org_events/:org_id", function(req, res) {
    console.log(req.params.org_id);
    db.Events.findAll({
      where: {
        OrganizationOrgId: req.params.org_id
      }
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
};
