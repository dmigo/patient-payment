import React from 'react'
import '.'

const Error = ({ error }) => {
  return (
    <div className="dc-card error-card">
      <div className="dc-msg dc-msg--error">
        <div className="dc-msg__inner">
          <div className="dc-msg__icon-frame">
            <i className="dc-icon dc-msg__icon dc-icon--error" />
          </div>

          <div className="dc-msg__bd">
            <h1 className="dc-msg__title">Error message</h1>
            <p className="dc-msg__text">Error: {error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
