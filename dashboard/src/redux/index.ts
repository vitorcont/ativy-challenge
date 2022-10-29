import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";
import tasksReducer from "./Tasks/reducer";
import userReducer from "./User/reducer";

const appReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	tasks: tasksReducer,
});

export const rootConfig = {
	key: "root",
	storage: storage,
	blacklist: ["i18n"],
};

const persisted = persistReducer(rootConfig, appReducer);

const storeCreator = createStore(
	persisted,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default storeCreator;
