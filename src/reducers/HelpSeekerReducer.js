import { ADD_HELP_SEEKER, ADD_HELP_SEEKERS, DELETE_HELP_SEEKER } from '../actions/HelpSeekerActions'

// Initial State
const initialState = { data: [] }

const HelpSeekerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HELP_SEEKER :
      return {
        data: [action.helpSeeker, ...state.data],
      }

    case ADD_HELP_SEEKERS :
      return {
        data: action.helpSeekers,
      }

    case DELETE_HELP_SEEKER :
      return {
        data: state.data.filter(helpSeeker => helpSeeker._id !== action._id),
      }

    default:
      return state
  }
}

/* Selectors */

// Get all Help Seekers
export const getHelpSeekers = state => state.helpSeekers.data

// Get Help Seeker by cuid
export const getHelpSeeker = (state, _id) => state.helpSeekers.data.filter(helpSeeker => helpSeeker._id === _id)[0]

// Export Reducer
export default HelpSeekerReducer
