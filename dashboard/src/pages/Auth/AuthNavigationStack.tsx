import RouteService from "@portal/services/routes";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";

const AuthNavigationStack = () => {
	return (
		<Switch>
			<Route path={RouteService.getRouteStackPath("auth", "login")}>
				<Login />
			</Route>
		</Switch>
	);
};

export default AuthNavigationStack;
