import { GET_USER_PHONE_NUMBERS } from '../constants'
import { handle } from 'redux-pack'

const initialState = {
  isLoading: false,
  phoneNumbers: [],
  errors: {}
}

const handlePhones = (payload) => ({
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
    phoneNumbers: [...payload.data.phone_numbers]
  }),
  failure: prevState => ({
    ...prevState,
    errors: { ...payload.data.errors }
  })
})

const auth = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USER_PHONE_NUMBERS:
      return handle(state, action, handlePhones(payload))

    default:
      return state
  }
}

export default auth
