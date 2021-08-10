import React from "react";
import { Col } from "react-bootstrap";

const Layout = (props) => {
  return (
    <Col xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl}>
      {props.children}
    </Col>
  );
};

export default Layout;
