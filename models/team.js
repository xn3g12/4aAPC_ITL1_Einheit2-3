
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      // Ein Team hat mehrere Mitglieder.
      Team.hasMany(models.Member, {
        foreignKey: 'teamId'
      });

      // Ein Team hat mehrere Projekte.
      Team.hasMany(models.Project, {
        foreignKey: 'teamId'
      });
    }
  }

  Team.init({
    name: DataTypes.STRING,
    klasse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });

  return Team;
};
