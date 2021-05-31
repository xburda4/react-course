import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './ExpenseItemsList.css'
import {useState} from "react";

function ExpenseItemsList(props) {
    const [selectedYear, setSelectedYear] = useState('')
    const saveSelectedYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
        console.log(selectedYear)
    }

    return (
        <div className="expenses">
            <ExpensesFilter onSelectedYear={saveSelectedYearHandler}/>
            {props.expenses.map(o => <ExpenseItem title={o.title} amount={o.amount} date={o.date}/>)}

        </div>
    )
}

export default ExpenseItemsList
