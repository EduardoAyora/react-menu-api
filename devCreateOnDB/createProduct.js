const mongoose = require('mongoose')
const Product = require('../models/product')

async function exe() {
    try {
        await new Product({
            name: 'Crema de verduras',
            image_url: '/images/productos/crema.jpg',
            prices: ['5f889c3acbb8acd5424e0150']
        }).save()
        mongoose.disconnect()
    } catch(err) {
        console.log(err.message)
        mongoose.disconnect()
    }
}

exe()