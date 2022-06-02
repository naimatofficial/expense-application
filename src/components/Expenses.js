import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses() {
	const expense = [
		{
			id: 0,
			title: "Tv",
			date: new Date("2022, 6, 2"),
			amount: 202.04,
		},
		{
			id: 1,
			title: "Mobile",
			date: new Date("2022, 6, 2"),
			amount: 193.03,
		},
		{
			id: 2,
			title: "Laptop",
			date: new Date("2022, 6, 2"),
			amount: 1202.04,
		},
		{
			id: 3,
			title: "Buy Watch",
			date: new Date("2022, 6, 2"),
			amount: 23.42,
		},
	];
	// pass the expense objects through props
	const items = expense.map((el, index) => {
		return (
			<ExpenseItem
				key={index} // unique key must be included otherwise error will be generate
				title={el.title}
				date={el.date}
				amount={el.amount}
			/>
		);
	});

	return <div className="expenses">{items}</div>;
}

export default Expenses;
