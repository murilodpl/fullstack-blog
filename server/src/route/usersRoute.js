const express = require('express')
const router = express.Router()
const usersService = require('../service/usersService')

router.get('/users', async (req, res) => {
    const users = await usersService.getUsers()
    res.json(users)
})

router.post('/users', async (req, res) => {
    const user = req.body
    try {
        const newUser = await usersService.saveUser(user)
        res.status(201).json(newUser)
    } catch (e) {
        if (e.message === 'User already exists') {
            res.status(409).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

module.exports = router;