import { Router } from "express";
import "module-alias/register.js";

import UserService from "../services/user.js";
import { authenticateUser } from "../middleware/authentication.js";
import TaskService from "../services/task.js";
import { getToken } from "../utils/auth.js";

const router = Router();

router.get("/", authenticateUser, async (req, res, prox) => {
	try {
		let response;
		if (Object.keys(req.query).length) {
			response = await TaskService.filterByParams(req.query);
		} else {
			response = await TaskService.listAll();
		}

		res.status(200).json(response);
	} catch (err) {
		prox(err);
	}
});

router.post("/", authenticateUser, async (req, res, prox) => {
	try {
		const token = getToken(req);
		const user = await UserService.findByParam({ token });
		const taskToCreate = { ...req.body, userId: user.id };
		const taskData = await TaskService.create(taskToCreate);
		res.status(200).json(taskData);
	} catch (err) {
		prox(err);
	}
});

router.get("/:id", authenticateUser, async (req, res, prox) => {
	const id = req.params.id;
	try {
		const userData = await TaskService.getById(id);
		res.status(200).json(userData);
	} catch (err) {
		prox(err);
	}
});

router.put("/:id", authenticateUser, async (req, res, prox) => {
	const id = req.params.id;
	const data = req.body;
	try {
		const taskData = await TaskService.update({ ...data, id: id });
		res.status(200).json(taskData);
	} catch (err) {
		prox(err);
	}
});

router.delete("/:id", authenticateUser, async (req, res, prox) => {
	const id = req.params.id;
	try {
		await TaskService.remove(id);
		res.status(200).json({ message: "task deleted" });
	} catch (err) {
		prox(err);
	}
});

export default router;
