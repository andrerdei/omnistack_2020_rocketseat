const {celebrate, Segments, Joi} = require('celebrate')

module.exports = {
    postValidation() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required().regex(/^[A-Za-z\s]+$/),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(11).regex(/^[0-9]+$/),
                city: Joi.string().required().regex(/^[A-Za-z\s]+$/),
                uf: Joi.string().required().length(2).regex(/^[A-Za-z]+$/)
            })
        })
    }
}