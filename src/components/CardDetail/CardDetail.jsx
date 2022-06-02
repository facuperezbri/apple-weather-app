import React, { useEffect } from "react";
import style from "./CardDetail.module.css";

export default function CardDetail({ city }) {
	var hour = new Date().getHours();

	return (
		<div className={`${style.cardDetailContainer}`}>
			<div className={style.mainContainer}>
				<h3 className={style.name}>{city.name}</h3>
				<h4 className={style.temp}>{city.temp}º</h4>
				<h5 className={style.description}>{city.description}</h5>
				<div className={style.minmaxContainer}>
					<p>H:{city.max}º</p>
					<p>L:{city.min}º</p>
				</div>
			</div>
		</div>
	);
}
