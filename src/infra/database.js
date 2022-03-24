const connectionString = 'postgres://postgres:1234@localhost:5432/he4rtbackend'

const pgp = require('pg-promise')()
const db = pgp({connectionString: 'postgres://qjkobsstlwdegy:d5d6622ffe477113576cd6dede0d0bde272865c24cc41d769eb5853d69da232c@ec2-18-215-96-22.compute-1.amazonaws.com:5432/dbbs71dkq024ab' || connectionString})

module.exports = db