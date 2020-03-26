// Declarando Variáveis Globais (require)

const connection = require('../database/connection')


// Exportando Módulo Com os Controllers

module.exports = {
    async create(req, res){
        const {id} = req.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if(!ong){
            return res.status(400).json({error: 'No Ong found with this ID'})
        }

        return res.json(ong)
    }
}