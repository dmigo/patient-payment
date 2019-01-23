import { CHANGE_SEARCH_PARAMETER } from './actions'

export default function datasets(
  state = {
    parameters: {}
  },
  action
) {
  switch (action.type) {
    case CHANGE_SEARCH_PARAMETER:
      return {
        ...state,
        parameters: {
          ...state.parameters,
          [action.payload.name]: action.payload.value
        }
      }
    default:
      return state
  }
}
