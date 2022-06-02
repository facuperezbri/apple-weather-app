import React, { useEffect } from "react";
import style from "./CardDetail.module.css";

export default function CardDetail({ city }) {
	var hour = new Date().getHours();

	const weatherBG = () => {
		switch (city.weather) {
			case "Clear": {
				if (hour > 7 && hour < 19) {
					return style.clearDay;
				} else return style.clearNight;
			}
			case "Clouds": {
				if (hour > 7 && hour < 19) {
					return style.cloudsDay;
				} else return style.cloudsNight;
			}
			default:
				break;
		}
	};

	return (
		<div className={`${style.cardDetailContainer} ${weatherBG()}`}>
			<div className={style.mainContainer}>
				<h3 className={style.name}>{city.name}</h3>
				<h4 className={style.temp}>{city.temp}º</h4>
				<h5 className={style.description}>{city.description}</h5>
				<div className={style.minmaxContainer}>
					<p>H:{city.max}º</p>
					<p>L:{city.min}º</p>
				</div>
			</div>
			<div class={style.plusInfoContainer}>
				<div
					className={`${style.plusInfo} ${
						hour > 7 && hour < 19 ? style.day : style.night
					}`}
				>
					<p>Feels</p>
					<span>{city.feels}º</span>
				</div>
				<div
					className={`${style.plusInfo} ${
						hour > 7 && hour < 19 ? style.day : style.night
					}`}
				>
					<p>Humidity</p>
					<span>{city.humidity}%</span>
				</div>
				<div
					className={`${style.plusInfo} ${
						hour > 7 && hour < 19 ? style.day : style.night
					}`}
				>
					<p>Pressure</p>
					<span>{city.pressure}</span>
				</div>
			</div>
		</div>
	);
}
