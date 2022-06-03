import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label htmlFor="filter">Select your Year</label>
				<select
					id="filter"
					value={props.selected}
					onChange={dropdownChangeHandler}
				>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
}

export default ExpensesFilter;
