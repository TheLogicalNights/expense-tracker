import { useState } from "react";
import "./addExpenseForm.css";

const AddExpenseForm = (props) => {
  const [title, setChangedTitle] = useState("");
  const [amount, setChangedAmount] = useState("");
  const [date, setChangedDate] = useState("");
  const [titleValid, setTitleValid] = useState(true);
  const [amountValid, setAmountValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);

  const [showForm, setDisplayFormFlag] = useState(false);

  const titleChangedHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTitleValid(true);
    }
    setChangedTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAmountValid(true);
    }
    setChangedAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setDateValid(true);
    }
    setChangedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim().length === 0) {
      setTitleValid(false);
      return;
    }
    if (amount.trim().length === 0) {
      setAmountValid(false);
      return;
    }
    if (date.trim().length === 0) {
      setDateValid(false);
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 10000000000000000 + 1),
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onDataSave(data);
    setChangedTitle("");
    setChangedAmount("");
    setChangedDate("");
    setDisplayFormFlag(false);
  };

  const displayForm = () => {
    setDisplayFormFlag(true);
  };

  const hideForm = () => {
    setDisplayFormFlag(false);
  };

  if (showForm === false) {
    return (
      <div>
        <button onClick={displayForm}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={`new-expense__control ${!titleValid ? "invalid" : ""}`}>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangedHandler} />
        </div>
        <div
          className={`new-expense__control ${!amountValid ? "invalid" : ""}`}
        >
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className={`new-expense__control ${!dateValid ? "invalid" : ""}`}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
