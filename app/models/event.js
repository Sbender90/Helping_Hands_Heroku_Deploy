module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    event_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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

  Events.associate = function(models) {
    // An Events belongs to an Organization.
    // An Event can't be created without an Organization due to the foreign key constraint.
    Events.belongsTo(models.Organization, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Events;
};
