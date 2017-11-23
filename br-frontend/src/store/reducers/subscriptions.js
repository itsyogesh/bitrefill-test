import { handle } from 'redux-pack'

import { GET_SUBSCRIPTIONS } from '../constants'

const initialState = {
  isLoading: false,
  subscriptionList: {},
  errors: {}
}

const normaliseSubscriptions = (prevSubscriptions, newSubscriptions) => {
  const subscriptions = {...prevSubscriptions}
  if (Array.isArray(newSubscriptions)) {
    newSubscriptions.forEach(subscription => {
      subscriptions[subscription.id] = subscription
    })
  }
  return subscriptions
}

const handleSubscriptions = (payload) => ({
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
    subscriptionList: normaliseSubscriptions(prevState.subscriptions, payload.data.subscriptions)
  }),
  failure: prevState => ({
    ...prevState,
    errors: { ...payload.data.errors }
  })
})

const subscriptions = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_SUBSCRIPTIONS:
      return handle(state, action, handleSubscriptions(payload))

    default:
      return state
  }
}

export default subscriptions
