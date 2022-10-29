export as namespace reducers;

export type AuthState = {
	token: string | null;
};

export type rootReducer = {
	auth: AuthState;
	loading: number;
};
