const mongoose = require('mongoose')
const Category = require('../models/category')

async function exe() {
    try {
        await new Category({
            name: 'Bebidas frías',
            image_url: '/images/categorias/bebida-fria.svg',
            slug: 'bebidas-frias',
            products: ['5f889e9f9d40f3d718fb9294', '5f889f5cb23ebdd7b8708de1', '5f889f830f84a4d7e3162204']
        }).save()
        mongoose.disconnect()
    } catch(err) {
        console.log(err.message)
        mongoose.disconnect()
    }
}

exe()