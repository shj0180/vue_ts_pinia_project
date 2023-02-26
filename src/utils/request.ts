import axios from 'axios'


//     baseURL: import.meta.env.VITE_API_URL
const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
    // baseURL: import.meta.env.VITE_HOST
})

// console.log(request);

export default request







