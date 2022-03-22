// PostgreSQL connection
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'he4rtbackend',
    password: '1234',
    port: 5432,
})

// Queries
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { email, password } = request.body

    pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
        if (error) {
            response.status(400).send(error)
        }
        response.status(201).send({ res: 'User added with success!' })
    })
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send({ res: `User deleted with ID: ${id}` })
    })
}

// Export
module.exports = {
    getUsers,
    createUser,
    deleteUser,
}
