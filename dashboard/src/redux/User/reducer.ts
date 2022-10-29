import { USER_ME } from "./types";

const initialState: reducers.UserState = {
	me: null,
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case USER_ME:
			state = {
				...state,
				me: action.payload,
			};
			break;
		default:
			return state;
	}
	return state;
};

export default userReducer;
