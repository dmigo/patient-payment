import { combineReducers } from 'redux'

import providers from './Providers/reducer'
import filter from './Filter/reducer'

export default combineReducers({ providers, filter })
