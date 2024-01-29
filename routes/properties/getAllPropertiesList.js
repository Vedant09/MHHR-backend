const PropertiesModel = require("../../models/property");

// const { PropertiesModel } = require('../../models');


async function getAllProperties(req, res, next) {
  try {
    console.log("in the get all properties")
    const properties = await PropertiesModel.findAll();

    return res.status(200).json({
      data: properties,
    });
  } catch (error) {
    console.log(error, "error");
    return next(error);
  }
}

module.exports = exports = getAllProperties;
