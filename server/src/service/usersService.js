const usersData = require('../data/usersData')

exports.getUsers = () => {
    return usersData.getUsers();
}

exports.saveUser = async (user) => {
    const existingUser = await usersData.getPostByEmail(user.email)
    if (existingUser) throw new Error('User already exists')
    return usersData.saveUser(user)
}

exports.deleteUser = (id) => {
    return usersData.deleteUser(id)
}