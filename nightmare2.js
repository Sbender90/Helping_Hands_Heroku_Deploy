var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://fast-hollows-97257.herokuapp.com/login")
  .type("#org-email", "sbc@church.org")
  .type("#org-password", "SBC!@#123")
  .click("#org-submit-btn")
  .wait("#links a")
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
