// Variables
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

// Use
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.use('/', require('./utils/routes'))

// Listen
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})