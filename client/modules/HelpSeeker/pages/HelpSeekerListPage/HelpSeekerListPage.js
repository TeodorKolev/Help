import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

// Import Components
import HelpSeekerList from '../../components/HelpSeekerList'

// Import Actions
import { addHelpSeekerRequest, fetchHelpSeekers, deleteHelpSeekerRequest } from '../../HelpSeekerActions'
import { toggleAddHelpSeeker } from '../../../App/AppActions'

// Import Selectors
import { getShowAddHelpSeeker } from '../../../App/AppReducer'
import { getHelpSeekers } from '../../HelpSeekerReducer'

class HelpSeekerListPage extends Component {
  componentDidMount () {
    this.props.dispatch(fetchHelpSeekers())
  }

  handleDeleteHelpSeeker = helpSeeker => {
    if (confirm('Do you want to delete this help seeker')) { // eslint-disable-line
      this.props.dispatch(deleteHelpSeekerRequest(helpSeeker))
    }
  };

  handleAddHelpSeeker = (name, title, content) => {
    this.props.dispatch(toggleAddHelpSeeker())
    this.props.dispatch(addHelpSeekerRequest({ name, title, content }))
  };

  render () {
    return (
      <div>
        <HelpSeekerList handleDeleteHelpSeeker={this.handleDeleteHelpSeeker}
          helpSeekers={this.props.helpSeekers} />
      </div>
    )
  }
}

// Actions required to provide data for this component to render in sever side.
HelpSeekerListPage.need = [() => { return fetchHelpSeekers() }]

// Retrieve data from store as props
function mapStateToProps (state) {
  return {
    showAddHelpSeeker: getShowAddHelpSeeker(state),
    helpSeekers: getHelpSeekers(state),
  }
}

HelpSeekerListPage.propTypes = {
  helpSeekers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
  })).isRequired,
  showAddHelpSeeker: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

HelpSeekerListPage.contextTypes = {
  router: React.PropTypes.object,
}

export default connect(mapStateToProps)(HelpSeekerListPage)
