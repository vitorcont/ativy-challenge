import getInstance from "./instance";

const TasksApi = {
	get: async (userId: string) => {
		const instance = await getInstance();
		const { data } = await instance.get("/task", {
			params: { userId },
		});

		return data;
	},
	getById: async (id: string) => {
		const instance = await getInstance();
		const { data } = await instance.get(`/task/${id}`);

		return data;
	},
	update: async (taskData: models.Task) => {
		const instance = await getInstance();
		const { data } = await instance.put(`/task/${taskData.id}`, taskData);

		return data;
	},
	create: async (task: models.Task) => {
		const instance = await getInstance();
		const { data } = await instance.post("/task", task);

		return data;
	},
	delete: async (id: string) => {
		const instance = await getInstance();
		await instance.delete(`/task/${id}`);
	},
};

export default TasksApi;
