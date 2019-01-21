const moneyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
const presentMoney = moneyFormat.format

const presentProviders = providers =>
  providers.map(p => ({
    'Provider Name': p.providerName,
    'Provider Street Address': p.providerStreetAddress,
    'Provider City': p.providerCity,
    'Provider State': p.providerState,
    'Provider Zip Code': p.providerZipCode,
    'Hospital Referral Region Description': p.hospitalReferralRegionDescription,
    'Total Discharges': p.totalDischarges,
    'Average Covered Charges': presentMoney(p.averageCoveredCharges),
    'Average Total Payments': presentMoney(p.averageTotalPayments),
    'Average Medicare Payments': presentMoney(p.averageMedicarePayments)
  }))

module.exports = {
  presentMoney,
  presentProviders
}
