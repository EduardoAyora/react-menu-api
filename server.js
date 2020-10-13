const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const exampleRouter = require('./routes/example')

// rutas de la api
app.use('/', exampleRouter)

io.on('connection', (socket) => {
    console.log('a user connected')
});

http.listen(1100, () => {
    console.log('escuchando en :1100')
})

