
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // Ein Projekt gehört zu einem Team.
      Project.belongsTo(models.Team, {
        foreignKey: 'teamId'
      });

      // Ein Projekt kann mehrere Bewertungen haben.
      Project.hasMany(models.Evaluation, {
        foreignKey: 'projectId'
      });
    }
  }

  Project.init({
    teamId: DataTypes.INTEGER,
    titel: DataTypes.STRING,
    beschreibung: DataTypes.TEXT,
    praesentiertAm: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });

  return Project;
};
