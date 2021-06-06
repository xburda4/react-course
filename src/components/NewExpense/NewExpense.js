import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css"
import {useState} from "react";

const NewExpense = (props) => {
    const [isNewExpenseShown, setIsNewExpenseShown] = useState(true)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData)
    }

    const showNewExpenseForm = () => {
        setIsNewExpenseShown(true)
    }

    let expenseForm = <button className="new-expense__actions" onClick={showNewExpenseForm}>Add New Expense</button>
    if(isNewExpenseShown) {
        expenseForm = <ExpenseForm shouldShowForm={setIsNewExpenseShown} onSaveExpenseData={saveExpenseDataHandler}/>
    }

    return (
        <div className="new-expense">
            {expenseForm}
        </div>
    )
};

export default NewExpense
