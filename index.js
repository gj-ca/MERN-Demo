const express = require("express")
let app = express()

// Middleware 
app.use(express.json()) // Reading the body as JSON

// app.use(express.urlencoded()) // Reading the body as form-data

// http://localhost:3000/products
app.use("/products", require("./routes/products.js"))

// http://localhost:3000/touches
app.use("/touchs", require("./routes/touch.js"))

// get "/products" "products#index"
// HTTP Request Verbs
// GET 
// POST
// PUT/PATCH
// DELETE

// GET "/" 
// path, callback
app.get("/", (request, response) => {
    console.log("Root Path - GET request")
    response.send("Welcome to my first web server")
})

// port, callback
app.listen(3000, () => {})