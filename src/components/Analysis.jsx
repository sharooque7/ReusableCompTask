import React from "react";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./filter";
import styles from "./Analysis.module.css";
import { useDispatch } from "react-redux";
import { CounterActions } from "../store/Data";

const Analysis = () => {
  const [arr, setArr] = useState();
  const [Categories, setCategories] = useState("fuel");
  const [Divisions, setDivisions] = useState("None");
  const [startDate, setstartDate] = useState("1990-01-01");
  const [endDate, setendDate] = useState("1990-01-01");

  const dispatch = useDispatch();

  const [Data, setData] = useState({
    chartData: {
      labels: ["Income", "Expense", "Profit"],
      datasets: [
        {
          label: "Income vs Expense",
          data: [12, 16, 8],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(206, 108, 108,0.6)",
            "rgba(147, 240, 147,0.6)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(206, 108, 108,0.6)",
            "rgba(147, 240, 147,0.6)",
          ],
          borderWidth: 20,
        },
      ],
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    },
  });
  useEffect(() => {
    axios
      .post(
        "https://money-managers-backend.herokuapp.com/moneymanager/QueryData",
        {
          Categories: Categories,
          Divisions: Divisions,
        }
      )
      .then((res) => {
        let Exp = res.data.Message[0].TotalExpense;
        let Inc = res.data.Message[0].TotalIncome;
        let prof = Math.abs(Exp - Inc);
        dispatch(CounterActions.Add([Inc, Exp, prof]));

        setCategories(Categories);
        setDivisions(Divisions);
        setArr([Inc, Exp, prof]);
        setData({
          ...Data,
          chartData: {
            labels: ["Income", "Expense", "Profit"],
            datasets: [
              {
                label: "Income vs Expense",
                data: arr,
                backgroundColor: [
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(206, 108, 108,0.6)",
                  "rgba(147, 240, 147,0.6)",
                ],
                borderColor: [
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(206, 108, 108,0.6)",
                  "rgba(147, 240, 147,0.6)",
                ],
                borderWidth: 20,
              },
            ],
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          },
        });
      })
      .catch((err) => console.log(err));
  }, [Divisions, Categories]);

  const handleStartDate = (e) => {
    setstartDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setendDate(e.target.value);
  };
  const handleSelectedChangeDivisions = (e) => {
    setDivisions(e.target.value);
  };

  const handleSelectedChangeCategories = (e) => {
    setCategories(e.target.value);
  };

  return (
    <div>
      <div className={`${styles["Chart-flex"]} mt-4 px-4`}>
        <span>Cash Vs Expense</span>
        <span>
          <Filter
            Categories={Categories}
            Divisions={Divisions}
            startDate={startDate}
            endDate={endDate}
            handleSelectedChangeDivisions={handleSelectedChangeDivisions}
            handleSelectedChangeCategories={handleSelectedChangeCategories}
            handleStartDate={handleStartDate}
            handleEndDate={handleEndDate}
          />
        </span>
      </div>
      <div>
        <Bar className="chart" data={Data.chartData} height={400} width={600} />
      </div>
    </div>
  );
};
export default Analysis;
