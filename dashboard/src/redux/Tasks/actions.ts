import { TASKS_GET } from "./types";
import ToastService from "@portal/services/toast";
import TasksApi from "@portal/api/tasks";

export const getTasks =
	(userId: string, callback?: () => void) => async (dispatch: any) => {
		try {
			const payload = await TasksApi.get(userId);
			dispatch({
				payload,
				type: TASKS_GET,
			});
			if (callback) {
				callback();
			}
		} catch (err) {
			ToastService.error(
				"Ops, não foi possívei recuperar a lista de tarefas no momento!",
			);
		}
	};

export const updateTask =
	(data: models.Task, callback?: () => void) => async (dispatch: any) => {
		try {
			await TasksApi.update(data);
			if (callback) {
				callback();
			}
			if (data.concludedAt) {
				ToastService.success(
					"Parabéns!! Você concluiu mais uma de suas atividades!",
				);
			}
		} catch (err) {
			ToastService.error(
				"Ops, não foi possível atualizar essa atividade no momento.",
			);
		}
	};
