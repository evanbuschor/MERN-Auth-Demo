import React from "react";
import "./Nav.scss";

function Nav() {
	return (
		<div className="nav">
			<div className="nav__title">Auth Demo App</div>
			<div className="nav__button-container">
				<button className="nav__button">Second</button>
				<button className="nav__button">Third</button>
			</div>
		</div>
	);
}

export default Nav;
