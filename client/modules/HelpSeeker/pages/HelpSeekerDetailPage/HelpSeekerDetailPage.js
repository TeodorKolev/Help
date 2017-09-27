import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import styles from '../../components/HelpSeekerListItem/HelpSeekerListItem.css'
import { fetchHelpSeeker } from '../../HelpSeekerActions'
import { getHelpSeeker } from '../../HelpSeekerReducer'
import { changeHeaderTitle } from '../../../App/components/Header/HeaderTitleActions'

export class HelpSeekerDetailPage extends Component {
  componentDidMount () {
    this.props.dispatch(changeHeaderTitle(this.props.helpSeeker.name))
  }

  render () {
    return (
      <div>
        <Helmet title={this.props.helpSeeker.name} />
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <h3 className={styles['post-title']}>{this.props.helpSeeker.name}</h3>
          <p className={styles['author-name']}><FormattedMessage id='by' /> {this.props.helpSeeker.name}</p>
          <p className={styles['post-desc']}>{this.props.helpSeeker.description}</p>
        </div>
      </div>
    )
  }
}

// Actions required to provide data for this component to render in sever side.
HelpSeekerDetailPage.need = [params => {
  return fetchHelpSeeker(params.cuid)
}]

// Retrieve data from store as props
function mapStateToProps (state, props) {
  return {
    helpSeeker: getHelpSeeker(state, props.params.cuid),
  }
}

HelpSeekerDetailPage.propTypes = {
  helpSeeker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(HelpSeekerDetailPage)
