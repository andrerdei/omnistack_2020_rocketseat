// Declarando Variáveis Globais (require)

const express = require('express')

const sessionController = require('./controllers/session_controller')
const ongController = require('./controllers/ong_controller')
const profileController = require('./controllers/profile_controller')
const incidentController = require('./controllers/incident_controller')

const sessionValidator = require('./validators/session_validator')
const ongValidator = require('./validators/ong_validator')
const profileValidator = require('./validators/profile_validator')
const incidentValidator = require('./validators/incident_validator')

const routes = express.Router()


// Configurando Rotas

routes.post('/sessions', sessionValidator.postValidation(), sessionController.create)

/*

// Busca Todas as Informações das Ongs Cadastradas

routes.get('/ongs', ongController.index)

*/

routes.post('/ongs', ongValidator.postValidation(), ongController.create)

routes.get('/profile', profileValidator.getValidation(), profileController.index)

routes.get('/incidents', incidentValidator.getValidation(), incidentController.index)
routes.post('/incidents', incidentValidator.postValidation(), incidentController.create)
routes.delete('/incidents/:id', incidentValidator.deleteValidation(), incidentController.delete)

// Exportando Rotas

module.exports = routes