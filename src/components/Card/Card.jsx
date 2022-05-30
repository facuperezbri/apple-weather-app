import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
	var today = new Date().getHours();
	return (
		<div>
			<button className={style.cardButton} onClick={props.onClose}>
				X
			</button>
			<div
				className={`${style.cardInfoContainer} ${
					today <= 7 && today <= 19 ? style.day : style.night
				}`}
			>
				<h3 className={style.cardTitle}>{props.name}</h3>
				<h4 className={style.cardTemperature}>{props.temp}º</h4>
				<img
					className={style.iconoClima}
					src={"http://openweathermap.org/img/wn/" + props.image + "@2x.png"}
					width='80'
					height='80'
					alt='Weather'
				/>
				<h5>{props.description}</h5>
				<div className={style.minmaxContainer}>
					<p> H:{props.max}º</p>
					<p> L:{props.min}º</p>
				</div>
			</div>
		</div>
	);
}
