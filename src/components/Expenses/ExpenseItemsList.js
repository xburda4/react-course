import ExpensesFilter from "./ExpensesFilter";
import './ExpenseItemsList.css'
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default ExpenseItemsList
