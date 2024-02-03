const router = require('express').Router();

const getAllProperties = require('./getAllPropertiesList');
const addProperty = require('./addProperty');
const getDetails = require('./getDetails');


router.get('/get-all-properties', getAllProperties);
router.post('/add-property', addProperty);
router.get('/get-details/:id', getDetails)


module.exports = exports = router;