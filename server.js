require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
const mongoose = require('mongoose')
// const io = require('socket.io')(http)

const ordersRouter = require('./routes/orders')
const categoriesRouter = require('./routes/categories')

mongoose.connect('mongodb://localhost:27017/menu', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log('DB connected')
});

var corsOptions = {
    origin: process.env.BASE_URL,
    optionsSuccessStatus: 200
}

// habilita o deshabilita los metodos diferentes de get, head, post
app.options('*', cors())
// habilita el dominio, puerto o protocolo
app.use(cors(corsOptions))
app.use(express.json())

// rutas de la api
app.use('/categories', categoriesRouter)
app.use('/orders', ordersRouter)

// io.on('connection', (socket) => {
//     console.log('a user connected')
// });

http.listen(1100, () => {
    console.log('escuchando en :1100')
})

