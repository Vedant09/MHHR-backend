'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    bathrooms: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    utilities: DataTypes.ARRAY(DataTypes.TEXT),
    amenities: DataTypes.ARRAY(DataTypes.TEXT),
    images: DataTypes.ARRAY(DataTypes.TEXT)
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};