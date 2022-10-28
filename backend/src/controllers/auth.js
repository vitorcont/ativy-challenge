import { Router } from "express";
import AuthService from "../services/auth.js";

const router = Router();

router.post("/", async (req, res, prox) => {
	try {
		const data = req.body;
		const authData = await AuthService.login(data);
		res.status(200).json({ token: authData });
	} catch (err) {
		prox(err);
	}
});

router.post("/recovery", async (req, res, prox) => {
	try {
		const data = req.body;
		const authData = new Auth(data);
		await authData.passwordRecovery();
		res.status(200).json();
	} catch (err) {
		prox(err);
	}
});

export default router;
