import { StorageEnum } from "@portal/models/enumerators/storage";

import AuthApi from "@portal/api/auth";
import StorageService from "@portal/services/storage";

import { AUTH_LOGIN } from "./types";
import ToastService from "@portal/services/toast";

export const authenticate =
	(params: models.AuthRequest, callback?: () => void) =>
	async (dispatch: any) => {
		try {
			console.log(params);
			const payload = await AuthApi.login(params);
			StorageService.setItem(StorageEnum.TOKEN, payload.token);
			dispatch({
				payload,
				type: AUTH_LOGIN,
			});
			if (callback) {
				callback();
			}
			ToastService.success("Logado com sucesso!");
		} catch (err) {
			console.log(err);
			ToastService.error(
				"Email ou senha incorretos, verifique seus dados e tente novamente.",
			);
		}
	};
