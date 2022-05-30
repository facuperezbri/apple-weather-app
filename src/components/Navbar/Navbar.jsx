import React from "react";
import image from "../../assets/henry-logo.png";
import Searchbar from "../Searchbar/Searchbar";
import style from "./Navbar.module.css";

export default function Navbar({ onSearch }) {
	return (
		<header>
			<nav>
				<a href='https://www.soyhenry.com/' target='_blank' rel='noreferrer'>
					{" "}
					<img className={style.navLogo} src={image} alt='Henry Logo' />
				</a>

				<ul className={style.navList}>
					<li>Home</li>
					<li>About</li>
				</ul>
			</nav>
			<Searchbar onSearch={onSearch} />
		</header>
	);
}
