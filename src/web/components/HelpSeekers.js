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
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const HelpSeekerListing = ({ error, loading, helpSeekers }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = helpSeekers.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/node/${item.id}`}>
        <CardImg top src={item.image} alt={item.title} />
      </Link>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
        <Link className="btn btn-primary" to={`/node/${item.id}`}>View HelpSeeker <i className="icon-arrow-right" /></Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>HelpSeekers</h1>
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

HelpSeekerListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  helpSeekers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

HelpSeekerListing.defaultProps = {
  error: null,
};

export default HelpSeekerListing;
