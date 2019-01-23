import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
import { changeSearchParameter } from './actions'

class Filter extends Component {
  render() {
    const { parameters, changeSearchParameter } = this.props

    const handleChange = parameter => event => {
      changeSearchParameter(parameter, event.target.value)
    }

    return (
      <div className="dc-card filter-block">
        <label className="dc-label">State</label>
        <input
          className="dc-input dc-input--in-input-group"
          type="text"
          value={parameters.state}
          placeholder="AL"
          onChange={handleChange('state')}
        />

        <label className="dc-label">Total Discharges</label>
        <div className="dc-input-group">
          <span className="dc-input-addon">From</span>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.min_total_discharges}
            placeholder="0"
            onChange={handleChange('min_total_discharges')}
          />
          <span className="dc-input-addon">To</span>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.max_total_discharges}
            placeholder="999"
            onChange={handleChange('max_total_discharges')}
          />
        </div>

        <label className="dc-label">Average Covered Charges</label>
        <div className="dc-input-group">
          <span className="dc-input-addon">From</span>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.min_average_covered_charges}
            placeholder="$0.00"
            onChange={handleChange('min_average_covered_charges')}
          />
          <span className="dc-input-addon">To</span>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.max_average_covered_charges}
            placeholder="$9,999,999.99"
            onChange={handleChange('max_average_covered_charges')}
          />
        </div>

        <label className="dc-label">Average Medicare Payments</label>
        <div className="dc-input-group">
          <span className="dc-input-addon">From</span>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.min_average_medicare_payments}
            placeholder="$0.00"
            onChange={handleChange('min_average_medicare_payments')}
          />
          <span className="dc-input-addon">To</span>
          <input
            className="dc-input dc-input--in-input-group"
            type="text"
            value={parameters.max_average_medicare_payments}
            placeholder="$9,999,999.99"
            onChange={handleChange('max_average_medicare_payments')}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ parameters: state.filter.parameters })
const mapDispatchToProps = { changeSearchParameter }
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
