module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    event_name: {
      type: DataTypes.STRING
    },
    event_desc: {
      type: DataTypes.STRING
    },
    event_loc: {
      type: DataTypes.STRING
    },
    event_date: {
      type: DataTypes.DATEONLY
    },
    event_time: {
      type: DataTypes.TIME
    }
  });
  return Events;
};
