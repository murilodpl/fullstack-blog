import axios from "axios"

const api = axios.create({
    baseURL: window.location.host,
    validateStatus: false,
})

export default api;