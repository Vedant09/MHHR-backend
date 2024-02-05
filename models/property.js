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
    bathrooms: DataTypes.DECIMAL,
    bedrooms: DataTypes.DECIMAL,
    rent: DataTypes.DECIMAL,
    utilities: DataTypes.ARRAY(DataTypes.TEXT),
    amenities: DataTypes.ARRAY(DataTypes.TEXT),
    images: DataTypes.ARRAY(DataTypes.TEXT),
    houseType: DataTypes.ENUM('apartment', 'single_family', 'condo', 'town_house'),
    availability: DataTypes.ENUM('available', 'unavailable', 'coming_soon')
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};