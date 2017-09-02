import callApi from '../data/queries/apiCaller'

// Export Constants
export const ADD_HELP_SEEKER = 'ADD_HELP_SEEKER'
export const ADD_HELP_SEEKERS = 'ADD_HELP_SEEKERS'
export const DELETE_HELP_SEEKER = 'DELETE_HELP_SEEKER'

// Export Actions
export function addHelpSeeker (helpSeeker) {
  return {
    type: ADD_HELP_SEEKER,
    helpSeeker,
  }
}

export function addHelpSeekerRequest (helpSeeker) {
  return (dispatch) => {
    return callApi('helpSeekers', 'helpSeeker', {
      helpSeeker: {
        title: helpSeeker.title,
        name: helpSeeker.name,
        image: helpSeeker.image,
        description: helpSeeker.description,
        status: helpSeeker.status,
        bank: helpSeeker.bank,
        iban: helpSeeker.iban,
        bic: helpSeeker.bic,
        swift: helpSeeker.swift,
        holder: helpSeeker.holder,
        refs: helpSeeker.refs,
        dateAdded: helpSeeker.dateAdded,
        dateStatusChanged: helpSeeker.dateStatusChanged
      },
    }).then(res => dispatch(addHelpSeeker(res.helpSeeker)))
  }
}

export function addHelpSeekers (helpSeekers) {
  return {
    type: ADD_HELP_SEEKERS,
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
    return callApi(`details/${cuid}`).then(res => dispatch(addHelpSeeker(res.helpSeeker)))
  }
}

export function deleteHelpSeeker (cuid) {
  return {
    type: DELETE_HELP_SEEKER,
    cuid,
  }
}

export function deleteHelpSeekerRequest (cuid) {
  return (dispatch) => {
    return callApi(`details/${cuid}`, 'delete').then(() => dispatch(deleteHelpSeeker(cuid)))
  }
}
