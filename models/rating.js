'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Profile, { foreignKey: 'raterId' })
      Rating.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Rating.init({
    value: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      }
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles', 
        key: 'id'
      }
    },
    raterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles', 
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};