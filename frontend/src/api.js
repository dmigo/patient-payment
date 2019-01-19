import axios from 'axios'

const mock = [
  {
    'Provider Name': 'SOUTHEAST ALABAMA MEDICAL CENTER',
    'Provider Street Address': '1108 ROSS CLARK CIRCLE',
    'Provider City': 'DOTHAN',
    'Provider State': 'AL',
    'Provider Zip Code': '36301',
    'Hospital Referral Region Description': 'AL - Dothan',
    'Total Discharges': 91,
    'Average Covered Charges': '$32,963.07',
    'Average Total Payments': '$5,777.24',
    'Average Medicare Payments': '$4,763.73'
  },
  {
    'Provider Name': 'MARSHALL MEDICAL CENTER SOUTH',
    'Provider Street Address': '2505 U S HIGHWAY 431 NORTH',
    'Provider City': 'BOAZ',
    'Provider State': 'AL',
    'Provider Zip Code': '35957',
    'Hospital Referral Region Description': 'AL - Birmingham',
    'Total Discharges': 14,
    'Average Covered Charges': '$32,963.07',
    'Average Total Payments': '$5,777.24',
    'Average Medicare Payments': '$4,763.73'
  }
]

const toUIObjects = item => {
  return {
    name: item['Provider Name'],
    address: item['Provider Street Address'],
    city: item['Provider City'],
    state: item['Provider State'],
    zip: item['Provider Zip Code'],
    hospitalReferralRegionDescription: item['Hospital Referral Region Description'],
    totalDischarges: item['Total Discharges'],
    averageCoveredCharges: item['Average Covered Charges'],
    averageTotalPayments: item['Average Total Payments'],
    averageMedicarePayments: item['Average Medicare Payments']
  }
}

export default {
  providrs: {
    find: () => [...mock, ...mock].map(toUIObjects)
  }
}
