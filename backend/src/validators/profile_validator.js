const {celebrate, Segments, Joi} = require('celebrate')

module.exports = {
    getValidation() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown()
        })
    }
}