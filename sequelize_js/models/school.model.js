'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    static associate(models) {
      School.hasMany(models.Student, {
        foreignKey: 'school_id',
        as: 'students',
      });
    }
  }
  School.init(
    {
      name: {type: DataTypes.STRING, allowNull: false},
    },
    {
      sequelize,
      modelName: 'School',
    }
  );
  return School;
};
