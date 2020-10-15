const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema ({
    name: {
        type: String, 
        required: true
    },
    image_url: {
        type: String
    },
    prices: [{
        type: Schema.Types.ObjectId,
        ref: 'Price'
    }]
})

module.exports = mongoose.model('Product', ProductSchema)