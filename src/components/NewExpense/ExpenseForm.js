import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// set the initial states throught the life cycle of this component
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = (event) => {
		// event.target.value ---> capture the text whenever we want to change them
		// setEnteredTitle ---> set the text whenever we want to update or edit them initial value (enteredTitle)
		setEnteredTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredAmount("");
		setEnteredDate("");
		setEnteredTitle("");
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						onChange={titleChangeHandler}
						value={enteredTitle}
						required
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						name="amount"
						onChange={amountChangeHandler}
						value={enteredAmount}
						min="0"
						required
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						name="date"
						min="2022-1-1"
						max="2024-12-31"
						onChange={dateChangeHandler}
						value={enteredDate}
						required
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
