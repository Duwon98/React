import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //   const [enteredYear, setEnteredYear] = useState("2022");

  const onChangeYearHandler = (event) => {
    props.onChangeYear(event.target.value);
    // Passing data to Expenses.js
  };
  //   console.log("This is from Filter ", enteredYear);
  //   props.onSaveYearHandler(enteredYear);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onChangeYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
