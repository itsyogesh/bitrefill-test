import { GET_ORDERS } from '../constants'
import API from '../../api'

const getOrders = () => {
  return {
    type: GET_ORDERS,
    promise: API.getOrders()
  }
}

export { getOrders }
