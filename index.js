const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const serveStatic = require('serve-static')

app.use(cors())
app.use(express.json())
app.use(serveStatic(__dirname + '/client/dist'))

app.use('/users', require('./src/route/usersRoute'))
app.use('/posts', require('./src/route/postsRoute'))

// Default Route
app.get("*", (req, res) => {
    res.sendFile('index.html', { root: './client/dist' });
})

app.use((error, req, res, next) => {
    if (error.message === 'Email or password wrong') {
        return res.status(403).send({ status: 403, error: error.message })
    }
    if (error.message === 'Not found') {
        return res.status(404).send({ status: 404, error: error.message })
    }
    if (error.message === 'Already exists') {
        return res.status(409).send({ status: 409, error: error.message })
    }
    res.status(500).send({ status: 500, error: error.message })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})