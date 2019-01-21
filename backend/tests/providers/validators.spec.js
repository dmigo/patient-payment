const { expect } = require('chai')
const validators = require('../../providers/validators')

describe('validateMoney', () => {
  it("should strip heading '$' sign", () => {
    let result = validators.validateMoney('$3211233.23').value
    expect(result).to.be.equal(3211233.23)
  })
  it('should strip all commas', () => {
    let result = validators.validateMoney('3,211,233.23').value
    expect(result).to.be.equal(3211233.23)
  })
  it('should digest USD currency format', () => {
    let result = validators.validateMoney('$3,211,233.23').value
    expect(result).to.be.equal(3211233.23)
  })
  it('should digest decimal format', () => {
    let result = validators.validateMoney('3211233.23').value
    expect(result).to.be.equal(3211233.23)
  })
  it('works with 0', () => {
    let result = validators.validateMoney('0').value
    expect(result).to.be.equal(0)
  })
})

describe('state', () => {
  it('returns no errors for valid states', () => {
    const result = validators.validateState('AL')
    expect(result.value).to.be.equal('AL')
    expect(result.error).to.be.null
  })
  it('is case insensitive', () => {
    const result = validators.validateState('ca')
    expect(result.error).to.be.null
  })
  it('returns upper case for the lower case values', () => {
    const result = validators.validateState('ca')
    expect(result.value).to.be.equal('CA')
  })
  it('returns errors for non valid states', () => {
    let result = validators.validateState('al1')
    expect(result).to.have.property('error')
    expect(result.error).to.be.not.null

    result = validators.validateState('be')
    expect(result).to.have.property('error')
    expect(result.error).to.be.not.null

    result = validators.validateState('ka')
    expect(result).to.have.property('error')
    expect(result.error).to.be.not.null

    result = validators.validateState('KA')
    expect(result).to.have.property('error')
    expect(result.error).to.be.not.null
  })
})

describe('validateParameters', () => {
  it('empty object is valid', () => {
    const result = validators.validateParameters({})
    expect(result.error).to.be.null
  })
  it("doesn't add parameters", () => {
    const result = validators.validateParameters({})
    expect(result.value).to.be.empty
  })
  describe('offset', () => {
    it('allows positive', () => {
      const parameters = { offset: 102 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.null
      expect(result.value.offset).to.be.equal(parameters.offset)
    })
    it('allows 0', () => {
      const parameters = { offset: 0 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.null
      expect(result.value.offset).to.be.equal(parameters.offset)
    })
    it("doesn't allow negative", () => {
      const parameters = { offset: -1 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.not.null
    })
  })
  describe('total_discharges', () => {
    it('allows positive', () => {
      const parameters = { max_total_discharges: 102, min_total_discharges: 29 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.null
      expect(result.value.max_total_discharges).to.be.equal(
        parameters.max_total_discharges
      )
      expect(result.value.min_total_discharges).to.be.equal(
        parameters.min_total_discharges
      )
    })
    it('allows 0', () => {
      const parameters = { max_total_discharges: 0, min_total_discharges: 0 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.null
      expect(result.value.max_total_discharges).to.be.equal(
        parameters.max_total_discharges
      )
      expect(result.value.min_total_discharges).to.be.equal(
        parameters.min_total_discharges
      )
    })
    it("doesn't allow negative", () => {
      let result = validators.validateParameters({ max_total_discharges: -1 })
      expect(result.error).to.be.not.null

      result = validators.validateParameters({ min_total_discharges: -1 })
      expect(result.error).to.be.not.null
    })
  })
  describe('limit', () => {
    it('allows positive', () => {
      const parameters = { limit: 133 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.null
      expect(result.value.limit).to.be.equal(parameters.limit)
    })
    it("doesn't allow negative", () => {
      const parameters = { limit: -1 }
      const result = validators.validateParameters(parameters)
      expect(result.error).to.be.not.null
    })
  })
  it('is able to validate example', () => {
    const parameters = {
      max_total_discharges: '10',
      min_total_discharges: '0',
      max_average_covered_charges: 9000,
      min_average_covered_charges: '288.191',
      max_average_medicare_payments: '$45,743,243.2',
      min_average_medicare_payments: '$0.00',
      state: 'CT',
      offset: 0,
      limit: 10
    }
    const { error, value } = validators.validateParameters(parameters)
    expect(error).to.be.null
    expect(value.max_total_discharges).to.be.equal(10)
    expect(value.min_total_discharges).to.be.equal(0)
    expect(value.max_average_covered_charges).to.be.equal(9000)
    expect(value.min_average_covered_charges).to.be.equal(288.19)
    expect(value.max_average_medicare_payments).to.be.equal(45743243.2)
    expect(value.min_average_medicare_payments).to.be.equal(0)
    expect(value.state).to.be.equal('CT')
    expect(value.offset).to.be.equal(0)
    expect(value.limit).to.be.equal(10)
  })
  it("doesn't throw for an empty object", () => {
    const { error } = validators.validateParameters({})
    expect(error).to.be.null
  })
})
