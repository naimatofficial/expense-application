import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

	const totalMaximum = Math.max(...dataPointValues);
	console.log(totalMaximum);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint, index) => (
				<ChartBar
					key={index}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
