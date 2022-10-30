import RouteService from "@portal/services/routes";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Recovery from "./Recovery/Recovery";
import Registration from "./Registration/Registration";

const AuthNavigationStack = () => {
	return (
		<Switch>
			<Route path={RouteService.getRouteStackPath("auth", "login")}>
				<Login />
			</Route>
			<Route path={RouteService.getRouteStackPath("auth", "recovery")}>
				<Recovery />
			</Route>
			<Route path={RouteService.getRouteStackPath("auth", "registration")}>
				<Registration />
			</Route>
		</Switch>
	);
};

export default AuthNavigationStack;
