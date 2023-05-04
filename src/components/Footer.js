import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-primary text-light py-3" style={{ position: "fixed",height: "5em", bottom: 0, width: "100%" }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h1>Contact Us for any inquiries</h1>
            <p>matha@petstore.com</p>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-end">
            <a href="https://dog.ceo/dog-api/" className="text-light me-3">Provided by Dog API</a>
            <p>© 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
