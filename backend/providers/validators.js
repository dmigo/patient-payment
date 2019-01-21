const joi = require('joi')

const joiMoney = joi
  .number()
  .precision(2)
  .min(0)

const states = [
  'AK',
  'AL',
  'AR',
  'AS',
  'AZ',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'GA',
  'GU',
  'HI',
  'IA',
  'ID',
  'IL',
  'IN',
  'KS',
  'KY',
  'LA',
  'MA',
  'MD',
  'ME',
  'MI',
  'MN',
  'MO',
  'MS',
  'MT',
  'NC',
  'ND',
  'NE',
  'NH',
  'NJ',
  'NM',
  'NV',
  'NY',
  'OH',
  'OK',
  'OR',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VA',
  'VI',
  'VT',
  'WA',
  'WI',
  'WV',
  'WY'
]

const joiState = joi
  .string()
  .uppercase()
  .valid(states)

const schema = joi.object().keys({
  max_total_discharges: joi.number().min(0),
  min_total_discharges: joiMoney,
  max_average_covered_charges: joiMoney,
  min_average_covered_charges: joiMoney,
  max_average_medicare_payments: joiMoney,
  min_average_medicare_payments: joiMoney,
  state: joiState,
  offset: joi.number().min(0),
  limit: joi.number().positive()
})

const isString = x => Object.prototype.toString.call(x) === '[object String]'
const stripMoney = money => {
  if (isString(money)) {
    let mapped = money
    if (mapped[0] === '$') mapped = mapped.substr(1)
    return mapped.replace(/,/g, '')
  } else return money
}

const validateParameters = parameters => {
  const mapped = {
    ...parameters
  }

  if (mapped.min_total_discharges)
    mapped.min_total_discharges = stripMoney(mapped.min_total_discharges)

  if (mapped.max_total_discharges)
    mapped.max_total_discharges = stripMoney(mapped.max_total_discharges)

  if (mapped.min_average_covered_charges)
    mapped.min_average_covered_charges = stripMoney(
      mapped.min_average_covered_charges
    )

  if (mapped.max_average_covered_charges)
    mapped.max_average_covered_charges = stripMoney(
      mapped.max_average_covered_charges
    )

  if (mapped.min_average_medicare_payments)
    mapped.min_average_medicare_payments = stripMoney(
      mapped.min_average_medicare_payments
    )

  if (mapped.max_average_medicare_payments)
    mapped.max_average_medicare_payments = stripMoney(
      mapped.max_average_medicare_payments
    )

  return schema.validate(mapped)
}

module.exports = {
  validateParameters,
  validateState: state => joiState.validate(state),
  validateMoney: money => joiMoney.validate(stripMoney(money))
}
