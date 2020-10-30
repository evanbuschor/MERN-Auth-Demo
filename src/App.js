import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import Login from "./components/Pages/Login";
import InfoPanel from "./components/InfoPanel";

function App() {
	return (
		<div className="app">
			<Nav />
			<Switch>
				<Route path="/auth/login">
					<Login></Login>
				</Route>
			</Switch>
			<InfoPanel />
		</div>
	);
}

export default App;
