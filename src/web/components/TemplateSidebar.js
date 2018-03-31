import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Member from '../../containers/Member';
import Header from './Header';
import Footer from './Footer';

const Template = ({ children }) => (
  <div>
    <Member Layout={Header} />
    <Container fluid>
      <Row>
        <Col md="12" sm="12" className="px-sm-5 py-sm-5 ml-sm-auto">
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
  </div>
);

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
