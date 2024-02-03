const models = require("../../models")

async function getDetails(req, res, next) {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID parameter' });
        }

        const property = await models.Property.findByPk(id);

        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        return res.status(200).json({
            data: property,
        });
    } catch (error) {
        console.log(error, "error");
        return next(error);
    }
}

module.exports = exports = getDetails;