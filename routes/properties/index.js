const router = require("express").Router();

const getAllProperties = require("./getAllPropertiesList");
const addProperty = require("./addProperty");
const getDetails = require("./getDetails");
const filterDetails = require("./filterDetails");

router.get("/get-all-properties", getAllProperties);
router.post("/add-property", addProperty);
router.get("/get-details/:id", getDetails);
router.get(
  "/get-filter-details/:bedrooms?/:bathrooms?/:houseType?",
  filterDetails
);

module.exports = exports = router;
