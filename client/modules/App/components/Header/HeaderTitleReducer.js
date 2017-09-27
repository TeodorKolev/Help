import { CHANGE_HEADER_TITLE } from './HeaderTitleActions'

const initialState = {
  headerTitle: '',
}

const TitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HEADER_TITLE:
      return {
        headerTitle: action.title,
      }
    default:
      return state
  }
}

export default TitleReducer
