const usersData = require('../data/usersData')

exports.getUsers = () => {
    return usersData.getUsers();
}

exports.saveUser = (user) => {
    return usersData.saveUser(user)
}

exports.deleteUser = (id) => {
    return usersData.deleteUser(id)
}