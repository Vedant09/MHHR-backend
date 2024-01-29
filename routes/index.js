const router = require('express').Router();

const propertiesHandler = require('./properties');

router.use('/properties', propertiesHandler);


module.exports = exports = router;