import { Router } from "express";
import "module-alias/register.js";

import UserService from "../services/user.js";
import { authenticateUser } from "../middleware/authentication.js";

const router = Router();

router.get("/", async (req, res, prox) => {
	try {
		const response = await UserService.listAll();
		const filteredResponse = response.map((item) => ({
			id: item.id,
			name: item.name,
			email: item.email,
			profileType: item.profileType,
			createdAt: item.createdAt,
			updatedAt: item.updatedAt,
		}));
		res.status(200).json(filteredResponse);
	} catch (err) {
		prox(err);
	}
});

router.get("/me", authenticateUser, async (req, res, prox) => {
	// const authToken = req.headers.authorization;
	// const token = authToken.split(" ")[1];
	// const response = await tabela.findByToken(token);
	// if (token) {
	// 	res.status(200).json({
	// 		id: response.id,
	// 		name: response.name,
	// 		email: response.email,
	// 		profileType: response.profileType,
	// 		createdAt: response.createdAt,
	// 		updatedAt: response.updatedAt,
	// 	});
	// } else {
	// 	res.status(400).json({ message: "user_not_found" });
	// }
});

router.post("/", async (req, res, prox) => {
	try {
		let data = req.body;
		const userData = await UserService.create(data);
		res.status(200).json({
			name: userData.name,
			email: userData.email,
			birth: userData.birth,
			createdAt: userData.createdAt,
			updatedAt: userData.updatedAt,
		});
	} catch (err) {
		prox(err);
	}
});

router.get("/:id", async (req, res, prox) => {
	const id = req.params.id;
	try {
		const userData = await UserService.getById(id);
		res.status(200).json(userData);
	} catch (err) {
		prox(err);
	}
});

router.put("/:id", authenticateUser, async (req, res, prox) => {
	const id = req.params.id;
	const data = req.body;
	try {
		const userData = await UserService.update({ ...data, id: id });
		res.status(200).json({ ...userData, password: undefined });
	} catch (err) {
		prox(err);
	}
});

router.delete("/:id", authenticateUser, async (req, res, prox) => {
	const id = req.params.id;
	try {
		await UserService.remove(id);
		res.status(200).json({ message: "user deleted" });
	} catch (err) {
		prox(err);
	}
});

export default router;
