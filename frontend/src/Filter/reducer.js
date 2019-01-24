import { CHANGE_SEARCH_PARAMETER } from './actions'

const isEmpty = value => value === null || value === undefined || value === ''

const clean = obj => {
  const result = {}
  for (var prop in obj) if (!isEmpty(obj[prop])) result[prop] = obj[prop]
  return result
}

export default function datasets(
  state = {
    parameters: {}
  },
  action
) {
  switch (action.type) {
    case CHANGE_SEARCH_PARAMETER:
      const newParameters = clean({
        ...state.parameters,
        [action.payload.name]: action.payload.value
      })

      return {
        ...state,
        parameters: newParameters
      }
    default:
      return state
  }
}
