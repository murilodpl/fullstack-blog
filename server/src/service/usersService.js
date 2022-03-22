const usersData = require('../data/usersData')

exports.getUsers = () => {
    return usersData.getUsers();
}