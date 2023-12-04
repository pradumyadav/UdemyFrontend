import axios from 'axios'

const instance = axios.create({
    baseURL:'https://udemy-backend-t47s.onrender.com'
})

export default instance