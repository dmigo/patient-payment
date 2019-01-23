import { createAction } from 'redux-actions'
import providers from './api'
import { AMOUNT_OF_PROVIDERS_TO_LOAD } from '../constants'

export const GET_PROVIDERS_REQUEST = 'GET_PROVIDERS_REQUEST'
export const GET_PROVIDERS_SUCCESS = 'GET_PROVIDERS_SUCCESS'
export const GET_PROVIDERS_FAILURE = 'GET_PROVIDERS_FAILURE'

export const LOAD_MORE_PROVIDERS_REQUEST = 'LOAD_MORE_PROVIDERS_REQUEST'
export const LOAD_MORE_PROVIDERS_SUCCESS = 'LOAD_MORE_PROVIDERS_SUCCESS'
export const LOAD_MORE_PROVIDERS_FAILURE = 'LOAD_MORE_PROVIDERS_FAILURE'

export const getProviders = parameters => {
  return (dispatch, getState) => {
    const { filter } = getState()
    const parameters = {
      ...filter.parameters,
      limit: AMOUNT_OF_PROVIDERS_TO_LOAD,
      offset: 0
    }
    dispatch(getProvidersRequest())
    return providers
      .find(parameters)
      .then(result =>
        dispatch(
          getProvidersSuccess({
            limit: parameters.limit,
            offset: parameters.offset,
            providers: result
          })
        )
      )
      .catch(error => {
        dispatch(getProvidersFailure(error.message))
      })
  }
}

export const loadMoreProviders = amount => {
  return (dispatch, getState) => {
    const { limit, offset, loading, error } = getState().providers
    const { filter } = getState()

    if (loading || error) return

    const parameters = {
      ...filter.parameters,
      offset: offset + limit,
      limit: amount
    }

    dispatch(loadMoreProvidersRequest())
    return providers
      .find(parameters)
      .then(result =>
        dispatch(
          loadMoreProvidersSuccess({
            limit: parameters.limit,
            offset: parameters.offset,
            providers: result
          })
        )
      )
      .catch(error => {
        dispatch(loadMoreProvidersFailure(error.message))
      })
  }
}

const getProvidersRequest = createAction(GET_PROVIDERS_REQUEST)
const getProvidersSuccess = createAction(GET_PROVIDERS_SUCCESS)
const getProvidersFailure = createAction(GET_PROVIDERS_FAILURE)

const loadMoreProvidersRequest = createAction(LOAD_MORE_PROVIDERS_REQUEST)
const loadMoreProvidersSuccess = createAction(LOAD_MORE_PROVIDERS_SUCCESS)
const loadMoreProvidersFailure = createAction(LOAD_MORE_PROVIDERS_FAILURE)
