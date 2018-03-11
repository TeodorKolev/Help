const dbUrl = 'http://localhost:3000/helpSeekers';

/**
 * Get this User's Favourite Recipes
 */
export function getHelpSeekers() {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return async (dispatch) => {
    function onSuccess(success) {
      return dispatch({ type: 'GET_HELP_SEEKERS', data: success });
    }

    function onError(error) {
      return dispatch({ type: 'HELP_SEEKERS_ERROR', data: error });
    }

    try {
      const response = await fetch(dbUrl, data);
      const responseJson = await response.json();
      return onSuccess(responseJson);
    } catch (error) {
      return onError(error);
    }
  };
}

/**
 * Set an Error Message
 */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(dispatch({
    type: 'HELP_SEEKERS_ERROR',
    data: message,
  })));
}
