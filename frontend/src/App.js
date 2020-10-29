import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Login from "./components/Pages/Login";

function App() {
	return (
		<div className="app">
			<Nav />
			<Switch>
				<Route path="/auth/login">
					<Login></Login>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
