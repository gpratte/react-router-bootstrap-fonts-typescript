import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import One from "./one/One";
import Two from "./two/Two";

function App() {
  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col>
          <Routes>
            <Route path="*" element={<One/>}/>
            <Route path="/one" element={<One />}/>
            <Route path="/two" element={<Two />}/>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
