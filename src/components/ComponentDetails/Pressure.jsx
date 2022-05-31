import React from "react";

export default function Pressure({ pressure }) {
	var hour = new Date().getHours();
	return (
		<div
			className={`${style.card} ${
				hour >= 7 && hour <= 19 ? style.day : style.night
			}`}
		>
			<h3>Pressure</h3>
		</div>
	);
}
