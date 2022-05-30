import React from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.css";

export default function CardContainer({ cities, onClose }) {
	return (
		<div className={style.cardContainer}>
			{cities.map((c) => (
				<Card
					key={c.id}
					name={c.name}
					temp={c.temp}
					weather={c.weather}
					image={c.image}
					id={c.id}
					onClose={() => onClose(c.id)}
					description={c.description}
					min={c.min}
					max={c.max}
				/>
			))}
		</div>
	);
}
