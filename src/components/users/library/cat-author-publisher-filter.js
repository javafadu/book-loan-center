import React from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";

const CatAuthorPublisherFilter = () => {
  return (
    <Container className="lib-container my-2 py-2">
      <Row className="justify-content-center">
        <Col sm="auto">
          <DropdownButton
            className="btn-primary px-2"
            id="dropdown-basic-button"
            title="Categories"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col sm="auto">
          <DropdownButton
            className="btn-primary px-2"
            id="dropdown-basic-button"
            title="Categories"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col sm="auto">
          <DropdownButton
            className="btn-primary px-2"
            id="dropdown-basic-button"
            title="Categories"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default CatAuthorPublisherFilter;
