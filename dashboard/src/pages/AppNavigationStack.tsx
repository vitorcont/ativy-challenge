import RouteService from "@portal/services/routes";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthNavigationStack from "./Auth/AuthNavigationStack";

const AppNavigationStack = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={RouteService.getStackPath("auth")}>
					<AuthNavigationStack />
				</Route>
				<Route path={RouteService.getStackPath("content")}>
					{/* <ConfirmNavigationStack /> */}
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default AppNavigationStack;
