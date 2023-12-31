import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function One() {
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col>
          <h1>One</h1>
        </Col>
        <Col>
          <Link to="/two">
            <i className="fa-solid fa-2"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}