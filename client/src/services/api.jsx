import axios from "axios"

const api = axios.create({
    baseURL: 'https://he4rtlabs-challenges-03.herokuapp.com/',
    validateStatus: false,
})

export default api;