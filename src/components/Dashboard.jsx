import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles["display-flex"]}>
      <span>
        <FontAwesomeIcon icon={faTachometerAlt} />
      </span>
      <span>Dashboard</span>
    </div>
  );
};

export default Dashboard;
