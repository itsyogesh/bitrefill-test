import { GET_USER_PHONE_NUMBERS } from '../constants'
import API from '../../api'

const getPhoneNumbers = () => {
  return {
    type: GET_USER_PHONE_NUMBERS,
    promise: API.getUserPhoneNumbers()
  }
}

export default getPhoneNumbers
