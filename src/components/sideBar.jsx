import React from "react";
import Layout from "../UI/layout";
import style from "./sideBar.module.css";
import Dashboard from "./Dashboard";
import Company from "./Company";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Overview from "./Overview";
import { faCloud, faHistory } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <Layout xs={12} sm={2} xl={2} lg={2} md={12}>
      <Router>
        <div className={style["sideBar-main"]}>
          <ul>
            <li>
              <Link to="/Dashboard">
                <Company />
              </Link>
            </li>
            <li>
              <Link to="/Dashboard">
                <Dashboard />
              </Link>
            </li>
            <li>
              <Link to="/Dashboard">
                <Overview title="Overview" icon={faCloud} />
              </Link>
            </li>
            <li>
              <Link to="/Dashboard">
                <Overview title="History" icon={faHistory} />
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    </Layout>
  );
};

export default SideBar;
