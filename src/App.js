import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CardContainer from "./components/CardContainer/CardContainer";
import { useState } from "react";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
	const [cities, setCities] = useState([]);

	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id !== id));
	}

	function onSearch(city) {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
		)
			.then((r) => r.json())
			.then((json) => {
				if (json.main !== undefined) {
					const city = {
						name: json.name,
						min: Math.round(json.main.temp_min),
						max: Math.round(json.main.temp_max),
						temp: Math.round(json.main.temp),
						feels: Math.round(json.main.feels_like),
						pressure: json.main.pressure,
						humidity: json.main.humidity,
						weather: json.weather[0].main,
						description: json.weather[0].description,
						country: json.sys.country,
						image: json.weather[0].icon,
						id: json.sys.id,
					};
					setCities([...cities, city]);
				} else {
					alert("City not found");
				}
			});
	}

	return (
		<div className='App'>
			<Navbar onSearch={onSearch} />
			<CardContainer cities={cities} onClose={onClose} />
		</div>
	);
}

export default App;
