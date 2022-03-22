const database = require('../infra/database')

exports.getUsers = () => {
    return database.query('select * from users')
}