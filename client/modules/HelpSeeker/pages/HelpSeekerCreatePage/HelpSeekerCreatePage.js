import React, { Component, PropTypes } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { addHelpSeekerRequest } from '../../HelpSeekerActions'
import { compose } from 'redux'
import { connect } from 'react-redux'

export class HelpSeekerCreatePage extends Component {
  addHelpSeeker = () => {
    const nameRef = this.refs.name
    const descriptionRef = this.refs.description
    const ibanRef = this.refs.iban
    if (nameRef.value && descriptionRef.value && ibanRef.value) {
      this.props.handleAddHelpSeeker(nameRef.value, descriptionRef.value, ibanRef.value)
      nameRef.value = descriptionRef.value = ibanRef.value = ''
    }
  };

  render () {
    return (
      <div>
        <div>
          <h2><FormattedMessage id='createNewPost' /></h2>
          <input placeholder={this.props.intl.messages.authorName} ref='name' />
          <input placeholder={this.props.intl.messages.postTitle} ref='description' />
          <textarea placeholder={this.props.intl.messages.postContent} ref='iban' />
          <a href='#' onClick={this.addHelpSeeker}><FormattedMessage id='submit' /></a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddHelpSeeker (name, title, content) {
    dispatch(addHelpSeekerRequest({ name, title, content }))
  }
})

HelpSeekerCreatePage.propTypes = {
  intl: intlShape.isRequired,
}

export default compose(injectIntl, connect(null, mapDispatchToProps))(HelpSeekerCreatePage)
