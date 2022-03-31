const axios = require('axios')
const crypto = require('crypto')
const usersService = require('../service/usersService')
const postsService = require('../service/postsService')

const generate = () => {
    return crypto.randomBytes(20).toString('hex')
}

const request = (url, method, data) => {
    return axios({ url, method, data, validateStatus: false })
}

test('Should get posts', async () => {
    const user = await usersService.registerUser({ email: generate(), password: generate(), name: generate() })
    const post1 = await postsService.registerPost({ title: generate(), content: generate(), author: user.id })
    const post2 = await postsService.registerPost({ title: generate(), content: generate(), author: user.id })
    const post3 = await postsService.registerPost({ title: generate(), content: generate(), author: user.id })
    const response = await request('http://localhost:8080/posts/getAll', 'get')
    expect(response.status).toBe(200)
    const posts = response.data
    expect(posts).toHaveLength(3)
    await postsService.deletePost(post1.id)
    await postsService.deletePost(post2.id)
    await postsService.deletePost(post3.id)
    await usersService.deleteUser(user.id)
})

test('Should register a post', async () => {
    const user = await usersService.registerUser({ email: generate(), password: generate(), name: generate() })
    const data = { title: generate(), content: generate(), author: user.id }
    const response = await request('http://localhost:8080/posts/register', 'post', data)
    expect(response.status).toBe(201)
    const post = response.data
    expect(post.title).toBe(data.title)
    expect(post.content).toBe(data.content)
    expect(post.author).toBe(data.author)
    await postsService.deletePost(post.id)
    await usersService.deleteUser(user.id)
})

test('Should NOT register a post', async () => {
    const user = await usersService.registerUser({ email: generate(), password: generate(), name: generate() })
    const data = { title: generate(), content: generate(), author: user.id }
    const response1 = await request('http://localhost:8080/posts/register', 'post', data)
    const response2 = await request('http://localhost:8080/posts/register', 'post', data)
    expect(response2.status).toBe(409)
    const post = response1.data
    await postsService.deletePost(post.id)
    await usersService.deleteUser(user.id)
})

test('Should delete a post', async () => {
    const user = await usersService.registerUser({ email: generate(), password: generate(), name: generate() })
    const post = await postsService.registerPost({ title: generate(), content: generate(), author: user.id })
    const response = await request('http://localhost:8080/posts/delete', 'delete', post)
    expect(response.status).toBe(200)
    await usersService.deleteUser(user.id)
})

test('Should NOT delete a post', async () => {
    const response = await request('http://localhost:8080/posts/delete', 'delete', { id: 999999 })
    expect(response.status).toBe(404)
})