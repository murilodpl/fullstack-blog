import axios from "axios"

const api = axios.create({
    baseURL: 'https://murilo-fullstack-blog.herokuapp.com/',
    validateStatus: false,
})

export default api;