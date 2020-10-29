import React, { useState, createContext } from "react";

const authContext = createContext();

function AuthContextProvider(props) {
	const [currentUser, setCurrentUser] = useState(undefined);
	return (
		<authContext.Provider value={{ currentUser, setCurrentUser }}>
			{props.children}
		</authContext.Provider>
	);
}

export { AuthContextProvider, authContext };
