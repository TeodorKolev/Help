import React, { Component, PropTypes } from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import { addHelpSeekerRequest } from '../../HelpSeekerActions'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'
import { compose } from 'redux'
import { connect } from 'react-redux'

export class HelpSeekerCreatePage extends Component {
  addHelpSeeker = () => {
    console.log(this.refs.image.value)
    const nameRef = this.refs.name
    const descriptionRef = this.refs.description
    const ibanRef = this.refs.iban
    const imageRef = this.refs.image
    if (nameRef.value && descriptionRef.value && ibanRef.value && imageRef.value) {
      this.props.handleAddHelpSeeker(nameRef.value, descriptionRef.value, ibanRef.value, imageRef.value)
      nameRef.value = descriptionRef.value = ibanRef.value = imageRef.value = ''
    }
  };

  render () {
    const { classes } = this.props
    return (
      <div>
        <div>
          <h2><FormattedMessage id='createNewPost' /></h2>
          {/*          <Input
            placeholder='Placeholder'
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            ref='name'
          /> */}
          <input placeholder={this.props.intl.messages.authorName} ref='name' />
          <input placeholder={this.props.intl.messages.postTitle} ref='description' />
          <textarea placeholder={this.props.intl.messages.postContent} ref='iban' />
          <input type='file' name='pic' accept='image/*' ref='image' />
          <button type='submit' onClick={this.addHelpSeeker}><FormattedMessage id='submit' /></button>
        </div>
      </div>
    )
  }
}

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  input: {
    margin: theme.spacing.unit,
  },
})

const mapDispatchToProps = (dispatch) => ({
  handleAddHelpSeeker (name, description, iban, image) {
    dispatch(addHelpSeekerRequest({ name, description, iban, image }))
  },
})

HelpSeekerCreatePage.propTypes = {
  intl: intlShape.isRequired,
  handleAddHelpSeeker: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default compose(withStyles(styles), injectIntl, connect(null, mapDispatchToProps))(HelpSeekerCreatePage)
