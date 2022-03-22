const axios = require('axios')
const crypto = require('crypto')
const usersService = require('../service/usersService')

const generate = () => {
    return crypto.randomBytes(20).toString('hex')
}

const request = (url, method, data) => {
    return axios({ url, method, data, validateStatus: false })
}

test('Should get users', async () => {
    const user1 = await usersService.saveUser({ email: generate(), password: generate() })
    const user2 = await usersService.saveUser({ email: generate(), password: generate() })
    const user3 = await usersService.saveUser({ email: generate(), password: generate() })
    const response = await request('http://localhost:8080/users', 'get')
    expect(response.status).toBe(200)
    const users = response.data
    expect(users).toHaveLength(3)
    await usersService.deleteUser(user1.id)
    await usersService.deleteUser(user2.id)
    await usersService.deleteUser(user3.id)
})

test('Should save a user', async () => {
    const data = { email: generate(), password: generate() }
    const response = await request('http://localhost:8080/users', 'post', data)
    expect(response.status).toBe(201)
    const user = response.data
    expect(user.email).toBe(data.email)
    expect(user.password).toBe(data.password)
    await usersService.deleteUser(user.id)
})

test('Should NOT save a user', async () => {
    const data = { email: generate(), password: generate() }
    const response1 = await request('http://localhost:8080/users', 'post', data)
    const response2 = await request('http://localhost:8080/users', 'post', data)
    expect(response2.status).toBe(409)
    const user = response1.data
    await usersService.deleteUser(user.id)
})

test('Should get a user by email/pass', async () => {
    const data = { email: generate(), password: generate() }
    const user = await usersService.saveUser(data)

    const response = await request('http://localhost:8080/login', 'get', data)
    expect(response.status).toBe(200)

    await usersService.deleteUser(user.id)
})

test('Should NOT get a user by email/pass', async () => {
    const data = { email: generate(), password: generate() }
    const response = await request('http://localhost:8080/login', 'get', data)
    expect(response.status).toBe(403)
})