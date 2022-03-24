const pgp = require('pg-promise')()
const db = pgp({
    user: 'postgres',
    host: 'localhost',
    database: 'he4rtbackend',
    password: '1234',
    port: 5432,
})

module.exports = db