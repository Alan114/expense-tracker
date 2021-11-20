import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 0, 9),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 9, 23),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 11, 22),
    },
  ];

  return (
    <div className="App">
      <h1>Expense tracker</h1>
      <p>
        Tracking your spending habits so you don't loose sight of your money!!!
      </p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
