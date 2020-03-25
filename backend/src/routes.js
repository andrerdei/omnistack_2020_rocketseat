// Declarando Variáveis Globais (require)

const express = require('express')
const ongControllers = require('./controllers/ong_controller')

const routes = express.Router()


// Configurando Rotas

routes.get('/ongs', ongControllers.index)

routes.post('/ongs', ongControllers.create)


// Exportando Rotas

module.exports = routes