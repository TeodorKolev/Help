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
          <button type='submit' onClick={this.addHelpSeeker}><FormattedMessage id='submit' /></button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAddHelpSeeker (name, description, iban) {
    dispatch(addHelpSeekerRequest({ name, description, iban }))
  },
})

HelpSeekerCreatePage.propTypes = {
  intl: intlShape.isRequired,
  handleAddHelpSeeker: PropTypes.func.isRequired
}

export default compose(injectIntl, connect(null, mapDispatchToProps))(HelpSeekerCreatePage)
