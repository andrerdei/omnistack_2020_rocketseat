// Declarando Variáveis Globais (require)

const express = require('express')
const routes = express.Router()


// configurando Rotas

routes.post('/users', (req, res) => {
    const body = req.body

    console.log(body)

    return res.json({
        evento: "Semana Omnistack 11.0",
        aluno: "André Erdei",
    })
})


// Exportando Rotas

module.exports = routes