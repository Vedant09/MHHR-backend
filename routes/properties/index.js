const router = require('express').Router();

const getAllProperties = require('./getAllPropertiesList');
// const addProperty = require('./addProperty');


router.get('/get-all-properties', getAllProperties);
// router.post('/add-property', addProperty);


module.exports = exports = router;