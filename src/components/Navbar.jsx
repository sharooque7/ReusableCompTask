import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mt-3 d-flex justify-content-between"
    >
      <Navbar.Brand href="#home">Money Manager</Navbar.Brand>
      <Form className="d-flex ">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Navigation;
