import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";

const appReducer = combineReducers({
	auth: authReducer,
});

export const rootConfig = {
	key: "root",
	storage: storage,
	blacklist: ["i18n", "loading"],
};

const persisted = persistReducer(rootConfig, appReducer);

const storeCreator = createStore(
	persisted,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default storeCreator;
