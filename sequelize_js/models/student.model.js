'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.School, {
        foreignKey: 'school_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Student.init(
    {
      name: {type: DataTypes.STRING, allowNull: false},
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Student',
    }
  );
  return Student;
};
