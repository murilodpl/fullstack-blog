const postsData = require('../data/postsData')

exports.getPosts = () => {
    return postsData.getPosts();
}

exports.getPostsByAuthor = (author) => {
    return postsData.getPostsByAuthor(author);
}

exports.registerPost = async (post) => {
    const existingPost = await postsData.getPostByTitle(post.title)
    if (existingPost) throw new Error("Already exists")
    return postsData.registerPost(post)
}

exports.deletePost = async (id) => {
    const existingPost = await postsData.getPostById(id)
    if (!existingPost) throw new Error("Not found")
    return postsData.deletePost(id)
}