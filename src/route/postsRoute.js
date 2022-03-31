const express = require('express')
const router = express.Router()
const postsService = require('../service/postsService')

router.get('/getAll', async (req, res, next) => {
    try {
        const posts = await postsService.getPosts()
        res.json(posts)
    } catch (e) {
        next(e)
    }
})

router.post('/register', async (req, res, next) => {
    const post = req.body
    try {
        const newPost = await postsService.registerPost(post)
        res.status(201).json({ status: 201, ...newPost })
    } catch (e) {
        next(e)
    }
})

router.delete('/delete', async (req, res, next) => {
    const post = req.body
    try {
        const deletePost = await postsService.deletePost(post.id)
        res.status(200).json({ status: 200 })
    } catch (e) {
        next(e)
    }
})

module.exports = router;