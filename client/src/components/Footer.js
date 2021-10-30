import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Code Assessment 1-800flowers.com
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
