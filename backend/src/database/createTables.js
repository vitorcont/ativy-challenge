import userModel from "../models/user.js";
import taskModel from "../models/task.js";

const models = [userModel, taskModel];

const createTables = async () => {
	models.map((item) => {
		item
			.sync()
			.then(() => console.log("Tables Created"))
			.catch();
	});
};

createTables();
