const express = require('express')
const router = express.Router()
const usersService = require('../service/usersService')

router.get('/users', async (req, res, next) => {
    try {
        const users = await usersService.getUsers()
        res.json(users)
    } catch (e) {
        next(e)
    }
})

router.post('/users', async (req, res, next) => {
    const user = req.body
    try {
        const newUser = await usersService.saveUser(user)
        res.status(201).json({ status: 201, ...newUser })
    } catch (e) {
        next(e)
    }
})

router.get('/login', async (req, res, next) => {
    const user = req.body
    try {
        const loginUser = await usersService.loginUser(user)
        res.status(200).json({ status: 200, ...loginUser })
    } catch (e) {
        next(e)
    }
})

module.exports = router;