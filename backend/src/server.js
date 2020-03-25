// Declarando Variáveis Globais (require)

const express = require('express')
const routes = require('./routes')

const app = express()


// Configurando Arquivos (use)

app.use(express.json()) // Configurando Recebimento de Arquivos JSON pelo Corpo das Requisições
app.use(routes)


// Inicializando Servidor

app.listen(3333, () => {
    console.log("server is running...")
})