const express = require('express')
const ordersRouter = express.Router()
const Order = require('../models/order')
const Detail = require('../models/detail')

ordersRouter.route('/')
.get(async (req, res) => {
    try {
        const orders = await Order.find({}).populate({path: 'details', populate: {path: 'product'}})
            .populate({path: 'details', populate: {path: 'price'}})
        res.json(orders)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})
.post(async (req, res) => {
    // creando los detalles
    const details = req.body.details
    for (let i = 0; i < details.length; i++) {
        const detailToSave = new Detail({
            quantity: details[i].quantity,
            product: details[i].productId,
            price: details[i].priceId
        })
        try {
            const newDetail = await detailToSave.save()
            details[i] = newDetail._id
        } catch(err) {
            return res.status(400).json({message: err.message})
        }
    }
    // creando la orden
    const order = new Order({
        tableNumber: req.body.tableNumber,
        details: details
    })
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
    const details = res.order.details
    for (let i = 0; i < details.length; i++) {
        try {
            const detail = await Detail.findById(details[i]._id)
            await detail.remove()
        } catch(err) {
            res.status(500).json({ message: err.message })
        }
    }
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