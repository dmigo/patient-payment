const { sequelize, Sequelize } = require('../db/models')
const ProviderModel = require('../db/models/provider')(sequelize, Sequelize)
const { validateParameters } = require('./validators')
const { presentProviders } = require('./presenters')
const { QueryParametersValidationError } = require('../errors')

const buildMinMaxWhereClause = (min, max) => {
  const clauses = []

  if (min) clauses.push({ [Sequelize.Op.gte]: min })
  if (max) clauses.push({ [Sequelize.Op.lte]: max })

  return { [Sequelize.Op.and]: clauses }
}

const buildWhereClause = parameters => {
  const {
    max_total_discharges,
    min_total_discharges,
    max_average_covered_charges,
    min_average_covered_charges,
    max_average_medicare_payments,
    min_average_medicare_payments,
    state
  } = parameters

  const where = {}

  if (state) where.providerState = { [Sequelize.Op.eq]: state }

  if (min_total_discharges || max_total_discharges)
    where.totalDischarges = buildMinMaxWhereClause(
      min_total_discharges,
      max_total_discharges
    )

  if (min_average_covered_charges || max_average_covered_charges)
    where.averageCoveredCharges = buildMinMaxWhereClause(
      min_average_covered_charges,
      max_average_covered_charges
    )

  if (min_average_medicare_payments || max_average_medicare_payments)
    where.averageMedicarePayments = buildMinMaxWhereClause(
      min_average_medicare_payments,
      max_average_medicare_payments
    )

  return where
}

module.exports = {
  find: parameters => {
    const { error, value: validParameters } = validateParameters(parameters)
    if (error)
      throw new QueryParametersValidationError(
        error.details.map(error => error.message)
      )

    return ProviderModel.findAll({
      where: buildWhereClause(validParameters),
      offset: validParameters.offset,
      limit: validParameters.limit
    }).then(presentProviders)
  }
}
