const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))

app.use('/', require('./src/route/usersRoute'))

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})