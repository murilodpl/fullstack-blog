const database = require('../infra/database')

exports.getUsers = () => {
    return database.query('select * from users')
}

exports.saveUser = (user) => {
    return database.one('insert into users (email, password) values ($1, $2) returning *', [user.email, user.password])
}

exports.deleteUser = (id) => {
    return database.none('delete from users where id = $1', [id])
}