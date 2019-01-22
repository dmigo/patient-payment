import {
  GET_PROVIDERS_REQUEST,
  GET_PROVIDERS_SUCCESS,
  GET_PROVIDERS_FAILURE
} from './actions'

export default function datasets(
  state = {
    providers: [],
    parameters: {},
    loading: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case GET_PROVIDERS_REQUEST:
      return { ...state, error: null, loading: true }
    case GET_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: action.payload.providers,
        parameters: action.payload.parameters,
        loading: false,
        error: null
      }
    case GET_PROVIDERS_FAILURE:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
