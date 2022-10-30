import Sequelize from "sequelize";
import instance from "../database/index.js";

const cols = {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	birth: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	zipcode: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	street: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	district: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	token: {
		type: Sequelize.STRING,
		allowNull: true,
	},
};

const options = {
	freezeTableName: true,
	tableName: "users",
	timestamp: true,
	createdAt: "createdAt",
	updatedAt: "updatedAt",
};

const model = instance.define("users", cols, options);

export default model;
