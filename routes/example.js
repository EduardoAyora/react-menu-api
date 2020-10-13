const express = require('express')
const exampleRouter = express.Router()

module.exports = exampleRouter.get('/', async (req, res) => {
    try {
        const ex = {
            nombre: 'edu'
        }
        res.json(ex)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})