import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import orders from './orders'
import phones from './phones'
import notifications from './notifications'
import subscriptions from './subscriptions'

const App = combineReducers({
  form: formReducer,
  auth,
  notifications,
  orders,
  phones,
  subscriptions
})

export default App
