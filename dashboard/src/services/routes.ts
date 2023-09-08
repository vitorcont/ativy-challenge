const routes: models.Route[] = [
	{
		id: "auth",
		name: "auth",
		route: "/apps/ativy-todo",
		items: [
			{
				id: "login",
				name: "login",
				route: "",
			},
			{
				id: "registration",
				name: "registration",
				route: "-registration",
			},
			{
				id: "recovery",
				name: "recovery",
				route: "-recovery",
			},
		],
	},
	{
		id: "content",
		name: "content",
		route: "/apps/ativy-todo/content",
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
	navigate: (route: string, subRoute: string) => {
		console.log(RouteService.getRouteStackPath(route, subRoute));
		window.location.href = RouteService.getRouteStackPath(route, subRoute);
	},
	logout: () => {
		window.location.href = "/";
	},
};

export default RouteService;
