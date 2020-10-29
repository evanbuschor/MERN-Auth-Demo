import React from "react";
import "./Login.scss";

function Login() {
	return (
		<div className="login">
			<form className="login__form">
				<input
					placeholder="Email"
					type="email"
					className="login__input"></input>
				<input
					placeholder="Password"
					type="password"
					className="login__input"></input>
				<button className="login__button">Sign In</button>
			</form>
		</div>
	);
}

export default Login;
