import ExpenseItem from "./ExpenseItem";
import './ExpenseItemsList.css'

function ExpenseItemsList(props) {
    return (
        <div className="expenses">
            {props.expenses.map(o => <ExpenseItem title={o.title} amount={o.amount} date={o.date}/>)}

        </div>
    )
}

export default ExpenseItemsList
