
const dbUrl = 'http://localhost:3000/helpSeekers';

/**
 * Get this User's Favourite Recipes
 */
export function getHelpSeekers() {
  const data = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return async (dispatch) => {
    function onSuccess(success) {
      console.log(success);
      dispatch({ type: 'GET_HELP_SEEKERS', data: success });
      return success;
    }
    function onError(error) {
      dispatch({ type: 'HELP_SEEKERS_ERROR', error });
      return error;
    }
    try {
      const response = fetch(dbUrl, data);
      const responseJson = response.json();
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
