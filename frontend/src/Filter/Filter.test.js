import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom'
import Filter from '.'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore({ filter: { parameters: {} }, providers: {} })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <StoreProvider store={store}>
      <Filter parameters={{}} />
    </StoreProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
