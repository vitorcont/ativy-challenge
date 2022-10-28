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
		await AuthService.passwordRecovery(data.email);
		res.status(200).json({ message: "email sent" });
	} catch (err) {
		prox(err);
	}
});

export default router;
