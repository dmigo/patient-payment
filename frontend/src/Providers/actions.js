import { createAction } from 'redux-actions'
import providers from './api'

export const GET_PROVIDERS_REQUEST = 'GET_PROVIDERS_REQUEST'
export const GET_PROVIDERS_SUCCESS = 'GET_PROVIDERS_SUCCESS'
export const GET_PROVIDERS_FAILURE = 'GET_PROVIDERS_FAILURE'

export const LOAD_MORE_PROVIDERS_REQUEST = 'LOAD_MORE_PROVIDERS_REQUEST'
export const LOAD_MORE_PROVIDERS_SUCCESS = 'LOAD_MORE_PROVIDERS_SUCCESS'
export const LOAD_MORE_PROVIDERS_FAILURE = 'LOAD_MORE_PROVIDERS_FAILURE'

export const getProviders = parameters => {
  return dispatch => {
    dispatch(getProvidersRequest())
    return providers
      .find(parameters)
      .then(result =>
        dispatch(
          getProvidersSuccess({
            parameters,
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
    const { parameters, loading, error } = getState().providers

    if (loading || error) return

    const newParameters = {
      ...parameters,
      offset: (parameters.offset || 0) + (parameters.limit || 0),
      limit: amount
    }

    dispatch(loadMoreProvidersRequest())
    return providers
      .find(newParameters)
      .then(result =>
        dispatch(
          loadMoreProvidersSuccess({
            parameters: newParameters,
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
