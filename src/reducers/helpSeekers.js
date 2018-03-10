import HelpSeeker from '../store/helpSeeker';

export const initialState = HelpSeeker;

export default function helpSeekerReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_HELP_SEEKERS': {
      return {
        ...state,
        error: null,
        loading: false,
        helpSeekers: action.data,
      };
    }
    case 'HELP_SEEKERS_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    default:
      return state;
  }
}
