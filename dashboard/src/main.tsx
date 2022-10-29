import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { Provider } from "react-redux";
import storeCreator from "./redux";
import { persistStore } from "redux-persist";
import AppNavigationStack from "./pages/AppNavigationStack";
import { ToastContainer } from "react-toastify";

const store = storeCreator;
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer />
			<PersistGate loading={null} persistor={persistor}>
				<AppNavigationStack />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
