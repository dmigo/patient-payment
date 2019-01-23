import { createAction } from 'redux-actions'
import {} from 'redux-thunk'
import { getProviders } from '../Providers/actions'

export const CHANGE_SEARCH_PARAMETER = 'CHANGE_SEARCH_PARAMETER'

export const changeSearchParameter = (name, value) => {
  return dispatch => {
    dispatch({ type: CHANGE_SEARCH_PARAMETER, payload: { name, value } })
    dispatch(getProviders())
  }
}
