const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const dashboards = sequelize.define(
    'dashboards',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  dashboards.associate = (db) => {
    db.dashboards.belongsToMany(db.services, {
      as: 'services',
      foreignKey: {
        name: 'dashboards_servicesId',
      },
      constraints: false,
      through: 'dashboardsServicesServices',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.dashboards.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.dashboards.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return dashboards;
};
