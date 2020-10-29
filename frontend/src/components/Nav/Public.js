import React, { useContext } from "react";
import { authContext } from "../../context/authContext";

function Public(props) {
	const { currentUser } = useContext(authContext);

	return <>{!currentUser && props.children}</>;
}

export default Public;
