import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Company.module.css";

const Company = () => {
  return (
    <div className={styles["display-flex"]}>
      <span>
        <FontAwesomeIcon icon={faCircleNotch} />
      </span>
      <span className={styles.item}>
        My Company
        <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
      </span>
      <span>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </div>
  );
};

export default Company;
