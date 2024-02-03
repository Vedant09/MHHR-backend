const models = require("../../models");

async function addProperty(req, res, next) {
  try {
    const payload = req.body;
    console.log(payload, "payload");

    if (payload?.name) {
      await models.Property.create(payload);

      return res.status(201).json({
        data: "Added a property successfully!",
      });
    }
  } catch (error) {
    console.log(error, "error");
    return next(error);
  }
}

module.exports = exports = addProperty;
