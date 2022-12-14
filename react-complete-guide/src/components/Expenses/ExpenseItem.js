import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // let title = props.title;
  // const clickHandler = () => {
  //   // title = "Updated!";
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  // console.log("This is from ExpenseItem ", props.title, props.date);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price ">${props.price}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
