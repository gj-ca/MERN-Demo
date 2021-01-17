const express = require("express")
const router = express.Router()
const ProductModel = require("../models/products.js")

// GET
// http://localhost:3000/products/products

router.get("/", (request, response) => {
    ProductModel.find()
        .then(products => response.send(products))
        .catch(error => response.send(error))
})

router.get("/:id", (request, response) => {
    ProductModel.findById(request.params.id)
        .then(product => response.send(product))
        .catch(() => response.send({name: "No result found", message: "That record doesn't exist"}))
})

// CREATE
router.post("/", (request, response) => {
    let product = request.body
    ProductModel.create(product)
        .then(document => response.status(201).send(document))
        .catch(err => response.status(406).send(err))
})

// UPDATE
// Replace
router.put("/:id", (request, response) => {
    ProductModel.findOneAndReplace({_id: request.params.id}, request.body)
        .then(document => response.send(document))
        .catch(error => response.send(error))
})

// Update existing fields
router.patch("/:id", (request, response) => {
    ProductModel.findByIdAndUpdate(request.params.id, request.body)
        .then(document => response.send(document))
        .catch(error => response.send(error))
})

// DELETE
router.delete("/:id", (request, response) => {
    ProductModel.findByIdAndDelete(request.params.id)
        .then(confirmation => response.send(confirmation))
        .catch(error => response.send(error))
})

module.exports = router