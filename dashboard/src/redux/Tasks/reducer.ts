import { TASKS_GET } from "./types";

const initialState: reducers.TasksState = {
	taskList: [],
};

const tasksReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case TASKS_GET:
			state = {
				...state,
				taskList: action.payload,
			};
			break;
		default:
			return state;
	}
	return state;
};

export default tasksReducer;
