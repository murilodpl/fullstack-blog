const database = require('../infra/database')

exports.getPosts = () => {
    return database.query('select * from posts')
}

exports.registerPost = (post) => {
    return database.one('insert into posts (title, content) values ($1, $2) returning *', [post.title, post.content])
}

exports.deletePost = (id) => {
    return database.none('delete from posts where id = $1', [id])
}

exports.getPostByTitle = (title) => {
    return database.oneOrNone('select * from posts where title = $1', [title])
}

exports.getPostById = (id) => {
    return database.oneOrNone('select * from posts where id = $1', [id])
}