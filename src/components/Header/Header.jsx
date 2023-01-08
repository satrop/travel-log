import React from "react";
import icon from "../../assets/icon--globe.svg";

import "./header.scss";

const Header = () => {
	return (
		<header>
			<img src={icon} alt="" />
			my travel log
		</header>
	);
};

export default Header;
