import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bobs-burger-builder.firebaseio.com/'
})

export default instance