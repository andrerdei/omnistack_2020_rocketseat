// Declarando Variáveis Globais (require)

const express = require('express')
const ongController = require('./controllers/ong_controller')
const incidentController = require('./controllers/incident_controller')

const routes = express.Router()


// Configurando Rotas

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)

// Exportando Rotas

module.exports = routes