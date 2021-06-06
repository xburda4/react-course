import ExpensesFilter from "./ExpensesFilter";
import './ExpenseItemsList.css'
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function ExpenseItemsList(props) {
    const [selectedYear, setSelectedYear] = useState('2020')
    const saveSelectedYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
        console.log(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === Number(selectedYear))


    return (
        <div className="expenses">
            <ExpensesFilter selected={selectedYear} onSelectedYear={saveSelectedYearHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default ExpenseItemsList
