import axios from 'axios'
import history from './history'
import store from '@/store'
import { logout } from '@/store/reducer/authSlice'

let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:1337/api/'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://localhost:1337/api/'
}
console.log('NODE_ENV', process.env.NODE_ENV)

const RESTService = axios.create({
  baseURL,
  timeout: 3000
})

RESTService.interceptors.request.use(config => {
  const token = store.getState().auth.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, error => {
  return Promise.reject(error)
})

RESTService.interceptors.response.use(response => {
  return response
}, error => {
  const status = error.response?.status
  if (status === 401 || status === 403) {
    // component 外使用路由跳转需要引入history
    // history.replace('/login')
    store.dispatch(logout())
  }

  return Promise.reject(error)
})

export default RESTService
