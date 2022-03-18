// Variables
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 8080

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Routes
app.get('/users', db.getUsers)
app.post('/users', db.createUser)
app.delete('/users/:id', db.deleteUser)

// Listen
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})