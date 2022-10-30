export as namespace reducers;

export type AuthState = {
	token: string | null;
};

export type UserState = {
	me: models.User | null;
	address: models.Address | null;
};

export type TasksState = {
	taskList: models.Task[];
};

export type rootReducer = {
	auth: AuthState;
	user: UserState;
	tasks: TasksState;
	loading: number;
};
