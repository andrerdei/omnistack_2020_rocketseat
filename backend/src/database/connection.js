// Declarando Variáveis Globais (require)

const knex = require('knex')
const configuration = require('../../knexfile')

const configEnv = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development


// Configurando Conexão com Banco de Dados

const connection = knex(configEnv)


// Exportando Conexão

module.exports = connection