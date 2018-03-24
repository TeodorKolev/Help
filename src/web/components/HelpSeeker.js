import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../constants/errors';
import Loading from './Loading';
import Error from './Error';

const HelpSeeker = ({
  error,
  loading,
  helpSeekers,
  helpSeekerId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Recipe from all recipes
  let helpSeeker = null;
  if (helpSeekerId && helpSeekers) {
    helpSeeker = helpSeekers.find(item => parseInt(item.id, 10) === parseInt(helpSeekerId, 10));
  }

  // Recipe not found
  if (!helpSeeker) return <Error content={ErrorMessages.recipe404} />;

  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>{helpSeeker.iban}</h1>
          <p>{helpSeeker.name}</p>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="recipe-view-card">
          <Card>
            <CardHeader>About this recipe</CardHeader>
            <CardBody>
              <CardText>{helpSeeker.description}</CardText>
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

HelpSeeker.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  helpSeekerId: PropTypes.string.isRequired,
  helpSeekers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

HelpSeeker.defaultProps = {
  error: null,
};

export default HelpSeeker;
