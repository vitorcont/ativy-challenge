const routes: models.Route[] = [
	{
		id: "auth",
		name: "auth",
		route: "/",
		items: [
			{
				id: "login",
				name: "login",
				route: "/",
			},
			{
				id: "registration",
				name: "registration",
				route: "/registration",
			},
			{
				id: "recovery",
				name: "recovery",
				route: "/recovery",
			},
		],
	},
	{
		id: "content",
		name: "content",
		route: "/content",
		items: [
			{
				id: "list",
				name: "list",
				route: "/list",
			},
		],
	},
];

const RouteService = {
	getRoutes: (): models.Route[] => routes,
	getRouteStack: (route: string): models.Route =>
		routes.find((o) => o.name === route) as models.Route,
	getRouteStackPath: (name: string, routeId: string): string => {
		const route = routes.find((o) => o.name === name);
		return `${route?.route}${
			route?.items.find((o) => o.name === routeId)?.route
		}`;
	},
	getStackPath: (name: string): string => {
		return `${routes.find((o) => o.name === name)?.route}`;
	},
};

export default RouteService;
