const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/', require('./src/route/usersRoute'))
app.use((error, req, res, next) => {
    if (error.message === 'User already exists') {
        return res.status(409).send(error.message)
    }
    res.status(500).send(error.message)
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})