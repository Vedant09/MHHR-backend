const models = require("../../models");



async function getAllProperties(req, res, next) {
  try {
    const properties = await models.Property.findAll();

    return res.status(200).json({
      data: properties,
    });
  } catch (error) {
    console.log(error, "error");
    return next(error);
  }
}

module.exports = exports = getAllProperties;
