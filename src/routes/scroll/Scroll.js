import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PostList from '../../components/Post/PostList'
import { fetchHelpSeekers } from '../../actions/HelpSeekerActions'
import { getHelpSeekers } from '../../reducers/HelpSeekerReducer'

class Scroll extends Component {
  componentDidMount () {
    this.props.dispatch(fetchHelpSeekers())
  }

  render () {
    return (
      <PostList helpSeekers={this.props.helpSeekers} />
    )
  }
}

// Actions required to provide data for this component to render in sever side.
Scroll.need = [() => {
  return fetchHelpSeekers()
}]

// Retrieve data from store as props
function mapStateToProps (state) {
  return {
    helpSeekers: getHelpSeekers(state),
  }
}

Scroll.propTypes = {
  helpSeekers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(Scroll)
