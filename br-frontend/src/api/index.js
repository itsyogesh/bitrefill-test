import axios from 'axios'

class API {
  constructor () {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/api'
    })
  }
  setAuthHeader (token) {
    this.axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  }
  removeAuthHeader () {
    delete this.axios.defaults.headers.common['Authorization']
  }
  signup (userDetails) {
    return this.axios.post('/signup', userDetails)
  }
  login (userDetails) {
    return this.axios.post('/login', userDetails)
  }
  getOrders (query) {
    return this.axios.get('/orders', query)
  }
  createOrder (order) {
    return this.axios.post('/orders', order)
  }
  getSubscriptions () {
    return this.axios.get('/subscriptions')
  }
  createSubscription (subscription) {
    return this.axios.post('/subscriptions', subscription)
  }
  getUserPhoneNumbers () {
    return this.axios.get('/phone-numbers')
  }
}

export default new API()
