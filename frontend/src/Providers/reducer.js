import {
  GET_PROVIDERS_REQUEST,
  GET_PROVIDERS_SUCCESS,
  GET_PROVIDERS_FAILURE,
  LOAD_MORE_PROVIDERS_REQUEST,
  LOAD_MORE_PROVIDERS_SUCCESS,
  LOAD_MORE_PROVIDERS_FAILURE
} from './actions'

export default function datasets(
  state = {
    providers: [],
    limit: 0,
    offset: 0,
    loading: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case GET_PROVIDERS_REQUEST:
      return {
        ...state,
        providers: [],
        limit: 0,
        offset: 0,
        error: null,
        loading: true
      }
    case LOAD_MORE_PROVIDERS_REQUEST:
      return { ...state, loading: true }
    case GET_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: action.payload.providers,
        limit: action.payload.limit,
        offset: action.payload.offset,
        loading: false,
        error: null
      }
    case LOAD_MORE_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: [...state.providers, ...action.payload.providers],
        limit: action.payload.limit,
        offset: action.payload.offset,
        loading: false,
        error: null
      }
    case GET_PROVIDERS_FAILURE:
    case LOAD_MORE_PROVIDERS_FAILURE:
      const message = action.payload.errors
        ? action.payload.errors.map(err => err.message).join('/n')
        : action.payload.message
      return { ...state, error: message, loading: false }
    default:
      return state
  }
}
