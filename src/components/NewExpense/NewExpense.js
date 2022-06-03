import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	// 🔵 extered the data from expensefrom component
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData, // RestOperator ... (means copy the all data in this object or array)
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
