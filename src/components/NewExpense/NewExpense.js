import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [newExpense, setNewExpense] = useState(true);

  const handleNewExpense = () => {
    setNewExpense(false);
  };

  const handleCancel = () => {
    setNewExpense(true);
  };

  const handleSaveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpense(true);
  };

  return (
    <div className="new-expense">
      {newExpense ? (
        <button onClick={handleNewExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
