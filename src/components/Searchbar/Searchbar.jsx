import React, { useState } from "react";
import style from "./Searchbar.module.css";

export default function Searchbar({ onSearch }) {
	const [city, setCity] = useState("");
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(city);
				setCity("");
			}}
		>
			<input
				type='text'
				placeholder='Search for a city...'
				onChange={(e) => setCity(e.target.value)}
				value={city}
			/>
		</form>
	);
}
