const connectionString = 'postgres://postgres:1234@localhost:5432/he4rtbackend'

const pgp = require('pg-promise')()
const db = pgp({connectionString: process.env.DATABASE_URL || connectionString})

module.exports = db