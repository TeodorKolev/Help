import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'

// Import Style
import styles from '../../components/HelpSeekerListItem/HelpSeekerListItem.css'

// Import Actions
import { fetchHelpSeeker } from '../../HelpSeekerActions'

// Import Selectors
import { getHelpSeeker } from '../../HelpSeekerReducer'

export function HelpSeekerDetailPage (props) {
  return (
    <div>
      <Helmet title={props.helpSeeker.name} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.helpSeeker.name}</h3>
        <p className={styles['author-name']}><FormattedMessage id='by' /> {props.helpSeeker.name}</p>
        <p className={styles['post-desc']}>{props.helpSeeker.description}</p>
      </div>
    </div>
  )
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
}

export default connect(mapStateToProps)(HelpSeekerDetailPage)
