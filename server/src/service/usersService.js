const usersData = require('../data/usersData')

exports.getUsers = () => {
    return usersData.getUsers();
}

exports.loginUser = async (user) => {
    const wrongUser = await usersData.loginUserCheck(user)
    console.log(wrongUser)
    if (!wrongUser) throw new Error("Email or password wrong")
    return usersData.loginUser(user)
}

exports.saveUser = async (user) => {
    const existingUser = await usersData.getUserByEmail(user.email)
    if (existingUser) throw new Error('User already exists')
    return usersData.saveUser(user)
}

exports.deleteUser = (id) => {
    return usersData.deleteUser(id)
}