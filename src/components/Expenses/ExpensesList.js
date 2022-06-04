import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
	if (items.length === 0) {
		return <h2 className="expenses-list__fallback">No Found Expense</h2>;
	}
	return (
		<ul className="expenses-list">
			{items.map((expense) => (
				<ExpenseItem
					key={expense.id} // unique key must be included otherwise error will be generate
					title={expense.title}
					date={expense.date}
					amount={expense.amount}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
