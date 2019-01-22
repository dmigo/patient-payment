import { createAction } from 'redux-actions'
import providers from './api'

export const GET_PROVIDERS_REQUEST = 'GET_PROVIDERS_REQUEST'
export const GET_PROVIDERS_SUCCESS = 'GET_PROVIDERS_SUCCESS'
export const GET_PROVIDERS_FAILURE = 'GET_PROVIDERS_FAILURE'

export const getProviders = parameters => {
  return dispatch => {
    dispatch(getProvidersRequest())
    return providers
      .find(parameters)
      .then(result =>
        dispatch(
          getProviderssSuccess({
            parameters,
            providers: result
          })
        )
      )
      .catch(error => {
        dispatch(getProviderssFailure(error.message))
      })
  }
}

const getProvidersRequest = createAction(GET_PROVIDERS_REQUEST)
const getProviderssSuccess = createAction(GET_PROVIDERS_SUCCESS)
const getProviderssFailure = createAction(GET_PROVIDERS_FAILURE)
