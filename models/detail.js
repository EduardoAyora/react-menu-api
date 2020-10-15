const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DetailSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    price: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Price'
    }
})

module.exports = mongoose.model('Detail', DetailSchema)