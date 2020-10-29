import React from "react";
import "./NavLink.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

function Nav_Link({ value, to, onClick }) {
	const history = useHistory();
	function handleClick() {
		// if a 'to' prop passed in navigate to it.
		to && history.push(to);

		// Allow the user to opt into normal onClick events as well
		onClick && onClick();
	}

	return (
		<button className="nav-link" onClick={handleClick}>
			{value}
		</button>
	);
}

Nav_Link.propTypes = {
	value: PropTypes.string.isRequired,
	to: PropTypes.string,
};

export default Nav_Link;
