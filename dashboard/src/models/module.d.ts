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

export type User = {
	id?: string;
	name: string;
	email: string;
	birth: string;
	zipcode: string;
	street: string;
	district: string;
	city: string;
	state: string;
};

export type Address = {
	cep: string;
	logradouro: string;
	bairro: string;
	localidade: string;
	uf: string;
};

export type Task = {
	id?: string;
	userId?: string;
	name?: string;
	description?: string;
	dueDate?: string;
	concludedAt?: string;
	createdAt?: string;
	updatedAt?: string;
};
