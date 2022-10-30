import RouteService from "@portal/services/routes";
import { getMe } from "./../User/actions";
import { StorageEnum } from "@portal/models/enumerators/storage";

import AuthApi from "@portal/api/auth";
import StorageService from "@portal/services/storage";

import { AUTH_LOGIN } from "./types";
import ToastService from "@portal/services/toast";

export const authenticate =
	(params: models.AuthRequest, callback?: () => void) =>
	async (dispatch: any) => {
		try {
			const payload = await AuthApi.login(params);
			ToastService.success("Logado com sucesso!");
			StorageService.setItem(StorageEnum.TOKEN, payload.token);
			dispatch({
				payload,
				type: AUTH_LOGIN,
			});
			RouteService.navigate("content", "list");
			if (callback) {
				callback();
			}
		} catch (err) {
			ToastService.error(
				"Email ou senha incorretos, verifique seus dados e tente novamente.",
			);
		}
	};

export const logout = () => async (dispatch: any) => {
	RouteService.logout();
	StorageService.clear();
};
