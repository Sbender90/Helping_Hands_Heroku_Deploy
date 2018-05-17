module.exports = function(sequelize, DataTypes) {
  var Volunteer_Events = sequelize.define("Volunteer_Events", {
    vol_id: {
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.INTEGER
    }
  });
  return Volunteer_Events;
};
