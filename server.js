const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
// const io = require('socket.io')(http)

const exampleRouter = require('./routes/example')

var corsOptions = {
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200
}

// habilita o deshabilita los metodos diferentes de get, head, post
app.options('*', cors())
// habilita el dominio, puerto o protocolo
app.use(cors(corsOptions))
app.use(express.json())

// rutas de la api
app.use('/', exampleRouter)

// io.on('connection', (socket) => {
//     console.log('a user connected')
// });

http.listen(1100, () => {
    console.log('escuchando en :1100')
})

