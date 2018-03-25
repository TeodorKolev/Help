import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const NodeListing = ({ error, loading, nodes }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = nodes.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/node/${item.id}`}>
        <CardImg top src={item.image} alt={item.title} />
      </Link>
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle>{item.iban}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <Link className="btn btn-primary" to={`/node/${item.id}`}>View Node <i className="icon-arrow-right" /></Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>Nodes</h1>
          <p>The following data is read directly from Firebase.</p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

NodeListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

NodeListing.defaultProps = {
  error: null,
};

export default NodeListing;
