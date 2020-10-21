const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema ({ 
    name: {
        type: String,
        required: true,
        unique: true
    },
    image_url: {
        type: String
    },
    slug: { 
        type: String,
        required: true,
        unique: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
})

module.exports = mongoose.model('Category', CategorySchema)