import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 0, 9),
  },
  { id: "e2", title: "New PC", amount: 1999.99, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 289.99,
    date: new Date(2021, 9, 23),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 11, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <h1>Expense tracker</h1>
      <p>
        Tracking your spending habits so you don't loose sight of your money!!!
      </p>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
