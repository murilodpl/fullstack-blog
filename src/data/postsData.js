const database = require('../infra/database')

exports.getPosts = () => {
    return database.query('select * from posts')
}

exports.getPostsByAuthor = (author) => {
    return database.query('select * from posts where author = $1', [author])
}

exports.registerPost = (post) => {
    return database.one('insert into posts (title, content, author) values ($1, $2, $3) returning *', [post.title, post.content, post.author])
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