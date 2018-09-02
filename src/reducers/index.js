import fetch from './fetch';
import loggedIn from './loggedIn';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  fetch, loggedIn
})

export default rootReducer;