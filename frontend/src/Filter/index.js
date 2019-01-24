import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
import { search } from './actions'
import MinMaxInput from './MinMaxInput'

class Filter extends Component {
  render() {
    const { parameters, search } = this.props

    const handleChange = parameter => event => {
      search(parameter, event.target.value)
    }

    return (
      <div className="dc-card filter-block">
        <div>
          <label className="dc-label">State</label>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.state}
            placeholder="AL"
            onChange={handleChange('state')}
          />
        </div>
        <MinMaxInput
          label="Total Discharges"
          min={{
            value: parameters.min_total_discharges,
            placeholder: 0,
            onChange: handleChange('min_total_discharges')
          }}
          max={{
            value: parameters.max_total_discharges,
            placeholder: 9999,
            onChange: handleChange('max_total_discharges')
          }}
        />
        <MinMaxInput
          label="Average Covered Charges"
          min={{
            value: parameters.min_average_covered_charges,
            placeholder: '$0.00',
            onChange: handleChange('min_average_covered_charges')
          }}
          max={{
            value: parameters.max_average_covered_charges,
            placeholder: '$9,999,999.99',
            onChange: handleChange('max_average_covered_charges')
          }}
        />
        <MinMaxInput
          label="Average Medicare Payments"
          min={{
            value: parameters.min_average_medicare_payments,
            placeholder: '$0.00',
            onChange: handleChange('min_average_medicare_payments')
          }}
          max={{
            value: parameters.max_average_medicare_payments,
            placeholder: '$9,999,999.99',
            onChange: handleChange('max_average_medicare_payments')
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ parameters: state.filter.parameters })
const mapDispatchToProps = { search }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
