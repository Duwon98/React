import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toyota",
    price: 100,
    date: new Date(2022, 4, 10),
  },
  {
    id: "e2",
    title: "Honda",
    price: 123,
    date: new Date(2020, 0, 2),
  },
  {
    id: "e3",
    title: "KIA",
    price: 14,
    date: new Date(2019, 3, 4),
  },
  {
    id: "e4",
    title: "Porche",
    price: 1,
    date: new Date(2020, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // If you update State based on the older snapshot it is better to use
    // prevExpenses function (it is based on the State variable)
    // original one 'expenses' -> name of the function ->prevExpenses

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <NewExpenseButton /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
