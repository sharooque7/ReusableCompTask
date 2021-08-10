import React, { useEffect, useState } from "react";
import Layout from "../UI/layout";
import Navbar from "./Navbar";
import Report from "./Report";
import Card from "../UI/Card";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Analysis from "./Analysis";
import Modal from "./modal";
import { useSelector } from "react-redux";

const Main = () => {
  const List = useSelector((state) => state.counter.arr);
  const [show, setShow] = useState(false);

  useEffect(() => {}, [List]);

  const handleClose = () => {
    setShow(false);
    console.log(show);
  };
  const handleShow = () => {
    setShow(true);
    console.log(show);
  };

  return (
    <Layout xs={12} sm={12} xl={9} lg={9} md={9}>
      <Navbar />
      <div className="d-flex justify-content-between mt-5">
        <span>
          <span className="mr-2">Dashboard</span>
          <span>
            <FontAwesomeIcon icon={faEllipsisV} />
          </span>
        </span>

        <span>
          <button onClick={handleShow} className="btn btn-outline btn-dark">
            Add Expense Debugger
            {show && (
              <Modal
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            )}
          </button>
        </span>
      </div>
      <Card>
        <Layout xs={12} sm={12} xl={4} lg={4} md={4}>
          <Report
            FinanceDetails="TOTAL INCOME"
            icon={faMoneyCheckAlt}
            bg="lightblue"
            result={List[0]}
          />
        </Layout>
        <Layout xs={12} sm={12} xl={4} lg={4} md={4}>
          <Report
            FinanceDetails="TOTAL EXPENSE"
            icon={faCartPlus}
            bg="rgb(212, 94, 94)"
            result={List[1]}
          />
        </Layout>
        <Layout xs={12} sm={12} xl={4} lg={4} md={4}>
          <Report
            FinanceDetails="TOTAL PROFIT"
            icon={faHeart}
            bg="lightgreen"
            result={List[2]}
          />
        </Layout>
      </Card>
      <Analysis />
    </Layout>
  );
};

export default Main;
