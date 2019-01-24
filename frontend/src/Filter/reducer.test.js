import reducer from './reducer'
import { changeSearchParameter } from './actions'
import { expect } from 'chai'

describe('initializes', () => {
  it('returns empty parameters', () => {
    const result = reducer(undefined, {})
    expect(result.parameters).to.be.empty
  })
})

describe('changeSearchParameter', () => {
  it('changes provided parameter', () => {
    const action = changeSearchParameter({ name: 'abc', value: 321 })

    const result = reducer({ name: 'abc', value: 0 }, action)

    expect(result.parameters).to.have.property('abc', 321)
  })

  describe('has an empty parameter', () => {
    it("empty string parameter isn't there anymore", () => {
      const action = changeSearchParameter({ name: 'abc', value: '' })

      const result = reducer({ name: 'abc', value: 0 }, action)

      expect(result.parameters).to.not.have.property('abc')
    })
    it("null parameter isn't there anymore", () => {
      const action = changeSearchParameter({ name: 'abc', value: null })

      const result = reducer({ name: 'abc', value: 0 }, action)

      expect(result.parameters).to.not.have.property('abc')
    })
    it("undefined parameter isn't there anymore", () => {
      const action = changeSearchParameter({ name: 'abc', value: undefined })

      const result = reducer({ name: 'abc', value: 0 }, action)

      expect(result.parameters).to.not.have.property('abc')
    })
  })
})
