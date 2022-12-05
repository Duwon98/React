import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";

// Stateful component
function Expenses(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );
  // console.log("When it started ", filteredExpense);
  // const [filterExpense, setFilterExpense] = useState(props.items);

  const SaveYearData = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    // console.log("This is from save function", filteredExpense);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filterYear} onChangeYear={SaveYearData} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
