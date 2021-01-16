const express = require("express")
const router = express.Router()

const products = [
    {
        id: 1,
        name: "Item 1", 
        description: "Description 1",
        price: 10
    },
    {
        id: 2,
        name: "Item 2", 
        description: "Description 2",
        price: 20
    },
    {
        id: 3,
        name: "Item 3", 
        description: "Description 3",
        price: 30
    }
]

// GET
// http://localhost:3000/products/products
router.get("/", (request, response) => {
    // TODO - Fetch products from Database
    response.send(products)
})

router.get("/:id", (request, response) => {
    let product = products.find(ele => ele.id == request.params.id )
    response.send(product)
})

// CREATE
router.post("/", (request, response) => {
    let product = request.body
    products.push(product)
    response.setHeader("foo", "bar")
    response.status(201).send(products)
})

// UPDATE
router.put("/:id", (request, response) => {
    let indexOfTheElement = products.findIndex(ele => ele.id == request.params.id)
    let newProduct = request.body

    products.splice(indexOfTheElement, 1, newProduct)
    response.send(products[indexOfTheElement])
})

router.patch("/:id", (request, response) => {
    let product = products.find(ele => ele.id == request.params.id)

    // Object.keys(request.body).forEach(key => {
    //     if (product.key) {
    //         product.key = request.body[key]
    //     }
    // });

    if (request.body.name) {
        product.name = request.body.name
    } 
    if (request.body.description) {
        product.description = request.body.description
    }
    if (request.body.price) {
        product.price = request.body.price
    } 
    response.send(product)
})

// DELETE
router.delete("/:id", (request, response) => {
    let index = products.findIndex(ele => ele.id == request.params.id)
    if (index != -1) {
        products.splice(index, 1)
        response.sendStatus(200)
    } else {
        response.sendStatus(204)
    }
})

module.exports = router