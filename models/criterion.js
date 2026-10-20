
'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Criterion extends Model {
    /**
     * Helper method for defining associations.
     * The models/index.js file calls this method automatically.
     */
    static associate(models) {
      // Ein Kriterium kann mehrere Bewertungen haben.
      Criterion.hasMany(models.Evaluation, {
        foreignKey: 'criterionId'
      });
    }
  }

  Criterion.init({
    name: DataTypes.STRING,
    maxScore: DataTypes.INTEGER,
    weight: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Criterion',
  });

  return Criterion;
};
