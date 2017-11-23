import { handle } from 'redux-pack'

import { GET_ORDERS } from '../constants'

const initialState = {
  isLoading: false,
  orderList: {},
  errors: {}
}

const normaliseOrders = (prevOrders, newOrders) => {
  const orders = {...prevOrders}
  if (Array.isArray(newOrders)) {
    newOrders.forEach(order => {
      orders[order.id] = order
    })
  }
  return orders
}

const handleOrders = (payload) => ({
  start: prevState => ({
    ...prevState,
    isLoading: true
  }),
  finish: prevState => ({
    ...prevState,
    isLoading: false
  }),
  success: prevState => ({
    ...prevState,
    orderList: normaliseOrders(prevState.orders, payload.data.orders)
  }),
  failure: prevState => ({
    ...prevState,
    errors: { ...payload.data.errors }
  })
})

const orders = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ORDERS:
      return handle(state, action, handleOrders(payload))

    default:
      return state
  }
}

export default orders
