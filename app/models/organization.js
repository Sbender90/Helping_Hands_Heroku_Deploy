module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    org_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    organizer: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone_num: {
      type: DataTypes.STRING
    }
  });

  Organization.associate = function(models) {
    // Associating Organization with Events
    // When an Organization is deleted, also delete any associated Events
    Organization.hasMany(models.Events, {
      onDelete: "cascade"
    });
  };
  return Organization;
};
