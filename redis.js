const  {createClient} = require ('redis')
const client = createClient()

client.on('error', (erro) => {
    console.log(erro)
})

async function connect() {
    await client.connect()
}

module.exports = {
    client,
    connect
}
