import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)
