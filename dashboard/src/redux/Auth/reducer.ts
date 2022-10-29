import { AUTH_LOGIN } from './types';

const initialState: reducers.AuthState = {
  token: null
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOGIN:
      state = {
        ...state,
        token: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default authReducer;
