// Export Constants
export const CHANGE_HEADER_TITLE = 'CHANGE_HEADER_TITLE'

// Export Actions
export function changeHeaderTitle (title) {
  return {
    type: CHANGE_HEADER_TITLE,
    title: title,
  }
}
