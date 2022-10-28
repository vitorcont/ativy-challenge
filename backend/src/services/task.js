import taskModel from "../models/task.js";
import { uuid } from "uuidv4";
import { config } from "dotenv";
config();

const TaskService = {
	create: async (data) => {
		const result = await taskModel.create({
			id: uuid(),
			...data,
		});

		return result;
	},

	getById: async (taskId) => {
		const result = await taskModel.findOne({
			where: {
				id: taskId,
			},
		});

		if (!result) {
			throw new Error("task not found");
		}

		return result;
	},

	update: async (data) => {
		const fields = ["name", "description", "dueDate", "concludedAt"];
		const updatedData = {};

		const result = await taskModel.findOne({
			where: {
				id: data.id,
			},
		});

		if (!result) {
			throw new Error("task not found");
		}

		fields.map(async (field) => {
			const value = data[field];
			if (
				(typeof value === "string" && value.length > 0) ||
				typeof value === "number"
			) {
				updatedData[field] = value;
			}
		});

		if (Object.keys(updatedData).length < 1) {
			throw new Error("field validation error");
		}

		const finalData = {
			...updatedData,
			updatedAt: new Date().toISOString(),
		};

		await taskModel.update(finalData, {
			where: {
				id: data.id,
			},
		});

		return finalData;
	},
	remove: async (id) => {
		const data = await taskModel.destroy({
			where: {
				id,
			},
		});

		if (!data) {
			throw new Error("task not found");
		}
	},
	filterByParams: async (params) => {
		const result = await taskModel.findAll({
			where: params,
		});
		return result;
	},
	findByParam: async (params) => {
		const result = await taskModel.findOne({
			where: params,
		});
		return result;
	},
	listAll: async () => {
		return await taskModel.findAll();
	},
};

export default TaskService;
