import { USER_ADDRESS, USER_ME } from "./types";

const initialState: reducers.UserState = {
	me: null,
	address: null,
};

const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case USER_ME:
			state = {
				...state,
				me: action.payload,
			};
			break;
		case USER_ADDRESS:
			state = {
				...state,
				address: action.payload,
			};
			break;
		default:
			return state;
	}
	return state;
};

export default userReducer;
