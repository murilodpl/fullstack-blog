const express = require('express')
const router = express.Router()
const db = require('./queries')

router.get('/users', db.getUsers)
router.post('/users', db.createUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router;