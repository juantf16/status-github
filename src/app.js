const express = require ('express')
const app = express ()
const {client} = require('../redis')
const porta = 3333
const routes = require ('./routes')


app.use ('/', routes)

async function server() {
app.listen (porta, () => {
    client.connect()
    console.log (`server rodando na porta ${porta}`)
})
}

server()

module.exports = {
    app
}