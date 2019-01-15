'use strict'
module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define(
    'provider',
    {
      drgDefinition: DataTypes.STRING,
      providerId: DataTypes.STRING,
      providerName: DataTypes.STRING,
      providerStreetAddress: DataTypes.STRING,
      providerCity: DataTypes.STRING,
      providerState: DataTypes.STRING,
      providerZipCode: DataTypes.STRING,
      hospitalReferralRegionDescription: DataTypes.STRING,
      totalDischarges: DataTypes.INTEGER,
      averageCoveredCharges: DataTypes.DECIMAL,
      averageTotalPayments: DataTypes.DECIMAL,
      averageMedicarePayments: DataTypes.DECIMAL
    },
    {}
  )
  Provider.associate = function(models) {
    // associations can be defined here
  }
  return Provider
}
