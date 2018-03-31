import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardImg
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../constants/errors';
import Loading from './Loading';
import Error from './Error';

const Node = ({
  error,
  loading,
  nodes,
  nodeId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Node from all nodes
  let node = null;
  if (nodeId && nodes) {
    node = nodes.find(item => item.id === nodeId);
    console.log(JSON.stringify(node))
  }

  // Recipe not found
  if (!node) return <Error content={ErrorMessages.recipe404} />;

  return (
    <div>
      <Row>
        <Col sm="12" lg="12">
          <img src={node.image} alt={node.title} className="node-image" />
        </Col>
        <Col sm="12" lg="12">
          <h1>{node.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="recipe-view-card">
          <Card>
            <CardHeader>About this recipe</CardHeader>
            <CardBody>
              <CardText>{node.description}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/recipes"><i className="icon-arrow-left" /> Back</Link>
        </Col>
      </Row>
    </div>
  );
};

Node.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  nodeId: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

Node.defaultProps = {
  error: null,
};

export default Node;
