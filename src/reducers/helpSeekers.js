import HelpSeeker from '../store/helpSeeker';

export const initialState = HelpSeeker;

export default function helpSeekerReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_HELP_SEEKERS': {
      let helpSeekersData = [];
      if (action.data && typeof action.data === 'object') {
        helpSeekersData = action.data.map(item => ({
          id: item.id,
          title: item.title,
          name: item.name,
          description: item.description,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        helpSeekers: helpSeekersData,
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
