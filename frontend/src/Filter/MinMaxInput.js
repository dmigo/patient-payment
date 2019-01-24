import React from 'react'
import MediaQuery from 'react-responsive'

const MinMaxInput = ({ label, min, max }) => {
  const minLabel = <span className="dc-input-addon">From</span>
  const minInput = (
    <input
      className="dc-input dc-input--in-input-group"
      type="text"
      value={min.value}
      placeholder={min.placeholder}
      onChange={min.onChange}
    />
  )
  const maxLabel = <span className="dc-input-addon">To</span>
  const maxInput = (
    <input
      className="dc-input dc-input--in-input-group"
      type="text"
      value={max.value}
      placeholder={max.placeholder}
      onChange={max.onChange}
    />
  )

  return (
    <div>
      <label className="dc-label">{label}</label>
      <MediaQuery minWidth={450}>
        <div className="dc-input-group">
          {minLabel}
          {minInput}
          {maxLabel}
          {maxInput}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={450}>
        <div className="dc-input-group">
          {minLabel}
          {minInput}
        </div>
        <div className="dc-input-group">
          {maxLabel}
          {maxInput}
        </div>
      </MediaQuery>
    </div>
  )
}

export default MinMaxInput
