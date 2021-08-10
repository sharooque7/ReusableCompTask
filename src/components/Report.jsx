import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Report.module.css";

const Report = (props) => {
  return (
    <div
      className={`${styles["Report-flex"]} mt-5`}
      style={{ backgroundColor: `${props.bg}` }}
    >
      <span>{props.FinanceDetails}</span>
      <span>
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </span>
      <span className={styles.design}>{props.result}</span>
    </div>
  );
};

export default Report;
