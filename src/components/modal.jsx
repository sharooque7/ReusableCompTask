import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const Modals = (props) => {
  const [Type, setType] = useState("Income");
  const [Date, setDate] = useState("1990-01-01");
  const [Categories, setCategories] = useState("fuel");
  const [Divisions, setDivisions] = useState("Personal");
  const [Description, setDescription] = useState(
    "Please Enter one line Description"
  );
  const [Cash, setCash] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let Data = {
      Type: Type,
      Date: Date,
      Categories: Categories,
      Divisions: Divisions,
      Description: Description,
      Cash: Cash,
    };
    axios
      .post(
        "https://money-managers-backend.herokuapp.com/moneymanager/AddData",
        Data
      )
      .then((result) => {
        props.handleClose();
        alert("Data Added");
      })
      .catch((err) => console.log(err));
  };

  const handleSelectedChangeType = (e) => {
    setType(e.target.value);
  };

  const handleSelectedChangeDivisions = (e) => {
    setDivisions(e.target.value);
  };

  const handleSelectedChangeCategories = (e) => {
    setCategories(e.target.value);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Add Expesne/Income Tab</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Expense/Income" className="col-form-label">
                Expense/Income
              </label>
              <select
                className="ml-3"
                name="Type"
                id="Type"
                value={Type}
                onChange={handleSelectedChangeType}
              >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Date" className="col-form-label">
                Date:
              </label>
              <input
                type="date"
                name="Date"
                className="form-control"
                id="Date"
                value={Date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="Categories" className="col-form-label">
                Categories
              </label>
              <select
                className="ml-3"
                value={Categories}
                name="Categories"
                id="Categories"
                onChange={handleSelectedChangeCategories}
              >
                <option value="Fuel">Fuel</option>
                <option value="Movie">Movie</option>
                <option value="Food">Food</option>
                <option value="Loan">Loan</option>
                <option value="Medical">Medical</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Divisions" className="col-form-label">
                Divisions
              </label>
              <select
                value={Divisions}
                onChange={handleSelectedChangeDivisions}
                className="ml-3"
                name="Type"
                id=""
              >
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Cash Spend" className="col-form-label">
                {Type === "Income" ? "Income" : "Expense"}
              </label>
              <input
                type="number"
                name="Cash Spend"
                className="form-control"
                id="Cash Spend"
                value={Cash}
                onChange={(e) => setCash(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="Description" className="col-form-label">
                Description:
              </label>
              <textarea
                name="Description"
                className="form-control"
                id="Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <button
                className="btn-primary btn-sm  btn btn-dark"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
