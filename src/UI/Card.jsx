import React from "react";
import { Row } from "react-bootstrap";

const Layout = (props) => {
  return <Row>{props.children}</Row>;
};

export default Layout;
