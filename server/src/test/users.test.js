const axios = require('axios')
const crypto = require('crypto')
const usersService = require('../service/usersService')

const generate = () => {
    return crypto.randomBytes(20).toString('hex')
}

const request = (url, method, data) => {
    return axios({ url, method, data })
}

test('Should get users', async () => {
    const user1 = await usersService.saveUser({ email: (generate() + '@gmail.com'), password: generate() })
    const user2 = await usersService.saveUser({ email: (generate() + '@gmail.com'), password: generate() })
    const user3 = await usersService.saveUser({ email: (generate() + '@gmail.com'), password: generate() })

    const response = await request('http://localhost:8080/users', 'get')
    const users = response.data
    expect(users).toHaveLength(3)

    await usersService.deleteUser(user1.id)
    await usersService.deleteUser(user2.id)
    await usersService.deleteUser(user3.id)
})

test('Should save a user', async () => {
    const data = { email: (generate() + '@gmail.com'), password: generate() }
    const response = await request('http://localhost:8080/users', 'post', data)
    const user = response.data
    expect(user.email).toBe(data.email)
    expect(user.password).toBe(data.password)
    await usersService.deleteUser(user.id)
})