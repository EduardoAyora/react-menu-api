const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PriceSchema = new Schema({
    value: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Price', PriceSchema)