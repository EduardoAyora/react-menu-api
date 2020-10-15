const express = require('express')
const ordersRouter = express.Router()
const Order = require('../models/order')

ordersRouter.route('/')
.get(async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json(orders)
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})
.post(async (req, res) => {
    try {
        const order = await new Order(
            req.body
        ).save()
        res.json(order)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

ordersRouter.put('/', async (req, res) => {
    try {
        const ex = {
            nombre: req.body.nombre
        }
        res.json(ex)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

ordersRouter.delete('/:id', async (req, res) => {
    try {
        const ex = {
            nombre: req.params.id
        }
        res.json(ex)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = ordersRouter