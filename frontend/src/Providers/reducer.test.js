import reducer from './reducer'
import {
  getProvidersRequest,
  getProvidersSuccess,
  getProvidersFailure,
  loadMoreProvidersRequest,
  loadMoreProvidersSuccess,
  loadMoreProvidersFailure
} from './actions'

import { expect } from 'chai'

describe('initializes', () => {
  const result = reducer(undefined, {})
  it('providers are empty', () => {
    expect(result.providers).to.be.empty
  })
  it('limit is 0', () => {
    expect(result.limit).to.be.equal(0)
  })
  it('offset is 0', () => {
    expect(result.offset).to.be.equal(0)
  })
  it('is not loading', () => {
    expect(result.loading).to.be.false
  })
  it('has no errors', () => {
    expect(result.error).to.be.null
  })
})

describe('getProvidersRequest', () => {
  const action = getProvidersRequest()
  const result = reducer(undefined, action)
  it('providers are empty', () => {
    expect(result.providers).to.be.empty
  })
  it('limit is 0', () => {
    expect(result.limit).to.be.equal(0)
  })
  it('offset is 0', () => {
    expect(result.offset).to.be.equal(0)
  })
  it('is loading', () => {
    expect(result.loading).to.be.true
  })
  it('has no errors', () => {
    expect(result.error).to.be.null
  })
})

describe('loadMoreProvidersRequest', () => {
  const action = loadMoreProvidersRequest()
  const result = reducer(undefined, action)
  it('is loading', () => {
    expect(result.loading).to.be.true
  })
})

describe('getProvidersSuccess', () => {
  const payload = { providers: [{}, {}], limit: 2, offset: 0 }
  const state = {
    providers: [],
    limit: 0,
    offset: 0,
    error: null,
    loading: true
  }
  const action = getProvidersSuccess(payload)
  const result = reducer(state, action)
  it('providers are set', () => {
    expect(result.providers).to.have.length(payload.providers.length)
  })
  it('limit is 2', () => {
    expect(result.limit).to.be.equal(payload.limit)
  })
  it('offset is 0', () => {
    expect(result.offset).to.be.equal(payload.offset)
  })
  it('is not loading', () => {
    expect(result.loading).to.be.false
  })
  it('has no errors', () => {
    expect(result.error).to.be.null
  })
})

describe('loadMoreProvidersSuccess', () => {
  const payload = { providers: [{}, {}], limit: 2, offset: 4 }
  const state = {
    providers: [{}, {}, {}, {}],
    limit: 2,
    offset: 2,
    error: null,
    loading: true
  }
  const action = loadMoreProvidersSuccess(payload)
  const result = reducer(state, action)

  it('providers expand', () => {
    expect(result.providers).to.have.length(6)
  })
  it('updates limit', () => {
    expect(result.limit).to.be.equal(payload.limit)
  })
  it('updates offset', () => {
    expect(result.offset).to.be.equal(payload.offset)
  })
  it('is not loading', () => {
    expect(result.loading).to.be.false
  })
  it('has no errors', () => {
    expect(result.error).to.be.null
  })
})

describe('getProvidersFailure', () => {
  const payload = 'error message'
  const state = {
    providers: [],
    limit: 10,
    offset: 10,
    error: null,
    loading: true
  }
  const action = getProvidersFailure(payload)
  const result = reducer(state, action)

  it('providers stay', () => {
    expect(result.providers).to.be.equal(state.providers)
  })
  it('limit stays', () => {
    expect(result.limit).to.be.equal(state.limit)
  })
  it('offset stays', () => {
    expect(result.offset).to.be.equal(state.offset)
  })
  it('is not loading', () => {
    expect(result.loading).to.be.false
  })
  it('has no errors', () => {
    expect(result.error).to.be.equal(payload)
  })
})

describe('loadMoreProvidersFailure', () => {
  const payload = 'error message'
  const state = {
    providers: [],
    limit: 10,
    offset: 10,
    error: null,
    loading: true
  }
  const action = loadMoreProvidersFailure(payload)
  const result = reducer(state, action)

  it('providers stay', () => {
    expect(result.providers).to.be.equal(state.providers)
  })
  it('limit stays', () => {
    expect(result.limit).to.be.equal(state.limit)
  })
  it('offset stays', () => {
    expect(result.offset).to.be.equal(state.offset)
  })
  it('is not loading', () => {
    expect(result.loading).to.be.false
  })
  it('has no errors', () => {
    expect(result.error).to.be.equal(payload)
  })
})
