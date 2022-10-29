import { useSelector } from "react-redux";

export const useReduxState = () =>
	useSelector((state: reducers.rootReducer) => state);
