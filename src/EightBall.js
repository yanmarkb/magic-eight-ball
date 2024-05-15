import React, { useState } from "react";
import "./Eightball.css";

function EightBall(props) {
	const [color, setColor] = useState("black");
	const [message, setMessage] = useState("Think of a Question");

	function handleClick() {
		const randomIndex = Math.floor(Math.random() * props.answers.length);
		const { msg, color } = props.answers[randomIndex];
		setColor(color);
		setMessage(msg);
	}

	return (
		<div
			className="EightBall"
			style={{ backgroundColor: color }}
			onClick={handleClick}>
			<p>{message}</p>
		</div>
	);
}

export default EightBall;
