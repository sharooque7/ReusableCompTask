import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Overview.module.css";

const Overview = (props) => {
  return (
    <div className={styles["display-flex"]}>
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span>{props.title}</span>
    </div>
  );
};

export default Overview;
