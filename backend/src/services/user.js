import userModel from "../models/user.js";
import { uuid } from "uuidv4";
import { hash } from "../utils/hash.cjs";
import { config } from "dotenv";
config();

const UserService = {
	create: async (data) => {
		const repeated = await userModel.findOne({
			where: {
				email: data.email,
			},
		});
		if (repeated) {
			throw new Error("user already exists");
		}
		const hashedPassword = await hash(data.password, 8);

		delete data.password;

		const result = await userModel.create({
			id: uuid(),
			password: hashedPassword,
			...data,
		});

		return result;
	},
	getById: async (id) => {
		const result = await userModel.findOne({
			where: {
				id,
			},
		});

		if (!result) {
			throw new Error("user not found");
		}

		delete result.token;
		delete result.password;
		return result;
	},
	update: async (data) => {
		const fields = ["name", "email", "password", "birth"];
		const updatedData = {};
		const result = await userModel.findOne({
			where: {
				id: data.id,
			},
		});

		if (!result) {
			throw new Error("user not found");
		}
		await Promise.all(
			fields.map(async (field) => {
				const value = data[field];
				if (field === "password" && value) {
					const hashedPassword = await hash(value, 8);

					updatedData[field] = hashedPassword;
					await userModel.update(
						{
							...updatedData,
							updatedAt: new Date().toISOString(),
						},
						{
							where: {
								id: data.id,
							},
						},
					);
				}
				if (
					(typeof value === "string" && value.length > 0) ||
					typeof value === "number"
				) {
					updatedData[field] = value;
					await hash("1", 8);
				}
			}),
		);

		if (Object.keys(updatedData).length < 1) {
			throw new Error("field validation error");
		}

		const finalData = {
			...updatedData,
			updatedAt: new Date().toISOString(),
		};

		await userModel.update(
			{
				finalData,
			},
			{
				where: {
					id: data.id,
				},
			},
		);

		return finalData;
	},

	remove: async (id) => {
		const data = await userModel.destroy({
			where: {
				id,
			},
		});

		if (!data) {
			throw new Error("user not found");
		}
	},

	updateToken: async (id, token) => {
		return await userModel.update(
			{
				token,
			},
			{
				where: {
					id,
				},
			},
		);
	},
	filterByParams: async (params) => {
		const result = await userModel.find({
			where: params,
		});
		return result;
	},
	findByParam: async (params) => {
		const result = await userModel.findOne({
			where: params,
		});
		if (!result) {
			throw new Error("user not found");
		}
		return result;
	},
	listAll: async () => {
		return await userModel.findAll();
	},
};

export default UserService;
