const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
    // stores: [Store]
})

const ProductModel = mongoose.model("products", ProductSchema)

module.exports = ProductModel