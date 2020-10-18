const express = require('express')
const ordersRouter = express.Router()
const Order = require('../models/order')

ordersRouter.route('/')
.get(async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json(orders)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})
.post(async (req, res) => {
    const order = new Order(
        req.body
    )
    try {
        const newOrder = await order.save()
        res.status(201).json(newOrder)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

ordersRouter.route('/:id')
.get(getOrder, (req, res) => {
    res.json(res.order)
})
.patch(getOrder, async (req, res) => {
    if (req.body.tableNumber != null) {
        res.order.tableNumber = req.body.tableNumber
    }
    try {
        const updatedOrder = await res.order.save()
        res.json(updatedOrder)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
.delete(getOrder, async (req, res) => {
    try {
        await res.order.remove()
        res.json({ message: 'Orden eliminada' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getOrder(req, res, next) {
    let order
    try {
        order = await Order.findById(req.params.id)
        if (order == null) {
            return res.status(404).json({ message: 'No se encontró la orden' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.order = order
    next()
}

module.exports = ordersRouter