import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import FlipMove from "react-flip-move";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState("2022");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			{items.map((expense, index) => (
				<FlipMove>
					<ExpenseItem
						key={index} // unique key must be included otherwise error will be generate
						title={expense.title}
						date={expense.date}
						amount={expense.amount}
					/>
				</FlipMove>
			))}
		</Card>
	);
};

export default Expenses;
