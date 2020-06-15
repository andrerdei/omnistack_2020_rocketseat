const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "lalala",
                email: "contato@apad.com.br",
                whatsapp: "1111111111",
                city: "Rio do Sul",
                uf: "SC"
            })
        
        console.log(response.body)
    })
})