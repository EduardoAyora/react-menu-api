const mongoose = require('mongoose')
const Product = require('../models/product')

async function exe() {
    try {
        await new Product({
            name: 'Bebida fria dos',
            image_url: '/images/productos/gaseosa.jpg',
            prices: ['5f889b596e80a6d4aef01337']
        }).save()
        mongoose.disconnect()
    } catch(err) {
        console.log(err.message)
        mongoose.disconnect()
    }
}

exe()