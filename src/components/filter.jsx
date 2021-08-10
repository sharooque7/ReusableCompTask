import React from "react";

const Filter = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="form-group">
        <button
          className="font-weight-bold py-2 px-4 btn-outline-secondary btn-sm"
          type="Submit"
        >
          Edit Records
        </button>
      </div>
      <div className="form-group ml-2 d-flex flex-column text-center">
        <label htmlFor="Categories" className="col-form-label">
          Categories
        </label>
        <select
          className="form-select py-1 btn"
          aria-label="Default select example"
          value={props.Categories}
          name="Categories"
          id="Categories"
          onChange={props.handleSelectedChangeCategories}
        >
          <option value="Fuel">Fuel</option>
          <option value="Movie">Movie</option>
          <option value="Food">Food</option>
          <option value="Loan">Loan</option>
          <option value="Medical">Medical</option>
        </select>
      </div>
      <div className="form-group ml-2 d-flex flex-column text-center">
        <label htmlFor="Divisions" className="col-form-label">
          Divisions
        </label>
        <select
          className="form-select py-1 btn"
          aria-label="Default select example"
          value={props.Divisions}
          onChange={props.handleSelectedChangeDivisions}
          name="Type"
          id=""
        >
          <option value="Office">Office</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      <div className="form-group ml-2 text-center">
        <label htmlFor="startDate" className="col-form-label ">
          startDate
        </label>
        <input
          type="date"
          name="startDate"
          className="form-control py-1"
          id="startDate"
          value={props.startDate}
          onChange={(e) => props.handleStartDate(e)}
        ></input>
      </div>
      <div className="form-group ml-2 text-center">
        <label htmlFor="endDate" className="col-form-label ">
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          className="form-control"
          id="endDate"
          value={props.endDate}
          onChange={(e) => props.handleEndDate(e)}
        ></input>
      </div>
    </div>
  );
};

export default Filter;
