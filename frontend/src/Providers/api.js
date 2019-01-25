import axios from 'axios'

const baseUri = ''

const toUIObjects = item => {
  return {
    name: item['Provider Name'],
    address: item['Provider Street Address'],
    city: item['Provider City'],
    state: item['Provider State'],
    zip: item['Provider Zip Code'],
    hospitalReferralRegionDescription:
      item['Hospital Referral Region Description'],
    totalDischarges: item['Total Discharges'],
    averageCoveredCharges: item['Average Covered Charges'],
    averageTotalPayments: item['Average Total Payments'],
    averageMedicarePayments: item['Average Medicare Payments']
  }
}

export default {
  find: parameters =>
    axios
      .get(`${baseUri}/providers`, {
        params: parameters
      })
      .then(response => response.data.map(toUIObjects))
      .catch(error => {
        throw error.response.data
          ? error.response.data
          : { type: 'Error', message: error.message }
      })
}
