import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "Toyota",
      price: 100,
      date: new Date(2022, 19.04),
    },
    {
      title: "Honda",
      price: 123,
      date: new Date(2020, 22.2),
    },
    {
      title: "KIA",
      price: 14,
      date: new Date(2019, 3.4),
    },
    {
      title: "Porche",
      price: 1,
      date: new Date(2022, 31.12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
