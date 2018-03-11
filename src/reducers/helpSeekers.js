import HelpSeeker from '../store/helpSeeker';

export const initialState = HelpSeeker;

export default function helpSeekerReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_HELP_SEEKERS': {
      let helpSeekersData = [];
      if (action.data && typeof action.data === 'object') {
        helpSeekersData = action.data.map(item => ({
          id: item._id,
          title: item.title,
          name: item.name,
          image: item.image,
          description: item.description,
          status: item.status,
          bank: item.bank,
          iban: item.iban,
          bic: item.bic,
          swift: item.swift,
          holder: item.holder,
          refs: item.refs,
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
