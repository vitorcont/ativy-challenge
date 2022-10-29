export as namespace models;

type AuthRequest = {
	email: string;
	password: string;
};

export type AuthResponse = {
	token: string | null;
};

export type Route = {
	id: string;
	name: string;
	route: string;
	items: SubRoute[];
};

export type SubRoute = {
	id: string;
	name: string;
	route: string;
};
