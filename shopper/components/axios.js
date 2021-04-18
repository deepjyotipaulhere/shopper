import axios from 'axios'

const shopperAxios = axios.create({
    baseURL: __DEV__ ? 'http://192.168.0.106:5000/' : ''
})

export default shopperAxios