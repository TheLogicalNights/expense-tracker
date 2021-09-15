import "./newExpense.css";
import AddExpenseForm from "./addExpenseForm";

const NewExpense = (props) => {
  const ChangedDataHandler = (data) => {
    const ChangedData = {
      ...data,
    };

    props.addNewExpense(ChangedData);
  };

  return (
    <div className="new-expense">
      <AddExpenseForm onDataSave={ChangedDataHandler} />
    </div>
  );
};

export default NewExpense;
