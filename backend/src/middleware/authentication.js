import { config } from "dotenv";
config();
import tokenVerifier from "jsonwebtoken";
import UserService from "../services/user.js";
import { getToken } from "../utils/auth.js";

export const authenticateUser = async (req, res, prox) => {
	try {
		const token = getToken(req);
		tokenVerifier.verify(token, process.env.JWT_TOKEN);
		const user = await UserService.findByParam({ token });
		if (!user) {
			throw Error();
		}

		return prox();
	} catch (err) {
		return res.status(401).json({ message: "unauthorized" });
	}
};
