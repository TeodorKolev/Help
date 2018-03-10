import status from './status';
import member from './member';
import recipes from './recipes';
import helpSeekers from './helpSeekers';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  member,
  recipes,
  helpSeekers,
};