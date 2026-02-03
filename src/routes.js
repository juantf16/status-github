const axios  = require('axios')
const express = require ('express')
const {client} = require('../redis')
const route = express.Router()

async function search() {
    let response = await axios.get ('https://www.githubstatus.com/api/v2/summary.json') 
    return response.data
}

route.get ('/', async (req, res) => {
    const returnjson = await search ()
    await client.set('ultima-request', JSON.stringify(returnjson), {EX: 20})
    return res.json(returnjson)
})

route.get ('/last-request', async (req, res) => {
    const lastRequest = await client.get('ultima-request')
    if (!lastRequest){
        return res.send('Nenhnuma request guardada use a rota /, para fazer uma nova')
    }else{
        return res.json(JSON.parse(lastRequest))
    }
})


module.exports = route  