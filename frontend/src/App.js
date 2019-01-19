import React, { Component } from 'react'
import 'dress-code/dist/css/dress-code.min.css'
import './App.css'

const Menu = () => {
  return <div className="dc-card">Menu</div>
}

const Providers = ({ items }) => {
  return (
    <div>
      {items.map(provider => (
        <Provider key={`provider-${provider.id}`} {...provider} />
      ))}
    </div>
  )
}

const Provider = ({ id }) => {
  return <div className="dc-card">Item {id}</div>
}

const providers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

class App extends Component {
  render() {
    return (
      <div className="dc-page">
        <div className="dc-container">
          <Menu />
          <Providers items={providers} />
        </div>
      </div>
    )
  }
}

export default App
