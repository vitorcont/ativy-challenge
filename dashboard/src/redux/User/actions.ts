import RouteService from "@portal/services/routes";
import { StorageEnum } from "@portal/models/enumerators/storage";

import AuthApi from "@portal/api/auth";
import StorageService from "@portal/services/storage";

import { USER_ME } from "./types";
import ToastService from "@portal/services/toast";
import UserApi from "@portal/api/user";

export const getMe = (callback?: () => void) => async (dispatch: any) => {
	try {
		const payload = await UserApi.getMe();
		dispatch({
			payload,
			type: USER_ME,
		});
		if (callback) {
			callback();
		}
	} catch (err) {
		ToastService.error(
			"Não foi possívei recuperar os dados do usuário no momento!",
		);
	}
};

export const createUser =
	(userData: models.User, callback?: () => void) => async (dispatch: any) => {
		try {
			const payload = await UserApi.create(userData);
			if (callback) {
				callback();
			}
			ToastService.success("Usuário criado com sucesso!");
			setTimeout(() => {
				RouteService.logout();
			}, 3000);
		} catch (err) {
			ToastService.error("Ops, não foi possívei criar seu usuário no momento.");
		}
	};
