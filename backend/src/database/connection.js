// Declarando Variáveis Globais (require)

const knex = require('knex')
const configuration = require('../../knexfile')


// Configurando Conexão com Banco de Dados

const connection = knex(configuration.development)


// Exportando Conexão

module.exports = connection