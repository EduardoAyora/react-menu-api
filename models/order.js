const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema ({ 
    tableNumber: { 
        type: Number, 
        required: true
    },
    details: [{
        type: Schema.Types.ObjectId,
        ref: "Detail"
    }]
})

module.exports = mongoose.model('Order', OrderSchema)
