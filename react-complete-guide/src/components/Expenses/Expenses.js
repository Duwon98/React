import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Expenses/ExpensesFilter";

// Stateful component
function Expenses(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const SaveYearData = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  // const FilterItems = (year) => {
  //   var expenseData = [];
  //   for (let i = 0; i < expenseItems.length; i++) {
  //     // console.log(expenseItems[i].date.getFullYear(), "This is from data");
  //     // console.log(year, "This is from input");
  //     if (expenseItems[i].date.getFullYear() == year) {
  //       // console.log(expenseItems[i].date.getFullYear(), "from data", year);
  //       expenseData.push(expenseItems[i]);
  //       // console.log(expenseData);
  //     }
  //   }
  //   // console.log(expenseData);
  //   FilterItemsByYear(expenseData);
  //   // console.log(expenseItems);
  // };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filterYear} onChangeYear={SaveYearData} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
      ;
      {/* <ExpenseItem
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        /> */}
    </div>
  );
}

export default Expenses;
