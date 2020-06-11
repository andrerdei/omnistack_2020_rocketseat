const {celebrate, Segments, Joi} = require('celebrate')

module.exports = {
    postValidation() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required()
            })
        })
    }
}