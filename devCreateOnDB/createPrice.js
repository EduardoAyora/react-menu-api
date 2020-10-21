const mongoose = require('mongoose')
const Price = require('../models/price')

async function exe() {
    try {
        await new Price({
            value: 0.7,
            description: 'unidad'
        }).save()
        mongoose.disconnect()
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

exe()