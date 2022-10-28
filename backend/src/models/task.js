import Sequelize from "sequelize";
import instance from "../database/index.js";

const cols = {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	userId: {
		type: Sequelize.STRING,
		references: {
			model: "users",
			key: "id",
		},
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	dueDate: {
		type: Sequelize.STRING,
		allowNull: true,
	},
	concludedAt: {
		type: Sequelize.STRING,
		allowNull: true,
	},
};

const options = {
	freezeTableName: true,
	tableName: "tasks",
	timestamp: true,
	createdAt: "createdAt",
	updatedAt: "updatedAt",
};

const model = instance.define("tasks", cols, options);

export default model;
