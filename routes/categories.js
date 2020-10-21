const express = require('express')
const category = require('../models/category')
const categoriesRouter = express.Router()
const Category = require('../models/category')
const Product = require('../models/product')
const Price = require('../models/price')

categoriesRouter.route('/')
.get(async (req, res) => {
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

categoriesRouter.route('/:slug')
.get(getCategory, (req, res) => {
    res.json(res.category)
})

categoriesRouter.route('/:slug/products')
.get(async (req, res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug}).populate({path: 'products', populate: {path: 'prices'}})
        if (category == null) {
            return res.status(404).json({ message: 'No se encontró la categoría' })
        }
        res.json(category)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

async function getCategory(req, res, next) {
    let category
    try {
        category = await Category.findOne({slug: req.params.slug})
        if (category == null) {
            return res.status(404).json({ message: 'No se encontró la categoría' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.category = category
    next()
}

module.exports = categoriesRouter