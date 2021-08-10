import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sideBar";
import Main from "./components/Main";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <SideBar />
        <Main />
      </Row>
    </Container>
  );
}

export default App;
