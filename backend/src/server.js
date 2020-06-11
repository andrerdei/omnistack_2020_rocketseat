// Declarando Variáveis Globais (require)

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const {errors} = require('celebrate')

const app = express()


// Configurando Arquivos (use)

app.use(cors())
app.use(express.json()) // Configurando Recebimento de Arquivos JSON pelo Corpo das Requisições
app.use(routes)
app.use(errors())


// Inicializando Servidor

app.listen(3333, () => {
    console.log("server is running...")
})