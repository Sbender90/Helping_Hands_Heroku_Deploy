// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./app/models");
// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/login-api-routes.js")(app);
require("./app/routes/html-routes.js")(app);
require("./app/routes/volunteer-apiroutes.js")(app);
require("./app/routes/signup-api-routes.js")(app);
require("./app/routes/organization-apiroutes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
<<<<<<< HEAD
db.sequelize.sync({force: false}).then(function() {
=======
db.sequelize.sync({}).then(function() {
>>>>>>> master
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
