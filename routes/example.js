const express = require('express')
const exampleRouter = express.Router()

exampleRouter.get('/', async (req, res) => {
    try {
        const ex = {
            nombre: 'edu'
        }
        res.json(ex)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

exampleRouter.put('/', async (req, res) => {
    try {
        const ex = {
            nombre: req.body.nombre
        }
        res.json(ex)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

exampleRouter.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const ex = {
            nombre: req.params.id
        }
        res.json(ex)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = exampleRouter