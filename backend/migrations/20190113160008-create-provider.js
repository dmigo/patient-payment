'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Providers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drgDefinition: {
        type: Sequelize.STRING
      },
      providerId: {
        type: Sequelize.STRING
      },
      providerName: {
        type: Sequelize.STRING
      },
      providerStreetAddress: {
        type: Sequelize.STRING
      },
      providerCity: {
        type: Sequelize.STRING
      },
      providerState: {
        type: Sequelize.STRING
      },
      providerZipCode: {
        type: Sequelize.STRING
      },
      hospitalReferralRegionDescription: {
        type: Sequelize.STRING
      },
      totalDischarges: {
        type: Sequelize.INTEGER
      },
      averageCoveredCharges: {
        type: Sequelize.DECIMAL
      },
      averageTotalPayments: {
        type: Sequelize.DECIMAL
      },
      averageMedicarePayments: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Providers')
  }
}
