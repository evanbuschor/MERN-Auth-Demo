import React, { useContext } from "react";
import { authContext } from "../../context/authContext";

function Private(props) {
	const { currentUser } = useContext(authContext);
	return <>{!!currentUser && props.children}</>;
}

export default Private;
