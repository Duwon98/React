import Expenses from "./components/Expenses";

function App() {
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
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
