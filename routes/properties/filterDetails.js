const models = require("../../models");

async function filterDetails(req, res, next) {
    try {
        const { bedrooms, bathrooms, houseType } = req.params;
        let filteredProperties = {};
        console.log(houseType);
        let filter = {};
        
        if (!bathrooms || !bedrooms) {
            return res.status(400).json({
                message: 'Both bedrooms and bathrooms are required parameters.',
            });
        }
        
        if (bathrooms == 0 || bedrooms == 0) {
            return res.status(409).json({
                message: 'Bedrooms or bathrooms cannot be zero.',
            });
        }
        
        if (houseType && houseType !== 'apartment' && houseType !== 'condo' && houseType !== 'town_house' && houseType != 'single_family') {
            return res.status(400).json({
                message: 'Invalid house type. Valid values are "apartment", "single_family", "condo", or "town_house".',
            });
        }
        
        filter.bedrooms = bedrooms;
        filter.bathrooms = bathrooms;
        
        if (houseType) {
            filter.houseType = houseType;
        }
        
        filteredProperties = await models.Property.findAll({
            where: filter
        });
        
        return res.status(200).json({
            data: filteredProperties,
        });
    } catch (error) {
        console.log(error, "error");
        return next(error);
    }
}

module.exports = exports = filterDetails;
