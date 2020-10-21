const mongoose = require('mongoose')
const Category = require('../models/category')

async function exe() {
    try {
        await new Category({
            name: 'A la carta',
            image_url: '/images/categorias/carta.png',
            slug: 'carta',
            products: ['5f8f8d7d5960a35353f3b27a']
        }).save()
        await new 
        mongoose.disconnect()
    } catch(err) {
        console.log(err.message)
        mongoose.disconnect()
    }
}

exe()