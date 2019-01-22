import React, { Component } from 'react'
import 'dress-code/dist/css/dress-code.min.css'
import './App.css'
import Providers from '../Providers'
import Menu from '../Menu'

function App() {
  return (
    <div className="dc-page">
      <div className="dc-container">
        <Menu />
        <Providers />
      </div>
    </div>
  )
}

export default App
