import { Router } from "express";
import "module-alias/register.js";

import UserService from "../services/user.js";
import { authenticateUser } from "../middleware/authentication.js";
import { getToken } from "../utils/auth.js";

const router = Router();

router.get("/", authenticateUser, async (req, res, prox) => {
	try {
		const response = await UserService.listAll();
		const filteredResponse = response.map((item) => ({
			id: item.id,
			name: item.name,
			email: item.email,
			birth: item.birth,
			zipcode: item.zipcode,
			street: item.street,
			district: item.district,
			city: item.city,
			state: item.state,
			createdAt: item.createdAt,
			updatedAt: item.updatedAt,
		}));
		res.status(200).json(filteredResponse);
	} catch (err) {
		prox(err);
	}
});

router.get("/me", authenticateUser, async (req, res, prox) => {
	try {
		const token = getToken(req);
		const response = await UserService.findByParam({ token });
		res.status(200).json({
			id: response.id,
			name: response.name,
			email: response.email,
			birth: response.birth,
			zipcode: response.zipcode,
			street: response.street,
			district: response.district,
			city: response.city,
			state: response.state,
			createdAt: response.createdAt,
			updatedAt: response.updatedAt,
		});
	} catch (err) {
		prox(err);
	}
});

router.post("/", async (req, res, prox) => {
	try {
		let data = req.body;
		const userData = await UserService.create(data);
		res.status(200).json({
			name: userData.name,
			email: userData.email,
			birth: userData.birth,
			zipcode: userData.zipcode,
			street: userData.street,
			district: userData.district,
			city: userData.city,
			state: userData.state,
			createdAt: userData.createdAt,
			updatedAt: userData.updatedAt,
		});
	} catch (err) {
		prox(err);
	}
});

router.get("/:id", authenticateUser, async (req, res, prox) => {
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
		res.status(200).json(userData);
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
