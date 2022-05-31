import React from "react";
import style from "./CardDetail.module.css";

export default function CardDetail({ city }) {
	var hour = new Date().getHours();
	function renderSwitch(param) {
		switch (param) {
			case "haze":
				return (
					<video autoPlay muted loop>
						<source
							src='https://res.cloudinary.com/ddbboqiz8/video/upload/v1653958150/Video/haze_szcg4m.mp4'
							type='video/mp4'
						/>
					</video>
				);
			case "clear sky":
				return hour >= 7 && hour <= 19 ? (
					<video autoPlay muted loop>
						<source
							src='https://res.cloudinary.com/ddbboqiz8/video/upload/v1653955097/pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-6772135_wdizxs.mp4'
							type='video/mp4'
						/>
					</video>
				) : (
					<video autoPlay muted loop>
						<source
							src='https://res.cloudinary.com/ddbboqiz8/video/upload/v1653953915/Pexels_Videos_2792967_hvfmoh.mp4'
							type='video/mp4'
						/>
					</video>
				);
			case "overcast clouds":
				return hour >= 7 && hour <= 19 ? (
					<video autoPlay muted loop>
						<source
							src='https://res.cloudinary.com/ddbboqiz8/video/upload/v1653955097/pexels-miguel-a%CC%81-padrin%CC%83a%CC%81n-6772135_wdizxs.mp4'
							type='video/mp4'
						/>
					</video>
				) : (
					<video autoPlay muted loop>
						<source
							src='https://res.cloudinary.com/ddbboqiz8/video/upload/v1653953915/Pexels_Videos_2792967_hvfmoh.mp4'
							type='video/mp4'
						/>
					</video>
				);
			default:
				return "foo";
		}
	}
	return (
		<div className={`${style.cardDetailContainer}`}>
			<div className={style.mainContainer}>
				{renderSwitch(city.description)}
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
