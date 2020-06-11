const {celebrate, Segments, Joi} = require('celebrate')

module.exports = {
    getValidation() {
        return celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number()
            })
        })
    },

    postValidation() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number().required()
            }),

            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown()
        })
    },

    deleteValidation() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required()
            })
        })
    }
}