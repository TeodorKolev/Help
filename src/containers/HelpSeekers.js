import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHelpSeekers, setError } from '../actions/helpSeekers';

class HelpSeekersListing extends Component {
  static propTypes = {
 /*   Layout: PropTypes.func.isRequired,
    helpSeekers: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      helpSeekers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    getHelpSeekers: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,*/
    getHelpSeekers: PropTypes.func.isRequired,
  }

/*  static defaultProps = {
    match: null,
  }*/

  componentDidMount = () => this.fetchHelpSeekers();

  /**
   * Fetch Data from API, saving to Redux
   */
  fetchHelpSeekers = () => {
    return this.props.getHelpSeekers()
      /*.catch((err) => {
        console.log(`Error: ${err}`);
        return this.props.setError(err);
      });*/
  }

  render = () => {
   /* const { Layout, helpSeekers, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        helpSeekerId={id}
        error={helpSeekers.error}
        loading={helpSeekers.loading}
        helpSeekers={helpSeekers.helpSeekers}
        reFetch={() => this.fetchHelpSeekers()}
      />
    );*/
   return (<div>Test</div>)
  }
}

const mapStateToProps = state => ({
  helpSeekers: state.helpSeekers || {},
});

const mapDispatchToProps = {
  getHelpSeekers,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelpSeekersListing);
