let mongoose = require('mongoose')

const server = "127.0.0.1:27017"
const database = "knowledge_stats"

mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })