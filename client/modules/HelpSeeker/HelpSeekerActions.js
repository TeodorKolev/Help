import callApi from '../../util/apiCaller'

// Export Constants
export const ADD_HELPSEEKER = 'ADD_HELPSEEKER'
export const ADD_HELPSEEKERS = 'ADD_HELPSEEKERS'
export const DELETE_HELPSEEKER = 'DELETE_HELPSEEKER'

// Export Actions
export function addHelpSeeker (helpSeeker) {
  return {
    type: ADD_HELPSEEKER,
    helpSeeker,
  }
}

export function addHelpSeekerRequest (helpSeeker) {
  return (dispatch) => {
    return callApi('helpSeekers', 'helpSeeker', {
      helpSeeker: {
        name: helpSeeker.name,
        description: helpSeeker.description,
        iban: helpSeeker.iban,
      },
    }).then(res => dispatch(addHelpSeeker(res.helpSeeker)))
  }
}

export function addHelpSeekers (helpSeekers) {
  return {
    type: ADD_HELPSEEKERS,
    helpSeekers,
  }
}

export function fetchHelpSeekers () {
  return (dispatch) => {
    return callApi('helpSeekers').then(res => {
      dispatch(addHelpSeekers(res.helpSeekers))
    })
  }
}

export function fetchHelpSeeker (cuid) {
  return (dispatch) => {
    return callApi(`helpSeekers/${cuid}`).then(res => dispatch(addHelpSeeker(res.helpSeeker)))
  }
}

export function deleteHelpSeeker (cuid) {
  return {
    type: DELETE_HELPSEEKER,
    cuid,
  }
}

export function deleteHelpSeekerRequest (cuid) {
  return (dispatch) => {
    return callApi(`helpSeekers/${cuid}`, 'delete').then(() => dispatch(deleteHelpSeeker(cuid)))
  }
}
