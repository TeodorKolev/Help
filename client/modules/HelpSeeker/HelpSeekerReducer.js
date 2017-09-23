import { ADD_HELPSEEKER, ADD_HELPSEEKERS, DELETE_HELPSEEKER } from './HelpSeekerActions'

// Initial State
const initialState = { data: [] }

const HelpSeekerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HELPSEEKER :
      return {
        data: [action.helpSeeker, ...state.data],
      }

    case ADD_HELPSEEKERS :
      return {
        data: action.helpSeekers,
      }

    case DELETE_HELPSEEKER :
      return {
        data: state.data.filter(helpSeeker => helpSeeker.cuid !== action.cuid),
      }

    default:
      return state
  }
}

/* Selectors */

// Get all helpSeekers
export const getHelpSeekers = state => state.helpSeekers.data

// Get post by cuid
export const getHelpSeeker = (state, cuid) => state.helpSeekers.data.filter(helpSeeker => helpSeeker.cuid === cuid)[0]

// Export Reducer
export default HelpSeekerReducer
