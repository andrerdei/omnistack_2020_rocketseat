// Declarando Variáveis Globais (require)

const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection')


// Exportando Módulo Com os Controllers

module.exports = {

/*

// Busca Todas as Informações das Ongs Cadastradas 

    async index(req, res) {
        const ongs = await connection('ongs').select('*')

        return res.json(ongs)
    },

*/

    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body

        const id = generateUniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({id})
    }
}