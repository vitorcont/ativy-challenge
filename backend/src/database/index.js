import Sequelize from "sequelize";
import config from "config";

const instance = new Sequelize(
	config.get("mysql.database"),
	config.get("mysql.user"),
	config.get("mysql.password"),
	{
		host: config.get("mysql.host"),
		dialect: "mysql",
	},
);

export default instance;
