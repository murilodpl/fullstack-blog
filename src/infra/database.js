const pgp = require('pg-promise')()
// const db = pgp({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'he4rtbackend',
//     password: '1234',
//     port: 5432,
// })
const db = pgp({
    user: 'qjkobsstlwdegy',
    host: 'ec2-18-215-96-22.compute-1.amazonaws.com',
    database: 'dbbs71dkq024ab',
    password: 'd5d6622ffe477113576cd6dede0d0bde272865c24cc41d769eb5853d69da232c',
    port: 5432,
})

module.exports = db