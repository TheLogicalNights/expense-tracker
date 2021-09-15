import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/addExpense/newExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: Math.floor(Math.random() * 10000000000000000 + 1),
    title: "Car insurance",
    amount: 1500,
    date: new Date(),
  },
  {
    id: Math.floor(Math.random() * 10000000000000000 + 1),
    title: "Books",
    amount: 1000,
    date: new Date(),
  },
  {
    id: Math.floor(Math.random() * 10000000000000000 + 1),
    title: "Bike Servicing",
    amount: 900,
    date: new Date(),
  },
  {
    id: Math.floor(Math.random() * 10000000000000000 + 1),
    title: "New Keyboard",
    amount: 1100,
    date: new Date(),
  },
];

function App() {
  const [expense, AddNewExpense] = useState(DUMMY_EXPENSES);

  const NewExpenseHandler = (expense) => {
    AddNewExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App-header">
      <NewExpense addNewExpense={NewExpenseHandler} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
