$(document).ready(function() {
  /* global moment */
  var hhOrgData = JSON.parse(sessionStorage.hhUserData);
  console.log(hhOrgData);

  $("#session-storage").html(hhOrgData);
});
