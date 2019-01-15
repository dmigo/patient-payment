var { expect } = require('chai')
const Provider = require('../models/provider.mock.js')
const providersService = require('../../services/providers')(Provider)

describe('providers', () => {
  describe('find', () => {
    it('should do smth', async () => {
      const result = await providersService.find('AL')
      expect(result.length).to.equal(1)
    })
    it('should do smth else', async () => {
      const result = await providersService.find('NY')
      expect(result.length).to.equal(0)
    })
  })
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1)
    })
  })
})
