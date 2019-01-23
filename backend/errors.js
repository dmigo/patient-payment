const Sequelize = require('sequelize')

class QueryParametersValidationError extends Error {
  constructor(errors = []) {
    super(errors.join('/n'))
    this.name = 'QueryParametersValidationError'
    this.errors = errors
  }
}

const handler = (err, req, res, next) => {
  if (err instanceof QueryParametersValidationError) {
    res.status(400).json({
      type: 'QueryParametersValidationError',
      errors: err.errors.map(message => ({ message }))
    })
  } else if (err instanceof Sequelize.ConnectionError) {
    console.log('Connection error ', err)
    res.status(503).json({
      type: 'ConnectionError',
      error: 'Database unavailable'
    })
  } else if (err instanceof Sequelize.DatabaseError) {
    console.log('Database error ', err)
    res.status(500).json({
      type: 'DatabaseError',
      error: 'Database related error'
    })
  } else {
    console.log('Unknown error ', err)
    res.status(500).json({
      type: 'UnhandledError',
      error: 'Unknown error'
    })
  }
}

module.exports = {
  errorHandler: handler,
  QueryParametersValidationError
}
