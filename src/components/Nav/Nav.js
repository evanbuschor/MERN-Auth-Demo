import React from "react";
import NavLink from "../NavLink";
import "./Nav.scss";
import Private from "./Private";
import Public from "./Public";

function Nav() {
	return (
		<div className="nav">
			<div className="nav__title">Auth Demo App</div>
			<div className="nav__button-container">
				<Public>
					<NavLink to="/auth/login" value="Login" />
					<NavLink to="/auth/register" value="Register" />
				</Public>
				<Private>
					<NavLink to="/auth/logout" value="Logout" />
					<NavLink to="/user/profile" value="profile" />
				</Private>
			</div>
		</div>
	);
}

export default Nav;
