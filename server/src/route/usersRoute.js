const express = require('express')
const router = express.Router()
const usersService = require('../service/usersService')

router.get('/users', async (req, res) => {
    const users = await usersService.getUsers()
    res.json(users)
})

router.post('/users', async (req, res) => {
    const user = req.body
    const newUser = await usersService.saveUser(user)
    res.json(newUser)
})

module.exports = router;