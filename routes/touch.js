const express = require("express")
const router = express.Router()

const touchs = [
    {
        id: 1,
        name: "Touch 1", 
        description: "Description 1",
        price: 10
    },
    {
        id: 2,
        name: "Touch 2", 
        description: "Description 2",
        price: 20
    },
    {
        id: 3,
        name: "Touch 3", 
        description: "Description 3",
        price: 30
    }
]

// GET
// http://localhost:3000/touches
router.get("/", (request, response) => {
    // TODO - Fetch touchs from Database
    response.send(touchs)
})

router.get("/:id", (request, response) => {
    let touch = touchs.find(ele => ele.id == request.params.id )
    response.send(touch)
})

// CREATE
router.post("/", (request, response) => {
    let touch = request.body
    touchs.push(touch)
    response.setHeader("foo", "bar")
    response.status(201).send(touchs)
})

// UPDATE
router.put("/:id", (request, response) => {
    let indexOfTheElement = touchs.findIndex(ele => ele.id == request.params.id)
    let newtouch = request.body

    touchs.splice(indexOfTheElement, 1, newtouch)
    response.send(touchs[indexOfTheElement])
})

router.patch("/:id", (request, response) => {
    let touch = touchs.find(ele => ele.id == request.params.id)

    // Object.keys(request.body).forEach(key => {
    //     if (touch.key) {
    //         touch.key = request.body[key]
    //     }
    // });

    if (request.body.name) {
        touch.name = request.body.name
    } 
    if (request.body.description) {
        touch.description = request.body.description
    }
    if (request.body.price) {
        touch.price = request.body.price
    } 
    response.send(touch)
})

// DELETE
router.delete("/:id", (request, response) => {
    let index = touchs.findIndex(ele => ele.id == request.params.id)
    if (index != -1) {
        touchs.splice(index, 1)
        response.sendStatus(200)
    } else {
        response.sendStatus(204)
    }
})

module.exports = router