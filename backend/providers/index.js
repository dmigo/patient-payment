const { sequelize, Sequelize } = require('./models')
const ProviderModel = require('./db/models/provider')(sequelize, Sequelize)

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
const formatCurrency = currencyFormatter.format

const mapToUI = providers =>
  providers.map(p => ({
    'Provider Name': p.providerName,
    'Provider Street Address': p.providerStreetAddress,
    'Provider City': p.providerCity,
    'Provider State': p.providerState,
    'Provider Zip Code': p.providerZipCode,
    'Hospital Referral Region Description': p.hospitalReferralRegionDescription,
    'Total Discharges': p.totalDischarges,
    'Average Covered Charges': formatCurrency(p.averageCoveredCharges),
    'Average Total Payments': formatCurrency(p.averageTotalPayments),
    'Average Medicare Payments': formatCurrency(p.averageMedicarePayments)
  }))

module.exports = {
  find: (state, limit) =>
    ProviderModel.findAll({
      where: {
        providerState: state
      },
      limit
    }).then(mapToUI)
}
