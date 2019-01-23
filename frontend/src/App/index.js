import React from 'react'
import 'dress-code/dist/css/dress-code.min.css'
import './index.css'
import Providers from '../Providers'
import Filter from '../Filter'

function App() {
  return (
    <div className="dc-page">
      <div className="dc-container">
        <Filter />
        <Providers />
      </div>
    </div>
  )
}

export default App
