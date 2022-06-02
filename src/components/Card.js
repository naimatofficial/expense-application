import React from "react";
import "./Card.css";

function Card(props) {
	const classes = "card " + props.ClassName;
	return <div className={classes}>{props.children}</div>;
}

export default Card;
