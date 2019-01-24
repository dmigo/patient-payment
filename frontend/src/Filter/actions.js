import { createAction } from 'redux-actions'
import { getProviders } from '../Providers/actions'

export const CHANGE_SEARCH_PARAMETER = 'CHANGE_SEARCH_PARAMETER'
export const changeSearchParameter = createAction(CHANGE_SEARCH_PARAMETER)

export const search = (name, value) => {
  return dispatch => {
    dispatch(changeSearchParameter({ name, value }))
    dispatch(getProviders())
  }
}
