import RouteService from "@portal/services/routes";
import { Switch, Route } from "react-router-dom";
import List from "./List/List";

const ContentNavigationStack = () => {
	return (
		<Switch>
			<Route path={RouteService.getRouteStackPath("content", "list")}>
				<List />
			</Route>
		</Switch>
	);
};

export default ContentNavigationStack;
