module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define("Volunteer", {
    vol_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    phone_num: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });
  return Volunteer;
};
