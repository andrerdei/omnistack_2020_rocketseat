// Declarando Variáveis Globais (require)

const app = require('./app')


// Inicializando Servidor

app.listen(3333, () => {
    console.log("server is running...")
})