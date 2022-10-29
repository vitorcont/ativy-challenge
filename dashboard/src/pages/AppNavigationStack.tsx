import RouteService from "@portal/services/routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthNavigationStack from "./Auth/AuthNavigationStack";
import ContentNavigationStack from "./Content/ContentNavigationStack";

const AppNavigationStack = () => {
	return (
		<BrowserRouter>
			<AuthNavigationStack />
			<ContentNavigationStack />
		</BrowserRouter>
	);
};

export default AppNavigationStack;
