import React, { useState } from "react";

import "./App.css";
import Chart from "./components/Chart/Chart";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: 0,
		title: "Tv",
		date: new Date("2022, 6, 2"),
		amount: 202.04,
	},
	{
		id: 1,
		title: "Mobile",
		date: new Date("2021, 9, 4"),
		amount: 193.03,
	},
	{
		id: 2,
		title: "Laptop",
		date: new Date("2022, 12, 5"),
		amount: 1202.04,
	},
	{
		id: 3,
		title: "Buy Watch",
		date: new Date("2020, 11, 7"),
		amount: 23.42,
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			// create a new array and return it
			// add the new item in the array and also add the previous items
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
