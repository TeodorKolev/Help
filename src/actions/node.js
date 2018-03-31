const dbUrl = 'http://localhost:3000/api/nodes';

/**
 * Get this User's Favourite Recipes
 */
export function getNodes() {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return async (dispatch) => {
    function onSuccess(success) {
      console.log(success);
      return dispatch({ type: 'GET_NODES', data: success });
    }
    function onError(error) {
      return dispatch({ type: 'NODES_ERROR', data: error });
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
    type: 'NODES_ERROR',
    data: message,
  })));
}
