import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {
	return (
		<div className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">
					<span className="price">${amount}</span>
				</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
