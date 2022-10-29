import { StorageEnum } from "./../models/enumerators/storage";
import Axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { getItem, api as handleAxiosError } from "~/services";

import { API_TIMEOUT, API_URL } from "../config/env";

interface IHandler {
	// eslint-disable-next-line no-unused-vars
	unauthorizedError: (err: AxiosError) => void;
}

const handler: IHandler = {
	unauthorizedError: async () => {
		// todo: handle error
	},
};

const token = getItem(StorageEnum.TOKEN);

const axiosInstance = Axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		mode: "cors",
		Authorization: `Bearer ${token}`,
	},
	timeout: parseInt(API_TIMEOUT, 1000),
});

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			localStorage.removeItem(StorageEnum.TOKEN);
			window.location.replace("/login");
		}
	},
);

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (err) => {
		handler.unauthorizedError(err);

		return Promise.reject(handleAxiosError(err));
	},
);

export const setHandleUnauthorizedError = (fn: () => void): void => {
	handler.unauthorizedError = fn;
};

export const getInstance = (): AxiosInstance => {
	return axiosInstance;
};

export default getInstance;
