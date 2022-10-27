import userModel from "../models/user.js";
const models = [userModel];

const createTables = async () => {
	models.map((item) => {
		item
			.sync()
			.then(() => console.log("Tabelas Criadas"))
			.catch();
	});
};

createTables();
