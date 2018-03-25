import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNodes, setError } from '../actions/node';

class NodesListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    nodes: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      nodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    getNodes: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchNodes();

  /**
   * Fetch Data from API, saving to Redux
   */
  fetchNodes = () => this.props.getNodes()
    .catch((err) => {
      console.log(`Error: ${err}`);
      return this.props.setError(err);
    })

  render = () => {
    const { Layout, nodes, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        nodeId={id}
        error={nodes.error}
        loading={nodes.loading}
        nodes={nodes.nodes}
        reFetch={() => this.fetchNodes()}
      />
    );
  }
}

const mapStateToProps = state => ({
  nodes: state.nodes || {},
});

const mapDispatchToProps = {
  getNodes,
  setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(NodesListing);
