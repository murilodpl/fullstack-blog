const express = require('express')
const router = express.Router()
const usersService = require('../service/usersService')

router.get('/users', async (req, res) => {
    const users = await usersService.getUsers()
    res.json(users)
})

module.exports = router;