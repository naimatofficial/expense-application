import React, { forwardRef } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = forwardRef((props, ref) => {
	return (
		<Card className="expense-item" ref={ref}>
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">
					<span className="price">${props.amount}</span>
				</div>
			</div>
		</Card>
	);
});

export default ExpenseItem;
