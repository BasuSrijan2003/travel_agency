import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Travel Agency</h5>
            <p>Your trusted partner for unforgettable travel experiences.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>&copy; 2025 Travel Agency. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
