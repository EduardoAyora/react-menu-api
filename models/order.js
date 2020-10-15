const mongoose = require('mongoose')

const Order = mongoose.model('Order', { 
    tableNumber: { 
        type: Number, 
        required: true
    }
})

module.exports = Order
