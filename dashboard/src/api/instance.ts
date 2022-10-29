import { StorageEnum } from "./../models/enumerators/storage";
import Axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from "axios";

import handleAxiosError from "@portal/services/api";

import { API_TIMEOUT, API_URL } from "../config/env";
import StorageService from "@portal/services/storage";

interface IHandler {
	// eslint-disable-next-line no-unused-vars
	unauthorizedError: (err: AxiosError) => void;
}

const handler: IHandler = {
	unauthorizedError: async () => {
		// todo: handle error
	},
};

const axiosInstance = Axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		mode: "cors",
	},
	timeout: parseInt(API_TIMEOUT, 1000),
});

axiosInstance.interceptors.request.use((request) => {
	const token = StorageService.getItem(StorageEnum.TOKEN);
	request.headers.Authorization = token ? `Bearer ${token}` : undefined;

	return request;
});

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
	console.log(API_TIMEOUT, API_URL);
	return axiosInstance;
};

export default getInstance;
