const database = require('../infra/database')

exports.getUsers = () => {
    return database.query('select * from users')
}

exports.getUserByEmail = (email) => {
    return database.oneOrNone('select * from users where email = $1', [email])
}

exports.loginUserCheck = (user) => {
    return database.oneOrNone('select * from users where email = $1 and password = $2', [user.email, user.password])
}

exports.loginUser = (user) => {
    return database.query('select * from users where email = $1 and password = $2', [user.email, user.password])
}

exports.saveUser = (user) => {
    return database.one('insert into users (email, password) values ($1, $2) returning *', [user.email, user.password])
}

exports.deleteUser = (id) => {
    return database.none('delete from users where id = $1', [id])
}