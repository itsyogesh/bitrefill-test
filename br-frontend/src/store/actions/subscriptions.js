import { GET_SUBSCRIPTIONS } from '../constants'
import API from '../../api'

export const getSubscriptions = () => {
  return {
    type: GET_SUBSCRIPTIONS,
    promise: API.getSubscriptions()
  }
}
