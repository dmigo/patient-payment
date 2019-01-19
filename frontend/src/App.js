import React, { Component } from 'react'
import 'dress-code/dist/css/dress-code.min.css'
import './App.css'

import api from './api'

const Menu = () => {
  return <div className="dc-card">Menu</div>
}

const Providers = ({ items }) => {
  return (
    <div>
      {items.map((provider, index) => (
        <Provider key={`provider-${index}`} {...provider} />
      ))}
    </div>
  )
}

const Provider = ({
  name,
  address,
  city,
  state,
  zip,
  hospitalReferralRegionDescription,
  totalDischarges,
  averageCoveredCharges,
  averageTotalPayments,
  averageMedicarePayments
}) => (
  <div className="dc-card">
    <Field label="Provider Name" value={name} />
    <Field label="Provider Street Address" value={address} />
    <Field label="Provider City" value={city} />
    <Field label="Provider State" value={state} />
    <Field label="Provider Zip Code" value={zip} />
    <Field
      label="Hospital Referral Region Description"
      value={hospitalReferralRegionDescription}
    />
    <Field label="Total Discharges" value={totalDischarges} />
    <Field label="Average Covered Charges" value={averageCoveredCharges} />
    <Field label="Average Total Payments" value={averageTotalPayments} />
    <Field label="Average Medicare Payments" value={averageMedicarePayments} />
  </div>
)

const Field = ({ label, value }) => (
  <div className="inline-edit dc-row">
    <div className="dc-column dc-column--medium-2">{label}</div>
    <div className="dc-column dc-column--medium-9">{value}</div>
  </div>
)

class App extends Component {
  render() {
    const providers = api.providrs.find()
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
