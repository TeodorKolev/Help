// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_ADD_HELPSEEKER } from './AppActions'

// Initial State
const initialState = {
  showAddPost: false,
  showAddHelpSeeker: false,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      }

    case TOGGLE_ADD_HELPSEEKER:
      return {
        showAddHelpSeeker: !state.showAddHelpSeeker,
      }

    default:
      return state
  }
}

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost

// Get showAddHelpSeeker
export const getShowAddHelpSeeker = state => state.app.showAddHelpSeeker

// Export Reducer
export default AppReducer
